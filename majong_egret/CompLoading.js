
var CompLoading = function(t) {
	function e() {
		t.call(this),
		this.GroupsName = {
			RES_LOADING: "RES_LOADING",
			RES_INDEX: "RES_INDEX",
			RES_GAME: "RES_GAME",
			RES_OVER_TOTAL: "RES_OVER_TOTAL",
			RES_PRELOAD: "RES_PRELOAD",
			RES_TEMP: "RES_TEMP"
		},
		this.initCallLoaded(),
		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this),
		RES.loadConfig("resource/default.res.json", "resource/")
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.loadResTemp = function(t, e, i, s, n) {
		void 0 === n && (n = [!1, !1, !1]);
		var r = this.GroupsName.RES_TEMP;
		RES.createGroup(r, t, !0),
		this.registerLoadedCall(r, e, i),
		this.addRoundRotate(!0),
		this.addSelf(s),
		this.loadGroup(r)
	},
	s.registerLoadedCall = function(t, e, i) {
		this.arrCallLoaded[t].fun = e,
		this.arrCallLoaded[t].scope = i
	},
	s.loadGroupWithCall = function(t, e, i, s, n) {
		void 0 === n && (n = !0),
		this.addSelf(s),
		this.registerLoadedCall(t, e, i),
		this.addProgressUi(!0),
		this.loadGroup(t)
	},
	s.addSelf = function(t) {
		t.addChild(this)
	},
	s.loadGroup = function(t) {
		void 0 === t && (t = this.GroupsName.RES_LOADING),
		RES.loadGroup(t)
	},
	s.willCall = function(t) {
		var e = this.arrCallLoaded;
		e[t].fun && (e[t].fun.call(e[t].scope), e[t].fun = e[t].scope = null)
	},
	s.onResourceLoadComplete = function(t) {
		var e = t.groupName;
		switch (console.log("加载完成组：", e), e) {
		case this.GroupsName.RES_LOADING:
			JSSDK.getInstance().init(),
			this.addProgressUi(!0),
			document.getElementById("bg_preload").style.display = "none";
			break;
		default:
			this.remSelf()
		}
		this.willCall(e)
	},
	s.onResourceProgress = function(t) {
		var e = t.groupName;
		switch (e) {
		case this.GroupsName.RES_LOADING:
			break;
		case this.GroupsName.RES_INDEX:
		case this.GroupsName.RES_GAME:
		case this.GroupsName.RES_OVER_TOTAL:
			this.progressUI.setProgress(t.itemsLoaded, t.itemsTotal)
		}
	},
	s.registerEvents = function() {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
		RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this),
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this)
	},
	s.onResourceLoadError = function(t) {
		console.warn("Item:" + t.groupName + " - " + t.resItem + " has failed to load"),
		this.onResourceLoadComplete(t)
	},
	s.onConfigComplete = function(t) {
		RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this),
		this.registerEvents(),
		this.loadGroup(this.GroupsName.RES_LOADING)
	},
	s.remSelf = function() {
		this.parent && (this.progressUI && this.progressUI.remSelf(), this.roundRotateLoading && this.roundRotateLoading.remSelf(), this.parent.removeChild(this))
	},
	s.hasInitDataUser = function() {
		this.loadGroup(this.GroupsName.RES_INDEX)
	},
	s.updateProgressBar = function() {},
	s.ctrlShowCompsLoading = function(t) {},
	s.addRoundRotate = function(t) {
		this.roundRotateLoading || (this.roundRotateLoading = new RoundRotateLoading),
		t ? this.roundRotateLoading.addSelf(this) : this.roundRotateLoading.remSelf()
	},
	s.addProgressUi = function(t) {
		this.progressUI || (this.progressUI = new PageProgressLoad),
		t ? this.progressUI.addSelf(this) : this.progressUI.remSelf()
	},
	s.initCallLoaded = function() {
		this.arrCallLoaded = {};
		var t = this.GroupsName;
		for (var e in t) this.arrCallLoaded[t[e]] = {
			fun: null,
			scope: null
		}
	},
	e.getInst = function() {
		return this.inst || (this.inst = new e),
		this.inst
	},
	e
} (egret.DisplayObjectContainer);
