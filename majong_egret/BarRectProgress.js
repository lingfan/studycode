
var BarRectProgress = function(t) {
	function e(e, i) {
		t.call(this),
		this.initBar(e, i)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.updateBar = function(t) {
		0 > t || t > 1 || (this.maskRect.width = this.width * t, this.bmTop.mask = this.maskRect)
	},
	s.getPercentByPosX = function(t) {
		var e = (t - this.bmTop.x) / this.bmTop.width;
		return 0 > e || e > 1 ? -1 : e
	},
	s.initBar = function(t, e) {
		var i = new egret.Bitmap(RES.getRes(t)),
		s = new egret.Bitmap(RES.getRes(e));
		utils.setProps(s, {
			x: (i.width - s.width) / 2,
			y: (i.height - s.height) / 2
		}),
		utils.addChildren(this, [i, s]),
		this.maskRect = new egret.Rectangle(0, 0, s.width, s.height),
		this.bmTop = s
	},
	e
} (egret.DisplayObjectContainer);
