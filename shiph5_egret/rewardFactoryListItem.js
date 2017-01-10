
var QiJvTouAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/ZB_QiJuTou_TanKuangSkin.exml"
            /*tpa=resource/eui_skins/ZB_QiJuTou_TanKuangSkin.exml*/
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
            this.rankScroller.viewport = this.rankList,
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.clean = function() {
            this.data = null,
                this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.closeBtn:
                    this.hide()
            }
        },
        i.showTxtDescPage = function(t, e) {
            void 0 === t && (t = "挑战七巨头"),
                this.init(),
                this.txtTitle.text = t;
            var a = this.getDescPageList(e);
            this.rankList.dataProvider = new eui.ArrayCollection(a),
                this.rankList.itemRenderer = descFactoryListItem,
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showRewardPage = function() {
            var t = this;
            this.init(),
                this.txtTitle.text = "奖励预览",
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting();
                    var e = t.getRewardPageList();
                    t.rankList.dataProvider = new eui.ArrayCollection(e),
                        t.rankList.itemRenderer = rewardFactoryListItem
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.getDescPageList = function(t) {
            var e = [],
                a = {};
            return a.desc = t,
                e.push(a),
                e
        },
        i.getRewardPageList = function() {
            for (var t = [], e = BigsevenrewardParser.GetInstance().getDataArr(), a = 0; a < e.length; a++) {
                var i = {};
                i.id = e[a].id,
                    i.rankup = e[a].rankup,
                    i.rankdown = e[a].rankdown,
                    i.giftid = e[a].giftid,
                    i.reward = [];
                for (var n = GiftdataParser.GetInstance().getDataArr(), s = 0; s < n.length; s++) i.giftid == n[s].id && i.reward.push({
                    type: n[s].type,
                    count: n[s].count
                });
                t.push(i)
            }
            return t
        },
        i.getRankPageList = function(t) {
            var e = [];
            if (null != t && t.length > 0)
                for (var a = 0; a < t.length; a++) {
                    var i = {};
                    i.uid = t[a].uid,
                        i.name = t[a].name,
                        i.rank = t[a].rank,
                        i.level = t[a].level,
                        i.score = t[a].score,
                        i.head = t[a].head,
                        i.power = t[a].power,
                        i.viplevel = t[a].viplevel,
                        i.camp = t[a].camp,
                        i.guildname = t[a].guildname,
                        i.militaryrank = t[a].militaryrank,
                        i.dmg = t[a].dmg,
                        e.push(i)
                }
            return e
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("bigSevenReward"),
                e.push("giftData"),
                ConfigData.preLoadDats(e, [BigsevenrewardParser, GiftdataParser],
                    function() {
                        t()
                    })
        },
        i.showPVPReward = function() {
            var t = this;
            this.init(),
                this.txtTitle.text = "奖励预览",
                WindowManager.getInstance().showWaiting(),
                ConfigData.preLoadDats(["arenaScoreData"], [ArenascoredataParser],
                    function() {
                        WindowManager.getInstance().hideWaiting();
                        for (var e = [], a = ArenascoredataParser.GetInstance().getDataArr(), i = 0, n = a.length; n - 1 > i; ++i) {
                            var s = a[i],
                                r = a[i + 1],
                                o = {};
                            o.rankup = s.rank,
                                o.rankdown = r.rank - 1,
                                i == n - 2 && (o.lastRank = !0),
                                o.score = s.score,
                                o.honor = s.honor,
                                e.push(o)
                        }
                        t.rankList.dataProvider = new eui.ArrayCollection(e),
                            t.rankList.itemRenderer = PVPRewardItemRenderer
                    }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        e
}(eui.Component);
