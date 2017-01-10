
var RoleItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/RoleItemSkin.exml"
            /*tpa=resource/eui_skins/item/RoleItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.anchorOffsetX = this.width / 2,
                this.anchorOffsetY = this.height / 2
        },
        i.setRoleInfo = function(t) {
            this.roleIcon.source = t
        },
        e
}(eui.Component);
