
var StageDataLib = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.getAreaIdById = function(t) {
            var e = Math.floor(t / 1e4),
                a = Math.floor(t / 100 % 100),
                i = Math.floor(t % 100);
            return {
                areaId: e,
                campaignId: a,
                stageIndex: i
            }
        },
        a.InitPVEMapInfo = function() {
            if (!this._pveAreaInfo) {
                this._pveAreaInfo = {},
                    this._campaignData = {};
                var t = StagedataParser.GetInstance().getDatas();
                for (var e in t) {
                    var a = t[e],
                        i = this.getAreaIdById(e),
                        n = this._pveAreaInfo[i.areaId];
                    if (n) {
                        for (var s = !1,
                                r = 0,
                                o = n.length; o > r; ++r) n[r] == i.campaignId && (s = !0);
                        s || n.push(i.campaignId)
                    } else this._pveAreaInfo[i.areaId] = [i.campaignId];
                    this._campaignData[i.campaignId] ? this._campaignData[i.campaignId].push(a) : this._campaignData[i.campaignId] = [a]
                }
            }
        },
        a.getIdByInfo = function(t, e, a) {
            return 1e4 * t + 100 * e + a
        },
        a.getFirstStage = function() {
            return StagedataParser.GetInstance().getDataArr()[0]
        },
        a.getNextInfoByCurrent = function(t, e) {
            var a = StagedataParser.GetInstance().getItemById[this.getIdByInfo(t, e + 1, 1)];
            return null != a ? {
                area: t,
                campain: e + 1
            } : (a = StagedataParser.GetInstance().getItemById(this.getIdByInfo(t + 1, e + 1, 1)), void 0 != a ? {
                area: t + 1,
                campain: 1
            } : null)
        },
        a.checkCampainIsLast = function(t, e) {
            var a = this._pveAreaInfo[t];
            if (a) {
                if (a[a.length - 1] == e) return !0
            } else Log.logWarning("##########Error:AreaID is not Exist, id:", t);
            return !1
        },
        a.getAreaAllStarByArea = function(t) {
            for (var e = 0,
                    a = 0,
                    i = MainWorldManager.instance.getStarList(), n = 0, s = this._pveAreaInfo[t]; n < s.length; n++) {
                var r = s[n],
                    o = this._campaignData[r];
                if (o && o.length > 0)
                    for (var l = 0,
                            h = o; l < h.length; l++) {
                        var c = h[l];
                        if (e++, c.id <= MainWorldManager.instance.getLastStagaID()) {
                            for (var d = !1,
                                    g = 0,
                                    u = i.length; u > g; ++g)
                                if (c.id == i[g].stageID) {
                                    a += i[g].star,
                                        d = !0;
                                    break
                                }
                            d || (a += 3)
                        }
                    }
                return 3 * e
            }
        },
        a.getAreaAllStarByCampaign = function(t) {
            for (var e = 0,
                    a = 0,
                    i = MainWorldManager.instance.getStarList(), n = 0, s = this._campaignData[t]; n < s.length; n++) {
                var r = s[n];
                if (e += 1, r.id <= MainWorldManager.instance.getLastStagaID()) {
                    for (var o = !1,
                            l = 0,
                            h = i; l < h.length; l++) {
                        var c = h[l];
                        if (r.id == c.stageID) {
                            a += c.star,
                                o = !0;
                            break
                        }
                    }
                    o || (a += 3)
                }
            }
            return {
                getStar: a,
                totalStar: 3 * e
            }
        },
        a.getCurrentActiveArea = function(t, e) {
            t = Number(t);
            var a = -1;
            return a = 1 == this.checkCampainIsLast(t, e) && AreadataParser.GetInstance().getItemById(t + 1) ? t + 1 : t
        },
        a.getCampaignListByArea = function(t) {
            return this._pveAreaInfo[t]
        },
        a.getStageListByCampaign = function(t) {
            return this._campaignData[t]
        },
        a.getAreaByCampaign = function(t) {
            var e = null;
            for (var a in this._pveAreaInfo) {
                for (var i = 0,
                        n = this._pveAreaInfo[a]; i < n.length; i++) {
                    var s = n[i];
                    if (s == t) {
                        e = a;
                        break
                    }
                }
                if (null != e) break
            }
            return e
        },
        t.instance = new t,
        t
}();
