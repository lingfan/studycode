
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
