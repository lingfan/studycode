
var CompIconProgress = function(t) {
	function e(e) {
		t.call(this),
		this.bOpenSwitch = !0,
		this.nPercent = 1,
		this.initComp(e),
		this.refreshStatus()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshStatus = function() {
		this.setProgress(),
		this.setTfPercent(),
		this.setIconSelected(this.bOpenSwitch)
	},
	s.setProgress = function() {
		this.barVolumn.updateBar(this.bOpenSwitch ? this.nPercent: 0)
	},
	s.setTfPercent = function() {
		this.bOpenSwitch && (utils.setProps(this.tfPercent, {
			text: Math.floor(100 * this.nPercent) + " %",
			alpha: 1
		},
		[.5, 0]), egret.Tween.get(this.tfPercent, {
			override: !0
		}).to({
			alpha: 0
		},
		500))
	},
	s.setIconSelected = function(t) {
		this.bmBtnSwitch.texture = RES.getRes(t ? "b11_2": "b11_1")
	},
	s.touchSwitch = function(t) {
		this.bOpenSwitch = !this.bOpenSwitch,
		this.refreshStatus()
	},
	s.touchBarProgress = function(t) {
		if (this.bOpenSwitch) {
			var e = this.barVolumn.getPercentByPosX(t.localX); - 1 != e && (this.nPercent = e, this.refreshStatus())
		}
	},
	s.initComp = function(t) {
		var e = new egret.Bitmap(RES.getRes(t)),
		i = new BarRectProgress("b13_1", "b13_2"),
		s = new egret.Bitmap(RES.getRes("b11_1")),
		n = new egret.TextField;
		utils.setProps(i, {
			x: e.width + 15,
			y: (e.height - i.height) / 2
		}),
		utils.setProps(s, {
			x: i.x + i.width + s.width - 20,
			y: e.height / 2
		},
		[.5, .5]),
		utils.setProps(n, {
			x: i.x + i.width / 2,
			y: i.y + i.height + 10,
			textColor: 16777215,
			strokeColor: 0,
			stroke: 2,
			bold: !0,
			size: 20
		},
		[.5, .5]),
		utils.addChildren(this, [e, i, s, n]),
		this.barVolumn = i,
		this.bmBtnSwitch = s,
		this.tfPercent = n,
		s.addEventListener(egret.TouchEvent.TOUCH_END, this.touchSwitch, this),
		i.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBarProgress, this),
		i.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchBarProgress, this),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBarProgress, this),
		i.touchEnabled = !0,
		btns.initScaleBtn(s)
	},
	e
} (egret.DisplayObjectContainer);
