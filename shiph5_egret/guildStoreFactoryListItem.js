
var guildAcitvityFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/JunTuan_1_Skin.exml"
            /*tpa=resource/eui_skins/item/JunTuan_1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
                this.data && (this.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (this.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        if (1 == e.data.id) GuildDonateAlert.getInstance().show();
                        else if (2 == e.data.id) GuildVerifyAlert.getInstance().show();
                        else if (3 == e.data.id) {
                            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.Guild);
                            t.setActivityData(!1),
                                ChatManager.getInstance().showChatWin(2)
                        } else 4 == e.data.id ? RankListManager.getInstance().showRankWin(16) : 5 == e.data.id ? GuildAlert.getInstance().showChangeLabel("修改公告", "", e.data, 1, 58) : 6 == e.data.id && GuildAlert.getInstance().showChangeLabel("修改宣言", "", e.data, 2, 40)
                    },
                    this), this.imgIcon.source = "icon_jt_" + this.data.img + "_png", this.txtName.text = this.data.name, this.spotGuild.visible = this.data.isRed))
        },
        e
}(eui.ItemRenderer);
