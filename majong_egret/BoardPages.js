
var BoardPages = function(t) {
	function e() {
		t.call(this),
		this.initBoard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshBoard = function(t, e, i, s, n, r, a, o, h, d, l) {
		for (var c = this.arrPage,
		u = 0; u < c.length; u++) c[u].refreshPage(u == t, e[u], i[u], s[u], n[u], r[u], a[u], o[u], h[u], d[u], l[u]);
		for (var _ = 0,
		g = 0; g < l.length; g++) _ = l[g] > l[t] ? g: _;
		this.playMcFanOnPage(_)
	},
	s.playMcFanOnPage = function(t) {
		utils.setProps(this.compFanMc, {
			x: this.width * (2 * t + 1) / 8
		}),
		this.addChild(this.compFanMc)
	},
	s.initBoard = function() {
		var t = new CompFanMc,
		e = [];
		utils.setProps(t, {
			y: 350
		});
		for (var i, s = 0; 4 > s; s++) i = new PageUserOver,
		utils.setProps(i, {
			x: (i.width + 1) * s
		}),
		this.addChild(i),
		e.push(i);
		this.compFanMc = t,
		this.arrPage = e
	},
	e
} (egret.DisplayObjectContainer);
