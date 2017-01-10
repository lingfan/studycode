
var AllWordWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_PURE_COLOR_PAIRS)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		for (var s = (HuHelper.GetCarTypeInfo(t), 0); s <= CardID.CARD_DONG9; s++) if (t[s] > 0) return ! 1;
		return this.CheckDoubleHu(t, e, i)
	},
	e
} (DoubleHuWithKing);
