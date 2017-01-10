
var HuType; !
function(t) {
	t[t.HU_NONE = 0] = "HU_NONE",
	t[t.HU_TYPE_CHICKEN = 1] = "HU_TYPE_CHICKEN",
	t[t.HU_TYPE_FLAT = 2] = "HU_TYPE_FLAT",
	t[t.HU_TYPE_PAIRS = 3] = "HU_TYPE_PAIRS",
	t[t.HU_TYPE_MIX_COLOR = 4] = "HU_TYPE_MIX_COLOR",
	t[t.HU_TYPE_MIX_COLOR_PAIRS = 5] = "HU_TYPE_MIX_COLOR_PAIRS",
	t[t.HU_TYPE_PURE_COLOR = 6] = "HU_TYPE_PURE_COLOR",
	t[t.HU_TYPE_PURE_COLOR_PAIRS = 7] = "HU_TYPE_PURE_COLOR_PAIRS",
	t[t.HU_TYPE_MIX_19 = 8] = "HU_TYPE_MIX_19",
	t[t.HU_TYPE_PURE_19 = 9] = "HU_TYPE_PURE_19",
	t[t.HU_TYPE_SMALL_THREE_PART = 10] = "HU_TYPE_SMALL_THREE_PART",
	t[t.HU_TYPE_BIG_THREE_PART = 11] = "HU_TYPE_BIG_THREE_PART",
	t[t.HU_TYPE_SMALL_FOUR_PART = 12] = "HU_TYPE_SMALL_FOUR_PART",
	t[t.HU_TYPE_BIG_FOUR_PART = 13] = "HU_TYPE_BIG_FOUR_PART",
	t[t.HU_TYPE_ALL_WORD = 14] = "HU_TYPE_ALL_WORD",
	t[t.HU_TYPE_THIRTEEN_1 = 15] = "HU_TYPE_THIRTEEN_1",
	t[t.HU_TYPE_SEVEN_SMALL_PAIRS = 16] = "HU_TYPE_SEVEN_SMALL_PAIRS",
	t[t.HU_TYPE_SEVEN_SMALL_PAIRS1 = 17] = "HU_TYPE_SEVEN_SMALL_PAIRS1",
	t[t.HU_TYPE_SEVEN_SMALL_PAIRS2 = 18] = "HU_TYPE_SEVEN_SMALL_PAIRS2",
	t[t.HU_TYPE_SEVEN_SMALL_PAIRS3 = 19] = "HU_TYPE_SEVEN_SMALL_PAIRS3"
} (HuType || (HuType = {}));
var HuInfo; !
function(t) {
	t.Info = [{
		TypeId: 1,
		Name: "鸡胡",
		TypeName: "ChickenHuWithKing"
	},
	{
		TypeId: 3,
		Name: "对对胡",
		TypeName: "DoubleHuWithKing"
	},
	{
		TypeId: 4,
		Name: "混一色",
		TypeName: "MixColorWithKing"
	},
	{
		TypeId: 5,
		Name: "混一色 对对胡",
		TypeName: "MixColorDoubleWithKing"
	},
	{
		TypeId: 6,
		Name: "清一色",
		TypeName: "PureColorWithKing"
	},
	{
		TypeId: 7,
		Name: "清一色 对对胡",
		TypeName: "PureColorDoubleWithKing"
	},
	{
		TypeId: 8,
		Name: "混幺九",
		TypeName: "Mix19WithKing"
	},
	{
		TypeId: 9,
		Name: "清幺九",
		TypeName: "Pure19WithKing"
	},
	{
		TypeId: 10,
		Name: "小三元",
		TypeName: "SmallThreePartWithKing"
	},
	{
		TypeId: 11,
		Name: "大三元",
		TypeName: "BigThreePartWithKing"
	},
	{
		TypeId: 12,
		Name: "小四喜",
		TypeName: "SmallFourPartWithKing"
	},
	{
		TypeId: 13,
		Name: "大四喜",
		TypeName: "BigFourPartWithKing"
	},
	{
		TypeId: 14,
		Name: "全风",
		TypeName: "AllWordWithKing"
	},
	{
		TypeId: 15,
		Name: "十三幺",
		TypeName: "ThirteenOneWithKing"
	},
	{
		TypeId: 16,
		Name: "七小对",
		TypeName: "SevenSmallPairsWithKing"
	},
	{
		TypeId: 17,
		Name: "豪华七小对",
		TypeName: "SevenSmallPairsWithKing1"
	},
	{
		TypeId: 18,
		Name: "双豪华七小对",
		TypeName: "SevenSmallPairsWithKing2"
	},
	{
		TypeId: 19,
		Name: "超豪华七小对",
		TypeName: "HU_TYPE_SEVEN_SMALL_PAIRS3"
	}]
} (HuInfo || (HuInfo = {}));
var HuAction = function() {
	function t(t) {
		this.m_handle_info = null,
		this.m_handle_info = new HandleCardInfo,
		this.Init(t)
	}
	var e = (__define, t),
	i = e.prototype;
	return i.Init = function(t) {
		this.hu_type = t
	},
	i.IsHu = function(t, e, i) {
		return ! 1
	},
	i.HandlePair = function(t, e, i, s) {
		e ? (i[t] -= 1, i[CardID.CARD_KING] -= 1, s.push(HuCardMask.HU_MASK_PAIR, t, t, 1)) : (i[t] -= 2, s.push(HuCardMask.HU_MASK_PAIR, t, 0, 0))
	},
	t
} ();
