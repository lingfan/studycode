
var WindowManager = function() {
    function t() {
        this._windowPool = {},
            this._windowStack = []
    }
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return void 0 == this._instance && (this._instance = new t),
                this._instance
        },
        a.clearCache = function(t) {
            delete this._windowPool[t]
        },
        a.show = function(t, e) {
            if (void 0 === e && (e = void 0), Main.trace(t, "---------"), !("WindowBuJi" == t && UserData.getInstance()._level < 9)) {
                var a = this._windowPool[t];
                if (a) {
                    if (a.itemBool || GameLayer.getInstance().pageLayer.addChild(a), a.isPopWindow) {
                        var i = this._windowStack.indexOf(a);
                        if (i >= 0 && this._windowStack.splice(i, 1), GameLayer.getInstance().windowLayer.addChild(a), a._needBlock) {
                            for (var n = 0,
                                    s = this._windowStack; n < s.length; n++) {
                                var r = s[n];
                                r._block && (r._block.visible = !1)
                            }
                            GameLayer.getInstance().windowLayer.addChild(a._block)
                        }
                        this._windowStack.push(a)
                    }
                } else if (a = Object.create(window[t].prototype), a.constructor.apply(a), a.windowName = t, this._windowPool[t] = a, a.isPopWindow && (this._windowStack.push(a), a._needBlock))
                    for (var o = 0,
                            l = this._windowStack; o < l.length; o++) {
                        var r = l[o];
                        r._block && (r._block.visible = !1)
                    }
                void 0 != e && (a.__inited ? a.setData(e) : a.__cachedData = e),
                    Log.log("Show window:", t)
            }
        },
        a.getWindow = function(t) {
            return this._windowPool[t] ? this._windowPool[t] : null
        },
        a.hide = function(t) {
            var e = this._windowPool[t];
            if (e) {
                if (Utils.removeNode(e), e.isPopWindow) {
                    var a = this._windowStack.indexOf(e);
                    a >= 0 && this._windowStack.splice(a, 1);
                    for (var i = this._windowStack.length - 1; i >= 0; --i)
                        if (e._needBlock && e._block) {
                            e._block.visible = !0;
                            break
                        }
                } else MainUI.instance.showLastTop();
                delete this._windowPool[t]
            }
        },
        a.hideAll = function() {
            var t = [];
            for (var e in this._windowPool) t.push(e);
            for (var a = 0,
                    i = t; a < i.length; a++) {
                var n = i[a];
                this.hide(n)
            }
        },
        a.showWaiting = function() {
            this._waitingMc || (this._waitingMc = new WindowWaiting),
                GameLayer.getInstance().effectLayer.addChild(this._waitingMc)
        },
        a.hideWaiting = function() {
            this._waitingMc && this._waitingMc.parent && this._waitingMc.parent.removeChild(this._waitingMc)
        },
        a.isWindowVisible = function(t) {
            var e = this._windowPool[t];
            return void 0 != e && void 0 != e.parent && e.visible ? !0 : !1
        },
        t.windowType = {
            ChooseCamp: "WindowChooseCamp",
            ShipFactory: "WindowShipFactory",
            BuJi: "WindowBuJi",
            RoleInfo: "WindowRoleInfo",
            NameChange: "WindowNameChange",
            OilRefining: "WindowOilRefining",
            ShipInfo: "WindowShipInfo",
            WarshipHandbook: "WindowWarshipHandbook",
            HandbookProperty: "WindowHandbookProperty",
            Store: "WindowStore",
            Military: "WindowMilitary",
            CommonIntroduction: "WindowCommonIntroduction",
            ExchangeBlueprint: "WindowExchangeBlueprint",
            ExchangeCaptain: "WindowExchangeCaptain",
            ShipManager: "WindowShipManager",
            PeiJian: "WindowPeiJian",
            ShipArrange: "WindowShipArrange",
            FormatTeam: "WindowFormatTeam",
            OperatePanel: "WindowOperatePanel",
            ChoosItem: "WindowChooseItem",
            Chat: "WindowChat",
            PVE: "WindowPVE",
            PVEChooseLevel: "WindowPVEChooseLevel",
            PVEConfirm: "WindowPVEConfirm",
            PartMetals: "WindowPartsMetals",
            Soul: "WindowSoul",
            Captain: "WindowCaptain",
            Mail: "WindowMail",
            Formation: "WindowFormation",
            FormationUpdatePopup: "WindowFormationUpPopup",
            KeJi: "WindowKeJi",
            Shop: "WindowShop",
            Zhenba: "WindowHegemony",
            ZhenbaEctype: "WindowEctype",
            ZhenbaPrecious: "WindowPrecious",
            BattleResult: "WindowBattleResult",
            QiJvTou: "WindowQiJvTou",
            DefenseOil: "WindowDefenseOil",
            PreciouseBattle: "WindowPreciousBattle",
            BattleSweepDrop: "WindowBattleSweepDrop",
            Speak: "WindowSpeak",
            Friend: "WindowFriend",
            PVP: "WindowPVP",
            GuildJoin: "WindowGuildJoin",
            RankList: "WindowRankList",
            Guild: "WindowGuild",
            Mission: "WindowMission",
            System: "WindowSystemSet",
            PVPExchange: "WindowPVPExchange",
            PVPExchangeConfirm: "WindowPVPExchangeConfirm",
            Strategy: "WindowStrategy",
            Medal: "WindowMedal",
            Guide: "PlayerGuidePanel",
            CampBattle: "WindowCampBattle",
            CampBattleReports: "WindowCampBattleReports",
            CampBattleRankingList: "WindowCampBattleRankingList",
            CampExchange: "WindowCampExchange",
            CampBattleOver: "WindowCampBattleOver",
            CampBattleEnd: "WindowCampBattleEnd",
            Award: "WindowAward",
            Upgrade: "WindowUpgrade",
            Recharge: "WindowRecharge",
            BattleSweepResult: "WindowBattleSweepResult",
            StageCountBuy: "WindowStageCountBuy",
            ItemUse: "WindowItemUse",
            TeGong: "WindowTeGong",
            ZhaoMuCaptain: "WindowZhaoMuCaptain",
            tansuo: "WindowTansuo",
            tansuoGaoJi: "WindowGaoJiTanSuo",
            tansuoGaoJiReward: "WindowGaojiTanSuoReward",
            tansuoQuick: "WindowQuickTanSuo",
            taskReward: "WindowTaskReward",
            activity: "WindowActivity",
            listActivity: "WindowListActivity",
            signActivity: "WindowSignActivity",
            signConfirm: "WindowSignConfirm",
            pveTalking: "WindowPveTalking",
            log: "WindowLog",
            oilActivity: "WindowActivityOil",
            luckyWheel: "WindowLuckyWheel",
            mubiaoAct: "WindowMuBiaoAct",
            testCamp: "WindowCamp",
            firstRecharge: "WindowFirstRecharge",
            loginReward: "WindowActivityLoginReward"
        },
        t
}();
