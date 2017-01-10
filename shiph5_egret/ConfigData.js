
var ConfigData = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.load = function(e, a, i) {
            void 0 === i && (i = ""),
                t.data[e] ? a("" == i ? t.data[e] : t.data[e][i]) : new DataLoader(e,
                    function(n) {
                        t.data[e] = {};
                        for (var s = new Array,
                                r = n.split("\r\n"), o = 0; o < r.length; o++) {
                            var l = r[o];
                            "" != l && "#" != l.substring(0, 1) && s.push(l.split("	"))
                        }
                        for (var o = 2; o < s.length; o++) {
                            t.data[e][s[o][0]] = {};
                            for (var h = 0; h < s[o].length; h++) t.data[e][s[o][0]][s[1][h]] = s[o][h]
                        }
                        t.data[e].length = s.length - 2,
                            a && a("" == i ? t.data[e] : t.data[e][i])
                    })
        },
        t.getAllData = function(e, a) {
            if (void 0 === a && (a = null), t.data[e]) {
                if (!a) return t.data[e];
                a(t.data[e])
            } else t.load(e, a)
        },
        t.getDataByKey = function(e, a, i) {
            if (void 0 === i && (i = null), t.data[e]) {
                if (null == i) return t.data[e][a];
                i(t.data[e][a])
            } else t.load(e, i, a)
        },
        t.preLoadList = function(e, a) {
            t.loadLength && 0 != t.loadLength || (t.loadLength = e.length),
                t.load(e[0],
                    function(i) {
                        e.shift(),
                            e.length > 0 ? (GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.CONFIG_PROGRESS, {
                                itemsLoaded: t.loadLength - e.length - 1,
                                itemsTotal: t.loadLength
                            })), t.preLoadList(e, a)) : (GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.CONFIG_COMPLETE)), t.loadLength = 0, a())
                    })
        },
        t.preLoadDats = function(t, e, a, i) {
            if (0 != t.length) {
                t.length != e.length && Log.logWarning("[ConfigData.preLoadDats]datFileNames' length is not equal to parserClasses's length");
                var n = [],
                    s = [];
                for (var r in t) {
                    var o = t[r],
                        l = e[r];
                    l.GetInstance().getDatas() || (n.push("resource/config/jsons/" + o + ".json"), s.push(l))
                }
                ResLoader.instance.preLoadResList(n,
                    function(e) {
                        for (var n in e) {
                            var r = e[n];
                            if (r) {
                                var o = (t[n], s[n]);
                                o.GetInstance().ProcessData(r)
                            } else Log.logError("load dat failed", t[n])
                        }
                        Utils.call(a, i)
                    })
            }
        },
        t.data = {},
        t
}();
