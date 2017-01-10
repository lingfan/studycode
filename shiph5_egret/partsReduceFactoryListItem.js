
var WindowPeiJian = function(t) {
    function e() {
        t.call(this, !1),
            this.currPage = 0,
            this.isInit = !1,
            this.dsListParts = [],
            this.pos = 0,
            this.skinName = "resource/eui_skins/zhuye_PeijianSkin.exml"
            /*tpa=resource/eui_skins/zhuye_PeijianSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            GameEventDispatcher.getInstance().addEventListener(GameEvent.REFRESH_PARTS_DATA, this.onRefreshPartsData, this),
                WindowManager.getInstance().showWaiting();
            var t = Transport.getPkg(ProtocolMgr.ID_DcePartsList);
            Transport.instance.send(t),
                this.btnChangeToSell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSellByQualityBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSellBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.secCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.secOKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.secCancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.ck1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.ck2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.ck3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.ck4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.clear = function() {
            this.isInit = !1,
                this.opensell || WindowManager.getInstance().getWindow(WindowManager.windowType.ShipArrange) ? MainUI.instance.changeTopMode(topUIMode["null"]) : (MainUI.instance.changeTopMode(topUIMode.normal), MainUI.instance.changeTopMode(topUIMode.normal)),
                MainUI.instance.setBottomVisible(!0),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.REFRESH_PARTS_DATA, this.onRefreshPartsData, this),
                this.btnChangeToSell.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReturn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSellByQualityBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSellBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.secCloseBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.secOKBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.secCancelBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.ck1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.ck2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.ck3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.ck4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.onRefreshPartsData = function() {
            var t = this;
            this.isInit ? 1 == this.huishouGroup.visible ? this.setHuiShouPage() : 0 == this.currPage ? this.setPeiJianPage() : 1 == this.currPage && this.setHuanYuanPage() : 0 == this.huishouGroup.visible && this.preloadConfigs(function() {
                t.initUI(),
                    t.isInit = !0
            })
        },
        i.onTouchTapHandle = function(t) {
            switch (t.currentTarget) {
                case this.ck1:
                    break;
                case this.ck2:
                    break;
                case this.ck3:
                    break;
                case this.ck4:
                    break;
                case this.secCloseBtn:
                    this.huishouByQualityGroup.visible = !1;
                    break;
                case this.secCancelBtn:
                    this.huishouByQualityGroup.visible = !1;
                    break;
                case this.secOKBtn:
                    PartsManager.getInstance().quailtyArr = [],
                        PartsManager.getInstance().reductionPartsIds = [],
                        this.ck1.selected && PartsManager.getInstance().quailtyArr.push(1),
                        this.ck2.selected && PartsManager.getInstance().quailtyArr.push(2),
                        this.ck3.selected && PartsManager.getInstance().quailtyArr.push(3),
                        this.ck4.selected && PartsManager.getInstance().quailtyArr.push(4),
                        this.huishouByQualityGroup.visible = !1,
                        this.setHuiShouPage();
                    break;
                case this.btnSellByQualityBtn:
                    this.huishouByQualityGroup.visible = !0,
                        this.ck1.selected = !1,
                        this.ck2.selected = !1,
                        this.ck3.selected = !1,
                        this.ck4.selected = !1;
                    break;
                case this.btnSellBtn:
                    this.setPos(),
                        null != PartsManager.getInstance().reductionPartsIds && PartsManager.getInstance().reductionPartsIds.length > 0 ? RetiredAlert.getInstance().showPartsHuiShou() : Toast.launch("请至少选中1个配件!");
                    break;
                case this.btnReturn:
                    this.pos = 0,
                        this.huishouGroup.visible = !1,
                        this.btnReturn.visible = !1,
                        this.btnChangeToSell.visible = !0,
                        MainUI.instance.setBottomVisible(!0),
                        this.tabContainer.visible = !0,
                        0 == this.currPage ? this.setPeiJianPage() : 1 == this.currPage && this.setHuanYuanPage(),
                        this.huishouByQualityGroup.visible = !1;
                    break;
                case this.btnChangeToSell:
                    this.pos = 0,
                        this.huishouGroup.visible = !0,
                        this.btnReturn.visible = !0,
                        this.tabContainer.visible = !1,
                        this.btnChangeToSell.visible = !1,
                        MainUI.instance.setBottomVisible(!1),
                        PartsManager.getInstance().quailtyArr = [],
                        PartsManager.getInstance().reductionPartsIds = [],
                        this.setHuiShouPage(),
                        PartsManager.getInstance().resetHuishouNum();
                    break;
                case this.btnClose:
                    WindowManager.getInstance().hide(WindowManager.windowType.PeiJian)
            }
        },
        i.gotoSell = function() {
            this.btnChangeToSell ? this.btnChangeToSell.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP)) : this.opensell = !0
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("parts"),
                e.push("shipData"),
                e.push("partsUpgradeData"),
                e.push("partspieces"),
                ConfigData.preLoadDats(e, [PartsParser, ShipdataParser, PartsupgradedataParser, PartspiecesParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                this.btnChangeToSell.icon.source = Path.panelUrl + "juesexinxi_kejidian.png",
                this.huishouByQualityGroup.visible = !1,
                this.scroller.viewport = this.list,
                this.pos = 0;
            for (var t = ["配件", "还原"], e = 0; e < t.length; e++) {
                var a = new eui.Button;
                a.skinName = "resource/eui_skins/components/tabSkin.exml"
                    /*tpa=resource/eui_skins/components/tabSkin.exml*/
                    ,
                    a.x = 120 * e,
                    a.index = e,
                    a.label = t[e],
                    this.tabContainer.addChild(a),
                    a.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                    a.currentState = "up",
                    0 == e && a.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
            }
            this.getHuanYuanPageList(),
                this.opensell && this.btnChangeToSell.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
        },
        i.onTabBarItemTap = function(t) {
            this.pos = 0;
            var e = t.currentTarget;
            e.currentState = "down",
                this.lastTab && this.lastTab != e && (this.lastTab.currentState = "up"),
                this.lastTab = e,
                0 == e.index ? (this.currPage = 0, this.setPeiJianPage()) : (this.currPage = 1, this.setHuanYuanPage())
        },
        i.setPeiJianPage = function() {
            var t = this.getPeiJianPageList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = partsFactoryListItem,
                this.countLabel.text = "数量:" + (t.length - 1),
                this.countGroup.visible = !0,
                this.txtEmpty.visible = !1,
                this.moveScroller(this.pos)
        },
        i.setHuanYuanPage = function() {
            var t = this.getHuanYuanPageList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = partsReduceFactoryListItem,
                this.countLabel.text = "数量:" + (t.length - 1),
                this.countGroup.visible = !0,
                0 == t.length ? this.txtEmpty.visible = !0 : this.txtEmpty.visible = !1,
                this.moveScroller(this.pos)
        },
        i.setHuiShouPage = function() {
            this.dsListParts = this.getHuiShouPageList(),
                this.list.dataProvider = new eui.ArrayCollection(this.dsListParts),
                this.list.itemRenderer = partsSellListItem,
                this.txtEmpty.visible = !1,
                this.countGroup.visible = !1,
                this.moveScroller(this.pos)
        },
        i.setHuiShouNum = function(t) {
            this.sellCountLabel.text = "已选数量:" + t + "/" + (this.dsListParts.length - 1)
        },
        i.getHuiShouPageList = function() {
            this.dsListParts = [];
            for (var t = ShipManager.getInstance().partsList, e = 0, a = 0; a < t.length; a++) {
                var i = t[a];
                if (0 == i.islocked) {
                    var n = {};
                    n.data = i,
                        n.id = i.id,
                        n.partsid = i.partsid,
                        n.point = i.point,
                        n.remouldlevel = i.remouldlevel,
                        n.upgradelevel = i.upgradelevel,
                        n.upgradelevelInfo = "等级:" + i.upgradelevel + "/" + 3 * UserData.getInstance().getPlayerLevel(),
                        n.upgradegold = i.upgradegold,
                        n.islocked = i.islocked;
                    var s = PartsParser.GetInstance().getItemById(i.partsid);
                    n.type = s.type,
                        n.typeName = this.setTypeName(s.type),
                        n.pic = PartsManager.getInstance().getPartsPicById(s.icon),
                        n.name = s.name_l,
                        0 == n.remouldlevel ? n.nameInfo = n.name : n.nameInfo = n.name + " +" + n.remouldlevel,
                        n.quality = s.quality,
                        n.color = this.setColor(n.quality),
                        n.qualityInfo = "品质:" + s.quality,
                        n.basicValue = s.basicValue,
                        n.upgradeType = BuffData.getBuffNameById(s.upgradeType),
                        n.upgradeValue = Math.floor(Number(s.basicValue) + (Number(i.upgradelevel) - 1) * Number(s.upgradeValue)),
                        n.upgradeInfo = n.upgradeType + ":" + n.upgradeValue,
                        n.remouldType = BuffData.getBuffNameById(s.remouldType),
                        n.remouldValue = this.getPercentage(i.remouldlevel, s.remouldValue),
                        n.remouldInfo = n.remouldType + " +" + n.remouldValue,
                        n.isSelected = !1;
                    var r = Utils.getListByKeyValue("partslist", n.id, ShipManager.getInstance().soldierList);
                    if (r.length > 0);
                    else {
                        if (null != PartsManager.getInstance().quailtyArr)
                            for (var o = 0; o < PartsManager.getInstance().quailtyArr.length; o++)
                                if (Number(n.quality) == PartsManager.getInstance().quailtyArr[o]) {
                                    n.isSelected = !0,
                                        PartsManager.getInstance().reductionPartsIds.push(n.id),
                                        e += 1;
                                    break
                                }
                        this.dsListParts.push(n)
                    }
                }
            }
            if (this.dsListParts.sort(function(t, e) {
                    return e.quality != t.quality ? e.quality - t.quality : Number(e.partsid) - Number(t.partsid)
                }), !GameData.skipShipGuide) {
                var n = {};
                n.id = -1,
                    n.lastOne = !0,
                    this.dsListParts.push(n)
            }
            return PartsManager.getInstance().setHuishouTxtNum(e),
                this.dsListParts
        },
        i.getPeiJianPageList = function() {
            for (var t = [], e = ShipManager.getInstance().partsList, a = !1, i = 0; i < e.length; i++) {
                var n = e[i],
                    s = {};
                s.id = n.id,
                    s.data = n,
                    s.partsid = n.partsid,
                    s.point = n.point,
                    s.remouldlevel = n.remouldlevel,
                    s.upgradelevel = n.upgradelevel,
                    s.upgradelevelInfo = n.upgradelevel + "级",
                    s.upgradegold = n.upgradegold,
                    s.islocked = n.islocked;
                var r = PartsParser.GetInstance().getItemById(n.partsid);
                s.type = r.type,
                    s.typeName = this.setTypeName(r.type),
                    s.pic = PartsManager.getInstance().getPartsPicById(r.icon),
                    s.name = r.name_l,
                    0 == s.remouldlevel ? s.nameInfo = s.name : s.nameInfo = s.name + " +" + s.remouldlevel,
                    s.quality = r.quality,
                    s.color = this.setColor(s.quality),
                    s.qualityInfo = "品质:" + r.quality,
                    s.basicValue = r.basicValue,
                    s.upgradeType = BuffData.getBuffNameById(r.upgradeType),
                    s.upgradeValue = Math.floor(Number(r.basicValue) + (Number(n.upgradelevel) - 1) * Number(r.upgradeValue)),
                    s.upgradeInfo = s.upgradeType + ":" + s.upgradeValue,
                    s.remouldType = BuffData.getBuffNameById(r.remouldType),
                    s.remouldValue = this.getPercentage(n.remouldlevel, r.remouldValue),
                    s.remouldInfo = s.remouldType + " +" + s.remouldValue;
                var o = ShipManager.getInstance().isPartEquiped(s.id);
                if (void 0 == o || null == o) s.euqipedShip = "",
                    s.euqipedShipColor = 16711680;
                else
                    for (var l = 0; l < ShipManager.getInstance().shipList.length; l++)
                        if (o == ShipManager.getInstance().shipList[l].id) {
                            s.euqipedShip = ShipManager.getInstance().getShipNameByType(ShipManager.getInstance().shipList[l].shipid);
                            var h = ShipdataParser.GetInstance().getItemById(ShipManager.getInstance().shipList[l].shipid).quality;
                            s.euqipedShipColor = QualitySystem.getColorByQuality(h);
                            break
                        }
                s.isShowRedPoint = !1,
                    t.push(s)
            }
            if (t.sort(function(t, e) {
                    return "" == t.euqipedShip && "" == e.euqipedShip ? e.quality != t.quality ? e.quality - t.quality : Number(e.partsid) - Number(t.partsid) : "" != t.euqipedShip && "" != e.euqipedShip ? e.quality != t.quality ? e.quality - t.quality : Number(e.partsid) - Number(t.partsid) : "" != t.euqipedShip && "" == e.euqipedShip ? -1 : "" == t.euqipedShip && "" != e.euqipedShip ? 1 : void 0
                }), !GameData.skipShipGuide) {
                var s = {};
                s.id = -1,
                    s.lastOne = !0,
                    t.push(s)
            }
            if (this.tabContainer.numChildren > 0) {
                var c = this.tabContainer.getChildAt(0);
                c.redPoint.visible = a
            }
            return t
        },
        i.getHuanYuanPageList = function() {
            for (var t = [], e = ShipManager.getInstance().partsList, a = 0; a < e.length; a++) {
                var i = e[a];
                if (0 == i.islocked && (i.remouldlevel > 0 || i.upgradelevel > 1)) {
                    var n = {};
                    n.data = i,
                        n.id = i.id,
                        n.partsid = i.partsid,
                        n.point = i.point,
                        n.remouldlevel = i.remouldlevel,
                        n.upgradelevel = i.upgradelevel,
                        n.upgradelevelInfo = i.upgradelevel + "级",
                        n.upgradegold = i.upgradegold,
                        n.islocked = i.islocked;
                    var s = PartsParser.GetInstance().getItemById(i.partsid);
                    n.type = s.type,
                        n.typeName = this.setTypeName(s.type),
                        n.pic = PartsManager.getInstance().getPartsPicById(s.icon),
                        n.name = s.name_l,
                        0 == n.remouldlevel ? n.nameInfo = n.name : n.nameInfo = n.name + " +" + n.remouldlevel,
                        n.quality = s.quality,
                        n.color = this.setColor(n.quality),
                        n.qualityInfo = "品质:" + s.quality,
                        n.basicValue = s.basicValue,
                        n.upgradeType = BuffData.getBuffNameById(s.upgradeType),
                        n.upgradeValue = Math.floor(Number(s.basicValue) + (Number(i.upgradelevel) - 1) * Number(s.upgradeValue)),
                        n.upgradeInfo = n.upgradeType + ":" + n.upgradeValue,
                        n.remouldType = BuffData.getBuffNameById(s.remouldType),
                        n.remouldValue = this.getPercentage(i.remouldlevel, s.remouldValue),
                        n.remouldInfo = n.remouldType + " +" + n.remouldValue,
                        n.needCash = 50;
                    var r = Utils.getListByKeyValue("partslist", n.id, ShipManager.getInstance().soldierList);
                    r.length > 0 || t.push(n)
                }
            }
            if (t.sort(function(t, e) {
                    return e.quality != t.quality ? e.quality - t.quality : Number(e.partsid) - Number(t.partsid)
                }), !GameData.skipShipGuide) {
                var n = {};
                n.id = -1,
                    n.lastOne = !0,
                    t.push(n)
            }
            var o = this.tabContainer.getChildAt(1);
            return null != t && t.length > 1 ? o.redPoint.visible = !0 : o.redPoint.visible = !1,
                t
        },
        i.getPercentage = function(t, e) {
            return 0 == t ? "0%" : (t >= e.length && (t = e.length - 1), Number(e[t]) / 100 + "%")
        },
        i.setColor = function(t) {
            return "1" == t ? "0xF6F8E6" : "2" == t ? "0x5CED2F" : "3" == t ? "0x35B0FE" : "4" == t ? "0x8E55FF" : "5" == t ? "0xFF8033" : "6" == t ? "0XF42B0B" : void 0
        },
        i.setTypeName = function(t) {
            return "1" == t ? "武器" : "2" == t ? "雷达" : "3" == t ? "装甲" : "4" == t ? "轮机" : void 0
        },
        i.refreshPartsByUpgrade = function(t) {
            0 == t.res && this.refreshPartsPage()
        },
        i.refreshPartsPage = function() {
            this.setPos(),
                this.setPeiJianPage(),
                this.getHuanYuanPageList()
        },
        i.refreshPartsByReduction = function(t) {
            0 == t.sucess ? this.refreshReducePage() : Toast.launch("还原配件失败")
        },
        i.refreshReducePage = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.Parts_List_Refresh, this.refreshReducePage, this),
                this.setHuanYuanPage()
        },
        i.refreshPartsByDecompose = function(t) {
            0 == t.res ? GameEventDispatcher.getInstance().addEventListener(GameEvent.Parts_List_Refresh, this.refreshHuishouPage, this) : 1 == t.res ? Toast.launch("非法id") : 2 == t.res && Toast.launch("金币不足")
        },
        i.refreshHuishouPage = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.Parts_List_Refresh, this.refreshHuishouPage, this),
                this.setHuiShouPage()
        },
        i.setPos = function() {
            this.pos = this.scroller.viewport.scrollV
        },
        i.moveScroller = function(t) {
            this.scroller.viewport.validateNow(),
                this.scroller.viewport.scrollV = t
        },
        e
}(WindowBase);
