
var KingOption = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.ShenWithReplace_n = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_SHEN, s, 0, 0),
		t.handle_succ = !0,
		t.handle_num = 3,
		e[s] -= 1,
		e[s + 1] -= 1,
		e[s + 2] -= 1,
		e[CardID.CARD_KING] -= 0
	},
	t.KeWithReplace_n = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_KE, s, 0, 0),
		t.handle_succ = !0,
		t.handle_num = 3,
		e[s] -= 3,
		e[s + 1] -= 0,
		e[CardID.CARD_KING] -= 0
	},
	t.ShenWithReplace_pre1 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_SHEN, s, s - 1, 1),
		t.handle_succ = !0,
		t.handle_num = 3,
		e[s] -= 1,
		e[s + 1] -= 1,
		e[CardID.CARD_KING] -= 1
	},
	t.KeWithReplace_0 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_KE, s, s, 1),
		t.handle_succ = !0,
		t.handle_num = 3,
		e[s] -= 2,
		e[s + 1] -= 0,
		e[CardID.CARD_KING] -= 1
	},
	t.ShenWithReplace_1 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_SHEN, s, s + 1, 1),
		t.handle_succ = !0,
		t.handle_num = 3,
		e[s] -= 1,
		e[s + 1] -= 0,
		e[s + 2] -= 1,
		e[CardID.CARD_KING] -= 1
	},
	t.ShenWithReplace_2 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_SHEN, s, s + 2, 1),
		t.handle_succ = !0,
		t.handle_num = 3,
		e[s] -= 1,
		e[s + 1] -= 1,
		e[s + 2] -= 0,
		e[CardID.CARD_KING] -= 1
	},
	t.KeWithReplace_0_0 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_KE, s, s, 2),
		t.handle_succ = !0,
		t.handle_num = 3,
		e[s] -= 1,
		e[s + 1] -= 0,
		e[CardID.CARD_KING] -= 2
	},
	t.ShenShenWithReplace_n = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_SHEN, s, 0, 0),
		i.push(HuCardMask.HU_MASK_SHEN, s, 0, 0),
		t.handle_succ = !0,
		t.handle_num = 6,
		e[s] -= 2,
		e[s + 1] -= 2,
		e[s + 2] -= 2
	},
	t.ShenShenWithReplace_1 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_SHEN, s, 0, 0),
		i.push(HuCardMask.HU_MASK_SHEN, s, s + 1, 1),
		t.handle_succ = !0,
		t.handle_num = 6,
		e[s] -= 2,
		e[s + 1] -= 1,
		e[s + 2] -= 2,
		e[CardID.CARD_KING] -= 1
	},
	t.ShenShenWithReplace_2 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_SHEN, s, 0, 0),
		i.push(HuCardMask.HU_MASK_SHEN, s, s + 2, 1),
		t.handle_succ = !0,
		t.handle_num = 6,
		e[s] -= 2,
		e[s + 1] -= 2,
		e[s + 2] -= 1,
		e[CardID.CARD_KING] -= 1
	},
	t.ShenShenWithReplace_1_1 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_SHEN, s, s + 1, 1),
		i.push(HuCardMask.HU_MASK_SHEN, s, s + 1, 1),
		t.handle_succ = !0,
		t.handle_num = 6,
		e[s] -= 2,
		e[s + 1] -= 0,
		e[s + 2] -= 2,
		e[CardID.CARD_KING] -= 21
	},
	t.ShenShenWithReplace_2_2 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_SHEN, s, s + 2, 1),
		i.push(HuCardMask.HU_MASK_SHEN, s, s + 2, 1),
		t.handle_succ = !0,
		t.handle_num = 6,
		e[s] -= 2,
		e[s + 1] -= 2,
		e[s + 2] -= 0,
		e[CardID.CARD_KING] -= 2
	},
	t.KeKeFillWithReplace_0_1_1 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_KE, s, s, 1),
		i.push(HuCardMask.HU_MASK_KE, s, s, 2),
		t.handle_succ = !0,
		t.handle_num = 6,
		e[s] -= 2,
		e[s + 1] -= 1,
		e[CardID.CARD_KING] -= 3,
		e[s + 2] -= 0
	},
	t.KeKeFillWithReplace_0_1 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_KE, s, s, 1),
		i.push(HuCardMask.HU_MASK_KE, s, s, 1),
		t.handle_succ = !0,
		t.handle_num = 6,
		e[s] -= 2,
		e[s + 1] -= 2,
		e[CardID.CARD_KING] -= 2,
		e[s + 2] -= 0
	},
	t.KeKeFillWithReplace_0_0 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_KE, s, 0, 0),
		i.push(HuCardMask.HU_MASK_KE, s, s, 2),
		t.handle_succ = !0,
		t.handle_num = 6,
		e[s] -= 4,
		e[s + 1] -= 0,
		e[CardID.CARD_KING] -= 2,
		e[s + 2] -= 0
	},
	t.ShenKeKeFillWithReplace_pre1_1 = function(t, e, i, s) {
		i.push(HuCardMask.HU_MASK_SHEN, s, s - 1, 1),
		i.push(HuCardMask.HU_MASK_KE, s, 0, 0),
		t.handle_succ = !0,
		t.handle_num = 6,
		e[s] -= 4,
		e[s + 1] -= 1,
		e[CardID.CARD_KING] -= 1,
		e[s + 2] -= 0
	},
	t
} ();
