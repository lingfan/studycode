
var playerRankListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/HuoDong_Bar_paihang_Skin.exml"
            /*tpa=resource/eui_skins/item/HuoDong_Bar_paihang_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            t.prototype.dataChanged.call(this),
                this.data && (SUI.setTextureAsync(this.imgBg, Path.uiUrl + "Activity/Bar_huodong_2.jpg"), this.txtRanking.text = "第" + this.data.rank + "名", this.data.rank < 4 ? (this.txtRanking.visible = !1, this.imgRanking.visible = !0, SUI.setTextureAsync(this.imgRanking, Path.uiUrl + "RankingList/RankingList_" + this.data.rank + ".png")) : (this.txtRanking.visible = !0, this.imgRanking.visible = !1), this.setRewardItemData(this.data.items), this.data.playerdata ? (null == this.data.playerdata.level || void 0 == this.data.playerdata.level ? this.txtLevel.text = "" : this.txtLevel.text = this.data.playerdata.level + "级", null == this.data.playerdata.name || void 0 == this.data.playerdata.name ? this.txtName.text = "" : this.txtName.text = this.data.playerdata.name, null == this.data.playerdata.power || void 0 == this.data.playerdata.power ? this.txtBattlePoint.text = "" : this.txtBattlePoint.text = "战斗力:" + this.data.playerdata.power, null == this.data.playerdata.camp || void 0 == this.data.playerdata.camp ? (this.imgHead.visible = !1, this.imgCampBg.visible = !1) : (this.imgHead.visible = !0, this.imgCampBg.visible = !0, SUI.setTextureAsync(this.imgHead, Path.headPicURL + "Picture-" + this.data.playerdata.camp + "-" + this.data.playerdata.head % 100 + ".png"), this.imgCampBg.source = "RankingList_headBG_" + this.data.playerdata.camp + "_png")) : (this.txtLevel.text = "", this.txtName.text = "", this.txtBattlePoint.text = "", this.imgRanking.visible = !1, this.imgHead.visible = !1, this.imgCampBg.visible = !1))
        },
        i.setRewardItemData = function(t) {
            if (null == t) return this.reward1.visible = !1,
                this.reward2.visible = !1,
                void(this.reward3.visible = !1);
            3 == t.length ? (this.reward1.visible = !0, this.reward2.visible = !0, this.reward3.visible = !0) : 2 == t.length ? (this.reward1.visible = !0, this.reward2.visible = !0, this.reward3.visible = !1) : 1 == t.length ? (this.reward1.visible = !0, this.reward2.visible = !1, this.reward3.visible = !1) : 0 == t.length && (this.reward1.visible = !1, this.reward2.visible = !1, this.reward3.visible = !1);
            for (var e = 0; e < t.length; e++) {
                var a = GiftdataParser.GetInstance().getItemById(t[e].id),
                    i = GlobalFunction.getDropDataByTypeAndId(a.type, a.item, a.count);
                0 == e ? (SUI.setTextureAsync(this.reward1.imgBg, QualitySystem.getItemSmallBack(i.quality)), SUI.setTextureAsync(this.reward1.imgIcon, i.icon), this.reward1.imgPieceFlag.visible = !1, this.reward1.txtName.text = i.name, void 0 == i.count ? this.reward1.txtNum.text = "" : this.reward1.txtNum.text = i.count + "", this.reward1.txtName.textColor = QualitySystem.getColorByQuality(i.quality), this.reward1.txtNum.textColor = QualitySystem.getColorByQuality(i.quality)) : 1 == e ? (SUI.setTextureAsync(this.reward2.imgBg, QualitySystem.getItemSmallBack(i.quality)), SUI.setTextureAsync(this.reward2.imgIcon, i.icon), this.reward2.imgPieceFlag.visible = !1, this.reward2.txtName.text = i.name, void 0 == i.count ? this.reward2.txtNum.text = "" : this.reward2.txtNum.text = i.count + "", this.reward2.txtName.textColor = QualitySystem.getColorByQuality(i.quality), this.reward2.txtNum.textColor = QualitySystem.getColorByQuality(i.quality)) : 2 == e && (SUI.setTextureAsync(this.reward3.imgBg, QualitySystem.getItemSmallBack(i.quality)), SUI.setTextureAsync(this.reward3.imgIcon, i.icon), this.reward3.imgPieceFlag.visible = !1, this.reward3.txtName.text = i.name, void 0 == i.count ? this.reward3.txtNum.text = "" : this.reward3.txtNum.text = i.count + "", this.reward3.txtName.textColor = QualitySystem.getColorByQuality(i.quality), this.reward3.txtNum.textColor = QualitySystem.getColorByQuality(i.quality))
            }
        },
        e
}(eui.ItemRenderer);
