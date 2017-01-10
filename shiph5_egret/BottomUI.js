
var Toast = function(t) {
    function e(a, i, n, s, r, o) {
        var l = this;
        void 0 === o && (o = -1),
            t.call(this),
            s = 16777215;
        var h = new egret.Bitmap(e._txtrToastBg);
        h.scale9Grid = new egret.Rectangle(1, 1, 2, 2),
            h.width = i + 100,
            this.addChild(h);
        var c = new egret.TextField;
        c.lineSpacing = 10,
            c.multiline = !0,
            c.width = 560,
            c.size = 25,
            c.strokeColor = 0,
            r ? c.textFlow = Utils.textFlowByStr(a, s) : (c.text = a, c.textColor = s),
            c.fontFamily = "黑体",
            c.textAlign = egret.HorizontalAlign.CENTER,
            c.verticalAlign = egret.VerticalAlign.MIDDLE,
            h.height = 100 + c.height,
            c.x = (h.width - c.width) / 2,
            c.y = (h.height - c.height) / 2,
            this.addChild(c),
            this.anchorOffsetX = .5 * this.width,
            this.anchorOffsetY = .5 * this.height,
            this.x = .5 * i,
            o > 0 ? this.y = o : this.y = .5 * n,
            this.alpha = 0,
            egret.Tween.get(this).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 0
                },
                0, egret.Ease.quintOut).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                },
                100, egret.Ease.quintOut).call(function() {
                console.log("tween tween tween")
            }).wait(1500).to({
                    alpha: .5,
                    scaleY: 0
                },
                100, egret.Ease.quadOut).call(function() {
                l.parent && l.parent.removeChild(l)
            })
    }
    __extends(e, t);
    var a = (__define, e);
    a.prototype;
    return e.init = function(t, e) {
            this._cont = t,
                this._txtrToastBg = e
        },
        e.launch = function(t, a, i, n) {
            if (void 0 === a && (a = 16777215), void 0 === n && (n = -1), this._cont) {
                var s = new e(t, this._cont.stage.stageWidth, this._cont.stage.stageHeight, a, i, n);
                this._cont.addChild(s)
            }
        },
        e
}(egret.DisplayObjectContainer);
