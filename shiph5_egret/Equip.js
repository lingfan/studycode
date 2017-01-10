
var CenterAddDataTool = function() {
    function t() {
        this.data = []
    }
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return this._instance || (this._instance = new t),
                this._instance
        },
        a.init = function(t) {},
        a.getData = function() {
            return CenteradddataParser.GetInstance().getDataArr()
        },
        a.getDataByCount = function(t) {
            var e = 0,
                a = CenteradddataParser.GetInstance().getDataArr();
            for (var i in a)
                if (!(t > a[i].count)) {
                    e = 0 == Number(i) ? 0 : Number(i) == a.length - 1 ? a.length - 1 : Number(i);
                    break
                }
            return a[e]
        },
        t
}();
