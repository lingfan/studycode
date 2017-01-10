
var BoardOptionRoom = function(t) {
	function e() {
		t.call(this),
		this.sizeConf = {
			nWidthBg: 760,
			nHeightBg: 500,
			nTitleX: 13,
			nOptionsStartX: 145,
			nXCenterContent: 430
		},
		this.initBoardFirst()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setOptionsSelect = function() {},
	s.touchOption = function(t) {},
	s.isSelectPlayWay = function(t) {},
	s.isSelectHorse = function(t) {
		var e = this.arrOptionHorse.indexOf(t); - 1 != e && this.singleSelectOneOpt(this.arrOptionHorse, e)
	},
	s.isSelectComputeScore = function(t) {
		var e = this.arrOptionComputeScore.indexOf(t); - 1 != e && this.singleSelectOneOpt(this.arrOptionComputeScore, e)
	},
	s.singleSelectOneOpt = function(t, e) {
		for (var i = 0; i < t.length; i++) t[i].ctrlSelect(e == i)
	},
	s.initBoard = function() {},
	s.initBoardFirst = function() {
		this.addBg(),
		this.addOptionJu(10),
		this.addTipExhaustCard()
	},
	s.addBg = function() {
		var t = new egret.Bitmap(RES.getRes("bb_3"));
		utils.setProps(t, {
			width: this.sizeConf.nWidthBg,
			height: this.sizeConf.nHeightBg
		}),
		this.addChild(t)
	},
	s.addTipExhaustCard = function() {
		var t = new egret.TextField;
		utils.setProps(t, {
			textFlow: (new egret.HtmlTextParser).parser('<font color="#491900">注：房卡在开始游戏后第一局牌局结束后扣除，</font><font color="#ff0000">四人每人都会消耗房卡！</font>'),
			x: this.width / 2,
			y: this.height - 25,
			size: 20,
			bold: !0
		},
		[.5, .5]),
		this.addChild(t)
	},
	s.addOptionJu = function(t) {
		var e = new egret.Bitmap(RES.getRes("bb_6")),
		i = new egret.TextField;
		utils.setProps(e, {
			x: this.sizeConf.nXCenterContent - e.width - 40,
			y: t
		}),
		utils.setProps(i, {
			text: "（房卡X1）",
			textColor: 4790528,
			size: 25,
			bold: !0,
			x: e.x + e.width + 5,
			y: e.y + e.height / 2
		},
		[0, .5]),
		utils.addChildren(this, [e, i]);
		var s = e.y + e.height + 5;
		return this.addGroupTitle("b7_1", t),
		this.addBmLineSeperate(s),
		s + 10
	},
	s.addOptionsPlayWay = function(t) {
		return this.addGroupTitle("b7_2", t),
		0
	},
	s.addOptionStrTip = function(t) {
		return this.addGroupTitle("b7_3", t),
		0
	},
	s.addOptionKing = function(t) {
		return this.addGroupTitle("b7_5", t),
		0
	},
	s.addOptionHorse = function(t) {
		return this.addGroupTitle("b7_4", t),
		0
	},
	s.addOptionComputeScore = function(t) {
		this.addGroupTitle("b7_6", t);
		var e = ["1倍计算", "2倍计算", "3倍计算", "5倍计算"];
		return this.arrOptionComputeScore = this.addArrOption(t, e, !0),
		this.singleSelectOneOpt(this.arrOptionComputeScore, 0),
		0
	},
	s.addBmLineSeperate = function(t) {
		var e = new egret.Bitmap(RES.getRes("bb_10"));
		utils.setProps(e, {
			x: this.sizeConf.nXCenterContent - 20,
			y: t
		},
		[.5, .5]),
		this.addChild(e)
	},
	s.addGroupTitle = function(t, e) {
		var i = new egret.Bitmap(RES.getRes(t));
		utils.setProps(i, {
			x: this.sizeConf.nTitleX,
			y: e
		}),
		this.addChild(i)
	},
	s.addArrOptionTip = function(t, e) {
		for (var i, s, n = [], r = 18, a = 10, o = 0; o < e.length; o++) i = new OptionStrTipScore(e[o]),
		s ? s.x + s.width + 2 * r + i.width < this.sizeConf.nWidthBg ? (i.x = s.x + s.width + r, i.y = s.y) : (i.x = this.sizeConf.nOptionsStartX, i.y = s.y + s.height + a) : (i.x = this.sizeConf.nOptionsStartX, i.y = t),
		n.push(i),
		s = i,
		this.addChild(i);
		return n
	},
	s.addArrOption = function(t, e, i, s) {
		void 0 === s && (s = 20);
		for (var n, r, a = [], o = 18, h = 10, d = 0; d < e.length; d++) n = new OptionSelect(e[d], i ? "b8_1": "b10_1", i ? "b8_2": "b10_4", s),
		r ? r.x + r.width + 2 * o + n.width < this.sizeConf.nWidthBg ? (n.x = r.x + r.width + o, n.y = r.y) : (n.x = this.sizeConf.nOptionsStartX, n.y = r.y + r.height + h) : (n.x = this.sizeConf.nOptionsStartX, n.y = t),
		btns.initFloatBtn(n),
		n.addEventListener(egret.TouchEvent.TOUCH_END, this.touchOption, this),
		a.push(n),
		r = n,
		this.addChild(n);
		return a
	},
	s.getSumMultiple = function() {
		var t, e = this.getIndFromOptionsSingle(this.arrOptionComputeScore);
		switch (e) {
		case 3:
			t = 5;
			break;
		default:
			t = e + 1
		}
		return t
	},
	s.isSelectKing = function(t) {
		var e = this.arrOptionKing.indexOf(t); - 1 != e && (this.singleSelectOneOpt(this.arrOptionKing, e), 0 == e && this.arrOptionPlayWay[0].ctrlSelect(!1), this.arrOptionPlayWay[0].ctrlTouch(0 != e))
	},
	s.cancelAllOptions = function(t) {
		for (var e = 0; e < t.length; e++) t[e].ctrlSelect(!1)
	},
	s.ctrlAllOptionsTouch = function(t, e) {
		for (var i = 0; i < t.length; i++) t[i].ctrlTouch(e)
	},
	s.getIndFromOptionsSingle = function(t) {
		for (var e = 0; e < t.length; e++) if (t[e].isBeSelected()) return e;
		return - 1
	},
	s.getIndsFromOptionsMany = function(t) {
		for (var e = [], i = 0; i < t.length; i++) e[i] = t[i].isBeSelected();
		return e
	},
	e
} (egret.DisplayObjectContainer);
