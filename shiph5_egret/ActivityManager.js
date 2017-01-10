(Interfaces, "Interfaces"),
    Number.prototype.toFixedInteger = function(t) {
        for (var e = this.toString(); e.length < t;) e = "0" + e;
        return e
    },
    String.prototype.format = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
        for (var a = this,
                i = 0; i < t.length; i++) a = a.replace(RegExp("\\{" + i + "\\}", "g"), t[i].toString());
        return a
    };
var Main = function(t) {
    function e() {
        t.call(this),
            this.isThemeLoadEnd = !1,
            this.isResourceLoadEnd = !1,
            this.themeLoadNum = 0,
            e.instance = this,
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.showOrientationTip = function(t) {
            0 == Number(t) ? e.tipBg && (e.tipBg.visible = !1) : e.tipBg ? (e.tipBg.visible = !0, e.instance.setChildIndex(e.tipBg, e.instance.numChildren)) : (e.tipBg = new egret.Bitmap(RES.getRes("tip_jpg")), e.instance.addChild(e.tipBg))
        },
        i.onAddToStage = function(t) {
            PlatformManager.instance.init(),
                egret.sys.screenAdapter = new AutoScreenAdapter;
            var e = new AssetAdapter;
            this.stage.registerImplementation("eui.IAssetAdapter", e),
                this.stage.registerImplementation("eui.IThemeAdapter", new ThemeAdapter),
                RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this),
                RES.loadConfig("resource/defaultVersion.res.json"
                    /*tpa=resource/defaultVersion.res.json*/
                    , "resource/"),
                this.stage.scaleMode = egret.StageScaleMode.EXACT_FIT
        },
        i.onConfigComplete = function(t) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            var e = new eui.Theme("resource/preload.thm.json"
                /*tpa=resource/preload.thm.json*/
                , this.stage);
            e.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this),
                RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
                RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this),
                RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
                RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this)
        },
        i.onThemeLoadComplete = function() {
            this.isThemeLoadEnd = !0,
                RES.loadGroup("Loading")
        },
        i.loadResource = function() {
            Transport.loginPanelBool ? RES.loadGroup("Ui", 0) : RES.loadGroup("Ui", 0)
        },
        i.onResourceLoadComplete = function(t) {
            Transport.loginPanelBool || (Path.resHeadUrl = ""),
                "Loading" == t.groupName ? (changeCol(), this.loadingPanel = new WindowLoading, this.loadingPanel.setLoadLabel("加载新手资源")) : "Tutorial" == t.groupName ? this.loadingPanel.setLoadLabel("加载游戏背景") : "Backgroundimage" == t.groupName ? this.loadingPanel.setLoadLabel("加载游戏UI") : "Ui" == t.groupName && (this.loadingPanel.setLoadLabel("加载游戏数据"), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this), this.isResourceLoadEnd = !0, this.OnResOrThemeLoaded()),
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClickScreen, this, !0)
        },
        i.onClickScreen = function(t) {
            var e = RES.getRes("screenClick_png"),
                a = RES.getRes("screenClick_json"),
                i = RES.getRes("effect_click_json");
            if (e && a && i) {
                var n = new dragonBones.EgretFactory;
                n.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(i)),
                    n.addTextureAtlas(new dragonBones.EgretTextureAtlas(e, a));
                var s = n.buildArmature("click");
                dragonBones.WorldClock.clock.add(s);
                s.animation.gotoAndPlay("normal");
                this.addChild(s.display),
                    s.display.x = t.stageX,
                    s.display.y = t.stageY,
                    s.animation.timeScale = 2,
                    s.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                        function() {
                            Utils.removeDragonBone(s)
                        },
                        void 0)
            }
        },
        i.OnResOrThemeLoaded = function() {
            var t = this;
            this.isThemeLoadEnd && this.isResourceLoadEnd && (new Locales(function() {
                GameEventDispatcher.getInstance().addEventListener(GameEvent.CONFIG_PROGRESS, t.loadConfigProgress, t),
                    t.preloadConfigs(function() {
                        ResLoader.instance.preLoadResList(["resource/proto/proto.json"
                                /*tpa=resource/proto/proto.json*/
                            ],
                            function(e) {
                                GameEventDispatcher.getInstance().removeEventListener(GameEvent.CONFIG_PROGRESS, t.loadConfigProgress, t),
                                    t.loadTheme(),
                                    Transport.protoCache = e[0],
                                    dcodeIO.ProtoBuf.msgs = e[0]
                            },
                            t)
                    })
            }), this.stage.addEventListener(egret.Event.ENTER_FRAME, GameTick.tick, this))
        },
        i.loadTheme = function() {
            var t = this;
            this.loadingPanel.setLoadLabel("加载主题文件");
            var e = new eui.Theme("resource/default.thm.json"
                /*tpa=resource/default.thm.json*/
                , this.stage);
            this.tickId = egret.setInterval(function() {
                        t.thmTick()
                    },
                    this, 50),
                e.addEventListener(eui.UIEvent.COMPLETE, this.startLoginScene, this)
        },
        i.thmTick = function() {
            this.themeLoadNum += 1,
                this.themeLoadNum >= 10 && (this.themeLoadNum = 10, egret.clearInterval(this.tickId)),
                this.loadingPanel && this.loadingPanel.setProgress(this.themeLoadNum, 10)
        },
        i.loadConfigProgress = function(t) {
            this.loadingPanel && this.loadingPanel.setProgress(t.parames.itemsLoaded, t.parames.itemsTotal)
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("activityitem"),
                e.push("arenaNPCData"),
                e.push("buffData"),
                e.push("captainData"),
                e.push("captainPieceData"),
                e.push("exp"),
                e.push("item"),
                e.push("medalData"),
                e.push("medalpiece"),
                e.push("MilitaryRank"),
                e.push("npcData"),
                e.push("paperData"),
                e.push("paperPieceData"),
                e.push("parts"),
                e.push("partspieces"),
                e.push("shipData"),
                e.push("shipModelData"),
                e.push("shopData"),
                e.push("skillData"),
                e.push("virtualData"),
                e.push("vip"),
                e.push("mailData"),
                e.push("MilitaryRights"),
                e.push("guildscience"),
                e.push("guildscienceData"),
                e.push("namePlayerData");
            var a = [];
            a.push(ActivityitemParser),
                a.push(ArenanpcdataParser),
                a.push(BuffdataParser),
                a.push(CaptaindataParser),
                a.push(CaptainpiecedataParser),
                a.push(ExpParser),
                a.push(ItemParser),
                a.push(MedaldataParser),
                a.push(MedalpieceParser),
                a.push(MilitaryrankParser),
                a.push(NpcdataParser),
                a.push(PaperdataParser),
                a.push(PaperpiecedataParser),
                a.push(PartsParser),
                a.push(PartspiecesParser),
                a.push(ShipdataParser),
                a.push(ShipmodeldataParser),
                a.push(ShopdataParser),
                a.push(SkilldataParser),
                a.push(VirtualdataParser),
                a.push(VipParser),
                a.push(MaildataParser),
                a.push(MilitaryrightsParser),
                a.push(GuildscienceParser),
                a.push(GuildsciencedataParser),
                a.push(NameplayerdataParser),
                ConfigData.preLoadDats(e, a,
                    function() {
                        t()
                    })
        },
        i.onItemLoadError = function(t) {
            console.warn("Url:" + t.resItem.url + " has failed to load")
        },
        i.onResourceLoadError = function(t) {
            console.warn("Group:" + t.groupName + " has failed to load"),
                this.onResourceLoadComplete(t)
        },
        i.onResourceProgress = function(t) {
            "preload" == t.groupName,
                this.loadingPanel && this.loadingPanel.setProgress(t.itemsLoaded, t.itemsTotal)
        },
        i.startCreateScene = function() {
            Toast.init(GameLayer.getInstance().topLayer, RES.getRes(Path.resHeadUrl + "juesexinxi_toumingdi_png"))
        },
        i.startLoginScene = function() {
            Plantform.getInstanceOf().openFirst(),
                this.loadingPanel.setProgress(10, 10),
                egret.clearInterval(this.tickId),
                GameLayer.getInstance().setRoot(),
                e.logBool && (e.labelLen = 0, e.logStr = "", e.logTxt = new eui.Label, e.logTxt.touchEnabled = !1, e.logTxt.width = 640, e.logTxt.height = 960, e.logTxt.wordWrap = !0, e.logTxt.text = "打印调试窗口:", e.logTxt.visible = !1, this.addChild(e.logTxt)),
                Toast.init(GameLayer.getInstance().topLayer, RES.getRes(Path.resHeadUrl + "juesexinxi_toumingdi_png")),
                this.login(),
                egret.Ticker.getInstance().register(function(t) {
                        dragonBones.WorldClock.clock.advanceTime(.001 * t)
                    },
                    this),
                SceneManager.instance.SwitchScene(SceneType.HOME),
                GameLayer.getInstance().hideAll()
        },
        i.login = function() {
            Transport.loginPanelBool ? (e.instance.loadingPanel || (e.instance.loadingPanel = new WindowLoading), e.instance.loadingPanel.showLogin()) : (e.instance.setChildIndex(e.instance.loadingPanel, e.instance.numChildren), PlatformManager.instance.loginVerify(function(t) {
                e.instance.loadingPanel || (e.instance.loadingPanel = new WindowLoading),
                    GameData.openid = PlatformManager.instance.myself.openid,
                    GameData.uid = PlatformManager.instance.myself.userid,
                    GameData.lastServerId = PlatformManager.instance.myself.serverId,
                    GameData.pf = PlatformManager.instance.myself.platformName,
                    e.instance.loadingPanel.showServerListUI(),
                    e.instance.loadingPanel.requestServerList(),
                    Plantform.getInstanceOf().openGame()
            }))
        },
        i.clearLoadingPanel = function() {
            this.loadingPanel && this.loadingPanel.clear()
        },
        e.trace = function() {
            for (var t = [], a = 0; a < arguments.length; a++) t[a - 0] = arguments[a];
            e.logBool && (e.logStr += t.join(",") + "\n", e.labelLen++, e.logTxt.text = e.logStr, e.labelLen > 20 && (e.logTxt.scrollV = e.labelLen - 20 + 1), e.instance.setChildIndex(e.logTxt, e.instance.numChildren)),
                console.log(t.join(","))
        },
        e.logBool = !1,
        e
}(egret.DisplayObjectContainer);
