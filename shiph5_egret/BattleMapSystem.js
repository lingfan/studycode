
var BattleType;
!
function(t) {
    t[t.BATTLE_TYPE_GUIDE = 0] = "BATTLE_TYPE_GUIDE",
        t[t.BATTLE_TYPE_MAIN_PVE = 1] = "BATTLE_TYPE_MAIN_PVE",
        t[t.BATTLE_TYPE_MAIN_SPECIAL = 2] = "BATTLE_TYPE_MAIN_SPECIAL",
        t[t.BATTLE_TYPE_ARENA = 3] = "BATTLE_TYPE_ARENA",
        t[t.BATTLE_TYPE_PRESSURE = 4] = "BATTLE_TYPE_PRESSURE",
        t[t.BATTLE_TYPE_TRANSPORT = 5] = "BATTLE_TYPE_TRANSPORT",
        t[t.BATTLE_TYPE_VIRTUAL = 7] = "BATTLE_TYPE_VIRTUAL",
        t[t.BATTLE_TYPE_ROBBERY = 8] = "BATTLE_TYPE_ROBBERY",
        t[t.BATTLE_TYPE_GUARD_OIL = 9] = "BATTLE_TYPE_GUARD_OIL",
        t[t.BATTLE_TYPE_CAMP = 10] = "BATTLE_TYPE_CAMP",
        t[t.BATTLE_TYPE_EMAIL_REPLAY = 10] = "BATTLE_TYPE_EMAIL_REPLAY",
        t[t.BATTLE_TYPE_GLOBALCAMP = 11] = "BATTLE_TYPE_GLOBALCAMP",
        t[t.BATTLE_TYPE_GLOBALARENA = 12] = "BATTLE_TYPE_GLOBALARENA",
        t[t.BATTLE_TYPE_GOLDISLAND = 20] = "BATTLE_TYPE_GOLDISLAND",
        t[t.BATTLE_TYPE_POLT = 21] = "BATTLE_TYPE_POLT",
        t[t.BATTLE_TYPE_GUILD = 13] = "BATTLE_TYPE_GUILD",
        t[t.BATTLE_TYPE_CHALLENGEARMADA = 14] = "BATTLE_TYPE_CHALLENGEARMADA",
        t[t.BATTLE_TYPE_WORLDBATTLE_REPLAY = 15] = "BATTLE_TYPE_WORLDBATTLE_REPLAY",
        t[t.BATTLE_TYPE_ZONGHENG = 16] = "BATTLE_TYPE_ZONGHENG",
        t[t.BATTLE_TYPE_GLOBAL_GUILD = 33] = "BATTLE_TYPE_GLOBAL_GUILD"
}(BattleType || (BattleType = {}));
var BattleManager = function() {
    function t() {
        this.ZH_power = 0,
            this.fitst_base_exp = 0,
            this.fitst_base_gold = 0,
            this.initEvents()
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return e(t, "instance",
            function() {
                return t._instance || (t._instance = new t),
                    t._instance
            }),
        i.initEvents = function() {
            var t = this;
            EventManager.instance.addEventListener(EventTypes.EVENT_BATTLE_INFO,
                    function(e) {
                        t.pkg = e,
                            t.battlePlay(e, !1)
                    },
                    this),
                EventManager.instance.addEventListener(EventTypes.BATTLE_ACTION_END,
                    function() {
                        t.actionProcess()
                    },
                    this)
        },
        i.OnBattleStart = function(t) {
            this.setSavedBattleSpeed(),
                t.result && Log.logZDY("===========pkg.result:" + t.result + ",type:" + t.type),
                t.droplist && Log.logZDY("===========pkg.dropList:" + t.droplist.droplist.length + ",exp:" + t.exp + ",gold:" + t.gold + ",star:" + t.star),
                t.result > 0 ? (1 == t.result ? Toast.launch(Locales.get("battleResult_" + t.result)) : 2 == t.result ? Toast.launch(Locales.get("battleResult_" + t.result)) : 3 == t.result ? this.battleType == BattleType.BATTLE_TYPE_ROBBERY ? Toast.launch(Locales.get("battleResult_qiangduo")) : Toast.launch(Locales.get("zz_oilalert")) : 4 == t.result ? Toast.launch(Locales.get("battleResult_" + t.result)) : 5 == t.result ? Toast.launch(Locales.get("battleResult_" + t.result)) : 6 == t.result ? Toast.launch(Locales.get("battleResult_" + t.result)) : 8 == t.result ? Toast.launch(Locales.get("battleResult_" + t.result)) : 9 == t.result ? Toast.launch(Locales.get("battleResult_" + t.result)) : 10 == t.result || 11 == t.result && Toast.launch(Locales.get("battleResult_" + t.result)), this.hideCloud(), this.existBattle()) : (this.copyBattleInfo(t), this.battleInit(t), this.loadShips())
        },
        i.initTeamInfo = function(t, e) {
            t.uid == UserData.getInstance().uid ? (this.mine = BattleTeamOptData.processDataByTacticInfo(t), this.enemy = BattleTeamOptData.processDataByTacticInfo(e)) : (this.mine = BattleTeamOptData.processDataByTacticInfo(e), this.enemy = BattleTeamOptData.processDataByTacticInfo(t))
        },
        i.initMainBattle = function(t, e, a, i, n, s) {
            this.battleType = BattleType.BATTLE_TYPE_MAIN_PVE,
                MainWorldManager.instance.getNormalStageData() ? (WeatherManager.RandomList = MainWorldManager.instance.getNormalStageData().baseData.weather, BattleMapSystem.instance.setBattleMapType(MainWorldManager.instance.getNormalStageData().baseData.background)) : (WeatherManager.RandomList = [1, 2, 3], BattleMapSystem.instance.setBattleMapType(BattleMapType.MAP_NORMAL)),
                this.initTeamInfo(t, e);
            var r = DropOptData.processData(a);
            this.battleResult = {
                    dropList: r,
                    exp: i,
                    gold: n,
                    star: s,
                    isSpecal: !1
                },
                SceneManager.instance.SwitchScene(SceneType.BATTLE, !0)
        },
        i.initPressureBattle = function(t, e, a, i, n, s, r, o) {
            Log.logZDY("=========initPressureBattle========"),
                this.battleType = BattleType.BATTLE_TYPE_PRESSURE;
            var l = StagespecialdataParser.GetInstance().getItemById(e.uid);
            WeatherManager.RandomList = l.weather,
                BattleMapSystem.instance.setBattleMapType(l.background),
                this.initTeamInfo(t, e);
            var h = DropOptData.processData(a);
            this.battleResult = {
                    dropList: h,
                    exp: i,
                    gold: n,
                    star: s,
                    scence: r,
                    guildextraplusPer: o
                },
                SceneManager.instance.SwitchScene(SceneType.BATTLE, !0)
        },
        i.initTransportBattle = function(t, e, a, i, n, s, r, o) {
            Log.logZDY("=========initTransportBattle========"),
                this.battleType = BattleType.BATTLE_TYPE_TRANSPORT;
            var l = StagespecialdataParser.GetInstance().getItemById(e.uid);
            WeatherManager.RandomList = l.weather,
                BattleMapSystem.instance.setBattleMapType(l.background),
                this.initTeamInfo(t, e);
            var h = DropOptData.processData(a);
            this.battleResult = {
                    dropList: h,
                    exp: i,
                    gold: n,
                    star: s,
                    scence: r,
                    guildextraplusPer: o
                },
                SceneManager.instance.SwitchScene(SceneType.BATTLE, !0)
        },
        i.initRobbertyBattle = function(t, e, a, i, n, s) {
            Log.logZDY("=========initRobbertyBattle========"),
                this.battleType = BattleType.BATTLE_TYPE_ROBBERY,
                WeatherManager.RandomList = WeatherManager.instance.getRandomWeather(),
                BattleMapSystem.instance.setBattleMapType(BattleMapSystem.instance.getMapRandom()),
                this.initTeamInfo(t, e);
            var r = DropOptData.processData(a);
            this.battleResult = {
                    dropList: r,
                    exp: i,
                    gold: n,
                    star: s
                },
                SceneManager.instance.SwitchScene(SceneType.BATTLE, !0)
        },
        i.initGuardOilBattle = function(t, e, a, i, n, s, r) {
            Log.logZDY("=========initGuardOilBattle========"),
                this.battleType = BattleType.BATTLE_TYPE_GUARD_OIL,
                WeatherManager.RandomList = WeatherManager.instance.getRandomWeather(),
                BattleMapSystem.instance.setBattleMapType(BattleMapType.MAP_NORMAL),
                this.mine = BattleTeamOptData.processDataByTacticInfo(t),
                this.enemy = BattleTeamOptData.processDataByTacticInfo(e);
            var o = DropOptData.processData(a);
            this.battleResult = {
                    dropList: o,
                    exp: i,
                    gold: n,
                    star: s,
                    condition: r
                },
                SceneManager.instance.SwitchScene(SceneType.BATTLE, !0)
        },
        i.initMainSpecialBattle = function(t, e, a, i, n, s) {
            Log.logZDY("=========initMainSpecialBattle========"),
                this.battleType = BattleType.BATTLE_TYPE_MAIN_SPECIAL,
                WeatherManager.RandomList = MainWorldManager.instance.bakeSpecialData.weather,
                BattleMapSystem.instance.setBattleMapType(MainWorldManager.instance.bakeSpecialData.background),
                this.initTeamInfo(t, e);
            var r = DropOptData.processData(a);
            this.battleResult = {
                    dropList: r,
                    exp: i,
                    gold: n,
                    star: s
                },
                SceneManager.instance.SwitchScene(SceneType.BATTLE, !0)
        },
        i.initChallengsBattle = function(e, a, i, n, s, r, o) {
            Log.logZDY("=========initChallengsBattle========"),
                this.battleType = BattleType.BATTLE_TYPE_CHALLENGEARMADA,
                WeatherManager.RandomList = WeatherManager.instance.getRandomWeather(),
                BattleMapSystem.instance.setBattleMapType(BattleMapSystem.instance.getMapRandom()),
                t.replay_flag = !1,
                this.mine = BattleTeamOptData.processDataByTacticInfo(e),
                this.enemy = BattleTeamOptData.processDataByTacticInfo(a);
            var l = DropOptData.processData(i);
            this.battleResult = {
                    dropList: l,
                    exp: n,
                    gold: s,
                    star: r,
                    dmg: o,
                    isSpecal: !1
                },
                SceneManager.instance.SwitchScene(SceneType.BATTLE, !0)
        },
        i.initArenaBattle = function(t, e, a, i, n, s, r) {
            Log.logZDY("=========initArenaBattle========"),
                this.battleType = BattleType.BATTLE_TYPE_ARENA,
                WeatherManager.RandomList = WeatherManager.instance.getRandomWeather(),
                BattleMapSystem.instance.setBattleMapType(BattleMapSystem.instance.getMapRandom()),
                this.initTeamInfo(t, e),
                this.battleResult = {
                    dropList: [],
                    exp: i,
                    gold: n,
                    star: s,
                    honour: r
                },
                SceneManager.instance.SwitchScene(SceneType.BATTLE, !0)
        },
        i.EmailRepalybattleInit = function(e, a) {
            this.battleType = BattleType.BATTLE_TYPE_EMAIL_REPLAY,
                WeatherManager.RandomList = WeatherManager.instance.getRandomWeather(),
                BattleMapSystem.instance.setBattleMapType(BattleMapSystem.instance.getMapRandom()),
                t.replay_flag = !0,
                this.mine = BattleTeamOptData.processDataByTacticInfo(e),
                this.enemy = BattleTeamOptData.processDataByTacticInfo(a),
                MailManager.getInstance().atkInfo = e,
                MailManager.getInstance().defInfo = a,
                this.battleResult = {
                    dropList: [],
                    exp: 0,
                    gold: 0,
                    star: 0
                },
                SceneManager.instance.SwitchScene(SceneType.BATTLE, !0)
        },
        i.battleInit = function(t) {
            var e = t.droplist ? t.droplist.droplist : [];
            if (t.type == BattleType.BATTLE_TYPE_MAIN_PVE) this.initMainBattle(t.atkTac, t.defTac, e, t.exp, t.gold, t.star);
            else if (t.type == BattleType.BATTLE_TYPE_MAIN_SPECIAL) this.initMainSpecialBattle(t.atkTac, t.defTac, e, t.exp, t.gold, t.star);
            else if (t.type == BattleType.BATTLE_TYPE_ARENA) MainWorldManager.oldStar = 0,
                this.initArenaBattle(t.atkTac, t.defTac, null, t.exp, t.gold, t.star, t.militaryhonour);
            else if (t.type == BattleType.BATTLE_TYPE_PRESSURE) {
                MainWorldManager.oldStar = 0;
                var a = t.targetID;
                4 > a ? this.initPressureBattle(t.atkTac, t.defTac, e, t.exp, t.gold, t.star, t.scence, t.guildextraplusPer) : this.initTransportBattle(t.atkTac, t.defTac, e, t.exp, t.gold, t.star, t.scence, t.guildextraplusPer)
            } else t.type == BattleType.BATTLE_TYPE_TRANSPORT ? (MainWorldManager.oldStar = 0, this.initTransportBattle(t.atkTac, t.defTac, e, t.exp, t.gold, t.star, t.scence, t.guildextraplusPer)) : t.type == BattleType.BATTLE_TYPE_ROBBERY ? (MainWorldManager.oldStar = 0, this.initRobbertyBattle(t.atkTac, t.defTac, e, t.exp, t.gold, t.star)) : t.type == BattleType.BATTLE_TYPE_GUARD_OIL ? (MainWorldManager.oldStar = 0, this.initGuardOilBattle(t.atkTac, t.defTac, e, t.exp, t.gold, t.star, t.condition)) : t.type == BattleType.BATTLE_TYPE_CAMP ? CampBattleManager.instance.showBattleOver(t) : t.type == BattleType.BATTLE_TYPE_GLOBALCAMP || t.type == BattleType.BATTLE_TYPE_GUILD || (t.type == BattleType.BATTLE_TYPE_CHALLENGEARMADA ? this.initChallengsBattle(t.atkTac, t.defTac, e, t.exp, t.gold, t.star, t.dmg) : t.type == BattleType.BATTLE_TYPE_ZONGHENG);
            EffectManager.instance.initProjectiles()
        },
        i.clearLoadedFlags = function() {
            this.loadedShips = !1,
                this.loadedBattleEffects = !1,
                this.loadedDragonEffects = !1,
                this.loadedSkillEffects = !1,
                this.loadedMapEffect = !1,
                this.loadedProjectileEffects = !1
        },
        i.checkLoadedFlags = function() {
            var e = this;
            if (this.loadedShips && this.loadedMapEffect && this.loadedProjectileEffects && this.pkg) {
                Log.log("battlePlay1");
                var a = this.pkg,
                    i = function() {
                        Log.log("battlePlay2"),
                            e.battleRound = a.info.roundlist,
                            e.battleMaxNum = e.battleRound.length,
                            e.battleCurNum = 1,
                            t.instance.startBattle(),
                            BattleUI.instance.battleRoundChange(e.battleCurNum, e.battleMaxNum)
                    };
                this.isCloudShow ? t.instance.hideCloud(i, this) : i(),
                    this.pkg = null
            }
        },
        i.loadShips = function() {
            var t = this,
                e = [];
            if (this.mine)
                for (var a = 0,
                        i = this.mine.list; a < i.length; a++) {
                    var n = i[a],
                        s = Path.shipModelUrl + n.modelData.url;
                    e.indexOf(s) < 0 && e.push(s)
                }
            if (this.enemy)
                for (var r = 0,
                        o = this.enemy.list; r < o.length; r++) {
                    var n = o[r],
                        s = Path.shipModelUrl + n.modelData.url;
                    e.indexOf(s) < 0 && e.push(s)
                }
            e.length > 0 ? ResLoader.instance.preLoadResList(e,
                function() {
                    t.loadedShips = !0,
                        t.checkLoadedFlags()
                },
                this) : (this.loadedShips = !0, this.checkLoadedFlags())
        },
        i.showCloud = function(t, e) {
            var a = this;
            if (!this.isCloudShow) {
                this.isCloudShow = !0,
                    this.cloudMask = new eui.Group,
                    this.cloudMask.width = GameData.designWidth,
                    this.cloudMask.height = GameData.designHeight,
                    this.cloudMask.touchEnabled = !0,
                    GameLayer.getInstance().topLayer.addChild(this.cloudMask);
                var i = Path.battleEffectUrl + "cloudData.json",
                    n = Path.battleEffectUrl + "cloud.png",
                    s = Path.battleEffectUrl + "cloud.json";
                ResLoader.instance.preLoadResList([n, s, i],
                    function(i) {
                        if (a.isCloudShow) {
                            var n = i[0],
                                s = i[1],
                                r = i[2],
                                o = new dragonBones.EgretFactory;
                            o.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(r)),
                                o.addTextureAtlas(new dragonBones.EgretTextureAtlas(n, s));
                            var l = o.buildArmature("Stage");
                            if (dragonBones.WorldClock.clock.add(l), l.animation.gotoAndPlay("close", void 0, void 0, 1), t) {
                                var h;
                                h = function() {
                                        Utils.call(t, e),
                                            l.removeEventListener(dragonBones.AnimationEvent.COMPLETE, h, void 0)
                                    },
                                    l.addEventListener(dragonBones.AnimationEvent.COMPLETE, h, void 0)
                            }
                            a.factory = o,
                                a.cloudAnim = l,
                                GameLayer.getInstance().topLayer.addChild(a.cloudAnim.display)
                        }
                    },
                    this)
            }
        },
        i.hideCloud = function(t, e) {
            var a = this;
            this.isCloudShow && (this.isCloudShow = !1, this.cloudAnim ? (this.cloudAnim.animation.gotoAndPlay("open", void 0, void 0, 1), this.cloudAnim.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                function() {
                    dragonBones.WorldClock.clock.remove(a.cloudAnim),
                        Utils.removeNode(a.cloudAnim.display),
                        a.cloudAnim = null,
                        a.factory && (a.factory.dispose(!0), a.factory = null),
                        Utils.removeNode(a.cloudMask),
                        a.cloudMask = null;
                    var i = Path.battleEffectUrl + "cloudData.json",
                        n = Path.battleEffectUrl + "cloud.png",
                        s = Path.battleEffectUrl + "cloud.json";
                    ResLoader.instance.unloadResList([i, n, s]),
                        Utils.call(t, e)
                },
                this)) : Utils.call(t, e))
        },
        i.sendMainBattleStart = function(t) {
            this.currentStage = t,
                this.battleType = BattleType.BATTLE_TYPE_MAIN_PVE,
                RequestManager.GetInstance().enterBattle(BattleType.BATTLE_TYPE_MAIN_PVE, t, 0)
        },
        i.battlePlay = function(e, a) {
            var i = this;
            void 0 === a && (a = !0),
                this.copyBattleRound(e),
                Log.log("battlePlay1");
            var n = function() {
                Log.log("battlePlay2"),
                    i.battleRound = e.info.roundlist,
                    i.battleMaxNum = i.battleRound.length,
                    i.battleCurNum = 1,
                    t.instance.startBattle(),
                    BattleUI.instance.battleRoundChange(i.battleCurNum, i.battleMaxNum)
            };
            a ? EffectManager.instance.initSkillEffect(function() {
                    i.isCloudShow ? t.instance.hideCloud(n, i) : n()
                },
                this) : EffectManager.instance.initSkillEffect()
        },
        i.startBattle = function(e) {
            return void 0 === e && (e = !1), !this.battleRound && e ? void Log.logZDY("skip startBattle") : (1 != GuideManager.step || e ? (t.isStop = !1, t.isStart = !0) : (t.isStop = !0, t.isStart = !1), Log.logZDY("startBattle", t.isStop, t.isStart), void Utils.delayCall(1e3,
                function() {
                    EventManager.instance.dispatchEvent(EventTypes.BATTLE_ACTION_END)
                }))
        },
        i.copyBattleRound = function(t) {
            var e = {
                    info: {
                        roundlist: []
                    }
                },
                a = null,
                i = null;
            this.skillList = [];
            for (var n = 0,
                    s = t.info.roundlist.length; s > n; ++n) {
                a = {
                    roundid: t.info.roundlist[n].roundid,
                    actionlist: []
                };
                for (var r = 0,
                        o = t.info.roundlist[n].actionlist.length; o > r; ++r) i = t.info.roundlist[n].actionlist[r],
                    a.actionlist.push(i),
                    this.skillList.push(i.skillid);
                e.info.roundlist.push(a)
            }
            this.battleRoundCopy = e
        },
        i.copyTacticInfo = function(t) {
            var e = {};
            if (t) {
                e.uid = t.uid,
                    e.shiplist = [];
                for (var a = 0; a < t.shiplist.length; ++a) e.shiplist.push(t.shiplist[a]);
                e.captionid = t.captionid,
                    e.name = t.name,
                    e.camp = t.camp,
                    e.head = t.head,
                    e.power = t.power,
                    e.guildname = t.guildname,
                    e.level = t.level,
                    e.militaryrank = t.militaryrank,
                    e.viplevel = t.viplevel,
                    e.reserveshiplist = [];
                for (var a = 0; a < t.reserveshiplist.length; ++a) e.reserveshiplist.push(t.reserveshiplist[a])
            }
            return e
        },
        i.copyCampbattle = function(t) {
            var e = {};
            return t && (e.morale = t.morale, e.targetmorale = t.targetmorale, e.bloodper = t.bloodper, e.attackerblood = t.attackerblood, e.defenderblood = t.defenderblood, e.attackername = t.attackername, e.defendername = t.defendername, e.campbattlescore = t.campbattlescore, e.attacknum = t.attacknum, e.winningsteak = t.winningsteak, e.kill = t.kill, e.port = t.port),
                e
        },
        i.copyDropList = function(t) {
            var e = {
                droplist: []
            };
            if (t)
                for (var a = 0; a < t.droplist.length; ++a) e.droplist.push(t.droplist[a]);
            return e
        },
        i.copyBattleInfo = function(t) {
            this.battleInfoCopy = {},
                this.battleInfoCopy.type = t.type,
                this.battleInfoCopy.result = t.result,
                this.battleInfoCopy.targetID = t.targetID,
                this.battleInfoCopy.rank = t.rank,
                this.battleInfoCopy.atkTac = this.copyTacticInfo(t.atkTac),
                this.battleInfoCopy.defTac = this.copyTacticInfo(t.defTac),
                this.battleInfoCopy.droplist = this.copyDropList(t.droplist),
                this.battleInfoCopy.exp = t.exp,
                this.battleInfoCopy.gold = t.gold,
                this.battleInfoCopy.star = t.star,
                this.battleInfoCopy.condition = t.condition,
                this.battleInfoCopy.militaryhonour = t.militaryhonour,
                this.battleInfoCopy.campbattle = this.copyCampbattle(t.campbattle),
                this.battleInfoCopy.scence = t.scence,
                this.battleInfoCopy.guildextraplusPer = t.guildextraplusPer,
                this.battleInfoCopy.dmg = t.dmg
        },
        i.actionProcess = function() {
            t.isStop || (null == this.currentRound && (this.battleRound.length > 0 ? (this.currentRound = this.battleRound[0], this.battleCurNum = this.battleMaxNum - this.battleRound.length + 1, BattleUI.instance.battleRoundChange(this.battleCurNum, this.battleMaxNum)) : Utils.delayCall(.5 * t.PLAYFRAMES,
                function() {
                    t.instance.endBattle()
                })), this.currentRound && (Log.logZDY("========battleAction." + this.currentRound.actionlist.length + "==========", this.battleCurNum), this.currentRound.actionlist.length > 0 ? (this.currentAction = this.currentRound.actionlist.shift(), EventManager.instance.dispatchEvent(EventTypes.BATTLE_ACTION_START, this.currentAction)) : (this.currentRound = null, this.battleRound.shift(), t.instance.actionProcess())))
        },
        i.endBattle = function(e) {
            var a = this;
            Log.logZDY("==========battleEnd============"),
                t.isStop = !0,
                t.isStart = !1,
                HandbookManager.instance.checkMsg(),
                ResLoader.instance.loadResGroup("BattleAccount",
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.BattleResult, a.battleResult)
                    },
                    this)
        },
        i.clearBattle = function() {
            this.battleRound = null,
                this.currentRound = null,
                this.currentAction = null,
                this.battleResult = null,
                this.mine = null,
                this.enemy = null,
                this.skillList = null
        },
        i.getSkillList = function() {
            return this.skillList
        },
        i.setNodeRotation = function(t, e, a, i, n, s) {
            var r = Math.atan2(n - a, i - e);
            r = r / Math.PI * 180,
                t ? s.rotation = r : s.rotation = r
        },
        i.sceneSwitch = function(e, a, i) {
            var n = this;
            void 0 === i && (i = !0),
                this.battleInfoCopy = null,
                this.battleRoundCopy = null,
                SceneManager.instance.SwitchScene(SceneType.HOME, !1,
                    function() {
                        EffectManager.instance.clearEffect(),
                            UserData.getInstance().sendDetailMessage(),
                            n.battleType == BattleType.BATTLE_TYPE_MAIN_PVE ? (t.isNextStage = !1, i && (MainWorldManager.instance.openPVEWindow(), Utils.delayCall(1,
                                function() {
                                    MainUI.instance.bottomUI.moveSelectFrameToBtn("btnPVE")
                                }))) : n.battleType == BattleType.BATTLE_TYPE_MAIN_SPECIAL ? (t.isNextStage = !1, i && MainWorldManager.instance.openPVESpecialWindow()) : n.battleType == BattleType.BATTLE_TYPE_ARENA ? i && (WindowManager.getInstance().show(WindowManager.windowType.Zhenba), WindowManager.getInstance().show(WindowManager.windowType.PVP), Utils.delayCall(1,
                                function() {
                                    MainUI.instance.bottomUI.moveSelectFrameToBtn("btnPVP")
                                })) : n.battleType == BattleType.BATTLE_TYPE_ZONGHENG || (n.battleType == BattleType.BATTLE_TYPE_ROBBERY ? (WindowBattleResult.OldRandomItemData = void 0, i && (WindowManager.getInstance().show(WindowManager.windowType.Zhenba), WindowManager.getInstance().show(WindowManager.windowType.ZhenbaPrecious, {
                                auto: !0
                            }), Utils.delayCall(1,
                                function() {
                                    MainUI.instance.bottomUI.moveSelectFrameToBtn("btnPVP")
                                }))) : n.battleType == BattleType.BATTLE_TYPE_PRESSURE ? i && (WindowManager.getInstance().show(WindowManager.windowType.Zhenba), WindowManager.getInstance().show(WindowManager.windowType.ZhenbaEctype, {
                                auto: !0
                            }), Utils.delayCall(1,
                                function() {
                                    MainUI.instance.bottomUI.moveSelectFrameToBtn("btnPVP")
                                })) : n.battleType == BattleType.BATTLE_TYPE_TRANSPORT ? i && (WindowManager.getInstance().show(WindowManager.windowType.Zhenba), WindowManager.getInstance().show(WindowManager.windowType.ZhenbaEctype, {
                                auto: !0
                            }), Utils.delayCall(1,
                                function() {
                                    MainUI.instance.bottomUI.moveSelectFrameToBtn("btnPVP")
                                })) : n.battleType == BattleType.BATTLE_TYPE_GUARD_OIL ? i && (WindowManager.getInstance().show(WindowManager.windowType.Zhenba), WindowManager.getInstance().show(WindowManager.windowType.DefenseOil), Utils.delayCall(1,
                                function() {
                                    MainUI.instance.bottomUI.moveSelectFrameToBtn("btnPVP")
                                })) : n.battleType == BattleType.BATTLE_TYPE_GLOBALARENA || n.battleType == BattleType.BATTLE_TYPE_POLT || n.battleType == BattleType.BATTLE_TYPE_GOLDISLAND || (n.battleType == BattleType.BATTLE_TYPE_EMAIL_REPLAY ? i && WindowManager.getInstance().show(WindowManager.windowType.Mail) : n.battleType == BattleType.BATTLE_TYPE_WORLDBATTLE_REPLAY || n.battleType == BattleType.BATTLE_TYPE_GLOBAL_GUILD || n.battleType == BattleType.BATTLE_TYPE_CHALLENGEARMADA && i && (WindowManager.getInstance().show(WindowManager.windowType.Zhenba), WindowManager.getInstance().show(WindowManager.windowType.QiJvTou), Utils.delayCall(1,
                                function() {
                                    MainUI.instance.bottomUI.moveSelectFrameToBtn("btnPVP")
                                })))),
                            Utils.call(e, a)
                    })
        },
        i.existBattle = function(e, a, i) {
            void 0 === i && (i = !0),
                this.setBattleSpeed(1),
                t.replay_flag = !1,
                MainWorldManager.newStar = 0,
                WeatherManager.instance.clear(),
                t.instance.clearBattle(),
                (3 == GuideManager.step || 15 == GuideManager.step || 31 == GuideManager.step || 40 == GuideManager.step) && (this.battleType = BattleType.BATTLE_TYPE_GUIDE, GuideManager.nextStep()),
                this.sceneSwitch(function() {
                        Utils.call(e, a),
                            UserData.getInstance().checkUpgrade(),
                            HandbookManager.instance.checkMsg()
                    },
                    void 0, i)
        },
        i.clearBattleforGoldIsland = function() {
            this.battleRound = null,
                this.currentRound = null,
                this.currentAction = null,
                this.battleResult = null,
                this.mine = null,
                this.enemy = null,
                this.skillList = null
        },
        i.getBattleType = function() {
            return this.battleType
        },
        i.setSavedBattleSpeed = function() {
            var e = UserDefault.instance.getStringForKey(t.BATTLE_SPEED_SAVE_STR);
            e = e ? parseInt(e) : 1,
                e > UserExpDataLib.instance.getSpeedUpLv(UserData.getInstance().getPlayerLevel()) && (e = UserExpDataLib.instance.getSpeedUpLv(UserData.getInstance().getPlayerLevel())),
                this.setBattleSpeed(e)
        },
        i.setBattleSpeed = function(e, a) {
            void 0 === a && (a = !1),
                1 == e ? t.PLAYFRAMES = t.BATTLE_SPEED_X1 : 2 == e ? t.PLAYFRAMES = t.BATTLE_SPEED_X2 : 3 == e && (t.PLAYFRAMES = t.BATTLE_SPEED_X3),
                t.CURRENT_SPEED_TYPE = e,
                1 == a && (UserDefault.instance.setStringForKey(t.BATTLE_SPEED_SAVE_STR, e), Log.logZDY("===========setSpeed============"))
        },
        i.replay = function() {
            t.replay_flag = !0,
                this.battleType == BattleType.BATTLE_TYPE_EMAIL_REPLAY ? (this.EmailRepalybattleInit(MailManager.getInstance().pkg.atkTac, MailManager.getInstance().pkg.defTac), this.battlePlay(this.battleRoundCopy)) : this.battleType == BattleType.BATTLE_TYPE_WORLDBATTLE_REPLAY ? this.battlePlay(this.battleRoundCopy) : this.battleType == BattleType.BATTLE_TYPE_GLOBAL_GUILD ? this.battlePlay(this.battleRoundCopy) : this.battleType == BattleType.BATTLE_TYPE_GOLDISLAND || this.battleType == BattleType.BATTLE_TYPE_POLT || (this.battleInit(this.battleInfoCopy), this.battlePlay(this.battleRoundCopy))
        },
        i.checkEndButtonShow = function() {
            var e = !0;
            return this.battleType == BattleType.BATTLE_TYPE_MAIN_PVE ? (MainWorldManager.oldStar < 3 && (e = !1), 3 == MainWorldManager.newStar && (e = !0), 3 == MainWorldManager.oldStar && (e = !0), 1 == t.isNextStage && (e = !1)) : this.battleType == BattleType.BATTLE_TYPE_MAIN_SPECIAL ? (MainWorldManager.oldStar < 3 && (e = !1), 3 == MainWorldManager.newStar && (e = !0), 3 == MainWorldManager.oldStar && (e = !0), 1 == t.isNextStage && (e = !1)) : this.battleType == BattleType.BATTLE_TYPE_ARENA ? e = !0 : this.battleType == BattleType.BATTLE_TYPE_PRESSURE ? e = !0 : this.battleType == BattleType.BATTLE_TYPE_TRANSPORT ? e = !0 : this.battleType == BattleType.BATTLE_TYPE_GUARD_OIL ? (e = WindowDefenseOil.maxstage > WindowDefenseOil.curstage ? !0 : !1, 1 == VipParser.GetInstance().getItemById(UserData.getInstance()._vip).oilguardskip && (e = !0)) : this.battleType == BattleType.BATTLE_TYPE_VIRTUAL ? e = !0 : this.battleType == BattleType.BATTLE_TYPE_ROBBERY && (e = !0),
                e
        },
        i.checkFightisShow = function() {
            var t = !0;
            return this.battleType == BattleType.BATTLE_TYPE_CHALLENGEARMADA ? t = !1 : this.battleType == BattleType.BATTLE_TYPE_ARENA ? t = !1 : this.battleType == BattleType.BATTLE_TYPE_ZONGHENG ? t = !1 : this.battleType == BattleType.BATTLE_TYPE_PRESSURE ? t = !1 : this.battleType == BattleType.BATTLE_TYPE_TRANSPORT ? t = !1 : this.battleType == BattleType.BATTLE_TYPE_GUARD_OIL ? t = !1 : this.battleType == BattleType.BATTLE_TYPE_ROBBERY || (this.battleType == BattleType.BATTLE_TYPE_EMAIL_REPLAY ? t = !1 : this.battleType == BattleType.BATTLE_TYPE_WORLDBATTLE_REPLAY ? t = !1 : this.battleType == BattleType.BATTLE_TYPE_GLOBAL_GUILD ? t = !1 : this.battleType == BattleType.BATTLE_TYPE_GOLDISLAND ? t = !1 : this.battleType == BattleType.BATTLE_TYPE_POLT && (t = !1)),
                UserData.getInstance().getPlayerLevel() < 20 && this.battleType != BattleType.BATTLE_TYPE_ROBBERY && (t = !1),
                t
        },
        i.checkReplayShow = function() {
            return this.battleType != BattleType.BATTLE_TYPE_GOLDISLAND
        },
        i.quickFight = function(e) {
            void 0 === e && (e = void 0);
            var a = null;
            if (a = e, this.battleType == BattleType.BATTLE_TYPE_MAIN_PVE)
                if (a) {
                    var i = StagedataParser.GetInstance().getItemById(a),
                        n = MilitaryrankParser.GetInstance().getItemByField("id", UserData.getInstance().getMilitaryranktype()),
                        s = 2 * i.exp,
                        r = 2 * i.gold,
                        o = 0,
                        l = 0;
                    if (n)
                        for (var h = n.privilege,
                                c = 0,
                                d = h; c < d.length; c++) {
                            var g = d[c],
                                u = MilitaryrightsParser.GetInstance().getItemById(g);
                            1 == u.righttype && (1 == u.numtype ? o += s * u.num / 1e3 : 2 == u.numtype && (o += u.num)),
                                10 == u.righttype && (1 == u.numtype ? l += r * u.num / 1e3 : 2 == u.numtype && (l += u.num))
                        }
                    for (var p = 0,
                            m = [], _ = 0, v = GuildManager.getInstance().GuildScienceList; _ < v.length; _++) {
                        var f = v[_];
                        m.push({
                            basedata: GuildscienceParser.GetInstance().getItemById(f.id),
                            data: f.level
                        })
                    }
                    var I = null;
                    m[1] && (I = GuildsciencedataParser.GetInstance().getItemById(m[1].data));
                    var T = 0;
                    I && (T = r * I["guildscience" + m[1].basedata.id + "Effect"] / 1e4),
                        I = null,
                        null != m[2] && (I = GuildsciencedataParser.GetInstance().getItemById(m[2].data));
                    var y = 0;
                    I && (y = s * I["guildscience" + m[2].basedata.id + "Effect"] / 1e4),
                        o = Math.ceil(o + p + y),
                        l = Math.ceil(l + T),
                        this.setFirstBaseData(s + o, r + l),
                        t.isNextStage = !0,
                        UnlockManager.NextStageID = a,
                        UnlockManager.StageId = a,
                        this.sendMainBattleStart(a);
                    var D = a.toString().substr(2, 2);
                    MainWorldManager.instance.sendEnterCampaign(Number(D), MainWorldManager.BATTLE_TYPE_NORMAL);
                    var P = StageDataLib.instance.getAreaIdById(a),
                        C = P.areaId,
                        E = P.campaignId,
                        S = (P.stageIndex, StageDataLib.instance.getCurrentActiveArea(C, E));
                    MainWorldManager.instance.clearLookArea(),
                        EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_SHOW_CAMPAIGN, S),
                        EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_BAKE, {
                            type: 1,
                            id: Number(D)
                        })
                } else this.sendMainBattleStart(this.currentStage);
            else if (this.battleType == BattleType.BATTLE_TYPE_MAIN_SPECIAL)
                if (null != a) {
                    t.isNextStage = !0,
                        t.instance.sendMainSpecialBattleStart(a);
                    var b = StagespecialdataParser.GetInstance().getItemById(a);
                    MainWorldManager.instance.sendEnterCampaign(0, MainWorldManager.BATTLE_TYPE_SPECIAL),
                        MainWorldManager.instance.clearLookArea(),
                        EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_BAKE, {
                            type: 2,
                            specialBaseData: b
                        })
                } else t.instance.sendMainSpecialBattleStart(this.currentCampain);
            else if (this.battleType == BattleType.BATTLE_TYPE_ARENA) {
                var L = ArenaManager.instance.rankData;
                if (L.remaincount <= 0);
                else {
                    var M = ArenaManager.instance.getQuickFight_value();
                    RequestManager.GetInstance().enterBattle(BattleType.BATTLE_TYPE_ARENA, M[0], M[1], M[2])
                }
            } else this.battleType == BattleType.BATTLE_TYPE_ROBBERY ? WindowPreciousBattle.preciousBattle() : this.battleType == BattleType.BATTLE_TYPE_PRESSURE ? WindowEctype.battleEctype() : this.battleType == BattleType.BATTLE_TYPE_TRANSPORT ? WindowEctype.battleEctype() : this.battleType == BattleType.BATTLE_TYPE_GUARD_OIL && WindowDefenseOil.resetBattleFun()
        },
        i.checkSpdUpLv = function(t) {
            var e = !1,
                a = UserExpDataLib.instance.checkSpeedUpLv(UserData.getInstance().getPlayerLevel(), t);
            return a[0] ? e = !0 : UserData.getInstance().getPlayerLevel() < 5 ? Toast.launch(Locales.get("ui_mainBattle_spdUpLvLmt", a[1], 2)) : UserData.getInstance().getPlayerLevel() < 25 && Toast.launch(Locales.get("ui_mainBattle_spdUpLvLmt", a[1], 3)),
                e
        },
        i.sendMainSweepBattleStart = function(t, e) {
            this.currentStage = t,
                RequestManager.GetInstance().enterSweepBattle(BattleType.BATTLE_TYPE_MAIN_PVE, this.currentStage, 0, e)
        },
        i.sendMainSpeSweepBattleStart = function(t, e) {
            this.currentStage = t,
                RequestManager.GetInstance().enterSweepBattle(BattleType.BATTLE_TYPE_MAIN_SPECIAL, this.currentStage, 0, e)
        },
        i.sendMainSpecialBattleStart = function(t) {
            this.currentCampain = t,
                UnlockManager.specialStageId = t,
                RequestManager.GetInstance().enterBattle(BattleType.BATTLE_TYPE_MAIN_SPECIAL, t, 0)
        },
        i.startVirtualBattle = function() {
            var t = VirtualBattleRoundDataLib.instance.getRoundData();
            this.battlePlay(t)
        },
        i.getNextStageId = function() {
            var e = void 0,
                a = t.instance.getCurrentStage(),
                i = t.instance.getBattleType();
            if (i == BattleType.BATTLE_TYPE_MAIN_PVE) {
                var n = t.instance.getCurrentStage();
                if (t.instance.getCurrentStage()) {
                    var s = Math.floor(n / 1e4),
                        r = Math.floor(n / 100) % 100,
                        o = n % 100,
                        l = null;
                    a = 1e4 * s + 100 * r + o + 1,
                        l = StagedataParser.GetInstance().getItemById(a),
                        l || (a = 1e4 * s + 100 * (r + 1) + 1, l = StagedataParser.GetInstance().getItemById(a)),
                        l || (a = 1e4 * (s + 1) + 100 * (r + 1) + 1, l = StagedataParser.GetInstance().getItemById(a)),
                        l && (e = MainStageOptData.IsWinStage(a))
                }
            } else if (i == BattleType.BATTLE_TYPE_MAIN_SPECIAL) {
                a = t.instance.getCurrentSpeStage() + 1;
                var l = StagespecialdataParser.GetInstance().getItemById(a);
                l && 0 == MainWorldManager.oldStar && (e = MainStageOptData.IsWinSpeStage(a))
            }
            return [e, a]
        },
        i.getLeftTeam = function() {
            return this.mine
        },
        i.getRightTeam = function() {
            return this.enemy
        },
        i.setCurrentStage = function(t) {
            this.currentStage = t
        },
        i.getCurrentStage = function() {
            return this.currentStage
        },
        i.getCurrentSpeStage = function() {
            return this.currentCampain
        },
        i.setFirstBaseData = function(t, e) {
            this.fitst_base_exp = t,
                this.fitst_base_gold = e
        },
        i.getFirstBaseExpData = function() {
            return this.fitst_base_exp
        },
        i.getFirstBaseGoldData = function() {
            return this.fitst_base_gold
        },
        i.getSweepCount = function(t, e, a) {
            void 0 === a && (a = 5);
            var i = 0,
                n = t.baseData.dayAtkCount - t.serverData.todayCount,
                s = VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).saodangcishu,
                r = s - UserData.getInstance().sweepcount;
            if (-1 != s) {
                var o = n > r ? r : n;
                i = a > o ? o : a
            } else i = n > a ? a : n;
            var l = Locales.get("panel_sweep_btn_saodang", i);
            return 0 == e && (l = Locales.get("panel_sweep_btn_saodang", 1)), [l, i]
        },
        i.SweepCountCheck = function(t) {
            var e = (t.baseData.dayAtkCount - t.serverData.todayCount, VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).saodangcishu),
                a = e - UserData.getInstance().sweepcount;
            return -1 != e ? a > 0 : !0
        },
        i.sweepCheck = function(t, e) {
            var a = !0;
            UserData.getInstance().getLeftSweepTimes() <= 0 && (a = !1, Toast.launch(Locales.get("panel_sweep_windword_1"), 16711680)),
                t.baseData.dayAtkCount - t.serverData.todayCount == 0 && (a = !1, Toast.launch(Locales.get("panel_sweep_windword_2"), 16711680));
            var i = 0;
            if (i = e ? t.baseData.costOil * e : t.baseData.costOil, i > UserData.getInstance().getRes(TypeDefine.RES.Oil)) {
                a = !1;
                var n = ItemsManager.getInstance().getItemById(1076);
                if (n && n.count > 0) {
                    var s = {};
                    s.title = Locales.get("panel_AlertLueduolingBuy_txt_comment_6"),
                        s.itemId = 1076,
                        WindowManager.getInstance().show(WindowManager.windowType.ItemUse, s)
                } else WindowManager.getInstance().show(WindowManager.windowType.OilRefining)
            }
            return a
        },
        i.checkCount = function(t, e) {
            1 == this.BuyCheck(t, e) && (1 == this.SweepCountCheck(t) ? Toast.launch(Locales.get("battleResult_saodang"), 16711680) : Toast.launch(Locales.get("battleResult_saodang_2"), 16711680))
        },
        i.BuyCheck = function(t, e) {
            if (0 == t.baseData.resetCount) return !0;
            var a = t,
                i = 0;
            return null != a.serverData && (i = a.serverData.todayCount),
                a.baseData.dayAtkCount - i == 0 ? a.serverData.todaybuyCnt == a.baseData.resetCount ? !0 : (WindowManager.getInstance().show(WindowManager.windowType.StageCountBuy, a), !1) : !0
        },
        t.BATTLE_SPEED_X1 = Const.FRAME_NUM_24 / Const.FRAME_NUM_24,
        t.BATTLE_SPEED_X2 = Const.FRAME_NUM_24 / Const.FRAME_MAX,
        t.BATTLE_SPEED_X3 = Const.FRAME_NUM_24 / Const.FRAME_MAX1,
        t.PLAYFRAMES = t.BATTLE_SPEED_X1,
        t.BATTLE_SPEED_SAVE_STR = "BattleSpeed",
        t.CURRENT_SPEED_TYPE = 1,
        t.replay_flag = !1,
        t.onemoreplay_flag_win = !1,
        t.onemoreplay_flag_lost = !1,
        t.isEmailReplay = !1,
        t.isNextStage = !1,
        t
}();
