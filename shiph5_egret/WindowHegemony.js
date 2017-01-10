
var juntuanJoinFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/JunTuan_Join_Bar_1_Skin.exml"
            /*tpa=resource/eui_skins/item/JunTuan_Join_Bar_1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            if (t.prototype.dataChanged.call(this), this.data) {
                var a = 0;
                if (GuildManager.getInstance().applyGuildlist)
                    for (var i = 0; i < GuildManager.getInstance().applyGuildlist.length; i++)
                        if (this.data.id == GuildManager.getInstance().applyGuildlist[i].id) {
                            a = 1;
                            break
                        }
                0 == a ? this.btnJoin.label = "申请" : 1 == a && (this.btnJoin.label = "取消申请"),
                    this.btnJoin.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.btnJoin.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            0 == a ? (console.log("加入军团"), GuildManager.getInstance().lastTime > 0 ? Toast.launch("暂时不能申请加入军团") : GuildManager.getInstance().sendGuildApply(e.data.id)) : 1 == a && (console.log("取消加入军团"), GuildManager.getInstance().sendGuildCancelApply(e.data.id))
                        },
                        this),
                    this.data.camp == UserData.getInstance().getCamp() ? this.btnJoin.visible = !0 : this.btnJoin.visible = !1,
                    this.txtGuildLevel.text = this.data.level + "",
                    this.txtGuildName.text = this.data.name,
                    this.txtDeclaration.text = this.data.annoucement,
                    this.txtGuildMember.text = this.data.membercount + "/" + GuildParser.GetInstance().getItemById(this.data.level).count,
                    SUI.setTextureAsync(this.imgGuildBadge, Path.guildUrl + "badge_B_" + this.data.medal + ".png"),
                    this.data.membercount >= GuildParser.GetInstance().getItemById(this.data.level).count ? this.btnJoin.enabled = !1 : this.btnJoin.enabled = !0
            }
        },
        e
}(eui.ItemRenderer);
