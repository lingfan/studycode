
var CardUtil = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.PrintCards = function(t) {
		for (var e = "",
		i = t.length,
		s = 0; i > s; s++) if (t[s] > 0) {
			for (var n = 0; n < t[s]; n++) e += s + " ";
			e += ", "
		}
		console.warn(e)
	},
	t.GetCardTypeName = function(t) {
		return t > CardID.CARD_NONE && t <= CardID.CARD_WAN9 ? "万": t > CardID.CARD_NONE10 && t <= CardID.CARD_TIAO9 ? "条": t > CardID.CARD_NONG20 && t <= CardID.CARD_DONG9 ? "筒": t == CardID.CARD_WORD_EAST ? "": t == CardID.CARD_WORD_SOUTH ? "": t == CardID.CARD_WORD_WEST ? "": t == CardID.CARD_WORD_NORTH ? "": t == CardID.CARD_WORD_ZHONG ? "": t == CardID.CARD_WORD_FA ? "": t == CardID.CARD_WORD_BAI ? "": t == CardID.CARD_KING ? "鬼": ""
	},
	t.GetCardNum = function(t) {
		return t > CardID.CARD_NONE && t <= CardID.CARD_WAN9 ? "" + t: t > CardID.CARD_NONE10 && t <= CardID.CARD_TIAO9 ? "" + t % 10 : t > CardID.CARD_NONG20 && t <= CardID.CARD_DONG9 ? "" + t % 20 : t == CardID.CARD_WORD_EAST ? "东": t == CardID.CARD_WORD_SOUTH ? "南": t == CardID.CARD_WORD_WEST ? "西": t == CardID.CARD_WORD_NORTH ? "北": t == CardID.CARD_WORD_ZHONG ? "中": t == CardID.CARD_WORD_FA ? "发": t == CardID.CARD_WORD_BAI ? "白": t == CardID.CARD_KING ? "鬼": ""
	},
	t.PrintHU = function(t) {
		var e = 0,
		i = "";
		i += this.GetCardNum(t.pop()),
		i += this.GetCardNum(t.pop()),
		e = t.pop(),
		i += this.GetCardNum(e),
		i += this.GetCardTypeName(e),
		i += " ",
		i += this.GetCardNum(t.pop()),
		i += this.GetCardNum(t.pop()),
		e = t.pop(),
		i += this.GetCardNum(e),
		i += this.GetCardTypeName(e),
		i += " ",
		i += this.GetCardNum(t.pop()),
		i += this.GetCardNum(t.pop()),
		e = t.pop(),
		i += this.GetCardNum(e),
		i += this.GetCardTypeName(e),
		i += " ",
		i += this.GetCardNum(t.pop()),
		i += this.GetCardNum(t.pop()),
		e = t.pop(),
		i += this.GetCardNum(e),
		i += this.GetCardTypeName(e),
		i += " ",
		i += this.GetCardNum(t.pop()),
		e = t.pop(),
		i += this.GetCardNum(e),
		i += this.GetCardTypeName(e),
		i += " ",
		console.warn(i)
	},
	t.GetHUStr = function(t) {
		var e = 0,
		i = "";
		return i += this.GetCardNum(t[0]),
		e = t[1],
		i += this.GetCardNum(e),
		i += " ",
		i += this.GetCardNum(t[2]),
		i += this.GetCardNum(t[3]),
		e = t[4],
		i += this.GetCardNum(e),
		i += " ",
		i += this.GetCardNum(t[5]),
		i += this.GetCardNum(t[6]),
		e = t[7],
		i += this.GetCardNum(e),
		i += " ",
		i += this.GetCardNum(t[8]),
		i += this.GetCardNum(t[9]),
		e = t[10],
		i += this.GetCardNum(e),
		i += " ",
		i += this.GetCardNum(t[11]),
		i += this.GetCardNum(t[12]),
		e = t[13],
		i += this.GetCardNum(e),
		i += " "
	},
	t.GetCardName = function(t) {
		return t > CardID.CARD_NONE && t <= CardID.CARD_WAN9 ? t + "万": t > CardID.CARD_NONE10 && t <= CardID.CARD_TIAO9 ? t % 10 + "条": t > CardID.CARD_NONG20 && t <= CardID.CARD_DONG9 ? t % 20 + "筒": t == CardID.CARD_WORD_EAST ? "东": t == CardID.CARD_WORD_SOUTH ? "南": t == CardID.CARD_WORD_WEST ? "西": t == CardID.CARD_WORD_NORTH ? "北": t == CardID.CARD_WORD_ZHONG ? "中": t == CardID.CARD_WORD_FA ? "发": t == CardID.CARD_WORD_BAI ? "白": t == CardID.CARD_KING ? "鬼": ""
	},
	t
} ();
