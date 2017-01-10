
var ArrangeManager = function() {
    function t() {
        this.arrange = []
    }
    var e = (__define, t);
    e.prototype;
    return t.getInstance = function() {
            return void 0 == this._instance && (this._instance = new t),
                this._instance
        },
        t
}();
