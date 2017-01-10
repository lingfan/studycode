
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
