
var RankTitleRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/item/PaiHangBang_title_Skin.exml"
            /*tpa=resource/eui_skins/item/PaiHangBang_title_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {
            this.btnTab.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this)
        },
        i.dataChanged = function() {
            this.btnTab.label = this.data.name,
                this.btnTab.selected = this.data.state
        },
        i.clickHandler = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.RankList);
            if (this.data.camp) e && (e.curCampType = this.data.camp, e.updatePaper());
            else {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.RankList);
                e && (e.setPos(), e.setData(this.data), e.initTitle(this.data.index))
            }
        },
        e
}(eui.ItemRenderer);
