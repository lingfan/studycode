
var ClientDropDataLib = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.getDataBy = function() {
            for (var t = [], e = 0, a = ClientdropdataParser.GetInstance().getDataArr(); e < a.length; e++) {
                var i = a[e];
                10101 == i.id && t.push(i)
            }
            return t[Utils.randInt(0, t.length - 1)]
        },
        a.sortList = function(t, e) {
            return t.index < e.index
        },
        a.getTanBaoDataById = function(t) {
            this.tanbaoList = [];
            for (var e = 0,
                    a = ClientdropdataParser.GetInstance().getDataArr(); e < a.length; e++) {
                var i = a[e];
                if (i.id == t) {
                    var n = GlobalFunction.getDropDataByTypeAndId(i.type, i.item, i.count);
                    n && this.tanbaoList.push(n)
                }
            }
            return this.tanbaoList
        },
        a.getTanBaoList = function() {
            return this.tanbaoList
        },
        t.instance = new t,
        t
}();
