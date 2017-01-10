
var MilitaryRank = function() {
    function t() {
        this.privilege = []
    }
    var e = (__define, t),
        a = e.prototype;
    return a.setData = function(t) {
            if (null == t) return null;
            if (this.id = Number(t.id), this.nextrank = Number(t.nextrank), this.name_l = t.name_l, this.picture = t.picture, this.pic_ch = t.pic_ch, this.pic_ch_s = t.pic_ch_s, this.honour = Number(t.honour), this.gold = Number(t.gold), this.diamond = Number(t.diamond), this.quality = Number(t.quality), null != t.privilege && "" != t.privilege) {
                var e = t.privilege.split("|");
                for (var a in e) null != e[a] && "" != e[a] && this.privilege.push(Number(e[a]))
            }
            return this
        },
        t
}();
