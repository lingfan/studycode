
var StageSpecialDataLib = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.getFirstData = function() {
            return StagespecialdataParser.GetInstance().getDataArr()[0]
        },
        a.getCampaignIdBySpecialId = function(t) {
            return t % 100
        },
        a.getDataByCampaignId = function(t) {
            for (var e = StagespecialdataParser.GetInstance().getDataArr(), a = 0, i = e; a < i.length; a++) {
                var n = i[a];
                if (10 == Math.floor(n.id / 1e4) && this.getCampaignIdBySpecialId(n.id) == t) return n
            }
        },
        t.instance = new t,
        t
}();
