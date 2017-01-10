
var ChickenHuWithKing = function(t) {
	function e() {
		t.call(this, HuType.HU_TYPE_CHICKEN)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		return this.CheckChickHu(t, e, i)
	},
	s.CheckChickHu = function(t, e, i) {
		var s = e.length;
		if (0 >= s) return ! 1;
		for (var n = !1,
		r = HuHelper.GetCardNum(t), a = 0, o = 0; s > o && !n; o++) {
			n = !0,
			i.Reset();
			var h = t.concat();
			for (this.HandlePair(e[o].card_id, e[o].with_king, h, i), a = r - 2; a > 0;) {
				if (this.m_handle_info.Reset(), this.m_handle_info.cur_card_id = HuHelper.GetNext(h), this.m_handle_info.handle_succ = !1, this.m_handle_info.handle_num = 0, this.Handle81(this.m_handle_info, h, i), this.Handle82(this.m_handle_info, h, i), this.Handle83(this.m_handle_info, h, i), this.Handle84(this.m_handle_info, h, i), this.Handle91(this.m_handle_info, h, i), this.Handle92(this.m_handle_info, h, i), this.Handle93(this.m_handle_info, h, i), this.Handle94(this.m_handle_info, h, i), this.HandleC1(this.m_handle_info, h, i), this.HandleC2(this.m_handle_info, h, i), this.HandleC3(this.m_handle_info, h, i), this.HandleC4(this.m_handle_info, h, i), this.HandleW1(this.m_handle_info, h, i), this.HandleW2(this.m_handle_info, h, i), this.HandleW3(this.m_handle_info, h, i), this.HandleW4(this.m_handle_info, h, i), !this.m_handle_info.handle_succ) {
					n = !1;
					break
				}
				a -= this.m_handle_info.handle_num
			}
		}
		return n
	},
	s.Handle81 = function(t, e, i) {
		var s = t.cur_card_id;
		if ((s == CardID.CARD_WAN8 || s == CardID.CARD_TIAO8 || s == CardID.CARD_DONG8) && 1 == e[s]) return e[s + 1] > 0 && e[CardID.CARD_KING] > 0 ? void KingOption.ShenWithReplace_pre1(t, e, i, s) : e[s + 1] <= 0 && e[CardID.CARD_KING] > 1 ? void KingOption.KeWithReplace_0_0(t, e, i, s) : void 0
	},
	s.Handle82 = function(t, e, i) {
		var s = t.cur_card_id;
		if ((s == CardID.CARD_WAN8 || s == CardID.CARD_TIAO8 || s == CardID.CARD_DONG8) && 2 == e[s]) return e[s + 1] <= 0 && e[CardID.CARD_KING] > 1 ? void KingOption.KeWithReplace_0_0(t, e, i, s) : 1 == e[s + 1] && e[CardID.CARD_KING] > 2 ? void KingOption.KeKeFillWithReplace_0_1_1(t, e, i, s) : 2 == e[s + 1] && e[CardID.CARD_KING] > 1 ? void KingOption.KeKeFillWithReplace_0_1(t, e, i, s) : 2 == e[s + 1] && e[CardID.CARD_KING] > 0 ? void KingOption.KeWithReplace_0(t, e, i, s) : void 0
	},
	s.Handle83 = function(t, e, i) {
		var s = t.cur_card_id; (s == CardID.CARD_WAN8 || s == CardID.CARD_TIAO8 || s == CardID.CARD_DONG8) && 3 == e[s] && KingOption.KeWithReplace_n(t, e, i, s)
	},
	s.Handle84 = function(t, e, i) {
		var s = t.cur_card_id;
		if ((s == CardID.CARD_WAN8 || s == CardID.CARD_TIAO8 || s == CardID.CARD_DONG8) && 4 == e[s]) return 0 == e[s + 1] && e[CardID.CARD_KING] > 1 ? void KingOption.KeKeFillWithReplace_0_0(t, e, i, s) : e[s + 1] > 1 && e[CardID.CARD_KING] > 0 ? void KingOption.ShenKeKeFillWithReplace_pre1_1(t, e, i, s) : void 0
	},
	s.Handle91 = function(t, e, i) {
		var s = t.cur_card_id;
		e[s];
		return s != CardID.CARD_WAN9 && s != CardID.CARD_TIAO9 && s != CardID.CARD_DONG9 || 1 != e[s] ? void 0 : e[CardID.CARD_KING] > 1 ? void KingOption.KeWithReplace_0_0(t, e, i, s) : void 0
	},
	s.Handle92 = function(t, e, i) {
		var s = t.cur_card_id;
		if ((s == CardID.CARD_WAN9 || s == CardID.CARD_TIAO9 || s == CardID.CARD_DONG9) && 2 == e[s]) return e[CardID.CARD_KING] > 0 ? void KingOption.KeWithReplace_0(t, e, i, s) : void 0
	},
	s.Handle93 = function(t, e, i) {
		var s = t.cur_card_id; (s == CardID.CARD_WAN9 || s == CardID.CARD_TIAO9 || s == CardID.CARD_DONG9) && 3 == e[s] && KingOption.KeWithReplace_n(t, e, i, s)
	},
	s.Handle94 = function(t, e, i) {
		var s = t.cur_card_id;
		if ((s == CardID.CARD_WAN9 || s == CardID.CARD_TIAO9 || s == CardID.CARD_DONG9) && 4 == e[s]) return e[CardID.CARD_KING] > 1 ? void KingOption.KeKeFillWithReplace_0_0(t, e, i, s) : void 0
	},
	s.HandleC1 = function(t, e, i) {
		var s = t.cur_card_id;
		if (s != CardID.CARD_WAN8 && s != CardID.CARD_TIAO8 && s != CardID.CARD_DONG8 && s != CardID.CARD_WAN9 && s != CardID.CARD_TIAO9 && s != CardID.CARD_DONG9 && !(s > CardID.CARD_NONG30) && 1 == e[s]) return e[s + 1] > 0 && e[s + 2] > 0 ? void KingOption.ShenWithReplace_n(t, e, i, s) : e[s + 1] <= 0 && e[s + 2] > 0 && e[CardID.CARD_KING] > 0 ? void KingOption.ShenWithReplace_1(t, e, i, s) : e[s + 1] > 0 && e[s + 2] <= 0 && e[CardID.CARD_KING] > 0 ? void KingOption.ShenWithReplace_2(t, e, i, s) : e[s + 1] <= 0 && e[s + 2] <= 0 && e[CardID.CARD_KING] > 1 ? void KingOption.KeWithReplace_0_0(t, e, i, s) : void 0
	},
	s.HandleC2 = function(t, e, i) {
		var s = t.cur_card_id;
		if (s != CardID.CARD_WAN8 && s != CardID.CARD_TIAO8 && s != CardID.CARD_DONG8 && s != CardID.CARD_WAN9 && s != CardID.CARD_TIAO9 && s != CardID.CARD_DONG9 && !(s > CardID.CARD_NONG30) && 2 == e[s]) return e[s + 1] > 1 && e[s + 2] > 1 ? void KingOption.ShenShenWithReplace_n(t, e, i, s) : 1 == e[s + 1] && e[s + 2] > 1 && e[CardID.CARD_KING] > 0 ? void KingOption.ShenShenWithReplace_1(t, e, i, s) : 0 == e[s + 1] && e[s + 2] > 1 && e[CardID.CARD_KING] > 1 ? void KingOption.ShenShenWithReplace_1_1(t, e, i, s) : e[s + 1] > 1 && 1 == e[s + 2] && e[CardID.CARD_KING] > 0 ? void KingOption.ShenShenWithReplace_2(t, e, i, s) : e[s + 1] > 1 && 0 == e[s + 2] && e[CardID.CARD_KING] > 0 ? void KingOption.ShenShenWithReplace_2_2(t, e, i, s) : 0 == e[s + 1] && 0 == e[s + 2] && e[CardID.CARD_KING] > 0 ? void KingOption.KeWithReplace_0(t, e, i, s) : void 0
	},
	s.HandleC3 = function(t, e, i) {
		var s = t.cur_card_id;
		s != CardID.CARD_WAN8 && s != CardID.CARD_TIAO8 && s != CardID.CARD_DONG8 && s != CardID.CARD_WAN9 && s != CardID.CARD_TIAO9 && s != CardID.CARD_DONG9 && (s > CardID.CARD_NONG30 || 3 == e[s] && KingOption.KeWithReplace_n(t, e, i, s))
	},
	s.HandleC4 = function(t, e, i) {
		var s = t.cur_card_id;
		if (s != CardID.CARD_WAN8 && s != CardID.CARD_TIAO8 && s != CardID.CARD_DONG8 && s != CardID.CARD_WAN9 && s != CardID.CARD_TIAO9 && s != CardID.CARD_DONG9 && !(s > CardID.CARD_NONG30) && 4 == e[s]) return e[s + 1] > 0 && e[s + 2] > 0 ? void KingOption.ShenWithReplace_n(t, e, i, s) : e[s + 1] <= 0 && e[s + 2] > 0 && e[CardID.CARD_KING] > 0 ? void KingOption.ShenWithReplace_1(t, e, i, s) : e[s + 1] > 0 && e[s + 2] <= 0 && e[CardID.CARD_KING] > 0 ? void KingOption.ShenWithReplace_2(t, e, i, s) : e[s + 1] <= 0 && e[s + 2] <= 0 && e[CardID.CARD_KING] > 1 ? void KingOption.KeWithReplace_0_0(t, e, i, s) : void 0
	},
	s.HandleW1 = function(t, e, i) {
		var s = t.cur_card_id;
		if (! (s <= CardID.CARD_NONG30 || s >= CardID.CARD_KING) && 1 == e[s]) return e[CardID.CARD_KING] > 1 ? void KingOption.KeWithReplace_0_0(t, e, i, s) : void 0
	},
	s.HandleW2 = function(t, e, i) {
		var s = t.cur_card_id;
		if (! (s <= CardID.CARD_NONG30 || s >= CardID.CARD_KING) && 2 == e[s]) return e[CardID.CARD_KING] > 0 ? void KingOption.KeWithReplace_0(t, e, i, s) : void 0
	},
	s.HandleW3 = function(t, e, i) {
		var s = t.cur_card_id;
		s <= CardID.CARD_NONG30 || s >= CardID.CARD_KING || 3 == e[s] && KingOption.KeWithReplace_n(t, e, i, s)
	},
	s.HandleW4 = function(t, e, i) {
		var s = t.cur_card_id;
		s <= CardID.CARD_NONG30 || s >= CardID.CARD_KING || 3 == e[s] && KingOption.KeWithReplace_0_0(t, e, i, s)
	},
	e
} (HuAction);
