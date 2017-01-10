
var Mix19WithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_MIX_19)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		return this.Check19AndWord(t) ? this.CheckDoubleHu(t, e, i) : !1
	},
	s.Check19AndWord = function(t) {
		for (var e = 0; e < CardID.CARD_NONG30; e++) if (0 != t[e] && e != CardID.CARD_WAN1 && e != CardID.CARD_WAN9 && e != CardID.CARD_TIAO1 && e != CardID.CARD_TIAO9 && e != CardID.CARD_DONG1 && e != CardID.CARD_DONG9 && t[e] > 0) return ! 1;
		return ! 0
	},
	e
} (DoubleHuWithKing);
