
var metalListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/zhuyepeijianxinxi03Skin.exml"
            /*tpa=resource/eui_skins/item/zhuyepeijianxinxi03Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
                this.data && (Utils.getImgByUrl(this.data.pic, this.iconPic), Utils.getImgByUrl(QualitySystem.getItemSmallBack(this.data.source.quality), this.iconBg), this.nameTxt.textColor = QualitySystem.getColorByQuality(this.data.source.quality), this.myParent = this.data.target, this.starIcon.visible = !1, this.checkBoxBtn.selected = this.data.selected, this.checkBoxBtn.hasEventListener(egret.Event.CHANGE) || this.checkBoxBtn.addEventListener(egret.Event.CHANGE,
                    function() {
                        e.data.selected = e.checkBoxBtn.selected,
                            5 == e.myParent.selectedNum && e.data.selected ? e.data.selected = e.checkBoxBtn.selected = !1 : e.data.selected ? (e.myParent.selectedList[e.data.id] = {
                                    id: e.data.soulId,
                                    pic: e.data.pic,
                                    quality: e.data.quality
                                },
                                e.myParent.selectedNum += 1, e.myParent.addExp += Number(e.data.exp)) : (delete e.myParent.selectedList[e.data.id], e.myParent.selectedNum -= 1, e.myParent.addExp -= Number(e.data.exp))
                    },
                    this))
        },
        e
}(eui.ItemRenderer);
