
var MissionData = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.init = function(e) {
            t.missionList = e.tasks,
                t.totalscore = e.totalscore,
                t.hasgetscoregiftlist = e.hasgetscoregiftlist,
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.TASK_UPDATE))
        },
        t
}();
