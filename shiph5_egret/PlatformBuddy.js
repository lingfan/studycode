
var Platform68WX = function(t) {
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
            var t = Utils.GetQueryString("openid"),
                e = Utils.GetQueryString("pf"),
                a = Utils.GetQueryString("ts"),
                i = Utils.GetQueryString("sign");
            return null == t || null == e || null == a || null == i ? (this._loginErr = !0, alert("sdk初始化失败，请重新登录游戏"), void this.exist()) : (this._userInfo.openid = t, this._userInfo.platformName = e, this._pf = e, this._sign = i, this._ts = a, void(PlatformManager.instance.myself = this._userInfo))
        },
        i.loginVerify = function(t, a) {
            var i = this;
            Utils.reqeustURL(e.urlRoot + "/play68/verify", {
                    openid: this._userInfo.openid,
                    pf: this._pf,
                    ts: this._ts,
                    sign: this._sign
                },
                function(n) {
                    if (n) {
                        var s = JSON.parse(n);
                        s ? 0 == s.ret ? (s.lastIn && (i._userInfo.userid = s.lastIn.uid, i._userInfo.serverId = s.lastIn.serverid), Utils.reqeustURL(e.urlRoot + "/play68/userinfo", {
                                openid: i._userInfo.openid
                            },
                            function(e) {
                                var n = JSON.parse(e);
                                n ? (i._userInfo.username = n.nickname, i._userInfo.headpic = n.headimg, t && (a ? t.apply(a, [i._userInfo]) : t(i._userInfo))) : (alert("登录验证失败，请重新登录游戏"), i.exist())
                            },
                            i)) : (alert("登录验证失败:" + s.msg), i.exist()) : (alert("登录验证失败，请重新登录游戏"), i.exist())
                    } else alert("登录验证失败，请重新登录游戏"),
                        i.exist()
                },
                this)
        },
        i.login = function(t, a, i) {
            var n, s = this,
                r = "/play68/login";
            n = this._userInfo.userid ? {
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
                Utils.reqeustURL(e.urlRoot + r, n,
                    function(e) {
                        if (e) {
                            var n = JSON.parse(e);
                            n ? 0 == n.ret ? (s._userInfo.userid = n.id, s._userInfo.serverKey = n.secret, s._userInfo.serverId = t, PlatformManager.instance.serverIP = n.server, PlatformManager.instance.serverPort = n.port, a && (i ? a.apply(i, [e]) : a(e))) : (alert("登录失败:" + n.msg), s.exist()) : (alert("登录失败，请重新登录游戏"), s.exist())
                        } else alert("登录失败，请重新登录游戏"),
                            s.exist()
                    },
                    this)
        },
        i.share = function(t, e, a, i, n) {
            Play68.shareFriend()
        },
        i.pay = function(t, a, i, n, s, r) {
            var o = this,
                l = {};
            l.openid = this._userInfo.openid,
                l.pf = this._userInfo.platformName,
                l.ts = this._ts,
                l.sign = this._sign,
                l.itemid = t + "_" + this._userInfo.serverId,
                l.itemname = a,
                l.price = i,
                l.count = n,
                Utils.reqeustURL(e.urlRoot + "/play68/paycheck", l,
                    function(e) {
                        if (e) {
                            var h = JSON.parse(e);
                            h ? 0 == h.ret ? (Play68.pay(t + "_" + o._userInfo.serverId, a, i, n, "", h.skey), Play68.onpaysucc(function() {
                                Toast.launch("支付成功"),
                                    s && (r ? s.apply(r, [l]) : s(l))
                            })) : Toast.launch("支付信息校验失败:" + h.msg) : Toast.launch("支付信息校验失败")
                        } else Toast.launch("支付信息校验失败")
                    },
                    this)
        },
        i.getWebUrl = function() {
            return e.urlRoot
        },
        e.urlRoot = "http://119.29.13.203:9001/",
        e
}(PlatformBase);
