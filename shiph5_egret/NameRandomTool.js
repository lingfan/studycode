
var MilitaryRightsTool = function() {
    function t() {
        var t = this;
        this.data = [];
        ConfigData.getAllData("MilitaryRights",
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
            for (var e in t) t[e] == t.length ? console.log("MilitaryRights length:" + t[e]) : this.data.push((new MilitaryRights).setData(t[e]))
        },
        a.getData = function() {
            return this.data
        },
        a.getDataById = function(t) {
            return this.data[t]
        },
        t
}();
