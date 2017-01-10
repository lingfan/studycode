
var shipFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/ShipBuildingInformationBarSkin.exml"
            /*tpa=resource/eui_skins/item/ShipBuildingInformationBarSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {
            this._particle && this._particle.destroy()
        },
        i.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
                this.data && (this._particle && this._particle.destroy(), 105 == this.data.id && 66 == GuideManager.step && GuideManager.nextStep(), this.data.lastOne ? (this.skinName = "ShipBuildingInformationBar02Skin", SUI.setTextureAsync(this.bgImg, Path.uiUrl + "GetMore.jpg"), this.bgImg.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.bgImg.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        GameData.skipShipGuide ? Toast.launch("此功能暂未开放，敬请期待!") : (WindowManager.getInstance().hideAll(), WindowShop.CURR_PAGE = WindowShop.PAPER_INDEX, WindowManager.getInstance().show(WindowManager.windowType.Shop))
                    },
                    this)) : (this.skinName = "resource/eui_skins/item/ShipBuildingInformationBarSkin.exml"
                    /*tpa=resource/eui_skins/item/ShipBuildingInformationBarSkin.exml*/
                    , this.data.isLock ? this.iconLock.source = "GUI_Shipbuilding_Icon_locked_png" : this.iconLock.source = "GUI_Shipbuilding_Icon_open_png", this.data.own ? (this.isOwned.visible = !0, this.btnBuild.visible = !1, this.txtPrice.visible = !1, this.iconPrice.visible = !1, this._particle && this._particle.destroy()) : (this.isOwned.visible = !1, this.btnBuild.visible = !0, this.txtPrice.visible = !0, this.iconPrice.visible = !0, this.data.qualityNum >= 4 ? this._particle = new ParticleDisplayObj(this.iconPicGroup, ParticleType.TrailingLight, ShapeType.Rectangle) : this._particle && this._particle.destroy()), this.txtName.textColor = QualitySystem.getColorByQuality(this.data.qualityNum), this.btnBuild.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (this.btnBuild.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            e.data.isLock || (UserData.getInstance().getRes(TypeDefine.RES.Gold) >= 1e3 ? (MakeShipAlert.getInstance().showMakeShip(e.data), 67 == GuideManager.step && GuideManager.nextStep()) : (Toast.launch("金币不足"), UserData.getInstance()._level >= 9 && (WindowManager.getInstance().show(WindowManager.windowType.BuJi), UserData.getInstance().sendDetailMessage())))
                        },
                        this), this.iconPic.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                                data: {
                                    shipid: e.data.shipid
                                },
                                type: shipInfoWindowType.preview
                            })
                        },
                        this), this.iconLock.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            RequestManager.GetInstance().RequestLockPaper(e.data.id, !e.data.isLock);
                            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.ShipFactory);
                            t && t.setPos()
                        },
                        this)), SUI.setTextureAsync(this.bg, this.data.qualityBg), SUI.setTextureAsync(this.iconPic, this.data.icon), SUI.setTextureAsync(this.typeIcon, this.data.typeIcon)))
        },
        e
}(eui.ItemRenderer);
