
var GameTick = function(t) {
    function e() {
        t.apply(this, arguments)
    }
    __extends(e, t);
    var a = (__define, e);
    a.prototype;
    return e.tick = function(t) {
            if (Transport.instance && 1 == Transport.instance.state) {
                var a = egret.getTimer();
                if (a - e.heartBeatDeltaTime > e.heartDeltaTime) {
                    e.heartBeatDeltaTime = a;
                    var i = Transport.getPkg(ProtocolMgr.ID_DceHeartbeat);
                    Transport.instance.send(i)
                }
                a - e.secondTime > 1e3 && (e.secondTime = a, UserData.getInstance().addServerTime(), UserData.getInstance().autosupply());
                for (var n in e.tickFunList) {
                    var s = e.tickFunList[n];
                    void 0 != s.fun && a - s.detal > s.delay && (s.fun(), s.detal = a)
                }
            }
        },
        e.registerHandler = function(t, a) {
            return void 0 === a && (a = e.heartDeltaTime),
                e.tickIndex++,
                e.tickFunList[e.tickIndex] = {
                    fun: t,
                    delay: a,
                    detal: 0
                },
                e.tickIndex
        },
        e.removeHandler = function(t) {
            delete e.tickFunList[t]
        },
        e.clear = function() {
            e.tickFunList = {},
                e.tickIndex = 0
        },
        e.heartBeatDeltaTime = 0,
        e.heartDeltaTime = 12e3,
        e.secondTime = 0,
        e.tickFunList = {},
        e.tickIndex = 0,
        e
}(egret.EventDispatcher);
