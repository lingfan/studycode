
var badgeFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/JunTuan_BadgeList_Skin.exml"
            /*tpa=resource/eui_skins/item/JunTuan_BadgeList_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
                this.data && (SUI.addClickEffect(this.imgBadge1), SUI.addClickEffect(this.imgBadge2), SUI.addClickEffect(this.imgBadge3), SUI.addClickEffect(this.imgBadge4), SUI.addClickEffect(this.imgBadge5), SUI.setTextureAsync(this.imgBadge1, Path.guildUrl + "badge_" + this.data.item[0] + ".png"), SUI.setTextureAsync(this.imgBadge2, Path.guildUrl + "badge_" + this.data.item[1] + ".png"), SUI.setTextureAsync(this.imgBadge3, Path.guildUrl + "badge_" + this.data.item[2] + ".png"), SUI.setTextureAsync(this.imgBadge4, Path.guildUrl + "badge_" + this.data.item[3] + ".png"), SUI.setTextureAsync(this.imgBadge5, Path.guildUrl + "badge_" + this.data.item[4] + ".png"), this.imgBadge1.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.imgBadge1.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        GuildManager.getInstance().isChangeGuildBadge ? GameAlert.getInstance().show("更换徽章", "修改军团徽章消耗100钻石,您是否要修改军团徽章?",
                            function() {
                                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.CHANGE_GUILD_BADGE_COMPLETE, e.data.item[0]))
                            }) : GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SELECT_GUILD_BADGE_COMPLETE, e.data.item[0]))
                    },
                    this), this.imgBadge2.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.imgBadge2.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        GuildManager.getInstance().isChangeGuildBadge ? GameAlert.getInstance().show("更换徽章", "修改军团徽章消耗100钻石,您是否要修改军团徽章?",
                            function() {
                                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.CHANGE_GUILD_BADGE_COMPLETE, e.data.item[1]))
                            }) : GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SELECT_GUILD_BADGE_COMPLETE, e.data.item[1]))
                    },
                    this), this.imgBadge3.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.imgBadge3.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        GuildManager.getInstance().isChangeGuildBadge ? GameAlert.getInstance().show("更换徽章", "修改军团徽章消耗100钻石,您是否要修改军团徽章?",
                            function() {
                                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.CHANGE_GUILD_BADGE_COMPLETE, e.data.item[2]))
                            }) : GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SELECT_GUILD_BADGE_COMPLETE, e.data.item[2]))
                    },
                    this), this.imgBadge4.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.imgBadge4.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        GuildManager.getInstance().isChangeGuildBadge ? GameAlert.getInstance().show("更换徽章", "修改军团徽章消耗100钻石,您是否要修改军团徽章?",
                            function() {
                                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.CHANGE_GUILD_BADGE_COMPLETE, e.data.item[3]))
                            }) : GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SELECT_GUILD_BADGE_COMPLETE, e.data.item[3]))
                    },
                    this), this.imgBadge5.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.imgBadge5.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        GuildManager.getInstance().isChangeGuildBadge ? GameAlert.getInstance().show("更换徽章", "修改军团徽章消耗100钻石,您是否要修改军团徽章?",
                            function() {
                                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.CHANGE_GUILD_BADGE_COMPLETE, e.data.item[4]))
                            }) : GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SELECT_GUILD_BADGE_COMPLETE, e.data.item[4]))
                    },
                    this))
        },
        e
}(eui.ItemRenderer);
