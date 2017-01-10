
var DataDeskGame = function() {
	function t() {
		this.readyToPlay = !1,
		this.directionMe = WindDirection.EAST,
		this.arrCardsUser = [],
		this.arrScoreUsers = [0, 0, 0, 0],
		this.arrRoleIdPlayer = [],
		this.arrPossibilityJust = {
			riskBar: [!1, !1, !1, !1],
			explodeBar: [!1, !1, !1, !1]
		},
		this.resetCardsUser(),
		this.resetPossibilityJust()
	}
	var e = (__define, t),
	i = e.prototype;
	return i.setMyDirection = function(t) {
		this.directionMe = t
	},
	i.initialAllUsersCards = function(t, e) {
		for (var i, s = 0; s < this.arrCardsUser.length; s++) i = this.arrCardsUser[s],
		i.used = i.using["double"] = i.using.bar = [],
		s != this.directionMe ? 0 == s ? i.using.common = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : i.using.common = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : (i.using.common = t, 0 != e && i.using.common.push(e))
	},
	i.pushToCard = function(t, e) {
		this.resetPossibilityJust(),
		this.arrCardsUser[t].using.common.push(e)
	},
	i.popUpCard = function(t, e) {
		this.arrCardsUser[t].using.common.splice(this.arrCardsUser[t].using.common.indexOf(e), 1)
	},
	i.computeDoubleCard = function(t, e) {
		var i = this.arrCardsUser[t],
		s = 3 == util_cards.getSumSpecifiedCard(e, i.using.common),
		n = {
			idCard: e,
			bHasRisk: s
		};
		i.using.common.splice(i.using.common.indexOf(e), 2),
		i.using["double"].push(n)
	},
	i.dealBrightBar = function(t, e, i) {
		var s = this.arrCardsUser[t],
		n = {
			idCard: i,
			typeBar: TypeBar.BRIGHT,
			dirUserPointBar: e
		};
		s.using.common.splice(s.using.common.indexOf(i), 3),
		s.using.bar.push(n),
		this.arrPossibilityJust.explodeBar[t] = !0
	},
	i.dealDoubleBar = function(t, e, i) {
		var s = this.arrCardsUser[t],
		n = this.isRiskBar(t, i),
		r = {
			idCard: i,
			typeBar: TypeBar.DOUBLE,
			dirUserPointBar: e
		};
		this.delRiskBarDouble(t, i),
		s.using.common.splice(s.using.common.indexOf(i), 1),
		s.using.bar.push(r),
		this.arrPossibilityJust.riskBar[t] = n
	},
	i.dealDarkBar = function(t, e) {
		var i = this.arrCardsUser[t],
		s = {
			idCard: e,
			typeBar: TypeBar.DARK,
			dirUserPointBar: t
		};
		i.using.common.splice(i.using.common.indexOf(e), 4),
		i.using.bar.push(s)
	},
	i.willComputeScoreBarExplode = function() {
		for (var t = this.arrPossibilityJust.explodeBar,
		e = 0; e < t.length; e++) if (t[e]) return e;
		return - 1
	},
	i.willComputeScoreRobBar = function() {
		for (var t = this.arrPossibilityJust.riskBar,
		e = 0; e < t.length; e++) if (t[e]) return e;
		return - 1
	},
	i.willComputeScoreRiskBar = function() {
		for (var t = this.arrPossibilityJust.riskBar,
		e = 0; e < t.length; e++) if (t[e]) return e;
		return - 1
	},
	i.isRiskBar = function(t, e) {
		for (var i = this.arrCardsUser[t].using["double"], s = 0; s < i.length; s++) if (i[s].idCard == e && i[s].bHasRisk) return ! 0;
		return ! 1
	},
	i.delRiskBarDouble = function(t, e) {
		for (var i = this.arrCardsUser[t].using["double"], s = 0; s < i.length; s++) if (i[s].idCard == e && i[s].bHasRisk) return void i.splice(s, 1)
	},
	i.resetPossibilityJust = function() {
		this.arrPossibilityJust = {
			riskBar: [!1, !1, !1, !1],
			explodeBar: [!1, !1, !1, !1]
		}
	},
	i.resetCardsUser = function() {
		for (var t = 0; 4 > t; t++) {
			var e = {
				used: [],
				using: {
					common: [],
					"double": [],
					bar: []
				}
			};
			this.arrCardsUser.push(e)
		}
	},
	i.newPlayerInto = function(t) {
		var e = t.role_index;
		this.arrRoleIdPlayer[e] = t.role_id
	},
	i.handOutCards = function(t) {},
	i.assignOneCard = function() {},
	i.popOneCard = function() {},
	i.doubleCard = function() {},
	i.dotBar = function() {},
	i.darkBar = function() {},
	i.doubleBar = function() {},
	i.computeFinalScore = function() {},
	t
} ();
