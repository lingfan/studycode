
var WindowLoading = function(t) {
    function e() {
        t.call(this),
            this._weight = 0,
            this._totalWeight = 0,
            this._weightMap = {},
            this.uidIsInServerList = !1,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/LoginSkin.exml"
            /*tpa=resource/eui_skins/LoginSkin.exml*/
            ,
            Main.instance.addChild(this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function(t) {
            this.loadingImg.visible = !1,
                this.Server.visible = !1,
                this.Loading.visible = !0,
                this.Login.visible = !1,
                this.Login_test.visible = !1,
                SUI.addClickEffect(this.btnChange),
                SUI.addClickEffect(this.btnBackToLogin),
                this.selfScroller.viewport = this.selfList,
                this.serverScroller.viewport = this.list,
                this.btnChange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClick, this),
                this.btnBackToLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClick, this),
                this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClick, this),
                this.btnStart0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this),
                this.msgCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnCliskMsg, this),
                this.msgScroller.viewport = this.msgGroup,
                ResLoader.instance.preLoadResList(["resource/assets/broadcast/msg.json"
                        /*tpa=resource/assets/broadcast/msg.json*/
                    ],
                    function(t) {
                        this.msgContainer.visible = !1,
                            t && (this.msg = t[0], this.msg && this.msg.content && "" != this.msg.content && (this.msgTitleTf.text = this.msg.title || "公告", this.msgCloseBtn.label = this.msg.closeBtnTf || "收到", this.msgContent.textFlow = (new egret.HtmlTextParser).parser(this.msg.content), this.msgContainer.visible = !0))
                    },
                    this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.GOBACK_SERVER_PAGE, this.onGobackServerPage, this),
                Main.instance.loadResource(),
                this.isLocalStorageSupported() ? this.editLbabel.text = window.localStorage.gameLongId : this.editLbabel.text = "",
                SUI.addClickEffect(this.btnRandomID),
                this.btnRandomID.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnRandomIDClick, this)
        },
        i.OnCliskMsg = function(t) {
            this.msg && this.msg.canClose && (this.msgContainer.visible = !1)
        },
        i.startGame = function(t) {
            if (0 != this.editLbabel.text.length) {
                this.isLocalStorageSupported() && (window.localStorage.gameLongId = this.editLbabel.text);
                var e = this.editLbabel.text;
                this.loginCallback && (this.loginThisObj ? this.loginCallback.apply(this.loginThisObj, [e]) : this.loginCallback(e))
            }
        },
        i.onThemeLoadComplete = function() {
            this.themeLoaded = !0,
                this.parent && this.clear()
        },
        i.clear = function() {
            this.themeLoaded && (egret.clearInterval(this.tickId), Main.instance.removeChild(this), Main.instance.loadingPanel = null)
        },
        i.showLogin = function(t, e, a) {
            if (void 0 === a && (a = !0), this.loginCallback = t, this.loginThisObj = e, a && this.isLocalStorageSupported() && null != window.localStorage.gameLongId && "" != window.localStorage.gameLongId) {
                var i = window.localStorage.gameLongId;
                t && (e ? t.apply(e, [i]) : t(i))
            } else this.Login_test.visible = !0;
            this.Loading.visible = !1,
                Main.instance.setChildIndex(this, Main.instance.numChildren)
        },
        i.showLoading = function() {
            this.Login_test.visible = !1,
                this.Login.visible = !1,
                this.Loading.visible = !0,
                Main.instance.setChildIndex(this, Main.instance.numChildren)
        },
        i.setLoadLabel = function(t) {
            this.loadTxt.text = t
        },
        i.setProgress = function(t, e) {
            if (this.bar) {
                var a = Math.floor(t / e * 100);
                this.bar.value = a,
                    this.barTxt.text = a + "%"
            }
        },
        i.clearPercentMap = function() {
            this._weightMap = {},
                this._weight = 0,
                this._totalWeight = 0
        },
        i.registerPercentMap = function(t, e) {
            var a = e.toString();
            null == this._weightMap[a] && (this._weightMap[a] = t, this._totalWeight += t)
        },
        i.triggerPercent = function(t) {
            var e = t.toString(),
                a = this._weightMap[e];
            if (a) {
                this._weight += a;
                var i = Math.floor(this._weight / this._totalWeight * 100);
                this.setProgress(i, 100),
                    this._weightMap[e] = null
            }
        },
        i.btnRandomIDClick = function(t) {
            var e = new Date,
                a = Math.floor(1e4 * Math.random()).toString();
            this.editLbabel.text = "游客" + e.getTime().toString() + a
        },
        i.isLocalStorageSupported = function() {
            var t = "test",
                e = window.sessionStorage;
            try {
                return e.setItem(t, "testValue"),
                    e.removeItem(t), !0
            } catch (a) {
                return !1
            }
        },
        i.showServerListUI = function() {
            this.Login_test.visible = !1,
                this.Loading.visible = !1,
                this.Server.visible = !0,
                this.Login.visible = !1,
                this.btnBackToLogin.visible = PlatformManager.instance.needShowLogin()
        },
        i.requestServerList = function() {
            WindowManager.getInstance().showWaiting(),
                this.btnStart.enabled = !1;
            var t = "openid=" + (GetPlatType() == PlatformType.PF_QQ ? GameData.openid + "_" + QZAppExternal.getPlatform() : GameData.openid) + "&pf=" + GameData.pf;
            console.log("url = " + PlatformManager.instance.getWebUrl() + "/server"),
                console.log("params = " + t);
            var e = new egret.HttpRequest;
            e.responseType = egret.HttpResponseType.TEXT,
                e.open(PlatformManager.instance.getWebUrl() + "/server", egret.HttpMethod.POST),
                e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                e.send(t),
                e.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this),
                e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this)
        },
        i.onPostComplete = function(t) {
            this.btnStart.enabled = !0,
                WindowManager.getInstance().hideWaiting();
            var e = t.currentTarget;
            Log.log("post data : ", e.response);
            var a = JSON.parse(e.response);
            if (0 == a.ret) {
                var i = a.servers;
                if (null != i && i.length > 0) {
                    var n = a.servers[0];
                    if (null == n) return void Toast.launch("服务器列表错误，请与工作人员联系");
                    var s = n.servers;
                    if (null != s && s.length > 0) {
                        if (s.sort(function(t, e) {
                                return e.isRecommend - t.isRecommend
                            }), PlatformManager.instance.myself.serverId) {
                            for (var r = 0,
                                    o = s; r < o.length; r++) {
                                var l = o[r];
                                if (l.id == PlatformManager.instance.myself.serverId) {
                                    this.uidIsInServerList = !0,
                                        GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.GOBACK_SERVER_PAGE, l));
                                    break
                                }
                            }
                            this.uidIsInServerList || GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.GOBACK_SERVER_PAGE, s[0]))
                        } else GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.GOBACK_SERVER_PAGE, s[0]));
                        this.setServerScrollerData(s);
                        var h = a.logined;
                        if (GameData.loginedServers = h, null != h && h.length > 0) {
                            for (var c = [], d = 0; d < s.length; d++)
                                for (var g = 0; g < h.length; g++) s[d].id == h[g].serverid && c.push(s[d]);
                            null != c && c.length > 0 && this.setSelfScrollerData(c)
                        } else Plantform.getInstanceOf().register("unknow")
                    }
                }
            }
        },
        i.onPostIOError = function(t) {
            this.btnStart.enabled = !1,
                WindowManager.getInstance().showWaiting(),
                this.requestServerList()
        },
        i.onBtnClick = function(t) {
            var e = this;
            switch (t.currentTarget) {
                case this.btnStart:
                    if (PlatformManager.instance.myself.userid = null, GameData.loginedServers)
                        for (var a = 0,
                                i = GameData.loginedServers; a < i.length; a++) {
                            var n = i[a];
                            if (n.serverid == this.tmpServerId) {
                                PlatformManager.instance.myself.userid = n.uid;
                                break
                            }
                        }
                    this.btnStart.enabled = !1,
                        PlatformManager.instance.login(this.tmpServerId,
                            function() {
                                e.btnStart.enabled = !0,
                                    GameData.uid = PlatformManager.instance.myself.userid,
                                    GameData.secret = PlatformManager.instance.myself.serverKey,
                                    Plantform.getInstanceOf().login();
                                var t = new ProtocolMgr,
                                    a = new Transport(t.GetPkgMap());
                                new CommunicateManager,
                                a.connect(),
                                    e.Server.visible = !1,
                                    e.themeLoaded = !0,
                                    e.loadingImg.visible = !0,
                                    e.tickId = egret.setInterval(function() {
                                            e.loadingImg.rotation += 20
                                        },
                                        e, 100)
                            });
                    break;
                case this.btnChange:
                    this.Server.visible = !1,
                        this.ServerList.visible = !0;
                    break;
                case this.btnBackToLogin:
                    this.Login_test.visible = !0,
                        this.Server.visible = !1,
                        this.uidIsInServerList = !1;
                    break;
                case this.btnStart1:
            }
        },
        i.setSelfScrollerData = function(t) {
            var e = this.getSelfServerList(t);
            this.selfList.dataProvider = new eui.ArrayCollection(e),
                this.selfList.itemRenderer = serverListItem
        },
        i.getSelfServerList = function(t) {
            for (var e = [], a = 0; a < t.length; a++) {
                var i = t[a];
                e.push(i)
            }
            return e
        },
        i.setServerScrollerData = function(t) {
            var e = this.getServerList(t);
            this.list.dataProvider = new eui.ArrayCollection(e),
                this.list.itemRenderer = serverListItem
        },
        i.getServerList = function(t) {
            for (var e = [], a = 0; a < t.length; a++) {
                var i = t[a];
                e.push(i)
            }
            return e
        },
        i.onGobackServerPage = function(t) {
            this.Server.visible = !0,
                this.ServerList.visible = !1;
            var e = t.parames;
            this.txtServer.text = e.name,
                this.tmpServerId = e.id,
                1 == e.isOpen ? 1 == e.isNew ? (this.txtServerFlag.text = "新服", this.txtServerFlag.textColor = 65280) : 0 == e.isNew && (0 == e.busy ? (this.txtServerFlag.text = "畅通", this.txtServerFlag.textColor = 65280) : 1 == e.busy ? (this.txtServerFlag.text = "拥挤", this.txtServerFlag.textColor = 16776960) : 2 == e.busy && (this.txtServerFlag.text = "繁忙", this.txtServerFlag.textColor = 16711680)) : 0 == e.isOpen && (this.txtServerFlag.text = "维护中", this.txtServerFlag.textColor = 13421772)
        },
        i.onClickBtnQQ = function() {
            EventManager.instance.dispatchEvent(EventTypes.LOGIN_QQ, "qq", !1)
        },
        i.onClickBtnWX = function() {
            EventManager.instance.dispatchEvent(EventTypes.LOGIN_QQ, "wx", !1)
        },
        i.onClickBtnOneKeyQQ = function() {
            EventManager.instance.dispatchEvent(EventTypes.LOGIN_QQ, "qq", !0)
        },
        i.onClickBtnOneKeyWX = function() {
            EventManager.instance.dispatchEvent(EventTypes.LOGIN_QQ, "wx", !0)
        },
        i.showQQLogin = function(t) {
            var e = this;
            this.Login_test.visible = !1,
                this.Loading.visible = !1,
                this.Login.visible = !0,
                Main.instance.setChildIndex(this, Main.instance.numChildren),
                this.gpQQChat.visible = this.gpQQChated.visible = !1,
                this.gpWXChat.visible = this.gpWXChated.visible = !1,
                this.btnQQ.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnQQ, this),
                this.btnQQed.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnOneKeyQQ, this),
                this.btnWX.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnWX, this),
                this.btnWXed.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnOneKeyWX, this),
                this.btnQQ.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnQQ, this),
                this.btnQQed.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnOneKeyQQ, this),
                this.btnWX.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnWX, this),
                this.btnWXed.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnOneKeyWX, this);
            for (var a = 0,
                    i = t.loginTypes; a < i.length; a++) {
                var n = i[a];
                "qq" == n.loginType ? n.accInfo && n.accInfo.avatarUrl ? (this.gpQQChated.visible = !0, this.gpQQChat.visible = !1, RES.getResByUrl(n.accInfo.avatarUrl,
                    function(t) {
                        e.imgQQHead.texture = t
                    },
                    this, RES.ResourceItem.TYPE_IMAGE)) : (this.gpQQChated.visible = !1, this.gpQQChat.visible = !0) : "wx" == n.loginType && (n.accInfo && n.accInfo.avatarUrl ? (this.gpWXChated.visible = !0, this.gpWXChat.visible = !1, RES.getResByUrl(n.accInfo.avatarUrl,
                    function(t) {
                        e.imgWXHead.texture = t
                    },
                    this, RES.ResourceItem.TYPE_IMAGE)) : (this.gpWXChated.visible = !1, this.gpWXChat.visible = !0))
            }
        },
        e
}(eui.Component);
