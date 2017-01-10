
var MilitaryRights = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.setData = function(t) {
            return null == t ? null : (this.id = Number(t.id), this.righttype = Number(t.righttype), this.numtype = Number(t.numtype), this.num = Number(t.num), this.rightname_l = t.rightname_l, this)
        },
        t
}();
