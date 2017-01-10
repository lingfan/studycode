
var HuHelper = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.GetNext = function(t) {
		for (var e = 0,
		i = 0; i < CardID.CARD_COUNT; i++) if (t[i] > 0) {
			e = i;
			break
		}
		return e
	},
	t.GetPairArr = function(t, e) {
		for (var i = [], s = 0; s < CardID.CARD_COUNT; s++) if (e && 1 == t[s]) {
			var n = new CardPair;
			n.card_id = s,
			n.with_king = !0,
			i.push(n)
		} else if (t[s] >= 2) {
			var n = new CardPair;
			n.card_id = s,
			n.with_king = !1,
			i.push(n)
		}
		return i
	},
	t.GetCardNum = function(t) {
		for (var e = 0,
		i = 0; i < CardID.CARD_COUNT; i++) e += t[i];
		return e
	},
	t.GetCarTypeInfo = function(t) {
		for (var e = new CardTypeInfo,
		i = 0; i < CardID.CARD_NONE10; i++) e.wan_num += t[i];
		for (var i = CardID.CARD_TIAO1; i <= CardID.CARD_TIAO9; i++) e.tiao_num += t[i];
		for (var i = CardID.CARD_DONG1; i <= CardID.CARD_DONG9; i++) e.tong_num += t[i];
		for (var i = CardID.CARD_WORD_EAST; i <= CardID.CARD_WORD_NORTH; i++) e.feng_num += t[i];
		for (var i = CardID.CARD_WORD_ZHONG; i <= CardID.CARD_WORD_BAI; i++) e.arrow_num += t[i];
		return e.wan_num > 0 && (e.wan_type_mask = 1),
		e.tiao_num > 0 && (e.tiao_type_mask = 1),
		e.tong_num > 0 && (e.tong_type_mask = 1),
		e.feng_num > 0 && (e.feng_type_mask = 1),
		e.arrow_num > 0 && (e.arrow_type_mask = 1),
		e
	},
	t
} ();
