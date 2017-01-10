
var CompChatVoice = function(t) {
	function e() {
		t.call(this),
		this.initComp()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshChat = function(t, e) {
		e.addChild(this),
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
		e = new egret.Bitmap(RES.getRes("cp17"));
		utils.setProps(e, {
			x: 20,
			y: t.height / 2 - 6
		},
		[0, .5]),
		utils.setProps(t, {
			width: 2 * e.x + e.width
		}),
		utils.addChildren(this, [t, e])
	},
	e.keyClass = "CompChatVoice",
	e
} (egret.DisplayObjectContainer);
