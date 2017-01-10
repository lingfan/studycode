
var shipFactoryComposeItem = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/ShipBuildingPaperPieceItemSkin.exml"
            /*tpa=resource/eui_skins/item/ShipBuildingPaperPieceItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {},
        i.dataChanged = function() {
            var t = this;
            this.data && (this.data.id = this.data.id, this.data.complete ? (this.imgComplete.source = "tongyong_lvkuang_png", this.txtHas.text = "收集完成", this.txtHas.textColor = 65280) : (this.imgComplete.source = "tongyong_hongkuang_png", this.txtHas.text = "收集不足", this.txtHas.textColor = 16711680), this.data.own ? this.isOwned.visible = !0 : this.isOwned.visible = !1, this.txtName.textColor = QualitySystem.getColorByQuality(this.data.qualityNum), SUI.setTextureAsync(this.qualityBg, this.data.qualityBg), SUI.setTextureAsync(this.iconPic, this.data.icon), SUI.setTextureAsync(this.typeIcon, this.data.typeIcon), this.iconPic.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.iconPic.addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                        data: {
                            shipid: t.data.shipid
                        },
                        type: shipInfoWindowType.preview
                    })
                },
                this), this.imgComplete.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.imgComplete.addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    ShipManager.getInstance().sendChargePaper(t.data.id, !1)
                },
                this))
        },
        e
}(eui.ItemRenderer);
