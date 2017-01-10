
var IconStartRoom = function(t) {
	function e(e, i, s) {
		t.call(this),
		this.strTextureBtn = i,
		this.initIcon(e, i, s)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.touchBtn = function() {
		this.dispatchEventWith(DataGlobal.Evts.SHOW_BOARD_ABOUT_INTO_ROOM)
	},
	s.setTxBtn = function(t) {
		this.btnStart.updateBtn(this.strTextureBtn, t ? "a3_1": "a3_3")
	},
	s.initIcon = function(t, e, i) {
		var s = new egret.Bitmap(RES.getRes(t)),
		n = new btns.BtnBmBm(e, i, {},
		{
			y: 36
		});
		utils.setProps(n, {
			x: s.width / 2,
			y: 320
		},
		[.5, .5]),
		utils.addChildren(this, [s, n]),
		n.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtn, this),
		btns.initFloatBtn(n),
		this.btnStart = n
	},
	e
} (egret.DisplayObjectContainer);
