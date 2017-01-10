
var WindowQiJvTou = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/ZB_QiJuTouSkin.exml"
            /*tpa=resource/eui_skins/ZB_QiJuTouSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            WindowManager.getInstance().showWaiting(),
                this.initUI(),
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.tiaoZhanBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.paiHangImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.jiangLiImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.explainBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.clear = function() {
            WindowManager.getInstance().clearCache(WindowManager.windowType.QiJvTou),
                this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.tiaoZhanBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.paiHangImg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.jiangLiImg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.explainBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.onTouchTapHandle = function(t) {
            switch (t.currentTarget) {
                case this.closeBtn:
                    this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.tiaoZhanBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.paiHangImg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.jiangLiImg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.explainBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.destroy();
                    break;
                case this.tiaoZhanBtn:
                    if (console.log("挑战"), 0 == this.canchallengetimes) {
                        Toast.launch("今日挑战次数已用尽");
                        break
                    }
                    if (this.usecash > UserData.getInstance().getRes(TypeDefine.RES.Diamond)) {
                        Toast.launch("钻石不足");
                        break
                    }
                    RequestManager.GetInstance().enterBattle(14, void 0, void 0);
                    break;
                case this.paiHangImg:
                    console.log("排行"),
                        0 == this.state ? RankListManager.getInstance().showRankWin(11) : 1 == this.state ? Toast.launch("活动暂未开启") : 2 == this.state ? Toast.launch("等级不够") : 3 == this.state && Toast.launch("配表异常");
                    break;
                case this.jiangLiImg:
                    console.log("奖励"),
                        QiJvTouAlert.getInstance().showRewardPage();
                    break;
                case this.explainBtn:
                    console.log("说明");
                    var e = "<font>" + Locales.get("panel_challengeship_desc_1") + "\n" + Locales.get("panel_challengeship_desc_2") + "\n" + Locales.get("panel_challengeship_desc_3") + "\n" + Locales.get("panel_challengeship_desc_4") + "\n" + Locales.get("panel_challengeship_desc_5") + "\n" + Locales.get("panel_challengeship_desc_6") + "</font>";
                    QiJvTouAlert.getInstance().showTxtDescPage("挑战七巨头", e)
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("bigSevenReward"),
                ConfigData.preLoadDats(e, [BigsevenrewardParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                SUI.addClickEffect(this.paiHangImg),
                SUI.addClickEffect(this.jiangLiImg),
                SUI.setTextureAsync(this.bg, Path.backGroundImageUrl + "ZB_TZQJT_Bg.jpg"),
                this.sendArmadaData()
        },
        i.sendArmadaData = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceArmadaData);
            Transport.instance.send(t)
        },
        i.handleArmadaData = function(t) {
            this.canchallengetimes = t.canchallengetimes,
                this.usecash = t.usecash,
                t.exploit,
                0 == t.res ? (this.tiaoZhanBtn.enabled = !0, this.txtCost.visible = !0, this.zhuanshiImg.visible = !0, this.currCostTxt.visible = !0, this.closeTxt.visible = !1, this.state = 0) : 1 == t.res ? (this.tiaoZhanBtn.enabled = !1, this.txtCost.visible = !1, this.zhuanshiImg.visible = !1, this.currCostTxt.visible = !1, this.closeTxt.visible = !0, this.state = 1) : 2 == t.res ? (Toast.launch("等级不够"), this.state = 2) : 3 == t.res && (Toast.launch("配表异常"), this.state = 3),
                0 == t.rank ? this.txtRank.text = "未上榜" : this.txtRank.text = "第" + t.rank + "名",
                this.txtDamage.text = t.totaldmgnum,
                this.txtReward.text = t.totalgold,
                this.txtBattleTimes.text = "今日可挑战" + t.canchallengetimes + "次",
                this.txtCost.text = t.usecash + "",
                t.canfreetimes > 0 ? this.freeTimesTxt.visible = !0 : this.freeTimesTxt.visible = !1,
                this.freeTimesTxt.text = "今日免费次数:" + t.canfreetimes
        },
        e
}(WindowBase);
