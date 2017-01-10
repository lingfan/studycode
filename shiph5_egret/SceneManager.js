
var RedPointType;
!
function(t) {
    t[t.captain = 0] = "captain",
        t[t.parts = 1] = "parts",
        t[t.medals = 2] = "medals",
        t[t.ships = 3] = "ships",
        t[t.buyoil = 4] = "buyoil"
}(RedPointType || (RedPointType = {}));
var RedPointManager = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.getPointShow = function(t, e) {
            if (e == RedPointType.captain)
                for (var a = 0; a < CaptainData.captainlist.length; a++) {
                    var i = CaptainData.captainlist[a],
                        n = CaptaindataParser.GetInstance().getItemById(i.id),
                        s = Number(n.quality);
                    if (!ShipManager.getInstance().isCaptainEquiped(i.id) && s > t.quality) return !0
                } else if (e == RedPointType.parts)
                    for (var r = ShipManager.getInstance().getPartsByType(t.equipType, t.shipType), o = 1e4 * t.quality + 100 * t.parts.remouldlevel + t.parts.upgradelevel, a = 0; a < r.length; a++) {
                        var l = r[a];
                        if (!ShipManager.getInstance().isPartEquiped(l.id)) {
                            var n = PartsParser.GetInstance().getItemById(l.partsid),
                                s = Number(n.quality),
                                h = 1e4 * s + 100 * l.remouldlevel + l.upgradelevel;
                            if (h > o) return !0
                        }
                    } else if (e == RedPointType.medals) {
                        for (var c = ShipManager.getInstance().getGoodAtSoulList(t.shipType), o = 1e4 * t.quality + 100 * t.soul.promotelvl + t.soul.point / 1e4, d = {},
                                a = 0; a < c.length; a++)
                            if (c[a].equipedshipid == t.soul.equipedshipid) {
                                var g = ConfigData.getDataByKey("medalData", c[a].soulid);
                                d[g.medalType] = !0
                            }
                        for (a = 0; a < c.length; a++) {
                            var u = c[a],
                                g = ConfigData.getDataByKey("medalData", u.soulid);
                            if (g && !d[g.medalType] && !ShipManager.getInstance().isMedalEquiped(u.id) && 9 != g.medalType) {
                                var n = MedaldataParser.GetInstance().getItemById(u.soulid),
                                    s = Number(n.quality),
                                    h = 1e4 * s + 100 * u.promotelvl + u.point / 1e4;
                                if (h > o) return !0
                            }
                        }
                    } else if (e == RedPointType.ships)
                for (var p = ShipManager.getInstance().getEmptyShips(), a = 0; a < p.length; a++) {
                    var m = p[a],
                        n = ShipdataParser.GetInstance().getItemById(m.shipid),
                        s = Number(n.quality);
                    if (s > t.quality) return !0
                } else if (e == RedPointType.buyoil) {
                    var _ = VipParser.GetInstance().getItemById(UserData.getInstance()._vip).dayBuyOilCnt - UserData.getInstance().getBuyOilCount();
                    return _ > 0
                }
            return !1
        },
        t.getCaptainRedPoint = function(e) {
            var a = CaptainManager.getInstance().getPropoDataById(e);
            if (a) {
                var i = ConfigData.getDataByKey("captainData", e),
                    n = t.getPointShow({
                            quality: Number(i.quality)
                        },
                        RedPointType.captain) ? 1 : 0;
                return n + t.getCaptainUpdate(a) + t.getCaptainRemodule(a)
            }
            for (var s = 0; s < CaptainData.captainlist.length; s++)
                if (!ShipManager.getInstance().isCaptainEquiped(CaptainData.captainlist[s].id)) return 1;
            return 0
        },
        t.getCaptainUpdate = function(t, e) {
            var a = ConfigData.getDataByKey("exp", UserData.getInstance()._level);
            if (a.captainLevelLimit && Number(a.captainLevelLimit) <= t.upgradelevel) return 0;
            if (e) {
                var i = t.upgradelevel || 1,
                    n = ConfigData.getDataByKey("captainData", t.id),
                    s = ConfigData.getDataByKey("captainUpgradeData", i + 1),
                    r = Number(s["upgradeCost" + n.quality]);
                return t.upgradelevel < UserData.getInstance()._level && t.upgradelevel < 40 && r < UserData.getInstance().getRes(TypeDefine.RES.Gold) ? 1 : 0
            }
            return t.upgradelevel < UserData.getInstance()._level && t.upgradelevel < 40 ? 1 : 0
        },
        t.getCaptainRemodule = function(t) {
            var e = ConfigData.getDataByKey("captainData", t.id),
                a = Number(e.promoteCostSoul.split("|")[t.promotelevel]),
                i = CaptainData.getCaptainPieceData(e.pieceId),
                n = i ? i.count : 0;
            return n >= a && t.promotelevel < 6 ? 1 : 0
        },
        t.getShipRedPoint = function(e) {
            var a = ShipManager.getInstance().getShipById(e);
            if (a) {
                var i = ConfigData.getDataByKey("shipData", a.shipid),
                    n = t.getPointShow({
                            quality: Number(i.quality)
                        },
                        RedPointType.ships) ? 1 : 0;
                return n + t.getShipUpdate(a) + t.getShipRemodule(a) + t.getShipSkill(a) + t.getShipTrain(a)
            }
            return 0
        },
        t.getShipUpdate = function(t) {
            return t.level < UserData.getInstance()._level && t.level < 200 ? 1 : 0
        },
        t.getShipRemodule = function(t) {
            var e = ConfigData.getDataByKey("shipData", t.shipid),
                a = t.shipid % 100,
                i = !1;
            6 == e.quality ? i = !0 : e.quality < 5 && (i = a > 4);
            var n = !i;
            if (n) {
                var s = e;
                if (s.remouldCount) {
                    var r = Utils.getListByKeyValue("id", s.drawingId, ShipManager.getInstance().papers),
                        o = 0,
                        l = Number(s.remouldCount);
                    r.length > 0 && r[0].count && (o = r[0].count);
                    var h = o >= l;
                    n = n && h
                }
                if (s.remouldSeniorPaper) {
                    var r = Utils.getListByKeyValue("id", 27, ShipManager.getInstance().papers),
                        l = Number(s.remouldSeniorPaper),
                        o = UserData.getInstance().getSeniorpaper(),
                        h = o >= l;
                    n = n && h
                }
                if (s.remouldMaterial) {
                    var c = ItemsManager.getInstance().getItemById(1246),
                        o = (ConfigData.getDataByKey("item", "1246"), 0);
                    c && c.count && (o = c.count);
                    var l = Number(s.remouldMaterial),
                        h = o >= l;
                    n = n && h
                }
            }
            return n ? 1 : 0
        },
        t.getShipSkill = function(t) {
            for (var e = [t.skillid, t.activeskillid, t.circleskillid], a = 0; a < e.length; a++)
                if (e[a]) {
                    var i = ConfigData.getDataByKey("skillData", e[a]),
                        n = ItemsManager.getInstance().getItemById(i.upgradeCostItem),
                        s = n && n.count || 0;
                    if (s >= Number(i.upgradeCostCount) && Number(i.upLevel) > 0) return 1
                }
            return 0
        },
        t.getShipTrain = function(t) {
            if (UserData.getInstance()._level < 15) return 0;
            for (var e = 1; 4 > e; e++) {
                var a = ConfigData.getDataByKey("trainData", e),
                    i = ItemsManager.getInstance().getItemById(1013),
                    n = i ? i.count : 0;
                if (a && Number(a.costItemCount) <= n) return 1
            }
            return 0
        },
        t.getPartRedPoint = function(e, a, i) {
            var n = ConfigData.getDataByKey("parts", e.partsid),
                s = t.getPointShow({
                        quality: Number(n.quality),
                        parts: e,
                        equipType: a,
                        shipType: i
                    },
                    RedPointType.parts) ? 1 : 0;
            return s + t.getPartUpdateBool(e) + t.getPartRemoduleBool(e)
        },
        t.getPartUpdateBool = function(t, e) {
            if (e) {
                var a = PartsManager.getInstance().getCostValue(t.partsid, t.upgradelevel);
                return t.upgradelevel < 3 * UserData.getInstance()._level && a <= UserData.getInstance().getRes(TypeDefine.RES.Gold) ? 1 : 0
            }
            return t.upgradelevel < 3 * UserData.getInstance()._level ? 1 : 0
        },
        t.getPartRemoduleBool = function(t) {
            var e = (ConfigData.getDataByKey("parts", t.partsid), PartsManager.getInstance().getRemouldValue(t.partsid, t.remouldlevel + 1));
            if (0 > e) return 0;
            var a = PartsManager.getInstance().getRemouldValue(t.partsid, t.remouldlevel + 1, "remouldCostPoint");
            return Number(a) > UserData.getInstance().getTechpoints() ? 0 : 1
        },
        t.getMedalRedPoint = function(e, a, i) {
            var n = t.getPointShow({
                    shipType: e,
                    soul: a,
                    quality: Number(i.quality),
                    exp: i.exp
                },
                RedPointType.medals) ? 1 : 0;
            return n + t.getMedalUpdateBool(a) + t.getMedalRemoduleBool(a)
        },
        t.getMedalUpdateBool = function(t, e) {
            for (var a = ShipManager.getInstance().soulList, i = 0, n = 0; n < a.length && (!t || ShipManager.getInstance().isMedalEquiped(a[n].id) || a[n].soulid == t.soulid || (i++, 5 != i)); n++);
            return i > 0 ? 1 : 0
        },
        t.getMedalRemoduleBool = function(t) {
            var e = ConfigData.getDataByKey("medalData", t.soulid),
                a = Number(e.remouldCostPoint.split("|")[t.promotelvl + 1]);
            return a = a || 0,
                a < UserData.getInstance().getExploit() ? 1 : 0
        },
        t
}();
