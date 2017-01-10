
var BattleLostDataLib = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.getDataBylvl = function(t) {
            for (var e = BattlelostParser.GetInstance().getDataArr(), a = null, i = 0, n = e; i < n.length; i++) {
                var s = n[i];
                Math.floor(t) >= Math.floor(s.startLv) && Math.floor(t) <= Math.floor(s.endLv) && (a = s)
            }
            return a
        },
        t.instance = new t,
        t
}();
