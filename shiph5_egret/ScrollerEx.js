
var UserDefault = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.setStringForKey = function(t, e) {
            t && null !== e && egret.localStorage.setItem(t, e)
        },
        a.getStringForKey = function(t) {
            if (t) {
                var e = egret.localStorage.getItem(t);
                return e ? e : ""
            }
            return ""
        },
        t.instance = new t,
        t
}();
