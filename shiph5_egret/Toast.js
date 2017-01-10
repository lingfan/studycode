
var PVEChooseAreaItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/item/zhanyi_Bar3Skin.exml"
            /*tpa=resource/eui_skins/item/zhanyi_Bar3Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {},
        i.dataChanged = function() {
            var t = this.data.userData;
            this.txtName.text = t.name_l;
            var e = StageDataLib.instance.getCampaignListByArea(t.id),
                a = MainWorldManager.instance.getCurrentBattleType();
            a != MainWorldManager.BATTLE_TYPE_NORMAL && (this.imgStar.texture = RES.getRes("iconjinxing_png"));
            for (var i = 0,
                    n = 0,
                    s = 0,
                    r = e.length; r > s; ++s) {
                var o = e[s],
                    l = CampaigndataParser.GetInstance().getItemById(o);
                if (a == MainWorldManager.BATTLE_TYPE_NORMAL) {
                    var h = StageDataLib.instance.getAreaAllStarByCampaign(o);
                    i += h.getStar,
                        n += h.totalStar
                } else {
                    var c = (StageSpecialDataLib.instance.getDataByCampaignId(o), MainWorldManager.instance.getSpecialList()[l.id]);
                    c && c.serverData && (i += c.serverData.star),
                        n += 3
                }
                this.txtProgress.text = i + "/" + n
            }
        },
        e
}(eui.ItemRenderer);
