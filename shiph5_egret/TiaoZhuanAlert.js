
var retiredFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/TongYongWuPin_2_Skin.exml"
            /*tpa=resource/eui_skins/item/TongYongWuPin_2_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            t.prototype.dataChanged.call(this),
                this.data && (SUI.setTextureAsync(this.imgBg, QualitySystem.getItemSmallBack(this.data.quality)), SUI.setTextureAsync(this.imgIcon, this.data.icon), this.txtName.text = this.data.name, this.txtNum.text = this.data.count)
        },
        e
}(eui.ItemRenderer);
