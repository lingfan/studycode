
var WindowGuildJoin = function(t) {
    function e() {
        t.call(this, !1),
            this.guildListData = [],
            this.tickIndex = 0,
            this.skinName = "resource/eui_skins/JunTuan_JoinSkin.exml"
            /*tpa=resource/eui_skins/JunTuan_JoinSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            WindowManager.getInstance().showWaiting(),
                this.tickIndex = 0,
                this.preloadConfigs(function() {
                    t.initUI()
                }),
                GuildManager.getInstance().lastTime > 0 ? (this.joinTimeCountBg.visible = !0, this.txtJoinTimeCount.visible = !0, this.tickIndex = GameTick.registerHandler(function() {
                        t.updateTime()
                    },
                    1e3)) : (this.joinTimeCountBg.visible = !1, this.txtJoinTimeCount.visible = !1),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnCreateGuild.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.txtReturnList.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSearchGuild.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.editGuildID.addEventListener(egret.Event.CHANGE, this.editLabelHandler, this)
        },
        i.updateTime = function() {
            GuildManager.getInstance().lastTime <= 0 ? (GameTick.removeHandler(this.tickIndex), this.tickIndex = 0, this.joinTimeCountBg.visible = !1, this.txtJoinTimeCount.visible = !1) : (GuildManager.getInstance().lastTime -= 1, this.txtJoinTimeCount.text = "申请倒计时:" + GlobalFunction.getHMSBySecond(GuildManager.getInstance().lastTime))
        },
        i.clear = function() {
            GuildManager.getInstance().isOpenWinJoin = !1,
                0 != this.tickIndex && (GameTick.removeHandler(this.tickIndex), this.tickIndex = 0),
                this.joinTimeCountBg.visible = !1,
                this.txtJoinTimeCount.visible = !1,
                this.guildListData = [],
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnCreateGuild.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.txtReturnList.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSearchGuild.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.editGuildID.removeEventListener(egret.Event.CHANGE, this.editLabelHandler, this)
        },
        i.editLabelHandler = function(t) {
            var e = Utils.filterStr(this.editGuildID.text);
            this.editGuildID.text = e[0]
        },
        i.onTouchTapHandle = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    MainUI.instance.setBottomVisible(!0),
                        WindowManager.getInstance().hide(WindowManager.windowType.GuildJoin);
                    break;
                case this.btnCreateGuild:
                    GuildCreateAlert.getInstance().showCreateGuildPage();
                    break;
                case this.txtReturnList:
                    GuildManager.getInstance().isSearchGuild = !1,
                        GuildManager.getInstance().searchGuildID = "",
                        GuildManager.getInstance().sendGuildList(0, 1);
                    break;
                case this.btnSearchGuild:
                    if (null == this.editGuildID.text || "" == this.editGuildID.text || !Number(this.editGuildID.text)) {
                        Toast.launch("输入内容不符合要求，请重新输入");
                        break
                    }
                    GuildManager.getInstance().isSearchGuild = !0,
                        GuildManager.getInstance().searchGuildID = this.editGuildID.text,
                        GuildManager.getInstance().sendSearchGuild(this.editGuildID.text)
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("guild"),
                ConfigData.preLoadDats(e, [GuildParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            !GuideManager.juntuanGuideBool && UserData.getInstance()._level >= 18 && GuideManager.nextStep(101),
                WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                MainUI.instance.setBottomVisible(!1),
                this.txtReturnList.visible = !1,
                this.guildScroller.viewport = this.guildList,
                this.setJoinGuildPage()
        },
        i.setJoinGuildPage = function() {
            this.guildListData = this.getJoinGuildPageList(),
                this.guildList.dataProvider = new eui.ArrayCollection(this.guildListData),
                this.guildList.itemRenderer = juntuanJoinFactoryListItem
        },
        i.getJoinGuildPageList = function() {
            var t = [],
                e = GuildManager.getInstance().guildlist;
            if (e)
                for (var a = 0; a < e.length; a++) t.push(e[a]);
            return t
        },
        e
}(WindowBase);
