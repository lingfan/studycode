
var BarRoom = function(t) {
	function e() {
		t.call(this),
		this.bg = null,
		this.bmtIdRoom = null,
		this.initBar(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.setNum, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setNum = function(t) {
		utils.setProps(this.bmtIdRoom, {
			text: "" + DataUser.getInst().infoUser.nRoomIdPlaying
		})
	},
	s.initBar = function() {
		this.bg = new egret.Bitmap(RES.getRes("c9")),
		this.addChild(this.bg),
		this.width = this.bg.width,
		this.height = this.bg.height;
		var t = new egret.Bitmap(RES.getRes("c10"));
		t.y = (this.height - t.height) / 2,
		t.x = 2,
		this.addChild(t),
		this.bmtIdRoom = new egret.BitmapText,
		this.bmtIdRoom.font = RES.getRes("yellowfnt_fnt"),
		this.bmtIdRoom.text = "0",
		this.bmtIdRoom.x = t.x + t.width + 5,
		this.bmtIdRoom.y = (this.height - this.bmtIdRoom.height) / 2 + 3,
		this.addChild(this.bmtIdRoom)
	},
	e
} (egret.DisplayObjectContainer);
