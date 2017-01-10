
var EctypeTabItem = function(t) {
    function e(e) {
        t.call(this),
            this.iData = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/ZB_RiChangFuBen_1_Skin.exml"
            /*tpa=resource/eui_skins/item/ZB_RiChangFuBen_1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            Utils.getImgByUrl(Path.zhengBaURL + (0 == this.iData.id ? "haidao_icon_1" : "yunshuxian_icon_1") + ".jpg", this.icon),
                this.txtName.text = Locales.get("panel_pirate_text_title_" + (this.iData.id + 1));
            for (var t = 3 * this.iData.id,
                    a = 0,
                    i = 0; 3 > i; i++) {
                var n = 2e5 + 3 * (t + i) + 1,
                    s = i + 1 + t;
                a += StageData.getItemCount(n, s)
            }
            this.numImg.visible = a > 0,
                this.haveNum = a,
                e.SelectItem && (this.selectImg.visible = e.SelectItem == this, this.selectImg.visible ? this.numImg.visible = !this.selectImg.visible : this.showNumImg()),
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this)
        },
        i.showNumImg = function() {
            this.numImg.visible = this.haveNum > 0
        },
        i.clickHandler = function(t) {
            e.SelectItem && e.SelectItem.selectImg && (e.SelectItem.selectImg.visible = !1, e.SelectItem.showNumImg()),
                e.SelectItem = this,
                this.selectImg && (this.selectImg.visible = !0, this.numImg.visible = !1),
                this.iData.target.changeTab(this.iData.id + 1)
        },
        e
}(eui.Component);
