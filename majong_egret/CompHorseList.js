
var CompHorseList = function(t) {
	function e() {
		t.call(this),
		this.initComp(),
		this.showCardHorse([], [])
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showCardHorse = function(t, e) {
		for (var i, s = 0,
		n = 90,
		r = this.arrCardBlock,
		a = 0; a < t.length; a++) i = r[s++],
		i.refreshStatusUsed(Direction.DOWN, t[a]),
		i.scaleSelf(.5),
		utils.setProps(i, {
			x: n,
			y: 0,
			alpha: .8,
			visible: !0
		}),
		n += i.visualSize.w;
		n += 10;
		for (var o = 0; o < e.length; o++) i = r[s++],
		i.refreshStatusUsed(Direction.DOWN, t[o]),
		i.scaleSelf(.5),
		utils.setProps(i, {
			x: n,
			y: 0,
			alpha: 1,
			visible: !0
		}),
		n += i.visualSize.w;
		for (; s < r.length;) i = r[s++],
		i.visible = !1;
		this.bmTxMapai.visible = 0 != e.length || 0 != t.length
	},
	s.initComp = function() {
		var t = new egret.Bitmap(RES.getRes("b7_4"));
		utils.setProps(t, {
			y: 21
		},
		[0, .5]),
		this.addChild(t);
		for (var e, i = 8,
		s = [], n = 0; i > n; n++) e = new CardBlock,
		e.scaleSelf(.5),
		s.push(e),
		this.addChild(e);
		this.arrCardBlock = s,
		this.bmTxMapai = t
	},
	e
} (egret.DisplayObjectContainer);
