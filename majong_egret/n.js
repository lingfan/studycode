
	var n = function(t) {
		function e(e, i, s, n) {
			t.call(this);
			var r = new egret.Bitmap(RES.getRes(e));
			utils.setProps(r, {
				x: r.width / 2,
				y: r.height / 2
			},
			[.5, .5]);
			var a = new egret.Bitmap(RES.getRes(i));
			utils.setProps(a, {
				x: r.x,
				y: r.y
			},
			[.5, .5]),
			utils.addChildren(this, [r, a]),
			n && utils.setProps(a, n),
			s && utils.setProps(r, s),
			this.bmBgBtn = r,
			this.bmTxBtn = a
		}
		__extends(e, t);
		var i = (__define, e),
		s = i.prototype;
		return s.ctrlTouch = function(t) {
			this.touchEnabled = t,
			this.alpha = t ? 1 : .5
		},
		s.updateBtn = function(t, e) {
			this.bmBgBtn.texture = RES.getRes(t),
			this.bmTxBtn.texture = RES.getRes(e)
		},
		e
	} (egret.DisplayObjectContainer);
	t.BtnBmBm = n,
	