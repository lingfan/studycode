
var PlatformHortor = function(t) {
    function e() {
        t.call(this),
            this.urlRoot = "http://119.29.224.164/",
            this.gameId = "zjdg",
            this.platObj = {
                isSubscribe: !1,
                sign: "",
                time: 0,
                friendCode: "",
                pf: "hortor"
            },
            this.orderInfo = new plat.hortor.OrderVO
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.isSupportSubscribe = function() {
            return !1
        },
        i.isSubscribed = function() {
            return this.platObj.isSubscribe
        },
        i.init = function() {
            var t = window.HORTOR_AGENT;
            return t ? (this._userInfo = {},
                this._userInfo.userid = "0", this._userInfo.serverId = 0, this._userInfo.openid = Utils.GetQueryString("userId"), this._userInfo.username = Utils.GetQueryString("userName"), this._userInfo.headpic = Utils.GetQueryString("userImg"), this._userInfo.platformName = this.platObj.pf, this.platObj.isSubscribe = "true" == Utils.GetQueryString("isSubscribe"), this.platObj.sign = Utils.GetQueryString("sign"), this.platObj.time = parseInt(Utils.GetQueryString("time")), this.platObj.friendCode = Utils.GetQueryString("friendCode"), t.init(), t.config({
                    gameId: "zjdg",
                    share: {
                        timeline: {
                            title: "战舰帝国大决战",
                            desc: "击沉一切，目标全世界！",
                            imgUrl: "../hortorgames/resource/assets/Panel/GUI_Homepage_Icon_33.png"
                                /*tpa=http://1251006671.cdn.myqcloud.com/1251006671/shipH5/hortorgames/resource/assets/Panel/GUI_Homepage_Icon_33.png*/
                                ,
                            success: this.OnShareSuc,
                            cancel: this.OnShareCancel
                        },
                        friend: {
                            title: "战舰帝国大决战",
                            desc: "击沉一切，目标全世界！",
                            imgUrl: "../hortorgames/resource/assets/Panel/GUI_Homepage_Icon_33.png"
                                /*tpa=http://1251006671.cdn.myqcloud.com/1251006671/shipH5/hortorgames/resource/assets/Panel/GUI_Homepage_Icon_33.png*/
                                ,
                            success: this.OnShareSuc,
                            cancel: this.OnPayFail
                        },
                        shareCustomParam: {}
                    },
                    pay: {
                        success: this.OnPaySuc,
                        cancel: this.OnPayFail
                    }
                }), this._userInfo.openid && this.platObj.sign ? (PlatformManager.instance.myself = this._userInfo, void EventManager.instance.addEventListener(EventTypes.ENTER_MAINSCENE, this.OnEnterScene, this)) : (alert("sdk初始化失败，请重新登录游戏"), void this.exist())) : (alert("sdk找不到"), void this.exist())
        },
        i.OnEnterScene = function() {
            if (this.platObj.isSubscribe && !UserData.getInstance().focus_award) {
                var t = Transport.getPkg(ProtocolMgr.ID_DceFocusAward);
                Transport.instance.send(t)
            }
        },
        i.loginVerify = function(t, e) {
            var a = this;
            Utils.reqeustURL(this.urlRoot + "/" + this.platObj.pf + "/verify", {
                    time: this.platObj.time,
                    sign: this.platObj.sign,
                    userId: this._userInfo.openid,
                    friendCode: this.platObj.friendCode
                },
                function(i) {
                    if (i) try {
                        var n = JSON.parse(i);
                        if (0 != n.ret) throw n.msg;
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
        i.OnShareSuc = function() {
            Toast.launch("分享成功!")
        },
        i.OnShareCancel = function() {},
        i.OnPaySuc = function() {
            Toast.launch("支付成功!"),
                this.orderInfo.callback && this.orderInfo.callback.apply(this.orderInfo.thisObj, [this.orderInfo])
        },
        i.OnPayFail = function() {
            Toast.launch("支付取消!")
        },
        i.switchAccount = function() {
            Toast.launch("此平台不支持切换账号")
        },
        i.share = function(t, e, a, i, n) {},
        i.Subscribe = function() {
            if (this.isSupportSubscribe())
                if (this.platObj.isSubscribe) Toast.launch("您已关注，奖励已发送至邮箱，请查收");
                else {
                    var t = window.HORTOR_AGENT;
                    t.showQRCode()
                }
        },
        i.logout = function() {},
        i.getFriends = function(t, e) {},
        i.pay = function(t, e, a, i, n, s) {
            var r = this,
                o = {
                    time: this.platObj.time,
                    sign: this.platObj.sign,
                    userId: this._userInfo.openid,
                    friendCode: this.platObj.friendCode,
                    goodsId: t,
                    goodsName: e,
                    money: a,
                    ext: this._userInfo.serverId
                };
            Utils.reqeustURL(this.urlRoot + "/" + this.platObj.pf + "/paycheck", o,
                function(t) {
                    if (t) try {
                        var o = JSON.parse(t);
                        if (0 != o.ret) throw o.msg;
                        var l = {
                                order_id: o.order_id,
                                app_id: o.app_id,
                                timestamp: o.timestamp,
                                nonce_str: o.nonce_str,
                                "package": o["package"],
                                sign_type: o.sign_type,
                                pay_sign: o.pay_sign
                            },
                            h = window.HORTOR_AGENT;
                        h.pay(l),
                            r.orderInfo.orderId = l.order_id,
                            r.orderInfo.callback = n,
                            r.orderInfo.thisObj = s,
                            r.orderInfo.itemName = e,
                            r.orderInfo.price = a,
                            r.orderInfo.count = i
                    } catch (c) {
                        return alert("支付返回错误：" + c),
                            void r.exist()
                    }
                },
                this)
        },
        i.exist = function() {
            parent.window.location.reload(!0)
        },
        i.getWebUrl = function() {
            return this.urlRoot
        },
        e
}(PlatformBase);
