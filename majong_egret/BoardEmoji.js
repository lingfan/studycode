
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
