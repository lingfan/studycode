
var ContainerScrollMsg = function(t) {
	function e(e, i) {
		t.call(this),
		this.initContainer(e, i)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setContent = function(t) {
		this.scrollObj.setScrollTop(0, 10),
		this.tfContent.text = 0 == t ? "公告内容": "消息内容"
	},
	s.initContainer = function(t, e) {
		var i = new egret.ScrollView,
		s = new egret.Bitmap(RES.getRes("bb_2"));
		utils.setProps(s, {
			width: t,
			height: e
		}),
		utils.setProps(i, {
			x: 30,
			y: 30,
			width: t - 60,
			height: e - 50
		});
		var n = new egret.TextField;
		utils.setProps(n, {
			width: t - 60,
			size: 25,
			textColor: 4790528,
			fontFamily: "MicroSoft Yahei",
			lineSpacing: 9
		}),
		i.setContent(n),
		utils.addChildren(this, [s, i]),
		this.tfContent = n,
		this.scrollObj = i
	},
	e
} (egret.Sprite);
