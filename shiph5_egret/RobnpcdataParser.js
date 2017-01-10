
var RobnpcdataParser = function() {
    function t() {
        this._length = 0
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return t.GetInstance = function() {
            return t.instance
        },
        e(i, "length",
            function() {
                return this._length
            }),
        i.ProcessData = function(t) {
            if (void 0 == this.datas) {
                this.datas = new Object,
                    this.dataArr = [],
                    this._length = 0;
                for (var e in t)
                    if ("length" != e) {
                        var a = t[e],
                            i = new RobnpcdataItem(a);
                        this.datas[e] = i,
                            this.dataArr.push(i),
                            this._length++
                    }
            }
        },
        i.getItemByField = function(t, e) {
            if (void 0 != this.datas)
                for (var a in this.datas)
                    if (this.datas[a][t] == e) return this.datas[a]
        },
        i.getItemById = function(t) {
            return t = t.toString(),
                void 0 != this.datas ? this.datas[t] : void 0
        },
        i.getDatas = function() {
            return this.datas
        },
        i.getDataArr = function() {
            return this.dataArr
        },
        t.instance = new t,
        t
}();
