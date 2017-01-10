
var WindowPVP = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/ZB_JingJiChangSkin.exml"
            /*tpa=resource/eui_skins/ZB_JingJiChangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {},
        i.updataPanel = function() {
            this.txtMyRank.text = ArenaManager.instance.rankData.rank.toString();
            var t = new Date;
            t.setTime(UserData.getInstance().getServerTime());
            var e = 0;
            e = 22 - t.getHours() > 0 ? 3600 * (22 - t.getHours()) + 60 * (0 - t.getMinutes()) + (0 - t.getSeconds()) : 3600 * (46 - t.getHours()) + 60 * (0 - t.getMinutes()) + (0 - t.getSeconds()),
                this.leftRewardTime = e,
                this.leftRewardTime < 0 && (this.leftRewardTime = 86400 + this.leftRewardTime),
                this.txtRewardLeftTime.text = GlobalFunction.getHMSBySecond(this.leftRewardTime),
                this.txtScore.text = ArenaManager.instance.rankData.score.toString(),
                this.txtChallengeTime.text = ArenaManager.instance.rankData.remaincount.toString()
        },
        i.OnTick = function() {
            this.leftRewardTime && (this.leftRewardTime--, this.txtRewardLeftTime.text = GlobalFunction.getHMSBySecond(this.leftRewardTime))
        },
        i.updatePlayerList = function() {
            this.gpPlayers.removeChildren();
            var t = ArenaManager.instance.itemList,
                e = t.length,
                a = 301,
                i = (Math.ceil(e / 2) + 1) * a,
                n = new eui.Image;
            n.height = i,
                SUI.setTextureAsync(n, Path.uiUrl + "ZB_JJC_Bg.jpg"),
                n.fillMode = egret.BitmapFillMode.REPEAT,
                this.gpPlayers.addChild(n),
                80 == GuideManager.step && (e = 4, n.height = 800);
            for (var s = 0; e > s; ++s) {
                var r = t[s],
                    o = r.serverData,
                    l = new eui.Component;
                l.skinName = "resource/eui_skins/item/ZB_JingJiChang_2_Skin.exml"
                    /*tpa=resource/eui_skins/item/ZB_JingJiChang_2_Skin.exml*/
                    ,
                    s % 2 == 0 ? (l.x = 361, l.y = (Math.floor(s / 2) + 1) * a - 170) : (l.x = 39, l.y = (Math.floor(s / 2) + 1) * a - 40);
                var h = ArenanpcdataParser.GetInstance().getItemById(o.uid),
                    c = o.name ? o.name : "";
                h && (c = h.name_l);
                var d = o.modelid.length > 0 ? o.modelid[0] : 1,
                    g = ShipManager.getInstance().getShipPicByModelId(d);
                SUI.setTextureAsync(l.imgShip, g),
                    l.txtName.text = c,
                    l.txtLevel.text = o.level.toString() + "级",
                    l.txtRank.text = "第 " + o.rank.toString() + " 名",
                    SUI.setTextureAsync(l.imgHead, Path.GetHeadPicUrl(o.head ? o.head : 101, 1)),
                    l.txtBattlePoint.text = o.power.toString();
                var u = ArenaScoreDataLib.instance.getRankData(o.rank);
                if (o.uid == UserData.getInstance()._uid) {
                    l.enemy.visible = !1;
                    var p = VipParser.GetInstance().getItemById(UserData.getInstance()._vip).militaryHonourAdd;
                    p || (p = 0);
                    var m = void 0;
                    m = 0 != p ? u.honor + Math.ceil(u.honor * (p / 100)) : u.honor,
                        this.txtReward.text = Locales.get("curRankReward2", u.score, m),
                        l.txtName.textColor = 16776960
                } else l.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickPlayerItem, this),
                    l.userData = o,
                    l.self.visible = !1;
                l.xtjifen.text = "积分：" + u.score,
                    l.txtrongyu.text = "荣誉：" + u.honor,
                    this.gpPlayers.addChild(l)
            }
            this.gpPlayers.height = n.height
        },
        i.onClickPlayerItem = function(t) {
            81 == GuideManager.step && GuideManager.clearMask();
            var e = t.currentTarget,
                a = e.userData;
            if (a) {
                var i = ArenaManager.instance.rankData;
                if (a.rank > i.rank && a.rank > 10) Toast.launch(Locales.get("pvpchallengewarning"));
                else if (i.remaincount <= 0) {
                    var n = {};
                    n.title = Locales.get("使用挑战令可以增加挑战次数"),
                        n.itemId = 1121,
                        n.shopId = 22,
                        WindowManager.getInstance().show(WindowManager.windowType.ItemUse, n)
                } else ArenaManager.instance.setArena_value(e.txtName.text, a.power, a.camp, a.rank, i.rank, a.score, i.score, a.uid),
                    RequestManager.GetInstance().enterBattle(BattleType.BATTLE_TYPE_ARENA, a.uid, a.rank, i.rank)
            }
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                MainUI.instance.changeTopMode(topUIMode.simple),
                this.txtTitle.text = Locales.get("panel_active_game_arena_title"),
                this.txtRankList.text = Locales.get("panel_arena_btn_topten"),
                this.txtStore.text = Locales.get("panel_arena_charge"),
                this.txtCurRankReward.text = Locales.get("curRankReward"),
                this.txtRewardLeftTimeDesc.text = Locales.get("rewardLeftTime"),
                this.txtMyRankDesc.text = Locales.get("ui_globalCampBattle_ScoreList_myTitle"),
                this.txtScoreDesc.text = Locales.get("panel_arena_txt_comment_2"),
                this.txtChallengeTimeDesc.text = Locales.get("leftChallengeTimes"),
                this.tickTimer = new egret.Timer(1e3),
                this.tickTimer.addEventListener(egret.TimerEvent.TIMER, this.OnTick, this),
                this.tickTimer.start(),
                SUI.addClickEffect(this.btnStore),
                SUI.addClickEffect(this.btnRankList),
                SUI.addClickEffect(this.jiangLiImg),
                this.btnStore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnStore, this),
                this.btnRankList.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnRankList, this),
                this.jiangLiImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnReward, this),
                this.scvPlayers.bounces = !1,
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceEnterArena, null, !0),
                this.txtReward.text = Locales.get("curRankReward2", 0, 0),
                SUI.setTextureAsync(this.imgMyRankBg, Path.uiUrl + "Bg_ranking.png"),
                79 == GuideManager.step && GuideManager.nextStep()
        },
        i.onClickBtnReward = function(t) {
            QiJvTouAlert.getInstance().showPVPReward()
        },
        i.OnClickBtnStore = function(t) {
            ConfigData.preLoadDats(["arenaExchangeData"], [ArenaexchangedataParser],
                function() {
                    WindowManager.getInstance().show(WindowManager.windowType.PVPExchange)
                })
        },
        i.OnClickBtnRankList = function(t) {
            RankListManager.getInstance().showRankWin(15)
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {
            this.tickTimer && (this.tickTimer.stop(), this.tickTimer = void 0)
        },
        e
}(WindowBase);
