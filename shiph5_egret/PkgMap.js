
var PkgBuffer = function() {
    function t() {
        this.buffer = "",
            this.pkglen = 0,
            this.curlen = 0,
            this.type = 0
    }
    var e = (__define, t),
        a = e.prototype;
    return a.clear = function() {
            this.buffer = "",
                this.pkglen = 0,
                this.curlen = 0,
                this.type = 0
        },
        a.complete = function() {
            return this.curlen >= this.pkglen
        },
        t
}();
