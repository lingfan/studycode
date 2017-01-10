
var BuyOilData = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return void 0 == this._instance && (this._instance = new t),
                this._instance
        },
        a.getData = function(t) {
            var e = this;
            void 0 === t && (t = null),
                this._callBack = t,
                ConfigData.getAllData("buyOilData",
                    function(t) {
                        e.loadData(t)
                    })
        },
        a.loadData = function(t) {
            t && (this.dataList = t, this._callBack && this._callBack())
        },
        t
}();
