
var CompChatEmoji = function(t) {
	function e() {
		t.call(this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshChat = function(t, e, i) {
		utils.setProps(this, {
			visible: !1
		}),
		this.dir = t,
		i.addChild(this),
		RES.getResAsync("cp15_0", this.loadResImg, this)
	},
	s.loadResImg = function(t) {
		var e = 70;
		utils.setProps(this, {
			texture: t,
			visible: !0,
			x: this.dir == Direction.RIGHT || this.dir == Direction.UP ? this.x - e: this.x,
			width: e,
			height: e
		}),
		this.delayReclaimSelf()
	},
	s.delayReclaimSelf = function() {
		var t = this;
		egret.setTimeout(function() {
			t.parent.removeChild(t),
			CachePool.reclaim(t)
		},
		this, 2e3)
	},
	e.keyClass = "CompChatEmoji",
	e
} (egret.Bitmap);
