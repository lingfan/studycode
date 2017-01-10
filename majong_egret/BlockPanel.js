
var BlockPanel = function(t) {
	function e() {
		t.call(this),
		this.btnArr = [];
		for (var e = 0; 4 > e; e++) for (var i = 1; 10 > i; i++) {
			var s = new TestBlock;
			10 * e + i == 39 ? s.init( - 1) : s.init(10 * e + i),
			s.x = 5 + s.width / 2 + (i - 1) * (s.width + 5),
			s.y = s.height / 2 + 5 + e * (s.height + 5),
			this.addChild(s),
			this.btnArr.push(s),
			s.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this)
		}
		this.width = this.btnArr[8].x + this.btnArr[8].width / 2 + 5,
		this.height = s.y + s.height / 2 + 5,
		this.graphics.beginFill(16711680, .5),
		this.graphics.drawRoundRect(0, 0, this.width, this.height, 30, 30),
		this.graphics.endFill(),
		this.touchEnabled = !0,
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onClose = function() {
		this.visible = !1
	},
	s.onTouch = function(t) {
		this.dispatchEventWith("onClickBlock", !1, {
			id: t.target.getResult()
		})
	},
	e
} (egret.Sprite);
