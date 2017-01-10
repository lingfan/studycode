
var GuildDonateAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/JunTuan_DonateSkin.exml"
            /*tpa=resource/eui_skins/JunTuan_DonateSkin.exml*/
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
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnDonate1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnDonate2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnDonate3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.clean = function() {
            this.data = null,
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnDonate1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnDonate2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnDonate3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    this.hide();
                    break;
                case this.btnDonate1:
                    UserData.getInstance().getRes(TypeDefine.RES.Gold) >= 5e4 ? (GuildManager.getInstance().isDonateIng = !0, GuildManager.getInstance().sendGuildDonate(1)) : (Toast.launch("金币不足"), UserData.getInstance()._level >= 9 && (this.hide(), WindowManager.getInstance().hideAll(), WindowManager.getInstance().show(WindowManager.windowType.BuJi), UserData.getInstance().sendDetailMessage(), MainUI.instance.setBottomVisible(!0)));
                    break;
                case this.btnDonate2:
                    UserData.getInstance().getRes(TypeDefine.RES.Diamond) >= 20 ? (GuildManager.getInstance().isDonateIng = !0, GuildManager.getInstance().sendGuildDonate(2)) : (Toast.launch("钻石不足"), this.hide(), WindowManager.getInstance().show(WindowManager.windowType.Recharge));
                    break;
                case this.btnDonate3:
                    UserData.getInstance().getRes(TypeDefine.RES.Diamond) >= 200 ? (GuildManager.getInstance().isDonateIng = !0, GuildManager.getInstance().sendGuildDonate(3)) : (Toast.launch("钻石不足"), this.hide(), WindowManager.getInstance().show(WindowManager.windowType.Recharge))
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("guildContribute"),
                ConfigData.preLoadDats(e, [GuildcontributeParser],
                    function() {
                        t()
                    })
        },
        i.show = function() {
            var t = this;
            this.init(),
                this.btnDonate1.icon.source = "GUI_Homepage_Icon_31_png",
                this.btnDonate2.icon.source = "GUI_Homepage_Icon_32_png",
                this.btnDonate3.icon.source = "GUI_Homepage_Icon_32_png",
                this.scrollerNotify.viewport = this.listNotify,
                this.setButtonsState(),
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        t.setNotifyData()
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        i.setNotifyData = function() {
            var t = this.getGuildNotifyPageList();
            this.listNotify.dataProvider = new eui.ArrayCollection(t),
                this.listNotify.itemRenderer = guildDonateNotifyFactoryListItem
        },
        i.getGuildNotifyPageList = function() {
            var t = [];
            if (GuildManager.getInstance().loglist)
                for (var e = 0; e < GuildManager.getInstance().loglist.length; e++) {
                    var a = GuildManager.getInstance().loglist[e];
                    0 == a.type && t.push({
                        txt: "<font>" + Utils.getDateByNum(1e3 * a.time, timeType.MDHM) + "</font><font color='#ffff00'> " + a.name + " </font><font>提供了</font><font color='#00ff00'>" + a.param[0] + "</font><font>军团建设</font>"
                    })
                }
            return t
        },
        i.setButtonsState = function() {
            GuildManager.getInstance().donatetimes >= 1 ? (this.btnDonate1.enabled = !1, this.btnDonate2.enabled = !1, this.btnDonate3.enabled = !1) : (this.btnDonate1.enabled = !0, this.btnDonate2.enabled = !0, this.btnDonate3.enabled = !0)
        },
        e
}(eui.Component);
