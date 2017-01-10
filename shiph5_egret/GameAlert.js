
var DefenseOilAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/ZB_ShouWeiYouTian_TanKuangSkin.exml"
            /*tpa=resource/eui_skins/ZB_ShouWeiYouTian_TanKuangSkin.exml*/
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
            this.rewardScroller.viewport = this.rewardList,
                this.btnClose1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnClose2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.benCancel1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnConfirm1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.clean = function() {
            this.data = null,
                this.btnClose1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnClose2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.benCancel1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnConfirm1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.btnClose1:
                    this.hide();
                    break;
                case this.btnClose2:
                    this.hide();
                    break;
                case this.benCancel1:
                    this.hide();
                    break;
                case this.btnConfirm1:
                    var e = WindowManager.getInstance().getWindow(WindowManager.windowType.DefenseOil);
                    e && Number(this.editLabel.text) > 0 && (e.isFirst = !0, e.sendGuardStage(Number(this.editLabel.text), !0)),
                        this.hide()
            }
        },
        i.showSaoDangPage = function(t) {
            this.viewReward.visible = !1,
                this.group2.visible = !0,
                this.init(),
                this.editLabel.text = t.toString(),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showViewRewardPage = function(t) {
            var e = this;
            this.viewReward.visible = !0,
                this.group2.visible = !1,
                this.init(),
                this.txtBattleRecord.text = "目前最高波数：" + t + "波",
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting();
                    var t = e.getRewardPageList();
                    e.rewardList.dataProvider = new eui.ArrayCollection(t),
                        e.rewardList.itemRenderer = defenceOilRewardFactoryListItem
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
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
        i.getRewardPageList = function() {
            for (var t = [], e = DefencestagerewarddataParser.GetInstance().getDataArr(), a = 0; a < e.length; a++) {
                var i = {};
                i.id = e[a].id,
                    i.gold = e[a].gold,
                    i.drop = e[a].drop,
                    i.reward = [];
                for (var n = GiftdataParser.GetInstance().getDataArr(), s = 0; s < n.length; s++) i.drop == n[s].id && i.reward.push({
                    item: n[s].item,
                    type: n[s].type,
                    count: n[s].count
                });
                null != i.reward && i.reward.length > 0 && t.push(i)
            }
            return t
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        e
}(eui.Component);
