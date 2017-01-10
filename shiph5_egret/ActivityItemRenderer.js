
var SideItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/SideItemSkin.exml"
            /*tpa=resource/eui_skins/item/SideItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.anchorOffsetX = this.width / 2,
                this.anchorOffsetY = this.height / 2
        },
        i.setSideInfo = function(t, e, a) {
            this.sideRec.visible = t,
                this.sideIcon.source = e,
                this.sideName.text = a
        },
        i.setSideImage = function(t) {
            this.sideIcon.source = t
        },
        i.setBigSideImage = function(t) {
            this.bigSideIcon.source = t
        },
        i.setSideRec = function(t) {
            this.sideRec.visible = t
        },
        e
}(eui.Component);
