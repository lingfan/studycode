
var GuildCreateAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.guildBadge = 1,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/JunTuan_CreateSkin.exml"
            /*tpa=resource/eui_skins/JunTuan_CreateSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getInstance = function() {
            return this._instance || (this._instance = new e),
                this._instance
        },
        i.OnComplete = function() {
            this.__inited = !0,
                this._block || (this._block = new egret.Shape, this._block.graphics.beginFill(0, .5), this._block.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight), this._block.graphics.endFill(), this._block.touchEnabled = !0);
            var t = GameLayer.getInstance().windowLayer.getChildIndex(this);
            egret.log("depth:", t),
                GameLayer.getInstance().windowLayer.addChildAt(this._block, t)
        },
        i.init = function() {
            this.guildBadge = 1,
                this.badgeScroller.viewport = this.badgeList,
                SUI.setTextureAsync(this.imgBadge, Path.guildUrl + "badge_" + this.guildBadge + ".png"),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnChangeBadge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.editGuildName.addEventListener(egret.Event.CHANGE, this.editLabelHandler, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.SELECT_GUILD_BADGE_COMPLETE, this.onSelectBadgeComplete, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.CHANGE_GUILD_BADGE_COMPLETE, this.onChangeBadgeComplete, this)
        },
        i.clean = function() {
            this.data = null,
                this.editGuildName.text = "",
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnChangeBadge.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnConfirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.editGuildName.removeEventListener(egret.Event.CHANGE, this.editLabelHandler, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.SELECT_GUILD_BADGE_COMPLETE, this.onSelectBadgeComplete, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.CHANGE_GUILD_BADGE_COMPLETE, this.onChangeBadgeComplete, this)
        },
        i.editLabelHandler = function(t) {
            var e = Utils.filterStr(this.editGuildName.text),
                a = e[0];
            a.length > 10 ? (Toast.launch("最多只能输入10个字符"), this.editGuildName.text = a.substring(0, 10)) : this.editGuildName.text = a
        },
        i.onSelectBadgeComplete = function(t) {
            this.BASE.visible = !0,
                this.btnClose.visible = !0,
                this.badgeScroller.visible = !1,
                this.btnBack.visible = !1,
                this.txtTitle.text = "创建军团",
                this.guildBadge = t.parames,
                SUI.setTextureAsync(this.imgBadge, Path.guildUrl + "badge_" + this.guildBadge + ".png")
        },
        i.onChangeBadgeComplete = function(t) {
            GameAlert.getInstance().hide(),
                this.hide(),
                GuildManager.getInstance().sendGuildSetMedal(t.parames),
                GuildManager.getInstance().isChangeGuildBadge = !1
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    GuildManager.getInstance().isChangeGuildBadge = !1,
                        this.hide();
                    break;
                case this.btnChangeBadge:
                    this.btnClose.visible = !1,
                        this.BASE.visible = !1,
                        this.badgeScroller.visible = !0,
                        this.btnBack.visible = !0,
                        this.txtTitle.text = "选择军团徽章",
                        this.setSelectBadgeData();
                    break;
                case this.btnConfirm:
                    null == this.editGuildName.text || "" == this.editGuildName.text ? Toast.launch("输入内容不符合要求，请重新输入") : UserData.getInstance().getRes(TypeDefine.RES.Diamond) < 100 ? (Toast.launch("钻石不足"), this.hide(), WindowManager.getInstance().show(WindowManager.windowType.Recharge)) : (GuildManager.getInstance().sendCreateGuild(this.editGuildName.text, this.guildBadge), this.hide());
                    break;
                case this.btnBack:
                    this.BASE.visible = !0,
                        this.btnClose.visible = !0,
                        this.badgeScroller.visible = !1,
                        this.btnBack.visible = !1,
                        this.txtTitle.text = "创建军团"
            }
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("defenceStageRewardData"),
                e.push("giftData"),
                e.push("virtualData"),
                ConfigData.preLoadDats(e, [DefencestagerewarddataParser, GiftdataParser, VirtualdataParser],
                    function() {
                        t()
                    })
        },
        i.showCreateGuildPage = function() {
            this.BASE.visible = !0,
                this.badgeScroller.visible = !1,
                this.btnBack.visible = !1,
                this.init(),
                this.txtTitle.text = "创建军团",
                UserData.getInstance().getPlayerLevel() >= 18 ? (this.txtForbiddenDesc.visible = !1, this.CostDesc.visible = !0, this.btnConfirm.enabled = !0) : (this.txtForbiddenDesc.visible = !0, this.CostDesc.visible = !1, this.btnConfirm.enabled = !1),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showSelectBadgePage = function() {
            GuildManager.getInstance().isChangeGuildBadge = !0,
                this.BASE.visible = !1,
                this.badgeScroller.visible = !0,
                this.btnBack.visible = !0,
                this.init(),
                this.setSelectBadgeData(),
                this.txtTitle.text = "选择军团徽章",
                this.btnClose.visible = !0,
                this.btnBack.visible = !1,
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.setSelectBadgeData = function() {
            var t = this.getBadgePageList();
            this.badgeList.dataProvider = new eui.ArrayCollection(t),
                this.badgeList.itemRenderer = badgeFactoryListItem
        },
        i.getBadgePageList = function() {
            for (var t = [], e = 1; 5 > e; e++) {
                for (var a = [], i = 1; 20 >= i; i++) 5 * e >= i && i > 5 * (e - 1) && a.push(i);
                var n = {
                    item: a
                };
                t.push(n)
            }
            return t
        },
        e
}(eui.Component);
