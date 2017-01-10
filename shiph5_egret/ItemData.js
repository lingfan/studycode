
var WindowUpgrade = function(t) {
    function e() {
        t.call(this, !0),
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/ShengJiSkin.exml"
            /*tpa=resource/eui_skins/ShengJiSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            if (this.guideDelayStep = 0, this._data = t, this._data.isLevelUp) {
                5 == Number(this._data.to) && SceneManager.instance.curSceneType != SceneType.BATTLE ? GuideManager.step < 41 && (this.guideDelayStep = 41) : 10 == Number(this._data.to) ? this.guideDelayStep = 65 : 12 == Number(this._data.to) ? this.guideDelayStep = 78 : 15 == Number(this._data.to) ? this.guideDelayStep = 91 : 17 == Number(this._data.to) ? this.guideDelayStep = 96 : 19 == Number(this._data.to) ? this.guideDelayStep = 102 : 25 == Number(this._data.to) ? this.guideDelayStep = 112 : 30 == Number(this._data.to) ? this.guideDelayStep = 116 : 40 == Number(this._data.to) ? this.guideDelayStep = 124 : 50 == Number(this._data.to) && (this.guideDelayStep = 132),
                    this.GrandeUp.visible = !1,
                    this.LevelUp.visible = !0;
                var e = ExpParser.GetInstance().getItemById(this._data.to),
                    a = ExpParser.GetInstance().getItemById(this._data.to - 1);
                this.txtCongratulation.text = Locales.get("zz_levelup", this._data.to),
                    this.txtTitle.text = Locales.get("zz_leveluptitle", this._data.to),
                    this.txtReward.text = Locales.get("zz_recoverOil", e.restoreOil),
                    e.poslevel != a.poslevel ? this.txtReward2.text = Locales.get("zz_sendShip", e.poslevel) : (this.txtReward2.visible = !1, this.txtReward3.y = this.txtReward2.y),
                    "" != e.desc_l ? this.txtReward3.textFlow = Utils.textFlowByStr(e.desc_l) : this.txtReward3.text = ""
            } else {
                this.GrandeUp.visible = !0,
                    this.LevelUp.visible = !1;
                var i = MilitaryrankParser.GetInstance().getItemByField("id", this._data.to),
                    n = MilitaryrankParser.GetInstance().getItemById(i.index - 1);
                SUI.setTextureAsync(this.imgOldRank, Path.GetRankIconUrl(n.index)),
                    this.txtOldRank.text = n.name_l,
                    SUI.setTextureAsync(this.imgNewRank, Path.GetRankIconUrl(i.index)),
                    this.txtNewRank.text = i.name_l,
                    this.txtCongratulation0.text = Locales.get("zz_militaryUp", i.name_l),
                    this.txtTitle.text = Locales.get("zz_militaryUpTitle", i.name_l)
            }
            AudioManager.instance.playSound(AudioManager.SOUND_BATTLE_LVL_UP),
                GuideManager.showGuider(!1)
        },
        i.init = function() {
            var t = this;
            this.gpCtrl.visible = !1,
                SUI.setTextureAsync(this.imgBg, Path.uiUrl + "Upgrade_Bg.png"),
                SUI.setTextureAsync(this.imgArrow, Path.uiUrl + "Upgrade_Arrow.png"),
                this.touchBg.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        t.close(),
                            t.guideDelayStep > 0 && (GuideManager.nextStep(t.guideDelayStep), t.guideDelayStep = 0)
                    },
                    this);
            var e = [Path.effectUrl + "shengjitexiao/shengjitexiao.json", Path.effectUrl + "shengjitexiao/texture.json", Path.effectUrl + "shengjitexiao/texture.png"];
            ResLoader.instance.preLoadResList(e,
                function(e) {
                    var a = e[2],
                        i = e[1],
                        n = e[0];
                    if (a && i && n) {
                        var s = new dragonBones.EgretFactory;
                        s.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(n)),
                            s.addTextureAtlas(new dragonBones.EgretTextureAtlas(a, i));
                        var r = s.buildArmature("shengjitexiao");
                        dragonBones.WorldClock.clock.add(r),
                            t.gpCenter.addChild(r.display),
                            r.animation.gotoAndPlay("normal", void 0, void 0, 1),
                            Utils.delayCall(500,
                                function() {
                                    t.gpCtrl.visible = !0
                                },
                                t);
                        var o = (++SUI.tagInc).toString();
                        ResLoader.instance.addRef(Path.effectUrl + "shengjitexiao/texture.png", o),
                            r.display.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                                function() {
                                    ResLoader.instance.clearTag(o)
                                },
                                void 0),
                            t._armature = r,
                            t.imgLight.visible = !1,
                            Utils.delayCall(500,
                                function() {
                                    t.imgLight.visible = !0,
                                        SUI.setTextureAsync(t.imgLight, Path.uiUrl + "Upgrade_Light.png"),
                                        egret.Tween.removeTweens(t.imgLight);
                                    var e = t.imgLight.rotation,
                                        a = egret.Tween.get(t.imgLight, {
                                            loop: !0
                                        });
                                    a.to({
                                            rotation: e + 360
                                        },
                                        6e3)
                                },
                                t)
                    }
                },
                this)
        },
        i.clear = function() {
            GuideManager.showGuider(!0),
                this._armature && (dragonBones.WorldClock.clock.remove(this._armature), this._armature = null)
        },
        e
}(WindowBase);
