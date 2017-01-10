
var RetiredType;
!
function(t) {
    t[t.NORAMLRETIRED = 0] = "NORAMLRETIRED",
        t[t.STRONGRETIRED = 1] = "STRONGRETIRED"
}(RetiredType || (RetiredType = {}));
var RetiredAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.NORAMLRETIRED_RATE = .8,
            this.STRONGRETIRED_RATE = 1,
            this.currPage = 0,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/ShipSellSkin.exml"
            /*tpa=resource/eui_skins/ShipSellSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getInstance = function() {
            return this._instance || (this._instance = new e),
                this._instance
        },
        i.OnComplete = function() {
            this.__inited = !0,
                this._block || (this._block = new egret.Shape, this._block.graphics.beginFill(0, .5), this._block.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight), this._block.graphics.endFill(), this._block.touchEnabled = !0);
            var t = GameLayer.getInstance().windowLayer.getChildIndex(this);
            egret.log("depth:", t),
                GameLayer.getInstance().windowLayer.addChildAt(this._block, t)
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnSell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.clean = function() {
            this.data = null,
                this.type = null,
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnSell.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    this.hide();
                    break;
                case this.btnSell:
                    0 == this.currPage ? this.type == RetiredType.NORAMLRETIRED ? this.sendRetiredShip(this.data.id, 0) : this.type == RetiredType.STRONGRETIRED && this.sendRetiredShip(this.data.id, 1) : 1 == this.currPage ? (PartsManager.getInstance().sendReductionParts(this.tmpPartId), this.hide()) : 2 == this.currPage ? (PartsManager.getInstance().sendDecomposeParts(PartsManager.getInstance().reductionPartsIds, !1), this.hide()) : 3 == this.currPage ? (SoulManager.getInstance().sendRestoreSoulMessage(this.data.id), this.hide()) : 4 == this.currPage ? (SoulManager.getInstance().sendDecomposeSoulMessage(SoulManager.getInstance().reductionSoulsIds), this.hide()) : 5 == this.currPage && (CaptainManager.getInstance().sendFireCaptainMessage(CaptainManager.getInstance().reductionCaptainsIds), this.hide())
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("shipUpgrade"),
                e.push("item"),
                e.push("trainData"),
                e.push("shipData"),
                e.push("paperSaleData"),
                e.push("paperData"),
                e.push("part"),
                e.push("medalData"),
                e.push("medalexpData"),
                e.push("captainRetireData"),
                e.push("captainUpgradeData"),
                e.push("captainPieceData"),
                ConfigData.preLoadDats(e, [ShipupgradeParser, ItemParser, TraindataParser, ShipdataParser, PapersaledataParser, PaperdataParser, PartsParser, MedaldataParser, MedalexpdataParser, CaptainretiredataParser, CaptainupgradedataParser, CaptainpiecedataParser],
                    function() {
                        t()
                    })
        },
        i.showCapationHuiShou = function() {
            var t = this;
            this.currPage = 5,
                this.btnSell.label = "确定",
                this.btnSell.skinName = "anniu_hongSkin",
                this.txtTitle.text = "确认解雇",
                this.imgCostIcon.visible = !1,
                this.txtCostNum.visible = !1,
                this.scroller.viewport = this.list,
                this.init(),
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        t.setCapationsHuiShouListData()
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.setCapationsHuiShouListData = function() {
            var t = this.getCapationsHuiShouList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = retiredFactoryListItem
        },
        i.getCapationsHuiShouList = function() {
            for (var t = [], e = WindowManager.getInstance().getWindow(WindowManager.windowType.Captain), a = 0, i = 0, n = 0, s = 0; s < e.dsListParts.length; s++)
                for (var r = 0; r < CaptainManager.getInstance().reductionCaptainsIds.length; r++)
                    if (e.dsListParts[s].id == CaptainManager.getInstance().reductionCaptainsIds[r]) {
                        for (var o = 0,
                                l = 1; l <= e.dsListParts[s].upgradelevel; l++) o += CaptainupgradedataParser.GetInstance().getItemById(l)["upgradeCost" + e.dsListParts[s].quality];
                        for (var h = 0,
                                c = 0; c < e.dsListParts[s].promotelevel - 1; c++) h += CaptaindataParser.GetInstance().getItemById(e.dsListParts[s].id).promoteCostGold[c];
                        var d = Math.floor(.8 * (o + h));
                        a += d;
                        for (var g = 0,
                                u = 0; u < e.dsListParts[s].promotelevel - 1; u++) g += CaptaindataParser.GetInstance().getItemById(e.dsListParts[s].id).promoteCostSoul[u];
                        for (var p = 0,
                                m = 0; m < CaptainData.captainPiecelist.length; m++) {
                            var _ = CaptainData.captainPiecelist[m],
                                v = CaptainpiecedataParser.GetInstance().getItemById(_.id);
                            if (v.captainId == CaptainManager.getInstance().reductionCaptainsIds[r]) {
                                p = _.count;
                                break
                            }
                        }
                        var f = 0,
                            I = 0,
                            T = CaptainretiredataParser.GetInstance().getItemById(e.dsListParts[s].quality);
                        f = T.count,
                            I = T.type;
                        var y = 0,
                            D = 0;
                        1 == I ? (D += ((g + p) / e.dsListParts[s].turnPiece + 1) * f, D = Math.floor(D)) : (y += ((g + p) / e.dsListParts[s].turnPiece + 1) * f, y = Math.floor(y));
                        for (var P = 1; P <= e.dsListParts[s].upgradelevel; P++) D += CaptainupgradedataParser.GetInstance().getItemById(P)["upgradeCostSoul" + e.dsListParts[s].quality];
                        D *= .8,
                            y *= .8,
                            y = Math.round(y),
                            D = Math.round(D),
                            i += y,
                            n += D
                    }
            if (a > 0) {
                var C = {};
                C.name = "金币",
                    C.count = a,
                    C.icon = Path.itemIconURL + "coin.png",
                    C.quality = 1,
                    t.push(C)
            }
            if (i > 0) {
                var E = {};
                E.name = "高级将魂",
                    E.count = i,
                    E.icon = Path.itemIconURL + "gj_jh_d.png",
                    E.quality = 1,
                    t.push(E)
            }
            if (n > 0) {
                var S = {};
                S.name = "普通将魂",
                    S.count = n,
                    S.icon = Path.itemIconURL + "pt_jh_d.png",
                    S.quality = 1,
                    t.push(S)
            }
            return t
        },
        i.showSoulHuiShou = function() {
            var t = this;
            this.currPage = 4,
                this.btnSell.label = "确定",
                this.btnSell.skinName = "anniu_hongSkin",
                this.txtTitle.text = "确认分解",
                this.imgCostIcon.visible = !1,
                this.txtCostNum.visible = !1,
                this.scroller.viewport = this.list,
                this.init(),
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        t.setSoulsHuiShouListData()
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.setSoulsHuiShouListData = function() {
            var t = this.getSoulsHuiShouList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = retiredFactoryListItem
        },
        i.getSoulsHuiShouList = function() {
            for (var t = [], e = WindowManager.getInstance().getWindow(WindowManager.windowType.Soul), a = 0, i = 0, n = 0; n < e.dsListParts.length; n++)
                for (var s = 0; s < SoulManager.getInstance().reductionSoulsIds.length; s++)
                    if (SoulManager.getInstance().reductionSoulsIds[s] == e.dsListParts[n].id) {
                        var r = e.dsListParts[n];
                        if (-1 == r.id) break;
                        i += r.decomposepoints;
                        for (var o = 0,
                                l = 0; l < r.promotelvl; l++) o += r.remouldCostPoint[l];
                        o *= .8,
                            i += o;
                        var h = 0;
                        h = 2 == r.quality ? MedalexpdataParser.GetInstance().getItemById(1).exp1 : 3 == r.quality ? MedalexpdataParser.GetInstance().getItemById(1).exp2 : 4 == r.quality ? MedalexpdataParser.GetInstance().getItemById(1).exp3 : MedalexpdataParser.GetInstance().getItemById(1).exp4,
                            a += r.exp - h
                    }
            if (i = Math.floor(i), a = Math.floor(.8 * a), i > 0) {
                var c = {};
                c.name = "功勋点数",
                    c.count = i,
                    c.icon = Path.itemIconURL + "gongxunzhi_d.png",
                    c.quality = 1,
                    t.push(c)
            }
            if (a > 0) {
                var d = {};
                d.name = "勋章经验",
                    d.count = a,
                    d.icon = Path.itemIconURL + "Experience-in-diamond-medal_03.png",
                    d.quality = 1,
                    t.push(d)
            }
            return t
        },
        i.showSoulHuanYuan = function(t) {
            var e = this;
            this.currPage = 3,
                this.btnSell.label = "确定",
                this.btnSell.skinName = "anniu_hongSkin",
                this.txtTitle.text = "确认还原",
                this.imgCostIcon.visible = !1,
                this.txtCostNum.visible = !1,
                this.scroller.viewport = this.list,
                this.data = t,
                this.init(),
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        e.setSoulsHuanYuanListData()
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.setSoulsHuanYuanListData = function() {
            var t = this.getSoulsHuanYuanList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = retiredFactoryListItem
        },
        i.getSoulsHuanYuanList = function() {
            var t = [],
                e = {};
            e.name = this.data.name,
                e.count = 1,
                e.icon = this.data.pic,
                e.quality = this.data.quality,
                t.push(e);
            var a = !1;
            a = 0 == this.data.promotelvl ? !1 : !0;
            var i = 0;
            if (a)
                for (var n = MedaldataParser.GetInstance().getItemById(this.data.soulid), s = 0; s < this.data.promotelvl; s++) i += n.remouldCostPoint[s];
            if (i > 0) {
                var r = {};
                r.name = "功勋点数",
                    r.count = i,
                    r.icon = Path.itemIconURL + "gongxunzhi_d.png",
                    r.quality = 1,
                    t.push(r)
            }
            var o = this.data.point;
            if (o > 0) {
                var r = {};
                r.name = "勋章经验",
                    r.count = o,
                    r.icon = Path.itemIconURL + "Experience-in-diamond-medal_03.png",
                    r.quality = 1,
                    t.push(r)
            }
            return t
        },
        i.showPartsHuiShou = function() {
            var t = this;
            this.currPage = 2,
                this.btnSell.label = "确定",
                this.btnSell.skinName = "anniu_hongSkin",
                this.txtTitle.text = "分解",
                this.imgCostIcon.visible = !1,
                this.txtCostNum.visible = !1,
                this.scroller.viewport = this.list,
                this.init(),
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        t.setPartsHuiShouListData()
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.setPartsHuiShouListData = function() {
            var t = this.getPartsHuiShouList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = retiredFactoryListItem
        },
        i.getPartsHuiShouList = function() {
            for (var t = [], e = 0, a = 0, i = ShipManager.getInstance().partsList, n = PartsManager.getInstance().reductionPartsIds, s = 0; s < n.length; s++)
                for (var r = 0; r < i.length; r++)
                    if (n[s] == i[r].id) {
                        e += Math.ceil(i[r].upgradegold * this.NORAMLRETIRED_RATE),
                            a += Math.ceil(i[r].point * this.NORAMLRETIRED_RATE) + PartsParser.GetInstance().getItemById(i[r].partsid).decomposepoints;
                        break
                    }
            var o = {};
            o.name = "金币",
                o.count = e,
                o.icon = Path.itemIconURL + "coin.png",
                o.quality = 1,
                o.count > 0 && t.push(o);
            var l = {};
            return l.name = "科技点数",
                l.count = a,
                l.icon = Path.itemIconURL + "kejidian.png",
                l.quality = 1,
                l.count > 0 && t.push(l),
                t
        },
        i.showParts = function(t, e) {
            var a = this;
            this.currPage = 1,
                this.btnSell.label = "确定",
                this.btnSell.skinName = "anniu_hongSkin",
                this.txtTitle.text = "还原",
                this.imgCostIcon.visible = !1,
                this.txtCostNum.visible = !1,
                this.scroller.viewport = this.list,
                this.init(),
                this.tmpPartId = e,
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        a.setPartsListData(t)
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.setPartsListData = function(t) {
            var e = this.getPartsList(t);
            this.list.dataProvider = new eui.ArrayCollection(e),
                this.list.itemRenderer = retiredFactoryListItem
        },
        i.getPartsList = function(t) {
            var e = [];
            if (t.sucess) {
                var a = {};
                a.name = "金币",
                    a.count = t.cash,
                    a.icon = Path.itemIconURL + "coin.png",
                    a.quality = 1,
                    a.count > 0 && e.push(a);
                var i = {};
                i.name = "科技点数",
                    i.count = t.points,
                    i.icon = Path.itemIconURL + "kejidian.png",
                    i.quality = 1,
                    i.count > 0 && e.push(i);
                var n = {},
                    s = PartsParser.GetInstance().getItemById(t.itemid);
                n.name = s.name_l,
                    n.count = 1,
                    n.icon = Path.partsIconURL + s.icon,
                    n.quality = s.quality,
                    e.push(n)
            }
            return e
        },
        i.show = function(t, e) {
            var a = this;
            this.currPage = 0,
                this.data = t,
                this.type = e,
                this.txtTitle.text = "战舰回收",
                e == RetiredType.NORAMLRETIRED ? (this.imgCostIcon.visible = !1, this.txtCostNum.visible = !1, this.btnSell.label = "普通回收", this.btnSell.skinName = "anniu_lan") : e == RetiredType.STRONGRETIRED && (this.imgCostIcon.visible = !0, this.txtCostNum.visible = !0, this.btnSell.label = "高级回收", this.btnSell.skinName = "anniu_hongSkin"),
                this.scroller.viewport = this.list,
                this.init(),
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        a.setListData()
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        i.setListData = function() {
            var t = this.getList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = retiredFactoryListItem
        },
        i.getList = function() {
            for (var t = [], e = 0, a = 1; a <= this.data.lv; a++) 1 == this.data.qualityNum ? e += ShipupgradeParser.GetInstance().getItemById(a).quality1 : 2 == this.data.qualityNum ? e += ShipupgradeParser.GetInstance().getItemById(a).quality2 : 3 == this.data.qualityNum ? e += ShipupgradeParser.GetInstance().getItemById(a).quality3 : 4 == this.data.qualityNum ? e += ShipupgradeParser.GetInstance().getItemById(a).quality4 : 5 == this.data.qualityNum ? e += ShipupgradeParser.GetInstance().getItemById(a).quality5 : 6 == this.data.qualityNum && (e += ShipupgradeParser.GetInstance().getItemById(a).quality6);
            if (0 != e) {
                var i = {};
                i.name = "金币",
                    this.type == RetiredType.NORAMLRETIRED ? i.count = Math.ceil(e * this.NORAMLRETIRED_RATE) : this.type == RetiredType.STRONGRETIRED && (i.count = Math.ceil(e * this.STRONGRETIRED_RATE)),
                    i.icon = Path.itemIconURL + "coin.png",
                    i.quality = 1,
                    t.push(i)
            }
            var n = this.data.usepropcount;
            if (0 != n) {
                var s = {},
                    r = ItemParser.GetInstance().getItemById(TraindataParser.GetInstance().getItemById(1).costItem);
                s.name = r.name_l,
                    this.type == RetiredType.NORAMLRETIRED ? s.count = Math.ceil(n * this.NORAMLRETIRED_RATE) : this.type == RetiredType.STRONGRETIRED && (s.count = Math.ceil(n * this.STRONGRETIRED_RATE)),
                    s.icon = Path.itemIconURL + "trainammo.png",
                    s.quality = r.quality,
                    t.push(s)
            }
            var o = this.data.skillusepropcnt + this.data.activeskillusepropcnt + this.data.circleskillusepropcnt;
            if (0 != o) {
                var l = {},
                    h = ItemParser.GetInstance().getItemById(SkilldataParser.GetInstance().getItemById(this.data.skillid).upgradeCostItem);
                l.name = h.name_l,
                    this.type == RetiredType.NORAMLRETIRED ? l.count = Math.ceil(o * this.NORAMLRETIRED_RATE) : this.type == RetiredType.STRONGRETIRED && (l.count = Math.ceil(o * this.STRONGRETIRED_RATE)),
                    l.icon = Path.itemIconURL + "trainbook.png",
                    l.quality = h.quality,
                    t.push(l)
            }
            var c = 0,
                d = 0,
                g = 0;
            if (6 == this.data.quality)
                for (var u = 1; u <= this.data.remouldLv + 6; u++) {
                    var p = ShipdataParser.GetInstance().getItemById(this.data.shipid - u);
                    d += p.remouldCount,
                        g += p.remouldSeniorPaper,
                        c += p.remouldMaterial
                } else
                    for (var a = 1; a <= this.data.remouldLv; a++) {
                        var p = ShipdataParser.GetInstance().getItemById(this.data.shipid - a);
                        d += p.remouldCount
                    }
            if (0 != c) {
                var m = {},
                    _ = ItemParser.GetInstance().getItemById(1246);
                m.name = _.name_l,
                    this.type == RetiredType.NORAMLRETIRED ? m.count = Math.ceil(c * this.NORAMLRETIRED_RATE) : this.type == RetiredType.STRONGRETIRED && (m.count = Math.ceil(c * this.STRONGRETIRED_RATE)),
                    m.icon = Path.itemIconURL + _.icon,
                    m.quality = _.quality,
                    t.push(m)
            }
            d += 1;
            var v = {};
            return 1 == PapersaledataParser.GetInstance().getItemById(PaperdataParser.GetInstance().getItemById(this.data.drawingId).quality).type ? (v.name = "普通万能图纸", v.icon = Path.itemIconURL + "dijiwanneng.png") : (v.name = "高级万能图纸", v.icon = Path.itemIconURL + "powerfulbook.png"),
                this.type == RetiredType.NORAMLRETIRED ? v.count = Math.ceil((d * PapersaledataParser.GetInstance().getItemById(PaperdataParser.GetInstance().getItemById(this.data.drawingId).quality).count + g) * this.NORAMLRETIRED_RATE) : this.type == RetiredType.STRONGRETIRED && (v.count = Math.ceil((d * PapersaledataParser.GetInstance().getItemById(PaperdataParser.GetInstance().getItemById(this.data.drawingId).quality).count + g) * this.STRONGRETIRED_RATE)),
                v.quality = PaperdataParser.GetInstance().getItemById(this.data.drawingId).quality,
                t.push(v),
                t
        },
        i.sendRetiredShip = function(t, e) {
            var a = Transport.getPkg(ProtocolMgr.ID_DceRetireShip);
            a.id = t,
                a.type = e,
                Transport.instance.send(a)
        },
        i.handleRetiredShip = function(t) {
            if (t.id, t.type, 0 == t.res) {
                var e = Transport.getPkg(ProtocolMgr.ID_DceShipList);
                Transport.instance.send(e),
                    this.hide()
            } else 1 == t.res ? Toast.launch("非法id") : 2 == t.res ? Toast.launch("非法类型") : 3 == t.res ? Toast.launch("非法图纸id") : 4 == t.res ? Toast.launch("船不存在") : 5 == t.res && Toast.launch("高级退役钻石不足")
        },
        e
}(eui.Component);
