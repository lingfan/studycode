
var ListCardsUsed = function(t) {
	function e(e) {
		t.call(this),
		this.dirFace = e,
		this.initList()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showStatusJustPop = function() {
		this.arrCards[this.arrCards.length - 1].showTagJustPop(!0),
		utils.setProps(this.bmArrow, {
			visible: !0,
			x: 0,
			y: 0
		})
	},
	s.hideStatusJustPop = function() {
		this.arrCards[this.arrCards.length - 1].showTagJustPop(!1),
		this.bmArrow.visible = !1
	},
	s.showStatusSameId = function(t) {
		for (var e = 0; e < this.arrCards.length; e++) this.arrCards[e].showTagSameId(!0, t)
	},
	s.hideStatusSameId = function() {
		for (var t = 0; t < this.arrCards.length; t++) this.arrCards[t].showTagSameId(!1)
	},
	s.pushNewCard = function(t) {
		var e = this.arrCards,
		i = e.length,
		s = CachePool.produce(CardBlock);
		switch (s.refreshStatusUsed(this.dirFace, t), e.push(s), this.dirFace) {
		case Direction.DOWN:
			utils.setProps(s, {
				x: i % 10 * s.visualSize.w,
				y: Math.floor(i / 10) * (s.visualSize.h - 6)
			});
			break;
		case Direction.UP:
			utils.setProps(s, {
				x: i % 10 * s.visualSize.w,
				y: (1 - Math.floor(i / 10)) * (s.visualSize.h - 6)
			});
			break;
		case Direction.LEFT:
			utils.setProps(s, {
				x: (1 - Math.floor(i / 10)) * s.visualSize.w,
				y: i % 10 * (s.visualSize.h - 3)
			});
			break;
		case Direction.RIGHT:
			utils.setProps(s, {
				x: Math.floor(i / 10) * s.visualSize.w,
				y: (10 - i % 10) * (s.visualSize.h - 3)
			})
		}
		this.addChildAt(s, this.dirFace == Direction.RIGHT ? 0 : this.numChildren),
		this.willReposCards()
	},
	s.popNewCard = function() {
		var t = this.arrCards.pop();
		this.removeChild(t),
		CachePool.reclaim(t)
	},
	s.clearAllCardsUsed = function() {
		for (; this.arrCards.length;) this.popNewCard()
	},
	s.willReposCards = function() {
		var t = this.arrCards;
		if (! (t.length < 11 || this.dirFace == Direction.DOWN)) for (var e = t.length - 1; e > 9; e--) this.setChildIndex(t[e], this.dirFace == Direction.RIGHT ? this.numChildren: 0)
	},
	s.initList = function() {
		var t = DataConf.Card,
		e = DataConf.Card.nScaleCardUsed;
		switch (this.dirFace) {
		case Direction.DOWN:
			utils.setProps(this, {
				width: t.sizeCardFront.w * e * 10,
				height: 2 * (t.sizeCardFront.h * e - 6)
			});
			break;
		case Direction.UP:
			utils.setProps(this, {
				width: t.sizeCardFront.w * e * 10,
				height: 2 * (t.sizeCardFront.h * e - 6)
			});
			break;
		case Direction.LEFT:
			utils.setProps(this, {
				width: t.sizeCardFront.h * e * 2,
				height: 10 * (t.sizeCardFront.w * e - 3)
			});
			break;
		case Direction.RIGHT:
			utils.setProps(this, {
				width: t.sizeCardFront.h * e * 2,
				height: 10 * (t.sizeCardFront.w * e - 3)
			})
		}
		this.arrCards = [];
		var i = new egret.Bitmap(RES.getRes(""));
		this.addChild(i),
		this.bmArrow = i
	},
	e
} (egret.DisplayObjectContainer);
