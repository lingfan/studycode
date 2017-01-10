
var vipGiftItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/vipGiftSkin.exml"
            /*tpa=resource/eui_skins/item/vipGiftSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.dataChanged = function() {
            var t = GlobalFunction.getDropDataByTypeAndId(this.data.type, this.data.id, this.data.count);
            SUI.setTextureAsync(this.com.imgBg, QualitySystem.getItemSmallBack(t.quality)),
                SUI.setTextureAsync(this.com.imgIcon, t.icon),
                this.com.txtName.text = t.name,
                this.com.txtName.textColor = QualitySystem.getColorByQuality(t.quality),
                this.com.txtNum.text = t.count.toString()
        },
        e
}(eui.ItemRenderer);
