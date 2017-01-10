
var ItemTaskReward = function(t) {
    function e(e) {
        t.call(this),
            this.iData = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/components/itemCommon3Skin.exml"
            /*tpa=resource/eui_skins/components/itemCommon3Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = GlobalFunction.getDropDataByTypeAndId(this.iData.type, this.iData.item);
            this.txtName.text = t.name,
                this.txtNum.text = Utils.rnum(this.iData.count),
                Utils.getImgByUrl(QualitySystem.getItemSmallBack(t.quality || 1), this.imgBg),
                Utils.getImgByUrl(t.icon, this.imgIcon)
        },
        e
}(eui.Component);
