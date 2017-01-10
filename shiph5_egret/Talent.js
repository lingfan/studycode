
var StageData = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.init = function(e) {
            t.stageList = e.stage || [],
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.HEGEMONY_NET))
        },
        t.getTotalCount = function() {
            for (var e = 12,
                    a = 0; 2 > a; ++a)
                for (var i = 0; 3 > i; ++i) {
                    var n = 3 * a,
                        s = 2e5 + 3 * (n + i) + 1,
                        r = StagespecialdataParser.GetInstance().getItemById(s);
                    UserData.getInstance()._level < r.reqStage && (e -= 2)
                }
            if (t.stageList)
                for (var o = 0; o < t.stageList.length; o++) e -= t.stageList[o].todayCount;
            else e = 0;
            return e
        },
        t.getItemCount = function(e, a) {
            var i = 2;
            if (t.stageList) {
                var n = StagespecialdataParser.GetInstance().getItemById(e);
                if (UserData.getInstance()._level < n.reqStage) i = 0;
                else
                    for (var s = 0; s < t.stageList.length; s++) {
                        var r = t.stageList[s];
                        a == r.stageID && (i -= r.todayCount)
                    }
            } else i = 0;
            return i
        },
        t
}();
