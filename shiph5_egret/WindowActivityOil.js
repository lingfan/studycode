
var WindowBase = function(t) {
    function e(e, a) {
        t.call(this),
            this.__inited = !1,
            this.isPopWindow = !!e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.OnComplete, this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this, !1, 1),
            this.addEventListener(eui.UIEvent.REMOVED_FROM_STAGE, this.onRemoveFromState, this),
            a || (e ? GameLayer.getInstance().windowLayer.addChild(this) : GameLayer.getInstance().pageLayer.addChild(this))
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.getWindowName = function() {
            return this.windowName
        },
        i.setWindowName = function(t) {
            this.windowName = t
        },
        i.OnComplete = function() {
            if (!this._closed && (this.__inited = !0, this.__cachedData && this.setData(this.__cachedData), this._needBlock)) {
                this._block || (this._block = new egret.Shape, this._block.graphics.beginFill(0, .5), this._block.graphics.drawRect(0, 0, GameData.designWidth, GameData.designHeight), this._block.graphics.endFill(), this._block.touchEnabled = !0);
                var t = GameLayer.getInstance().windowLayer.getChildIndex(this);
                GameLayer.getInstance().windowLayer.addChildAt(this._block, t)
            }
        },
        i.setData = function(t) {},
        i.init = function() {},
        i.onRemoveFromState = function() {
            this._block && this._block.parent && this._block.parent.removeChild(this._block),
                this.clear(),
                ResLoader.instance.collectTextureCache(),
                this._closed = !0,
                Log.log("Window closed:", this.windowName)
        },
        i.clear = function() {},
        i.destroy = function() {
            this.isPopWindow && this.parent ? GameLayer.getInstance().windowLayer.removeChild(this) : !this.itemBool && this.parent && (GameLayer.getInstance().pageLayer.removeChild(this), MainUI.instance.showLastTop()),
                this._block && this._block.parent && this._block.parent.removeChild(this._block),
                WindowManager.getInstance().clearCache(this.windowName)
        },
        i.close = function() {
            WindowManager.getInstance().hide(this.windowName)
        },
        e
}(eui.Component);
