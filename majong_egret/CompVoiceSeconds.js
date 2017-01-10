
var CompVoiceSeconds = function(t) {
	function e() {
		t.call(this),
		this.initComp()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setTime = function(t, e) {
		e ? (utils.setProps(this.tfTimeLong, {
			x: 0,
			text: t + "''"
		},
		[0, .5]), utils.setProps(this.bmVoice, {
			x: this.tfTimeLong.width + this.bmVoice.width / 2 + 5,
			scaleX: -1
		},
		[.5, .5])) : (utils.setProps(this.bmVoice, {
			x: 0,
			scaleX: 1
		},
		[0, .5]), utils.setProps(this.tfTimeLong, {
			x: this.bmVoice.width + 5,
			text: t + "''"
		},
		[0, .5]))
	},
	s.initComp = function() {
		var t = new egret.Bitmap(RES.getRes("cp17")),
		e = new egret.TextField;
		utils.setProps(t, {
			y: t.height / 2
		},
		[0, .5]),
		utils.setProps(e, {
			textColor: 3556654,
			size: 25,
			x: t.width + 10,
			y: t.y,
			text: "00''"
		},
		[0, .5]),
		utils.addChildren(this, [t, e]),
		this.tfTimeLong = e,
		this.bmVoice = t
	},
	e
} (egret.DisplayObjectContainer);
