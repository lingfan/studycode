
var PlatformBuddy = function(t) {
    function e() {
        t.call(this),
            this.areaId = 10,
            this.game_key = "444335e600f7ec88",
            this.game_Secret = "cb71b3649d0c6e6c0a6ebc665f13b741"
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this._userInfo = {},
                this._userInfo.userid = "0",
                this._userInfo.serverId = 0,
                this._userInfo.platformName = "hudie",
                this.game_key = Utils.GetQueryString("game_key"),
                this.timestamp = Utils.GetQueryString("timestamp"),
                this.nonce = Utils.GetQueryString("nonce"),
                this.login_type = Utils.GetQueryString("login_type"),
                this.ticket = Utils.GetQueryString("ticket"),
                this.game_url = decodeURIComponent(Utils.GetQueryString("game_url")),
                this.signature = Utils.GetQueryString("signature"),
                console.log("game_key=" + this.game_key + " timestamp=" + this.timestamp + " nonce=" + this.nonce + " login_type=" + this.login_type + " ticket=" + this.ticket + " game_url=" + this.game_url + " signature=" + this.signature);
            var t = new hGame({
                game_key: this.game_key,
                debug: !1
            });
            t.ready(function() {
                    console.log("sdk初始化完成，初始化后会执行hgame.ready中的代码"),
                        t.init();
                    var e = function(t) {
                        0 == t.code ? (this.platform = t.data.platform, console.log("platform:" + this.platform)) : -1 == t.code ? (console.log("取消获取渠道代码"), this.exist()) : t.showMessage ? (console.log(t.showMessage), this.exist()) : (console.log(t.message), this.exist())
                    };
                    t.getPlatform(e);
                    var a = function(t) {
                        0 == t.code ? (this.avatar = t.data.avatar, console.log("avatar:" + this.avatar), this.nickname = t.data.nickname, console.log("nickname:" + this.nickname), this.is_guest = t.data.is_guest, console.log("is_guest:" + this.is_guest)) : -1 == t.code ? (console.log("取消获取用户的基本信息"), this.exist()) : t.showMessage ? (console.log(t.showMessage), this.exist()) : (console.log(t.message), this.exist())
                    };
                    t.getUserInfo(a)
                }),
                PlatformManager.instance.myself = this._userInfo
        },
        i.loginVerify = function(t, e) {
            this.verifyCallback = t;
            var a = "?game_key=" + this.game_key + "&timestamp=" + this.timestamp + "&nonce=" + this.nonce + "&login_type=" + this.login_type + "&ticket=" + this.ticket + "&game_url=" + this.game_url + "&signature=" + this.signature,
                i = new egret.HttpRequest;
            i.responseType = egret.HttpResponseType.TEXT,
                i.open("http://119.29.224.164/hudie/verify" + a, egret.HttpMethod.GET),
                console.log("url : http://119.29.224.164/hudie/verify" + a),
                i.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this),
                i.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this),
                i.send()
        },
        i.onGetComplete = function(t) {
            var e = t.currentTarget,
                a = JSON.parse(e.response);
            0 == a.ret ? (a.lastIn && (this._userInfo.userid = a.lastIn.uid, this._userInfo.serverId = a.lastIn.serverid), this.open_id = a.data.open_id, this._userInfo.openid = a.data.open_id, this._userInfo.username = a.data.nickname, this._userInfo.headpic = a.data.avatar, this.verifyCallback && this.verifyCallback(this._userInfo)) : alert(a.ret.msg)
        },
        i.onGetIOError = function(t) {
            alert("检测到您的网络不畅通，请确认您的网络连接后重试!")
        },
        i.login = function(t, e, a) {
            WindowManager.getInstance().showWaiting(),
                this.tmpServerId = t,
                this.loginCallback = e;
            var i;
            i = this._userInfo.userid ? {
                openid: this._userInfo.openid,
                pf: this._userInfo.platformName,
                uid: this._userInfo.userid,
                serverid: t
            } : {
                openid: this._userInfo.openid,
                pf: this._userInfo.platformName,
                uid: "0",
                serverid: t
            };
            var n = "?openid=" + i.openid + "&pf=" + i.pf + "&uid=" + i.uid + "&serverid=" + i.serverid,
                s = new egret.HttpRequest;
            s.responseType = egret.HttpResponseType.TEXT,
                s.open("http://119.29.224.164/hudie/login" + n, egret.HttpMethod.GET),
                console.log("url : http://119.29.224.164/hudie/login" + n),
                s.addEventListener(egret.Event.COMPLETE, this.onGetComplete1, this),
                s.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError1, this),
                s.send()
        },
        i.onGetComplete1 = function(t) {
            WindowManager.getInstance().hideWaiting();
            var e = t.currentTarget,
                a = JSON.parse(e.response);
            0 == a.ret ? (this._userInfo.userid = a.id, this._userInfo.serverKey = a.secret, this._userInfo.serverId = this.tmpServerId, PlatformManager.instance.serverIP = a.server, PlatformManager.instance.serverPort = a.port, this.loginCallback && this.loginCallback()) : alert(a.ret.msg)
        },
        i.onGetIOError1 = function(t) {
            WindowManager.getInstance().showWaiting(),
                this.login(this.tmpServerId, this.loginCallback)
        },
        i.share = function(t, e, a, i, n) {
            var s = new hGame({
                game_key: this.game_key,
                debug: !1
            });
            s.ready(function() {
                var t = {
                        open_id: this.open_id,
                        game_key: this.game_key,
                        timestamp: this.timestamp,
                        signature: this.signature,
                        title: "",
                        message: "击沉一切，目标全世界！",
                        imgUrl: "",
                        url: "",
                        extend: {}
                    },
                    e = function(t) {
                        0 == t.code ? Toast.launch("分享成功") : -1 == t.code ? Toast.launch("取消分享") : (Toast.launch("分享失败"), t.showMessage ? console.log(t.showMessage) : console.log(t.message))
                    };
                s.doExtraAction("share", t, e)
            })
        },
        i.Subscribe = function() {
            var t = this.signature,
                e = this.open_id,
                a = new hGame({
                    game_key: this.game_key,
                    debug: !1
                });
            a.ready(function() {
                var i = (new Date).valueOf(),
                    n = {
                        open_id: e,
                        game_key: this.game_key,
                        timestamp: i,
                        signature: t,
                        autoRedirect: !0
                    };
                console.log("====== 关注 ======"),
                    console.log("open_id=" + n.open_id),
                    console.log("game_key=" + n.game_key),
                    console.log("timestamp=" + n.timestamp),
                    console.log("signature=" + n.signature);
                var s = function(t) {
                    0 == t.code ? (Toast.launch("已关注"), console.log("返回数据, open_id:" + t.data.open_id)) : -1 == t.code ? Toast.launch("未关注") : (Toast.launch("关注失败"), t.showMessage ? console.log(t.showMessage) : console.log(t.message))
                };
                a.doExtraAction("subscribe", n, s)
            })
        },
        i.ToDesktop = function() {
            var t = this.signature,
                e = new hGame({
                    game_key: this.game_key,
                    debug: !1
                });
            e.ready(function() {
                var a = (new Date).valueOf(),
                    i = {
                        open_id: this.open_id,
                        game_key: this.game_key,
                        timestamp: a,
                        signature: t
                    };
                console.log("====== 添加到桌面 ======"),
                    console.log("open_id=" + i.open_id),
                    console.log("game_key=" + i.game_key),
                    console.log("timestamp=" + i.timestamp),
                    console.log("signature=" + i.signature);
                var n = function(t) {
                    0 == t.code ? Toast.launch("添加到桌面成功") : -1 == t.code ? Toast.launch("取消添加到桌面") : (Toast.launch("添加到桌面失败"), t.showMessage ? console.log(t.showMessage) : console.log(t.message))
                };
                e.doExtraAction("toDesktop", i, n)
            })
        },
        i.pay = function(t, a, i, n, s, r) {
            var o = this,
                l = new Date,
                h = l.valueOf(),
                c = {
                    game_key: this.game_key,
                    open_id: this._userInfo.openid,
                    total_fee: i,
                    game_orderno: "",
                    subject: a,
                    description: "",
                    notify_url: e.urlRoot + "/hudie/recharge",
                    timestamp: Number(h),
                    nonce: this.nonce,
                    game_area: this.areaId.toString(),
                    game_group: this._userInfo.serverId.toString(),
                    game_level: UserData.getInstance()._level.toString(),
                    game_role_id: Number(this._userInfo.userid),
                    itemid: t
                };
            console.log("game_key=" + c.game_key),
                console.log("open_id=" + c.open_id),
                console.log("total_fee=" + c.total_fee),
                console.log("game_orderno=" + c.game_orderno),
                console.log("subject=" + c.subject),
                console.log("description=" + c.description),
                console.log("notify_url=" + c.notify_url),
                console.log("timestamp=" + c.timestamp),
                console.log("nonce=" + c.nonce),
                console.log("game_area=" + c.game_area),
                console.log("game_group=" + c.game_group),
                console.log("game_level=" + c.game_level),
                console.log("game_role_id=" + c.game_role_id),
                console.log("itemid=" + c.itemid),
                Utils.reqeustURL(e.urlRoot + "/hudie/getPaySig", c,
                    function(t) {
                        if (t) {
                            console.log("ret = " + t);
                            var e = JSON.parse(t);
                            if (e) {
                                var a = new hGame({
                                    game_key: o.game_key,
                                    debug: !1
                                });
                                a.ready(function() {
                                    var t = function(t) {
                                        0 == t.code ? GameAlert.getInstance().showPaySuccess("充值成功", "充值成功") : -1 == t.code ? GameAlert.getInstance().show("取消充值", "取消充值") : t.showMessage ? GameAlert.getInstance().show(t.showMessage, t.showMessage) : GameAlert.getInstance().show(t.message, t.message)
                                    };
                                    a.pay(e, "", t)
                                })
                            } else Toast.launch("支付信息校验失败")
                        } else Toast.launch("支付信息校验失败")
                    })
        },
        i.getWebUrl = function() {
            return e.urlRoot
        },
        i.isSupportShare = function() {
            return !1
        },
        i.isSupportSubscribe = function() {
            return !1
        },
        i.isSupportToDesktop = function() {
            return !1
        },
        e.urlRoot = "http://119.29.224.164/",
        e
}(PlatformBase);
