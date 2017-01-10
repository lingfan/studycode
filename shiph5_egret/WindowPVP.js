
var WindowPVEConfirm = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ZhanYi_GuanQia.exml"
            /*tpa=resource/eui_skins/ZhanYi_GuanQia.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            var e = this;
            this.txtLevel.text = t.title;
            var a = UserData.getInstance().getLeftSweepTimes(),
                i = a > t.leftTimes ? t.leftTimes : a;
            this.leftSweepCount = i,
                1e8 == a ? (this.txtValue.text = "", this.txtDesc.text = Locales.get("panel_sweep_txt_saodangcount")) : this.txtValue.text = a.toString(),
                this._stageInfo = t.stageInfo,
                this._campaignData = t.campaignData,
                this._rewardExp = t.exp,
                this._rewardGold = t.gold,
                this._battleType = t.type,
                t.leftTimes <= 0 && (this.txtValue.textColor = 16711680);
            var n = 5;
            t.type == BattleType.BATTLE_TYPE_MAIN_SPECIAL && (this.btnBattle.visible = !1, this.btnWipeOut.x = this.btnBattle.x, n = 3);
            var s = BattleManager.instance.getSweepCount(this._stageInfo, 1, n),
                r = s[0].toString(),
                o = Number(s[1]);
            if (this.btnWipeOutFive.labelDisplay.text = r, this.RealSweepCount = o, s = BattleManager.instance.getSweepCount(this._stageInfo, 0, n), r = s[0].toString(), o = Number(s[1]), this.btnWipeOut.labelDisplay.text = r, this.RealSweepCount = o, 0 == this.RealSweepCount) {
                this.btnWipeOut.visible = !1,
                    this.btnWipeOutFive.visible = !1,
                    this.btnBattle.x = this.btnWipeOut.x;
                var l = t.stageInfo.baseData.dayAtkCount - t.stageInfo.serverData.todayCount;
                0 >= l && (this.btnBattle.labelDisplay.text = Locales.get("alert_ok"), this.btnBattle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnBattle, this), this.btnBattle.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        e.close()
                    },
                    this))
            }
        },
        i.init = function() {
            (13 == GuideManager.step || 29 == GuideManager.step) && GuideManager.nextStep(),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnWipeOut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnWipeOut, this),
                this.btnWipeOutFive.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnWipeOutFive, this),
                this.btnBattle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnBattle, this),
                this.txtDesc.text = Locales.get("panel_sweep_txt_saodang"),
                this.btnBattle.labelDisplay.text = Locales.get("panel_sweep_btn_zhengfu"),
                this.btnWipeOut.labelDisplay.text = Locales.get("panel_sweep_btn_saodang", 1),
                this.btnWipeOutFive.labelDisplay.text = Locales.get("panel_sweep_btn_saodang", 5)
        },
        i.OnClickBtnClose = function(t) {
            this.close(),
                GuideManager.clearMask()
        },
        i.sweep = function(t) {
            if (UserData.getInstance().getPlayerLevel() < 15) return void Toast.launch("需要达到15级才能解锁");
            MainWorldManager.instance.currentSweepType = this._battleType,
                MainWorldManager.instance.currentSweepTimesType = t,
                MainWorldManager.instance.currentSweepCampaign = this._stageInfo;
            var e = 0 == t ? 1 : 2,
                a = 1 == e ? 1 : this.RealSweepCount;
            if (this._battleType == BattleType.BATTLE_TYPE_MAIN_PVE) {
                if (MainWorldManager.instance.FightCheck(this._stageInfo, a) == MainWorldManager.OilLimit) {
                    var i = ItemsManager.getInstance().getItemById(1076);
                    if (i && i.count > 0) {
                        var n = {};
                        n.title = Locales.get("panel_AlertLueduolingBuy_txt_comment_6"),
                            n.itemId = 1076,
                            WindowManager.getInstance().show(WindowManager.windowType.ItemUse, n)
                    } else WindowManager.getInstance().show(WindowManager.windowType.OilRefining);
                    return
                }
                MainWorldManager.instance.FightCheck(this._stageInfo) == MainWorldManager.CountLimit ? Toast.launch(Locales.get("panel_MainWorldStageSelectNormalPanel_txt_WindWord"), 16711680) : MainWorldManager.instance.sendNormalSweepBattle(this._stageInfo, this._campaignData, e)
            } else {
                if (MainWorldManager.instance.SpecialFightCheck(this._stageInfo.baseData, a) == MainWorldManager.OilLimit) {
                    var i = ItemsManager.getInstance().getItemById(1076);
                    if (i && i.count > 0) {
                        var n = {};
                        n.title = Locales.get("panel_AlertLueduolingBuy_txt_comment_6"),
                            n.itemId = 1076,
                            WindowManager.getInstance().show(WindowManager.windowType.ItemUse, n)
                    } else WindowManager.getInstance().show(WindowManager.windowType.OilRefining);
                    return
                }
                MainWorldManager.instance.SpecialFightCheck(this._stageInfo.baseData, a) == MainWorldManager.CountLimit ? Toast.launch(Locales.get("panel_MainWorldStageSelectNormalPanel_txt_WindWord"), 16711680) : MainWorldManager.instance.sendSpeSweepBattle(this._stageInfo, e)
            }
        },
        i.OnClickBtnWipeOut = function(t) {
            this.sweep(0),
                this.close()
        },
        i.OnClickBtnWipeOutFive = function(t) {
            this.sweep(1),
                this.close()
        },
        i.OnClickBtnBattle = function(t) {
            GuideManager.clearMask(),
                BattleManager.instance.BuyCheck(this._stageInfo, this._campaignData) && MainWorldManager.instance.sendNormalBattle(this._stageInfo, this._campaignData, this._rewardExp, this._rewardGold),
                this.close()
        },
        i.clear = function() {},
        e
}(WindowBase);
