
var WindowQuickTanSuo = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ChouJiang_TSXZ_KuaiSuSkin.exml"
            /*tpa=resource/eui_skins/ChouJiang_TSXZ_KuaiSuSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.btnSearch1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
                this.btnSearch2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this),
                UserData.getInstance()._vip < 6 ? this.btnSearch1.enabled = !1 : this.v6Txt.text = "",
                UserData.getInstance()._vip < 10 ? this.btnSearch2.enabled = !1 : this.v10Txt.text = ""
        },
        i.clickHandler = function(t) {
            var e = t.currentTarget,
                a = 0;
            e == this.btnSearch1 ? a = 2 : e == this.btnSearch2 && (a = 5, WindowGaojiTanSuoReward.preGold = UserData.getInstance().getRes(TypeDefine.RES.Gold)),
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceSoul, {
                    type: a
                }, !1),
                this.closeHandler()
        },
        i.closeHandler = function(t) {
            void 0 === t && (t = null),
                this.close()
        },
        e
}(WindowBase);
