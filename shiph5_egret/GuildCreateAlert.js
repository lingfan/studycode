
var GameAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this, !1, 1),
            this.skinName = "resource/eui_skins/gameAlertSkin.exml"
            /*tpa=resource/eui_skins/gameAlertSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeClick, this),
                this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.OnComplete = function() {
            this.__inited = !0,
                this._block || (this._block = new egret.Shape, this._block.graphics.beginFill(0, .5), this._block.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight), this._block.graphics.endFill(), this._block.touchEnabled = !0);
            var t = GameLayer.getInstance().windowLayer.getChildIndex(this);
            egret.log("depth:", t),
                GameLayer.getInstance().windowLayer.addChildAt(this._block, t)
        },
        e.getInstance = function() {
            return this._instance || (this._instance = new e),
                this._instance
        },
        i.show = function(t, e, a, i, n, s) {
            void 0 === t && (t = ""),
                void 0 === e && (e = ""),
                void 0 === a && (a = null),
                void 0 === i && (i = null),
                "" != t ? this.titleTxt.text = t : this.titleTxt.text = "提示",
                this.txtContent.text = e,
                n && (this.okBtn.labelDisplay.text = n),
                s && (this.cancelBtn.labelDisplay.text = s),
                this.okFun = a,
                this.cancelFun = i,
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showPaySuccess = function(t, e, a, i, n, s) {
            void 0 === t && (t = ""),
                void 0 === e && (e = ""),
                void 0 === a && (a = null),
                void 0 === i && (i = null),
                this.titleTxt.text = "充值成功",
                this.txtContent.text = "充值成功",
                n && (this.okBtn.labelDisplay.text = n),
                s && (this.cancelBtn.labelDisplay.text = s),
                this.okFun = a,
                this.cancelFun = i,
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showByHtml = function(t, e, a, i, n, s) {
            void 0 === t && (t = ""),
                void 0 === e && (e = ""),
                void 0 === a && (a = null),
                void 0 === i && (i = null),
                "" != t ? this.titleTxt.text = t : this.titleTxt.text = "提示",
                n && (this.okBtn.labelDisplay.text = n),
                s && (this.cancelBtn.labelDisplay.text = s),
                this.txtContent.textFlow = (new egret.HtmlTextParser).parser(e),
                this.okFun = a,
                this.cancelFun = i,
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showOnlineTime = function(t, e, a, i, n, s, r, o) {
            void 0 === t && (t = ""),
                void 0 === e && (e = ""),
                void 0 === a && (a = null),
                void 0 === i && (i = null),
                void 0 === r && (r = !0),
                void 0 === o && (o = !0),
                "" != t ? this.titleTxt.text = t : this.titleTxt.text = "提示",
                n && (this.okBtn.labelDisplay.text = n),
                s && (this.cancelBtn.labelDisplay.text = s),
                this.txtContent.textFlow = (new egret.HtmlTextParser).parser(e),
                this.okFun = a,
                this.cancelFun = i,
                this.okBtn.visible = r,
                this.cancelBtn.visible = o,
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showByLocalesHtml = function(t, e, a, i, n, s) {
            void 0 === t && (t = ""),
                void 0 === e && (e = ""),
                void 0 === a && (a = null),
                void 0 === i && (i = null),
                "" != t ? this.titleTxt.text = t : this.titleTxt.text = "提示",
                n && (this.okBtn.labelDisplay.text = n),
                s && (this.cancelBtn.labelDisplay.text = s),
                this.txtContent.textFlow = Utils.textFlowByStr(e),
                this.okFun = a,
                this.cancelFun = i,
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.hide = function() {
            this.okBtn.visible = !0,
                this.cancelBtn.visible = !0,
                this.titleTxt.text = "",
                this.txtContent.text = "",
                this.okFun = null,
                this.cancelFun = null,
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        i.btnClickHandler = function(t) {
            t.target == this.okBtn ? this.okFun ? this.okFun() : this.hide() : t.target == this.cancelBtn && (this.cancelFun ? this.cancelFun() : this.hide())
        },
        i.closeClick = function(t) {
            this.hide()
        },
        e
}(eui.Component);
