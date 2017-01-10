
var ResLoader = function() {
    function t() {
        this._loadedResMap = {},
            this._loadGroupMap = {},
            this._refMap = {},
            this._cachedTextures = {},
            this._totalArea = 0,
            this._lastCollectTime = 0,
            GameTick.registerHandler(this.collectTextureCache.bind(this), 5e3)
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return e(t, "instance",
            function() {
                return t._instance || (t._instance = new t),
                    t._instance
            }),
        i.preLoadResList = function(t, e, a) {
            return 0 == t.length ? void(e && e.apply(a, [])) : void this.loadResList({
                res: t,
                callback: e,
                thisObj: a
            })
        },
        i.unloadResList = function(t) {
            for (var e = 0,
                    a = t; e < a.length; e++) {
                var i = a[e];
                this.unloadRes(i)
            }
        },
        i.unloadRes = function(t) {
            var e = Transport.loginPanelBool ? Path.cdnURL + t : t;
            RES.destroyRes(t) || Log.logWarning("destroy res failed", t),
                delete this._loadedResMap[e],
                delete this._loadedResMap[t],
                delete this._cachedTextures[t]
        },
        i.addRef = function(t, e) {
            this._refMap[e] || (this._refMap[e] = {});
            var a = 1,
                i = this._refMap[e];
            void 0 === i[t] ? i[t] = a : i[t] = i[t] + a,
                this._loadedResMap[t] ? this._loadedResMap[t].refCount += a : this._loadedResMap[t].refCount = a
        },
        i.clearTag = function(t) {
            if (t) {
                var e = this._refMap[t],
                    a = Utils.getCurrentTime();
                if (e)
                    for (var i in e) {
                        var n = this._loadedResMap[i];
                        if (n && n.data && n.data.textureWidth && (n.refCount -= e[i], n.refCount <= 0)) {
                            n.refCount = 0;
                            var s = n.data.textureWidth * n.data.textureHeight;
                            this._cachedTextures[i] ? this._cachedTextures[i].time = a : (this._cachedTextures[i] = {
                                    url: i,
                                    area: s,
                                    time: a
                                },
                                this._totalArea += s)
                        }
                    }
                delete this._refMap[t]
            }
        },
        i.collectTextureCache = function(e) {
            void 0 === e && (e = !1);
            Utils.getCurrentTime();
            if (e || this._totalArea > t.kMaxCachedTextureArea) {
                var a = [];
                for (var i in this._cachedTextures) a.push(this._cachedTextures[i]);
                a.sort(function(t, e) {
                    return e.area - t.area
                });
                for (var n = 0,
                        s = a; n < s.length; n++) {
                    var r = s[n];
                    this._totalArea > t.kMaxCachedTextureArea && (this._totalArea -= r.area, this.unloadRes(r.url))
                }
            }
        },
        i.logCachedResCount = function() {
            var t = 0,
                e = 0;
            for (var a in this._loadedResMap) t++,
                this._loadedResMap[a].data.textureWidth && (e += this._loadedResMap[a].data.textureWidth * this._loadedResMap[a].data.textureHeight);
            Log.logZDY("resCnt:", t, 4 * e / 1024 / 1024),
                t = 0,
                e = 0;
            for (var a in this._cachedTextures) t++,
                e += this._cachedTextures[a].area;
            Log.logZDY("resCnt2:", t, 4 * e / 1024 / 1024)
        },
        i.unloadAllCachedTexture = function() {
            for (var t in this._loadedResMap) RES.destroyRes(t);
            this._loadedResMap = {},
                this._cachedTextures = {},
                this._refMap = {},
                this._totalArea = 0
        },
        i.loadResGroup = function(t, e, a) {
            if (RES.isGroupLoaded(t)) return void(e && (a ? e.apply(a, [0]) : e(0)));
            var i = !0;
            this._loadGroupMap[t] || (this._loadGroupMap[t] = [], i = !1),
                this._loadGroupMap[t].push({
                    callback: e,
                    thisObj: a
                }),
                i || (this._initedGroupLoader || (RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this), this._initedGroupLoader = !0), RES.loadGroup(t))
        },
        i.onResourceLoadComplete = function(t) {
            var e = this._loadGroupMap[t.groupName];
            if (e) {
                for (var a = 0,
                        i = e; a < i.length; a++) {
                    var n = i[a];
                    n.callback && (n.thisObj ? n.callback.apply(n.thisObj, [0]) : n.callback(0))
                }
                delete this._loadGroupMap[t.groupName]
            }
        },
        i.onResourceLoadError = function(t) {
            for (var e = this._loadGroupMap[t.groupName], a = 0, i = e; a < i.length; a++) {
                var n = i[a];
                n.callback && (n.thisObj ? n.callback.apply(n.thisObj, [1]) : n.callback(1))
            }
            delete this._loadGroupMap[t.groupName]
        },
        i.loadResList = function(t) {
            var e = this,
                a = 0,
                i = [],
                n = function(n) {
                    var r = t.res[n],
                        o = Transport.loginPanelBool ? Path.cdnURL + r : r;
                    if (i.push(o), s._cachedTextures[r] && (s._totalArea -= s._cachedTextures[r].area, delete s._cachedTextures[r]), s._loadedResMap[o]) {
                        if (a++, a >= t.res.length && t.callback) {
                            for (var l = [], h = 0, c = i; h < c.length; h++) {
                                var d = c[h];
                                l.push(s._loadedResMap[d].data)
                            }
                            t.callback.apply(t.thisObj, [l])
                        }
                    } else RES.getResByUrl(o,
                        function(n, s) {
                            if (n && (e._loadedResMap[o] = {
                                    data: n,
                                    refCount: 0
                                }), a++, a >= t.res.length && t.callback) {
                                for (var r = [], l = 0, h = i; l < h.length; l++) {
                                    var c = h[l];
                                    e._loadedResMap[c] ? r.push(e._loadedResMap[c].data) : r.push(null)
                                }
                                t.callback.apply(t.thisObj, [r])
                            }
                        },
                        s)
                },
                s = this;
            for (var r in t.res) n(r)
        },
        t.kMaxCachedTextureArea = 10485760,
        t.kMinCollectInterval = 30,
        t.kMaxStayCacheTime = 180,
        t
}();
