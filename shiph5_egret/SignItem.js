
var vipStoreFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/shangcheng_vipStoreSkin.exml"
            /*tpa=resource/eui_skins/item/shangcheng_vipStoreSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var t = this;
            if (this.data) {
                "2" == this.data.costType && (this.btnBuy.icon.source = "GUI_Homepage_Icon_32_png", this.alertMsg = "钻石不足,是否前往充值?", this.hasCoinCount = UserData.getInstance().getRes(TypeDefine.RES.Diamond)),
                    this.btnBuy.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.btnBuy.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            console.log("购买VIP礼包"),
                                t.hasCoinCount >= Number(t.data.saleValue) ? ShopManager.getInstance().sendBuy(Number(t.data.id), 1, "", t.data) : GameAlert.getInstance().show("提示", t.alertMsg,
                                    function() {
                                        GameAlert.getInstance().hide(),
                                            WindowManager.getInstance().show(WindowManager.windowType.Recharge, {
                                                type: 0
                                            })
                                    })
                        },
                        this),
                    this.btnBuy.label = this.data.saleValue;
                var e = this.itemCompent.imgMedal;
                SUI.setTextureAsync(e, this.data.icon);
                var a = QualitySystem.getItemSmallBack(this.data.quality);
                e = this.itemCompent.imgBg,
                    SUI.setTextureAsync(e, a)
            }
        },
        e
}(eui.ItemRenderer);
