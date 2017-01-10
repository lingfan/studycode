
var BoardSelectWayPlay = function(t) {
	function e(e) {
		void 0 === e && (e = 460),
		t.call(this),
		this.initBoard(e),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function(t) {
		this.chooseBtn(0)
	},
	s.selectOneWay = function(t) {
		var e = this.arrBtns.indexOf(t.target);
		this.chooseBtn(e),
		this.reportIndSelect(e)
	},
	s.reportIndSelect = function(t) {
		this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN, !1, {
			nInd: t
		})
	},
	s.chooseBtn = function(t) {
		void 0 === t && (t = 0),
		this.nIndSelect = t;
		for (var e = this.arrBtns,
		i = 0; i < e.length; i++) e[i].ctrlSelect(t == i)
	},
	s.initBoard = function(t) {
		for (var e, i = new egret.Bitmap(RES.getRes("bb_3")), s = [], n = [1, 3, 4], r = 0; r < n.length; r++) e = new BtnSelectWay(r, n[r]),
		utils.setProps(e, {
			x: 5,
			y: 15 + (e.height + 10) * r
		}),
		btns.initFloatBtn(e),
		e.addEventListener(egret.TouchEvent.TOUCH_END, this.selectOneWay, this),
		this.addChild(e),
		s.push(e);
		utils.setProps(i, {
			width: e.width - 5,
			height: t
		}),
		this.addChildAt(i, 0),
		this.arrBtns = s
	},
	e
} (egret.DisplayObjectContainer);
