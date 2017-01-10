
var GameLayer = function() {
    function t() {}
    var e = __define,
        a = t,
        i = a.prototype;
    return e(i, "root",
            function() {
                return this._root
            }),
        t.getInstance = function() {
            return void 0 == this._instance && (this._instance = new t),
                this._instance
        },
        i.setRoot = function() {
            this._root = Main.instance,
                this.bgLayer = new egret.DisplayObjectContainer,
                this._root.addChild(this.bgLayer),
                this.pageLayer = new egret.DisplayObjectContainer,
                this._root.addChild(this.pageLayer),
                this.uiLayer = new egret.DisplayObjectContainer,
                this._root.addChild(this.uiLayer),
                this.windowLayer = new egret.DisplayObjectContainer,
                this._root.addChild(this.windowLayer),
                this.effectLayer = new egret.DisplayObjectContainer,
                this._root.addChild(this.effectLayer),
                this.topLayer = new egret.DisplayObjectContainer,
                this._root.addChild(this.topLayer)
        },
        i.hideAll = function() {
            this.bgLayer.visible = this.pageLayer.visible = this.uiLayer.visible = this.windowLayer.visible = this.effectLayer.visible = this.topLayer.visible = !1
        },
        i.showAll = function() {
            this.bgLayer.visible = this.pageLayer.visible = this.uiLayer.visible = this.windowLayer.visible = this.effectLayer.visible = this.topLayer.visible = !0
        },
        t
}();
