
var WindowSoul = function(t) {
    function e() {
        t.call(this, !1),
            this.currPage = 0,
            this.dsListParts = [],
            this.pos = 0,
            this.skinName = "resource/eui_skins/zhuye_PeijianSkin.exml"
            /*tpa=resource/eui_skins/zhuye_PeijianSkin.exml*/
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
        i.gotoSell = function() {
            this.btnChangeToSell.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
        },
        i.clear = function() {
            WindowManager.getInstance().getWindow(WindowManager.windowType.ShipArrange) && MainUI.instance.changeTopMode(topUIMode["null"]),
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
        i.onRefreshSoulsData = function() {
            1 == this.huishouGroup.visible ? this.setHuiShouPage() : (this.setPos(), this.setSoulPage(), this.getHuanYuanPageList())
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
                    this.huishouByQualityGroup.visible = !1,
                        this.setCheckBoxState(!0);
                    break;
                case this.secCancelBtn:
                    this.huishouByQualityGroup.visible = !1,
                        this.setCheckBoxState(!0);
                    break;
                case this.secOKBtn:
                    SoulManager.getInstance().quailtyArr = [],
                        SoulManager.getInstance().reductionSoulsIds = [],
                        this.ck4.selected && SoulManager.getInstance().quailtyArr.push(4),
                        this.huishouByQualityGroup.visible = !1,
                        this.setCheckBoxState(!0),
                        this.setHuiShouPage();
                    break;
                case this.btnSellByQualityBtn:
                    this.huishouByQualityGroup.visible = !0,
                        this.ck1.selected = !1,
                        this.ck2.selected = !1,
                        this.ck3.selected = !1,
                        this.ck4.selected = !1,
                        this.setCheckBoxState(!1);
                    break;
                case this.btnSellBtn:
                    this.setPos(),
                        null != SoulManager.getInstance().reductionSoulsIds && SoulManager.getInstance().reductionSoulsIds.length > 0 ? RetiredAlert.getInstance().showSoulHuiShou() : Toast.launch("请至少选中1个勋章!");
                    break;
                case this.btnReturn:
                    this.pos = 0,
                        this.huishouGroup.visible = !1,
                        this.btnReturn.visible = !1,
                        this.btnChangeToSell.visible = !0,
                        MainUI.instance.setBottomVisible(!0),
                        this.tabContainer.visible = !0,
                        0 == this.currPage ? this.setSoulPage() : 1 == this.currPage && this.setHuanYuanPage(),
                        this.huishouByQualityGroup.visible = !1,
                        this.setCheckBoxState(!0);
                    break;
                case this.btnChangeToSell:
                    this.pos = 0,
                        this.huishouGroup.visible = !0,
                        this.btnReturn.visible = !0,
                        this.tabContainer.visible = !1,
                        this.btnChangeToSell.visible = !1,
                        MainUI.instance.setBottomVisible(!1),
                        SoulManager.getInstance().quailtyArr = [],
                        SoulManager.getInstance().reductionSoulsIds = [],
                        this.setHuiShouPage(),
                        SoulManager.getInstance().resetHuishouNum();
                    break;
                case this.btnClose:
                    WindowManager.getInstance().hide(WindowManager.windowType.Soul)
            }
        },
        i.setCheckBoxState = function(t) {
            this.ck1.visible = t,
                this.ck2.visible = t,
                this.ck3.visible = t,
                this.tx1.visible = t,
                this.tx2.visible = t,
                this.tx3.visible = t,
                t ? (this.ck4.x = 328, this.ck4.y = 181, this.tx4.x = 388, this.tx4.y = 190, this.txtDes.visible = !1) : (this.ck4.x = this.ck1.x, this.ck4.y = this.ck1.y, this.tx4.x = this.tx1.x, this.tx4.y = this.tx1.y, this.txtDes.visible = !0)
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("medalData"),
                e.push("shipData"),
                e.push("medalexpData"),
                ConfigData.preLoadDats(e, [MedaldataParser, ShipdataParser, MedalexpdataParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            this.pos = 0,
                WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                this.btnSellBtn.label = "分解",
                this.btnSellByQualityBtn.label = "按品质分解",
                this.btnChangeToSell.label = "分解",
                this.btnChangeToSell.icon.source = Path.panelUrl + "juesexinxi_gongxundian.png",
                this.huishouByQualityGroup.visible = !1,
                this.setCheckBoxState(!0),
                this.scroller.viewport = this.list,
                this.pos = 0;
            for (var t = ["勋章", "还原"], e = 0; e < t.length; e++) {
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
            this.getHuanYuanPageList()
        },
        i.onTabBarItemTap = function(t) {
            this.pos = 0;
            var e = t.currentTarget;
            e.currentState = "down",
                this.lastTab && this.lastTab != e && (this.lastTab.currentState = "up"),
                this.lastTab = e,
                0 == e.index ? (this.currPage = 0, this.setSoulPage()) : (this.currPage = 1, this.setHuanYuanPage())
        },
        i.setSoulPage = function() {
            var t = this.getSoulPageList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = soulsFactoryListItem,
                this.countLabel.text = "数量:" + (t.length - 1),
                this.countGroup.visible = !0,
                this.txtEmpty.visible = !1,
                this.moveScroller(this.pos)
        },
        i.setHuanYuanPage = function() {
            var t = this.getHuanYuanPageList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = soulsReduceFactoryListItem,
                this.countLabel.text = "数量:" + (t.length - 1),
                this.countGroup.visible = !0,
                0 == t.length ? this.txtEmpty.visible = !0 : this.txtEmpty.visible = !1,
                this.moveScroller(this.pos)
        },
        i.setHuiShouPage = function() {
            this.dsListParts = this.getHuiShouPageList(),
                this.list.dataProvider = new eui.ArrayCollection(this.dsListParts),
                this.list.itemRenderer = soulsSellListItem,
                this.txtEmpty.visible = !1,
                this.countGroup.visible = !1,
                this.moveScroller(this.pos)
        },
        i.getSoulPageList = function() {
            for (var t = [], e = ShipManager.getInstance().soulList, a = !1, i = 0; i < e.length; i++) {
                var n = e[i],
                    s = {};
                s.id = n.id,
                    s.soulid = n.soulid,
                    s.point = n.point,
                    s.equipedshipid = n.equipedshipid,
                    s.remouldlevel = n.promotelvl,
                    s.promotelvl = n.promotelvl,
                    s.islocked = n.islocked,
                    s.typeName = "勋章";
                var r = MedaldataParser.GetInstance().getItemById(n.soulid);
                s.name = r.name_l,
                    0 == s.remouldlevel ? s.nameInfo = MedaldataParser.GetInstance().getItemById(n.soulid).name_l : s.nameInfo = MedaldataParser.GetInstance().getItemById(n.soulid).name_l + " +" + s.remouldlevel,
                    s.quality = r.quality,
                    s.color = SoulManager.getInstance().setColor(s.quality),
                    s.qualityInfo = "品质:" + r.quality,
                    s.buff = r.buff,
                    s.buffValue = r.buffValue,
                    s.exp = r.exp,
                    s.medalType = r.medalType,
                    "9" == s.medalType ? s.upgradelevelInfo = "1级" : (n.point > 0 ? s.upgradelevel = Utils.getMetalLvByExp(n.point, "exp" + r.exp) : s.upgradelevel = 1, s.upgradelevelInfo = s.upgradelevel + "级"),
                    s.pic = SoulManager.getInstance().getSoulsPicById(r.icon),
                    9 == s.medalType ? (s.upgradeType = "经验", s.upgradeValue = s.exp, s.upgradeInfo = s.upgradeType + ":" + s.upgradeValue, s.remouldType = "", s.remouldValue = "", s.remouldInfo = "") : (s.upgradeType = BuffData.getBuffNameById(r.buff), s.upgradeValue = Math.floor(s.buffValue * s.upgradelevel), s.upgradeInfo = s.upgradeType + ":" + s.upgradeValue, s.remouldType = BuffData.getBuffNameById(r.remouldType), s.remouldValue = SoulManager.getInstance().getPercentage(s.remouldlevel, r.remouldValue), s.remouldInfo = s.remouldType + " +" + s.remouldValue);
                var o = ShipManager.getInstance().isMedalEquiped(s.id);
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
                    return "" == t.euqipedShip && "" == e.euqipedShip ? e.quality != t.quality ? e.quality - t.quality : Number(e.soulid) - Number(t.soulid) : "" != t.euqipedShip && "" != e.euqipedShip ? e.quality != t.quality ? e.quality - t.quality : Number(e.soulid) - Number(t.soulid) : "" != t.euqipedShip && "" == e.euqipedShip ? -1 : "" == t.euqipedShip && "" != e.euqipedShip ? 1 : void 0
                }), !GameData.skipShipGuide) {
                var s = {};
                s.id = -1,
                    s.lastOne = !0,
                    t.push(s)
            }
            var c = this.tabContainer.getChildAt(0);
            return c.redPoint.visible = a,
                t
        },
        i.getHuanYuanPageList = function() {
            for (var t = [], e = ShipManager.getInstance().soulList, a = 0; a < e.length; a++) {
                var i = e[a],
                    n = {};
                n.id = i.id,
                    n.soulid = i.soulid,
                    n.point = i.point,
                    n.equipedshipid = i.equipedshipid,
                    n.remouldlevel = i.promotelvl,
                    n.promotelvl = i.promotelvl,
                    n.islocked = i.islocked,
                    n.typeName = "勋章";
                var s = MedaldataParser.GetInstance().getItemById(i.soulid);
                n.name = s.name_l,
                    0 == n.remouldlevel ? n.nameInfo = MedaldataParser.GetInstance().getItemById(i.soulid).name_l : n.nameInfo = MedaldataParser.GetInstance().getItemById(i.soulid).name_l + " +" + n.remouldlevel,
                    n.quality = s.quality,
                    n.color = SoulManager.getInstance().setColor(n.quality),
                    n.qualityInfo = "品质:" + s.quality,
                    n.buff = s.buff,
                    n.buffValue = s.buffValue,
                    n.exp = s.exp,
                    n.medalType = s.medalType,
                    "9" == n.medalType ? n.upgradelevelInfo = "1级" : (i.point > 0 ? n.upgradelevel = Utils.getMetalLvByExp(i.point, "exp" + s.exp) : n.upgradelevel = 1, n.upgradelevelInfo = n.upgradelevel + "级"),
                    n.pic = SoulManager.getInstance().getSoulsPicById(s.icon),
                    n.upgradeType = BuffData.getBuffNameById(s.buff),
                    n.upgradeValue = Math.floor(n.buffValue * n.upgradelevel),
                    n.upgradeInfo = n.upgradeType + ":" + n.upgradeValue,
                    n.remouldType = BuffData.getBuffNameById(s.remouldType),
                    n.remouldValue = SoulManager.getInstance().getPercentage(n.remouldlevel, s.remouldValue),
                    n.remouldInfo = n.remouldType + " +" + n.remouldValue,
                    n.needCash = 200;
                var r = Utils.getListByKeyValue("soullist", n.id, ShipManager.getInstance().soldierList);
                0 == i.islocked && (i.promotelvl > 0 || n.upgradelevel > 1) && 0 == r.length && t.push(n)
            }
            if (t.sort(function(t, e) {
                    return e.quality != t.quality ? e.quality - t.quality : Number(e.soulid) - Number(t.soulid)
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
        i.getHuiShouPageList = function() {
            this.dsListParts = [];
            for (var t = ShipManager.getInstance().soulList, e = 0, a = 0; a < t.length; a++) {
                var i = t[a],
                    n = {};
                n.id = i.id,
                    n.soulid = i.soulid,
                    n.point = i.point,
                    n.equipedshipid = i.equipedshipid,
                    n.remouldlevel = i.promotelvl,
                    n.promotelvl = i.promotelvl,
                    n.islocked = i.islocked,
                    n.typeName = "勋章";
                var s = MedaldataParser.GetInstance().getItemById(i.soulid);
                n.name = s.name_l,
                    0 == n.remouldlevel ? n.nameInfo = MedaldataParser.GetInstance().getItemById(i.soulid).name_l : n.nameInfo = MedaldataParser.GetInstance().getItemById(i.soulid).name_l + " +" + n.remouldlevel,
                    n.decomposepoints = MedaldataParser.GetInstance().getItemById(i.soulid).decomposepoints,
                    n.remouldCostPoint = MedaldataParser.GetInstance().getItemById(i.soulid).remouldCostPoint,
                    n.quality = s.quality,
                    n.color = SoulManager.getInstance().setColor(n.quality),
                    n.qualityInfo = "品质:" + s.quality,
                    n.buff = s.buff,
                    n.buffValue = s.buffValue,
                    n.exp = s.exp,
                    n.medalType = s.medalType,
                    "9" == n.medalType ? n.upgradelevelInfo = "1级" : (i.point > 0 ? n.upgradelevel = Utils.getMetalLvByExp(i.point, "exp" + s.exp) : n.upgradelevel = 1, n.upgradelevelInfo = n.upgradelevel + "级"),
                    n.pic = SoulManager.getInstance().getSoulsPicById(s.icon),
                    n.upgradeType = BuffData.getBuffNameById(s.buff),
                    n.upgradeValue = Math.floor(n.buffValue * n.upgradelevel),
                    n.upgradeInfo = n.upgradeType + ":" + n.upgradeValue,
                    n.remouldType = BuffData.getBuffNameById(s.remouldType),
                    n.remouldValue = SoulManager.getInstance().getPercentage(n.remouldlevel, s.remouldValue),
                    n.remouldInfo = n.remouldType + " +" + n.remouldValue,
                    n.point = i.point;
                var r = Utils.getListByKeyValue("soullist", n.id, ShipManager.getInstance().soldierList);
                if (n.isSelected = !1, 0 == i.islocked && 0 == r.length) {
                    if (null != SoulManager.getInstance().quailtyArr)
                        for (var o = 0; o < SoulManager.getInstance().quailtyArr.length; o++)
                            if (Number(n.quality) == SoulManager.getInstance().quailtyArr[o]) {
                                n.isSelected = !0,
                                    SoulManager.getInstance().reductionSoulsIds.push(n.id),
                                    e += 1;
                                break
                            }
                            "9" != n.medalType && n.quality >= 4 && this.dsListParts.push(n)
                }
            }
            return this.dsListParts.sort(function(t, e) {
                    return e.quality != t.quality ? e.quality - t.quality : Number(e.soulid) - Number(t.soulid)
                }),
                SoulManager.getInstance().setHuishouTxtNum(e),
                this.dsListParts
        },
        i.setHuiShouNum = function(t) {
            this.sellCountLabel.text = "已选数量:" + t + "/" + this.dsListParts.length
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
