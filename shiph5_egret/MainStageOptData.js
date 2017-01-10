
var DropOptData = function() {
    function t(t) {
        this.baseData = GlobalFunction.getDropDataByTypeAndId(t.type, t.id, t.count),
            this.serverData = t,
            Log.logZDY(t)
    }
    var e = (__define, t);
    e.prototype;
    return t.processData = function(e) {
            var a = [],
                i = null;
            if (e)
                for (var n = 0,
                        s = e.length; s > n; ++n) i = new t(e[n]),
                    i.baseData && a.push(i);
            return a
        },
        t
}();
