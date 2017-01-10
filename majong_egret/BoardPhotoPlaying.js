
var BoardPhotoPlaying = function(t) {
	function e() {
		t.call(this),
		this.initBoard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshInfo = function(t, e, i, s, n, r) {
		var a = this.arrPhotos[t - 1];
		a.setlevelName(e),
		a.setNick(s),
		a.setGold(n),
		a.setPlayerHead(i),
		a.setFlag(r),
		"" == s ? a.visible = !1 : a.visible = !0
	},
	s.showChatEmoji = function(t, e) {
		var i = CachePool.produce(CompChatEmoji);
		i.refreshChat(t, e, this),
		this.posChat(i, t)
	},
	s.showChatText = function(t, e) {
		var i = CachePool.produce(CompChatText);
		i.refreshChat(t, e, this),
		this.posChat(i, t)
	},
	s.showChatVoiceAndPlay = function(t) {
		var e = CachePool.produce(CompChatVoice);
		e.refreshChat(t, this),
		this.posChat(e, t)
	},
	s.posChat = function(t, e) {
		var i, s = this.arrPhotos[e - 1];
		i = e == Direction.DOWN || e == Direction.LEFT ? {
			x: s.x + s.width,
			y: s.y
		}: {
			x: s.x - t.width,
			y: s.y
		},
		utils.setProps(t, {
			x: i.x,
			y: i.y
		})
	},
	s.initBoard = function() {
		for (var t, e = [], i = 0; 4 > i; i++) t = new PhotoPlayerPlaying,
		t.setlevelName(""),
		t.setNick(""),
		t.setGold(0),
		t.setPlayerHead(""),
		t.setFlag(!1),
		e.push(t),
		this.addChild(t);
		var s = DataGlobal.hStage,
		n = DataGlobal.wStage;
		e[0].HorV("h"),
		e[1].HorV("v"),
		e[2].HorV("h"),
		e[3].HorV("v"),
		e[0].setFlag(!0),
		utils.setProps(e[0], {
			x: 0,
			y: s - e[0].height - 10
		}),
		utils.setProps(e[1], {
			x: n - e[1].width - 10,
			y: (s - e[1].height) / 2 - 60
		}),
		utils.setProps(e[2], {
			x: n - 290
		}),
		utils.setProps(e[3], {
			x: 0,
			y: 200
		}),
		this.arrPhotos = e
	},
	e
} (egret.DisplayObjectContainer);
