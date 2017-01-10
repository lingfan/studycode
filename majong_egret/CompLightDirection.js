
var CompLightDirection = function(t) {
	function e(e, i) {
		t.call(this),
		this.directionArr = [],
		this.initComp(e, i)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setDirection = function(t) {
		for (var e = 0; 4 > e; e++) this.directionArr[e].visible = t == e
	},
	s.initComp = function(t, e) {
		var i = new egret.Bitmap(RES.getRes("c2_6"));
		i.x = (t - i.width) / 2,
		i.y = (e - i.height) / 2,
		this.addChild(i);
		for (var s = 1; 5 > s; s++) {
			var n = new egret.Bitmap(RES.getRes("c2_" + s));
			this.addChild(n),
			n.x = i.x - 2,
			n.y = i.y - 2,
			n.visible = !1,
			this.directionArr.push(n)
		}
		this.directionArr[0].x = 13,
		this.directionArr[0].y = 118,
		this.directionArr[0].anchorOffsetY = this.directionArr[0].height,
		this.directionArr[1].x = 116,
		this.directionArr[1].y = 15,
		this.directionArr[1].anchorOffsetX = this.directionArr[1].width,
		this.directionArr[2].x = 13,
		this.directionArr[2].y = 10,
		this.directionArr[3].x = 8,
		this.directionArr[3].y = 15,
		this.width = t,
		this.height = e
	},
	e
} (egret.DisplayObjectContainer);
