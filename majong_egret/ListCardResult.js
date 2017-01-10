
var ListCardResult = function(t) {
	function e() {
		t.call(this),
		this.initList()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshList = function(t, e, i, s, n, r) {
		this.bmEast.visible = t,
		this.tfNick.text = e,
		utils.setProps(this.tfDescriptionHu, {
			text: i
		},
		[0, .5]),
		utils.setProps(this.tfScoreOffset, {
			text: "" + s
		},
		[0, .5]),
		this.bmTextHu.visible = n;
		for (var a, o, h = this.arrCardBlock,
		d = 0,
		l = this.tfNick.x,
		c = 0; c < r.length; c++) {
			for (var u = 0; u < r[c].length; u++) o = r[c][u],
			a = h[d++],
			a.refreshStatusUsed(Direction.DOWN, o),
			utils.setProps(a, {
				x: l,
				visible: !0
			}),
			l += a.visualSize.w;
			l += 10
		}
		for (; d < h.length; d++) h[d].visible = !1
	},
	s.initList = function() {
		var t = new egret.Bitmap(RES.getRes("o_5")),
		e = new egret.TextField,
		i = new egret.TextField,
		s = new egret.TextField,
		n = new egret.Bitmap(RES.getRes("c19_4")),
		r = [];
		utils.setProps(e, {
			x: t.width + 10,
			textColor: 16777215,
			fontFamily: "MicroSoft Yahei",
			bold: !0,
			size: 30,
			text: "Íæ¼Òx"
		}),
		utils.setProps(i, {
			x: 200,
			y: e.size / 2,
			size: 23,
			fontFamily: "MicroSoft Yahei",
			textColor: 16777215,
			text: "ºú·¨ÃèÊöÎÄ×Ö ºú·¨ÃèÊöÎÄ×Ö ºú·¨ÃèÊöÎÄ×Ö"
		},
		[0, .5]),
		utils.setProps(s, {
			textColor: 16777215,
			size: 30,
			fontFamily: "MicroSoft Yahei",
			text: "+8",
			x: 650,
			y: e.size / 2
		},
		[0, .5]),
		utils.setProps(n, {
			x: s.x + 120,
			y: 0
		});
		for (var a, o = 0; 18 > o; o++) a = new CardBlock,
		a.refreshStatusUsed(Direction.DOWN, 8),
		utils.setProps(a, {
			x: 53 + a.visualSize.w * o,
			y: e.size + 13
		},
		[0, 0]),
		this.addChild(a),
		r.push(a);
		utils.addChildren(this, [t, e, i, s, n]),
		this.bmEast = t,
		this.tfNick = e,
		this.tfScoreOffset = s,
		this.arrCardBlock = r,
		this.tfDescriptionHu = i,
		this.bmTextHu = n
	},
	e
} (egret.DisplayObjectContainer);
