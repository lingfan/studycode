
var HU_TYPE_SEVEN_SMALL_PAIRS3 = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SEVEN_SMALL_PAIRS3)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		return this.CheckPairs(t, i)
	},
	s.CheckPairs = function(t, e) {
		for (var i = 0,
		s = 0,
		n = 0; n <= CardID.CARD_KING; n++)(1 == t[n] || 3 == t[n]) && t[CardID.CARD_KING] > 0 && (t[n] += 1, t[CardID.CARD_KING] -= 1, e.push(HuCardMask.HU_MASK_PAIR, n, n, 1)),
		2 == t[n] && (++i, e.push(HuCardMask.HU_MASK_PAIR, n, 0, 0)),
		4 == t[n] && (++s, e.push(HuCardMask.HU_MASK_GANG, n, 0, 0));
		return 3 > s ? !1 : (i += 2 * s, 7 == i ? !0 : !1)
	},
	e
} (DoubleHuWithKing);
