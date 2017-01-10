
var WindowMilitary = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/Junxian.exml"
            /*tpa=resource/eui_skins/Junxian.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this.updatePanel()
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnReward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnReward, this),
                EventManager.instance.addEventListener(EventTypes.EVENT_MILITARY_RANK_UPGRADE, this.updatePanel, this),
                EventManager.instance.addEventListener(EventTypes.EVENT_MILITARY_RANK_REWARD, this.updatePanel, this),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                this.initCtrls(),
                this.initScvExScroller();
            var t = MilitaryrankParser.GetInstance().getItemByField("id", UserData.getInstance().getMilitaryranktype());
            t && (this.SelectRankItem(t.index, !0), this.selectRank(t.index)),
                UserData.getInstance().addEventListener(GameEvent.UserData_Update, this.updatePanel, this)
        },
        i.initCtrls = function() {
            var t = this;
            SUI.addClickEffect(this.btnLeft),
                SUI.addClickEffect(this.btnRight),
                this.btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        t.curRankIndex > 1 && (t.SelectRankItem(t.curRankIndex - 1), t.selectRank(t.curRankIndex - 1))
                    },
                    void 0),
                this.btnRight.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        t.curRankIndex < t.rankItemDataArr.length && (t.SelectRankItem(t.curRankIndex + 1), t.selectRank(t.curRankIndex + 1))
                    },
                    void 0),
                this.txtDesc.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        for (var t = Locales.get("zz_military"), e = [], a = 2; 7 >= a; ++a) e.push(Locales.get("panel_Military_desc_" + a)),
                            e.push("\n");
                        var i = e.join("");
                        WindowManager.getInstance().show(WindowManager.windowType.CommonIntroduction, {
                            title: t,
                            content: i
                        })
                    },
                    void 0),
                this.txtMilitaryDesc.text = Locales.get("panel_jianzhang_detail_comment_10"),
                this.txtHonorDesc.text = Locales.get("panel_Military_txt_comment_1"),
                this.txtTitle.text = Locales.get("zz_military_right"),
                this.txtDesc.text = Locales.get("panel_czfl_desc_title"),
                this.txtReach.text = Locales.get("panel_reward_txt_growup_5"),
                this.txtNotReach.text = Locales.get("zz_military_not_reach"),
                this.txtDesc2.text = Locales.get("zz_military_allright")
        },
        i.selectRank = function(t, e) {
            void 0 === e && (e = !1),
                (this.curRankIndex != t || e) && (this.curRankIndex = t, this.updatePanel(), this.btnLeft.visible = this.btnRight.visible = !0, this.curRankIndex == this.rankItemDataArr.length ? this.btnRight.visible = !1 : 1 == this.curRankIndex && (this.btnLeft.visible = !1))
        },
        i.updatePanel = function() {
            var t = MilitaryrankParser.GetInstance().getItemById(this.curRankIndex);
            t.id,
                MilitaryrankParser.GetInstance().getItemByField("id", t.nextrank);
            if (this.txtMilitary.text = t.name_l, this.txtHonor.text = UserData.getInstance().getMilitaryrankhon().toString(), SUI.setTextureAsync(this.imgIcon, Path.GetRankIconUrl(t.index)), t.privilege.length > 0) {
                var e = t.privilege[t.privilege.length - 1],
                    a = MilitaryrightsParser.GetInstance().getItemById(e);
                this.txtDesc1.textFlow = Utils.textFlowByStr(a.rightname_l)
            } else this.txtDesc1.text = "";
            if (this.txtDesc3.text = Locales.get("zz_military_day_reward", t.diamond), UserData.getInstance().getMilitaryranktype() >= t.id) {
                this.imgRes.visible = !0,
                    this.txtRewardNum.visible = !0,
                    this.txtRewardNum.text = t.diamond.toString(),
                    this.txtRewardDesc1.text = Locales.get("zz_military_day_reward2");
                for (var i = !1,
                        n = 0,
                        s = this.rankItemDataArr; n < s.length; n++) {
                    var r = s[n],
                        o = r.userData;
                    if (o.index > t.index && t.diamond != o.diamond) {
                        i = !0,
                            this.txtRewardDesc2.visible = !0;
                        var l = o.name_l,
                            h = Locales.get("panel_Military_txt_comment_22", l, o.diamond.toString());
                        this.txtRewardDesc2.textFlow = Utils.textFlowByStr(h);
                        break
                    }
                }
                i || (this.txtRewardDesc2.visible = !1),
                    this.gpReach.visible = !0,
                    this.gpNotReach.visible = !1,
                    0 == MilitaryManager.GetInstance().pkgData.hasreward ? (this.btnReward.labelDisplay.text = Locales.get("zz_getreward"), t.diamond > 0 ? (this.btnReward.enabled = !0, this.imgRewardTip.visible = !0) : (this.btnReward.enabled = !1, this.imgRewardTip.visible = !1)) : (this.btnReward.enabled = !1, this.btnReward.labelDisplay.text = Locales.get("zz_hasgetreward"), this.imgRewardTip.visible = !1),
                    this.btnReward.myUserData = "reward"
            } else this.txtRewardDesc1.text = Locales.get("zz_needHonor", t.honour),
                this.txtRewardDesc2.text = Locales.get("zz_needGold", t.gold),
                UserData.getInstance().getMilitaryrankhon() >= t.honour && UserData.getInstance().getRes(TypeDefine.RES.Gold) >= t.gold ? (this.imgRewardTip.visible = !0, this.btnReward.enabled = !0) : (this.imgRewardTip.visible = !1, this.btnReward.enabled = !1),
                this.btnReward.labelDisplay.text = Locales.get("zz_upgrade"),
                this.imgRes.visible = !1,
                this.txtRewardNum.visible = !1,
                this.gpReach.visible = !1,
                this.gpNotReach.visible = !0,
                this.btnReward.myUserData = "upgrade"
        },
        i.initScvExScroller = function() {
            this.scvExScroller = new ScrollerEx,
                this.scvExScroller.x = this.scvIcons.x,
                this.scvExScroller.y = this.scvIcons.y,
                this.scvExScroller.width = this.scvIcons.width,
                this.scvExScroller.height = this.scvIcons.height,
                this.scvExScroller.viewport = this.lstIcons,
                this.scvIcons.parent.addChild(this.scvExScroller),
                this.scvIcons.parent.removeChild(this.scvIcons);
            var t = MilitaryrankParser.GetInstance().length;
            this.rankItemDataArr = [];
            for (var e, a = 1; t >= a; ++a) {
                var i = -1;
                e && (i = e.id),
                    e = MilitaryrankParser.GetInstance().getItemById(a);
                var n = {};
                n.lastRankId = i,
                    n.userData = e,
                    n.selected = !1,
                    this.rankItemDataArr.push(n)
            }
            var s = new eui.ArrayCollection(this.rankItemDataArr);
            this.lstIcons.dataProvider = s,
                this.lstIcons.itemRenderer = MilitaryItemRenderer,
                this.lstIcons.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.OnClickRankItem, this)
        },
        i.OnClickRankItem = function(t) {
            var e = this.lstIcons.selectedIndex + 1;
            this.SelectRankItem(e),
                this.selectRank(e)
        },
        i.SelectRankItem = function(t, e) {
            void 0 === e && (e = !1);
            for (var a = 0; a < this.lstIcons.numElements; ++a) {
                var i = this.lstIcons.getElementAt(a);
                i && (a + 1 == t ? i.imgFrame.visible = !0 : i.imgFrame.visible = !1)
            }
            for (var n = 0,
                    s = this.rankItemDataArr; n < s.length; n++) {
                var r = s[n];
                r.userData.index == t ? r.selected = !0 : r.selected = !1
            }
            var o = t - 1,
                l = 110,
                h = this.scvExScroller.getScrolled(),
                c = o * l + 15 * o;
            if (e) {
                var d = this.lstIcons.numElements * (l + 15) - 15;
                d - c < this.scvExScroller.width && (c = d - this.scvExScroller.width),
                    this.scvExScroller.scrollToEx(c, 300)
            } else {
                var g = c - h;
                0 > g ? this.scvExScroller.scrollToEx(h + g, 300) : g + l > this.scvExScroller.width && this.scvExScroller.scrollToEx(h + (g + l - this.scvExScroller.width), 300)
            }
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.OnClickBtnReward = function(t) {
            "upgrade" == this.btnReward.myUserData ? RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceMilitaryRankUpgrad) : "reward" == this.btnReward.myUserData && RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceMilitaryRankGetDailyReward)
        },
        i.clear = function() {
            EventManager.instance.removeEventListenerByBindObject(this)
        },
        e
}(WindowBase);
