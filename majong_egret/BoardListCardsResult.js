
var BoardListCardsResult = function(t) {
	function e() {
		t.call(this),
		this.initBoard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.updatePanel = function(t, e, i, s, n, r, a, o, h) {
		for (var d, l = [r, a, o, h], c = this.arrListCardsResult, u = 0; u < c.length; u++) d = e == u,
		c[u].refreshList(t == u, n[u], d ? i: "", s[u], d, l[u])
	},
	s.initBoard = function() {
		for (var t, e = [], i = 0; 4 > i; i++) t = new ListCardResult,
		utils.setProps(t, {
			y: (t.height + 3) * i
		}),
		this.addChild(t),
		e.push(t);
		this.arrListCardsResult = e
	},
	e
} (egret.DisplayObjectContainer);
