
var WindowGaoJiTanSuo = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ChouJiang_TSXZ_GaoJiSkin.exml"
            /*tpa=resource/eui_skins/ChouJiang_TSXZ_GaoJiSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = 0,
                e = ItemsManager.getInstance().getItemById(1173);
            e && (t = e.count),
                this.txtItemDesc.text = Locales.get("DecSeniorPanel_txt_title") + t,
                this.btnSearch1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
                this.btnSearch2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
                this.btnSearch3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this);
            var a = UserData.getInstance().getRes(TypeDefine.RES.Diamond);
            50 > a && 1 > t && (this.btnSearch1.enabled = !1, this.txtCostItem1.textColor = 16711680, this.txtCostDiamond1.textColor = 16711680),
                500 > a && 10 > t && (this.btnSearch2.enabled = !1, this.txtCostItem2.textColor = 16711680, this.txtCostDiamond2.textColor = 16711680),
                2250 > a && 45 > t && (this.btnSearch3.enabled = !1, this.txtCostItem3.textColor = 16711680, this.txtCostDiamond3.textColor = 16711680),
                UserData.getInstance()._vip < 12 ? this.btnSearch3.enabled = !1 : this.v12Txt.text = ""
        },
        i.clickHandler = function(t) {
            var e = t.currentTarget,
                a = 0;
            e == this.btnSearch1 ? a = 3 : e == this.btnSearch2 ? (a = 4, WindowGaojiTanSuoReward.preGold = UserData.getInstance().getRes(TypeDefine.RES.Gold)) : e == this.btnSearch3 && (a = 6, WindowGaojiTanSuoReward.preGold = UserData.getInstance().getRes(TypeDefine.RES.Gold)),
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
