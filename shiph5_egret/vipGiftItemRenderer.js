
var RankItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/item/PaiHangBang_1_Skin.exml"
            /*tpa=resource/eui_skins/item/PaiHangBang_1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {
            this.btnViewFormat.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickView, this)
        },
        i.onClickView = function() {
            if (15 == this.data.type) {
                if (this.data.uid.length < 6) return void Toast.launch("无法查看该玩家阵容");
                var t = Transport.getPkg(ProtocolMgr.ID_DceScoutSoldier);
                t.uid = this.data.uid,
                    Transport.instance.send(t)
            }
        },
        i.dataChanged = function() {
            switch (this.grpGuild.visible = !1, this.grpNotGuild.visible = !1, this.grpBattlePoints.visible = !1, this.grpCommon.visible = !1, this.grpJingJiChang.visible = !1, this.grpPVE.visible = !1, this.grpCampBattle.visible = !1, this.data.type) {
                case 14:
                    this.grpGuild.visible = !1,
                        this.grpNotGuild.visible = !0,
                        this.grpBattlePoints.visible = !0,
                        this.grpCommon.visible = !1,
                        this.grpJingJiChang.visible = !1,
                        this.grpPVE.visible = !1,
                        this.txtBattlePoint.text = this.data.power;
                    break;
                case 13:
                    this.grpGuild.visible = !1,
                        this.grpNotGuild.visible = !0,
                        this.grpBattlePoints.visible = !1,
                        this.grpCommon.visible = !0,
                        this.grpJingJiChang.visible = !1,
                        this.grpPVE.visible = !1,
                        this.txtResult.text = this.data.level + "级";
                    break;
                case 15:
                    this.grpGuild.visible = !1,
                        this.grpNotGuild.visible = !0,
                        this.grpBattlePoints.visible = !1,
                        this.grpCommon.visible = !1,
                        this.grpJingJiChang.visible = !0,
                        this.grpPVE.visible = !1;
                    break;
                case 16:
                    this.grpGuild.visible = !0,
                        this.grpNotGuild.visible = !1,
                        this.grpBattlePoints.visible = !1,
                        this.grpCommon.visible = !1,
                        this.grpJingJiChang.visible = !1,
                        this.grpPVE.visible = !1;
                    break;
                case 1:
                    this.grpGuild.visible = !1,
                        this.grpNotGuild.visible = !0,
                        this.grpBattlePoints.visible = !1,
                        this.grpCommon.visible = !0,
                        this.grpJingJiChang.visible = !1,
                        this.grpPVE.visible = !1,
                        this.txtResult.text = this.data.score + "波";
                    break;
                case 2:
                    this.grpGuild.visible = !1,
                        this.grpNotGuild.visible = !0,
                        this.grpBattlePoints.visible = !1,
                        this.grpCommon.visible = !1,
                        this.grpJingJiChang.visible = !1,
                        this.grpPVE.visible = !0,
                        this.txtStarNum.text = this.data.score,
                        this.imgPveStar.source = RES.getRes("iconyinxing_png");
                    break;
                case 3:
                    this.grpGuild.visible = !1,
                        this.grpNotGuild.visible = !0,
                        this.grpBattlePoints.visible = !1,
                        this.grpCommon.visible = !1,
                        this.grpJingJiChang.visible = !1,
                        this.grpPVE.visible = !0,
                        this.txtStarNum.text = this.data.score,
                        this.imgPveStar.source = RES.getRes("iconjinxing_png");
                    break;
                case 7:
                    this.grpNotGuild.visible = !0,
                        this.grpCampBattle.visible = !0,
                        this.txtBattlePoint2.text = this.data.power.toString(),
                        this.txtPoint.text = "战功:" + this.data.score.toString();
                    break;
                case 11:
                    this.grpNotGuild.visible = !0,
                        this.grpCampBattle.visible = !0,
                        this.txtBattlePoint2.text = this.data.power.toString(),
                        this.txtPoint.text = "伤害:" + this.data.dmg.toString()
            }
            this.data.rank > 3 ? (this.imgBg.source = RES.getRes("panel_allGameRank_bg_small_4_png"), this.imgRanking.visible = !1, this.txtRanking.visible = !0, this.txtRanking.text = this.data.rank) : (this.imgBg.source = RES.getRes("panel_allGameRank_bg_small_" + this.data.rank + "_png"), this.imgRanking.visible = !0, this.txtRanking.visible = !1, this.imgRanking.source = RES.getRes(Path.resHeadUrl + "RankingList_" + this.data.rank + "_png")),
                this.imgHeadBg.source = RES.getRes(Path.resHeadUrl + "RankingList_headBG_" + this.data.camp + "_png"),
                16 == this.data.type ? (Utils.getImgByUrl(Path.guildUrl + "badge_" + this.data.head + ".png", this.imgHead), this.imgCamp1.source = Path.GetCampPicUrl(this.data.camp, 3), this.txtGuildMember.text = "成员:" + this.data.membercount + "/" + this.data.allMembercount, this.txtGuildLevel.text = this.data.level, this.txtGuildRes.text = this.data.score, "" != this.data.guildname ? this.txtGuildName.text = "[" + this.data.guildname + "]" : this.txtGuildName.text = "") : (Utils.getImgByUrl(Path.GetHeadPicUrl(this.data.head, 1), this.imgHead), this.txtLevel.text = this.data.level, this.imgMilir.source = MilitaryManager.GetInstance().getPicByRankLvl(this.data.militaryrank), this.txtName.text = this.data.name, this.imgCamp.source = Path.GetCampPicUrl(this.data.camp, 3), "" != this.data.guildname && null != this.data.guildname ? this.txtGuild.text = "[" + this.data.guildname + "]" : this.txtGuild.text = "")
        },
        e
}(eui.ItemRenderer);
