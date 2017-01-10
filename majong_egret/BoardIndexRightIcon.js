
var BoardIndexRightIcon = function(t) {
	function e() {
		t.call(this),
		this.initBoard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showPopShare = function() {
		if (!this.boardShare) {
			var t = new PopShare;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardShare = t
		}
		this.boardShare.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.showPopHowToPlay = function() {
		if (!this.boardHowToPlay) {
			var t = new PopHowToPlay;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardHowToPlay = t
		}
		this.boardHowToPlay.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.showPopHistoryAttack = function() {
		if (!this.boardHistoryAttack) {
			var t = new PopHistoryAttack;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardHistoryAttack = t
		}
		this.boardHistoryAttack.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.showPopSetting = function() {
		if (!this.boardSetting) {
			var t = new PopSetting;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardSetting = t
		}
		this.boardSetting.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.showPopMsg = function() {
		if (!this.boardMsg) {
			var t = new PopMsg;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardMsg = t
		}
		this.boardMsg.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.backIndex = function() {
		this.parent.touchChildren = !0
	},
	s.touchIcon = function(t) {
		var e = this.arrBtnsRightTop.indexOf(t.target);
		switch (e) {
		case 0:
			this.showPopShare();
			break;
		case 1:
			this.showPopMsg();
			break;
		case 2:
			this.showPopHowToPlay();
			break;
		case 3:
			this.showPopHistoryAttack();
			break;
		case 4:
			this.showPopSetting()
		}
	},
	s.initBoard = function() {
		for (var t, e = [], i = 0; 5 > i; i++) 1 != i && (t = new egret.Bitmap(RES.getRes("a8_" + (i + 1))), e.push(t));
		var s = new IconMsg;
		e.splice(1, 0, s),
		this.arrBtnsRightTop = e,
		this.posIcons(e)
	},
	s.posIcons = function(t) {
		for (var e, i = 0; i < t.length; i++) e = t[i],
		utils.setProps(t[i], {
			width: .9 * e.width,
			height: .9 * e.height,
			x: e.width / 2 + 75 * i,
			y: e.height / 2
		},
		[.5, .5]),
		btns.initScaleBtn(e),
		e.addEventListener(egret.TouchEvent.TOUCH_END, this.touchIcon, this),
		this.addChild(e)
	},
	e
} (egret.DisplayObjectContainer);
