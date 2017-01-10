
var VipTool = function() {
    function t() {
        var t = this;
        this.data = [];
        ConfigData.getAllData("vip",
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
            for (var e in t) t[e] == t.length ? console.log("Vip length:" + t[e]) : this.data.push((new Vip).setData(t[e]))
        },
        a.getDataByLevel = function(t) {
            return this.data[t]
        },
        t
}();
