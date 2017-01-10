
var defenceOilRewardFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/ZB_ShouWeiYouTian_1_Skin.exml"
            /*tpa=resource/eui_skins/item/ZB_ShouWeiYouTian_1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            if (t.prototype.dataChanged.call(this), this.data)
                if (this.titleLabel.text = "守卫油田 第" + this.data.id + "波", this.goldLabel.text = this.data.gold + "", -1 == this.data.drop) this.item1.visible = !1,
                    this.item2.visible = !1,
                    this.item3.visible = !1;
                else {
                    this.item1.visible = !1,
                        this.item2.visible = !1,
                        this.item3.visible = !1;
                    var e = this.data.reward;
                    if (e)
                        for (var a = 0; a < e.length; a++)
                            if (1 == e[a].type) {
                                var i = ItemParser.GetInstance().getItemById(e[a].item);
                                0 == a ? (this.item1.visible = !0, this.item1.txtNum.text = e[a].count + "", this.item1.txtName.text = i.name_l, this.item1.txtName.textColor = QualitySystem.getColorByQuality(i.quality), SUI.setTextureAsync(this.item1.imgIcon, Path.itemIconURL + i.icon), SUI.setTextureAsync(this.item1.imgBg, QualitySystem.getItemSmallBack(i.quality))) : 1 == a ? (this.item2.visible = !0, this.item2.txtNum.text = e[a].count + "", this.item2.txtName.text = i.name_l, this.item2.txtName.textColor = QualitySystem.getColorByQuality(i.quality), SUI.setTextureAsync(this.item2.imgIcon, Path.itemIconURL + i.icon), SUI.setTextureAsync(this.item1.imgBg, QualitySystem.getItemSmallBack(i.quality))) : 2 == a && (this.item3.visible = !0, this.item3.txtNum.text = e[a].count + "", this.item3.txtName.text = i.name_l, this.item3.txtName.textColor = QualitySystem.getColorByQuality(i.quality), SUI.setTextureAsync(this.item3.imgIcon, Path.itemIconURL + i.icon), SUI.setTextureAsync(this.item1.imgBg, QualitySystem.getItemSmallBack(i.quality)))
                            } else if (5 == e[a].type) 0 == a ? (this.item1.visible = !0, this.item1.txtNum.text = e[a].count + "", this.item1.txtName.text = "科技点", this.item1.txtName.textColor = QualitySystem.getColorByQuality(1), SUI.setTextureAsync(this.item1.imgIcon, Path.itemIconURL + "science.png"), SUI.setTextureAsync(this.item1.imgBg, QualitySystem.getItemSmallBack(1))) : 1 == a ? (this.item2.visible = !0, this.item2.txtNum.text = e[a].count + "", this.item2.txtName.text = "科技点", this.item2.txtName.textColor = QualitySystem.getColorByQuality(1), SUI.setTextureAsync(this.item2.imgIcon, Path.itemIconURL + "science.png"), SUI.setTextureAsync(this.item2.imgBg, QualitySystem.getItemSmallBack(1))) : 2 == a && (this.item3.visible = !0, this.item3.txtNum.text = e[a].count + "", this.item3.txtName.text = "科技点", this.item3.txtName.textColor = QualitySystem.getColorByQuality(1), SUI.setTextureAsync(this.item3.imgIcon, Path.itemIconURL + "science.png"), SUI.setTextureAsync(this.item3.imgBg, QualitySystem.getItemSmallBack(1)));
                    else if (8 == e[a].type) {
                        var n = VirtualdataParser.GetInstance().getItemById(e[a].item);
                        0 == a ? (this.item1.visible = !0, this.item1.txtNum.text = n.value + "", this.item1.txtName.text = n.name_l, this.item1.txtName.textColor = QualitySystem.getColorByQuality(n.quality), SUI.setTextureAsync(this.item1.imgIcon, Path.itemIconURL + n.icon), SUI.setTextureAsync(this.item1.imgBg, QualitySystem.getItemSmallBack(n.quality))) : 1 == a ? (this.item2.visible = !0, this.item2.txtNum.text = n.value + "", this.item2.txtName.text = n.name_l, this.item2.txtName.textColor = QualitySystem.getColorByQuality(n.quality), SUI.setTextureAsync(this.item2.imgIcon, Path.itemIconURL + n.icon), SUI.setTextureAsync(this.item2.imgBg, QualitySystem.getItemSmallBack(n.quality))) : 2 == a && (this.item3.visible = !0, this.item3.txtNum.text = n.value + "", this.item3.txtName.text = n.name_l, this.item3.txtName.textColor = QualitySystem.getColorByQuality(n.quality), SUI.setTextureAsync(this.item3.imgIcon, Path.itemIconURL + n.icon), SUI.setTextureAsync(this.item3.imgBg, QualitySystem.getItemSmallBack(n.quality)))
                    }
                }
        },
        e
}(eui.ItemRenderer);
