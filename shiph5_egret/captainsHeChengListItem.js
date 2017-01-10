
var WindowCaptain = function(t) {
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
        i.clear = function() {
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
                    CaptainManager.getInstance().quailtyArr = [],
                        CaptainManager.getInstance().reductionCaptainsIds = [],
                        this.ck1.selected && CaptainManager.getInstance().quailtyArr.push(1),
                        this.ck2.selected && CaptainManager.getInstance().quailtyArr.push(2),
                        this.ck3.selected && CaptainManager.getInstance().quailtyArr.push(3),
                        this.ck4.selected && CaptainManager.getInstance().quailtyArr.push(4),
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
                case this.btnReturn:
                    this.pos = 0,
                        this.huishouGroup.visible = !1,
                        this.btnReturn.visible = !1,
                        this.btnChangeToSell.visible = !0,
                        MainUI.instance.setBottomVisible(!0),
                        this.tabContainer.visible = !0,
                        0 == this.currPage ? this.setCaptainPage() : 1 == this.currPage && this.setHeChengPage(),
                        this.huishouByQualityGroup.visible = !1;
                    break;
                case this.btnSellBtn:
                    this.setPos(),
                        null != CaptainManager.getInstance().reductionCaptainsIds && CaptainManager.getInstance().reductionCaptainsIds.length > 0 ? RetiredAlert.getInstance().showCapationHuiShou() : Toast.launch("请至少选中1个舰长!");
                    break;
                case this.btnChangeToSell:
                    this.pos = 0,
                        this.huishouGroup.visible = !0,
                        this.btnReturn.visible = !0,
                        this.tabContainer.visible = !1,
                        this.btnChangeToSell.visible = !1,
                        MainUI.instance.setBottomVisible(!1),
                        CaptainManager.getInstance().quailtyArr = [],
                        CaptainManager.getInstance().reductionCaptainsIds = [],
                        this.setHuiShouPage(),
                        CaptainManager.getInstance().resetHuishouNum();
                    break;
                case this.btnClose:
                    WindowManager.getInstance().hide(WindowManager.windowType.Captain)
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("captainData"),
                e.push("captainPieceData"),
                e.push("shipData"),
                ConfigData.preLoadDats(e, [CaptaindataParser, CaptainpiecedataParser, ShipdataParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                this.btnChangeToSell.icon.source = Path.panelUrl + "gaojijianghun.png",
                this.huishouByQualityGroup.visible = !1,
                this.scroller.viewport = this.list,
                this.pos = 0,
                this.btnChangeToSell.label = "解雇",
                this.btnSellByQualityBtn.label = "按品质解雇",
                this.btnSellBtn.label = "解雇";
            for (var t = ["舰长", "合成"], e = 0; e < t.length; e++) {
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
            this.isCanHeChengRedPoint()
        },
        i.onTabBarItemTap = function(t) {
            this.pos = 0;
            var e = t.currentTarget;
            e.currentState = "down",
                this.lastTab && this.lastTab != e && (this.lastTab.currentState = "up"),
                this.lastTab = e,
                0 == e.index ? (this.currPage = 0, this.setCaptainPage()) : (this.currPage = 1, this.setHeChengPage())
        },
        i.setCaptainPage = function() {
            var t = this.getCaptainPageList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = captainsFactoryListItem,
                this.countLabel.text = "数量:" + (t.length - 1),
                this.countGroup.visible = !0,
                this.txtEmpty.visible = !1,
                this.moveScroller(this.pos)
        },
        i.setHeChengPage = function() {
            var t = this.getHeChengPageList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = captainsHeChengListItem,
                this.countLabel.text = "数量:" + (t.length - 1),
                this.countGroup.visible = !0,
                0 == t.length ? this.txtEmpty.visible = !0 : this.txtEmpty.visible = !1,
                this.moveScroller(this.pos)
        },
        i.setHuiShouPage = function() {
            this.dsListParts = this.getHuiShouPageList(),
                this.list.dataProvider = new eui.ArrayCollection(this.dsListParts),
                this.list.itemRenderer = captainsSellListItem,
                this.txtEmpty.visible = !1,
                this.countGroup.visible = !1,
                this.moveScroller(this.pos)
        },
        i.getCaptainPageList = function() {
            for (var t = [], e = CaptainData.captainlist, a = !1, i = 0; i < e.length; i++) {
                var n = e[i],
                    s = {};
                s.id = n.id,
                    s.upgradelevel = n.upgradelevel,
                    s.promotelevel = n.promotelevel,
                    s.islocked = n.lslocked,
                    n.lslocked ? s.lockedImg = "GUI_Shipbuilding_Icon_locked_png" : s.lockedImg = "GUI_Shipbuilding_Icon_open_png";
                var r = CaptaindataParser.GetInstance().getItemById(n.id);
                s.name = r.name_l + "[" + Locales.get("panel_jianzhang_junxian_" + n.promotelevel) + "]",
                    s.militaryRank = "军衔:" + Locales.get("panel_jianzhang_junxian_" + n.promotelevel),
                    s.pic = CaptainManager.getInstance().getCaptainPicById(r.pictureSmall),
                    s.country = CaptainManager.getInstance().getCountryIconById(r.country),
                    s.quality = r.quality,
                    s.color = CaptainManager.getInstance().setColor(r.quality),
                    s.upgradelevelInfo = n.upgradelevel + "级",
                    s.promoteCostGold = r.promoteCostGold,
                    s.pieceId = r.pieceId;
                for (var o = CaptainData.captainPiecelist,
                        l = 0; l < o.length; l++) {
                    var h = o[l];
                    if (h.id == r.pieceId) {
                        n.promotelevel < 7 ? s.promoteCostCount = "碎片:" + h.count + "/" + CaptainManager.getInstance().getPromoteNumByPromoteLv(n.promotelevel - 1, r.promoteCostSoul) : s.promoteCostCount = "碎片:" + h.count + "/MAX";
                        break
                    }
                }
                var c = ShipManager.getInstance().isCaptainEquiped(s.id);
                if (void 0 == c || null == c) s.euqipedShip = "",
                    s.euqipedShipColor = 16711680;
                else
                    for (var d = 0; d < ShipManager.getInstance().shipList.length; d++)
                        if (c == ShipManager.getInstance().shipList[d].id) {
                            s.euqipedShip = ShipManager.getInstance().getShipNameByType(ShipManager.getInstance().shipList[d].shipid);
                            var g = ShipdataParser.GetInstance().getItemById(ShipManager.getInstance().shipList[d].shipid).quality;
                            s.euqipedShipColor = QualitySystem.getColorByQuality(g);
                            break
                        }
                s.isShowRedPoint = !1,
                    t.push(s)
            }
            if (t.sort(function(t, e) {
                    return "" == t.euqipedShip && "" == e.euqipedShip ? e.quality != t.quality ? e.quality - t.quality : Number(e.id) - Number(t.id) : "" != t.euqipedShip && "" != e.euqipedShip ? e.quality != t.quality ? e.quality - t.quality : Number(e.id) - Number(t.id) : "" != t.euqipedShip && "" == e.euqipedShip ? -1 : "" == t.euqipedShip && "" != e.euqipedShip ? 1 : void 0
                }), !GameData.skipShipGuide) {
                var s = {};
                s.id = -1,
                    s.lastOne = !0,
                    t.push(s)
            }
            var u = this.tabContainer.getChildAt(0);
            return u.redPoint.visible = a,
                t
        },
        i.getHeChengPageList = function() {
            for (var t = [], e = CaptainData.captainPiecelist, a = 0; a < e.length; a++) {
                var i = e[a],
                    n = {};
                n.id = i.id,
                    n.count = i.count;
                var s = CaptainpiecedataParser.GetInstance().getItemById(i.id);
                n.name = s.name_l,
                    n.country = CaptainManager.getInstance().getCountryIconById(s.captainCountry),
                    n.quality = s.quality,
                    n.color = CaptainManager.getInstance().setColor(s.quality),
                    n.captainId = s.captainId;
                var r = CaptaindataParser.GetInstance().getItemById(s.captainId);
                n.pic = CaptainManager.getInstance().getCaptainPicById(r.pictureSmall),
                    n.pieceNum = r.pieceNum,
                    n.count = "碎片:" + n.count + "/" + n.pieceNum,
                    n.isCanHeCheng = !1,
                    n.isShow = !0,
                    i.count >= Number(r.pieceNum) ? (n.isEnoughTxt = "可以合成", n.isEnoughTxtColor = "0x1EBB28", n.isEnoughImg = "resource/assets/Panel/tongyong_lvkuang.png"
                        /*tpa=resource/assets/Panel/tongyong_lvkuang.png*/
                        , n.isCanHeCheng = !0) : (n.isEnoughTxt = "数量不足", n.isEnoughTxtColor = "0xA31217", n.isEnoughImg = "resource/assets/Panel/tongyong_hongkuang.png"
                        /*tpa=resource/assets/Panel/tongyong_hongkuang.png*/
                        , n.isCanHeCheng = !1);
                for (var o = CaptainData.captainlist,
                        l = 0; l < o.length; l++) {
                    var h = o[l];
                    if (h.id == s.captainId) {
                        n.isEnoughTxt = "收集完成",
                            n.isEnoughTxtColor = "0x1EBB28",
                            n.isEnoughImg = "resource/assets/Panel/tongyong_lvkuang.png"
                            /*tpa=resource/assets/Panel/tongyong_lvkuang.png*/
                            ,
                            n.isCanHeCheng = !1,
                            n.isShow = !1;
                        break
                    }
                }
                n.isShow && t.push(n)
            }
            t.sort(function(t, e) {
                return e.quality != t.quality ? e.quality - t.quality : Number(e.id) - Number(t.id)
            });
            var c = this.tabContainer.getChildAt(1);
            if (c.redPoint.visible = !1, null != t && t.length > 0)
                for (var d = 0; d < t.length; d++)
                    if (t[d].isCanHeCheng) {
                        null != t && t.length > 0 ? c.redPoint.visible = !0 : c.redPoint.visible = !1;
                        break
                    }
            if (!GameData.skipShipGuide) {
                var n = {};
                n.id = -1,
                    n.lastOne = !0,
                    t.push(n)
            }
            return t
        },
        i.isCanHeChengRedPoint = function() {
            for (var t = [], e = CaptainData.captainPiecelist, a = 0; a < e.length; a++) {
                var i = e[a],
                    n = {};
                n.id = i.id,
                    n.count = i.count;
                var s = CaptainpiecedataParser.GetInstance().getItemById(i.id);
                n.name = s.name_l,
                    n.country = CaptainManager.getInstance().getCountryIconById(s.captainCountry),
                    n.quality = s.quality,
                    n.color = CaptainManager.getInstance().setColor(s.quality),
                    n.captainId = s.captainId;
                var r = CaptaindataParser.GetInstance().getItemById(s.captainId);
                n.pic = CaptainManager.getInstance().getCaptainPicById(r.pictureSmall),
                    n.pieceNum = r.pieceNum,
                    n.count = "碎片:" + n.count + "/" + n.pieceNum,
                    n.isCanHeCheng = !1,
                    i.count >= Number(r.pieceNum) ? (n.isEnoughTxt = "可以合成", n.isEnoughTxtColor = "0x1EBB28", n.isEnoughImg = "resource/assets/Panel/tongyong_lvkuang.png"
                        /*tpa=resource/assets/Panel/tongyong_lvkuang.png*/
                        , n.isCanHeCheng = !0) : (n.isEnoughTxt = "数量不足", n.isEnoughTxtColor = "0xA31217", n.isEnoughImg = "resource/assets/Panel/tongyong_hongkuang.png"
                        /*tpa=resource/assets/Panel/tongyong_hongkuang.png*/
                    );
                for (var o = CaptainData.captainlist,
                        l = 0; l < o.length; l++) {
                    var h = o[l];
                    if (h.id == s.captainId) {
                        n.isEnoughTxt = "收集完成",
                            n.isEnoughTxtColor = "0x1EBB28",
                            n.isEnoughImg = "resource/assets/Panel/tongyong_lvkuang.png"
                            /*tpa=resource/assets/Panel/tongyong_lvkuang.png*/
                            ,
                            n.isCanHeCheng = !1;
                        break
                    }
                }
                t.push(n)
            }
            var c = this.tabContainer.getChildAt(1);
            if (null != t && t.length > 0) {
                for (var d = 0; d < t.length; d++)
                    if (t[d].isCanHeCheng) {
                        null != t && t.length > 0 ? c.redPoint.visible = !0 : c.redPoint.visible = !1;
                        break
                    }
            } else c.redPoint.visible = !1
        },
        i.getHuiShouPageList = function() {
            this.dsListParts = [];
            for (var t = CaptainData.captainlist,
                    e = 0,
                    a = 0; a < t.length; a++) {
                var i = t[a],
                    n = {};
                n.id = i.id,
                    n.upgradelevel = i.upgradelevel,
                    n.promotelevel = i.promotelevel,
                    n.islocked = i.lslocked;
                var s = CaptaindataParser.GetInstance().getItemById(i.id);
                n.name = s.name_l + "[" + Locales.get("panel_jianzhang_junxian_" + i.promotelevel) + "]",
                    n.militaryRank = "军衔:" + Locales.get("panel_jianzhang_junxian_" + i.promotelevel),
                    n.pic = CaptainManager.getInstance().getCaptainPicById(s.pictureSmall),
                    n.country = CaptainManager.getInstance().getCountryIconById(s.country.toString()),
                    n.quality = s.quality,
                    n.color = CaptainManager.getInstance().setColor(s.quality.toString()),
                    n.upgradelevelInfo = "等级:" + i.upgradelevel,
                    n.turnPiece = s.turnPiece;
                var r = Utils.getListByKeyValue("captainid", n.id, ShipManager.getInstance().soldierList);
                if (n.isSelected = !1, 0 == i.lslocked && 0 == r.length) {
                    if (null != CaptainManager.getInstance().quailtyArr)
                        for (var o = 0; o < CaptainManager.getInstance().quailtyArr.length; o++)
                            if (Number(n.quality) == CaptainManager.getInstance().quailtyArr[o]) {
                                n.isSelected = !0,
                                    CaptainManager.getInstance().reductionCaptainsIds.push(n.id),
                                    e += 1;
                                break
                            }
                    this.dsListParts.push(n)
                }
            }
            if (this.dsListParts.sort(function(t, e) {
                    return e.quality != t.quality ? e.quality - t.quality : Number(e.id) - Number(t.id)
                }), !GameData.skipShipGuide) {
                var n = {};
                n.id = -1,
                    n.lastOne = !0,
                    this.dsListParts.push(n)
            }
            return CaptainManager.getInstance().setHuishouTxtNum(e),
                this.dsListParts
        },
        i.setHuiShouNum = function(t) {
            this.sellCountLabel.text = "已选数量:" + t + "/" + (this.dsListParts.length - 1)
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
