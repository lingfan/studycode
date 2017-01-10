
var ListCardsUsingOthers = function(t) {
	function e(e) {
		t.call(this),
		this.dirFace = e,
		this.initList()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshListCards = function(t, e, i, s) {
		for (var n, r, a, o, h = this.arrCardBlocks,
		d = 0,
		l = 0,
		c = this.dirFace == Direction.UP ? 7 : 12, u = 0; u < t.length;) {
			r = t[u],
			o = util_cards.getSumSpecifiedCard(t[u], t),
			a = -1 == e.indexOf(r);
			for (var _ = 0; o > _; _++) switch (n = h[d++], n.refreshStatusUsing(this.dirFace, !1, a, r, !0), this.dirFace) {
			case Direction.UP:
				utils.setProps(n, {
					x: l,
					y: 12,
					visible: !0
				}),
				3 == _ ? utils.setProps(n, {
					x: l - 2 * n.visualSize.w,
					y: 6
				}) : l += n.visualSize.w;
				break;
			default:
				utils.setProps(n, {
					x: -10,
					y: l,
					visible: !0
				}),
				3 == _ ? utils.setProps(n, {
					x: -10,
					y: l - 2 * (n.visualSize.h - 5)
				}) : l += n.visualSize.h - 10
			}
			l += c,
			u += o
		}
		this.dirFace == Direction.UP && (l += 2 * c);
		for (var u = 0; u < i.length; u++) switch (r = i[u], n = h[d++], n.refreshStatusUsing(this.dirFace, !0, !1, r, !1), this.dirFace) {
		case Direction.UP:
			utils.setProps(n, {
				x: l,
				y: 0,
				visible: !0
			}),
			l += n.visualSize.w;
			break;
		default:
			utils.setProps(n, {
				x: 0,
				y: l,
				visible: !0
			}),
			l += n.visualSize.h - 43
		}
		if (l += 10, s) switch (n = h[d++], n.refreshStatusUsing(this.dirFace, !0, !1, s, !1), this.dirFace) {
		case Direction.UP:
			utils.setProps(n, {
				x: l,
				y: 0,
				visible: !0
			}),
			l += n.visualSize.w;
			break;
		default:
			utils.setProps(n, {
				x: 0,
				y: l,
				visible: !0
			}),
			l += n.visualSize.h - 43
		}
		this.hideCardsNotUsed(d),
		this.reposSelfInParent()
	},
	s.reposSelfInParent = function() {
		switch (this.dirFace) {
		case Direction.UP:
			utils.setProps(this, {
				x: (this.parent.width - this.width) / 2
			});
			break;
		default:
			utils.setProps(this, {
				y: (this.parent.height - this.height) / 2
			})
		}
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
	s.initList = function() {
		for (var t, e = [], i = !1, s = !0, n = 0; 18 > n; n++) {
			switch (t = CachePool.produce(CardBlock), t.refreshStatusUsing(this.dirFace, s, i, 3, !1), this.dirFace) {
			case Direction.UP:
				utils.setProps(t, {
					x: 13 > n ? t.visualSize.w * n: 0,
					touchEnabled: !0,
					visible: !0
				});
				break;
			case Direction.LEFT:
				utils.setProps(t, {
					y: 13 > n ? (t.visualSize.h - 43) * n: 0,
					touchEnabled: !0,
					visible: !0
				});
				break;
			case Direction.RIGHT:
				utils.setProps(t, {
					y: 13 > n ? (t.visualSize.h - 43) * n: 0,
					touchEnabled: !0,
					visible: !0
				})
			}
			this.addChild(t),
			e.push(t)
		}
		this.arrCardBlocks = e
	},
	e
} (egret.DisplayObjectContainer);
