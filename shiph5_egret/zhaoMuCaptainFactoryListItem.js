
var WindowWarshipHandbook = function(t) {
    function e() {
        t.call(this, !1),
            this.ownedPaperIds = [],
            this.ownedCaptainIds = [],
            this.ownedMedalIds = [],
            this.paperBuffMap = {},
            this.captainBuffMap = {},
            this.medalBuffMap = {},
            this.skinName = "resource/eui_skins/Tujian.exml"
            /*tpa=resource/eui_skins/Tujian.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                this.setProgress(0, 1),
                this.btnDetails.labelDisplay.text = Locales.get("zz_handbook1"),
                this.btnCaptain.labelDisplay.text = Locales.get("panel_jianzhang_btn_2"),
                this.btnMedal.labelDisplay.text = Locales.get("panel_plunder_txt_ckb_5"),
                this.btnWarship.labelDisplay.text = Locales.get("zz_warship");
            var t = new eui.ArrayCollection;
            this.lstCenter.dataProvider = t,
                this.lstCenter.itemRenderer = MedalInfoItemRenderer,
                this.lstCenter.useVirtualLayout = !0,
                this.scvCenter.viewport = this.lstCenter,
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnDetails.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnDetails, this),
                this.btnCaptain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnCaptain, this),
                this.btnMedal.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnMedal, this),
                this.btnWarship.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnWarship, this),
                RequestManager.GetInstance().RequestHandbookInfo(),
                this.tabBtns = [],
                this.tabBtns.push(this.btnWarship),
                this.tabBtns.push(this.btnMedal),
                this.tabBtns.push(this.btnCaptain),
                this.GotoTab(WindowWarshipHandbookTabType.TAB_WARSHIP)
        },
        i.setData = function(t) {
            this.ownedPaperIds = [];
            for (var e = 0; e < t.ownedpaper.length; ++e) this.ownedPaperIds.push(t.ownedpaper[e]);
            this.ownedCaptainIds = [];
            for (var e = 0; e < t.ownedcaptainpaper.length; ++e) this.ownedCaptainIds.push(t.ownedcaptainpaper[e]);
            this.ownedMedalIds = [];
            for (var e = 0; e < t.ownedsoulpaper.length; ++e) this.ownedMedalIds.push(t.ownedsoulpaper[e]);
            this.GotoTab(this.currentTab, !0)
        },
        i.GotoTab = function(t, e) {
            if (void 0 === e && (e = !1), this.currentTab !== t || e) {
                for (var a = 0; 3 > a; ++a) {
                    var i = this.tabBtns[a];
                    t == a ? i.currentState = "down" : i.currentState = "up"
                }
                WindowWarshipHandbookTabType.TAB_WARSHIP == t ? this.ShowWarshipPanel() : WindowWarshipHandbookTabType.TAB_MEDAL == t ? this.ShowMedalPanel() : WindowWarshipHandbookTabType.TAB_CAPTAIN == t && this.ShowCaptainPanel(),
                    this.currentTab = t
            }
        },
        i.setProgress = function(t, e) {
            this.imgProgress.width = this.imgProgressBg.width * t / e,
                this.txtProgress.text = Locales.get("panel_atlas_main_panel_txt_progress", t.toString(), e.toString())
        },
        i.ConstructWarshipData = function() {
            var t = PaperdataParser.GetInstance().getDatas();
            this.warshipConfigDatas = new Array;
            for (var e in t) {
                var a = t[e],
                    i = new ItemData(a, !1);
                this.warshipConfigDatas.push(i)
            }
            this.warshipConfigDatas.sort(function(t, e) {
                return t.userData.order - e.userData.order
            })
        },
        i.UpdateWarshipData = function() {
            if (this.paperBuffMap = new Object, this.warshipConfigDatas)
                for (var t = 0,
                        e = this.warshipConfigDatas; t < e.length; t++) {
                    var a = e[t];
                    this.ownedPaperIds.indexOf(a.userData.id) >= 0 && (a.have = !0, void 0 === this.paperBuffMap[a.userData.buffType] ? this.paperBuffMap[a.userData.buffType] = a.userData.buffValue : this.paperBuffMap[a.userData.buffType] += a.userData.buffValue)
                }
        },
        i.UpdateWarshipPanel = function() {
            for (var t = [], e = this.warshipConfigDatas.length, a = this.warshipConfigDatas.length / 3, i = 0; a > i; ++i) {
                var n = [],
                    s = 3 * i;
                e > s && n.push(this.warshipConfigDatas[s]),
                    e > s + 1 && n.push(this.warshipConfigDatas[s + 1]),
                    e > s + 2 && n.push(this.warshipConfigDatas[s + 2]),
                    t.push(n)
            }
            for (var r = 0,
                    o = 0,
                    l = this.warshipConfigDatas; o < l.length; o++) {
                var h = l[o];
                h.have && r++
            }
            this.setProgress(r, this.warshipConfigDatas.length);
            var c = new eui.ArrayCollection(t);
            this.lstCenter.dataProvider = c,
                this.lstCenter.itemRenderer = WarshipInfoItemRender,
                this.lstCenter.useVirtualLayout = !0,
                this.scvCenter.viewport = this.lstCenter
        },
        i.ShowWarshipPanel = function() {
            var t = this;
            this.btnDetails.labelDisplay.text = Locales.get("zz_handbook1"),
                this.warshipConfigDatas ? (this.UpdateWarshipData(), this.UpdateWarshipPanel()) : ConfigData.preLoadDats(["paperData", "shipModelData", "shipData"], [PaperdataParser, ShipmodeldataParser, ShipdataParser],
                    function() {
                        t.ConstructWarshipData(),
                            t.UpdateWarshipData(),
                            t.UpdateWarshipPanel()
                    })
        },
        i.ConstructMedalData = function() {
            var t = MedaldataParser.GetInstance().getDatas();
            this.medalConfigDatas = new Array;
            for (var e in t) {
                var a = t[e];
                if (a.collectbuff) {
                    var i = new ItemData(a, !1);
                    this.medalConfigDatas.push(i)
                }
            }
            this.medalConfigDatas.sort(function(t, e) {
                return t.userData.collectid - e.userData.collectid
            })
        },
        i.UpdateMedalData = function() {
            if (this.medalBuffMap = new Object, this.medalConfigDatas)
                for (var t = 0,
                        e = this.medalConfigDatas; t < e.length; t++) {
                    var a = e[t];
                    this.ownedMedalIds.indexOf(a.userData.id) >= 0 && (a.have = !0, void 0 === this.medalBuffMap[a.userData.collectbuff] ? this.medalBuffMap[a.userData.collectbuff] = a.userData.collectbuffvalue : this.medalBuffMap[a.userData.collectbuff] += a.userData.collectbuffvalue)
                }
        },
        i.UpdateMedalPanel = function() {
            for (var t = [], e = this.medalConfigDatas.length, a = this.medalConfigDatas.length / 3, i = 0; a > i; ++i) {
                var n = [],
                    s = 3 * i;
                e > s && n.push(this.medalConfigDatas[s]),
                    e > s + 1 && n.push(this.medalConfigDatas[s + 1]),
                    e > s + 2 && n.push(this.medalConfigDatas[s + 2]),
                    t.push(n)
            }
            for (var r = 0,
                    o = 0,
                    l = this.medalConfigDatas; o < l.length; o++) {
                var h = l[o];
                h.have && r++
            }
            this.setProgress(r, this.medalConfigDatas.length);
            var c = new eui.ArrayCollection(t);
            this.lstCenter.dataProvider = c,
                this.lstCenter.itemRenderer = MedalInfoItemRenderer,
                this.lstCenter.useVirtualLayout = !0,
                this.scvCenter.viewport = this.lstCenter
        },
        i.ShowMedalPanel = function() {
            var t = this;
            this.btnDetails.labelDisplay.text = Locales.get("zz_handbook2"),
                void 0 == this.medalConfigDatas ? ConfigData.preLoadDats(["medalData"], [MedaldataParser],
                    function(e) {
                        t.ConstructMedalData(),
                            t.UpdateMedalData(),
                            t.UpdateMedalPanel()
                    }) : (this.UpdateMedalData(), this.UpdateMedalPanel())
        },
        i.ConstructCaptainData = function() {
            var t = CaptaindataParser.GetInstance().getDatas();
            CaptaincollectionParser.GetInstance().getDatas();
            this.captainConfigDatas = new Array;
            for (var e in t) {
                var a = t[e],
                    i = CaptaincollectionParser.GetInstance().getItemById(a.id),
                    n = {
                        captainData: a,
                        detailData: i
                    },
                    s = new ItemData(n, !1);
                this.captainConfigDatas.push(s)
            }
            this.captainConfigDatas.sort(function(t, e) {
                return t.userData.detailData.order - e.userData.detailData.order
            })
        },
        i.UpdateCaptainData = function() {
            if (this.captainBuffMap = new Object, this.captainConfigDatas)
                for (var t = 0,
                        e = this.captainConfigDatas; t < e.length; t++) {
                    var a = e[t];
                    this.ownedCaptainIds.indexOf(a.userData.captainData.id) >= 0 && (a.have = !0, void 0 === this.captainBuffMap[a.userData.detailData.collectbuff] ? this.captainBuffMap[a.userData.detailData.collectbuff] = a.userData.detailData.collectbuffvalue : this.captainBuffMap[a.userData.detailData.collectbuff] += a.userData.detailData.collectbuffvalue)
                }
        },
        i.UpdateCaptainPanel = function() {
            for (var t = [], e = this.captainConfigDatas.length, a = this.captainConfigDatas.length / 3, i = 0; a > i; ++i) {
                var n = [],
                    s = 3 * i;
                e > s && n.push(this.captainConfigDatas[s]),
                    e > s + 1 && n.push(this.captainConfigDatas[s + 1]),
                    e > s + 2 && n.push(this.captainConfigDatas[s + 2]),
                    t.push(n)
            }
            for (var r = 0,
                    o = 0,
                    l = this.captainConfigDatas; o < l.length; o++) {
                var h = l[o];
                h.have && r++
            }
            this.setProgress(r, this.captainConfigDatas.length);
            var c = new eui.ArrayCollection(t);
            this.lstCenter.dataProvider = c,
                this.lstCenter.itemRenderer = CaptainInfoItemRenderer,
                this.lstCenter.useVirtualLayout = !0,
                this.scvCenter.viewport = this.lstCenter
        },
        i.ShowCaptainPanel = function() {
            var t = this;
            this.btnDetails.labelDisplay.text = Locales.get("zz_handbook3"),
                void 0 == this.captainConfigDatas ? ConfigData.preLoadDats(["captainData", "captainCollection"], [CaptaindataParser, CaptaincollectionParser],
                    function() {
                        t.ConstructCaptainData(),
                            t.UpdateCaptainData(),
                            t.UpdateCaptainPanel()
                    }) : (this.UpdateCaptainData(), this.UpdateCaptainPanel())
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.OnClickBtnDetails = function(t) {
            var e = new Object;
            e.type = this.currentTab,
                this.currentTab === WindowWarshipHandbookTabType.TAB_WARSHIP ? e.data = this.paperBuffMap : this.currentTab === WindowWarshipHandbookTabType.TAB_MEDAL ? e.data = this.medalBuffMap : this.currentTab === WindowWarshipHandbookTabType.TAB_CAPTAIN && (e.data = this.captainBuffMap),
                WindowManager.getInstance().show(WindowManager.windowType.HandbookProperty, e)
        },
        i.OnClickBtnCaptain = function(t) {
            this.GotoTab(WindowWarshipHandbookTabType.TAB_CAPTAIN)
        },
        i.OnClickBtnMedal = function(t) {
            this.GotoTab(WindowWarshipHandbookTabType.TAB_MEDAL)
        },
        i.OnClickBtnWarship = function(t) {
            this.GotoTab(WindowWarshipHandbookTabType.TAB_WARSHIP)
        },
        i.clear = function() {
            this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnDetails.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnDetails, this),
                this.btnCaptain.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnCaptain, this),
                this.btnMedal.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnMedal, this),
                this.btnWarship.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnWarship, this)
        },
        e
}(WindowBase);
