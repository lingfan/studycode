
var soulsSellListItem = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi03Skin.exml"
            /*tpa=resource/eui_skins/item/zhuyepeijianxinxi03Skin.exml*/
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
                        MainUI.instance.setBottomVisible(!0),
                            WindowManager.getInstance().hideAll(),
                            WindowManager.getInstance().show(WindowManager.windowType.tansuo)
                    },
                    this)) : (this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi03Skin.exml"
                    /*tpa=resource/eui_skins/item/zhuyepeijianxinxi03Skin.exml*/
                    , SUI.setTextureAsync(this.iconPic, this.data.pic), SUI.setTextureAsync(this.iconBg, Path.itemBackURL + "itemBack_item_sml_" + this.data.quality + ".png"), this.checkBoxBtn.hasEventListener(egret.Event.CHANGE) || this.checkBoxBtn.addEventListener(egret.Event.CHANGE,
                        function() {
                            if (SoulManager.getInstance().setHuishouNum(e.data.id, e.checkBoxBtn.selected), SoulManager.getInstance().setListItemSelectedState(e.data.id, e.checkBoxBtn.selected), e.checkBoxBtn.selected) SoulManager.getInstance().reductionSoulsIds.push(e.data.id);
                            else {
                                for (var t = [], a = SoulManager.getInstance().reductionSoulsIds.length - 1; a >= 0; --a) console.log(SoulManager.getInstance().reductionSoulsIds[a]),
                                    e.data.id != SoulManager.getInstance().reductionSoulsIds[a] && t.push(SoulManager.getInstance().reductionSoulsIds[a]);
                                SoulManager.getInstance().reductionSoulsIds = t
                            }
                        },
                        this)))
        },
        e
}(eui.ItemRenderer);
