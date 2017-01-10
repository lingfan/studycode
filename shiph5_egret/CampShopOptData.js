
var CampBattlePortOptData = function() {
    function t(t, e) {
        this.baseData = t,
            this.serverData = e,
            1 == this.baseData.id || 2 == this.baseData.id || 3 == this.baseData.id ? this.camp = this.baseData.id : this.camp = 0,
            this.hasChangeCamp = !1
    }
    var e = (__define, t),
        a = e.prototype;
    return t.processData = function(e, a) {
            a || (a = 0);
            var i = null;
            if (t.portCnt <= 0) {
                var n = CampbattlemapdataParser.GetInstance().getDatas();
                for (var s in n) i = new t(n[s], null),
                    null != i.baseData && (t.portList[s] = i, t.portCnt++);
                if (e)
                    for (var r = 0,
                            o = e; r < o.length; r++) {
                        var l = o[r];
                        t.portList[l.portid].serverData = l,
                            t.portList[l.portid].camp = a
                    }
            } else if (null != e)
                for (var h = 0,
                        c = e; h < c.length; h++) {
                    var l = c[h];
                    t.portList[l.portid].serverData = l,
                        t.portList[l.portid].camp = a
                }
            return e
        },
        a.checkInBattle = function() {
            for (var e in this.baseData.nearList) {
                var a = this.baseData.nearList[e];
                if (this.camp != t.portList[a].camp && 0 != this.camp && 0 != t.portList[a].camp) return !0
            }
            return !1
        },
        a.checkCanOpt = function() {
            var t = null;
            for (var e in this.baseData.nearList) {
                var a = this.baseData.nearList[e];
                if (Math.floor(a) == CampBattleManager.instance.currentPortId) {
                    t = null != this.serverData && this.camp != UserData.getInstance().getCamp() && 0 != this.camp && null != this.camp ? CampBattleManager.OPT_ATK : CampBattleManager.OPT_MOV;
                    break
                }
            }
            return t
        },
        t.getPortList = function() {
            return t.portList
        },
        t.resetPortList = function() {
            for (var e in t.portList) {
                var a = t.portList[e];
                a.serverData = null,
                    a.preCamp = a.camp;
                var i = Number(e);
                1 == i || 2 == i || 3 == i || (a.camp = 0)
            }
        },
        t.clearData = function() {
            t.portList = {},
                t.portCnt = 0
        },
        t.portList = {},
        t.portCnt = 0,
        t
}();
