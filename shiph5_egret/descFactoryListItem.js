
var PlatformVUTimes = function(t) {
    function e() {
        t.call(this),
            this.urlRoot = "http://119.29.224.164/",
            this.gameId = "126",
            this.payIdArr = [0, 8161, 8154, 8155, 8156, 8157, 8158, 8159, 8162, 8160],
            this.platObj = {
                isSubscribe: !1,
                token: "",
                pf: "youguang",
                secret: ""
            }
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.isSupportSubscribe = function() {
            return !0
        },
        i.isSupportShare = function() {
            return !0
        },
        i.init = function() {
            this._userInfo = {},
                this._userInfo.userid = "0",
                this._userInfo.serverId = 0,
                this.platObj.token = Utils.GetQueryString("token"),
                this.platObj.token || (window.top.location.href = "http://union.11h5.com/login.html?gameid=" + this.gameId),
                GC.enableUnionShare(function() {
                    Toast.launch("分享成功!")
                }),
                PlatformManager.instance.myself = this._userInfo,
                EventManager.instance.addEventListener(EventTypes.ENTER_MAINSCENE, this.OnEnterScene, this)
        },
        i.OnEnterScene = function() {
            var t = this;
            this.CheckSubscribe(function(e) {
                if (t.platObj.isSubscribe = e, t.platObj.isSubscribe && !UserData.getInstance().focus_award) {
                    var a = Transport.getPkg(ProtocolMgr.ID_DceFocusAward);
                    Transport.instance.send(a)
                }
            })
        },
        i.loginVerify = function(t, e) {
            var a = this;
            Utils.reqeustURLwithCookie(this.urlRoot + "/" + this.platObj.pf + "/verify", {
                    token: this.platObj.token
                },
                function(i) {
                    if (i) try {
                        var n = JSON.parse(i);
                        if (0 != n.ret) throw n.msg;
                        a._userInfo.openid = n.uid,
                            a._userInfo.username = n.nickname,
                            a._userInfo.headpic = n.headimgurl,
                            a._userInfo.platformName = a.platObj.pf,
                            n.lastIn && (a._userInfo.serverId = n.lastIn.serverid, a._userInfo.userid = n.lastIn.uid),
                            t.apply(e, [a._userInfo])
                    } catch (s) {
                        return alert("登录验证返回错误：" + s),
                            void a.exist()
                    }
                },
                this)
        },
        i.login = function(t, e, a) {
            var i = this,
                n = {
                    openid: this._userInfo.openid,
                    pf: this.platObj.pf,
                    uid: this._userInfo.userid || "0",
                    serverid: t
                };
            Utils.reqeustURL(this.urlRoot + "/" + this.platObj.pf + "/login", n,
                function(n) {
                    if (n) try {
                        var s = JSON.parse(n);
                        if (0 != s.ret) throw s.msg;
                        i._userInfo.userid = s.id,
                            i.platObj.secret = s.secret,
                            i._userInfo.serverKey = s.secret,
                            i._userInfo.serverId = t,
                            PlatformManager.instance.serverIP = s.server,
                            PlatformManager.instance.serverPort = s.port,
                            e.apply(a, [n])
                    } catch (r) {
                        return alert("登录返回错误：" + r),
                            void i.exist()
                    }
                },
                this)
        },
        i.pay = function(t, e, a, i, n, s) {
            var r = {
                uid: this._userInfo.openid,
                gameid: this.gameId,
                pid: this.payIdArr[t],
                userdata: this._userInfo.serverId + "_" + t
            };
            GC.jumpPay(r)
        },
        i.exist = function() {
            window.top.location.reload(!0)
        },
        i.Subscribe = function() {
            var t = this;
            this.CheckSubscribe(function(e) {
                t.platObj.isSubscribe = e,
                    t.platObj.isSubscribe ? Toast.launch("您已关注，奖励已发送至邮箱，请查收") : GC.focus()
            })
        },
        i.CheckSubscribe = function(t) {
            var e = this,
                a = !1;
            Utils.reqeustURL(this.urlRoot + "/" + this.platObj.pf + "/focus", {
                    uid: this._userInfo.openid
                },
                function(i) {
                    try {
                        var n = JSON.parse(i);
                        a = 0 == n.ret ? !0 : !1
                    } catch (s) {
                        return a = !1,
                            Toast.launch(s),
                            void e.exist()
                    }
                    t(a)
                },
                this)
        },
        i.getWebUrl = function() {
            return this.urlRoot
        },
        i.share = function(t, e, a, i, n) {
            window.GC.showShare()
        },
        e
}(PlatformBase);
