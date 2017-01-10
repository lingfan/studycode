
var SUI = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.addClickEffect = function(t) {
            var e = t.scaleX,
                a = t.scaleY,
                i = function(t) {
                    var i = t.currentTarget;
                    i.x = i.userdata.x - .1 * i.width * e / Math.abs(e),
                        i.y = i.userdata.y - .1 * i.height * a / Math.abs(a),
                        i.scaleX = 1.2 * e,
                        i.scaleY = 1.2 * a
                },
                n = function(t) {
                    var i = t.currentTarget;
                    i.scaleX = e,
                        i.scaleY = a,
                        i.x = i.userdata.x,
                        i.y = i.userdata.y
                },
                s = function(e) {
                    e.currentTarget;
                    t.removeEventListener(egret.Event.REMOVED_FROM_STAGE, s, this),
                        t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, i, this),
                        t.removeEventListener(egret.TouchEvent.TOUCH_END, n, this),
                        t.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, n, this),
                        t.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, n, this)
                };
            t.userdata = {
                    x: t.x,
                    y: t.y
                },
                t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, i, this),
                t.addEventListener(egret.TouchEvent.TOUCH_END, n, this),
                t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, n, this),
                t.addEventListener(egret.TouchEvent.TOUCH_CANCEL, n, this),
                t.addEventListener(egret.Event.REMOVED_FROM_STAGE, s, this)
        },
        t.addClickEffect1 = function(t) {
            var e = t.x,
                a = t.y,
                i = function(t) {
                    var i = t.currentTarget;
                    i.x = e,
                        i.y = a + 5
                },
                n = function(t) {
                    var i = t.currentTarget;
                    i.x = e,
                        i.y = a
                },
                s = function(e) {
                    e.currentTarget;
                    t.removeEventListener(egret.Event.REMOVED_FROM_STAGE, s, this),
                        t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, i, this),
                        t.removeEventListener(egret.TouchEvent.TOUCH_END, n, this),
                        t.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, n, this),
                        t.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, n, this)
                };
            t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, i, this),
                t.addEventListener(egret.TouchEvent.TOUCH_END, n, this),
                t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, n, this),
                t.addEventListener(egret.TouchEvent.TOUCH_CANCEL, n, this),
                t.addEventListener(egret.Event.REMOVED_FROM_STAGE, s, this)
        },
        t.setTextureAsync = function(e, a, i, n, s, r) {
            void 0 === n && (n = void 0),
                a && ResLoader.instance.preLoadResList([a],
                    function(r) {
                        var o = r[0];
                        if (o) {
                            if (e) {
                                e.texture = o;
                                var l = e;
                                if (l.addEventListener) {
                                    var h = (++t.tagInc).toString();
                                    ResLoader.instance.addRef(a, h),
                                        l.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                                            function() {
                                                ResLoader.instance.clearTag(h)
                                            },
                                            void 0)
                                }
                            }
                            i && (n ? i.apply(n, [o, a, s]) : i(o, a, s))
                        } else Log.log("load image failed:", a),
                            i && (n ? i.apply(n, [null, a, s]) : i(null, a, s))
                    })
        },
        t.setQualityColor = function(e, a) {
            var i;
            switch (+a) {
                case 1:
                    i = t.rgb2Hex(t.Color.white.r, t.Color.white.g, t.Color.white.b);
                    break;
                case 2:
                    i = t.rgb2Hex(t.Color.green.r, t.Color.green.g, t.Color.green.b);
                    break;
                case 3:
                    i = t.rgb2Hex(t.Color.blue.r, t.Color.blue.g, t.Color.blue.b);
                    break;
                case 4:
                    i = t.rgb2Hex(t.Color.purple.r, t.Color.purple.g, t.Color.purple.b);
                    break;
                case 5:
                    i = t.rgb2Hex(t.Color.gold.r, t.Color.gold.g, t.Color.gold.b);
                    break;
                default:
                    i = 16777215
            }
            egret.log("color:", i),
                e.textColor = +i
        },
        t.rgb2Hex = function(t, e, a) {
            return "0x" + (t << 16 | e << 8 | a).toString(16)
        },
        t.loadSpriteSheet = function(t, e, a, i) {
            ResLoader.instance.preLoadResList([t, e],
                function(t) {
                    a && a.apply(i, [t[0], t[1]])
                })
        },
        t.setItemIcon = function(e, a, i) {
            if (e) {
                if (!a) return void(e.visible = !1);
                var n = e.imgBg,
                    s = e.imgIcon,
                    r = e.imgPieceFlag,
                    o = e.imgFrame,
                    l = e.imgExtra,
                    h = e.txtName,
                    c = e.txtNum,
                    d = e.imgShadeFlag;
                d && (d.visible = !1),
                    o && (o.visible = !1),
                    a.type == TypeDefine.Const.DROP_TYPE_CAPTAINPIECE ? (t.setTextureAsync(n, QualitySystem.getCaptainSmallBack(a.quality)), t.setTextureAsync(o, QualitySystem.getCaptainFrame(a.quality)), o && (o.visible = !0)) : t.setTextureAsync(n, QualitySystem.getItemSmallBack(a.quality)),
                    t.setTextureAsync(s, a.icon),
                    r && (r.visible = !!a.ispieces),
                    l && (l.visible = !1),
                    h && (h.text = a.name ? a.name.toString() : "", a.quality && (h.textColor = QualitySystem.getColorByQuality(a.quality)));
                var g = "";
                a.count && a.count > 1 && (g = "x" + a.count),
                    c && (c.text = g)
            }
        },
        t.loadMovieClip = function(e, a, i, n, s) {
            ResLoader.instance.preLoadResList([e, a],
                function(e) {
                    var r = new egret.MovieClipDataFactory(e[0], e[1]),
                        o = new egret.MovieClip(r.generateMovieClipData("default"));
                    i.addChild(o),
                        o.gotoAndPlay(0, -1);
                    var l = (++t.tagInc).toString();
                    ResLoader.instance.addRef(a, l),
                        o.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                            function() {
                                ResLoader.instance.clearTag(l)
                            },
                            void 0),
                        n && n.apply(s, [o])
                })
        },
        t.Color = {
            white: {
                r: 215,
                g: 215,
                b: 215
            },
            green: {
                r: 100,
                g: 203,
                b: 60
            },
            blue: {
                r: 71,
                g: 164,
                b: 251
            },
            purple: {
                r: 223,
                g: 81,
                b: 249
            },
            gold: {
                r: 247,
                g: 175,
                b: 82
            }
        },
        t.tagInc = 0,
        t
}();
