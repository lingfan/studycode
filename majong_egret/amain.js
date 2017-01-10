var DataConf = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.Card = {
		nScaleCardUsed: .6,
		nScaleCardLockedMine: .7,
		nScaleCardLockedOthers: .5,
		sizeCardFront: {
			w: 61,
			h: 89
		},
		sizeCardSide: {
			w: 23,
			h: 73
		},
		arrGridColor: [6684692, 2251178, 11622171, 949093]
	},
	t.nSumEmojiImg = 19,
	t
} ();
egret.registerClass(DataConf, "DataConf");
var DataGlobal = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.getInst = function() {
		return this.inst || (this.inst = new t),
		this.inst
	},
	t.wStage = 1136,
	t.hStage = 640,
	t.Evts = {
		BACK_INDEX: "backIndex",
		SHOW_BOARD_USER_INFO: "showBoardUserInfo",
		SHOW_BOARD_TIP_ADD_ROOM: "showBoardTipAddRoom",
		SHOW_BOARD_ABOUT_INTO_ROOM: "showBoardAboutIntoRoom",
		SELECTED_BTN: "selectedBtn",
		CREATE_ROOM: "createRoom",
		JOIN_ROOM: "joinRoom",
		BACK_HOTEL_FROM_ROOM: "backHotelFromRoom",
		CLOSE_ROOM_BY_HOST: "closeRoomByHost",
		VOTE_CLOSE_ROOM: "voteCloseRoom",
		POP_MY_CARD: "popMyCard",
		ACTION_DOUBLE: "actionDouble",
		ACTION_BAR: "actionBar",
		ACTION_HU: "actionHu",
		ACTION_PASS: "actionPass",
		BEGIN_NEXT_PAN: "beginNextPan",
		SEND_EMOJI: "sendEmoji",
		SEND_FREQUENT_CHAT: "sendFrequentChat",
		SEND_REQUEST_BLOCKED: "sendRequestBlocked",
		EXIT_ROOM: "exitRoom",
		BACK_GAME: "backGame"
	},
	t
} ();
egret.registerClass(DataGlobal, "DataGlobal");
var WayPlay; !
function(t) {
	t[t.PUSH_FALL = 0] = "PUSH_FALL",
	t[t.QINGYUAN = 2] = "QINGYUAN",
	t[t.SHAOGUAN = 3] = "SHAOGUAN"
} (WayPlay || (WayPlay = {}));
var OptionKing; !
function(t) {
	t[t.NO_KING = 0] = "NO_KING",
	t[t.TURN_KING = 1] = "TURN_KING",
	t[t.PLUS_THREE_WITHOUT_KING = 2] = "PLUS_THREE_WITHOUT_KING",
	t[t.DOUBLE_WITHOUT_KING = 3] = "DOUBLE_WITHOUT_KING",
	t[t.BLANK_AS_KING = 4] = "BLANK_AS_KING"
} (OptionKing || (OptionKing = {}));
var PlusScoreWithoutKing; !
function(t) {
	t[t.NO_PLUS = 0] = "NO_PLUS",
	t[t.PLUS_THREE = 1] = "PLUS_THREE",
	t[t.DOUBLE = 2] = "DOUBLE"
} (PlusScoreWithoutKing || (PlusScoreWithoutKing = {}));
var TypeBar; !
function(t) {
	t[t.BRIGHT = 0] = "BRIGHT",
	t[t.DARK = 1] = "DARK",
	t[t.DOUBLE = 2] = "DOUBLE",
	t[t.RISK = 3] = "RISK",
	t[t.EXPLODE = 4] = "EXPLODE",
	t[t.FIGHT = 5] = "FIGHT"
} (TypeBar || (TypeBar = {}));
var TypeHu; !
function(t) {
	t[t.CHICKEN = 0] = "CHICKEN",
	t[t.DOUBLE = 1] = "DOUBLE",
	t[t.MIX19WITHKING = 2] = "MIX19WITHKING",
	t[t.MIX_COLOR_DOUBLE = 3] = "MIX_COLOR_DOUBLE",
	t[t.PURE19WITHKING = 4] = "PURE19WITHKING",
	t[t.PURE_COLOR_DOUBLE = 5] = "PURE_COLOR_DOUBLE"
} (TypeHu || (TypeHu = {}));
var WindDirection; !
function(t) {
	t[t.EAST = 0] = "EAST",
	t[t.SOUTH = 1] = "SOUTH",
	t[t.WEST = 2] = "WEST",
	t[t.NORTH = 3] = "NORTH",
	t[t.CENTER = 4] = "CENTER"
} (WindDirection || (WindDirection = {}));
var Direction; !
function(t) {
	t[t.NONE = 0] = "NONE",
	t[t.DOWN = 1] = "DOWN",
	t[t.RIGHT = 2] = "RIGHT",
	t[t.UP = 3] = "UP",
	t[t.LEFT = 4] = "LEFT"
} (Direction || (Direction = {}));
var ResultVote; !
function(t) {
	t[t.DISAGREE = -1] = "DISAGREE",
	t[t.NOT_VOTE = 0] = "NOT_VOTE",
	t[t.AGREE = 1] = "AGREE"
} (ResultVote || (ResultVote = {}));
var OptionsPlayLogic = function() {
	function t() {
		this.optionsAnalyseScore = {
			nRound: 8
		},
		this.OptionsPlayCard = {
			WayPlay: WayPlay.PUSH_FALL,
			NoKingDouble: !1,
			WithoutLetterCard: !1,
			BarExplodeAllContain: !1,
			RobBarPlusTwoHorse: !1,
			OneNineMustHave: !1,
			TwelveFallGroundShouldHu: !1,
			RiskBarPlusTweHorse: !1,
			CanMakeSanyuanSixi: !1,
			OneNineCanEatHu: !1,
			King: OptionKing.NO_KING,
			PlusScoreWithoutKing: PlusScoreWithoutKing.NO_PLUS,
			Horse: 0,
			IsHorseAndHu: !1,
			HasHorseTop: 0,
			Multiple: 0
		}
	}
	var e = (__define, t),
	i = e.prototype;
	return i.useBar = function() {},
	i.analyseScore = function() {},
	t.getInst = function() {
		return this.inst || (this.inst = new t),
		this.inst
	},
	t
} ();
egret.registerClass(OptionsPlayLogic, "OptionsPlayLogic");
var GlobalData; !
function(t) {
	t.server_url = "ws://203.195.217.251:6677/mahjong",
	t.g_fix_width = 480,
	t.g_fix_height = 800,
	t.bIsInRoom = !1,
	t.fontSet = [{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 16578792,
		stroke: 0,
		strokeColor: 0
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 5575173,
		stroke: 0,
		strokeColor: 0
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 99073,
		stroke: 0,
		strokeColor: 0
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 2711805,
		stroke: 0,
		strokeColor: 0
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 10889725,
		stroke: 0,
		strokeColor: 0
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 16750336,
		stroke: 0,
		strokeColor: 5575173
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 15665417,
		stroke: 0,
		strokeColor: 0
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 16578792,
		stroke: 3,
		strokeColor: 5575173
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 16578792,
		stroke: 2,
		strokeColor: 99073
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 16578792,
		stroke: 2,
		strokeColor: 2711805
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 16578792,
		stroke: 2,
		strokeColor: 10889725
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 16578792,
		stroke: 2,
		strokeColor: 16750336
	},
	{
		fontFamily: "Microsoft YaHei",
		bold: !0,
		textColor: 16578792,
		stroke: 2,
		strokeColor: 15665417
	}]
} (GlobalData || (GlobalData = {}));
var ShareMgr = function() {
	function t() {
		this.g_main = null,
		this.g_channel = null,
		this.g_sceneIndex = null,
		this.g_sceneGame = null
	}
	var e = (__define, t);
	e.prototype;
	return t.getInstance = function() {
		return null == t.instance && (t.instance = new t),
		t.instance
	},
	t.instance = null,
	t
} ();
egret.registerClass(ShareMgr, "ShareMgr");
var util_cards = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.getArrIdCardDouble = function(t) {
		for (var e, i = [], s = 0; s < t.length; s++) e = t[s],
		this.getSumSpecifiedCard(e, t) > 1 && -1 == i.indexOf(e) && i.push(e);
		return i
	},
	t.getSumSpecifiedCard = function(t, e) {
		for (var i, s = 0,
		n = 0; n < e.length && (i = e[n], s += i == t ? 1 : 0, !(i > t)); n++);
		return s
	},
	t.judgeHaveSumSequence = function(t, e, i) {
		var s = !1;
		if (t % 10 >= 8 || t > CardID.CARD_DONG9) return s;
		for (var n = 0; 3 > n; n++) if (this.getSumSpecifiedCard(t + n, i) < e) return ! 1;
		return ! 0
	},
	t.deleteCardSequence = function(t, e, i) {
		for (var s = 0; 3 > s; s++) this.deleteCardFromCardsArr(t + s, e, i)
	},
	t.deleteCardFromCardsArr = function(t, e, i) {
		i.splice(i.indexOf(t), e)
	},
	t
} ();
egret.registerClass(util_cards, "util_cards");
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
egret.registerClass(HuAction, "HuAction");
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
egret.registerClass(HuHelper, "HuHelper");
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
egret.registerClass(HuUnit, "HuUnit");
var HuResult = function() {
	function t() {
		this.MAX_HU_NUM = 18,
		this.hu_arr = null,
		this.hu_arr_index = 0,
		this.hu_arr = new Array;
		for (var t = 0; t < this.MAX_HU_NUM; t++) this.hu_arr[t] = new HuUnit;
		this.hu_arr_index = 0
	}
	var e = (__define, t),
	i = e.prototype;
	return i.Reset = function() {
		for (var t = 0; t < this.MAX_HU_NUM; t++) this.hu_arr[t].Reset();
		this.hu_arr_index = 0
	},
	i.push = function(t, e, i, s) {
		this.hu_arr[this.hu_arr_index].mask = t,
		this.hu_arr[this.hu_arr_index].card_id = e,
		this.hu_arr[this.hu_arr_index].card_id_with_king = i,
		this.hu_arr[this.hu_arr_index].king_num = s,
		++this.hu_arr_index
	},
	i.getGroupInfo = function() {
		for (var t = "",
		e = 0; e < this.hu_arr.length && 0 != this.hu_arr[e].mask; e++)"" != t && (t += ","),
		t = t + this.hu_arr[e].mask + "," + this.hu_arr[e].card_id + "," + this.hu_arr[e].card_id_with_king + "," + this.hu_arr[e].king_num;
		return {
			info: t,
			count: e
		}
	},
	i.transfer = function(t) {
		this.hu_arr_index = t.hu_arr_index;
		for (var e = 0; e < this.MAX_HU_NUM; e++) this.hu_arr[e] = t.hu_arr[e]
	},
	t
} ();
egret.registerClass(HuResult, "HuResult");
var DoubleHuWithKing = function(t) {
	function e() {
		t.call(this, HuType.HU_TYPE_PAIRS)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		return this.CheckDoubleHu(t, e, i)
	},
	s.CheckDoubleHu = function(t, e, i) {
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
		if ((s == CardID.CARD_WAN8 || s == CardID.CARD_TIAO8 || s == CardID.CARD_DONG8) && 1 == e[s]) return e[CardID.CARD_KING] > 1 ? void KingOption.KeWithReplace_0_0(t, e, i, s) : void 0
	},
	s.Handle82 = function(t, e, i) {
		var s = t.cur_card_id;
		if ((s == CardID.CARD_WAN8 || s == CardID.CARD_TIAO8 || s == CardID.CARD_DONG8) && 2 == e[s]) return e[CardID.CARD_KING] > 0 ? void KingOption.KeWithReplace_0(t, e, i, s) : void 0
	},
	s.Handle83 = function(t, e, i) {
		var s = t.cur_card_id; (s == CardID.CARD_WAN8 || s == CardID.CARD_TIAO8 || s == CardID.CARD_DONG8) && 3 == e[s] && KingOption.KeWithReplace_n(t, e, i, s)
	},
	s.Handle84 = function(t, e, i) {
		var s = t.cur_card_id;
		if ((s == CardID.CARD_WAN8 || s == CardID.CARD_TIAO8 || s == CardID.CARD_DONG8) && 4 == e[s]) return e[CardID.CARD_KING] > 1 ? void KingOption.KeKeFillWithReplace_0_0(t, e, i, s) : void 0
	},
	s.Handle91 = function(t, e, i) {
		var s = t.cur_card_id;
		if ((s == CardID.CARD_WAN9 || s == CardID.CARD_TIAO9 || s == CardID.CARD_DONG9) && 1 == e[s]) return e[CardID.CARD_KING] > 1 ? void KingOption.KeWithReplace_0_0(t, e, i, s) : void 0
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
		if (s != CardID.CARD_WAN8 && s != CardID.CARD_TIAO8 && s != CardID.CARD_DONG8 && s != CardID.CARD_WAN9 && s != CardID.CARD_TIAO9 && s != CardID.CARD_DONG9 && !(s > CardID.CARD_NONG30) && 1 == e[s]) return e[CardID.CARD_KING] > 1 ? void KingOption.KeWithReplace_0_0(t, e, i, s) : void 0
	},
	s.HandleC2 = function(t, e, i) {
		var s = t.cur_card_id;
		if (s != CardID.CARD_WAN8 && s != CardID.CARD_TIAO8 && s != CardID.CARD_DONG8 && s != CardID.CARD_WAN9 && s != CardID.CARD_TIAO9 && s != CardID.CARD_DONG9 && !(s > CardID.CARD_NONG30) && 2 == e[s]) return e[CardID.CARD_KING] > 0 ? void KingOption.KeWithReplace_0(t, e, i, s) : void 0
	},
	s.HandleC3 = function(t, e, i) {
		var s = t.cur_card_id;
		s != CardID.CARD_WAN8 && s != CardID.CARD_TIAO8 && s != CardID.CARD_DONG8 && s != CardID.CARD_WAN9 && s != CardID.CARD_TIAO9 && s != CardID.CARD_DONG9 && (s > CardID.CARD_NONG30 || 3 == e[s] && KingOption.KeWithReplace_n(t, e, i, s))
	},
	s.HandleC4 = function(t, e, i) {
		var s = t.cur_card_id;
		if (s != CardID.CARD_WAN8 && s != CardID.CARD_TIAO8 && s != CardID.CARD_DONG8 && s != CardID.CARD_WAN9 && s != CardID.CARD_TIAO9 && s != CardID.CARD_DONG9 && !(s > CardID.CARD_NONG30) && 4 == e[s]) return e[CardID.CARD_KING] > 1 ? void KingOption.KeWithReplace_0_0(t, e, i, s) : void 0
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
egret.registerClass(DoubleHuWithKing, "DoubleHuWithKing");
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
egret.registerClass(AllWordWithKing, "AllWordWithKing");
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
egret.registerClass(ChickenHuWithKing, "ChickenHuWithKing");
var BigFourPartWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SMALL_FOUR_PART)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		var s = t.concat();
		return this.HandleDNSB(this.m_handle_info, s, i)
	},
	s.HandleDNSB = function(t, e, i) {
		if (!this.HandleDNSB_Ke(CardID.CARD_WORD_EAST, e, i)) return ! 1;
		if (!this.HandleDNSB_Ke(CardID.CARD_WORD_SOUTH, e, i)) return ! 1;
		if (!this.HandleDNSB_Ke(CardID.CARD_WORD_WEST, e, i)) return ! 1;
		if (!this.HandleDNSB_Ke(CardID.CARD_WORD_NORTH, e, i)) return ! 1;
		var s = HuHelper.GetNext(e);
		return 2 == e[s] ? !0 : 1 == e[s] && 1 == e[CardID.CARD_KING] ? !0 : !1
	},
	s.HandleDNSB_Ke = function(t, e, i) {
		var s = !1;
		return e[t] <= 0 && e[CardID.CARD_KING] > 2 ? (i.push(HuCardMask.HU_MASK_KE, CardID.CARD_KING, 0, 0), e[CardID.CARD_KING] -= 3, s = !0) : 1 == e[t] && e[CardID.CARD_KING] > 1 ? (i.push(HuCardMask.HU_MASK_KE, t, t, 2), e[t] -= 1, e[CardID.CARD_KING] -= 2, s = !0) : 2 == e[t] && e[CardID.CARD_KING] > 0 ? (i.push(HuCardMask.HU_MASK_KE, t, t, 1), e[t] -= 2, e[CardID.CARD_KING] -= 1, s = !0) : e[t] > 2 && (i.push(HuCardMask.HU_MASK_KE, t, 0, 0), e[t] -= 3, s = !0),
		s
	},
	e
} (ChickenHuWithKing);
egret.registerClass(BigFourPartWithKing, "BigFourPartWithKing");
var BigThreePartWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SMALL_THREE_PART)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		var s = t.concat();
		return this.HandleZFB(this.m_handle_info, s, i)
	},
	s.HandleZFB = function(t, e, i) {
		CardID.CARD_WORD_ZHONG;
		if (!this.HandleZFB_Ke(CardID.CARD_WORD_ZHONG, e, i)) return ! 1;
		if (!this.HandleZFB_Ke(CardID.CARD_WORD_FA, e, i)) return ! 1;
		if (!this.HandleZFB_Ke(CardID.CARD_WORD_BAI, e, i)) return ! 1;
		var s = HuHelper.GetPairArr(e, !0);
		return this.CheckHu(e, s, i)
	},
	s.CheckHu = function(t, e, i) {
		var s = !1,
		n = e.length;
		if (0 >= n) return s;
		this.m_handle_info.Reset();
		for (var r = new HuResult,
		a = HuHelper.GetCardNum(t), o = 0, h = 0; n > h && !s; h++) {
			r.Reset();
			var d = t.concat();
			for (this.HandlePair(e[h].card_id, e[h].with_king, d, r), o = a - 2, s = !0; o > 0;) {
				if (this.m_handle_info.Reset(), this.m_handle_info.cur_card_id = HuHelper.GetNext(d), this.m_handle_info.handle_succ = !1, this.m_handle_info.handle_num = 0, this.Handle81(this.m_handle_info, d, r), this.Handle82(this.m_handle_info, d, r), this.Handle83(this.m_handle_info, d, r), this.Handle84(this.m_handle_info, d, r), this.Handle91(this.m_handle_info, d, r), this.Handle92(this.m_handle_info, d, r), this.Handle93(this.m_handle_info, d, r), this.Handle94(this.m_handle_info, d, r), this.HandleC1(this.m_handle_info, d, r), this.HandleC2(this.m_handle_info, d, r), this.HandleC3(this.m_handle_info, d, r), this.HandleC4(this.m_handle_info, d, r), this.HandleW1(this.m_handle_info, d, r), this.HandleW2(this.m_handle_info, d, r), this.HandleW3(this.m_handle_info, d, r), this.HandleW4(this.m_handle_info, d, r), !this.m_handle_info.handle_succ) {
					s = !1;
					break
				}
				o -= this.m_handle_info.handle_num
			}
		}
		return s && (i = r),
		s
	},
	s.HandleZFB_Ke = function(t, e, i) {
		var s = !1;
		return e[t] <= 0 && e[CardID.CARD_KING] > 2 ? (i.push(HuCardMask.HU_MASK_KE, CardID.CARD_KING, 0, 0), e[CardID.CARD_KING] -= 3, s = !0) : 1 == e[t] && e[CardID.CARD_KING] > 1 ? (i.push(HuCardMask.HU_MASK_KE, t, t, 2), e[t] -= 1, e[CardID.CARD_KING] -= 2, s = !0) : 2 == e[t] && e[CardID.CARD_KING] > 0 ? (i.push(HuCardMask.HU_MASK_KE, t, t, 1), e[t] -= 2, e[CardID.CARD_KING] -= 1, s = !0) : e[t] > 2 && (i.push(HuCardMask.HU_MASK_KE, t, 0, 0), e[t] -= 3, s = !0),
		s
	},
	e
} (ChickenHuWithKing);
egret.registerClass(BigThreePartWithKing, "BigThreePartWithKing");
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
egret.registerClass(Mix19WithKing, "Mix19WithKing");
var MixColorDoubleWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_PURE_COLOR_PAIRS)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		var s = HuHelper.GetCarTypeInfo(t),
		n = s.wan_type_mask + s.tiao_type_mask + s.tong_type_mask;
		return 1 != n ? !1 : this.CheckDoubleHu(t, e, i)
	},
	e
} (DoubleHuWithKing);
egret.registerClass(MixColorDoubleWithKing, "MixColorDoubleWithKing");
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
egret.registerClass(MixColorWithKing, "MixColorWithKing");
var Pure19WithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_MIX_19)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		return this.Check19(t) ? this.CheckDoubleHu(t, e, i) : !1
	},
	s.Check19 = function(t) {
		for (var e = 0; e < CardID.CARD_NONG30; e++) if (0 != t[e] && e != CardID.CARD_WAN1 && e != CardID.CARD_WAN9 && e != CardID.CARD_TIAO1 && e != CardID.CARD_TIAO9 && e != CardID.CARD_DONG1 && e != CardID.CARD_DONG9 && t[e] > 0) return ! 1;
		for (var e = CardID.CARD_WORD_EAST; e <= CardID.CARD_WORD_BAI; e++) if (t[e] > 0) return ! 1;
		return ! 0
	},
	e
} (DoubleHuWithKing);
egret.registerClass(Pure19WithKing, "Pure19WithKing");
var PureColorDoubleWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_MIX_COLOR_PAIRS)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		var s = HuHelper.GetCarTypeInfo(t),
		n = s.wan_type_mask + s.tiao_type_mask + s.tong_type_mask;
		if (1 != n) return ! 1;
		var r = s.feng_num + s.arrow_num;
		return 0 != r ? !1 : this.CheckDoubleHu(t, e, i)
	},
	e
} (DoubleHuWithKing);
egret.registerClass(PureColorDoubleWithKing, "PureColorDoubleWithKing");
var PureColorWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_PURE_COLOR)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		var s = HuHelper.GetCarTypeInfo(t),
		n = s.wan_type_mask + s.tiao_type_mask + s.tong_type_mask;
		if (1 != n) return ! 1;
		var r = s.feng_num + s.arrow_num;
		return 0 != r ? !1 : this.CheckChickHu(t, e, i)
	},
	e
} (ChickenHuWithKing);
egret.registerClass(PureColorWithKing, "PureColorWithKing");
var SevenSmallPairsWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SEVEN_SMALL_PAIRS)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		return this.CheckPairs(t, i)
	},
	s.CheckPairs = function(t, e) {
		for (var i = 0,
		s = 0,
		n = 0; n <= CardID.CARD_KING; n++)(1 == t[n] || 3 == t[n]) && t[CardID.CARD_KING] > 0 && (t[n] += 1, t[CardID.CARD_KING] -= 1, e.push(HuCardMask.HU_MASK_PAIR, n, n, 1)),
		2 == t[n] && (++i, e.push(HuCardMask.HU_MASK_PAIR, n, 0, 0)),
		4 == t[n] && (++s, e.push(HuCardMask.HU_MASK_GANG, n, 0, 0));
		return i += 2 * s,
		alert("pairs_num=" + i),
		7 == i ? !0 : !1
	},
	e
} (DoubleHuWithKing);
egret.registerClass(SevenSmallPairsWithKing, "SevenSmallPairsWithKing");
var SevenSmallPairsWithKing1 = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SEVEN_SMALL_PAIRS1)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		return this.CheckPairs(t, i)
	},
	s.CheckPairs = function(t, e) {
		for (var i = 0,
		s = 0,
		n = 0; n <= CardID.CARD_KING; n++)(1 == t[n] || 3 == t[n]) && t[CardID.CARD_KING] > 0 && (t[n] += 1, t[CardID.CARD_KING] -= 1, e.push(HuCardMask.HU_MASK_PAIR, n, n, 1)),
		2 == t[n] && (++i, e.push(HuCardMask.HU_MASK_PAIR, n, 0, 0)),
		4 == t[n] && (++s, e.push(HuCardMask.HU_MASK_GANG, n, 0, 0));
		return 1 > s ? !1 : (i += 2 * s, 7 == i ? !0 : !1)
	},
	e
} (DoubleHuWithKing);
egret.registerClass(SevenSmallPairsWithKing1, "SevenSmallPairsWithKing1");
var SevenSmallPairsWithKing2 = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SEVEN_SMALL_PAIRS2)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		return this.CheckPairs(t, i)
	},
	s.CheckPairs = function(t, e) {
		for (var i = 0,
		s = 0,
		n = 0; n <= CardID.CARD_KING; n++)(1 == t[n] || 3 == t[n]) && t[CardID.CARD_KING] > 0 && (t[n] += 1, t[CardID.CARD_KING] -= 1, e.push(HuCardMask.HU_MASK_PAIR, n, n, 1)),
		2 == t[n] && (++i, e.push(HuCardMask.HU_MASK_PAIR, n, 0, 0)),
		4 == t[n] && (++s, e.push(HuCardMask.HU_MASK_GANG, n, 0, 0));
		return 2 > s ? !1 : (i += 2 * s, 7 == i ? !0 : !1)
	},
	e
} (DoubleHuWithKing);
egret.registerClass(SevenSmallPairsWithKing2, "SevenSmallPairsWithKing2");
var HU_TYPE_SEVEN_SMALL_PAIRS3 = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SEVEN_SMALL_PAIRS3)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		return this.CheckPairs(t, i)
	},
	s.CheckPairs = function(t, e) {
		for (var i = 0,
		s = 0,
		n = 0; n <= CardID.CARD_KING; n++)(1 == t[n] || 3 == t[n]) && t[CardID.CARD_KING] > 0 && (t[n] += 1, t[CardID.CARD_KING] -= 1, e.push(HuCardMask.HU_MASK_PAIR, n, n, 1)),
		2 == t[n] && (++i, e.push(HuCardMask.HU_MASK_PAIR, n, 0, 0)),
		4 == t[n] && (++s, e.push(HuCardMask.HU_MASK_GANG, n, 0, 0));
		return 3 > s ? !1 : (i += 2 * s, 7 == i ? !0 : !1)
	},
	e
} (DoubleHuWithKing);
egret.registerClass(HU_TYPE_SEVEN_SMALL_PAIRS3, "HU_TYPE_SEVEN_SMALL_PAIRS3");
var SmallFourPartWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SMALL_FOUR_PART)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		var s = t.concat();
		return this.HandleDNSB(this.m_handle_info, s, i)
	},
	s.HandleDNSB = function(t, e, i) {
		var s = !1,
		n = CardID.CARD_WORD_EAST;
		return e[n] > e[CardID.CARD_WORD_SOUTH] && (n = CardID.CARD_WORD_SOUTH),
		e[n] > e[CardID.CARD_WORD_WEST] && (e[n] = CardID.CARD_WORD_WEST),
		e[n] > e[CardID.CARD_WORD_NORTH] && (n = CardID.CARD_WORD_NORTH),
		e[n] <= 0 && e[CardID.CARD_KING] > 1 ? (i.push(HuCardMask.HU_MASK_PAIR, CardID.CARD_KING, 0, 0), e[CardID.CARD_KING] -= 2, s = !0) : 1 == e[n] && e[CardID.CARD_KING] > 0 ? (i.push(HuCardMask.HU_MASK_PAIR, n, n, 1), e[n] -= 1, e[CardID.CARD_KING] -= 1, s = !0) : 2 == e[n] ? (i.push(HuCardMask.HU_MASK_PAIR, n, 0, 0), e[n] -= 2, s = !0) : 3 == e[n] && (i.push(HuCardMask.HU_MASK_PAIR, n, 0, 0), e[n] -= 2, s = !0),
		s && this.HandleDNSB_Ke(n, CardID.CARD_WORD_EAST, e, i) && this.HandleDNSB_Ke(n, CardID.CARD_WORD_SOUTH, e, i) && this.HandleDNSB_Ke(n, CardID.CARD_WORD_WEST, e, i) && this.HandleDNSB_Ke(n, CardID.CARD_WORD_NORTH, e, i) ? (this.m_handle_info.Reset(), this.m_handle_info.cur_card_id = HuHelper.GetNext(e), this.m_handle_info.handle_succ = !1, this.m_handle_info.handle_num = 0, this.HandleC1(this.m_handle_info, e, i), this.HandleC2(this.m_handle_info, e, i), this.HandleC3(this.m_handle_info, e, i), this.HandleW1(this.m_handle_info, e, i), this.HandleW2(this.m_handle_info, e, i), this.HandleW3(this.m_handle_info, e, i), this.HandleW4(this.m_handle_info, e, i), this.m_handle_info.handle_succ) : !1
	},
	s.HandleDNSB_Ke = function(t, e, i, s) {
		if (t == e) return ! 0;
		var n = !1;
		return i[e] <= 0 && i[CardID.CARD_KING] > 2 ? (s.push(HuCardMask.HU_MASK_KE, CardID.CARD_KING, 0, 0), i[CardID.CARD_KING] -= 3, n = !0) : 1 == i[e] && i[CardID.CARD_KING] > 1 ? (s.push(HuCardMask.HU_MASK_KE, e, e, 2), i[e] -= 1, i[CardID.CARD_KING] -= 2, n = !0) : 2 == i[e] && i[CardID.CARD_KING] > 0 ? (s.push(HuCardMask.HU_MASK_KE, e, e, 1), i[e] -= 2, i[CardID.CARD_KING] -= 1, n = !0) : i[e] > 2 && (s.push(HuCardMask.HU_MASK_KE, e, 0, 0), i[e] -= 3, n = !0),
		n
	},
	e
} (ChickenHuWithKing);
egret.registerClass(SmallFourPartWithKing, "SmallFourPartWithKing");
var SmallThreePartWithKing = function(t) {
	function e() {
		t.call(this),
		this.Init(HuType.HU_TYPE_SMALL_THREE_PART)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		var s = t.concat();
		return this.HandleZFB(this.m_handle_info, s, i)
	},
	s.HandleZFB = function(t, e, i) {
		var s = !1,
		n = CardID.CARD_WORD_ZHONG;
		if (e[n] > e[CardID.CARD_WORD_FA] && (n = CardID.CARD_WORD_FA), e[n] > e[CardID.CARD_WORD_BAI] && (n = CardID.CARD_WORD_BAI), e[n] <= 0 && e[CardID.CARD_KING] > 1 ? (i.push(HuCardMask.HU_MASK_PAIR, CardID.CARD_KING, 0, 0), e[CardID.CARD_KING] -= 2, s = !0) : 1 == e[n] && e[CardID.CARD_KING] > 0 ? (i.push(HuCardMask.HU_MASK_PAIR, n, n, 1), e[n] -= 1, e[CardID.CARD_KING] -= 1, s = !0) : 2 == e[n] ? (i.push(HuCardMask.HU_MASK_PAIR, n, 0, 0), e[n] -= 2, s = !0) : 3 == e[n] && (i.push(HuCardMask.HU_MASK_PAIR, n, 0, 0), e[n] -= 2, s = !0), !s) return ! 1;
		if (!this.HandleZFB_Ke(n, CardID.CARD_WORD_ZHONG, e, i)) return ! 1;
		if (!this.HandleZFB_Ke(n, CardID.CARD_WORD_FA, e, i)) return ! 1;
		if (!this.HandleZFB_Ke(n, CardID.CARD_WORD_BAI, e, i)) return ! 1;
		for (var r = HuHelper.GetCardNum(e), a = !0; r > 0;) {
			if (this.m_handle_info.Reset(), this.m_handle_info.cur_card_id = HuHelper.GetNext(e), this.m_handle_info.handle_succ = !1, this.m_handle_info.handle_num = 0, this.Handle81(this.m_handle_info, e, i), this.Handle82(this.m_handle_info, e, i), this.Handle83(this.m_handle_info, e, i), this.Handle84(this.m_handle_info, e, i), this.Handle91(this.m_handle_info, e, i), this.Handle92(this.m_handle_info, e, i), this.Handle93(this.m_handle_info, e, i), this.Handle94(this.m_handle_info, e, i), this.HandleC1(this.m_handle_info, e, i), this.HandleC2(this.m_handle_info, e, i), this.HandleC3(this.m_handle_info, e, i), this.HandleC4(this.m_handle_info, e, i), this.HandleW1(this.m_handle_info, e, i), this.HandleW2(this.m_handle_info, e, i), this.HandleW3(this.m_handle_info, e, i), this.HandleW4(this.m_handle_info, e, i), !this.m_handle_info.handle_succ) {
				a = !1;
				break
			}
			r -= this.m_handle_info.handle_num
		}
		return a
	},
	s.HandleZFB_Ke = function(t, e, i, s) {
		if (t == e) return ! 0;
		var n = !1;
		return i[e] <= 0 && i[CardID.CARD_KING] > 2 ? (s.push(HuCardMask.HU_MASK_KE, CardID.CARD_KING, 0, 0), i[CardID.CARD_KING] -= 3, n = !0) : 1 == i[e] && i[CardID.CARD_KING] > 1 ? (s.push(HuCardMask.HU_MASK_KE, e, e, 2), i[e] -= 1, i[CardID.CARD_KING] -= 2, n = !0) : 2 == i[e] && i[CardID.CARD_KING] > 0 ? (s.push(HuCardMask.HU_MASK_KE, e, e, 1), i[e] -= 2, i[CardID.CARD_KING] -= 1, n = !0) : i[e] > 2 && (s.push(HuCardMask.HU_MASK_KE, e, 0, 0), i[e] -= 3, n = !0),
		n
	},
	e
} (ChickenHuWithKing);
egret.registerClass(SmallThreePartWithKing, "SmallThreePartWithKing");
var ThirteenOneWithKing = function(t) {
	function e() {
		t.call(this),
		this.thirteen_arr = null,
		this.Init(HuType.HU_TYPE_THIRTEEN_1),
		this.thirteen_arr = [],
		this.thirteen_arr.push(CardID.CARD_WAN1),
		this.thirteen_arr.push(CardID.CARD_WAN9),
		this.thirteen_arr.push(CardID.CARD_TIAO1),
		this.thirteen_arr.push(CardID.CARD_TIAO9),
		this.thirteen_arr.push(CardID.CARD_DONG1),
		this.thirteen_arr.push(CardID.CARD_DONG9),
		this.thirteen_arr.push(CardID.CARD_WORD_EAST),
		this.thirteen_arr.push(CardID.CARD_WORD_SOUTH),
		this.thirteen_arr.push(CardID.CARD_WORD_WEST),
		this.thirteen_arr.push(CardID.CARD_WORD_NORTH),
		this.thirteen_arr.push(CardID.CARD_WORD_ZHONG),
		this.thirteen_arr.push(CardID.CARD_WORD_FA),
		this.thirteen_arr.push(CardID.CARD_WORD_BAI)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.IsHu = function(t, e, i) {
		if (!this.IsAllExist(t)) return ! 1;
		if (!this.CheckDoubleNum(t)) return ! 1;
		for (var s = 0; s < CardID.CARD_COUNT; s++) 1 == t[s] ? i.push(HuCardMask.HU_MASK_SINGLE, s, 0, 0) : 2 == t[s] && (i.push(HuCardMask.HU_MASK_SINGLE, s, 0, 0), i.push(HuCardMask.HU_MASK_SINGLE, s, 0, 0));
		return ! 0
	},
	s.IsAllExist = function(t) {
		for (var e = this.thirteen_arr.length,
		i = 0; e > i; i++) {
			var s = this.thirteen_arr[i];
			if (t[s] > 2) return ! 1;
			if (1 != t[s] && t[s] <= 0) {
				if (! (t[CardID.CARD_KING] > 0)) return ! 1;
				t[s] = 1,
				t[CardID.CARD_KING] -= 1
			}
		}
		return ! 0
	},
	s.CheckDoubleNum = function(t) {
		for (var e = 0,
		i = 0; i < CardID.CARD_COUNT; i++) t[i] > 1 && (e += 1);
		if (e > 1) return ! 1;
		if (0 >= e) {
			if (! (t[CardID.CARD_KING] > 0)) return ! 1;
			t[CardID.CARD_WAN1] += 1
		}
		return ! 0
	},
	e
} (DoubleHuWithKing);
egret.registerClass(ThirteenOneWithKing, "ThirteenOneWithKing");
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
egret.registerClass(KingOption, "KingOption");
var JSSDK = function(t) {
	function e() {
		t.apply(this, arguments),
		this.CLASS_NAME = "JSSDK",
		this.param = "",
		this.wxshareinfo = [],
		this.bHasBeginRecord = !1,
		this.bHasDownLoad = !1
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return e.getInstance = function() {
		return null == e.wxConfig && (e.wxConfig = new e),
		e.wxConfig
	},
	s.init = function() {
		this.onLoadWeiXinConfig(RES.getRes("wxconfig_json"))
	},
	s.changeDescShare = function(t) {
		this.onLoadWeiXinConfig(RES.getRes("wxconfig_json"), t)
	},
	s.onLoadWeiXinConfig = function(t, e) {
		this.wxshareinfo = t,
		this.title = t.title,
		this.desc = e || t.descNomal;
		var i = window.location.href;
		this.link = i.substring(0, i.indexOf("?")),
		this.imgUrl = t.imgUrl,
		this.url = t.jsonphp + encodeURIComponent(i),
		this.getSignPackage()
	},
	s.getSignPackage = function() {
		var t = this,
		e = new egret.URLLoader,
		i = new egret.URLRequest(this.url);
		e.load(i),
		i.method = egret.URLRequestMethod.GET,
		e.addEventListener(egret.Event.COMPLETE,
		function(e) {
			t.signPackage = JSON.parse(e.target.data),
			t.getWeiXinConfig();
			var i = t;
			wx.ready(function() {
				i.shareInfo()
			})
		},
		this)
	},
	s.getWeiXinConfig = function() {
		var t = new BodyConfig;
		t.debug = !1,
		t.appId = this.signPackage.appId,
		t.timestamp = this.signPackage.timestamp,
		t.nonceStr = this.signPackage.nonceStr,
		t.signature = this.signPackage.signature,
		t.jsApiList = ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"],
		wx.config(t);
		var e = this;
		wx.ready(function() {
			e.getWeiXinShareTimeline(),
			e.getWeiXinShareAppMessage(),
			e.getWeiXinShareQQ(),
			e.getWeiXinShareWeiBo()
		})
	},
	s.WWshareInfo = function(t) {
		this.desc = t,
		this.getWeiXinShareTimeline(),
		this.getWeiXinShareAppMessage(),
		this.getWeiXinShareQQ(),
		this.getWeiXinShareWeiBo()
	},
	s.setShareparam = function(t) {
		this.param = t
	},
	s.shareInfo = function() {
		this.getWeiXinShareTimeline(),
		this.getWeiXinShareAppMessage(),
		this.getWeiXinShareQQ(),
		this.getWeiXinShareWeiBo()
	},
	s.getWeiXinShareTimeline = function() {
		var t = this,
		e = this.sharelinkset(),
		i = new BodyMenuShareTimeline;
		i.title = this.desc,
		i.link = e.link,
		i.imgUrl = this.imgUrl,
		i.trigger = function() {
			Net.getInstent().requestAction(5)
		},
		i.success = function() {
			t.getsharecount(e.scount)
		},
		i.cancel = function() {},
		i.fail = function(t) {},
		wx.onMenuShareTimeline(i)
	},
	s.getWeiXinShareAppMessage = function() {
		var t = this,
		e = this.sharelinkset(),
		i = new BodyMenuShareAppMessage;
		i.title = this.title,
		i.desc = this.desc,
		i.link = e.link,
		i.imgUrl = this.imgUrl,
		i.trigger = function() {
			Net.getInstent().requestAction(5)
		},
		i.success = function() {
			t.getsharecount(e.scount)
		},
		i.cancel = function() {},
		i.fail = function(t) {},
		wx.onMenuShareAppMessage(i)
	},
	s.getWeiXinShareQQ = function() {
		var t = this,
		e = this.sharelinkset(),
		i = new BodyMenuShareQQ;
		i.title = this.title,
		i.desc = this.desc,
		i.link = e.link,
		i.imgUrl = this.imgUrl,
		i.trigger = function() {
			Net.getInstent().requestAction(5)
		},
		i.complete = function(t) {},
		i.success = function() {
			t.getsharecount(e.scount)
		},
		i.cancel = function() {},
		i.fail = function(t) {},
		wx.onMenuShareQQ(i)
	},
	s.getWeiXinShareWeiBo = function() {
		var t = this,
		e = this.sharelinkset(),
		i = new BodyMenuShareWeibo;
		i.title = this.title,
		i.desc = this.desc,
		i.link = e.link,
		i.imgUrl = this.imgUrl,
		i.trigger = function() {
			Net.getInstent().requestAction(5)
		},
		i.complete = function(t) {},
		i.success = function() {
			t.getsharecount(e.scount)
		},
		i.cancel = function() {},
		i.fail = function(t) {},
		wx.onMenuShareWeibo(i)
	},
	s.sharelinkset = function() {
		var t, e = window.GetRequest(),
		i = String(e.scount),
		s = "";
		s = this.link,
		"" != this.param && (s += s.indexOf("?") <= 0 ? "?": "&", s += this.param),
		s += s.indexOf("?") <= 0 ? "?": "&",
		t = i && "undefined" != i ? "1" == i ? 2 : 3 : 1,
		s = s + "scount=" + t;
		var n = {
			link: s,
			scount: i.toString()
		};
		return n
	},
	s.getsharecount = function(t) {
		"1" == t ? Net.getInstent().requestAction(6) : "2" == t ? Net.getInstent().requestAction(7) : "3" == t && Net.getInstent().requestAction(8)
	},
	s.WWscanQRCode = function() {
		alert("scan"),
		wx.scanQRCode({
			needResult: 1,
			scanType: ["qrCode", "barCode"],
			success: function(t) {
				t.resultStr;
				alert(t.resultStr)
			}
		})
	},
	s.recordBegin = function() {
		this.bHasBeginRecord = !0;
		var t = this;
		wx.onVoiceRecordEnd({
			success: function(e) {
				t.bHasBeginRecord = !1,
				t.playVoice(e.localId)
			}
		}),
		wx.startRecord({})
	},
	s.recordEnd = function() {
		if (this.bHasBeginRecord) {
			this.bHasBeginRecord = !1;
			var t = this;
			wx.stopRecord({
				success: function(e) {
					t.playVoice(e.localId)
				}
			})
		}
	},
	s.playVoice = function(t) {
		wx.playVoice({
			localId: t
		}),
		this.uploadVoice(t)
	},
	s.uploadVoice = function(t) {
		wx.uploadVoice({
			localId: t,
			isShowProgressTips: 1,
			success: function(t) {
				var e = t.serverId;
				alert("上传语音成功：返回idServer = " + e)
			}
		})
	},
	s.downloadVoice = function(t) {
		wx.downloadVoice({
			serverId: t,
			isShowProgressTips: 1,
			success: function(t) {
				alert("下载语音返回后播放"),
				wx.playVoice({
					localId: t.localId
				})
			}
		})
	},
	s.getPics = function() {
		wx.chooseImage({
			count: 1,
			sizeType: ["compressed"],
			sourceType: ["album", "camera"],
			success: function(t) {}
		})
	},
	e.wxConfig = null,
	e
} (egret.EventDispatcher);
egret.registerClass(JSSDK, "JSSDK");
var Net = function(t) {
	function e() {
		t.call(this),
		this.NickName = "",
		this.logicservlet = "/game/logicservlet?"
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return e.getInstent = function() {
		return null == e.instent && (e.instent = new e),
		e.instent
	},
	s.requestUrl = function(t) {
		NetHttp.doGetRequest(t, "", this.onComplete,
		function() {},
		this)
	},
	s.onComplete = function(t) {},
	s.requestAction = function(t) {
		var i, s;
		if ( - 1 == e.platform) {
			var n = navigator.userAgent.toString(),
			r = n.match(/MicroMessenger/i);
			"MicroMessenger" == r ? e.platform = 3 : e.platform = 4
		}
		switch (e.platform) {
		case 1:
			s = 1;
		case 2:
			s = 1;
		case 3:
			s = 2;
		case 4:
			s = 3
		}
		i = e.s_serverHost_ip + e.s_serverHost_port + this.logicservlet + e.URL_ACTION + e.ACTION_GAMEEVENT_REG + e.URL_EVENT_ADDR + s.toString() + e.URL_LOGIN_ACC + this.NickName + e.URL_GAME_ID + e.GAME_ID + e.URL_EVENT_MASK,
		i += t.toString(),
		this.requestUrl(i),
		t >= 6 && 8 >= t && setTimeout(function() {},
		2e3)
	},
	e.s_serverHost_ip = "http://203.195.217.251",
	e.s_serverHost_port = ":8080",
	e.ACTION_GAMEEVENT_REG = 4,
	e.GAME_ID = "2005",
	e.URL_ACTION = "action=",
	e.URL_EVENT_ADDR = "&eventaddr=",
	e.URL_LOGIN_ACC = "&loginacc=",
	e.URL_GAME_ID = "&gameid=",
	e.URL_EVENT_MASK = "&eventmask=",
	e.platform = -1,
	e.instent = null,
	e
} (egret.DisplayObjectContainer);
egret.registerClass(Net, "Net");
var NetHttp = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.doPostRequest = function(t, e, i, s, n) {
		var r = new egret.URLLoader;
		r.addEventListener(egret.Event.COMPLETE, i, n),
		s && r.addEventListener(egret.IOErrorEvent.IO_ERROR, s, n);
		var a = new egret.URLRequest(t);
		a.method = egret.URLRequestMethod.POST,
		a.data = new egret.URLVariables(e),
		r.load(a)
	},
	t.doGetRequest = function(t, e, i, s, n) {
		var r = new egret.URLLoader;
		r.dataFormat = egret.URLLoaderDataFormat.TEXT,
		r.addEventListener(egret.Event.COMPLETE, i, n),
		s && r.addEventListener(egret.IOErrorEvent.IO_ERROR, s, n);
		var a = new egret.URLRequest(t);
		a.method = egret.URLRequestMethod.GET,
		a.data = new egret.URLVariables(e),
		r.load(a)
	},
	t
} ();
egret.registerClass(NetHttp, "NetHttp");
var Main = function(t) {
	function e() {
		var i = this;
		t.call(this),
		window.history.pushState({
			title: document.title,
			url: ""
		},
		document.title, ""),
		egret.setTimeout(function() {
			window.addEventListener("popstate", i.onPushBack, !0),
			window.addEventListener("onbeforeunload", i.onPushBack, !0)
		},
		this, 1e3),
		GlobalData.g_main = this,
		e.inst = this,
		e.dataGame = new DataDeskGame,
		this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onPushBack = function(t) {
		var e = confirm("你真的要离开我吗？");
		0 == e ? window.history.pushState({
			title: document.title,
			url: ""
		},
		document.title, "") : "undefined" == window.WeixinJSBridge || null == window.WeixinJSBridge ? window.location.href = "about:blank": window.WeixinJSBridge.call("closeWindow")
	},
	s.onAddToStage = function(t) {
		this.setStageSize(),
		this.loadResLoading()
	},
	s.setStageSize = function() {
		this.stage.setContentSize(DataGlobal.wStage, DataGlobal.hStage)
	},
	s.loadResLoading = function() {
		var t = CompLoading.getInst();
		t.registerLoadedCall(t.GroupsName.RES_LOADING, this.loadResIndex, this)
	},
	s.connectSocket = function() {
		var t = new SessionChannel;
		t.OpenChannel(GlobalData.server_url, this.login, this),
		ShareMgr.getInstance().g_channel = t
	},
	s.login = function() {
		DataInteract.getInst().loginBegin(this.showUserInfo, this)
	},
	s.showUserInfo = function() {
		e.indexCtrl && e.indexCtrl.refershInfo()
	},
	s.loadResIndex = function() {
		this.connectSocket();
		var t = CompLoading.getInst();
		t.loadGroupWithCall(t.GroupsName.RES_INDEX, this.showSceneIndex, this, this)
	},
	s.showSceneIndex = function() {
		if (!e.indexCtrl) {
			var t = new SceneIndex;
			t.addEventListener(DataGlobal.Evts.CREATE_ROOM, this.createRoomJust, this),
			e.indexCtrl = t
		}
		this.addChild(e.indexCtrl);
		var i = new btns.BtnRoundRect("测 试");
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.showPartTest, this),
		utils.setProps(i, {
			x: this.stage.stageWidth - 30,
			y: this.stage.stageHeight - 30
		},
		[1, 1]),
		btns.initFloatBtn(i),
		this.addChild(i)
	},
	s.showSceneGame = function() {
		if (!e.gameCtrl) {
			var t = new SceneGame;
			t.addEventListener(DataGlobal.Evts.BACK_HOTEL_FROM_ROOM, this.backHotelFromRoom, this),
			e.gameCtrl = t
		}
		e.gameCtrl.addSelf(this)
	},
	s.createRoomJust = function() {
		this.showSceneGame(),
		e.gameCtrl.createdRoomJust()
	},
	s.backHotelFromRoom = function() {
		this.showSceneIndex()
	},
	s.showPartTest = function() {
		this.removeChildren(),
		this.panelTestBtns || (this.panelTestBtns = new PanelTestBtns),
		this.addChild(this.panelTestBtns)
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(Main, "Main");
var MsgAction; !
function(t) {
	t[t.PROTO_BEGIN = 0] = "PROTO_BEGIN",
	t[t.ON_CHANNEL_SESSION_CLOSE = 1] = "ON_CHANNEL_SESSION_CLOSE",
	t[t.ON_COM_ERROR_PROTO_SC = 2] = "ON_COM_ERROR_PROTO_SC",
	t[t.ON_HAND_OUT_ONE_CARD_SC = 3] = "ON_HAND_OUT_ONE_CARD_SC",
	t[t.ON_HAND_OUT_MUL_CARD_SC = 4] = "ON_HAND_OUT_MUL_CARD_SC",
	t[t.ON_HAND_OUT_HU_INFO_SC = 5] = "ON_HAND_OUT_HU_INFO_SC",
	t[t.ON_COM_NOTIFY_PROTO_SC = 6] = "ON_COM_NOTIFY_PROTO_SC",
	t[t.ON_DISMISS_HOUSE_SC = 7] = "ON_DISMISS_HOUSE_SC",
	t[t.ON_COM_PROTO_RESP_CS = 10] = "ON_COM_PROTO_RESP_CS",
	t[t.ON_WEIXIN_ACCESS_TOKEN_REQ_CS = 51] = "ON_WEIXIN_ACCESS_TOKEN_REQ_CS",
	t[t.ON_WEIXIN_ACCESS_TOKEN_RESP_SC = 52] = "ON_WEIXIN_ACCESS_TOKEN_RESP_SC",
	t[t.ON_WEIXIN_USERINFO_REQ_CS = 53] = "ON_WEIXIN_USERINFO_REQ_CS",
	t[t.ON_WEIXIN_USERINFO_RESP_SC = 54] = "ON_WEIXIN_USERINFO_RESP_SC",
	t[t.ON_OPENING_HOUSEINFO_REQ_CS = 101] = "ON_OPENING_HOUSEINFO_REQ_CS",
	t[t.ON_OPENING_HOUSEINFO_RESP_SC = 102] = "ON_OPENING_HOUSEINFO_RESP_SC",
	t[t.ON_OPEN_HOUSE_REQ_CS = 103] = "ON_OPEN_HOUSE_REQ_CS",
	t[t.ON_OPEN_HOUSE_RESP_SC = 104] = "ON_OPEN_HOUSE_RESP_SC",
	t[t.ON_CLOSE_HOUSE_REQ_CS = 105] = "ON_CLOSE_HOUSE_REQ_CS",
	t[t.ON_CLOSE_HOUSE_RESP_SC = 106] = "ON_CLOSE_HOUSE_RESP_SC",
	t[t.ON_SIGN_CLOSE_HOUSE_REQ_CS = 107] = "ON_SIGN_CLOSE_HOUSE_REQ_CS",
	t[t.ON_SIGN_CLOSE_HOUSE_RESP_SC = 108] = "ON_SIGN_CLOSE_HOUSE_RESP_SC",
	t[t.ON_ANSWER_SIGN_CLOSE_HOUSE_REQ_CS = 109] = "ON_ANSWER_SIGN_CLOSE_HOUSE_REQ_CS",
	t[t.ON_ANSWER_SIGN_CLOSE_HOUSE_RESP_SC = 110] = "ON_ANSWER_SIGN_CLOSE_HOUSE_RESP_SC",
	t[t.ON_JOIN_HOUSE_REQ_CS = 111] = "ON_JOIN_HOUSE_REQ_CS",
	t[t.ON_JOIN_HOUSE_RESP_SC = 112] = "ON_JOIN_HOUSE_RESP_SC",
	t[t.ON_QUIT_HOUSE_REQ_CS = 113] = "ON_QUIT_HOUSE_REQ_CS",
	t[t.ON_QUIT_HOUSE_RESP_SC = 114] = "ON_QUIT_HOUSE_RESP_SC",
	t[t.ON_VOTE_KING_REQ_CS = 151] = "ON_VOTE_KING_REQ_CS",
	t[t.ON_VOTE_KING_RESP_SC = 152] = "ON_VOTE_KING_RESP_SC",
	t[t.ON_DELIVER_CARD_REQ_CS = 153] = "ON_DELIVER_CARD_REQ_CS",
	t[t.ON_DELIVER_CARD_RESP_SC = 154] = "ON_DELIVER_CARD_RESP_SC",
	t[t.ON_OUTPUT_CARD_REQ_CS = 161] = "ON_OUTPUT_CARD_REQ_CS",
	t[t.ON_OUTPUT_CARD_RESP_SC = 162] = "ON_OUTPUT_CARD_RESP_SC",
	t[t.ON_PLAY_CIRCLE_ACTION_NONE_CS = 163] = "ON_PLAY_CIRCLE_ACTION_NONE_CS",
	t[t.ON_PLAY_CIRCLE_ACTION_NONE_SC = 164] = "ON_PLAY_CIRCLE_ACTION_NONE_SC",
	t[t.ON_PLAY_CIRCLE_ACTION_PASS_CS = 165] = "ON_PLAY_CIRCLE_ACTION_PASS_CS",
	t[t.ON_PLAY_CIRCLE_ACTION_PASS_SC = 166] = "ON_PLAY_CIRCLE_ACTION_PASS_SC",
	t[t.ON_PLAY_CIRCLE_ACTION_PENG_CS = 167] = "ON_PLAY_CIRCLE_ACTION_PENG_CS",
	t[t.ON_PLAY_CIRCLE_ACTION_PENG_SC = 168] = "ON_PLAY_CIRCLE_ACTION_PENG_SC",
	t[t.ON_PLAY_CIRCLE_ACTION_DIAN_GANG_CS = 169] = "ON_PLAY_CIRCLE_ACTION_DIAN_GANG_CS",
	t[t.ON_PLAY_CIRCLE_ACTION_DIAN_GANG_SC = 170] = "ON_PLAY_CIRCLE_ACTION_DIAN_GANG_SC",
	t[t.ON_PLAY_CIRCLE_ACTION_AN_GANG_CS = 171] = "ON_PLAY_CIRCLE_ACTION_AN_GANG_CS",
	t[t.ON_PLAY_CIRCLE_ACTION_AN_GANG_SC = 172] = "ON_PLAY_CIRCLE_ACTION_AN_GANG_SC",
	t[t.ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_CS = 173] = "ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_CS",
	t[t.ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_SC = 174] = "ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_SC",
	t[t.ON_HU_CARD_REQ_CS = 175] = "ON_HU_CARD_REQ_CS",
	t[t.ON_HU_CARD_RESP_SC = 176] = "ON_HU_CARD_RESP_SC",
	t[t.ON_PLAY_AGAIN_REQ_CS = 177] = "ON_PLAY_AGAIN_REQ_CS",
	t[t.ON_PLAY_AGAIN_RESP_SC = 178] = "ON_PLAY_AGAIN_RESP_SC",
	t[t.ON_TEST_CONFIG_MY_CARDS_CS = 701] = "ON_TEST_CONFIG_MY_CARDS_CS",
	t[t.ON_TEST_CONFIG_MY_CARDS_SC = 702] = "ON_TEST_CONFIG_MY_CARDS_SC",
	t[t.ON_TEST_CONFIG_LAST_CARDS_CS = 703] = "ON_TEST_CONFIG_LAST_CARDS_CS",
	t[t.ON_TEST_CONFIG_LAST_CARDS_SC = 704] = "ON_TEST_CONFIG_LAST_CARDS_SC",
	t[t.PROTO_END = 705] = "PROTO_END"
} (MsgAction || (MsgAction = {}));
var MsgDispatcher = function() {
	function t() {
		this.processor_ar = new Array
	}
	var e = (__define, t),
	i = e.prototype;
	return i.Processor = function(t, e) {},
	t
} ();
egret.registerClass(MsgDispatcher, "MsgDispatcher");
var RespProcessor = function() {
	function t(t) {
		this.m_action = t
	}
	var e = (__define, t),
	i = e.prototype;
	return i.Processor = function(t) {},
	i.getAction = function() {
		return this.m_action
	},
	t
} ();
egret.registerClass(RespProcessor, "RespProcessor");
var OnCloseHouseResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_CLOSE_HOUSE_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_CLOSE_HOUSE_RESP_SC),
		i = e.decode(t.buffer);
		DataInteract.getInst().callReturn(this.m_action, i)
	},
	e
} (RespProcessor);
egret.registerClass(OnCloseHouseResp, "OnCloseHouseResp");
var OnDeliverCardResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_DELIVER_CARD_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_DELIVER_CARD_RESP_SC),
		i = e.decode(t.buffer);
		DataInteract.getInst().callReturn(this.m_action, i)
	},
	e
} (RespProcessor);
egret.registerClass(OnDeliverCardResp, "OnDeliverCardResp");
var OnJoinHouseResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_JOIN_HOUSE_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_JOIN_HOUSE_RESP_SC),
		i = e.decode(t.buffer);
		DataInteract.getInst().callReturn(MsgAction.ON_JOIN_HOUSE_RESP_SC, i)
	},
	e
} (RespProcessor);
egret.registerClass(OnJoinHouseResp, "OnJoinHouseResp");
var OnOpenHouseResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_OPEN_HOUSE_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_OPEN_HOUSE_RESP_SC),
		i = e.decode(t.buffer);
		DataInteract.getInst().callReturn(this.m_action, i)
	},
	e
} (RespProcessor);
egret.registerClass(OnOpenHouseResp, "OnOpenHouseResp");
var OnOpeningHouseInfoResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_OPENING_HOUSEINFO_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_OPENING_HOUSEINFO_RESP_SC),
		i = e.decode(t.buffer);
		DataInteract.getInst().callReturn(this.m_action, i)
	},
	e
} (RespProcessor);
egret.registerClass(OnOpeningHouseInfoResp, "OnOpeningHouseInfoResp");
var OnOutputCardResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_OUTPUT_CARD_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_OUTPUT_CARD_RESP_SC),
		i = e.decode(t.buffer);
		DataInteract.getInst().callReturn(this.m_action, i)
	},
	e
} (RespProcessor);
egret.registerClass(OnOutputCardResp, "OnOutputCardResp");
var OnVoteKingResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_VOTE_KING_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_VOTE_KING_RESP_SC),
		i = e.decode(t.buffer);
		return 0 != i.status ? void(0 == i.house_no ? alert(" can not open house") : alert(" have open house")) : void alert("house_no=" + i.house_no)
	},
	e
} (RespProcessor);
egret.registerClass(OnVoteKingResp, "OnVoteKingResp");
var OnWeixinAccessTokenResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_WEIXIN_ACCESS_TOKEN_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_WEIXIN_ACCESS_TOKEN_RESP_SC),
		i = e.decode(t.buffer);
		DataInteract.getInst().callReturn(this.m_action, i)
	},
	e
} (RespProcessor);
egret.registerClass(OnWeixinAccessTokenResp, "OnWeixinAccessTokenResp");
var OnWeixinUserInfoResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_WEIXIN_USERINFO_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_WEIXIN_USERINFO_RESP_SC),
		i = e.decode(t.buffer);
		return 0 != i.status ? void alert(" can not get weixin access_token") : void alert("house_card_num=" + i.house_card_num + " nick=" + i.nick)
	},
	e
} (RespProcessor);
egret.registerClass(OnWeixinUserInfoResp, "OnWeixinUserInfoResp");
var SessionChannel = function(t) {
	function e() {
		t.call(this),
		this.m_sock = null,
		this.connected = !1,
		this.m_sock = new egret.WebSocket,
		this.m_sock.type = egret.WebSocket.TYPE_BINARY,
		this.m_sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnRecvMsg, this),
		this.m_sock.addEventListener(egret.Event.CONNECT, this.OnSocketOpen, this),
		this.m_sock.addEventListener(egret.Event.CLOSE, this.OnSocketClose, this),
		this.m_sock.addEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return e.CreateChannel = function() {
		var t = new e;
		return t
	},
	s.OpenChannel = function(t, e, i) {
		this.m_sock.connectByUrl(t),
		this.m_sock.once(egret.Event.CONNECT, e, i),
		egret.warn("CONNECTING " + t)
	},
	s.OnSocketOpen = function() {
		egret.warn("CONNECTED"),
		this.connected = !0
	},
	s.OnSocketError = function() {
		this.connected = !1
	},
	s.OnSocketClose = function() {
		this.connected = !1
	},
	s.OnRecvMsg = function(t) {
		var e = new egret.ByteArray;
		this.m_sock.readBytes(e);
		var i = ProtoFactory.getInstance().GetClazz(MsgAction.ON_COM_PROTO_RESP_CS),
		s = i.decode(e.buffer),
		i = ProtoFactory.getInstance().GetClazz(s.cid),
		n = i.decode(e.buffer);
		DataInteract.getInst().callReturn(s.cid, n)
	},
	s.SendText = function(t) {
		this.m_sock.writeUTF(t)
	},
	s.SendBinary = function(t) {
		var e = t.toArrayBuffer(),
		i = e.byteLength,
		s = new egret.ByteArray(e);
		i > 0 && (this.m_sock.writeBytes(s), this.m_sock.flush())
	},
	s.CloseChannel = function() {
		this.m_sock.close()
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(SessionChannel, "SessionChannel");
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
egret.registerClass(CardPair, "CardPair");
var CardTypeInfo = function() {
	function t() {
		this.wan_num = 0,
		this.wan_type_mask = 0,
		this.tiao_num = 0,
		this.tiao_type_mask = 0,
		this.tong_num = 0,
		this.tong_type_mask = 0,
		this.feng_num = 0,
		this.feng_type_mask = 0,
		this.arrow_num = 0,
		this.arrow_type_mask = 0
	}
	var e = (__define, t);
	e.prototype;
	return t
} ();
egret.registerClass(CardTypeInfo, "CardTypeInfo");
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
egret.registerClass(CardUtil, "CardUtil");
var HandleCardInfo = function() {
	function t() {
		this.cur_card_id = 0,
		this.handle_succ = !1,
		this.handle_num = 0
	}
	var e = (__define, t),
	i = e.prototype;
	return i.Reset = function() {
		this.cur_card_id = 0,
		this.handle_succ = !1,
		this.handle_num = 0
	},
	t
} ();
egret.registerClass(HandleCardInfo, "HandleCardInfo");
var ProtoFactory = function() {
	function t() {
		this.clazz_arr = null,
		this.clazz_arr = [],
		this.Init()
	}
	var e = (__define, t),
	i = e.prototype;
	return t.getInstance = function() {
		return null == t.instance && (t.instance = new t),
		t.instance
	},
	i.Init = function() {
		var t = RES.getRes("comproto"),
		e = dcodeIO.ProtoBuf.loadProto(t);
		this.clazz_arr[MsgAction.ON_COM_ERROR_PROTO_SC] = e.build("ComErrRespProto"),
		this.clazz_arr[MsgAction.ON_HAND_OUT_ONE_CARD_SC] = e.build("HandOutOneCardProto"),
		this.clazz_arr[MsgAction.ON_HAND_OUT_MUL_CARD_SC] = e.build("HandOutMulCardProto"),
		this.clazz_arr[MsgAction.ON_HAND_OUT_HU_INFO_SC] = e.build("HandOutHuPointProto"),
		this.clazz_arr[MsgAction.ON_COM_NOTIFY_PROTO_SC] = e.build("ComNotifyRespProto"),
		this.clazz_arr[MsgAction.ON_DISMISS_HOUSE_SC] = e.build("ComNotifyRespProto"),
		this.clazz_arr[MsgAction.ON_COM_PROTO_RESP_CS] = e.build("ComRespProto"),
		this.clazz_arr[MsgAction.ON_TEST_CONFIG_MY_CARDS_CS] = e.build("TestConfigMyCards"),
		this.clazz_arr[MsgAction.ON_TEST_CONFIG_LAST_CARDS_CS] = e.build("TestConfigMyCards");
		var t = RES.getRes("login"),
		e = dcodeIO.ProtoBuf.loadProto(t);
		this.clazz_arr[MsgAction.ON_WEIXIN_ACCESS_TOKEN_REQ_CS] = e.build("WeixinAccessTokenReq"),
		this.clazz_arr[MsgAction.ON_WEIXIN_ACCESS_TOKEN_RESP_SC] = e.build("WeixinAccessTokenResp"),
		this.clazz_arr[MsgAction.ON_WEIXIN_USERINFO_REQ_CS] = e.build("WeixinUserInfoReq"),
		this.clazz_arr[MsgAction.ON_WEIXIN_USERINFO_RESP_SC] = e.build("WeixinUserInfoResp");
		var t = RES.getRes("house_logic"),
		e = dcodeIO.ProtoBuf.loadProto(t);
		this.clazz_arr[MsgAction.ON_OPENING_HOUSEINFO_REQ_CS] = e.build("OpeningHouseInfoReq"),
		this.clazz_arr[MsgAction.ON_OPENING_HOUSEINFO_RESP_SC] = e.build("OpeningHouseInfoResp"),
		this.clazz_arr[MsgAction.ON_OPEN_HOUSE_REQ_CS] = e.build("OpenHouseReq"),
		this.clazz_arr[MsgAction.ON_OPEN_HOUSE_RESP_SC] = e.build("OpenHouseResp"),
		this.clazz_arr[MsgAction.ON_CLOSE_HOUSE_REQ_CS] = e.build("CloseHouseReq"),
		this.clazz_arr[MsgAction.ON_CLOSE_HOUSE_RESP_SC] = e.build("CloseHouseResp"),
		this.clazz_arr[MsgAction.ON_SIGN_CLOSE_HOUSE_REQ_CS] = e.build("SignCloseHouseReq"),
		this.clazz_arr[MsgAction.ON_SIGN_CLOSE_HOUSE_RESP_SC] = e.build("SignCloseHouseResp"),
		this.clazz_arr[MsgAction.ON_ANSWER_SIGN_CLOSE_HOUSE_REQ_CS] = e.build("AnswerSignCloseHouseReq"),
		this.clazz_arr[MsgAction.ON_ANSWER_SIGN_CLOSE_HOUSE_RESP_SC] = e.build("AnswerSignCloseHouseResp"),
		this.clazz_arr[MsgAction.ON_JOIN_HOUSE_REQ_CS] = e.build("JoinHouseReq"),
		this.clazz_arr[MsgAction.ON_JOIN_HOUSE_RESP_SC] = e.build("JoinHouseResp"),
		this.clazz_arr[MsgAction.ON_QUIT_HOUSE_REQ_CS] = e.build("QuitHouseReq"),
		this.clazz_arr[MsgAction.ON_QUIT_HOUSE_RESP_SC] = e.build("QuitHouseResp");
		var t = RES.getRes("play_logic"),
		e = dcodeIO.ProtoBuf.loadProto(t);
		this.clazz_arr[MsgAction.ON_VOTE_KING_REQ_CS] = e.build("OnVoteKingReq"),
		this.clazz_arr[MsgAction.ON_VOTE_KING_RESP_SC] = e.build("OnVoteKingResp"),
		this.clazz_arr[MsgAction.ON_DELIVER_CARD_REQ_CS] = e.build("DeliverCardReq"),
		this.clazz_arr[MsgAction.ON_DELIVER_CARD_RESP_SC] = e.build("DeliverCardResp"),
		this.clazz_arr[MsgAction.ON_OUTPUT_CARD_REQ_CS] = e.build("OutputCardReq"),
		this.clazz_arr[MsgAction.ON_OUTPUT_CARD_RESP_SC] = e.build("OutputCardResp"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTION_NONE_CS] = e.build("OutputCardReplyReq"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTION_NONE_SC] = e.build("OutputCardReplyResp"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTION_PASS_CS] = e.build("OutputCardReplyReq"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTION_PASS_SC] = e.build("OutputCardReplyResp"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTION_PENG_CS] = e.build("OutputCardReplyReq"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTION_PENG_SC] = e.build("OutputCardReplyResp"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTION_DIAN_GANG_CS] = e.build("OutputCardReplyReq"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTION_DIAN_GANG_SC] = e.build("OutputCardReplyResp"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTION_AN_GANG_CS] = e.build("OutputCardReplyReq"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTION_AN_GANG_SC] = e.build("OutputCardReplyResp"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_CS] = e.build("OutputCardReplyReq"),
		this.clazz_arr[MsgAction.ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_SC] = e.build("OutputCardReplyResp"),
		this.clazz_arr[MsgAction.ON_HU_CARD_REQ_CS] = e.build("HuCardReq"),
		this.clazz_arr[MsgAction.ON_HU_CARD_RESP_SC] = e.build("HuCardResp"),
		this.clazz_arr[MsgAction.ON_PLAY_AGAIN_REQ_CS] = e.build("PlayAgainReq"),
		this.clazz_arr[MsgAction.ON_PLAY_AGAIN_RESP_SC] = e.build("PlayAgainResp")
	},
	i.newProto = function(t) {
		if (t < MsgAction.PROTO_BEGIN || t >= MsgAction.PROTO_END) return null;
		var e = new this.clazz_arr[t];
		return e
	},
	i.GetClazz = function(t) {
		return t < MsgAction.PROTO_BEGIN || t >= MsgAction.PROTO_END ? null: this.clazz_arr[t]
	},
	t.instance = null,
	t
} ();
egret.registerClass(ProtoFactory, "ProtoFactory");
var CompLoading = function(t) {
	function e() {
		t.call(this),
		this.GroupsName = {
			RES_LOADING: "RES_LOADING",
			RES_INDEX: "RES_INDEX",
			RES_GAME: "RES_GAME",
			RES_OVER_TOTAL: "RES_OVER_TOTAL",
			RES_PRELOAD: "RES_PRELOAD",
			RES_TEMP: "RES_TEMP"
		},
		this.initCallLoaded(),
		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this),
		RES.loadConfig("resource/default.res.json", "resource/")
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.loadResTemp = function(t, e, i, s, n) {
		void 0 === n && (n = [!1, !1, !1]);
		var r = this.GroupsName.RES_TEMP;
		RES.createGroup(r, t, !0),
		this.registerLoadedCall(r, e, i),
		this.addRoundRotate(!0),
		this.addSelf(s),
		this.loadGroup(r)
	},
	s.registerLoadedCall = function(t, e, i) {
		this.arrCallLoaded[t].fun = e,
		this.arrCallLoaded[t].scope = i
	},
	s.loadGroupWithCall = function(t, e, i, s, n) {
		void 0 === n && (n = !0),
		this.addSelf(s),
		this.registerLoadedCall(t, e, i),
		this.addProgressUi(!0),
		this.loadGroup(t)
	},
	s.addSelf = function(t) {
		t.addChild(this)
	},
	s.loadGroup = function(t) {
		void 0 === t && (t = this.GroupsName.RES_LOADING),
		RES.loadGroup(t)
	},
	s.willCall = function(t) {
		var e = this.arrCallLoaded;
		e[t].fun && (e[t].fun.call(e[t].scope), e[t].fun = e[t].scope = null)
	},
	s.onResourceLoadComplete = function(t) {
		var e = t.groupName;
		switch (console.log("加载完成组：", e), e) {
		case this.GroupsName.RES_LOADING:
			JSSDK.getInstance().init(),
			this.addProgressUi(!0),
			document.getElementById("bg_preload").style.display = "none";
			break;
		default:
			this.remSelf()
		}
		this.willCall(e)
	},
	s.onResourceProgress = function(t) {
		var e = t.groupName;
		switch (e) {
		case this.GroupsName.RES_LOADING:
			break;
		case this.GroupsName.RES_INDEX:
		case this.GroupsName.RES_GAME:
		case this.GroupsName.RES_OVER_TOTAL:
			this.progressUI.setProgress(t.itemsLoaded, t.itemsTotal)
		}
	},
	s.registerEvents = function() {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
		RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this),
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this)
	},
	s.onResourceLoadError = function(t) {
		console.warn("Item:" + t.groupName + " - " + t.resItem + " has failed to load"),
		this.onResourceLoadComplete(t)
	},
	s.onConfigComplete = function(t) {
		RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this),
		this.registerEvents(),
		this.loadGroup(this.GroupsName.RES_LOADING)
	},
	s.remSelf = function() {
		this.parent && (this.progressUI && this.progressUI.remSelf(), this.roundRotateLoading && this.roundRotateLoading.remSelf(), this.parent.removeChild(this))
	},
	s.hasInitDataUser = function() {
		this.loadGroup(this.GroupsName.RES_INDEX)
	},
	s.updateProgressBar = function() {},
	s.ctrlShowCompsLoading = function(t) {},
	s.addRoundRotate = function(t) {
		this.roundRotateLoading || (this.roundRotateLoading = new RoundRotateLoading),
		t ? this.roundRotateLoading.addSelf(this) : this.roundRotateLoading.remSelf()
	},
	s.addProgressUi = function(t) {
		this.progressUI || (this.progressUI = new PageProgressLoad),
		t ? this.progressUI.addSelf(this) : this.progressUI.remSelf()
	},
	s.initCallLoaded = function() {
		this.arrCallLoaded = {};
		var t = this.GroupsName;
		for (var e in t) this.arrCallLoaded[t[e]] = {
			fun: null,
			scope: null
		}
	},
	e.getInst = function() {
		return this.inst || (this.inst = new e),
		this.inst
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompLoading, "CompLoading");
var PageProgressLoad = function(t) {
	function e() {
		t.call(this),
		this.initView(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setProgress = function(t, e) {
		var i = Math.floor(t / e * 100);
		utils.setProps(this.tfPercentLoaded, {
			text: "Loading ... " + i + " %"
		},
		[.5, .5])
	},
	s.resetProgressBar = function() {
		this.setProgress(0, 1)
	},
	s.addSelf = function(t) {
		t.addChild(this)
	},
	s.remSelf = function() {
		if (this.parent) {
			this.tmCtrlMcRotate.stop();
			for (var t = 0; t < this.arrMcRotateNum.length; t++) this.arrMcRotateNum[t].stop();
			this.parent.removeChild(this)
		}
	},
	s.onAdd = function() {
		this.resetProgressBar(),
		this.beginLoopRotate()
	},
	s.beginLoopRotate = function() {
		if (this.parent) {
			for (var t = this.arrMcRotateNum,
			e = 0; e < t.length; e++) this.selectOneTimeToStart(t[e], 50 * e);
			this.tmCtrlMcRotate.reset(),
			this.tmCtrlMcRotate.start()
		}
	},
	s.selectOneTimeToStart = function(t, e) {
		egret.setTimeout(function() {
			t.gotoAndPlay("dice_round", -1)
		},
		this, e)
	},
	s.stopOneRotate = function(t) {
		var e = this.tmCtrlMcRotate.currentCount - 1;
		this.arrMcRotateNum[e].gotoAndStop("dice_text_" + e)
	},
	s.compOneRotate = function() {
		egret.setTimeout(this.beginLoopRotate, this, 1500)
	},
	s.initView = function() {
		var t = new egret.Bitmap(RES.getRes("l0")),
		e = new egret.TextField,
		i = new egret.TextField,
		s = new egret.TextField,
		n = new egret.Bitmap(RES.getRes("l2")),
		r = new egret.Timer(500, 4);
		utils.setProps(this, {
			width: DataGlobal.wStage,
			height: DataGlobal.hStage
		}),
		utils.setProps(t, {
			width: this.width,
			height: this.height
		}),
		utils.setProps(e, {
			text: "Loading ... 0 %",
			x: this.width / 2,
			y: 320,
			size: 45,
			bold: !0,
			textColor: 2572606,
			fontFamily: "MicroSoft Yahei",
			height: 65
		},
		[.5, .5]),
		utils.setProps(i, {
			text: "首次加载时间稍长，请耐心等待。（无法进入游戏请刷新）",
			x: this.width / 2,
			y: e.y + 50,
			size: 20,
			bold: !0,
			textColor: 2572606,
			fontFamily: "MicroSoft Yahei"
		},
		[.5, .5]),
		utils.setProps(s, {
			text: "做 最 正 宗 的 广 东 麻 将",
			x: i.x,
			y: i.y + 110,
			size: 35,
			bold: !0,
			textColor: 2572606,
			fontFamily: "MicroSoft Yahei"
		},
		[.5, .5]),
		utils.setProps(n, {
			x: i.x,
			y: s.y + 50
		},
		[.5, 0]),
		r.addEventListener(egret.TimerEvent.TIMER, this.stopOneRotate, this),
		r.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.compOneRotate, this),
		utils.addChildren(this, [t, e, i, s, n]),
		this.tfPercentLoaded = e,
		this.arrMcRotateNum = this.addFourRotateNum(),
		this.tmCtrlMcRotate = r
	},
	s.addFourRotateNum = function() {
		for (var t, e = [], i = 0; 4 > i; i++) t = new egret.MovieClip(new egret.MovieClipDataFactory(RES.getRes("mc_rotate_num_json"), RES.getRes("mc_rotate_num_png")).generateMovieClipData("mc_rotate_num")),
		utils.setProps(t, {
			x: this.width / 2 + 150 * (i - 1.5),
			y: 220,
			scaleX: 1.5,
			scaleY: 1.5
		}),
		this.addChild(t),
		e.push(t);
		return e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PageProgressLoad, "PageProgressLoad");
var RoundRotateLoading = function(t) {
	function e() {
		t.call(this),
		this.initComps()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		egret.Tween.get(this.bmRotate, {
			loop: !0
		}).to({
			rotation: 360
		},
		3e3),
		t.addChild(this)
	},
	s.remSelf = function() {
		this.parent && (this.parent.removeChild(this), egret.Tween.removeTweens(this.bmRotate), this.bmRotate.rotation = 0)
	},
	s.initComps = function() {
		utils.setProps(this, {
			width: DataGlobal.wStage,
			height: DataGlobal.hStage
		});
		var t = new egret.Bitmap(RES.getRes("l1"));
		utils.setProps(t, {
			x: this.width / 2,
			y: this.height / 2
		},
		[.5, .5]),
		this.addChild(t),
		this.bmRotate = t
	},
	e.getInst = function() {
		return this.inst || (this.inst = new e),
		this.inst
	},
	e
} (egret.Sprite);
egret.registerClass(RoundRotateLoading, "RoundRotateLoading");
var AnalyseScore = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t
} ();
egret.registerClass(AnalyseScore, "AnalyseScore");
var DataDeskGame = function() {
	function t() {
		this.readyToPlay = !1,
		this.directionMe = WindDirection.EAST,
		this.arrCardsUser = [],
		this.arrScoreUsers = [0, 0, 0, 0],
		this.arrRoleIdPlayer = [],
		this.arrPossibilityJust = {
			riskBar: [!1, !1, !1, !1],
			explodeBar: [!1, !1, !1, !1]
		},
		this.resetCardsUser(),
		this.resetPossibilityJust()
	}
	var e = (__define, t),
	i = e.prototype;
	return i.setMyDirection = function(t) {
		this.directionMe = t
	},
	i.initialAllUsersCards = function(t, e) {
		for (var i, s = 0; s < this.arrCardsUser.length; s++) i = this.arrCardsUser[s],
		i.used = i.using["double"] = i.using.bar = [],
		s != this.directionMe ? 0 == s ? i.using.common = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : i.using.common = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : (i.using.common = t, 0 != e && i.using.common.push(e))
	},
	i.pushToCard = function(t, e) {
		this.resetPossibilityJust(),
		this.arrCardsUser[t].using.common.push(e)
	},
	i.popUpCard = function(t, e) {
		this.arrCardsUser[t].using.common.splice(this.arrCardsUser[t].using.common.indexOf(e), 1)
	},
	i.computeDoubleCard = function(t, e) {
		var i = this.arrCardsUser[t],
		s = 3 == util_cards.getSumSpecifiedCard(e, i.using.common),
		n = {
			idCard: e,
			bHasRisk: s
		};
		i.using.common.splice(i.using.common.indexOf(e), 2),
		i.using["double"].push(n)
	},
	i.dealBrightBar = function(t, e, i) {
		var s = this.arrCardsUser[t],
		n = {
			idCard: i,
			typeBar: TypeBar.BRIGHT,
			dirUserPointBar: e
		};
		s.using.common.splice(s.using.common.indexOf(i), 3),
		s.using.bar.push(n),
		this.arrPossibilityJust.explodeBar[t] = !0
	},
	i.dealDoubleBar = function(t, e, i) {
		var s = this.arrCardsUser[t],
		n = this.isRiskBar(t, i),
		r = {
			idCard: i,
			typeBar: TypeBar.DOUBLE,
			dirUserPointBar: e
		};
		this.delRiskBarDouble(t, i),
		s.using.common.splice(s.using.common.indexOf(i), 1),
		s.using.bar.push(r),
		this.arrPossibilityJust.riskBar[t] = n
	},
	i.dealDarkBar = function(t, e) {
		var i = this.arrCardsUser[t],
		s = {
			idCard: e,
			typeBar: TypeBar.DARK,
			dirUserPointBar: t
		};
		i.using.common.splice(i.using.common.indexOf(e), 4),
		i.using.bar.push(s)
	},
	i.willComputeScoreBarExplode = function() {
		for (var t = this.arrPossibilityJust.explodeBar,
		e = 0; e < t.length; e++) if (t[e]) return e;
		return - 1
	},
	i.willComputeScoreRobBar = function() {
		for (var t = this.arrPossibilityJust.riskBar,
		e = 0; e < t.length; e++) if (t[e]) return e;
		return - 1
	},
	i.willComputeScoreRiskBar = function() {
		for (var t = this.arrPossibilityJust.riskBar,
		e = 0; e < t.length; e++) if (t[e]) return e;
		return - 1
	},
	i.isRiskBar = function(t, e) {
		for (var i = this.arrCardsUser[t].using["double"], s = 0; s < i.length; s++) if (i[s].idCard == e && i[s].bHasRisk) return ! 0;
		return ! 1
	},
	i.delRiskBarDouble = function(t, e) {
		for (var i = this.arrCardsUser[t].using["double"], s = 0; s < i.length; s++) if (i[s].idCard == e && i[s].bHasRisk) return void i.splice(s, 1)
	},
	i.resetPossibilityJust = function() {
		this.arrPossibilityJust = {
			riskBar: [!1, !1, !1, !1],
			explodeBar: [!1, !1, !1, !1]
		}
	},
	i.resetCardsUser = function() {
		for (var t = 0; 4 > t; t++) {
			var e = {
				used: [],
				using: {
					common: [],
					"double": [],
					bar: []
				}
			};
			this.arrCardsUser.push(e)
		}
	},
	i.newPlayerInto = function(t) {
		var e = t.role_index;
		this.arrRoleIdPlayer[e] = t.role_id
	},
	i.handOutCards = function(t) {},
	i.assignOneCard = function() {},
	i.popOneCard = function() {},
	i.doubleCard = function() {},
	i.dotBar = function() {},
	i.darkBar = function() {},
	i.doubleBar = function() {},
	i.computeFinalScore = function() {},
	t
} ();
egret.registerClass(DataDeskGame, "DataDeskGame");
var DataTransform = function() {
	function t() {}
	var e = (__define, t),
	i = e.prototype;
	return i.transferCardsToListShow = function(t) {
		for (var e, i, s = t.using.bar,
		n = t.using["double"], r = t.using.common, a = [], o = [], h = r.concat(), d = 0; d < s.length; d++) i = s[d],
		e = i.idCard,
		a.push(e, e, e, e),
		i.typeBar == TypeBar.DARK && o.push(e);
		for (var l, c = 0; c < n.length; c++) l = n[c],
		e = l.idCard,
		a.push(e, e, e);
		return {
			arrIdLight: a,
			arrIdDarkBar: o,
			arrIdCommon: h
		}
	},
	i.sortCards = function(t) {
		function e(t, e) {
			return t - e
		}
		t.using.common.sort(e)
	},
	i.WindDirectionToDirection = function(t) {
		var e = t - Main.dataGame.directionMe;
		return e >= 0 ? Direction.DOWN + e: Math.abs(e) - 1
	},
	i.roleIdToWindDirection = function(t) {
		return DataUser.getInst().playerInfo.banker_role_id == t ? 0 : DataUser.getInst().playerInfo.next1_role_id == t ? 1 : DataUser.getInst().playerInfo.next2_role_id == t ? 2 : DataUser.getInst().playerInfo.next3_role_id == t ? 3 : void 0
	},
	t.getInst = function() {
		return this.inst || (this.inst = new t),
		this.inst
	},
	t
} ();
egret.registerClass(DataTransform, "DataTransform");
var DataUser = function() {
	function t() {
		this.infoUser = {
			openId: 0,
			roleId: 0,
			strNick: "昵称",
			nSumRoom: 8,
			nRoomIdPlaying: -1,
			headUrl: "",
			headPic: null,
			access_token: "",
			nGameOrder: 0
		},
		this.playerInfo = {
			play_type: 0,
			banker_role_id: 0,
			banker_nick: "",
			banker_headurl: "",
			banker_gold: 0,
			next1_role_id: 0,
			next1_nick: "",
			next1_headurl: "",
			next1_gold: 0,
			next2_role_id: 0,
			next2_nick: "",
			next2_headurl: "",
			next2_gold: 0,
			next3_role_id: 0,
			next3_nick: "",
			next3_headurl: "",
			next3_gold: 0,
			cur_circle: 0,
			room_desc: ""
		}
	}
	var e = (__define, t),
	i = e.prototype;
	return i.getHeadPic = function() {
		"" != this.infoUser.headUrl ? RES.getResByUrl(this.infoUser.headUrl, this.setHeadPic, this, RES.ResourceItem.TYPE_IMAGE) : this.infoUser.headPic = RES.getRes("temp_1")
	},
	i.setHeadPic = function(t) {
		this.infoUser.headPic = t
	},
	i.setRoomId = function(t) {
		this.infoUser.nRoomIdPlaying = t
	},
	t.getInst = function() {
		return this.inst || (this.inst = new t),
		this.inst
	},
	t
} ();
egret.registerClass(DataUser, "DataUser");
var CardKingBlock = function(t) {
	function e() {
		t.call(this),
		this.initCard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setId = function(t) {
		utils.setProps(this.bmTxId, {
			texture: RES.getRes("c_" + t)
		},
		[.5, .5])
	},
	s.initCard = function() {
		var t = new egret.Bitmap(RES.getRes("c0_19")),
		e = new egret.Bitmap(RES.getRes("c0_1")),
		i = new egret.Bitmap(RES.getRes("c_3")),
		s = new egret.Bitmap(RES.getRes("c0_9"));
		utils.setProps(e, {
			scaleX: .6,
			scaleY: .6,
			x: t.width / 2,
			y: t.height / 2 - 4
		},
		[.5, .5]),
		utils.setProps(i, {
			x: e.x,
			y: e.y,
			scaleX: .6,
			scaleY: .6
		},
		[.5, .5]),
		utils.setProps(s, {
			x: 0,
			y: t.height
		},
		[0, 1]),
		utils.addChildren(this, [t, e, i, s]),
		this.bmTxId = i
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CardKingBlock, "CardKingBlock");
var PanelActionGame = function(t) {
	function e() {
		t.call(this),
		this.initPanel()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showDoubleAction = function() {
		this.addChild(this.boardAction),
		this.boardAction.showDoubleAction()
	},
	s.showBarAction = function() {
		this.addChild(this.boardAction),
		this.boardAction.showBarAction()
	},
	s.showHuAction = function() {
		this.addChild(this.boardAction),
		this.boardAction.showHuAction()
	},
	s.remBoardAction = function() {
		this.boardAction.parent && this.removeChild(this.boardAction)
	},
	s.showTwDouble = function(t) {
		this.twAction("c20_1", t)
	},
	s.showTwBar = function(t) {
		this.twAction("c20_2", t)
	},
	s.showTwHu = function(t) {
		this.twAction("c20_4", t)
	},
	s.twAction = function(t, e) {
		var i = this;
		this.bmTextAction.texture = RES.getRes(t),
		this.posBmTxByDirection(e),
		this.addChild(this.bmTextAction),
		egret.Tween.get(this.bmTextAction, {
			override: !0
		}).set({
			scaleX: 2,
			scaleY: 2
		}).to({
			scaleX: 1,
			scaleY: 1
		},
		700, egret.Ease.bounceOut).wait(600).call(function() {
			egret.Tween.removeTweens(i.bmTextAction),
			i.removeChild(i.bmTextAction),
			i.parent.removeChild(i)
		})
	},
	s.posBmTxByDirection = function(t) {
		var e = {
			x: this.stage.stageWidth / 2,
			y: this.stage.stageHeight / 2
		},
		i = t == Direction.UP ? 200 : 300;
		switch (t) {
		case Direction.LEFT:
			e.x -= i;
			break;
		case Direction.RIGHT:
			e.x += i;
			break;
		case Direction.UP:
			e.y -= i
		}
		utils.setProps(this.bmTextAction, {
			x: e.x,
			y: e.y
		},
		[.5, .5])
	},
	s.actionEvt = function(t) {
		this.dispatchEventWith(t.type)
	},
	s.initPanel = function() {
		var t = new BoardAction,
		e = new egret.Bitmap;
		t.addEventListener(DataGlobal.Evts.ACTION_BAR, this.actionEvt, this),
		t.addEventListener(DataGlobal.Evts.ACTION_DOUBLE, this.actionEvt, this),
		t.addEventListener(DataGlobal.Evts.ACTION_HU, this.actionEvt, this),
		t.addEventListener(DataGlobal.Evts.ACTION_PASS, this.actionEvt, this),
		utils.setProps(t, {
			x: DataGlobal.wStage - 200,
			y: DataGlobal.hStage - 130
		},
		[1, 1]),
		this.boardAction = t,
		this.bmTextAction = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PanelActionGame, "PanelActionGame");
var PanelBtm = function(t) {
	function e() {
		t.call(this),
		this.initLayer()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setSelfWindBottom = function(t) {
		this.directionBar.setSelfWindBottom(t)
	},
	s.whoTurnToPopCard = function(t) {
		this.directionBar.whoTurnToPopCard(t)
	},
	s.initLayer = function() {
		utils.setProps(this, {
			width: DataGlobal.wStage,
			height: DataGlobal.hStage
		});
		var t = new egret.Bitmap(RES.getRes("c4")),
		e = new egret.Bitmap(RES.getRes("c4_1")),
		i = new DirectionBar;
		utils.setProps(t, {
			width: this.width,
			height: this.height
		}),
		utils.setProps(i, {
			x: this.width / 2,
			y: this.height / 2 - 20
		},
		[.5, .5]),
		utils.setProps(e, {
			x: i.x,
			y: i.y
		},
		[.5, .5]),
		utils.addChildren(this, [t, e, i]),
		this.directionBar = i
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PanelBtm, "PanelBtm");
var PanelDesk = function(t) {
	function e() {
		t.call(this),
		this.ghostCard = null,
		this.arrDirectionCards = [],
		this.initPanel(),
		this.clearAllCardsUsing()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshListOneUser = function(t, e, i, s, n) {
		this.arrDirectionCards[t - 1].refreshListCards(e, i, s, n)
	},
	s.pushOneCardToUsed = function(t, e) {
		this.arrDirectionCards[t - 1].pushCardToUsed(t, e)
	},
	s.popOneCardFromUsed = function(t) {
		this.arrDirectionCards[t - 1].popCardFromUsed()
	},
	s.clearAllCardsUsed = function() {
		for (var t = 0; t < this.arrDirectionCards.length; t++) this.arrDirectionCards[t].clearAllCardsUsed()
	},
	s.clearAllCardsUsing = function() {
		for (var t = 0; t < this.arrDirectionCards.length; t++) this.arrDirectionCards[t].refreshListCards([], [], [])
	},
	s.refershGhostCard = function() {
		38 == CardID.CARD_KING ? this.ghostCard.visible = !1 : (this.ghostCard.visible = !0, this.ghostCard.setId(CardID.CARD_KING))
	},
	s.popMyCard = function(t) {},
	s.initPanel = function() {
		var t = new BoardCardsPlayerMine,
		e = new BoardCardsPlayerOthers(Direction.RIGHT),
		i = new BoardCardsPlayerOthers(Direction.UP),
		s = new BoardCardsPlayerOthers(Direction.LEFT),
		n = new CardKingBlock;
		utils.setProps(this, {
			width: DataGlobal.wStage,
			height: DataGlobal.hStage
		}),
		utils.setProps(t, {
			x: (this.width - t.width) / 2 + 40,
			y: this.height - t.height - 10
		}),
		utils.setProps(e, {
			x: this.width - e.width - 120,
			y: (this.height - e.height) / 2 - 30
		}),
		utils.setProps(i, {
			x: (this.width - i.width) / 2,
			y: 30
		}),
		utils.setProps(s, {
			x: 120,
			y: (this.height - s.height) / 2 - 10
		}),
		utils.setProps(n, {
			x: 1.5 * n.width,
			y: 1.5 * n.height,
			visible: !1
		}),
		utils.addChildren(this, [n, t, e, i, s]),
		this.boardPlayerLeft = s,
		this.boardPlayerMine = t,
		this.boardPlayerRight = e,
		this.boardPlayerUp = i,
		this.ghostCard = n,
		this.arrDirectionCards = [t, e, i, s]
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PanelDesk, "PanelDesk");
var PanelTop = function(t) {
	function e() {
		t.call(this),
		this.boardSetting = null,
		this.initPanel()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addBtnsJustIntoRoom = function(t) {
		utils.addChildren(this, [this.bmBtnBackHotel, this.bmBtnInviteFriends]),
		t && utils.addChildren(this, [this.bmBtnCloseRoomByHost])
	},
	s.remBtnsJustIntoRoom = function() {
		utils.remChildren(this, [this.bmBtnBackHotel, this.bmBtnInviteFriends]),
		this.bmBtnCloseRoomByHost.parent && this.parent.removeChild(this.bmBtnCloseRoomByHost),
		this.ctrlShowBtnsPlaying(!0)
	},
	s.showPopVoteCloseRoom = function(t, e, i) {
		if (!this.popVoteCloseRoom) {
			var s = new PopVoteCloseRoom;
			s.addEventListener(DataGlobal.Evts.BACK_GAME, this.backFromPopVoteClose, this),
			this.popVoteCloseRoom = s
		}
		this.popVoteCloseRoom.addSelf(Main.inst, t, e, i),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.ctrlShowBtnsPlaying = function(t) {
		this.bmBtnChat.visible = this.bmBtnSet.visible = this.bmBtnVoice.visible = t
	},
	s.touchSet = function(t) {
		if (!this.boardSetting) {
			var e = new PopSetting;
			e.addEventListener(DataGlobal.Evts.BACK_GAME, this.backGame, this),
			e.addEventListener(DataGlobal.Evts.EXIT_ROOM, this.touchExitRoom, this),
			this.boardSetting = e
		}
		this.boardSetting.addSelf(Main.inst, 1),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.touchExitRoom = function() {
		this.showPopVoteCloseRoom("解散发起人", ["其他玩家1", "其他玩家2", "其他玩家3"], [ResultVote.NOT_VOTE, ResultVote.NOT_VOTE, ResultVote.NOT_VOTE])
	},
	s.touchInviteFriend = function() {
		if (!this.popInviteRoom) {
			var t = new PopInviteRoom;
			t.addEventListener(DataGlobal.Evts.BACK_GAME, this.backGame, this),
			this.popInviteRoom = t
		}
		this.popInviteRoom.addSelf(Main.inst, DataUser.getInst().infoUser.nRoomIdPlaying),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.showPopChat = function(t) {
		if (this.parent.touchChildren = !1, !this.popChat) {
			var e = new PopChat;
			e.addEventListener(DataGlobal.Evts.BACK_GAME, this.backGame, this),
			this.popChat = e
		}
		this.popChat.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.backFromPopVoteClose = function(t) {
		this.parent.touchChildren = !0
	},
	s.touchBackHotel = function() {
		if (!this.popBackHotel) {
			var t = new PopConfirmOneSentence("cp20", "返回大厅时\n你的房间仍会保留哦！");
			t.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.backFromPopBackHotel, this),
			this.popBackHotel = t
		}
		this.popBackHotel.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.backFromPopBackHotel = function(t) {
		t.data.bIsSure ? this.dispatchEventWith(DataGlobal.Evts.BACK_HOTEL_FROM_ROOM) : this.backGame()
	},
	s.showPopCloseRoomByHost = function() {
		if (!this.popCloseRoomByHost) {
			var t = new PopConfirmOneSentence("cp19", "解散房间不扣房卡\n是否确定解散？");
			t.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.backFromPopCloseRoomByHost, this),
			this.popCloseRoomByHost = t
		}
		this.popCloseRoomByHost.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.backFromPopCloseRoomByHost = function(t) {
		t.data.bIsSure ? DataInteract.getInst().ReqCloseRoom(this.resultCloseRoom, this) : this.backGame()
	},
	s.resultCloseRoom = function(t) {
		0 == t.status && (DataUser.getInst().infoUser.nRoomIdPlaying = -1, this.dispatchEventWith(DataGlobal.Evts.CLOSE_ROOM_BY_HOST))
	},
	s.touchVoice = function(t) {
		switch (t.type) {
		case egret.TouchEvent.TOUCH_BEGIN:
			JSSDK.getInstance().recordBegin();
			break;
		case egret.TouchEvent.TOUCH_END:
		case egret.TouchEvent.TOUCH_RELEASE_OUTSIDE:
			JSSDK.getInstance().recordEnd()
		}
	},
	s.backGame = function() {
		utils.ctrlChildrenTouch(this.parent, !0)
	},
	s.initPanel = function() {
		var t = new egret.Bitmap(RES.getRes("c5")),
		e = new BarRoom,
		i = new egret.Bitmap(RES.getRes("c6")),
		s = new egret.Bitmap(RES.getRes("c8")),
		n = new egret.Bitmap(RES.getRes("c7")),
		r = new egret.Bitmap(RES.getRes("c15")),
		a = new egret.Bitmap(RES.getRes("c17")),
		o = new egret.Bitmap(RES.getRes("c16"));
		utils.setProps(this, {
			width: DataGlobal.wStage,
			height: DataGlobal.hStage
		}),
		utils.setProps(e, {
			x: 3
		}),
		utils.setProps(i, {
			x: this.width
		},
		[1, 0]),
		utils.setProps(n, {
			x: this.width - .8 * n.width,
			y: 470
		},
		[.5, .5]),
		utils.setProps(s, {
			x: n.x,
			y: n.y - 100
		},
		[.5, .5]),
		utils.setProps(r, {
			x: this.width - 160,
			y: 100,
			width: .8 * r.width,
			height: .8 * r.height
		},
		[.5, .5]),
		utils.setProps(a, {
			x: this.width / 2,
			y: 410,
			width: .8 * a.width,
			height: .8 * a.height
		},
		[.5, .5]),
		utils.setProps(o, {
			x: a.x,
			y: a.height + a.y + 10,
			width: .8 * o.width,
			height: .8 * o.height
		},
		[.5, .5]),
		btns.initFloatBtn(i),
		btns.initScaleBtn(n),
		btns.initScaleBtn(s),
		btns.initScaleBtn(r),
		btns.initScaleBtn(a),
		btns.initScaleBtn(o),
		n.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showPopChat, this),
		i.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchSet, this),
		s.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchVoice, this),
		s.addEventListener(egret.TouchEvent.TOUCH_END, this.touchVoice, this),
		r.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBackHotel, this),
		a.addEventListener(egret.TouchEvent.TOUCH_END, this.touchInviteFriend, this),
		o.addEventListener(egret.TouchEvent.TOUCH_END, this.showPopCloseRoomByHost, this),
		utils.addChildren(this, [t, e, i, s, n]),
		this.bmBtnChat = n,
		this.bmBtnSet = i,
		this.bmBtnVoice = s,
		this.barRoom = e,
		this.bmBtnBackHotel = r,
		this.bmBtnInviteFriends = a,
		this.bmBtnCloseRoomByHost = o
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PanelTop, "PanelTop");
var BoardAction = function(t) {
	function e() {
		t.call(this),
		this.initBoard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showDoubleAction = function() {
		this.showBtnAction(this.bmBtnDouble)
	},
	s.showBarAction = function() {
		this.showBtnAction(this.bmBtnBar)
	},
	s.showHuAction = function() {
		this.showBtnAction(this.bmBtnHu)
	},
	s.touchBtn = function(t) {
		var e = "";
		switch (t.target) {
		case this.bmBtnPass:
			e = DataGlobal.Evts.ACTION_PASS;
			break;
		case this.bmBtnBar:
			e = DataGlobal.Evts.ACTION_BAR;
			break;
		case this.bmBtnHu:
			e = DataGlobal.Evts.ACTION_HU;
			break;
		case this.bmBtnDouble:
			e = DataGlobal.Evts.ACTION_DOUBLE
		}
		this.parent.removeChild(this),
		this.dispatchEventWith(e)
	},
	s.showBtnAction = function(t) {
		for (var e = [this.bmBtnBar, this.bmBtnHu, this.bmBtnDouble], i = 0; i < e.length; i++) e[i].visible = t == e[i]
	},
	s.initBoard = function() {
		var t = new egret.Bitmap(RES.getRes("c18")),
		e = new egret.Bitmap(RES.getRes("c19_0")),
		i = new egret.Bitmap(RES.getRes("c19_1")),
		s = new egret.Bitmap(RES.getRes("c19_2")),
		n = new egret.Bitmap(RES.getRes("c19_4"));
		utils.setProps(t, {
			width: 370
		}),
		utils.setProps(e, {
			x: t.width - e.width / 2 - 60,
			y: t.height / 2
		},
		[.5, .5]),
		utils.setProps(i, {
			x: 60 + i.width / 2,
			y: e.y,
			visible: !1
		},
		[.5, .5]),
		utils.setProps(s, {
			x: 60 + s.width / 2,
			y: i.y,
			visible: !1
		},
		[.5, .5]),
		utils.setProps(n, {
			x: 60 + n.width / 2,
			y: i.y,
			visible: !1
		},
		[.5, .5]),
		btns.initScaleBtn(e),
		btns.initScaleBtn(i),
		btns.initScaleBtn(s),
		btns.initScaleBtn(n),
		e.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtn, this),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtn, this),
		s.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtn, this),
		n.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtn, this),
		utils.addChildren(this, [t, e, i, s, n]),
		this.bmBtnPass = e,
		this.bmBtnBar = s,
		this.bmBtnDouble = i,
		this.bmBtnHu = n
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardAction, "BoardAction");
var DirectionBar = function(t) {
	function e() {
		t.call(this),
		this.nTimeTotal = 15,
		this.bmtTime = null,
		this.initBar()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.whoTurnToPopCard = function(t) {
		this.setDirection(t),
		this.setNumText(this.nTimeTotal),
		this.ctrlTmLine(!0)
	},
	s.setSelfWindBottom = function(t) {
		this.compLightDirect.rotation = 90 * t
	},
	s.ctrlTmLine = function(t) {
		t ? this.tmDeadline.start() : this.tmDeadline.stop()
	},
	s.countTime = function() {
		"00" == this.bmtTime.text ? this.ctrlTmLine(!1) : this.setNumText(parseInt(this.bmtTime.text) - 1)
	},
	s.setNumText = function(t) {
		utils.setProps(this.bmtTime, {
			text: 10 > t ? "0" + t: "" + t
		},
		[.5, .5]),
		t == this.nTimeTotal ? this.bmtTime.font = RES.getRes("bluefnt_fnt") : 5 == t && (this.bmtTime.font = RES.getRes("redfnt_fnt"))
	},
	s.setDirection = function(t) {
		this.compLightDirect.setDirection(t)
	},
	s.initBar = function() {
		var t = new egret.Bitmap(RES.getRes("c2_5"));
		this.addChild(t),
		this.width = t.width,
		this.height = t.height,
		this.bmtTime = new egret.BitmapText,
		utils.setProps(this.bmtTime, {
			font: RES.getRes("bluefnt_fnt"),
			x: this.width / 2,
			y: this.height / 2
		},
		[.5, .5]),
		this.addChild(this.bmtTime),
		this.compLightDirect = new CompLightDirection(t.width, t.height),
		utils.setProps(this.compLightDirect, {
			x: this.compLightDirect.width / 2,
			y: this.compLightDirect.height / 2
		},
		[.5, .5]),
		this.addChild(this.compLightDirect);
		var e = new egret.Timer(1e3, 0);
		e.addEventListener(egret.TimerEvent.TIMER, this.countTime, this),
		this.tmDeadline = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(DirectionBar, "DirectionBar");
var CompLightDirection = function(t) {
	function e(e, i) {
		t.call(this),
		this.directionArr = [],
		this.initComp(e, i)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setDirection = function(t) {
		for (var e = 0; 4 > e; e++) this.directionArr[e].visible = t == e
	},
	s.initComp = function(t, e) {
		var i = new egret.Bitmap(RES.getRes("c2_6"));
		i.x = (t - i.width) / 2,
		i.y = (e - i.height) / 2,
		this.addChild(i);
		for (var s = 1; 5 > s; s++) {
			var n = new egret.Bitmap(RES.getRes("c2_" + s));
			this.addChild(n),
			n.x = i.x - 2,
			n.y = i.y - 2,
			n.visible = !1,
			this.directionArr.push(n)
		}
		this.directionArr[0].x = 13,
		this.directionArr[0].y = 118,
		this.directionArr[0].anchorOffsetY = this.directionArr[0].height,
		this.directionArr[1].x = 116,
		this.directionArr[1].y = 15,
		this.directionArr[1].anchorOffsetX = this.directionArr[1].width,
		this.directionArr[2].x = 13,
		this.directionArr[2].y = 10,
		this.directionArr[3].x = 8,
		this.directionArr[3].y = 15,
		this.width = t,
		this.height = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompLightDirection, "CompLightDirection");
var BoardCardsPlayerMine = function(t) {
	function e() {
		t.call(this),
		this.initSelf()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshListCards = function(t, e, i, s) {
		this.listCardsUsingMine.refreshListCards(t, e, i, s)
	},
	s.pushCardToUsed = function(t) {
		this.listCardsUsed.pushNewCard(t)
	},
	s.popCardFromUsed = function() {
		this.listCardsUsed.popNewCard()
	},
	s.clearAllCardsUsed = function() {
		this.listCardsUsed.clearAllCardsUsed()
	},
	s.popUpMyCard = function(t) {
		this.dispatchEventWith(DataGlobal.Evts.POP_MY_CARD, !1, {
			idCard: t.data.idCard
		})
	},
	s.initSelf = function() {
		var t = new ListCardsUsed(Direction.DOWN),
		e = new ListCardsUsingMine;
		utils.setProps(this, {
			width: e.width
		}),
		utils.setProps(e, {
			y: t.x + t.height + 30
		}),
		utils.setProps(t, {
			x: (this.width - t.width) / 2
		}),
		e.addEventListener(DataGlobal.Evts.POP_MY_CARD, this.popUpMyCard, this),
		utils.addChildren(this, [t, e]),
		utils.setProps(this, {
			height: e.y + e.height
		}),
		this.listCardsUsed = t,
		this.listCardsUsingMine = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardCardsPlayerMine, "BoardCardsPlayerMine");
var BoardCardsPlayerOthers = function(t) {
	function e(e) {
		t.call(this),
		this.dirFace = e,
		this.initCards()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshListCards = function(t, e, i, s) {
		this.cardsUsing.refreshListCards(t, e, i, s)
	},
	s.pushCardToUsed = function(t) {
		this.cardsUsed.pushNewCard(t)
	},
	s.popCardFromUsed = function() {
		this.cardsUsed.popNewCard()
	},
	s.clearAllCardsUsed = function() {
		this.cardsUsed.clearAllCardsUsed()
	},
	s.initCards = function() {
		var t = new ListCardsUsed(this.dirFace),
		e = new ListCardsUsingOthers(this.dirFace);
		utils.addChildren(this, [t, e]),
		this.cardsUsed = t,
		this.cardsUsing = e,
		this.posCardLists()
	},
	s.posCardLists = function() {
		var t = this.cardsUsed,
		e = this.cardsUsing,
		i = 30;
		switch (this.dirFace) {
		case Direction.UP:
			utils.setProps(t, {
				x: (e.width - t.width) / 2,
				y: e.height + i
			});
			break;
		case Direction.LEFT:
			utils.setProps(t, {
				x: e.x + e.width + i,
				y: (e.height - t.height) / 2
			});
			break;
		case Direction.RIGHT:
			utils.setProps(t, {
				y: (e.height - t.height) / 2
			}),
			utils.setProps(e, {
				x: t.width + i
			}),
			utils.setProps(this, {
				width: e.x + e.width
			})
		}
		switch (this.dirFace) {
		case Direction.UP:
			this.width = e.width;
			break;
		default:
			this.height = e.height
		}
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardCardsPlayerOthers, "BoardCardsPlayerOthers");
var BoardPhotoPlaying = function(t) {
	function e() {
		t.call(this),
		this.initBoard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshInfo = function(t, e, i, s, n, r) {
		var a = this.arrPhotos[t - 1];
		a.setlevelName(e),
		a.setNick(s),
		a.setGold(n),
		a.setPlayerHead(i),
		a.setFlag(r),
		"" == s ? a.visible = !1 : a.visible = !0
	},
	s.showChatEmoji = function(t, e) {
		var i = CachePool.produce(CompChatEmoji);
		i.refreshChat(t, e, this),
		this.posChat(i, t)
	},
	s.showChatText = function(t, e) {
		var i = CachePool.produce(CompChatText);
		i.refreshChat(t, e, this),
		this.posChat(i, t)
	},
	s.showChatVoiceAndPlay = function(t) {
		var e = CachePool.produce(CompChatVoice);
		e.refreshChat(t, this),
		this.posChat(e, t)
	},
	s.posChat = function(t, e) {
		var i, s = this.arrPhotos[e - 1];
		i = e == Direction.DOWN || e == Direction.LEFT ? {
			x: s.x + s.width,
			y: s.y
		}: {
			x: s.x - t.width,
			y: s.y
		},
		utils.setProps(t, {
			x: i.x,
			y: i.y
		})
	},
	s.initBoard = function() {
		for (var t, e = [], i = 0; 4 > i; i++) t = new PhotoPlayerPlaying,
		t.setlevelName(""),
		t.setNick(""),
		t.setGold(0),
		t.setPlayerHead(""),
		t.setFlag(!1),
		e.push(t),
		this.addChild(t);
		var s = DataGlobal.hStage,
		n = DataGlobal.wStage;
		e[0].HorV("h"),
		e[1].HorV("v"),
		e[2].HorV("h"),
		e[3].HorV("v"),
		e[0].setFlag(!0),
		utils.setProps(e[0], {
			x: 0,
			y: s - e[0].height - 10
		}),
		utils.setProps(e[1], {
			x: n - e[1].width - 10,
			y: (s - e[1].height) / 2 - 60
		}),
		utils.setProps(e[2], {
			x: n - 290
		}),
		utils.setProps(e[3], {
			x: 0,
			y: 200
		}),
		this.arrPhotos = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardPhotoPlaying, "BoardPhotoPlaying");
var CompChatEmoji = function(t) {
	function e() {
		t.call(this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshChat = function(t, e, i) {
		utils.setProps(this, {
			visible: !1
		}),
		this.dir = t,
		i.addChild(this),
		RES.getResAsync("cp15_0", this.loadResImg, this)
	},
	s.loadResImg = function(t) {
		var e = 70;
		utils.setProps(this, {
			texture: t,
			visible: !0,
			x: this.dir == Direction.RIGHT || this.dir == Direction.UP ? this.x - e: this.x,
			width: e,
			height: e
		}),
		this.delayReclaimSelf()
	},
	s.delayReclaimSelf = function() {
		var t = this;
		egret.setTimeout(function() {
			t.parent.removeChild(t),
			CachePool.reclaim(t)
		},
		this, 2e3)
	},
	e.keyClass = "CompChatEmoji",
	e
} (egret.Bitmap);
egret.registerClass(CompChatEmoji, "CompChatEmoji");
var CompChatText = function(t) {
	function e() {
		t.call(this),
		this.initComp()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshChat = function(t, e, i) {
		utils.setProps(this.tfSentence, {
			text: RES.getRes("frequent_chat_text")[e]
		},
		[0, .5]),
		utils.setProps(this.bmBoard, {
			scaleX: t == Direction.RIGHT || t == Direction.UP ? -1 : 1,
			width: this.tfSentence.width + 30,
			x: this.tfSentence.width / 2 + 15
		},
		[.5, 0]),
		i.addChild(this),
		this.delayReclaimSelf()
	},
	s.delayReclaimSelf = function() {
		var t = this;
		egret.setTimeout(function() {
			t.parent.removeChild(t),
			CachePool.reclaim(t)
		},
		this, 3e3)
	},
	s.initComp = function() {
		var t = new egret.Bitmap(RES.getRes("c11")),
		e = new egret.TextField;
		utils.setProps(e, {
			textColor: 16777215,
			size: 20,
			bold: !0,
			x: 10,
			y: t.height / 2 - 6
		},
		[0, .5]),
		utils.addChildren(this, [t, e]),
		this.bmBoard = t,
		this.tfSentence = e
	},
	e.keyClass = "CompChatText",
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompChatText, "CompChatText");
var CompChatVoice = function(t) {
	function e() {
		t.call(this),
		this.initComp()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshChat = function(t, e) {
		e.addChild(this),
		this.delayReclaimSelf()
	},
	s.delayReclaimSelf = function() {
		var t = this;
		egret.setTimeout(function() {
			t.parent.removeChild(t),
			CachePool.reclaim(t)
		},
		this, 3e3)
	},
	s.initComp = function() {
		var t = new egret.Bitmap(RES.getRes("c11")),
		e = new egret.Bitmap(RES.getRes("cp17"));
		utils.setProps(e, {
			x: 20,
			y: t.height / 2 - 6
		},
		[0, .5]),
		utils.setProps(t, {
			width: 2 * e.x + e.width
		}),
		utils.addChildren(this, [t, e])
	},
	e.keyClass = "CompChatVoice",
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompChatVoice, "CompChatVoice");
var CardBlock = function(t) {
	function e() {
		t.call(this),
		this.initCard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.destroySelf = function() {
		this.parent && this.parent.removeChild(this),
		CachePool.reclaim(this)
	},
	s.showTagJustPop = function(t) {
		t ? utils.setProps(this.bmBgJustPop, {
			visible: !0,
			x: this.bmBg.width / 2,
			y: this.bmBg.height / 2,
			scaleX: 1.8,
			scaleY: 1.8,
			rotation: this.dirFace == Direction.LEFT || this.dirFace == Direction.RIGHT ? 90 : 0
		},
		[.5, .5]) : this.bmBgJustPop.visible = !1
	},
	s.showTagSameId = function(t, e) {
		t && e && this.idCard == e ? utils.setProps(this.bmBgSamePop, {
			texture: RES.getRes(this.dirFace == Direction.LEFT || this.dirFace == Direction.RIGHT ? "c0_8": "c0_7"),
			x: this.bmBg.width / 2,
			y: this.bmBg.height / 2,
			scaleX: 1.7,
			scaleY: 1.7
		},
		[.5, .5]) : this.bmBgSamePop.visible = !1
	},
	s.refreshStatusUsed = function(t, e) {
		switch (t) {
		case Direction.DOWN:
		case Direction.UP:
			this.ctrlStatusBmBg("c0_1", 1, 1),
			this.ctrlStatusBmTx(!0, "c_" + e, this.bmBg.x, this.bmBg.y - 3, 0),
			this.ctrlStatusBmShadow(!0, "c1_2", this.bmBg.x + 5, this.bmBg.y - 20),
			this.scaleSelf(1);
			break;
		case Direction.LEFT:
		case Direction.RIGHT:
			this.ctrlStatusBmBg("c0_4", 1, 1),
			this.ctrlStatusBmTx(!0, "c_" + e, this.bmBg.x, this.bmBg.y - 3, t == Direction.LEFT ? 90 : -90),
			this.ctrlStatusBmShadow(!0, "c1_4", 25, this.bmBg.y - 29),
			this.scaleSelf(1)
		}
		this.setDirFace(t),
		this.scaleSelf(DataConf.Card.nScaleCardUsed),
		this.setCardId(e),
		this.willShowBmTxKing()
	},
	s.refreshStatusUsing = function(t, e, i, s, n) {
		var r = DataConf.Card;
		switch (t) {
		case Direction.DOWN:
			this.ctrlStatusBmBg(i ? "c0_1": "c0_2", 1, e || !i ? -1 : 1),
			this.ctrlStatusBmTx(i, "c_" + s, this.bmBg.x, this.bmBg.y + (e ? 4 : -3), 0),
			this.ctrlStatusBmShadow(e, "c1_2", 35, 25),
			this.scaleSelf(n ? r.nScaleCardLockedMine: 1);
			break;
		case Direction.UP:
			this.ctrlStatusBmBg(i ? "c0_1": "c0_2", 1, i || e ? 1 : -1),
			this.ctrlStatusBmTx(i, "c_" + s, this.bmBg.x, this.bmBg.y - 3, 0),
			this.ctrlStatusBmShadow(e, "c1_2", 36, 22),
			this.scaleSelf(n ? r.nScaleCardLockedOthers: r.nScaleCardUsed);
			break;
		case Direction.LEFT:
		case Direction.RIGHT:
			this.ctrlStatusBmBg(e ? "c0_3": i ? "c0_4": "c0_5", t == Direction.LEFT ? 1 : -1, 1),
			this.ctrlStatusBmTx(i, "c_" + s, this.bmBg.x, this.bmBg.y - 4, t == Direction.LEFT ? 90 : -90),
			this.ctrlStatusBmShadow(e, "c1_2", 15, 50),
			this.scaleSelf(n ? r.nScaleCardLockedOthers: r.nScaleCardUsed)
		}
		this.setDirFace(t),
		this.setCardId(s),
		this.willShowBmTxKing()
	},
	s.ctrlStatusBmBg = function(t, e, i) {
		this.bmBg.texture = RES.getRes(t),
		utils.setProps(this.bmBg, {
			x: this.bmBg.width / 2,
			y: this.bmBg.height / 2,
			scaleX: e,
			scaleY: i
		},
		[.5, .5])
	},
	s.ctrlStatusBmTx = function(t, e, i, s, n) {
		this.bmTextId.visible = t,
		t && utils.setProps(this.bmTextId, {
			texture: RES.getRes(e),
			x: i,
			y: s,
			rotation: n
		},
		[.5, .5])
	},
	s.ctrlStatusBmShadow = function(t, e, i, s) {
		this.bmShadow.visible = t,
		t && utils.setProps(this.bmShadow, {
			texture: RES.getRes(e),
			x: i,
			y: s
		})
	},
	s.scaleSelf = function(t) {
		utils.setProps(this, {
			scaleX: t,
			scaleY: t
		}),
		this.visualSize = {
			w: this.bmBg.width * t,
			h: this.bmBg.height * t
		}
	},
	s.setCardId = function(t) {
		this.idCard = t
	},
	s.setDirFace = function(t) {
		this.dirFace = t
	},
	s.willShowBmTxKing = function() {
		var t = this.bmTextId.visible && this.idCard == CARD_KING;
		if (this.bmTextKing.visible = t, t) switch (this.dirFace) {
		case Direction.DOWN:
		case Direction.UP:
			utils.setProps(this.bmTextKing, {
				x: -3,
				y: -3
			},
			[0, 0]);
			break;
		case Direction.LEFT:
			utils.setProps(this.bmTextKing, {
				x: this.bmBg.width,
				y: 0,
				rotation: 90
			},
			[0, 0]);
			break;
		case Direction.RIGHT:
			utils.setProps(this.bmTextKing, {
				x: this.bmTextKing.width / 2 - 7,
				y: this.bmBg.height - 25,
				rotation: -90
			},
			[.5, .5])
		}
	},
	s.initCard = function() {
		var t = new egret.Bitmap,
		e = new egret.Bitmap,
		i = new egret.Bitmap,
		s = new egret.Bitmap(RES.getRes("c1_0")),
		n = new egret.Bitmap,
		r = new egret.Bitmap(RES.getRes("c0_9"));
		utils.setProps(s, {
			visible: !1
		}),
		utils.addChildren(this, [i, s, t, n, e, r]),
		this.bmBg = t,
		this.bmTextId = e,
		this.bmShadow = i,
		this.bmBgJustPop = s,
		this.bmBgSamePop = n,
		this.bmTextKing = r
	},
	e.keyClass = "CardBlock",
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CardBlock, "CardBlock");
var ListCardsUsed = function(t) {
	function e(e) {
		t.call(this),
		this.dirFace = e,
		this.initList()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showStatusJustPop = function() {
		this.arrCards[this.arrCards.length - 1].showTagJustPop(!0),
		utils.setProps(this.bmArrow, {
			visible: !0,
			x: 0,
			y: 0
		})
	},
	s.hideStatusJustPop = function() {
		this.arrCards[this.arrCards.length - 1].showTagJustPop(!1),
		this.bmArrow.visible = !1
	},
	s.showStatusSameId = function(t) {
		for (var e = 0; e < this.arrCards.length; e++) this.arrCards[e].showTagSameId(!0, t)
	},
	s.hideStatusSameId = function() {
		for (var t = 0; t < this.arrCards.length; t++) this.arrCards[t].showTagSameId(!1)
	},
	s.pushNewCard = function(t) {
		var e = this.arrCards,
		i = e.length,
		s = CachePool.produce(CardBlock);
		switch (s.refreshStatusUsed(this.dirFace, t), e.push(s), this.dirFace) {
		case Direction.DOWN:
			utils.setProps(s, {
				x: i % 10 * s.visualSize.w,
				y: Math.floor(i / 10) * (s.visualSize.h - 6)
			});
			break;
		case Direction.UP:
			utils.setProps(s, {
				x: i % 10 * s.visualSize.w,
				y: (1 - Math.floor(i / 10)) * (s.visualSize.h - 6)
			});
			break;
		case Direction.LEFT:
			utils.setProps(s, {
				x: (1 - Math.floor(i / 10)) * s.visualSize.w,
				y: i % 10 * (s.visualSize.h - 3)
			});
			break;
		case Direction.RIGHT:
			utils.setProps(s, {
				x: Math.floor(i / 10) * s.visualSize.w,
				y: (10 - i % 10) * (s.visualSize.h - 3)
			})
		}
		this.addChildAt(s, this.dirFace == Direction.RIGHT ? 0 : this.numChildren),
		this.willReposCards()
	},
	s.popNewCard = function() {
		var t = this.arrCards.pop();
		this.removeChild(t),
		CachePool.reclaim(t)
	},
	s.clearAllCardsUsed = function() {
		for (; this.arrCards.length;) this.popNewCard()
	},
	s.willReposCards = function() {
		var t = this.arrCards;
		if (! (t.length < 11 || this.dirFace == Direction.DOWN)) for (var e = t.length - 1; e > 9; e--) this.setChildIndex(t[e], this.dirFace == Direction.RIGHT ? this.numChildren: 0)
	},
	s.initList = function() {
		var t = DataConf.Card,
		e = DataConf.Card.nScaleCardUsed;
		switch (this.dirFace) {
		case Direction.DOWN:
			utils.setProps(this, {
				width: t.sizeCardFront.w * e * 10,
				height: 2 * (t.sizeCardFront.h * e - 6)
			});
			break;
		case Direction.UP:
			utils.setProps(this, {
				width: t.sizeCardFront.w * e * 10,
				height: 2 * (t.sizeCardFront.h * e - 6)
			});
			break;
		case Direction.LEFT:
			utils.setProps(this, {
				width: t.sizeCardFront.h * e * 2,
				height: 10 * (t.sizeCardFront.w * e - 3)
			});
			break;
		case Direction.RIGHT:
			utils.setProps(this, {
				width: t.sizeCardFront.h * e * 2,
				height: 10 * (t.sizeCardFront.w * e - 3)
			})
		}
		this.arrCards = [];
		var i = new egret.Bitmap(RES.getRes(""));
		this.addChild(i),
		this.bmArrow = i
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(ListCardsUsed, "ListCardsUsed");
var ListCardsUsingMine = function(t) {
	function e() {
		t.call(this),
		this.dirFace = Direction.DOWN,
		this.nInd = -1,
		this.initList()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.canPopUpCard = function(t) {
		this.touchChildren = t
	},
	s.refreshListCards = function(t, e, i, s) {
		for (var n, r, a, o, h = this.arrCardBlocks,
		d = 0,
		l = 0,
		c = 10,
		u = 0; u < t.length;) {
			r = t[u],
			o = util_cards.getSumSpecifiedCard(t[u], t),
			a = 4 == o && -1 != e.indexOf(r);
			for (var _ = 0; o > _; _++) n = h[d++],
			n.refreshStatusUsing(this.dirFace, !1, !a, r, !0),
			utils.setProps(n, {
				x: l,
				y: n.height - n.visualSize.h - 11,
				visible: !0,
				touchEnabled: !1
			}),
			3 == _ ? utils.setProps(n, {
				x: l - 2 * n.visualSize.w,
				y: n.y - 8
			}) : l = n.x + n.visualSize.w;
			l += c,
			u += o
		}
		l += 2 * c;
		for (var u = 0; u < i.length; u++) r = i[u],
		n = h[d++],
		n.refreshStatusUsing(this.dirFace, !0, !0, r, !1),
		utils.setProps(n, {
			x: l,
			y: 0,
			visible: !0,
			touchEnabled: !0
		}),
		l = n.x + n.visualSize.w;
		s && (n = h[d++], n.refreshStatusUsing(this.dirFace, !0, !0, s, !1), utils.setProps(n, {
			x: l + 3 * c,
			y: 0,
			visible: !0,
			touchEnabled: !0
		})),
		this.hideCardsNotUsed(d),
		this.reposSelfInParent()
	},
	s.popCard = function(t) {
		this.dispatchEventWith(DataGlobal.Evts.POP_MY_CARD, !1, {
			idCard: t
		})
	},
	s.reposSelfInParent = function() {
		utils.setProps(this, {
			x: (this.parent.width - this.width) / 2
		})
	},
	s.hideCardsNotUsed = function(t) {
		for (var e, i = t; i < this.arrCardBlocks.length; i++) e = this.arrCardBlocks[i],
		utils.setProps(e, {
			visible: !1,
			touchEnabled: !1,
			x: 0,
			y: 0
		})
	},
	s.touchOneCard = function(t) {
		var e = this.arrCardBlocks,
		i = t.target,
		s = e.indexOf(i);
		if (this.nInd == s) this.popCard(i.idCard),
		i.y = 0,
		this.nInd = null;
		else {
			var n = 100;
			egret.Tween.get(i, {
				override: !0
			}).to({
				y: -20
			},
			n);
			for (var r, a = 0; a < e.length; a++) r = e[a],
			r != i && 0 != r.y && 1 == r.scaleX && egret.Tween.get(r, {
				override: !0
			}).to({
				y: 0
			},
			n);
			this.nInd = s
		}
	},
	s.initList = function() {
		for (var t, e = [], i = !0, s = !0, n = 0; 18 > n; n++) t = CachePool.produce(CardBlock),
		t.refreshStatusUsing(this.dirFace, s, i, 35, !1),
		t.addEventListener(egret.TouchEvent.TOUCH_END, this.touchOneCard, this),
		utils.setProps(t, {
			x: 13 > n ? t.visualSize.w * n: 0,
			visible: !1
		},
		[0, 0]),
		this.addChild(t),
		e.push(t);
		this.arrCardBlocks = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(ListCardsUsingMine, "ListCardsUsingMine");
var ListCardsUsingOthers = function(t) {
	function e(e) {
		t.call(this),
		this.dirFace = e,
		this.initList()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshListCards = function(t, e, i, s) {
		for (var n, r, a, o, h = this.arrCardBlocks,
		d = 0,
		l = 0,
		c = this.dirFace == Direction.UP ? 7 : 12, u = 0; u < t.length;) {
			r = t[u],
			o = util_cards.getSumSpecifiedCard(t[u], t),
			a = -1 == e.indexOf(r);
			for (var _ = 0; o > _; _++) switch (n = h[d++], n.refreshStatusUsing(this.dirFace, !1, a, r, !0), this.dirFace) {
			case Direction.UP:
				utils.setProps(n, {
					x: l,
					y: 12,
					visible: !0
				}),
				3 == _ ? utils.setProps(n, {
					x: l - 2 * n.visualSize.w,
					y: 6
				}) : l += n.visualSize.w;
				break;
			default:
				utils.setProps(n, {
					x: -10,
					y: l,
					visible: !0
				}),
				3 == _ ? utils.setProps(n, {
					x: -10,
					y: l - 2 * (n.visualSize.h - 5)
				}) : l += n.visualSize.h - 10
			}
			l += c,
			u += o
		}
		this.dirFace == Direction.UP && (l += 2 * c);
		for (var u = 0; u < i.length; u++) switch (r = i[u], n = h[d++], n.refreshStatusUsing(this.dirFace, !0, !1, r, !1), this.dirFace) {
		case Direction.UP:
			utils.setProps(n, {
				x: l,
				y: 0,
				visible: !0
			}),
			l += n.visualSize.w;
			break;
		default:
			utils.setProps(n, {
				x: 0,
				y: l,
				visible: !0
			}),
			l += n.visualSize.h - 43
		}
		if (l += 10, s) switch (n = h[d++], n.refreshStatusUsing(this.dirFace, !0, !1, s, !1), this.dirFace) {
		case Direction.UP:
			utils.setProps(n, {
				x: l,
				y: 0,
				visible: !0
			}),
			l += n.visualSize.w;
			break;
		default:
			utils.setProps(n, {
				x: 0,
				y: l,
				visible: !0
			}),
			l += n.visualSize.h - 43
		}
		this.hideCardsNotUsed(d),
		this.reposSelfInParent()
	},
	s.reposSelfInParent = function() {
		switch (this.dirFace) {
		case Direction.UP:
			utils.setProps(this, {
				x: (this.parent.width - this.width) / 2
			});
			break;
		default:
			utils.setProps(this, {
				y: (this.parent.height - this.height) / 2
			})
		}
	},
	s.hideCardsNotUsed = function(t) {
		for (var e, i = t; i < this.arrCardBlocks.length; i++) e = this.arrCardBlocks[i],
		utils.setProps(e, {
			visible: !1,
			touchEnabled: !1,
			x: 0,
			y: 0
		})
	},
	s.initList = function() {
		for (var t, e = [], i = !1, s = !0, n = 0; 18 > n; n++) {
			switch (t = CachePool.produce(CardBlock), t.refreshStatusUsing(this.dirFace, s, i, 3, !1), this.dirFace) {
			case Direction.UP:
				utils.setProps(t, {
					x: 13 > n ? t.visualSize.w * n: 0,
					touchEnabled: !0,
					visible: !0
				});
				break;
			case Direction.LEFT:
				utils.setProps(t, {
					y: 13 > n ? (t.visualSize.h - 43) * n: 0,
					touchEnabled: !0,
					visible: !0
				});
				break;
			case Direction.RIGHT:
				utils.setProps(t, {
					y: 13 > n ? (t.visualSize.h - 43) * n: 0,
					touchEnabled: !0,
					visible: !0
				})
			}
			this.addChild(t),
			e.push(t)
		}
		this.arrCardBlocks = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(ListCardsUsingOthers, "ListCardsUsingOthers");
var PhotoPlayerPlaying = function(t) {
	function e() {
		t.call(this),
		this.bg = null,
		this.headMask = null,
		this.headPic = null,
		this.namebg = null,
		this.tfLevelName = null,
		this.tfNick = null,
		this.tfGold = null,
		this.goldbg = null,
		this.layerName = null,
		this.flag = null,
		this.initPlayer()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.HorV = function(t) {
		"h" == t ? (this.namebg.x = this.bg.width / 2, this.namebg.y = 3, this.namebg.rotation = 0, this.layerName.x = this.bg.width, this.layerName.y = 5, this.namebg.anchorOffsetY = 0) : (this.namebg.x = 3, this.namebg.y = this.bg.height / 2, this.namebg.rotation = 90, this.layerName.x = 0, this.layerName.y = this.bg.height, this.namebg.anchorOffsetY = this.namebg.height)
	},
	s.addGold = function(t) {
		this.setGold(parseInt(this.tfGold.text) + t)
	},
	s.setGold = function(t) {
		this.tfGold.text = t + ""
	},
	s.setNick = function(t) {
		this.tfNick.text = t
	},
	s.setlevelName = function(t) {
		this.tfLevelName.text = t
	},
	s.setPlayerHead = function(t) {
		this.headPic.texture = null,
		RES.getResByUrl(t, this.loadPic, this, RES.ResourceItem.TYPE_IMAGE)
	},
	s.setFlag = function(t) {
		this.flag.visible = t
	},
	s.loadPic = function(t) {
		t && (this.headPic.texture = t, this.headPic.width = 85, this.headPic.height = 85)
	},
	s.initPlayer = function() {
		this.namebg = new egret.Bitmap(RES.getRes("d_4")),
		this.namebg.y = 3,
		this.addChild(this.namebg),
		this.layerName = new egret.DisplayObjectContainer,
		this.addChild(this.layerName),
		this.bg = new egret.Bitmap(RES.getRes("d_3")),
		this.addChild(this.bg),
		this.namebg.width = 1.5 * this.bg.width,
		this.namebg.x = this.bg.width / 2,
		this.headPic = new egret.Bitmap(RES.getRes("temp_1")),
		this.headPic.width = 85,
		this.headPic.height = 85,
		this.addChild(this.headPic),
		this.headMask = new egret.Sprite,
		this.headMask.graphics.beginFill(0, 1),
		this.headMask.graphics.drawRoundRect(5, 5, this.headPic.width - 5, this.headPic.height - 5, 30, 30),
		this.headMask.graphics.endFill(),
		this.addChild(this.headMask),
		this.headPic.mask = this.headMask,
		this.headPic.x = 6,
		this.headPic.y = 6,
		this.flag = new egret.Bitmap(RES.getRes("d_5")),
		this.flag.width = .8 * this.flag.width,
		this.flag.height = .8 * this.flag.height,
		this.flag.x = .75 * -this.flag.width + this.bg.width,
		this.flag.y = this.flag.height / -4,
		this.flag.visible = !1,
		this.addChild(this.flag),
		this.layerName.width = this.bg.width,
		this.layerName.height = this.bg.height,
		this.layerName.x = this.bg.width,
		this.tfLevelName = new egret.TextField,
		this.tfLevelName.size = 20,
		this.tfLevelName.textAlign = "center",
		this.tfLevelName.textColor = 16777215,
		this.tfLevelName.text = "等级名",
		this.tfLevelName.fontFamily = "微软雅黑",
		this.tfLevelName.width = this.layerName.width,
		this.tfLevelName.y = 0,
		this.layerName.addChild(this.tfLevelName),
		this.tfNick = new egret.TextField,
		this.tfNick.size = 15,
		this.tfNick.textAlign = "center",
		this.tfNick.verticalAlign = egret.VerticalAlign.MIDDLE,
		this.tfNick.height = 30,
		this.tfNick.textColor = 11206570,
		this.tfNick.text = "昵称",
		this.tfNick.fontFamily = "微软雅黑",
		this.tfNick.bold = !0,
		this.tfNick.width = this.layerName.width,
		this.tfNick.y = this.tfLevelName.height + this.tfLevelName.y + 2,
		this.layerName.addChild(this.tfNick),
		this.goldbg = new egret.Bitmap(RES.getRes("d_2")),
		this.goldbg.y = this.layerName.height - this.goldbg.height - 5,
		this.layerName.addChild(this.goldbg);
		var t = new egret.Bitmap(RES.getRes("d_1"));
		t.width = .8 * t.width,
		t.height = .8 * t.height,
		t.y = this.goldbg.y + (this.goldbg.height - t.height) / 2 + 3,
		t.x = -2,
		this.layerName.addChild(t),
		this.tfGold = new egret.BitmapText,
		this.tfGold.font = RES.getRes("yellowfnt_fnt"),
		this.tfGold.scaleX = .7,
		this.tfGold.scaleY = .7,
		this.tfGold.text = "111111",
		this.tfGold.x = t.width,
		this.tfGold.y = this.goldbg.y + (this.goldbg.height - this.tfGold.height * this.tfGold.scaleY) / 2 + 3,
		this.layerName.addChild(this.tfGold)
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PhotoPlayerPlaying, "PhotoPlayerPlaying");
var BoardListCardsResult = function(t) {
	function e() {
		t.call(this),
		this.initBoard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.updatePanel = function(t, e, i, s, n, r, a, o, h) {
		for (var d, l = [r, a, o, h], c = this.arrListCardsResult, u = 0; u < c.length; u++) d = e == u,
		c[u].refreshList(t == u, n[u], d ? i: "", s[u], d, l[u])
	},
	s.initBoard = function() {
		for (var t, e = [], i = 0; 4 > i; i++) t = new ListCardResult,
		utils.setProps(t, {
			y: (t.height + 3) * i
		}),
		this.addChild(t),
		e.push(t);
		this.arrListCardsResult = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardListCardsResult, "BoardListCardsResult");
var BoardPages = function(t) {
	function e() {
		t.call(this),
		this.initBoard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshBoard = function(t, e, i, s, n, r, a, o, h, d, l) {
		for (var c = this.arrPage,
		u = 0; u < c.length; u++) c[u].refreshPage(u == t, e[u], i[u], s[u], n[u], r[u], a[u], o[u], h[u], d[u], l[u]);
		for (var _ = 0,
		g = 0; g < l.length; g++) _ = l[g] > l[t] ? g: _;
		this.playMcFanOnPage(_)
	},
	s.playMcFanOnPage = function(t) {
		utils.setProps(this.compFanMc, {
			x: this.width * (2 * t + 1) / 8
		}),
		this.addChild(this.compFanMc)
	},
	s.initBoard = function() {
		var t = new CompFanMc,
		e = [];
		utils.setProps(t, {
			y: 350
		});
		for (var i, s = 0; 4 > s; s++) i = new PageUserOver,
		utils.setProps(i, {
			x: (i.width + 1) * s
		}),
		this.addChild(i),
		e.push(i);
		this.compFanMc = t,
		this.arrPage = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardPages, "BoardPages");
var CompFanMc = function(t) {
	function e() {
		t.call(this),
		this.initComp(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function() {
		for (var t = 0; t < this.arrMcGold.length; t++) this.arrMcGold[t].gotoAndPlay(0, 2);
		this.mcFan.gotoAndPlay(0, 1)
	},
	s.remSelf = function() {
		this.parent && this.parent.removeChild(this)
	},
	s.initComp = function() {
		var t = new egret.MovieClip(new egret.MovieClipDataFactory(RES.getRes("ot_fan_json"), RES.getRes("ot_fan_png")).generateMovieClipData("ot_fan")),
		e = [];
		t.frameRate = 3,
		t.addEventListener(egret.Event.COMPLETE, this.remSelf, this),
		this.addChild(t);
		for (var i, s = 0; 3 > s; s++) i = new egret.MovieClip(new egret.MovieClipDataFactory(RES.getRes("ot_g1_json"), RES.getRes("ot_g1_png")).generateMovieClipData("ot_g1")),
		utils.setProps(i, {
			rotation: 60 * (s + 1),
			frameRate: 8
		}),
		this.addChild(i),
		e.push(i);
		this.arrMcGold = e,
		this.mcFan = t
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompFanMc, "CompFanMc");
var CompHorseList = function(t) {
	function e() {
		t.call(this),
		this.initComp(),
		this.showCardHorse([], [])
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showCardHorse = function(t, e) {
		for (var i, s = 0,
		n = 90,
		r = this.arrCardBlock,
		a = 0; a < t.length; a++) i = r[s++],
		i.refreshStatusUsed(Direction.DOWN, t[a]),
		i.scaleSelf(.5),
		utils.setProps(i, {
			x: n,
			y: 0,
			alpha: .8,
			visible: !0
		}),
		n += i.visualSize.w;
		n += 10;
		for (var o = 0; o < e.length; o++) i = r[s++],
		i.refreshStatusUsed(Direction.DOWN, t[o]),
		i.scaleSelf(.5),
		utils.setProps(i, {
			x: n,
			y: 0,
			alpha: 1,
			visible: !0
		}),
		n += i.visualSize.w;
		for (; s < r.length;) i = r[s++],
		i.visible = !1;
		this.bmTxMapai.visible = 0 != e.length || 0 != t.length
	},
	s.initComp = function() {
		var t = new egret.Bitmap(RES.getRes("b7_4"));
		utils.setProps(t, {
			y: 21
		},
		[0, .5]),
		this.addChild(t);
		for (var e, i = 8,
		s = [], n = 0; i > n; n++) e = new CardBlock,
		e.scaleSelf(.5),
		s.push(e),
		this.addChild(e);
		this.arrCardBlock = s,
		this.bmTxMapai = t
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompHorseList, "CompHorseList");
var ListCardResult = function(t) {
	function e() {
		t.call(this),
		this.initList()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshList = function(t, e, i, s, n, r) {
		this.bmEast.visible = t,
		this.tfNick.text = e,
		utils.setProps(this.tfDescriptionHu, {
			text: i
		},
		[0, .5]),
		utils.setProps(this.tfScoreOffset, {
			text: "" + s
		},
		[0, .5]),
		this.bmTextHu.visible = n;
		for (var a, o, h = this.arrCardBlock,
		d = 0,
		l = this.tfNick.x,
		c = 0; c < r.length; c++) {
			for (var u = 0; u < r[c].length; u++) o = r[c][u],
			a = h[d++],
			a.refreshStatusUsed(Direction.DOWN, o),
			utils.setProps(a, {
				x: l,
				visible: !0
			}),
			l += a.visualSize.w;
			l += 10
		}
		for (; d < h.length; d++) h[d].visible = !1
	},
	s.initList = function() {
		var t = new egret.Bitmap(RES.getRes("o_5")),
		e = new egret.TextField,
		i = new egret.TextField,
		s = new egret.TextField,
		n = new egret.Bitmap(RES.getRes("c19_4")),
		r = [];
		utils.setProps(e, {
			x: t.width + 10,
			textColor: 16777215,
			fontFamily: "MicroSoft Yahei",
			bold: !0,
			size: 30,
			text: "玩家x"
		}),
		utils.setProps(i, {
			x: 200,
			y: e.size / 2,
			size: 23,
			fontFamily: "MicroSoft Yahei",
			textColor: 16777215,
			text: "胡法描述文字 胡法描述文字 胡法描述文字"
		},
		[0, .5]),
		utils.setProps(s, {
			textColor: 16777215,
			size: 30,
			fontFamily: "MicroSoft Yahei",
			text: "+8",
			x: 650,
			y: e.size / 2
		},
		[0, .5]),
		utils.setProps(n, {
			x: s.x + 120,
			y: 0
		});
		for (var a, o = 0; 18 > o; o++) a = new CardBlock,
		a.refreshStatusUsed(Direction.DOWN, 8),
		utils.setProps(a, {
			x: 53 + a.visualSize.w * o,
			y: e.size + 13
		},
		[0, 0]),
		this.addChild(a),
		r.push(a);
		utils.addChildren(this, [t, e, i, s, n]),
		this.bmEast = t,
		this.tfNick = e,
		this.tfScoreOffset = s,
		this.arrCardBlock = r,
		this.tfDescriptionHu = i,
		this.bmTextHu = n
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(ListCardResult, "ListCardResult");
var PageUserOver = function(t) {
	function e() {
		t.call(this),
		this.initPage()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshPage = function(t, e, i, s, n, r, a, o, h, d, l) {
		this.bmHostImg.visible = t,
		this.iconPhoto.setPhotoRes(e),
		utils.setProps(this.tfNick, {
			text: i
		},
		[0, .5]),
		utils.setProps(this.tfId, {
			text: "" + s
		},
		[.5, 0]),
		this.arrScoreList[0].refreshScore(n),
		this.arrScoreList[1].refreshScore(r),
		this.arrScoreList[2].refreshScore(a),
		this.arrScoreList[3].refreshScore(o),
		utils.setProps(this.bmtChengji, {
			text: "" + h
		},
		[1, 0]),
		utils.setProps(this.bmtZongdefen, {
			text: "" + d
		},
		[1, 0]),
		utils.setProps(this.bmtScoreFinal, {
			text: "" + l
		},
		[.5, .5])
	},
	s.initPage = function() {
		var t = new egret.Bitmap(RES.getRes("ot_1")),
		e = new IconPhoto,
		i = new egret.Bitmap(RES.getRes("ot_5")),
		s = new egret.Bitmap(RES.getRes("ot_3")),
		n = new egret.TextField,
		r = new egret.TextField,
		a = [],
		o = new egret.Bitmap(RES.getRes("ot_8")),
		h = new egret.Bitmap(RES.getRes("ot_9")),
		d = new egret.BitmapText,
		l = new egret.BitmapText,
		c = new egret.Bitmap(RES.getRes("ot_7")),
		u = new egret.BitmapText;
		utils.setProps(e, {
			x: 40,
			y: 42
		}),
		utils.setProps(i, {
			x: e.x,
			y: e.y + 18
		},
		[.5, .5]),
		utils.setProps(s, {
			x: e.x + e.width,
			y: e.y + 10
		}),
		utils.setProps(n, {
			text: "玩家昵称",
			x: s.x + 5,
			y: s.y + s.height / 2,
			width: s.width - 10,
			textAlign: "center",
			size: 22,
			fontFamily: "MicroSoft Yahei",
			textColor: 16777215
		},
		[0, .5]),
		utils.setProps(r, {
			text: "ID:270400",
			x: s.x + s.width / 2,
			y: n.y + 30,
			size: 22,
			fontFamily: "MicroSoft Yahei",
			textColor: 5525317,
			bold: !0
		},
		[.5, 0]);
		for (var _, g = ["自摸次数", "吃胡次数", "杠牌次数", "中马总数"], C = 13, p = 0; p < g.length; p++) _ = new CompLiScore(g[p]),
		utils.setProps(_, {
			x: t.width / 2,
			y: 147 + (_.height + C) * p
		},
		[.5, 0]),
		this.addChild(_),
		a.push(_);
		utils.setProps(o, {
			x: _.x - _.width / 2,
			y: _.y + _.height + C
		}),
		utils.setProps(d, {
			font: RES.getRes("yellowfnt_fnt"),
			x: _.x + _.width / 2,
			y: o.y,
			text: "00",
			scaleX: 1.5,
			scaleY: 1.5
		},
		[1, 0]),
		utils.setProps(h, {
			x: o.x,
			y: o.y + o.height + C
		}),
		utils.setProps(l, {
			font: RES.getRes("redfnt_fnt"),
			x: d.x,
			y: h.y,
			text: "00",
			scaleX: 1.4,
			scaleY: 1.4
		},
		[1, 0]),
		utils.setProps(c, {
			x: t.width / 2,
			y: h.y + h.height + 15
		},
		[.5, 0]),
		utils.setProps(u, {
			font: RES.getRes("yellowfnt_fnt"),
			x: c.x,
			y: c.y + c.height / 2,
			text: "00",
			scaleX: 1.9,
			scaleY: 1.9
		},
		[.5, .5]),
		this.addChildAt(t, 0),
		utils.addChildren(this, [e, i, s, n, r, o, d, h, l, c, u]),
		this.iconPhoto = e,
		this.bmHostImg = i,
		this.tfNick = n,
		this.tfId = r,
		this.arrScoreList = a,
		this.bmtChengji = d,
		this.bmtZongdefen = l,
		this.bmtScoreFinal = u
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PageUserOver, "PageUserOver");
var CompLiScore = function(t) {
	function e(e) {
		t.call(this),
		this.initComp(e)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshScore = function(t) {
		utils.setProps(this.tfVal, {
			text: "" + t
		},
		[1, 0])
	},
	s.initComp = function(t) {
		var e = new egret.TextField,
		i = new egret.TextField,
		s = {
			size: 27,
			fontFamily: "MicroSoft Yahei",
			textColor: 5525317,
			bold: !0
		};
		utils.setProps(e, s),
		utils.setProps(e, {
			text: t
		}),
		utils.setProps(i, s),
		utils.setProps(i, {
			x: 180,
			text: "00"
		},
		[1, 0]),
		utils.addChildren(this, [e, i]),
		this.tfVal = i
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompLiScore, "CompLiScore");
var PanelOverPart = function(t) {
	function e() {
		t.call(this),
		this.initPanel()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.updatePanel = function(t, e, i, s, n, r, a, o, h, d, l, c, u, _, g) {
		utils.setProps(this.bmWayPlay, {
			texture: RES.getRes("b5_" + (t + 1))
		},
		[.5, .5]),
		this.boardListResult.updatePanel(s, n, r, d, l, c, u, _, g),
		this.compHorse.showCardHorse(h, o),
		this.bmResultMe.visible = a,
		utils.setProps(this.tfRule, {
			text: i
		},
		[0, .5]);
		var C = e != CardID.CARD_NONE;
		this.cardKing.visible = this.tfTxKing.visible = C,
		C && this.cardKing.setId(e)
	},
	s.beginGame = function(t) {
		this.dispatchEventWith(DataGlobal.Evts.BEGIN_NEXT_PAN)
	},
	s.initPanel = function() {
		var t = new egret.Bitmap(RES.getRes("o_1")),
		e = new egret.TextField,
		i = new CardKingBlock,
		s = new egret.Bitmap(RES.getRes("o_3")),
		n = new egret.TextField,
		r = new egret.Bitmap(RES.getRes("ot_7")),
		a = new egret.Bitmap(RES.getRes("b5_1")),
		o = new btns.BtnBmBm("a4_1", "o_6", {},
		{
			y: 36
		}),
		h = new BoardListCardsResult,
		d = new CompHorseList;
		utils.setProps(t, {
			width: DataGlobal.wStage
		}),
		utils.setProps(e, {
			text: "鬼牌：",
			textColor: 16777215,
			fontFamily: "MicroSoft Yahei",
			size: 32,
			x: 20,
			y: 46
		},
		[0, .5]),
		utils.setProps(i, {
			x: e.x + e.width + 10,
			y: e.y
		},
		[0, .5]),
		utils.setProps(s, {
			x: i.x + 120,
			y: e.y
		},
		[0, .5]),
		utils.setProps(n, {
			text: "相关规则 相关规则 相关规则",
			textColor: 16777215,
			fontFamily: "MicroSoft Yahei",
			size: 25,
			x: s.x + 190,
			y: e.y,
			width: 450,
			lineSpacing: 4
		},
		[0, .5]),
		utils.setProps(r, {
			x: t.width - 150,
			y: e.y
		},
		[.5, .5]),
		utils.setProps(a, {
			x: r.x,
			y: r.y
		},
		[.5, .5]),
		utils.setProps(h, {
			x: 60,
			y: 103
		}),
		utils.setProps(d, {
			x: 10,
			y: DataGlobal.hStage - 40
		},
		[0, .5]),
		utils.setProps(o, {
			x: DataGlobal.wStage / 2,
			y: DataGlobal.hStage - 40
		},
		[.5, .5]),
		btns.initFloatBtn(o),
		o.addEventListener(egret.TouchEvent.TOUCH_END, this.beginGame, this),
		utils.addChildren(this, [t, e, i, s, n, r, a, h, d, o]),
		this.boardListResult = h,
		this.compHorse = d,
		this.cardKing = i,
		this.tfRule = n,
		this.bmWayPlay = a,
		this.bmResultMe = s,
		this.tfTxKing = e,
		d.showCardHorse([1, 2, 5, 9, 11, 3], [5, 7])
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PanelOverPart, "PanelOverPart");
var PanelOverTotal = function(t) {
	function e() {
		t.call(this),
		this.bmWayPlay = new egret.Bitmap(RES.getRes("b5_1"))
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshPanel = function(t, e, i, s, n, r, a, o, h, d, l, c, u) {
		this.arrDataInsert = [e, i, s, n, r, a, o, h, d, l, c, u],
		t.addChild(this),
		this.loadRes()
	},
	s.loadRes = function() {
		CompLoading.getInst().loadGroupWithCall(CompLoading.getInst().GroupsName.RES_OVER_TOTAL, this.initPanel, this, this.stage)
	},
	s.fillData = function() {
		var t = this.arrDataInsert;
		this.boardPages.refreshBoard(t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11]),
		utils.setProps(this.bmWayPlay, {
			texture: RES.getRes("b5_" + (t[0] + 1))
		},
		[.5, .5])
	},
	s.showPopShare = function() {
		if (!this.boardShare) {
			var t = new PopShare;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.hideShare, this),
			this.boardShare = t
		}
		this.boardShare.addSelf(this.parent),
		utils.ctrlChildrenTouch(this, !1)
	},
	s.hideShare = function() {
		utils.ctrlChildrenTouch(this, !0)
	},
	s.returnBack = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.initPanel = function() {
		if (this.numChildren > 0) return void this.fillData();
		var t = new egret.Bitmap(RES.getRes("o_1")),
		e = new egret.Bitmap(RES.getRes("b3_2")),
		i = new egret.Bitmap(RES.getRes("ot_4")),
		s = new egret.TextField,
		n = new egret.Bitmap(RES.getRes("ot_7")),
		r = new egret.Bitmap(RES.getRes("b5_1")),
		a = new BoardPages,
		o = new btns.BtnBmBm("a4_1", "ot_6", {},
		{
			y: 36
		});
		utils.setProps(t, {
			width: DataGlobal.wStage,
			height: DataGlobal.hStage
		}),
		utils.setProps(e, {
			x: 60,
			y: 46
		},
		[.5, .5]),
		utils.setProps(i, {
			x: t.width / 2,
			y: 3
		},
		[.5, 0]),
		utils.setProps(s, {
			text: "游戏结果仅做娱乐用途，禁止用于赌博行为。",
			x: i.x,
			y: i.height + 3,
			fontFamily: "Microsoft Yahei",
			textColor: 16777215,
			size: 20
		},
		[.5, 0]),
		utils.setProps(n, {
			x: t.width - 150,
			y: e.y
		},
		[.5, .5]),
		utils.setProps(r, {
			x: n.x,
			y: n.y
		},
		[.5, .5]),
		utils.setProps(a, {
			x: (t.width - a.width) / 2,
			y: 80
		}),
		utils.setProps(o, {
			x: i.x,
			y: DataGlobal.hStage - 40
		},
		[.5, .5]),
		btns.initScaleBtn(e),
		btns.initFloatBtn(o),
		e.addEventListener(egret.TouchEvent.TOUCH_END, this.returnBack, this),
		o.addEventListener(egret.TouchEvent.TOUCH_END, this.showPopShare, this),
		utils.addChildren(this, [t, e, i, s, n, r, a, o]),
		this.boardPages = a,
		this.bmWayPlay = r,
		this.fillData()
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PanelOverTotal, "PanelOverTotal");
var BarRoom = function(t) {
	function e() {
		t.call(this),
		this.bg = null,
		this.bmtIdRoom = null,
		this.initBar(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.setNum, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setNum = function(t) {
		utils.setProps(this.bmtIdRoom, {
			text: "" + DataUser.getInst().infoUser.nRoomIdPlaying
		})
	},
	s.initBar = function() {
		this.bg = new egret.Bitmap(RES.getRes("c9")),
		this.addChild(this.bg),
		this.width = this.bg.width,
		this.height = this.bg.height;
		var t = new egret.Bitmap(RES.getRes("c10"));
		t.y = (this.height - t.height) / 2,
		t.x = 2,
		this.addChild(t),
		this.bmtIdRoom = new egret.BitmapText,
		this.bmtIdRoom.font = RES.getRes("yellowfnt_fnt"),
		this.bmtIdRoom.text = "0",
		this.bmtIdRoom.x = t.x + t.width + 5,
		this.bmtIdRoom.y = (this.height - this.bmtIdRoom.height) / 2 + 3,
		this.addChild(this.bmtIdRoom)
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BarRoom, "BarRoom");
var PlayerBar = function(t) {
	function e() {
		t.call(this),
		this.bg = null,
		this.headMask = null,
		this.headPic = null,
		this.namebg = null,
		this.tfLevelName = null,
		this.tfNick = null,
		this.tfGold = null,
		this.goldbg = null,
		this.layerName = null,
		this.flag = null,
		this.initPlayer(),
		this.HorV("h")
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.HorV = function(t) {
		"h" == t ? (this.namebg.x = this.bg.width / 2, this.namebg.y = 3, this.namebg.rotation = 0, this.layerName.x = this.bg.width, this.layerName.y = 5, this.namebg.anchorOffsetY = 0) : (this.namebg.x = 3, this.namebg.y = this.bg.height / 2, this.namebg.rotation = 90, this.layerName.x = 0, this.layerName.y = this.bg.height, this.namebg.anchorOffsetY = this.namebg.height)
	},
	s.addGold = function(t) {
		this.setGold(parseInt(this.tfGold.text) + t)
	},
	s.setGold = function(t) {
		this.tfGold.text = t + ""
	},
	s.setNick = function(t) {
		this.tfNick.text = t
	},
	s.setlevelName = function(t) {
		this.tfLevelName.text = t
	},
	s.setPlayerHead = function(t) {
		this.headPic.texture = null,
		RES.getResByUrl(t, this.loadPic, this)
	},
	s.setFlag = function(t) {
		this.flag.visible = t
	},
	s.loadPic = function(t) {
		this.headPic.texture = t.target.data,
		this.headPic.width = 85,
		this.headPic.height = 85
	},
	s.initPlayer = function() {
		this.namebg = new egret.Bitmap(RES.getRes("headnamebg_png")),
		this.namebg.y = 3,
		this.addChild(this.namebg),
		this.layerName = new egret.DisplayObjectContainer,
		this.addChild(this.layerName),
		this.bg = new egret.Bitmap(RES.getRes("headbg_png")),
		this.addChild(this.bg),
		this.namebg.width = 1.5 * this.bg.width,
		this.namebg.x = this.bg.width / 2,
		this.headPic = new egret.Bitmap(RES.getRes("head_png")),
		this.headPic.width = 85,
		this.headPic.height = 85,
		this.addChild(this.headPic),
		this.headMask = new egret.Sprite,
		this.headMask.graphics.beginFill(0, 1),
		this.headMask.graphics.drawRoundRect(5, 5, this.headPic.width - 5, this.headPic.height - 5, 30, 30),
		this.headMask.graphics.endFill(),
		this.addChild(this.headMask),
		this.headPic.mask = this.headMask,
		this.headPic.x = 6,
		this.headPic.y = 6,
		this.flag = new egret.Bitmap(RES.getRes("master_png")),
		this.flag.width = .8 * this.flag.width,
		this.flag.height = .8 * this.flag.height,
		this.flag.x = .75 * -this.flag.width + this.bg.width,
		this.flag.y = this.flag.height / -4,
		this.flag.visible = !1,
		this.addChild(this.flag),
		this.layerName.width = this.bg.width,
		this.layerName.height = this.bg.height,
		this.layerName.x = this.bg.width,
		this.tfLevelName = new egret.TextField,
		this.tfLevelName.size = 20,
		this.tfLevelName.textAlign = "center",
		this.tfLevelName.textColor = 16777215,
		this.tfLevelName.text = "等级名",
		this.tfLevelName.fontFamily = "微软雅黑",
		this.tfLevelName.width = this.layerName.width,
		this.tfLevelName.y = 0,
		this.layerName.addChild(this.tfLevelName),
		this.tfNick = new egret.TextField,
		this.tfNick.size = 15,
		this.tfNick.textAlign = "center",
		this.tfNick.verticalAlign = egret.VerticalAlign.MIDDLE,
		this.tfNick.height = 30,
		this.tfNick.textColor = 11206570,
		this.tfNick.text = "昵称",
		this.tfNick.fontFamily = "微软雅黑",
		this.tfNick.bold = !0,
		this.tfNick.width = this.layerName.width,
		this.tfNick.y = this.tfLevelName.height + this.tfLevelName.y + 2,
		this.layerName.addChild(this.tfNick),
		this.goldbg = new egret.Bitmap(RES.getRes("goldbg_png")),
		this.goldbg.y = this.layerName.height - this.goldbg.height - 5,
		this.layerName.addChild(this.goldbg);
		var t = new egret.Bitmap(RES.getRes("gold_png"));
		t.width = .8 * t.width,
		t.height = .8 * t.height,
		t.y = this.goldbg.y + (this.goldbg.height - t.height) / 2 + 3,
		t.x = -2,
		this.layerName.addChild(t),
		this.tfGold = new egret.BitmapText,
		this.tfGold.font = RES.getRes("yellowfnt_fnt"),
		this.tfGold.scaleX = .7,
		this.tfGold.scaleY = .7,
		this.tfGold.text = "111111",
		this.tfGold.x = t.width,
		this.tfGold.y = this.goldbg.y + (this.goldbg.height - this.tfGold.height * this.tfGold.scaleY) / 2 + 3,
		this.layerName.addChild(this.tfGold)
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PlayerBar, "PlayerBar");
var PopChat = function(t) {
	function e() {
		t.call(this),
		this.arrRes = ["cp9", "cp10_1", "cp10_2", "cp11_1", "cp11_2", "cp12_1", "cp13_1", "cp13_2", "cp14_1", "cp14_2", "cp15_0", "cp16", "cp17", "b3_3", "bb_1", "bb_10"]
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		this.willLoadRes()
	},
	s.willLoadRes = function() {
		CompLoading.getInst().loadResTemp(this.arrRes, this.initPop, this, this.stage)
	},
	s.reportSendTextFrequent = function(t) {
		var e = t.data.nInd;
		console.log("reportSendTextFrequent - nInd = ", e),
		this.exit()
	},
	s.reportSendEmoji = function(t) {
		var e = t.data.nInd;
		console.log("reportSendEmoji - nInd = ", e),
		this.exit()
	},
	s.exit = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_GAME)
	},
	s.initPop = function() {
		if (! (this.numChildren > 0)) {
			utils.drawShadowScreen(this.graphics);
			var t = 900,
			e = 500,
			i = new egret.Bitmap(RES.getRes("bb_1")),
			s = new BoardEmoji(.5 * t - 30, e - 50),
			n = new BoardTextChat(.5 * t - 30, e - 50),
			r = new egret.Bitmap(RES.getRes("b3_3"));
			utils.setProps(i, {
				width: t,
				height: e,
				x: (this.width - t) / 2,
				y: (this.height - e) / 2
			}),
			utils.setProps(s, {
				x: i.x + 20,
				y: i.y + 20
			}),
			utils.setProps(n, {
				x: s.x + s.width + 20,
				y: s.y
			}),
			utils.setProps(r, {
				x: i.x + i.width - 20,
				y: i.y + 20
			},
			[.5, .5]),
			btns.initScaleBtn(r),
			r.addEventListener(egret.TouchEvent.TOUCH_END, this.exit, this),
			n.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.reportSendTextFrequent, this),
			s.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.reportSendEmoji, this),
			utils.addChildren(this, [i, s, n, r])
		}
	},
	e
} (egret.Sprite);
egret.registerClass(PopChat, "PopChat");
var PopConfirmOneSentence = function(t) {
	function e(e, i) {
		t.call(this),
		this.arrRes = ["b3_1", "b4_1", "cp18", "cp20", "bb_1", "bb_2"],
		this.arrRes.push(e),
		this.strTextureTitle = e,
		this.strTipTx = i
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		this.loadRes()
	},
	s.loadRes = function() {
		CompLoading.getInst().loadResTemp(this.arrRes, this.initPop, this, Main.inst)
	},
	s.selectBtn = function(t) {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN, !1, {
			bIsSure: t.target == this.btnSure
		})
	},
	s.initPop = function() {
		if (!this.numChildren) {
			var t = new CompPopBoard("bb_2", this.strTextureTitle, 500, 350),
			e = new egret.TextField,
			i = new btns.BtnBmBm("b3_1", "b4_1", {},
			{
				y: 27
			}),
			s = new btns.BtnBmBm("b3_1", "cp18", {},
			{
				y: 27
			});
			utils.drawShadowScreen(this.graphics),
			utils.setProps(t, {
				x: this.width / 2,
				y: (this.height - t.height) / 2
			},
			[.5, 0]),
			utils.setProps(e, {
				text: this.strTipTx,
				x: t.x,
				y: t.y + t.height / 2 - 50,
				textColor: 5710336,
				size: 30,
				bold: !0,
				lineSpacing: 16,
				textAlign: "center",
				fontFamily: "MicroSoft Yahei"
			},
			[.5, 0]),
			utils.setProps(i, {
				x: t.x - 30,
				y: t.y + t.height - 30
			},
			[1, 1]),
			utils.setProps(s, {
				x: this.width - i.x,
				y: i.y
			},
			[0, 1]),
			btns.initFloatBtn(i),
			btns.initFloatBtn(s),
			s.addEventListener(egret.TouchEvent.TOUCH_END, this.selectBtn, this),
			i.addEventListener(egret.TouchEvent.TOUCH_END, this.selectBtn, this),
			utils.addChildren(this, [t, e, i, s]),
			this.btnSure = i
		}
	},
	e
} (egret.Sprite);
egret.registerClass(PopConfirmOneSentence, "PopConfirmOneSentence");
var PopVoteCloseRoom = function(t) {
	function e() {
		t.call(this),
		this.arrRes = ["cp1_0", "cp1_1", "cp2", "cp3", "bb_1", "bb_2", "b3_1", "b3_3", "bb_10"],
		this.arrCompResult = [],
		this.compClock = new CompClockVoteCloseRoom,
		this.tfResultFinal = new egret.TextField,
		this.bmBtnClose = new egret.Bitmap(RES.getRes("b3_3"))
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t, e, i, s) {
		this.arrParam = [e, i, s],
		this.parent ? this.numChildren > 0 && this.insertData() : (t.addChild(this), this.loadRes())
	},
	s.reportMyVote = function(t) {
		this.btnAgree.visible = this.btnDisagree.visible = !1,
		this.addSelf(Main.inst, "解散发起人", ["其他玩家1", "其他玩家2", "其他玩家3"], [ResultVote.AGREE, ResultVote.DISAGREE, ResultVote.NOT_VOTE])
	},
	s.loadRes = function() {
		CompLoading.getInst().loadResTemp(this.arrRes, this.initPop, this, Main.inst)
	},
	s.addToStage = function() {
		this.tfResultFinal.visible = this.bmBtnClose.visible = !1,
		this.btnAgree.visible = this.btnDisagree.visible = !0,
		this.insertData()
	},
	s.insertData = function() {
		utils.setProps(this.tfTxDescrip, {
			textFlow: (new egret.HtmlTextParser).parser('玩家<font color="#402013">【' + utils.getStrMax(this.arrParam[0], 10) + "】</font>申请解散房间，请等待其他玩家选择。（超过5分钟未做选择，则默认同意）")
		},
		[.5, 0]);
		for (var t = this.arrCompResult,
		e = 0; e < t.length; e++) t[e].refreshResult(this.arrParam[1][e], this.arrParam[2][e]);
		this.willEndVote()
	},
	s.willEndVote = function() {
		var t = this.arrParam[2],
		e = t[0] == ResultVote.AGREE || t[1] == ResultVote.AGREE || t[2] == ResultVote.AGREE,
		i = t[0] == ResultVote.DISAGREE && t[1] == ResultVote.DISAGREE && t[2] == ResultVote.DISAGREE; (e || i) && (utils.setProps(this.tfResultFinal, {
			text: e ? "房间解散成功，游戏结束。": "房间解散失败，游戏继续。",
			visible: !0
		},
		[.5, .5]), this.btnAgree.visible = this.btnDisagree.visible = !1, this.bmBtnClose.visible = !0, this.compClock.stopTimeDown())
	},
	s.voteMyChoice = function(t) {
		this.reportMyVote(t.target == this.btnAgree),
		this.compClock.stopTimeDown()
	},
	s.voteMyChoiceOverTime = function(t) {
		this.reportMyVote(!0)
	},
	s.exit = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_GAME)
	},
	s.initPop = function() {
		if (this.numChildren) return void this.addToStage();
		utils.drawShadowScreen(this.graphics);
		var t = new egret.Bitmap(RES.getRes("bb_1")),
		e = new egret.Bitmap(RES.getRes("bb_2")),
		i = new egret.Bitmap(RES.getRes("cp3")),
		s = new CompClockVoteCloseRoom,
		n = new egret.TextField,
		r = new egret.Bitmap(RES.getRes("bb_10")),
		a = [],
		o = new egret.TextField,
		h = new btns.BtnBmBm("b3_1", "cp1_0"),
		d = new btns.BtnBmBm("b3_1", "cp1_1"),
		l = new egret.Bitmap(RES.getRes("b3_3"));
		utils.addChildren(this, [t, e]),
		utils.setProps(t, {
			width: 580,
			height: 450,
			x: this.width / 2,
			y: (this.height - 450) / 2
		},
		[.5, 0]),
		utils.setProps(i, {
			x: t.x - 15,
			y: t.y + 5 + i.height / 2
		},
		[.5, .5]),
		utils.setProps(e, {
			x: t.x,
			y: i.y + i.height / 2 + 5,
			width: t.width - 30,
			height: t.height - 90
		},
		[.5, 0]),
		utils.setProps(n, {
			width: e.width - 70,
			height: 114,
			x: e.x,
			y: e.y + 25,
			textColor: 4476483,
			size: 26,
			bold: !0,
			lineSpacing: 12,
			fontFamily: "MicroSoft Yahei"
		},
		[.5, 0]),
		utils.setProps(r, {
			x: e.x,
			y: n.y + n.height + 10
		},
		[.5, 0]);
		for (var c, u = 0; 3 > u; u++) c = new CompResultEveryOne,
		utils.setProps(c, {
			x: n.x - n.width / 2 + 20,
			y: r.y + 20 + 40 * u
		}),
		this.addChild(c),
		a.push(c);
		utils.setProps(h, {
			x: e.x - 30,
			y: c.y + 42
		},
		[1, 0]),
		utils.setProps(d, {
			x: this.width - h.x,
			y: h.y
		},
		[0, 0]),
		utils.setProps(l, {
			x: t.x + t.width / 2 - 20,
			y: t.y + 20
		},
		[.5, .5]),
		utils.setProps(s, {
			x: l.x - 160,
			y: i.y
		},
		[0, .5]),
		utils.setProps(o, {
			text: "房间解散失败，游戏继续...",
			x: e.x,
			y: h.y + h.height / 2,
			textColor: 4202515,
			size: 26,
			bold: !0,
			fontFamily: "MicroSoft Yahei"
		},
		[.5, .5]),
		btns.initScaleBtn(l),
		btns.initFloatBtn(h),
		btns.initFloatBtn(d),
		l.addEventListener(egret.TouchEvent.TOUCH_END, this.exit, this),
		h.addEventListener(egret.TouchEvent.TOUCH_END, this.voteMyChoice, this),
		d.addEventListener(egret.TouchEvent.TOUCH_END, this.voteMyChoice, this),
		s.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.voteMyChoiceOverTime, this),
		utils.addChildren(this, [i, n, r, o, h, d, s, l]),
		this.tfTxDescrip = n,
		this.arrCompResult = a,
		this.btnAgree = h,
		this.btnDisagree = d,
		this.compClock = s,
		this.tfResultFinal = o,
		this.bmBtnClose = l,
		this.addToStage()
	},
	e
} (egret.Sprite);
egret.registerClass(PopVoteCloseRoom, "PopVoteCloseRoom");
var BarPercentScroll = function(t) {
	function e(e) {
		t.call(this),
		this.initBar(e)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.updatePercent = function(t, e, i) {
		var s = this;
		if (e >= t) utils.setProps(this.bmTop, {
			y: 0,
			height: this.bmBtm.height
		});
		else {
			this.bmTop.height == this.bmBtm.height && (this.bmTop.height = 70);
			var n = t - e,
			r = i / n;
			egret.Tween.get(this.bmTop, {
				override: !0
			}).to({
				y: this.nRange * r
			},
			100).call(function() {
				egret.Tween.removeTweens(s.bmTop)
			})
		}
	},
	s.initBar = function(t) {
		var e = new egret.Bitmap(RES.getRes("cp10_1")),
		i = new egret.Bitmap(RES.getRes("cp10_2"));
		utils.setProps(e, {
			height: t
		}),
		utils.setProps(i, {
			x: (e.width - i.width) / 2,
			height: 70
		}),
		utils.addChildren(this, [e, i]),
		this.bmTop = i,
		this.bmBtm = e,
		this.nRange = t - i.height
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BarPercentScroll, "BarPercentScroll");
var BoardEmoji = function(t) {
	function e(e, i) {
		t.call(this),
		this.initBoard(e, i),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function() {
		this.compScroll.setScrollTop(0),
		this.touchScroll()
	},
	s.touchScroll = function() {
		this.barPercentScroll.updatePercent(this.wrapEmoji.height, this.compScroll.height, this.compScroll.scrollTop)
	},
	s.reportUseEmoji = function(t) {
		this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN, !1, {
			nInd: t.data.nInd
		})
	},
	s.initBoard = function(t, e) {
		var i = new egret.Bitmap(RES.getRes("cp12_1")),
		s = new egret.ScrollView,
		n = new egret.Shape,
		r = new BarPercentScroll(e - i.height),
		a = new WrapEmoji(t, e - i.height);
		utils.setProps(this, {
			width: t,
			height: e
		}),
		utils.setProps(i, {
			x: (t - i.width) / 2,
			y: 0
		}),
		utils.setProps(s, {
			y: i.height,
			width: t,
			height: e - i.height,
			horizontalScrollPolicy: !1,
			bounces: !1
		}),
		utils.setProps(n, {
			x: s.x,
			y: s.y
		}),
		utils.setProps(r, {
			x: t - 2,
			y: s.y
		},
		[1, 0]),
		n.graphics.beginFill(14410968),
		n.graphics.drawRect(0, 0, s.width, s.height),
		n.graphics.endFill(),
		s.setContent(a),
		s.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchScroll, this),
		a.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.reportUseEmoji, this),
		utils.addChildren(this, [n, s, i, r]),
		this.barPercentScroll = r,
		this.wrapEmoji = a,
		this.compScroll = s
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardEmoji, "BoardEmoji");
var BoardTextChat = function(t) {
	function e(e, i) {
		t.call(this),
		this.initBoard(e, i),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function() {
		this.toogleDialogWrap(!0)
	},
	s.touchBarSelect = function(t) {
		this.toogleDialogWrap(0 == t.data.nInd)
	},
	s.toogleDialogWrap = function(t) {
		this.compScroll.removeContent(),
		t ? (this.compScroll.setContent(this.wrapFrequentDialog), this.compScroll.setScrollTop(0, 10)) : (this.compScroll.setContent(this.wrapHistoryDialog), this.compScroll.setScrollTop(this.wrapHistoryDialog.height, 10)),
		egret.setTimeout(this.scrollWrap, this, 20)
	},
	s.scrollWrap = function() {
		this.barPercentScroll.updatePercent(this.barSelect.bIsFocusLeft ? this.wrapFrequentDialog.height: this.wrapHistoryDialog.height, this.compScroll.height, this.compScroll.scrollTop)
	},
	s.selectedTextSend = function(t) {
		this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN, !1, {
			nInd: t.data.nInd
		})
	},
	s.initBoard = function(t, e) {
		var i = new BarSelectMsg(t - 50, "cp13_1", "cp13_2", "cp14_1", "cp14_2"),
		s = new egret.ScrollView,
		n = new egret.Shape,
		r = new BarPercentScroll(e - i.height),
		a = new WrapFrequentDialog(t - 40),
		o = new WrapHistoryDialog;
		utils.setProps(this, {
			width: t,
			height: e
		}),
		utils.setProps(i, {
			x: 25,
			y: 3
		}),
		utils.setProps(s, {
			y: i.height,
			width: t,
			height: e - i.height,
			horizontalScrollPolicy: !1,
			bounces: !1,
			scrollSpeed: .5
		}),
		utils.setProps(n, {
			y: s.y
		}),
		utils.setProps(r, {
			x: t - 2,
			y: s.y
		},
		[1, 0]),
		n.graphics.beginFill(14410968),
		n.graphics.drawRect(0, 0, s.width, s.height),
		n.graphics.endFill(),
		i.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.touchBarSelect, this),
		s.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.scrollWrap, this),
		a.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.selectedTextSend, this),
		utils.addChildren(this, [i, n, s, r]),
		this.barSelect = i,
		this.compScroll = s,
		this.wrapFrequentDialog = a,
		this.wrapHistoryDialog = o,
		this.barPercentScroll = r,
		s.setContent(a)
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardTextChat, "BoardTextChat");
var CompVoiceSeconds = function(t) {
	function e() {
		t.call(this),
		this.initComp()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setTime = function(t, e) {
		e ? (utils.setProps(this.tfTimeLong, {
			x: 0,
			text: t + "''"
		},
		[0, .5]), utils.setProps(this.bmVoice, {
			x: this.tfTimeLong.width + this.bmVoice.width / 2 + 5,
			scaleX: -1
		},
		[.5, .5])) : (utils.setProps(this.bmVoice, {
			x: 0,
			scaleX: 1
		},
		[0, .5]), utils.setProps(this.tfTimeLong, {
			x: this.bmVoice.width + 5,
			text: t + "''"
		},
		[0, .5]))
	},
	s.initComp = function() {
		var t = new egret.Bitmap(RES.getRes("cp17")),
		e = new egret.TextField;
		utils.setProps(t, {
			y: t.height / 2
		},
		[0, .5]),
		utils.setProps(e, {
			textColor: 3556654,
			size: 25,
			x: t.width + 10,
			y: t.y,
			text: "00''"
		},
		[0, .5]),
		utils.addChildren(this, [t, e]),
		this.tfTimeLong = e,
		this.bmVoice = t
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompVoiceSeconds, "CompVoiceSeconds");
var UnitDialog = function(t) {
	function e() {
		t.call(this),
		this.nColorTxOthers = 3556654,
		this.nColorTxMe = 14540253,
		this.initUnit()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshUnitText = function(t, e, i) {
		utils.setProps(this.tfSentence, {
			text: e
		}),
		this.bmBoardDialog.width = 320,
		this.posPhotoAndBoardDialog(t),
		t ? utils.setProps(this.tfSentence, {
			x: this.bmBoardDialog.x + this.bmBoardDialog.width / 2 - 25,
			textColor: this.nColorTxMe,
			visible: !0
		},
		[1, .5]) : utils.setProps(this.tfSentence, {
			x: this.bmBoardDialog.x - this.bmBoardDialog.width / 2 + 25,
			textColor: this.nColorTxOthers,
			visible: !0
		},
		[0, .5]),
		this.compVoice.visible = this.bmEmoji.visible = !1
	},
	s.refreshUnitVoice = function(t, e, i) {
		this.bmBoardDialog.width = 200,
		this.posPhotoAndBoardDialog(t),
		this.compVoice.setTime(e, t),
		t ? utils.setProps(this.compVoice, {
			x: this.bmBoardDialog.x + this.bmBoardDialog.width / 2 - 25,
			y: this.bmBoardDialog.y,
			visible: !0
		},
		[1, .5]) : utils.setProps(this.compVoice, {
			x: this.bmBoardDialog.x - this.bmBoardDialog.width / 2 + 25,
			y: this.bmBoardDialog.y,
			visible: !0
		},
		[0, .5]),
		this.tfSentence.visible = this.bmEmoji.visible = !1
	},
	s.refreshUnitEmoji = function(t, e, i) {
		this.bmBoardDialog.width = 110,
		this.posPhotoAndBoardDialog(t),
		t ? utils.setProps(this.bmEmoji, {
			texture: RES.getRes("cp15_0"),
			x: this.bmBoardDialog.x + this.bmBoardDialog.width / 2 - 40,
			y: this.bmBoardDialog.y,
			visible: !0
		},
		[1, .5]) : utils.setProps(this.bmEmoji, {
			texture: RES.getRes("cp15_0"),
			x: this.bmBoardDialog.x - this.bmBoardDialog.width / 2 + 40,
			y: this.bmBoardDialog.y,
			visible: !0
		},
		[0, .5]),
		this.tfSentence.visible = this.compVoice.visible = !1
	},
	s.posPhotoAndBoardDialog = function(t) {
		t ? (utils.setProps(this.compPhoto, {
			x: 320
		}), utils.setProps(this.bmBoardDialog, {
			x: this.compPhoto.x - this.bmBoardDialog.width / 2,
			scaleX: -1
		},
		[.5, .5])) : (utils.setProps(this.compPhoto, {
			x: 0
		}), utils.setProps(this.bmBoardDialog, {
			x: this.compPhoto.width + this.bmBoardDialog.width / 2,
			scaleX: 1
		},
		[.5, .5]))
	},
	s.initUnit = function() {
		var t = new IconPhoto,
		e = new egret.Bitmap(RES.getRes("cp16")),
		i = new egret.Bitmap,
		s = new egret.TextField,
		n = new CompVoiceSeconds;
		utils.setProps(t, {
			width: .8 * t.width,
			height: .8 * t.height,
			scaleX: .8,
			scaleY: .8
		}),
		utils.setProps(e, {
			x: 125,
			y: t.height / 2,
			width: 320
		},
		[.5, .5]),
		utils.setProps(s, {
			y: e.y,
			size: 22,
			bold: !0,
			fontFamily: "MicroSoft Yahei"
		}),
		utils.setProps(i, {
			width: 40,
			height: 40
		}),
		utils.addChildren(this, [t, e, s, n, i]),
		this.compPhoto = t,
		this.compVoice = n,
		this.tfSentence = s,
		this.bmBoardDialog = e,
		this.bmEmoji = i
	},
	e.keyClass = "UnitDialog",
	e
} (egret.DisplayObjectContainer);
egret.registerClass(UnitDialog, "UnitDialog");
var WrapEmoji = function(t) {
	function e(e, i) {
		t.call(this),
		this.initWrap(e, i)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.selectEmoji = function(t) {
		var e = this.arrEmoji[0],
		i = 3 * Math.floor(t.localY / e.height) + Math.floor(t.localX / e.width);
		i > this.arrEmoji.length - 1 || this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN, !1, {
			nInd: i
		})
	},
	s.initWrap = function(t, e) {
		for (var i, s = t / 6 - 1,
		n = t / 3 - 2,
		r = e / 6,
		a = e / 3,
		o = [], h = DataConf.nSumEmojiImg, d = 0; h > d; d++) i = new UnitEmoji(d, n, a),
		utils.setProps(i, {
			x: s + d % 3 * n,
			y: r + Math.floor(d / 3) * a
		},
		[.5, .5]),
		this.addChild(i),
		o.push(i);
		this.arrEmoji = o,
		utils.setProps(this, {
			width: 3 * n,
			height: a * Math.ceil(d / 3)
		}),
		this.drawBgOpacity(n, a),
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectEmoji, this),
		this.touchEnabled = !0
	},
	s.drawBgOpacity = function(t, e) {
		var i = this.graphics;
		i.beginFill(0, .01),
		i.drawRect(0, 0, this.width, this.height),
		i.endFill();
		for (var s, n = Math.ceil(this.arrEmoji.length / 3) - 1, r = this.arrEmoji[1].x, a = 0; n > a; a++) s = new egret.Bitmap(RES.getRes("bb_10")),
		utils.setProps(s, {
			x: r,
			y: e * (a + 1),
			width: 3 * t + 100
		},
		[.5, .5]),
		this.addChild(s);
		for (var o = 0; 2 > o; o++) s = new egret.Bitmap(RES.getRes("bb_10")),
		utils.setProps(s, {
			x: t * (o + 1),
			y: -120,
			width: e * (n + 1) + 240,
			rotation: 90
		}),
		this.addChild(s),
		console.log(s.x, s.y)
	},
	e
} (egret.Sprite);
egret.registerClass(WrapEmoji, "WrapEmoji");
var UnitEmoji = function(t) {
	function e(e, i, s) {
		t.call(this),
		this.nInd = e,
		utils.setProps(this, {
			width: i,
			height: s
		});
		var n = new egret.Bitmap(RES.getRes("cp15_0"));
		utils.setProps(n, {
			x: this.width / 2,
			y: this.height / 2,
			scaleX: 2.3,
			scaleY: 2.3
		},
		[.5, .5]),
		this.addChild(n)
	}
	__extends(e, t);
	var i = (__define, e);
	i.prototype;
	return e
} (egret.DisplayObjectContainer);
egret.registerClass(UnitEmoji, "UnitEmoji");
var WrapFrequentDialog = function(t) {
	function e(e) {
		t.call(this),
		this.initWrap(e)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.touchDialog = function(t) {
		var e = Math.floor(t.localY / this.arrUnitDialog[0].height);
		e = Math.min(e, this.dataConf.length - 1),
		this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN, !1, {
			nInd: e
		})
	},
	s.initWrap = function(t) {
		for (var e, i = RES.getRes("frequent_chat_text"), s = [], n = 0; n < i.length; n++) e = new UnitDialogFrequent(n, i[n], t),
		utils.setProps(e, {
			x: 13,
			y: e.height * n
		}),
		this.addChild(e),
		s.push(e);
		this.arrUnitDialog = s,
		this.dataConf = i,
		this.fillBg(),
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchDialog, this),
		this.touchEnabled = !0
	},
	s.fillBg = function() {
		this.graphics.beginFill(0, .01),
		this.graphics.drawRect(0, 0, this.width, this.height + 20),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(WrapFrequentDialog, "WrapFrequentDialog");
var UnitDialogFrequent = function(t) {
	function e(e, i, s) {
		t.call(this),
		this.initUnit(s, i)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.initUnit = function(t, e) {
		var i = new egret.Bitmap(RES.getRes("cp9")),
		s = new egret.TextField;
		utils.setProps(i, {
			width: t,
			y: 10
		}),
		utils.setProps(s, {
			text: e,
			textColor: 2572322,
			size: 27,
			bold: !0,
			x: 20,
			y: i.y + i.height / 2
		},
		[0, .5]),
		utils.setProps(this, {
			width: t,
			height: i.height + 10
		}),
		utils.addChildren(this, [i, s])
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(UnitDialogFrequent, "UnitDialogFrequent");
var WrapHistoryDialog = function(t) {
	function e() {
		t.call(this),
		this.arrUnitDialog = [],
		this.addUnit(TypeDialog.TEXT, !1, "", {
			strText: "聊天文字"
		}),
		this.addUnit(TypeDialog.TEXT, !0, "", {
			strText: "聊天文字"
		}),
		this.addUnit(TypeDialog.VOICE, !1, "", {
			nTimeLong: 99
		}),
		this.addUnit(TypeDialog.VOICE, !1, "", {
			nTimeLong: 99
		}),
		this.addUnit(TypeDialog.EMOJI, !1, "", {
			nIndEmoji: 9
		}),
		this.addUnit(TypeDialog.EMOJI, !0, "", {
			nIndEmoji: 9
		}),
		this.addUnit(TypeDialog.VOICE, !0, "", {
			nTimeLong: 99
		}),
		this.addUnit(TypeDialog.VOICE, !0, "", {
			nTimeLong: 99
		}),
		this.addUnit(TypeDialog.EMOJI, !1, "", {
			nIndEmoji: 9
		}),
		this.addUnit(TypeDialog.EMOJI, !0, "", {
			nIndEmoji: 9
		}),
		this.addUnit(TypeDialog.TEXT, !1, "", {
			strText: "聊天文字"
		}),
		this.addUnit(TypeDialog.TEXT, !0, "", {
			strText: "聊天文字"
		})
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addUnit = function(t, e, i, s) {
		var n = CachePool.produce(UnitDialog);
		switch (t) {
		case TypeDialog.TEXT:
			n.refreshUnitText(e, s.strText, i);
			break;
		case TypeDialog.VOICE:
			n.refreshUnitVoice(e, s.nTimeLong, i);
			break;
		case TypeDialog.EMOJI:
			n.refreshUnitEmoji(e, s.nIndEmoji, i)
		}
		utils.setProps(n, {
			x: 5,
			y: 10 + (n.height + 10) * this.arrUnitDialog.length
		}),
		this.addChild(n),
		this.arrUnitDialog.push(n),
		this.fillAreaTouch()
	},
	s.fillAreaTouch = function() {
		this.graphics.clear(),
		this.graphics.beginFill(0, .01),
		this.graphics.drawRect(0, 0, this.width, this.height + 20),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(WrapHistoryDialog, "WrapHistoryDialog");
var TypeDialog; !
function(t) {
	t[t.TEXT = 0] = "TEXT",
	t[t.VOICE = 1] = "VOICE",
	t[t.EMOJI = 2] = "EMOJI"
} (TypeDialog || (TypeDialog = {}));
var CompClockVoteCloseRoom = function(t) {
	function e() {
		t.call(this),
		this.nSecends = 300,
		this.initComp(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this),
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRem, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.stopTimeDown = function() {
		this.tmTimeCut.stop()
	},
	s.onAdd = function() {
		utils.setProps(this.tfTime, {
			text: "" + this.nSecends
		},
		[1, .5]),
		this.tmTimeCut.reset(),
		this.tmTimeCut.start()
	},
	s.onRem = function() {
		this.tmTimeCut.stop()
	},
	s.funTimeCut = function(t) {
		utils.setProps(this.tfTime, {
			text: "" + (this.nSecends - this.tmTimeCut.currentCount)
		},
		[1, .5])
	},
	s.funTimeCutComplete = function(t) {
		this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN)
	},
	s.initComp = function() {
		var t = new egret.Bitmap(RES.getRes("cp2")),
		e = new egret.TextField,
		i = new egret.Timer(1e3, this.nSecends);
		utils.setProps(e, {
			text: "" + this.nSecends,
			x: t.width - 29,
			y: t.height / 2,
			textColor: 16777215,
			fontFamily: "MicroSoft Yahei",
			size: 25,
			bold: !0
		},
		[1, .5]),
		i.addEventListener(egret.TimerEvent.TIMER, this.funTimeCut, this),
		i.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.funTimeCutComplete, this),
		utils.addChildren(this, [t, e]),
		this.tfTime = e,
		this.tmTimeCut = i
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompClockVoteCloseRoom, "CompClockVoteCloseRoom");
var CompResultEveryOne = function(t) {
	function e() {
		t.call(this),
		this.arrColor = {
			nick: 4202515,
			wait: 4739655,
			result: 11804954
		},
		utils.setProps(this, {
			size: 26,
			bold: !0,
			textColor: this.arrColor.nick,
			fontFamily: "MicroSoft Yahei"
		})
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshResult = function(t, e) {
		var i, s;
		switch (e) {
		case ResultVote.AGREE:
			i = "同意",
			s = this.arrColor.result;
			break;
		case ResultVote.DISAGREE:
			i = "不同意",
			s = this.arrColor.result;
			break;
		case ResultVote.NOT_VOTE:
			i = "等待选择",
			s = this.arrColor.wait
		}
		t = utils.getStrMax(t, 10),
		this.textFlow = (new egret.HtmlTextParser).parser(t + ' <font color="' + s + '">' + i + "</font>")
	},
	e
} (egret.TextField);
egret.registerClass(CompResultEveryOne, "CompResultEveryOne");
var SceneGame = function(t) {
	function e() {
		t.call(this),
		e.inst = this,
		this.initScene(),
		this.clearAllCardsUsingAndUsed()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this)
	},
	s.createdRoomJust = function() {
		this.setSelfWindBottom(WindDirection.EAST),
		this.refreshInfo(Direction.DOWN, "", DataUser.getInst().infoUser.headUrl, DataUser.getInst().infoUser.strNick, 2e3, !0),
		this.refreshInfo(Direction.LEFT, "", "", "", 0, !1),
		this.refreshInfo(Direction.UP, "", "", "", 0, !1),
		this.refreshInfo(Direction.RIGHT, "", "", "", 0, !1),
		DataUser.getInst().playerInfo.banker_gold = 0,
		this.panelTop.addBtnsJustIntoRoom(!0),
		this.GetJoinInfo()
	},
	s.GetJoinInfo = function() {
		DataInteract.getInst().attachJoinHouse(this.setPlayerInfo, this)
	},
	s.setPlayerInfo = function(t) {
		var e = 1,
		i = "";
		i = 0 == t.role_index ? "banker": "next" + t.role_index,
		DataUser.getInst().playerInfo[i + "_role_id"] = t.role_id,
		DataUser.getInst().playerInfo[i + "_nick"] = t.nick,
		DataUser.getInst().playerInfo[i + "_headurl"] = t.headurl,
		DataUser.getInst().playerInfo[i + "_gold"] = t.gold,
		this.refreshInfo(DataTransform.getInst().WindDirectionToDirection(t.role_index), "", t.headurl, t.nick, t.gold, !1),
		3 == t.role_index && (this.remBtnsJustIntoRoom(), 0 == Main.dataGame.directionMe ? 1 == e ? DataInteract.getInst().ReqVoteKing(this.getGhostBack, this) : (CARD_KING = CardID.CARD_KING, this.panelDesk.refershGhostCard(), DataInteract.getInst().ReqSendCardFromEast(this.getNewCard, this)) : 1 == e ? DataInteract.getInst().attachVoteKing(this.getGhostBack, this) : DataInteract.getInst().attachDeliverCard(this.getNewCard, this))
	},
	s.getGhostBack = function(t) {
		CARD_KING = t.card_id,
		this.panelDesk.refershGhostCard(),
		0 == Main.dataGame.directionMe ? DataInteract.getInst().ReqSendCardFromEast(this.getNewCard, this) : DataInteract.getInst().attachDeliverCard(this.getNewCard, this)
	},
	s.getNewCard = function(t) {
		var e = t.cards_str.split(","),
		i = t.last_card_id;
		14 == e.length ? e.splice(e.indexOf(i), 1) : i = 0,
		Main.dataGame.initialAllUsersCards(e, i);
		for (var s = [], n = 0; 4 > n; n++) Main.dataGame.directionMe == n ? this.refreshCardList(1, s, s, e, i) : 0 == n ? this.refreshCardList(DataTransform.getInst().WindDirectionToDirection(n), s, s, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1) : this.refreshCardList(DataTransform.getInst().WindDirectionToDirection(n), s, s, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
		this.whoTurnToPopCard(0),
		DataInteract.getInst().attachHandOutOneCard(this.onGetOneNewCard, this),
		DataInteract.getInst().attachOutputCard(this.onLookOtherCard, this)
	},
	s.onGetOneNewCard = function(t) {
		var e, i = t.card_role_id;
		i == DataUser.getInst().infoUser.roleId ? (e = Main.dataGame.directionMe, Main.dataGame.pushToCard(i, t.card_id)) : (e = DataTransform.getInst().roleIdToWindDirection(i), this.panelDesk.pushOneCardToUsed(DataTransform.getInst().WindDirectionToDirection(e), 1), Main.dataGame.pushToCard(i, 1));
		var s = DataTransform.getInst().transferCardsToListShow(Main.dataGame.arrCardsUser[e]),
		n = DataTransform.getInst().WindDirectionToDirection(e),
		r = s.arrIdCommon.splice(s.arrIdCommon.length - 1, 1)[0];
		this.refreshCardList(n, s.arrIdLight, s.arrIdDarkBar, s.arrIdCommon, r),
		this.whoTurnToPopCard(e)
	},
	s.onLookOtherCard = function(t) {
		var e, i = t.card_id,
		s = t.card_role_id;
		s == DataUser.getInst().infoUser.roleId ? (e = Main.dataGame.directionMe, this.pushCardToUsed(DataTransform.getInst().WindDirectionToDirection(e), i), Main.dataGame.popUpCard(e, i), DataTransform.getInst().sortCards(Main.dataGame.arrCardsUser[e])) : (e = DataTransform.getInst().roleIdToWindDirection(s), this.whoTurnToPopCard(e), Main.dataGame.popUpCard(e, i), this.panelDesk.pushOneCardToUsed(DataTransform.getInst().WindDirectionToDirection(e), t.card_id));
		var n = DataTransform.getInst().transferCardsToListShow(Main.dataGame.arrCardsUser[e]),
		r = DataTransform.getInst().WindDirectionToDirection(e);
		this.refreshCardList(r, n.arrIdLight, n.arrIdDarkBar, n.arrIdCommon)
	},
	s.intoRoomJust = function() {
		this.GetJoinInfo()
	},
	s.addBtnsJustIntoRoom = function(t) {
		this.panelTop.addBtnsJustIntoRoom(t)
	},
	s.remBtnsJustIntoRoom = function() {
		this.panelTop.remBtnsJustIntoRoom()
	},
	s.refreshInfo = function(t, e, i, s, n, r) {
		this.boardPhotoPlaying.refreshInfo(t, e, i, s, n, r)
	},
	s.setSelfWindBottom = function(t) {
		this.panelBtm.setSelfWindBottom(t)
	},
	s.whoTurnToPopCard = function(t) {
		this.panelBtm.whoTurnToPopCard(t),
		t == Main.dataGame.directionMe
	},
	s.refreshCardList = function(t, e, i, s, n) {
		this.panelDesk.refreshListOneUser(t, e, i, s, n)
	},
	s.pushCardToUsed = function(t, e) {
		this.panelDesk.pushOneCardToUsed(t, e)
	},
	s.popCardFromUsed = function(t) {
		this.panelDesk.popOneCardFromUsed(t)
	},
	s.clearAllCardsUsingAndUsed = function() {
		this.panelDesk.clearAllCardsUsing(),
		this.panelDesk.clearAllCardsUsed()
	},
	s.showPanelOverPart = function(t, e, i, s, n, r, a, o, h, d, l, c, u, _, g) {
		this.panelOverPart.updatePanel(t, e, i, s, n, r, a, o, h, d, l, c, u, _, g),
		this.addChild(this.panelOverPart)
	},
	s.showPanelOverTotal = function(t, e, i, s, n, r, a, o, h, d, l, c) {
		if (!this.panelOverTotal) {
			var u = new PanelOverTotal;
			u.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backFromPanelOverTotal, this),
			this.panelOverTotal = u
		}
		this.panelOverTotal.refreshPanel(this, t, e, i, s, n, r, a, o, h, d, l, c)
	},
	s.showChatText = function(t, e) {
		this.boardPhotoPlaying.showChatText(t, e)
	},
	s.showChatEmoji = function(t, e) {
		this.boardPhotoPlaying.showChatEmoji(t, e)
	},
	s.showChatVoice = function(t) {
		this.boardPhotoPlaying.showChatVoiceAndPlay(t)
	},
	s.showPopVoteCloseRoom = function(t, e, i) {
		this.panelTop.showPopVoteCloseRoom(t, e, i)
	},
	s.backFromPanelOverTotal = function(t) {},
	s.beginNextPanGame = function() {},
	s.backFromPopVoteCloseRoom = function() {},
	s.backHotel = function(t) {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_HOTEL_FROM_ROOM)
	},
	s.closeRoom = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_HOTEL_FROM_ROOM)
	},
	s.initScene = function() {
		var t = new PanelBtm,
		e = new PanelDesk,
		i = new PanelTop,
		s = new PanelActionGame,
		n = new PanelOverPart,
		r = new PanelOverTotal,
		a = new BoardPhotoPlaying;
		i.addEventListener(DataGlobal.Evts.BACK_HOTEL_FROM_ROOM, this.backHotel, this),
		i.addEventListener(DataGlobal.Evts.CLOSE_ROOM_BY_HOST, this.closeRoom, this),
		i.addEventListener(DataGlobal.Evts.VOTE_CLOSE_ROOM, this.backFromPopVoteCloseRoom, this),
		n.addEventListener(DataGlobal.Evts.BEGIN_NEXT_PAN, this.beginNextPanGame, this),
		utils.addChildren(this, [t, e, a, i]),
		this.panelBtm = t,
		this.panelDesk = e,
		this.panelTop = i,
		this.panelActionGame = s,
		this.panelOverPart = n,
		this.panelOverTotal = r,
		this.boardPhotoPlaying = a
	},
	s.showDoubleAction = function() {
		this.addChild(this.panelActionGame),
		this.panelActionGame.showDoubleAction()
	},
	s.showBarAction = function() {
		this.addChild(this.panelActionGame),
		this.panelActionGame.showBarAction()
	},
	s.showHuAction = function() {
		this.addChild(this.panelActionGame),
		this.panelActionGame.showHuAction()
	},
	s.remBoardAction = function() {
		this.panelActionGame.parent && this.removeChild(this.panelActionGame)
	},
	s.showTwDouble = function(t) {
		this.addChild(this.panelActionGame),
		this.panelActionGame.showTwDouble(t)
	},
	s.showTwBar = function(t) {
		this.addChild(this.panelActionGame),
		this.panelActionGame.showTwBar(t)
	},
	s.showTwHu = function(t) {
		this.addChild(this.panelActionGame),
		this.panelActionGame.showTwHu(t)
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(SceneGame, "SceneGame");
var SceneIndex = function(t) {
	function e() {
		t.call(this),
		this.initBoard(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function() {
		this.btnCreateRoom.setTxBtn( - 1 == DataUser.getInst().infoUser.nRoomIdPlaying),
		utils.ctrlChildrenTouch(this, !0)
	},
	s.refershInfo = function() {
		this.compPhotoIndex.refershInfo()
	},
	s.intoRoomJust = function(t) {
		CompLoading.getInst().loadGroupWithCall(CompLoading.getInst().GroupsName.RES_GAME, this.joinRoomJust, this, this)
	},
	s.createdRoomJust = function(t) {
		CompLoading.getInst().loadGroupWithCall(CompLoading.getInst().GroupsName.RES_GAME, this.reportCreateRoom, this, this)
	},
	s.reportCreateRoom = function() {
		this.parent.removeChild(this),
		utils.ctrlChildrenTouch(this, !0),
		this.dispatchEventWith(DataGlobal.Evts.CREATE_ROOM)
	},
	s.joinRoomJust = function(t) {
		this.parent.removeChild(this),
		utils.ctrlChildrenTouch(this, !0),
		this.dispatchEventWith(DataGlobal.Evts.JOIN_ROOM, !1, t)
	},
	s.backIndex = function(t) {
		utils.ctrlChildrenTouch(this, !0)
	},
	s.showPopUserInfo = function() {
		if (!this.boardUserInfo) {
			var t = new PopUserInfo;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardUserInfo = t
		}
		this.boardUserInfo.addSelf(this.parent),
		utils.ctrlChildrenTouch(this, !1)
	},
	s.showPopTipAddRoom = function() {
		if (!this.BoardTipAddRoom) {
			var t = new PopTipAddRoom;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.BoardTipAddRoom = t
		}
		this.BoardTipAddRoom.addSelf(this.parent),
		utils.ctrlChildrenTouch(this, !1)
	},
	s.showPopCertifyName = function() {
		if (!this.boardCertifyName) {
			var t = new PopCertifyName;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardCertifyName = t
		}
		this.boardCertifyName.addSelf(this.parent),
		utils.ctrlChildrenTouch(this, !1)
	},
	s.showPopCreateRoom = function() {
		if (DataUser.getInst().infoUser.nRoomIdPlaying <= 0) {
			if (this.clearPlayerInfo(), !this.boardCreateRoom) {
				var t = new PopCreateRoom;
				t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
				t.addEventListener(DataGlobal.Evts.CREATE_ROOM, this.createdRoomJust, this),
				this.boardCreateRoom = t
			}
			this.boardCreateRoom.addSelf(this.parent),
			utils.ctrlChildrenTouch(this, !1)
		} else DataGlobal.bIsOnLine ? DataInteract.getInst().ReqHouseInfo(DataUser.getInst().infoUser.nRoomIdPlaying, this.reloadRoom, this) : this.reloadRoom()
	},
	s.reloadRoom = function() {},
	s.clearPlayerInfo = function() {
		DataUser.getInst().playerInfo.play_type = 0,
		DataUser.getInst().playerInfo.banker_role_id = 0,
		DataUser.getInst().playerInfo.banker_nick = "",
		DataUser.getInst().playerInfo.banker_headurl = "",
		DataUser.getInst().playerInfo.banker_gold = 0,
		DataUser.getInst().playerInfo.next1_role_id = 0,
		DataUser.getInst().playerInfo.next1_nick = "",
		DataUser.getInst().playerInfo.next1_headurl = "",
		DataUser.getInst().playerInfo.next1_gold = 0,
		DataUser.getInst().playerInfo.next2_role_id = 0,
		DataUser.getInst().playerInfo.next2_nick = "",
		DataUser.getInst().playerInfo.next2_headurl = "",
		DataUser.getInst().playerInfo.next2_gold = 0,
		DataUser.getInst().playerInfo.next3_role_id = 0,
		DataUser.getInst().playerInfo.next3_nick = "",
		DataUser.getInst().playerInfo.next3_headurl = "",
		DataUser.getInst().playerInfo.next3_gold = 0,
		DataUser.getInst().playerInfo.cur_circle = 0,
		DataUser.getInst().playerInfo.room_desc = ""
	},
	s.showPopIntoRoom = function() {
		if (DataUser.getInst().infoUser.nRoomIdPlaying > 0) return void this.showPopCannontJoinOtherRoom();
		if (this.clearPlayerInfo(), !this.boardJoinRoom) {
			var t = new PopJoinRoom;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			t.addEventListener(DataGlobal.Evts.JOIN_ROOM, this.intoRoomJust, this),
			this.boardJoinRoom = t
		}
		this.boardJoinRoom.addSelf(this.parent),
		utils.ctrlChildrenTouch(this, !1)
	},
	s.showPopCannontJoinOtherRoom = function() {
		var t = this;
		if (!this.popCannotJoinOtherRoom) {
			var e = new CompTipOneSentence;
			e.showTip("抱歉，你已加入房间，不能再加入其他房间", null, this),
			e.addEventListener("back",
			function() {
				t.parent.removeChild(t.popCannotJoinOtherRoom),
				utils.ctrlChildrenTouch(t, !0)
			},
			this),
			this.popCannotJoinOtherRoom = e
		}
		this.parent.addChild(this.popCannotJoinOtherRoom),
		utils.ctrlChildrenTouch(this, !1)
	},
	s.initBoard = function() {
		var t = new egret.Bitmap(RES.getRes("aa_0")),
		e = new egret.Bitmap(RES.getRes("aa_7")),
		i = new egret.Bitmap(RES.getRes("aa_6")),
		s = new egret.Bitmap(RES.getRes("aa_1")),
		n = new CompPhotoIndex,
		r = new egret.Bitmap(RES.getRes("aa_2")),
		a = new BoardIndexRightIcon,
		o = new IconStartRoom("a2_1", "a4_1", "a3_1"),
		h = new IconStartRoom("a2_2", "a4_2", "a3_2"),
		d = new BarBroadcast;
		utils.setProps(t, {
			width: DataGlobal.wStage,
			height: DataGlobal.hStage
		}),
		utils.setProps(e, {
			width: DataGlobal.wStage
		}),
		utils.setProps(n, {
			x: 10,
			y: 20
		}),
		utils.setProps(i, {
			x: (DataGlobal.wStage - i.width) / 2 - 30,
			y: (e.height - i.height) / 2
		}),
		utils.setProps(s, {
			x: e.width - s.width - 10,
			y: e.height - 15
		}),
		utils.setProps(r, {
			x: .7 * r.width,
			y: e.height + r.height / 2 - 5
		},
		[.5, .5]),
		utils.setProps(o, {
			x: e.width / 2 - 200,
			y: 200
		},
		[.5, 0]),
		utils.setProps(h, {
			x: e.width - o.x,
			y: o.y
		},
		[.5, 0]),
		utils.setProps(d, {
			x: (e.width - d.width) / 2,
			y: 100
		}),
		utils.setProps(a, {
			x: t.width - a.width - 20,
			y: 20
		}),
		utils.addChildren(this, [t, e, n, i, s, r, o, h, d, a]),
		r.addEventListener(egret.TouchEvent.TOUCH_END, this.showPopCertifyName, this),
		n.addEventListener(DataGlobal.Evts.SHOW_BOARD_USER_INFO, this.showPopUserInfo, this),
		n.addEventListener(DataGlobal.Evts.SHOW_BOARD_TIP_ADD_ROOM, this.showPopTipAddRoom, this),
		o.addEventListener(DataGlobal.Evts.SHOW_BOARD_ABOUT_INTO_ROOM, this.showPopCreateRoom, this),
		h.addEventListener(DataGlobal.Evts.SHOW_BOARD_ABOUT_INTO_ROOM, this.showPopIntoRoom, this),
		btns.initFloatBtn(r),
		this.compPhotoIndex = n,
		this.btnCreateRoom = o,
		this.btnIntoRoom = h,
		this.barBroadcast = d,
		this.boardIndexRightIcon = a
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(SceneIndex, "SceneIndex");
var BarBroadcast = function(t) {
	function e() {
		t.call(this),
		this.initComps(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startFrame, this),
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.stopFrame, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.startFrame = function() {
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this)
	},
	s.stopFrame = function() {
		this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this)
	},
	s.onFrame = function() {
		this.tfTx.x -= 1,
		this.tfTx.x + this.tfTx.width < 70 && (this.tfTx.x = this.width - 10)
	},
	s.initComps = function() {
		var t = new egret.Bitmap(RES.getRes("aa_3")),
		e = new egret.TextField;
		utils.setProps(e, {
			text: "锅里麻将正式上线",
			size: 30,
			y: (t.height - 30) / 2
		}),
		utils.addChildren(this, [t, e]),
		this.tfTx = e,
		this.width = t.width,
		this.setTfMask(e, t)
	},
	s.setTfMask = function(t, e) {
		var i = new egret.Shape;
		i.graphics.beginFill(0, .82),
		i.graphics.drawRect(0, 0, e.width - 80, e.height),
		i.graphics.endFill(),
		i.x = 70,
		this.addChild(i),
		t.mask = i
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BarBroadcast, "BarBroadcast");
var BoardIndexRightIcon = function(t) {
	function e() {
		t.call(this),
		this.initBoard()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showPopShare = function() {
		if (!this.boardShare) {
			var t = new PopShare;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardShare = t
		}
		this.boardShare.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.showPopHowToPlay = function() {
		if (!this.boardHowToPlay) {
			var t = new PopHowToPlay;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardHowToPlay = t
		}
		this.boardHowToPlay.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.showPopHistoryAttack = function() {
		if (!this.boardHistoryAttack) {
			var t = new PopHistoryAttack;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardHistoryAttack = t
		}
		this.boardHistoryAttack.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.showPopSetting = function() {
		if (!this.boardSetting) {
			var t = new PopSetting;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardSetting = t
		}
		this.boardSetting.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.showPopMsg = function() {
		if (!this.boardMsg) {
			var t = new PopMsg;
			t.addEventListener(DataGlobal.Evts.BACK_INDEX, this.backIndex, this),
			this.boardMsg = t
		}
		this.boardMsg.addSelf(Main.inst),
		utils.ctrlChildrenTouch(this.parent, !1)
	},
	s.backIndex = function() {
		this.parent.touchChildren = !0
	},
	s.touchIcon = function(t) {
		var e = this.arrBtnsRightTop.indexOf(t.target);
		switch (e) {
		case 0:
			this.showPopShare();
			break;
		case 1:
			this.showPopMsg();
			break;
		case 2:
			this.showPopHowToPlay();
			break;
		case 3:
			this.showPopHistoryAttack();
			break;
		case 4:
			this.showPopSetting()
		}
	},
	s.initBoard = function() {
		for (var t, e = [], i = 0; 5 > i; i++) 1 != i && (t = new egret.Bitmap(RES.getRes("a8_" + (i + 1))), e.push(t));
		var s = new IconMsg;
		e.splice(1, 0, s),
		this.arrBtnsRightTop = e,
		this.posIcons(e)
	},
	s.posIcons = function(t) {
		for (var e, i = 0; i < t.length; i++) e = t[i],
		utils.setProps(t[i], {
			width: .9 * e.width,
			height: .9 * e.height,
			x: e.width / 2 + 75 * i,
			y: e.height / 2
		},
		[.5, .5]),
		btns.initScaleBtn(e),
		e.addEventListener(egret.TouchEvent.TOUCH_END, this.touchIcon, this),
		this.addChild(e)
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardIndexRightIcon, "BoardIndexRightIcon");
var IconMsg = function(t) {
	function e() {
		t.call(this),
		this.initIcon(),
		this.setSumMsg(2)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setSumMsg = function(t) {
		utils.setProps(this.bmtSumMsg, {
			text: "" + t
		},
		[.5, .5])
	},
	s.initIcon = function() {
		var t = new egret.Bitmap(RES.getRes("a8_2")),
		e = new egret.Bitmap(RES.getRes("a8_2_0")),
		i = new egret.BitmapText;
		utils.setProps(t, {
			width: .9 * t.width,
			height: .9 * t.height
		}),
		utils.setProps(e, {
			x: t.width - e.width / 2,
			y: e.height / 2
		},
		[.5, .5]),
		utils.setProps(i, {
			x: e.x,
			y: e.y,
			font: RES.getRes("yellowfnt_fnt"),
			scaleX: .7,
			scaleY: .7
		},
		[.5, .5]),
		utils.addChildren(this, [t, e, i]),
		this.bmtSumMsg = i
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(IconMsg, "IconMsg");
var IconPhoto = function(t) {
	function e() {
		t.call(this),
		this.initIcon()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setPhotoRes = function(t) {
		this.bmPhoto.texture = t
	},
	s.setPhotoUrl = function(t, e) {
		null == e ? (this.setPhotoRes(RES.getRes("temp_1")), "" != t && RES.getResByUrl(t, this.setPhotoRes, this, RES.ResourceItem.TYPE_IMAGE)) : this.setPhotoRes(e)
	},
	s.initIcon = function() {
		var t = new egret.Bitmap(RES.getRes("a5_1")),
		e = new egret.Bitmap(RES.getRes("temp_1")),
		i = new egret.Bitmap(RES.getRes("a5_2"));
		utils.setProps(e, {
			width: .9 * i.width,
			height: .9 * i.height,
			x: 5,
			y: 5
		}),
		utils.addChildren(this, [t, e, i]),
		this.bmPhoto = e,
		this.setMaskToPhoto(e)
	},
	s.setMaskToPhoto = function(t) {
		var e = new egret.Shape;
		e.graphics.beginFill(0),
		e.graphics.drawRoundRect(5, 5, t.width, t.height, 30, 30),
		e.graphics.endFill(),
		this.addChild(e),
		t.mask = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(IconPhoto, "IconPhoto");
var IconStartRoom = function(t) {
	function e(e, i, s) {
		t.call(this),
		this.strTextureBtn = i,
		this.initIcon(e, i, s)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.touchBtn = function() {
		this.dispatchEventWith(DataGlobal.Evts.SHOW_BOARD_ABOUT_INTO_ROOM)
	},
	s.setTxBtn = function(t) {
		this.btnStart.updateBtn(this.strTextureBtn, t ? "a3_1": "a3_3")
	},
	s.initIcon = function(t, e, i) {
		var s = new egret.Bitmap(RES.getRes(t)),
		n = new btns.BtnBmBm(e, i, {},
		{
			y: 36
		});
		utils.setProps(n, {
			x: s.width / 2,
			y: 320
		},
		[.5, .5]),
		utils.addChildren(this, [s, n]),
		n.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtn, this),
		btns.initFloatBtn(n),
		this.btnStart = n
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(IconStartRoom, "IconStartRoom");
var CompPhotoIndex = function(t) {
	function e() {
		t.call(this),
		this.initComp(),
		this.setNickAndId(DataUser.getInst().infoUser.strNick, DataUser.getInst().infoUser.roleId + "")
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setNickAndId = function(t, e) {
		utils.setProps(this.tfNickName, {
			text: t
		},
		[.5, 0]),
		utils.setProps(this.tfId, {
			text: "ID：" + e
		},
		[.5, 0])
	},
	s.setSumRoom = function(t) {
		utils.setProps(this.bmtSumRoom, {
			text: "" + t
		},
		[.5, .5])
	},
	s.refershInfo = function() {
		this.setNickAndId(DataUser.getInst().infoUser.strNick, DataUser.getInst().infoUser.roleId + ""),
		this.iconPhoto.setPhotoUrl(DataUser.getInst().infoUser.headUrl, DataUser.getInst().infoUser.headPic)
	},
	s.showBoardUserInfo = function() {
		this.dispatchEventWith(DataGlobal.Evts.SHOW_BOARD_USER_INFO)
	},
	s.showBoardTipAddRoom = function() {
		this.dispatchEventWith(DataGlobal.Evts.SHOW_BOARD_TIP_ADD_ROOM)
	},
	s.initComp = function() {
		var t = new IconPhoto,
		e = new egret.TextField,
		i = new egret.TextField,
		s = new egret.Bitmap(RES.getRes("aa_8")),
		n = new egret.Bitmap(RES.getRes("aa_4")),
		r = new egret.Bitmap(RES.getRes("aa_5")),
		a = new egret.BitmapText;
		utils.setProps(t, {
			x: t.width / 2 + 10,
			y: t.height / 2
		},
		[.5, .5]),
		utils.setProps(n, {
			x: t.width + 25,
			y: 70,
			scaleX: .9,
			scaleY: .9
		},
		[.5, .5]),
		utils.setProps(s, {
			x: n.x,
			y: n.y
		},
		[0, .5]),
		utils.setProps(a, {
			x: s.x + s.width / 2 - 5,
			y: s.y + 3,
			font: RES.getRes("yellowfnt_fnt"),
			text: "9999"
		},
		[.5, .5]),
		utils.setProps(i, {
			x: n.x + s.width / 2 - n.width / 2 + 10,
			y: 30,
			textColor: 16777215,
			size: 15,
			width: s.width,
			fontFamily: "Microsoft YaHei"
		},
		[.5, 0]),
		utils.setProps(r, {
			x: s.x + s.width - 10,
			y: s.y + 2,
			width: 1.3 * r.width,
			height: 1.3 * r.height
		},
		[.5, .5]),
		utils.setProps(e, {
			x: i.x,
			y: 5,
			textColor: 16776960,
			size: 20,
			bold: !0,
			width: s.width,
			fontFamily: "Microsoft YaHei"
		},
		[.5, 0]),
		utils.addChildren(this, [t, e, i, s, n, r, a]),
		t.setPhotoUrl(DataUser.getInst().infoUser.headUrl, DataUser.getInst().infoUser.headPic),
		t.addEventListener(egret.TouchEvent.TOUCH_END, this.showBoardUserInfo, this),
		r.addEventListener(egret.TouchEvent.TOUCH_END, this.showBoardTipAddRoom, this),
		btns.initScaleBtn(r),
		btns.initScaleBtn(t),
		this.tfId = i,
		this.tfNickName = e,
		this.bmtSumRoom = a,
		this.iconPhoto = t
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompPhotoIndex, "CompPhotoIndex");
var CompPopBoard = function(t) {
	function e(e, i, s, n) {
		t.call(this),
		this.initSelf(e, i, s, n)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.initSelf = function(t, e, i, s) {
		var n = new egret.Bitmap(RES.getRes("bb_1")),
		r = new egret.Bitmap(RES.getRes(t)),
		a = new egret.Bitmap(RES.getRes(e));
		utils.setProps(n, {
			width: i,
			height: s
		}),
		utils.setProps(a, {
			x: i / 2,
			y: 12 + a.height / 2
		},
		[.5, .5]),
		utils.setProps(r, {
			x: 15,
			y: a.y + a.height / 2 + 10,
			width: i - 30,
			height: s - 100
		}),
		utils.addChildren(this, [n, r, a])
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompPopBoard, "CompPopBoard");
var BoardOptionRoom = function(t) {
	function e() {
		t.call(this),
		this.sizeConf = {
			nWidthBg: 760,
			nHeightBg: 500,
			nTitleX: 13,
			nOptionsStartX: 145,
			nXCenterContent: 430
		},
		this.initBoardFirst()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setOptionsSelect = function() {},
	s.touchOption = function(t) {},
	s.isSelectPlayWay = function(t) {},
	s.isSelectHorse = function(t) {
		var e = this.arrOptionHorse.indexOf(t); - 1 != e && this.singleSelectOneOpt(this.arrOptionHorse, e)
	},
	s.isSelectComputeScore = function(t) {
		var e = this.arrOptionComputeScore.indexOf(t); - 1 != e && this.singleSelectOneOpt(this.arrOptionComputeScore, e)
	},
	s.singleSelectOneOpt = function(t, e) {
		for (var i = 0; i < t.length; i++) t[i].ctrlSelect(e == i)
	},
	s.initBoard = function() {},
	s.initBoardFirst = function() {
		this.addBg(),
		this.addOptionJu(10),
		this.addTipExhaustCard()
	},
	s.addBg = function() {
		var t = new egret.Bitmap(RES.getRes("bb_3"));
		utils.setProps(t, {
			width: this.sizeConf.nWidthBg,
			height: this.sizeConf.nHeightBg
		}),
		this.addChild(t)
	},
	s.addTipExhaustCard = function() {
		var t = new egret.TextField;
		utils.setProps(t, {
			textFlow: (new egret.HtmlTextParser).parser('<font color="#491900">注：房卡在开始游戏后第一局牌局结束后扣除，</font><font color="#ff0000">四人每人都会消耗房卡！</font>'),
			x: this.width / 2,
			y: this.height - 25,
			size: 20,
			bold: !0
		},
		[.5, .5]),
		this.addChild(t)
	},
	s.addOptionJu = function(t) {
		var e = new egret.Bitmap(RES.getRes("bb_6")),
		i = new egret.TextField;
		utils.setProps(e, {
			x: this.sizeConf.nXCenterContent - e.width - 40,
			y: t
		}),
		utils.setProps(i, {
			text: "（房卡X1）",
			textColor: 4790528,
			size: 25,
			bold: !0,
			x: e.x + e.width + 5,
			y: e.y + e.height / 2
		},
		[0, .5]),
		utils.addChildren(this, [e, i]);
		var s = e.y + e.height + 5;
		return this.addGroupTitle("b7_1", t),
		this.addBmLineSeperate(s),
		s + 10
	},
	s.addOptionsPlayWay = function(t) {
		return this.addGroupTitle("b7_2", t),
		0
	},
	s.addOptionStrTip = function(t) {
		return this.addGroupTitle("b7_3", t),
		0
	},
	s.addOptionKing = function(t) {
		return this.addGroupTitle("b7_5", t),
		0
	},
	s.addOptionHorse = function(t) {
		return this.addGroupTitle("b7_4", t),
		0
	},
	s.addOptionComputeScore = function(t) {
		this.addGroupTitle("b7_6", t);
		var e = ["1倍计算", "2倍计算", "3倍计算", "5倍计算"];
		return this.arrOptionComputeScore = this.addArrOption(t, e, !0),
		this.singleSelectOneOpt(this.arrOptionComputeScore, 0),
		0
	},
	s.addBmLineSeperate = function(t) {
		var e = new egret.Bitmap(RES.getRes("bb_10"));
		utils.setProps(e, {
			x: this.sizeConf.nXCenterContent - 20,
			y: t
		},
		[.5, .5]),
		this.addChild(e)
	},
	s.addGroupTitle = function(t, e) {
		var i = new egret.Bitmap(RES.getRes(t));
		utils.setProps(i, {
			x: this.sizeConf.nTitleX,
			y: e
		}),
		this.addChild(i)
	},
	s.addArrOptionTip = function(t, e) {
		for (var i, s, n = [], r = 18, a = 10, o = 0; o < e.length; o++) i = new OptionStrTipScore(e[o]),
		s ? s.x + s.width + 2 * r + i.width < this.sizeConf.nWidthBg ? (i.x = s.x + s.width + r, i.y = s.y) : (i.x = this.sizeConf.nOptionsStartX, i.y = s.y + s.height + a) : (i.x = this.sizeConf.nOptionsStartX, i.y = t),
		n.push(i),
		s = i,
		this.addChild(i);
		return n
	},
	s.addArrOption = function(t, e, i, s) {
		void 0 === s && (s = 20);
		for (var n, r, a = [], o = 18, h = 10, d = 0; d < e.length; d++) n = new OptionSelect(e[d], i ? "b8_1": "b10_1", i ? "b8_2": "b10_4", s),
		r ? r.x + r.width + 2 * o + n.width < this.sizeConf.nWidthBg ? (n.x = r.x + r.width + o, n.y = r.y) : (n.x = this.sizeConf.nOptionsStartX, n.y = r.y + r.height + h) : (n.x = this.sizeConf.nOptionsStartX, n.y = t),
		btns.initFloatBtn(n),
		n.addEventListener(egret.TouchEvent.TOUCH_END, this.touchOption, this),
		a.push(n),
		r = n,
		this.addChild(n);
		return a
	},
	s.getSumMultiple = function() {
		var t, e = this.getIndFromOptionsSingle(this.arrOptionComputeScore);
		switch (e) {
		case 3:
			t = 5;
			break;
		default:
			t = e + 1
		}
		return t
	},
	s.isSelectKing = function(t) {
		var e = this.arrOptionKing.indexOf(t); - 1 != e && (this.singleSelectOneOpt(this.arrOptionKing, e), 0 == e && this.arrOptionPlayWay[0].ctrlSelect(!1), this.arrOptionPlayWay[0].ctrlTouch(0 != e))
	},
	s.cancelAllOptions = function(t) {
		for (var e = 0; e < t.length; e++) t[e].ctrlSelect(!1)
	},
	s.ctrlAllOptionsTouch = function(t, e) {
		for (var i = 0; i < t.length; i++) t[i].ctrlTouch(e)
	},
	s.getIndFromOptionsSingle = function(t) {
		for (var e = 0; e < t.length; e++) if (t[e].isBeSelected()) return e;
		return - 1
	},
	s.getIndsFromOptionsMany = function(t) {
		for (var e = [], i = 0; i < t.length; i++) e[i] = t[i].isBeSelected();
		return e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardOptionRoom, "BoardOptionRoom");
var BoardOptionBloodWar = function(t) {
	function e() {
		t.call(this),
		this.initBoard(),
		this.resetOptions()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setOptionsSelect = function() {},
	s.resetOptions = function() {
		this.cancelAllOptions(this.arrOptionPlayWay),
		this.isSelectHorse(this.arrOptionHorse[0]),
		this.isSelectComputeScore(this.arrOptionComputeScore[0])
	},
	s.touchOption = function(t) {
		var e = t.target;
		this.isSelectPlayWay(e),
		this.isSelectHorse(e),
		this.isSelectComputeScore(e)
	},
	s.initBoard = function() {
		var t = 80,
		e = 25;
		t = this.addOptionsPlayWay(t) + e,
		t = this.addOptionHorse(t) + e,
		this.addOptionComputeScore(t)
	},
	s.addOptionsPlayWay = function(e) {
		t.prototype.addOptionsPlayWay.call(this, e);
		var i = ["8分起胡", "豪七对封顶", "杠加倍", "自摸加倍", "七对不必缺门"],
		s = this.addArrOption(e + 10, i, !1, 30),
		n = s[s.length - 1],
		r = n.y + n.height + 10;
		return this.singleSelectOneOpt(s, 0),
		this.addBmLineSeperate(r),
		this.arrOptionPlayWay = s,
		r
	},
	s.addOptionHorse = function(e) {
		t.prototype.addOptionHorse.call(this, e);
		var i = ["无马", "1马"],
		s = this.addArrOption(e + 10, i, !0, 30),
		n = s[s.length - 1],
		r = n.y + n.height + 10;
		return this.singleSelectOneOpt(s, 0),
		this.addBmLineSeperate(r),
		this.arrOptionHorse = s,
		r
	},
	e
} (BoardOptionRoom);
egret.registerClass(BoardOptionBloodWar, "BoardOptionBloodWar");
var BoardOptionCreateRoom = function(t) {
	function e() {
		t.call(this),
		this.initBoard(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function(t) {
		this.showBoard(0)
	},
	s.getOptionsCreateRoom = function() {
		this.arrBoardOptionRoom[this.nIndSelect].setOptionsSelect()
	},
	s.showBoard = function(t) {
		for (var e = this.arrBoardOptionRoom,
		i = 0; i < e.length; i++) e[i].visible = i == t;
		this.nIndSelect = t
	},
	s.initBoard = function() {
		var t = new BoardOptionRoomPushFall,
		e = new BoardOptionQingyuan,
		i = new BoardOptionShaoguan;
		this.arrBoardOptionRoom = [t, e, i],
		utils.addChildren(this, this.arrBoardOptionRoom)
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardOptionCreateRoom, "BoardOptionCreateRoom");
var BoardOptionQingyuan = function(t) {
	function e() {
		t.call(this),
		this.initBoard(),
		this.resetOptions()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setOptionsSelect = function() {
		var t = 0 == this.getIndFromOptionsSingle(this.arrOptionKing) ? OptionKing.NO_KING: OptionKing.TURN_KING,
		e = this.getHasPlusWithoutKing(),
		i = 2 * this.getIndFromOptionsSingle(this.arrOptionHorse),
		s = this.getSumMultiple();
		utils.setProps(OptionsPlayLogic.getInst().OptionsPlayCard, {
			WayPlay: WayPlay.QINGYUAN,
			NoKingDouble: !1,
			WithoutLetterCard: !1,
			BarExplodeAllContain: this.arrOptionPlayWay[0].isBeSelected(),
			RobBarPlusTwoHorse: this.arrOptionPlayWay[1].isBeSelected(),
			OneNineMustHave: this.arrOptionPlayWay[2].isBeSelected(),
			TwelveFallGroundShouldHu: this.arrOptionPlayWay[3].isBeSelected(),
			RiskBarPlusTweHorse: this.arrOptionPlayWay[4].isBeSelected(),
			CanMakeSanyuanSixi: !1,
			OneNineCanEatHu: !1,
			King: t,
			PlusScoreWithoutKing: e,
			Horse: i,
			IsHorseAndHu: this.optionHorseHu.isBeSelected(),
			HasHorseTop: -1,
			Multiple: s
		})
	},
	s.getHasPlusWithoutKing = function() {
		var t, e = this.getIndFromOptionsSingle(this.arrOptionAboutHasKing);
		switch (e) {
		case - 1 : t = PlusScoreWithoutKing.NO_PLUS;
			break;
		case 0:
			t = PlusScoreWithoutKing.PLUS_THREE;
			break;
		case 1:
			t = PlusScoreWithoutKing.DOUBLE
		}
		return t
	},
	s.resetOptions = function() {
		this.cancelAllOptions(this.arrOptionPlayWay),
		this.isSelectKing(this.arrOptionKing[0]),
		this.isSelectHorse(this.arrOptionHorse[0]),
		this.isSelectComputeScore(this.arrOptionComputeScore[0])
	},
	s.touchOption = function(t) {
		var e = t.target;
		this.isSelectPlayWay(e),
		this.isSelectKing(e),
		this.isSelectHorse(e),
		this.isSelectComputeScore(e),
		this.ctrlStatusAboutHasKing(e)
	},
	s.isSelectKing = function(t) {
		var e = this.arrOptionKing.indexOf(t);
		if ( - 1 != e) {
			this.singleSelectOneOpt(this.arrOptionKing, e);
			for (var i = 0; i < this.arrOptionAboutHasKing.length; i++) this.arrOptionAboutHasKing[i].ctrlTouch(1 == e);
			this.arrOptionStrTipScore[this.arrOptionStrTipScore.length - 1].ctrlFocus(0 != e),
			0 == e ? (this.cancelAllOptions(this.arrOptionAboutHasKing), this.arrOptionPlayWay[4].ctrlSelect(!1)) : this.arrOptionAboutHasKing[0].isBeSelected() || this.arrOptionAboutHasKing[1].isBeSelected() || this.arrOptionAboutHasKing[0].ctrlSelect(!0),
			this.arrOptionPlayWay[4].ctrlTouch(0 != e);
			var s = this.arrOptionKing[1].isBeSelected();
			s && this.arrOptionPlayWay[3].ctrlSelect(!1),
			this.arrOptionPlayWay[3].ctrlTouch(!s)
		}
	},
	s.isSelectHorse = function(t) {
		var e = this.arrOptionHorse.indexOf(t); - 1 != e && (this.singleSelectOneOpt(this.arrOptionHorse, e), this.optionHorseHu.ctrlTouch(0 != e), 0 == e && this.optionHorseHu.ctrlSelect(!1))
	},
	s.ctrlStatusAboutHasKing = function(t) {
		var e = this.arrOptionAboutHasKing.indexOf(t); - 1 != e && this.singleSelectOneOpt(this.arrOptionAboutHasKing, e)
	},
	s.initBoard = function() {
		var t = 70,
		e = 5;
		t = this.addOptionsPlayWay(t) + e,
		t = this.addOptionStrTip(t) + e,
		t = this.addOptionKing(t) + e,
		t = this.addOptionHorse(t) + e,
		this.addOptionComputeScore(t)
	},
	s.addOptionsPlayWay = function(e) {
		t.prototype.addOptionsPlayWay.call(this, e);
		var i = ["杠爆全包", "抢杠马数+2", "幺九必有1和9", "十二张落地包自摸", "风险杠马数+2"],
		s = this.addArrOption(e + 10, i, !1, 25),
		n = s[s.length - 1],
		r = n.y + n.height + 10;
		return this.singleSelectOneOpt(s, 0),
		this.addBmLineSeperate(r),
		this.arrOptionPlayWay = s,
		r
	},
	s.addOptionStrTip = function(e) {
		t.prototype.addOptionStrTip.call(this, e);
		var i = ["鸡胡3分", "对对胡6分", "清一色9分", "清对12分", "幺九15分", "全字18分", "十三幺21分"],
		s = this.addArrOptionTip(e + 10, i),
		n = s[s.length - 1],
		r = n.y + n.height + 10;
		return this.addBmLineSeperate(r),
		this.arrOptionStrTipScore = s,
		r
	},
	s.addOptionKing = function(e) {
		t.prototype.addOptionKing.call(this, e);
		var i = ["无鬼", "翻鬼"],
		s = this.addArrOption(e + 10, i, !0, 25),
		n = s[s.length - 1],
		r = n.y + n.height + 10;
		return this.singleSelectOneOpt(s, 0),
		this.addBmLineSeperate(r),
		this.arrOptionAboutHasKing = this.addOptionAboutKing(n.x + n.width, n.y),
		this.arrOptionKing = s,
		r
	},
	s.addOptionHorse = function(e) {
		t.prototype.addOptionHorse.call(this, e);
		var i = ["无马", "2马", "4马", "6马"],
		s = this.addArrOption(e + 10, i, !0, 25),
		n = s[s.length - 1],
		r = new OptionSelect("马跟自摸", "b10_1", "b10_4", 25);
		utils.setProps(r, {
			x: s[0].x,
			y: n.y + n.height + 10
		}),
		btns.initFloatBtn(r),
		this.addChild(r);
		var a = r.y + r.height + 10;
		return this.singleSelectOneOpt(s, 0),
		this.addBmLineSeperate(a),
		this.arrOptionHorse = s,
		this.optionHorseHu = r,
		a
	},
	s.addOptionAboutKing = function(t, e) {
		var i = ["无鬼加3分", "无鬼加倍"],
		s = this.addArrOption(e, i, !0, 20);
		s[0].ctrlSelect(!0),
		s[0].x = t + 60,
		s[1].x = s[0].x + s[0].width + 10;
		var n = new egret.Shape;
		return n.graphics.lineStyle(3, 4790528),
		n.graphics.moveTo(0, 0),
		n.graphics.lineTo(0, 30),
		utils.setProps(n, {
			x: t + 30,
			y: e + 5
		}),
		this.addChild(n),
		s
	},
	e
} (BoardOptionRoom);
egret.registerClass(BoardOptionQingyuan, "BoardOptionQingyuan");
var BoardOptionRoomPushFall = function(t) {
	function e() {
		t.call(this),
		this.initBoard(),
		this.resetOptions()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setOptionsSelect = function() {
		var t = this.getOptKing(),
		e = 2 * this.getIndFromOptionsSingle(this.arrOptionHorse),
		i = this.getSumMultiple();
		utils.setProps(OptionsPlayLogic.getInst().OptionsPlayCard, {
			WayPlay: WayPlay.PUSH_FALL,
			NoKingDouble: this.arrOptionPlayWay[0].isBeSelected(),
			WithoutLetterCard: this.arrOptionPlayWay[1].isBeSelected(),
			BarExplodeAllContain: this.arrOptionPlayWay[2].isBeSelected(),
			RobBarPlusTwoHorse: this.arrOptionPlayWay[3].isBeSelected(),
			OneNineMustHave: !1,
			TwelveFallGroundShouldHu: !1,
			RiskBarPlusTweHorse: !1,
			CanMakeSanyuanSixi: !1,
			OneNineCanEatHu: !1,
			King: t,
			PlusScoreWithoutKing: PlusScoreWithoutKing.NO_PLUS,
			Horse: e,
			IsHorseAndHu: !1,
			HasHorseTop: 0,
			Multiple: i
		})
	},
	s.getOptKing = function() {
		var t;
		switch (this.getIndFromOptionsSingle(this.arrOptionKing)) {
		case 0:
			t = OptionKing.NO_KING;
			break;
		case 1:
			t = OptionKing.BLANK_AS_KING;
			break;
		case 2:
			t = OptionKing.TURN_KING
		}
		return t
	},
	s.resetOptions = function() {
		this.cancelAllOptions(this.arrOptionPlayWay),
		this.isSelectKing(this.arrOptionKing[0]),
		this.isSelectHorse(this.arrOptionHorse[0]),
		this.isSelectComputeScore(this.arrOptionComputeScore[0])
	},
	s.touchOption = function(t) {
		var e = t.target;
		this.isSelectPlayWay(e),
		this.isSelectKing(e),
		this.isSelectHorse(e),
		this.isSelectComputeScore(e)
	},
	s.initBoard = function() {
		var t = 80,
		e = 25;
		t = this.addOptionsPlayWay(t) + e,
		t = this.addOptionKing(t) + e,
		t = this.addOptionHorse(t) + e,
		this.addOptionComputeScore(t)
	},
	s.addOptionsPlayWay = function(e) {
		t.prototype.addOptionsPlayWay.call(this, e);
		var i = ["无鬼加倍", "不带字牌", "杠爆全包", "抢杠马数+2"],
		s = this.addArrOption(e + 10, i, !1, 30),
		n = s[s.length - 1],
		r = n.y + n.height + 10;
		return this.singleSelectOneOpt(s, 0),
		this.addBmLineSeperate(r),
		this.arrOptionPlayWay = s,
		r
	},
	s.addOptionKing = function(e) {
		t.prototype.addOptionKing.call(this, e);
		var i = ["无鬼", "白板做鬼", "翻鬼"],
		s = this.addArrOption(e + 10, i, !0, 30),
		n = s[s.length - 1],
		r = n.y + n.height + 10;
		return this.singleSelectOneOpt(s, 0),
		this.addBmLineSeperate(r),
		this.arrOptionKing = s,
		r
	},
	s.addOptionHorse = function(e) {
		t.prototype.addOptionHorse.call(this, e);
		var i = ["无马", "2马", "4马", "6马"],
		s = this.addArrOption(e + 10, i, !0, 30),
		n = s[s.length - 1],
		r = n.y + n.height + 10;
		return this.singleSelectOneOpt(s, 0),
		this.addBmLineSeperate(r),
		this.arrOptionHorse = s,
		r
	},
	e
} (BoardOptionRoom);
egret.registerClass(BoardOptionRoomPushFall, "BoardOptionRoomPushFall");
var BoardOptionShaoguan = function(t) {
	function e() {
		t.call(this),
		this.initBoard(),
		this.resetOptions()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setOptionsSelect = function() {
		var t = 2 * this.getIndFromOptionsSingle(this.arrOptionHorse),
		e = this.getSumMultiple();
		utils.setProps(OptionsPlayLogic.getInst().OptionsPlayCard, {
			WayPlay: WayPlay.SHAOGUAN,
			NoKingDouble: !1,
			WithoutLetterCard: !1,
			BarExplodeAllContain: this.arrOptionPlayWay[0].isBeSelected(),
			RobBarPlusTwoHorse: this.arrOptionPlayWay[1].isBeSelected(),
			OneNineMustHave: this.arrOptionPlayWay[3].isBeSelected(),
			TwelveFallGroundShouldHu: this.arrOptionPlayWay[4].isBeSelected(),
			RiskBarPlusTweHorse: !1,
			CanMakeSanyuanSixi: this.arrOptionPlayWay[2].isBeSelected(),
			OneNineCanEatHu: !1,
			King: OptionKing.NO_KING,
			PlusScoreWithoutKing: PlusScoreWithoutKing.NO_PLUS,
			Horse: t,
			IsHorseAndHu: this.optionHorseHu.isBeSelected(),
			HasHorseTop: this.getTopHorseScore(),
			Multiple: e
		})
	},
	s.getTopHorseScore = function() {
		var t, e = this.getIndFromOptionsSingle(this.arrOptionHorseTop);
		switch (e) {
		case - 1 : t = -1;
			break;
		case 0:
			t = 8;
			break;
		case 1:
			t = 16
		}
		return t
	},
	s.resetOptions = function() {
		this.cancelAllOptions(this.arrOptionPlayWay),
		this.isSelectHorse(this.arrOptionHorse[0]),
		this.cancelAllOptions(this.arrOptionHorseTop),
		this.isSelectComputeScore(this.arrOptionComputeScore[0]),
		this.ctrlStatusTipAboutPlayWay()
	},
	s.touchOption = function(t) {
		var e = t.target;
		this.isSelectPlayWay(e),
		this.isSelectHorse(e),
		this.isSelectComputeScore(e),
		this.isSelectHorseHu(e),
		this.isSelectHorseAndHu(e)
	},
	s.isSelectPlayWay = function(t) {
		var e = this.arrOptionPlayWay.indexOf(t); - 1 != e && this.ctrlStatusTipAboutPlayWay()
	},
	s.isSelectHorse = function(t) {
		var e = this.arrOptionHorse.indexOf(t); - 1 != e && (this.singleSelectOneOpt(this.arrOptionHorse, e), this.optionHorseHu.ctrlTouch(0 != e), 0 == e && (this.optionHorseHu.ctrlSelect(!1), this.cancelAllOptions(this.arrOptionHorseTop), this.ctrlAllOptionsTouch(this.arrOptionHorseTop, 0 != e)))
	},
	s.isSelectHorseAndHu = function(t) {
		t == this.optionHorseHu && (this.optionHorseHu.isBeSelected() ? this.ctrlAllOptionsTouch(this.arrOptionHorseTop, !0) : (this.cancelAllOptions(this.arrOptionHorseTop), this.ctrlAllOptionsTouch(this.arrOptionHorseTop, !1)))
	},
	s.isSelectHorseHu = function(t) {
		var e = this.arrOptionHorseTop.indexOf(t); - 1 != e && this.singleSelectOneOpt(this.arrOptionHorseTop, e)
	},
	s.ctrlStatusTipAboutPlayWay = function() {
		for (var t = this.arrOptionPlayWay[2].isBeSelected(), e = this.arrOptionStrTipScore, i = e.length - 4; i < e.length; i++) e[i].ctrlFocus(t)
	},
	s.initBoard = function() {
		var t = 70,
		e = 10;
		t = this.addOptionsPlayWay(t) + e,
		t = this.addOptionStrTip(t) + e,
		t = this.addOptionHorse(t) + e,
		this.addOptionComputeScore(t)
	},
	s.addOptionsPlayWay = function(e) {
		t.prototype.addOptionsPlayWay.call(this, e);
		var i = ["杠爆全包", "抢杠马数+2", "可做三元四喜", "幺九或以上可吃胡", "十二张落地包自摸"],
		s = this.addArrOption(e + 10, i, !1, 25),
		n = s[s.length - 1],
		r = n.y + n.height + 10;
		return this.singleSelectOneOpt(s, 0),
		this.addBmLineSeperate(r),
		this.arrOptionPlayWay = s,
		r
	},
	s.addOptionStrTip = function(e) {
		t.prototype.addOptionStrTip.call(this, e);
		var i = ["鸡胡2分", "对对胡/混一色4分", "清一色/混对8分", "清对/混幺九16分", "清幺九/全字/十三幺32分", "小三元8分", "大三元16分", "小四喜16分", "大四喜32分"],
		s = this.addArrOptionTip(e + 10, i),
		n = s[s.length - 1],
		r = n.y + n.height + 10;
		return this.addBmLineSeperate(r),
		this.arrOptionStrTipScore = s,
		r
	},
	s.addOptionHorse = function(e) {
		t.prototype.addOptionHorse.call(this, e);
		var i = ["无马", "2马", "4马", "6马"],
		s = this.addArrOption(e + 10, i, !0, 25),
		n = s[s.length - 1],
		r = new OptionSelect("马跟自摸", "b10_1", "b10_4", 25);
		utils.setProps(r, {
			x: s[0].x,
			y: n.y + n.height + 15
		}),
		btns.initFloatBtn(r),
		r.addEventListener(egret.TouchEvent.TOUCH_END, this.touchOption, this),
		this.addChild(r);
		var a = this.addOptionsHorseTop(r.x + r.width, r.y - 8),
		o = a + 10;
		return this.singleSelectOneOpt(s, 0),
		this.addBmLineSeperate(o),
		this.arrOptionHorse = s,
		this.optionHorseHu = r,
		o
	},
	s.addOptionsHorseTop = function(t, e) {
		var i = ["马8分封顶", "马16分封顶"],
		s = this.addArrOption(e, i, !0, 20);
		s[0].x = t + 60,
		s[1].x = s[0].x + s[0].width + 10;
		var n = new egret.Shape;
		return n.graphics.lineStyle(3, 4790528),
		n.graphics.moveTo(0, 0),
		n.graphics.lineTo(0, 30),
		utils.setProps(n, {
			x: t + 30,
			y: e + 5
		}),
		this.addChild(n),
		this.arrOptionHorseTop = s,
		s[1].y + s[1].height
	},
	e
} (BoardOptionRoom);
egret.registerClass(BoardOptionShaoguan, "BoardOptionShaoguan");
var OptionSelect = function(t) {
	function e(e, i, s, n) {
		t.call(this),
		this.bIsSelected = !1,
		this.arrStrTextureBtn = [i, s],
		this.initOption(e, n),
		this.drawSelf()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.isBeSelected = function() {
		return this.bIsSelected
	},
	s.ctrlSelect = function(t) {
		this.bIsSelected = t,
		utils.setProps(this.bmSelect, {
			texture: RES.getRes(this.arrStrTextureBtn[t ? 1 : 0])
		})
	},
	s.ctrlTouch = function(t) {
		this.alpha = t ? 1 : .5,
		this.touchEnabled = t
	},
	s.touchSelf = function(t) {
		this.bIsSelected = !this.bIsSelected,
		this.ctrlSelect(this.bIsSelected),
		this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN)
	},
	s.initOption = function(t, e) {
		void 0 === e && (e = 25);
		var i = new egret.Bitmap(RES.getRes(this.arrStrTextureBtn[0])),
		s = new egret.TextField;
		utils.setProps(s, {
			x: i.width + 5,
			y: i.height / 2,
			text: t,
			bold: !0,
			textColor: 4790528,
			size: e
		},
		[0, .5]),
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchSelf, this),
		utils.addChildren(this, [i, s]),
		this.bmSelect = i
	},
	s.drawSelf = function() {
		this.graphics.beginFill(0, .01),
		this.graphics.drawRect(0, 0, this.width, this.height),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(OptionSelect, "OptionSelect");
var OptionStrTipScore = function(t) {
	function e(e) {
		t.call(this),
		this.initOption(e)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.ctrlFocus = function(t) {
		this.alpha = t ? 1 : .3
	},
	s.initOption = function(t) {
		utils.setProps(this, {
			text: "* " + t,
			textColor: 4790528,
			size: 20,
			bold: !0
		})
	},
	e
} (egret.TextField);
egret.registerClass(OptionStrTipScore, "OptionStrTipScore");
var BoardSelectWayPlay = function(t) {
	function e(e) {
		void 0 === e && (e = 460),
		t.call(this),
		this.initBoard(e),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function(t) {
		this.chooseBtn(0)
	},
	s.selectOneWay = function(t) {
		var e = this.arrBtns.indexOf(t.target);
		this.chooseBtn(e),
		this.reportIndSelect(e)
	},
	s.reportIndSelect = function(t) {
		this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN, !1, {
			nInd: t
		})
	},
	s.chooseBtn = function(t) {
		void 0 === t && (t = 0),
		this.nIndSelect = t;
		for (var e = this.arrBtns,
		i = 0; i < e.length; i++) e[i].ctrlSelect(t == i)
	},
	s.initBoard = function(t) {
		for (var e, i = new egret.Bitmap(RES.getRes("bb_3")), s = [], n = [1, 3, 4], r = 0; r < n.length; r++) e = new BtnSelectWay(r, n[r]),
		utils.setProps(e, {
			x: 5,
			y: 15 + (e.height + 10) * r
		}),
		btns.initFloatBtn(e),
		e.addEventListener(egret.TouchEvent.TOUCH_END, this.selectOneWay, this),
		this.addChild(e),
		s.push(e);
		utils.setProps(i, {
			width: e.width - 5,
			height: t
		}),
		this.addChildAt(i, 0),
		this.arrBtns = s
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardSelectWayPlay, "BoardSelectWayPlay");
var BoardWayPlay = function(t) {
	function e() {
		t.call(this),
		this.confContent = RES.getRes("play_way_content"),
		this.initBoard(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.resetFirst, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.resetFirst = function() {
		this.showTipPlay(0)
	},
	s.showTipPlay = function(t) {
		var e = this.confContent[t];
		this.compStarStartDifficult.setSumStar(e.start_difficulty),
		this.compStarTechDifficult.setSumStar(e.technology_difficulty),
		this.tfTip.textFlow = (new egret.HtmlTextParser).parser(e.content),
		this.scrollTip.setScrollTop(0, 10)
	},
	s.initBoard = function() {
		var t = new egret.Bitmap(RES.getRes("bb_3")),
		e = new egret.ScrollView,
		i = new CompStarDifficult("上手难度"),
		s = new CompStarDifficult("技巧难度"),
		n = new egret.DisplayObjectContainer,
		r = new egret.TextField;
		utils.setProps(t, {
			width: 510,
			height: 460
		}),
		utils.setProps(e, {
			x: 15,
			y: 15,
			width: 480,
			height: 430,
			verticalScrollPolicy: !0,
			horizontalScrollPolicy: !1
		}),
		utils.setProps(s, {
			x: s.x + i.width + 10
		}),
		utils.setProps(r, {
			y: i.height + 10,
			width: 480,
			size: 22,
			textColor: 4790528,
			lineSpacing: 8,
			fontFamily: "MicroSoft Yahei"
		}),
		utils.addChildren(n, [i, s, r]),
		e.setContent(n),
		utils.addChildren(this, [t, e]),
		this.scrollTip = e,
		this.tfTip = r,
		this.compStarStartDifficult = i,
		this.compStarTechDifficult = s
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardWayPlay, "BoardWayPlay");
var CompStarDifficult = function(t) {
	function e(e) {
		t.call(this),
		this.initComp(e)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setSumStar = function(t) {
		for (var e = this.arrBmStar,
		i = 0; i < e.length; i++) e[i].visible = t > i
	},
	s.initComp = function(t) {
		var e = new egret.TextField;
		utils.setProps(e, {
			size: 25,
			textColor: 4790528,
			text: t
		}),
		this.addChild(e);
		for (var i, s = [], n = 0; 5 > n; n++) i = new egret.Bitmap(RES.getRes("bb_11")),
		utils.setProps(i, {
			x: e.width + 10 + n * (i.width + 8),
			y: e.height / 2
		},
		[.5, .5]),
		this.addChild(i),
		s.push(i);
		this.arrBmStar = s
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompStarDifficult, "CompStarDifficult");
var BtnSelectWay = function(t) {
	function e(e, i) {
		t.call(this),
		this.nIndBtn = e,
		this.nIndTextureTx = i,
		this.initBtn()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.ctrlSelect = function(t) {
		this.bmBgSelect.visible = t,
		this.bmTx.texture = RES.getRes(t ? "b5_" + this.nIndTextureTx: "b6_" + this.nIndTextureTx)
	},
	s.initBtn = function() {
		var t = new egret.Bitmap(RES.getRes("bb_5")),
		e = new egret.Bitmap(RES.getRes("bb_4")),
		i = new egret.Bitmap(RES.getRes("b5_" + this.nIndTextureTx));
		utils.setProps(t, {
			x: t.width / 2,
			y: e.height / 2
		},
		[.5, .5]),
		utils.setProps(i, {
			x: t.x,
			y: t.y
		},
		[.5, .5]),
		utils.addChildren(this, [t, e, i]),
		this.bmBgSelect = e,
		this.bmTx = i
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BtnSelectWay, "BtnSelectWay");
var BoardInputRoomNum = function(t) {
	function e() {
		t.call(this),
		this.arrUnitKey = [],
		this.initBoard(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function() {
		this.clearAllNumInputed()
	},
	s.touchKey = function(t) {
		var e = this.arrUnitKey.indexOf(t.target);
		switch (e) {
		case 9:
			this.clearAllNumInputed();
			break;
		case 11:
			if (0 == this.nIndInputing) return;
			this.arrUnitNumRoom[--this.nIndInputing].clearInput();
			break;
		default:
			this.arrUnitNumRoom[this.nIndInputing++].setContentInput(t.target.strText),
			this.requestIntoRoom()
		}
	},
	s.clearAllNumInputed = function() {
		for (var t = this.arrUnitNumRoom,
		e = 0; e < t.length; e++) t[e].clearInput();
		this.nIndInputing = 0
	},
	s.requestIntoRoom = function() {
		var t = this.arrUnitNumRoom;
		if (! (this.nIndInputing < t.length)) {
			for (var e = "",
			i = 0; i < t.length; i++) e += t[i].nContentInput;
			var s = parseInt(e);
			this.clearAllNumInputed(),
			this.dispatchEventWith(DataGlobal.Evts.SEND_REQUEST_BLOCKED, !1, {
				nRoomId: s
			})
		}
	},
	s.initBoard = function() {
		for (var t, e = new egret.Bitmap(RES.getRes("bb_7")), i = [], s = [], n = 0; 6 > n; n++) t = new UnitNumRoom,
		utils.setProps(t, {
			x: e.width / 2 + 70 * (n - 2.5),
			y: t.height / 2
		},
		[.5, .5]),
		btns.initScaleBtn(t),
		this.addChild(t),
		i.push(t);
		utils.setProps(e, {
			y: 66
		});
		for (var r, a = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "重输", "0", "删除"], o = 0; 12 > o; o++) r = new UnitInputKey(a[o], e.width / 3, e.height / 4),
		utils.setProps(r, {
			x: e.width / 2 + (o % 3 - 1) * r.width,
			y: e.y + (Math.floor(o / 3) + .5) * r.height,
			fontFamily: "Microsoft YaHei"
		},
		[.5, .5]),
		btns.initScaleBtn(r),
		r.addEventListener(egret.TouchEvent.TOUCH_END, this.touchKey, this),
		this.addChild(r),
		s.push(r);
		this.addChildAt(e, 0),
		this.arrUnitKey = s,
		this.arrUnitNumRoom = i
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BoardInputRoomNum, "BoardInputRoomNum");
var CompTipOneSentence = function(t) {
	function e() {
		t.call(this),
		this.initComp()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.showTip = function(t, e, i) {
		utils.setProps(this.tfOneSentence, {
			text: t
		},
		[.5, .5])
	},
	s.touchBtnSure = function() {
		this.dispatchEventWith("back")
	},
	s.initComp = function() {
		this.drawShadow();
		var t = new CompPopBoard("bb_2", "", 300, 200),
		e = new egret.TextField,
		i = new btns.BtnBmBm("b3_1", "b4_1", {},
		{
			y: 27
		});
		utils.setProps(t, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2
		}),
		utils.setProps(e, {
			textColor: 4790528,
			size: 25,
			lineSpacing: 5,
			x: this.width / 2,
			y: t.y + 90
		},
		[.5, .5]),
		utils.setProps(i, {
			x: this.width / 2,
			y: t.y + t.height - 10,
			touchEnabled: !0
		},
		[.5, 1]),
		btns.initFloatBtn(i),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnSure, this),
		utils.addChildren(this, [t, e, i])
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .3),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(CompTipOneSentence, "CompTipOneSentence");
var UnitInputKey = function(t) {
	function e(e, i, s) {
		t.call(this),
		this.strText = e,
		this.initComp(e, i, s)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.initComp = function(t, e, i) {
		utils.setProps(this, {
			text: t,
			width: e,
			height: i,
			textAlign: "center",
			verticalAlign: "middle",
			textColor: 1205364
		})
	},
	e
} (egret.TextField);
egret.registerClass(UnitInputKey, "UnitInputKey");
var UnitNumRoom = function(t) {
	function e() {
		t.call(this),
		this.initUnit()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.clearInput = function() {
		this.nContentInput = null,
		this.tfText.text = ""
	},
	s.setContentInput = function(t) {
		this.nContentInput = t,
		utils.setProps(this.tfText, {
			text: "" + t
		},
		[.5, .5])
	},
	s.initUnit = function() {
		var t = new egret.TextField,
		e = new egret.Shape,
		i = 40;
		e.graphics.lineStyle(3, 1205364),
		e.graphics.moveTo(0, 0),
		e.graphics.lineTo(i, 0),
		utils.setProps(e, {
			y: i + 2
		}),
		utils.setProps(t, {
			x: 20,
			y: 20,
			size: 40,
			textColor: 1205364
		},
		[.5, .5]),
		utils.addChildren(this, [t, e]),
		this.tfText = t,
		this.shpLine = e
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(UnitNumRoom, "UnitNumRoom");
var CompIconProgress = function(t) {
	function e(e) {
		t.call(this),
		this.bOpenSwitch = !0,
		this.nPercent = 1,
		this.initComp(e),
		this.refreshStatus()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshStatus = function() {
		this.setProgress(),
		this.setTfPercent(),
		this.setIconSelected(this.bOpenSwitch)
	},
	s.setProgress = function() {
		this.barVolumn.updateBar(this.bOpenSwitch ? this.nPercent: 0)
	},
	s.setTfPercent = function() {
		this.bOpenSwitch && (utils.setProps(this.tfPercent, {
			text: Math.floor(100 * this.nPercent) + " %",
			alpha: 1
		},
		[.5, 0]), egret.Tween.get(this.tfPercent, {
			override: !0
		}).to({
			alpha: 0
		},
		500))
	},
	s.setIconSelected = function(t) {
		this.bmBtnSwitch.texture = RES.getRes(t ? "b11_2": "b11_1")
	},
	s.touchSwitch = function(t) {
		this.bOpenSwitch = !this.bOpenSwitch,
		this.refreshStatus()
	},
	s.touchBarProgress = function(t) {
		if (this.bOpenSwitch) {
			var e = this.barVolumn.getPercentByPosX(t.localX); - 1 != e && (this.nPercent = e, this.refreshStatus())
		}
	},
	s.initComp = function(t) {
		var e = new egret.Bitmap(RES.getRes(t)),
		i = new BarRectProgress("b13_1", "b13_2"),
		s = new egret.Bitmap(RES.getRes("b11_1")),
		n = new egret.TextField;
		utils.setProps(i, {
			x: e.width + 15,
			y: (e.height - i.height) / 2
		}),
		utils.setProps(s, {
			x: i.x + i.width + s.width - 20,
			y: e.height / 2
		},
		[.5, .5]),
		utils.setProps(n, {
			x: i.x + i.width / 2,
			y: i.y + i.height + 10,
			textColor: 16777215,
			strokeColor: 0,
			stroke: 2,
			bold: !0,
			size: 20
		},
		[.5, .5]),
		utils.addChildren(this, [e, i, s, n]),
		this.barVolumn = i,
		this.bmBtnSwitch = s,
		this.tfPercent = n,
		s.addEventListener(egret.TouchEvent.TOUCH_END, this.touchSwitch, this),
		i.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBarProgress, this),
		i.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchBarProgress, this),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBarProgress, this),
		i.touchEnabled = !0,
		btns.initScaleBtn(s)
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(CompIconProgress, "CompIconProgress");
var CompIconTxSelect = function(t) {
	function e(e) {
		t.call(this),
		this.initComp(e),
		this.drawShadowAreaTouch()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.ctrlSelect = function(t) {
		this.bmBgSelected.visible = this.bmRightHook.visible = t
	},
	s.touchSelf = function() {
		this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN)
	},
	s.initComp = function(t) {
		var e = new egret.Bitmap(RES.getRes("b10_1")),
		i = new egret.Bitmap(RES.getRes("b10_2")),
		s = new egret.Bitmap(RES.getRes("b10_3")),
		n = new egret.Bitmap(RES.getRes(t));
		utils.setProps(e, {
			x: s.width / 2,
			y: s.height / 2
		},
		[.5, .5]),
		utils.setProps(i, {
			x: i.width / 2,
			y: i.height / 2
		},
		[.5, .5]),
		utils.setProps(n, {
			x: s.width + 20,
			y: s.height / 2
		},
		[0, .5]),
		utils.addChildren(this, [e, i, s, n]),
		this.bmBgSelected = i,
		this.bmRightHook = s
	},
	s.drawShadowAreaTouch = function() {
		this.graphics.beginFill(0, .01),
		this.graphics.drawRect(0, 0, this.width, this.height),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(CompIconTxSelect, "CompIconTxSelect");
var PopCannotJoinOtherRoom = function(t) {
	function e() {
		t.call(this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.initPop = function() {},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PopCannotJoinOtherRoom, "PopCannotJoinOtherRoom");
var PopCertifyName = function(t) {
	function e() {
		t.call(this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		this.willLoadRes()
	},
	s.willLoadRes = function() {
		if (this.numChildren > 0) this.addToStage();
		else {
			var t = ["bb_1", "bb_2", "b1_3", "b3_1", "b3_3", "b4_1"];
			CompLoading.getInst().loadResTemp(t, this.hasLoadedRes, this, this.stage)
		}
	},
	s.hasLoadedRes = function() {
		this.initPop(),
		this.addToStage()
	},
	s.addToStage = function() {},
	s.touchBtnExit = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.touchBtnSure = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.initPop = function() {
		this.drawShadow();
		var t = new CompPopBoard("bb_2", "b1_3", 500, 320),
		e = new egret.TextField,
		i = new egret.TextField,
		s = new egret.TextField,
		n = new btns.BtnBmBm("b3_1", "b4_1", {},
		{
			y: 27
		}),
		r = new egret.Bitmap(RES.getRes("b3_3"));
		utils.setProps(t, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2
		}),
		utils.setProps(e, {
			text: "姓名：\n身份证号：",
			x: this.width / 2 - 190,
			y: t.y + 110,
			size: 25,
			textColor: 4790528,
			textAlign: "right",
			bold: !0,
			lineSpacing: 30
		}),
		utils.setProps(i, {
			type: egret.TextFieldType.INPUT,
			restrict: "^0-9",
			x: e.x + e.width + 15,
			y: e.y + 5,
			width: 200,
			size: 20,
			textColor: 0
		}),
		utils.setProps(s, {
			type: egret.TextFieldType.INPUT,
			restrict: "x0-9",
			x: i.x,
			y: i.y + i.size + e.lineSpacing,
			width: i.width,
			size: 20,
			textColor: 0
		}),
		utils.setProps(n, {
			x: this.width / 2,
			y: t.y + 260
		},
		[.5, .5]),
		utils.setProps(r, {
			x: t.x + t.width - 20,
			y: t.y + 20
		},
		[.5, .5]),
		utils.addChildren(this, [t, e, i, s, n, r]),
		n.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnSure, this),
		r.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnExit, this),
		btns.initFloatBtn(n),
		btns.initScaleBtn(r),
		this.drawBgInput(i),
		this.drawBgInput(s),
		this.tfId = s,
		this.tfName = i
	},
	s.drawBgInput = function(t) {
		var e = new egret.Shape;
		utils.setProps(e, {
			x: t.x - 15,
			y: t.y - 5
		}),
		e.graphics.beginFill(16777215),
		e.graphics.drawRoundRect(0, 0, t.width + 30, t.size + 10, 10, 10),
		e.graphics.endFill(),
		this.addChildAt(e, this.getChildIndex(t) - 1)
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .5),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(PopCertifyName, "PopCertifyName");
var PopCreateRoom = function(t) {
	function e() {
		t.call(this),
		this.arrRes = ["bb_1", "bb_3", "bb_4", "bb_5", "bb_6", "b3_3", "bb_10", "b5_1", "b6_1", "b5_2", "b6_2", "b5_3", "b6_3", "b5_4", "b6_4", "b7_1", "b7_2", "b7_3", "b7_4", "b7_5", "b7_6", "b8_1", "b8_2", "b10_1", "b10_4", "a3_3"]
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		utils.ctrlChildrenTouch(this, !0),
		this.willLoadRes()
	},
	s.willLoadRes = function() {
		this.numChildren > 0 ? this.addToStage() : CompLoading.getInst().loadResTemp(this.arrRes, this.initPop, this, this.stage)
	},
	s.addToStage = function() {},
	s.hasCreatedRoom = function(t) {
		WaitPanel.getInst().onRemove(),
		utils.ctrlChildrenTouch(this, !0),
		0 == t.status && (DataUser.getInst().setRoomId(t.house_no), Main.dataGame.setMyDirection(WindDirection.EAST), this.parent.removeChild(this), this.dispatchEventWith(DataGlobal.Evts.CREATE_ROOM))
	},
	s.touchBtnExit = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.touchBtnCreateRoom = function(t) {
		utils.ctrlChildrenTouch(this, !1),
		this.boardOption.getOptionsCreateRoom();
		var e = OptionsPlayLogic.getInst().OptionsPlayCard,
		i = 1;
		e.WayPlay == WayPlay.QINGYUAN ? i = 2 : e.WayPlay == WayPlay.SHAOGUAN && (i = 3);
		var s = 0;
		e.King == OptionKing.BLANK_AS_KING ? s = 1 : e.King == OptionKing.DOUBLE_WITHOUT_KING && (s = 2);
		var n = (s + "," + utils.bToN(e.NoKingDouble) + "," + utils.bToN(e.PlusScoreWithoutKing == PlusScoreWithoutKing.PLUS_THREE) + "," + utils.bToN(e.WithoutLetterCard) + "," + utils.bToN(e.BarExplodeAllContain) + "," + utils.bToN(e.RobBarPlusTwoHorse) + "," + utils.bToN(e.RiskBarPlusTweHorse) + "," + e.Horse + "," + utils.bToN(e.OneNineMustHave) + "," + utils.bToN(e.TwelveFallGroundShouldHu) + "," + utils.bToN(e.CanMakeSanyuanSixi) + "," + utils.bToN(e.OneNineCanEatHu) + "," + e.Multiple + "," + utils.bToN(e.IsHorseAndHu) + "," + e.HasHorseTop).toString();
		WaitPanel.getInst().onStart(null, this.onErr, this, 30),
		DataInteract.getInst().ReqOpenHouse(this.hasCreatedRoom, this, i, n)
	},
	s.onErr = function() {
		alert("错了啦")
	},
	s.switchWayPlay = function(t) {
		var e = t.data.nInd;
		this.boardOption.showBoard(e)
	},
	s.initPop = function() {
		this.drawShadow();
		var t = new egret.Bitmap(RES.getRes("bb_1")),
		e = new BoardSelectWayPlay(500),
		i = new BoardOptionCreateRoom,
		s = new btns.BtnBmBm("a4_1", "a3_1", {},
		{
			y: 36
		}),
		n = new egret.Bitmap(RES.getRes("b3_3"));
		utils.setProps(t, {
			width: 1e3,
			height: 600
		}),
		utils.setProps(t, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2
		}),
		utils.setProps(e, {
			x: t.x + 20,
			y: t.y + 20
		}),
		utils.setProps(i, {
			x: e.x + e.width + 4,
			y: e.y
		}),
		utils.setProps(s, {
			x: this.width / 2,
			y: t.height - s.height / 2 + 40
		},
		[.5, .5]),
		utils.setProps(n, {
			x: t.x + t.width - 30,
			y: t.y + 20
		},
		[.5, .5]),
		n.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnExit, this),
		s.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnCreateRoom, this),
		e.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.switchWayPlay, this),
		btns.initFloatBtn(n),
		btns.initFloatBtn(s),
		utils.addChildren(this, [t, e, i, s, n]),
		this.btnCreateRoom = s,
		this.boardOption = i,
		this.boardSelectWayPlay = e,
		this.addToStage()
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .5),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(PopCreateRoom, "PopCreateRoom");
var PopHistoryAttack = function(t) {
	function e() {
		t.call(this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		this.willLoadRes()
	},
	s.willLoadRes = function() {
		if (this.numChildren > 0) this.addToStage();
		else {
			var t = ["bb_1", "bb_2", "bb_3", "b3_3", "b1_4"];
			CompLoading.getInst().loadResTemp(t, this.hasLoadedRes, this, this.stage)
		}
	},
	s.hasLoadedRes = function() {
		this.initPop(),
		this.addToStage()
	},
	s.addToStage = function() {},
	s.touchBtnSure = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.initPop = function() {
		this.drawShadow();
		var t = new CompPopBoard("bb_2", "b1_4", 800, 520),
		e = new egret.TextField,
		i = new egret.Bitmap(RES.getRes("b3_3"));
		utils.setProps(t, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2
		}),
		utils.setProps(i, {
			x: t.x + t.width - 20,
			y: t.y + 20
		},
		[.5, .5]),
		utils.addChildren(this, [t, e, i]),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnSure, this),
		btns.initScaleBtn(i)
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .5),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(PopHistoryAttack, "PopHistoryAttack");
var PopHowToPlay = function(t) {
	function e() {
		t.call(this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		this.willLoadRes()
	},
	s.willLoadRes = function() {
		if (this.numChildren <= 0) {
			var t = ["bb_1", "bb_3", "bb_4", "bb_5", "b3_3", "b5_1", "b6_1", "b5_2", "b6_2", "b5_3", "b6_3", "b5_4", "b6_4", "bb_11", "play_way_content"];
			CompLoading.getInst().loadResTemp(t, this.initPop, this, this.stage)
		}
	},
	s.touchBtnExit = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.switchWayPlay = function(t) {
		var e = t.data.nInd;
		this.boardWayPlay.showTipPlay(e)
	},
	s.initPop = function() {
		this.drawShadow();
		var t = new egret.Bitmap(RES.getRes("bb_1")),
		e = new BoardSelectWayPlay,
		i = new BoardWayPlay,
		s = new egret.Bitmap(RES.getRes("b3_3"));
		utils.setProps(t, {
			width: 750,
			height: 500
		}),
		utils.setProps(t, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2
		}),
		utils.setProps(e, {
			x: t.x + 20,
			y: t.y + 20
		}),
		utils.setProps(i, {
			x: e.x + e.width + 4,
			y: e.y
		}),
		utils.setProps(s, {
			x: t.x + t.width - 20,
			y: t.y + 20
		},
		[.5, .5]),
		utils.addChildren(this, [t, e, i, s]),
		btns.initScaleBtn(s),
		s.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnExit, this),
		e.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.switchWayPlay, this),
		this.boardSelectWayPlay = e,
		this.boardWayPlay = i
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .5),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(PopHowToPlay, "PopHowToPlay");
var PopInviteRoom = function(t) {
	function e() {
		t.call(this),
		this.house_no = 0,
		this.tfContent = null,
		this.btnSure = null
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.initBoard = function() {
		this.drawShadow();
		var t = new CompPopBoard("bb_2", "b1_2", 500, 350),
		e = new egret.TextField,
		i = new btns.BtnBmBm("b3_1", "b4_1", {},
		{
			y: 27
		});
		utils.setProps(t, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2
		}),
		utils.setProps(e, {
			text: "房号：0000",
			width: 500,
			x: this.width / 2,
			y: t.y + 120,
			size: 35,
			textColor: 4790528,
			lineSpacing: 5,
			textAlign: "center",
			fontFamily: "Microsoft YaHei"
		},
		[.5, .5]),
		utils.setProps(i, {
			x: this.width / 2,
			y: t.y + 260,
			touchEnabled: !0
		},
		[.5, .5]),
		btns.initScaleBtn(i),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.onSure, this),
		utils.addChildren(this, [t, e, i]),
		this.tfContent = e,
		this.btnSure = i
	},
	s.onSure = function() {
		this.dispatchEventWith(DataGlobal.Evts.BACK_GAME),
		this.parent.removeChild(this)
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .5),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	s.addSelf = function(t, e) {
		this.house_no = e,
		t.addChild(this),
		this.willLoadRes()
	},
	s.willLoadRes = function() {
		if (this.numChildren > 0) this.addToStage();
		else {
			var t = ["bb_1", "bb_2", "bb_3", "b1_2", "b3_1", "b4_1"];
			CompLoading.getInst().loadResTemp(t, this.hasLoadedRes, this, this.stage)
		}
	},
	s.hasLoadedRes = function() {
		this.initBoard(),
		this.addToStage()
	},
	s.addToStage = function() {
		this.tfContent.textFlow = (new egret.HtmlTextParser).parser('房号：<font color="#ff7f50" size="40"><b>' + this.house_no + '</b></font><font color="#0000ff" size="25">\n把房号发送给朋友，\n邀请他们一起来玩吧</font>')
	},
	e
} (egret.Sprite);
egret.registerClass(PopInviteRoom, "PopInviteRoom");
var PopJoinRoom = function(t) {
	function e() {
		t.call(this),
		this.arrRes = ["bb_1", "bb_2", "a3_2", "b3_3", "b3_1", "b4_1", "b1_2", "bb_7"],
		this.tipOneSentence = null
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		CompLoading.getInst().loadResTemp(this.arrRes, this.initPop, this, this.stage)
	},
	s.requestJoinRoom = function(t) {
		utils.ctrlChildrenTouch(this, !1),
		DataInteract.getInst().ReqJoinHouse(t.data.nRoomId, this.returnMsgRequest, this)
	},
	s.returnMsgRequest = function(t) {
		utils.ctrlChildrenTouch(this, !0),
		0 == t.status ? (DataUser.getInst().setRoomId(t.house_no), Main.dataGame.directionMe = t.role_index, this.parent.removeChild(this), this.dispatchEventWith(DataGlobal.Evts.JOIN_ROOM)) : 1 == t.status ? this.showTipEnoughPeople() : this.showTipNoCorrectRoomId()
	},
	s.showTipNoCorrectRoomId = function() {
		this.createCompTip(),
		this.tipOneSentence.showTip("房间号错误，请重新输入", this.tipOver, this)
	},
	s.showTipEnoughPeople = function() {
		this.createCompTip(),
		this.tipOneSentence.showTip("人数已满无法加入", this.tipOver, this)
	},
	s.createCompTip = function() {
		if (!this.tipOneSentence) {
			var t = new CompTipOneSentence;
			t.addEventListener("back", this.tipOver, this),
			this.tipOneSentence = t,
			this.parent.addChild(this.tipOneSentence),
			utils.ctrlChildrenTouch(this, !1)
		}
	},
	s.tipOver = function() {
		this.parent.removeChild(this.tipOneSentence),
		utils.ctrlChildrenTouch(this, !0)
	},
	s.addToStage = function() {},
	s.exitBoard = function(t) {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.initPop = function() {
		if (this.numChildren > 0) return void this.addToStage();
		var t = new CompPopBoard("bb_2", "a3_2", 580, 490),
		e = new egret.TextField,
		i = new BoardInputRoomNum,
		s = new egret.Bitmap(RES.getRes("b3_3"));
		utils.setProps(this, {
			width: DataGlobal.wStage,
			height: DataGlobal.hStage
		}),
		utils.setProps(t, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2
		}),
		utils.setProps(e, {
			text: "输入房间号",
			fontFamily: "Microsoft YaHei",
			x: this.width / 2,
			y: t.y + 110,
			textColor: 4790528,
			size: 30,
			bold: !0
		},
		[.5, .5]),
		utils.setProps(i, {
			x: (this.width - i.width) / 2,
			y: e.y + e.height
		}),
		utils.setProps(s, {
			x: t.x + t.width - 20,
			y: t.y + 20
		},
		[.5, .5]),
		btns.initScaleBtn(s),
		s.addEventListener(egret.TouchEvent.TOUCH_END, this.exitBoard, this),
		i.addEventListener(DataGlobal.Evts.SEND_REQUEST_BLOCKED, this.requestJoinRoom, this),
		utils.addChildren(this, [t, e, i, s]),
		this.drawShadow(),
		this.addToStage()
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .3),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(PopJoinRoom, "PopJoinRoom");
var PopMsg = function(t) {
	function e() {
		t.call(this),
		this.arrRes = ["bb_1", "bb_2", "a3_2", "b3_3", "b3_3", "b1_2", "bb_7", "b14_1", "b15_1", "b14_2", "b15_2"]
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		CompLoading.getInst().loadResTemp(this.arrRes, this.initPop, this, this.stage)
	},
	s.addToStage = function() {
		this.barAnnouncementOrMsg.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN, !1, {
			nInd: 0
		})
	},
	s.touchBtnExit = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.showContentText = function(t) {
		this.msgContainer.setContent(t.data.nInd)
	},
	s.initPop = function() {
		if (this.numChildren > 0) return void this.addToStage();
		this.drawShadow();
		var t = 750,
		e = 420,
		i = new egret.Bitmap(RES.getRes("bb_1")),
		s = new BarSelectMsg(.6 * t, "b14_1", "b14_2", "b15_1", "b15_2"),
		n = new ContainerScrollMsg(t - 30, e - 80),
		r = new egret.Bitmap(RES.getRes("b3_3"));
		utils.setProps(i, {
			width: t,
			height: e,
			x: (this.width - t) / 2,
			y: (this.height - e) / 2
		}),
		utils.setProps(s, {
			x: (this.width - s.width) / 2,
			y: i.y + 15
		}),
		utils.setProps(n, {
			x: (this.width - n.width) / 2,
			y: s.y + s.height - 6
		}),
		utils.setProps(r, {
			x: i.x + i.width - 20,
			y: i.y + 20
		},
		[.5, .5]),
		s.addEventListener(DataGlobal.Evts.SELECTED_BTN, this.showContentText, this),
		r.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnExit, this),
		btns.initFloatBtn(r),
		utils.addChildren(this, [i, s, n, r]),
		this.barAnnouncementOrMsg = s,
		this.msgContainer = n,
		this.addToStage()
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .3),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(PopMsg, "PopMsg");
var ContainerScrollMsg = function(t) {
	function e(e, i) {
		t.call(this),
		this.initContainer(e, i)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setContent = function(t) {
		this.scrollObj.setScrollTop(0, 10),
		this.tfContent.text = 0 == t ? "公告内容": "消息内容"
	},
	s.initContainer = function(t, e) {
		var i = new egret.ScrollView,
		s = new egret.Bitmap(RES.getRes("bb_2"));
		utils.setProps(s, {
			width: t,
			height: e
		}),
		utils.setProps(i, {
			x: 30,
			y: 30,
			width: t - 60,
			height: e - 50
		});
		var n = new egret.TextField;
		utils.setProps(n, {
			width: t - 60,
			size: 25,
			textColor: 4790528,
			fontFamily: "MicroSoft Yahei",
			lineSpacing: 9
		}),
		i.setContent(n),
		utils.addChildren(this, [s, i]),
		this.tfContent = n,
		this.scrollObj = i
	},
	e
} (egret.Sprite);
egret.registerClass(ContainerScrollMsg, "ContainerScrollMsg");
var PopSetting = function(t) {
	function e() {
		t.call(this),
		this.type = 0,
		this.bIsLanguageCommon = !0
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t, e) {
		void 0 === e && (e = 0),
		this.type = e,
		t.addChild(this),
		this.willLoadRes()
	},
	s.willLoadRes = function() {
		if (this.numChildren > 0) this.addToStage();
		else {
			var t = ["bb_1", "bb_2", "b3_3", "b1_6", "bb_10", "b10_1", "b10_2", "b10_3", "b11_1", "b11_2", "b13_1", "b13_2", "b12_1", "b12_2", "b12_4", "b12_5", "b12_6"];
			CompLoading.getInst().loadResTemp(t, this.hasLoadedRes, this, this.stage)
		}
	},
	s.hasLoadedRes = function() {
		this.initPop(),
		this.setLanguageUse(),
		this.addToStage()
	},
	s.addToStage = function() {},
	s.touchBtnExit = function() {
		0 == this.type ? this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX) : this.dispatchEventWith(DataGlobal.Evts.BACK_GAME),
		this.parent.removeChild(this)
	},
	s.touchIconLanguage = function(t) {
		this.bIsLanguageCommon = t.target == this.btnLanguageCommon,
		this.setLanguageUse()
	},
	s.setLanguageUse = function() {
		this.btnLanguageCommon.ctrlSelect(this.bIsLanguageCommon),
		this.btnLanguageCantanonese.ctrlSelect(!this.bIsLanguageCommon)
	},
	s.initPop = function() {
		if (0 == this.type) var t = new CompPopBoard("bb_2", "b1_6", 600, 360);
		else var t = new CompPopBoard("bb_2", "b1_6", 600, 460);
		var e = new CompIconTxSelect("b12_1"),
		i = new CompIconTxSelect("b12_2"),
		s = new egret.Bitmap(RES.getRes("bb_10")),
		n = new CompIconProgress("b12_5"),
		r = new CompIconProgress("b12_4"),
		a = new egret.Bitmap(RES.getRes("b3_3")),
		o = new egret.DisplayObjectContainer;
		if (utils.setProps(this, {
			width: DataGlobal.wStage,
			height: DataGlobal.hStage
		}), utils.setProps(o, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2,
			width: t.width,
			height: t.height
		}), utils.setProps(e, {
			x: o.width / 2 - 120,
			y: 110
		},
		[.5, .5]), utils.setProps(i, {
			x: o.width - e.x,
			y: e.y
		},
		[.5, .5]), utils.setProps(s, {
			x: o.width / 2,
			y: e.y + e.height / 2
		},
		[.5, .5]), utils.setProps(n, {
			x: (o.width - n.width) / 2,
			y: s.y + 30
		}), utils.setProps(r, {
			x: n.x,
			y: n.y + n.height
		}), utils.setProps(a, {
			x: o.width - a.width / 2 + 10,
			y: a.height / 2 - 10
		},
		[.5, .5]), utils.addChildren(this, [o]), utils.addChildren(o, [t, e, i, s, n, r, a]), 1 == this.type) {
			var h = new btns.BtnBmBm("a4_1", "b12_6", {},
			{
				y: 36
			});
			utils.setProps(h, {
				touchEnabled: !0,
				x: o.width / 2,
				y: r.y + r.height + 5 + h.height / 2
			},
			[.5, .5]),
			h.addEventListener(egret.TouchEvent.TOUCH_END, this.touchExitRoom, this),
			utils.addChildren(o, [h]),
			btns.initScaleBtn(h)
		}
		a.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnExit, this),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.touchIconLanguage, this),
		e.addEventListener(egret.TouchEvent.TOUCH_END, this.touchIconLanguage, this),
		btns.initFloatBtn(a),
		btns.initFloatBtn(e),
		btns.initFloatBtn(i),
		this.btnLanguageCantanonese = i,
		this.btnLanguageCommon = e,
		this.progressSoundBg = r,
		this.progressSoundEffect = n,
		this.drawShadow()
	},
	s.touchExitRoom = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.EXIT_ROOM)
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .3),
		this.graphics.drawRect(0, 0, this.width, this.height),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(PopSetting, "PopSetting");
var PopShare = function(t) {
	function e() {
		t.call(this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		this.willLoadRes()
	},
	s.willLoadRes = function() {
		if (this.numChildren > 0) this.addToStage();
		else {
			var t = ["r_hand_share_png", "r_hand_share_json"];
			CompLoading.getInst().loadResTemp(t, this.hasLoadedRes, this, this.stage)
		}
	},
	s.hasLoadedRes = function() {
		this.initBoard(),
		this.addToStage()
	},
	s.addToStage = function() {
		this.ctrlTouchSelf(!1),
		this.ctrlHandPlay(!0),
		egret.setTimeout(this.ctrlTouchSelf, this, 1e3)
	},
	s.remSelf = function() {
		this.ctrlHandPlay(!1),
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.ctrlHandPlay = function(t) {
		t ? this.mcHand.play( - 1) : this.mcHand.stop()
	},
	s.ctrlTouchSelf = function(t) {
		void 0 === t && (t = !0),
		this.touchEnabled = t
	},
	s.initBoard = function() {
		utils.setProps(this, {
			width: DataGlobal.wStage,
			height: DataGlobal.hStage
		}),
		this.graphics.beginFill(0, .5),
		this.graphics.drawRect(0, 0, this.width, this.height),
		this.graphics.endFill();
		var t = utils.newMC({
			mcName: "r_hand_share",
			textureData: "r_hand_share_png",
			jsonData: "r_hand_share_json"
		});
		utils.setProps(t, {
			x: 50,
			y: 120,
			frameRate: 3,
			rotation: -90
		}),
		utils.addChildren(this, [t]),
		this.mcHand = t,
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.remSelf, this)
	},
	e
} (egret.Sprite);
egret.registerClass(PopShare, "PopShare");
var PopTipAddRoom = function(t) {
	function e() {
		t.call(this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		this.willLoadRes()
	},
	s.willLoadRes = function() {
		if (this.numChildren > 0) this.addToStage();
		else {
			var t = ["bb_1", "bb_2", "b1_2", "b3_1", "b4_1"];
			CompLoading.getInst().loadResTemp(t, this.hasLoadedRes, this, this.stage)
		}
	},
	s.hasLoadedRes = function() {
		this.initBoard(),
		this.addToStage()
	},
	s.addToStage = function() {},
	s.touchBtnSure = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.initBoard = function() {
		this.drawShadow();
		var t = new CompPopBoard("bb_2", "b1_2", 500, 320),
		e = new egret.TextField,
		i = new btns.BtnBmBm("b3_1", "b4_1", {},
		{
			y: 27
		});
		utils.setProps(t, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2
		}),
		utils.setProps(e, {
			text: "房卡咨询：微信公众号guolimajiang\n代理招募：微信公众号guolimajiang\n投诉举报：微信公众号guolimajiang",
			x: this.width / 2,
			y: t.y + 150,
			size: 25,
			textColor: 4790528,
			bold: !0,
			lineSpacing: 15
		},
		[.5, .5]),
		utils.setProps(i, {
			x: this.width / 2,
			y: t.y + 260
		},
		[.5, .5]),
		utils.addChildren(this, [t, e, i]),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnSure, this),
		btns.initFloatBtn(i)
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .5),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(PopTipAddRoom, "PopTipAddRoom");
var PopUserInfo = function(t) {
	function e() {
		t.call(this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.addSelf = function(t) {
		t.addChild(this),
		this.willLoadRes()
	},
	s.setNick = function(t) {
		utils.setProps(this.tfNick, {
			text: utils.getStrMax(t, 8)
		},
		[.5, .5])
	},
	s.setInfoIdIp = function(t, e) {
		utils.setProps(this.tfInfoIdIp, {
			text: "ID : " + t
		},
		[.5, .5])
	},
	s.willLoadRes = function() {
		if (this.numChildren > 0) this.addToStage();
		else {
			var t = ["bb_1", "bb_2", "bb_3", "b1_1", "b3_1", "b4_1", "temp_1"];
			CompLoading.getInst().loadResTemp(t, this.hasLoadedRes, this, this.stage)
		}
	},
	s.hasLoadedRes = function() {
		this.initBoard(),
		this.addToStage()
	},
	s.addToStage = function() {
		this.setNick(DataUser.getInst().infoUser.strNick)
	},
	s.touchBtnSure = function() {
		this.parent.removeChild(this),
		this.dispatchEventWith(DataGlobal.Evts.BACK_INDEX)
	},
	s.initBoard = function() {
		this.drawShadow();
		var t = new CompPopBoard("bb_2", "b1_1", 500, 350),
		e = new IconPhoto,
		i = new egret.TextField,
		s = new egret.TextField,
		n = new btns.BtnBmBm("b3_1", "b4_1", {},
		{
			y: 27
		});
		utils.setProps(t, {
			x: (this.width - t.width) / 2,
			y: (this.height - t.height) / 2
		}),
		utils.setProps(e, {
			x: t.x + 50,
			y: t.y + 120,
			width: 90,
			height: 90
		}),
		utils.setProps(i, {
			text: utils.getStrMax("昵称", 8),
			x: e.x + e.width + 160,
			y: e.y,
			size: 40,
			textColor: 4790528,
			bold: !0
		},
		[.5, .5]),
		utils.setProps(s, {
			text: "ID : 1234568902\nIP : 192.168.101.203",
			x: i.x,
			y: i.y + 70,
			lineSpacing: 10,
			textColor: 4790528,
			size: 25,
			bold: !0
		},
		[.5, .5]),
		utils.setProps(n, {
			x: this.width / 2,
			y: t.y + 290
		},
		[.5, .5]),
		utils.addChildren(this, [t, e, i, s, n]),
		e.setPhotoUrl(DataUser.getInst().infoUser.headUrl, DataUser.getInst().infoUser.headPic),
		n.addEventListener(egret.TouchEvent.TOUCH_END, this.touchBtnSure, this),
		btns.initFloatBtn(n),
		this.iconPhoto = e,
		this.tfInfoIdIp = s,
		this.tfNick = i
	},
	s.drawShadow = function() {
		this.graphics.beginFill(0, .5),
		this.graphics.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		this.graphics.endFill()
	},
	e
} (egret.Sprite);
egret.registerClass(PopUserInfo, "PopUserInfo");
var BarSelectMsg = function(t) {
	function e(e, i, s, n, r) {
		t.call(this),
		this.strLeftFocus = i,
		this.strLeftUnfocus = s,
		this.strRightFocus = n,
		this.strRightUnfocus = r,
		this.initBar(e),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function() {
		this.bIsFocusLeft = !0,
		this.setBtnSelected()
	},
	s.reportSelected = function(t) {
		var e = t.target == this.bmBtnLeft;
		this.bIsFocusLeft && e || !this.bIsFocusLeft && !e || (this.bIsFocusLeft = e, this.setBtnSelected(), this.dispatchEventWith(DataGlobal.Evts.SELECTED_BTN, !1, {
			nInd: e ? 0 : 1
		}))
	},
	s.setBtnSelected = function() {
		this.bmBtnLeft.texture = RES.getRes(this.bIsFocusLeft ? this.strLeftFocus: this.strLeftUnfocus),
		this.bmBtnRight.texture = RES.getRes(this.bIsFocusLeft ? this.strRightUnfocus: this.strRightFocus)
	},
	s.initBar = function(t) {
		var e = new egret.Bitmap(RES.getRes(this.strLeftFocus)),
		i = new egret.Bitmap(RES.getRes(this.strRightUnfocus));
		utils.setProps(e, {
			x: e.width / 2,
			touchEnabled: !0
		},
		[.5, 0]),
		utils.setProps(i, {
			x: t - e.x,
			touchEnabled: !0
		},
		[.5, 0]),
		e.addEventListener(egret.TouchEvent.TOUCH_END, this.reportSelected, this),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.reportSelected, this),
		utils.addChildren(this, [e, i]),
		this.bmBtnLeft = e,
		this.bmBtnRight = i
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BarSelectMsg, "BarSelectMsg");
var WaitPanel = function(t) {
	function e() {
		t.call(this),
		this.waitAnim = null,
		this.Tmr = null,
		this.width = DataGlobal.wStage,
		this.height = DataGlobal.hStage,
		this.graphics.beginFill(0, .5),
		this.graphics.drawRect(0, 0, this.width, this.height),
		this.graphics.endFill(),
		this.touchEnabled = !0,
		this.waitAnim = new egret.Bitmap(RES.getRes("l1")),
		utils.setProps(this.waitAnim, {
			x: this.width / 2,
			y: this.height / 2
		},
		[.5, .5]),
		this.addChild(this.waitAnim)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onStart = function(t, e, i, s) {
		Main.inst.addChild(this),
		this.okCall = t,
		this.errCall = e,
		this.funParent = i,
		this.waitAnim.rotation = 0,
		egret.Tween.get(this.waitAnim, {
			loop: !0
		}).to({
			rotation: 360
		},
		3e3),
		this.Tmr = new egret.Timer(1e3 * s),
		this.Tmr.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this),
		this.Tmr.start()
	},
	s.onTimer = function() {
		this.errCall.call(this.funParent),
		this.onRemove()
	},
	s.onRemove = function() {
		this.Tmr.stop(),
		this.Tmr.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this),
		egret.Tween.removeTweens(this.waitAnim),
		this.parent.removeChild(this)
	},
	s.onFinal = function() {
		this.okCall.call(this.funParent),
		this.onRemove()
	},
	e.getInst = function() {
		return this.inst || (this.inst = new e),
		this.inst
	},
	e
} (egret.Sprite);
egret.registerClass(WaitPanel, "WaitPanel");
var EditText = function(t) {
	function e() {
		t.call(this),
		this.hint = "",
		this.isPassword = !1,
		this.tfEdit = new egret.TextField,
		this.tfEdit.type = egret.TextFieldType.INPUT,
		this.tfEdit.x = 2,
		this.addChild(this.tfEdit)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setText = function(t) {
		this.tfEdit.text = t
	},
	s.getText = function() {
		return this.tfEdit.text
	},
	s.setBgAlpha = function(t) {
		this.graphics.clear(),
		this.graphics.beginFill(16777215, t),
		this.graphics.drawRoundRect(0, 0, this.width, this.height, 18, 18),
		this.graphics.endFill()
	},
	s.setTextAlign = function(t, e) {
		Other.setTFAligh(this.tfEdit, t, e)
	},
	s.setTextType = function(t, e) {
		Other.setTFInfo(this.tfEdit, e, t)
	},
	s.setSize = function(t, e) {
		void 0 === e && (e = -1),
		this.graphics.clear(),
		this.width = t,
		-1 != e && (this.height = e),
		this.graphics.beginFill(16578792, 1),
		this.graphics.drawRoundRect(0, 0, this.width, this.height, 15, 15),
		this.graphics.endFill(),
		this.tfEdit.width = this.width - 4,
		this.tfEdit.height = this.height
	},
	s.isPass = function() {
		this.isPassword = !0,
		this.tfEdit.text == this.hint ? this.tfEdit.displayAsPassword = !1 : this.tfEdit.displayAsPassword = !0
	},
	s.init = function() {
		var t = this;
		this.tfEdit.addEventListener(egret.TextEvent.FOCUS_IN,
		function() {
			t.tfEdit.text == t.hint && (t.tfEdit.text = "")
		},
		this),
		this.tfEdit.addEventListener(egret.TextEvent.FOCUS_OUT,
		function() {
			"" == t.tfEdit.text ? (t.tfEdit.text = t.hint, t.tfEdit.displayAsPassword = !1) : t.tfEdit.displayAsPassword = t.isPassword
		},
		this),
		"" != this.hint && "" == this.tfEdit.text && (this.tfEdit.text = this.hint)
	},
	e.createEditText = function(t, i, s, n, r, a, o) {
		void 0 === r && (r = 1),
		void 0 === a && (a = 1),
		void 0 === o && (o = 1);
		var h = new e;
		return h.height = t + 12,
		h.setTextType(t, i),
		h.setText(s),
		h.hint = n,
		h.setBgAlpha(r),
		h.setTextAlign(a, o),
		h.init(),
		h
	},
	e
} (egret.Sprite);
egret.registerClass(EditText, "EditText");
var HouseLogicTest = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.WeixinLogin = function(t) {
		console.warn("openid=" + t);
		var e = ProtoFactory.getInstance().newProto(MsgAction.ON_WEIXIN_USERINFO_REQ_CS);
		e.cid = MsgAction.ON_WEIXIN_USERINFO_REQ_CS,
		e.role_id = 0,
		e.openid = t,
		e.access_token = "xxx",
		ShareMgr.getInstance().g_channel.SendBinary(e)
	},
	t.JoinRoom = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_JOIN_HOUSE_REQ_CS);
		i.cid = MsgAction.ON_JOIN_HOUSE_REQ_CS,
		i.role_id = t,
		i.house_no = e,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnJoinRoom = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_JOIN_HOUSE_RESP_SC),
		i = e.decode(t.buffer);
		return console.warn("status=" + i.status + " cur_house_no=" + i.house_no + " nick=" + i.nick + " role_index=" + i.role_index + " play_time=" + i.play_time),
		{
			status: i.status,
			cur_house_no: i.house_no,
			nick: i.nick,
			role_index: i.role_index,
			play_time: i.play_time
		}
	},
	t.OpenRoom = function(t) {
		var e = "0,0,0,0,0,0,0,0,0,0,0,0,1,0,0",
		i = ProtoFactory.getInstance().newProto(MsgAction.ON_OPEN_HOUSE_REQ_CS);
		i.cid = MsgAction.ON_OPEN_HOUSE_REQ_CS,
		i.role_id = parseInt(t),
		i.room_type = 1,
		i.mask_data = e,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnOpenRoom = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_OPEN_HOUSE_RESP_SC),
		i = e.decode(t.buffer);
		return console.warn("status=" + i.status + " cur_house_no=" + i.house_no),
		i.house_no
	},
	t
} ();
egret.registerClass(HouseLogicTest, "HouseLogicTest");
var Other; !
function(t) {
	function e(t, e, i) {
		var s = new egret.TextField;
		return e >= GlobalData.fontSet.length && (e = 0),
		this.setTFInfo(s, e, i),
		s.text = t,
		s
	}
	function i(t, e, i) {
		t.fontFamily = GlobalData.fontSet[e].fontFamily,
		t.bold = GlobalData.fontSet[e].bold,
		t.textColor = GlobalData.fontSet[e].textColor,
		t.stroke = GlobalData.fontSet[e].stroke,
		t.strokeColor = GlobalData.fontSet[e].strokeColor,
		t.size = i
	}
	function s(t, e, i) {
		switch (e) {
		case 0:
			t.textAlign = "left";
			break;
		case 1:
			t.textAlign = "center";
			break;
		case 2:
			t.textAlign = "right"
		}
		switch (i) {
		case 0:
			t.verticalAlign = egret.VerticalAlign.TOP;
			break;
		case 1:
			t.verticalAlign = egret.VerticalAlign.MIDDLE;
			break;
		case 2:
			t.verticalAlign = egret.VerticalAlign.BOTTOM
		}
	}
	function n(t, e, i, s, n, r) {
		var a = new egret.Point;
		return a.x = Math.round(i * (n / t)),
		a.y = Math.round(s * (r / e)),
		a
	}
	t.createTF = e,
	t.setTFInfo = i,
	t.setTFAligh = s,
	t.getNewPost = n
} (Other || (Other = {}));
var PanelTestBtns = function(t) {
	function e() {
		t.call(this),
		this.m_btn_arr = [],
		this.selectedHu = null,
		this.selSendCard = !1,
		this.huTypePanel = null,
		this.huResult = null,
		this.selSendTip = null,
		this.arrMyCard = [],
		this.arrnoUsed = [],
		this.sendCard = null,
		this.selCard = null,
		this.OtherCard = null,
		this.newGetCard = null,
		this.m_last_card_id = 0,
		this.once(egret.Event.ADDED_TO_STAGE, this.initPanel, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.initPanel = function() {
		var t = this.CreateAccountTxt(50) + 10;
		t = this.CraeateBtn(t + 10) + 10,
		t = this.CreateMyCard(t + 10),
		this.SetTestHu(t + 30)
	},
	s.SetTestHu = function(t) {
		var e = Other.createTF("胡法： ", 10, 18);
		e.height = 24,
		Other.setTFAligh(e, 0, 1),
		e.x = 50,
		this.addChild(e),
		this.selectedHu = new btns.BtnRoundRect("鸡胡"),
		this.selectedHu.SetBtnID(0),
		this.selectedHu.x = e.x + e.width + 20,
		this.selectedHu.y = t,
		e.y = this.selectedHu.y + (this.selectedHu.height - e.height) / 2,
		this.selectedHu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowHuTypePanel, this),
		this.addChild(this.selectedHu),
		this.huTypePanel = new HuTypePanel,
		this.huTypePanel.x = 50,
		this.huTypePanel.visible = !1,
		this.huTypePanel.y = this.selectedHu.y - this.huTypePanel.height - 5,
		this.huTypePanel.addEventListener("onSelectHu", this.onSelectHu, this),
		this.addChild(this.huTypePanel),
		this.testHuBtn = new btns.BtnRoundRect(" 测试胡 "),
		this.testHuBtn.x = this.selectedHu.x + this.selectedHu.width + 10,
		this.testHuBtn.y = this.selectedHu.y,
		this.testHuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontestHu, this),
		this.addChild(this.testHuBtn),
		this.huResult = Other.createTF("胡法测试结果", 0, 18),
		this.huResult.size = 20,
		this.huResult.x = 50,
		this.huResult.y = this.testHuBtn.y + this.testHuBtn.height + 10,
		this.addChild(this.huResult)
	},
	s.ontestHu = function() {
		this.testHu(!0)
	},
	s.testHu = function(t) {
		void 0 === t && (t = !1);
		for (var e = [], i = 0; 39 > i; i++) e.push(0);
		for (var s = 0,
		i = 0; i < this.arrMyCard.length; i++) s = this.arrMyCard[i].getResult(),
		0 != s && (e[s] = e[s] + 1);
		var n = HuHelper.GetPairArr(e, !0),
		r = new HuResult,
		a = [ChickenHuWithKing, DoubleHuWithKing, MixColorWithKing, MixColorDoubleWithKing, PureColorWithKing, PureColorDoubleWithKing, Mix19WithKing, Pure19WithKing, SmallThreePartWithKing, BigThreePartWithKing, SmallFourPartWithKing, BigFourPartWithKing, AllWordWithKing, ThirteenOneWithKing, SevenSmallPairsWithKing, SevenSmallPairsWithKing1, SevenSmallPairsWithKing2, HU_TYPE_SEVEN_SMALL_PAIRS3];
		if (0 == t) {
			var o = new(a[this.selectedHu.GetBtnID()]),
			h = o.IsHu(e, n, r);
			this.huResult.text = HuInfo.Info[this.selectedHu.GetBtnID()].Name + " 测试",
			1 == h ? this.huResult.text = this.huResult.text + "成功": this.huResult.text = this.huResult.text + "失败";
			var d = r.getGroupInfo();
			this.huResult.text = this.huResult.text + "\n\r" + d.info,
			console.log("单个测试：" + d.info)
		} else {
			for (var i = a.length - 1; i >= 0; i--) {
				var o = new a[i],
				h = o.IsHu(e, n, r);
				if (1 == h) {
					this.selectedHu.SetBtnID(i),
					this.selectedHu.SetLabel(HuInfo.Info[i].Name),
					this.huResult.text = HuInfo.Info[i].Name + " 测试成功";
					var d = r.getGroupInfo();
					return this.huResult.text = this.huResult.text + "\n\r" + d.info,
					{
						hu_type: HuInfo.Info[this.selectedHu.GetBtnID()].TypeId,
						hu_arr_str: d.info,
						hu_arr_len: d.count
					}
				}
			}
			if (0 == h) return this.huResult.text = "测试失败，不能胡啊",
			{
				hu_type: -1,
				hu_arr_str: "",
				hu_arr_len: 0
			}
		}
	},
	s.onSelectHu = function(t) {
		this.selectedHu.SetLabel(HuInfo.Info[t.data.idx].Name),
		this.selectedHu.SetBtnID(t.data.idx),
		this.testHuBtn.x = this.selectedHu.x + this.selectedHu.width + 10
	},
	s.onShowHuTypePanel = function() {
		this.huTypePanel.visible = 0 == this.huTypePanel.visible
	},
	s.CreateAccountTxt = function(t) {
		var e = Other.createTF("微信id： ", 10, 18);
		e.height = 24,
		Other.setTFAligh(e, 0, 1),
		e.y = t,
		e.x = 50,
		this.addChild(e),
		this.m_openid_edit = EditText.createEditText(14, 1, "", "11", .5),
		this.m_openid_edit.setSize(180, 24),
		this.m_openid_edit.setTextAlign(1, 1),
		this.m_openid_edit.y = e.y,
		this.m_openid_edit.x = e.x + e.width + 10,
		this.addChild(this.m_openid_edit);
		var i = Other.createTF("角色id： ", 10, 18);
		i.height = 24,
		Other.setTFAligh(i, 0, 1),
		i.y = t,
		i.x = this.m_openid_edit.x + this.m_openid_edit.width + 10,
		this.addChild(i),
		this.m_roleid_edit = EditText.createEditText(14, 1, "", "1", .5),
		this.m_roleid_edit.setSize(60, 24),
		this.m_roleid_edit.setTextAlign(1, 1),
		this.m_roleid_edit.y = i.y,
		this.m_roleid_edit.x = i.x + i.width + 10,
		this.addChild(this.m_roleid_edit);
		var s = Other.createTF("房间号： ", 10, 18);
		return s.height = 24,
		Other.setTFAligh(s, 0, 1),
		s.y = t,
		s.x = this.m_roleid_edit.x + this.m_roleid_edit.width + 10,
		this.addChild(s),
		this.m_house_no_edit = EditText.createEditText(14, 1, "0", "0", .5),
		this.m_house_no_edit.setSize(60, 24),
		this.m_house_no_edit.setTextAlign(1, 1),
		this.m_house_no_edit.y = s.y,
		this.m_house_no_edit.x = s.x + s.width + 10,
		this.addChild(this.m_house_no_edit),
		t + this.m_house_no_edit.height + 5
	},
	s.onSetCardCode = function(t) {
		var e, i = "";
		e = "我的牌： " == t.target.text ? this.arrMyCard: this.arrnoUsed,
		i = this.getCardCode(e);
		var s = prompt("输入卡牌代码", i);
		"" != s && null != s && "undefined" != s && (s = s.replace(" ", ""), this.setMyCard(s, e))
	},
	s.getCardCode = function(t) {
		for (var e = "",
		i = 0; i < t.length; i++) 0 != t[i].getResult() && ("" != e && (e += ","), e = e + t[i].getResult() + "");
		return e
	},
	s.CreateMyCard = function(t) {
		var e = new egret.DisplayObjectContainer;
		this.addChild(e),
		e.width = DataGlobal.wStage - 100,
		e.x = 50,
		e.y = t,
		this.blockPanel = new BlockPanel,
		this.blockPanel.visible = !1,
		this.blockPanel.addEventListener("onClickBlock", this.onClickBlock, this),
		this.blockPanel.y = -this.blockPanel.height;
		var i = Other.createTF("我的牌： ", 10, 18);
		i.height = 24,
		i.touchEnabled = !0,
		i.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetCardCode, this),
		Other.setTFAligh(i, 0, 1),
		e.addChild(i);
		for (var s = 0; 14 > s; s++) {
			var n = new TestBlock;
			n.x = i.x + i.width + 5 + s * (n.width + 6) + n.width / 2,
			n.y = n.height / 2,
			n.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCard, this),
			e.addChild(n),
			this.arrMyCard.push(n)
		}
		i.y = (n.height - i.height) / 2;
		var r = new btns.BtnRoundRect("设置我的牌");
		r.SetBtnID(100),
		r.x = n.x + n.width / 2 + 10,
		r.y = (n.height - r.height) / 2,
		r.addEventListener(egret.TouchEvent.TOUCH_END, this.ConfigMyCard, this),
		e.addChild(r);
		var a = new btns.BtnRoundRect("清除");
		a.SetBtnID(102),
		a.x = r.x + r.width + 10,
		a.y = r.y,
		a.addEventListener(egret.TouchEvent.TOUCH_END, this.onMyCardClear, this),
		e.addChild(a);
		var o = Other.createTF("剩余牌： ", 10, 18);
		o.height = 24,
		Other.setTFAligh(o, 0, 1),
		o.touchEnabled = !0,
		o.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetCardCode, this),
		e.addChild(o);
		for (var s = 0; 14 > s; s++) {
			var n = new TestBlock;
			n.x = o.x + o.width + 5 + s * (n.width + 6) + n.width / 2,
			n.y = 1.65 * n.height,
			e.addChild(n),
			this.arrnoUsed.push(n),
			n.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCard, this)
		}
		o.y = (n.height - o.height) / 2 + n.y - n.height / 2;
		var h = new btns.BtnRoundRect("设置剩余牌");
		h.SetBtnID(101),
		h.x = n.x + n.width / 2 + 10,
		h.y = (n.height - h.height) / 2 + n.y - n.height / 2,
		h.addEventListener(egret.TouchEvent.TOUCH_END, this.ConfigLastCard, this),
		e.addChild(h);
		var d = new btns.BtnRoundRect("清除");
		return d.SetBtnID(102),
		d.x = h.x + h.width + 10,
		d.y = h.y,
		d.addEventListener(egret.TouchEvent.TOUCH_END, this.onLastCardClear, this),
		e.addChild(d),
		e.addChild(this.blockPanel),
		e.height = h.y + h.height + 5,
		this.setMyCard("31,31,31,33,33,33,34,34,34,27,27,27,32,32", this.arrMyCard),
		e.height + e.y + 5
	},
	s.setMyCard = function(t, e) {
		for (var i = t.split(","), s = 0; s < e.length; s++) s >= i.length ? e[s].init(0) : e[s].init(parseInt(i[s]))
	},
	s.onClickBlock = function(t) {
		var e = t.data.id; - 1 == e && (e = 0),
		this.selCard.init(e)
	},
	s.onClickCard = function(t) {
		return this.arrMyCard.indexOf(t.target) >= 0 && 1 == this.selSendCard ? (this.sendCard.init(t.target.getResult()), this.selSendCard = !1, void(this.selSendTip.visible = !1)) : (this.selCard = t.target, this.blockPanel.y = this.selCard.y - this.selCard.height / 2 - this.blockPanel.height - 5, void(this.blockPanel.visible = !0))
	},
	s.onMyCardClear = function() {
		this.CardClear(this.arrMyCard)
	},
	s.onLastCardClear = function() {
		this.CardClear(this.arrnoUsed)
	},
	s.CardClear = function(t) {
		for (var e = 0; e < t.length; e++) t[e].init(0)
	},
	s.ConfigMyCard = function(t) {
		for (var e = "",
		i = 0; i < this.arrMyCard.length && this.arrMyCard[i].getResult() > 0; i++)"" != e && (e += ","),
		e += this.arrMyCard[i].getResult();
		var s = this.m_roleid_edit.getText(),
		n = ProtoFactory.getInstance().newProto(MsgAction.ON_TEST_CONFIG_MY_CARDS_CS);
		n.cid = MsgAction.ON_TEST_CONFIG_MY_CARDS_CS,
		n.role_id = parseInt(s),
		n.cards_str = e,
		ShareMgr.getInstance().g_channel.SendBinary(n),
		alert("设置完毕!")
	},
	s.ConfigLastCard = function(t) {
		for (var e = "",
		i = 0; i < this.arrnoUsed.length && this.arrnoUsed[i].getResult() > 0; i++)"" != e && (e += ","),
		e += this.arrnoUsed[i].getResult();
		var s = this.m_roleid_edit.getText(),
		n = ProtoFactory.getInstance().newProto(MsgAction.ON_TEST_CONFIG_LAST_CARDS_CS);
		n.cid = MsgAction.ON_TEST_CONFIG_LAST_CARDS_CS,
		n.role_id = parseInt(s),
		n.cards_str = e,
		ShareMgr.getInstance().g_channel.SendBinary(n),
		alert("设置完毕!")
	},
	s.OnTestNet = function(t, e) {
		switch (t) {
		case MsgAction.ON_COM_ERROR_PROTO_SC:
			var i = PlayLogicTest.OnErr(e);
			this.huResult.text = i;
			break;
		case MsgAction.ON_HAND_OUT_ONE_CARD_SC:
			var s = PlayLogicTest.OnHandOutOneCardProto(e);
			this.addNewCard(s),
			this.huResult.text = "获得新牌：" + s,
			this.m_last_card_id = s;
			break;
		case MsgAction.ON_WEIXIN_USERINFO_RESP_SC:
			var n = PlayLogicTest.OnLogin(e);
			this.huResult.text = "昵称：" + n.nick + " 当前房号：" + n.cur_house_no;
			break;
		case MsgAction.ON_OPEN_HOUSE_RESP_SC:
			var r = HouseLogicTest.OnOpenRoom(e);
			this.huResult.text = "开房成功，房号：" + r;
			break;
		case MsgAction.ON_JOIN_HOUSE_RESP_SC:
			var a = HouseLogicTest.OnJoinRoom(e);
			this.huResult.text = "状态：" + a.status + " 房号：" + a.cur_house_no + " 昵称：" + a.nick + " 进入排序：" + a.role_index + " 加入时间：" + a.play_time;
			break;
		case MsgAction.ON_VOTE_KING_RESP_SC:
			var o = PlayLogicTest.OnVoteKing(e);
			this.huResult.text = "状态：" + o.status + " 大王牌：" + o.card_id;
			break;
		case MsgAction.ON_DELIVER_CARD_RESP_SC:
			var h = PlayLogicTest.OnDeliverCardResp(e);
			this.AdjustCardBtn(h),
			this.huResult.text = "开局发牌：" + h;
			break;
		case MsgAction.ON_OUTPUT_CARD_RESP_SC:
			var d = PlayLogicTest.OnOutputCard(e);
			d.role_id == this.m_roleid_edit.getText() ? (this.delSendCardFromList(d.card_id), this.huResult.text = "我方打出牌：" + d.card_id) : (this.OtherCard.init(d.card_id), this.huResult.text = d.role_id + " 打出牌：" + d.card_id);
			break;
		case MsgAction.ON_PLAY_CIRCLE_ACTION_NONE_SC:
			this.huResult.text = PlayLogicTest.OnOutputCardReply(e);
			break;
		case MsgAction.ON_PLAY_CIRCLE_ACTION_PASS_SC:
			this.huResult.text = PlayLogicTest.OnOutputCardReplyPass(e);
			break;
		case MsgAction.ON_PLAY_CIRCLE_ACTION_AN_GANG_SC:
			var l = PlayLogicTest.OnOutputCardAnGang(e);
			this.m_roleid_edit.getText() == l.role_id && (this.deleteCard(l.card_id, 4), this.huResult.text = "暗杠 " + l.card_id + "成功");
			break;
		case MsgAction.ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_SC:
			this.huResult.text = PlayLogicTest.OnOutputCardPengGang(e),
			this.OtherCard.init(0);
			break;
		case MsgAction.ON_PLAY_CIRCLE_ACTION_PENG_SC:
			var s = PlayLogicTest.OnOutputCardReplyFeng(e);
			this.deleteCard(s, 2),
			this.huResult.text = "碰牌 " + s + " 成功",
			this.OtherCard.init(0);
			break;
		case MsgAction.ON_PLAY_CIRCLE_ACTION_DIAN_GANG_SC:
			var c = PlayLogicTest.OnOutputCardReplyDianGang(e);
			this.m_roleid_edit.getText() == c.role_id && (this.deleteCard(c.card_id, 3), this.huResult.text = "点杠 " + c.card_id + " 成功", this.OtherCard.init(0));
			break;
		case MsgAction.ON_HU_CARD_RESP_SC:
			this.huResult.text = PlayLogicTest.OnHuCardReq(e);
			break;
		case MsgAction.ON_HAND_OUT_HU_INFO_SC:
			PlayLogicTest.OnHuCardRespInfo(e)
		}
	},
	s.deleteCard = function(t, e) {
		if (this.newGetCard = null, 0 != e) {
			for (var i = 0; i < this.arrMyCard.length && !(this.arrMyCard[i].getResult() == t && (this.arrMyCard[i].init(0), e -= 1, 0 >= e)); i++);
			this.setMyCard(this.getCardCode(this.arrMyCard), this.arrMyCard)
		}
	},
	s.addNewCard = function(t) {
		var e = this.getCardCode(this.arrMyCard);
		"" != e && (e += ","),
		e += t,
		this.setMyCard(e, this.arrMyCard)
	},
	s.delSendCardFromList = function(t) {
		this.deleteCard(t, 1)
	},
	s.CraeateBtn = function(t) {
		var e = new egret.DisplayObjectContainer;
		e.width = DataGlobal.wStage - 100;
		var i = ["登录0", "开房1", "入房2", "重开13", "关房14", "签关15", "应关16", "重来17", "选王3", "发牌4", "碰杠6", "暗杠7", "无应8", "过牌9", "碰牌10", "点杠11", "吃胡12", "自模13", "出牌5"];
		this.addChild(e);
		for (var s = 0,
		n = this.m_openid_edit.y + this.m_openid_edit.height + 10,
		r = -1,
		a = 0,
		o = "",
		h = 0; h < i.length; h++) o = i[h],
		a = parseInt(o.substr(2, o.length - 2)),
		this.m_btn_arr[h] = new btns.BtnRoundRect(o),
		this.m_btn_arr[h].SetBtnID(a),
		0 == h || 8 == h || 18 == h ? (s = 0, r += 1, 18 == h && (r += .5)) : e.width < s + this.m_btn_arr[h - 1].width + 10 + this.m_btn_arr[h].width ? (s = 0, r += 1) : s = s + this.m_btn_arr[h - 1].width + 10,
		n = r * (this.m_btn_arr[h].height + 5),
		this.m_btn_arr[h].x = s,
		this.m_btn_arr[h].y = n,
		this.m_btn_arr[h].addEventListener(egret.TouchEvent.TOUCH_END, this.OnBtnClick, this),
		e.addChild(this.m_btn_arr[h]);
		this.sendCard = new TestBlock,
		this.sendCard.x = this.m_btn_arr[h - 1].x + this.m_btn_arr[h - 1].width + 10 + this.sendCard.width / 2,
		this.sendCard.y = this.m_btn_arr[h - 1].y + this.m_btn_arr[h - 1].height / 2,
		this.sendCard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onselSendCard, this),
		this.selSendTip = Other.createTF("请从 我的牌 中选择要发出的牌", 5, 18),
		this.selSendTip.x = this.sendCard.x + this.sendCard.width / 2 + 10,
		this.selSendTip.y = this.m_btn_arr[h - 1].y + (this.m_btn_arr[h - 1].height - this.selSendTip.height) / 2,
		this.selSendTip.visible = !1,
		e.addChild(this.selSendTip),
		e.addChild(this.sendCard);
		var d = Other.createTF("别人打出的牌:", 0, 18);
		return d.x = this.selSendTip.x + this.selSendTip.width + 10,
		d.y = this.selSendTip.y,
		e.addChild(d),
		this.OtherCard = new TestBlock,
		this.OtherCard.y = this.sendCard.y,
		this.OtherCard.x = d.x + d.width + this.OtherCard.width / 2 + 10,
		e.addChild(this.OtherCard),
		this.selSendCard = !1,
		e.height = this.m_btn_arr[h - 1].y + this.m_btn_arr[h - 1].height + 5,
		e.y = t,
		e.x = 50,
		e.height + t + 20
	},
	s.onselSendCard = function() {
		0 == this.selSendCard ? (this.selSendTip.visible = !0, this.selSendCard = !0) : (this.selSendTip.visible = !1, this.selSendCard = !1)
	},
	s.setPlayerCard = function(t) {
		if (! (11 > t || t > 14)) {
			var e = t - 10;
			switch (e) {
			case 1:
				this.setMyCard("1,2,7,9,16,17,18,19,21,22,23,25,26,28", this.arrMyCard),
				this.setMyCard("15,4", this.arrnoUsed);
				break;
			case 2:
				this.setMyCard("6,9,9,9,13,13,15,15,23,24,25,33,33", this.arrMyCard),
				this.setMyCard("", this.arrnoUsed);
				break;
			case 3:
				this.setMyCard("4,6,6,6,11,11,11,22,22,22,24,24,24", this.arrMyCard),
				this.setMyCard("", this.arrnoUsed);
				break;
			case 4:
				this.setMyCard("3,4,5,16,16,18,18,24,25,26,27,27,27", this.arrMyCard),
				this.setMyCard("", this.arrnoUsed)
			}
		}
	},
	s.OnBtnClick = function(t) {
		var e = this.m_openid_edit.getText(),
		i = parseInt(this.m_roleid_edit.getText()),
		s = parseInt(this.m_house_no_edit.getText()),
		n = this.sendCard.getResult(),
		r = t.target.GetBtnID();
		switch (r) {
		case 0:
			HouseLogicTest.WeixinLogin(e),
			this.setPlayerCard(parseInt(e));
			break;
		case 1:
			HouseLogicTest.OpenRoom(i + "");
			break;
		case 2:
			HouseLogicTest.JoinRoom(i, s);
			break;
		case 3:
			PlayLogicTest.VoteKing(i, 1);
			break;
		case 4:
			PlayLogicTest.DeliverCardReq(i);
			break;
		case 5:
			this.sendCard.init(0),
			PlayLogicTest.OutputCard(i, n);
			break;
		case 6:
			PlayLogicTest.OutputCardPengGang(i, this.OtherCard.getResult());
			break;
		case 7:
			PlayLogicTest.OutputCardAnGang(i, this.newGetCard.getResult());
			break;
		case 8:
			PlayLogicTest.OutputCardReply(i, this.OtherCard.getResult());
			break;
		case 9:
			PlayLogicTest.OutputCardReplyPass(i, this.OtherCard.getResult());
			break;
		case 10:
			PlayLogicTest.OutputCardReplyFeng(i, this.OtherCard.getResult());
			break;
		case 11:
			PlayLogicTest.OutputCardReplyDianGang(i, this.OtherCard.getResult());
			break;
		case 12:
			var a = r - 12,
			o = this.testHu(!0);
			if ( - 1 == o.hu_type) return void(this.huResult.text = "胡法检测失败，不发送胡牌信息");
			PlayLogicTest.HuCardReq(i, this.OtherCard.getResult(), 1, a, o.hu_type, 0, o.hu_arr_str, o.hu_arr_len);
			break;
		case 13:
			var a = r - 12,
			o = this.testHu(!0);
			if ( - 1 == o.hu_type) return void(this.huResult.text = "胡法检测失败，不发送胡牌信息");
			PlayLogicTest.HuCardReq(i, this.m_last_card_id, 1, a, o.hu_type, 0, o.hu_arr_str, o.hu_arr_len);
			break;
		case 17:
			PlayLogicTest.PlayAgainReq(i, this.OtherCard.getResult())
		}
	},
	s.AdjustCardBtn = function(t) {
		this.setMyCard(t, this.arrMyCard)
	},
	s.CardClick = function(t) {
		console.warn("fff")
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(PanelTestBtns, "PanelTestBtns");
var TestBlock = function(t) {
	function e() {
		t.call(this),
		this.id = 0,
		this.tfCaption = null,
		this.width = 45,
		this.height = 60,
		this.graphics.beginFill(16777215, 1),
		this.graphics.drawRoundRect(0, 0, this.width, this.height, 15, 15),
		this.graphics.endFill(),
		this.tfCaption = new egret.TextField,
		this.tfCaption.textAlign = "center",
		this.tfCaption.verticalAlign = egret.VerticalAlign.MIDDLE,
		this.tfCaption.width = this.width,
		this.tfCaption.height = this.height,
		this.tfCaption.fontFamily = "Microsoft YaHei",
		this.tfCaption.size = 23,
		this.tfCaption.textColor = 16711680,
		this.tfCaption.wordWrap = !0,
		this.addChild(this.tfCaption),
		this.anchorOffsetX = this.width / 2,
		this.anchorOffsetY = this.height / 2,
		this.touchEnabled = !0,
		btns.initScaleBtn(this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.init = function(t) {
		var e = ["一", "二", "三", "四", "五", "六", "七", "八", "九"],
		i = ["东", "南", "西", "北", "中", "发", "白", "王"],
		s = 0;
		if (this.id = t, 0 == t) return void(this.tfCaption.text = "");
		if ( - 1 == t) return void(this.tfCaption.text = "删");
		switch (s = t - 10 * Math.floor(t / 10) - 1, Math.floor(t / 10)) {
		case 0:
			this.tfCaption.text = e[s] + "万";
			break;
		case 1:
			this.tfCaption.text = e[s] + "条";
			break;
		case 2:
			this.tfCaption.text = e[s] + "筒";
			break;
		default:
			this.tfCaption.text = i[t - 31]
		}
	},
	s.getResult = function() {
		return this.id
	},
	e
} (egret.Sprite);
egret.registerClass(TestBlock, "TestBlock");
var BlockPanel = function(t) {
	function e() {
		t.call(this),
		this.btnArr = [];
		for (var e = 0; 4 > e; e++) for (var i = 1; 10 > i; i++) {
			var s = new TestBlock;
			10 * e + i == 39 ? s.init( - 1) : s.init(10 * e + i),
			s.x = 5 + s.width / 2 + (i - 1) * (s.width + 5),
			s.y = s.height / 2 + 5 + e * (s.height + 5),
			this.addChild(s),
			this.btnArr.push(s),
			s.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this)
		}
		this.width = this.btnArr[8].x + this.btnArr[8].width / 2 + 5,
		this.height = s.y + s.height / 2 + 5,
		this.graphics.beginFill(16711680, .5),
		this.graphics.drawRoundRect(0, 0, this.width, this.height, 30, 30),
		this.graphics.endFill(),
		this.touchEnabled = !0,
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onClose = function() {
		this.visible = !1
	},
	s.onTouch = function(t) {
		this.dispatchEventWith("onClickBlock", !1, {
			id: t.target.getResult()
		})
	},
	e
} (egret.Sprite);
egret.registerClass(BlockPanel, "BlockPanel");
var HuTypePanel = function(t) {
	function e() {
		t.call(this),
		this.btnArr = [],
		this.width = DataGlobal.wStage / 2;
		for (var e = 0,
		i = 0; i < HuInfo.Info.length; i++) {
			var s = new btns.BtnRoundRect(HuInfo.Info[i].Name);
			s.SetBtnID(i),
			0 == i ? (s.x = 5, s.y = 5) : (s.width + 5 + this.btnArr[this.btnArr.length - 1].x + this.btnArr[this.btnArr.length - 1].width > this.width ? (e += 1, s.x = 5) : s.x = 5 + this.btnArr[this.btnArr.length - 1].x + this.btnArr[this.btnArr.length - 1].width + 5, s.y = 5 + e * (5 + s.height)),
			this.addChild(s),
			this.btnArr.push(s),
			s.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this)
		}
		this.height = s.y + s.height + 5,
		this.graphics.beginFill(16711680, .5),
		this.graphics.drawRoundRect(0, 0, this.width, this.height, 20, 20),
		this.graphics.endFill()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onClick = function(t) {
		this.dispatchEventWith("onSelectHu", !1, {
			idx: t.target.GetBtnID()
		}),
		this.visible = !1
	},
	e
} (egret.Sprite);
egret.registerClass(HuTypePanel, "HuTypePanel");
var PlayLogicTest = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.OnErr = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_COM_ERROR_PROTO_SC),
		i = e.decode(t.buffer);
		return "出错状态：" + i.status + " 错误ID：" + i.src_cid
	},
	t.VoteKing = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_VOTE_KING_REQ_CS);
		i.cid = MsgAction.ON_VOTE_KING_REQ_CS,
		i.role_id = t,
		i.card_id = e,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnVoteKing = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_VOTE_KING_RESP_SC),
		i = e.decode(t.buffer);
		return console.warn("vote king status=" + i.status + " card_id=" + i.card_id),
		{
			status: i.status,
			card_id: i.card_id
		}
	},
	t.OnLogin = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_WEIXIN_USERINFO_RESP_SC),
		i = e.decode(t.buffer);
		return console.warn("status=" + i.status + " nick=" + i.nick + " cur_house_no=" + i.cur_house_no),
		{
			nick: i.nick,
			cur_house_no: i.cur_house_no
		}
	},
	t.OnHandOutOneCardProto = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_HAND_OUT_ONE_CARD_SC),
		i = e.decode(t.buffer);
		return console.warn("recive one card card_id=" + i.card_id),
		i.card_id
	},
	t.DeliverCardReq = function(t) {
		var e = ProtoFactory.getInstance().newProto(MsgAction.ON_DELIVER_CARD_REQ_CS);
		e.cid = MsgAction.ON_DELIVER_CARD_REQ_CS,
		e.role_id = t,
		ShareMgr.getInstance().g_channel.SendBinary(e)
	},
	t.OnDeliverCardResp = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_DELIVER_CARD_RESP_SC),
		i = e.decode(t.buffer);
		return console.warn("diliver card card_str=" + i.cards_str + " last_card_id=" + i.last_card_id),
		i.cards_str
	},
	t.CreateCardBtn = function(t, e, i) {
		for (var s = t.split(","), n = s.length, r = 0; n > r; r += 2) for (var a = parseInt(s[r]), o = parseInt(s[r + 1]), h = 0; o > h; h++) {
			var d = new btns.BtnRoundRect(CardUtil.GetCardName(a));
			e.push(d)
		}
		var l = new btns.BtnRoundRect(CardUtil.GetCardName(i));
		e.push(l)
	},
	t.OutputCard = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_OUTPUT_CARD_REQ_CS);
		i.cid = MsgAction.ON_OUTPUT_CARD_REQ_CS,
		i.role_id = t,
		i.card_id = e,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnOutputCard = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_OUTPUT_CARD_RESP_SC),
		i = e.decode(t.buffer);
		return console.warn(" role_id=" + i.card_role_id + " 出牌  card_id=" + i.card_id + " circle_index" + i.circle_index),
		{
			role_id: i.card_role_id,
			card_id: i.card_id
		}
	},
	t.OutputCardAnGang = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_PLAY_CIRCLE_ACTION_AN_GANG_CS);
		i.cid = MsgAction.ON_PLAY_CIRCLE_ACTION_AN_GANG_CS,
		i.role_id = t,
		i.reply_card_id = e,
		i.circle_index = 0,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnOutputCardAnGang = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_OUTPUT_CARD_RESP_SC),
		i = e.decode(t.buffer);
		return {
			role_id: i.card_role_id,
			card_id: i.card_id,
			circle_index: i.circle_index
		}
	},
	t.OutputCardPengGang = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_CS);
		i.cid = MsgAction.ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_CS,
		i.role_id = t,
		i.reply_card_id = e,
		i.circle_index = 0,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnOutputCardPengGang = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_OUTPUT_CARD_RESP_SC),
		i = e.decode(t.buffer);
		return " role_id=" + i.card_role_id + " 碰杠  card_id=" + i.card_id + " circle_index" + i.circle_index
	},
	t.OutputCardReply = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_PLAY_CIRCLE_ACTION_NONE_CS);
		i.cid = MsgAction.ON_PLAY_CIRCLE_ACTION_NONE_CS,
		i.role_id = t,
		i.reply_card_id = e,
		i.circle_index = 0,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnOutputCardReply = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_PLAY_CIRCLE_ACTION_NONE_SC),
		i = e.decode(t.buffer);
		return "vote king status=" + i.status + " card_id=" + i.reply_card_id + " role_id=" + i.reply_role_id + " 点了无操作"
	},
	t.OutputCardReplyPass = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_PLAY_CIRCLE_ACTION_PASS_CS);
		i.cid = MsgAction.ON_PLAY_CIRCLE_ACTION_PASS_CS,
		i.role_id = t,
		i.reply_card_id = e,
		i.circle_index = 0,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnOutputCardReplyPass = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_PLAY_CIRCLE_ACTION_PASS_SC),
		i = e.decode(t.buffer);
		return "过牌 status=" + i.status + " card_id=" + i.reply_card_id + " role_id=" + i.reply_role_id + " 点了无操作"
	},
	t.OutputCardReplyFeng = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_PLAY_CIRCLE_ACTION_PENG_CS);
		i.cid = MsgAction.ON_PLAY_CIRCLE_ACTION_PENG_CS,
		i.role_id = t,
		i.reply_card_id = e,
		i.circle_index = 0,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnOutputCardReplyFeng = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_PLAY_CIRCLE_ACTION_PENG_SC),
		i = e.decode(t.buffer);
		return i.reply_card_id
	},
	t.OutputCardReplyDianGang = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_PLAY_CIRCLE_ACTION_DIAN_GANG_CS);
		i.cid = MsgAction.ON_PLAY_CIRCLE_ACTION_DIAN_GANG_CS,
		i.role_id = t,
		i.reply_card_id = e,
		i.circle_index = 0,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnOutputCardReplyDianGang = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_PLAY_CIRCLE_ACTION_DIAN_GANG_SC),
		i = e.decode(t.buffer);
		return {
			role_id: i.reply_role_id,
			card_id: i.reply_card_id
		}
	},
	t.HuCardReq = function(t, e, i, s, n, r, a, o) {
		var h = ProtoFactory.getInstance().newProto(MsgAction.ON_HU_CARD_REQ_CS);
		h.cid = MsgAction.ON_HU_CARD_REQ_CS,
		h.role_id = t,
		h.card_id = e,
		h.card_role_id = i,
		h.hu_kind = s,
		h.hu_type = n,
		h.king_mask = r,
		h.hu_arr_str = a,
		h.hu_arr_len = o,
		ShareMgr.getInstance().g_channel.SendBinary(h)
	},
	t.OnHuCardReq = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_HU_CARD_RESP_SC),
		i = e.decode(t.buffer);
		return "胡 " + i
	},
	t.OnHuCardRespInfo = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_HAND_OUT_HU_INFO_SC),
		i = e.decode(t.buffer);
		console.warn("胡牌:" + i.hu_info),
		console.warn("胡结算：r1_id=" + i.banker_index + " 得分:" + i.banker_point),
		console.warn("胡结算：r2_id=" + i.next1_index + " 得分:" + i.next1_point),
		console.warn("胡结算：r3_id=" + i.next2_index + " 得分:" + i.next2_point),
		console.warn("胡结算：r4_id=" + i.next3_index + " 得分:" + i.next3_point)
	},
	t.PlayAgainReq = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_PLAY_AGAIN_REQ_CS);
		i.cid = MsgAction.ON_PLAY_AGAIN_REQ_CS,
		i.role_id = t,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnPlayAgainReq = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_PLAY_AGAIN_RESP_SC),
		i = e.decode(t.buffer);
		console.warn("agree_num=" + i.agree_num)
	},
	t
} ();
egret.registerClass(PlayLogicTest, "PlayLogicTest");
var DataInteract = function() {
	function t() {
		this.arrCall = [],
		this.attachCall(MsgAction.ON_COM_PROTO_RESP_CS, this.commonBack, this)
	}
	var e = (__define, t),
	i = e.prototype;
	return i.loginBegin = function(t, e) {
		this.callAfterLogin = {
			fun: t,
			scope: e
		},
		this.ReqWeixinAccessToken()
	},
	i.ReqWeixinAccessToken = function() {
		this.attachCall(MsgAction.ON_WEIXIN_ACCESS_TOKEN_RESP_SC, this.ReqWeixinUserInfo, this);
		var t = ProtoFactory.getInstance().newProto(MsgAction.ON_WEIXIN_ACCESS_TOKEN_REQ_CS);
		t.cid = MsgAction.ON_WEIXIN_ACCESS_TOKEN_REQ_CS,
		t.role_id = 0,
		t.code = utils.getRequest().code,
		utils.consoleInfoObj("Req - WeixinAccessToken", t),
		ShareMgr.getInstance().g_channel.SendBinary(t)
	},
	i.ReqWeixinUserInfo = function(t) {
		if (0 != t.status) return void(location.href = "");
		DataUser.getInst().infoUser.access_token = t.access_token,
		DataUser.getInst().infoUser.openId = t.openid,
		this.attachCall(MsgAction.ON_WEIXIN_USERINFO_RESP_SC, this.loginEnd, this);
		var e = ProtoFactory.getInstance().newProto(MsgAction.ON_WEIXIN_USERINFO_REQ_CS);
		e.cid = MsgAction.ON_WEIXIN_USERINFO_REQ_CS,
		e.role_id = 0,
		e.openid = DataUser.getInst().infoUser.openId,
		e.access_token = DataUser.getInst().infoUser.access_token,
		utils.consoleInfoObj("Req - WeixinUserInfo", t),
		ShareMgr.getInstance().g_channel.SendBinary(e)
	},
	i.loginEnd = function(t) {
		utils.consoleInfoObj("Resp - loginEnd", t),
		utils.setProps(DataUser.getInst().infoUser, {
			strNick: t.nick,
			nSumRoom: t.house_card_num,
			nRoomIdPlaying: t.cur_house_no,
			roleId: t.roleId,
			headUrl: t.headurl
		}),
		this.executeCall(this.callAfterLogin, t),
		this.callAfterLogin = null
	},
	i.ReqHouseInfo = function(t, e, i) {
		this.attachCall(MsgAction.ON_OPENING_HOUSEINFO_RESP_SC, e, i);
		var s = ProtoFactory.getInstance().newProto(MsgAction.ON_OPENING_HOUSEINFO_REQ_CS);
		s.cid = MsgAction.ON_OPENING_HOUSEINFO_REQ_CS,
		s.role_id = DataUser.getInst().infoUser.roleId,
		s.house_no = t,
		ShareMgr.getInstance().g_channel.SendBinary(s)
	},
	i.ReqOpenHouse = function(t, e, i, s) {
		this.attachCall(MsgAction.ON_OPEN_HOUSE_RESP_SC, t, e);
		var n = ProtoFactory.getInstance().newProto(MsgAction.ON_OPEN_HOUSE_REQ_CS);
		n.cid = MsgAction.ON_OPEN_HOUSE_REQ_CS,
		n.role_id = DataUser.getInst().infoUser.roleId,
		n.play_type = i,
		n.mask_data = s,
		console.warn("ReqOpenHouse-发送", n.cid, n.role_id, n.play_type, n.mask_data),
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(n) : VirtualServer.getInst().ReqOpenHouse(t, e)
	},
	i.ReqJoinHouse = function(t, e, i) {
		this.attachCall(MsgAction.ON_OPENING_HOUSEINFO_RESP_SC, e, i);
		var s = ProtoFactory.getInstance().newProto(MsgAction.ON_JOIN_HOUSE_REQ_CS);
		s.cid = MsgAction.ON_JOIN_HOUSE_REQ_CS,
		s.role_id = DataUser.getInst().infoUser.roleId,
		s.house_no = DataUser.getInst().infoUser.nRoomIdPlaying,
		console.warn("ReqJoinHouse-发送", s.cid, s.role_id, s.house_no),
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(s) : VirtualServer.getInst().ReqOpenHouse(e, i)
	},
	i.attachJoinHouse = function(t, e) {
		this.attachCall(MsgAction.ON_JOIN_HOUSE_RESP_SC, t, e)
	},
	i.ReqCloseRoom = function(t, e) {
		this.attachCall(MsgAction.ON_CLOSE_HOUSE_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_CLOSE_HOUSE_REQ_CS);
		i.cid = MsgAction.ON_CLOSE_HOUSE_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.house_no = DataUser.getInst().infoUser.nRoomIdPlaying,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqCloseRoom(t, e)
	},
	i.ReqSignCloseRoom = function(t, e) {
		this.attachCall(MsgAction.ON_SIGN_CLOSE_HOUSE_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_SIGN_CLOSE_HOUSE_REQ_CS);
		i.cid = MsgAction.ON_SIGN_CLOSE_HOUSE_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.house_no = DataUser.getInst().infoUser.nRoomIdPlaying,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqSignCloseRoom(t, e)
	},
	i.ReqAnswerSignCloseRoom = function(t, e) {
		this.attachCall(MsgAction.ON_ANSWER_SIGN_CLOSE_HOUSE_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_ANSWER_SIGN_CLOSE_HOUSE_REQ_CS);
		i.cid = MsgAction.ON_ANSWER_SIGN_CLOSE_HOUSE_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.house_no = DataUser.getInst().infoUser.nRoomIdPlaying,
		i.answer = 1,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqAnswerSignCloseRoom(t, e)
	},
	i.attachVoteKing = function(e, i) {
		t.getInst().attachCall(MsgAction.ON_VOTE_KING_RESP_SC, e, i)
	},
	i.attachDeliverCard = function(e, i) {
		t.getInst().attachCall(MsgAction.ON_DELIVER_CARD_RESP_SC, e, i)
	},
	i.attachHandOutOneCard = function(e, i) {
		t.getInst().attachCall(MsgAction.ON_HAND_OUT_ONE_CARD_SC, e, i)
	},
	i.attachOutputCard = function(t, e) {
		this.attachCall(MsgAction.ON_OUTPUT_CARD_RESP_SC, t, e)
	},
	i.ReqVoteKing = function(t, e) {
		this.attachCall(MsgAction.ON_VOTE_KING_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_VOTE_KING_REQ_CS);
		i.cid = MsgAction.ON_VOTE_KING_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.card_id = 5,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqVoteKing(t, e)
	},
	i.ReqSendCardFromEast = function(t, e) {
		this.attachCall(MsgAction.ON_DELIVER_CARD_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_DELIVER_CARD_REQ_CS);
		i.cid = MsgAction.ON_DELIVER_CARD_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqSendCardFromEast(t, e)
	},
	i.ReqPopCard = function(t, e) {
		this.attachCall(MsgAction.ON_OUTPUT_CARD_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_OUTPUT_CARD_REQ_CS);
		i.cid = MsgAction.ON_OUTPUT_CARD_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.card_id = 1,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqPopCard(t, e)
	},
	i.ReqHuCard = function(t, e) {
		this.attachCall(MsgAction.ON_HU_CARD_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_HU_CARD_REQ_CS);
		i.cid = MsgAction.ON_HU_CARD_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.card_id = 1,
		i.card_role_id = DataUser.getInst().infoUser.roleId,
		i.hu_type = 1,
		i.hu_option = 8,
		i.king_mask = 1,
		i.hu_arr_str = "",
		i.hu_arr_len = 1,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqHuCard(t, e)
	},
	i.commonBack = function(t) {
		var e = t.src_cid + 1;
		this.arrCall[e] && this.executeCall(this.arrCall[e], t)
	},
	i.attachCall = function(t, e, i) {
		this.arrCall[t] = {
			fun: e,
			scope: i
		}
	},
	i.callReturn = function(t, e) {
		this.executeCall(this.arrCall[t], e)
	},
	i.executeCall = function(t, e) {
		console.warn("执行回调 - cid = ", e.cid),
		t.fun.call(t.scope, e)
	},
	t.getInst = function() {
		return this.inst || (this.inst = new t),
		this.inst
	},
	t
} ();
egret.registerClass(DataInteract, "DataInteract");
var VirtualServer = function() {
	function t() {}
	var e = (__define, t),
	i = e.prototype;
	return i.ReqOpenHouse = function(t, e) {
		var i = {
			status: 0,
			house_no: 9825
		};
		t.call(e, i)
	},
	i.ReqCloseRoom = function(t, e) {
		var i = {
			status: 0,
			house_no: 9825
		};
		t.call(e, i)
	},
	i.ReqJoinHouse = function(t, e) {
		var i = {
			status: 0,
			house_no: 9825,
			role_id: 2,
			nick: "strNick",
			role_index: 2
		};
		t.call(e, i)
	},
	i.ReqSignCloseRoom = function(t, e) {
		var i = {
			status: 0,
			house_no: 9825,
			role_id: 2,
			sign_nick: "strNick"
		};
		t.call(e, i)
	},
	i.ReqAnswerSignCloseRoom = function(t, e) {
		var i = {
			status: 0,
			house_no: 9825,
			role_nick: "strNick",
			answer: 1
		};
		t.call(e, i)
	},
	i.ReqVoteKing = function(t, e) {
		var i = {
			status: 0
		};
		t.call(e, i)
	},
	i.ReqSendCardFromEast = function(t, e) {
		var i = {
			status: 0,
			cards_str: "",
			last_card_id: 2
		};
		t.call(e, i)
	},
	i.ReqPopCard = function(t, e) {
		var i = {
			status: 0,
			card_id: 7,
			card_role_id: 2,
			circle_index: "strNick"
		};
		t.call(e, i)
	},
	i.ReqHuCard = function(t, e) {
		var i = {
			status: 0,
			role_id: 2,
			hu_type: "strNick"
		};
		t.call(e, i)
	},
	t.getInst = function() {
		return this.inst || (this.inst = new t),
		this.inst
	},
	t
} ();
egret.registerClass(VirtualServer, "VirtualServer");
var BarRectProgress = function(t) {
	function e(e, i) {
		t.call(this),
		this.initBar(e, i)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.updateBar = function(t) {
		0 > t || t > 1 || (this.maskRect.width = this.width * t, this.bmTop.mask = this.maskRect)
	},
	s.getPercentByPosX = function(t) {
		var e = (t - this.bmTop.x) / this.bmTop.width;
		return 0 > e || e > 1 ? -1 : e
	},
	s.initBar = function(t, e) {
		var i = new egret.Bitmap(RES.getRes(t)),
		s = new egret.Bitmap(RES.getRes(e));
		utils.setProps(s, {
			x: (i.width - s.width) / 2,
			y: (i.height - s.height) / 2
		}),
		utils.addChildren(this, [i, s]),
		this.maskRect = new egret.Rectangle(0, 0, s.width, s.height),
		this.bmTop = s
	},
	e
} (egret.DisplayObjectContainer);
egret.registerClass(BarRectProgress, "BarRectProgress");
var btns; !
function(t) {
	function e(t, e) {
		function i(t, i) {
			var n = "down" == i ? s + e: s;
			egret.Tween.removeTweens(t),
			egret.Tween.get(t).to({
				y: n
			},
			60, egret.Ease.bounceOut)
		}
		void 0 === e && (e = 5),
		t.touchEnabled = !0;
		var s = t.y;
		t.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
		function(e) {
			e.target == t && i(t, "down")
		},
		this),
		t.addEventListener(egret.TouchEvent.TOUCH_END,
		function(e) {
			i(t, "up")
		},
		this),
		t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,
		function(e) {
			i(t, "up")
		},
		this)
	}
	function i(t, e, i) {
		function s(t, e) {
			var i = "small" == e ? .9 : 1;
			egret.Tween.removeTweens(t),
			egret.Tween.get(t).to({
				scaleX: i,
				scaleY: i
			},
			60, egret.Ease.bounceOut)
		}
		t.touchEnabled = !0,
		t.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
		function(e) {
			e.target == t && s(t, "small")
		},
		this),
		t.addEventListener(egret.TouchEvent.TOUCH_END,
		function(n) {
			n.target == t && (s(t, "big"), e && e.call(i))
		},
		this),
		t.addEventListener(egret.TouchEvent.TOUCH_MOVE,
		function(e) {
			e.target == t && s(t, "big")
		},
		this),
		t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,
		function(e) {
			s(t, "big")
		},
		this)
	}
	var s = function(t) {
		function e(e, i, s) {
			void 0 === i && (i = 2655016),
			void 0 === s && (s = 1858332),
			t.call(this),
			this.nPadding = 10,
			this.numColorClick = s,
			this.numColorNormal = i,
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchSelf, this),
			this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchSelf, this),
			this.touchEnabled = !0;
			var n = new egret.TextField;
			utils.setProps(n, {
				size: 20,
				x: this.nPadding,
				y: this.nPadding,
				fontFamily: "Microsoft YaHei,微软雅黑"
			}),
			this.addChild(n),
			this.tfTxBtn = n,
			this.SetLabel(e)
		}
		__extends(e, t);
		var i = (__define, e),
		s = i.prototype;
		return s.SetBtnID = function(t) {
			this.btn_id = t
		},
		s.GetBtnID = function() {
			return this.btn_id
		},
		s.touchSelf = function(t) {
			this.drawSelf(t.type == egret.TouchEvent.TOUCH_BEGIN ? this.numColorClick: this.numColorNormal)
		},
		s.drawSelf = function(t) {
			this.graphics.clear(),
			this.graphics.beginFill(t),
			this.graphics.drawRoundRect(0, 0, this.width, this.height, this.height / 3, this.height / 3),
			this.graphics.endFill()
		},
		s.SetLabel = function(t) {
			this.tfTxBtn.text = t,
			this.width = this.tfTxBtn.width + 2 * this.nPadding,
			this.height = this.tfTxBtn.height + 2 * this.nPadding,
			this.drawSelf(this.numColorNormal)
		},
		e
	} (egret.Sprite);
	t.BtnRoundRect = s,
	egret.registerClass(s, "btns.BtnRoundRect");
	var n = function(t) {
		function e(e, i, s, n) {
			t.call(this);
			var r = new egret.Bitmap(RES.getRes(e));
			utils.setProps(r, {
				x: r.width / 2,
				y: r.height / 2
			},
			[.5, .5]);
			var a = new egret.Bitmap(RES.getRes(i));
			utils.setProps(a, {
				x: r.x,
				y: r.y
			},
			[.5, .5]),
			utils.addChildren(this, [r, a]),
			n && utils.setProps(a, n),
			s && utils.setProps(r, s),
			this.bmBgBtn = r,
			this.bmTxBtn = a
		}
		__extends(e, t);
		var i = (__define, e),
		s = i.prototype;
		return s.ctrlTouch = function(t) {
			this.touchEnabled = t,
			this.alpha = t ? 1 : .5
		},
		s.updateBtn = function(t, e) {
			this.bmBgBtn.texture = RES.getRes(t),
			this.bmTxBtn.texture = RES.getRes(e)
		},
		e
	} (egret.DisplayObjectContainer);
	t.BtnBmBm = n,
	egret.registerClass(n, "btns.BtnBmBm");
	var r = function(t) {
		function e(e, i, s, n) {
			t.call(this);
			var r = new egret.Bitmap(RES.getRes(e));
			s && utils.setProps(r, s, [.5, .5]),
			utils.setProps(r, {
				x: r.width / 2,
				y: r.height / 2,
				name: "bg_btn"
			},
			[.5, .5]),
			s && utils.setProps(r, s, [.5, .5]);
			var a = new egret.TextField;
			utils.setProps(a, {
				text: i,
				x: r.width / 2,
				y: r.height / 2,
				name: "tx_btn"
			},
			[.5, .5]),
			n && utils.setProps(a, n),
			utils.addChildren(this, [r, a]),
			this.txBtn = a,
			this.bgBtn = r
		}
		__extends(e, t);
		var i = (__define, e),
		s = i.prototype;
		return s.modifyPropsTx = function(t, e) {
			utils.setProps(this.txBtn, t, e)
		},
		s.modifyPropsBgBtn = function(t, e) {
			utils.setProps(this.bgBtn, t, e)
		},
		e
	} (egret.DisplayObjectContainer);
	t.BtnBmTf = r,
	egret.registerClass(r, "btns.BtnBmTf"),
	t.initFloatBtn = e,
	t.initScaleBtn = i
} (btns || (btns = {}));
var CachePool = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.produce = function(t) {
		var e = t.keyClass;
		null == this.cacheDict[e] && (this.cacheDict[e] = []);
		var i, s = this.cacheDict[e];
		return s.length > 0 ? i = s.pop() : (i = new t, i.key = e),
		i
	},
	t.reclaim = function(t) {
		var e = t.key;
		null == this.cacheDict[e] && (this.cacheDict[e] = []);
		var i = this.cacheDict[e]; - 1 == i.indexOf(t) && i.push(t)
	},
	t.reclaimObjFromArr = function(e, i) {
		for (var s in i) {
			var n = i[s];
			e.splice(e.indexOf(n), 1),
			t.reclaim(n)
		}
	},
	t.cacheDict = {},
	t
} ();
egret.registerClass(CachePool, "CachePool");
var PoolBM = function(t) {
	function e(e) {
		t.call(this, RES.getRes(e))
	}
	__extends(e, t);
	var i = (__define, e);
	i.prototype;
	return e.produce = function(t) {
		null == this.cacheDict[t] && (this.cacheDict[t] = []);
		var i, s = this.cacheDict[t];
		return i = s.length > 0 ? s.pop() : new e(t)
	},
	e.reclaim = function(t, e) {
		null == this.cacheDict[e] && (this.cacheDict[e] = []);
		var i = this.cacheDict[e]; - 1 != i.indexOf(t) && (i.push(t), console.warn("回收后的长度：", i.length))
	},
	e.cacheDict = {},
	e
} (egret.Bitmap);
egret.registerClass(PoolBM, "PoolBM");
var PoolTF = function(t) {
	function e(e) {
		t.call(this),
		utils.setProps(this, {
			text: "" + e,
			textAlign: "center",
			textColor: 16106782,
			size: 30,
			fontFamily: "Microsoft Yahei"
		},
		[.5, 1])
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return e.produce = function(t) {
		null == this.cacheDict[t] && (this.cacheDict[t] = []);
		var i, s = this.cacheDict[t];
		return i = s.length > 0 ? s.pop() : new e(t)
	},
	e.reclaim = function(t, e) {
		null == this.cacheDict[e] && (this.cacheDict[e] = []);
		var i = this.cacheDict[e]; - 1 == i.indexOf(t) && i.push(t)
	},
	s.setText = function(t) {
		this.text = "" + t
	},
	e.cacheDict = {},
	e.key = "ADD_SCORE",
	e
} (egret.TextField);
egret.registerClass(PoolTF, "PoolTF");
var ChangeImg = function(t) {
	function e(e) {
		t.call(this),
		this.duration = 500,
		this.textureArr = e,
		this.init(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startChange, this),
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.stopChange, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.startChange = function() {
		this.timerChange.reset(),
		this.timerChange.start()
	},
	s.stopChange = function() {
		this.timerChange.stop()
	},
	s.setDuration = function(t) {
		this.duration = t,
		this.timerChange.delay = this.duration,
		this.startChange()
	},
	s.init = function() {
		this.timerChange = new egret.Timer(this.duration),
		this.timerChange.addEventListener(egret.TimerEvent.TIMER, this.changeTexture, this)
	},
	s.changeTexture = function() {
		this.textureArr.push(this.textureArr.shift()),
		this.texture = RES.getRes(this.textureArr[0])
	},
	e
} (egret.Bitmap);
egret.registerClass(ChangeImg, "ChangeImg");
var PanelDrag = function(t) {
	function e(e, i, s) {
		void 0 === s && (s = [.5, .5]),
		t.call(this),
		this.numGapPics = 180,
		this.numIndPicMove = null,
		this.arrPicsPut = [],
		this.numIndPicMove = null,
		this.arrStrTexture = e,
		this.ptRelative = i,
		this.arrAnchor = s,
		this.initComps(),
		this.showPicsBoard(!1),
		this.initEvtTouch()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.touchPicPut = function(t) {
		var e = t.target;
		if (e != this) {
			var i = new egret.Point(t.stageX, t.stageY);
			switch (t.type) {
			case egret.TouchEvent.TOUCH_BEGIN:
				for (var s = this.arrPicsPut,
				n = 100,
				r = 0; r < s.length; r++) {
					var a = s[r],
					o = utils.distPoint(new egret.Point(a.x, a.y), i);
					n > o && (this.bmPicMoveAdapt = a, a.parent.setChildIndex(a, a.parent.numChildren + 1), n = o)
				}
				break;
			case egret.TouchEvent.TOUCH_MOVE:
				if (!this.bmPicMoveAdapt) return;
				utils.setProps(this.bmPicMoveAdapt, {
					x: i.x,
					y: i.y
				});
				break;
			case egret.TouchEvent.TOUCH_END:
				if (!this.bmPicMoveAdapt) return;
				utils.setProps(this.bmPicMoveAdapt, {
					x: i.x,
					y: i.y
				}),
				this.bmPicMoveAdapt = null
			}
		}
	},
	s.putObjToMap = function(t, e) {
		var i = new egret.Bitmap(RES.getRes(t));
		i.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchPicPut, this),
		i.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchPicPut, this),
		i.addEventListener(egret.TouchEvent.TOUCH_END, this.touchPicPut, this),
		this.setProps(i, {
			x: e.x,
			y: e.y,
			name: t,
			touchEnabled: !0
		},
		this.arrAnchor),
		this.boardPicsPut.addChild(i),
		this.arrPicsPut.push(i)
	},
	s.touchPic = function(t) {
		if (!this.bmBtnShowBoardPics.visible) {
			var e = new egret.Point(t.stageX, t.stageY);
			switch (t.type) {
			case egret.TouchEvent.TOUCH_BEGIN:
				var i = Math.floor(e.y / this.numGapPics) * this.numSumEveryRow + Math.floor(e.x / this.numGapPics);
				i < this.arrStrTexture.length ? (this.setPicMoveTexture(i), this.updatePosPicMove(e), this.showPicMove(), this.showPicsBoard(!1), this.showBtns(!1), this.numIndPicMove = i) : (this.showPicsBoard(!1), this.showBtns(!0));
				break;
			case egret.TouchEvent.TOUCH_MOVE:
				this.isDragingPic() && this.updatePosPicMove(e);
				break;
			case egret.TouchEvent.TOUCH_END:
				this.isDragingPic() && (this.putObjToMap(this.arrStrTexture[this.numIndPicMove], e), this.showPicsBoard(!1), this.showPicMove(!1), this.showBtns(!0), this.numIndPicMove = null)
			}
		}
	},
	s.updatePosPicMove = function(t) {
		this.setProps(this.bmPicMove, {
			x: t.x,
			y: t.y
		})
	},
	s.setPicMoveTexture = function(t) {
		this.setProps(this.bmPicMove, {
			visible: !0,
			texture: RES.getRes(this.arrStrTexture[t])
		},
		this.arrAnchor)
	},
	s.showPicMove = function(t) {
		void 0 === t && (t = !0),
		this.bmPicMove.visible = t
	},
	s.showBtns = function(t) {
		void 0 === t && (t = !0),
		this.bmBtnGenerate.visible = this.bmBtnSend.visible = this.bmBtnShowBoardPics.visible = t
	},
	s.isDragingPic = function() {
		return null != this.numIndPicMove
	},
	s.showPicsBoard = function(t) {
		void 0 === t && (t = !0),
		this.boardPicsLib.visible = t
	},
	s.touchBtnShowBoardPics = function() {
		this.showPicsBoard(!0),
		this.showBtns(!1)
	},
	s.generateDataMap = function() {
		var t = this.arrPicsPut;
		for (var e in t) {
			var i = t[e],
			s = "var bm" + i.name + ':egret.Bitmap = new egret.Bitmap(RES.getRes("' + i.name + '"));utils.setProps(bm' + i.name + ",{x:" + Math.round(i.x - this.ptRelative.x) + ",y:" + Math.round(i.y - this.ptRelative.y) + "},[" + this.arrAnchor + "])";
			console.log(s)
		}
	},
	s.sendDataMap = function() {},
	s.initEvtTouch = function() {
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchPic, this),
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchPic, this),
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchPic, this),
		this.touchEnabled = !0,
		this.bmBtnShowBoardPics.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchBtnShowBoardPics, this),
		this.bmBtnShowBoardPics.touchEnabled = !0,
		this.bmBtnGenerate.addEventListener(egret.TouchEvent.TOUCH_TAP, this.generateDataMap, this),
		this.bmBtnGenerate.touchEnabled = !0,
		this.bmBtnSend.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendDataMap, this),
		this.bmBtnSend.touchEnabled = !0
	},
	s.initComps = function() {
		this.setProps(this, {
			width: this.stage.stageWidth,
			height: this.stage.stageHeight
		}),
		this.graphics.beginFill(0, .3),
		this.graphics.drawRect(this.ptRelative.x, this.ptRelative.y, this.width, this.height),
		this.graphics.endFill();
		var t = new btns.BtnRoundRect("显示");
		this.setProps(t, {
			x: this.width / 2 - 200,
			y: 10
		},
		[.5, 0]),
		this.addChild(t);
		var e = new btns.BtnRoundRect("生成");
		this.setProps(e, {
			x: this.width / 2,
			y: t.y
		},
		[.5, 0]),
		this.addChild(e);
		var i = new btns.BtnRoundRect("发送");
		this.setProps(i, {
			x: this.width / 2 + 200,
			y: t.y
		},
		[.5, 0]),
		this.addChild(i);
		var s = new egret.Sprite;
		s.graphics.beginFill(0, .7),
		s.graphics.drawRoundRect(0, 0, this.width, this.height, 100, 100),
		s.graphics.endFill(),
		this.addChild(s),
		this.numSumEveryRow = Math.floor(this.width / this.numGapPics);
		for (var n, r = [], a = this.arrStrTexture, o = 0; o < a.length; o++) n = new egret.Bitmap(RES.getRes(a[o])),
		this.setProps(n, {
			x: (o % this.numSumEveryRow + .5) * this.numGapPics,
			y: (Math.floor(o / this.numSumEveryRow) + .5) * this.numGapPics
		},
		this.arrAnchor),
		r.push(n),
		s.addChild(n);
		this.bmBtnShowBoardPics = t,
		this.bmBtnGenerate = e,
		this.bmBtnSend = i,
		this.arrPicsLib = r,
		this.boardPicsLib = s,
		this.bmPicMove = new egret.Bitmap,
		this.addChild(this.bmPicMove),
		this.boardPicsPut = new egret.DisplayObjectContainer,
		this.addChildAt(this.boardPicsPut, 0)
	},
	s.setProps = function(t, e, i) {
		for (var s in e) t[s] = e[s];
		i && (t.anchorOffsetX = t.width * i[0], t.anchorOffsetY = t.height * i[1])
	},
	e
} (egret.Sprite);
egret.registerClass(PanelDrag, "PanelDrag");
var TfTimerUpdate = function(t) {
	function e(e, i, s) {
		void 0 === s && (s = 100),
		t.call(this),
		this.numTimesUpdate = 5,
		utils.setProps(this, e),
		this.arrAnchor = i,
		this.numDelayUpdate = s,
		this.initSelf()
	}
	__extends(e, t);
	var i = __define,
	s = e,
	n = s.prototype;
	return n.setNumTarget = function(t) {
		this.stopTm(),
		this.numTarget = t,
		this.numOffset = Math.ceil((t - this.myTextInt) / this.numTimesUpdate),
		0 == this.numOffset && (this.numOffset = -1),
		this.startTm()
	},
	n.startTm = function() {
		this.tmUpdate.start()
	},
	n.stopTm = function() {
		this.tmUpdate.running && this.tmUpdate.stop()
	},
	n.funTimer = function() {
		return this.hasToTarget ? (utils.setProps(this, {
			text: "" + this.numTarget
		},
		this.arrAnchor), void this.stopTm()) : void utils.setProps(this, {
			text: "" + (this.myTextInt + this.numOffset)
		},
		this.arrAnchor)
	},
	i(n, "myTextInt",
	function() {
		return parseInt(this.text)
	}),
	i(n, "hasToTarget",
	function() {
		return Math.abs(this.myTextInt - this.numTarget) <= 1 ? !0 : this.numOffset < 0 && this.myTextInt + this.numOffset <= this.numTarget ? !0 : this.numOffset > 0 && this.myTextInt + this.numOffset >= this.numTarget ? !0 : !1
	}),
	n.initSelf = function() {
		utils.setProps(this, {
			text: "0"
		},
		this.arrAnchor);
		var t = new egret.Timer(this.numDelayUpdate);
		t.addEventListener(egret.TimerEvent.TIMER, this.funTimer, this),
		this.tmUpdate = t
	},
	e
} (egret.TextField);
egret.registerClass(TfTimerUpdate, "TfTimerUpdate");
var BmtTimerUpdate = function(t) {
	function e(e, i, s) {
		void 0 === s && (s = 100),
		t.call(this),
		this.numTimesUpdate = 5,
		this.font = RES.getRes(e),
		this.arrAnchor = i,
		this.numDelayUpdate = s,
		this.initSelf()
	}
	__extends(e, t);
	var i = __define,
	s = e,
	n = s.prototype;
	return n.setNumTarget = function(t) {
		this.stopTm(),
		this.numTarget = t,
		this.numOffset = Math.ceil((t - this.myTextInt) / this.numTimesUpdate),
		0 == this.numOffset && (this.numOffset = -1),
		this.startTm()
	},
	n.startTm = function() {
		this.tmUpdate.start()
	},
	n.stopTm = function() {
		this.tmUpdate.running && this.tmUpdate.stop()
	},
	n.funTimer = function() {
		return this.hasToTarget ? (utils.setProps(this, {
			text: "" + this.numTarget
		},
		this.arrAnchor), void this.stopTm()) : void utils.setProps(this, {
			text: "" + (this.myTextInt + this.numOffset)
		},
		this.arrAnchor)
	},
	i(n, "myTextInt",
	function() {
		return parseInt(this.text)
	}),
	i(n, "hasToTarget",
	function() {
		return Math.abs(this.myTextInt - this.numTarget) <= 1 ? !0 : this.numOffset < 0 && this.myTextInt + this.numOffset <= this.numTarget ? !0 : this.numOffset > 0 && this.myTextInt + this.numOffset >= this.numTarget ? !0 : !1
	}),
	n.initSelf = function() {
		utils.setProps(this, {
			text: "0"
		},
		this.arrAnchor);
		var t = new egret.Timer(this.numDelayUpdate);
		t.addEventListener(egret.TimerEvent.TIMER, this.funTimer, this),
		this.tmUpdate = t
	},
	e
} (egret.BitmapText);
egret.registerClass(BmtTimerUpdate, "BmtTimerUpdate");
var TipShow = function(t) {
	function e() {
		t.call(this),
		this.init()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.init = function() {
		this.textTip = new egret.TextField,
		utils.setProps(this.textTip, {}),
		this.imgTip = new egret.Bitmap,
		this.addChild(this.imgTip),
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.funTouchEnd, this)
	},
	s.funTouchEnd = function() {
		this.funTouch.call(this.scopeTouch),
		this.onRem()
	},
	s.updateDraw = function(t, e) {
		this.graphics.clear(),
		this.graphics.beginFill(e, t),
		this.graphics.drawRect(0, 0, this.parent.width, this.parent.height),
		this.graphics.endFill()
	},
	s.timeoutTouch = function(t, e) {
		var i = this;
		this.funTouch = t,
		this.scopeTouch = e,
		this.touchEnabled = !1,
		egret.setTimeout(function() {
			i.touchEnabled = !0
		},
		this, 1500)
	},
	s.onRem = function() {
		this.parent.removeChild(this)
	},
	s.onAdd = function(t, e, i, s, n) {
		void 0 === s && (s = .5),
		void 0 === n && (n = 0),
		t.addChild(this),
		this.updateDraw(s, n),
		this.timeoutTouch(e, i)
	},
	s.setImg = function(t, e, i) {
		void 0 === i && (i = [0, 0]),
		utils.setProps(this.imgTip, {
			texture: RES.getRes(t)
		}),
		utils.setProps(this.imgTip, e, i)
	},
	e.getInst = function() {
		return this.inst || (this.inst = new e),
		this.inst
	},
	e
} (egret.Sprite);
egret.registerClass(TipShow, "TipShow");
var TwLittle = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t
} ();
egret.registerClass(TwLittle, "TwLittle");
var utils = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.drawShadowScreen = function(t, e) {
		void 0 === e && (e = .5),
		t.beginFill(0, e),
		t.drawRect(0, 0, DataGlobal.wStage, DataGlobal.hStage),
		t.endFill()
	},
	t.consoleInfoObj = function(t, e) {},
	t.concatObjToUrlGet = function(t) {
		var e = "";
		for (var i in t) e += "&" + i + "=" + t[i];
		return e.substr(1)
	},
	t.bToN = function(t) {
		return t ? 1 : 0
	},
	t.getDataFromLocal = function(t, e) {
		var i = egret.localStorage.getItem(e);
		if (i) {
			var s = JSON.parse(i);
			for (var n in s) t[n] = s[n]
		}
	},
	t.saveDataToLocal = function(t, e) {
		var i = {};
		for (var s in t) i[s] = t[s];
		var n = JSON.stringify(i);
		egret.localStorage.setItem(e, n)
	},
	t.getRequest = function() {
		var t = location.search,
		e = new Object;
		if ( - 1 != t.indexOf("?")) for (var i = t.substr(1), s = i.split("&"), n = 0; n < s.length; n++) e[s[n].split("=")[0]] = decodeURIComponent(s[n].split("=")[1]);
		return e
	},
	t.moveObjLeftLoop = function(t, e) {
		var i;
		for (var s in t) i = t[s],
		i.x += e;
		if (i = t[1], i.x < 0) {
			var n = t.shift(),
			r = t[t.length - 1];
			n.x = r.x + r.width,
			t.push(n)
		}
	},
	t.moveObjRightLoop = function(t, e) {
		var i;
		for (var s in t) i = t[s],
		i.x += e;
		if (i = t[1], i.x > 0) {
			var n = t.pop(),
			r = t[0];
			n.x = r.x - r.width,
			t.unshift(n)
		}
	},
	t.remELemFromParent = function(t) {
		var e;
		for (var i in t) e = t[i],
		e.parent.removeChild(e)
	},
	t.reclcaimArr = function(t, e) {
		for (var i in t) e.splice(e.indexOf(t[i]), 1)
	},
	t.getWindowWidth = function() {
		var t = 480;
		return window && window.innerWidth ? t = window.innerWidth: document.body && document.body.clientWidth && (t = document.body.clientWidth),
		document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth && (t = document.documentElement.clientWidth),
		t
	},
	t.getWindowHeight = function() {
		var t = 800;
		return window && window.innerHeight ? t = window.innerHeight: document.body && document.body.clientHeight && (t = document.body.clientHeight),
		document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth && (t = document.documentElement.clientHeight),
		t
	},
	t.getStrMax = function(t, e) {
		return this.lengthChars(t) > e,
		t
	},
	t.lengthChars = function(t) {
		for (var e = 0,
		i = 0; i < t.length; i++) e += t.charCodeAt(i) > 255 ? 2 : 1;
		return e
	},
	t.toogleVisible = function(t, e) {
		t.visible = e
	},
	t.giveMask = function(e) {
		var i = new egret.Shape;
		return i.graphics.beginFill(0, 1),
		i.graphics.drawRect(0, 0, e.width, e.height),
		i.graphics.endFill(),
		t.setProps(i, {
			x: e.x - e.anchorOffsetX,
			y: e.y - e.anchorOffsetY
		}),
		e.parent && e.parent.addChild(i),
		e.mask = i,
		i
	},
	t.shineAlphaObj = function(t, e, i) {
		egret.Tween.get(t, {
			override: !0
		}).to({
			alpha: .3
		},
		100).to({
			alpha: 1
		},
		100).to({
			alpha: .3
		},
		100).to({
			alpha: 1
		},
		100).call(function() {
			e && e.call(i)
		})
	},
	t.shineScaleObj = function(t, e, i) {
		egret.Tween.get(t, {
			override: !0
		}).to({
			scale: .7
		},
		100).to({
			scale: 1
		},
		100).to({
			scale: .7
		},
		100).to({
			scale: 1
		},
		100).call(function() {
			e && e.call(i)
		})
	},
	t.showInfo = function(t) {
		console.log(t)
	},
	t.dragToPosition = function(t) {
		function e() {
			i.x = t.x,
			i.y = t.y,
			i.text = "x:" + parseInt(t.x) + ",y:" + parseInt(t.y),
			console.log(i.text)
		}
		var i = new egret.TextField;
		this.setProps(i, {
			x: t.x,
			y: t.y,
			text: "" + parseInt(t.x) + "," + parseInt(t.y),
			size: 15,
			textColor: 0
		}),
		t.parent.addChild(i),
		window.debugScope = t.parent,
		window.keyUp = function() {
			t.y -= 2,
			e()
		},
		window.keyRight = function() {
			t.x += 2,
			e()
		},
		window.keyDown = function() {
			t.y += 2,
			e()
		},
		window.keyLeft = function() {
			t.x -= 2,
			e()
		},
		e()
	},
	t.hitTestRectRect = function(e, i, s) {
		void 0 === s && (s = {
			xObj1: 1,
			yObj1: 1,
			xObj2: 1,
			yObj2: 1
		});
		var n = e.getBounds(),
		r = i.getBounds();
		return t.setProps(n, {
			width: n.width * s.xObj1,
			height: n.height * s.yObj1
		}),
		t.setProps(r, {
			width: r.width * s.xObj2,
			height: r.height * s.yObj2
		}),
		n.x = e.x - e.anchorOffsetX * s.xObj1,
		n.y = e.y - e.anchorOffsetY * s.yObj1,
		r.x = i.x - i.anchorOffsetX * s.xObj2,
		r.y = i.y - i.anchorOffsetY * s.yObj2,
		n.intersects(r)
	},
	t.hitTestRoundRound = function(t, e) {
		return this.distPoint(t, e) < t.width / 2 + e.width / 2 ? !0 : !1
	},
	t.angleToRadian = function(t) {
		return t * Math.PI / 180
	},
	t.toFixed = function(t, e) {
		return void 0 === e && (e = 2),
		Math.floor(10 * t * e) / (10 * e)
	},
	t.getNumIntDuring = function(t, e) {
		return t + Math.floor(Math.random() * (e + 1 - t))
	},
	t.radianToAngle = function(t) {
		return 180 * t / Math.PI
	},
	t.getDirPercentXY = function(t, e) {
		var i = e.X - t.X,
		s = e.Y - t.Y,
		n = Math.abs(i) + Math.abs(s),
		r = i / n,
		a = s / n;
		return {
			xPercent: r,
			yPercent: a
		}
	},
	t.distPoint = function(t, e) {
		return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y))
	},
	t.angleBtwTwoPoints = function(t, e, i, s) {
		var n = Math.abs(t - i),
		r = Math.abs(e - s),
		a = Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2)),
		o = r / a,
		h = Math.acos(o),
		d = Math.round(180 / (Math.PI / h));
		return i > t && s > e ? d = 180 - d: i == t && s > e ? d = 180 : i > t && s == e ? d = 90 : t > i && s > e ? d = 180 + d: t > i && s == e ? d = 270 : t > i && e > s && (d = 360 - d),
		d
	},
	t.simpleLineTest = function(t, e, i, s, n, r, a, o) {
		var h;
		h = (i - t) * (r - e) - (n - t) * (s - e);
		var d;
		d = (i - t) * (o - e) - (a - t) * (s - e);
		var l;
		l = (a - n) * (e - r) - (t - n) * (o - r);
		var c;
		return c = (a - n) * (s - r) - (i - n) * (o - r),
		0 >= h * d && 0 >= l * c ? !0 : !1
	},
	t.setProps = function(t, e, i) {
		for (var s in e) t[s] = e[s];
		i && (t.anchorOffsetX = t.width * i[0], t.anchorOffsetY = t.height * i[1])
	},
	t.newMC = function(t, e) {
		var i = RES.getRes(t.jsonData),
		s = RES.getRes(t.textureData),
		n = new egret.MovieClipDataFactory(i, s),
		r = new egret.MovieClip(n.generateMovieClipData(t.mcName));
		return e && e.addChild(r),
		r
	},
	t.doPostRequest = function(t, e, i, s, n) {
		var r = new egret.URLLoader;
		r.dataFormat = egret.URLLoaderDataFormat.TEXT,
		r.addEventListener(egret.Event.COMPLETE, i, n),
		s && r.addEventListener(egret.IOErrorEvent.IO_ERROR, s, n);
		var a = new egret.URLRequest(t);
		a.method = egret.URLRequestMethod.POST,
		a.data = new egret.URLVariables(e),
		r.load(a)
	},
	t.doGetRequest = function(t, e, i, s, n) {
		var r = new egret.URLLoader;
		r.dataFormat = egret.URLLoaderDataFormat.TEXT,
		r.addEventListener(egret.Event.COMPLETE, i, n),
		s && r.addEventListener(egret.IOErrorEvent.IO_ERROR, s, n);
		var a = new egret.URLRequest(t);
		a.method = egret.URLRequestMethod.GET,
		a.data = new egret.URLVariables(e),
		r.load(a)
	},
	t.ctrlChildrenTouch = function(t, e) {
		t.touchChildren = e
	},
	t.addChildren = function(t, e) {
		for (var i in e) t.addChild(e[i])
	},
	t.remChildren = function(t, e) {
		for (var i = 0; i < e.length; i++) t.removeChild(e[i])
	},
	t
} ();
egret.registerClass(utils, "utils");