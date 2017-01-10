
var WindowBuJi = function(t) {
    function e() {
        t.call(this, !1),
            this.letfTime = 0,
            this.tickIndex = 0,
            this.level = 1,
            this.militaryranktype = 10,
            this.vipLv = 1,
            this.privilege = [],
            this.addgold = 0,
            this.skinName = "resource/eui_skins/Buji.exml"
            /*tpa=resource/eui_skins/Buji.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setComGroupLeftTime = function(t) {
            this.timeLabel.text = t
        },
        i.showComGroupData = function() {
            this.comTitleLabel.text = Locales.get("panel_supply_btn_normal_supply"),
                this.BuJiShengYuCiShu.text = Locales.get("panel_supply_txt_surplus"),
                this.lingquBtn.label = Locales.get("panel_next_day_activity_btn_name_1"),
                this.BuJiTime.text = Locales.get("panel_supply_txt_next_supply_time")
        },
        i.setComGroupData = function(t, e) {
            this.countLabel.text = t,
                this.timeLabel.text = e
        },
        i.showVipGroupData = function() {
            this.vipTitleLabel.text = Locales.get("panel_supply_btn_strong_supply"),
                this.vipBuJiShengYuCiShu.text = Locales.get("panel_supply_txt_surplus"),
                this.vipLingquBtn.label = Locales.get("panel_next_day_activity_btn_name_1"),
                this.BuJiXiaoHao.text = Locales.get("panel_supply_txt_supply_consume")
        },
        i.setVipGroupData = function(t, e) {
            this.vipCountLabel.text = t,
                this.needCountLabel.text = e
        },
        i.init = function() {
            var t = this;
            WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    t.initUI()
                })
        },
        i.preloadConfigs = function(t) {
            ConfigData.preLoadDats(["exp", "MilitaryRights", "centerAddData", "MilitaryRank", "vip"], [ExpParser, MilitaryrightsParser, CenteradddataParser, MilitaryrankParser, VipParser],
                function() {
                    ConfigData.getAllData("Talent",
                        function() {
                            t()
                        })
                })
        },
        i.initUI = function() {
            UserData.getInstance()._level >= 9 && !GuideManager.bujiGuideBool && GuideManager.nextStep(62),
                WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                this.showComGroupData(),
                this.setComGroupData("/6", GlobalFunction.getHMSBySecond(0)),
                this.addChild(this.comBuJiItem),
                this.showVipGroupData(),
                this.setVipGroupData("0/5", "0"),
                this.addChild(this.vipBuJiItem),
                this.lingquBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.vipLingquBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                UserData.getInstance().addEventListener(GameEvent.UserData_Update, this.setPanelData, this),
                this.titleLabel.text = Locales.get("panel_supply_txt_title"),
                this.BuJiLabel_01.text = Locales.get("panel_supply_txt_earnings"),
                this.BuJiLabel_02.text = Locales.get("panel_supply_txt_building_lvl"),
                this.BuJiLabel_03.text = Locales.get("panel_supply_txt_building_lvl_vip"),
                this.BuJiLabel_04.text = Locales.get("panel_supply_txt_base_supply_junxian"),
                this.BuJiLabel_05.text = Locales.get("panel_supply_txt_base_supply"),
                this.BuJiLabel_06.text = Locales.get("panel_supply_txt_base_supply_vip"),
                this.BuJiLabel_07.text = Locales.get("panel_supply_txt_base_supply_vip"),
                this.BuJiDes.text = Locales.get("panel_supply_txt_vip_comment"),
                this.setPanelData()
        },
        i.initComItem = function() {
            this.showComGroupData(),
                this.setComGroupData("/6", GlobalFunction.getHMSBySecond(0)),
                this.addChild(this.comBuJiItem),
                this.lingquBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.initVipItem = function() {
            this.showVipGroupData(),
                this.setVipGroupData("0/5", "0"),
                this.addChild(this.vipBuJiItem),
                this.vipLingquBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.clear = function() {
            this.lingquBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.vipLingquBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                UserData.getInstance().removeEventListener(GameEvent.UserData_Update, this.setPanelData, this)
        },
        i.onTouchTapHandle = function(t) {
            switch (t.currentTarget) {
                case this.lingquBtn:
                    console.log("点击了普通补给的领取按钮"),
                        63 == GuideManager.step && GuideManager.nextStep(),
                        this.sendGetCenterGold(1);
                    break;
                case this.vipLingquBtn:
                    console.log("点击了VIP补给的领取按钮");
                    var e = 0;
                    e = VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).dayCenterAddCnt - UserData.getInstance().getCostcashcount() != 0 ? CenterAddDataTool.getInstance().getDataByCount(UserData.getInstance().getCostcashcount() + 1).cash : 0,
                        UserData.getInstance().getRes(TypeDefine.RES.Diamond) >= e ? this.strongSupplyCheck() && this.sendGetCenterGold(2) : (Toast.launch("钻石不足"), WindowManager.getInstance().show(WindowManager.windowType.Recharge));
                    break;
                case this.btnClose:
                    this.tickIndex > 0 && (GameTick.removeHandler(this.tickIndex), this.letfTime = 0, this.tickIndex = 0),
                        WindowManager.getInstance().hide(WindowManager.windowType.BuJi),
                        UserData.getInstance().isKeJiJump ? (MainUI.instance.setBottomVisible(!1), UserData.getInstance().isKeJiJump = !1) : MainUI.instance.setBottomVisible(!0)
            }
        },
        i.sendGetCenterGold = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGetCenterGold);
            e.type = t,
                Transport.instance.send(e)
        },
        i.getCenterGoldResult = function(t) {
            console.log("领取补给类型(1 普通  2 紧急): " + t.type),
                console.log("领取补给结果(0 成功  1 cd中  2 没次数  3 钻石不足): " + t.result),
                0 == t.result ? Toast.launch("补给成功", 16777215, !0, 320) : 1 == t.result ? Toast.launch("cd中", 16777215, !0, 320) : 2 == t.result ? Toast.launch("没次数", 16777215, !0, 320) : 3 == t.result && Toast.launch("钻石不足", 16777215, !0, 320)
        },
        i.updateTime = function() {
            return 0 == this.letfTime ? (GameTick.removeHandler(this.tickIndex), void(this.tickIndex = 0)) : void this.setComGroupLeftTime(GlobalFunction.getHMSBySecond(--this.letfTime))
        },
        i.setPanelData = function() {
            var t = this;
            if (this.basegold = ExpParser.GetInstance().getItemById(UserData.getInstance().getPlayerLevel()).centerAddGold, console.log("每次补给金币数 basegold: " + this.basegold), this.addgold = 0, MilitaryrankParser.GetInstance().getItemById(UserData.getInstance().getMilitaryranktype()) && (this.privilege = MilitaryrankParser.GetInstance().getItemById(UserData.getInstance().getMilitaryranktype()).privilege), null != this.privilege)
                for (var e in this.privilege) 3 == MilitaryrightsParser.GetInstance().getItemById(this.privilege[e]).righttype && (1 == MilitaryrightsParser.GetInstance().getItemById(this.privilege[e]).numtype ? this.addgold += this.basegold * MilitaryrightsParser.GetInstance().getItemById(this.privilege[e]).num / 1e3 : 2 == MilitaryrightsParser.GetInstance().getItemById(this.privilege[e]).numtype && (this.addgold += MilitaryrightsParser.GetInstance().getItemById(this.privilege[e]).num));
            console.log("经过计算后，军衔对补给加成 addgold: " + this.addgold),
                this.gold_jichu = Math.ceil(this.basegold),
                console.log("gold_jichu: " + this.gold_jichu),
                this.gold_military = Math.ceil(this.addgold),
                console.log("gold_military: " + this.gold_military),
                this.gold_telent = Math.ceil(this.basegold * TalentTool.getInstance().getTotalData().addPercent),
                console.log("gold_telent: " + this.gold_telent),
                this.gold_vip = Math.ceil((this.basegold + this.gold_telent + this.gold_military) * VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).dayCenterAddPer / 100),
                console.log("gold_vip: " + this.gold_vip),
                this.gold_total = this.gold_jichu + this.gold_military + this.gold_telent + this.gold_vip,
                console.log("gold_total: " + this.gold_total),
                this.lvlvLabel.text = UserData.getInstance().getPlayerLevel().toString(),
                this.vipLabel.text = UserData.getInstance().getVipLevel().toString(),
                this.militaryRankLabel.text = MilitaryrankParser.GetInstance().getItemByField("id", UserData.getInstance().getMilitaryranktype()).name_l,
                Utils.getImgByUrl(MilitaryManager.GetInstance().getPicByRankLvl(UserData.getInstance().getMilitaryranktype()), this.mrIcon),
                this.lvProduceLabel.text = this.gold_jichu.toString(),
                this.vipProduceLabel.text = this.gold_vip.toString(),
                this.mrProduceLabel.text = this.gold_military.toString(),
                this.sumGainsLabel.text = this.gold_total.toString(),
                UserData.getInstance().getCentergoldcount() > 0 ? this.redPoint.visible = !0 : this.redPoint.visible = !1,
                6 == UserData.getInstance().getCentergoldcount() ? this.setComGroupData(UserData.getInstance().getCentergoldcount() + "/6", GlobalFunction.getHMSBySecond(0)) : (console.log("----------------------- OldServerTime" + UserData.getInstance().getOldServerTime()), console.log("----------------------- Lastcenterrecoverytime" + UserData.getInstance().getLastcenterrecoverytime()), this.letfTime = 7200 - (UserData.getInstance().getOldServerTime() / 1e3 - UserData.getInstance().getLastcenterrecoverytime()), this.setComGroupData(UserData.getInstance().getCentergoldcount() + "/6", GlobalFunction.getHMSBySecond(this.letfTime)), 0 == this.tickIndex && (this.tickIndex = GameTick.registerHandler(function() {
                        t.updateTime()
                    },
                    1e3))),
                0 == UserData.getInstance().getCentergoldcount() ? this.lingquBtn.enabled = !1 : this.lingquBtn.enabled = !0,
                VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).dayCenterAddCnt - UserData.getInstance().getCostcashcount() > 0 ? this.redPoint2.visible = !0 : this.redPoint2.visible = !1,
                VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).dayCenterAddCnt - UserData.getInstance().getCostcashcount() == 0 ? this.vipLingquBtn.enabled = !1 : this.vipLingquBtn.enabled = !0,
                this.setVipGroupData(VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).dayCenterAddCnt - UserData.getInstance().getCostcashcount() + "/" + VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).dayCenterAddCnt, "0"),
                VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).dayCenterAddCnt - UserData.getInstance().getCostcashcount() != 0 ? this.needCountLabel.text = CenterAddDataTool.getInstance().getDataByCount(UserData.getInstance().getCostcashcount() + 1).cash + "" : this.needCountLabel.text = "0"
        },
        i.strongSupplyCheck = function() {
            return VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel()).dayCenterAddCnt - UserData.getInstance().getCostcashcount() > 0 ? !0 : !1
        },
        e
}(WindowBase);
