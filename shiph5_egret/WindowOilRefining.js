
var guildRankListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/HuoDong_Bar_paihang1_Skin.exml"
            /*tpa=resource/eui_skins/item/HuoDong_Bar_paihang1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            t.prototype.dataChanged.call(this),
                this.data && (SUI.setTextureAsync(this.imgBg, Path.uiUrl + "Activity/Bar_huodong_2.jpg"), this.txtRanking.text = "第" + this.data.rank + "名", this.data.rank < 4 ? (this.txtRanking.visible = !1, this.imgRanking.visible = !0, SUI.setTextureAsync(this.imgRanking, Path.uiUrl + "RankingList/RankingList_" + this.data.rank + ".png")) : (this.txtRanking.visible = !0, this.imgRanking.visible = !1), this.setRewardItemData(this.data.items, this.reward1), this.setRewardItemData(this.data.leaderItems, this.reward3), this.data.guilddata ? (null == this.data.guilddata.level || void 0 == this.data.guilddata.level ? this.txtGuildLevel.text = "" : this.txtGuildLevel.text = this.data.guilddata.level + "级", null == this.data.guilddata.name || void 0 == this.data.guilddata.name ? this.txtGuildName.text = "" : this.txtGuildName.text = this.data.guilddata.name, null == this.data.guild_chief_name || void 0 == this.data.guild_chief_name ? this.txtCommander.text = "" : this.txtCommander.text = "司令:" + this.data.guild_chief_name, null == this.data.guilddata.medal || void 0 == this.data.guilddata.medal ? this.imgGuildIcon.visible = !1 : (this.imgGuildIcon.visible = !0, SUI.setTextureAsync(this.imgGuildIcon, Path.guildUrl + "badge_B_" + this.data.guilddata.medal + ".png")), null == this.data.guilddata.camp || void 0 == this.data.guilddata.camp ? this.imgCampBg.visible = !1 : (this.imgCampBg.visible = !0, this.imgCampBg.source = "RankingList_headBG_" + this.data.guilddata.camp + "_png")) : (this.txtGuildLevel.text = "", this.txtGuildName.text = "", this.txtCommander.text = "", this.imgRanking.visible = !1, this.imgCampBg.visible = !1, this.imgGuildIcon.visible = !1))
        },
        i.setRewardItemData = function(t, e) {
            if (null == t) return void(e.visible = !1);
            1 == t.length ? e.visible = !0 : 0 == t.length && (e.visible = !1);
            for (var a = 0; a < t.length; a++) {
                var i = GiftdataParser.GetInstance().getItemById(t[a].id),
                    n = GlobalFunction.getDropDataByTypeAndId(i.type, i.item, i.count);
                0 == a && (SUI.setTextureAsync(e.imgBg, QualitySystem.getItemSmallBack(n.quality)), SUI.setTextureAsync(e.imgIcon, n.icon), e.imgPieceFlag.visible = !1, e.txtName.text = n.name, void 0 == n.count ? e.txtNum.text = "" : e.txtNum.text = n.count + "", e.txtName.textColor = QualitySystem.getColorByQuality(n.quality), e.txtNum.textColor = QualitySystem.getColorByQuality(n.quality))
            }
        },
        e
}(eui.ItemRenderer);
