
var BoardWayPlay = function(t) {
	function e() {
		t.call(this),
		this.confContent = RES.getRes("play_way_content"),
		this.initBoard(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.resetFirst, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.resetFirst = function() {
		this.showTipPlay(0)
	},
	s.showTipPlay = function(t) {
		var e = this.confContent[t];
		this.compStarStartDifficult.setSumStar(e.start_difficulty),
		this.compStarTechDifficult.setSumStar(e.technology_difficulty),
		this.tfTip.textFlow = (new egret.HtmlTextParser).parser(e.content),
		this.scrollTip.setScrollTop(0, 10)
	},
	s.initBoard = function() {
		var t = new egret.Bitmap(RES.getRes("bb_3")),
		e = new egret.ScrollView,
		i = new CompStarDifficult("上手难度"),
		s = new CompStarDifficult("技巧难度"),
		n = new egret.DisplayObjectContainer,
		r = new egret.TextField;
		utils.setProps(t, {
			width: 510,
			height: 460
		}),
		utils.setProps(e, {
			x: 15,
			y: 15,
			width: 480,
			height: 430,
			verticalScrollPolicy: !0,
			horizontalScrollPolicy: !1
		}),
		utils.setProps(s, {
			x: s.x + i.width + 10
		}),
		utils.setProps(r, {
			y: i.height + 10,
			width: 480,
			size: 22,
			textColor: 4790528,
			lineSpacing: 8,
			fontFamily: "MicroSoft Yahei"
		}),
		utils.addChildren(n, [i, s, r]),
		e.setContent(n),
		utils.addChildren(this, [t, e]),
		this.scrollTip = e,
		this.tfTip = r,
		this.compStarStartDifficult = i,
		this.compStarTechDifficult = s
	},
	e
} (egret.DisplayObjectContainer);
