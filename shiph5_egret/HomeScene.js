
var HomeScene = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.init = function() {
            this._mainUI = new MainUI,
                GameLayer.getInstance().uiLayer.addChild(this._mainUI),
                this._homeUI = new HomeUI,
                this._homeUI.name = "HomeUI",
                GameLayer.getInstance().pageLayer.addChild(this._homeUI),
                this._timer = new egret.Timer(3e4, 0),
                this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTick, this),
                this._timer.start(),
                this.onTick()
        },
        a.onTick = function() {
            if (!AudioManager.instance.playMusic(AudioManager.MUSIC_MAIN_UI)) {
                var t = AudioManager.instance.playMusic(AudioManager.MUSIC_MAIN_UI);
                t && this._timer && (this._timer.stop(), this._timer = null)
            }
        },
        a.destroy = function() {
            this._mainUI && (Utils.removeNode(this._mainUI), this._mainUI = void 0),
                this._homeUI && (Utils.removeNode(this._homeUI), this._homeUI = void 0),
                this._timer && (this._timer.stop(), this._timer = null),
                WindowManager.getInstance().hideAll()
        },
        t
}();
