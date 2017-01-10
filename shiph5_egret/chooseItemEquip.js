
var WindowChooseItemType;
!
function(t) {
    t[t.ship = 0] = "ship",
        t[t.parts = 1] = "parts",
        t[t.medal = 2] = "medal",
        t[t.captain = 3] = "captain"
}(WindowChooseItemType || (WindowChooseItemType = {}));
var WindowChooseItem = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/zhuye_zhenrong_xuanze.exml"
            /*tpa=resource/eui_skins/zhuye_zhenrong_xuanze.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this._data = t.data,
                this._type = t.type,
                this._pos = t.pos,
                this._shipId = t.ship,
                this._type == WindowChooseItemType.parts ? this.txtFilter.text = Locales.get("txtFilterNoEquipPart") : this._type == WindowChooseItemType.medal ? this.txtFilter.text = Locales.get("txtFilterNoEquipMedal") : this.txtFilter.text = Locales.get("txtFilterNoEquipCaptain"),
                this.checkBoxChanged()
        },
        i.init = function() {
            (44 == GuideManager.step || 71 == GuideManager.step) && GuideManager.nextStep(),
                MainUI.instance.changeTopMode(topUIMode["null"]),
                this.checkbox.selected = !0,
                this.checkbox.touchEnabled = !1,
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.scroller.viewport = this.list
        },
        i.checkBoxChanged = function() {
            this.checkbox.selected ? this.updateData(this.removeEquipedItem(this._data)) : this.updateData(this._data)
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {},
        i.updateData = function(t) {
            this.txtEmpty.visible = !1;
            var e = [];
            this._type == WindowChooseItemType.ship ? (e = this.formatShipList(t), this.list.dataProvider = new eui.ArrayCollection(e), this.list.itemRenderer = chooseItemShip, this.txtEmpty.visible = !(e.length > 0), this.txtEmpty.text = Locales.get("None_ship")) : this._type == WindowChooseItemType.parts ? (e = this.formatPartList(t), this.list.dataProvider = new eui.ArrayCollection(e), this.list.itemRenderer = chooseItemEquip, this.txtEmpty.visible = !(e.length > 0), this.txtEmpty.text = Locales.get("None_parts")) : this._type == WindowChooseItemType.medal ? (e = this.formatMedalList(t), this.list.dataProvider = new eui.ArrayCollection(e), this.list.itemRenderer = chooseItemEquip, this.txtEmpty.visible = !(e.length > 0), this.txtEmpty.text = Locales.get("DecorationChangePanel_comment")) : (e = this.formatCaptainList(t), this.list.dataProvider = new eui.ArrayCollection(e), this.list.itemRenderer = chooseItemCaptain, this.txtEmpty.visible = !(e.length > 0), this.txtEmpty.text = Locales.get("None_captain"))
        },
        i.removeEquipedItem = function(t) {
            for (var e = [], a = 0; a < t.length; a++) this._type == WindowChooseItemType.parts ? ShipManager.getInstance().isPartEquiped(t[a].id) || e.push(t[a]) : this._type == WindowChooseItemType.medal ? ShipManager.getInstance().isMedalEquiped(t[a].id) || e.push(t[a]) : this._type == WindowChooseItemType.captain ? ShipManager.getInstance().isCaptainEquiped(t[a].id) || e.push(t[a]) : this._type == WindowChooseItemType.ship && (ShipManager.getInstance().isInArrange(t[a].id) || e.push(t[a]));
            return e
        },
        i.formatShipList = function(t) {
            for (var e = [], a = 0; a < t.length; a++) {
                var i = t[a],
                    n = ShipManager.getInstance().shipCfg[i.shipid],
                    s = {};
                s.id = i.id,
                    s.upgradeLv = i.shipid % 100,
                    s.pic = ShipManager.getInstance().getShipPicByType(i.shipid),
                    s.typeIcon = ShipManager.getInstance().getShipTypeIcon(n.shipType),
                    s.quality = Locales.get("labelQuality", n.quality),
                    s.qualityNum = n.quality,
                    s.url = QualitySystem.getShipSmallBack(n.quality),
                    s.level = Locales.get("labelShipLevel", i.level.toString(), UserData.getInstance().getPlayerLevel().toString()),
                    s.name = ShipdataParser.GetInstance().getItemById(i.shipid).name_l,
                    s.pos = this._pos,
                    72 == GuideManager.step && 407 == Math.floor(Number(i.shipid) / 100) ? e.unshift(s) : e.push(s)
            }
            return e
        },
        i.formatPartList = function(t) {
            for (var e = [], a = 0; a < t.length; a++) {
                var i = t[a],
                    n = ConfigData.getDataByKey("parts", i.partsid),
                    s = {};
                s.id = i.id,
                    s.upgradeLv = i.remouldlevel,
                    s.pic = Path.partsIconURL + n.icon,
                    s.type = Locales.get("panel_parts_txt_parttype_" + n.type),
                    s.quality = n.quality,
                    s.url = QualitySystem.getItemSmallBack(n.quality),
                    s.level = Locales.get("panel_reward_txt_growup_4", i.upgradelevel),
                    s.name = PartsParser.GetInstance().getItemById(i.partsid).name_l,
                    s.equiped = ShipManager.getInstance().isPartEquiped(i.id),
                    s.upgradeType = BuffData.getBuffNameById(n.upgradeType),
                    s.upgradeValue = PartsManager.getInstance().getUpgradeValue(i.partsid, i.upgradelevel),
                    s.upgradeInfo = s.upgradeType + ":" + s.upgradeValue,
                    s.remouldType = BuffData.getBuffNameById(n.remouldType),
                    s.remouldValue = PartsManager.getInstance().getRemouldValue(i.partsid, i.remouldlevel),
                    s.remouldInfo = s.remouldType + " +" + s.remouldValue + "%",
                    e.push(s)
            }
            return e
        },
        i.formatMedalList = function(t) {
            for (var e = [], a = 0; a < t.length; a++) {
                var i = t[a],
                    n = ConfigData.getDataByKey("medalData", i.soulid);
                if (9 != n.medalType) {
                    var s = {};
                    s.id = i.id,
                        s.medal = !0,
                        s.type = Locales.get("DecEquipPanel_txt_dec_btn"),
                        s.upgradeLv = i.promotelvl,
                        s.pic = Path.soulIconURL + n.icon,
                        s.quality = n.quality,
                        s.level = "Lv." + Utils.getMetalLvByExp(i.point, "exp" + n.exp),
                        s.url = QualitySystem.getItemSmallBack(n.quality),
                        s.name = MedaldataParser.GetInstance().getItemById(i.soulid).name_l,
                        s.equiped = ShipManager.getInstance().isMedalEquiped(i.id),
                        s.upgradeType = BuffData.getBuffNameById(n.buff),
                        s.upgradeValue = n.buffValue,
                        s.upgradeInfo = s.upgradeType + ":" + s.upgradeValue,
                        s.remouldType = BuffData.getBuffNameById(n.remouldType),
                        s.remouldValue = SoulManager.getInstance().getPercentage(i.promotelvl, n.remouldValue),
                        s.remouldInfo = s.remouldType + " +" + s.remouldValue,
                        s.pos = this._pos,
                        e.push(s)
                }
            }
            return e
        },
        i.formatCaptainList = function(t) {
            for (var e = [], a = 0; a < t.length; a++) {
                var i = t[a],
                    n = ConfigData.getDataByKey("captainData", i.id),
                    s = {};
                s.id = i.id,
                    s.shipid = this._shipId,
                    s.upgradelevel = i.upgradelevel,
                    s.promotelevel = i.promotelevel,
                    s.data = n,
                    s.quality = n.quality,
                    s.name = CaptaindataParser.GetInstance().getItemById(i.id).name_l,
                    s.level = i.upgradelevel + Locales.get("ui_globalCampBattle_RewardPanel_ji"),
                    s.pic = CaptainManager.getInstance().getCaptainPicById(n.picture, !0),
                    s.url = QualitySystem.getCaptainSmallBack(n.quality),
                    s.qualityImg = QualitySystem.getCaptainFrame(n.quality),
                    e.push(s)
            }
            return e
        },
        e
}(WindowBase);
