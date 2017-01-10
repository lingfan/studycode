
var CampShopOptData = function() {
    function t() {
        this.isInit = !1
    }
    var e = (__define, t),
        a = e.prototype;
    return a.init = function(t) {
            this.OnceItemList = t.oncebuyid,
                this.DayItemList = t.todaybuylist,
                this.WeekItemList = t.weekbuylist,
                this.isInit = !0,
                EventManager.instance.dispatchEvent(EventTypes.CAMP_SHOP_UPDATE)
        },
        a.OnceItemById = function(t) {
            for (var e in this.OnceItemList) {
                var a = this.OnceItemList[e];
                if (a == t) return a
            }
            return null
        },
        a.DayItemById = function(t) {
            for (var e in this.DayItemList) {
                var a = this.DayItemList[e];
                if (a.id == t) return a
            }
        },
        a.WeekItemById = function(t) {
            for (var e in this.WeekItemList) {
                var a = this.WeekItemList[e];
                if (a.id == t) return a
            }
        },
        t.instance = new t,
        t
}();
