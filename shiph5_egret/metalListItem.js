
var OperateType;
!
function(t) {
    t[t.captain = 0] = "captain",
        t[t.ship = 1] = "ship"
}(OperateType || (OperateType = {}));
var OperateItemType;
!
function(t) {
    t[t.captainUpdate = 0] = "captainUpdate",
        t[t.captainRemoudle = 1] = "captainRemoudle",
        t[t.shipUpdate = 2] = "shipUpdate",
        t[t.shipRemoudle = 3] = "shipRemoudle"
}(OperateItemType || (OperateItemType = {}));
var WindowOperatePanel = function(t) {
    function e() {
        t.call(this, !1),
            this.chooseTrainCNum = 1,
            this.saveBool = !1,
            this.skillList = ["normalSkill", "activeSkill", "leaderSkill"],
            this.skinName = "resource/eui_skins/zhanjianyangcheng.exml"
            /*tpa=resource/eui_skins/zhanjianyangcheng.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            var e = this;
            this.cData = t.data,
                this.wType = t.type,
                this.tabIndex = t.index,
                ConfigData.preLoadList(["vip", "shipData", "shipModelData", "captainData", "captainUpgradeData", "shipUpgrade", "item", "trainData", "skillData"],
                    function() {
                        e.initUI()
                    }),
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function(t) {
                        e.destroy()
                    },
                    this)
        },
        i.updateShipPanel = function() {
            var t = this,
                e = ConfigData.getDataByKey("shipData", this.cData.shipid);
            Utils.getImgByUrl(ShipManager.getInstance().getShipPicByType(this.cData.shipid), this.icon),
                Utils.getImgByUrl(ShipManager.getInstance().getShipTypeIcon(e.shipType), this.typeImg),
                this.typeImg.visible = !0,
                Utils.getImgByUrl(Path.countryURL + "country_" + e.country + ".jpg", this.countryImg),
                this.typeTxt.text = e.name_l,
                this.typeTxt.textColor = QualitySystem.getColorByQuality(e.quality),
                Utils.getImgByUrl(QualitySystem.getShipBack(e.quality), this.bgIcon,
                    function() {
                        t.bgIcon.width = 639,
                            t.bgIcon.height = 285
                    })
        },
        i.initUI = function() {
            var t = this;
            this.iconList = [],
                this.itemObj = {},
                this.tickId = GameTick.registerHandler(function() {
                        t.tick()
                    },
                    1e3),
                MainUI.instance.changeTopMode(topUIMode.simple);
            var e;
            this.wType == OperateType.captain ? (this.tabList = [
                    ["captainUpdate", "panel_building_upgrade"],
                    ["captainRemoudle", "zz_upgrade"]
                ], e = ConfigData.getDataByKey("captainData", this.cData.id), Utils.getImgByUrl(Path.captainIconURL + e.picture, this.icon), Utils.getImgByUrl(Path.countryURL + "country_" + e.country + ".jpg", this.countryImg), this.icon.width = 234 * .7, this.icon.height = 325 * .7, this.typeTxt.text = e.name_l, this.typeTxt.textColor = QualitySystem.getColorByQuality(e.quality), this.setStatusByKey("captainid", this.cData.id, "panel_jianzhang_detail_comment_11", "panel_jianzhang_detail_comment_20"), GameEventDispatcher.getInstance().addEventListener(GameEvent.CAPTAIN_UPDATE, this.upgradeCaptain, this), this.mainIcon.visible = !1) : this.wType == OperateType.ship && (this.mainIcon.visible = this.cData.shipid == ShipManager.getInstance().captionId, this.tabList = [
                    ["shipUpdate", "panel_building_upgrade"],
                    ["shipRemoudle", "panel_shipyard_shiptransform_btn_transform"],
                    ["shipSkill", "panel_examine_txt_skill"],
                    ["shipTrain", "panel_dock_btn_my_ships_train"]
                ], this.setStatusByKey("shipid", this.cData.id, "panel_marine_bench3", "free"), e = ConfigData.getDataByKey("shipData", this.cData.shipid), this.updateShipPanel(), GameEventDispatcher.getInstance().addEventListener(GameEvent.SHIP_UPDATE, this.upgradeShip, this)),
                Utils.getImgByUrl(QualitySystem.getShipBack(e.quality), this.bgIcon,
                    function() {
                        t.bgIcon.width = 639,
                            t.bgIcon.height = 285
                    }),
                this.icon.x = (GameData.designWidth - this.icon.width) / 2,
                this.addTabStatus(),
                this[this.tabList[this.tabIndex - 1][0]](),
                this.askBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ask2BtnHandler, this),
                this.ask2Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ask2BtnHandler, this),
                this.get2Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.get2BtnHandler, this),
                this.getBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.get2BtnHandler, this)
        },
        i.addTabStatus = function() {
            for (var t = 1; 5 > t; t++) {
                this["tp" + t].visible = !1;
                var e = this["t" + t];
                if (e.name = (t - 1).toString(), this.tabList[t - 1] ? e.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (e.label = Locales.get(this.tabList[t - 1][1]), e.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tabHandler, this)) : e.visible = !1, t == this.tabIndex && e && this.setBtnStatus(e), this.wType == OperateType.captain) 1 == t ? this["tp" + t].visible = RedPointManager.getCaptainUpdate(this.cData) > 0 : 2 == t && (this["tp" + t].visible = RedPointManager.getCaptainRemodule(this.cData) > 0);
                else if (this.wType == OperateType.ship) {
                    ConfigData.getDataByKey("shipData", this.cData.shipid);
                    if (1 == t) {
                        ConfigData.getDataByKey("shipUpgrade", this.cData.level);
                        this["tp" + t].visible = RedPointManager.getShipUpdate(this.cData) > 0
                    } else 2 == t ? this["tp" + t].visible = RedPointManager.getShipRemodule(this.cData) > 0 : 3 == t ? this["tp" + t].visible = RedPointManager.getShipSkill(this.cData) > 0 : 4 == t && (this["tp" + t].visible = RedPointManager.getShipTrain(this.cData) > 0)
                }
            }
        },
        i.ask2BtnHandler = function(t) {
            t.currentTarget == this.askBtn ? QiJvTouAlert.getInstance().showTxtDescPage(Locales.get("panel_guildDesc_enter"), Locales.get("panel_jianzhang_shuoming_1")) : QiJvTouAlert.getInstance().showTxtDescPage(Locales.get("panel_guildDesc_enter"), Locales.get("panel_skill_txt_bottom_comment"))
        },
        i.get2BtnHandler = function(t) {
            t.currentTarget == this.get2Btn ? TiaoZhuanAlert.getInstance().show("", Locales.get("panel_get_goods_panel_txt_comment_5"), Locales.get("panel_get_goods_panel_txt_comment_2"),
                function() {
                    MainUI.instance.bottomUI.showPvpByForce()
                },
                function() {
                    MainUI.instance.bottomUI.showShopForce()
                }) : TiaoZhuanAlert.getInstance().show("", Locales.get("panel_get_goods_panel_txt_comment_3"), Locales.get("panel_get_goods_panel_txt_comment_2"),
                function() {
                    ArenaManager.instance.openExchangeWindow()
                },
                function() {
                    MainUI.instance.bottomUI.showShopForce()
                })
        },
        i.upgradeShip = function(t) {
            var e = this;
            if (this.updateBool = !0, this.cData = ShipManager.getInstance().getShipById(this.cData.id), this[this.tabList[this.tabIndex - 1][0]](), this.updateShipPanel(), this.addTabStatus(), 1 == this.tabIndex || 2 == this.tabIndex) {
                var a = Path.effectUrl + "effect_shiplevelup/effect_shiplevelup.json",
                    i = Path.effectUrl + "effect_shiplevelup/texture.json",
                    n = Path.effectUrl + "effect_shiplevelup/texture.png";
                Utils.createDragonBone(a, i, n, "effect_shiplevelup", "normal",
                    function(t, a) {
                        t && (e.addChild(t.display), t.display.x = 330, t.display.y = 280, t.display.scaleX = 2, t.display.scaleY = 2, t.animation.gotoAndPlay("normal"), t.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                            function() {
                                Utils.removeDragonBone(t)
                            },
                            void 0))
                    },
                    this)
            } else 3 == this.tabIndex && this.skillChooseItem && this.skillChooseHandler(this.skillChooseItem);
            this.updateBool = !1
        },
        i.upgradeCaptain = function(t) {
            this.cData = Utils.getListByKeyValue("id", this.cData.id, CaptainData.captainlist)[0],
                this[this.tabList[this.tabIndex - 1][0]](),
                this.addTabStatus()
        },
        i.tabHandler = function(t) {
            var e = t.currentTarget;
            Number(e.name) + 1 == 4 && UserData.getInstance()._level < 15 ? (e.selected = !1, Toast.launch(Locales.get("ui_main_function_scientific", 15))) : Number(e.name) + 1 == 3 && UserData.getInstance()._level < 6 ? (e.selected = !1, Toast.launch(Locales.get("ui_main_function_scientific", 6))) : (this.setBtnStatus(e), this.tabIndex = Number(e.name) + 1, this[this.tabList[this.tabIndex - 1][0]]())
        },
        i.setBtnStatus = function(t) {
            for (var e = 1; 5 > e; e++) this["t" + e] != t && (this["t" + e].selected = !1);
            t.selected = !0
        },
        i.clearVessel = function() {
            for (var t = 0; t < this.iconList.length; t++) this.iconList[t].destroy();
            this.trainPanel.visible = this.techPanel.visible = this.shipRemoudlePanel.visible = this.captainUpPanel.visible = this.bgPanel.visible = this.captainUp1Panel.visible = !1
        },
        i.setStatusByKey = function(t, e, a, i) {
            var n = Utils.getListByKeyValue(t, e, ShipManager.getInstance().soldierList);
            if (n.length > 0)
                if (this.wType == OperateType.captain) {
                    var s = Utils.getListByKeyValue("id", n[0].shipid, ShipManager.getInstance().shipList),
                        r = ConfigData.getDataByKey("shipData", s[0].shipid);
                    this.equipTxt.text = Locales.get(a) + Locales.get(r.name_l)
                } else this.equipTxt.text = Locales.get(a);
            else this.equipTxt.text = Locales.get(i)
        },
        i.captainUpdate = function() {
            this.clearVessel(),
                this.captainUpPanel.visible = this.bgPanel.visible = !0,
                this.infoItem ? (this.infoItem.setTypeData(OperateItemType.captainUpdate, this.cData), this.captainUpPanel.addChildAt(this.infoItem, 0)) : (this.infoItem = new UpdatePropertyItem(OperateItemType.captainUpdate, this.cData), this.captainUpPanel.addChildAt(this.infoItem, 0));
            var t = this.cData.upgradelevel || 1,
                e = ConfigData.getDataByKey("captainData", this.cData.id),
                a = ConfigData.getDataByKey("captainUpgradeData", t + 1),
                i = a["upgradeCost" + e.quality];
            this.costTxt.text = Utils.rnum(i),
                this.upBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upgradeCaptainHandler, this),
                this.autoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upgradeCaptainHandler, this)
        },
        i.captainRemoudle = function() {
            this.clearVessel(),
                this.captainUp1Panel.visible = this.bgPanel.visible = !0,
                this.infoItem ? (this.infoItem.setTypeData(OperateItemType.captainRemoudle, this.cData), this.captainUp1Panel.addChildAt(this.infoItem, 0)) : (this.infoItem = new UpdatePropertyItem(OperateItemType.captainRemoudle, this.cData), this.captainUp1Panel.addChildAt(this.infoItem, 0));
            var t = ConfigData.getDataByKey("captainData", this.cData.id),
                e = this.cData.promotelevel || 1,
                a = t.promoteCostGold.split("|")[e];
            this.cost1Txt.text = Utils.rnum(a);
            var i = Number(t.promoteCostSoul.split("|")[e]),
                n = CaptainData.getCaptainPieceData(t.pieceId),
                s = n ? n.count : 0;
            this.expProgressBar.value = Math.floor(s / i * 100),
                this.barTxt.text = s + "/" + i,
                i > s && (this.up1Btn.enabled = !1),
                this.up1Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reCaptainHandler, this)
        },
        i.upgradeCaptainHandler = function(t) {
            var e = this.cData.upgradelevel || 1,
                a = ConfigData.getDataByKey("captainData", this.cData.id),
                i = ConfigData.getDataByKey("captainUpgradeData", e + 1),
                n = i["upgradeCost" + a.quality];
            if (Number(n) > UserData.getInstance().getRes(TypeDefine.RES.Gold)) Toast.launch(Locales.get("panel_Shiptransform_txt_windword_5")),
                WindowManager.getInstance().show(WindowManager.windowType.BuJi);
            else {
                var s = Transport.getPkg(ProtocolMgr.ID_DceUpgradeCaptain);
                s.all = t.currentTarget == this.autoBtn ? !0 : !1,
                    s.id = this.cData.id,
                    Transport.instance.send(s)
            }
            140 == GuideManager.step && GuideManager.nextStep()
        },
        i.reCaptainHandler = function(t) {
            var e = ConfigData.getDataByKey("captainData", this.cData.id),
                a = this.cData.promotelevel || 1,
                i = e.promoteCostGold.split("|")[a];
            if (Number(i) > UserData.getInstance().getRes(TypeDefine.RES.Gold)) Toast.launch(Locales.get("panel_Shiptransform_txt_windword_5")),
                WindowManager.getInstance().show(WindowManager.windowType.BuJi);
            else {
                var n = Transport.getPkg(ProtocolMgr.ID_DcePromoteCaptain);
                n.id = this.cData.id,
                    Transport.instance.send(n)
            }
        },
        i.upgradeShipHandler = function(t) {
            var e = t.currentTarget == this.autoBtn0;
            if (this.cData.level >= UserData.getInstance()._level || 200 == this.cData.level) Toast.launch(Locales.get("panel_shipupgrade_bottom_txt_windword_3"));
            else {
                var a = ConfigData.getDataByKey("shipData", this.cData.shipid),
                    i = ConfigData.getDataByKey("shipUpgrade", this.cData.level),
                    n = Number(i["quality" + a.quality]),
                    s = UserData.getInstance().getRes(TypeDefine.RES.Gold);
                n > s ? (Toast.launch(Locales.get("panel_Shiptransform_txt_windword_5")), WindowManager.getInstance().show(WindowManager.windowType.BuJi)) : RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceUpgradeShip, {
                    id: this.cData.id,
                    all: e
                }, !1)
            }
            37 == GuideManager.step && GuideManager.nextStep()
        },
        i.remoudleShipHandler = function(t) {
            var e = ConfigData.getDataByKey("shipData", this.cData.shipid);
            if (5 == e.quality && UserData.getInstance()._level < 50) Toast.launch(Locales.get("panel_Shiptransform_txt_windword_10"));
            else {
                var a = UserData.getInstance().getRes(TypeDefine.RES.Gold),
                    i = Number(e.remouldCost);
                if (i > a) Toast.launch(Locales.get("panel_Shiptransform_txt_windword_5")),
                    WindowManager.getInstance().show(WindowManager.windowType.BuJi);
                else {
                    var n = Transport.getPkg(ProtocolMgr.ID_DceRemouldShip);
                    n.id = this.cData.id,
                        Transport.instance.send(n),
                        WindowManager.getInstance().showWaiting()
                }
                77 == GuideManager.step && GuideManager.clearMask()
            }
        },
        i.compareTwoNumber = function(t, e, a) {
            return void 0 === a && (a = 16777215),
                t > e ? [16711680, !1] : [a, !0]
        },
        i.shipUpdate = function() {
            this.clearVessel(),
                this.shipRemoudlePanel.visible = this.bgPanel.visible = !0,
                this.reBtn1.visible = !1,
                this.autoBtn0.visible = !0,
                this.upBtn0.visible = !0,
                this.infoItem ? this.infoItem.setTypeData(OperateItemType.shipUpdate, this.cData) : (this.infoItem = new UpdatePropertyItem(OperateItemType.shipUpdate, this.cData), this.shipRemoudlePanel.addChildAt(this.infoItem, 0));
            var t = ConfigData.getDataByKey("shipData", this.cData.shipid),
                e = ConfigData.getDataByKey("shipUpgrade", this.cData.level),
                a = Number(e["quality" + t.quality]),
                i = UserData.getInstance().getRes(TypeDefine.RES.Gold),
                n = QualitySystem.getColorByQuality(t.quality),
                s = this.compareTwoNumber(a, i, n);
            n = s[0];
            var r = s[1];
            s = this.compareTwoNumber(this.cData.level + 1, UserData.getInstance()._level, n),
                r = r && s[1],
                this.createIcon(Path.itemIconURL + "coin.png", Locales.get("panel_activity_red_bag_txt_11", Utils.rnum(a)), n, 1, this.shipRemoudlePanel),
                this.upBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upgradeShipHandler, this),
                this.autoBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upgradeShipHandler, this)
        },
        i.createRemoudleItem = function(t, e, a, i, n, s) {
            var r = QualitySystem.getColorByQuality(a.quality),
                o = this.compareTwoNumber(e, t, r);
            return -1 != s && (r = o[0], this.createIcon(i, n, r, s, this.shipRemoudlePanel, a.quality)),
                o[1]
        },
        i.shipRemoudle = function() {
            this.clearVessel(),
                this.reBtn1.visible = !0,
                this.autoBtn0.visible = !1,
                this.upBtn0.visible = !1,
                this.shipRemoudlePanel.visible = this.bgPanel.visible = !0,
                this.infoItem ? this.infoItem.setTypeData(OperateItemType.shipRemoudle, this.cData) : (this.infoItem = new UpdatePropertyItem(OperateItemType.shipRemoudle, this.cData), this.shipRemoudlePanel.addChildAt(this.infoItem, 0));
            var t = ConfigData.getDataByKey("shipData", this.cData.shipid),
                e = (this.cData.level || 1, this.cData.shipid % 100),
                a = !1;
            6 == t.quality ? a = !0 : t.quality < 5 && (a = e > 4);
            var i = !1;
            if (!a) {
                var n, s = UserData.getInstance().getRes(TypeDefine.RES.Gold),
                    r = Number(t.remouldCost),
                    o = 1,
                    l = QualitySystem.getColorByQuality(t.quality),
                    h = this.compareTwoNumber(r, s, l);
                if (l = h[0], i = h[1], t.remouldCost && (this.createIcon(Path.itemIconURL + "coin.png", Locales.get("panel_activity_red_bag_txt_11", Utils.rnum(r)), l, o, this.shipRemoudlePanel), o++), t.remouldCount) {
                    var c = Utils.getListByKeyValue("id", t.drawingId, ShipManager.getInstance().papers);
                    s = 0,
                        r = Number(t.remouldCount),
                        c.length > 0 && c[0].count && (s = c[0].count),
                        n = this.createRemoudleItem(s, r, t, ShipManager.getInstance().getShipPaperIcon(t.shipType), Locales.get("warShipName_" + t.id.substr(0, 3)) + Locales.get("panel_Shiptransform_txt_paper_2") + s + "/" + Utils.rnum(r), o),
                        o++,
                        i = i && n
                }
                if (t.remouldSeniorPaper) {
                    var c = Utils.getListByKeyValue("id", 27, ShipManager.getInstance().papers);
                    r = Number(t.remouldSeniorPaper),
                        s = UserData.getInstance().getSeniorpaper(),
                        n = this.createRemoudleItem(s, r, t, Path.itemIconURL + "gaojiwanneng.png", Locales.get("panel_retired_txt_paper_2") + s + "/" + Utils.rnum(r), o),
                        o++,
                        i = i && n
                }
                if (t.remouldMaterial) {
                    var d = ItemsManager.getInstance().getItemById(1246),
                        g = ConfigData.getDataByKey("item", "1246");
                    s = 0,
                        d && d.count && (s = d.count),
                        r = Number(t.remouldMaterial),
                        n = this.createRemoudleItem(s, r, t, Path.itemIconURL + g.icon, g.name_l + s + "/" + Utils.rnum(r), o),
                        o++,
                        i = i && n
                }
                if (i) {
                    var u = Number(t.id.substr(-2));
                    5 != t.quality && 5 == u ? i = !1 : 5 == t.quality && 11 == u && (i = !1)
                }
            }
            this.reBtn1.enabled = !a,
                this.reBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.remoudleShipHandler, this),
                75 == GuideManager.step && GuideManager.nextStep()
        },
        i.createIcon = function(t, e, a, i, n, s, r) {
            void 0 === s && (s = 0 / 0),
                void 0 === r && (r = "1");
            var o = new IconItem(t, e, a, s);
            n.addChild(o);
            var l = this["icon" + r + "_" + i];
            return o.x = l.x + l.width / 2,
                o.y = l.y + l.height / 2,
                this.iconList.push(o),
                o
        },
        i.shipTrain = function() {
            !GuideManager.trainGuideBool && UserData.getInstance()._level >= 15 && GuideManager.nextStep(85),
                this.clearVessel();
            var t = ConfigData.getDataByKey("trainData", this.chooseTrainCNum),
                e = this.cData.traindata || {};
            this.trainPanel.visible = this.bgPanel.visible = !0,
                this.hp2Txt.text = this.cData.maxhp - (e.hp || 0),
                this.fire2Txt.text = this.cData.attack - (e.attack || 0),
                this.def2Txt.text = this.cData.firedefence - (e.firedef || 0),
                this.bd2Txt.text = this.cData.explosiondefence - (e.expldef || 0),
                this.hpATxt.text = "+" + (e.hp || 0),
                this.fireATxt.text = "+" + (e.attack || 0),
                this.defATxt.text = "+" + (e.firedef || 0),
                this.bdATxt.text = "+" + (e.expldef || 0),
                this["c" + this.chooseTrainCNum + "Btn"].selected = !0;
            var a = this.cData.level;
            this.m1Txt.text = t.hpLmt * a,
                this.m2Txt.text = t.atkLmt * a,
                this.m3Txt.text = t.fireDefLmt * a,
                this.m4Txt.text = t.explosionDefLmt * a;
            var i = ItemsManager.getInstance().getItemById(1013),
                n = i ? i.count : 0,
                s = UserData.getInstance().getRes(TypeDefine.RES.Gold),
                r = UserData.getInstance().getRes(TypeDefine.RES.Diamond);
            t = ConfigData.getDataByKey("trainData", 1),
                this.cost1_1Txt.text = t.costItemCount,
                this.cost1_1Txt.textColor = Number(t.costItemCount) <= n ? 16777215 : 16711680,
                t = ConfigData.getDataByKey("trainData", 2),
                this.cost2_1Txt.text = t.costCredit,
                this.cost2_2Txt.text = t.costItemCount,
                this.cost2_1Txt.textColor = Number(t.costCredit) < s ? 16777215 : 16711680,
                this.cost2_2Txt.textColor = Number(t.costItemCount) <= n ? 16777215 : 16711680,
                t = ConfigData.getDataByKey("trainData", 3),
                this.cost3_1Txt.text = t.costCredit,
                this.cost3_2Txt.text = t.costItemCount,
                this.cost3_1Txt.textColor = Number(t.costCredit) < r ? 16777215 : 16711680,
                this.cost3_2Txt.textColor = Number(t.costItemCount) <= n ? 16777215 : 16711680;
            for (var o = ["lasthp", "lastattack", "lastfiredef", "lastexpldef"], l = 0; l < o.length; l++) e[o[l]] ? (this["cGroup" + l].visible = !0, this["txt" + l].text = e[o[l]], this["u" + l].visible = e[o[l]] > 0, this["d" + l].visible = e[o[l]] < 0, this["txt" + l].textColor = e[o[l]] > 0 ? 65280 : 16711680) : this["cGroup" + l].visible = !1;
            if (this.haveTxt.text = n || 0, !this.initBool) {
                for (this.initBool = !0, l = 1; 4 > l; l++) this["c" + l + "Btn"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.cBoxHandler, this);
                this.up3Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.trainHandler, this),
                    this.c4Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tenHandler, this),
                    this.saveBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.saveHandler, this)
            }
            this.saveBtn.enabled = e.lasthp || e.lastattack || e.lastfiredef || e.lastexpldef,
                this.updateUpgradeBtn()
        },
        i.tenHandler = function(t) {},
        i.trainHandler = function(t) {
            var e = ConfigData.getDataByKey("trainData", this.chooseTrainCNum),
                a = UserData.getInstance().getRes(TypeDefine.RES.Gold),
                i = UserData.getInstance().getRes(TypeDefine.RES.Diamond);
            if (2 == this.chooseTrainCNum) {
                if (Number(e.costCredit) > a) return Toast.launch(Locales.get("panel_Shiptransform_txt_windword_5")),
                    void WindowManager.getInstance().show(WindowManager.windowType.BuJi)
            } else if (3 == this.chooseTrainCNum && Number(e.costCredit) > i) return Toast.launch(Locales.get("panel_train_txt_windword_2")),
                void WindowManager.getInstance().show(WindowManager.windowType.Recharge);
            var n = Transport.getPkg(ProtocolMgr.ID_DceTrain);
            n.shipid = this.cData.id,
                n.type = this.c4Btn.selected ? this.chooseTrainCNum + 3 : this.chooseTrainCNum,
                Transport.instance.send(n),
                87 == GuideManager.step && GuideManager.nextStep()
        },
        i.setTrainBtnEanbled = function() {
            this.saveBtn.enabled = !0
        },
        i.saveHandler = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceSaveTrain);
            e.shipid = this.cData.id,
                e.save = !0,
                Transport.instance.send(e),
                ShipManager.getInstance().trainSaveBool = !0,
                this.saveBtn.enabled = !1,
                89 == GuideManager.step && GuideManager.nextStep()
        },
        i.updateUpgradeBtn = function() {
            var t = ConfigData.getDataByKey("trainData", this.chooseTrainCNum),
                e = this.cData.traindata || {},
                a = this.cData.level;
            e.hp >= t.hpLmt * a && e.attack >= t.atkLmt * a && e.firedef >= t.fireDefLmt * a && e.expldef >= t.explosionDefLmt * a && (this.up3Btn.enabled = !1)
        },
        i.cBoxHandler = function(t) {
            for (var e = 1; 4 > e; e++) t.currentTarget != this["c" + e + "Btn"] ? this["c" + e + "Btn"].selected = !1 : (this.chooseTrainCNum = e, this.updateUpgradeBtn());
            t.currentTarget.selected = !0
        },
        i.skillShipHandler = function(t) {
            var e, a = this.skillChooseItem.name;
            "normalSkill" == a ? e = this.cData.skillid : "activeSkill" == a ? e = this.cData.activeskillid : "leaderSkill" == a && (e = this.cData.circleskillid);
            var i = Transport.getPkg(ProtocolMgr.ID_DceUpgradeSkill);
            i.shipid = String(this.cData.id),
                i.skillid = e,
                i.byauto = t.currentTarget == this.auto4Btn,
                Transport.instance.send(i),
                54 == GuideManager.step && GuideManager.nextStep()
        },
        i.shipSkill = function() {
            var t = this;
            GuideManager.skillGuideBool || GuideManager.nextStep(52),
                this.clearVessel(),
                this.techPanel.visible = !0,
                this.main2Icon.visible = !1;
            var e = ConfigData.getDataByKey("shipData", this.cData.shipid);
            this.nameTxt.text = e.name_l;
            for (var a = 0; a < this.skillList.length; a++) {
                var i = ConfigData.getDataByKey("skillData", e[this.skillList[a]]),
                    n = this.createIcon(Path.skillIconURL + i.icon, i.name_l, QualitySystem.getColorByQuality(i.quality), a + 1, this.techPanel, i.quality, "t");
                n.parent.swapChildren(this[this.skillList[a].substr(0, 1) + "_icon"], n),
                    n.name = this.skillList[a],
                    n.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function(e) {
                            t.oldSkillNum = null,
                                t.skillChooseHandler(e.currentTarget)
                        },
                        this),
                    0 != a || this.updateBool || (this.oldSkillNum = null, this.skillChooseHandler(n)),
                    this.skillChooseItem && this.skillChooseItem.x == n.x && (n.visibleIconLabel(!1), this.skillChooseItem = n)
            }
            this.up4Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skillShipHandler, this),
                this.auto4Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skillShipHandler, this)
        },
        i.skillChooseHandler = function(t) {
            var e, a = this;
            ConfigData.getDataByKey("shipData", this.cData.shipid);
            "normalSkill" == t.name ? e = this.cData.skillid : "activeSkill" == t.name ? e = this.cData.activeskillid : "leaderSkill" == t.name && (e = this.cData.circleskillid);
            var i = ConfigData.getDataByKey("skillData", e);
            this.chooseImg.x = t.x - this.chooseImg.width / 2,
                this.chooseImg.y = t.y - this.chooseImg.height / 2,
                this.skillChooseItem && this.skillChooseItem.visibleIconLabel(!0),
                this.skillChooseItem = t,
                t.visibleIconLabel(!1),
                this.arrowBtn.x = t.x - this.arrowBtn.width / 2,
                this.techTxt.text = i.name_l,
                this.nowLvTxt.text = Locales.get("panel_skill_txt_now_skill") + i.level,
                this.nowTechTxt.textFlow = Utils.textFlowByStr(i.desc_l);
            var n;
            if (Number(i.upLevel) > 0) {
                var s = ConfigData.getDataByKey("skillData", i.upLevel);
                this.nextLvTxt.text = Locales.get("panel_skill_txt_next_skill") + s.level,
                    this.nextTechTxt.textFlow = Utils.textFlowByStr(s.desc_l)
            } else this.nextLvTxt.text = Locales.get("panel_parts_upgrade_txt_lvlmax_2"),
                this.nextTechTxt.text = Locales.get("panel_parts_upgrade_txt_lvlmax_2"),
                n = !0;
            var r = ItemsManager.getInstance().getItemById(i.upgradeCostItem);
            this.have2Txt.text = r && r.count || "0",
                this.cost2Txt.text = i.upgradeCostCount;
            var o = 0;
            if (this.cData.skilldata && ("normalSkill" == t.name ? o = this.cData.skilldata.skillprof || 0 : "activeSkill" == t.name ? o = this.cData.skilldata.activeskillprof || 0 : "leaderSkill" == t.name && (o = this.cData.skilldata.circleskillprof || 0)), null != this.oldSkillNum && o > this.oldSkillNum) Toast.launch(Locales.get("panel_skill_txt_windword_5") + (o - this.oldSkillNum));
            else if (this.oldSkillLv != Number(i.level) && this.updateBool) {
                var l = Path.effectUrl + "effect_skilllevelup/effect_skilllevelup.json",
                    h = Path.effectUrl + "effect_skilllevelup/texture.json",
                    c = Path.effectUrl + "effect_skilllevelup/texture.png";
                Utils.createDragonBone(l, h, c, "jineng", "normal",
                    function(e, i) {
                        e && (a.addChild(e.display), e.display.x = t.x, e.display.y = t.y + 130, e.display.scaleX = 2, e.display.scaleY = 2, e.animation.gotoAndPlay("normal"), e.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                            function() {
                                Utils.removeDragonBone(e)
                            },
                            void 0))
                    },
                    this)
            }
            this.oldSkillLv = Number(i.level),
                this.oldSkillNum = o,
                n ? (this.barTxt2.text = "MAX", this.bar2.value = 100) : (this.barTxt2.text = o + "/" + i.profMax, this.bar2.value = Math.floor(o / i.profMax * 100)),
                Number(this.have2Txt.text) < Number(i.upgradeCostCount) ? (this.auto4Btn.enabled = this.up4Btn.enabled = !1, this.have2Txt.textColor = 16711680) : (this.auto4Btn.enabled = this.up4Btn.enabled = !0, this.have2Txt.textColor = 16777215)
        },
        i.tick = function() {
            var t = new Date(UserData.getInstance().getServerTime()),
                e = 23 - t.getHours(),
                a = 59 - t.getMinutes(),
                i = 59 - t.getSeconds();
            this.timeTxt.text = Locales.get("panel_skill_txt_times_1", Utils.getDoubleNumText(e), Utils.getDoubleNumText(a), Utils.getDoubleNumText(i))
        },
        i.clear = function() {
            this.tickId && (GameEventDispatcher.getInstance().removeEventListener(GameEvent.SHIP_UPDATE, this.upgradeShip, this), GameEventDispatcher.getInstance().removeEventListener(GameEvent.CAPTAIN_UPDATE, this.upgradeCaptain, this), GameTick.removeHandler(this.tickId))
        },
        e
}(WindowBase);
