
var CompLiScore = function(t) {
	function e(e) {
		t.call(this),
		this.initComp(e)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshScore = function(t) {
		utils.setProps(this.tfVal, {
			text: "" + t
		},
		[1, 0])
	},
	s.initComp = function(t) {
		var e = new egret.TextField,
		i = new egret.TextField,
		s = {
			size: 27,
			fontFamily: "MicroSoft Yahei",
			textColor: 5525317,
			bold: !0
		};
		utils.setProps(e, s),
		utils.setProps(e, {
			text: t
		}),
		utils.setProps(i, s),
		utils.setProps(i, {
			x: 180,
			text: "00"
		},
		[1, 0]),
		utils.addChildren(this, [e, i]),
		this.tfVal = i
	},
	e
} (egret.DisplayObjectContainer);
