
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
