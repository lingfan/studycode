
var guildStoreFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/JunTuan_2_StoreBar_Skin.exml"
            /*tpa=resource/eui_skins/item/JunTuan_2_StoreBar_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            if (t.prototype.dataChanged.call(this), this.data) {
                this.btnBuy.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.btnBuy.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            GuildManager.getInstance().guildpoint >= Number(e.data.saleValue) ? ShopSpyAlert.getInstance().showBuyItemPage(e.data, !1) : Toast.launch("贡献点不足,无法购买")
                        },
                        this),
                    this.txtName.textColor = QualitySystem.getColorByQuality(this.data.quality),
                    this.data.num > 0 ? this.txtNum.textColor = 65280 : this.txtNum.textColor = 10461087;
                var a = this.itemCompent.imgMedal;
                SUI.setTextureAsync(a, this.data.icon);
                var i = QualitySystem.getItemSmallBack(this.data.quality);
                a = this.itemCompent.imgBg,
                    SUI.setTextureAsync(a, i),
                    this.btnBuy.label = this.data.saleValue + "贡献",
                    "-1" == this.data.countLimit ? this.txtBuyLimit.text = "" : "-2" == this.data.countLimit ? this.txtBuyLimit.text = "每个玩家累计仅能购买1个" : this.txtBuyLimit.text = "今日可购买" + (Number(this.data.countLimit) - this.data.hasBuyCount) + "个",
                    GuildManager.getInstance().level >= Number(this.data.reqVIPLevel) ? UserData.getInstance().getPlayerLevel() >= Number(this.data.reqLevel) ? (this.canBuy.visible = !0, this.canNotBuy.visible = !1) : (this.txtBuyCondition.text = "需要等级" + this.data.reqLevel + "级", this.canBuy.visible = !1, this.canNotBuy.visible = !0) : (this.txtBuyCondition.text = "军团" + this.data.reqVIPLevel + "级开启", this.canBuy.visible = !1, this.canNotBuy.visible = !0)
            }
        },
        e
}(eui.ItemRenderer);
