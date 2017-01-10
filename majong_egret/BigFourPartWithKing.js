
var BigFourPartWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SMALL_FOUR_PART)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		var s = t.concat();
		return this.HandleDNSB(this.m_handle_info, s, i)
	},
	s.HandleDNSB = function(t, e, i) {
		if (!this.HandleDNSB_Ke(CardID.CARD_WORD_EAST, e, i)) return ! 1;
		if (!this.HandleDNSB_Ke(CardID.CARD_WORD_SOUTH, e, i)) return ! 1;
		if (!this.HandleDNSB_Ke(CardID.CARD_WORD_WEST, e, i)) return ! 1;
		if (!this.HandleDNSB_Ke(CardID.CARD_WORD_NORTH, e, i)) return ! 1;
		var s = HuHelper.GetNext(e);
		return 2 == e[s] ? !0 : 1 == e[s] && 1 == e[CardID.CARD_KING] ? !0 : !1
	},
	s.HandleDNSB_Ke = function(t, e, i) {
		var s = !1;
		return e[t] <= 0 && e[CardID.CARD_KING] > 2 ? (i.push(HuCardMask.HU_MASK_KE, CardID.CARD_KING, 0, 0), e[CardID.CARD_KING] -= 3, s = !0) : 1 == e[t] && e[CardID.CARD_KING] > 1 ? (i.push(HuCardMask.HU_MASK_KE, t, t, 2), e[t] -= 1, e[CardID.CARD_KING] -= 2, s = !0) : 2 == e[t] && e[CardID.CARD_KING] > 0 ? (i.push(HuCardMask.HU_MASK_KE, t, t, 1), e[t] -= 2, e[CardID.CARD_KING] -= 1, s = !0) : e[t] > 2 && (i.push(HuCardMask.HU_MASK_KE, t, 0, 0), e[t] -= 3, s = !0),
		s
	},
	e
} (ChickenHuWithKing);
