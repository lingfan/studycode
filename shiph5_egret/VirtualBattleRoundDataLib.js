
var VirtualBattleRoundDataLib = function() {
    function t() {
        this.roundData = {
            info: {
                roundlist: []
            }
        };
        for (var t = 0,
                e = VirtualbattlerounddataParser.GetInstance().getDataArr(); t < e.length; t++) {
            var a = e[t],
                i = this.roundData.info.roundlist[a.round];
            null == i && (this.roundData.info.roundlist[a.round] = {
                roundid: a.round,
                actionlist: {}
            });
            var n = {
                actionshipid: a.actionId,
                skillid: a.skill,
                targetlist: [],
                actionshipdata: {}
            };
            this.roundData.info.roundlist[a.round].actionlist[a.anction] = n;
            var s = {
                id: a.actionId
            };
            n.actionshipdata = s;
            for (var r = null,
                    o = 0; o < a.target.length; ++o) r = {
                    id: a.target[o],
                    hp: a.hp[o],
                    maxhp: a.hp[a.hp.length - 1],
                    cri: !1,
                    hit: !1,
                    damage: a.damage[o]
                },
                1 == a.status[o] ? r.hit = !0 : 2 == a.status[o] ? (r.cri = !0, r.hit = !0) : 3 == a.status[o] && (r.hit = !1),
                n.targetlist.push(r)
        }
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return e(t, "instance",
            function() {
                return t._instance = new t,
                    t._instance
            }),
        i.getRoundData = function() {
            return this.roundData
        },
        t
}();
