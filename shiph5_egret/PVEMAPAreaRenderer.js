
var ItemItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/components/itemCommonSkin.exml"
            /*tpa=resource/eui_skins/components/itemCommonSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {},
        i.dataChanged = function() {
            var t = this;
            SUI.setItemIcon(t, this.data)
        },
        e
}(eui.ItemRenderer);
