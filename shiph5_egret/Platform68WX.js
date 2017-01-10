
var PlatformBase = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.needShowLogin = function() {
            return !1
        },
        a.isSupportShare = function() {
            return !1
        },
        a.isSupportSubscribe = function() {
            return !1
        },
        a.isSupportToDesktop = function() {
            return !1
        },
        a.isSupportSendToDesktop = function() {
            return !1
        },
        a.isSupportSwitchAccount = function() {
            return !1
        },
        a.init = function() {},
        a.loginVerify = function(t, e) {},
        a.login = function(t, e, a) {},
        a.switchAccount = function() {
            this.isSupportSwitchAccount() && Toast.launch("此平台不支持切换账号")
        },
        a.share = function(t, e, a, i, n) {},
        a.logout = function() {},
        a.getFriends = function(t, e) {},
        a.pay = function(t, e, a, i, n, s) {},
        a.payAgain = function() {},
        a.Subscribe = function() {},
        a.ToDesktop = function(t, e) {},
        a.exist = function() {
            parent.window.location.reload(!0)
        },
        a.getWebUrl = function() {
            return "http://119.29.13.203:9001/"
        },
        t
}();
