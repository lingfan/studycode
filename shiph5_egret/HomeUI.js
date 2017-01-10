
var BattleUI = function(t) {
    function e(a) {
        void 0 === a && (a = void 0),
            t.call(this),
            this._captainIds = a,
            this.addEventListener(eui.UIEvent.COMPLETE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/Battle_BeginSkin.exml"
            /*tpa=resource/eui_skins/Battle_BeginSkin.exml*/
            ,
            e.instance = this
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.update = function() {},
        i.OnComplete = function() {
            this.btnSpeed.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnSpeed, this),
                this.btnSkip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnSkip, this),
                SUI.addClickEffect(this.btnSkip),
                SUI.addClickEffect(this.btnSpeed);
            var t = BattleManager.instance.getLeftTeam(),
                e = BattleManager.instance.getRightTeam();
            t && e && (BattleManager.instance.getBattleType() == BattleType.BATTLE_TYPE_CHALLENGEARMADA && (e.name = Locales.get("panel_challengs_win_2")), this.showSpeed(t.name, t.speed, e.name, e.speed, void 0)),
                this.setSpeed(BattleManager.CURRENT_SPEED_TYPE);
            var a = [];
            this._captainIds.length > 0 && a.push({
                    descList: this.getDescList(this._captainIds[0]),
                    isMine: !0
                }),
                this._captainIds.length > 1 && a.push({
                    descList: this.getDescList(this._captainIds[1]),
                    isMine: !1
                }),
                this.createQijianEff(a),
                this.txtReward1.visible = !1,
                this.txtReward2.visible = !1,
                this.imgReward1.visible = !1,
                this.imgReward2.visible = !1
        },
        i.OnClickBtnSpeed = function(t) {
            1 == BattleManager.CURRENT_SPEED_TYPE ? BattleManager.instance.checkSpdUpLv(2) ? (BattleManager.instance.setBattleSpeed(2, !0), this.setSpeed(2)) : (BattleManager.instance.setBattleSpeed(1, !0), this.setSpeed(1)) : 2 == BattleManager.CURRENT_SPEED_TYPE ? BattleManager.instance.checkSpdUpLv(3) ? (BattleManager.instance.setBattleSpeed(3, !0), this.setSpeed(3)) : (BattleManager.instance.setBattleSpeed(1, !0), this.setSpeed(1)) : BattleManager.instance.checkSpdUpLv(1) && (BattleManager.instance.setBattleSpeed(1, !0), this.setSpeed(1))
        },
        i.OnClickBtnSkip = function(t) {
            BattleManager.instance.endBattle(1)
        },
        i.setSpeed = function(t) {
            1 == t ? this.imgSpeed.texture = RES.getRes(Path.resHeadUrl + "battle_speed1_png") : 2 == t ? this.imgSpeed.texture = RES.getRes(Path.resHeadUrl + "battle_speed2_png") : 3 == t && (this.imgSpeed.texture = RES.getRes(Path.resHeadUrl + "battle_speed3_png"))
        },
        i.battleRoundChange = function(t, e) {
            t = 1 > t ? 1 : t,
                BattleManager.instance.battleType == BattleType.BATTLE_TYPE_CHALLENGEARMADA ? (t = t > 1 ? 1 : t, this.txtTurns.text = Locales.get("ui_mainBattle_round", t + "/1")) : (t = t > 30 ? 30 : t, this.txtTurns.text = Locales.get("ui_mainBattle_round", t + "/30"))
        },
        i.showSpeed = function(t, e, a, i, n) {
            BattleScene.ChangeNameType = !1,
                this.txtSelfName.text = t,
                this.txtEnemyName.text = a,
                this.txtSelfSpeed.text = Locales.get("ui_mainBattle_speedTitle", e),
                this.txtEnemySpeed.text = Locales.get("ui_mainBattle_speedTitle", i),
                BattleManager.instance.getBattleType() == BattleType.BATTLE_TYPE_ZONGHENG && (this.txtSelfSpeed.visible = !1, this.txtEnemySpeed.visible = !1),
                e > i ? this.imgEnemyFirst.visible = !1 : e == i ? this.imgEnemyFirst.visible = this.imgSelfFirst.visible = !1 : this.imgSelfFirst.visible = !1,
                n && n(),
                1 == BattleManager.replay_flag ? this.setEndButtonShow(!0) : this.setEndButtonShow(BattleManager.instance.checkEndButtonShow()),
                this.setRoundShow(!0)
        },
        i.createQijianEff = function(t) {
            0 == t.length && (this.txtBuff1.visible = !1, this.txtBuff2.visible = !1, this.txtBuff3.visible = !1);
            for (var e = 0,
                    a = t; e < a.length; e++) {
                var i = a[e];
                if (i.isMine)
                    for (var n = 1; 3 >= n; ++n) {
                        var s = this["txtBuff" + n];
                        n - 1 < i.descList.length ? (s.textFlow = Utils.textFlowByStr(i.descList[n - 1]), s.visible = !0) : s.visible = !1
                    }
            }
        },
        i.getDescList = function(t) {
            var e = [];
            if (null != t) {
                var a = SkilldataParser.GetInstance().getItemById(t).buff;
                if (null != a && 0 != a)
                    for (var i = BuffdataParser.GetInstance().getItemById(a), n = 1; 3 > n; ++n) {
                        var s = i["buffType" + n],
                            r = i["buffValue" + n];
                        if (s && 0 != s && r && 0 != r) {
                            var o = "#44e04f+" + BuffManager.instance.getBuffValueById(s, r) + "##ffe4c4" + Locales.get(BuffManager.instance.getBuffNameById(s).name) + "#";
                            e.push(o)
                        }
                    }
            }
            return e
        },
        i.setEndButtonShow = function(t) {
            this.gpSkip.visible = t || !0
        },
        i.setRoundShow = function(t) {
            this.txtTurns.visible = t
        },
        i.clear = function() {},
        e
}(eui.Component);
