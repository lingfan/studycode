
var RankListManager = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return this._instance || (this._instance = new t),
                this._instance
        },
        a.getWudijianduiList = function() {
            return this._wudijianduiList
        },
        a.getPowerList = function() {
            return this._powerList
        },
        a.getLevelList = function() {
            return this._levelList
        },
        a.getArenaList = function() {
            return this._arenaList
        },
        a.getGuildList = function() {
            return this._guildList
        },
        a.getDefendOilList = function() {
            return this._defendOilList
        },
        a.getBattleOrdinary = function() {
            return this._battleOrdinary
        },
        a.getBattleSpecial = function() {
            return this._battleSpecial
        },
        a.getCampBattleList = function(t) {
            var e = new RankListData;
            e.myRank = void 0,
                e.myScore = this._campBattleList.myScore;
            for (var a = !1,
                    i = [], n = UserData.getInstance().getCamp(), s = 0, r = this._campBattleList.listData; s < r.length; s++) {
                var o = r[s];
                o.camp == t && e.listData.push(o),
                    o.camp == n && i.push(o),
                    o.uid == UserData.getInstance()._uid && (a = !0)
            }
            e.listData.sort(function(t, e) {
                return t.rank - e.rank
            });
            for (var l = 0; l < e.listData.length; ++l) e.listData[l].rank = l + 1;
            if (a) {
                i.sort(function(t, e) {
                    return t.rank - e.rank
                });
                for (var l = 0; l < i.length; ++l) i[l].uid == UserData.getInstance()._uid && (e.myRank = l + 1)
            }
            return e
        },
        a.setdata = function(t) {
            var e, a = this;
            switch (t.type) {
                case 1:
                    this._defendOilList = new RankListData,
                        e = this._defendOilList;
                    break;
                case 2:
                    this._battleOrdinary = new RankListData,
                        e = this._battleOrdinary;
                    break;
                case 3:
                    this._battleSpecial = new RankListData,
                        e = this._battleSpecial;
                    break;
                case 11:
                    this._wudijianduiList = new RankListData,
                        e = this._wudijianduiList;
                    break;
                case 13:
                    this._levelList = new RankListData,
                        e = this._levelList;
                    break;
                case 14:
                    this._powerList = new RankListData,
                        e = this._powerList;
                    break;
                case 15:
                    this._arenaList = new RankListData,
                        e = this._arenaList;
                    break;
                case 16:
                    var i = GuildParser.GetInstance().getDatas();
                    return i ? this.processGuild(t) : ConfigData.preLoadDats(["guild"], [GuildParser],
                            function() {
                                a.processGuild(t)
                            }),
                        void WindowManager.getInstance().hideWaiting();
                case 7:
                    this._campBattleList = new RankListData,
                        e = this._campBattleList
            }
            WindowManager.getInstance().hideWaiting(),
                e.myRank = t.rank,
                e.myScore = t.score;
            for (var n in t.data.list) {
                var s = new RankItemData;
                if (s.uid = t.data.list[n].uid, s.name = t.data.list[n].name, s.rank = t.data.list[n].rank, s.level = t.data.list[n].level, s.score = t.data.list[n].score, s.head = t.data.list[n].head, s.power = t.data.list[n].power, s.viplevel = t.data.list[n].viplevel, s.camp = t.data.list[n].camp, s.guildname = t.data.list[n].guildname, s.militaryrank = t.data.list[n].militaryrank, s.dmg = t.data.list[n].dmg, !t.score && s.uid == UserData.getInstance()._uid) switch (t.type) {
                    case 1:
                        e.myScore = s.score,
                            e.myRank = s.rank;
                        break;
                    case 2:
                        e.myScore = s.score,
                            e.myRank = s.rank;
                        break;
                    case 3:
                        e.myScore = s.score,
                            e.myRank = s.rank;
                        break;
                    case 11:
                        e.myScore = Number(s.dmg),
                            e.myRank = s.rank;
                        break;
                    case 13:
                        e.myScore = s.level,
                            e.myRank = s.rank;
                        break;
                    case 14:
                        e.myScore = s.power,
                            e.myRank = s.rank;
                        break;
                    case 15:
                        e.myScore = s.score,
                            e.myRank = s.rank;
                        break;
                    case 16:
                        return e.myScore = s.score,
                            void(e.myRank = s.rank);
                    case 7:
                        e.myScore = s.score,
                            e.myRank = s.rank
                }
                e.listData.push(s)
            }
            if (WindowManager.getInstance().isWindowVisible(WindowManager.windowType.RankList)) {
                var r = WindowManager.getInstance().getWindow(WindowManager.windowType.RankList);
                r.updatePaper()
            }
        },
        a.processGuild = function(t) {
            this._guildList = new RankListData;
            var e = GuildManager.getInstance().id;
            for (var a in t.guildlist.guildlist) {
                var i = new RankItemData;
                i.uid = t.guildlist.guildlist[a].id,
                    i.rank = t.guildlist.guildlist[a].index,
                    i.level = t.guildlist.guildlist[a].level,
                    i.score = t.guildlist.guildlist[a].contribute,
                    i.head = t.guildlist.guildlist[a].medal,
                    i.camp = t.guildlist.guildlist[a].camp,
                    i.guildname = t.guildlist.guildlist[a].name,
                    i.membercount = t.guildlist.guildlist[a].membercount,
                    i.allMembercount = GuildParser.GetInstance().getItemById(t.guildlist.guildlist[a].level).count,
                    i.uid == e && (this._guildList.myRank = i.rank, this._guildList.myScore = i.score),
                    this._guildList.listData.push(i)
            }
            if (WindowManager.getInstance().isWindowVisible(WindowManager.windowType.RankList)) {
                var n = WindowManager.getInstance().getWindow(WindowManager.windowType.RankList);
                n.updatePaper()
            }
        },
        a.sendListMsg = function(t, e) {
            void 0 === t && (t = 14),
                WindowManager.getInstance().showWaiting(),
                16 == t && GuildManager.getInstance().sendGuildList(0, 0);
            var a = Transport.getPkg(ProtocolMgr.ID_DceRankList);
            a.type = t,
                7 == t && (a.camp = e ? e : 0),
                Transport.instance.send(a)
        },
        a.showRankWin = function(t) {
            void 0 === t && (t = 0),
                this._curType = t,
                WindowManager.getInstance().show(WindowManager.windowType.RankList, {
                    type: t,
                    type2: 14
                })
        },
        a.ranklistLoad = function(t) {
            WindowManager.getInstance().hideWaiting(),
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.ranklistLoad, this),
                this.showRankWin(this._curType)
        },
        t
}();
