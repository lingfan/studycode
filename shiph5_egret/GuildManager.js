
var guildDonateNotifyFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/JunTuan_7_Skin.exml"
            /*tpa=resource/eui_skins/item/JunTuan_7_Skin.exml*/
            ,
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            t.prototype.dataChanged.call(this),
                this.data && (this.txtName.textFlow = (new egret.HtmlTextParser).parser(this.data.txt))
        },
        e
}(eui.ItemRenderer);
