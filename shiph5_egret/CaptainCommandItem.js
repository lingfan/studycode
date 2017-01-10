
var timeType;
!
function(t) {
    t[t.HMS = 0] = "HMS",
        t[t.YMD = 1] = "YMD",
        t[t.YMDHMS = 2] = "YMDHMS",
        t[t.MDHM = 3] = "MDHM",
        t[t.DAY = 4] = "DAY",
        t[t.TIMENUMBER = 5] = "TIMENUMBER",
        t[t.FORMATDATE = 6] = "FORMATDATE"
}(timeType || (timeType = {}));
var Utils = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.rnum = function(t) {
            if (t = Math.floor(t), 0 / 0 == t) return "0";
            if (t < Math.pow(10, 4)) return Math.floor(t) + "";
            var e = Math.floor(t / 10).toString().length;
            Math.pow(10, e);
            return t < Math.pow(10, 6) ? Math.floor(t / Math.pow(10, 3)) + "K" : t < Math.pow(10, 9) ? Math.floor(t / Math.pow(10, 6)) + "M" : t < Math.pow(10, 12) ? Math.floor(t / Math.pow(10, 9)) + "B" : t < Math.pow(10, 15) ? Math.floor(t / Math.pow(10, 12)) + "T" : "$$$$"
        },
        t.getDoubleNumText = function(t) {
            return t = Number(t),
                t > 9 ? t.toString() : "0" + t
        },
        t.getDateByNum = function(e, a) {
            void 0 === a && (a = timeType.HMS),
                0 > e && (e = 0);
            var i = new Date(e),
                n = t.getDoubleNumText(i.getHours()) + ":" + t.getDoubleNumText(i.getMinutes()) + ":" + t.getDoubleNumText(i.getSeconds()),
                s = t.getDoubleNumText(i.getHours()) + ":" + t.getDoubleNumText(i.getMinutes());
            return a == timeType.HMS ? n : a == timeType.YMDHMS ? i.getFullYear() + "-" + t.getDoubleNumText(i.getMonth() + 1) + "-" + t.getDoubleNumText(i.getDate()) + " " + n : a == timeType.YMD ? i.getFullYear() + "" + t.getDoubleNumText(i.getMonth() + 1) + t.getDoubleNumText(i.getDate()) : a == timeType.MDHM ? t.getDoubleNumText(i.getMonth() + 1) + "-" + t.getDoubleNumText(i.getDate()) + " " + s : a == timeType.DAY ? i.getDay() : a == timeType.TIMENUMBER ? 60 * i.getHours() + i.getMinutes() : a == timeType.FORMATDATE ? i.getMonth() + 1 + "月" + t.getDoubleNumText(i.getDate()) + "日 " + t.getDoubleNumText(i.getHours()) + ":" + t.getDoubleNumText(i.getMinutes()) : void 0
        },
        t.getTimeString = function(t) {
            0 > t && (t = 0);
            var e = Math.floor(t / 3600),
                a = Math.floor(t / 60) % 60,
                i = t % 60;
            return e.toFixedInteger(2) + ":" + a.toFixedInteger(2) + ":" + i.toFixedInteger(2)
        },
        t.getImgByUrl = function(t, e, a, i, n) {
            void 0 === a && (a = null),
                void 0 === n && (n = ""),
                t && ResLoader.instance.preLoadResList([t],
                    function(s) {
                        var r = s[0];
                        if (r) {
                            if (n && ResLoader.instance.addRef(t, n), e) {
                                e.texture = r;
                                var o = (++SUI.tagInc).toString();
                                ResLoader.instance.addRef(t, o),
                                    e.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                                        function() {
                                            ResLoader.instance.clearTag(o)
                                        },
                                        void 0)
                            }
                            a && (i ? a.apply(i, [r]) : a(r))
                        } else Log.log("load image failed:", t),
                            a && (i ? a.apply(i, [null]) : a(null))
                    })
        },
        t.textFlowByStr = function(t, e, a) {
            void 0 === e && (e = 16777215),
                void 0 === a && (a = !1);
            var i = [],
                n = t.split("#");
            i.push({
                text: n[0],
                style: {
                    textColor: e
                }
            });
            for (var s = 1; s < n.length; s += 2) "" != n[s].substr(6) && (a ? i.push({
                    text: n[s].substr(6),
                    style: {
                        textColor: e
                    }
                }) : i.push({
                    text: n[s].substr(6),
                    style: {
                        textColor: Number("0x" + n[s].substr(0, 6))
                    }
                })),
                "" != n[s + 1] && i.push({
                    text: n[s + 1],
                    style: {
                        textColor: e
                    }
                });
            return i
        },
        t.getGoodAtShip = function(t) {
            for (var e = [128, 64, 32, 16, 8, 4, 2, 1], a = [], i = 0; i < e.length; i++) {
                var n = Math.floor(t / e[i]);
                t -= e[i] * n,
                    n > 0 && a.push(e.length - i)
            }
            for (var s = "",
                    i = 0; i < a.length; i++) s += Locales.get("GlobalSystem_ShipType_" + a[i]) + "、";
            return s = s.substring(0, s.length - 1), [s, a]
        },
        t.getListByKeyValue = function(t, e, a) {
            a = a || [];
            for (var i = a.length,
                    n = [], s = 0; i > s; s++)
                if (a[s][t]) {
                    var r = egret.getQualifiedClassName(a[s][t]);
                    if ("string" == r || "number" == r) a[s][t] == e && n.push(a[s]);
                    else if ("Array" == r)
                        for (var o = a[s][t].length, l = 0; o > l; l++) a[s][t][l] == e && n.push(a[s])
                }
            return n
        },
        t.getMetalLvByExp = function(t, e) {
            var a = MedalexpdataParser.GetInstance().getDataArr();
            a || (a = ConfigData.getAllData("medalexpData"));
            var i = 0;
            if (a[0] && a[0][e]) {
                t -= Number(a[0][e]);
                for (var n in a)
                    if ("0" != n && (t -= Number(a[n][e]), 0 >= t)) {
                        i = Number(a[n].level);
                        break
                    }
            }
            return i ? i - 1 : 1
        },
        t.getMetalExpByLv = function(t, e) {
            var a = MedalexpdataParser.GetInstance().getDataArr();
            a || (a = ConfigData.getAllData("medalexpData"));
            var i = 0;
            for (var n in a) {
                if (Number(a[n].level) > t) break;
                i += Number(a[n][e])
            }
            return i
        },
        t.cloneObject = function(t) {
            var e = {};
            for (var a in t) e[a] = t[a];
            return e
        },
        t.delayCall = function(t, e, a, i) {
            return 0 >= t && (t = 1),
                egret.setTimeout(function() {
                        e.apply(a, i)
                    },
                    void 0, t)
        },
        t.cancalDelayCall = function(t) {
            egret.clearTimeout(t)
        },
        t.randInt = function(t, e) {
            var a = e - t + 1,
                i = Math.random(),
                n = Math.floor(t + a * i);
            return n == e + 1 && (n = e),
                n
        },
        t.ccp = function(t, e) {
            return {
                x: t,
                y: e
            }
        },
        t.removeNode = function(t) {
            t && t.parent && t.parent.removeChild(t)
        },
        t.setScale = function(t, e) {
            t && (t.scaleX = t.scaleY = e)
        },
        t.setPosition = function(t, e, a) {
            t && (t.x = e, t.y = a)
        },
        t.rgbToColor = function(t, e, a) {
            return t << 16 | e << 8 | a
        },
        t.call = function(t, e) {
            t && (e ? t.apply(e) : t())
        },
        t.filterStr = function(t) {
            var e = RES.getRes("FilterStr_txt"),
                a = new RegExp(e, "gi"),
                i = !1;
            return t.match(a) && (t = t.replace(new RegExp(e, "gi"), "*"), i = !0, Toast.launch("输入的文字中有敏感词汇！")), [t, i]
        },
        t.createDragonBone = function(t, e, a, i, n, s, r) {
            ResLoader.instance.preLoadResList([t, e, a],
                function(t) {
                    var e = t[2],
                        n = t[1],
                        o = t[0];
                    if (e && n && o) {
                        var l = new dragonBones.EgretFactory;
                        l.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(o)),
                            l.addTextureAtlas(new dragonBones.EgretTextureAtlas(e, n));
                        var h = l.buildArmature(i);
                        dragonBones.WorldClock.clock.add(h);
                        var c = h.animation.gotoAndPlay("normal"),
                            d = (++SUI.tagInc).toString();
                        ResLoader.instance.addRef(a, d),
                            h.display.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                                function() {
                                    ResLoader.instance.clearTag(d)
                                },
                                void 0),
                            s && (r ? s.apply(r, [h, c]) : s(h, c))
                    }
                },
                r)
        },
        t.removeDragonBone = function(e) {
            t.removeNode(e.display),
                dragonBones.WorldClock.clock.remove(e)
        },
        t.GetQueryString = function(t, e) {
            if (void 0 === e && (e = !1), e) {
                var a = new RegExp("(\\?|#|&)" + t + "=([^&#]*)(&|#|$)"),
                    i = location.href.match(a);
                return i ? decodeURIComponent(i[2]) : null
            }
            var n = new RegExp("(\\?|&)" + t + "=([^&#]*)(&|#|$)"),
                a = window.location.href.substr(1).match(n);
            return null != a ? unescape(a[2]) : null
        },
        t.GetHashString = function(t) {
            var e = new RegExp("(\\?|#)" + t + "=([^&#]*)(&|#|$)"),
                a = window.location.href.substr(1).match(e);
            return null != a ? unescape(a[2]) : null
        },
        t.reqeustURL = function(t, e, a, i, n) {
            void 0 === n && (n = egret.HttpMethod.GET);
            var s = new egret.HttpRequest;
            s.responseType = egret.HttpResponseType.TEXT,
                e = e ? e : {};
            var r = [];
            for (var o in e) r.push(o + "=" + e[o]);
            var l = r.join("&");
            if (n == egret.HttpMethod.GET)
                if ("" != l) {
                    var h = t + "?" + l;
                    Log.logError(h),
                        s.open(h, n)
                } else s.open(t, n);
            else s.open(t, n);
            s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                s.addEventListener(egret.Event.COMPLETE,
                    function(t) {
                        var e = t.currentTarget;
                        i ? a.apply(i, [e.response]) : a(e.response)
                    },
                    void 0),
                s.addEventListener(egret.IOErrorEvent.IO_ERROR,
                    function(n) {
                        Log.logError("IOError", t, Log.objectToString(e)),
                            i ? a.apply(i) : a(null)
                    },
                    void 0),
                n == egret.HttpMethod.GET ? s.send() : s.send(l)
        },
        t.reqeustURLwithCookie = function(t, e, a, i, n) {
            void 0 === n && (n = egret.HttpMethod.GET);
            var s = new egret.HttpRequest;
            s.withCredentials = !0,
                s.responseType = egret.HttpResponseType.TEXT,
                e = e ? e : {};
            var r = [];
            for (var o in e) r.push(o + "=" + e[o]);
            var l = r.join("&");
            if (n == egret.HttpMethod.GET)
                if ("" != l) {
                    var h = t + "?" + l;
                    Log.logError(h),
                        s.open(h, n)
                } else s.open(t, n);
            else s.open(t, n);
            s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                s.addEventListener(egret.Event.COMPLETE,
                    function(t) {
                        var e = t.currentTarget;
                        i ? a.apply(i, [e.response]) : a(e.response)
                    },
                    void 0),
                s.addEventListener(egret.IOErrorEvent.IO_ERROR,
                    function(n) {
                        Log.logError("IOError", t, Log.objectToString(e)),
                            i ? a.apply(i) : a(null)
                    },
                    void 0),
                n == egret.HttpMethod.GET ? s.send() : s.send(l)
        },
        t.getCurrentTime = function() {
            return Math.floor(Date.now() / 1e3)
        },
        t.toast = function(e, a, i, n, s) {
            if (Toast && Toast.launch) return void Toast.launch(e);
            a = a || 2e3,
                i && (e = '<span class="loader"></span><span class="loadText">' + e + "</span>");
            var r = t.addNode("div", "mod-toast-content", null, e),
                o = t.addNode("div", "mod-toast", "toast" + Math.floor(1e5 * Math.random()));
            o.style.display = "block",
                o.style.opacity = 0,
                n && (o.style.bottom = "50%"),
                o.appendChild(r);
            var l = s && 10 || 200,
                h = setTimeout(function() {
                        o.style.opacity = 1,
                            clearTimeout(h),
                            h = setTimeout(function() {
                                    clearTimeout(h),
                                        o.style.opacity = 0,
                                        h = setTimeout(function() {
                                                clearTimeout(h),
                                                    t.closeDialog(o)
                                            },
                                            l)
                                },
                                a)
                    },
                    l);
            document.body.appendChild(o)
        },
        t.addNode = function(t, e, a, i) {
            var n = document.createElement(t);
            return a && (n.id = a),
                e && (n.className = e),
                i && (n.innerHTML = i),
                n
        },
        t.closeDialog = function(t) {
            t && null != t.parentNode && t.parentNode.removeChild(t),
                t = void 0
        },
        t.getMonthDay = function(t) {
            var e = new Date(t);
            return e.setDate(31),
                31 - e.getDate()
        },
        t.getDayDiff = function(t, e) {
            if (t > e) {
                var a = t;
                t = e,
                    e = a
            }
            var i = new Date(t),
                n = new Date(e);
            i.setHours(12, 0, 0, 0),
                n.setHours(12, 0, 0, 0);
            var s = n.valueOf() - i.valueOf(),
                r = Math.floor(s / 864e5);
            return r
        },
        t.test = 1,
        t
}();
