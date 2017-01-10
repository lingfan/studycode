
var BoardInputRoomNum = function(t) {
	function e() {
		t.call(this),
		this.arrUnitKey = [],
		this.initBoard(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function() {
		this.clearAllNumInputed()
	},
	s.touchKey = function(t) {
		var e = this.arrUnitKey.indexOf(t.target);
		switch (e) {
		case 9:
			this.clearAllNumInputed();
			break;
		case 11:
			if (0 == this.nIndInputing) return;
			this.arrUnitNumRoom[--this.nIndInputing].clearInput();
			break;
		default:
			this.arrUnitNumRoom[this.nIndInputing++].setContentInput(t.target.strText),
			this.requestIntoRoom()
		}
	},
	s.clearAllNumInputed = function() {
		for (var t = this.arrUnitNumRoom,
		e = 0; e < t.length; e++) t[e].clearInput();
		this.nIndInputing = 0
	},
	s.requestIntoRoom = function() {
		var t = this.arrUnitNumRoom;
		if (! (this.nIndInputing < t.length)) {
			for (var e = "",
			i = 0; i < t.length; i++) e += t[i].nContentInput;
			var s = parseInt(e);
			this.clearAllNumInputed(),
			this.dispatchEventWith(DataGlobal.Evts.SEND_REQUEST_BLOCKED, !1, {
				nRoomId: s
			})
		}
	},
	s.initBoard = function() {
		for (var t, e = new egret.Bitmap(RES.getRes("bb_7")), i = [], s = [], n = 0; 6 > n; n++) t = new UnitNumRoom,
		utils.setProps(t, {
			x: e.width / 2 + 70 * (n - 2.5),
			y: t.height / 2
		},
		[.5, .5]),
		btns.initScaleBtn(t),
		this.addChild(t),
		i.push(t);
		utils.setProps(e, {
			y: 66
		});
		for (var r, a = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "ÖØÊä", "0", "É¾³ý"], o = 0; 12 > o; o++) r = new UnitInputKey(a[o], e.width / 3, e.height / 4),
		utils.setProps(r, {
			x: e.width / 2 + (o % 3 - 1) * r.width,
			y: e.y + (Math.floor(o / 3) + .5) * r.height,
			fontFamily: "Microsoft YaHei"
		},
		[.5, .5]),
		btns.initScaleBtn(r),
		r.addEventListener(egret.TouchEvent.TOUCH_END, this.touchKey, this),
		this.addChild(r),
		s.push(r);
		this.addChildAt(e, 0),
		this.arrUnitKey = s,
		this.arrUnitNumRoom = i
	},
	e
} (egret.DisplayObjectContainer);
