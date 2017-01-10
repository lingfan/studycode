
var shipManagerItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/zhuyezhanjianxinxi01Skin.exml"
            /*tpa=resource/eui_skins/item/zhuyezhanjianxinxi01Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowShipManager_ClickShowOperate, this.showPanelEventHandler, this)
        },
        i.showPanelEventHandler = function(t) {
            t.parames != this.data.id && this.panelOperate && (GameEventDispatcher.getInstance().removeEventListener(GameEvent.WindowShipManager_ClickShowOperate, this.showPanelEventHandler, this), this.height -= this.panelOperate.height, this.removeChild(this.panelOperate), this.panelOperate = void 0)
        },
        i.levelUp = function() {
            UserData.getInstance()._level >= 4 ? WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                data: this.data.shipPropData,
                type: OperateType.ship,
                index: 1
            }) : Toast.launch("该功能4级开放")
        },
        i.upgrade = function() {
            UserData.getInstance()._level >= 4 ? WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                data: this.data.shipPropData,
                type: OperateType.ship,
                index: 2
            }) : Toast.launch("该功能4级开放")
        },
        i.skill = function() {
            UserData.getInstance()._level >= 6 ? WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                data: this.data.shipPropData,
                type: OperateType.ship,
                index: 3
            }) : Toast.launch("该功能6级开放")
        },
        i.train = function() {
            UserData.getInstance()._level >= 15 ? WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                data: this.data.shipPropData,
                type: OperateType.ship,
                index: 4
            }) : Toast.launch("该功能15级开放")
        },
        i.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
                this.data && (this.data.lastOne ? (this.skinName = "resource/eui_skins/item/ShipBuildingInformationBar02Skin.exml"
                    /*tpa=resource/eui_skins/item/ShipBuildingInformationBar02Skin.exml*/
                    , this.panelOperate && (this.height -= this.panelOperate.height, this.removeChild(this.panelOperate), this.panelOperate = void 0), this.txtDesc.text = "建造战舰", SUI.setTextureAsync(this.bgImg, Path.uiUrl + "GetMore.jpg"), this.bgImg.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.bgImg.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            WindowManager.getInstance().hideAll();
                            var t = GameLayer.getInstance().pageLayer.getChildByName("HomeUI");
                            t.showBuildShipWindow()
                        },
                        this)) : (this.skinName = "resource/eui_skins/item/zhuyezhanjianxinxi01Skin.exml"
                    /*tpa=resource/eui_skins/item/zhuyezhanjianxinxi01Skin.exml*/
                    , this.data.isLock ? this.iconLock.source = "GUI_Shipbuilding_Icon_locked_png" : this.iconLock.source = "GUI_Shipbuilding_Icon_open_png", this.data.inTeam ? this.inTeamMark.visible = !0 : this.inTeamMark.visible = !1, this.data.isShowRedPoint ? this.btnMorePoint.visible = !0 : this.btnMorePoint.visible = !1, SUI.setTextureAsync(this.bg, this.data.url), SUI.setTextureAsync(this.iconPic, this.data.pic), this.btnShowPanel.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (this.btnShowPanel.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            e.panelOperate ? (e.height -= e.panelOperate.height, e.removeChild(e.panelOperate), e.panelOperate = void 0) : (e.panelOperate = new eui.Component, e.panelOperate.skinName = "resource/eui_skins/item/xialacaidananiu01Skin.exml"
                                /*tpa=resource/eui_skins/item/xialacaidananiu01Skin.exml*/
                                , e.addChild(e.panelOperate), e.panelOperate.y = e.height, e.panelOperate.btnLevelUp.addEventListener(egret.TouchEvent.TOUCH_TAP, e.levelUp, e), e.panelOperate.btnUpgrade.addEventListener(egret.TouchEvent.TOUCH_TAP, e.upgrade, e), e.panelOperate.btnSkill.addEventListener(egret.TouchEvent.TOUCH_TAP, e.skill, e), e.panelOperate.btnTrain.addEventListener(egret.TouchEvent.TOUCH_TAP, e.train, e), e.height = e.height + e.panelOperate.height, GameEventDispatcher.getInstance().addEventListener(GameEvent.WindowShipManager_ClickShowOperate, e.showPanelEventHandler, e), GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.WindowShipManager_ClickShowOperate, e.data.id)))
                        },
                        this), this.iconPic.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            var t = ShipManager.getInstance().getShipById(e.data.id);
                            WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                                data: t,
                                type: shipInfoWindowType.cultivate
                            })
                        },
                        this), this.iconLock.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            RequestManager.GetInstance().RequestLockShip(e.data.id, !e.data.isLock);
                            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.ShipManager);
                            t && t.setPos()
                        },
                        this)), this.txtName.textColor = QualitySystem.getColorByQuality(this.data.qualityNum)))
        },
        e
}(eui.ItemRenderer);
