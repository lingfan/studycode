
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
