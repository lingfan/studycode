
var GuildVerifyAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/JunTuan_VerifySkin.exml"
            /*tpa=resource/eui_skins/JunTuan_VerifySkin.exml*/
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
            this.scroller.viewport = this.list,
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnSet.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnRefuseAll.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.clean = function() {
            this.data = null,
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnSet.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnRefuseAll.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    this.hide();
                    break;
                case this.btnSet:
                    GuildAlert.getInstance().showGuildApprovalSet();
                    break;
                case this.btnRefuseAll:
                    GuildManager.getInstance().sendGuildApproval("", 2)
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("defenceStageRewardData"),
                ConfigData.preLoadDats(e, [DefencestagerewarddataParser],
                    function() {
                        t()
                    })
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        i.show = function() {
            this.init(),
                0 == GuildManager.getInstance().pos ? this.btnSet.enabled = !0 : this.btnSet.enabled = !1,
                GameLayer.getInstance().windowLayer.addChild(this),
                GuildManager.getInstance().sendGuildApplyList()
        },
        i.setListData = function() {
            var t = this.getList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = verifyFactoryListItem
        },
        i.getList = function() {
            for (var t = [], e = GuildManager.getInstance().applylist, a = 0; a < e.length; a++) {
                var i = {};
                i.uid = e[a].uid,
                    i.name = e[a].name,
                    i.face = e[a].face,
                    i.power = e[a].power,
                    i.level = e[a].level,
                    i.levelTxt = "Lv " + e[a].level,
                    i.militaryrank = e[a].militaryrank,
                    t.push(i)
            }
            return t
        },
        e
}(eui.Component);
