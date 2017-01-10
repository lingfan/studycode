
var ConfigHelper = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.getPaperChargeCount = function() {
            var t = void 0,
                e = void 0,
                a = PaperchargecountParser.GetInstance().getDatas();
            for (var i in a) {
                var n = a[i],
                    s = 0;
                1 == n.chargeType && (t ? t > s && (t = s) : t = s),
                    2 == n.chargeType && (e ? e > s && (e = s) : e = s)
            }
            return t
        },
        t.instance = new t,
        t
}();
