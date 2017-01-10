
var guildNotifyFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/JunTuan_5_Skin.exml"
            /*tpa=resource/eui_skins/item/JunTuan_5_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            t.prototype.dataChanged.call(this),
                this.data && ("notify" == this.data.type ? (this.skinName = "resource/eui_skins/item/JunTuan_6_Skin.exml", this.txtName.text = this.data.txt) : (this.skinName = "resource/eui_skins/item/JunTuan_5_Skin.exml"
                    /*tpa=resource/eui_skins/item/JunTuan_5_Skin.exml*/
                    , this.txtName.textFlow = (new egret.HtmlTextParser).parser(this.data.txt)))
        },
        e
}(eui.ItemRenderer);
