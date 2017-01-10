
var MakeShipAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.tmpQuality = 0,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/MakeShipSkin.exml"
            /*tpa=resource/eui_skins/MakeShipSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getInstance = function() {
            return this._instance || (this._instance = new e),
                this._instance
        },
        i.OnComplete = function() {
            (6 == GuideManager.step || 19 == GuideManager.step || 22 == GuideManager.step) && (GuideManager.clearMask(), 19 == GuideManager.step ? (GuideManager.createMaskTarget(570, 30, 80, 30, 90, 110, 8), GuideManager.createParticleRec(570, 0, 75, 60)) : (GuideManager.createMaskTarget(200, 700, 210, 70, 90, 120, -10), GuideManager.createParticleRec(215, 665, 210, 65))),
            this.__inited = !0,
                this._block || (this._block = new egret.Shape, this._block.graphics.beginFill(0, .5), this._block.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight), this._block.graphics.endFill(), this._block.touchEnabled = !0);
            var t = GameLayer.getInstance().windowLayer.getChildIndex(this);
            egret.log("depth:", t),
                GameLayer.getInstance().windowLayer.addChildAt(this._block, t)
        },
        i.init = function() {
            19 == GuideManager.step ? this.shipGroup.visible = !1 : this.shipGroup.visible = !0,
                this.btnBack1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAgain1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnRandom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBack2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAgain2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBack0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAgain0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.REFRESH_MAKE_SHIP_ALERT_COUNT, this.onChangeBadgeComplete, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.REFRESH_SPY_ALERT_COUNT, this.onChangeSypBadgeComplete, this),
                SUI.setTextureAsync(this.bg, Path.backGroundImageUrl + "Bg_lottery.jpg")
        },
        i.clean = function() {
            this.huode && (Utils.removeNode(this.huode.display), dragonBones.WorldClock.clock.remove(this.huode), this.huode = void 0),
                this.huodeback && (Utils.removeNode(this.huodeback.display), dragonBones.WorldClock.clock.remove(this.huodeback), this.huodeback = void 0),
                GuideManager.clearMask(),
                this.data = null,
                this.pkg = null,
                this.btnBack1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAgain1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAgain.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnRandom.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnConfirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBack2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAgain2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBack0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAgain0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.REFRESH_MAKE_SHIP_ALERT_COUNT, this.onChangeBadgeComplete, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.REFRESH_SPY_ALERT_COUNT, this.onChangeSypBadgeComplete, this)
        },
        i.onChangeBadgeComplete = function(t) {
            this.refreshTenCaptainCount(),
                this.refreshOneCaptainCount()
        },
        i.onChangeSypBadgeComplete = function(t) {
            this.refreshTenSpyCount(),
                this.refreshOneSpyCount()
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.btnBack1:
                    this.hide();
                    break;
                case this.btnAgain1:
                    ShopManager.getInstance().sendSpy(Number(this.data.id), 3, !0, this.data);
                    break;
                case this.btnBack:
                    this.hide(),
                        19 == GuideManager.step && GuideManager.nextStep();
                    break;
                case this.btnAgain:
                    this.huode && (Utils.removeNode(this.huode.display), dragonBones.WorldClock.clock.remove(this.huode), this.huode = void 0),
                        this.huodeback && (Utils.removeNode(this.huodeback.display), dragonBones.WorldClock.clock.remove(this.huodeback), this.huodeback = void 0),
                        ShopManager.getInstance().sendSpy(Number(this.data.id), 3, !1, this.data);
                    break;
                case this.btnRandom:
                    var e = PaperdataParser.GetInstance().getItemById(this.data.id),
                        a = ShipdataParser.GetInstance().getItemById(e.shipId);
                    new NameRandomTool(1, this.editLabelShipName.text, this.editLabelShipName, -1, a);
                    break;
                case this.btnConfirm:
                    RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceCreateShip, {
                            shipid: +this.data.shipid,
                            name: this.editLabelShipName.text
                        }, !0),
                        this.hide(),
                        (6 == GuideManager.step || 22 == GuideManager.step || 68 == GuideManager.step) && GuideManager.nextStep();
                    break;
                case this.btnBack2:
                    this.hide();
                    break;
                case this.btnAgain2:
                    ShopManager.getInstance().sendRecruitCaptain(this.data.id, 1, this.data);
                    break;
                case this.btnBack0:
                    this.hide();
                    break;
                case this.btnAgain0:
                    ShopManager.getInstance().sendRecruitCaptain(this.data.id, 2, this.data)
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("paperData"),
                e.push("shipData"),
                e.push("shipModelData"),
                e.push("captainData"),
                e.push("captainPieceData"),
                e.push("MilitaryRank"),
                ConfigData.preLoadDats(e, [PaperdataParser, ShipdataParser, ShipmodeldataParser, CaptaindataParser, CaptainpiecedataParser, MilitaryrankParser],
                    function() {
                        t()
                    })
        },
        i.show = function() {
            this.init(),
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting()
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showMakeShip = function(t) {
            var e = this;
            if (this.init(), this.currPage = 0, this.showPage(0), this.data = t, WindowManager.getInstance().showWaiting(), this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting();
                    var a = PaperdataParser.GetInstance().getItemById(t.id),
                        i = ShipdataParser.GetInstance().getItemById(a.shipId),
                        n = ShipmodeldataParser.GetInstance().getItemById(i.modelId);
                    e.txtShipType.text = a.name_l,
                        e.txtShipType.textColor = QualitySystem.getColorByQuality(a.quality),
                        SUI.setTextureAsync(e.imgShip, Path.shipURL + "y_" + n.url),
                        SUI.setTextureAsync(e.imgBg, Path.itemBackURL + "itemBack_ship_big_" + a.quality + ".png"),
                        SUI.setTextureAsync(e.imgType, Path.shipTypeIconURL + "shipType" + a.shipType + ".png"),
                        SUI.setTextureAsync(e.imgCountry, Path.countryURL + "country_" + i.country + ".jpg"),
                        SUI.setTextureAsync(e.imgItemIcon, t.itemIcon),
                        new NameRandomTool(1, "", e.editLabelShipName, -1, i)
                }), GameLayer.getInstance().windowLayer.addChild(this), this.huode) this.huode.display.x = 320,
                this.huode.display.y = 386;
            else {
                var a = Path.effectUrl + "effect_huode/effect_huode.json",
                    i = Path.effectUrl + "effect_huode/texture.json",
                    n = Path.effectUrl + "effect_huode/texture.png";
                Utils.createDragonBone(a, i, n, "effect_huode", "normal",
                    function(t, a) {
                        t && (e.huode || (e.MakeShip.addChild(t.display), t.display.scaleX = 2.8, t.display.scaleY = 2, t.display.x = 320, t.display.y = 386, e.huode = t, t.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                            function() {
                                Utils.removeNode(e.huode.display),
                                    dragonBones.WorldClock.clock.remove(e.huode),
                                    e.huode = void 0
                            },
                            e)))
                    },
                    this)
            }
        },
        i.showGetOneCaptainPaper = function(t, e) {
            var a = this;
            this.init(),
                this.currPage = 3,
                this.showPage(3),
                this.data = e,
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        a.pkg = t;
                    var i = CaptaindataParser.GetInstance().getItemById(a.pkg.captainid[0]);
                    switch (SUI.setTextureAsync(a.captain.imgHead, CaptainManager.getInstance().getCaptainPicById(i.picture)), SUI.setTextureAsync(a.captain.imgCountry, CaptainManager.getInstance().getCountryIconById(i.country.toString())), a.captain.imgName.text = i.name_l, i.quality) {
                        case 1:
                            SUI.setTextureAsync(a.captain.imgBg, Path.itemBackURL + "jianzhang_bai_da.png"),
                                SUI.setTextureAsync(a.captain.imgQuality, Path.itemBackURL + "jianzhang_bai_da_frame.png");
                            break;
                        case 2:
                            SUI.setTextureAsync(a.captain.imgBg, Path.itemBackURL + "jianzhang_lv_da.png"),
                                SUI.setTextureAsync(a.captain.imgQuality, Path.itemBackURL + "jianzhang_lv_da_frame.png");
                            break;
                        case 3:
                            SUI.setTextureAsync(a.captain.imgBg, Path.itemBackURL + "jianzhang_lan_da.png"),
                                SUI.setTextureAsync(a.captain.imgQuality, Path.itemBackURL + "jianzhang_lan_da_frame.png");
                            break;
                        case 4:
                            SUI.setTextureAsync(a.captain.imgBg, Path.itemBackURL + "jianzhang_zi_da.png"),
                                SUI.setTextureAsync(a.captain.imgQuality, Path.itemBackURL + "jianzhang_zi_da_frame.png");
                            break;
                        case 5:
                            SUI.setTextureAsync(a.captain.imgBg, Path.itemBackURL + "jianzhang_cheng_da.png"),
                                SUI.setTextureAsync(a.captain.imgQuality, Path.itemBackURL + "jianzhang_cheng_da_frame.png")
                    }
                    for (var n = CaptainData.captainlist,
                            s = 0; s < n.length; s++)
                        if (n[s].id == i.id) {
                            a.captain.imgRank.text = MilitaryrankParser.GetInstance().getItemByField("index", n[s].promotelevel).name_l,
                                a.captain.imgLevel.text = n[s].upgradelevel + "级";
                            break
                        }
                    a.pkg.ishave[0] ? (a.captain.hasGroup.visible = !0, a.captain.txtTransformNum.text = "已拥有，转化为" + i.turnPiece, SUI.setTextureAsync(a.captain.imgTransformIcon, Path.itemBackURL + "jz_piece_" + i.quality + ".png")) : a.captain.hasGroup.visible = !1;
                    var r = 0,
                        o = ItemsManager.getInstance().getItemById(Number(e.itemId));
                    if (null != o && (r += o.count), -1 != e.itemId2) {
                        var l = ItemsManager.getInstance().getItemById(Number(e.itemId2));
                        null != l && (r += l.count)
                    }
                    a.txtItemNum2.text = "x" + r,
                        SUI.setTextureAsync(a.imgItemIcon2, e.itemIcon)
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.refreshOneCaptainCount = function() {
            var t = 0;
            if (this.data) {
                var e = ItemsManager.getInstance().getItemById(Number(this.data.itemId));
                if (null != e && (t += e.count), -1 != this.data.itemId2) {
                    var a = ItemsManager.getInstance().getItemById(Number(this.data.itemId2));
                    null != a && (t += a.count)
                }
                this.txtItemNum2.text = "x" + t
            }
        },
        i.refreshOneSpyCount = function() {
            var t = 0;
            if (this.data) {
                var e = ItemsManager.getInstance().getItemById(Number(this.data.itemId));
                if (null != e && (t += e.count), -1 != this.data.itemId2) {
                    var a = ItemsManager.getInstance().getItemById(Number(this.data.itemId2));
                    null != a && (t += a.count)
                }
                this.txtItemNum.text = "x" + t
            }
        },
        i.showGetTenCaptainPaper = function(t, e) {
            var a = this;
            this.init(),
                this.currPage = 4,
                this.showPage(4),
                this.data = e,
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        a.pkg = t;
                    for (var i = 0; i < a.pkg.captainid.length; i++) {
                        var n = CaptaindataParser.GetInstance().getItemById(a.pkg.captainid[i]);
                        switch (SUI.setTextureAsync(a["captain" + (i + 1)].imgHead, CaptainManager.getInstance().getCaptainPicById(n.picture)), SUI.setTextureAsync(a["captain" + (i + 1)].imgCountry, CaptainManager.getInstance().getCountryIconById(n.country.toString())), a["captain" + (i + 1)].imgName.text = n.name_l, n.quality) {
                            case 1:
                                SUI.setTextureAsync(a["captain" + (i + 1)].imgBg, Path.itemBackURL + "jianzhang_bai_da.png"),
                                    SUI.setTextureAsync(a["captain" + (i + 1)].imgQuality, Path.itemBackURL + "jianzhang_bai_da_frame.png");
                                break;
                            case 2:
                                SUI.setTextureAsync(a["captain" + (i + 1)].imgBg, Path.itemBackURL + "jianzhang_lv_da.png"),
                                    SUI.setTextureAsync(a["captain" + (i + 1)].imgQuality, Path.itemBackURL + "jianzhang_lv_da_frame.png");
                                break;
                            case 3:
                                SUI.setTextureAsync(a["captain" + (i + 1)].imgBg, Path.itemBackURL + "jianzhang_lan_da.png"),
                                    SUI.setTextureAsync(a["captain" + (i + 1)].imgQuality, Path.itemBackURL + "jianzhang_lan_da_frame.png");
                                break;
                            case 4:
                                SUI.setTextureAsync(a["captain" + (i + 1)].imgBg, Path.itemBackURL + "jianzhang_zi_da.png"),
                                    SUI.setTextureAsync(a["captain" + (i + 1)].imgQuality, Path.itemBackURL + "jianzhang_zi_da_frame.png");
                                break;
                            case 5:
                                SUI.setTextureAsync(a["captain" + (i + 1)].imgBg, Path.itemBackURL + "jianzhang_cheng_da.png"),
                                    SUI.setTextureAsync(a["captain" + (i + 1)].imgQuality, Path.itemBackURL + "jianzhang_cheng_da_frame.png")
                        }
                        for (var s = CaptainData.captainlist,
                                r = 0; r < s.length; r++)
                            if (s[r].id == n.id) {
                                a["captain" + (i + 1)].imgRank.text = MilitaryrankParser.GetInstance().getItemByField("index", s[r].promotelevel).name_l,
                                    a["captain" + (i + 1)].imgLevel.text = s[r].upgradelevel + "级";
                                break
                            }
                        a.pkg.ishave[i] ? (a["captain" + (i + 1)].hasGroup.visible = !0, a["captain" + (i + 1)].txtTransformNum.text = "已拥有，转化为" + n.turnPiece, SUI.setTextureAsync(a["captain" + (i + 1)].imgTransformIcon, Path.itemBackURL + "jz_piece_" + n.quality + ".png")) : a["captain" + (i + 1)].hasGroup.visible = !1
                    }
                    var o = 0,
                        l = ItemsManager.getInstance().getItemById(Number(e.itemId));
                    if (null != l && (o += l.count), -1 != e.itemId2) {
                        var h = ItemsManager.getInstance().getItemById(Number(e.itemId2));
                        null != h && (o += h.count)
                    }
                    a.txtItemNum0.text = "x" + o,
                        SUI.setTextureAsync(a.imgItemIcon0, e.itemIcon)
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.refreshTenCaptainCount = function() {
            var t = 0;
            if (this.data) {
                var e = ItemsManager.getInstance().getItemById(Number(this.data.itemId));
                if (null != e && (t += e.count), -1 != this.data.itemId2) {
                    var a = ItemsManager.getInstance().getItemById(Number(this.data.itemId2));
                    null != a && (t += a.count)
                }
                this.txtItemNum0.text = "x" + t,
                    this.data.count = t
            }
        },
        i.refreshTenSpyCount = function() {
            var t = 0;
            if (this.data) {
                var e = ItemsManager.getInstance().getItemById(Number(this.data.itemId));
                if (null != e && (t += e.count), -1 != this.data.itemId2) {
                    var a = ItemsManager.getInstance().getItemById(Number(this.data.itemId2));
                    null != a && (t += a.count)
                }
                this.txtItemNum1.text = "x" + t,
                    this.data.count = t
            }
        },
        i.showGetOnePaper = function(t, e) {
            var a = this;
            if (this.init(), this.currPage = 1, this.showPage(1), this.data = e, WindowManager.getInstance().showWaiting(), this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        a.pkg = t;
                    var i = a.pkg.paperlist,
                        n = PaperdataParser.GetInstance().getItemById(i[0]),
                        s = ShipdataParser.GetInstance().getItemById(n.shipId);
                    a.tmpQuality = s.quality;
                    var r = ShipmodeldataParser.GetInstance().getItemById(s.modelId);
                    a.ship.txtShipName.text = n.name_l,
                        a.ship.txtShipName.textColor = QualitySystem.getColorByQuality(n.quality),
                        SUI.setTextureAsync(a.ship.imgShip, Path.shipURL + "y_" + r.url),
                        SUI.setTextureAsync(a.ship.imgBg, Path.itemBackURL + "GUI_Shipbuilding_tuzhi_big_0" + n.quality + ".png"),
                        SUI.setTextureAsync(a.ship.imgShipType, Path.shipTypeIconURL + "shipType" + n.shipType + ".png"),
                        SUI.setTextureAsync(a.imgItemIcon, e.itemIcon);
                    var o = --e.count;
                    0 > o && (o = 0),
                        a.txtItemNum.text = "x" + o
                }), GameLayer.getInstance().windowLayer.addChild(this), this.tmpQuality >= 4) {
                if (this.huodeback) this.huodeback.display.x = 324,
                    this.huodeback.display.y = 425;
                else {
                    var i = Path.effectUrl + "effect_huodeback/effect_huodeback.json",
                        n = Path.effectUrl + "effect_huodeback/texture.json",
                        s = Path.effectUrl + "effect_huodeback/texture.png";
                    Utils.createDragonBone(i, n, s, "effect_huodeback", "normal",
                        function(t, e) {
                            t && (a.huodeback || (a.GetOnePaper.addChildAt(t.display, 0), t.display.scaleX = 2.4, t.display.scaleY = 2.7, t.display.x = 324, t.display.y = 425, t.animation.gotoAndPlay("normal", void 0, void 0, 0), a.huodeback = t))
                        },
                        this)
                }
                this.tmpQuality = 0
            }
            if (this.huode) this.huode.display.x = 320,
                this.huode.display.y = 420;
            else {
                var i = Path.effectUrl + "effect_huode/effect_huode.json",
                    n = Path.effectUrl + "effect_huode/texture.json",
                    s = Path.effectUrl + "effect_huode/texture.png";
                Utils.createDragonBone(i, n, s, "effect_huode", "normal",
                    function(t, e) {
                        t && (a.huode || (a.GetOnePaper.addChild(t.display), t.display.scaleX = 2, t.display.scaleY = 2, t.display.x = 320, t.display.y = 420, a.huode = t, t.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                            function() {
                                Utils.removeNode(a.huode.display),
                                    dragonBones.WorldClock.clock.remove(a.huode),
                                    a.huode = void 0
                            },
                            a)))
                    },
                    this)
            }
        },
        i.showGetTenPapers = function(t, e) {
            var a = this;
            this.init(),
                this.currPage = 2,
                this.showPage(2),
                this.data = e,
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting(),
                        a.pkg = t;
                    for (var i, n, s, r, o = a.pkg.paperlist,
                            l = 0; l < o.length; l++) i = PaperdataParser.GetInstance().getItemById(o[l]),
                        n = ShipdataParser.GetInstance().getItemById(i.shipId),
                        s = ShipmodeldataParser.GetInstance().getItemById(n.modelId),
                        0 == l ? r = a.ship1 : 1 == l ? r = a.ship2 : 2 == l ? r = a.ship3 : 3 == l ? r = a.ship4 : 4 == l ? r = a.ship5 : 5 == l ? r = a.ship6 : 6 == l ? r = a.ship7 : 7 == l ? r = a.ship8 : 8 == l ? r = a.ship9 : 9 == l && (r = a.ship10),
                        r.txtShipName.text = i.name_l,
                        r.txtShipName.textColor = QualitySystem.getColorByQuality(i.quality),
                        SUI.setTextureAsync(r.imgShip, Path.shipURL + "y_" + s.url),
                        SUI.setTextureAsync(r.imgBg, Path.itemBackURL + "GUI_Shipbuilding_tuzhi_0" + i.quality + ".png"),
                        SUI.setTextureAsync(r.imgShipType, Path.shipTypeIconURL + "shipType" + i.shipType + ".png");
                    SUI.setTextureAsync(a.imgItemIcon1, e.itemIcon);
                    var h = 0,
                        c = ItemsManager.getInstance().getItemById(Number(a.data.itemId));
                    if (null != c && (h += c.count), -1 != a.data.itemId2) {
                        var d = ItemsManager.getInstance().getItemById(Number(a.data.itemId2));
                        null != d && (h += d.count)
                    }
                    a.txtItemNum1.text = "x" + h
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        i.showPage = function(t) {
            for (var e = [this.MakeShip, this.GetOnePaper, this.GetTenPapers, this.GetOneCaptain, this.GetTenCaptain], a = 0; a < e.length; a++) e[a].visible = !1;
            e[t].visible = !0
        },
        i.handAddOwnedPaper = function(t) {
            t.paperID,
                t.newpower
        },
        e
}(eui.Component);
