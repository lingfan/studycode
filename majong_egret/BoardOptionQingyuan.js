
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
