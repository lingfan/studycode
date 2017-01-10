
var CaptainCommandItem = function(t) {
    function e(e) {
        t.call(this),
            this.sData = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/shipCommandItemSkin.exml"
            /*tpa=resource/eui_skins/item/shipCommandItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            ConfigData.preLoadList(["shipData", "captainData"],
                    function() {
                        t.initData()
                    }),
                WindowShipInfo.instance && WindowShipInfo.instance.reSizeItem()
        },
        i.initData = function() {
            var t, e = ConfigData.getDataByKey("captainData", this.sData.id),
                a = Utils.getListByKeyValue("captainid", this.sData.id, ShipManager.getInstance().soldierList);
            if (0 == a.length) this.nameTxt.text = Locales.get("noInSoldier"),
                this.nameTxt.textColor = 13421772;
            else {
                var i = Utils.getListByKeyValue("id", a[0].shipid, ShipManager.getInstance().shipList);
                t = ConfigData.getDataByKey("shipData", i[0].shipid),
                    this.nameTxt.text = ShipdataParser.GetInstance().getItemById(i[0].shipid).name_l,
                    Utils.getImgByUrl(ShipManager.getInstance().getShipTypeIcon(t.shipType), this.icon.imgType),
                    Utils.getImgByUrl(QualitySystem.getShipSmallBack(t.quality), this.icon.imgBg),
                    Utils.getImgByUrl(ShipManager.getInstance().getShipPicByType(i[0].shipid), this.icon.imgIcon)
            }
            for (var n = 0,
                    s = 1; 3 > s; s++) this.sData.upgradelevel >= e["activeLvLimit" + s] && t && t.country == e.country && (n += 1);
            var r = Utils.getGoodAtShip(e.goodat)[0];
            if (this.activeTxt.text = Locales.get("panel_jianzhang_detail_comment_12") + n + "/2", 1 == n ? (this.pro1Txt.textFlow = Utils.textFlowByStr(Locales.get("activePro1", e.activeLvLimit1, Locales.get("panel_jianzhang_shuxing1_guojia_" + e.country), BuffData.getBuffNameById(e.activeType1), Number(e.activeValue1 / 100) + "%")), this.pro2Txt.textFlow = Utils.textFlowByStr(Locales.get("activePro2", e.activeLvLimit2, r, BuffData.getBuffNameById(e.activeType2), Number(e.activeValue2 / 100) + "%"), 13421772, !0)) : 2 == n ? (this.pro1Txt.textFlow = Utils.textFlowByStr(Locales.get("activePro1", e.activeLvLimit1, Locales.get("panel_jianzhang_shuxing1_guojia_" + e.country), BuffData.getBuffNameById(e.activeType1), Number(e.activeValue1 / 100) + "%")), this.pro2Txt.textFlow = Utils.textFlowByStr(Locales.get("activePro2", e.activeLvLimit2, r, BuffData.getBuffNameById(e.activeType2), Number(e.activeValue2 / 100) + "%"))) : (this.pro1Txt.textFlow = Utils.textFlowByStr(Locales.get("activePro1", e.activeLvLimit1, Locales.get("panel_jianzhang_shuxing1_guojia_" + e.country), BuffData.getBuffNameById(e.activeType1), Number(e.activeValue1 / 100) + "%"), 13421772, !0), this.pro2Txt.textFlow = Utils.textFlowByStr(Locales.get("activePro2", e.activeLvLimit2, r, BuffData.getBuffNameById(e.activeType2), Number(e.activeValue2 / 100) + "%"), 13421772, !0)), e.matchShip) {
                for (var o = e.matchShip.split("|"), r = "", s = 1; s < o.length; s++) r += ShipdataParser.GetInstance().getItemById(o[s]).name_l + ",";
                this.reTxt.text = Locales.get("panel_jianzhang_detail_comment_25") + r.substring(0, r.length - 1)
            } else this.reTxt.text = ""
        },
        e
}(eui.Component);
