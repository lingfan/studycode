
var WindowTeGong = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/ChouJiang_TeGongSkin.exml"
            /*tpa=resource/eui_skins/ChouJiang_TeGongSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    t.initUI()
                }),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this)
        },
        i.clear = function() {
            this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this)
        },
        i.onTabBarItemTap = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    WindowManager.getInstance().hide(WindowManager.windowType.TeGong)
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("item"),
                e.push("spyBaseData"),
                ConfigData.preLoadDats(e, [ItemParser, SpybasedataParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            WindowManager.getInstance().hideWaiting()
        },
        e
}(WindowBase);
