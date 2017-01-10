
var CardKingBlock = function(t) {
	function e() {
		t.call(this),
		this.initCard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setId = function(t) {
		utils.setProps(this.bmTxId, {
			texture: RES.getRes("c_" + t)
		},
		[.5, .5])
	},
	s.initCard = function() {
		var t = new egret.Bitmap(RES.getRes("c0_19")),
		e = new egret.Bitmap(RES.getRes("c0_1")),
		i = new egret.Bitmap(RES.getRes("c_3")),
		s = new egret.Bitmap(RES.getRes("c0_9"));
		utils.setProps(e, {
			scaleX: .6,
			scaleY: .6,
			x: t.width / 2,
			y: t.height / 2 - 4
		},
		[.5, .5]),
		utils.setProps(i, {
			x: e.x,
			y: e.y,
			scaleX: .6,
			scaleY: .6
		},
		[.5, .5]),
		utils.setProps(s, {
			x: 0,
			y: t.height
		},
		[0, 1]),
		utils.addChildren(this, [t, e, i, s]),
		this.bmTxId = i
	},
	e
} (egret.DisplayObjectContainer);
