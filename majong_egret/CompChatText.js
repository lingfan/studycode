
var CompChatText = function(t) {
	function e() {
		t.call(this),
		this.initComp()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshChat = function(t, e, i) {
		utils.setProps(this.tfSentence, {
			text: RES.getRes("frequent_chat_text")[e]
		},
		[0, .5]),
		utils.setProps(this.bmBoard, {
			scaleX: t == Direction.RIGHT || t == Direction.UP ? -1 : 1,
			width: this.tfSentence.width + 30,
			x: this.tfSentence.width / 2 + 15
		},
		[.5, 0]),
		i.addChild(this),
		this.delayReclaimSelf()
	},
	s.delayReclaimSelf = function() {
		var t = this;
		egret.setTimeout(function() {
			t.parent.removeChild(t),
			CachePool.reclaim(t)
		},
		this, 3e3)
	},
	s.initComp = function() {
		var t = new egret.Bitmap(RES.getRes("c11")),
		e = new egret.TextField;
		utils.setProps(e, {
			textColor: 16777215,
			size: 20,
			bold: !0,
			x: 10,
			y: t.height / 2 - 6
		},
		[0, .5]),
		utils.addChildren(this, [t, e]),
		this.bmBoard = t,
		this.tfSentence = e
	},
	e.keyClass = "CompChatText",
	e
} (egret.DisplayObjectContainer);
