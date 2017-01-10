
var BattleMapType;
!
function(t) {
    t[t.MAP_NONE = 0] = "MAP_NONE",
        t[t.MAP_NORMAL = 1] = "MAP_NORMAL",
        t[t.MAP_DESTROY = 2] = "MAP_DESTROY",
        t[t.MAP_BEACH = 3] = "MAP_BEACH",
        t[t.MAP_ISLAND = 4] = "MAP_ISLAND",
        t[t.MAP_ROCK = 5] = "MAP_ROCK",
        t[t.MAP_ICE = 6] = "MAP_ICE",
        t[t.MAP_END = 6] = "MAP_END"
}(BattleMapType || (BattleMapType = {}));
var BattleMapSystem = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.newMapTo = function(t, e) {
            var a = [],
                i = Path.mapEffectUrl + "sea/battle_map_base",
                n = 1,
                s = 0;
            t == BattleMapType.MAP_NORMAL ? (n = 1, s = 7) : t == BattleMapType.MAP_DESTROY ? (n = 2, s = 5) : t == BattleMapType.MAP_BEACH ? (n = 3, s = 8) : t == BattleMapType.MAP_ISLAND ? (n = 4, s = 8) : t == BattleMapType.MAP_ROCK ? (n = 5, s = 8) : t == BattleMapType.MAP_ICE && (n = 6, s = 8);
            for (var r = 1; s >= r; ++r) a.push(i + n + "_00" + r + ".jpg");
            ResLoader.instance.preLoadResList([a[0]],
                function() {
                    var t = new SimpleAnimation(a, 8, !0);
                    t.width = GameData.designWidth,
                        t.height = GameData.designHeight,
                        e.addChild(t),
                        t.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                            function() {
                                ResLoader.instance.unloadResList(a)
                            },
                            void 0),
                        BattleManager.instance.loadedMapEffect = !0,
                        BattleManager.instance.checkLoadedFlags()
                })
        },
        a.newRandomMapTo = function(t) {
            var e = Math.floor(Math.random() * BattleMapType.MAP_ICE + 1);
            7 == e && (e = 6),
                this.newMapTo(e, t)
        },
        a.setBattleMapType = function(t) {
            this._curMapType = t
        },
        a.initBattleMap = function(t) {
            this._curMapType && this._curMapType != BattleMapType.MAP_NONE || (this._curMapType = BattleMapType.MAP_NORMAL),
                Log.logZDY("battleMap:", this._curMapType),
                this.newMapTo(this._curMapType, t)
        },
        a.getCurrentMapType = function() {
            return this._curMapType
        },
        a.getMapRandom = function() {
            var t = Utils.randInt(1, BattleMapType.MAP_END);
            return t == BattleMapType.MAP_ISLAND && (t = BattleMapType.MAP_NORMAL),
                t
        },
        a.sendMainBattleStart = function(t) {
            RequestManager.GetInstance().enterBattle(BattleType.BATTLE_TYPE_MAIN_PVE, t, 0)
        },
        t.instance = new t,
        t
}();
