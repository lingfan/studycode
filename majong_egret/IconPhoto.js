
var IconPhoto = function(t) {
	function e() {
		t.call(this),
		this.initIcon()
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setPhotoRes = function(t) {
		this.bmPhoto.texture = t
	},
	s.setPhotoUrl = function(t, e) {
		null == e ? (this.setPhotoRes(RES.getRes("temp_1")), "" != t && RES.getResByUrl(t, this.setPhotoRes, this, RES.ResourceItem.TYPE_IMAGE)) : this.setPhotoRes(e)
	},
	s.initIcon = function() {
		var t = new egret.Bitmap(RES.getRes("a5_1")),
		e = new egret.Bitmap(RES.getRes("temp_1")),
		i = new egret.Bitmap(RES.getRes("a5_2"));
		utils.setProps(e, {
			width: .9 * i.width,
			height: .9 * i.height,
			x: 5,
			y: 5
		}),
		utils.addChildren(this, [t, e, i]),
		this.bmPhoto = e,
		this.setMaskToPhoto(e)
	},
	s.setMaskToPhoto = function(t) {
		var e = new egret.Shape;
		e.graphics.beginFill(0),
		e.graphics.drawRoundRect(5, 5, t.width, t.height, 30, 30),
		e.graphics.endFill(),
		this.addChild(e),
		t.mask = e
	},
	e
} (egret.DisplayObjectContainer);
