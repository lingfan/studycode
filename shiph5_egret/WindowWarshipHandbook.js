
var WindowWaiting = function(t) {
    function e() {
        var e = this;
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                function() {
                    e.hasEventListener(egret.Event.ENTER_FRAME) && e.removeEventListener(egret.Event.ENTER_FRAME, e.runLoading, e)
                },
                this),
            this.addEventListener(egret.Event.ADDED_TO_STAGE,
                function() {
                    e._txProgress && (e._txProgress.text = ""),
                        e.addEventListener(egret.Event.ENTER_FRAME, e.runLoading, e)
                },
                this),
            this.once(egret.Event.ADDED_TO_STAGE, this.init, this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this._bg = new egret.Shape,
                this._bg.graphics.beginFill(0, .5),
                this._bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight),
                this._bg.graphics.endFill(),
                this.addChild(this._bg),
                this._bg.touchEnabled = !0,
                this._loadingRun = new egret.Bitmap(RES.getRes(Path.resHeadUrl + "loading_run_png")),
                this.addChild(this._loadingRun),
                this._loadingRun.anchorOffsetX = .5 * this._loadingRun.width,
                this._loadingRun.anchorOffsetY = .5 * this._loadingRun.height,
                this._loadingRun.x = .5 * this.stage.stageWidth,
                this._loadingRun.y = .5 * this.stage.stageHeight,
                this._txProgress = new egret.TextField,
                this._txProgress.textAlign = egret.HorizontalAlign.CENTER,
                this._txProgress.verticalAlign = egret.VerticalAlign.MIDDLE,
                this._txProgress.x = .5 * this.stage.stageWidth - 100,
                this._txProgress.width = 200,
                this._txProgress.y = .5 * this.stage.stageHeight - 100,
                this._txProgress.height = 200,
                this._txProgress.size = 14,
                this._txProgress.stroke = 1,
                this._txProgress.strokeColor = 0,
                this.addChild(this._txProgress)
        },
        i.runLoading = function(t) {
            this._loadingRun && (this._loadingRun.rotation += 3)
        },
        i.setProgress = function(t, e) {
            this._txProgress && (this._txProgress.text = Math.round(t / e * 100) + "%")
        },
        e
}(egret.DisplayObjectContainer);
