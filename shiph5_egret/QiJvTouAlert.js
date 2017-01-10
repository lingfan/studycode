
var PlatformTest = function(t) {
    function e() {
        t.call(this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.isSupportSubscribe = function() {
            return !1
        },
        i.Subscribe = function() {},
        i.init = function() {
            this._userInfo = {};
            var t = "develop";
            this._userInfo.platformName = t,
                this._pf = t,
                PlatformManager.instance.myself = this._userInfo
        },
        i.loginVerify = function(t, a) {
            var i = this;
            Main.instance.loadingPanel ? Main.instance.setChildIndex(Main.instance.loadingPanel, Main.instance.numChildren) : Main.instance.loadingPanel = new WindowLoading;
            var n = !this._switchAccount;
            Main.instance.loadingPanel.showLogin(function(n) {
                    i._userInfo.openid = n,
                        Utils.reqeustURL(e.urlRoot + "/account/verify", {
                                openid: i._userInfo.openid,
                                pf: i._pf
                            },
                            function(e) {
                                if (e) {
                                    var n = JSON.parse(e);
                                    n ? 0 == n.ret ? (n.lastIn ? (i._userInfo.userid = n.lastIn.uid, i._userInfo.serverId = n.lastIn.serverid) : (i._userInfo.userid = null, i._userInfo.serverId = null), t && (a ? t.apply(a, [i._userInfo]) : t(i._userInfo))) : (alert("登录验证失败:" + n.msg), i.exist()) : (alert("登录验证失败，请重新登录游戏"), i.exist())
                                } else alert("登录验证失败，请重新登录游戏"),
                                    i.exist()
                            },
                            i)
                },
                this, n)
        },
        i.login = function(t, a, i) {
            var n, s = this,
                r = "/account/login";
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
                    function(t) {
                        if (t) {
                            var e = JSON.parse(t);
                            e ? 0 == e.ret ? (s._userInfo.userid = e.id, s._userInfo.serverKey = e.secret, PlatformManager.instance.serverIP = e.server, PlatformManager.instance.serverPort = e.port, a && (i ? a.apply(i, [t]) : a(t))) : (alert("登录失败:" + e.msg), s.exist()) : (alert("登录失败，请重新登录游戏"), s.exist())
                        } else alert("登录失败，请重新登录游戏"),
                            s.exist()
                    },
                    this)
        },
        i.switchAccount = function() {
            this._switchAccount = !0,
                WindowManager.getInstance().hideAll(),
                CommunicateManager._firstAuth = !0,
                CommunicateManager.initedUserData = !1,
                this.loginVerify(function(t) {
                    GameData.openid = PlatformManager.instance.myself.openid,
                        GameData.uid = PlatformManager.instance.myself.userid,
                        GameData.lastServerId = PlatformManager.instance.myself.serverId,
                        GameData.pf = PlatformManager.instance.myself.platformName,
                        Main.instance.loadingPanel.showServerListUI(),
                        Main.instance.loadingPanel.requestServerList()
                })
        },
        i.needShowLogin = function() {
            return !0
        },
        i.getWebUrl = function() {
            return e.urlRoot
        },
        e.urlRoot = "http://119.29.13.203:9001/",
        e
}(PlatformBase);
