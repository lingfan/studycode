
var BarPercentScroll = function(t) {
	function e(e) {
		t.call(this),
		this.initBar(e)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.updatePercent = function(t, e, i) {
		var s = this;
		if (e >= t) utils.setProps(this.bmTop, {
			y: 0,
			height: this.bmBtm.height
		});
		else {
			this.bmTop.height == this.bmBtm.height && (this.bmTop.height = 70);
			var n = t - e,
			r = i / n;
			egret.Tween.get(this.bmTop, {
				override: !0
			}).to({
				y: this.nRange * r
			},
			100).call(function() {
				egret.Tween.removeTweens(s.bmTop)
			})
		}
	},
	s.initBar = function(t) {
		var e = new egret.Bitmap(RES.getRes("cp10_1")),
		i = new egret.Bitmap(RES.getRes("cp10_2"));
		utils.setProps(e, {
			height: t
		}),
		utils.setProps(i, {
			x: (e.width - i.width) / 2,
			height: 70
		}),
		utils.addChildren(this, [e, i]),
		this.bmTop = i,
		this.bmBtm = e,
		this.nRange = t - i.height
	},
	e
} (egret.DisplayObjectContainer);
