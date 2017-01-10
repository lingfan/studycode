
var BarBroadcast = function(t) {
	function e() {
		t.call(this),
		this.initComps(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startFrame, this),
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.stopFrame, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.startFrame = function() {
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this)
	},
	s.stopFrame = function() {
		this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this)
	},
	s.onFrame = function() {
		this.tfTx.x -= 1,
		this.tfTx.x + this.tfTx.width < 70 && (this.tfTx.x = this.width - 10)
	},
	s.initComps = function() {
		var t = new egret.Bitmap(RES.getRes("aa_3")),
		e = new egret.TextField;
		utils.setProps(e, {
			text: "锅里麻将正式上线",
			size: 30,
			y: (t.height - 30) / 2
		}),
		utils.addChildren(this, [t, e]),
		this.tfTx = e,
		this.width = t.width,
		this.setTfMask(e, t)
	},
	s.setTfMask = function(t, e) {
		var i = new egret.Shape;
		i.graphics.beginFill(0, .82),
		i.graphics.drawRect(0, 0, e.width - 80, e.height),
		i.graphics.endFill(),
		i.x = 70,
		this.addChild(i),
		t.mask = i
	},
	e
} (egret.DisplayObjectContainer);
