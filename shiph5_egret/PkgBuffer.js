
var ErrorCodeManager = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.alertError = function(t) {
            void 0 != t && void 0 != t.res && 0 != Number(t.res) && Toast.launch(Locales.get("login_txt_error_2", t.res))
        },
        t
}();
