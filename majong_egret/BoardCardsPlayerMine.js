
var BoardCardsPlayerMine = function(t) {
	function e() {
		t.call(this),
		this.initSelf()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshListCards = function(t, e, i, s) {
		this.listCardsUsingMine.refreshListCards(t, e, i, s)
	},
	s.pushCardToUsed = function(t) {
		this.listCardsUsed.pushNewCard(t)
	},
	s.popCardFromUsed = function() {
		this.listCardsUsed.popNewCard()
	},
	s.clearAllCardsUsed = function() {
		this.listCardsUsed.clearAllCardsUsed()
	},
	s.popUpMyCard = function(t) {
		this.dispatchEventWith(DataGlobal.Evts.POP_MY_CARD, !1, {
			idCard: t.data.idCard
		})
	},
	s.initSelf = function() {
		var t = new ListCardsUsed(Direction.DOWN),
		e = new ListCardsUsingMine;
		utils.setProps(this, {
			width: e.width
		}),
		utils.setProps(e, {
			y: t.x + t.height + 30
		}),
		utils.setProps(t, {
			x: (this.width - t.width) / 2
		}),
		e.addEventListener(DataGlobal.Evts.POP_MY_CARD, this.popUpMyCard, this),
		utils.addChildren(this, [t, e]),
		utils.setProps(this, {
			height: e.y + e.height
		}),
		this.listCardsUsed = t,
		this.listCardsUsingMine = e
	},
	e
} (egret.DisplayObjectContainer);
