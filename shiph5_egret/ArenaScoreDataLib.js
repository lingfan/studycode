
var ArenaScoreDataLib = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.getRankData = function(t) {
            for (var e = ArenascoredataParser.GetInstance().getDataArr(), a = e[e.length - 1], i = 0; i < e.length; ++i) {
                var n = e[i];
                if (n.rank <= t && e[i + 1].rank > t) {
                    a = n;
                    break
                }
            }
            return a
        },
        t.instance = new t,
        t
}();
