
var WindowKeJi = function(t) {
    function e() {
        t.call(this, !1),
            this.science_IRON_ADD = 30,
            this.science_AMMO_ADD = 10,
            this.science_AIR_ADD = 10,
            this.science_MACHINE_ADD = 4,
            this.science_ELEC_ADD = 4,
            this.skinName = "resource/eui_skins/KeJiSkin.exml"
            /*tpa=resource/eui_skins/KeJiSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    t.initUI()
                }),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.getMaterialBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.allUpgradeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.SCIENCE_ITEM_COUNT_UPDATE, this.refreshItemsCountTxt, this)
        },
        i.clear = function() {
            this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.getMaterialBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.allUpgradeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.SCIENCE_ITEM_COUNT_UPDATE, this.refreshItemsCountTxt, this)
        },
        i.onTouchTapHandle = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    MainUI.instance.setBottomVisible(!0),
                        WindowManager.getInstance().hide(WindowManager.windowType.KeJi);
                    break;
                case this.getMaterialBtn:
                    console.log("获取材料"),
                        TiaoZhuanAlert.getInstance().show("", "进行战役获得", "商城购买宝箱",
                            function() {
                                WindowManager.getInstance().hideAll(),
                                    MainWorldManager.instance.openPVEWindow(),
                                    MainUI.instance.setBottomVisible(!0)
                            },
                            function() {
                                WindowManager.getInstance().hideAll(),
                                    GameData.skipShipGuide ? (WindowShop.PAPER_INDEX = 2, WindowShop.STORE_INDEX = 0, WindowShop.VIP_INDEX = 1, WindowShop.CAPTAIN_INDEX = 3, WindowShop.MEDAL_INDEX = 4, WindowShop.CURR_PAGE = WindowShop.STORE_INDEX) : (WindowManager.getInstance().hideAll(), WindowShop.CURR_PAGE = WindowShop.STORE_INDEX, WindowManager.getInstance().show(WindowManager.windowType.Shop)),
                                    MainUI.instance.setBottomVisible(!0)
                            });
                    break;
                case this.allUpgradeBtn:
                    console.log("一键升级");
                    var e = !1,
                        a = this.getKeJiPageList();
                    for (var i in a) UserData.getInstance().getRes(TypeDefine.RES.Gold) >= a[i].costGold && (e = !0);
                    if (e) {
                        var n = Transport.getPkg(ProtocolMgr.ID_DceAutoUpgradeScience);
                        Transport.instance.send(n)
                    } else Toast.launch("金币不足"),
                        UserData.getInstance()._level >= 9 && (WindowManager.getInstance().show(WindowManager.windowType.BuJi), UserData.getInstance().sendDetailMessage(), MainUI.instance.setBottomVisible(!0), UserData.getInstance().isKeJiJump = !0)
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("science"),
                e.push("scienceData"),
                ConfigData.preLoadDats(e, [ScienceParser, SciencedataParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            GuideManager.techGuideBool || GuideManager.nextStep(82),
                WindowManager.getInstance().hideWaiting(),
                this.science_IRON_ADD = 30,
                this.science_AMMO_ADD = 10,
                this.science_AIR_ADD = 10,
                this.science_MACHINE_ADD = 4,
                this.science_ELEC_ADD = 4,
                this.refreshItemsCountTxt(),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                MainUI.instance.setBottomVisible(!1),
                this.scvCenter.viewport = this.lstCenter,
                this.setCenterPage()
        },
        i.setCenterPage = function() {
            var t = this.getKeJiPageList();
            this.lstCenter.dataProvider = new eui.ArrayCollection(t),
                this.lstCenter.itemRenderer = keJiFactoryListItem
        },
        i.getKeJiPageList = function() {
            for (var t = [], e = ScienceParser.GetInstance().getDataArr(), a = 0; a < e.length; a++) {
                var i = {};
                i.id = e[a].id,
                    i.icon = Path.technologyURL + e[a].icon;
                for (var n = 0; n < ScienceData.levelsList.length; n++)
                    if (n + 1 == Number(i.id)) {
                        i.lv = ScienceData.levelsList[n],
                            i.name = e[a].name_l + ScienceData.levelsList[n] + "级";
                        break
                    }
                var s = SciencedataParser.GetInstance().getItemById(i.lv + 1);
                "1" == i.id ? (i.buffInfo = "火炮攻击 +" + ScienceData.levelsList[n] * this.science_AMMO_ADD, i.costGold = s.ammoCostGold, i.costItem = s.ammoCostItem, i.costCount = "X" + s.ammoCostCount, i.needCount = s.ammoCostCount) : "2" == i.id ? (i.buffInfo = "爆破攻击 +" + ScienceData.levelsList[n] * this.science_AIR_ADD, i.costGold = s.airCostGold, i.costItem = s.airCostItem, i.costCount = "X" + s.airCostCount, i.needCount = s.airCostCount) : "3" == i.id ? (i.buffInfo = "火炮防御 +" + ScienceData.levelsList[n] * this.science_MACHINE_ADD, i.costGold = s.machineCostGold, i.costItem = s.machineCostItem, i.costCount = "X" + s.machineCostCount, i.needCount = s.machineCostCount) : "4" == i.id ? (i.buffInfo = "爆破防御 +" + ScienceData.levelsList[n] * this.science_ELEC_ADD, i.costGold = s.elecCostGold, i.costItem = s.elecCostItem, i.costCount = "X" + s.elecCostCount, i.needCount = s.elecCostCount) : "5" == i.id && (i.buffInfo = "生命 +" + ScienceData.levelsList[n] * this.science_IRON_ADD, i.costGold = s.ironCostGold, i.costItem = s.ironCostItem, i.costCount = "X" + s.ironCostCount, i.needCount = s.ironCostCount),
                    "" == i.costItem || "" == i.costCount ? i.group2State = !1 : i.group2State = !0,
                    t.push(i)
            }
            return t
        },
        i.refreshItemsCountTxt = function() {
            var t = ItemsManager.getInstance().getItemById(1005);
            null != t ? (this.itemsCountTxt.text = t.count, this.itemsCountTxt.textColor = 11135736) : (this.itemsCountTxt.text = "0", this.itemsCountTxt.textColor = 16001803)
        },
        e
}(WindowBase);
