
var BigThreePartWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SMALL_THREE_PART)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		var s = t.concat();
		return this.HandleZFB(this.m_handle_info, s, i)
	},
	s.HandleZFB = function(t, e, i) {
		CardID.CARD_WORD_ZHONG;
		if (!this.HandleZFB_Ke(CardID.CARD_WORD_ZHONG, e, i)) return ! 1;
		if (!this.HandleZFB_Ke(CardID.CARD_WORD_FA, e, i)) return ! 1;
		if (!this.HandleZFB_Ke(CardID.CARD_WORD_BAI, e, i)) return ! 1;
		var s = HuHelper.GetPairArr(e, !0);
		return this.CheckHu(e, s, i)
	},
	s.CheckHu = function(t, e, i) {
		var s = !1,
		n = e.length;
		if (0 >= n) return s;
		this.m_handle_info.Reset();
		for (var r = new HuResult,
		a = HuHelper.GetCardNum(t), o = 0, h = 0; n > h && !s; h++) {
			r.Reset();
			var d = t.concat();
			for (this.HandlePair(e[h].card_id, e[h].with_king, d, r), o = a - 2, s = !0; o > 0;) {
				if (this.m_handle_info.Reset(), this.m_handle_info.cur_card_id = HuHelper.GetNext(d), this.m_handle_info.handle_succ = !1, this.m_handle_info.handle_num = 0, this.Handle81(this.m_handle_info, d, r), this.Handle82(this.m_handle_info, d, r), this.Handle83(this.m_handle_info, d, r), this.Handle84(this.m_handle_info, d, r), this.Handle91(this.m_handle_info, d, r), this.Handle92(this.m_handle_info, d, r), this.Handle93(this.m_handle_info, d, r), this.Handle94(this.m_handle_info, d, r), this.HandleC1(this.m_handle_info, d, r), this.HandleC2(this.m_handle_info, d, r), this.HandleC3(this.m_handle_info, d, r), this.HandleC4(this.m_handle_info, d, r), this.HandleW1(this.m_handle_info, d, r), this.HandleW2(this.m_handle_info, d, r), this.HandleW3(this.m_handle_info, d, r), this.HandleW4(this.m_handle_info, d, r), !this.m_handle_info.handle_succ) {
					s = !1;
					break
				}
				o -= this.m_handle_info.handle_num
			}
		}
		return s && (i = r),
		s
	},
	s.HandleZFB_Ke = function(t, e, i) {
		var s = !1;
		return e[t] <= 0 && e[CardID.CARD_KING] > 2 ? (i.push(HuCardMask.HU_MASK_KE, CardID.CARD_KING, 0, 0), e[CardID.CARD_KING] -= 3, s = !0) : 1 == e[t] && e[CardID.CARD_KING] > 1 ? (i.push(HuCardMask.HU_MASK_KE, t, t, 2), e[t] -= 1, e[CardID.CARD_KING] -= 2, s = !0) : 2 == e[t] && e[CardID.CARD_KING] > 0 ? (i.push(HuCardMask.HU_MASK_KE, t, t, 1), e[t] -= 2, e[CardID.CARD_KING] -= 1, s = !0) : e[t] > 2 && (i.push(HuCardMask.HU_MASK_KE, t, 0, 0), e[t] -= 3, s = !0),
		s
	},
	e
} (ChickenHuWithKing);
