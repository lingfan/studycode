
var UserData = function(t) {
    function e() {
        t.call(this),
            this.activeTipList = [],
            this._level = 1,
            this._uid = "",
            this._userName = "",
            this._res = {},
            this._vip = 0,
            this._rank = 0,
            this._fightPower = 0,
            this.prestige = 0,
            this.findJewelMaxNum = 20,
            this.lastelecrecoverytime = 0,
            this._experience = 0,
            this._camp = 1,
            this._militaryranktype = 0,
            this._techpoints = 0,
            this._honour = 0,
            this._lastRecoverTimeOil = 0,
            this._buyOilCount = 0,
            this._exploit = 0,
            this._militaryrankhon = 0,
            this._guidestep = 0,
            this._exp = 0,
            this._serverTime = 0,
            this._oldServerTime = 0,
            this._costcashcount = 0,
            this._centergoldcount = 0,
            this._centergoldupdate = !1,
            this._lastcenterrecoverytime = 0,
            this._head = 0,
            this._power = 0,
            this._serverStartTime = 0,
            this._unreadMail = 0,
            this._firstInit = !0,
            this.sweepcount = 0,
            this.versionSwitch = !1,
            this.regtime = 0,
            this.regdaycount = 0,
            this.serverstartday = 0,
            this.lvUpgradeFlag = !1,
            this.serverTimeOffset = 0,
            this.isShowMuBiaoIcon = !1,
            this.monthcardid = 0,
            this.monthcarddate = 0,
            this.monthcardreceived = !1,
            this.focus_award = !1,
            this.isKeJiJump = !1
    }
    __extends(e, t);
    var a = __define,
        i = e,
        n = i.prototype;
    return e.getInstance = function() {
            return this._instance || (this._instance = new e),
                this._instance
        },
        n.getLeftSweepTimes = function() {
            var t = VipParser.GetInstance().getItemById(e.getInstance().getVipLevel());
            return -1 == t.saodangcishu ? 1e8 : t.saodangcishu - e.getInstance().sweepcount
        },
        n.sendDetailMessage = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceUserData);
            Transport.instance.send(t)
        },
        n.checkUpgrade = function() {
            this.lvUpgradeFlag && (this.lvUpgradeFlag = !1, WindowManager.getInstance().show(WindowManager.windowType.Upgrade, {
                isLevelUp: !0,
                to: this._level
            }))
        },
        n.setData = function(t) {
            this._uid = GameData.uid,
                t.level && !this._firstInit && this._level < t.level && (SceneManager.instance.curSceneType == SceneType.BATTLE ? this.lvUpgradeFlag = !0 : WindowManager.getInstance().show(WindowManager.windowType.Upgrade, {
                    isLevelUp: !0,
                    to: t.level
                })),
                this._firstInit = !1,
                this._level = t.level || 1,
                HomeUI.instance && (this._level >= 40 ? HomeUI.instance.setTanSuoXunZhangState(!0) : HomeUI.instance.setTanSuoXunZhangState(!1), this._level >= 50 ? HomeUI.instance.setZhaoMuJiangZhangState(!0) : HomeUI.instance.setZhaoMuJiangZhangState(!1)),
                this._userName = t.name,
                this._res[TypeDefine.RES.Oil] = t.oil,
                this._res[TypeDefine.RES.Gold] = t.gold,
                this._res[TypeDefine.RES.Diamond] = t.cash,
                this._res[TypeDefine.RES.XunBaoLing] = t.electric,
                this._res[TypeDefine.RES.PaperExchangeLow] = t.juniorpaper,
                this._res[TypeDefine.RES.PaperExchangeHigh] = t.seniorpaper,
                this._vip = t.viplevel,
                0 != this._fightPower && this._fightPower != t.power && new ZhanDouLiMarquee({
                    point: t.power,
                    change: t.power - this._fightPower
                }),
                this._fightPower = t.power,
                this._centergoldcount = t.centergoldcount,
                this._lastcenterrecoverytime = t.lastcenterrecoverytime,
                this._costcashcount = t.costcashcount,
                this._experience = t.exp,
                this._camp = t.camp,
                this._head = t.head,
                this._militaryranktype = t.militaryranktype,
                t.militaryranktype && !this._firstInit && this._militaryranktype < t.militaryranktype && WindowManager.getInstance().show(WindowManager.windowType.Upgrade, {
                    isLevelUp: !1,
                    to: t.militaryranktype
                }),
                this._militaryrankhon = t.militaryrankhon,
                this._techpoints = t.techpoints,
                this._honour = t.honour,
                this._lastRecoverTimeOil = t.lastoilrecoverytime,
                this._buyOilCount = t.buyoilcount,
                this._power = t.power,
                this.lastelecrecoverytime = t.lastelecrecoverytime,
                this.prestige = t.prestige,
                this._centergoldupdate = t.centergoldupdate,
                this._guidestep = t.guidestep,
                this._serverStartTime = t.serverstarttime,
                this._firstrechargelist = t.firstrechargelist,
                this._totalbuy = t.totalbuy,
                this.sweepcount = t.sweepcount,
                this.regtime = t.regtime,
                this.regdaycount = t.regdaycount,
                this._unreadMail = t.unreadMail,
                this._exploit = t.exploit,
                this.guide_array = t.guide_array,
                this.monthcardid = t.monthcardid,
                this.monthcarddate = t.monthcarddate,
                this.monthcardreceived = t.monthcardreceived,
                this.focus_award = t.focus_award,
                HomeUI.instance && (HomeUI.instance.mailRedPoint(), HomeUI.instance.updateLevelControl(), HomeUI.instance.SetSubscribe()),
                this.dispatchEvent(new egret.Event(GameEvent.UserData_Update)),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.UserData_Update)),
                0 == this._camp ? WindowManager.getInstance().show(WindowManager.windowType.ChooseCamp, 0) : (GuideManager.initStep(), AudioManager.instance.init()),
                MilitaryManager.GetInstance().MilitaryTips()
        },
        n.getUserName = function() {
            return this._userName
        },
        n.setUserName = function(t) {
            this._userName = t
        },
        n.getFightPower = function() {
            return this._fightPower
        },
        n.getGuidestep = function() {
            return this._guidestep
        },
        n.getServerstartday = function() {
            var t = this._serverTime - 1e3 * this._serverStartTime;
            return Math.floor(t / 1e3 / 24 / 3600)
        },
        n.getVipLevel = function() {
            return this._vip
        },
        n.getPlayerLevel = function() {
            return this._level
        },
        n.getExperience = function() {
            return this._experience
        },
        n.getCamp = function() {
            return this._camp
        },
        n.setCamp = function(t) {
            this._camp = t
        },
        n.getMilitaryranktype = function() {
            return this._militaryranktype
        },
        n.getMilitaryrankhon = function() {
            return this._militaryrankhon
        },
        n.getTechpoints = function() {
            return this._techpoints
        },
        n.getHonour = function() {
            return this._honour
        },
        n.getRes = function(t) {
            return this._res[t]
        },
        n.getHead = function() {
            return this._head
        },
        n.setHead = function(t) {
            this._head = t
        },
        n.getNextLevelNeedExp = function() {
            var t = 0,
                e = ExpParser.GetInstance().getItemById(this._level + 1);
            return e && (t = e.exp),
                t
        },
        n.getExpPercent = function() {
            var t = 0;
            return t = this._experience / this.getNextLevelNeedExp() * 100
        },
        n.getCurPosNum = function() {
            return ExpParser.GetInstance().getItemById(this._level).poslevel
        },
        n.getMaxOil = function() {
            var t = VipParser.GetInstance().getItemById(this._vip).addOilLimit;
            return 120 + t
        },
        n.getMaxShipLevel = function() {
            return ExpParser.GetInstance().getItemById(this._level).shipFactorylvlLimit
        },
        n.setServerTime = function(t) {
            this._oldServerTime = t,
                this._serverTime = t;
            var e = Math.floor(Date.now() / 1e3);
            this.serverTimeOffset = Math.floor(t / 1e3) - e
        },
        n.getServerTime = function() {
            return this._serverTime
        },
        n.addServerTime = function() {
            this._serverTime += 1e3,
                this._oldServerTime += 1e3
        },
        n.getCenterRecovery = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceCenterRecovery);
            Transport.instance.send(t)
        },
        n.autosupply = function() {
            var t = !1;
            if (this._oldServerTime / 1e3 - this._lastcenterrecoverytime > 7200 && 6 != this._lastcenterrecoverytime && (this.getCenterRecovery(), t = !0), t = !1) {
                var e = new Date(this._serverTime),
                    a = e.getHours();
                a >= 22 && 0 == this._centergoldupdate && this.getCenterRecovery()
            }
        },
        n.getOldServerTime = function() {
            return this._oldServerTime
        },
        n.getServerStartTime = function() {
            return this._serverStartTime
        },
        n.setServerStartTime = function(t) {
            this._serverStartTime = t
        },
        n.setCostcashcount = function(t) {
            this._costcashcount = t
        },
        n.getCostcashcount = function() {
            return this._costcashcount
        },
        n.setCentergoldupdate = function(t) {
            this._centergoldupdate = t
        },
        n.getCentergoldupdate = function() {
            return this._centergoldupdate
        },
        n.setCentergoldcount = function(t) {
            this._centergoldcount = t
        },
        n.getCentergoldcount = function() {
            return this._centergoldcount
        },
        n.setLastcenterrecoverytime = function(t) {
            this._lastcenterrecoverytime = t
        },
        n.getLastcenterrecoverytime = function() {
            return this._lastcenterrecoverytime
        },
        n.getBuyOilCount = function() {
            return this._buyOilCount
        },
        n.getPower = function() {
            return this._power
        },
        n.getUnreadMail = function() {
            return this._unreadMail
        },
        n.getJuniorpaper = function() {
            return this._res[TypeDefine.RES.PaperExchangeLow] ? this._res[TypeDefine.RES.PaperExchangeLow] : 0
        },
        n.getSeniorpaper = function() {
            return this._res[TypeDefine.RES.PaperExchangeHigh] ? this._res[TypeDefine.RES.PaperExchangeHigh] : 0
        },
        n.getExploit = function() {
            return this._exploit
        },
        n.getLastRecoverTimeOil = function() {
            return this._lastRecoverTimeOil
        },
        n.getLastelecrecoverytime = function() {
            return this.lastelecrecoverytime
        },
        n.getMaxXunBaoLing = function() {
            return this.findJewelMaxNum
        },
        a(n, "uid",
            function() {
                return this._uid
            },
            function(t) {
                this._uid = t
            }),
        a(n, "username",
            function() {
                return this._userName
            },
            function(t) {
                this._userName = t
            }),
        a(n, "firstrechargelist",
            function() {
                return this._firstrechargelist
            }),
        a(n, "totalbuy",
            function() {
                return this._totalbuy
            }),
        a(n, "activeTips",
            function() {
                return this._activeTips
            },
            function(t) {
                this._activeTips = t,
                    this.updateActiveTip()
            }),
        n.registerActiveTip = function(t, e) {
            this.activeTipList.push([t, e])
        },
        n.updateActiveTip = function() {
            if (this._activeTips)
                for (var t = 0; t < this.activeTipList.length; t++) {
                    var e = this.activeTipList[t];
                    e[0].visible = this._activeTips[e[1]] || !1,
                        "recharge" == e[1] && (e[0].visible = RechargeManager.instance.isShowSpot)
                }
        },
        e
}(egret.EventDispatcher);
