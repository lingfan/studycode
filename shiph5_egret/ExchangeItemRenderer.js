
var EctypeItem = function(t) {
    function e(e) {
        t.call(this),
            this.iData = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/ZB_RiChangFuBen_2_Skin.exml"
            /*tpa=resource/eui_skins/item/ZB_RiChangFuBen_2_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = StageData.getItemCount(this.iData.id, this.iData.stageId),
                e = ConfigData.getDataByKey("stageSpecialData", this.iData.id),
                a = this.iData.stageId - 3 * Math.floor(this.iData.stageId / 4),
                i = 0,
                n = UserData.getInstance().getRes(TypeDefine.RES.Oil);
            t > 0 && UserData.getInstance()._level >= Number(e.reqStage) && (i = 1),
                Utils.getImgByUrl(Path.zhengBaURL + (this.iData.id > 200009 ? "yunshuxian_" : "haidao_") + a + "_" + i + ".jpg", this.imgBack),
                this.txtFlag.textFlow = Utils.textFlowByStr(Locales.get(0 == t ? "panel_active_game_defence_desc_4_0" : "panel_active_game_defence_desc_4", t)),
                this.txtName.text = Locales.get("panel_pirate_text_disciple_lv_" + a + (this.iData.id < 200009 ? "_1" : "_2")),
                this.txtDesc.text = e.costOil,
                UserData.getInstance()._level < Number(e.reqStage) ? (this.txtLimit.text = Locales.get("levelLimit", e.reqStage), this.txtFlag.visible = !1) : (this.txtLimit.text = "", this.txtFlag.visible = !0),
                n < Number(e.costOil) && (this.txtDesc.textColor = 16711680),
                this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clearHandler, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.HEGEMONY_NET, this.refreshHandler, this),
                i > 0 && this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this)
        },
        i.clickHandler = function(t) {
            var a = ConfigData.getDataByKey("stageSpecialData", this.iData.id),
                i = UserData.getInstance().getRes(TypeDefine.RES.Oil);
            i < Number(a.costOil) ? Toast.launch(Locales.get("battleResult_3")) : UserData.getInstance()._level < Number(a.reqStage) ? Toast.launch(Locales.get("panel_guard_biwu_signup_show_text_3") + "Lv" + a.reqStage) : (e.stageID = this.iData.stageId.toString(), WindowEctype.battleEctype(), 94 == GuideManager.step && GuideManager.nextStep())
        },
        i.clearHandler = function(t) {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.HEGEMONY_NET, this.refreshHandler, this)
        },
        i.refreshHandler = function(t) {
            var e = StageData.getItemCount(this.iData.id, this.iData.stageId);
            this.txtFlag.textFlow = Utils.textFlowByStr(Locales.get(0 == e ? "panel_active_game_defence_desc_4_0" : "panel_active_game_defence_desc_4", e))
        },
        e
}(eui.Component);
