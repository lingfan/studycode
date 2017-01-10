
var BoardCardsPlayerOthers = function(t) {
	function e(e) {
		t.call(this),
		this.dirFace = e,
		this.initCards()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshListCards = function(t, e, i, s) {
		this.cardsUsing.refreshListCards(t, e, i, s)
	},
	s.pushCardToUsed = function(t) {
		this.cardsUsed.pushNewCard(t)
	},
	s.popCardFromUsed = function() {
		this.cardsUsed.popNewCard()
	},
	s.clearAllCardsUsed = function() {
		this.cardsUsed.clearAllCardsUsed()
	},
	s.initCards = function() {
		var t = new ListCardsUsed(this.dirFace),
		e = new ListCardsUsingOthers(this.dirFace);
		utils.addChildren(this, [t, e]),
		this.cardsUsed = t,
		this.cardsUsing = e,
		this.posCardLists()
	},
	s.posCardLists = function() {
		var t = this.cardsUsed,
		e = this.cardsUsing,
		i = 30;
		switch (this.dirFace) {
		case Direction.UP:
			utils.setProps(t, {
				x: (e.width - t.width) / 2,
				y: e.height + i
			});
			break;
		case Direction.LEFT:
			utils.setProps(t, {
				x: e.x + e.width + i,
				y: (e.height - t.height) / 2
			});
			break;
		case Direction.RIGHT:
			utils.setProps(t, {
				y: (e.height - t.height) / 2
			}),
			utils.setProps(e, {
				x: t.width + i
			}),
			utils.setProps(this, {
				width: e.x + e.width
			})
		}
		switch (this.dirFace) {
		case Direction.UP:
			this.width = e.width;
			break;
		default:
			this.height = e.height
		}
	},
	e
} (egret.DisplayObjectContainer);
