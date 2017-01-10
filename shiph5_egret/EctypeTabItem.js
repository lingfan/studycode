
var WindowDuanXian = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/DuanXianSkin.exml"
            /*tpa=resource/eui_skins/DuanXianSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
                GameLayer.getInstance().topLayer.addChild(this)
        },
        i.clickHandler = function(t) {
            GameLayer.getInstance().topLayer.removeChild(this),
                Transport.instance.socketReset()
        },
        e
}(eui.Component);
