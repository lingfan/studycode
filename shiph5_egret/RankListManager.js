
var PlatformManager = function() {
    function t() {
        this.platNameDic = {
            hortor: "疯狂游乐场",
            youguang: "爱微游"
        }
    }
    var e = (__define, t),
        a = e.prototype;
    return a.GetPlatName = function() {
            return this.platNameDic[this.myself.platformName] || this.myself.platformName
        },
        a.needShowLogin = function() {
            return this.platform.needShowLogin()
        },
        a.isSupportShare = function() {
            return this.platform.isSupportShare()
        },
        a.isSupportSubscribe = function() {
            return this.platform.isSupportSubscribe()
        },
        a.isSupportSwitchAccount = function() {
            return this.platform.isSupportSwitchAccount()
        },
        a.isSupportToDesktop = function() {
            return this.platform.isSupportToDesktop()
        },
        a.isSupportSendToDesktop = function() {
            return this.platform.isSupportSendToDesktop()
        },
        a.init = function() {
            var t = GetPlatType();
            switch (t) {
                case PlatformType.PF_68WX:
                    this.platform = new Platform68WX;
                    break;
                case PlatformType.PF_TEST:
                    this.platform = new PlatformTest;
                    break;
                case PlatformType.PF_HORTOR:
                    this.platform = new PlatformHortor;
                    break;
                case PlatformType.PF_BUDDY:
                    this.platform = new PlatformBuddy;
                    break;
                case PlatformType.PF_QQBROWSER:
                    this.platform = new PlatformQQBrowser;
                    break;
                case PlatformType.PF_VUTIMES:
                    this.platform = new PlatformVUTimes;
                    break;
                case PlatformType.PF_BUSSINESS:
                    this.platform = new PlatformBusiness;
                    break;
                case PlatformType.PF_LAYA:
                    this.platform = new PlatformLaya;
                    break;
                case PlatformType.PF_SIMULATE:
                    this.platform = new PlatformBase;
                    break;
                case PlatformType.PF_QQ:
                    this.platform = new PlatformQQ;
                    break;
                default:
                    this.platform = new PlatformBase
            }
            this.platform.init()
        },
        a.loginVerify = function(t, e) {
            this.platform.loginVerify(t, e)
        },
        a.login = function(t, e, a) {
            this.platform.login(t, e, a)
        },
        a.logout = function() {
            this.platform.logout()
        },
        a.switchAccount = function() {
            this.platform.switchAccount()
        },
        a.share = function(t, e, a, i, n) {
            this.platform.share(t, e, a, i, n)
        },
        a.getFriends = function(t, e) {},
        a.pay = function(t, e, a, i, n, s) {
            this.payInfo = {
                    itemid: t,
                    itemname: e,
                    price: a,
                    count: i
                },
                this.platform.pay(t, e, a, i, n, s)
        },
        a.payAgain = function() {
            this.platform.payAgain()
        },
        a.Subscribe = function() {
            this.platform.Subscribe()
        },
        a.ToDesktop = function(t, e) {
            this.platform.ToDesktop(t, e)
        },
        a.exist = function() {},
        a.getWebUrl = function() {
            return this.platform.getWebUrl()
        },
        t.instance = new t,
        t
}();
