
var shipRecycleItem = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/zhuyejunjianInformationBar03Skin.exml"
            /*tpa=resource/eui_skins/item/zhuyejunjianInformationBar03Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {
            var e = this;
            t.prototype.createChildren.call(this),
                this.iconPic.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        var t = ShipManager.getInstance().getShipById(e.data.id);
                        WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                            data: t,
                            type: shipInfoWindowType.cultivate
                        })
                    },
                    this),
                this.btnAdvance.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        RetiredAlert.getInstance().show(e.data, RetiredType.STRONGRETIRED)
                    },
                    this),
                this.btnNormal.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        RetiredAlert.getInstance().show(e.data, RetiredType.NORAMLRETIRED)
                    },
                    this)
        },
        i.dataChanged = function() {
            SUI.setTextureAsync(this.bg, this.data.url),
                SUI.setTextureAsync(this.iconPic, this.data.pic),
                this.txtName.textColor = QualitySystem.getColorByQuality(this.data.qualityNum)
        },
        e
}(eui.ItemRenderer);
