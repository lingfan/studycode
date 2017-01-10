
var WindowShipFactory = function(t) {
    function e() {
        t.call(this, !1),
            this.canSellPaperNum = 0,
            this.normalPiece = 0,
            this.highPiece = 0,
            this.pos = 0,
            this.pos2 = 0,
            this.skinName = "resource/eui_skins/ShipbuildingSkin.exml"
            /*tpa=resource/eui_skins/ShipbuildingSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            ConfigData.preLoadList(["paperSaleData"],
                    function() {
                        t.initUI()
                    }),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnSellAll.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnSell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.secOKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.secCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.secCancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                (5 == GuideManager.step || 21 == GuideManager.step) && GuideManager.nextStep()
        },
        i.OnClickBtnClose = function(t) {
            var e = this;
            switch (t.currentTarget) {
                case this.btnClose:
                    MainUI.instance.changeTopMode(topUIMode.normal),
                        MainUI.instance.changeTopMode(topUIMode.normal),
                        this.close();
                    break;
                case this.btnSellAll:
                    this.huishouByQualityGroup.visible = !0,
                        this.ck1.selected = !1,
                        this.ck2.selected = !1,
                        this.ck3.selected = !1,
                        this.ck4.selected = !1,
                        this.ck5.selected = !1;
                    break;
                case this.btnSell:
                    this.setPos2();
                    for (var a = !1,
                            i = [], n = this.paperContainer.dataProvider, s = 0; s < n.length; s++) n.getItemAt(s).selectCount1 > 0 && (i.push(new PaperData(n.getItemAt(s)[1].id, n.getItemAt(s).selectCount1, !1)), 5 == n.getItemAt(s)[1].quality && (a = !0)),
                        n.getItemAt(s).selectCount2 > 0 && (i.push(new PaperData(n.getItemAt(s)[2].id, n.getItemAt(s).selectCount2, !1)), 5 == n.getItemAt(s)[2].quality && (a = !0));
                    a ? GameAlert.getInstance().show("提示", "指挥官,您想要分解的图纸中有橙色图纸,是否要继续分解?",
                        function() {
                            e.sendSalePaper(i),
                                GameAlert.getInstance().hide()
                        }) : this.sendSalePaper(i);
                    break;
                case this.secCloseBtn:
                    this.huishouByQualityGroup.visible = !1;
                    break;
                case this.secOKBtn:
                    ShipManager.getInstance().quailtyArr = [],
                        this.ck1.selected && ShipManager.getInstance().quailtyArr.push(1),
                        this.ck2.selected && ShipManager.getInstance().quailtyArr.push(2),
                        this.ck3.selected && ShipManager.getInstance().quailtyArr.push(3),
                        this.ck4.selected && ShipManager.getInstance().quailtyArr.push(4),
                        this.ck5.selected && ShipManager.getInstance().quailtyArr.push(5),
                        this.huishouByQualityGroup.visible = !1,
                        this.showSellPaperPanel();
                    break;
                case this.secCancelBtn:
                    this.huishouByQualityGroup.visible = !1
            }
        },
        i.sendSalePaper = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceSalePaper);
            e.paperlist = t,
                Transport.instance.send(e)
        },
        i.handleSalePaper = function(t) {
            0 == t.res && Toast.launch("获得高级万能图纸" + this.highPiece + "张,普通万能图纸" + this.normalPiece + "张")
        },
        i.initUI = function() {
            MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                this.scroller.viewport = this.list,
                this.pos = 0,
                this.pos2 = 0,
                this.sellScroller.viewport = this.paperContainer;
            for (var t = [Locales.get("panel_shipyard_shipbuild_btn_building_name_1"), Locales.get("panel_paper_txt_changepanel_title_2")], e = 0; e < t.length; e++) {
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
            this.huishoutuzhi.visible = !1,
                this.groupBuildShip.visible = !0,
                this.btnChangeToSell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnChangeToSellClick, this),
                this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showBuildPanel, this),
                this.btnSellAll.label = "按品质回收",
                this.btnSell.label = "回收",
                this.setRedPoint2(),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.PaperDataUpdate, this.update, this)
        },
        i.onTabBarItemTap = function(t) {
            this.pos = 0;
            var e = t.currentTarget;
            e.currentState = "down",
                this.lastTab && this.lastTab != e && (this.lastTab.currentState = "up"),
                this.lastTab = e,
                0 == e.index ? this.setPaperPage() : this.setPiecePage()
        },
        i.update = function() {
            this.huishoutuzhi.visible ? this.showSellPaperPanel() : (this.setPos(), 0 == this.lastTab.index ? this.setPaperPage() : this.setPiecePage())
        },
        i.showBuildPanel = function() {
            MainUI.instance.setBottomVisible(!0),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                this.huishoutuzhi.visible = !1,
                this.groupBuildShip.visible = !0,
                this.huishouByQualityGroup.visible = !1,
                ShipManager.getInstance().quailtyArr = [],
                this.setPaperPage()
        },
        i.btnChangeToSellClick = function() {
            ShipManager.getInstance().quailtyArr.push(1),
                ShipManager.getInstance().quailtyArr.push(2),
                this.pos2 = 0,
                this.showSellPaperPanel()
        },
        i.showSellPaperPanel = function() {
            MainUI.instance.setBottomVisible(!1),
                MainUI.instance.changeTopMode(topUIMode["null"]),
                this.huishoutuzhi.visible = !0,
                this.groupBuildShip.visible = !1;
            var t = this.getSellPaperList();
            this.paperContainer.dataProvider = new eui.ArrayCollection(t),
                this.paperContainer.itemRenderer = ShipFactoryPaperItem,
                this.moveScroller2(this.pos2),
                this.updateSellPanel()
        },
        i.setPiecePage = function() {
            var t = this.getPaperPeiceList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = shipFactoryComposeItem,
                this.moveScroller(this.pos)
        },
        i.setPaperPage = function() {
            var t = this.getPaperList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = shipFactoryListItem,
                this.moveScroller(this.pos)
        },
        i.getPaperList = function() {
            for (var t = [], e = ShipManager.getInstance().papers, a = !1, i = !1, n = 0; n < e.length; n++) {
                var s = e[n],
                    r = ShipManager.getInstance().paperCfg[s.id],
                    o = {};
                o.id = s.id,
                    o.shipid = r.shipId,
                    o.isLock = s.islock,
                    o.icon = ShipManager.getInstance().getShipPicByType(r.shipId),
                    o.typeIcon = ShipManager.getInstance().getShipTypeIcon(r.shipType),
                    o.quality = Locales.get("labelQuality", r.quality),
                    o.qualityNum = r.quality,
                    o.qualityNum <= 2 && (a = !0),
                    o.qualityBg = QualitySystem.getShipSmallBack(r.quality),
                    o.num = Locales.get("labelOwnPaper", s.count.toString()),
                    o.shipName = ShipManager.getInstance().getShipNameByType(r.shipId),
                    o.own = ShipManager.getInstance().getShipByType(r.shipId),
                    void 0 == o.own && o.qualityNum >= 4 && (i = !0),
                    t.push(o)
            }
            if (t.sort(function(t, e) {
                    if (66 == GuideManager.step) {
                        if (105 == t.id) return -1;
                        if (105 == e.id) return 1
                    } else {
                        if (void 0 == t.own && void 0 == e.own) return e.qualityNum != t.qualityNum ? e.qualityNum - t.qualityNum : Number(e.id) - Number(t.id);
                        if (void 0 != t.own && void 0 != e.own) return e.qualityNum != t.qualityNum ? e.qualityNum - t.qualityNum : Number(e.id) - Number(t.id);
                        if (void 0 != t.own && void 0 == e.own) return -1;
                        if (void 0 == t.own && void 0 != e.own) return 1
                    }
                    return 1
                }), !GameData.skipShipGuide) {
                var o = {};
                o.id = -1,
                    o.lastOne = !0,
                    t.push(o)
            }
            this.redPoint.visible = a;
            var l = this.tabContainer.getChildAt(0);
            return l.redPoint.visible = i,
                t
        },
        i.getSellPaperList = function() {
            for (var t = [], e = [], a = ShipManager.getInstance().papers, i = 0, n = 0; n < a.length; n++) {
                var s = a[n];
                if (0 == s.islock) {
                    var r = ShipManager.getInstance().paperCfg[s.id],
                        o = {};
                    o.id = s.id,
                        o.icon = ShipManager.getInstance().getShipPicByType(r.shipId),
                        o.typeIcon = ShipManager.getInstance().getShipTypeIcon(r.shipType),
                        o.quality = r.quality,
                        o.qualityBg = QualitySystem.getPaperBack(r.quality),
                        o.num = s.count,
                        i += o.num,
                        o.shipName = ShipManager.getInstance().getShipNameByType(r.shipId),
                        o.own = ShipManager.getInstance().getShipByType(r.shipId),
                        o.isSelected = !1;
                    for (var l = 0; l < ShipManager.getInstance().quailtyArr.length; l++)
                        if (Number(o.quality) == ShipManager.getInstance().quailtyArr[l]) {
                            o.isSelected = !0;
                            break
                        }
                    t.push(o)
                }
            }
            t.sort(function(t, e) {
                    return void 0 == t.own && void 0 == e.own ? e.quality != t.quality ? e.quality - t.quality : Number(e.id) - Number(t.id) : void 0 != t.own && void 0 != e.own ? e.quality != t.quality ? e.quality - t.quality : Number(e.id) - Number(t.id) : void 0 != t.own && void 0 == e.own ? -1 : void 0 == t.own && void 0 != e.own ? 1 : void 0
                }),
                this.canSellPaperNum = i;
            for (var h = 0; h < t.length; h++) {
                var o = {};
                o[1] = t[h],
                    o.length = 1,
                    t[h].isSelected && (o.selectCount1 = t[h].num),
                    h + 1 < t.length && (h++, o[2] = t[h], o.length = 2, t[h].isSelected && (o.selectCount2 = t[h].num)),
                    e.push(o)
            }
            return e
        },
        i.setRedPoint2 = function() {
            for (var t = [], e = ShipManager.getInstance().paperPieces, a = 0; a < e.length; a++) {
                var i = e[a],
                    n = ShipManager.getInstance().paperPieceCfg[i.id],
                    s = ShipManager.getInstance().paperCfg[n.paperId],
                    r = {};
                r.id = i.id,
                    r.icon = ShipManager.getInstance().getShipPicByType(s.shipId),
                    r.typeIcon = ShipManager.getInstance().getShipTypeIcon(s.shipType),
                    r.quality = Locales.get("labelQuality", s.quality),
                    r.qualityNum = s.quality,
                    r.qualityBg = QualitySystem.getPaperBack(s.quality),
                    r.progress = Locales.get("labelProgress", i.count, s.pieceCount),
                    i.count >= s.pieceCount ? r.complete = !0 : r.complete = !1,
                    r.shipName = ShipManager.getInstance().getShipNameByType(s.shipId),
                    r.shipid = s.shipId,
                    r.own = ShipManager.getInstance().getShipByType(s.shipId),
                    t.push(r)
            }
            var o = this.tabContainer.getChildAt(1);
            if (o.redPoint.visible = !1, null != t && t.length > 0)
                for (var l = 0; l < t.length; l++)
                    if (t[l].complete) {
                        o.redPoint.visible = !0;
                        break
                    }
        },
        i.getPaperPeiceList = function() {
            for (var t = [], e = ShipManager.getInstance().paperPieces, a = 0; a < e.length; a++) {
                var i = e[a],
                    n = ShipManager.getInstance().paperPieceCfg[i.id],
                    s = ShipManager.getInstance().paperCfg[n.paperId],
                    r = {};
                r.id = i.id,
                    r.icon = ShipManager.getInstance().getShipPicByType(s.shipId),
                    r.typeIcon = ShipManager.getInstance().getShipTypeIcon(s.shipType),
                    r.quality = Locales.get("labelQuality", s.quality),
                    r.qualityNum = s.quality,
                    r.qualityBg = QualitySystem.getPaperBack(s.quality),
                    r.progress = Locales.get("labelProgress", i.count, s.pieceCount),
                    i.count >= s.pieceCount ? r.complete = !0 : r.complete = !1,
                    r.shipName = ShipManager.getInstance().getShipNameByType(s.shipId),
                    r.shipid = s.shipId,
                    r.own = ShipManager.getInstance().getShipByType(s.shipId),
                    t.push(r)
            }
            t.sort(function(t, e) {
                return 0 == t.complete && 0 == e.complete ? e.qualityNum != t.qualityNum ? e.qualityNum - t.qualityNum : Number(e.id) - Number(t.id) : 1 == t.complete && 1 == e.complete ? e.qualityNum != t.qualityNum ? e.qualityNum - t.qualityNum : Number(e.id) - Number(t.id) : 1 == t.complete && 0 == e.complete ? -1 : 0 == t.complete && 1 == e.complete ? 1 : void 0
            });
            var o = this.tabContainer.getChildAt(1);
            if (o.redPoint.visible = !1, null != t && t.length > 0)
                for (var l = 0; l < t.length; l++)
                    if (t[l].complete) {
                        o.redPoint.visible = !0;
                        break
                    }
            return t
        },
        i.updateSellPanel = function() {
            for (var t = this.paperContainer.dataProvider,
                    e = new Array,
                    a = 0; a < t.length; a++) t.getItemAt(a).selectCount1 > 0 && e.push({
                    id: t.getItemAt(a)[1].id,
                    count: t.getItemAt(a).selectCount1,
                    quality: t.getItemAt(a)[1].quality
                }),
                t.getItemAt(a).selectCount2 > 0 && e.push({
                    id: t.getItemAt(a)[2].id,
                    count: t.getItemAt(a).selectCount2,
                    quality: t.getItemAt(a)[2].quality
                });
            var i = 0;
            this.normalPiece = 0,
                this.highPiece = 0;
            for (var a = 0; a < e.length; a++) {
                i += e[a].count;
                var n = ConfigData.getDataByKey("paperSaleData", e[a].quality);
                n && (1 == n.type ? this.normalPiece += +n.count * e[a].count : this.highPiece += +n.count * e[a].count)
            }
            this.txtNum1.text = this.highPiece.toString(),
                this.txtNum2.text = this.normalPiece.toString(),
                this.txtSelected.text = Locales.get("selectNum", i.toString(), this.canSellPaperNum.toString())
        },
        i.clear = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.PaperDataUpdate, this.update, this),
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnSellAll.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnSell.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.secOKBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.secCloseBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.secCancelBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this)
        },
        i.setPos = function() {
            this.pos = this.scroller.viewport.scrollV
        },
        i.moveScroller = function(t) {
            this.scroller.viewport.validateNow(),
                this.scroller.viewport.scrollV = t
        },
        i.setPos2 = function() {
            this.pos2 = this.sellScroller.viewport.scrollV
        },
        i.moveScroller2 = function(t) {
            this.sellScroller.viewport.validateNow(),
                this.sellScroller.viewport.scrollV = t
        },
        e
}(WindowBase);
