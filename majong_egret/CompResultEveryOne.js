
var CompResultEveryOne = function(t) {
	function e() {
		t.call(this),
		this.arrColor = {
			nick: 4202515,
			wait: 4739655,
			result: 11804954
		},
		utils.setProps(this, {
			size: 26,
			bold: !0,
			textColor: this.arrColor.nick,
			fontFamily: "MicroSoft Yahei"
		})
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.refreshResult = function(t, e) {
		var i, s;
		switch (e) {
		case ResultVote.AGREE:
			i = "同意",
			s = this.arrColor.result;
			break;
		case ResultVote.DISAGREE:
			i = "不同意",
			s = this.arrColor.result;
			break;
		case ResultVote.NOT_VOTE:
			i = "等待选择",
			s = this.arrColor.wait
		}
		t = utils.getStrMax(t, 10),
		this.textFlow = (new egret.HtmlTextParser).parser(t + ' <font color="' + s + '">' + i + "</font>")
	},
	e
} (egret.TextField);
