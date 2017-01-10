
var PlatformQQBrowser = function(t) {
    function e() {
        t.call(this),
            this._urlRoot = "http://119.29.224.164/qweb",
            this._appId = "5295796432",
            this.areaId = 6,
            this._pf = "qweb",
            this.loginCallBackObj = {}
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.isQQBrowser = function() {
            var t = navigator.userAgent,
                e = /micromessenger/gi.test(t),
                a = /mqq/gi.test(t),
                i = /mobile.*qq/gi.test(t);
            return (i || e) && (a = !1),
                a
        },
        i.isSupportSwitchAccount = function() {
            return !0
        },
        i.isSupportToDesktop = function() {
            return this.isQQBrowser()
        },
        i.isSupportSubscribe = function() {
            return this.isQQBrowser()
        },
        i.isSupportShare = function() {
            return !0
        },
        i.ToDesktop = function(t, e) {
            this._sdk.sendToDesktop({},
                function(a, i) {
                    var n = 1 === a;
                    n ? Utils.toast("成功发送到桌面") : Utils.toast("发送到桌面失败"),
                        t && (e ? t.apply(e, n) : t.apply(n))
                })
        },
        i.init = function() {
            var t = this;
            this._userInfo = {},
                this._userInfo.platformName = this._pf,
                PlatformManager.instance.myself = this._userInfo;
            var e = window;
            this._sdk = e.sdk = e.browser.x5gameplayer;
            var a = function(e) {
                if (e && 0 === e.result) {
                    var a = t._loginType;
                    a || (a = UserDefault.instance.getStringForKey("loginType"));
                    var i = (e.msg, e.qbopenid),
                        n = e.qbopenkey,
                        s = e.refreshToken,
                        r = e.nickName,
                        o = e.avatarUrl,
                        l = e.rspsig;
                    t.store(a, "openid", i),
                        t.store(a, "openkey", n),
                        t.store(a, "refreshToken", s),
                        t.store(a, "nickname", r),
                        t.store(a, "avatar", o),
                        t.store(a, "rspsig", l),
                        t._rspsig = l;
                    var h = Utils.getCurrentTime() + 7200;
                    t.store(a, "expireTime", h.toString())
                }
            };
            this._sdk.config({
                loginCallBack: a
            });
            var i = this._sdk.version();
            i && (this._version = Number(i)),
                EventManager.instance.addEventListener(EventTypes.LOGIN_QQ, this.onEventLogin, this)
        },
        i.store = function(t, e, a) {
            UserDefault.instance.setStringForKey(t + "_" + e, a)
        },
        i.get = function(t, e) {
            return UserDefault.instance.getStringForKey(t + "_" + e)
        },
        i.onEventLogin = function(t, e) {
            var a = this;
            this._loginType = t,
                UserDefault.instance.setStringForKey("loginType", t);
            var i = !1;
            if (e) {
                var n = this.get(this._loginType, "expireTime");
                n && (n = Number(n));
                var s = this.get(t, "openid");
                "" !== s && n && n > Utils.getCurrentTime() && (this.__loginVerify(this.loginCallBackObj.callback, this.loginCallBackObj.thisobj,
                    function() {
                        a.onEventLogin(t, !1)
                    },
                    this), i = !0)
            }
            i || Utils.reqeustURL(this._urlRoot + "/getsig", null,
                function(e) {
                    var i = JSON.parse(e);
                    if (i && 0 == i.ret) {
                        var n = i.sig,
                            s = i.sigData,
                            r = {};
                        r.appid = a._appId,
                            r.appsig = n,
                            r.appsigData = s,
                            r.loginType = t,
                            a._sdk.login(r,
                                function(t) {
                                    if (t && 0 === t.result) {
                                        var e = (t.msg, t.qbopenid),
                                            i = t.qbopenkey,
                                            n = t.refreshToken,
                                            s = t.nickName,
                                            r = t.avatarUrl,
                                            o = t.rspsig;
                                        a._refreshToken = n;
                                        var l = Utils.getCurrentTime() + 7200;
                                        a.store(a._loginType, "expireTime", l.toString()),
                                            a.store(a._loginType, "openid", e),
                                            a.store(a._loginType, "openkey", i),
                                            a.store(a._loginType, "refreshToken", n),
                                            a.store(a._loginType, "nickname", s),
                                            a.store(a._loginType, "avatar", r),
                                            a.store(a._loginType, "rspsig", o),
                                            a.__loginVerify(a.loginCallBackObj.callback, a.loginCallBackObj.thisobj)
                                    } else Utils.toast("登录失败" + (t.msg ? t.msg : "")),
                                        Utils.delayCall(3e3,
                                            function() {
                                                a.exist()
                                            },
                                            a)
                                })
                    } else Utils.toast("获取登录签名失败"),
                        Utils.delayCall(3e3,
                            function() {
                                a.exist()
                            },
                            a)
                })
        },
        i.__loginVerify = function(t, e, a, i) {
            var n = this,
                s = this.get(this._loginType, "openid"),
                r = this.get(this._loginType, "openkey"),
                o = (this.get(this._loginType, "refreshToken"), this.get(this._loginType, "nickname")),
                l = this.get(this._loginType, "avatar");
            this.get(this._loginType, "rspsig");
            this._userInfo.openid = s,
                this._userInfo.openkey = r,
                this._userInfo.username = o,
                this._userInfo.headpic = l,
                Utils.reqeustURL(this._urlRoot + "/verify", {
                        openid: s
                    },
                    function(s) {
                        var r = !1;
                        if (s) {
                            var o = JSON.parse(s);
                            o && 0 == o.ret && (o.lastIn && (n._userInfo.userid = o.lastIn.uid, n._userInfo.serverId = o.lastIn.serverid), t && (e ? t.apply(e, [n._userInfo]) : t(n._userInfo)), r = !0)
                        }
                        r || (a ? Utils.call(a, i) : (Utils.toast("登录验证失败，请重新进入游戏"), Utils.delayCall(3e3,
                            function() {
                                n.exist()
                            },
                            n)))
                    })
        },
        i.loginVerify = function(t, e) {
            var a = this;
            if (this.loginCallBackObj = {
                    callback: t,
                    thisobj: e
                },
                this._sdk.getAvailableLoginType) this._sdk.getAvailableLoginType({
                    appid: this._appId
                },
                function(t) {
                    var e = !1;
                    if (t && 0 === t.result) {
                        if (1 == t.loginTypes.length) {
                            var i = t.loginTypes[0];
                            EventManager.instance.dispatchEvent(EventTypes.LOGIN_QQ, i.loginType, !!i.accInfo)
                        } else Main.instance.loadingPanel || (Main.instance.loadingPanel = new WindowLoading),
                            Main.instance.loadingPanel.showQQLogin(t);
                        e = !0
                    }
                    e || (Utils.toast("获取可用登录方式失败，重新进入游戏"), Utils.delayCall(3e3,
                        function() {
                            a.exist()
                        },
                        a))
                });
            else {
                Main.instance.loadingPanel || (Main.instance.loadingPanel = new WindowLoading);
                var i = {
                    loginTypes: [{
                            loginType: "qq"
                        },
                        {
                            loginType: "wx"
                        }
                    ]
                };
                Main.instance.loadingPanel.showQQLogin(i)
            }
        },
        i.logout = function() {
            var t = this,
                e = {};
            e.appid = this._appId,
                e.qbopenid = this._userInfo.openid,
                e.loginType = this._loginType;
            var a = this._loginType;
            this.store(a, "openid", ""),
                this._sdk.logout(e,
                    function(e) {
                        e && 0 === e.result ? t.exist() : Utils.toast("注销账号失败!" + e.msg)
                    })
        },
        i.switchAccount = function() {
            this.logout()
        },
        i.refreshToken = function(t, e) {
            var a = this,
                i = {};
            i.appid = this._appId,
                i.qbopenid = this._userInfo.openid,
                i.refreshToken = this._refreshToken,
                this._sdk.refreshToken(i,
                    function(i) {
                        if (i && 0 === i.result) {
                            var n = i.qbopenid,
                                s = i.qbopenkey,
                                r = i.rspsig;
                            a._userInfo.openid = n,
                                a._userInfo.openkey = s,
                                a._rspsig = r,
                                a.store(a._loginType, "openid", n),
                                a.store(a._loginType, "openkey", s),
                                a.store(a._loginType, "rspsig", r),
                                Utils.call(t, e)
                        } else Utils.toast("登录信息已经过期，请重新登录"),
                            Utils.delayCall(3e3,
                                function() {
                                    a.logout()
                                },
                                a)
                    })
        },
        i.login = function(t, e, a) {
            var i, n = this,
                s = "/login";
            i = this._userInfo.userid ? {
                    openid: this._userInfo.openid,
                    pf: this._pf,
                    uid: this._userInfo.userid,
                    serverid: t
                } : {
                    openid: this._userInfo.openid,
                    pf: this._pf,
                    uid: "0",
                    serverid: t
                },
                Utils.reqeustURL(this._urlRoot + s, i,
                    function(i) {
                        if (i) {
                            var s = JSON.parse(i);
                            s ? 0 == s.ret ? (n._userInfo.userid = s.id, n._userInfo.serverKey = s.secret, n._userInfo.serverId = t, PlatformManager.instance.serverIP = s.server, PlatformManager.instance.serverPort = s.port, e && (a ? e.apply(a, [i]) : e(i))) : (Utils.toast("登录失败:" + s.msg), Utils.delayCall(3e3,
                                function() {
                                    n.exist()
                                },
                                n)) : (Utils.toast("登录失败，请重新登录游戏"), Utils.delayCall(3e3,
                                function() {
                                    n.exist()
                                },
                                n))
                        } else Utils.toast("登录失败，请重新登录游戏"),
                            Utils.delayCall(3e3,
                                function() {
                                    n.exist()
                                },
                                n)
                    },
                    this)
        },
        i.share = function(t, e, a, i, n) {
            var s = {};
            s.url = "http://yeyou.qq.com/?gameId=" + this._appId + "#/detail/" + this._appId,
                s.title = "分享",
                s.description = "战舰帝国-大决战",
                s.imgUrl = "../qweb/resource/assets/Panel/GUI_Homepage_Icon_33.png"
                /*tpa=http://1251006671.cdn.myqcloud.com/1251006671/shipH5/qweb/resource/assets/Panel/GUI_Homepage_Icon_33.png*/
                ,
                s.imgTitle = "插图标题",
                s.cusTxt = "击沉一切，目标全世界！",
                this._sdk.share(s,
                    function(t) {
                        t && 0 == t.result ? Utils.toast("分享成功") : -2 == t.result && Utils.toast("分享失败")
                    })
        },
        i.pay = function(t, e, a, i, n, s) {
            var r = this;
            a = 10 * a;
            var o = {};
            o.appid = this._appId,
                o.appsig = "",
                o.paysig = "",
                o.qbopenid = this._userInfo.openid,
                o.qbopenkey = this._userInfo.openkey,
                o.payItem = e + "*" + a + "*1",
                o.payInfo = e + "*" + t,
                o.reqTime = Utils.getCurrentTime(),
                o.customMeta = t + "," + this._userInfo.serverId;
            var l = JSON.stringify(o);
            Utils.reqeustURL(this._urlRoot + "/getPaySig", {
                    url: "/",
                    queryMap: l
                },
                function(n) {
                    Log.logZDY("getPaySig", n);
                    var l = !1;
                    if (n) {
                        var h = JSON.parse(n);
                        if (h && 0 == h.ret) {
                            o.paysig = h.reqSigServer;
                            var c = function(n) {
                                "object" == typeof n ? "order error, ErrorCode(1101)" == n.msg ? (Utils.toast("登录已过期，请重新登录！"), Utils.delayCall(3e3,
                                    function() {
                                        r.logout()
                                    },
                                    r)) : 0 === n.result ? Utils.toast("支付操作完成") : -2 === n.result || 903 === n.result ? Utils.toast("已取消支付！") : -3 === n.result ? (Utils.toast("登录已过期，程序将自动刷新授权！"), Utils.delayCall(3e3,
                                    function() {
                                        r.refreshToken(function() {
                                                r.pay(t, e, a, i, c, s)
                                            },
                                            r)
                                    },
                                    r)) : 19 === n.result ? (Utils.toast("登录态已过期，需要重新登录！"), Utils.delayCall(3e3,
                                    function() {
                                        r.logout()
                                    },
                                    r)) : Utils.toast("支付失败！(" + n.result + "," + n.msg + ")") : Utils.toast("支付完成！")
                            };
                            r._sdk.pay(o, c),
                                l = !0
                        }
                    }
                    l || Utils.toast("获取支付签名认证失败！")
                },
                this, egret.HttpMethod.POST)
        },
        i.getUserInfo = function() {
            var t = {};
            t.appid = "",
                t.qbopenid = "",
                t.qbopenkey = "",
                this._sdk.getUserInfo(t,
                    function(t) {
                        if (t)
                            if (0 == t.result) {
                                t.nickName,
                                    t.avatarUrl,
                                    t.sex,
                                    t.language,
                                    t.isVip
                            } else Utils.toast("获取用户信息失败:" + t.msg)
                    })
        },
        i.openTopicCircle = function() {
            var t = {};
            t.appid = this._appId,
                this._sdk.openTopicCircle(t,
                    function(t) {})
        },
        i.exist = function() {
            window.location.reload()
        },
        i.getWebUrl = function() {
            return "http://119.29.224.164/"
        },
        e
}(PlatformBase);
