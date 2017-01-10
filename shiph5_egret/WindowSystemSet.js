
var storeItem = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/cangkuxinxiSkin.exml"
            /*tpa=resource/eui_skins/item/cangkuxinxiSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {
            var e = this;
            t.prototype.createChildren.call(this),
                this.btnUse.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        1018 == e.data.id || 1014 == e.data.id ? e.data.id = 1101 : 1019 == e.data.id || 1015 == e.data.id ? e.data.id = 1102 : 1020 == e.data.id || 1016 == e.data.id ? e.data.id = 1103 : (1021 == e.data.id || 1017 == e.data.id) && (e.data.id = 1104),
                            ItemsManager.getInstance().bagitemUseById(e.data.id),
                            egret.log("click use:" + e.data.id)
                    },
                    this),
                this.btnFirst.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        ItemsManager.getInstance().bagitemUseById(e.data.id),
                            egret.log("click use:" + e.data.id)
                    },
                    this),
                this.btnSecond.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        ItemsManager.getInstance().bagitemUseById(e.data.id, 1),
                            egret.log("click use:" + e.data.id)
                    },
                    this)
        },
        i.dataChanged = function() {
            this.data && (this.data.canUse && !this.data.useTen ? (this.btnUse.visible = !0, this.btnFirst.visible = !1, this.btnSecond.visible = !1) : this.data.canUse && this.data.useTen ? (this.btnUse.visible = !1, this.btnFirst.visible = !0, this.btnSecond.visible = !0) : (this.btnUse.visible = !1, this.btnFirst.visible = !1, this.btnSecond.visible = !1), SUI.setTextureAsync(this.iconBg, "resource/assets/ui/ui_common/itemBack/itemBack_item_sml_" + this.data.quality + ".png"), SUI.setTextureAsync(this.icon, this.data.icon), this.txtName.textColor = QualitySystem.getColorByQuality(this.data.quality))
        },
        e
}(eui.ItemRenderer);
