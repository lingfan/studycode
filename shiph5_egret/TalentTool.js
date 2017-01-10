
var Talent = function() {
    function t() {
        this.addValues1 = [],
            this.addValues2 = [],
            this.level = -1
    }
    var e = (__define, t),
        a = e.prototype;
    return a.setData = function(t) {
            if (null == t) return null;
            if (this.id = Number(t.id), this.name_l = t.name_l, this.levelLimit = Number(t.levelLimit), this.preTalent = Number(t.preTalent), this.activateType = Number(t.activateType), this.activateLevel = Number(t.activateLevel), this.levelUpType = Number(t.levelUpType), this.levelUpLimit = t.levelUpLimit, this.needTalentPoint = t.needTalentPoint, this.needgold = t.needgold, this.addBuff1 = Number(t.addBuff1), null != t.addValues1 && "" != t.addValues1) {
                var e = t.addValues1.split("|");
                for (var a in e) null != e[a] && "" != e[a] && this.addValues1.push(Number(e[a]))
            }
            if (this.addBuff2 = Number(t.addBuff2), null != t.addValues2 && "" != t.addValues2) {
                var i = t.addValues2.split("|");
                for (var n in i) null != i[n] && "" != i[n] && this.addValues2.push(Number(i[n]))
            }
            return this.getType = Number(t.getType),
                this.getValue = Number(t.getValue),
                this.remarks = t.remarks,
                this
        },
        t
}();
