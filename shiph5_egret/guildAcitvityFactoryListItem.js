
var rewardItem = function(t) {
    function e(e) {
        t.call(this),
            this.iData = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/components/itemMedalSkin.exml"
            /*tpa=resource/eui_skins/components/itemMedalSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this.iData,
                e = ConfigData.getDataByKey("medalData", t);
            Utils.getImgByUrl(QualitySystem.getItemSmallBack(e.quality), this.imgBg),
                Utils.getImgByUrl(Path.soulIconURL + "Medal_" + e.id + "_i.png", this.imgIcon),
                this.txtName.text = MedaldataParser.GetInstance().getItemById(t).name_l,
                this.txtName.textColor = QualitySystem.getColorByQuality(e.quality)
        },
        e
}(eui.Component);
