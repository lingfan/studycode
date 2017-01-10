
var SceneType;
!
function(t) {
    t[t.NONE = 0] = "NONE",
        t[t.HOME = 1] = "HOME",
        t[t.BATTLE = 2] = "BATTLE"
}(SceneType || (SceneType = {}));
var SceneManager = function() {
    function t() {
        this.isShake = !1,
            this.shakeFrame = [{
                    shakeFrame: 8,
                    shakeLength: 2
                },
                {
                    shakeFrame: 16,
                    shakeLength: 3
                }
            ],
            this.shakeType = 1,
            this.currentFrame = 0,
            this.currentFrameData = null,
            this._curSceneType = SceneType.NONE
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return e(i, "curSceneType",
            function() {
                return this._curSceneType
            }),
        e(i, "curScene",
            function() {
                return this._curScene
            }),
        i.SwitchScene = function(t, e, a, i, n) {
            if (void 0 === e && (e = !1), this._curSceneType !== t || e) {
                this._curSceneType || GameLayer.getInstance().bgLayer.addEventListener(egret.Event.ENTER_FRAME, this.OnEnterFrame, this);
                var s;
                t == SceneType.HOME ? s = new HomeScene : t == SceneType.BATTLE && (s = new BattleScene),
                    s && (this._curScene && (WindowManager.getInstance().getWindow(WindowManager.windowType.Upgrade) && (UserData.getInstance().lvUpgradeFlag = !0), this._curScene.destroy()), this._curScene = s, this._curSceneType = t, s.init(), a && a.apply(i, n), Log.log("Switch to scene:", SceneType[this._curSceneType]))
            }
        },
        i.OnEnterFrame = function() {
            if (this._curScene && this._curScene.update && this._curScene.update(), 1 == this.isShake)
                if (this.currentFrame > 0) {
                    var t = this.currentFrameData.shakeFrame - this.currentFrame + 1;
                    t % 4 > 0 ? t %= 4 : t = 4,
                        1 == t ? (GameLayer.getInstance().root.x = -this.currentFrameData.shakeLength, GameLayer.getInstance().root.y = 0) : 2 == t ? (GameLayer.getInstance().root.x = this.currentFrameData.shakeLength, GameLayer.getInstance().root.y = 0) : 3 == t ? (GameLayer.getInstance().root.x = 0, GameLayer.getInstance().root.y = this.currentFrameData.shakeLength) : 4 == t && (GameLayer.getInstance().root.x = 0, GameLayer.getInstance().root.y = -this.currentFrameData.shakeLength),
                        this.currentFrame = this.currentFrame - 1
                } else this.isShake = !1,
                    this.currentFrame = 0,
                    this.currentFrameData = null,
                    GameLayer.getInstance().root.x = GameLayer.getInstance().root.y = 0
        },
        i.sceneShake = function(e) {
            void 0 === e && (e = t.SHAKE_NORMAL),
                this.isShake = !0,
                this.currentFrameData = this.shakeFrame[e - 1],
                this.currentFrame = this.currentFrameData.shakeFrame
        },
        i.stopShake = function() {
            this.isShake = !1
        },
        t.instance = new t,
        t.SHAKE_NORMAL = 1,
        t.SHAKE_HIGH = 2,
        t
}();
