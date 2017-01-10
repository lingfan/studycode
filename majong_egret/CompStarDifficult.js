
var CompStarDifficult = function(t) {
	function e(e) {
		t.call(this),
		this.initComp(e)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setSumStar = function(t) {
		for (var e = this.arrBmStar,
		i = 0; i < e.length; i++) e[i].visible = t > i
	},
	s.initComp = function(t) {
		var e = new egret.TextField;
		utils.setProps(e, {
			size: 25,
			textColor: 4790528,
			text: t
		}),
		this.addChild(e);
		for (var i, s = [], n = 0; 5 > n; n++) i = new egret.Bitmap(RES.getRes("bb_11")),
		utils.setProps(i, {
			x: e.width + 10 + n * (i.width + 8),
			y: e.height / 2
		},
		[.5, .5]),
		this.addChild(i),
		s.push(i);
		this.arrBmStar = s
	},
	e
} (egret.DisplayObjectContainer);
