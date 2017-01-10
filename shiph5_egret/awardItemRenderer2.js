
var WindowAward = function(t) {
    function e() {
        t.call(this, !0),
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/LingJiangZhongXinSkin.exml"
            /*tpa=resource/eui_skins/LingJiangZhongXinSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.msgData = null,
                this.msgData = null,
                this.txtRewardNum.text = "当前奖励数：",
                WindowManager.getInstance().showWaiting(),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closebtn, this),
                this.btnGetReward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnGetRewardClick, this),
                this.rewardScroller.viewport = this.list,
                this.itemScroller.viewport = this.list0,
                this.itemScroller.visible = !1,
                this.list0.visible = !1,
                this.initConfig();
            var t = Transport.getPkg(ProtocolMgr.ID_DceAwardCenter);
            Transport.instance.send(t)
        },
        i.initConfig = function() {
            var t = this;
            this.awardDataArr || ConfigData.preLoadDats(["awardCenterData"], [AwardcenterdataParser],
                function() {
                    t.awardDataArr = AwardcenterdataParser.GetInstance().getDataArr(),
                        t.initComplete()
                })
        },
        i.processMsg = function(t) {
            this.msgData = t,
                this.initComplete()
        },
        i.initComplete = function() {
            if (this.awardDataArr && this.msgData) {
                WindowManager.getInstance().hideWaiting(),
                    this.txtRewardNum.text = "当前奖励数：" + this.msgData.awardlist.length,
                    this.dataList = [];
                for (var t = 0; t < this.msgData.awardlist.length; t++) {
                    var e = new AwardData;
                    e.id = this.msgData.awardlist[t].id,
                        e.awardid = this.msgData.awardlist[t].awardid,
                        e.time = this.msgData.awardlist[t].time,
                        e.param = this.msgData.awardlist[t].param,
                        0 == e.awardid ? (e.title = this.msgData.awardlist[t].param[0], e.dec = this.msgData.awardlist[t].param[1]) : 20 == e.awardid || 22 == e.awardid || 23 == e.awardid || 32 == e.awardid || 37 == e.awardid || 39 == e.awardid || 42 == e.awardid || 43 == e.awardid || 47 == e.awardid || 64 == e.awardid || 66 == e.awardid || 86 == e.awardid || 87 == e.awardid || 88 == e.awardid || 89 == e.awardid ? (e.title = this.awardDataArr[e.awardid - 1].name_l, e.dec = this.awardDataArr[e.awardid - 1].desc_l[0] + this.msgData.awardlist[t].param[0] + this.awardDataArr[e.awardid - 1].desc_l[1]) : (e.title = this.awardDataArr[e.awardid - 1].name_l, e.dec = this.awardDataArr[e.awardid - 1].desc_l[0]);
                    for (var a = 0; a < this.msgData.awardlist[t].droplist.droplist.length; a++) {
                        var i = this.msgData.awardlist[t].droplist.droplist[a];
                        e.droplist.push(i)
                    }
                    e.index = t,
                        this.dataList.push(e)
                }
                this.list.visible && (this.list.dataProvider = new eui.ArrayCollection(this.dataList), this.list.itemRenderer = awardItemRenderer)
            }
        },
        i.btnGetRewardClick = function(t) {
            if (this.rewardScroller.visible) {
                var e = Transport.getPkg(ProtocolMgr.ID_DceGetAward);
                e.all = !0,
                    Transport.instance.send(e)
            } else this.rewardScroller.visible = !0,
                this.list.visible = !0,
                this.itemScroller.visible = !1,
                this.list0.visible = !1,
                this.btnGetReward.label = "全部领取",
                this.list.dataProvider = new eui.ArrayCollection(this.dataList),
                this.list.itemRenderer = awardItemRenderer
        },
        i.showAllAward = function(t) {
            if (void 0 === t && (t = -1), !(0 > t)) {
                this.btnGetReward.label = "返回",
                    this.rewardScroller.visible = !1,
                    this.list.visible = !1,
                    this.itemScroller.visible = !0,
                    this.list0.visible = !0;
                for (var e = [], a = Math.floor(this.dataList[t].droplist.length / 4), i = this.dataList[t].droplist, n = 0; a > n; n++) {
                    for (var s = [], r = 0; 4 > r; r++) s.push(i.shift());
                    e.push(s)
                }
                i.length > 0 && e.push(i),
                    this.list0.dataProvider = new eui.ArrayCollection(e),
                    this.list0.itemRenderer = awardItemRenderer2
            }
        },
        i.closebtn = function(t) {
            WindowManager.getInstance().hide(WindowManager.windowType.Award)
        },
        e
}(WindowBase);
