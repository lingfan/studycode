
var PreciousBattleItem = function(t) {
    function e(e, a, i) {
        t.call(this),
            this.iData = e,
            this.type = a,
            this.myTarget = i,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/ZB_DuoBaoQiBing_1_Skin.exml"
            /*tpa=resource/eui_skins/item/ZB_DuoBaoQiBing_1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t;
            if (Number(this.iData.uid) < 1e5) {
                var e = ConfigData.getDataByKey("robNPCData", this.iData.uid);
                this.txtName.text = e.name_l
            } else this.txtName.text = this.iData.name;
            this.myTarget.pData.type == preciousBattleType.part ? (t = ConfigData.getDataByKey("partspieces", String(this.myTarget.pData.id)), t = ConfigData.getDataByKey("parts", t.part_id)) : this.myTarget.pData.type == preciousBattleType.medal && (t = ConfigData.getDataByKey("medalpiece", this.myTarget.pData.id), t = ConfigData.getDataByKey("medalData", t.medal_id)),
                this.btnRobTen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.robTenHandler, this),
                this.btnRobOne.addEventListener(egret.TouchEvent.TOUCH_TAP, this.robOneHandler, this),
                this.txtLevel.text = Locales.get("panel_reward_txt_growup_4", this.iData.level),
                Utils.getImgByUrl(Path.GetCampPicUrl(this.iData.camp, 3), this.imgCamp),
                2 == this.type ? (this.txtProbility.text = Locales.get("panel_plunderfight_rate_1"), this.btnRobTen.enabled = !1) : Number(t.quality) < 4 ? this.txtProbility.text = Locales.get("panel_plunderfight_rate_2") : Number(t.quality) < 5 ? this.txtProbility.text = Locales.get("panel_plunderfight_rate_3") : this.txtProbility.text = Locales.get("panel_plunderfight_rate_4");
            for (var a = 0; 3 > a; a++) {
                var i = this["ship" + (a + 1)];
                if (this.iData.modelid[a]) {
                    var t;
                    if (1 == this.type) {
                        t = ConfigData.getDataByKey("npcData", this.iData.modelid[a]);
                        var n = ConfigData.getDataByKey("shipModelData", t.modelId);
                        Utils.getImgByUrl(ShipManager.getInstance().getShipTypeIcon(t.shipType), i.imgType),
                            Utils.getImgByUrl(Path.shipURL + "y_" + n.url, i.imgIcon)
                    } else t = ConfigData.getDataByKey("shipData", this.iData.modelid[a]),
                        Utils.getImgByUrl(ShipManager.getInstance().getShipTypeIcon(t.shipType), i.imgType),
                        Utils.getImgByUrl(ShipManager.getInstance().getShipPicByType(this.iData.modelid[a]), i.imgIcon);
                    this["txtShipName" + (a + 1)].text = Locales.get(t.name_l),
                        Utils.getImgByUrl(QualitySystem.getShipSmallBack(t.quality), i.imgBg)
                } else i.imgType.source = "",
                    this["txtShipName" + (a + 1)].text = ""
            }
        },
        i.robTenHandler = function(t) {
            WindowPreciousBattle.selectedItem = this,
                this.armyName = this.iData.name,
                this.armyPower = this.iData.power,
                this.armyCapm = this.iData.camp,
                WindowPreciousBattle.preciousBattle(1)
        },
        i.robOneHandler = function(t) {
            if (WindowPreciousBattle.selectedItem = this, 1 == this.type) {
                var e = ConfigData.getDataByKey("robNPCData", this.iData.uid);
                this.armyName = e.name_l,
                    this.armyPower = Number(e.power),
                    this.armyCapm = Number(e.camp)
            } else this.armyName = this.iData.name,
                this.armyPower = this.iData.power,
                this.armyCapm = this.iData.camp;
            WindowPreciousBattle.preciousBattle(),
                106 == GuideManager.step && GuideManager.clearMask()
        },
        e
}(eui.Component);
