
var WindowCampBattleRankingList = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ZB_ZhenYingZhan_PaiHangSkin.exml"
            /*tpa=resource/eui_skins/ZB_ZhenYingZhan_PaiHangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {},
        i.init = function() {
            113 == GuideManager.step && GuideManager.nextStep(),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnIntro.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnIntro, this),
                SUI.addClickEffect(this.btnIntro),
                this.btnRanking.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnRanking, this),
                SUI.addClickEffect(this.btnRanking),
                this.btnStore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnStore, this),
                SUI.addClickEffect(this.btnStore),
                this.btnAI.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnAI, this),
                this.txtTitle.text = Locales.get("panel_active_game_campBattle_title"),
                this.txtIntro.text = Locales.get("panel_luckgirl_txt_comment_2"),
                this.txtRanking.text = Locales.get("panel_arena_btn_topten"),
                this.txtStore.text = Locales.get("btn_paper"),
                this.btnAI.labelDisplay.text = Locales.get("ui_campBattle_campLite_alert_ok"),
                this.txtFightStartTime.text = Locales.get("ui_campBattle_campLite_next");
            var t = CampBattleManager.instance.serverStartTime;
            this.txtDesc.text = Locales.get("campBattleStartTime", t[0]),
                SUI.addClickEffect(this.btnAI),
                this.btnAI.visible = !1,
                this.btnAI.labelDisplay.text = Locales.get("ui_campBattle_campLite_setAI"),
                this.txtFightStartTime.visible = !1,
                this.txtTime.visible = !1,
                this.txtDesc.visible = !1;
            for (var e = CampBattleManager.instance.generalCampRankList(), a = [166, 391, 616], i = 0, n = 0, s = e; n < s.length; n++) {
                var r = s[n],
                    o = r.campid,
                    l = this["Camp" + o];
                l.touchEnabled = !1,
                    l.touchChildren = !1;
                var h = this["imgCamp" + o];
                SUI.setTextureAsync(h, Path.GetCampPicUrl(o, 0));
                var c = this["imgCampName" + o];
                c.text = Locales.get("panel_personinf_txt_camp_" + o);
                var d = this["txtCampResDesc" + o];
                d.text = Locales.get("ui_campBattle_resTitle");
                var g = this["txtCampPortDesc" + o];
                g.text = Locales.get("ui_campBattle_portTitle");
                var u = this["txtCampRes" + o];
                u.text = r.resource.toString();
                var p = this["txtCampPort" + o],
                    m = r.portlist.length;
                m > 0 && m--,
                    p.text = m.toString(),
                    l.y = a[i],
                    ++i
            }
            this.inited = !0
        },
        i.updateTime = function(t, e) {
            this.btnAI && (0 == e ? (this.btnAI.visible = !1, this.txtDesc.visible = !0, this.txtTime.visible = !1, this.txtFightStartTime.visible = !1) : -1 == e ? (this.Prepare.visible = !1, this.txtDesc.visible = !1) : (this.btnAI.visible = !0, this.txtTime.text = t, this.txtTime.visible = !0, this.txtFightStartTime.visible = !0, this.txtDesc.visible = !1), 1 == CampBattleManager.isAutoBattle ? (this.btnAI.labelDisplay.text = Locales.get("ui_campBattle_campLite_cancelAI"), this.btnAI.currentState = "on") : (this.btnAI.labelDisplay.text = Locales.get("ui_campBattle_campLite_setAI"), this.btnAI.currentState = "off"))
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.OnClickBtnIntro = function(t) {
            var e = Locales.get("ui_campBattle_desc_title"),
                a = Locales.get("ui_campBattle_desc_content1");
            QiJvTouAlert.getInstance().showTxtDescPage(e, a)
        },
        i.OnClickBtnRanking = function(t) {
            RankListManager.getInstance().showRankWin(7)
        },
        i.OnClickBtnStore = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.CampExchange),
                this.close(),
                WindowManager.getInstance().hide(WindowManager.windowType.CampBattle)
        },
        i.OnClickBtnAI = function(t) {
            return UserData.getInstance().getVipLevel() < 4 ? void Toast.launch(Locales.get("ui_campBattle_campLite_setAI_fail1")) : void(CampBattleManager.isAutoBattle ? RequestManager.GetInstance().setAI(!1) : GameAlert.getInstance().show(Locales.get("ui_campBattle_campLite_alert_ok"), Locales.get("ui_campBattle_campLite_alert_content2"),
                function() {
                    RequestManager.GetInstance().setAI(!0),
                        GameAlert.getInstance().hide()
                }))
        },
        i.clear = function() {},
        e
}(WindowBase);
