
var soulsFactoryListItem = function(t) {
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
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowSoulsManager_ClickShowOperate, this.showPanelEventHandler, this)
        },
        i.showPanelEventHandler = function(t) {
            t.parames != this.data.id && this.panelOperate && (GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowSoulsManager_ClickShowOperate, this.showPanelEventHandler, this), this.height -= this.panelOperate.height, this.removeChild(this.panelOperate), this.panelOperate = void 0)
        },
        i.remould = function() {
            WindowManager.getInstance().show(WindowManager.windowType.PartMetals, {
                data: this.data,
                type: partMetalType.metals,
                index: 2
            })
        },
        i.upgrade = function() {
            WindowManager.getInstance().show(WindowManager.windowType.PartMetals, {
                data: this.data,
                type: partMetalType.metals,
                index: 1
            })
        },
        i.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
                this.data && (this.data.lastOne ? (this.skinName = "ShipBuildingInformationBar02Skin", this.txtDesc.text = "获取勋章", SUI.setTextureAsync(this.bgImg, Path.uiUrl + "GetMore.jpg"), this.bgImg.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.bgImg.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        WindowManager.getInstance().hideAll(),
                            WindowManager.getInstance().show(WindowManager.windowType.tansuo)
                    },
                    this)) : (this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi01Skin.exml"
                    /*tpa=resource/eui_skins/item/zhuyepeijianxinxi01Skin.exml*/
                    , SUI.setTextureAsync(this.iconPic, this.data.pic), SUI.setTextureAsync(this.iconBg, Path.itemBackURL + "itemBack_item_sml_" + this.data.quality + ".png"), this.data.islocked ? this.iconLock.source = "GUI_Shipbuilding_Icon_locked_png" : this.iconLock.source = "GUI_Shipbuilding_Icon_open_png", this.data.isShowRedPoint ? this.btnMorePoint.visible = !0 : this.btnMorePoint.visible = !1, this.btnShowPanel.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (this.btnShowPanel.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            e.panelOperate ? (e.height -= e.panelOperate.height, e.removeChild(e.panelOperate), e.panelOperate = void 0) : (e.panelOperate = new eui.Component, e.panelOperate.skinName = "resource/eui_skins/item/xialacaidananiu02Skin.exml"
                                /*tpa=resource/eui_skins/item/xialacaidananiu02Skin.exml*/
                                , e.addChild(e.panelOperate), e.panelOperate.y = e.height, e.panelOperate.x = 0, 9 == e.data.medalType ? (e.panelOperate.btnRemould.enabled = !1, e.panelOperate.btnUpgrade.enabled = !1) : (e.panelOperate.btnRemould.enabled = !0, e.panelOperate.btnUpgrade.enabled = !0), e.panelOperate.btnRemould.addEventListener(egret.TouchEvent.TOUCH_TAP, e.remould, e), e.panelOperate.btnUpgrade.addEventListener(egret.TouchEvent.TOUCH_TAP, e.upgrade, e), e.height = e.height + e.panelOperate.height, GameEventDispatcher.getInstance().addEventListener(GameEvent.WindowSoulsManager_ClickShowOperate, e.showPanelEventHandler, e), GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.WindowSoulsManager_ClickShowOperate, e.data.id)))
                        },
                        this), this.iconPic.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                                data: e.data,
                                type: shipInfoWindowType.soulInfo
                            })
                        },
                        this), this.iconLock.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            RequestManager.GetInstance().requestLockSoul(e.data.id, !e.data.islocked)
                        },
                        this)), "" == this.data.euqipedShip ? this.txtEuqipedIn.visible = !1 : this.txtEuqipedIn.visible = !0))
        },
        e
}(eui.ItemRenderer);
