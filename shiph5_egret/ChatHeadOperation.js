
var captainsSellListItem = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/captainInfo03Skin.exml"
            /*tpa=resource/eui_skins/item/captainInfo03Skin.exml*/
            ,
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            if (t.prototype.dataChanged.call(this), this.data)
                if (this.data.lastOne) this.skinName = "ShipBuildingInformationBar02Skin",
                    SUI.setTextureAsync(this.bgImg, Path.uiUrl + "GetMore.jpg"),
                    this.txtDesc.text = "获取舰长",
                    this.bgImg.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.bgImg.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            GameData.funSwitch ? UserData.getInstance()._level >= 50 ? (WindowManager.getInstance().hideAll(), WindowManager.getInstance().show(WindowManager.windowType.ZhaoMuCaptain)) : Toast.launch("招募舰长功能50级开放") : (WindowManager.getInstance().hideAll(), WindowManager.getInstance().show(WindowManager.windowType.ZhaoMuCaptain))
                        },
                        this);
                else {
                    this.skinName = "resource/eui_skins/item/captainInfo03Skin.exml"
                        /*tpa=resource/eui_skins/item/captainInfo03Skin.exml*/
                        ,
                        this.checkBoxBtn.hasEventListener(egret.Event.CHANGE) || this.checkBoxBtn.addEventListener(egret.Event.CHANGE,
                            function() {
                                if (CaptainManager.getInstance().setHuishouNum(e.data.id, e.checkBoxBtn.selected), CaptainManager.getInstance().setListItemSelectedState(e.data.id, e.checkBoxBtn.selected), e.checkBoxBtn.selected) CaptainManager.getInstance().reductionCaptainsIds.push(e.data.id);
                                else {
                                    for (var t = [], a = CaptainManager.getInstance().reductionCaptainsIds.length - 1; a >= 0; --a) e.data.id != CaptainManager.getInstance().reductionCaptainsIds[a] && t.push(CaptainManager.getInstance().reductionCaptainsIds[a]);
                                    CaptainManager.getInstance().reductionCaptainsIds = t
                                }
                            },
                            this);
                    var a = this.headCompent.imgIcon;
                    SUI.setTextureAsync(a, this.data.pic),
                        a = this.headCompent.imgBg;
                    var i = QualitySystem.getCaptainSmallBack(Number(this.data.quality));
                    SUI.setTextureAsync(a, i),
                        a = this.headCompent.imgFrame,
                        i = QualitySystem.getCaptainFrame(Number(this.data.quality)),
                        SUI.setTextureAsync(a, i)
                }
        },
        e
}(eui.ItemRenderer);
