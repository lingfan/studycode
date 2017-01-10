
var verifyFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/JunTuan_8_VerifyBar_Skin.exml"
            /*tpa=resource/eui_skins/item/JunTuan_8_VerifyBar_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
                this.data && (this.btnAgree.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.btnAgree.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        GuildManager.getInstance().sendGuildApproval(e.data.uid, 0)
                    },
                    this), this.btnRefuse.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.btnRefuse.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        GuildManager.getInstance().sendGuildApproval(e.data.uid, 1)
                    },
                    this), SUI.setTextureAsync(this.imgHead, Path.GetHeadPicUrl(this.data.face, 1)))
        },
        e
}(eui.ItemRenderer);
