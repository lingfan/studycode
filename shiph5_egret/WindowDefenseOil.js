
var chooseItemCaptain = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/zhenrong_xuanze_03jianzhangSkin.exml"
            /*tpa=resource/eui_skins/item/zhenrong_xuanze_03jianzhangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {
            this.btnEquip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectEquip, this)
        },
        i.selectEquip = function() {
            136 == GuideManager.step && GuideManager.nextStep(),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.WindowChooseItem_chooseNewCaptain, {
                    id: this.data.id,
                    "new": !0
                })),
                WindowManager.getInstance().hide(WindowManager.windowType.ChoosItem)
        },
        i.dataChanged = function() {
            var t = this;
            if (this.data) {
                var e = this.data.upgradelevel,
                    a = this.data.data;
                this.txtName.textColor = QualitySystem.getColorByQuality(this.data.quality),
                    SUI.setTextureAsync(this.bg, this.data.url),
                    SUI.setTextureAsync(this.bgCaptain, this.data.qualityImg),
                    SUI.setTextureAsync(this.pic, this.data.pic,
                        function() {
                            t.pic.width = 108,
                                t.pic.heigth = 110
                        }),
                    SUI.setTextureAsync(this.countryIcon, CaptainManager.getInstance().getCountryIconById(a.country));
                for (var i = e >= a.activeLvLimit1,
                        n = e >= a.activeLvLimit2,
                        s = ConfigData.getDataByKey("shipData", ShipManager.getInstance().getShipById(this.data.shipid).shipid), r = s.country == a.country ? "#00FF00" + Locales.get("panel_jianzhang_change_2") + "#" : "#FF0000" + Locales.get("panel_jianzhang_change_3") + "#", o = "#FF0000" + Locales.get("panel_jianzhang_change_3") + "#", l = Utils.getGoodAtShip(a.goodat)[1], h = 0; h < l.length; h++)
                    if (Number(s.shipType) == l[h]) {
                        o = "#00FF00" + Locales.get("panel_jianzhang_change_2") + "#";
                        break
                    }
                this.pro1Txt.textFlow = Utils.textFlowByStr(r + Locales.get("activePro1", a.activeLvLimit1, Locales.get("panel_jianzhang_shuxing1_guojia_" + a.country), BuffData.getBuffNameById(a.activeType1), Number(a.activeValue1 / 100) + "%"), 13421772, !i),
                    this.pro2Txt.textFlow = Utils.textFlowByStr(o + Locales.get("activePro2", a.activeLvLimit2, Utils.getGoodAtShip(a.goodat)[0], BuffData.getBuffNameById(a.activeType2), Number(a.activeValue2 / 100) + "%"), 13421772, !n)
            }
        },
        e
}(eui.ItemRenderer);
