
var UserExpDataLib = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.getMaxExpByLevel = function(t) {
            var e = ExpParser.GetInstance().getItemById(t + 1);
            return e ? e.exp : 0
        },
        a.getDataBylevel = function(t) {
            return ExpParser.GetInstance().getItemById(t)
        },
        a.getSpeedUpLv = function(t) {
            var e = ExpParser.GetInstance().getItemById(t).speedUpLv;
            return e
        },
        a.checkSpeedUpLv = function(t, e) {
            var a = !1,
                i = 0,
                n = ExpParser.GetInstance().getItemById(t).speedUpLv;
            if (e > n)
                for (var s = 0,
                        r = ExpParser.GetInstance().getDataArr(); s < r.length; s++) {
                    var o = r[s];
                    if (o.speedUpLv == e) {
                        i = o.level;
                        break
                    }
                } else a = !0;
            return [a, i]
        },
        t.instance = new t,
        t
}();
