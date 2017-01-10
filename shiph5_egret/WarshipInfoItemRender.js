
var CampBattleItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/item/ZB_ZhenYingZhanReportItemSkin.exml"
            /*tpa=resource/eui_skins/item/ZB_ZhenYingZhanReportItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {},
        i.dataChanged = function() {
            this.txtContent.textFlow = Utils.textFlowByStr(this.data.content)
        },
        e
}(eui.ItemRenderer);
