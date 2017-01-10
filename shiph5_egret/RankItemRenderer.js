
var WindowRankList = function(t) {
    function e() {
        t.call(this, !0),
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/PaiHangBangSkin.exml"
            /*tpa=resource/eui_skins/PaiHangBangSkin.exml*/
    }
    __extends(e, t);
    var a = __define,
        i = e,
        n = i.prototype;
    return a(n, "curCampType",
            function() {
                return this._curCampType
            },
            function(t) {
                this._curCampType = t;
                for (var e = [], a = 1; 3 >= a; ++a) {
                    var i = this._curCampType == a;
                    e.push({
                        name: Locales.get("panel_personinf_txt_camp_" + a),
                        camp: a,
                        state: i
                    })
                }
                this.listTitle.dataProvider = new eui.ArrayCollection(e)
            }),
        n.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        WindowManager.getInstance().hide(WindowManager.windowType.RankList)
                    },
                    this),
                this.initTitle(),
                this.scrolllerTotle.viewport = this.listTotle,
                this.scrolllerSingle.viewport = this.listSingle,
                this.grpTotle.visible = !1,
                this.grpSingle.visible = !0,
                this.txtSelfRanking.text = "我的排名：",
                this.txtScore.text = ""
        },
        n.setData = function(t) {
            0 == t.type ? (this.grpTotle.visible = !0, this.grpSingle.visible = !1, this.curList = this.listTotle, this.curRankType = t.type2, RankListManager.getInstance().sendListMsg(t.type2)) : 7 == t.type ? (this.curCampType = UserData.getInstance().getCamp(), this.grpTotle.visible = !0, this.grpSingle.visible = !1, this.curList = this.listTotle, this.curRankType = t.type, RankListManager.getInstance().sendListMsg(t.type)) : (this.grpTotle.visible = !1, this.grpSingle.visible = !0, this.curList = this.listSingle, this.curRankType = t.type, RankListManager.getInstance().sendListMsg(t.type))
        },
        n.updatePaper = function() {
            var t = new RankListData,
                e = [];
            switch (this.curRankType) {
                case 1:
                    t = RankListManager.getInstance().getDefendOilList(),
                        this.txtSelfRanking.text = "当前排名:" + t.myRank,
                        this.txtScore.text = "抵抗波数:" + t.myScore,
                        this.txtScore.x = this.imgBG.width - (this.txtScore.textWidth + 10),
                        this.imgPveStar.source = "";
                    break;
                case 2:
                    t = RankListManager.getInstance().getBattleOrdinary(),
                        this.txtSelfRanking.text = "当前排名:" + t.myRank,
                        this.txtScore.text = "副本进度:" + t.myScore,
                        this.imgPveStar.source = RES.getRes("iconyinxing_png"),
                        this.txtScore.x = this.imgPveStar.x - (this.txtScore.textWidth + 5);
                    break;
                case 3:
                    t = RankListManager.getInstance().getBattleSpecial(),
                        this.txtSelfRanking.text = "当前排名:" + t.myRank,
                        this.txtScore.text = "副本进度：" + t.myScore,
                        this.imgPveStar.source = RES.getRes("iconjinxing_png"),
                        this.txtScore.x = this.imgPveStar.x - (this.txtScore.textWidth + 5);
                    break;
                case 11:
                    t = RankListManager.getInstance().getWudijianduiList(),
                        this.txtSelfRanking.text = t.myRank ? "当前排名:" + t.myRank : "当前排名:",
                        this.txtScore.text = t.myScore ? "我的伤害：" + t.myScore : "我的伤害：",
                        this.txtScore.x = this.imgBG.width - (this.txtScore.textWidth + 10),
                        this.imgPveStar.source = "";
                    break;
                case 13:
                    t = RankListManager.getInstance().getLevelList(),
                        this.txtSelfRanking.text = "当前排名:" + t.myRank,
                        this.txtScore.text = "等级:" + t.myScore,
                        this.txtScore.x = this.imgBG.width - (this.txtScore.textWidth + 10),
                        this.imgPveStar.source = "";
                    break;
                case 14:
                    t = RankListManager.getInstance().getPowerList(),
                        this.txtSelfRanking.text = "当前排名:" + t.myRank,
                        this.txtScore.text = "战斗力:" + t.myScore,
                        this.txtScore.x = this.imgBG.width - (this.txtScore.textWidth + 10),
                        this.imgPveStar.source = "";
                    break;
                case 15:
                    t = RankListManager.getInstance().getArenaList(),
                        this.txtSelfRanking.text = "当前排名:" + t.myRank,
                        this.txtScore.text = "当前积分:" + t.myScore,
                        this.txtScore.x = this.imgBG.width - (this.txtScore.textWidth + 10),
                        this.imgPveStar.source = "";
                    break;
                case 16:
                    t = RankListManager.getInstance().getGuildList(),
                        this.txtSelfRanking.text = t.myRank ? "我的军团排名:" + t.myRank : "我的军团排名:暂无排名",
                        this.txtScore.text = t.myScore ? "军团建设:" + t.myScore : "军团建设:0",
                        this.txtScore.x = this.imgBG.width - (this.txtScore.textWidth + 10),
                        this.imgPveStar.source = "";
                    break;
                case 7:
                    t = RankListManager.getInstance().getCampBattleList(this.curCampType),
                        this.txtSelfRanking.text = t.myRank ? Locales.get("ui_globalCampBattle_RewardPanel_rankTile", t.myRank) : "排名：未上榜",
                        this.txtScore.text = Locales.get("ui_globalCampBattle_RewardPanel_zhangongTile", t.myScore),
                        this.txtScore.x = this.imgBG.width - (this.txtScore.textWidth + 10),
                        this.imgPveStar.source = ""
            }
            for (var a in t.listData) {
                var i = {};
                if (i.type = this.curRankType, i.uid = t.listData[a].uid, i.name = t.listData[a].name, i.rank = t.listData[a].rank, i.level = t.listData[a].level, i.score = t.listData[a].score, i.head = t.listData[a].head, i.power = t.listData[a].power, i.viplevel = t.listData[a].viplevel, i.camp = t.listData[a].camp, i.guildname = t.listData[a].guildname, i.militaryrank = t.listData[a].militaryrank, i.dmg = t.listData[a].dmg, i.membercount = t.listData[a].membercount, i.allMembercount = t.listData[a].allMembercount, 15 == this.curRankType) {
                    var n = ArenanpcdataParser.GetInstance().getItemById(i.uid);
                    n && (i.name = n.name_l)
                }
                e.push(i)
            }
            this.curList.dataProvider = new eui.ArrayCollection(e),
                this.curList.itemRenderer = RankItemRenderer
        },
        n.setPos = function() {
            this.titlePos = this.scrollerTitle.viewport.scrollH
        },
        n.initTitle = function(t) {
            void 0 === t && (t = 0),
                this.scrollerTitle.viewport = this.listTitle;
            var e = [{
                    name: "战斗力",
                    type: 0,
                    type2: 14,
                    state: !1
                },
                {
                    name: "等级",
                    type: 0,
                    type2: 13,
                    state: !1
                },
                {
                    name: "竞技场",
                    type: 0,
                    type2: 15,
                    state: !1
                },
                {
                    name: "军团",
                    type: 0,
                    type2: 16,
                    state: !1
                },
                {
                    name: "守卫油田",
                    type: 0,
                    type2: 1,
                    state: !1
                },
                {
                    name: "普通战役",
                    type: 0,
                    type2: 2,
                    state: !1
                },
                {
                    name: "精英战役",
                    type: 0,
                    type2: 3,
                    state: !1
                }
            ];
            for (var a in e) e[a].index = a,
                Number(a) == t ? e[a].state = !0 : e[a].state = !1;
            this.listTitle.dataProvider = new eui.ArrayCollection(e),
                this.listTitle.itemRenderer = RankTitleRenderer,
                this.scrollerTitle.viewport.validateNow(),
                this.scrollerTitle.viewport.scrollH = this.titlePos
        },
        n.closeClick = function(t) {
            WindowManager.getInstance().hide(WindowManager.windowType.RankList)
        },
        e
}(WindowBase);
