
var WindowLog = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ZB_QiJuTou_TanKuangSkin.exml"
            /*tpa=resource/eui_skins/ZB_QiJuTou_TanKuangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this.txtContent.text = t
        },
        i.init = function() {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.gpScroller.removeChild(this.rankList),
                this.txtContent = new eui.Label,
                this.txtContent.width = this.rankScroller.width - 6,
                this.txtContent.x = 3,
                this.txtContent.y = 3,
                this.gpScroller.addChild(this.txtContent)
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {},
        e
}(WindowBase);
