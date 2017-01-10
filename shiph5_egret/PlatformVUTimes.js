
var PlatformSimulate = function(t) {
    function e() {
        t.call(this),
            this.urlRoot = "http://119.29.224.164/"
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this._userInfo = {},
                this._userInfo.userid = Utils.GetQueryString("uid"),
                this._userInfo.serverId = parseInt(Utils.GetQueryString("serverid")),
                this._userInfo.openid = Utils.GetQueryString("openid"),
                this._userInfo.platformName = Utils.GetQueryString("pf"),
                PlatformManager.instance.myself = this._userInfo
        },
        i.loginVerify = function(t, e) {
            t && t.apply(e, [this._userInfo])
        },
        i.login = function(t, e, a) {
            var i = this,
                n = {
                    openid: this._userInfo.openid,
                    pf: this._userInfo.platformName,
                    uid: this._userInfo.userid || "0",
                    serverid: this._userInfo.serverId
                };
            Utils.reqeustURL(this.urlRoot + "/" + this._userInfo.platformName + "/login", n,
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
        i.getWebUrl = function() {
            return this.urlRoot
        },
        e
}(PlatformBase);
