
var ThemeAdapter = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.getTheme = function(t, e, a, i) {
            function n(t) {
                e.call(i, t)
            }

            function s(e) {
                e.resItem.url == t && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, s, null), a.call(i))
            }
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, s, null),
                RES.getResByUrl(t, n, this, RES.ResourceItem.TYPE_TEXT)
        },
        t
}();
