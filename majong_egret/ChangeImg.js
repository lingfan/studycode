
var PoolTF = function(t) {
	function e(e) {
		t.call(this),
		utils.setProps(this, {
			text: "" + e,
			textAlign: "center",
			textColor: 16106782,
			size: 30,
			fontFamily: "Microsoft Yahei"
		},
		[.5, 1])
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return e.produce = function(t) {
		null == this.cacheDict[t] && (this.cacheDict[t] = []);
		var i, s = this.cacheDict[t];
		return i = s.length > 0 ? s.pop() : new e(t)
	},
	e.reclaim = function(t, e) {
		null == this.cacheDict[e] && (this.cacheDict[e] = []);
		var i = this.cacheDict[e]; - 1 == i.indexOf(t) && i.push(t)
	},
	s.setText = function(t) {
		this.text = "" + t
	},
	e.cacheDict = {},
	e.key = "ADD_SCORE",
	e
} (egret.TextField);
