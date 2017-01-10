
var awardItemRenderer2 = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/item/LJZX_2_Skin.exml"
            /*tpa=resource/eui_skins/item/LJZX_2_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {
            this.girdArr = [this.reward1, this.reward2, this.reward3, this.reward4]
        },
        i.dataChanged = function() {
            var t = this.data.length;
            this.reward1.visible = !1,
                this.reward2.visible = !1,
                this.reward3.visible = !1,
                this.reward4.visible = !1;
            for (var e = 0; t > e; e++) {
                this.girdArr[e].visible = !0;
                var a = GlobalFunction.getDropDataByTypeAndId(this.data[e].type, this.data[e].id, this.data[e].count);
                SUI.setTextureAsync(this.girdArr[e].imgBg, QualitySystem.getItemSmallBack(a.quality)),
                    SUI.setTextureAsync(this.girdArr[e].imgIcon, a.icon),
                    this.girdArr[e].txtName.text = a.name,
                    this.girdArr[e].txtNum.text = a.count
            }
        },
        e
}(eui.ItemRenderer);
