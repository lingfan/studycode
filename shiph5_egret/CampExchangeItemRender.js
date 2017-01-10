
var BattleSweepItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/item/zhanyi_Bar4Skin.exml"
            /*tpa=resource/eui_skins/item/zhanyi_Bar4Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {
            this.txtDesc.text = Locales.get("zz_nodrops")
        },
        i.dataChanged = function() {
            if (this.txtResNum1.text = this.data.pkg.gold.toString(), this.txtResNum2.text = this.data.pkg.exp.toString(), this.data.pkg.droplist.droplist.length > 0) {
                for (var t = 0; 3 > t; ++t) {
                    var e = this["reward" + (t + 1)],
                        a = this.data.pkg.droplist.droplist[t];
                    if (a) {
                        e.visible = !0;
                        var i = GlobalFunction.getItemByData(a);
                        SUI.setItemIcon(e, i)
                    } else e.visible = !1
                }
                this.txtDesc.visible = !1,
                    this.gpItems.visible = !0
            } else this.txtDesc.visible = !0,
                this.gpItems.visible = !1;
            this.txtTimes.text = Locales.get("panel_sweep_result_title", this.data.index)
        },
        i.clear = function() {},
        e
}(eui.ItemRenderer);
