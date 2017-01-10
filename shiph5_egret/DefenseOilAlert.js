
var PlayerGuidePanel = function(t) {
    function e(e) {
        t.call(this),
            this.parames = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/NpcTalkingSkin.exml"
            /*tpa=resource/eui_skins/NpcTalkingSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            this.parames && (this.txtChat.textFlow = this.parames.txt),
                e.instance = this,
                this.bg.touchEnabled = !0,
                this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
                this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clearHandler, this),
                this.tickFrame = 0,
                this.tickId = GameTick.registerHandler(function() {
                        t.imgEye.visible = !1,
                            t.tickFrame++,
                            t.tickFrame > 7 && (t.tickFrame = 0, t.imgEye.visible = !0)
                    },
                    200)
        },
        i.clearHandler = function(t) {
            GameTick.removeHandler(this.tickId)
        },
        i.clickHandler = function(t) {
            this.parent && this.parent.removeChild(this),
                e.instance = null,
                101 == GuideManager.step || 107 == GuideManager.step ? GuideManager.clearMask() : GuideManager.nextStep()
        },
        e
}(eui.Component);
