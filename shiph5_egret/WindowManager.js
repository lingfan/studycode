
var WeatherManager = function() {
    function t() {
        this.currentWeather = null,
            this.weatherType = [
                [this.sunDown, {}],
                [this.stormRain, {}],
                [this.cloud, 0],
                [this.cloud, 1],
                [this.snow, {}]
            ]
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return e(t, "instance",
            function() {
                return t._instance || (t._instance = new t),
                    t._instance
            }),
        i.sunDown = function(t, e) {
            if (t && BattleMapSystem.instance.getCurrentMapType() == BattleMapType.MAP_NORMAL) {
                var a = new egret.Bitmap;
                SUI.setTextureAsync(a, Path.mapEffectUrl + "light.png",
                        function(t) {
                            a.blendMode = egret.BlendMode.ADD,
                                a.anchorOffsetX = .5 * t.textureWidth,
                                a.anchorOffsetY = .5 * t.textureHeight
                        }),
                    t && t.addChild(a)
            }
        },
        i.stormRain = function(t, e) {
            if (t) {
                var a = Path.mapEffectUrl + "weather_rain.json",
                    i = Path.mapEffectUrl + "weather_rain.png",
                    n = "default";
                SUI.loadSpriteSheet(a, i,
                    function(e, a) {
                        var i = new egret.MovieClipDataFactory(e, a),
                            s = new egret.MovieClip(i.generateMovieClipData(n));
                        s.x = .5 * GameData.designWidth,
                            s.y = .5 * GameData.designHeight,
                            t.addChild(s),
                            s.gotoAndPlay(0, -1),
                            s.scaleX = GameData.designWidth / s.width,
                            s.scaleY = GameData.designHeight / s.height,
                            s.frameRate = 35
                    });
                var s = new egret.Bitmap;
                SUI.setTextureAsync(s, Path.mapEffectUrl + "weatherThunder.png"),
                    s.visible = !1,
                    t.addChild(s);
                var r = new egret.Bitmap;
                SUI.setTextureAsync(r, Path.mapEffectUrl + "write.png"),
                    r.scaleX = GameData.designWidth / 10,
                    r.scaleY = GameData.designHeight / 10,
                    r.alpha = .2,
                    r.blendMode = egret.BlendMode.NORMAL,
                    r.visible = !1,
                    t.addChild(r);
                var o = egret.Tween.get(s, {
                    loop: !0
                });
                o.wait(5e3).wait(Utils.randInt(0, 1e4)).call(function() {
                    for (var t = Utils.randInt(1, 3), e = 1; t >= e; ++e) Utils.delayCall(.15 * e * 1e3,
                        function() {
                            s.rotation = Utils.randInt(0, 90),
                                s.visible = !0,
                                r.visible = !0;
                            var t = egret.Tween.get(r);
                            t.to({
                                    alpha: 0
                                },
                                100).call(function() {
                                r.visible = !1,
                                    s.visible = !1
                            })
                        })
                })
            }
        },
        i.cloud = function(t, e) {
            if (t) {
                var a = (Path.mapEffectUrl + "weather_cloud.json", Path.mapEffectUrl + "weather_cloud.png", 0);
                a = 1 == e ? 60 : 10;
                for (var i = 1,
                        n = new egret.Sprite,
                        s = 1; a >= s; ++s) {
                    i = Utils.randInt(1, 10) > 5 ? -1 : 1;
                    var r = 0,
                        o = 0;
                    r = Utils.randInt(-300, 550),
                        o = Utils.randInt(-100, -320) * i;
                    var l = new egret.Bitmap;
                    l.x = r,
                        l.y = o;
                    var h = Path.mapEffectUrl + "weather_cloud/weather_cloud_00" + Utils.randInt(1, 8) + ".png";
                    SUI.setTextureAsync(l, h);
                    var c = egret.Tween.get(l);
                    c.to({
                                x: r - 150
                            },
                            Utils.randInt(25e3, 65e3)).call(function(t) {
                                Utils.removeNode(t)
                            },
                            void 0, [l]),
                        n.addChild(l)
                }
                n.x = .5 * GameData.designWidth,
                    n.y = .5 * GameData.designHeight,
                    n.rotation = 20,
                    t.addChild(n)
            }
        },
        i.snow = function(t, e) {},
        i.randomWeatherByList = function(e) {
            null == !t.RandomList && (t.RandomList = []),
                Log.logZDY("weather." + Log.objectToString(t.RandomList));
            var a = null;
            a = t.RandomList.length > 0 ? t.RandomList[Utils.randInt(0, t.RandomList.length - 1)] : t.SUNDOWN,
                BattleManager.replay_flag || (this.currentWeather = a),
                (!this.currentWeather || this.currentWeather - 1 < 0 || this.currentWeather - 1 >= this.weatherType.length) && (this.currentWeather = t.SUNDOWN),
                this.currentWeather = 5;
            var i = this.weatherType[this.currentWeather - 1][0];
            i(e, this.weatherType[this.currentWeather - 1][1])
        },
        i.randomWeather = function(t) {
            var e = this.weatherType[Utils.randInt(0, this.weatherType.length - 1)],
                a = e[0];
            a(t, e[1])
        },
        i.getRandomWeather = function() {
            return [1, 2, 3, 4, 5]
        },
        i.clear = function() {
            t.RandomList = null,
                this.currentWeather = null
        },
        t.SUNDOWN = 1,
        t.STORMRAIN = 2,
        t.CLOUD_LESS = 3,
        t.CLOUD_MUCH = 4,
        t.SNOW = 5,
        t.RandomList = null,
        t
}();
