
var chooseItemEquip = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/zhenrong_xuanze_02wuqixunzhangSkin.exml"
            /*tpa=resource/eui_skins/item/zhenrong_xuanze_02wuqixunzhangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {
            this.btnEquip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectEquip, this)
        },
        i.selectEquip = function() {
            this.data.medal ? (129 == GuideManager.step && GuideManager.nextStep(), GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.WindowChooseItem_chooseNewMedal, {
                    id: this.data.id,
                    pos: this.data.pos
                }))) : (45 == GuideManager.step && GuideManager.nextStep(), GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.WindowChooseItem_chooseNewPart, {
                    id: this.data.id
                }))),
                WindowManager.getInstance().hide(WindowManager.windowType.ChoosItem)
        },
        i.dataChanged = function() {
            if (this.data) {
                this.txtName.textColor = QualitySystem.getColorByQuality(this.data.quality);
                this.data.upgradeLv;
                if (SUI.setTextureAsync(this.bg, this.data.url), SUI.setTextureAsync(this.pic, this.data.pic), this.txtUpgrade.text = "", this.txtBuff.text = this.data.upgradeInfo, this.txtUpgradeBuff.text = this.data.remouldInfo, this.data.equiped) {
                    var t = ShipManager.getInstance().getShipById(this.data.equiped);
                    t.shipid % 100;
                    this.equipedMark.visible = !0,
                        this.txtEquipOn.text = Locales.get("panel_accessories_own_txt_equip"),
                        this.txtShipName.text = ShipManager.getInstance().getShipNameByType(t.shipid),
                        this.txtShipName.textColor = QualitySystem.getColorByQuality(ConfigData.getDataByKey("shipData", t.shipid).quality)
                } else this.txtEquipOn.text = "",
                    this.txtShipName.text = "",
                    this.equipedMark.visible = !1
            }
        },
        e
}(eui.ItemRenderer);
