
var HuCardMask; !
function(t) {
	t[t.HU_MASK_NONE = 0] = "HU_MASK_NONE",
	t[t.HU_MASK_SHEN = 1] = "HU_MASK_SHEN",
	t[t.HU_MASK_KE = 2] = "HU_MASK_KE",
	t[t.HU_MASK_PAIR = 3] = "HU_MASK_PAIR",
	t[t.HU_MASK_SINGLE = 4] = "HU_MASK_SINGLE",
	t[t.HU_MASK_GANG = 5] = "HU_MASK_GANG"
} (HuCardMask || (HuCardMask = {}));
var HuUnit = function() {
	function t() {
		this.mask = HuCardMask.HU_MASK_NONE,
		this.card_id = 0,
		this.card_id_with_king = 0,
		this.king_num = 0
	}
	var e = (__define, t),
	i = e.prototype;
	return i.Reset = function() {
		this.mask = HuCardMask.HU_MASK_NONE,
		this.card_id = 0,
		this.card_id_with_king = 0,
		this.king_num = 0
	},
	t
} ();
