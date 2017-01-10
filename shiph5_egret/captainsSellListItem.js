
var captainsFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/captainInfo01Skin.exml"
            /*tpa=resource/eui_skins/item/captainInfo01Skin.exml*/
            ,
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowCaptainsManager_ClickShowOperate, this.showPanelEventHandler, this)
        },
        i.showPanelEventHandler = function(t) {
            t.parames != this.data.id && this.panelOperate && (GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowCaptainsManager_ClickShowOperate, this.showPanelEventHandler, this), this.height -= this.panelOperate.height, this.removeChild(this.panelOperate), this.panelOperate = void 0)
        },
        i.remould = function() {
            WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                data: this.data,
                type: OperateType.captain,
                index: 2
            })
        },
        i.upgrade = function() {
            WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                data: this.data,
                type: OperateType.captain,
                index: 1
            })
        },
        i.dataChanged = function() {
            var e = this;
            if (t.prototype.dataChanged.call(this), this.data)
                if (this.data.lastOne) this.skinName = "ShipBuildingInformationBar02Skin",
                    this.txtDesc.text = "获取舰长",
                    SUI.setTextureAsync(this.bgImg, Path.uiUrl + "GetMore.jpg"),
                    this.bgImg.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.bgImg.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            GameData.funSwitch ? UserData.getInstance()._level >= 50 ? (WindowManager.getInstance().hideAll(), WindowManager.getInstance().show(WindowManager.windowType.ZhaoMuCaptain)) : Toast.launch("招募舰长功能50级开放") : (WindowManager.getInstance().hideAll(), WindowManager.getInstance().show(WindowManager.windowType.ZhaoMuCaptain))
                        },
                        this);
                else {
                    this.skinName = "resource/eui_skins/item/captainInfo01Skin.exml"
                        /*tpa=resource/eui_skins/item/captainInfo01Skin.exml*/
                        ,
                        this.btnShowPanel.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (this.btnShowPanel.addEventListener(egret.TouchEvent.TOUCH_TAP,
                            function() {
                                e.panelOperate ? (e.height -= e.panelOperate.height, e.removeChild(e.panelOperate), e.panelOperate = void 0) : (e.panelOperate = new eui.Component, e.panelOperate.skinName = "resource/eui_skins/item/xialacaidananiu02Skin.exml"
                                    /*tpa=resource/eui_skins/item/xialacaidananiu02Skin.exml*/
                                    , e.addChild(e.panelOperate), e.panelOperate.y = e.height, e.panelOperate.x = 0, e.panelOperate.btnRemould.label = "晋升", 9 == e.data.medalType ? (e.panelOperate.btnRemould.enabled = !1, e.panelOperate.btnUpgrade.enabled = !1) : (e.panelOperate.btnRemould.enabled = !0, e.panelOperate.btnUpgrade.enabled = !0), e.panelOperate.btnRemould.addEventListener(egret.TouchEvent.TOUCH_TAP, e.remould, e), e.panelOperate.btnUpgrade.addEventListener(egret.TouchEvent.TOUCH_TAP, e.upgrade, e), e.height = e.height + e.panelOperate.height, GameEventDispatcher.getInstance().addEventListener(GameEvent.WindowSoulsManager_ClickShowOperate, e.showPanelEventHandler, e), GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.WindowSoulsManager_ClickShowOperate, e.data.id)))
                            },
                            this), this.iconLock.addEventListener(egret.TouchEvent.TOUCH_TAP,
                            function() {
                                RequestManager.GetInstance().requestLockCaptain(e.data.id, !e.data.islocked)
                            },
                            this), this.headCompent.addEventListener(egret.TouchEvent.TOUCH_TAP,
                            function() {
                                WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                                    data: e.data,
                                    type: shipInfoWindowType.captainInfo
                                })
                            },
                            this));
                    var a = this.headCompent.imgIcon;
                    SUI.setTextureAsync(a, this.data.pic),
                        a = this.headCompent.imgBg;
                    var i = QualitySystem.getCaptainSmallBack(Number(this.data.quality));
                    SUI.setTextureAsync(a, i),
                        a = this.headCompent.imgFrame,
                        i = QualitySystem.getCaptainFrame(Number(this.data.quality)),
                        SUI.setTextureAsync(a, i),
                        SUI.setTextureAsync(this.countryImg, this.data.country),
                        "" == this.data.euqipedShip ? this.txtEuqipedIn.visible = !1 : this.txtEuqipedIn.visible = !0,
                        this.data.isShowRedPoint ? this.btnMorePoint.visible = !0 : this.btnMorePoint.visible = !1
                }
        },
        e
}(eui.ItemRenderer);
