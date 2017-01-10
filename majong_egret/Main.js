
var Main = function(t) {
	function e() {
		var i = this;
		t.call(this),
		window.history.pushState({
			title: document.title,
			url: ""
		},
		document.title, ""),
		egret.setTimeout(function() {
			window.addEventListener("popstate", i.onPushBack, !0),
			window.addEventListener("onbeforeunload", i.onPushBack, !0)
		},
		this, 1e3),
		GlobalData.g_main = this,
		e.inst = this,
		e.dataGame = new DataDeskGame,
		this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onPushBack = function(t) {
		var e = confirm("你真的要离开我吗？");
		0 == e ? window.history.pushState({
			title: document.title,
			url: ""
		},
		document.title, "") : "undefined" == window.WeixinJSBridge || null == window.WeixinJSBridge ? window.location.href = "about:blank": window.WeixinJSBridge.call("closeWindow")
	},
	s.onAddToStage = function(t) {
		this.setStageSize(),
		this.loadResLoading()
	},
	s.setStageSize = function() {
		this.stage.setContentSize(DataGlobal.wStage, DataGlobal.hStage)
	},
	s.loadResLoading = function() {
		var t = CompLoading.getInst();
		t.registerLoadedCall(t.GroupsName.RES_LOADING, this.loadResIndex, this)
	},
	s.connectSocket = function() {
		var t = new SessionChannel;
		t.OpenChannel(GlobalData.server_url, this.login, this),
		ShareMgr.getInstance().g_channel = t
	},
	s.login = function() {
		DataInteract.getInst().loginBegin(this.showUserInfo, this)
	},
	s.showUserInfo = function() {
		e.indexCtrl && e.indexCtrl.refershInfo()
	},
	s.loadResIndex = function() {
		this.connectSocket();
		var t = CompLoading.getInst();
		t.loadGroupWithCall(t.GroupsName.RES_INDEX, this.showSceneIndex, this, this)
	},
	s.showSceneIndex = function() {
		if (!e.indexCtrl) {
			var t = new SceneIndex;
			t.addEventListener(DataGlobal.Evts.CREATE_ROOM, this.createRoomJust, this),
			e.indexCtrl = t
		}
		this.addChild(e.indexCtrl);
		var i = new btns.BtnRoundRect("测 试");
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.showPartTest, this),
		utils.setProps(i, {
			x: this.stage.stageWidth - 30,
			y: this.stage.stageHeight - 30
		},
		[1, 1]),
		btns.initFloatBtn(i),
		this.addChild(i)
	},
	s.showSceneGame = function() {
		if (!e.gameCtrl) {
			var t = new SceneGame;
			t.addEventListener(DataGlobal.Evts.BACK_HOTEL_FROM_ROOM, this.backHotelFromRoom, this),
			e.gameCtrl = t
		}
		e.gameCtrl.addSelf(this)
	},
	s.createRoomJust = function() {
		this.showSceneGame(),
		e.gameCtrl.createdRoomJust()
	},
	s.backHotelFromRoom = function() {
		this.showSceneIndex()
	},
	s.showPartTest = function() {
		this.removeChildren(),
		this.panelTestBtns || (this.panelTestBtns = new PanelTestBtns),
		this.addChild(this.panelTestBtns)
	},
	e
} (egret.DisplayObjectContainer);
