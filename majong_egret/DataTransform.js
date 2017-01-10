
var DataTransform = function() {
	function t() {}
	var e = (__define, t),
	i = e.prototype;
	return i.transferCardsToListShow = function(t) {
		for (var e, i, s = t.using.bar,
		n = t.using["double"], r = t.using.common, a = [], o = [], h = r.concat(), d = 0; d < s.length; d++) i = s[d],
		e = i.idCard,
		a.push(e, e, e, e),
		i.typeBar == TypeBar.DARK && o.push(e);
		for (var l, c = 0; c < n.length; c++) l = n[c],
		e = l.idCard,
		a.push(e, e, e);
		return {
			arrIdLight: a,
			arrIdDarkBar: o,
			arrIdCommon: h
		}
	},
	i.sortCards = function(t) {
		function e(t, e) {
			return t - e
		}
		t.using.common.sort(e)
	},
	i.WindDirectionToDirection = function(t) {
		var e = t - Main.dataGame.directionMe;
		return e >= 0 ? Direction.DOWN + e: Math.abs(e) - 1
	},
	i.roleIdToWindDirection = function(t) {
		return DataUser.getInst().playerInfo.banker_role_id == t ? 0 : DataUser.getInst().playerInfo.next1_role_id == t ? 1 : DataUser.getInst().playerInfo.next2_role_id == t ? 2 : DataUser.getInst().playerInfo.next3_role_id == t ? 3 : void 0
	},
	t.getInst = function() {
		return this.inst || (this.inst = new t),
		this.inst
	},
	t
} ();
