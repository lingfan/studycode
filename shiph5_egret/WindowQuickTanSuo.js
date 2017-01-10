
var WindowPVPExchangeConfirm = function(t) {
    function e() {
        t.call(this, !0),
            this.curNum = 1,
            this.itemCost = 0,
            this.totalPoint = 0,
            this.skinName = "resource/eui_skins/ZB_JingJiChang_DuiHuan_TanKuangSkin.exml"
            /*tpa=resource/eui_skins/ZB_JingJiChang_DuiHuan_TanKuangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this.itemData = t,
                this.itemCost = t.money,
                this.totalPoint = t.totalMoney,
                this.getLimitCountFunc = t.getLimitCountFunc,
                this.txtSelfPoints.text = this.totalPoint.toString(),
                this.onConfirm = t.onConfirm,
                this.addItemCnt(0)
        },
        i.init = function() {
            this.btnAddOne.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnAddOne, this),
                this.btnAddTen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnAddTen, this),
                this.btnCutOne.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnCutOne, this),
                this.btnCutTen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnCutTen, this),
                this.btnBuyConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnBuyConfirm, this),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this)
        },
        i.addItemCnt = function(t) {
            t > 0 ? this.itemData.timeslimit < 0 ? (this.curNum + t) * this.itemCost <= this.totalPoint ? (this.curNum += t, this.txtNum.text = this.curNum.toString(), this.txtTotlePrice.text = (this.curNum * this.itemCost).toString()) : (Log.logZDY("积分不足"), Toast.launch(Locales.get("panel_DHtrade_wind_1"), 16777215)) : this.curNum + t <= this.getLimitCountFunc(this.itemData.id) ? (this.curNum + t) * this.itemCost <= this.totalPoint ? (this.curNum += t, this.txtNum.text = this.curNum.toString(), this.txtTotlePrice.text = (this.curNum * this.itemCost).toString()) : (Log.logZDY("积分不足"), Toast.launch(Locales.get("panel_DHtrade_wind_1"), 16777215)) : (Log.logZDY("已经达到当日购买数量限制"), Toast.launch(Locales.get("panel_DHtrade_wind_2"), 16777215)) : (this.curNum += t, this.curNum <= 0 && (this.curNum = 1), this.txtNum.text = this.curNum.toString(), this.txtTotlePrice.text = (this.curNum * this.itemCost).toString()),
                this.btnCutOne.visible = this.curNum >= 1,
                this.btnCutTen.visible = this.curNum >= 10
        },
        i.OnClickBtnAddOne = function(t) {
            this.addItemCnt(1)
        },
        i.OnClickBtnAddTen = function(t) {
            this.addItemCnt(10)
        },
        i.OnClickBtnCutOne = function(t) {
            this.addItemCnt(-1)
        },
        i.OnClickBtnCutTen = function(t) {
            this.addItemCnt(-10)
        },
        i.OnClickBtnBuyConfirm = function(t) {
            this.curNum > 0 && this.onConfirm && this.onConfirm(this.itemData.id, this.curNum),
                this.close()
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {},
        e
}(WindowBase);
