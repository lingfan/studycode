
var partsSellListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi03Skin.exml"
            /*tpa=resource/eui_skins/item/zhuyepeijianxinxi03Skin.exml*/
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
                    this)) : (this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi03Skin.exml"
                    /*tpa=resource/eui_skins/item/zhuyepeijianxinxi03Skin.exml*/
                    , SUI.setTextureAsync(this.iconPic, this.data.pic), SUI.setTextureAsync(this.iconBg, Path.itemBackURL + "itemBack_item_sml_" + this.data.quality + ".png"), this.checkBoxBtn.hasEventListener(egret.Event.CHANGE) || this.checkBoxBtn.addEventListener(egret.Event.CHANGE,
                        function() {
                            if (PartsManager.getInstance().setHuishouNum(e.data.id, e.checkBoxBtn.selected), PartsManager.getInstance().setListItemSelectedState(e.data.id, e.checkBoxBtn.selected), e.checkBoxBtn.selected) PartsManager.getInstance().reductionPartsIds.push(e.data.id);
                            else {
                                for (var t = [], a = PartsManager.getInstance().reductionPartsIds.length - 1; a >= 0; --a) console.log(PartsManager.getInstance().reductionPartsIds[a]),
                                    e.data.id != PartsManager.getInstance().reductionPartsIds[a] && t.push(PartsManager.getInstance().reductionPartsIds[a]);
                                PartsManager.getInstance().reductionPartsIds = t
                            }
                        },
                        this)))
        },
        e
}(eui.ItemRenderer);
