
var EditText = function(t) {
	function e() {
		t.call(this),
		this.hint = "",
		this.isPassword = !1,
		this.tfEdit = new egret.TextField,
		this.tfEdit.type = egret.TextFieldType.INPUT,
		this.tfEdit.x = 2,
		this.addChild(this.tfEdit)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.setText = function(t) {
		this.tfEdit.text = t
	},
	s.getText = function() {
		return this.tfEdit.text
	},
	s.setBgAlpha = function(t) {
		this.graphics.clear(),
		this.graphics.beginFill(16777215, t),
		this.graphics.drawRoundRect(0, 0, this.width, this.height, 18, 18),
		this.graphics.endFill()
	},
	s.setTextAlign = function(t, e) {
		Other.setTFAligh(this.tfEdit, t, e)
	},
	s.setTextType = function(t, e) {
		Other.setTFInfo(this.tfEdit, e, t)
	},
	s.setSize = function(t, e) {
		void 0 === e && (e = -1),
		this.graphics.clear(),
		this.width = t,
		-1 != e && (this.height = e),
		this.graphics.beginFill(16578792, 1),
		this.graphics.drawRoundRect(0, 0, this.width, this.height, 15, 15),
		this.graphics.endFill(),
		this.tfEdit.width = this.width - 4,
		this.tfEdit.height = this.height
	},
	s.isPass = function() {
		this.isPassword = !0,
		this.tfEdit.text == this.hint ? this.tfEdit.displayAsPassword = !1 : this.tfEdit.displayAsPassword = !0
	},
	s.init = function() {
		var t = this;
		this.tfEdit.addEventListener(egret.TextEvent.FOCUS_IN,
		function() {
			t.tfEdit.text == t.hint && (t.tfEdit.text = "")
		},
		this),
		this.tfEdit.addEventListener(egret.TextEvent.FOCUS_OUT,
		function() {
			"" == t.tfEdit.text ? (t.tfEdit.text = t.hint, t.tfEdit.displayAsPassword = !1) : t.tfEdit.displayAsPassword = t.isPassword
		},
		this),
		"" != this.hint && "" == this.tfEdit.text && (this.tfEdit.text = this.hint)
	},
	e.createEditText = function(t, i, s, n, r, a, o) {
		void 0 === r && (r = 1),
		void 0 === a && (a = 1),
		void 0 === o && (o = 1);
		var h = new e;
		return h.height = t + 12,
		h.setTextType(t, i),
		h.setText(s),
		h.hint = n,
		h.setBgAlpha(r),
		h.setTextAlign(a, o),
		h.init(),
		h
	},
	e
} (egret.Sprite);
