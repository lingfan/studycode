
var WindowOilRefining = function(t) {
    function e() {
        t.call(this, !0),
            this.curBuyNum = 1,
            this.curCostMoney = -1,
            this.curGetOil = 25,
            this.skinName = "resource/eui_skins/goumaiyuanyou.exml"
            /*tpa=resource/eui_skins/goumaiyuanyou.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            this.titleTxt.text = "购买原油",
                this.infoTxt0.text = "",
                this.infoTxt1.text = "VIP等级越高，可购买次数越多，每日0点重置该次数。",
                this.infoTxt2.text = "剩余次数：",
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.buyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                UserData.getInstance().addEventListener(GameEvent.UserData_Update, this.updateUserInfo, this),
                BuyOilData.getInstance().getData(function() {
                    t.update()
                })
        },
        i.update = function() {
            var t = BuyOilData.getInstance().dataList;
            if (t) {
                this.curBuyNum = UserData.getInstance().getBuyOilCount() + 1;
                for (var e in t) t[e].count == this.curBuyNum && (this.curCostMoney = t[e].costCash);
                this.infoTxt0.textFlow = (new egret.HtmlTextParser).parser("消耗<font color='#00ff00'>" + this.curCostMoney + "</font>钻石购买<font color='#00ff00'>25</font>点原油");
                var a = VipParser.GetInstance().getItemById(UserData.getInstance()._vip).dayBuyOilCnt - this.curBuyNum + 1;
                a > 0 ? this.infoTxt2.textFlow = (new egret.HtmlTextParser).parser("剩余购买次数：<font color='#00ff00'>" + a + "</font>") : this.infoTxt2.textFlow = (new egret.HtmlTextParser).parser("<font color='#ff0000'>剩余购买次数：0</font>"),
                    HomeUI.instance.setOliRedPointState()
            }
        },
        i.updateUserInfo = function() {
            this.update()
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.closeBtn:
                    WindowManager.getInstance().hide(WindowManager.windowType.OilRefining);
                    break;
                case this.cancelBtn:
                    WindowManager.getInstance().hide(WindowManager.windowType.OilRefining);
                    break;
                case this.buyBtn:
                    if (UserData.getInstance().getRes(TypeDefine.RES.Diamond) < this.curCostMoney) return Toast.launch(Locales.get("ui_campBattle_buyError3")),
                        void WindowManager.getInstance().show(WindowManager.windowType.Recharge);
                    var e = Transport.getPkg(ProtocolMgr.ID_DceBuyOil);
                    Transport.instance.send(e)
            }
        },
        i.clear = function() {
            UserData.getInstance().removeEventListener(GameEvent.UserData_Update, this.updateUserInfo, this)
        },
        e
}(WindowBase);
