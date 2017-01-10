
var WindowBattleSweepResult = function(t) {
    function e() {
        t.call(this, !0),
            this._playingAnim = !1,
            this.skinName = "resource/eui_skins/ZhanYiSaoDangSkin.exml"
            /*tpa=resource/eui_skins/ZhanYiSaoDangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            var e = t.pkg ? t.pkg.length : 1;
            MainWorldManager.instance.currentSweepCampaign.serverData.todayCount += e,
                EventManager.instance.dispatchEvent(EventTypes.PVE_ATTACK_TIMES_UPDATE);
            for (var a = [], i = 0; i < t.pkg.length; ++i) a.push({
                index: i + 1,
                pkg: t.pkg[i]
            });
            this.lstCenter.dataProvider = new eui.ArrayCollection(a);
            var n = VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()),
                s = n.saodangcishu - UserData.getInstance().sweepcount; - 1 != n.saodangcishu ? s > 0 ? (this.txtLeftTimesDesc.text = Locales.get("zz_saodang1", s), this.txtLeftTimesDesc.textColor = 16777215) : (this.txtLeftTimesDesc.text = Locales.get("zz_saodang1", 0), this.txtLeftTimesDesc.textColor = 16711680, this.btnSweep.enabled = !1) : this.txtLeftTimesDesc.text = Locales.get("panel_sweep_txt_saodangcount");
            var r = 3;
            MainWorldManager.instance.currentSweepType == BattleType.BATTLE_TYPE_MAIN_PVE && (r = 5);
            var o = BattleManager.instance.getSweepCount(MainWorldManager.instance.currentSweepCampaign, MainWorldManager.instance.currentSweepTimesType, r),
                l = o[0];
            if (this.RealSweepCount = Number(o[1]), this.btnSweep.labelDisplay.text = l.toString(), 0 == this.RealSweepCount) {
                var h = 1;
                1 == MainWorldManager.instance.currentSweepType && (h = r),
                    l = Locales.get("panel_sweep_btn_saodang", h),
                    this.btnSweep.labelDisplay.text = l.toString(),
                    MainWorldManager.instance.currentSweepType == BattleType.BATTLE_TYPE_MAIN_PVE && 3 != MainWorldManager.instance.currentSweepCampaign.baseData.type && (this.btnSweep.enabled = !1)
            }
            var c = MainWorldManager.instance.currentSweepCampaign.serverData ? MainWorldManager.instance.currentSweepCampaign.serverData.todayCount : 0,
                d = MainWorldManager.instance.currentSweepCampaign.baseData.dayAtkCount - c;
            0 == Math.floor(d) && (this.btnSweep.enabled = !1),
                this.txtBattleTimes.text = d + "/" + MainWorldManager.instance.currentSweepCampaign.baseData.dayAtkCount
        },
        i.init = function() {
            var t = this;
            this.btnSweep.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnSweep, this),
                this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnConfirm, this),
                this.txtTitle.text = Locales.get("panel_sweep_result_txt_title"),
                this.txtBattleTimesDesc.text = Locales.get("panel_stageselect_normal_fightNum1"),
                this.scvCenter.viewport = this.lstCenter,
                this.lstCenter.itemRenderer = BattleSweepItemRenderer;
            var e = Path.effectUrl + "saodangchenggong/effect_saodangchenggong.json",
                a = Path.effectUrl + "saodangchenggong/texture.json",
                i = Path.effectUrl + "saodangchenggong/texture.png";
            this._playingAnim = !0,
                Utils.createDragonBone(e, a, i, "saodangchenggong", "normal",
                    function(e, a) {
                        e ? (t.addChild(e.display), e.display.x = .5 * t.width, e.display.y = .5 * t.height, e.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                            function() {
                                Utils.delayCall(1e3,
                                    function() {
                                        t._playingAnim = !1,
                                            Utils.removeDragonBone(e)
                                    },
                                    t)
                            },
                            t)) : t._playingAnim = !1
                    },
                    this)
        },
        i.OnClickBtnSweep = function(t) {
            this._playingAnim || (Log.logZDY("RealSweepCount -== " + this.RealSweepCount), 0 != this.RealSweepCount ? 0 == MainWorldManager.instance.currentSweepTimesType ? BattleManager.instance.sweepCheck(MainWorldManager.instance.currentSweepCampaign) && (MainWorldManager.instance.currentSweepType == BattleType.BATTLE_TYPE_MAIN_PVE ? MainWorldManager.instance.sendNormalSweepBattle(MainWorldManager.instance.currentSweepCampaign, void 0, 1) : MainWorldManager.instance.sendSpeSweepBattle(MainWorldManager.instance.currentSweepCampaign, 1), this.close()) : 1 == MainWorldManager.instance.currentSweepTimesType && BattleManager.instance.sweepCheck(MainWorldManager.instance.currentSweepCampaign, this.RealSweepCount) && (MainWorldManager.instance.currentSweepType == BattleType.BATTLE_TYPE_MAIN_PVE ? MainWorldManager.instance.sendNormalSweepBattle(MainWorldManager.instance.currentSweepCampaign, void 0, 2) : MainWorldManager.instance.sendSpeSweepBattle(MainWorldManager.instance.currentSweepCampaign, 2), this.close()) : BattleManager.instance.checkCount(MainWorldManager.instance.currentSweepCampaign, MainWorldManager.instance.currentSweepCampaign.baseData))
        },
        i.OnClickBtnConfirm = function(t) {
            this._playingAnim || this.close()
        },
        i.clear = function() {},
        e
}(WindowBase);
