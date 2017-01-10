
var Locales = function() {
    function t(e, a) {
        this._dicBase = {},
            t.instance = this,
            this._onLoaded = e,
            this._onLoadedThis = a;
        var i = "resource/config/lang/zh_CN.json"
            /*tpa=resource/config/lang/zh_CN.json*/
        ;
        RES.getResByUrl(Transport.loginPanelBool ? Path.cdnURL + i : i, this.loadJsonComplete, this, RES.ResourceItem.TYPE_TEXT)
    }
    var e = (__define, t),
        a = e.prototype;
    return a.loadJsonComplete = function(t) {
            this._dicBase = JSON.parse(t),
                this._onLoaded && (this._onLoaded.apply(this._onLoadedThis), this._onLoadedThis = void 0, this._onLoaded = void 0)
        },
        t.get = function(e) {
            for (var a = [], i = 1; i < arguments.length; i++) a[i - 1] = arguments[i];
            if (t.instance) {
                var n = t.instance._dicBase[e];
                if (null != n) {
                    if (a.length > 0)
                        for (var s = 1; s <= a.length; s++) n = n.replace("#v" + s.toString() + "#", a[s - 1].toString());
                    return n
                }
                return e
            }
        },
        t.getKey = function(t, e, a) {
            return "Config_" + t + "_" + (e - 1) + "_" + a
        },
        t.transConfig = function(e, a, i) {
            var n = t.getKey(e, a, i);
            return t.get(n)
        },
        t
}();
