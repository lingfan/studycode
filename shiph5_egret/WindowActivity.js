
var TiaoZhuanAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/TiaoZhuanPanerlSkin.exml"
            /*tpa=resource/eui_skins/TiaoZhuanPanerlSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getInstance = function() {
            return this._instance || (this._instance = new e),
                this._instance
        },
        i.OnComplete = function() {
            this.__inited = !0,
                this._block || (this._block = new egret.Shape, this._block.graphics.beginFill(0, .5), this._block.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight), this._block.graphics.endFill(), this._block.touchEnabled = !0);
            var t = GameLayer.getInstance().windowLayer.getChildIndex(this);
            egret.log("depth:", t),
                GameLayer.getInstance().windowLayer.addChildAt(this._block, t)
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.Jump1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.Jump2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.clean = function() {
            this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.Jump1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.Jump2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    this.hide();
                    break;
                case this.Jump1:
                    this.fun1(),
                        this.hide();
                    break;
                case this.Jump2:
                    this.fun2(),
                        this.hide()
            }
        },
        i.show = function(t, e, a, i, n) {
            this.txtTitle.text = t,
                this.txtName1.text = e,
                this.txtName2.text = a,
                this.fun1 = i,
                this.fun2 = n,
                this.init(),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        e
}(eui.Component);
