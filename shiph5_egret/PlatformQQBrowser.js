(e, "plat.hortor.OrderVO")
    }(e = t.hortor || (t.hortor = {}))
}(plat || (plat = {}));
var getTimer = egret.getTimer,
    PlatformLaya = function(t) {
        function e() {
            t.apply(this, arguments),
                this.urlRoot = "http://119.29.224.164/",
                this.platObj = {
                    sp: 0,
                    access_token: "",
                    pf: "laya"
                }
        }
        __extends(e, t);
        var a = (__define, e),
            i = a.prototype;
        return i.isSupportShare = function() {
                return console.log("支持分享：" + market.canShareAndFeed()),
                    market.canShareAndFeed()
            },
            i.isSupportToDesktop = function() {
                return console.log("支持发送到桌面：" + market.canSendToDesktop()),
                    market.canSendToDesktop()
            },
            i.isSupportSwitchAccount = function() {
                return console.log("支持切换账户：" + market.canLogout()),
                    market.canLogout()
            },
            i.switchAccount = function() {
                var e = this;
                t.prototype.switchAccount.call(this),
                    market.logout("",
                        function(t) {
                            try {
                                var a = JSON.parse(t);
                                if (0 != a.result) throw a.desc;
                                e.exist()
                            } catch (i) {
                                alert("注销用户失败：" + i)
                            }
                        })
            },
            i.ToDesktop = function(t, e) {
                var a = this,
                    i = {
                        title: "发送到桌面",
                        imageUrl: "resource/assets/Panel/GUI_Homepage_Icon_33.png"
                            /*tpa=resource/assets/Panel/GUI_Homepage_Icon_33.png*/
                            ,
                        pageUrl: "http://game.layabox.com/823"
                    };
                market.sendToDesktop(JSON.stringify(i),
                    function(t) {
                        try {
                            var e = JSON.parse(t);
                            0 == e.result && Toast.launch("发送桌面成功")
                        } catch (i) {
                            return alert("发送桌面失败：" + i),
                                void a.exist()
                        }
                    })
            },
            i.share = function(t, e, a, i, n) {
                var s = this,
                    r = {
                        title: "战舰帝国大决战",
                        link: "http://game.layabox.com/823",
                        desc: "击沉一切，目标全世界！",
                        imgsrc: "resource/assets/Panel/GUI_Homepage_Icon_33.png"
                            /*tpa=resource/assets/Panel/GUI_Homepage_Icon_33.png*/
                            ,
                        imgtitle: "战舰帝国大决战",
                        cutxt: ""
                    };
                market.enterShareAndFeed(JSON.stringify(r),
                    function(t) {
                        try {
                            var e = JSON.parse(t);
                            if (-1 == e.result && Toast.launch("分享取消"), 0 != e.result) throw e.desc
                        } catch (a) {
                            return alert("分享失败：" + a),
                                void s.exist()
                        }
                    })
            },
            i.init = function() {
                var t = window.localStorage.getItem("loginResult");
                if (t) {
                    var e = JSON.parse(t);
                    this.platObj.sp = e.spId,
                        this.platObj.access_token = e.data.accessToken,
                        this._userInfo = {},
                        this._userInfo.userid = "0",
                        this._userInfo.serverId = 0,
                        this._userInfo.openid = e.data.unionUserId,
                        this._userInfo.username = e.data.nickName,
                        this._userInfo.headpic = e.data.avatarUrl,
                        this._userInfo.platformName = this.platObj.pf,
                        PlatformManager.instance.myself = this._userInfo
                }
            },
            i.loginVerify = function(t, e) {
                var a = this;
                Utils.reqeustURL(this.urlRoot + "/" + this.platObj.pf + "/verify", {
                        sp: this.platObj.sp,
                        time: (new Date).getTime(),
                        openId: window.openId,
                        userId: this._userInfo.openid,
                        access_token: this.platObj.access_token
                    },
                    function(i) {
                        if (i) try {
                            var n = JSON.parse(i);
                            if (0 != n.ret) throw n.msg;
                            n.lastIn && (a._userInfo.serverId = n.lastIn.serverid, a._userInfo.userid = n.lastIn.uid),
                                t && t.apply(e, [a._userInfo])
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
                var r = this;
                RechargeManager.instance.LoadTable(function() {
                        var i = CashdataParser.GetInstance().getItemById(t),
                            n = {
                                serverid: r._userInfo.serverId,
                                itemid: t
                            },
                            s = {
                                order_id: "",
                                goods_name: e,
                                amount: 100 * a,
                                goods_desc: i.name_l,
                                serverId: r._userInfo.serverId,
                                params: JSON.stringify(n)
                            };
                        market.recharge(s,
                            function(t) {
                                console.log("recharge返回：" + t)
                            })
                    },
                    this)
            },
            i.getWebUrl = function() {
                return this.urlRoot
            },
            e
    }(PlatformBase);
