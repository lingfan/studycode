
var TalentTool = function() {
    function t() {
        var t = this;
        this.data = [];
        ConfigData.getAllData("Talent",
            function(e) {
                t.init(e)
            })
    }
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return this._instance || (this._instance = new t),
                this._instance
        },
        a.init = function(t) {
            for (var e in t) t[e] == t.length ? console.log("Talent length:" + t[e]) : this.data.push((new Talent).setData(t[e]))
        },
        a.getTotalData = function() {
            var t = new TalentTotalData;
            for (var e in this.data) {
                var a = 0,
                    i = this.data[e];
                for (var n in i.addValues1) {
                    if (Number(n) + 1 > i.level) break;
                    a += i.addValues1[n]
                }
                switch (i.addBuff1) {
                    case 1:
                        t.huogong = a;
                        break;
                    case 5:
                        t.huofang = a;
                        break;
                    case 9:
                        t.shengming = a;
                        break;
                    case 11:
                        t.sudu = a;
                        break;
                    case 19:
                        t.jianren = a;
                        break;
                    case 17:
                        t.baoji = a;
                        break;
                    case 99:
                        t.exp = a,
                            t.expPercent = a / 1e4;
                        break;
                    case 97:
                        t.gold = a,
                            t.goldPercent = a / 1e4;
                        break;
                    case 98:
                        t.add = a,
                            t.addPercent = a / 1e4
                }
                a = 0;
                for (var s in i.addValues2) {
                    if (Number(s) + 1 > i.level) break;
                    a += i.addValues2[s]
                }
                switch (i.addBuff2) {
                    case 3:
                        t.baogong = a;
                        break;
                    case 7:
                        t.baofang = a
                }
            }
            return t.baoji = t.baoji / 10 + "%",
                t.jianren = t.jianren / 10 + "%",
                t.exp = t.exp / 100 + "%",
                t.gold = t.gold / 100 + "%",
                t.add = t.add / 100 + "%",
                t
        },
        t
}();
