
var WindowTansuo = function(t) {
    function e() {
        t.call(this, !0),
            this.oldListLen = 0,
            this.skinName = "resource/eui_skins/ChouJiang_TanSuoXunZhangSkin.exml"
            /*tpa=resource/eui_skins/ChouJiang_TanSuoXunZhangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            ConfigData.preLoadList(["medalsalvageData", "medalexpData", "medalData"],
                function() {
                    t.initUI()
                })
        },
        i.initUI = function() {
            this.listLen = 100,
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this),
                this.btnClose0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.infoHandler, this),
                this.btnSearch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.seachHandler, this),
                this.btnQuickSearch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.seachHandler, this),
                this.btnHighSearch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.seachHandler, this),
                this.btnJumpEquip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.euipHandler, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.Souls_List_Refresh, this.refreshSoluScene, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.UserData_Update, this.userDataRefresh, this),
                this.refreshSoluScene(),
                this.userDataRefresh(),
                UserData.getInstance()._vip < 6 ? this.btnQuickSearch.enabled = !1 : this.txtNeedVip.text = "",
                Utils.getImgByUrl(Path.backGroundImageUrl + "Bg_l_searchMeadal.jpg", this.bg)
        },
        i.euipHandler = function(t) {
            UserData.getInstance()._level < 40 ? Toast.launch(Locales.get("panel_active_game_campBattle_desc_2_2", 40)) : (WindowShipArrange.medalPage = !0, MainUI.instance.bottomUI.showShipArrange())
        },
        i.userDataRefresh = function() {
            this.txtCoinNum.text = Utils.rnum(UserData.getInstance().getRes(TypeDefine.RES.Gold)),
                this.txtDiamondNum.text = Utils.rnum(UserData.getInstance().getRes(TypeDefine.RES.Diamond))
        },
        i.refreshSoluScene = function(t) {
            void 0 === t && (t = null);
            var e = ShipManager.getInstance().soulList;
            this.listIndex = e.length > this.listLen ? e.length - this.listLen : 0;
            var a = Number(ConfigData.getDataByKey("medalsalvageData", SoulManager.soulScene).cost);
            this.txtCost.text = a.toString(),
                a > UserData.getInstance().getRes(TypeDefine.RES.Gold) ? this.txtCost.textColor = 16711680 : this.txtCost.textColor = 16777215;
            for (var i = 1; 6 > i; i++) {
                var n = this["Frame" + i];
                this.initBool || (Utils.getImgByUrl(Path.searchMedalUrl + "SearchScene_" + i + ".png", n.imgUp), Utils.getImgByUrl(Path.searchMedalUrl + "SearchScene_" + i + ".png", n.imgDown)),
                    n.ImShadow.visible = !0,
                    n.imgUp.visible = !1,
                    n.imgDown.visible = !0
            }
            this.initBool = !0;
            var s = this["Frame" + SoulManager.soulScene];
            s.ImShadow.visible = !1,
                s.imgUp.visible = !0,
                s.imgDown.visible = !1,
                this.initMedalList(!0),
                this.oldListLen = e.length
        },
        i.initMedalList = function(t) {
            for (var e = this,
                    a = ShipManager.getInstance().soulList, i = a.length - 1, n = a.length - this.oldListLen, s = i; s > this.listIndex; s--) {
                var r = this.vessel.getChildByName(a[s].id);
                r ? t && (r.x += 110 * n) : (r = new TansuoMedalItem(a[s]), r.update = 0, r.name = a[s].id, this.vessel.addChild(r), r.x = 110 * (i - s))
            }
            this.Reward.viewport.scrollH = 0;
            var o = !0;
            0 != this.listIndex ? this.listIndex -= this.listLen : o = !1,
                this.listIndex < 0 && (this.listIndex = 0),
                o && egret.setTimeout(function() {
                        e.initMedalList(!1)
                    },
                    this, 500)
        },
        i.closeHandler = function(t) {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.UserData_Update, this.userDataRefresh, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.Souls_List_Refresh, this.refreshSoluScene, this),
                this.close()
        },
        i.infoHandler = function(t) {
            QiJvTouAlert.getInstance().showTxtDescPage(Locales.get("DecDescPanel_txt_title"), Locales.get("DecDescPanel_txt"))
        },
        i.seachHandler = function(t) {
            var e = t.currentTarget;
            PiecesManager.getInstance().medalPieces.length >= 300 ? Toast.launch(Locales.get("DecGeneratePanel_txt_tips_count_limit")) : e == this.btnSearch ? Number(ConfigData.getDataByKey("medalsalvageData", SoulManager.soulScene).cost) > UserData.getInstance().getRes(TypeDefine.RES.Gold) ? (Toast.launch(Locales.get("DecGeneratePanel_txt_tips_gold_not_enough")), MainUI.instance.bottomUI.showHomeByForce(), WindowManager.getInstance().show(WindowManager.windowType.BuJi)) : RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceSoul, {
                type: 1
            }, !1) : e == this.btnQuickSearch ? WindowManager.getInstance().show(WindowManager.windowType.tansuoQuick) : e == this.btnHighSearch && (SoulManager.soulScene > 2 ? Toast.launch(Locales.get("DecGeneratePanel_txt_tips_senior")) : WindowManager.getInstance().show(WindowManager.windowType.tansuoGaoJi))
        },
        e
}(WindowBase);
