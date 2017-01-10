
var CampBattleManager = function() {
    function t() {
        this.canOpt = !0,
            this.cdTime = 0,
            this.morale = 0,
            this.moraleLmt = 0,
            this.score = 0,
            this.campbattlescore = 0,
            this.currentPortId = 0,
            this.serverStartTime = null,
            this.serverEndTime = null,
            this.serverRewardTime = null,
            this.serverCampList = {},
            this.campRankList = [],
            this.buffList = {},
            this.SYNTIME = 10,
            this.synTimeLeft = 10,
            this.reportList = [],
            this.MaxReport = 50,
            this.bossList = null,
            this.needUpdate = !1,
            this.detectTime = 0,
            this.bloodUseTimes = 0,
            this.bloodTimes = 0,
            this.tickTimer = new egret.Timer(1e3),
            this.tickTimer.addEventListener(egret.TimerEvent.TIMER, this.update, this),
            this.tickTimer.start()
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return e(t, "instance",
            function() {
                return t._instance || (t._instance = new t),
                    t._instance
            }),
        i.processData = function(e) {
            if (Log.logZDY("##########"), this.morale = e.morale, this.moraleLmt = e.moralelimit, this.score = e.score, this.campbattlescore = e.campbattlescore, this.serverStartTime = e.starttime.split("|"), this.serverStartTime.shift(), this.serverEndTime = e.endtime.split("|"), this.serverEndTime.shift(), this.serverRewardTime = e.rewardtime.split("|"), this.serverRewardTime.shift(), e.detecttime - UserData.getInstance().getOldServerTime() / 1e3 > 0) this.detectTime = e.detecttime - UserData.getInstance().getOldServerTime() / 1e3;
            else if (this.detectTime = 0, EventManager.instance.dispatchEvent(EventTypes.CAMP_DETECT_TIME_UPDATE), this.detectTime <= 0) {
                var a = WindowManager.getInstance().getWindow(WindowManager.windowType.CampBattle);
                a && a.processDetect()
            }
            if (this.bloodUseTimes = e.bloodbuytimes, this.bloodTimes = e.bloodtimes, 0 == t.inited ? this.cdTime = e.cd - UserData.getInstance().getOldServerTime() / 1e3 : CampBattlePortOptData.resetPortList(), this.cdTime > 0 ? this.canOpt = !1 : this.canOpt = !0, this.currentPortId != e.portid && (t.needPosition = !0), this.currentPortId = e.portid, this.campRankList = [], e.camplist.length > 0)
                for (var i = 0,
                        n = e.camplist; i < n.length; i++) {
                    var s = n[i];
                    CampBattlePortOptData.processData(s.portlist, s.campid),
                        this.serverCampList[s.campid] = s,
                        this.campRankList.push(s)
                } else
                    for (var r = 1; 3 >= r; ++r) {
                        var s = {
                            campid: r,
                            resource: 0,
                            portlist: {}
                        };
                        this.serverCampList[r.toString()] = s,
                            this.campRankList.push(s)
                    }
            this.buffList = e.bufflist,
                this.bossList = e.bosslist,
                t.inited = !0
        },
        i.processOptData = function(e) {
            if (0 != e.res) Toast.launch(Locales.get("ui_campBattle_optError" + e.res), 16711680);
            else {
                var a = CampbattlebasedataParser.GetInstance().getDataArr()[0];
                if (e.actiontype == t.OPT_MOV ? (this.cdTime = a.moveCD + 1, this.canOpt = !1) : e.actiontype == t.OPT_ATK && (this.cdTime < a.battleCD && (this.cdTime = a.battleCD + 1), this.canOpt = !1), this.detectTime <= 0) {
                    var i = WindowManager.getInstance().getWindow(WindowManager.windowType.CampBattle);
                    i && i.processDetect()
                }
            }
        },
        i.showBattleMsg = function(t) {
            var e = "null";
            if (1 == t.id) {
                var a = WindowManager.getInstance().getWindow(WindowManager.windowType.CampBattle);
                if (!a) return;
                var i = CampbattlebasedataParser.GetInstance().getDataArr()[0],
                    n = null,
                    s = null;
                if ("1" == t.param[4] && (n = CampbattlenpcdataParser.GetInstance().getItemById(t.param[0]), s = n.name_l), Math.floor(t.param[2]) <= 0) {
                    var r = t.param[3];
                    null == n && (s = t.param[0]);
                    var o = Locales.get("panel_personinf_txt_camp_" + r),
                        l = Locales.get("ui_campBattle_deadTitle"),
                        h = Locales.get("ui_campBattle_deadContent", o, s),
                        c = Locales.get("panel_game_over_close");
                    GameAlert.getInstance().showByLocalesHtml(l, h, void 0, void 0, c),
                        this.cdTime = i.deadCD,
                        this.canOpt = !1,
                        this.bloodTimes > 0 && (this.bloodTimes = 0, Toast.launch(Locales.get("ui_campbattle_bloodTimeFail"), 16711680))
                } else this.morale = Math.floor(t.param[2]),
                    e = null != n ? Locales.get("ui_campBattle_msg_battle", s, t.param[1]) : Locales.get("ui_campBattle_msg_battle", t.param[0], t.param[1]),
                    a.setQuickMsg(e)
            }
        },
        i.checkNeedUpdate = function() {
            var t = (UserData.getInstance().getServerTime() - UserData.getInstance().getServerStartTime()) / 1e3,
                e = Math.floor(t / 3600 / 24),
                a = CampbattlebasedataParser.GetInstance().getDataArr()[0].beginDay - e;
            if (a > 0) this.needUpdate = !1;
            else {
                var i = new Date(UserData.getInstance().getServerTime()),
                    n = Math.floor(i.getDay());
                CampBattleBaseDataLib.instance.checkIsOpen(n) && (this.needUpdate = !0)
            }
        },
        i.update = function() {
            if (t.inited) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.CampBattle);
                e && e.inited && e.updateUI();
                var a = CampbattlebasedataParser.GetInstance().getDataArr()[0],
                    i = UserData.getInstance().getServerTime();
                if (1 == this.needUpdate && UserData.getInstance().getPlayerLevel() >= HegemonyunlockParser.GetInstance().getItemById(6).needlvl) {
                    var n = new Date(i),
                        s = (n.getHours(), n.getMinutes(), n.getSeconds(), a.startTime),
                        r = a.endTime,
                        o = Math.floor(s[0]),
                        l = Math.floor(s[1]),
                        h = Math.floor(r[0]),
                        c = Math.floor(r[1]),
                        d = new Date(i);
                    d.setHours(o, l, 0, 0);
                    var g = d.valueOf();
                    d = new Date(i),
                        d.setHours(h, c, 0, 0);
                    var u = d.valueOf(),
                        p = (g - i) / 1e3;
                    300 >= p && p > 0 ? t.isStart = !0 : 0 > p && (0 > u - i ? (t.isStart = !1, this.needUpdate = !1) : t.isStart = !0)
                }
                var m = WindowManager.getInstance().getWindow(WindowManager.windowType.CampBattleRankingList);
                if (m && m.inited) {
                    var n = new Date(i),
                        s = (n.getHours(), n.getMinutes(), n.getSeconds(), this.serverStartTime),
                        r = this.serverEndTime,
                        o = Math.floor(s[0]),
                        l = Math.floor(s[1]),
                        h = Math.floor(r[0]),
                        c = Math.floor(r[1]),
                        d = new Date(i);
                    d.setHours(o, l, 0, 0);
                    var g = d.valueOf();
                    d = new Date(i),
                        d.setHours(h, c, 0, 0);
                    var u = d.valueOf(),
                        _ = n.getDay(),
                        p = 0;
                    CampBattleBaseDataLib.instance.checkIsOpen(_) ? (p = (g - i) / 1e3, 0 > p && (p = 0 > u - i ? -1 : 0)) : p = -1,
                        m.updateTime(GlobalFunction.getHMSBySecond(p), p)
                }
                if (this.cdTime > 0 && (this.cdTime = this.cdTime - 1, this.cdTime <= 0 ? (this.cdTime = 0, this.canOpt = !0) : this.canOpt = !1, e && e.inited && e.updateCDTime(this.cdTime)), this.detectTime > 0 && (this.detectTime = this.detectTime - 1, e && e.inited && e.updateDetectTime(this.detectTime), this.detectTime <= 0 && (e && e.inited && e.processDetect(), Toast.launch(Locales.get("ui_campbattle_detectTimeEnd", this.detectTime), 16711680))), e && e.inited && e.updateBossLeftTime(), 1 == t.isOpen) {
                    var n = new Date(i),
                        r = (n.getHours(), n.getMinutes(), n.getSeconds(), this.serverEndTime),
                        h = Math.floor(r[0]),
                        c = Math.floor(r[1]),
                        d = new Date(i);
                    d.setHours(h, c, 0, 0);
                    var u = d.valueOf(),
                        p = (u - i) / 1e3;
                    0 > p && (p = 0);
                    var v = !1;
                    300 > p && (v = !0),
                        e && e.inited && e.updateEndTime(GlobalFunction.getHMSBySecond(p, "."), v),
                        0 >= p && RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceCampBattleResult)
                }
                this.synTimeLeft > 0 && 1 == t.isOpen && (this.synTimeLeft = this.synTimeLeft - 1, this.synTimeLeft <= 0 && (this.synTimeLeft = this.SYNTIME, Log.logZDY("===========synCampBattleData==========="), RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceCampBattleData, void 0, !1)))
            }
        },
        i.checkInPortList = function(t, e) {
            for (var a = 0,
                    i = t.nearList; a < i.length; a++) {
                var n = i[a];
                if (Math.floor(n) == e) return !0
            }
            return !1
        },
        i.checkCanOpt = function(t) {
            var e = CampBattlePortOptData.getPortList()[this.currentPortId];
            return null != e ? this.checkInPortList(e.baseData, t) : !1
        },
        i.moveAndAtkPort = function(e, a) {
            return 1 != t.isAutoBattle && null != e ? 0 == this.canOpt ? void(a == t.OPT_MOV ? Toast.launch(Locales.get("ui_campBattle_opt_movError"), 16711680) : a == t.OPT_ATK && Toast.launch(Locales.get("ui_campBattle_opt_atkError"), 16711680)) : void RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceCampBattleMove, {
                target: e.baseData.id
            }) : void 0
        },
        i.buyDetect = function() {
            return this.detectTime > 0 ? void Toast.launch(Locales.get("ui_campbattle_detectTimeUse"), 16711680) : UserData.getInstance().getRes(TypeDefine.RES.Diamond) < CampbattlebasedataParser.GetInstance().getDataArr()[0].detectCost ? void Toast.launch(Locales.get("ui_campBattle_buyError3"), 16711680) : void RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceCampBattleBuy, {
                type: 1
            })
        },
        i.buyBlood = function() {
            if (this.bloodTimes > 0) return void Toast.launch(Locales.get("ui_campbattle_bloodTimeUse"), 16711680);
            var e = CampbattlebasedataParser.GetInstance().getDataArr()[0],
                a = t.instance.bloodUseTimes * e.bloodCostPlus + e.bloodCost;
            return UserData.getInstance().getRes(TypeDefine.RES.Diamond) < a ? void Toast.launch(Locales.get("ui_campBattle_buyError3"), 16711680) : this.morale <= e.bloodCostMorale ? void Toast.launch(Locales.get("ui_campBattle_buyError4"), 16711680) : void RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceCampBattleBuy, {
                type: 2
            })
        },
        i.processDetectAndBlood = function(t) {
            if (t.res > 0) Toast.launch(Locales.get("ui_campBattle_buyError" + t.res), 16711680);
            else {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.CampBattle),
                    a = CampbattlebasedataParser.GetInstance().getDataArr()[0];
                1 == t.type ? (this.detectTime = a.detectTime, e && e.processDetect(), Toast.launch(Locales.get("ui_campbattle_detectTimeSucc", this.detectTime), 16711680)) : 2 == t.type && (this.bloodTimes = a.bloodTimes, e && e.processBlood(), Toast.launch(Locales.get("ui_campbattle_bloodTimeSucc", a.bloodCostMorale), 16711680))
            }
        },
        i.processSetAI = function(e) {
            0 == e.issucess ? 1 == e.setorcancel ? (Toast.launch(Locales.get("ui_campBattle_campLite_setAI_success"), 16711680), t.isAutoBattle = !0) : (Toast.launch(Locales.get("ui_campBattle_campLite_cancelAI_success"), 16711680), t.isAutoBattle = !1) : 1 == e.issucess ? Toast.launch(Locales.get("ui_campBattle_campLite_setAI_fail1"), 16711680) : 2 == e.issucess && Toast.launch(Locales.get("ui_campBattle_campLite_setAI_fail2"), 16711680)
        },
        i.showBattleOver = function(e) {
            if (0 != t.needOpen) {
                if (this.morale - Math.floor(e.campbattle.morale) <= 0) {
                    var a = CampbattlebasedataParser.GetInstance().getDataArr()[0];
                    this.cdTime = a.deadCD,
                        this.canOpt = !1,
                        this.bloodTimes > 0 && (this.bloodTimes = 0, Toast.launch(Locales.get("ui_campbattle_bloodTimeFail"), 16711680))
                }
                ConfigData.preLoadDats(["campBattleLimitScoreData"], [CampbattlelimitscoredataParser],
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.CampBattleOver, e)
                    })
            }
        },
        i.showBattleEnd = function(e) {
            t.isOpen = !1,
                0 != t.needOpen && WindowManager.getInstance().show(WindowManager.windowType.CampBattleEnd, e)
        },
        i.moveToCurrentPosition = function() {
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.CampBattle);
            t && t.moveToCurrentPosition()
        },
        i.getCurrentPositionData = function() {
            return CampBattlePortOptData.getPortList()[this.currentPortId]
        },
        i.returnHome = function() {
            this.synTimeLeft = this.SYNTIME,
                t.inited = !1,
                CampBattlePortOptData.clearData(),
                AudioManager.instance.playMusic(AudioManager.MUSIC_MAIN_UI)
        },
        i.setDeadCDTime = function() {
            var t = CampbattlebasedataParser.GetInstance().getDataArr()[0];
            this.cdTime = t.deadCD,
                this.canOpt = !1
        },
        i.generalCampRankList = function() {
            return this.campRankList.sort(function(t, e) {
                    if (t.resource != e.resource) return e.resource - t.resource;
                    if (t.portlist.length != e.portlist.length) return e.portlist.length - t.portlist.length;
                    var a = CampBattlePortOptData.getPortList()[31];
                    return a ? a.camp == t.campid ? -1 : (a.camp == e.campid, 1) : 1
                }),
                this.campRankList
        },
        i.addReportList = function(t) {
            Log.logZDY("-========reportId." + t.id),
                this.reportList.length >= 50 && this.reportList.pop(),
                t.serverTime = UserData.getInstance().getOldServerTime() / 1e3,
                this.reportList.push(t),
                this.reportList.sort(function(t, e) {
                    return -(t.serverTime - e.serverTime)
                })
        },
        i.getBattleReportList = function(t) {
            var e = [];
            if (1 == t) e = this.reportList;
            else if (2 == t)
                for (var a = 0,
                        i = this.reportList; a < i.length; a++) {
                    var n = i[a];
                    11 == Math.floor(n.id) && e.push(n)
                } else if (3 == t)
                    for (var s = 0,
                            r = this.reportList; s < r.length; s++) {
                        var n = r[s];
                        12 == Math.floor(n.id) && e.push(n)
                    } else if (4 == t)
                        for (var o = 0,
                                l = this.reportList; o < l.length; o++) {
                            var n = l[o];
                            11 != Math.floor(n.id) && 12 != Math.floor(n.id) && e.push(n)
                        }
            return e
        },
        i.Wind_Words = function(t, e, a) {
            if (0 == t) {
                var i = ShopdataParser.GetInstance().getItemById(e),
                    n = GlobalFunction.getDropDataByTypeAndId(i.itemType, i.itemId);
                Toast.launch(Locales.get("panel_shop_txt_windword_0") + n.name, 16711680)
            } else 1 == t ? Toast.launch(Locales.get("panel_shop_txt_windword_1"), 16711680) : 2 == t ? Toast.launch(Locales.get("panel_shop_txt_windword_2"), 16711680) : 3 == t ? Toast.launch(Locales.get("panel_shop_txt_windword_3"), 16711680) : 4 == t ? Toast.launch(Locales.get("panel_shop_txt_windword_4"), 16711680) : 5 == t ? Toast.launch(Locales.get("panel_shop_txt_windword_5"), 16711680) : 6 == t ? Toast.launch(Locales.get("ui_campBattle_BuyError"), 16711680) : 7 == t ? Toast.launch(Locales.get("panel_guild_noInGuild"), 16711680) : 8 == t && Toast.launch(Locales.get("panel_guild_levelNoEnough"), 16711680)
        },
        i.getBuffZhanGong = function() {
            return this.buffList[t.BUFF_ZHANGONG]
        },
        i.getBuffDMG = function() {
            return this.buffList[t.BUFF_DMG]
        },
        i.getBuffZhanGongValue = function() {
            var e = 0;
            return null != this.buffList[t.BUFF_ZHANGONG] && (e = this.buffList[t.BUFF_ZHANGONG].value),
                e
        },
        i.getBuffDMGValue = function() {
            var e = 0;
            return null != this.buffList[t.BUFF_DMG] && (e = this.buffList[t.BUFF_DMG].value),
                e
        },
        i.isOpened = function() {
            var t = CampbattlebasedataParser.GetInstance().getDataArr()[0];
            if (HegemonyunlockParser.GetInstance().getItemById(6).needlvl > UserData.getInstance().getPlayerLevel()) return !1;
            if (UserData.getInstance().getServerstartday() > t.beginDay)
                for (var e = Utils.getDateByNum(UserData.getInstance().getServerTime(), timeType.DAY), a = Utils.getDateByNum(UserData.getInstance().getServerTime(), timeType.TIMENUMBER), i = 0; i < t.openDay.length; i++)
                    if (e == t.openDay[i]) {
                        var n = (t.startTime, 60 * t.startTime[0] + t.startTime[1]),
                            s = 60 * t.endTime[0] + t.endTime[1];
                        return a > n && s > a
                    }
            return !1
        },
        t.JUSTICE = 1,
        t.PREDATOR = 2,
        t.HONOUR = 3,
        t.PORT_CENTER = 1,
        t.PORT_ARMY = 2,
        t.PORT_OIL = 3,
        t.PORT_NORMAL = 4,
        t.COLOR_LIST = [12698049, 50943, 16721705, 62533],
        t.COLOR_16_LIST = ["c1c1c1", "00c6ff", "ff2729", "00f445"],
        t.RADIOLIST = {
            11: !0,
            12: !0,
            13: !0,
            14: !0,
            15: !0,
            17: !0,
            18: !0,
            19: !0,
            20: !0
        },
        t.NEEDRADIOLIST = {
            13: !0,
            14: !0,
            15: !0,
            18: !0,
            19: !0,
            20: !0
        },
        t.REPORTLIST = {
            11: !0,
            12: !0,
            13: !0,
            14: !0,
            15: !0,
            20: !0
        },
        t.OPT_MOV = 0,
        t.OPT_ATK = 1,
        t.BUFF_ZHANGONG = 1,
        t.BUFF_DMG = 2,
        t.isStart = !1,
        t.isOpen = !1,
        t.inited = !1,
        t.needPosition = !1,
        t.isAutoBattle = !1,
        t.needOpen = !1,
        t
}();
