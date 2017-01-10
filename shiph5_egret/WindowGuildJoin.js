
var guildTechnologyFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/JunTuan_3_TechBar_Skin.exml"
            /*tpa=resource/eui_skins/item/JunTuan_3_TechBar_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
                this.data && (this.upgradeBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.upgradeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        GuildManager.getInstance().sendUpgradeGuildScience(e.data.id - 1)
                    },
                    this), GuildManager.getInstance().pos > 1 || GuildManager.getInstance().pos < 0 ? this.upgradeBtn.enabled = !1 : this.data.isMaxLevel ? this.upgradeBtn.enabled = !1 : this.upgradeBtn.enabled = !0, SUI.setTextureAsync(this.icon, Path.guildTechUrl + this.data.icon), this.txtBuff.textFlow = (new egret.HtmlTextParser).parser("<font>" + this.data.desc1 + " " + this.data.desc2 + "</font><font color='#ffff00'>+" + this.data.effect + "</font>"), this.txtLv.text = this.data.level + "/" + this.data.maxLevel)
        },
        e
}(eui.ItemRenderer);
