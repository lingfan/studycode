
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
