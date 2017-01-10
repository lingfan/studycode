
var ExpTool = function() {
    function t() {
        var t = this;
        this.data = [];
        ConfigData.getAllData("exp",
            function(e) {
                t.init(e)
            })
    }
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return this._instance || (this._instance = new t),
                this._instance
        },
        a.init = function(t) {
            for (var e in t) t[e] == t.length ? console.log("Exp length:" + t[e]) : this.data.push((new Exp).setData(t[e]))
        },
        a.getData = function() {
            return this.data
        },
        a.getDataByLv = function(t) {
            return this.data[t]
        },
        t
}();
