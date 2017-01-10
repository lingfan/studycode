
var CompPopBoard = function(t) {
	function e(e, i, s, n) {
		t.call(this),
		this.initSelf(e, i, s, n)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.initSelf = function(t, e, i, s) {
		var n = new egret.Bitmap(RES.getRes("bb_1")),
		r = new egret.Bitmap(RES.getRes(t)),
		a = new egret.Bitmap(RES.getRes(e));
		utils.setProps(n, {
			width: i,
			height: s
		}),
		utils.setProps(a, {
			x: i / 2,
			y: 12 + a.height / 2
		},
		[.5, .5]),
		utils.setProps(r, {
			x: 15,
			y: a.y + a.height / 2 + 10,
			width: i - 30,
			height: s - 100
		}),
		utils.addChildren(this, [n, r, a])
	},
	e
} (egret.DisplayObjectContainer);
