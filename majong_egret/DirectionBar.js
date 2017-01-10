
var DirectionBar = function(t) {
	function e() {
		t.call(this),
		this.nTimeTotal = 15,
		this.bmtTime = null,
		this.initBar()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.whoTurnToPopCard = function(t) {
		this.setDirection(t),
		this.setNumText(this.nTimeTotal),
		this.ctrlTmLine(!0)
	},
	s.setSelfWindBottom = function(t) {
		this.compLightDirect.rotation = 90 * t
	},
	s.ctrlTmLine = function(t) {
		t ? this.tmDeadline.start() : this.tmDeadline.stop()
	},
	s.countTime = function() {
		"00" == this.bmtTime.text ? this.ctrlTmLine(!1) : this.setNumText(parseInt(this.bmtTime.text) - 1)
	},
	s.setNumText = function(t) {
		utils.setProps(this.bmtTime, {
			text: 10 > t ? "0" + t: "" + t
		},
		[.5, .5]),
		t == this.nTimeTotal ? this.bmtTime.font = RES.getRes("bluefnt_fnt") : 5 == t && (this.bmtTime.font = RES.getRes("redfnt_fnt"))
	},
	s.setDirection = function(t) {
		this.compLightDirect.setDirection(t)
	},
	s.initBar = function() {
		var t = new egret.Bitmap(RES.getRes("c2_5"));
		this.addChild(t),
		this.width = t.width,
		this.height = t.height,
		this.bmtTime = new egret.BitmapText,
		utils.setProps(this.bmtTime, {
			font: RES.getRes("bluefnt_fnt"),
			x: this.width / 2,
			y: this.height / 2
		},
		[.5, .5]),
		this.addChild(this.bmtTime),
		this.compLightDirect = new CompLightDirection(t.width, t.height),
		utils.setProps(this.compLightDirect, {
			x: this.compLightDirect.width / 2,
			y: this.compLightDirect.height / 2
		},
		[.5, .5]),
		this.addChild(this.compLightDirect);
		var e = new egret.Timer(1e3, 0);
		e.addEventListener(egret.TimerEvent.TIMER, this.countTime, this),
		this.tmDeadline = e
	},
	e
} (egret.DisplayObjectContainer);
