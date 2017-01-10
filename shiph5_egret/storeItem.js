
var WindowStageCountBuy = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/goumaiyuanyou.exml"
            /*tpa=resource/eui_skins/goumaiyuanyou.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloseBtn, this),
                this.buyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBuyBtn, this),
                this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCancelBtn, this),
                this.cancelBtn.labelDisplay.text = Locales.get("alert_cancel"),
                this.buyBtn.labelDisplay.text = Locales.get("panel_activity_tuangou_text_17"),
                this.infoTxt1.text = Locales.get("zz_buyDesc"),
                this.titleTxt.text = Locales.get("panel_guard_biwu_refresh_show_text_4")
        },
        i.setData = function(t) {
            this.stageOpt = t;
            var e = t.baseData.resetCost[t.serverData.todaybuyCnt];
            this.infoTxt0.textFlow = Utils.textFlowByStr(Locales.get("zz_stageBuyDesc1", e));
            var a = t.baseData.resetCount - t.serverData.todaybuyCnt;
            this.infoTxt2.textFlow = Utils.textFlowByStr(Locales.get("zz_stageBuyDesc2", a))
        },
        i.OnClickCloseBtn = function(t) {
            this.close()
        },
        i.OnClickBuyBtn = function(t) {
            RequestManager.GetInstance().DResetStageCount(this.stageOpt.baseData.id),
                this.close()
        },
        i.OnClickCancelBtn = function(t) {
            this.close()
        },
        i.clear = function() {},
        e
}(WindowBase);
