
var CardType; !
function(t) {
	t[t.CARD_TYPE_NONE = 0] = "CARD_TYPE_NONE",
	t[t.CARD_TYPE_WAN = 1] = "CARD_TYPE_WAN",
	t[t.CARD_TYPE_TIAO = 2] = "CARD_TYPE_TIAO",
	t[t.CARD_TYPE_TONG = 3] = "CARD_TYPE_TONG",
	t[t.CARD_TYPE_FENG = 4] = "CARD_TYPE_FENG",
	t[t.CARD_TYPE_ARROW = 5] = "CARD_TYPE_ARROW"
} (CardType || (CardType = {}));
var CardKind; !
function(t) {
	t[t.CARD_KIND_NONE = 0] = "CARD_KIND_NONE",
	t[t.CARD_KIND_HE = 1] = "CARD_KIND_HE",
	t[t.CARD_KIND_SEN = 2] = "CARD_KIND_SEN",
	t[t.CARD_KIND_DOUBLE = 3] = "CARD_KIND_DOUBLE"
} (CardKind || (CardKind = {}));
var CardID; !
function(t) {
	t[t.CARD_NONE = 0] = "CARD_NONE",
	t[t.CARD_WAN1 = 1] = "CARD_WAN1",
	t[t.CARD_WAN2 = 2] = "CARD_WAN2",
	t[t.CARD_WAN3 = 3] = "CARD_WAN3",
	t[t.CARD_WAN4 = 4] = "CARD_WAN4",
	t[t.CARD_WAN5 = 5] = "CARD_WAN5",
	t[t.CARD_WAN6 = 6] = "CARD_WAN6",
	t[t.CARD_WAN7 = 7] = "CARD_WAN7",
	t[t.CARD_WAN8 = 8] = "CARD_WAN8",
	t[t.CARD_WAN9 = 9] = "CARD_WAN9",
	t[t.CARD_NONE10 = 10] = "CARD_NONE10",
	t[t.CARD_TIAO1 = 11] = "CARD_TIAO1",
	t[t.CARD_TIAO2 = 12] = "CARD_TIAO2",
	t[t.CARD_TIAO3 = 13] = "CARD_TIAO3",
	t[t.CARD_TIAO4 = 14] = "CARD_TIAO4",
	t[t.CARD_TAIO5 = 15] = "CARD_TAIO5",
	t[t.CARD_TAIO6 = 16] = "CARD_TAIO6",
	t[t.CARD_TIAO7 = 17] = "CARD_TIAO7",
	t[t.CARD_TIAO8 = 18] = "CARD_TIAO8",
	t[t.CARD_TIAO9 = 19] = "CARD_TIAO9",
	t[t.CARD_NONG20 = 20] = "CARD_NONG20",
	t[t.CARD_DONG1 = 21] = "CARD_DONG1",
	t[t.CARD_DONG2 = 22] = "CARD_DONG2",
	t[t.CARD_DONG3 = 23] = "CARD_DONG3",
	t[t.CARD_DONG4 = 24] = "CARD_DONG4",
	t[t.CARD_DONG5 = 25] = "CARD_DONG5",
	t[t.CARD_DONG6 = 26] = "CARD_DONG6",
	t[t.CARD_DONG7 = 27] = "CARD_DONG7",
	t[t.CARD_DONG8 = 28] = "CARD_DONG8",
	t[t.CARD_DONG9 = 29] = "CARD_DONG9",
	t[t.CARD_NONG30 = 30] = "CARD_NONG30",
	t[t.CARD_WORD_EAST = 31] = "CARD_WORD_EAST",
	t[t.CARD_WORD_SOUTH = 32] = "CARD_WORD_SOUTH",
	t[t.CARD_WORD_WEST = 33] = "CARD_WORD_WEST",
	t[t.CARD_WORD_NORTH = 34] = "CARD_WORD_NORTH",
	t[t.CARD_WORD_ZHONG = 35] = "CARD_WORD_ZHONG",
	t[t.CARD_WORD_FA = 36] = "CARD_WORD_FA",
	t[t.CARD_WORD_BAI = 37] = "CARD_WORD_BAI",
	t[t.CARD_KING = 38] = "CARD_KING",
	t[t.CARD_COUNT = 39] = "CARD_COUNT"
} (CardID || (CardID = {}));
var CARD_KING = 38,
CardActionType; !
function(t) {
	t[t.CARD_ACTION_NONE = 0] = "CARD_ACTION_NONE",
	t[t.CARD_ACTION_COLLIDE = 1] = "CARD_ACTION_COLLIDE",
	t[t.CARD_ACTION_BAR = 2] = "CARD_ACTION_BAR",
	t[t.CARD_ACTION_EAT = 3] = "CARD_ACTION_EAT"
} (CardActionType || (CardActionType = {}));
var CardPair = function() {
	function t() {
		this.card_id = CardID.CARD_NONE,
		this.with_king = !1
	}
	var e = (__define, t);
	e.prototype;
	return t
} ();
