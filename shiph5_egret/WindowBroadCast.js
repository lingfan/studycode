
var DropItem = function(t) {
    function e(e) {
        t.call(this),
            this.iData = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/TongYongWuPinSkin.exml"
            /*tpa=resource/eui_skins/item/TongYongWuPinSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = GlobalFunction.getDropDataByTypeAndId(this.iData.type, this.iData.id, this.iData.count);
            SUI.setItemIcon(this, t)
        },
        e
}(eui.Component);
