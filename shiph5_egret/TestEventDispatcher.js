
var EventManager = function() {
    function t() {
        this.eventsMap = {}
    }
    var e = (__define, t),
        a = e.prototype;
    return a.dispatchEvent = function(t) {
            for (var e = [], a = 1; a < arguments.length; a++) e[a - 1] = arguments[a];
            var i = this.eventsMap[t];
            if (i)
                for (var n = i.concat(), s = 0, r = n; s < r.length; s++) {
                    var o = r[s];
                    o.func.apply(o.thisObj, e)
                }
        },
        a.addEventListener = function(t, e, a) {
            var i = this.eventsMap[t];
            i || (i = [], this.eventsMap[t] = i),
                i.push({
                    type: t,
                    func: e,
                    thisObj: a
                })
        },
        a.removeEventListener = function(t, e, a) {
            var i = this.eventsMap[t];
            if (i)
                for (var n = 0; n < i.length; ++n) {
                    var s = i[n];
                    s.type == t && s.func == e && s.thisObj == a && i.splice(n, 1)
                }
        },
        a.removeEventListenerByType = function(t) {
            var e = this.eventsMap[t];
            e && delete this.eventsMap[t]
        },
        a.removeEventListenerByBindObject = function(t) {
            if (t)
                for (var e in this.eventsMap)
                    for (var a = this.eventsMap[e], i = 0; i < a.length; ++i) {
                        var n = a[i];
                        n.thisObj == t && a.splice(i, 1)
                    }
        },
        a.removeAllEventListener = function() {
            this.eventsMap = {}
        },
        t.instance = new t,
        t
}();
