
	var r = function(t) {
		function e(e, i, s, n) {
			t.call(this);
			var r = new egret.Bitmap(RES.getRes(e));
			s && utils.setProps(r, s, [.5, .5]),
			utils.setProps(r, {
				x: r.width / 2,
				y: r.height / 2,
				name: "bg_btn"
			},
			[.5, .5]),
			s && utils.setProps(r, s, [.5, .5]);
			var a = new egret.TextField;
			utils.setProps(a, {
				text: i,
				x: r.width / 2,
				y: r.height / 2,
				name: "tx_btn"
			},
			[.5, .5]),
			n && utils.setProps(a, n),
			utils.addChildren(this, [r, a]),
			this.txBtn = a,
			this.bgBtn = r
		}
		__extends(e, t);
		var i = (__define, e),
		s = i.prototype;
		return s.modifyPropsTx = function(t, e) {
			utils.setProps(this.txBtn, t, e)
		},
		s.modifyPropsBgBtn = function(t, e) {
			utils.setProps(this.bgBtn, t, e)
		},
		e
	} (egret.DisplayObjectContainer);
	t.BtnBmTf = r,
	