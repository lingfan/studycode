
var ShopDataLib = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.getDataById = function(t) {
            for (var e = ShopdataParser.GetInstance().getDataArr(), a = 0, i = e; a < i.length; a++) {
                var n = i[a];
                if (n.itemId == t) return n
            }
        },
        a.getShopDataById = function(t) {
            return ShopdataParser.GetInstance().getItemById(t)
        },
        a.getShopDataByCampType = function() {
            for (var t = [], e = ShopdataParser.GetInstance().getDataArr(), a = 0, i = e; a < i.length; a++) {
                var n = i[a];
                4 == n.type && t.push(n)
            }
            return t
        },
        a.getShopDataByBiwuType = function() {
            for (var t = [], e = ShopdataParser.GetInstance().getDataArr(), a = 0, i = e; a < i.length; a++) {
                var n = i[a];
                5 == n.type && t.push(n)
            }
            return t
        },
        t.instance = new t,
        t
}();
