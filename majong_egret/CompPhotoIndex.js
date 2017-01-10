
var CompPhotoIndex = function(t) {
	function e() {
		t.call(this),
		this.initComp(),
		this.setNickAndId(DataUser.getInst().infoUser.strNick, DataUser.getInst().infoUser.roleId + "")
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setNickAndId = function(t, e) {
		utils.setProps(this.tfNickName, {
			text: t
		},
		[.5, 0]),
		utils.setProps(this.tfId, {
			text: "ID£º" + e
		},
		[.5, 0])
	},
	s.setSumRoom = function(t) {
		utils.setProps(this.bmtSumRoom, {
			text: "" + t
		},
		[.5, .5])
	},
	s.refershInfo = function() {
		this.setNickAndId(DataUser.getInst().infoUser.strNick, DataUser.getInst().infoUser.roleId + ""),
		this.iconPhoto.setPhotoUrl(DataUser.getInst().infoUser.headUrl, DataUser.getInst().infoUser.headPic)
	},
	s.showBoardUserInfo = function() {
		this.dispatchEventWith(DataGlobal.Evts.SHOW_BOARD_USER_INFO)
	},
	s.showBoardTipAddRoom = function() {
		this.dispatchEventWith(DataGlobal.Evts.SHOW_BOARD_TIP_ADD_ROOM)
	},
	s.initComp = function() {
		var t = new IconPhoto,
		e = new egret.TextField,
		i = new egret.TextField,
		s = new egret.Bitmap(RES.getRes("aa_8")),
		n = new egret.Bitmap(RES.getRes("aa_4")),
		r = new egret.Bitmap(RES.getRes("aa_5")),
		a = new egret.BitmapText;
		utils.setProps(t, {
			x: t.width / 2 + 10,
			y: t.height / 2
		},
		[.5, .5]),
		utils.setProps(n, {
			x: t.width + 25,
			y: 70,
			scaleX: .9,
			scaleY: .9
		},
		[.5, .5]),
		utils.setProps(s, {
			x: n.x,
			y: n.y
		},
		[0, .5]),
		utils.setProps(a, {
			x: s.x + s.width / 2 - 5,
			y: s.y + 3,
			font: RES.getRes("yellowfnt_fnt"),
			text: "9999"
		},
		[.5, .5]),
		utils.setProps(i, {
			x: n.x + s.width / 2 - n.width / 2 + 10,
			y: 30,
			textColor: 16777215,
			size: 15,
			width: s.width,
			fontFamily: "Microsoft YaHei"
		},
		[.5, 0]),
		utils.setProps(r, {
			x: s.x + s.width - 10,
			y: s.y + 2,
			width: 1.3 * r.width,
			height: 1.3 * r.height
		},
		[.5, .5]),
		utils.setProps(e, {
			x: i.x,
			y: 5,
			textColor: 16776960,
			size: 20,
			bold: !0,
			width: s.width,
			fontFamily: "Microsoft YaHei"
		},
		[.5, 0]),
		utils.addChildren(this, [t, e, i, s, n, r, a]),
		t.setPhotoUrl(DataUser.getInst().infoUser.headUrl, DataUser.getInst().infoUser.headPic),
		t.addEventListener(egret.TouchEvent.TOUCH_END, this.showBoardUserInfo, this),
		r.addEventListener(egret.TouchEvent.TOUCH_END, this.showBoardTipAddRoom, this),
		btns.initScaleBtn(r),
		btns.initScaleBtn(t),
		this.tfId = i,
		this.tfNickName = e,
		this.bmtSumRoom = a,
		this.iconPhoto = t
	},
	e
} (egret.DisplayObjectContainer);
