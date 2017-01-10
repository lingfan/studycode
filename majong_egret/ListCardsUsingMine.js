
var ListCardsUsingMine = function(t) {
	function e() {
		t.call(this),
		this.dirFace = Direction.DOWN,
		this.nInd = -1,
		this.initList()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.canPopUpCard = function(t) {
		this.touchChildren = t
	},
	s.refreshListCards = function(t, e, i, s) {
		for (var n, r, a, o, h = this.arrCardBlocks,
		d = 0,
		l = 0,
		c = 10,
		u = 0; u < t.length;) {
			r = t[u],
			o = util_cards.getSumSpecifiedCard(t[u], t),
			a = 4 == o && -1 != e.indexOf(r);
			for (var _ = 0; o > _; _++) n = h[d++],
			n.refreshStatusUsing(this.dirFace, !1, !a, r, !0),
			utils.setProps(n, {
				x: l,
				y: n.height - n.visualSize.h - 11,
				visible: !0,
				touchEnabled: !1
			}),
			3 == _ ? utils.setProps(n, {
				x: l - 2 * n.visualSize.w,
				y: n.y - 8
			}) : l = n.x + n.visualSize.w;
			l += c,
			u += o
		}
		l += 2 * c;
		for (var u = 0; u < i.length; u++) r = i[u],
		n = h[d++],
		n.refreshStatusUsing(this.dirFace, !0, !0, r, !1),
		utils.setProps(n, {
			x: l,
			y: 0,
			visible: !0,
			touchEnabled: !0
		}),
		l = n.x + n.visualSize.w;
		s && (n = h[d++], n.refreshStatusUsing(this.dirFace, !0, !0, s, !1), utils.setProps(n, {
			x: l + 3 * c,
			y: 0,
			visible: !0,
			touchEnabled: !0
		})),
		this.hideCardsNotUsed(d),
		this.reposSelfInParent()
	},
	s.popCard = function(t) {
		this.dispatchEventWith(DataGlobal.Evts.POP_MY_CARD, !1, {
			idCard: t
		})
	},
	s.reposSelfInParent = function() {
		utils.setProps(this, {
			x: (this.parent.width - this.width) / 2
		})
	},
	s.hideCardsNotUsed = function(t) {
		for (var e, i = t; i < this.arrCardBlocks.length; i++) e = this.arrCardBlocks[i],
		utils.setProps(e, {
			visible: !1,
			touchEnabled: !1,
			x: 0,
			y: 0
		})
	},
	s.touchOneCard = function(t) {
		var e = this.arrCardBlocks,
		i = t.target,
		s = e.indexOf(i);
		if (this.nInd == s) this.popCard(i.idCard),
		i.y = 0,
		this.nInd = null;
		else {
			var n = 100;
			egret.Tween.get(i, {
				override: !0
			}).to({
				y: -20
			},
			n);
			for (var r, a = 0; a < e.length; a++) r = e[a],
			r != i && 0 != r.y && 1 == r.scaleX && egret.Tween.get(r, {
				override: !0
			}).to({
				y: 0
			},
			n);
			this.nInd = s
		}
	},
	s.initList = function() {
		for (var t, e = [], i = !0, s = !0, n = 0; 18 > n; n++) t = CachePool.produce(CardBlock),
		t.refreshStatusUsing(this.dirFace, s, i, 35, !1),
		t.addEventListener(egret.TouchEvent.TOUCH_END, this.touchOneCard, this),
		utils.setProps(t, {
			x: 13 > n ? t.visualSize.w * n: 0,
			visible: !1
		},
		[0, 0]),
		this.addChild(t),
		e.push(t);
		this.arrCardBlocks = e
	},
	e
} (egret.DisplayObjectContainer);
