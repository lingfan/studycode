
var MainStageOptData = function() {
    function t(t, e, a) {
        this.baseData = t,
            this.serverData = e,
            this.isLock = a,
            this.baseData || Log.logWarning("##########Error:Stage is not found, id:", e.stageID)
    }
    var e = (__define, t);
    e.prototype;
    return t.processData = function(e, a) {
            t.stages = [];
            for (var i = void 0,
                    n = StageDataLib.instance.getStageListByCampaign(e), s = void 0, r = 0; r < n.length; ++r) {
                for (var o = 0; o < a.length; ++o) a[o].stageID == n[r].id && (s = a[o]);
                if (i = new t(n[r], s, !1), i.baseData && t.stages.push(i), !s) return t.stages;
                s = void 0
            }
            return t.stages
        },
        t.processSpecialData = function(e, a) {
            t.stages = {};
            for (var i = void 0,
                    n = 0,
                    s = void 0,
                    r = 0; r < a.length; ++r) i = StagespecialdataParser.GetInstance().getItemById(a[r].stageID),
                s = new t(i, a[r], !1),
                s.baseData ? (n = StageSpecialDataLib.instance.getCampaignIdBySpecialId(a[r].stageID), t.stages[n] = s) : Log.logError("StageSepcialData is undefined, id:", a[r].stageID);
            if (a.length > 0) {
                var o = StageSpecialDataLib.instance.getCampaignIdBySpecialId(a[a.length - 1].stageID) + 1,
                    l = o + 1e5;
                e >= o && (n = o, i = StagespecialdataParser.GetInstance().getItemById(l), i ? t.stages[StageSpecialDataLib.instance.getCampaignIdBySpecialId(i.id)] = new t(i, null, !1) : Log.logError("StageSepcialData is undefined, id:", l))
            } else if (e > 0) {
                n = 1;
                var h = StageSpecialDataLib.instance.getFirstData(),
                    c = StageSpecialDataLib.instance.getCampaignIdBySpecialId(h.id);
                t.stages[c] = new t(StageSpecialDataLib.instance.getFirstData(), null, !1)
            }
            return {
                stages: t.stages,
                nextCampaign: n
            }
        },
        t.getSpecialCount = function(e) {
            return t.stages[e] && t.stages[e].serverData ? t.stages[e].serverData.todayCount : 0
        },
        t.IsWinStage = function(t) {
            var e = !1;
            return MainWorldManager.instance.getLastStagaID() && parseInt(t) <= MainWorldManager.instance.getLastStagaID() && (e = !0),
                e
        },
        t.IsWinSpeStage = function(e) {
            var a = !1;
            for (var i in t.stages) {
                var n = t.stages[i];
                if (n.serverData && n.baseData.id == e) {
                    a = !0;
                    break
                }
            }
            var s = StagedataParser.GetInstance().getItemById(MainWorldManager.instance.getLastStagaID() + 1),
                r = 0,
                o = MainWorldManager.instance.getLastStagaID().toString().substring(2, 4);
            r = s ? parseInt(o) - 1 : parseInt(o);
            var l = parseInt(e) - 1e5;
            return l > r && (a = 1),
                a
        },
        t.SpeNextIsOpen = function(e) {
            var a = !1;
            for (var i in t.stages) {
                var n = t.stages[i];
                if (n.baseData.id == e) {
                    a = !0;
                    break
                }
            }
            return a
        },
        t
}();
