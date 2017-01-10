
var CaptainData = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.updateList = function(e) {
            t.captainlist = e.captainlist,
                ConfigData.preLoadList(["captainData"],
                    function() {
                        t.captainlist.sort(function(t, e) {
                            var a = ConfigData.getDataByKey("captainData", t.id),
                                i = ConfigData.getDataByKey("captainData", e.id);
                            return Number(a.quality) > Number(i.quality) ? -1 : 1
                        })
                    })
        },
        t.updatePieceList = function(e) {
            t.captainPiecelist = e.captainpiecelist
        },
        t.getCaptainPieceData = function(e) {
            for (var a = 0; a < t.captainPiecelist.length; a++) {
                var i = t.captainPiecelist[a];
                if (i.id == e) return i
            }
            return null
        },
        t.updateCaptain = function(e) {
            for (var a = 0; a < t.captainlist.length; a++) e.id == t.captainlist[a].id && (t.captainlist[a] = e);
            GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.CAPTAIN_UPDATE)),
                CaptainManager.getInstance().refreshCaptainListPage()
        },
        t.captainlist = [],
        t.captainPiecelist = [],
        t
}();
