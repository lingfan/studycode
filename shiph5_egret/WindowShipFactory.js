
var WindowShipArrange = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/zhuye_ZhenrongSkin.exml"
            /*tpa=resource/eui_skins/zhuye_ZhenrongSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            var e = this;
            t.data && (this.scoutSoldier = t.data, this.friendBool = !0),
                ConfigData.preLoadList(["exp", "medalData", "captainData", "shipData", "parts", "skillData", "medalexpData", "trainData", "partsUpgradeData", "captainUpgradeData"],
                    function() {
                        e.initUI()
                    })
        },
        i.clear = function() {
            windowInited = !1,
                GameTick.removeHandler(this.tipTickId),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.SHIP_UPDATE, this.updateShipList, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.ArrangeWindow_shipSelected, this.setShipData, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.ShipDataUpdate, this.setShipData, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowChooseItem_chooseNewShip, this.setSoldier, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowChooseItem_chooseNewPart, this.setEquip, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowChooseItem_chooseNewMedal, this.setEquipSoul, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.SoldierList_update, this.updateSoldier, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.Souls_List_Refresh, this.updateShipList, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.Souls_List_Refresh, this.setShipData, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.PARTS_UPDATE, this.updateParts, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.MEDAL_PIECES, this.setSoulPanel, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.SOULS_UPDATE, this.setSoulPanel, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.SOULS_REMOUDLE, this.setSoulPanel, this)
        },
        i.initUI = function() {
            var t = this;
            if (this.friendBool || (34 == GuideManager.step || 45 == GuideManager.step || 70 == GuideManager.step || 125 == GuideManager.step || 133 == GuideManager.step ? GuideManager.nextStep() : GuideManager.step >= 40 && GuideManager.step < 45 && UserData.getInstance()._level >= 5 && GuideManager.nextStep(43)), this.spotCaptain.visible = !1, this.btnEquipAllPart.visible = this.btnRemoveAllPart.visible = !this.friendBool, MainUI.instance.changeTopMode(topUIMode["null"]), this.scroll.viewport = this.list, this.scroll.addEventListener(eui.ScrollerThrowEvent.CHANGE,
                    function(e) {
                        t.scrollX = t.scroll.viewport.scrollH
                    },
                    this), SUI.setTextureAsync(this.BgImg, Path.backGroundImageUrl + "game_big_ship_background.jpg"), UserData.getInstance()._level >= 40 || this.friendBool)
                for (var a = [Locales.get("DecEquipPanel_txt_btn_parts"), Locales.get("DecEquipPanel_txt_dec_btn")], i = 0; i < a.length; i++) {
                    var n = new eui.Button;
                    n.skinName = "resource/eui_skins/components/tabSkin.exml"
                        /*tpa=resource/eui_skins/components/tabSkin.exml*/
                        ,
                        n.x = 118 * i,
                        n.index = i,
                        n.label = a[i],
                        this.tabContainer.addChild(n),
                        n.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                        n.currentState = "up",
                        e.medalPage && 1 == i ? (n.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP)), e.medalPage = !1) : 0 == i && n.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP)),
                        1 == i && (this["tabBtnSpot" + (i + 1)] = new eui.Image(RES.getRes("GUI_Homepage_notice_png")), this["tabBtnSpot" + (i + 1)].x = 118 * i + 100, this.tabContainer.addChild(this["tabBtnSpot" + (i + 1)]))
                } else this.showPartPanel();
            egret.setTimeout(function() {
                        Utils.getImgByUrl(Path.uiUrl + "zhenrongxuanzhangchuantuzhi.jpg", t.imgBg)
                    },
                    this, 2e3),
                SUI.addClickEffect(this.btnArrange),
                this.btnQuickEquip.visible = this.btnSetCaption.visible = this.btnArrange.visible = this.labelArrange.visible = !this.friendBool,
                this.equipPanel1.index = 1,
                this.equipPanel2.index = 2,
                this.equipPanel3.index = 3,
                this.equipPanel4.index = 4,
                this.equipPanel1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showChooseEquip, this),
                this.equipPanel2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showChooseEquip, this),
                this.equipPanel3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showChooseEquip, this),
                this.equipPanel4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showChooseEquip, this),
                this.captainPanel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showChooseCaptain, this),
                this.btnEquipAllPart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.autoEquipMedal, this),
                this.btnRemoveAllPart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.autoRemoveMedal, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.SHIP_UPDATE, this.updateShipList, this),
                this.updateShipList(),
                this.updateFormation(),
                this.btnArrange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showFormatTeam, this),
                this.btnQuickEquip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.autoEquip, this),
                this.shipPic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showChoosShip, this),
                this.infoGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showChoosShip, this),
                this.btnSetCaption.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setCaption, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.ArrangeWindow_shipSelected, this.setShipData, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.ShipDataUpdate, this.setShipData, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.WindowChooseItem_chooseNewShip, this.setSoldier, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.WindowChooseItem_chooseNewPart, this.setEquip, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.WindowChooseItem_chooseNewMedal, this.setEquipSoul, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.SoldierList_update, this.updateSoldier, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.Souls_List_Refresh, this.updateShipList, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.Souls_List_Refresh, this.setShipData, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.WindowChooseItem_chooseNewCaptain, this.setCaptainData, this),
                this.friendBool || (this.captainPanel.visible = UserData.getInstance()._level >= 50),
                SUI.addClickEffect(this.btnChangeShip),
                this.btnChangeShip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeShipHandler, this),
                71 != GuideManager.step || this.friendBool || egret.setTimeout(function() {
                        t.scroll.viewport.scrollH = 185
                    },
                    this, 100);
            var s = 5,
                r = 2,
                o = 2,
                l = 2,
                h = this.tipGroup.y;
            this.tipTickId = GameTick.registerHandler(function() {
                    t.tipGroup.visible && (t.tipGroup.y < h - 30 ? s = 5 : t.tipGroup.y > h + 30 && (s = -5), t.tipGroup.y += s);
                    for (var e = 1; 5 > e; e++) t["u" + e].visible && (t["u" + e].y < 35 ? r = 2 : t["u" + e].y > 55 && (r = -2), t["u" + e].y += r);
                    for (e = 1; 7 > e; e++) t["mu" + e].visible && (t["mu" + e].y < 35 ? o = 2 : t["mu" + e].y > 55 && (o = -2), t["mu" + e].y += o);
                    t.cu.visible && (t.cu.y < 35 ? l = 2 : t.cu.y > 55 && (l = -2), t.cu.y += l)
                },
                50)
        },
        i.setChangeShipPoint = function(t) {
            this.changeShipPoint.visible = t > 0,
                this.friendBool && (this.changeShipPoint.visible = !1)
        },
        i.changeShipHandler = function(t) {
            var e = ShipManager.getInstance().getEmptyShips();
            e.sort(function(t, e) {
                    var a = ConfigData.getDataByKey("shipData", t.shipid),
                        i = ConfigData.getDataByKey("shipData", e.shipid);
                    return 1e3 * Number(a.quality) + t.level > 1e3 * Number(i.quality) + e.level ? -1 : 1
                }),
                WindowManager.getInstance().show(WindowManager.windowType.ChoosItem, {
                    data: e,
                    type: WindowChooseItemType.ship,
                    pos: this.curPos
                })
        },
        i.showChoosShip = function(t) {
            this.friendBool ? WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                data: this.selectedShipData,
                type: shipInfoWindowType.preview
            }) : (35 == GuideManager.step && GuideManager.nextStep(), t.currentTarget == this.infoGroup ? WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                data: this.selectedShipData,
                type: OperateType.ship,
                index: 1
            }) : WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                data: this.selectedShipData,
                type: shipInfoWindowType.cultivate,
                battle: this.curPos
            }))
        },
        i.setSoldier = function(t) {
            var e = t.parames.id,
                a = t.parames.pos;
            this.curPos = a,
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceSetSoldier, {
                    shipid: e,
                    pos: a - 1
                })
        },
        i.setEquip = function(t) {
            var e = t.parames.id;
            t.parames.pos;
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceEquipParts, {
                partsid: e,
                pos: this.curPos - 1
            })
        },
        i.setEquipSoul = function(t) {
            var e = t.parames.id,
                a = t.parames.pos;
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceEquipSoul, {
                soulid: e,
                soldierpos: this.curPos - 1,
                pos: a
            })
        },
        i.setCaption = function(t) {
            var e = this.curPos - 1,
                a = ShipManager.getInstance().soldierList[e];
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceSetCaption, {
                captionid: a.shipid
            }, !0)
        },
        i.showFormatTeam = function() {
            WindowManager.getInstance().needShowWindow = !0,
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceGetTactic, null, !0)
        },
        i.showChooseCaptain = function(t) {
            if (UserData.getInstance()._level < 50) Toast.launch(Locales.get("caption_error"));
            else if (134 != GuideManager.step && 138 != GuideManager.step || this.friendBool || GuideManager.nextStep(), this.equipCaptain)
                if (this.friendBool) WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                    data: this.scoutSoldier.ship[this.curPos - 1].captain,
                    type: shipInfoWindowType.captainPreview
                });
                else {
                    var e = CaptainManager.getInstance().getPropoDataById(this.equipCaptain);
                    WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                        data: e,
                        type: shipInfoWindowType.captainInfo,
                        battle: CaptainData.captainlist
                    })
                }
            else this.friendBool || WindowManager.getInstance().show(WindowManager.windowType.ChoosItem, {
                data: CaptainData.captainlist,
                type: WindowChooseItemType.captain,
                ship: this.selectedShipData.id
            })
        },
        i.showChooseEquip = function(t) {
            var e, a = t.currentTarget.index;
            e = this.friendBool ? this.shipListData[this.curPos - 1] : ShipManager.getInstance().getShipById(this.shipListData[this.curPos - 1].shipid);
            var i = ShipManager.getInstance().shipCfg[e.shipid],
                n = i.shipType,
                s = this.getIdlePartsList(a, n);
            if (this["emptyEquip" + a].visible) this.friendBool || WindowManager.getInstance().show(WindowManager.windowType.ChoosItem, {
                data: s,
                type: WindowChooseItemType.parts
            });
            else if (this.friendBool) WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                data: this.scoutSoldier.ship[this.curPos - 1].parts.list[a - 1],
                type: shipInfoWindowType.partsPreview
            });
            else {
                var r = ShipManager.getInstance().soldierList[this.curPos - 1],
                    o = ShipManager.getInstance().getPartById(r.partslist[a - 1]);
                WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                    equipType: a,
                    data: o,
                    shipType: n,
                    type: shipInfoWindowType.partsInfo,
                    battle: s
                })
            }
        },
        i.onTabBarItemTap = function(t) {
            var e = t.currentTarget;
            e.currentState = "down",
                this.lastTab && this.lastTab != e && (this.lastTab.currentState = "up"),
                this.lastTab = e,
                0 == e.index ? this.showPartPanel() : (126 != GuideManager.step || this.friendBool || GuideManager.nextStep(), this.showMedalPanel())
        },
        i.autoEquip = function() {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceAutoEquipSoldier, {
                pos: this.curPos - 1
            }, !0)
        },
        i.autoEquipMedal = function() {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceAutoEquipSoul, {
                soldierpos: this.curPos - 1
            }, !1)
        },
        i.autoRemoveMedal = function() {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceUnAutoEquipSoul, {
                soldierpos: this.curPos - 1
            }, !1)
        },
        i.updateSoldier = function() {
            this.updateShipList(),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.ArrangeWindow_shipSelected, {
                    pos: this.curPos
                }))
        },
        i.updateFormation = function() {
            var t = ShipManager.getInstance().shipFormationList[ShipManager.getInstance().shipFormationSelect - 1];
            this.txtArrangeName.text = Locales.get("formationSet", Locales.get("formationName_" + t.id), t.level)
        },
        i.updateShipList = function() {
            var t = this;
            this.shipListData = this.getShips(),
                this.list.dataProvider = new eui.ArrayCollection(this.shipListData),
                this.list.itemRenderer = windowArrangeShipItem;
            for (var e = 0,
                    a = 0; a < this.shipListData.length; a++) "0" != this.shipListData[a].id && "0" != this.shipListData[a].shipid && e++;
            for (var a = 0; a < this.list.numElements; ++a) {
                var i = this.list.getElementAt(a);
                i && (this.shipListData[a].pos == this.curPos && (this.shipListData[a].selected = !0), i.data = this.shipListData[a], this.friendBool && (i.enabled = !1))
            }
            var n = UserData.getInstance().getCurPosNum();
            this.txtArrangeNum.text = e + "/" + (n > 8 ? 8 : n),
                egret.setTimeout(function() {
                        t.scrollX && (t.scroll.viewport.scrollH = t.scrollX)
                    },
                    this, 100)
        },
        i.setShipData = function(t) {
            t && t.parames && (this.curPos = t.parames.pos);
            var e, a, i = this.curPos - 1;
            if (this.friendBool ? (e = this.scoutSoldier.ship[i], a = e, this.tabBtnSpot2 && (this.tabBtnSpot2.visible = !1)) : (e = ShipManager.getInstance().soldierList[i], a = ShipManager.getInstance().getShipById(e.shipid)), a && a.shipid) {
                this.selectedShipData = a;
                var n = ConfigData.getDataByKey("shipData", a.shipid);
                this.metalTitleTxt.text = a.name,
                    this.txtShipName.text = ShipdataParser.GetInstance().getItemById(a.shipid).name_l,
                    this.txtShipName.textColor = QualitySystem.getColorByQuality(n.quality),
                    this.txtShipUserName.text = a.name,
                    this.lvTxt.text = a.level + "/" + UserData.getInstance().getMaxShipLevel(),
                    this.lifeTxt.text = a.maxhp.toString(),
                    this.fireTxt.text = a.attack.toString(),
                    this.speedTxt.text = a.speed.toString(),
                    this.defendTxt.text = a.firedefence.toString(),
                    this.exploTxt.text = a.explosiondefence.toString();
                var s = Math.floor(a.shipid / 1e4);
                Math.floor(a.shipid % 100);
                this.friendBool ? this.captionMark.visible = a.id == this.scoutSoldier.captionid : (this.captionMark.visible = a.id == ShipManager.getInstance().captionId, this.btnSetCaption.visible = !this.captionMark.visible, GameEventDispatcher.getInstance().addEventListener(GameEvent.PARTS_UPDATE, this.updateParts, this), GameEventDispatcher.getInstance().addEventListener(GameEvent.MEDAL_PIECES, this.setSoulPanel, this), GameEventDispatcher.getInstance().addEventListener(GameEvent.SOULS_UPDATE, this.setSoulPanel, this), GameEventDispatcher.getInstance().addEventListener(GameEvent.SOULS_REMOUDLE, this.setSoulPanel, this)),
                    SUI.setTextureAsync(this.imgCountry, Path.countryURL + "country_" + n.country + ".jpg"),
                    SUI.setTextureAsync(this.typeIcon, ShipManager.getInstance().getShipTypeIcon(s)),
                    SUI.setTextureAsync(this.shipPic, ShipManager.getInstance().getShipPicByType(a.shipid)),
                    this.txtShipUpgrade.text = "",
                    this.updateParts();
                var r = ConfigData.getDataByKey("skillData", a.skillid);
                this.txtSkillName1.textFlow = Utils.textFlowByStr(Locales.get("skillNameWithLevel", r.name_l, r.level));
                var o = ConfigData.getDataByKey("skillData", a.activeskillid);
                this.txtSkillName2.textFlow = Utils.textFlowByStr(Locales.get("skillNameWithLevel", o.name_l, o.level));
                var l = ConfigData.getDataByKey("skillData", a.circleskillid);
                this.txtSkillName3.textFlow = Utils.textFlowByStr(Locales.get("skillNameWithLevel", l.name_l, l.level)),
                    this.friendBool ? this.setCaptainData(new GameEvent(GameEvent.WindowChooseItem_chooseNewCaptain, {
                        id: e.captain && e.captain.id || null
                    })) : this.setCaptainData(new GameEvent(GameEvent.WindowChooseItem_chooseNewCaptain, {
                        id: e.captainid
                    })),
                    this.setSoulPanel(),
                    GuideManager.guideComplete ? RedPointManager.getShipUpdate(a) > 0 ? (this.tipGroup.visible = !0, this.tipTxt.text = "可升级") : RedPointManager.getShipRemodule(a) > 0 ? (this.tipGroup.visible = !0, this.tipTxt.text = "可改造") : RedPointManager.getShipSkill(a) > 0 ? (this.tipGroup.visible = !0, this.tipTxt.text = "可升级") : RedPointManager.getShipTrain(a) > 0 ? (this.tipGroup.visible = !0, this.tipTxt.text = "可训练") : this.tipGroup.visible = !1 : this.tipGroup.visible = !1,
                    RedPointManager.getPointShow({
                            quality: Number(n.quality)
                        },
                        RedPointType.ships) ? this.setChangeShipPoint(1) : this.setChangeShipPoint(0)
            }
        },
        i.updateParts = function() {
            var t, e, a = this.curPos - 1;
            this.friendBool ? (t = this.scoutSoldier.ship[a], e = t) : (t = ShipManager.getInstance().soldierList[a], e = ShipManager.getInstance().getShipById(t.shipid));
            for (var i = (ConfigData.getDataByKey("shipData", e.shipid), Math.floor(e.shipid / 1e4)), n = 1; 4 >= n; n++) {
                var s = void 0;
                if (s = this.friendBool ? t.parts.list[n - 1] : ShipManager.getInstance().getPartById(t.partslist[n - 1]), this["point" + n].visible = !1, s && s.partsid) {
                    var r = ConfigData.getDataByKey("parts", s.partsid);
                    this["txtEquipName" + n].text = PartsParser.GetInstance().getItemById(s.partsid).name_l,
                        this["txtEquipName" + n].textColor = QualitySystem.getColorByQuality(r.quality),
                        this["emptyEquip" + n].visible = !1,
                        this["equip" + n].visible = !0,
                        SUI.setTextureAsync(this["equipPic" + n], Path.partsIconURL + r.icon),
                        SUI.setTextureAsync(this["equipBg" + n], QualitySystem.getItemSmallBack(r.quality)),
                        this["txtLevel" + n].text = s.upgradelevel,
                        this["txtUpgrade" + n].text = s.remouldlevel,
                        this.friendBool || (this["point" + n].visible = RedPointManager.getPartRedPoint(s, n, i) > 0, this["u" + n].visible = RedPointManager.getPartUpdateBool(s, !0) > 0 && 0 == RedPointManager.getPartRemoduleBool(s) && !RedPointManager.getPointShow({
                                quality: Number(r.quality),
                                parts: s,
                                equipType: n,
                                shipType: i
                            },
                            RedPointType.parts), this["u" + n].visible && (this["point" + n].visible = !1))
                } else if (this["txtEquipName" + n].text = Locales.get("panel_parts_txt_parttype_" + n), this["txtEquipName" + n].textColor = 11250603, this["emptyEquip" + n].visible = !0, this["equip" + n].visible = !1, this.friendBool) this["point" + n].visible = !1;
                else {
                    this["point" + n].visible = !1;
                    var o = this.getIdlePartsList(n, i);
                    this["point" + n].visible = o.length > 0
                }
            }
        },
        i.setSoulPanel = function() {
            var t, e = this.curPos - 1;
            t = this.friendBool ? this.scoutSoldier.ship[e] : ShipManager.getInstance().soldierList[e];
            var a = null;
            this.friendBool || (a = ConfigData.getDataByKey("shipData", ShipManager.getInstance().getShipById(t.shipid).shipid), this.tabBtnSpot2 && (this.tabBtnSpot2.visible = ShipManager.getInstance().getMedalRedPoint(t) > 0)),
                this.soulTypeObj = {};
            for (var i = 0; 6 > i; i++) {
                var n;
                if (n = this.friendBool ? t.soullist.list[i] || null : ShipManager.getInstance().getSoulById(t.soullist[i]), n && "0" != n.id) {
                    this["part" + (i + 1)].visible = !0,
                        this["emptyPart" + (i + 1)].visible = !1;
                    var s = ConfigData.getDataByKey("medalData", n.soulid);
                    this["part" + (i + 1)].index = i,
                        this["part" + (i + 1)].hasEventListener(egret.TouchEvent.TOUCH_TAP) || this["part" + (i + 1)].addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMedalHandler, this),
                        this.soulTypeObj[s.medalType] = !0,
                        Utils.getImgByUrl(Path.soulIconURL + s.icon, this["partPanel" + (i + 1)].pic),
                        this["partPanel" + (i + 1)].txtLevel.text = Utils.getMetalLvByExp(n.point, "exp" + s.exp),
                        this["partPanel" + (i + 1)].txtUpgrade.text = n.promotelvl,
                        Utils.getImgByUrl(QualitySystem.getItemSmallBack(s.quality), this["partPanel" + (i + 1)].bg),
                        this["txtPartName" + (i + 1)].text = MedaldataParser.GetInstance().getItemById(n.soulid).name_l,
                        this["txtPartName" + (i + 1)].textColor = QualitySystem.getColorByQuality(s.quality),
                        this["txtPartValue" + (i + 1)].text = BuffData.getBuffNameById(s.buff) + ":" + BuffData.getBuffValue(s, Utils.getMetalLvByExp(n.point, "exp" + s.exp)),
                        this["txtPartUgrade" + (i + 1)].text = BuffData.getBuffNameById(s.remouldType) + ":+" + SoulManager.getInstance().getPercentage(n.promotelvl, s.remouldValue),
                        this.friendBool ? this["spotPart" + (i + 1)].visible = !1 : (this["spotPart" + (i + 1)].visible = RedPointManager.getMedalRedPoint(a.shipType, n, s) > 0, this["mu" + (i + 1)].visible = RedPointManager.getMedalUpdateBool(n, !0) > 0 && 0 == RedPointManager.getMedalRemoduleBool(n) && !RedPointManager.getPointShow({
                                shipType: a.shipType,
                                soul: n,
                                quality: Number(s.quality),
                                exp: s.exp
                            },
                            RedPointType.medals), this["mu" + (i + 1)].visible && (this["spotPart" + (i + 1)].visible = !1))
                } else if (this["emptyPart" + (i + 1)].index = i, this["part" + (i + 1)].visible = !1, this["emptyPart" + (i + 1)].visible = !0, this["spotPart" + (i + 1)].visible = !1, !this.friendBool) {
                    var r = !0;
                    if (i > 2 && UserData.getInstance()._level < 10 * (i - 3) + 60 && (r = !1, this["txtEmptyDesc" + (i + 1)].text = 10 * (i - 3) + 60 + Locales.get("DecEquipPanel_txt_lock"), this["imgEmptyFlag" + (i + 1)].source = RES.getRes(Path.resHeadUrl + "zhenrong_locked_png")), r) {
                        this["emptyPart" + (i + 1)].hasEventListener(egret.TouchEvent.TOUCH_TAP) || this["emptyPart" + (i + 1)].addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectMedalHandler, this);
                        for (var o = this.getIdleSoulList(a.shipType), l = 0; l < o.length; l++) {
                            var s = ConfigData.getDataByKey("medalData", o[l].soulid);
                            if (!this.soulTypeObj[s.medalType]) {
                                this["spotPart" + (i + 1)].visible = !0;
                                break
                            }
                        }
                    }
                }
            }
        },
        i.getIdlePartsList = function(t, e) {
            for (var a = ShipManager.getInstance().getPartsByType(t, e), i = [], n = 0; n < a.length; n++) ShipManager.getInstance().isPartEquiped(a[n].id) || i.push(a[n]);
            return i.sort(function(t, e) {
                    var a = ConfigData.getDataByKey("parts", t.partsid),
                        i = ConfigData.getDataByKey("parts", e.partsid),
                        n = 1e4 * Number(a.quality) + 100 * t.remouldlevel + t.upgradelevel,
                        s = 1e4 * Number(i.quality) + 100 * e.remouldlevel + e.upgradelevel;
                    return n > s ? -1 : 1
                }),
                i
        },
        i.getIdleSoulList = function(t) {
            for (var e = ShipManager.getInstance().getGoodAtSoulList(t), a = [], i = 0; i < e.length; i++) {
                var n = ConfigData.getDataByKey("medalData", e[i].soulid);
                this.soulTypeObj[n.medalType] || 9 == n.medalType || ShipManager.getInstance().isMedalEquiped(e[i].id) || a.push(e[i])
            }
            var n = ConfigData.getAllData("medalData");
            return a.sort(function(t, e) {
                    var a = n[t.soulid],
                        i = n[e.soulid],
                        s = 1e4 * Number(a.quality) + 100 * t.promotelvl + t.point / 1e4,
                        r = 1e4 * Number(i.quality) + 100 * e.promotelvl + e.point / 1e4;
                    return s > r ? -1 : 1
                }),
                a
        },
        i.showMedalHandler = function(t) {
            var e = t.currentTarget.index;
            if (this.friendBool) WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                data: this.scoutSoldier.ship[this.curPos - 1].soullist.list[e],
                type: shipInfoWindowType.soulPreview
            });
            else {
                var a = ShipManager.getInstance().soldierList[this.curPos - 1],
                    i = ShipManager.getInstance().getSoulById(a.soullist[e]),
                    n = ConfigData.getDataByKey("shipData", ShipManager.getInstance().getShipById(a.shipid).shipid),
                    s = this.getIdleSoulList(n.shipType);
                WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                    data: i,
                    type: shipInfoWindowType.soulInfo,
                    battle: s,
                    pos: e
                })
            }
        },
        i.selectMedalHandler = function(t) {
            128 != GuideManager.step || this.friendBool || GuideManager.nextStep();
            var e = t.currentTarget.index,
                a = ShipManager.getInstance().soldierList[this.curPos - 1],
                i = ConfigData.getDataByKey("shipData", ShipManager.getInstance().getShipById(a.shipid).shipid),
                n = this.getIdleSoulList(i.shipType);
            WindowManager.getInstance().show(WindowManager.windowType.ChoosItem, {
                data: n,
                pos: e,
                type: WindowChooseItemType.medal
            })
        },
        i.setCaptainData = function(t) {
            var e = this;
            this.equipCaptain = t.parames.id;
            var a;
            if (this.equipCaptain) {
                var i = ConfigData.getDataByKey("captainData", this.equipCaptain);
                if (a = QualitySystem.getCaptainFrame(i.quality), this.captainPic.visible = !0, Utils.getImgByUrl(CaptainManager.getInstance().getCaptainPicById(i.picture, !0), this.captainPic,
                        function() {
                            e.captainPic.width = 108,
                                e.captainPic.height = 110
                        }), Utils.getImgByUrl(a, this.captainBg), Utils.getImgByUrl(QualitySystem.getCaptainSmallBack(i.quality), this.captainBg0), !this.friendBool) {
                    this.spotCaptain.visible = RedPointManager.getCaptainRedPoint(this.equipCaptain) > 0;
                    for (var n, s = 0; s < CaptainData.captainlist.length; s++) {
                        var r = CaptainData.captainlist[s];
                        if (r.id == this.equipCaptain) {
                            n = r;
                            break
                        }
                    }
                    n && (this.cu.visible = RedPointManager.getCaptainUpdate(n, !0) > 0 && 0 == RedPointManager.getCaptainRemodule(n) && !RedPointManager.getPointShow({
                            quality: Number(i.quality)
                        },
                        RedPointType.captain), this.cu.visible && (this.spotCaptain.visible = !1))
                }
            } else {
                this.captainPic.visible = !1,
                    this.captainBg.source = RES.getRes(Path.resHeadUrl + "tujian_fangkuangjianzhang_png"),
                    Utils.getImgByUrl(Path.itemBackURL + "tujian_fangkuangjianzhang.png", this.captainBg),
                    this.spotCaptain.visible = !1;
                for (var s = 0; s < CaptainData.captainlist.length; s++)
                    if (!ShipManager.getInstance().isCaptainEquiped(CaptainData.captainlist[s].id) && !this.friendBool) {
                        this.spotCaptain.visible = !0;
                        break
                    }
                this.cu.visible = !1
            }
            t.parames["new"] && RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceEquipCaptain, {
                captainid: this.equipCaptain,
                pos: this.curPos - 1
            }, !1)
        },
        i.getShips = function() {
            var t, e = [];
            t = this.friendBool ? this.scoutSoldier.ship : ShipManager.getInstance().soldierList;
            var a = t.length;
            (8 == GuideManager.step || 24 == GuideManager.step) && (a = 3);
            for (var i = 0; a > i; i++) {
                var n = {};
                if (n.pos = i + 1, n.shipid = t[i].shipid, n.friendBool = this.friendBool, 8 > i && t[i] && t[i].shipid && "0" != t[i].shipid && "0" != t[i].id) {
                    var s = this.friendBool ? t[i] : ShipManager.getInstance().getShipById(t[i].shipid),
                        r = ShipManager.getInstance().shipCfg[s.shipid];
                    n.id = r.id,
                        n.pic = ShipManager.getInstance().getShipPicByType(s.shipid),
                        n.typeIcon = ShipManager.getInstance().getShipTypeIcon(r.shipType),
                        n.bg = QualitySystem.getShipSmallBack(r.quality),
                        n.caption = s.id == ShipManager.getInstance().captionId
                }
                e.push(n)
            }
            return e
        },
        i.showPartPanel = function() {
            this.equipPanel.visible = !0,
                this.medalPanel.visible = !1
        },
        i.showMedalPanel = function() {
            this.equipPanel.visible = !1,
                this.medalPanel.visible = !0
        },
        e
}(WindowBase);
