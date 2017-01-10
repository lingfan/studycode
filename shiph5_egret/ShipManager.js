
var ScienceManager = function(t) {
    function e() {
        t.call(this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getInstance = function() {
            return void 0 == this._instance && (this._instance = new e),
                this._instance
        },
        i.handleUpgradeScienceResult = function(t) {
            0 == t.res ? (GameEventDispatcher.getInstance().addEventListener(GameEvent.SCIENCE_UPDATE, this.refreshSciencePage, this), 1 == t.id ? Toast.launch("火炮攻击 +10") : 2 == t.id ? Toast.launch("爆破攻击 +10") : 3 == t.id ? Toast.launch("火炮防御 +4") : 4 == t.id ? Toast.launch("爆破防御 +4") : 5 == t.id && Toast.launch("生命 +30")) : 1 == t.res ? Toast.launch("已最高级") : 2 == t.res ? Toast.launch("金币不足") : 3 == t.res ? Toast.launch("道具不足") : 5 == t.res ? Toast.launch("已达到当前最高等级") : 10 == t.res && Toast.launch("非法id")
        },
        i.refreshSciencePage = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.SCIENCE_UPDATE, this.refreshSciencePage, this);
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.KeJi);
            t.setCenterPage()
        },
        i.handleAutoUpgradeScienceResult = function(t) {
            if (0 == t.resa) {
                for (var e = 0; e < t.levela.length; e++) 0 != t.levela[e] && (0 == e ? Toast.launch("火炮攻击 +" + 10 * t.levela[e]) : 1 == e ? Toast.launch("爆破攻击 +" + 10 * t.levela[e]) : 2 == e ? Toast.launch("火炮防御 +" + 4 * t.levela[e]) : 3 == e ? Toast.launch("爆破防御 +" + 4 * t.levela[e]) : 4 == e && Toast.launch("生命 +" + 30 * t.levela[e]));
                var a = WindowManager.getInstance().getWindow(WindowManager.windowType.KeJi);
                a.setCenterPage()
            } else 1 == t.resa ? Toast.launch("已最高级") : 2 == t.resa ? Toast.launch("金币不足") : 3 == t.resa ? Toast.launch("道具不足") : 5 == t.resa ? Toast.launch("已达到当前最高等级") : 10 == t.resa && Toast.launch("非法id")
        },
        e
}(egret.EventDispatcher);
