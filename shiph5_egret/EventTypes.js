
var EffectManager = function() {
    function t() {
        this.skillListCache = null,
            this.skillResList = null,
            this.clipDatas = {},
            this.battleDragonDatas = {}
    }
    var e = (__define, t),
        a = e.prototype;
    return a.initBattleEff = function(e, a) {
            for (var i = this,
                    n = [], s = 0, r = t.effList; s < r.length; s++) {
                var o = r[s];
                n.push(Path.battleEffectUrl + o + ".json"),
                    n.push(Path.battleEffectUrl + o + ".png")
            }
            this.clipDatas = {},
                ResLoader.instance.preLoadResList(n,
                    function(n) {
                        for (var s = Math.floor(n.length / 2), r = 0; s > r; ++r) {
                            var o = n[2 * r],
                                l = n[2 * r + 1],
                                h = new egret.MovieClipDataFactory(o, l),
                                c = t.effList[r];
                            i.clipDatas[c] = h.generateMovieClipData("default"),
                                Utils.call(e, a)
                        }
                        BattleManager.instance.loadedBattleEffects = !0,
                            BattleManager.instance.checkLoadedFlags()
                    },
                    this);
            for (var l = [], h = 0, c = t.dragonEffects; h < c.length; h++) {
                var o = c[h];
                l.push(Path.battleEffectUrl + o + "/" + o + ".json"),
                    l.push(Path.battleEffectUrl + o + "/texture.json"),
                    l.push(Path.battleEffectUrl + o + "/texture.png")
            }
            this.battleDragonResUrls = l,
                this.battleDragonDatas = {},
                ResLoader.instance.preLoadResList(l,
                    function(n) {
                        for (var s = 0; s < l.length; ++s) {
                            var r = t.dragonEffects[s],
                                o = 3 * s,
                                h = n[o + 2],
                                c = n[o + 1],
                                d = n[o];
                            if (h && c && d) {
                                var g = new dragonBones.EgretFactory;
                                g.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(d)),
                                    g.addTextureAtlas(new dragonBones.EgretTextureAtlas(h, c)),
                                    i.battleDragonDatas[r] = g
                            }
                        }
                        BattleManager.instance.loadedDragonEffects = !0,
                            BattleManager.instance.checkLoadedFlags(),
                            Utils.call(e, a)
                    })
        },
        a.initProjectiles = function(e, a) {
            for (var i = [], n = 0, s = t.projectiles; n < s.length; n++) {
                var r = s[n];
                i.push("resource/assets/battle/projectile/" + r + ".png")
            }
            ResLoader.instance.preLoadResList(i,
                function() {
                    BattleManager.instance.loadedProjectileEffects = !0,
                        BattleManager.instance.checkLoadedFlags()
                })
        },
        a.initSkillEffect = function(t, e) {
            var a = this;
            AudioManager.instance.initSkillMusic();
            var i = BattleManager.instance.getSkillList(),
                n = null,
                s = [];
            this.skillListCache = {};
            for (var r = {},
                    o = [], l = 0; l < i.length; ++l) n = SkilldataParser.GetInstance().getItemById(i[l]),
                null == n || null == n.action || "" == n.action || r[n.action] || (s.push(Path.skillEffectUrl + n.action + "/" + n.action + ".json"), s.push(Path.skillEffectUrl + n.action + "/texture.json"), s.push(Path.skillEffectUrl + n.action + "/texture.png"), o.push(n.action), r[n.action] = !0);
            ResLoader.instance.preLoadResList(s,
                    function(i) {
                        for (var n = 0; n < o.length; ++n) {
                            var s = o[n],
                                r = 3 * n,
                                l = i[r + 2],
                                h = i[r + 1],
                                c = i[r];
                            if (l && h && c) {
                                var d = new dragonBones.EgretFactory;
                                d.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(c)),
                                    d.addTextureAtlas(new dragonBones.EgretTextureAtlas(l, h)),
                                    a.skillListCache[s] = d
                            }
                        }
                        BattleManager.instance.loadedSkillEffects = !0,
                            BattleManager.instance.checkLoadedFlags(),
                            Utils.call(t, e)
                    }),
                this.skillResList = s
        },
        a.clearEffect = function() {
            for (var e = [], a = 0, i = t.effList; a < i.length; a++) {
                var n = i[a];
                e.push(Path.battleEffectUrl + n + ".json"),
                    e.push(Path.battleEffectUrl + n + ".png")
            }
            if (ResLoader.instance.unloadResList(e), this.skillResList) {
                for (var s = [], r = 0, o = this.skillResList; r < o.length; r++) {
                    var n = o[r];
                    s.push(n)
                }
                this.skillResList = null,
                    ResLoader.instance.unloadResList(s)
            }
            if (this.battleDragonResUrls) {
                for (var s = [], l = 0, h = this.battleDragonResUrls; l < h.length; l++) {
                    var n = h[l];
                    s.push(n)
                }
                this.battleDragonResUrls = null,
                    ResLoader.instance.unloadResList(s)
            }
        },
        a.getShipFireEff = function(t, e, a, i, n) {
            void 0 === n && (n = void 0),
                n || (n = Utils.randInt(1, 3));
            var s = this.getDragonArmature("battle_fire" + n, t);
            return s && (s.display.x = e.x, s.display.y = e.y, a && (s.display.rotation = 180)),
                s
        },
        a.getShipHitEff = function(t, e, a, i) {
            void 0 === e && (e = void 0),
                e || (e = Utils.randInt(1, 2));
            var n = this.getDragonArmature("battle_hit" + e, t);
            return a && n && (n.display.x = a.x, n.display.y = a.y),
                n
        },
        a.getShipCriEff = function(e) {
            return this.getDragonArmature(t.dragonEffects[1], e)
        },
        a.getDragonArmature = function(t, e) {
            var a = this.battleDragonDatas[t];
            if (a) {
                var i = a.buildArmature(t);
                dragonBones.WorldClock.clock.add(i),
                    e && e.addChild(i.display),
                    i.animation.timeScale = 1 / BattleManager.PLAYFRAMES;
                i.animation.gotoAndPlay("normal", void 0, void 0, 1);
                return i.display.scaleX = i.display.scaleY = 2,
                    i.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                        function(t) {
                            t && t.currentTarget && (Utils.removeNode(t.currentTarget.display), dragonBones.WorldClock.clock.remove(t.currentTarget))
                        },
                        void 0),
                    i
            }
            return null
        },
        a.getTorpedoHit = function(e) {
            return this.getDragonArmature(t.dragonEffects[0], e)
        },
        a.getMissEff = function(t, e) {
            return void 0 === e && (e = void 0),
                e || (e = Utils.randInt(1, 2)),
                this.getDragonArmature("battle_water_spray" + e, t)
        },
        a.getHurtEff = function(t, e) {
            void 0 === e && (e = void 0),
                e || (e = Utils.randInt(1, 2));
            var a = this.clipDatas["battle_burn" + e];
            if (a) {
                var i = new egret.MovieClip(a);
                return i.frameRate = a.numFrames / BattleManager.PLAYFRAMES * 1,
                    t.addChild(i),
                    i.gotoAndPlay(0, -1),
                    i
            }
        },
        a.getDeadEff = function(t, e) {
            void 0 === e && (e = void 0),
                e || (e = Utils.randInt(1, 2));
            var a = "";
            a = 1 == e ? "battle_shipDestroy" : "battle_dunkerDestroy";
            var i = this.clipDatas[a];
            if (i) {
                var n = new egret.MovieClip(i);
                return n.frameRate = i.numFrames / BattleManager.PLAYFRAMES * 1,
                    t.addChild(n),
                    n.gotoAndPlay(0, -1),
                    n
            }
        },
        a.getSpeedTitleBack = function() {},
        a.getTargetSelect = function(t) {
            var e = this.clipDatas.battle_target_select;
            if (e) {
                var a = new egret.MovieClip(e);
                return a.frameRate = e.numFrames / BattleManager.PLAYFRAMES * 1,
                    t.addChild(a),
                    a.gotoAndPlay(0, -1),
                    a
            }
        },
        a.skillPlay = function(t, e, a, i) {
            var n = this.skillListCache[t.action];
            if (n) {
                var s = n.buildArmature(t.action);
                dragonBones.WorldClock.clock.add(s),
                    0 == e ? (s.display.scaleX = -2, s.display.scaleY = 2) : (s.display.scaleX = 2, s.display.scaleY = 2);
                s.animation.gotoAndPlay("normal");
                return s.animation.timeScale = .8 / BattleManager.PLAYFRAMES,
                    a && s.addEventListener(dragonBones.AnimationEvent.COMPLETE, a, i),
                    s
            }
            return Utils.call(a, i),
                null
        },
        t.instance = new t,
        t.effList = ["battle_burn1", "battle_burn2", "battle_burn3", "battle_shipDestroy", "battle_dunkerDestroy", "battle_target_select"],
        t.dragonEffects = ["battle_torpedo_explosion", "battle_hit3", "battle_hit1", "battle_hit2", "battle_water_spray1", "battle_water_spray2", "battle_fire1", "battle_fire2", "battle_fire3"],
        t.projectiles = ["battle_plane_left", "battle_plane_right", "battle_torpedo_body", "bullet"],
        t
}();
