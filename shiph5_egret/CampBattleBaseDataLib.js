
var CampBattleBaseDataLib = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.checkIsOpen = function(t) {
            for (var e = CampbattlebasedataParser.GetInstance().getDataArr()[0], a = 0, i = e.openDay; a < i.length; a++) {
                var n = i[a];
                if (Math.floor(n) == t) return !0
            }
            return !1
        },
        t.instance = new t,
        t
}();
