
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
