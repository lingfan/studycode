
var MixColorWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_MIX_COLOR)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		var s = HuHelper.GetCarTypeInfo(t),
		n = s.wan_type_mask + s.tiao_type_mask + s.tong_type_mask;
		return 1 != n ? !1 : this.CheckChickHu(t, e, i)
	},
	e
} (ChickenHuWithKing);
