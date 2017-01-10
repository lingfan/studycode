
var partsReduceFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi02Skin.exml"
            /*tpa=resource/eui_skins/item/zhuyepeijianxinxi02Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
                this.data && (this.data.lastOne ? (this.skinName = "ShipBuildingInformationBar02Skin", this.txtDesc.text = "获取配件", SUI.setTextureAsync(this.bgImg, Path.uiUrl + "GetMore.jpg"), this.bgImg.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.bgImg.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        UserData.getInstance()._level >= 19 ? TiaoZhuanAlert.getInstance().show("", "挑战BOSS及精英关卡", "商城购买宝箱",
                            function() {
                                MainUI.instance.bottomUI.showPveByForce()
                            },
                            function() {
                                WindowManager.getInstance().hideAll(),
                                    GameData.skipShipGuide ? (WindowShop.PAPER_INDEX = 2, WindowShop.STORE_INDEX = 0, WindowShop.VIP_INDEX = 1, WindowShop.CAPTAIN_INDEX = 3, WindowShop.MEDAL_INDEX = 4, WindowShop.CURR_PAGE = WindowShop.STORE_INDEX) : WindowShop.CURR_PAGE = WindowShop.STORE_INDEX,
                                    MainUI.instance.bottomUI.showShopForce(WindowShop.CURR_PAGE)
                            }) : Toast.launch("19级开启此功能")
                    },
                    this)) : (this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi02Skin.exml"
                    /*tpa=resource/eui_skins/item/zhuyepeijianxinxi02Skin.exml*/
                    , SUI.setTextureAsync(this.iconPic, this.data.pic), SUI.setTextureAsync(this.iconBg, Path.itemBackURL + "itemBack_item_sml_" + this.data.quality + ".png"), this.reduceBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (this.reduceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            egret.log("发送还原配件消息"),
                                PartsManager.getInstance().sendReductionPartsInfo(e.data.id)
                        },
                        this), this.iconPic.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                                data: e.data.data,
                                type: shipInfoWindowType.partsInfo
                            })
                        },
                        this))))
        },
        e
}(eui.ItemRenderer);
