
var WindowBattleResult = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ZhanDouJieSuanSkin.exml"
            /*tpa=resource/eui_skins/ZhanDouJieSuanSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            SceneManager.instance.stopShake(),
                this.root = this.VSInfo.parent,
                this.battleType = BattleManager.instance.battleType,
                this.battleResult = t,
                AudioManager.instance.stopMusic(),
                this.battleType == BattleType.BATTLE_TYPE_EMAIL_REPLAY ? this.isWin = MailManager.getInstance().pkg.attackerWin : this.isWin = this.battleResult.star > 0,
                UnlockManager.BattleWin = this.isWin,
                this.componentArr = [this.Lost, this.Complete, this.Victory, this.VSInfo, this.DamageDesc, this.BaseReward, this.DuoBaoQiBing, this.JingJiChang, this.PVE, this.LostJump, this.Result, this.VictoryStar];
            for (var e = 0,
                    a = this.componentArr; e < a.length; e++) {
                var i = a[e];
                i.visible = !1
            }
            this.isWin ? AudioManager.instance.playSound(AudioManager.SOUND_BATTLE_WIN) : AudioManager.instance.playSound(AudioManager.SOUND_BATTLE_LOSE),
                this.battleType == BattleType.BATTLE_TYPE_MAIN_PVE || this.battleType == BattleType.BATTLE_TYPE_MAIN_SPECIAL ? this.initPVESpecial() : this.battleType == BattleType.BATTLE_TYPE_ARENA || this.battleType == BattleType.BATTLE_TYPE_EMAIL_REPLAY ? this.initPVPSpecial() : this.battleType == BattleType.BATTLE_TYPE_CHALLENGEARMADA ? this.initChallenGearmadaSpecial() : this.battleType == BattleType.BATTLE_TYPE_ROBBERY ? this.initRobberySpecial() : this.battleType == BattleType.BATTLE_TYPE_GUARD_OIL ? this.initGuardOilSpecial() : this.initPVESpecial();
            for (var n = 0,
                    s = this.componentArr; n < s.length; n++) {
                var i = s[n];
                i.visible || Utils.removeNode(i)
            }
        },
        i.initPVESpecial = function() {
            MainWorldManager.newStar = this.battleResult.star;
            BattleManager.instance.getBattleType();
            this.showBaseReward(),
                this.isWin ? (this.showStar(), this.showDropList()) : (this.Lost.visible = !0, this.showFailedJump()),
                this.showBtns()
        },
        i.initGuardOilSpecial = function() {
            var t = this;
            if (this.showBtns(), this.isWin) {
                this.Victory.visible = !0,
                    this.showLight1(),
                    new ParticleDisplayObj(this.Victory, ParticleType.LightSpot, ShapeType.None),
                    this.Result.visible = !0;
                var e = "",
                    a = void 0,
                    i = void 0,
                    n = WindowDefenseOil.curstage + 1,
                    s = DefencestagedataParser.GetInstance().getItemById(n).conditionsType,
                    r = DefencestagedataParser.GetInstance().getItemById(n).coefficient;
                1 == this.battleResult.condition ? (e = Locales.get("panel_oilfiled_battle_result_1"), a = 16711680, -1 == s ? i = Locales.get("panel_oilfiled_battle_condition1", r) : 1 == s ? i = Locales.get("panel_oilfiled_battle_condition2", r) : 2 == s ? i = Locales.get("panel_oilfiled_battle_condition3", r) : 3 == s && (i = Locales.get("panel_oilfiled_battle_condition4", r))) : 0 == this.battleResult.star ? (e = Locales.get("panel_oilfiled_battle_result_2"), a = 16711680) : this.battleResult.star > 0 && (e = Locales.get("panel_oilfiled_battle_result_3"), a = 65280),
                    this.txtResult.textColor = a,
                    this.txtResult.text = e,
                    i ? this.txtWinCondition.text = i : Utils.removeNode(this.txtWinCondition),
                    this.showBaseReward(),
                    this.showDropList(),
                    1 != this.battleResult.condition && this.battleResult.star > 0 && (this.btnNext.visible = !0, this.btnNext.labelDisplay.text = Locales.get("panel_game_over_fight_3"), this.btnNext.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnNext, this), this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            BattleManager.onemoreplay_flag_lost = !0,
                                BattleManager.replay_flag = !1,
                                t.close(),
                                BattleManager.instance.quickFight()
                        },
                        this), WindowDefenseOil.curstage++)
            } else this.Lost.visible = !0,
                this.showFailedJump(),
                this.Result.visible = !0,
                this.txtWinCondition.visible = !1,
                this.txtResult.text = Locales.get("panel_oilfiled_battle_result_2")
        },
        i.initRobberySpecial = function() {
            var t = this;
            if (this.showBtns(), this.showVSInfo(), this.isWin) {
                this.Victory.visible = !0,
                    this.showLight1(),
                    new ParticleDisplayObj(this.Victory, ParticleType.LightSpot, ShapeType.None),
                    this.VictoryStar.visible = !1,
                    this.txtExtraReward.text = Locales.get("panel_game_over_txt_suipian_comment_3"),
                    this.DuoBaoQiBing.visible = !0;
                var a = !!e.OldRandomItemData;
                a ? this.OpenBoxAction() : (ConfigData.preLoadDats(["ClientDropData"], [ClientdropdataParser],
                    function() {
                        e.OldRandomItemData = [];
                        for (var a = 0; 3 > a; ++a) {
                            var i = t["robItem" + (a + 1)],
                                n = t["box" + (a + 1)];
                            n.index = a,
                                i.visible = !1;
                            var s = t.battleResult.dropList[a];
                            if (s && (1 == t.battleResult.dropList.length || 2 == t.battleResult.dropList.length && 0 == a)) 2 == t.battleResult.dropList.length && 0 == a && (s = t.battleResult.dropList[a + 1]),
                                s.baseData.light = !0,
                                e.OldRandomItemData.push(s.baseData);
                            else {
                                var r = ClientDropDataLib.instance.getDataBy();
                                e.OldRandomItemData.push(GlobalFunction.getDropDataByTypeAndId(r.type, r.item, r.count))
                            }
                            n.touchEnabled = !0,
                                n.addEventListener(egret.TouchEvent.TOUCH_TAP,
                                    function(e) {
                                        AudioManager.instance.playSound(AudioManager.SOUND_BTN);
                                        var a = e.currentTarget.index;
                                        t.OpenBoxAction(a)
                                    },
                                    t)
                        }
                    },
                    this), this.btnClose.enabled = !1, this.btnReplay.enabled = !1, this.btnNext.enabled = !1);
                var i = !1;
                if (this.battleResult.dropList.length > 1) {
                    var n = this.battleResult.dropList[0];
                    if (n.baseData.type != TypeDefine.Const.DROP_TYPE_GOLD && n.baseData.type != TypeDefine.Const.DROP_TYPE_CASH) {
                        i = !0,
                            this.btnNext.visible = !1;
                        var s = Locales.get("panel_game_over_txt_suipian_comment_1"),
                            r = QualitySystem.getColorByQuality(n.baseData.quality),
                            o = r.toString(16);
                        if (o.length < 6)
                            for (var l = 0,
                                    h = o.length; 6 - h > l; ++l) o = "0" + o;
                        s += "#" + o,
                            s += n.baseData.name,
                            s += "#x1",
                            this.txtRobDesc.textFlow = Utils.textFlowByStr(s)
                    }
                }
                i || (this.txtRobDesc.text = Locales.get("panel_game_over_txt_suipian_comment_2")),
                    a || (this.btnClose.enabled = !1)
            } else this.Lost.visible = !0,
                this.showFailedJump()
        },
        i.setRobItem = function(t) {
            var a = this["robItem" + (t + 1)],
                i = this["box" + (t + 1)];
            a.visible = !0,
                i.visible = !1,
                SUI.setItemIcon(a, e.OldRandomItemData[t]),
                e.OldRandomItemData[t].light && SUI.loadMovieClip(Path.activityEffectUrl + "activity_goods.json", Path.activityEffectUrl + "activity_goods.png", a,
                    function(t) {
                        t.x = a.imgBg.x + .5 * a.imgBg.width,
                            t.y = a.imgBg.y + .5 * a.imgBg.height
                    },
                    this)
        },
        i.OpenBoxAction = function(t) {
            if (t) {
                var a = e.OldRandomItemData[t];
                e.OldRandomItemData[t] = e.OldRandomItemData[0],
                    e.OldRandomItemData[0] = a
            }
            for (var i = 0; 3 > i; ++i) this.setRobItem(i);
            this.btnClose.enabled = !0,
                this.btnReplay.enabled = !0,
                this.btnNext.enabled = !0,
                107 == GuideManager.step && GuideManager.nextStep()
        },
        i.initPVPSpecial = function() {
            if (MainWorldManager.newStar = this.battleResult.star, UnlockManager.BattleWin = this.isWin, this.showVSInfo(), this.isWin)
                if (this.Victory.visible = !0, this.showLight1(), new ParticleDisplayObj(this.Victory, ParticleType.LightSpot, ShapeType.None), this.JingJiChang.visible = !0, this.battleType == BattleType.BATTLE_TYPE_EMAIL_REPLAY) this.txtJJCRankPromote.visible = !1,
                    this.imgJJCRankFlag.visible = !1,
                    this.txtJJCRankChangeDesc.text = "",
                    this.txtJJCRankReward.text = "",
                    this.txtJJCHonourAdd.text = "",
                    this.txtJJCScoreAdd.text = "";
                else {
                    Toast.launch(Locales.get("arenaBattleResult_1")),
                        this.txtJJCRankChangeDesc.text = Locales.get("panel_game_over_pvp_1");
                    var t = ArenaManager.instance.getArena_value(),
                        e = (t[0], t[1], t[2], t[3]),
                        a = t[4];
                    t[5],
                        t[6];
                    a - e > 0 ? this.txtJJCRankPromote.text = (a - e).toString() : (this.txtJJCRankPromote.visible = !1, this.imgJJCRankFlag.visible = !1, this.txtJJCRankChangeDesc.text = Locales.get("panel_game_over_pvp_4"));
                    var i = Locales.get("panel_game_over_pvp_2"),
                        n = null;
                    a - e > 0 ? (n = ArenaScoreDataLib.instance.getRankData(e), i += "#99fc88" + n.score + "#", this.txtJJCScoreAdd.text = "") : (n = ArenaScoreDataLib.instance.getRankData(a), i += "#99fc88" + n.score + "#", this.txtJJCScoreAdd.text = ""),
                        i += Locales.get("panel_game_over_pvp_3");
                    var s = VipParser.GetInstance().getItemById(UserData.getInstance()._vip).militaryHonourAdd;
                    s || (s = 0);
                    var r = void 0;
                    r = 0 != s ? n.honor + Math.ceil(n.honor * (s / 100)) : n.honor,
                        i += "#99fc88" + r + "#",
                        i += Locales.get("panel_game_over_pvp_7"),
                        this.txtJJCRankReward.textFlow = Utils.textFlowByStr(i),
                        this.txtJJCHonourAdd.text = ""
                }
            else Toast.launch(Locales.get("arenaBattleResult_2")),
                this.Lost.visible = !0,
                this.showFailedJump();
            this.showBtns()
        },
        i.initChallenGearmadaSpecial = function() {
            this.Complete.visible = !0,
                this.showLight(),
                new ParticleDisplayObj(this.Complete, ParticleType.LightSpot, ShapeType.None),
                this.PVE.visible = !0,
                this.DamageDesc.visible = !0,
                this.txtDamageDesc.text = Locales.get("panel_game_over_challenge_comment_1"),
                this.txtDamage.text = this.battleResult.dmg.toString(),
                this.showBtns(),
                Utils.removeNode(this.scvDrops),
                this.txtPVEDesc.visible = !1,
                this.dropItem7Boss.visible = !0;
            var t = GlobalFunction.getItemByData({
                type: TypeDefine.Const.DROP_TYPE_GOLD,
                count: this.battleResult.gold
            });
            SUI.setItemIcon(this.dropItem7Boss, t)
        },
        i.showStar = function() {
            this.Victory.visible = !0,
                this.showLight1(),
                new ParticleDisplayObj(this.Victory, ParticleType.LightSpot, ShapeType.None),
                this.VictoryStar.visible = !0;
            for (var t = 1; 3 >= t; ++t) {
                var e = this["imgVictoryStar" + t];
                if (t <= this.battleResult.star) {
                    this.battleType == BattleType.BATTLE_TYPE_MAIN_PVE && (e.texture = RES.getRes("victory_Star_2_png")),
                        e.visible = !1;
                    var a = egret.Tween.get(e);
                    a.wait(500 * t).call(function(t) {
                            t.visible = !0,
                                t.alpha = 155 / 255,
                                Utils.setScale(t, 3)
                        },
                        this, [e]).to({
                            scaleX: 1,
                            scaleY: 1,
                            alpha: 1
                        },
                        1e3, egret.Ease.quadIn)
                } else e.visible = !1
            }
        },
        i.showLight = function() {
            this.imgLight.visible = !0,
                egret.Tween.removeTweens(this.imgLight);
            var t = this.imgLight.rotation,
                e = egret.Tween.get(this.imgLight, {
                    loop: !0
                });
            e.to({
                    rotation: t + 360
                },
                6e3)
        },
        i.showLight1 = function() {
            this.imgLight1.visible = !0,
                egret.Tween.removeTweens(this.imgLight1);
            var t = this.imgLight1.rotation,
                e = egret.Tween.get(this.imgLight1, {
                    loop: !0
                });
            e.to({
                    rotation: t + 360
                },
                6e3)
        },
        i.showBaseReward = function() {
            this.BaseReward.visible = !0,
                this.txtLevel.text = Locales.get("banshuduiying_dengji") + ":" + UserData.getInstance().getPlayerLevel(),
                this.txtReward1.text = this.battleResult.gold.toString(),
                this.txtReward2.text = this.battleResult.exp ? this.battleResult.exp.toString() : "0"
        },
        i.showBtns = function() {
            var t = this;
            this.btnReplay.labelDisplay.text = Locales.get("panel_game_over_replay"),
                this.btnReplay.visible = BattleManager.instance.checkReplayShow();
            var e, a, i = BattleManager.instance.checkFightisShow();
            if (this.battleType == BattleType.BATTLE_TYPE_MAIN_PVE || this.battleType == BattleType.BATTLE_TYPE_MAIN_SPECIAL) {
                var n = BattleManager.instance.getNextStageId();
                e = n[0],
                    a = n[1],
                    this.autoNextTimer = new egret.Timer(1e3),
                    this.autoNextTimer.addEventListener(egret.TimerEvent.TIMER, this.OnTick, this),
                    this.autoNextTimer.start(),
                    e !== !1 && 1 !== e || !this.isWin || (MainWorldManager.instance.chooseCampaignId = -1, MainWorldManager.instance.scrolled = -1, WindowPVE.lastScrolled = null, WindowPVE.lastShowDrop = !1),
                    (e === !1 || 1 === e) && this.isWin && i ? (this.btnNext.labelDisplay.text = Locales.get("panel_game_over_fight_5"), this.autoNext.imgCheck.visible = "true" == UserDefault.instance.getStringForKey("zz_auto_next_battle") && GuideManager.guideComplete, this.autoNext.touchEnabled = !0, this.autoNext.touchChildren = !1, this.autoNext.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            t.autoNext.imgCheck.visible = !t.autoNext.imgCheck.visible,
                                UserDefault.instance.setStringForKey("zz_auto_next_battle", t.autoNext.imgCheck.visible.toString()),
                                t._tickNumber = 4,
                                t.OnTick(),
                                t.autoNext.imgCheck.visible && t.autoNextTimer.start()
                        },
                        this), this._tickNumber = 4, this.OnTick(), this.autoNext.imgCheck.visible && this.autoNextTimer) : (this.btnNext.labelDisplay.text = Locales.get("panel_game_over_fight"), this.autoNext.visible = !1, this.autoNextDesc.visible = !1)
            } else this.autoNextDesc.visible = !1,
                this.autoNext.visible = !1,
                this.btnNext.labelDisplay.text = Locales.get("panel_game_over_fight");
            this.btnNext.visible = i,
                this.btnNext.visible && (this.btnNext.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnNext, this), this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        t.battleType == BattleType.BATTLE_TYPE_MAIN_PVE || t.battleType == BattleType.BATTLE_TYPE_MAIN_SPECIAL ? (BattleManager.onemoreplay_flag_win = !0, BattleManager.replay_flag = !1, e === !1 && t.isWin ? (t.close(), BattleManager.instance.quickFight(a)) : 1 === e ? Toast.launch(Locales.get("battleResult_2")) : (t.close(), BattleManager.instance.quickFight())) : (BattleManager.onemoreplay_flag_lost = !0, BattleManager.replay_flag = !1, t.close(), BattleManager.instance.quickFight())
                    },
                    this)),
                this.battleType == BattleType.BATTLE_TYPE_ROBBERY && (this.isWin ? this.btnNext.visible = !1 : this.btnNext.labelDisplay.text = Locales.get("panel_game_over_fight_2")),
                this.btnClose.labelDisplay.text = Locales.get("panel_game_over_close")
        },
        i.OnTick = function() {
            var t = WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Upgrade);
            !t && this.autoNext.imgCheck.visible && void 0 != this._tickNumber && this._tickNumber > 0 && (this._tickNumber--, this.autoNextDesc.text = Locales.get("zz_autonextlevel", this._tickNumber), 0 == this._tickNumber && (this.btnNext.dispatchEventWith(egret.TouchEvent.TOUCH_TAP), this.autoNextTimer && (this.autoNextTimer.stop(), this.autoNextTimer = void 0)))
        },
        i.showDropList = function() {
            this.PVE.visible = !0,
                this.dropItem7Boss.visible = !1,
                (this.battleType == BattleType.BATTLE_TYPE_MAIN_PVE || this.battleType == BattleType.BATTLE_TYPE_MAIN_SPECIAL) && this.battleResult.exp > 2 * BattleManager.instance.getFirstBaseExpData() && this.battleResult.gold > 2 * BattleManager.instance.getFirstBaseGoldData() ? this.txtPVEDesc.text = Locales.get("panel_game_over_win_first_1") : this.txtPVEDesc.text = Locales.get("panel_game_over_getList"),
                this.scvDrops.viewport = this.lstScvDrops;
            for (var t = [], e = 0, a = this.battleResult.dropList; e < a.length; e++) {
                var i = a[e];
                t.push(i.baseData)
            }
            this.lstScvDrops.itemRenderer = ItemItemRenderer,
                this.lstScvDrops.dataProvider = new eui.ArrayCollection(t)
        },
        i.showVSInfo = function() {
            if (this.VSInfo.visible = !0, this.battleType == BattleType.BATTLE_TYPE_EMAIL_REPLAY) {
                var t = MailManager.getInstance().atkInfo;
                SUI.setTextureAsync(this.imgCampOfSelf, Path.GetCampPicUrl(t.camp, 3)),
                    this.txtNameOfSelf.text = t.name,
                    this.txtBPOfSelf.text = t.power
            } else SUI.setTextureAsync(this.imgCampOfSelf, Path.GetCampPicUrl(UserData.getInstance().getCamp(), 3)),
                this.txtNameOfSelf.text = UserData.getInstance().getUserName(),
                this.txtBPOfSelf.text = UserData.getInstance()._fightPower.toString();
            if (this.battleType == BattleType.BATTLE_TYPE_ROBBERY) SUI.setTextureAsync(this.imgCampOfEnemy, Path.GetCampPicUrl(WindowPreciousBattle.selectedItem.armyCapm)),
                this.txtNameOfEnemy.text = WindowPreciousBattle.selectedItem.armyName,
                this.txtBPOfEnemy.text = WindowPreciousBattle.selectedItem.armyPower.toString();
            else if (this.battleType == BattleType.BATTLE_TYPE_ARENA) {
                var e = ArenaManager.instance.getArena_value();
                SUI.setTextureAsync(this.imgCampOfEnemy, Path.GetCampPicUrl(e[2], 3)),
                    this.txtNameOfEnemy.text = e[0],
                    this.txtBPOfEnemy.text = e[1].toString()
            } else if (this.battleType == BattleType.BATTLE_TYPE_EMAIL_REPLAY) {
                var e = MailManager.getInstance().defInfo;
                SUI.setTextureAsync(this.imgCampOfEnemy, Path.GetCampPicUrl(e.camp, 3)),
                    this.txtNameOfEnemy.text = e.name,
                    this.txtBPOfEnemy.text = e.power
            }
        },
        i.showFailedJump = function() {
            var t = this;
            this.LostJump.visible = !0;
            for (var e = 0; e < this.LostJump.numChildren; ++e) this.LostJump.getChildAt(e).visible = !1;
            ConfigData.preLoadDats(["battleLost"], [BattlelostParser],
                function() {
                    for (var e = 0; e < t.LostJump.numChildren; ++e) t.LostJump.getChildAt(e).visible = !0;
                    if (t.autoNext.visible = !1, t.autoNextDesc.visible = !1, ActivityManager.instance.activityData.isfirst_gift) {
                        t.imgFirstRecharge.visible = !1,
                            t.txtLostDesc.text = Locales.get("panel_game_over_getUp");
                        for (var e = 1; 3 >= e; ++e) {
                            var a = t["imgBattleLostIcon" + e];
                            SUI.addClickEffect(a),
                                a.touchEnabled = !0
                        }
                        var i = UserData.getInstance().getPlayerLevel(),
                            n = BattleLostDataLib.instance.getDataBylvl(i).content1,
                            s = "jianchuanpeijian.png"
                            /*tpa=jianchuanpeijian.png*/
                        ;
                        4 == n ? s = "peijiangaizao.png"
                            /*tpa=peijiangaizao.png*/
                            :
                            2 == n && (s = "jianchuanxunlian.png"
                                /*tpa=jianchuanxunlian.png*/
                            ),
                            SUI.setTextureAsync(t.imgBattleLostIcon1, Path.battleLostIconUrl + s),
                            t.imgBattleLostIcon1.addEventListener(egret.TouchEvent.TOUCH_TAP,
                                function() {
                                    2 == n ? BattleManager.instance.existBattle(function() {
                                                WindowManager.getInstance().show(WindowManager.windowType.ShipManager)
                                            },
                                            void 0, !1) : BattleManager.instance.existBattle(function() {
                                                WindowManager.getInstance().show(WindowManager.windowType.PeiJian)
                                            },
                                            void 0, !1),
                                        t.close()
                                },
                                t);
                        var r = BattleLostDataLib.instance.getDataBylvl(i).content2;
                        s = "jianchuanxunlian.png"
                            /*tpa=jianchuanxunlian.png*/
                            ,
                            5 == r && (s = "xunzhangshengji.png"
                                /*tpa=xunzhangshengji.png*/
                            ),
                            SUI.setTextureAsync(t.imgBattleLostIcon2, Path.battleLostIconUrl + s),
                            t.imgBattleLostIcon2.addEventListener(egret.TouchEvent.TOUCH_TAP,
                                function() {
                                    5 == r ? BattleManager.instance.existBattle(function() {
                                                WindowManager.getInstance().show(WindowManager.windowType.Soul)
                                            },
                                            void 0, !1) : BattleManager.instance.existBattle(function() {
                                                WindowManager.getInstance().show(WindowManager.windowType.ShipManager)
                                            },
                                            void 0, !1),
                                        t.close()
                                },
                                t);
                        var o = BattleLostDataLib.instance.getDataBylvl(i).content3;
                        s = "jianchuangenghuan.png"
                            /*tpa=jianchuangenghuan.png*/
                            ,
                            5 == o && (s = "xunzhangshengji.png"
                                /*tpa=xunzhangshengji.png*/
                            ),
                            SUI.setTextureAsync(t.imgBattleLostIcon3, Path.battleLostIconUrl + s),
                            t.imgBattleLostIcon3.addEventListener(egret.TouchEvent.TOUCH_TAP,
                                function() {
                                    5 == o ? BattleManager.instance.existBattle(function() {
                                                WindowManager.getInstance().show(WindowManager.windowType.Soul)
                                            },
                                            void 0, !1) : BattleManager.instance.existBattle(function() {
                                                WindowManager.getInstance().show(WindowManager.windowType.ShipManager)
                                            },
                                            void 0, !1),
                                        t.close()
                                },
                                t),
                            1 == n ? t.txtJump1.text = Locales.get("panel_game_over_part") : 4 == n ? t.txtJump1.text = Locales.get("panel_game_over_part_2") : 2 == n ? t.txtJump1.text = Locales.get("panel_game_over_train") : t.txtJump1.text = Locales.get("panel_game_over_part"),
                            2 == r ? t.txtJump2.text = Locales.get("panel_game_over_train") : 5 == r ? t.txtJump2.text = Locales.get("panel_game_over_getShip_2") : t.txtJump2.text = Locales.get("panel_game_over_train"),
                            3 == o ? t.txtJump3.text = Locales.get("panel_game_over_getShip") : 5 == o ? t.txtJump3.text = Locales.get("panel_game_over_getShip_2") : t.txtJump3.text = Locales.get("panel_game_over_getShip")
                    } else t.imgFirstRecharge.visible = !0,
                        SUI.setTextureAsync(t.imgFirstRecharge, Path.uiUrl + "Activity_defeat.png"),
                        t.imgFirstRecharge.addEventListener(egret.TouchEvent.TOUCH_TAP,
                            function() {
                                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivityWebData, {
                                    type: ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE
                                })
                            },
                            t)
                },
                this)
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnReplay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnReplay, this),
                this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnNext, this),
                (2 == GuideManager.step || 14 == GuideManager.step || 30 == GuideManager.step || 106 == GuideManager.step) && GuideManager.nextStep(),
                SUI.setTextureAsync(this.imgBlueBg, "resource/assets/ui/battleAccount/battleAccount_Bg1.jpg"
                    /*tpa=resource/assets/ui/battleAccount/battleAccount_Bg1.jpg*/
                ),
                SUI.setTextureAsync(this.imgPVEBg, "resource/assets/ui/battleAccount/battleAccount_Bg1.jpg"
                    /*tpa=resource/assets/ui/battleAccount/battleAccount_Bg1.jpg*/
                ),
                SUI.setTextureAsync(this.imgDuobaoBg, "resource/assets/ui/battleAccount/battleAccount_Bg1.jpg"
                    /*tpa=resource/assets/ui/battleAccount/battleAccount_Bg1.jpg*/
                ),
                SUI.setTextureAsync(this.imgLostBg, "resource/assets/ui/battleAccount/battleAccount_Bg1.jpg"
                    /*tpa=resource/assets/ui/battleAccount/battleAccount_Bg1.jpg*/
                ),
                SUI.setTextureAsync(this.imgLight, "resource/assets/ui/battle_light.png"
                    /*tpa=resource/assets/ui/battle_light.png*/
                ),
                SUI.setTextureAsync(this.imgLight1, "resource/assets/ui/battle_light.png"
                    /*tpa=resource/assets/ui/battle_light.png*/
                ),
                this.imgLight.visible = !1,
                this.imgLight1.visible = !1
        },
        i.OnClickBtnClose = function(t) {
            this.close(),
                BattleManager.instance.existBattle(),
                108 == GuideManager.step && GuideManager.clearMask()
        },
        i.OnClickBtnReplay = function(t) {
            this.close(),
                SceneManager.instance.SwitchScene(SceneType.BATTLE),
                BattleManager.instance.replay()
        },
        i.OnClickBtnNext = function(t) {
            BattleManager.instance.quickFight()
        },
        i.clear = function() {
            this.autoNextTimer && (this.autoNextTimer.stop(), this.autoNextTimer = void 0)
        },
        e.ReplayFlag = !1,
        e.Replayexistpiece = null,
        e.ReplayName = null,
        e.Replay_r = 0,
        e.Replay_g = 0,
        e.Replay_b = 0,
        e
}(WindowBase);
