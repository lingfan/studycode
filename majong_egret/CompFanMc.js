
var CompFanMc = function(t) {
	function e() {
		t.call(this),
		this.initComp(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function() {
		for (var t = 0; t < this.arrMcGold.length; t++) this.arrMcGold[t].gotoAndPlay(0, 2);
		this.mcFan.gotoAndPlay(0, 1)
	},
	s.remSelf = function() {
		this.parent && this.parent.removeChild(this)
	},
	s.initComp = function() {
		var t = new egret.MovieClip(new egret.MovieClipDataFactory(RES.getRes("ot_fan_json"), RES.getRes("ot_fan_png")).generateMovieClipData("ot_fan")),
		e = [];
		t.frameRate = 3,
		t.addEventListener(egret.Event.COMPLETE, this.remSelf, this),
		this.addChild(t);
		for (var i, s = 0; 3 > s; s++) i = new egret.MovieClip(new egret.MovieClipDataFactory(RES.getRes("ot_g1_json"), RES.getRes("ot_g1_png")).generateMovieClipData("ot_g1")),
		utils.setProps(i, {
			rotation: 60 * (s + 1),
			frameRate: 8
		}),
		this.addChild(i),
		e.push(i);
		this.arrMcGold = e,
		this.mcFan = t
	},
	e
} (egret.DisplayObjectContainer);
