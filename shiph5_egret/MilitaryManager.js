
var MainWorldManager = function() {
    function t() {
        this.curCampaign = 10,
            this.battleType = t.BATTLE_TYPE_NORMAL,
            this.lookArea = 0,
            this.lookAreaSpecial = 0,
            this.curSpeicalCampaign = 1,
            this.laststagaID = 0,
            this._chooseNormalCampainId = -1,
            this._chooseSpecialCampainId = -1,
            this.isShowDropInfo = !1,
            this._scrolled = -1,
            this._scrolledSpecial = -1,
            this.starList = [],
            this.allLastList = [],
            this.allSpecialLastList = [],
            this.allSpecialList = {},
            this.winCampaignList = [],
            this.init()
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return e(i, "chooseCampaignId",
            function() {
                return this.battleType == t.BATTLE_TYPE_NORMAL ? this._chooseNormalCampainId : this._chooseSpecialCampainId
            },
            function(e) {
                this.battleType == t.BATTLE_TYPE_NORMAL ? this._chooseNormalCampainId = e : this._chooseSpecialCampainId = e,
                    EventManager.instance.dispatchEvent(EventTypes.PVE_CHOOSE_CAMPAIGN)
            }),
        i.init = function() {
            var t = this;
            EventManager.instance.addEventListener(EventTypes.MAINWORLD_ENTER,
                    function(t) {}),
                EventManager.instance.addEventListener(EventTypes.MAINWORLD_OPEN_CAMPAIGN,
                    function(t) {}),
                EventManager.instance.addEventListener(EventTypes.MAINWORLD_UPDATE_STAGE,
                    function(t) {}),
                EventManager.instance.addEventListener(EventTypes.MAINWORLD_UPDATEPROCESS,
                    function() {}),
                EventManager.instance.addEventListener(EventTypes.MAINWORLD_BAKE,
                    function(e) {
                        1 == e.type ? t.bakeNormalData = e.id : t.bakeSpecialData = e.specialBaseData
                    }),
                EventManager.instance.addEventListener(EventTypes.MAINWORLD_SHOW_CAMPAIGN,
                    function(t) {})
        },
        i.openPVEWindow = function() {
            var e = ["areaData", "campaignData", "stageData", "stageSpecialData"],
                a = [AreadataParser, CampaigndataParser, StagedataParser, StagespecialdataParser];
            ConfigData.preLoadDats(e, a,
                function() {
                    StageDataLib.instance.InitPVEMapInfo(),
                        t.instance.sendEnterNormal()
                })
        },
        i.openPVESpecialWindow = function() {
            var e = ["areaData", "campaignData", "stageData", "stageSpecialData"],
                a = [AreadataParser, CampaigndataParser, StagedataParser, StagespecialdataParser];
            ConfigData.preLoadDats(e, a,
                function() {
                    StageDataLib.instance.InitPVEMapInfo(),
                        t.instance.sendEnterSpecial()
                })
        },
        i.initWorld = function() {},
        i.reLoadCampaign = function() {
            this.getCurrentBattleType() == t.BATTLE_TYPE_SPECIAL ? this.initSpecialCampaign(this.allSpecialLastList) : this.initCampaign(this.allLastList, this.starList, this.laststagaID)
        },
        i.switchBattleType = function(t) {
            this.battleType = t
        },
        i.getStarList = function() {
            return this.starList
        },
        i.getLastStagaID = function() {
            return this.laststagaID
        },
        i.initCampaign = function(e, a, i) {
            this.allLastList = e,
                this.starList = a,
                this.laststagaID = i;
            var n = 0,
                s = -1,
                r = 0;
            if (this.nextArea = -1, this.winCampaignList = [], e.length > 0) {
                var o = StageDataLib.instance.getAreaIdById(e[e.length - 1]);
                n = o.areaId,
                    s = o.campaignId,
                    r = o.stageIndex
            }
            if (this.nextArea = StageDataLib.instance.getCurrentActiveArea(n, s), -1 == this.nextArea && (this.nextArea = n), this.curCampaign = s, CampaigndataParser.GetInstance().getItemById(s + 1)) this.curCampaign = s + 1;
            else {
                var o = StageDataLib.instance.getAreaIdById(StageDataLib.instance.getFirstStage().id);
                n = o.areaId,
                    s = o.campaignId,
                    r = o.stageIndex,
                    this.nextArea = n,
                    this.curCampaign = s
            }
            for (var l = 0,
                    h = e.length; h > l; ++l) {
                var o = StageDataLib.instance.getAreaIdById(e[l]);
                this.winCampaignList.push(o.campaignId)
            }
            this.battleType = t.BATTLE_TYPE_NORMAL,
                0 == this.lookArea ? 1 == UnlockManager.CampaignOpen ? 0 == t.IsGetNewFormation ? this.lookArea = 11 : (this.lookArea = this.nextArea, t.IsGetNewFormation = !1) : this.lookArea = this.nextArea : 1 == UnlockManager.CampaignOpen && (this.lookArea = this.nextArea)
        },
        i.initSpecialCampaign = function(e) {
            this.allSpecialLastList = e;
            var a = 0,
                i = 0,
                n = 0;
            if (this.allLastList.length > 0) {
                var s = StageDataLib.instance.getAreaIdById(this.allLastList[this.allLastList.length - 1]);
                a = s.areaId,
                    i = s.campaignId,
                    n = s.stageIndex
            }
            var r = MainStageOptData.processSpecialData(i, e);
            if (this.allSpecialList = r.stages, this.curSpeicalCampaign = r.nextCampaign, 0 == this.curSpeicalCampaign) return void Toast.launch(Locales.get("zz_unlockSpecial"));
            this.battleType = t.BATTLE_TYPE_SPECIAL;
            var o = 1;
            0 != e.length && (o = StageSpecialDataLib.instance.getCampaignIdBySpecialId(e[e.length - 1].stageID)),
                a = StageDataLib.instance.getAreaByCampaign(o),
                this.nextArea = StageDataLib.instance.getCurrentActiveArea(a, o),
                void 0 == this.nextArea && (this.nextArea = a),
                0 == this.lookAreaSpecial ? 1 == UnlockManager.CampaignOpen ? this.lookAreaSpecial = 11 : this.lookAreaSpecial = this.nextArea : 1 == UnlockManager.CampaignOpen && (this.lookAreaSpecial = this.nextArea),
                EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_SHOW_CAMPAIGN, this.lookAreaSpecial, t.BATTLE_TYPE_SPECIAL),
                EventManager.instance.dispatchEvent(EventTypes.EVENT_REFRESH_ITEM)
        },
        i.openCampaignPanel = function(e) {
            var a = void 0;
            if (e.type == t.BATTLE_TYPE_NORMAL) {
                a = MainStageOptData.processData(e.campaignID, e.stage);
                var i = CampaigndataParser.GetInstance().getItemById(e.campaignID),
                    n = e.campaignID;
                this.openCampain = i,
                    1 == t.IsOpenNormalStagePanel && (t.IsOpenNormalStagePanel = !1),
                    EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_OPEN_CAMPAIGN, n, a)
            } else e.type == t.BATTLE_TYPE_SPECIAL && this.initSpecialCampaign(e.stage)
        },
        i.checkAreaExist = function(t) {
            return void 0 != AreadataParser.GetInstance().getItemById(t)
        },
        i.checkAreaVisible = function(t) {
            this.checkAreaExist(t - 1),
                this.checkAreaExist(t + 1)
        },
        i.checkAreaEnable = function(t) {
            this.checkAreaExist(t - 1) && t - 1 <= this.nextArea,
                this.checkAreaExist(t + 1) && t + 1 <= this.nextArea
        },
        i.upArea = function() {
            var e = 0;
            e = this.getCurrentBattleType() == t.BATTLE_TYPE_SPECIAL ? this.lookAreaSpecial : this.lookArea,
                this.checkAreaExist(e - 1) && e - 1 <= this.nextArea && (e -= 1, this.getCurrentBattleType() == t.BATTLE_TYPE_SPECIAL ? this.lookAreaSpecial = e : this.lookArea = e, EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_SHOW_CAMPAIGN, e))
        },
        i.downArea = function() {
            var e = 0;
            e = this.getCurrentBattleType() == t.BATTLE_TYPE_SPECIAL ? this.lookAreaSpecial : this.lookArea,
                this.checkAreaExist(e + 1) && e + 1 <= this.nextArea && (e += 1, this.getCurrentBattleType() == t.BATTLE_TYPE_SPECIAL ? this.lookAreaSpecial = e : this.lookArea = e, EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_SHOW_CAMPAIGN, e))
        },
        i.sendEnterCampaign = function(t, e) {
            RequestManager.GetInstance().enterCampaign(e, t)
        },
        i.sendEnterNormal = function() {
            RequestManager.GetInstance().enterMainWorld()
        },
        i.sendEnterSpecial = function() {
            UserData.getInstance().getPlayerLevel() < 17 ? Toast.launch(Locales.get("ui_main_function_scientific", 17), 16711680) : (this.lookArea = 0, this.sendEnterCampaign(0, t.BATTLE_TYPE_SPECIAL))
        },
        i.canEnterSpecial = function() {
            return UserData.getInstance().getPlayerLevel() >= 17
        },
        i.FightCheck = function(e, a) {
            return void 0 === a && (a = 1),
                e.baseData.costOil * a > UserData.getInstance().getRes(TypeDefine.RES.Oil) ? t.OilLimit : e.serverData && e.baseData.dayAtkCount - e.serverData.todayCount <= 0 ? t.CountLimit : t.CheckOK
        },
        i.SpecialFightCheck = function(e, a) {
            void 0 === a && (a = 1);
            var i = StageSpecialDataLib.instance.getCampaignIdBySpecialId(e.id),
                n = MainStageOptData.getSpecialCount(i);
            return e.costOil * a > UserData.getInstance().getRes(TypeDefine.RES.Oil) ? t.OilLimit : n && -1 != e.dayAtkCount && e.dayAtkCount - n == 0 ? t.CountLimit : t.CheckOK
        },
        i.sendNormalBattle = function(e, a, i, n) {
            if (this.FightCheck(e) != t.OilLimit)
                if (this.FightCheck(e) == t.CountLimit) Toast.launch(Locales.get("panel_MainWorldStageSelectNormalPanel_txt_WindWord"), 16711680);
                else {
                    BattleManager.instance.setFirstBaseData(i, n),
                        this.normalStageData = e,
                        UnlockManager.StageId = this.normalStageData.baseData.id,
                        e.serverData ? t.oldStar = e.serverData.star : t.oldStar = 0;
                    e.baseData.id;
                    BattleManager.instance.sendMainBattleStart(e.baseData.id),
                        EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_BAKE, {
                            type: 1,
                            id: a.id
                        })
                }
            else {
                var s = ItemsManager.getInstance().getItemById(1076);
                if (s && s.count > 0) {
                    var r = {};
                    r.title = Locales.get("panel_AlertLueduolingBuy_txt_comment_6"),
                        r.itemId = 1076,
                        WindowManager.getInstance().show(WindowManager.windowType.ItemUse, r)
                } else WindowManager.getInstance().show(WindowManager.windowType.OilRefining)
            }
        },
        i.sendNormalSweepBattle = function(t, e, a) {
            BattleManager.instance.sendMainSweepBattleStart(t.baseData.id, a)
        },
        i.sendSpeSweepBattle = function(t, e) {
            BattleManager.instance.sendMainSpeSweepBattleStart(t.baseData.id, e)
        },
        i.reCallPanel = function(e) {
            1 == e && (this.bakeNormalData ? (t.IsOpenNormalStagePanel = !0, this.sendEnterCampaign(this.bakeNormalData, t.BATTLE_TYPE_NORMAL)) : this.bakeSpecialData)
        },
        i.clearLookArea = function() {
            this.lookArea = 0,
                this.lookAreaSpecial = 0
        },
        i.getCurrentArea = function() {
            return this.nextArea
        },
        i.getLookArea = function() {
            return this.getCurrentBattleType() == t.BATTLE_TYPE_SPECIAL ? this.lookAreaSpecial : this.lookArea
        },
        i.getCurrentCampaign = function() {
            return this.curCampaign
        },
        i.getCurrentSpecialCampaign = function() {
            return this.curSpeicalCampaign
        },
        i.getCurrentStage = function() {
            return this.currentStageId
        },
        i.getCurrentBattleType = function() {
            return this.battleType
        },
        i.getSpecialList = function() {
            return this.allSpecialList
        },
        i.checkSpecial = function(t) {
            return this.getSpecialList()[t]
        },
        i.getLastCampaign = function() {
            return this.allLastList[this.allLastList.length - 1]
        },
        i.getAllLastList = function() {
            return this.allLastList
        },
        i.campaign = function() {
            return this.openCampain
        },
        i.setOpenCampain = function(t) {
            this.openCampain = CampaigndataParser.GetInstance().getItemById(t)
        },
        i.getBakeSpecialData = function() {
            return this.bakeSpecialData
        },
        i.getNormalStageData = function() {
            return this.normalStageData
        },
        i.getSpecialStageData = function() {
            return this.specialStageData
        },
        i.getwinCampaignList = function() {
            return this.winCampaignList
        },
        e(i, "scrolled",
            function() {
                return this.battleType == t.BATTLE_TYPE_NORMAL ? this._scrolled : this._scrolledSpecial
            },
            function(e) {
                this.battleType == t.BATTLE_TYPE_NORMAL ? this._scrolled = e : this._scrolledSpecial = e
            }),
        t.instance = new t,
        t.BATTLE_TYPE_NORMAL = 1,
        t.BATTLE_TYPE_SPECIAL = 2,
        t.OilLimit = 1,
        t.CountLimit = 2,
        t.CheckOK = 0,
        t.oldStar = 0,
        t.newStar = 0,
        t.IsOpenNormalStagePanel = !1,
        t.IsGetNewFormation = !1,
        t
}();
