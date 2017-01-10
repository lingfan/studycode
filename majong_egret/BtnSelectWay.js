
var BtnSelectWay = function(t) {
	function e(e, i) {
		t.call(this),
		this.nIndBtn = e,
		this.nIndTextureTx = i,
		this.initBtn()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.ctrlSelect = function(t) {
		this.bmBgSelect.visible = t,
		this.bmTx.texture = RES.getRes(t ? "b5_" + this.nIndTextureTx: "b6_" + this.nIndTextureTx)
	},
	s.initBtn = function() {
		var t = new egret.Bitmap(RES.getRes("bb_5")),
		e = new egret.Bitmap(RES.getRes("bb_4")),
		i = new egret.Bitmap(RES.getRes("b5_" + this.nIndTextureTx));
		utils.setProps(t, {
			x: t.width / 2,
			y: e.height / 2
		},
		[.5, .5]),
		utils.setProps(i, {
			x: t.x,
			y: t.y
		},
		[.5, .5]),
		utils.addChildren(this, [t, e, i]),
		this.bmBgSelect = e,
		this.bmTx = i
	},
	e
} (egret.DisplayObjectContainer);
