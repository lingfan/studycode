
var CompIconTxSelect = function(t) {
	function e(e) {
		t.call(this),
		this.initComp(e),
		this.drawShadowAreaTouch()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.ctrlSelect = function(t) {
		this.bmBgSelected.visible = this.bmRightHook.visible = t
	},
	s.touchSelf = function() {
		this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN)
	},
	s.initComp = function(t) {
		var e = new egret.Bitmap(RES.getRes("b10_1")),
		i = new egret.Bitmap(RES.getRes("b10_2")),
		s = new egret.Bitmap(RES.getRes("b10_3")),
		n = new egret.Bitmap(RES.getRes(t));
		utils.setProps(e, {
			x: s.width / 2,
			y: s.height / 2
		},
		[.5, .5]),
		utils.setProps(i, {
			x: i.width / 2,
			y: i.height / 2
		},
		[.5, .5]),
		utils.setProps(n, {
			x: s.width + 20,
			y: s.height / 2
		},
		[0, .5]),
		utils.addChildren(this, [e, i, s, n]),
		this.bmBgSelected = i,
		this.bmRightHook = s
	},
	s.drawShadowAreaTouch = function() {
		this.graphics.beginFill(0, .01),
		this.graphics.drawRect(0, 0, this.width, this.height),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
