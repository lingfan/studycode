
var SimpleAnimation = function(t) {
    function e(e, a, i) {
        void 0 === a && (a = 24),
            void 0 === i && (i = !0),
            t.call(this),
            this._pause = !0,
            this.setFrames(e),
            this.frameRate = a,
            this._curFrameIndex = 0,
            this._loop = i,
            this._timeCounter = 0,
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.OnAddToStage, this)
    }
    __extends(e, t);
    var a = __define,
        i = e,
        n = i.prototype;
    return a(n, "frameRate",
            function() {
                return this._frameRate
            },
            function(t) {
                0 >= t && (t = .001),
                    t > 60 && (t = 60),
                    this._frameRate = t,
                    this._frameInterval = 1e3 / t,
                    this._totalInterval = this._frameInterval * this._framenames.length
            }),
        n.setFrames = function(t) {
            var e = this;
            0 != t.length && (this._timeCounter = 0, this._pause = !0, this._framenames = t, this._frames = [], SUI.setTextureAsync(this, this._framenames[0],
                function(t) {
                    e._frames.push(t),
                        e.texture = t;
                    for (var a = [], i = 1; i < e._framenames.length; ++i) a.push(e._framenames[i]);
                    ResLoader.instance.preLoadResList(a,
                        function(t) {
                            for (var a = 0,
                                    i = t; a < i.length; a++) {
                                var n = i[a];
                                e._frames.push(n)
                            }
                            e.GotoAndPlay(0)
                        },
                        e)
                },
                this))
        },
        n.GotoAndStop = function(t) {
            t >= 0 && t < this._frames.length && (t = Math.floor(t), this._timeCounter = this._frameInterval * t, this.texture = this._frames[t], this._pause = !0)
        },
        n.GotoAndPlay = function(t) {
            this.GotoAndStop(t),
                this._pause = !1
        },
        n.OnAddToStage = function() {
            this.addEventListener(egret.Event.ENTER_FRAME, this.OnEnterFrame, this),
                this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.OnRemoveFromStage, this),
                this._timeOnEnterFrame = egret.getTimer()
        },
        n.OnEnterFrame = function() {
            if (!(this._pause || this._totalInterval <= 0 || 0 == this._frames.length)) {
                var t = egret.getTimer();
                this._timeCounter += t - this._timeOnEnterFrame,
                    this._timeOnEnterFrame = t,
                    this._timeCounter > this._totalInterval && (this._loop ? (this._timeCounter = this._timeCounter % this._totalInterval, this.dispatchEventWith(egret.MovieClipEvent.LOOP_COMPLETE)) : (this._pause = !0, this._timeCounter = this._totalInterval - 1, this.dispatchEventWith(egret.MovieClipEvent.COMPLETE)));
                var e = Math.floor(this._timeCounter / this._totalInterval * this._frames.length);
                e != this._curFrameIndex && (this.texture = this._frames[e], this._curFrameIndex = e)
            }
        },
        n.OnRemoveFromStage = function() {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.OnEnterFrame, this),
                this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.OnRemoveFromStage, this)
        },
        e
}(egret.Bitmap);
