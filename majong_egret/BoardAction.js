
var BoardAction = function(t) {
	function e() {
		t.call(this),
		this.initBoard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showDoubleAction = function() {
		this.showBtnAction(this.bmBtnDouble)
	},
	s.showBarAction = function() {
		this.showBtnAction(this.bmBtnBar)
	},
	s.showHuAction = function() {
		this.showBtnAction(this.bmBtnHu)
	},
	s.touchBtn = function(t) {
		var e = "";
		switch (t.target) {
		case this.bmBtnPass:
			e = DataGlobal.Evts.ACTION_PASS;
			break;
		case this.bmBtnBar:
			e = DataGlobal.Evts.ACTION_BAR;
			break;
		case this.bmBtnHu:
			e = DataGlobal.Evts.ACTION_HU;
			break;
		case this.bmBtnDouble:
			e = DataGlobal.Evts.ACTION_DOUBLE
		}
		this.parent.removeChild(this),
		this.dispatchEventWith(e)
	},
	s.showBtnAction = function(t) {
		for (var e = [this.bmBtnBar, this.bmBtnHu, this.bmBtnDouble], i = 0; i < e.length; i++) e[i].visible = t == e[i]
	},
	s.initBoard = function() {
		var t = new egret.Bitmap(RES.getRes("c18")),
		e = new egret.Bitmap(RES.getRes("c19_0")),
		i = new egret.Bitmap(RES.getRes("c19_1")),
		s = new egret.Bitmap(RES.getRes("c19_2")),
		n = new egret.Bitmap(RES.getRes("c19_4"));
		utils.setProps(t, {
			width: 370
		}),
		utils.setProps(e, {
			x: t.width - e.width / 2 - 60,
			y: t.height / 2
		},
		[.5, .5]),
		utils.setProps(i, {
			x: 60 + i.width / 2,
			y: e.y,
			visible: !1
		},
		[.5, .5]),
		utils.setProps(s, {
			x: 60 + s.width / 2,
			y: i.y,
			visible: !1
		},
		[.5, .5]),
		utils.setProps(n, {
			x: 60 + n.width / 2,
			y: i.y,
			visible: !1
		},
		[.5, .5]),
		btns.initScaleBtn(e),
		btns.initScaleBtn(i),
		btns.initScaleBtn(s),
		btns.initScaleBtn(n),
		e.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtn, this),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtn, this),
		s.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtn, this),
		n.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtn, this),
		utils.addChildren(this, [t, e, i, s, n]),
		this.bmBtnPass = e,
		this.bmBtnBar = s,
		this.bmBtnDouble = i,
		this.bmBtnHu = n
	},
	e
} (egret.DisplayObjectContainer);
