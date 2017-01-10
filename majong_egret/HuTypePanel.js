
var HuTypePanel = function(t) {
	function e() {
		t.call(this),
		this.btnArr = [],
		this.width = DataGlobal.wStage / 2;
		for (var e = 0,
		i = 0; i < HuInfo.Info.length; i++) {
			var s = new btns.BtnRoundRect(HuInfo.Info[i].Name);
			s.SetBtnID(i),
			0 == i ? (s.x = 5, s.y = 5) : (s.width + 5 + this.btnArr[this.btnArr.length - 1].x + this.btnArr[this.btnArr.length - 1].width > this.width ? (e += 1, s.x = 5) : s.x = 5 + this.btnArr[this.btnArr.length - 1].x + this.btnArr[this.btnArr.length - 1].width + 5, s.y = 5 + e * (5 + s.height)),
			this.addChild(s),
			this.btnArr.push(s),
			s.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this)
		}
		this.height = s.y + s.height + 5,
		this.graphics.beginFill(16711680, .5),
		this.graphics.drawRoundRect(0, 0, this.width, this.height, 20, 20),
		this.graphics.endFill()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onClick = function(t) {
		this.dispatchEventWith("onSelectHu", !1, {
			idx: t.target.GetBtnID()
		}),
		this.visible = !1
	},
	e
} (egret.Sprite);
