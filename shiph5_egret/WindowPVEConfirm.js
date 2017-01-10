
var WindowPVE = function(t) {
    function e() {
        t.call(this, !1),
            this._initedNormalCampaignPanel = !1,
            this._initedSpecialCampaignPanel = !1,
            this.skinName = "resource/eui_skins/ZhanYiSkin.exml"
            /*tpa=resource/eui_skins/ZhanYiSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            t.type == BattleType.BATTLE_TYPE_MAIN_SPECIAL ? this.switchType(MainWorldManager.BATTLE_TYPE_SPECIAL) : this.switchType(MainWorldManager.BATTLE_TYPE_NORMAL)
        },
        i.init = function() {
            this.btnSwitchDifficut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnSwitchDifficut, this),
                this.btnChooseLevel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnChooseLevel, this),
                this.btnRanking.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnRanking, this),
                this.btnArrange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnArrange, this),
                this.btnShowDrops.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnShowDrops, this),
                this.btnConquer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnConquer, this),
                this.btnBipeOut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnBipeOut, this),
                this.btnExploit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnExploit, this),
                SUI.addClickEffect(this.btnExploit),
                this.setIsShowDropInfo(MainWorldManager.instance.isShowDropInfo),
                this.InitScvMap(),
                this.scvLevels.viewport = this.lstLevels,
                MainUI.instance.changeTopMode(topUIMode.simple),
                EventManager.instance.addEventListener(EventTypes.EVENT_CHOOSE_CAMPAIGN, this.OnChooseCampaign, this),
                EventManager.instance.addEventListener(EventTypes.EVENT_CHOOSE_AREA, this.OnChooseArea, this),
                EventManager.instance.addEventListener(EventTypes.MAINWORLD_OPEN_CAMPAIGN, this.OnOpenCampaign, this),
                EventManager.instance.addEventListener(EventTypes.MAINWORLD_SHOW_CAMPAIGN, this.OnShowCampaign, this),
                EventManager.instance.addEventListener(EventTypes.RED_BALL_UPDATE, this.OnRedBallUpdate, this),
                this.lstLevels.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.OnSelectLevelItem, this),
                39 == GuideManager.step && GuideManager.nextStep(),
                UserData.getInstance()._level < 6 && (this.btnExploit.visible = !1, this.imgExploitSpot.visible = !1, this.txtExploit.visible = !1),
                this.OnRedBallUpdate()
        },
        i.OnRedBallUpdate = function() {
            this.btnExploit.visible && (this.imgExploitSpot.visible = UserData.getInstance().activeTips.medal)
        },
        i.OnClickBtnExploit = function() {
            WindowManager.getInstance().show(WindowManager.windowType.Medal)
        },
        i.InitScvMap = function() {
            this._scvMapEx = new ScrollerEx,
                this._scvMapEx.width = this.scvMap.width,
                this._scvMapEx.height = this.scvMap.height,
                this._scvMapEx.x = this.scvMap.x,
                this._scvMapEx.y = this.scvMap.y,
                this._scvMapEx.viewport = this.lstMap,
                this._scvMapEx.throwSpeed = 0,
                this.scvMap.parent.addChildAt(this._scvMapEx, this.scvMap.parent.getChildIndex(this.scvMap)),
                this.scvMap.parent.removeChild(this.scvMap),
                this._scvMapEx.addEventListener(eui.UIEvent.CHANGE_START, this.OnScrollMapStart, this),
                this._scvMapEx.addEventListener(eui.UIEvent.CHANGE_END, this.OnScrollMapEnd, this)
        },
        i.setIsShowDropInfo = function(t) {
            MainWorldManager.instance.isShowDropInfo = t,
                MainWorldManager.instance.isShowDropInfo ? this.btnShowDrops.labelDisplay.text = "查看战役" : this.btnShowDrops.labelDisplay.text = "查看掉落"
        },
        i.switchType = function(t) {
            var a = this;
            MainWorldManager.instance.switchBattleType(t);
            for (var i = [], n = AreadataParser.GetInstance().getDataArr(), s = MainWorldManager.instance.getCurrentArea(), r = 0, o = 0; o < n.length; ++o) {
                var l = n[o];
                l.id <= s && i.push({
                        type: t,
                        userData: l
                    }),
                    l.id == s && (r = o)
            }
            t == MainWorldManager.BATTLE_TYPE_NORMAL ? (this.gpElite.visible = !1, this.scvLevels.visible = !0, this.btnSwitchDifficut.labelDisplay.text = "精英战役", this.btnShowDrops.visible = !0, MainWorldManager.instance.chooseCampaignId < 0 && (MainWorldManager.instance.chooseCampaignId = MainWorldManager.instance.getCurrentCampaign()), RequestManager.GetInstance().enterCampaign(MainWorldManager.instance.getCurrentBattleType(), MainWorldManager.instance.chooseCampaignId)) : (this.scvLevels.visible = !1, this.gpElite.visible = !0, this.btnSwitchDifficut.labelDisplay.text = "普通战役", this.btnShowDrops.visible = !1, MainWorldManager.instance.chooseCampaignId < 0 && (MainWorldManager.instance.chooseCampaignId = MainWorldManager.instance.getCurrentSpecialCampaign()), e.lastScrolled = this.lstLevels.scrollV, this.ShowCampaign(MainWorldManager.instance.chooseCampaignId, MainWorldManager.instance.getSpecialList())),
                this.lstMap.dataProvider = new eui.ArrayCollection(i),
                this.lstMap.itemRenderer = PVEMAPAreaRenderer;
            var h = !1;
            if (t == MainWorldManager.BATTLE_TYPE_NORMAL) {
                var c = StageDataLib.instance.getAreaIdById(MainWorldManager.instance.laststagaID),
                    d = c.areaId;
                if (s > d) {
                    var g = AreadataParser.GetInstance().getItemById(s);
                    if (g) {
                        var u = UserData.getInstance()._uid + "areaTalk" + s;
                        "" == UserDefault.instance.getStringForKey(u) && GuideManager.guideComplete && (WindowManager.getInstance().show(WindowManager.windowType.pveTalking, {
                            cfg: g,
                            callback: function() {
                                a.OnChooseArea(s, r)
                            },
                            thisObj: this
                        }), h = !0, UserDefault.instance.setStringForKey(u, "t"))
                    }
                }
            }
            h || (MainWorldManager.instance.scrolled < 0 ? this.OnChooseArea(s, r) : this.OnChooseArea(s, MainWorldManager.instance.scrolled))
        },
        i.ShowCampaign = function(t, a) {
            if (!(0 > t))
                if (MainWorldManager.instance.getCurrentBattleType() == MainWorldManager.BATTLE_TYPE_NORMAL) {
                    for (var i = [], n = a.length - 1; n >= 0; --n) i.push({
                        index: n + 1,
                        campaignId: t,
                        userData: a[n]
                    });
                    this.lstLevels.dataProvider = new eui.ArrayCollection(i),
                        this.lstLevels.itemRenderer = PVENormalBattleItemRenderer,
                        e.lastScrolled && (this.lstLevels.validateNow(), this.lstLevels.scrollV = e.lastScrolled, e.lastScrolled = null)
                } else {
                    this.txtEliteRewards.text = Locales.get("zz_reward"),
                        this.txtEliteDrops.text = Locales.get("zz_drop"),
                        this.btnConquer.labelDisplay.text = Locales.get("panel_sweep_txt_title"),
                        this.btnBipeOut.labelDisplay.text = Locales.get("panel_stageselect_normal_sweepBtn");
                    var s = StageSpecialDataLib.instance.getDataByCampaignId(t);
                    this.txtEliteTitle.text = s.desc_l,
                        this.txtEliteOil.text = s.costOil.toString();
                    var r = MainStageOptData.getSpecialCount(StageSpecialDataLib.instance.getCampaignIdBySpecialId(s.id));
                    this.txtEliteLeftTimes.text = Locales.get("panel_stageselect_special_dayAtkCount"),
                        this.txtEliteLeftTimesValue.text = "{0}/{1}".format(s.dayAtkCount - r, s.dayAtkCount),
                        this.txtEliteExp.text = s.exp.toString(),
                        this.txtEliteGold.text = s.gold.toString();
                    for (var n = 0; 6 > n; ++n) {
                        var o = n + 1,
                            l = this["item" + o];
                        if (s.itemType.length > n) {
                            var h = (s.itemType[n], s.itemId[n], GlobalFunction.getDropDataByTypeAndId(s.itemType[n], s.itemId[n]));
                            SUI.setItemIcon(l, h)
                        } else l.visible = !1
                    }
                    var c = !1,
                        d = Math.floor(s.id % 100).toString(),
                        g = MainWorldManager.instance.getSpecialList()[d];
                    this._curSpeicalCampaignData = g,
                        g && g.serverData ? (MainWorldManager.oldStar = g.serverData.star, c = !0) : MainWorldManager.oldStar = 0,
                        c ? UserData.getInstance().getPlayerLevel() < 20 ? this.btnBipeOut.enabled = !1 : this.btnBipeOut.enabled = !0 : this.btnBipeOut.enabled = !1
                }
        },
        i.OnClickBtnSwitchDifficut = function(t) {
            var e = MainWorldManager.instance.getCurrentBattleType();
            e == MainWorldManager.BATTLE_TYPE_NORMAL ? MainWorldManager.instance.sendEnterSpecial() : MainWorldManager.instance.sendEnterNormal(),
                97 == GuideManager.step && GuideManager.nextStep()
        },
        i.OnClickBtnChooseLevel = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.PVEChooseLevel)
        },
        i.OnClickBtnRanking = function(t) {
            MainWorldManager.instance.getCurrentBattleType() == MainWorldManager.BATTLE_TYPE_NORMAL ? RankListManager.getInstance().showRankWin(2) : RankListManager.getInstance().showRankWin(3)
        },
        i.OnClickBtnArrange = function(t) {
            WindowManager.getInstance().needShowWindow = !0,
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceGetTactic, null, !0)
        },
        i.OnClickBtnShowDrops = function(t) {
            this.setIsShowDropInfo(!MainWorldManager.instance.isShowDropInfo),
                EventManager.instance.dispatchEvent(EventTypes.EVENT_REFRESH_PVE_LEVEL_ITEM)
        },
        i.OnClickBtnConquer = function(t) {
            99 == GuideManager.step && GuideManager.nextStep();
            var e = MainWorldManager.instance.SpecialFightCheck(this._curSpeicalCampaignData.baseData);
            if (e == MainWorldManager.OilLimit) {
                var a = ItemsManager.getInstance().getItemById(1076);
                if (a && a.count > 0) {
                    var i = {};
                    i.title = Locales.get("panel_AlertLueduolingBuy_txt_comment_6"),
                        i.itemId = 1076,
                        WindowManager.getInstance().show(WindowManager.windowType.ItemUse, i)
                } else WindowManager.getInstance().show(WindowManager.windowType.OilRefining)
            } else e == MainWorldManager.CountLimit ? Toast.launch(Locales.get("panel_MainWorldStageSelectNormalPanel_txt_WindWord"), 16711680) : (BattleManager.instance.setFirstBaseData(this._curSpeicalCampaignData.baseData.exp, this._curSpeicalCampaignData.baseData.gold), BattleManager.instance.sendMainSpecialBattleStart(this._curSpeicalCampaignData.baseData.id), EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_BAKE, {
                type: 2,
                specialBaseData: this._curSpeicalCampaignData.baseData
            }))
        },
        i.OnClickBtnBipeOut = function(t) {
            if (1 == VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).eliteRaids) {
                var e = MainWorldManager.instance.SpecialFightCheck(this._curSpeicalCampaignData.baseData);
                if (e == MainWorldManager.OilLimit) {
                    var a = ItemsManager.getInstance().getItemById(1076);
                    if (a && a.count > 0) {
                        var i = {};
                        i.title = Locales.get("panel_AlertLueduolingBuy_txt_comment_6"),
                            i.itemId = 1076,
                            WindowManager.getInstance().show(WindowManager.windowType.ItemUse, i)
                    } else WindowManager.getInstance().show(WindowManager.windowType.OilRefining)
                } else if (e == MainWorldManager.CountLimit) Toast.launch(Locales.get("panel_MainWorldStageSelectNormalPanel_txt_WindWord"), 16711680);
                else {
                    var n = this._curSpeicalCampaignData.baseData.name_l,
                        s = this._curSpeicalCampaignData.serverData ? this._curSpeicalCampaignData.serverData.todayCount : 0,
                        r = this._curSpeicalCampaignData.baseData.dayAtkCount - s,
                        i = (this._curSpeicalCampaignData.baseData, {});
                    i.title = n,
                        i.leftTimes = r,
                        i.stageInfo = this._curSpeicalCampaignData,
                        i.campaignData = this._curSpeicalCampaignData.baseData,
                        i.exp = this._curSpeicalCampaignData.baseData.exp,
                        i.gold = this._curSpeicalCampaignData.baseData.gold,
                        i.type = BattleType.BATTLE_TYPE_MAIN_SPECIAL,
                        WindowManager.getInstance().show(WindowManager.windowType.PVEConfirm, i)
                }
            } else Toast.launch(Locales.get("panel_stageselect_special_wind_vip"), 16711680)
        },
        i.OnChooseCampaign = function(t) {
            MainWorldManager.instance.getCurrentBattleType() == MainWorldManager.BATTLE_TYPE_NORMAL ? RequestManager.GetInstance().enterCampaign(MainWorldManager.instance.getCurrentBattleType(), t) : this.ShowCampaign(t, MainWorldManager.instance.getSpecialList())
        },
        i.OnChooseArea = function(t, e) {
            this._scvMapEx.scrollToItemIndex(e, !1, 640, 0, this.lstMap.dataProvider.length, 300,
                function() {
                    MainWorldManager.instance.scrolled = e
                },
                this)
        },
        i.OnOpenCampaign = function(t, e) {
            this.ShowCampaign(t, e)
        },
        i.OnShowCampaign = function(t) {
            this.switchType(MainWorldManager.BATTLE_TYPE_SPECIAL)
        },
        i.OnSelectLevelItem = function(t) {
            var e = this.lstLevels.selectedItem,
                a = this.lstLevels.selectedIndex,
                i = this.lstLevels.dataProvider.getItemAt(a),
                n = i.userData.baseData;
            if (i.userData.isLock) return void Toast.launch("未开启，完成之前关卡解锁");
            var s = n.name_l,
                r = i.userData.serverData ? i.userData.serverData.todayCount : 0,
                o = n.dayAtkCount - r,
                l = CampaigndataParser.GetInstance().getItemById(i.campaignId);
            if (!i.userData.serverData || i.userData.serverData.star < 3)
                if (UnlockManager.instance.Stage_Talk_Check(i.userData) && GuideManager.guideComplete) {
                    UnlockManager.instance.LocalAddStageTalk_Current(i.userData);
                    var h = function() {
                        BattleManager.instance.BuyCheck(i.userData, i.userData.baseData) && MainWorldManager.instance.sendNormalBattle(i.userData, l, e.exp, e.gold)
                    };
                    WindowManager.getInstance().show(WindowManager.windowType.pveTalking, {
                        cfg: i.userData.baseData,
                        callback: h
                    })
                } else BattleManager.instance.BuyCheck(i.userData, i.userData.baseData) && MainWorldManager.instance.sendNormalBattle(i.userData, l, e.exp, e.gold);
            else if (BattleManager.instance.BuyCheck(i.userData, i.userData.baseData)) {
                var c = {};
                c.title = s,
                    c.leftTimes = o,
                    c.stageInfo = i.userData,
                    c.campaignData = l,
                    c.exp = e.exp,
                    c.gold = e.gold,
                    c.type = BattleType.BATTLE_TYPE_MAIN_PVE,
                    WindowManager.getInstance().show(WindowManager.windowType.PVEConfirm, c)
            }
        },
        i.OnScrollMapStart = function() {
            this._startScrolled = this._scvMapEx.getScrolled()
        },
        i.OnScrollMapEnd = function() {
            if (void 0 != this._startScrolled) {
                var t = this._scvMapEx.getScrolled() - this._startScrolled;
                this._startScrolled = void 0;
                var e = this.lstMap.dataProvider.length;
                Math.abs(t) > 20 ? t > 0 ? MainWorldManager.instance.scrolled < e - 1 && this.OnChooseArea(0, MainWorldManager.instance.scrolled + 1) : MainWorldManager.instance.scrolled > 0 && this.OnChooseArea(0, MainWorldManager.instance.scrolled - 1) : Math.abs(t) > 1 && this._scvMapEx.scrollToItemIndex(MainWorldManager.instance.scrolled, !1, 640, 0, this.lstMap.dataProvider.length)
            }
        },
        i.clear = function() {
            EventManager.instance.removeEventListenerByBindObject(this),
                MainWorldManager.instance.getCurrentBattleType() == MainWorldManager.BATTLE_TYPE_NORMAL && (e.lastScrolled = this.lstLevels.scrollV);
            var t = Path.effectUrl + "arrowshine/arrowshine.json",
                a = Path.effectUrl + "arrowshine/texture.json",
                i = Path.effectUrl + "arrowshine/texture.png";
            ResLoader.instance.unloadResList([t, a, i])
        },
        e
}(WindowBase);
