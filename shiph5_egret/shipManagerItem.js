
var shipInfoWindowType;
!
function(t) {
    t[t.cultivate = 0] = "cultivate",
        t[t.preview = 1] = "preview",
        t[t.handbook = 2] = "handbook",
        t[t.captainInfo = 3] = "captainInfo",
        t[t.captainPreview = 4] = "captainPreview",
        t[t.captainHandbook = 5] = "captainHandbook",
        t[t.partsInfo = 6] = "partsInfo",
        t[t.partsPreview = 7] = "partsPreview",
        t[t.soulInfo = 8] = "soulInfo",
        t[t.soulPreview = 9] = "soulPreview"
}(shipInfoWindowType || (shipInfoWindowType = {}));
var shipInfoItemType;
!
function(t) {
    t[t.name = 0] = "name",
        t[t.info = 1] = "info",
        t[t.skill = 2] = "skill",
        t[t.remould = 3] = "remould",
        t[t.history = 4] = "history",
        t[t.detail = 5] = "detail",
        t[t.weapon = 6] = "weapon",
        t[t.captainInfo = 7] = "captainInfo",
        t[t.captainCommand = 8] = "captainCommand",
        t[t.captainRank = 9] = "captainRank",
        t[t.captainintro = 10] = "captainintro",
        t[t.captainResume = 11] = "captainResume",
        t[t.partsInfo = 12] = "partsInfo",
        t[t.partsRemould = 13] = "partsRemould",
        t[t.partsResume = 14] = "partsResume",
        t[t.soulInfo = 15] = "soulInfo",
        t[t.soulRemould = 16] = "soulRemould",
        t[t.soulResume = 17] = "soulResume"
}(shipInfoItemType || (shipInfoItemType = {}));
var WindowShipInfo = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/zhanjianxinxiSkin.exml"
            /*tpa=resource/eui_skins/zhanjianxinxiSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            var a = this;
            e.instance = this,
                this.sData = t.data,
                this.infoType = t.type,
                this.battleData = t.battle,
                this.pos = t.pos,
                this.paramesData = t,
                ConfigData.preLoadList(["shipData", "shipModelData", "captainData", "parts", "medalData"],
                    function() {
                        a.initUI()
                    })
        },
        i.setStatusByKey = function(t, e, a) {
            var i, n;
            if (this.infoType == shipInfoWindowType.captainInfo ? i = ShipManager.getInstance().isCaptainEquiped(t) : this.infoType == shipInfoWindowType.partsInfo ? i = ShipManager.getInstance().isPartEquiped(t) : this.infoType == shipInfoWindowType.soulInfo ? i = ShipManager.getInstance().isMedalEquiped(t) : this.infoType == shipInfoWindowType.cultivate && (n = ShipManager.getInstance().isInArrange(t)), i) {
                var s = ShipManager.getInstance().getShipById(i);
                Number(s.shipid.toString().substr(3));
                this.equipTxt.text = Locales.get(e) + s.name
            } else n ? this.equipTxt.text = Locales.get("panel_marine_bench3") : this.equipTxt.text = Locales.get(a)
        },
        i.initUI = function() {
            var t = this;
            (47 == GuideManager.step || 74 == GuideManager.step) && GuideManager.nextStep(),
                this.vessel.removeChildren(),
                this.mainIcon.visible = !1,
                this.spotImage.visible = !1;
            var e;
            this.infoType == shipInfoWindowType.cultivate ? this.setStatusByKey(this.sData.id, "panel_marine_bench3", "free") : this.infoType == shipInfoWindowType.captainInfo ? this.setStatusByKey(this.sData.id, "panel_jianzhang_detail_comment_11", "panel_jianzhang_detail_comment_20") : this.infoType == shipInfoWindowType.partsInfo ? this.setStatusByKey(this.sData.id, "panel_jianzhang_detail_comment_11", "panel_jianzhang_detail_comment_20") : this.infoType == shipInfoWindowType.soulInfo ? this.setStatusByKey(this.sData.id, "panel_jianzhang_detail_comment_11", "panel_jianzhang_detail_comment_20") : this.equipTxt.text = "",
                this.infoType < 3 ? (e = ConfigData.getDataByKey("shipData", this.sData.shipid), Utils.getImgByUrl(ShipManager.getInstance().getShipPicByType(this.sData.shipid), this.icon), Utils.getImgByUrl(ShipManager.getInstance().getShipTypeIcon(e.shipType), this.typeImg), Utils.getImgByUrl(Path.countryURL + "country_" + e.country + ".jpg", this.countryImg), this.typeTxt.text = ShipdataParser.GetInstance().getItemById(this.sData.shipid).name_l, this.typeTxt.textColor = QualitySystem.getColorByQuality(e.quality), this.sData.id == ShipManager.getInstance().captionId ? this.mainIcon.visible = !0 : this.mainIcon.visible = !1) : this.infoType < 6 ? (e = ConfigData.getDataByKey("captainData", this.sData.id), this.typeImg.visible = !1, Utils.getImgByUrl(Path.captainIconURL + e.picture, this.icon), Utils.getImgByUrl(Path.countryURL + "country_" + e.country + ".jpg", this.countryImg), this.typeTxt.text = CaptaindataParser.GetInstance().getItemById(this.sData.id).name_l, this.typeTxt.textColor = QualitySystem.getColorByQuality(e.quality), this.icon.width = 234 * .7, this.icon.height = 325 * .7) : this.infoType < 8 ? (e = ConfigData.getDataByKey("parts", this.sData.partsid), this.typeImg.visible = !1, this.countryImg.visible = !1, Utils.getImgByUrl(Path.partsIconURL + e.icon, this.icon), this.typeTxt.text = PartsParser.GetInstance().getItemById(e.id).name_l, this.typeTxt.textColor = QualitySystem.getColorByQuality(e.quality), this.icon.width = this.icon.height = 210) : (e = ConfigData.getDataByKey("medalData", this.sData.soulid), this.typeImg.visible = !1, this.countryImg.visible = !1, Utils.getImgByUrl(Path.soulIconURL + e.icon_1, this.icon), this.icon.width = 274 * .7, this.icon.height = 294 * .7, this.typeTxt.text = MedaldataParser.GetInstance().getItemById(this.sData.soulid).name_l, this.typeTxt.textColor = QualitySystem.getColorByQuality(e.quality)),
                Utils.getImgByUrl(QualitySystem.getShipBack(e.quality), this.bgIcon,
                    function() {
                        t.bgIcon.width = 639,
                            t.bgIcon.height = 285
                    }),
                this.icon.x = (GameData.designWidth - this.icon.width) / 2;
            var a;
            this.infoType == shipInfoWindowType.cultivate ? a = 36 == GuideManager.step ? [shipInfoItemType.name, shipInfoItemType.info, shipInfoItemType.skill] : [shipInfoItemType.name, shipInfoItemType.info, shipInfoItemType.skill, shipInfoItemType.remould, shipInfoItemType.history] : this.infoType == shipInfoWindowType.preview ? a = [shipInfoItemType.info, shipInfoItemType.skill, shipInfoItemType.remould, shipInfoItemType.history] : this.infoType == shipInfoWindowType.handbook ? a = [shipInfoItemType.detail, shipInfoItemType.weapon, shipInfoItemType.history] : this.infoType == shipInfoWindowType.captainInfo ? a = [shipInfoItemType.captainInfo, shipInfoItemType.captainCommand, shipInfoItemType.captainRank, shipInfoItemType.captainintro] : this.infoType == shipInfoWindowType.captainPreview ? a = [shipInfoItemType.captainInfo, shipInfoItemType.captainCommand, shipInfoItemType.captainRank, shipInfoItemType.captainintro] : this.infoType == shipInfoWindowType.captainHandbook ? a = [shipInfoItemType.captainInfo, shipInfoItemType.captainResume] : this.infoType == shipInfoWindowType.partsInfo ? a = [shipInfoItemType.partsInfo, shipInfoItemType.partsRemould, shipInfoItemType.partsResume] : this.infoType == shipInfoWindowType.partsPreview ? a = [shipInfoItemType.partsInfo, shipInfoItemType.partsRemould, shipInfoItemType.partsResume] : this.infoType == shipInfoWindowType.soulInfo ? a = 9 == e.medalType ? [shipInfoItemType.soulInfo, shipInfoItemType.soulResume] : [shipInfoItemType.soulInfo, shipInfoItemType.soulRemould, shipInfoItemType.soulResume] : this.infoType == shipInfoWindowType.soulPreview && (a = 9 == e.medalType ? [shipInfoItemType.soulInfo, shipInfoItemType.soulResume] : [shipInfoItemType.soulInfo, shipInfoItemType.soulRemould, shipInfoItemType.soulResume]),
                this.itemList = [];
            var i;
            (this.infoType == shipInfoWindowType.cultivate || this.infoType == shipInfoWindowType.captainInfo || this.infoType == shipInfoWindowType.partsInfo || this.infoType == shipInfoWindowType.soulInfo) && (i = !0);
            for (var n = 0; n < a.length; n++) {
                var s = a[n],
                    r = void 0;
                n == a.length - 1 && (this.resizeBool = !0),
                    s == shipInfoItemType.name ? r = new ShipNameItem(this.sData) : s == shipInfoItemType.info || s == shipInfoItemType.captainInfo ? r = new ShipInfoItem(this.sData, s, i ? this : null) : s == shipInfoItemType.skill ? r = new ShipSkillItem(this.sData, i ? this : null) : s > 2 && 7 > s || s > 8 && 15 > s || s > 14 && 18 > s ? r = new ShipIntroduceItem(this.sData, s, i ? this : null) : s == shipInfoItemType.captainCommand && (r = new CaptainCommandItem(this.sData)),
                    this.vessel.addChild(r),
                    this.itemList.push(r)
            }
            if (this.reSizeItem(), this.battleData) {
                if (this.infoType == shipInfoWindowType.captainInfo) {
                    var o = ConfigData.getDataByKey("captainData", this.sData.id);
                    this.spotImage.visible = RedPointManager.getPointShow({
                            quality: Number(o.quality)
                        },
                        RedPointType.captain)
                } else if (this.infoType == shipInfoWindowType.cultivate) {
                    var o = ConfigData.getDataByKey("shipData", this.sData.shipid);
                    this.spotImage.visible = RedPointManager.getPointShow({
                            quality: Number(o.quality)
                        },
                        RedPointType.ships)
                } else if (this.infoType == shipInfoWindowType.partsInfo) {
                    var o = ConfigData.getDataByKey("parts", this.sData.partsid);
                    this.spotImage.visible = RedPointManager.getPointShow({
                            quality: Number(o.quality),
                            parts: this.sData,
                            equipType: this.paramesData.equipType,
                            shipType: this.paramesData.shipType
                        },
                        RedPointType.parts)
                } else if (this.infoType == shipInfoWindowType.soulInfo) {
                    var o = ConfigData.getDataByKey("medalData", this.sData.soulid);
                    this.spotImage.visible = RedPointManager.getPointShow({
                            quality: Number(o.quality),
                            medalType: o.medalType,
                            soul: this.sData
                        },
                        RedPointType.medals)
                }
                this.changeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeShipHandler, this),
                    this.scroller.height = 560
            } else this.changeGroup.visible = !1;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this),
                75 == GuideManager.step && (this.scroller.viewport.scrollV = 300)
        },
        i.reSizeItem = function() {
            if (this.resizeBool) {
                for (var t, e = 1; e < this.itemList.length; e++) t = this.itemList[e - 1],
                    this.itemList[e].y = t.y + t.height;
                this.itemList.length > 0 && (t = this.itemList[this.itemList.length - 1], this.vessel.height = t.y + t.height)
            }
        },
        i.changeShipHandler = function(t) {
            if (this.infoType == shipInfoWindowType.partsInfo) WindowManager.getInstance().show(WindowManager.windowType.ChoosItem, {
                data: this.battleData,
                type: WindowChooseItemType.parts
            });
            else if (this.infoType == shipInfoWindowType.cultivate) {
                var e = ShipManager.getInstance().getEmptyShips();
                e.sort(function(t, e) {
                        var a = ConfigData.getDataByKey("shipData", t.shipid),
                            i = ConfigData.getDataByKey("shipData", e.shipid);
                        return 1e3 * Number(a.quality) + t.level > 1e3 * Number(i.quality) + e.level ? -1 : 1
                    }),
                    WindowManager.getInstance().show(WindowManager.windowType.ChoosItem, {
                        data: e,
                        type: WindowChooseItemType.ship,
                        pos: this.battleData
                    })
            } else this.infoType == shipInfoWindowType.captainInfo ? WindowManager.getInstance().show(WindowManager.windowType.ChoosItem, {
                data: CaptainData.captainlist,
                type: WindowChooseItemType.captain,
                ship: ShipManager.getInstance().isCaptainEquiped(this.sData.id)
            }) : this.infoType == shipInfoWindowType.soulInfo && WindowManager.getInstance().show(WindowManager.windowType.ChoosItem, {
                data: this.battleData,
                type: WindowChooseItemType.medal,
                pos: this.pos
            });
            this.closeHandler(null)
        },
        i.clear = function() {
            e.instance = null,
                WindowManager.getInstance().clearCache(WindowManager.windowType.ShipInfo)
        },
        i.closeHandler = function(t) {
            this.destroy()
        },
        e
}(WindowBase);
