
var IconItem = function(t) {
    function e(e, a, i, n) {
        void 0 === i && (i = 16777215),
            void 0 === n && (n = null),
            t.call(this),
            this.iconUrl = e,
            this.msg = a,
            this.quality = n,
            this.col = i,
            this.init()
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.visibleBool = !0,
                this.iconLabel = new eui.Label(this.msg),
                this.iconLabel.fontFamily = "黑体",
                this.iconLabel.textColor = this.col,
                this.iconLabel.size = 16,
                this.iconLabel.x = -this.iconLabel.width / 2,
                this.addChild(this.iconLabel),
                this.iconLabel.visible = this.visibleBool,
                this.quality && this.createIcon(Path.itemBackURL + "itemBack_item_sml_" + this.quality + ".png"),
                this.createIcon(this.iconUrl, .95)
        },
        i.visibleIconLabel = function(t) {
            this.visibleBool = t,
                this.iconLabel && (this.iconLabel.visible = t)
        },
        i.createIcon = function(t, e) {
            var a = this;
            void 0 === e && (e = 1);
            var i = new eui.Image;
            this.addChild(i),
                Utils.getImgByUrl(t, i,
                    function() {
                        i.scaleX = i.scaleY = e,
                            i.x = -i.width / 2 * e,
                            i.y = -i.height / 2 * e,
                            a.iconLabel.y = i.height / 2 + 10
                    })
        },
        i.destroy = function() {
            this.parent && this.parent.removeChild(this)
        },
        e
}(egret.DisplayObjectContainer);
