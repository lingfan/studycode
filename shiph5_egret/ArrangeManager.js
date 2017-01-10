
var ArenaManager = function() {
    function t() {
        this.rankData = null,
            this.top10List = null,
            this.enemylist = null,
            this.target8list = null,
            this.itemList = null,
            this.topTenList = null,
            this.ActiveGameData = null,
            this.Pirate_All_count = 0,
            this.Pirate_1_count = 0,
            this.Pirate_2_count = 0,
            this.Pirate_3_count = 0,
            this.Line_All_count = 0,
            this.Line_1_count = 0,
            this.Line_2_count = 0,
            this.Line_3_count = 0,
            this.curArena_name = null,
            this.curArena_power = null,
            this.curArena_camp = null,
            this.curArena_rank_attack = null,
            this.curArena_rank_self = null,
            this.curArena_score = null,
            this.curArena_score_self = null,
            this.curArena_target_uid = null
    }
    var e = (__define, t),
        a = e.prototype;
    return a.openExchangeWindow = function() {
            ConfigData.preLoadDats(["arenaExchangeData", "HegemonyUnlock"], [ArenaexchangedataParser, HegemonyunlockParser],
                function() {
                    UserData.getInstance().getPlayerLevel() < HegemonyunlockParser.GetInstance().getItemById(4).needlvl ? Toast.launch(Locales.get("ui_main_function_scientific", HegemonyunlockParser.GetInstance().getItemById(4).needlvl)) : WindowManager.getInstance().show(WindowManager.windowType.PVPExchange)
                })
        },
        a.GetPirateLocCount = function() {
            return 2
        },
        a.getLeftTimes = function() {
            return this.rankData ? this.rankData.remaincount : 0
        },
        a.SetCount = function(t) {
            1 == t.stageID ? this.Pirate_1_count = this.Pirate_1_count - t.todayCount : 2 == t.stageID ? this.Pirate_2_count = this.Pirate_2_count - t.todayCount : 3 == t.stageID ? this.Pirate_3_count = this.Pirate_3_count - t.todayCount : 4 == t.stageID ? this.Line_1_count = this.Line_1_count - t.todayCount : 5 == t.stageID ? this.Line_2_count = this.Line_2_count - t.todayCount : 6 == t.stageID && (this.Line_3_count = this.Line_3_count - t.todayCount)
        },
        a.SetActiveGameData = function(t) {
            this.ActiveGameData = t;
            var e = t.stage,
                a = this.GetPirateLocCount();
            if (this.Pirate_1_count = a, this.Pirate_2_count = a, this.Pirate_3_count = a, this.Line_1_count = a, this.Line_2_count = a, this.Line_3_count = a, e)
                for (var i in e) {
                    var n = e[i];
                    n && this.SetCount(n)
                }
            var s = PlaygamestagedataParser.GetInstance(),
                r = StagespecialdataParser.GetInstance(),
                o = UserData.getInstance().getPlayerLevel(),
                l = s.getItemById(1),
                h = r.getItemById(l);
            o < h.reqStage && (this.Pirate_1_count = 0),
                l = s.getItemById(2),
                h = r.getItemById(l),
                o < h.reqStage && (this.Pirate_2_count = 0),
                l = s.getItemById(3),
                h = r.getItemById(l),
                o < h.reqStage && (this.Pirate_3_count = 0),
                this.Pirate_All_count = this.Pirate_1_count + this.Pirate_2_count + this.Pirate_3_count,
                l = s.getItemById(4),
                h = r.getItemById(l),
                o < h.reqStage && (this.Line_1_count = 0),
                l = s.getItemById(5),
                h = r.getItemById(l),
                o < h.reqStage && (this.Line_2_count = 0),
                l = s.getItemById(6),
                h = r.getItemById(l),
                o < h.reqStage && (this.Line_3_count = 0),
                this.Line_All_count = this.Line_1_count + this.Line_2_count + this.Line_3_count
        },
        a.setRankData = function(t) {
            if (this.rankData = t, WindowManager.getInstance().isWindowVisible(WindowManager.windowType.PVP)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.PVP);
                e.updataPanel()
            }
        },
        a.setListData = function(t) {
            this.top10List = t.top10list.list,
                this.enemylist = t.enemylist.list,
                this.target8list = t.target8list.list,
                this.itemList = [],
                this.topTenList = [];
            for (var e = 0,
                    a = this.top10List; e < a.length; e++) {
                var i = a[e];
                this.topTenList.push({
                    serverData: i,
                    type: 1
                })
            }
            this.rankData.rank < 10 && (this.itemList = this.topTenList.concat());
            for (var n = 0,
                    s = this.target8list; n < s.length; n++) {
                for (var r = s[n], o = !1, l = 0, h = this.itemList; l < h.length; l++) {
                    var c = h[l];
                    r.uid == c.serverData.uid && (c.type = 3, o = !0)
                }
                o || this.itemList.push({
                    serverData: r,
                    type: 3
                })
            }
            for (var d = 0,
                    g = this.enemylist; d < g.length; d++) {
                for (var u = g[d], o = !1, p = 0, m = this.itemList; p < m.length; p++) {
                    var c = m[p];
                    u.uid == c.serverData.uid && (c.type = 2, o = !0)
                }
                o || this.itemList.push({
                    serverData: u,
                    type: 2
                })
            }
            if (this.itemList.sort(function(t, e) {
                    return t.serverData.rank - e.serverData.rank
                }), WindowManager.getInstance().isWindowVisible(WindowManager.windowType.PVP)) {
                var _ = WindowManager.getInstance().getWindow(WindowManager.windowType.PVP);
                ConfigData.preLoadDats(["arenaScoreData"], [ArenascoredataParser],
                    function() {
                        _.updatePlayerList()
                    })
            }
        },
        a.initExchange = function(t) {
            Log.logZDY("#########################*******兑换"),
                Toast.launch(t.res)
        },
        a.setArena_value = function(t, e, a, i, n, s, r, o) {
            this.curArena_name = t,
                this.curArena_power = e,
                this.curArena_camp = a,
                this.curArena_rank_attack = i,
                this.curArena_rank_self = n,
                this.curArena_score = s,
                this.curArena_score_self = r,
                this.curArena_target_uid = o
        },
        a.getArena_value = function() {
            return [this.curArena_name, this.curArena_power, this.curArena_camp, this.curArena_rank_attack, this.curArena_rank_self, this.curArena_score, this.curArena_score_self]
        },
        a.getQuickFight_value = function() {
            return [this.curArena_target_uid, this.curArena_rank_attack, this.curArena_rank_self]
        },
        a.getCountById = function(t) {
            var e = this.rankData,
                a = 0;
            for (var i in e.exchangeids)
                if (t == e.exchangeids[i]) {
                    a = e.exchangetimes[i];
                    break
                }
            return a
        },
        a.getCanDHNumById = function(e) {
            var a = 0,
                i = t.instance.rankData;
            return a = i.score,
                Log.logZDY("GuardArenaDHPanel.getCanDHNumById", a),
                a
        },
        t.getDHCountById = function(e) {
            for (var a = 0,
                    i = t.instance.getCountById(e), n = null, s = 0, r = ArenaexchangedataParser.GetInstance().getDataArr(); s < r.length; s++) {
                var o = r[s];
                if (o.id == e) {
                    n = o;
                    break
                }
            }
            return n && (Log.logZDY("GuardArenaDHPanel.getDHCountById", n.buyTimeLimited, i), a = -1 == n.buyTimeLimited ? 1 : 0 == n.buyTimeLimited ? 99999 : n.buyTimeLimited - i),
                Log.logZDY("GuardArenaDHPanel.getDHCountById", e, n, i),
                Log.logZDY("////-", a),
                a
        },
        t.instance = new t,
        t
}();
