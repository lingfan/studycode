
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
