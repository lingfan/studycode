
var soulsReduceFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi02Skin.exml"
            /*tpa=resource/eui_skins/item/zhuyepeijianxinxi02Skin.exml*/
            ,
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
                this.data && (this.data.lastOne ? (this.skinName = "ShipBuildingInformationBar02Skin", this.txtDesc.text = "获取勋章", SUI.setTextureAsync(this.bgImg, Path.uiUrl + "GetMore.jpg"), this.bgImg.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.bgImg.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        WindowManager.getInstance().hideAll(),
                            WindowManager.getInstance().show(WindowManager.windowType.tansuo)
                    },
                    this)) : (this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi02Skin.exml"
                    /*tpa=resource/eui_skins/item/zhuyepeijianxinxi02Skin.exml*/
                    , SUI.setTextureAsync(this.iconPic, this.data.pic), SUI.setTextureAsync(this.iconBg, Path.itemBackURL + "itemBack_item_sml_" + this.data.quality + ".png"), this.reduceBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (this.reduceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            RetiredAlert.getInstance().showSoulHuanYuan(e.data)
                        },
                        this), this.iconPic.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                                data: e.data,
                                type: shipInfoWindowType.soulInfo
                            })
                        },
                        this))))
        },
        e
}(eui.ItemRenderer);
