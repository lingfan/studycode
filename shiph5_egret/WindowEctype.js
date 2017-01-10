
var WindowDefenseOil = function(t) {
    function e() {
        t.call(this, !1),
            this.tickIndex = 0,
            this.chaValue = 0,
            this.skinName = "resource/eui_skins/ZB_ShouWeiYouTianSkin.exml"
            /*tpa=resource/eui_skins/ZB_ShouWeiYouTianSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            WindowManager.getInstance().showWaiting(),
                this.tickIndex = 0,
                this.isFirst = !1,
                SUI.setTextureAsync(this.bgImg, Path.backGroundImageUrl + "ZB_SWYT_Bg.jpg"),
                this.preloadConfigs(function() {
                    t.initUI()
                }),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnChangeFormation.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnViewReward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnRankList.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnBattle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSkip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSweep.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                egret.Tween.get(this.btnViewReward, {
                    loop: !0
                }).to({
                        scaleX: .9,
                        scaleY: .9
                    },
                    500).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    500)
        },
        i.clear = function() {
            WindowManager.getInstance().clearCache(WindowManager.windowType.DefenseOil),
                0 != this.tickIndex && (GameTick.removeHandler(this.tickIndex), this.tickIndex = 0),
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnChangeFormation.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnViewReward.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnRankList.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnBattle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSkip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSweep.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.onTouchTapHandle = function(t) {
            var a = this;
            switch (t.currentTarget) {
                case this.btnClose:
                    0 != this.tickIndex && (GameTick.removeHandler(this.tickIndex), this.tickIndex = 0),
                        this.chaValue = 0,
                        this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.btnChangeFormation.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.btnViewReward.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.btnRankList.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.btnBattle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.btnReset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.btnSkip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.btnSweep.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                        this.destroy();
                    break;
                case this.btnChangeFormation:
                    MainUI.instance.bottomUI.lastBtn = null,
                        WindowManager.getInstance().needShowWindow = !0,
                        RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceGetTactic, null, !0);
                    break;
                case this.btnViewReward:
                    DefenseOilAlert.getInstance().showViewRewardPage(e.maxstage);
                    break;
                case this.btnRankList:
                    RankListManager.getInstance().showRankWin(1);
                    break;
                case this.btnBattle:
                    if (this.isInSkip) {
                        Toast.launch("请先取消扫荡");
                        break
                    }
                    if (this.battleTimes <= 0) {
                        var i = 10 * (this.buychangecnt + 1),
                            n = 0;
                        n = VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).buyChance ? VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).buyChance - this.buychangecnt : 0;
                        var s = "<font>消耗</font><font color='#00FF00'>" + i + "</font><font>钻石可增加1次挑战次数\n您今天还可购买</font><font color='#00FF00'>" + n + "</font><font>次</font>";
                        GameAlert.getInstance().showByHtml("", s,
                            function() {
                                a.sendBuyGuard(2),
                                    GameAlert.getInstance().hide()
                            })
                    } else RequestManager.GetInstance().enterBattle(9, "", 0);
                    break;
                case this.btnReset:
                    if (this.isInSkip) {
                        Toast.launch("请先取消扫荡");
                        break
                    }
                    var r = 2 + this.buyresetcount - this.resetcount;
                    if (r > 0) GameAlert.getInstance().show("", "重置将恢复您的挑战次数，并重置回第1波开始挑战，是否确定重置？",
                        function() {
                            a.sendResetGuard(),
                                GameAlert.getInstance().hide()
                        });
                    else {
                        var o = 0;
                        0 == this.buyresetcount ? o = 200 : 1 == this.buyresetcount ? o = 500 : 2 == this.buyresetcount && (o = 1e3);
                        var l = "<font>消耗</font><font color='#00FF00'>" + o + "</font><font>钻石可增加1次重置次数\n您今日已购买:</font><font color='#00FF00'>" + this.buyresetcount + "</font><font>次\n您是</font><font color='#00FF00'>VIP" + UserData.getInstance().getVipLevel() + "的玩家,今日共可购买" + VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).buyRefresh + "次</font>";
                        GameAlert.getInstance().showByHtml("", l,
                            function() {
                                a.sendResetGuard(),
                                    GameAlert.getInstance().hide()
                            })
                    }
                    break;
                case this.btnSkip:
                    var h = this.sweepend - e.curstage,
                        c = "<font>消耗</font><font color='#00FF00'>" + h + "</font><font>钻石可立即完成对第</font><font color='#00FF00'>" + this.sweepend + "</font><font>波扫荡\n是否立即完成扫荡?</font>";
                    GameAlert.getInstance().showByHtml("", c,
                        function() {
                            a.sendBuyGuard(3),
                                GameAlert.getInstance().hide()
                        });
                    break;
                case this.btnSweep:
                    if (this.isInSkip) this.sendGuardStage(0, !1);
                    else {
                        if (0 == e.maxstage) {
                            Toast.launch("只能扫荡已通关的波数");
                            break
                        }
                        if (e.curstage == e.maxstage) {
                            Toast.launch("已达最高波数，请重置后再进行扫荡");
                            break
                        }
                        DefenseOilAlert.getInstance().showSaoDangPage(e.maxstage)
                    }
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("defenceStageData"),
                e.push("npcData"),
                e.push("shipModelData"),
                e.push("vip"),
                ConfigData.preLoadDats(e, [DefencestagedataParser, NpcdataParser, ShipmodeldataParser, VipParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            118 == GuideManager.step && GuideManager.nextStep(),
                WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                SUI.addClickEffect(this.btnChangeFormation),
                SUI.addClickEffect1(this.btnViewReward),
                SUI.addClickEffect(this.btnRankList),
                this.sendEnterGuard()
        },
        i.sendEnterGuard = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceEnterGuard);
            Transport.instance.send(t)
        },
        i.sendResetGuard = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceResetGuard);
            Transport.instance.send(t)
        },
        i.sendBuyGuard = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceBuyGuard);
            e.type = t,
                Transport.instance.send(e)
        },
        i.sendGuardStage = function(t, e) {
            var a = Transport.getPkg(ProtocolMgr.ID_DceGuardStage);
            a.endID = t,
                a.sweep = e,
                Transport.instance.send(a)
        },
        i.handleGuardStage = function(t) {
            t.endID,
                t.sweep ? (this.btnSweep.label = "取消扫荡", this.sendEnterGuard()) : (this.btnSweep.label = "扫 荡", this.chaValue = 0)
        },
        i.handleBuyGuard = function(t) {
            t.type,
                0 == t.res || (1 == t.res ? 1 == t.type ? Toast.launch("购买重置次数满") : 2 == t.type && Toast.launch("购买挑战次数满") : 2 == t.res ? Toast.launch("钻石不足") : 5 == t.res && Toast.launch("cd已结束"))
        },
        i.handleResetGuard = function(t) {
            0 == t.res || (1 == t.res ? Toast.launch("没有重置次数") : 2 == t.res ? Toast.launch("钻石不足") : 3 == t.res ? Toast.launch("重置次数满") : 4 == t.res && Toast.launch("无法重置"))
        },
        i.setCurrWaveInfo = function(t) {
            this.txtEnemyNum.text = "第" + (t + 1) + "波";
            var e = DefencestagedataParser.GetInstance().getItemById(t + 1); - 1 == e.conditionsType ? this.txtWinDesc.text = "通关条件:战斗胜利" : 1 == e.conditionsType ? this.txtWinDesc.text = "通关条件：战斗胜利不超过" + e.coefficient + "回合" : 2 == e.conditionsType ? this.txtWinDesc.text = "通关条件：战斗结束时，己方死亡战舰数量不超过" + e.coefficient + "艘" : 3 == e.conditionsType && (this.txtWinDesc.text = "通关条件：战斗结束时，己方战舰总生命损耗低于" + e.coefficient + "%");
            var a = NpcdataParser.GetInstance().getItemById(e.pos8);
            SUI.setTextureAsync(this.imgShipBg, Path.itemBackURL + "ZB_SWYT_" + a.quality + ".png"),
                SUI.setTextureAsync(this.imgShipIcon, Path.shipURL + "y_" + ShipmodeldataParser.GetInstance().getItemById(a.modelId).url),
                this.imgShipName.text = ShipmodeldataParser.GetInstance().getItemById(a.modelId).classType
        },
        i.handleEnterGuard = function(t) {
            var a = this;
            if (e.curstage = t.curstage, e.maxstage = t.maxstage, this.sweepstart = t.sweepstart, this.sweepend = t.sweepend, this.sweeptime = t.sweeptime, this.resetcount = t.resetcount, this.buyresetcount = t.buyresetcount, this.buychangecnt = t.buychangecnt, this.battleTimes = 2 + t.buychangecnt - t.changecnt - t.costbuychangecnt, this.resetTimes = 2 + t.buyresetcount - t.resetcount, this.txtChallengeTimes.text = "挑战次数:" + this.battleTimes + "/2", this.txtLeftBattleTimes.text = "剩余重置次数:" + this.resetTimes, 0 != t.sweeptime)
                if (this.totalTime = 30 * (t.sweepend - t.sweepstart + 1), this.isFirst) this.isFirst = !1,
                    this.isInSkip = !0,
                    this.btnSweep.label = "取消扫荡",
                    this.txtSweepTime.visible = !0,
                    this.txtSweepTime.text = "倒计时:" + GlobalFunction.getHMSBySecond(this.totalTime),
                    this.tickIndex = GameTick.registerHandler(function() {
                            a.updateTime()
                        },
                        1e3);
                else {
                    this.passTime = UserData.getInstance().getOldServerTime() / 1e3 - this.sweeptime,
                        console.log("扫荡需要的总时间 totalTime : " + this.totalTime),
                        console.log("扫荡已经过去的时间 passTime : " + this.passTime),
                        this.passTime < 0 && (this.passTime = 0);
                    var i = this.totalTime - this.passTime;
                    i > 0 ? (this.isInSkip = !0, this.btnSweep.label = "取消扫荡", this.txtSweepTime.visible = !0, 0 != this.tickIndex && (GameTick.removeHandler(this.tickIndex), this.tickIndex = 0), this.txtSweepTime.text = "倒计时:" + GlobalFunction.getHMSBySecond(i), this.tickIndex = GameTick.registerHandler(function() {
                            a.updateTime()
                        },
                        1e3)) : (this.isInSkip = !1, this.btnSweep.label = "扫 荡", this.txtSweepTime.visible = !1, this.sendGuardStage(0, !1))
                }
            else this.isInSkip = !1,
                this.btnSweep.label = "扫 荡",
                this.txtSweepTime.visible = !1;
            if (this.btnSkip.enabled = this.isInSkip, this.setCurrWaveInfo(e.curstage), this.resetTimes > 0) this.resetCoinIcon.visible = !1,
                this.txtResetPrice.visible = !1,
                this.txtResetPrice.text = "",
                this.txtLeftBattleTimes.visible = !0;
            else {
                this.txtLeftBattleTimes.visible = !1,
                    this.resetCoinIcon.visible = !0;
                var n = 0;
                0 == t.buyresetcount ? n = 200 : 1 == t.buyresetcount ? n = 500 : 2 == t.buyresetcount && (n = 1e3),
                    this.txtResetPrice.visible = !0,
                    this.txtResetPrice.text = n.toString()
            }
            this.isInSkip ? this.txtSkipPrice.text = "" + (t.sweepend - t.curstage) : this.txtSkipPrice.text = "0"
        },
        i.updateTime = function() {
            this.passTime = UserData.getInstance().getOldServerTime() / 1e3 - this.sweeptime + this.chaValue,
                this.passTime < 0 && (this.chaValue = -this.passTime, this.passTime = 0);
            var t = this.totalTime - this.passTime,
                a = t % 30;
            if (0 == a && t < this.totalTime) {
                e.curstage++,
                    this.setCurrWaveInfo(e.curstage);
                var i = Number(this.txtSkipPrice.text) - 1;
                this.txtSkipPrice.text = i.toString()
            }
            0 >= t ? (GameTick.removeHandler(this.tickIndex), this.tickIndex = 0, this.isInSkip = !1, this.btnSweep.label = "扫 荡", this.txtSweepTime.visible = !1) : this.txtSweepTime.text = "倒计时:" + GlobalFunction.getHMSBySecond(t)
        },
        e.resetBattleFun = function() {
            RequestManager.GetInstance().enterBattle(9, "", 0)
        },
        e
}(WindowBase);
