
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
