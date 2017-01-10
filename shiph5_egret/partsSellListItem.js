
var partsFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi01Skin.exml"
            /*tpa=resource/eui_skins/item/zhuyepeijianxinxi01Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowPartsManager_ClickShowOperate, this.showPanelEventHandler, this)
        },
        i.showPanelEventHandler = function(t) {
            t.parames != this.data.id && this.panelOperate && (GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowPartsManager_ClickShowOperate, this.showPanelEventHandler, this), this.height -= this.panelOperate.height, this.removeChild(this.panelOperate), this.panelOperate = void 0)
        },
        i.remould = function() {
            UserData.getInstance()._level >= 6 ? WindowManager.getInstance().show(WindowManager.windowType.PartMetals, {
                data: this.data.data,
                type: partMetalType.parts,
                index: 2
            }) : Toast.launch("该功能6级开放")
        },
        i.upgrade = function() {
            UserData.getInstance()._level >= 5 ? WindowManager.getInstance().show(WindowManager.windowType.PartMetals, {
                data: this.data.data,
                type: partMetalType.parts,
                index: 1
            }) : Toast.launch("该功能5级开放")
        },
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
                    this)) : (this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi01Skin.exml"
                    /*tpa=resource/eui_skins/item/zhuyepeijianxinxi01Skin.exml*/
                    , this.data.islocked ? this.iconLock.source = "GUI_Shipbuilding_Icon_locked_png" : this.iconLock.source = "GUI_Shipbuilding_Icon_open_png", this.data.isShowRedPoint ? this.btnMorePoint.visible = !0 : this.btnMorePoint.visible = !1, SUI.setTextureAsync(this.iconPic, this.data.pic), SUI.setTextureAsync(this.iconBg, Path.itemBackURL + "itemBack_item_sml_" + this.data.quality + ".png"), this.btnShowPanel.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (this.btnShowPanel.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            e.panelOperate ? (e.height -= e.panelOperate.height, e.removeChild(e.panelOperate), e.panelOperate = void 0) : (e.panelOperate = new eui.Component, e.panelOperate.skinName = "resource/eui_skins/item/xialacaidananiu02Skin.exml"
                                /*tpa=resource/eui_skins/item/xialacaidananiu02Skin.exml*/
                                , e.addChild(e.panelOperate), e.panelOperate.y = e.height, e.panelOperate.x = 0, e.panelOperate.btnRemould.addEventListener(egret.TouchEvent.TOUCH_TAP, e.remould, e), e.panelOperate.btnUpgrade.addEventListener(egret.TouchEvent.TOUCH_TAP, e.upgrade, e), e.height = e.height + e.panelOperate.height, GameEventDispatcher.getInstance().addEventListener(GameEvent.WindowPartsManager_ClickShowOperate, e.showPanelEventHandler, e), GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.WindowPartsManager_ClickShowOperate, e.data.id)))
                        },
                        this), this.iconPic.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                                data: e.data.data,
                                type: shipInfoWindowType.partsInfo
                            })
                        },
                        this), this.iconLock.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            RequestManager.GetInstance().RequestLockParts(e.data.id, !e.data.islocked)
                        },
                        this)), "" == this.data.euqipedShip ? this.txtEuqipedIn.visible = !1 : this.txtEuqipedIn.visible = !0))
        },
        e
}(eui.ItemRenderer);
