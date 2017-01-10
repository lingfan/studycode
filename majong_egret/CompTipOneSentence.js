
var CompTipOneSentence = function(t) {
	function e() {
		t.call(this),
		this.initComp()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showTip = function(t, e, i) {
		utils.setProps(this.tfOneSentence, {
			text: t
		},
		[.5, .5])
	},
	s.touchBtnSure = function() {
		this.dispatchEventWith("back")
	},
	s.initComp = function() {
		this.drawShadow();
		var t = new CompPopBoard("bb_2", "", 300, 200),
		e = new egret.TextField,
		i = new btns.BtnBmBm("b3_1", "b4_1", {},
		{
			y: 27
		});
		utils.setProps(t, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2
		}),
		utils.setProps(e, {
			textColor: 4790528,
			size: 25,
			lineSpacing: 5,
			x: this.width / 2,
			y: t.y + 90
		},
		[.5, .5]),
		utils.setProps(i, {
			x: this.width / 2,
			y: t.y + t.height - 10,
			touchEnabled: !0
		},
		[.5, 1]),
		btns.initFloatBtn(i),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnSure, this),
		utils.addChildren(this, [t, e, i])
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .3),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
