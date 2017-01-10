
var BattleShipOptData = function() {
    function t(e, a, i, n, s, r) {
        n == t.TYPE_PLAYER ? this.baseData = ShipdataParser.GetInstance().getItemById(e.shipid) : n == t.TYPE_NPC ? this.baseData = NpcdataParser.GetInstance().getItemById(e.shipid) : n == t.TYPE_VIRTUAL && (this.baseData = e),
            this.baseData ? (this.modelData = ShipmodeldataParser.GetInstance().getItemById(this.baseData.modelId), this.modelData || Log.logError("ModelData is not exist, id:" + this.baseData.modelId)) : Log.logError("ShipDataLib is not exist, id:" + e.shipid + ",dataType:" + n),
            this.isMine = a,
            this.isCaptain = i,
            this.pos = s,
            this.dataType = n,
            this.isBench = r,
            this.serverData = e
    }
    var e = (__define, t);
    e.prototype;
    return t.processData = function(e, a, i, n, s) {
            for (var r, o, l = [], h = 0, c = 0, d = e.length; d > c; ++c) {
                var g = e[c];
                0 != g.id && (g.id == i ? (o = new t(g, a, !0, n, c, !1), r = o) : o = new t(g, a, !1, n, c, !1), l.push(o), g && g.hp > 0 && (h += g.speed))
            }
            if (s) {
                Log.logZDY("benchList length" + s.length);
                for (var c = 0,
                        d = s; d > c; ++c) {
                    var u = s[c];
                    Log.logZDY("***************" + u.id),
                        0 != Number(u.id) && (o = new t(u, a, !1, n, c, !0), l.push(o), u && u.hp > 0 && (h += u.speed))
                }
            }
            return {
                list: l,
                captain: r,
                speed: h
            }
        },
        t.TYPE_PLAYER = 1,
        t.TYPE_NPC = 2,
        t.TYPE_VIRTUAL = 3,
        t
}();
