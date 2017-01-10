
var ScrollerEx = function(t) {
    function e() {
        t.call(this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.scrollToEx = function(t, e, a, i, n) {
            void 0 === e && (e = 0),
                void 0 === a && (a = !1),
                this.stopAnimation(),
                a ? e > 50 ? i ? egret.Tween.get(this.$Scroller[10]).to({
                        scrollV: t
                    },
                    e, egret.Ease.quartIn).call(i, n) : egret.Tween.get(this.$Scroller[10]).to({
                        scrollV: t
                    },
                    e, egret.Ease.quartIn) : (this.$Scroller[10].scrollV = t, Utils.call(i, n)) : e > 50 ? i ? egret.Tween.get(this.$Scroller[10]).to({
                        scrollH: t
                    },
                    e, egret.Ease.quartIn).call(i, n) : egret.Tween.get(this.$Scroller[10]).to({
                        scrollH: t
                    },
                    e, egret.Ease.quartIn) : (this.$Scroller[10].scrollH = t, Utils.call(i, n))
        },
        i.scrollXY = function(t, e, a, i, n, s, r) {
            void 0 === n && (n = 0),
                this.stopAnimation(),
                0 > t && (t = 0),
                0 > e && (e = 0);
            var o = a - this.width,
                l = i - this.height;
            t > o && (t = o),
                e > l && (e = l),
                n > 50 ? s ? egret.Tween.get(this.$Scroller[10]).to({
                        scrollH: t,
                        scrollV: e
                    },
                    n, egret.Ease.quartIn).call(s, r) : egret.Tween.get(this.$Scroller[10]).to({
                        scrollH: t,
                        scrollV: e
                    },
                    n, egret.Ease.quartIn) : (this.$Scroller[10].scrollH = t, this.$Scroller[10].scrollV = e, Utils.call(s, r))
        },
        i.getScrolled = function(t) {
            return void 0 === t && (t = !1),
                t ? this.$Scroller[10].scrollV : this.$Scroller[10].scrollH
        },
        i.scrollToItemIndex = function(t, e, a, i, n, s, r, o) {
            if (void 0 === s && (s = 0), this.stopAnimation(), e);
            else {
                var l = t * (a + i),
                    h = n * (a + i) - i;
                h - l < this.width && (l = h - this.width),
                    this.scrollToEx(l, s, e, r, o)
            }
        },
        i.getCurShowItems = function(t, e, a, i) {
            var n = [],
                s = this.getScrolled(t);
            if (t);
            else
                for (var r = 0; i > r; ++r) {
                    var o = r * (e + a),
                        l = o + e;
                    o - s >= 0 && o - s < this.width ? n.push(r) : l - s > 0 && l - s <= this.width && n.push(r)
                }
            return n
        },
        i.getOldScrolled = function() {
            return {
                x: this.$Scroller[10].scrollH,
                y: this.$Scroller[10].scrollV
            }
        },
        e
}(eui.Scroller);
