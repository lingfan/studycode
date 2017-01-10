
var IconMsg = function(t) {
	function e() {
		t.call(this),
		this.initIcon(),
		this.setSumMsg(2)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setSumMsg = function(t) {
		utils.setProps(this.bmtSumMsg, {
			text: "" + t
		},
		[.5, .5])
	},
	s.initIcon = function() {
		var t = new egret.Bitmap(RES.getRes("a8_2")),
		e = new egret.Bitmap(RES.getRes("a8_2_0")),
		i = new egret.BitmapText;
		utils.setProps(t, {
			width: .9 * t.width,
			height: .9 * t.height
		}),
		utils.setProps(e, {
			x: t.width - e.width / 2,
			y: e.height / 2
		},
		[.5, .5]),
		utils.setProps(i, {
			x: e.x,
			y: e.y,
			font: RES.getRes("yellowfnt_fnt"),
			scaleX: .7,
			scaleY: .7
		},
		[.5, .5]),
		utils.addChildren(this, [t, e, i]),
		this.bmtSumMsg = i
	},
	e
} (egret.DisplayObjectContainer);
