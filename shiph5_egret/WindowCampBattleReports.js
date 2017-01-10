
var WindowCampBattleOver = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ZB_zZhenYingZhan_ZhanDouSkin.exml"
            /*tpa=resource/eui_skins/ZB_zZhenYingZhan_ZhanDouSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.playBattle = function(t, e, a) {
            var i, n = t.x,
                s = 0,
                r = 1,
                o = 0;
            3 == a || 5 == a ? (r = .8, o = 5) : 2 == a || 4 == a ? (r = .8, o = 5) : r = 1.1,
                e ? (i = -24, s = n - 50, t.x = s) : (i = 24, s = n + 50, t.x = s);
            var l = 10 * Utils.randInt(0, 50),
                h = 10 * Utils.randInt(20, 50),
                c = 10 * Utils.randInt(10, 50),
                d = egret.Tween.get(t);
            d.to({
                    x: n
                },
                500, egret.Ease.quadIn).wait(l).call(function() {
                var a = 0;
                a = e ? t.x + t.width + 30 : t.x - t.width - 30,
                    EffectManager.instance.getShipFireEff(t.parent, {
                        x: a,
                        y: t.y - t.height
                    }, !e, 0)
            }).wait(h).call(function() {
                var e = t.x + Utils.randInt(-30, 30);
                EffectManager.instance.getShipHitEff(t.parent, void 0, {
                        x: e,
                        y: t.y
                    },
                    r)
            }).wait(c).call(function() {
                var e = t.x + Utils.randInt(-30, 30);
                EffectManager.instance.getShipHitEff(t.parent, void 0, {
                        x: e,
                        y: t.y
                    },
                    r)
            });
            var g = Path.effectUrl + "campBattle_water.json",
                u = Path.effectUrl + "campBattle_water.png";
            SUI.loadSpriteSheet(g, u,
                function(a, i) {
                    var n = new egret.MovieClipDataFactory(a, i),
                        s = new egret.MovieClip(n.generateMovieClipData("default"));
                    s.width = GameData.designWidth,
                        s.height = GameData.designHeight,
                        t.addChild(s),
                        s.gotoAndPlay(0, -1);
                    var o = (++SUI.tagInc).toString();
                    ResLoader.instance.addRef(u, o),
                        s.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                            function() {
                                ResLoader.instance.clearTag(o)
                            },
                            void 0),
                        e || (s.scaleX = -1),
                        s.x = .3 * t.width,
                        s.y = t.height,
                        s.scaleX = s.scaleY = r + .2
                })
        },
        i.setData = function(t) {
            var e = this;
            this.data = t;
            var a, i = t.atkTac,
                n = t.defTac;
            this.txtSelfName.text = i.name;
            var s = "";
            GlobalFunction.checkIsNPC(t.targetID) ? (a = CampbattlenpcdataParser.GetInstance().getItemById(t.targetID), s = a.name_l) : s = n.name,
                this.txtEnemyName.text = s;
            for (var r = 1; 5 >= r; ++r) this.playBattle(this["ship" + r], !0, r),
                this.playBattle(this["enemy" + r], !1, r);
            this.Result.visible = !1,
                Utils.delayCall(4e3,
                    function() {
                        e.Result.visible = !0,
                            e.Battle.visible = !1,
                            t.star <= 0 ? (e.Lose.visible = !0, e.Win.visible = !1) : (e.Win.visible = !0, e.Lose.visible = !1),
                            SUI.setTextureAsync(e.imgSelfCamp, Path.GetCampPicUrl(t.atkTac.camp, 3)),
                            SUI.setTextureAsync(e.imgSelfHead, Path.GetHeadPicUrl(t.atkTac.head)),
                            e.txtShiQiValue.text = "-" + t.campbattle.morale.toString(),
                            e.txtShiQi.text = Locales.get("ui_campBattle_over_shiqiTitle"),
                            e.txtSelfName1.text = t.atkTac.name,
                            a ? (SUI.setTextureAsync(e.imgEnemyCamp, Path.GetCampPicUrl(a.camp, 3)), SUI.setTextureAsync(e.imgEnemyHead, Path.GetHeadPicUrl(Number(a.icon))), e.txtEnemyName1.text = a.name_l) : (SUI.setTextureAsync(e.imgEnemyCamp, Path.GetCampPicUrl(t.defTac.camp, 3)), SUI.setTextureAsync(e.imgEnemyHead, Path.GetHeadPicUrl(t.defTac.head)), e.txtEnemyName1.text = t.defTac.name),
                            e.txtOhterShiQi.text = Locales.get("ui_campBattle_over_shiqiTitle"),
                            e.txtEnemyCost.text = "-" + t.campbattle.targetmorale.toString(),
                            e.txtZhanGong.text = Locales.get("ui_campBattle_getZhangong"),
                            e.txtExtraZhanGong.text = Locales.get("ui_campBattle_over_ewaiZhangong"),
                            e.txtRongYu.text = Locales.get("ui_campBattle_getRongyu");
                        var i = t.campbattle.campbattlescore;
                        Log.logZDY("////-campbattlescore." + t.campbattle.campbattlescore + ",attacknum." + t.campbattle.attacknum);
                        var n = CampbattlelimitscoredataParser.GetInstance().getItemById(t.campbattle.attacknum);
                        if (n) {
                            var s = CampbattlelimitscoredataParser.GetInstance().length - t.campbattle.attacknum;
                            i -= n.socre,
                                e.txtExtraZhanGongValue.text = "+" + n.socre,
                                0 > s ? (e.txtExtraZhanGong.visible = !1, e.txtExtraZhanGongValue.visible = !1, e.txtRongYu.y = e.txtExtraZhanGong.y, e.txtRongYuValue.y = e.txtExtraZhanGongValue.y, e.txtExtraZhanGongDesc.visible = !1) : e.txtExtraZhanGongDesc.text = Locales.get("ui_campBattle_over_ewaiCountDesc") + Locales.get("ui_campBattle_over_ewaiCount", s)
                        } else e.txtExtraZhanGong.visible = !1,
                            e.txtExtraZhanGongValue.visible = !1,
                            e.txtRongYu.y = e.txtExtraZhanGong.y,
                            e.txtRongYuValue.y = e.txtExtraZhanGongValue.y,
                            e.txtExtraZhanGongDesc.visible = !1;
                        if (e.txtZhanGongValue.text = "+ " + i, e.txtRongYuValue.text = "+ " + t.militaryhonour, e.txtKill.text = Locales.get("ui_campBattle_over_kill"), e.txtKill.visible = !1, 1 == t.campbattle.kill) {
                            var r = Path.effectUrl + "campBattleOver_kill.json",
                                o = Path.effectUrl + "campBattleOver_kill.png";
                            SUI.loadSpriteSheet(r, o,
                                function(t, a) {
                                    var i = new egret.MovieClipDataFactory(t, a),
                                        n = new egret.MovieClip(i.generateMovieClipData("default"));
                                    n.width = GameData.designWidth,
                                        n.height = GameData.designHeight,
                                        e.Result.addChild(n),
                                        n.gotoAndPlay(0, 1);
                                    var s = (++SUI.tagInc).toString();
                                    ResLoader.instance.addRef(o, s),
                                        n.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                                            function() {
                                                ResLoader.instance.clearTag(s)
                                            },
                                            void 0),
                                        n.x = e.imgEnemyHead.x + .5 * e.imgEnemyHead.width + 5,
                                        n.y = e.imgEnemyHead.y + .5 * e.imgEnemyHead.height + 5;
                                    var r = egret.Tween.get(e.txtKill);
                                    r.wait(500).call(function() {
                                            e.txtKill.visible = !0,
                                                e.txtKill.scaleX = e.txtKill.scaleY = 3
                                        },
                                        e).to({
                                            scaleX: 1,
                                            scaleY: 1
                                        },
                                        2).call(function() {
                                        SceneManager.instance.sceneShake(SceneManager.SHAKE_HIGH)
                                    })
                                },
                                e)
                        }
                        var l = t.campbattle.winningsteak - 1;
                        l > 0 ? e.txtWinTimes.text = Locales.get("countinusWin", t.campbattle.winningsteak) : e.txtWinTimes.text = "",
                            Utils.delayCall(2500,
                                function() {
                                    e.close()
                                },
                                e)
                    },
                    this)
        },
        i.init = function() {},
        i.clear = function() {},
        e
}(WindowBase);
