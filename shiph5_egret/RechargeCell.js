
var LoginAlert = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/Test_LoginSkin.exml"
            /*tpa=resource/eui_skins/Test_LoginSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this),
                GameLayer.getInstance().uiLayer.addChild(this),
                this.editLable.text = "zzz"
        },
        i.startGame = function(t) {
            0 != this.editLable.text.length && (GameLayer.getInstance().uiLayer.removeChild(this), Transport.instance.loginConnect(this.editLable.text))
        },
        e
}(eui.Component);
