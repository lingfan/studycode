
var topUIMode;
!
function(t) {
    t[t.normal = 0] = "normal",
        t[t.simple = 1] = "simple",
        t[t.simpleLevel = 2] = "simpleLevel",
        t[t["null"] = 3] = "null"
}(topUIMode || (topUIMode = {}));
var MainUI = function(t) {
    function e() {
        t.call(this),
            e.instance = this,
            this.topModePool = [],
            this.topDataPool = [],
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.changeTopMode = function(t, e) {
            void 0 === e && (e = []),
                this.topModePool.push(t),
                t == topUIMode.normal ? (this.topUI.visible = !0, this.topUI.showNormal()) : t == topUIMode.simple ? (this.topUI.visible = !0, 0 == e.length && (e = [TypeDefine.RES.Oil, TypeDefine.RES.Gold, TypeDefine.RES.Diamond, TypeDefine.RES.XunBaoLing]), this.topUI.showSimple(e)) : t == topUIMode.simpleLevel ? (this.topUI.visible = !0, 0 == e.length && (e = [TypeDefine.RES.Oil, TypeDefine.RES.Gold, TypeDefine.RES.Diamond]), this.topUI.showSimpleLevel(e)) : this.topUI.visible = !1,
                this.topDataPool.push(e)
        },
        i.setBottomVisible = function(t) {
            this.bottomUI.visible = t
        },
        i.showLastTop = function() {
            this.topModePool.pop(),
                this.topDataPool.pop();
            var t = this.topModePool.pop(),
                e = this.topDataPool.pop();
            this.changeTopMode(t, e)
        },
        i.setSimpleTopInfo = function(t) {
            this.topUI.setSimplePanel(t)
        },
        i.setSimpleLevelTopInfo = function(t, e, a) {
            this.topUI.setSimpleLevelPanel(t, e, a)
        },
        i.init = function() {
            this.topUI = new TopUI,
                this.bottomUI = new BottomUI,
                this.addChild(this.topUI),
                this.addChild(this.bottomUI),
                this.bottomUI.y = this.stage.stageHeight - this.bottomUI.height,
                this.changeTopMode(topUIMode.normal),
                ShipManager.getInstance().updateShipArrangeSpot()
        },
        i.clear = function() {},
        e
}(egret.DisplayObjectContainer);
