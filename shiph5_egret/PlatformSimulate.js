
var PlatformQQ = function(t) {
    function e() {
        t.call(this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.isSupportShare = function() {
            return !0
        },
        i.init = function() {
            this._userInfo = {};
            var t = Utils.GetQueryString("openid", !0),
                e = Utils.GetQueryString("openkey", !0),
                a = "1105591328",
                i = Utils.GetQueryString("sig", !0),
                n = "wanba_ts",
                s = Utils.GetQueryString("format", !0),
                r = Utils.GetQueryString("userip", !0);
            return null == t ? (this._loginErr = !0, alert("sdk初始化失败，请重新登录游戏" + window.location.href + "--->"), void this.exist()) : (this._userInfo.openid = t, this._userInfo.openkey = e, this._userInfo.platformName = n, this._userInfo.where = r, this._userInfo.format = s, this._pf = n, this._sig = i, this._ip = r, this._appId = a, this.platfortType = Number(QZAppExternal.getPlatform()), this.platfortType = this.platfortType || 1, this.platfortType = 3 == this.platfortType ? 1 : this.platfortType, void(PlatformManager.instance.myself = this._userInfo))
        },
        i.loginVerify = function(t, a) {
            var i = this;
            Utils.reqeustURL(e.urlRoot + "/wanba/verify", {
                    openid: this._userInfo.openid,
                    openkey: this._userInfo.openkey,
                    appid: this._appId,
                    sig: this._sig,
                    pf: this._pf,
                    format: "json",
                    userip: this._ip,
                    zoneid: this.platfortType
                },
                function(n) {
                    if (n) {
                        var s = JSON.parse(n);
                        s ? 0 == s.ret ? (s.lastIn && (i._userInfo.userid = s.lastIn.uid, i._userInfo.serverId = s.lastIn.serverid, e.loginUserId = s.lastIn.uid), t && (a ? t.apply(a) : t())) : (alert("登录验证失败:" + s.msg), i.exist()) : (alert("登录验证失败，请重新登录游戏"), i.exist())
                    } else alert("登录验证失败，请重新登录游戏"),
                        i.exist()
                },
                this)
        },
        i.login = function(t, a, i) {
            var n, s = this,
                r = "/wanba/login";
            n = e.loginUserId ? {
                    openid: this._userInfo.openid,
                    pf: this._pf,
                    uid: e.loginUserId,
                    serverid: t,
                    zoneid: this.platfortType
                } : {
                    openid: this._userInfo.openid,
                    pf: this._pf,
                    uid: "0",
                    serverid: t,
                    zoneid: this.platfortType
                },
                Utils.reqeustURL(e.urlRoot + r, n,
                    function(e) {
                        if (e) {
                            var r = JSON.parse(e);
                            r ? 0 == r.ret ? (s._userInfo.userid = r.id, s._userInfo.serverKey = r.secret, s._userInfo.serverId = t, PlatformManager.instance.serverIP = r.server, PlatformManager.instance.serverPort = r.port, a && (i ? a.apply(i, [e]) : a(e))) : (alert("登录失败:" + r.msg + Log.objectToString(n)), s.exist()) : (alert("登录失败，请重新登录游戏"), s.exist())
                        } else alert("登录失败，请重新登录游戏"),
                            s.exist()
                    },
                    this)
        },
        i.payAgain = function() {
            this.pay(this.payParames.itemid, this.payParames.itemname, this.payParames.price, this.payParames.count, this.payParames.callback, this.payParames.thisObj)
        },
        i.pay = function(t, a, i, n, s, r) {
            var o = this;
            this.payParames = {
                itemid: t,
                itemname: a,
                price: i,
                count: n,
                callback: s,
                thisObj: r
            };
            var l = {};
            l.openid = this._userInfo.openid,
                l.openkey = this._userInfo.openkey,
                l.appid = this._appId,
                l.format = "json",
                l.userip = this._ip,
                l.pf = this._userInfo.platformName,
                l.sig = this._sig,
                l.zoneid = this.platfortType,
                l.serverid = this._userInfo.serverId,
                Utils.reqeustURL(e.urlRoot + "/wanba/userinfo", l,
                    function(s) {
                        if (s) {
                            var r = JSON.parse(s);
                            r ? 0 == r.code ? r.data[0].score >= i ? (l.itemid = 1 == o.platfortType ? 7241 + Number(t) - 2 : 7249 + Number(t) - 2, l.itemname = a, l.price = i, l.count = n, Utils.reqeustURL(e.urlRoot + "/wanba/buy", l,
                                function(t) {
                                    var e = JSON.parse(t);
                                    0 == Number(e.ret) ? Toast.launch("支付成功") : Toast.launch("支付失败")
                                })) : popPayTips({
                                defaultScore: i
                            }) : Toast.launch("获取用户信息失败:" + r.subcode) : Toast.launch("获取用户信息失败")
                        } else Toast.launch("获取用户信息失败")
                    },
                    this)
        },
        i.getWebUrl = function() {
            return e.urlRoot
        },
        e.urlRoot = "http://119.29.224.164/",
        e
}(PlatformBase);
