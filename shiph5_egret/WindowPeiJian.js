
var partMetalType;
!
function(t) {
    t[t.parts = 0] = "parts",
        t[t.metals = 1] = "metals"
}(partMetalType || (partMetalType = {}));
var WindowPartsMetals = function(t) {
    function e() {
        t.call(this, !1),
            this._selectedNum = 0,
            this._addExp = 0,
            this.skinName = "resource/eui_skins/XunZhangYangChengSkin.exml"
            /*tpa=resource/eui_skins/XunZhangYangChengSkin.exml*/
    }
    __extends(e, t);
    var a = __define,
        i = e,
        n = i.prototype;
    return n.clear = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.PARTS_UPDATE, this.upgradePart, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.SOULS_UPDATE, this.upgradeSoul, this)
        },
        a(n, "addExp",
            function() {
                return this._addExp
            },
            function(t) {
                this._addExp = t,
                    this.getExpTxt.text = t.toString()
            }),
        a(n, "selectedNum",
            function() {
                return this._selectedNum
            },
            function(t) {
                this._selectedNum = t,
                    this._selectedNum > 5 && (this._selectedNum = 5, Toast.launch(Locales.get("medal_maxChoose")))
            }),
        n.setData = function(t) {
            var e = this;
            this.cData = t.data,
                this.wType = t.type,
                this.tabIndex = t.index,
                ConfigData.preLoadList(["parts", "medalData", "medalexpData", "partsUpgradeData"],
                    function() {
                        ConfigData.preLoadDats(["medalexpData"], [MedalexpdataParser],
                            function() {
                                e.initUI()
                            },
                            e)
                    }),
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function(t) {
                        e.close()
                    },
                    this)
        },
        n.clearVessel = function() {
            this.metalUgroup.visible = this.rmGroup.visible = this.pRemouldGroup.visible = this.pUpdateGroup.visible = this.parts.visible = !1,
                this.arrow2.visible = this.arrow1.visible = !0
        },
        n.initUI = function() {
            var t = this;
            48 == GuideManager.step && GuideManager.nextStep(),
                MainUI.instance.changeTopMode(topUIMode.simple),
                this.scroller.viewport = this.vessel;
            var e;
            if (this.wType == partMetalType.parts) {
                this.tabList = [
                        ["partUpdate", "panel_building_upgrade"],
                        ["partRemoudle", "panel_shipyard_shiptransform_btn_transform"]
                    ],
                    e = ConfigData.getDataByKey("parts", this.cData.partsid),
                    Utils.getImgByUrl(Path.partsIconURL + e.icon, this.icon),
                    this.icon.width = 210,
                    this.icon.height = 210;
                var a = Utils.getListByKeyValue("partslist", this.cData.id, ShipManager.getInstance().soldierList);
                if (a.length > 0) {
                    var i = Utils.getListByKeyValue("id", a[0].shipid, ShipManager.getInstance().shipList);
                    i.length > 0 && (this.eqTxt.text = Locales.get("DecListPanel_txt_item_desc") + i[0].name)
                } else this.eqTxt.text = "";
                this.typeTxt.text = e.name_l,
                    this.typeTxt.textColor = QualitySystem.getColorByQuality(e.quality),
                    this.pTypeTxt.text = Locales.get("panel_plunder_txt_ckb_" + e.type),
                    this.pEquitTxt.text = Utils.getGoodAtShip(e.equipfor)[0]
            } else this.wType == partMetalType.metals && (this.tabList = [
                ["metalUpdate", "panel_building_upgrade"],
                ["metalRemoudle", "panel_shipyard_shiptransform_btn_transform"]
            ], e = ConfigData.getDataByKey("medalData", this.cData.soulid), Utils.getImgByUrl(Path.soulIconURL + e.icon, this.icon), this.icon.width = 210, this.icon.height = 210, this.cData.equipedshipid ? this.eqTxt.text = Locales.get("DecListPanel_txt_item_desc") + ShipManager.getInstance().getShipById(this.cData.equipedshipid).name : this.eqTxt.text = "", this.typeTxt.text = MedaldataParser.GetInstance().getItemById(this.cData.soulid).name_l, this.typeTxt.textColor = QualitySystem.getColorByQuality(MedaldataParser.GetInstance().getItemById(this.cData.soulid).quality));
            Utils.getImgByUrl(QualitySystem.getShipBack(e.quality), this.bgIcon,
                    function() {
                        t.bgIcon.width = 639,
                            t.bgIcon.height = 285
                    }),
                this.updagteTabBtn(),
                this[this.tabList[this.tabIndex - 1][0]](),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.PARTS_UPDATE, this.upgradePart, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.SOULS_UPDATE, this.upgradeSoul, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.SOULS_REMOUDLE, this.remoduleSoul, this)
        },
        n.updagteTabBtn = function() {
            for (var t = 1; 3 > t; t++) {
                var e = this["t" + t];
                e.name = t.toString(),
                    this.tabList[t - 1] ? (e.label = Locales.get(this.tabList[t - 1][1]), e.hasEventListener(egret.TouchEvent.TOUCH_TAP) || e.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tabHandler, this)) : e.visible = !1,
                    t == this.tabIndex && e && this.setBtnStatus(e),
                    this.wType == partMetalType.parts ? 1 == t ? this["tp" + t].visible = RedPointManager.getPartUpdateBool(this.cData) > 0 : this["tp" + t].visible = RedPointManager.getPartRemoduleBool(this.cData) > 0 : this.wType == partMetalType.metals && (1 == t ? this["tp" + t].visible = RedPointManager.getMedalUpdateBool(this.cData) > 0 : this["tp" + t].visible = RedPointManager.getMedalRemoduleBool(this.cData) > 0)
            }
        },
        n.updateMotion = function() {
            var t = this,
                e = Path.effectUrl + "effect_shiplevelup/effect_shiplevelup.json",
                a = Path.effectUrl + "effect_shiplevelup/texture.json",
                i = Path.effectUrl + "effect_shiplevelup/texture.png";
            Utils.createDragonBone(e, a, i, "effect_shiplevelup", "normal",
                    function(e, a) {
                        e && (t.addChild(e.display), e.display.x = 330, e.display.y = 280, e.display.scaleX = 2, e.display.scaleY = 2, e.animation.gotoAndPlay("normal"), e.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                            function() {
                                Utils.removeDragonBone(e)
                            },
                            void 0))
                    },
                    this),
                this.updagteTabBtn()
        },
        n.remoduleSoul = function(t) {
            Main.trace(Log.objectToString(this.cData), "------------->"),
                this.cData && this.cData.id && (this.cData = ShipManager.getInstance().getSoulById(this.cData.id), this.cData && (this[this.tabList[this.tabIndex - 1][0]](), this.updateMotion()))
        },
        n.metalUpdate = function() {
            this.clearVessel(),
                this.metalUgroup.visible = !0;
            var t;
            if (this.cData) {
                var e = ConfigData.getDataByKey("medalData", this.cData.soulid);
                if (t = this.cData.point ? Utils.getMetalLvByExp(this.cData.point, "exp" + e.exp) : 1, null != this.jiluLv) {
                    var a;
                    t - this.jiluLv;
                    a = Locales.get("panel_parts_upgrade_txt_windword_6"),
                        Toast.launch(a),
                        this.jiluLv = null
                }
                ConfigData.getDataByKey("medalexpData", t),
                    ConfigData.getDataByKey("medalexpData", t + 1),
                    ConfigData.getDataByKey("medalexpData", 1);
                this.umLvTxt.text = t.toString();
                var i = this.cData.point - Utils.getMetalExpByLv(t, "exp" + e.exp),
                    n = Utils.getMetalExpByLv(t + 1, "exp" + e.exp) - Utils.getMetalExpByLv(t, "exp" + e.exp);
                this.expTxt.text = i + "/" + n,
                    this.expBar.value = Math.floor(i / n * 100),
                    this.needExp = n - i,
                    this.fireTypeTxt.text = BuffData.getBuffNameById(e.buff) + ":",
                    this.fireTxt.text = BuffData.getBuffValue(e, t);
                for (var s = 1; 6 > s; s++) this["mi" + s].addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectedHandler, this);
                this.uLvBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.updateMedalHandler, this),
                    this.uAutoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.updateAutoMedalHandler, this),
                    this.updateMetal()
            }
        },
        n.updateAutoMedalHandler = function(t) {
            this.clearMetal();
            for (var e = ShipManager.getInstance().soulList, a = 0, i = 0; i < e.length; i++) {
                var n = ConfigData.getDataByKey("medalData", e[i].soulid);
                if (!ShipManager.getInstance().isMedalEquiped(e[i].id) && e[i].soulid != this.cData.soulid && (this.selectedList[e[i].id] = {
                            id: e[i].soulid,
                            pic: Path.soulIconURL + n.icon,
                            quality: n.quality
                        },
                        9 == Number(n.medalType) ? this.addExp += Number(n.exp) : this.addExp += e[i].point, a++, 5 == a)) break
            }
            0 == a ? Toast.launch("材料不足!") : this.selectedDoneHandler(null)
        },
        n.updateMedalHandler = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceSoulEat),
                a = [];
            e.id = this.cData.id.toString();
            for (var i in this.selectedList) a.push(i.toString());
            0 == a.length ? Toast.launch("请添加材料!") : (e.soullist = a, Transport.instance.send(e), this.jiluLv = Number(this.umLvTxt.text))
        },
        n.removeSelectedHandler = function(t) {
            MainUI.instance.changeTopMode(topUIMode.simple),
                MainUI.instance.setBottomVisible(!0),
                this.selsectGroup.visible = !1,
                this.panelGroup.visible = this.metalUgroup.visible = !0,
                this.closeBtn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeSelectedHandler, this),
                this.confirmBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.selectedDoneHandler, this)
        },
        n.selectedDoneHandler = function(t) {
            var e = 1;
            for (var a in this.selectedList) {
                var i = ConfigData.getDataByKey("medalData", this.selectedList[a].id),
                    n = new IconItem(this.selectedList[a].pic, i.name_l, QualitySystem.getColorByQuality(this.selectedList[a].quality), this.selectedList[a].quality);
                n.touchEnabled = n.touchChildren = !1;
                var s = this["mi" + e];
                n.x = s.x + s.width / 2,
                    n.y = s.y + s.height / 2,
                    this.metalUgroup.addChild(n),
                    this["mt" + e].text = "",
                    e += 1,
                    this.selectedList[a].icon = n
            }
            this.updateMetal(),
                this.removeSelectedHandler(null)
        },
        n.clearMetal = function() {
            if (this.selectedList)
                for (var t in this.selectedList) this.selectedList[t].icon && this.metalUgroup.removeChild(this.selectedList[t].icon);
            for (var e = 1; 6 > e; e++) this["mt" + e].text = "选择材料",
                this["mi" + e].source = RES.getRes(Path.resHeadUrl + "zhanjianyangcheng_wu_png");
            this.addExp = 0,
                this.selectedNum = 0,
                this.selectedList = {},
                this.updateMetal()
        },
        n.selectedHandler = function(t) {
            this.clearMetal(),
                MainUI.instance.changeTopMode(topUIMode["null"]),
                MainUI.instance.setBottomVisible(!1),
                this.panelGroup.visible = this.metalUgroup.visible = !1,
                this.selsectGroup.visible = !0,
                this.closeBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeSelectedHandler, this),
                this.confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectedDoneHandler, this);
            for (var e = ShipManager.getInstance().soulList, a = [], i = 0; i < e.length; i++) {
                var n = ConfigData.getDataByKey("medalData", e[i].soulid),
                    s = 0;
                if (s = 9 == Number(n.medalType) ? n.exp : e[i].point, !ShipManager.getInstance().isMedalEquiped(e[i].id)) {
                    var r = 0;
                    r = 9 == Number(n.medalType) ? 1 : Utils.getMetalLvByExp(e[i].point, "exp" + n.exp),
                        a.push({
                            typeName: "Lv" + r,
                            target: this,
                            id: e[i].id,
                            soulId: n.id,
                            exp: s,
                            source: n,
                            pic: Path.soulIconURL + n.icon,
                            quality: n.quality,
                            selected: !1,
                            upgradelevelInfo: MedaldataParser.GetInstance().getItemById(e[i].soulid).name_l,
                            qualityInfo: Locales.get("DecListPanel_txt_item_prop_43") + s
                        })
                }
            }
            this.vessel.dataProvider = new eui.ArrayCollection(a),
                this.vessel.itemRenderer = metalListItem;
            var o, n = ConfigData.getDataByKey("medalData", this.cData.soulid);
            o = this.cData.point ? Utils.getMetalLvByExp(this.cData.point, "exp" + n.exp) : 1,
                this.needExpTxt.text = this.needExp.toString()
        },
        n.updateMetal = function() {
            var t, e, a = this.cData.point + this.addExp,
                i = ConfigData.getDataByKey("medalData", this.cData.soulid);
            this.cData.point ? (e = Utils.getMetalLvByExp(a, "exp" + i.exp), t = Utils.getMetalLvByExp(this.cData.point, "exp" + i.exp)) : e = t = 1,
                e > t ? (this.lvAddTxt.text = "+" + (e - t), this.fireAddTxt.text = "+" + BuffData.getBuffValue(i, e - t)) : (this.lvAddTxt.text = "", this.fireAddTxt.text = ""),
                this.addExp > 0 ? this.expAddTxt.text = "+" + this.addExp : this.expAddTxt.text = ""
        },
        n.metalRemoudle = function() {
            var t = this;
            if (this.clearVessel(), this.rmGroup.visible = !0, null != this.jiluLv) {
                var e, a = this.cData.promotelvl - this.jiluLv;
                a > 1 ? (e = Locales.get("panel_parts_upgrade_txt_windword_5"), Toast.launch(e + a)) : (e = Locales.get("panel_parts_transform_txt_windword_1"), Toast.launch(e)),
                    this.jiluLv = null
            }
            var i = ConfigData.getDataByKey("medalData", this.cData.soulid);
            this.rmLvTxt.text = this.cData.promotelvl,
                this.rmLvAddTxt.text = (this.cData.promotelvl + 1).toString(),
                this.rmTypeTxt.text = BuffData.getBuffNameById(i.remouldType),
                this.rmAtkTxt.text = i.remouldValue.split("|")[this.cData.promotelvl] / 100 + "%",
                this.rmAtkAddTxt.text = i.remouldValue.split("|")[this.cData.promotelvl + 1] / 100 + "%",
                Utils.getImgByUrl(Path.itemIconURL + "gongxunzhi_d.png", this.rmHaveImg,
                    function() {
                        t.rmHaveImg.width = 32,
                            t.rmHaveImg.height = 28
                    }),
                Utils.getImgByUrl(Path.itemIconURL + "gongxunzhi_d.png", this.rmNeedImg,
                    function() {
                        t.rmNeedImg.width = 32,
                            t.rmNeedImg.height = 28
                    });
            var n = Number(i.remouldCostPoint.split("|")[this.cData.promotelvl + 1]);
            this.rmHaveTxt.text = Utils.rnum(UserData.getInstance().getExploit()),
                this.rmNeedTxt.text = Utils.rnum(n),
                n > UserData.getInstance().getExploit() ? (this.rmHaveTxt.textColor = 16711680, this.rmRBtn.enabled = !1) : (this.rmHaveTxt.textColor = 16777215, this.rmRBtn.enabled = !0),
                this.rmRBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.remoudleMetalHandler, this),
                this.rmGetBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getHonorHandler, this)
        },
        n.getHonorHandler = function(t) {
            this.close(),
                WindowManager.getInstance().show(WindowManager.windowType.Soul),
                egret.setTimeout(function() {
                        WindowManager.getInstance().getWindow(WindowManager.windowType.Soul).gotoSell()
                    },
                    this, 500)
        },
        n.remoudleMetalHandler = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceMedalPromote);
            e.strid = this.cData.id.toString(),
                Transport.instance.send(e),
                this.jiluLv = Number(this.rmLvTxt.text)
        },
        n.partUpdate = function() {
            if (this.clearVessel(), this.pUpdateGroup.visible = this.parts.visible = !0, this.pLvHTxt.text = "等级：", null != this.jiluLv) {
                var t, e = this.cData.upgradelevel - this.jiluLv;
                e > 1 ? (this.autoBool ? (t = Locales.get("panel_parts_upgrade_txt_windword_1"), t = t.substr(0, t.length - 1)) : t = Locales.get("panel_parts_upgrade_txt_windword_5"), Toast.launch(t + e)) : (t = Locales.get("panel_parts_upgrade_txt_windword_1"), Toast.launch(t)),
                    this.jiluLv = null
            }
            var a = ConfigData.getDataByKey("parts", this.cData.partsid);
            this.pLvTxt.text = this.cData.upgradelevel,
                this.pLvAddTxt.text = this.cData.upgradelevel + 1,
                this.pAtkHTxt.text = BuffData.getBuffNameById(a.upgradeType) + "：",
                this.pAtkTxt.text = Math.floor(Number(a.basicValue) + Number(a.upgradeValue) * (this.cData.upgradelevel - 1)),
                this.pAtkAddTxt.text = Math.floor(Number(a.basicValue) + Number(a.upgradeValue) * this.cData.upgradelevel),
                this.pGoldTxt.text = Utils.rnum(PartsManager.getInstance().getCostValue(this.cData.partsid, this.cData.upgradelevel)),
                this.upPBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upgradePartsHandler, this),
                this.upPAutoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upgradePartsHandler, this),
                this.cData.upgradelevel >= 3 * UserData.getInstance()._level && (this.pLvAddTxt.text = this.pAtkAddTxt.text = Locales.get("panel_parts_upgrade_txt_lvlmax"), this.upPBtn.enabled = this.upPAutoBtn.enabled = !1)
        },
        n.upgradePartsHandler = function(t) {
            50 == GuideManager.step && GuideManager.nextStep(),
                Number(PartsManager.getInstance().getCostValue(this.cData.partsid, this.cData.upgradelevel)) > UserData.getInstance().getRes(TypeDefine.RES.Gold) ? (Toast.launch(Locales.get("panel_Shiptransform_txt_windword_5")), WindowManager.getInstance().show(WindowManager.windowType.BuJi)) : (this.autoBool = t.currentTarget == this.upPAutoBtn, RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceUpgradeParts, {
                    id: this.cData.id.toString(),
                    all: t.currentTarget == this.upPAutoBtn
                }, !1), this.jiluLv = Number(this.pLvTxt.text))
        },
        n.remoudlePartsHandler = function(t) {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceRemouldParts, {
                    id: this.cData.id.toString(),
                    all: !1
                }, !1),
                this.jiluLv = Number(this.pLvTxt.text),
                58 == GuideManager.step && GuideManager.nextStep()
        },
        n.getTechPointHandler = function(t) {
            var e = this;
            TiaoZhuanAlert.getInstance().show("", Locales.get("panel_get_goods_panel_txt_comment_4"), Locales.get("panel_get_goods_panel_txt_comment_8"),
                function() {
                    e.close(),
                        MainUI.instance.bottomUI.showPvpByForce()
                },
                function() {
                    e.close(),
                        WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian) || WindowManager.getInstance().show(WindowManager.windowType.PeiJian),
                        WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian).gotoSell()
                })
        },
        n.partRemoudle = function() {
            var t = this;
            if (!GuideManager.partGuideBool && UserData.getInstance()._level >= 5 && 59 != GuideManager.step && GuideManager.nextStep(57), this.clearVessel(), this.pRemouldGroup.visible = this.parts.visible = !0, this.pLvHTxt.text = "改造等级：", null != this.jiluLv) {
                var e, a = this.cData.remouldlevel - this.jiluLv;
                a > 1 ? (e = Locales.get("panel_parts_upgrade_txt_windword_5"), Toast.launch(e + a)) : (e = Locales.get("panel_parts_upgrade_txt_windword_1"), Toast.launch(e)),
                    this.jiluLv = null
            }
            Utils.getImgByUrl(Path.itemIconURL + "kejidian.png", this.pHmImg,
                    function() {
                        t.pHmImg.width = 32,
                            t.pHmImg.height = 28
                    }),
                Utils.getImgByUrl(Path.itemIconURL + "kejidian.png", this.pNmImg,
                    function() {
                        t.pNmImg.width = 32,
                            t.pNmImg.height = 28
                    }),
                this.pHmTxt.text = Utils.rnum(UserData.getInstance().getTechpoints());
            var i = ConfigData.getDataByKey("parts", this.cData.partsid);
            this.pLvTxt.text = this.cData.remouldlevel,
                this.pAtkHTxt.text = BuffData.getBuffNameById(i.remouldType) + "：",
                this.pAtkTxt.text = PartsManager.getInstance().getRemouldValue(this.cData.partsid, this.cData.remouldlevel) + "%";
            var n = PartsManager.getInstance().getRemouldValue(this.cData.partsid, this.cData.remouldlevel + 1);
            if (0 > n) this.pAtkAddTxt.text = "",
                this.pLvAddTxt.text = "",
                this.pNmTxt.text = "",
                this.pRemouldBtn.enabled = !1,
                this.pNmDesc.text = "",
                this.pNmImg.visible = !1,
                this.arrow2.visible = this.arrow1.visible = !1;
            else {
                this.pLvAddTxt.text = (Number(this.cData.remouldlevel) + 1).toString(),
                    this.pAtkAddTxt.text = n + "%";
                var s = PartsManager.getInstance().getRemouldValue(this.cData.partsid, this.cData.remouldlevel + 1, "remouldCostPoint");
                this.pNmTxt.text = Utils.rnum(s),
                    Number(s) > UserData.getInstance().getTechpoints() ? (this.pHmTxt.textColor = 16711680, this.pRemouldBtn.enabled = !1) : (this.pHmTxt.textColor = 16777215, this.pRemouldBtn.enabled = !0)
            }
            this.pRemouldBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.remoudlePartsHandler, this),
                this.pGetMBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getTechPointHandler, this)
        },
        n.upgradeSoul = function() {
            this.clearMetal(),
                this.cData = Utils.getListByKeyValue("id", this.cData.id, ShipManager.getInstance().soulList)[0],
                this[this.tabList[this.tabIndex - 1][0]](),
                this.updateMotion()
        },
        n.upgradePart = function() {
            this.cData = ShipManager.getInstance().getPartById(this.cData.id),
                this[this.tabList[this.tabIndex - 1][0]](),
                this.updateMotion()
        },
        n.setBtnStatus = function(t) {
            for (var e = 1; 3 > e; e++) this["t" + e] != t && (this["t" + e].selected = !1);
            t.selected = !0
        },
        n.tabHandler = function(t) {
            var e = t.currentTarget;
            this.setBtnStatus(e),
                this.tabIndex = Number(e.name),
                this[this.tabList[this.tabIndex - 1][0]]()
        },
        e
}(WindowBase);
