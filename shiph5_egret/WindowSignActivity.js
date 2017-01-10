
var storeFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/shangcheng_storeSkin.exml"
            /*tpa=resource/eui_skins/item/shangcheng_storeSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            if (t.prototype.dataChanged.call(this), this.data) {
                "2" == this.data.costType && (this.btnBuy.icon.source = "GUI_Homepage_Icon_32_png", this.alertMsg = "钻石不足,是否前往充值?", this.hasCoinCount = UserData.getInstance().getRes(TypeDefine.RES.Diamond)),
                    this.btnBuy.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.btnBuy.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            console.log("购买道具"),
                                e.hasCoinCount >= Number(e.data.saleValue) ? ShopSpyAlert.getInstance().showBuyItemPage(e.data) : GameAlert.getInstance().show("提示", e.alertMsg,
                                    function() {
                                        GameAlert.getInstance().hide(),
                                            WindowManager.getInstance().show(WindowManager.windowType.Recharge, {
                                                type: 0
                                            })
                                    })
                        },
                        this),
                    this.txtName.textColor = QualitySystem.getColorByQuality(this.data.quality),
                    this.data.num > 0 ? this.txtNum.textColor = 65280 : this.txtNum.textColor = 10461087;
                var a = this.itemCompent.imgMedal;
                SUI.setTextureAsync(a, this.data.icon);
                var i = QualitySystem.getItemSmallBack(this.data.quality);
                a = this.itemCompent.imgBg,
                    SUI.setTextureAsync(a, i),
                    this.btnBuy.label = this.data.saleValue,
                    "-1" == this.data.countLimit ? this.txtBuyLimit.text = "" : "-2" == this.data.countLimit ? this.txtBuyLimit.text = "每个玩家累计仅能购买1个" : this.txtBuyLimit.text = "今日可购买" + (Number(this.data.countLimit) - this.data.hasBuyCount) + "个",
                    "-1" == this.data.reqLevel ? (this.txtBuyCondition.text = "", this.txtBuyCondition.visible = !1, this.canBuy.visible = !0) : (this.txtBuyCondition.text = "需要等级" + this.data.reqLevel + "级", UserData.getInstance().getPlayerLevel() >= Number(this.data.reqLevel) ? (this.txtBuyCondition.visible = !1, this.canBuy.visible = !0) : (this.txtBuyCondition.visible = !0, this.canBuy.visible = !1))
            }
        },
        e
}(eui.ItemRenderer);
