
var windowInited = !1,
    windowArrangeShipItem = function(t) {
        function e() {
            t.call(this),
                this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
                this.skinName = "resource/eui_skins/item/zhuye_zhenrongzhanjianSkin.exml"
                /*tpa=resource/eui_skins/item/zhuye_zhenrongzhanjianSkin.exml*/
        }
        __extends(e, t);
        var a = (__define, e),
            i = a.prototype;
        return i.clear = function() {
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.ArrangeWindow_shipSelected, this.selectHandler, this)
            },
            i.createChildren = function() {
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectShip, this),
                    GameEventDispatcher.getInstance().addEventListener(GameEvent.ArrangeWindow_shipSelected, this.selectHandler, this)
            },
            i.selectHandler = function(t) {
                t.parames.pos != this.data.pos && (this.data.selected = !1, this.select.visible = !1)
            },
            i.selectShip = function() {
                if (!(this.data.pos > 8))
                    if (this.data.shipid && "0" != this.data.shipid) e.selectedData && (e.selectedData.selected = !1),
                        this.select.visible = !0,
                        this.data.selected = !0,
                        e.selectedData = this.data,
                        GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.ArrangeWindow_shipSelected, {
                            shipid: this.data.shipid,
                            pos: this.data.pos
                        }));
                    else if (!this.data.friendBool && UserData.getInstance().getCurPosNum() >= this.data.pos) {
                    (9 == GuideManager.step || 25 == GuideManager.step) && GuideManager.nextStep();
                    var t = ShipManager.getInstance().getEmptyShips();
                    t.sort(function(t, e) {
                            var a = ConfigData.getDataByKey("shipData", t.shipid),
                                i = ConfigData.getDataByKey("shipData", e.shipid);
                            return 1e3 * Number(a.quality) + t.level > 1e3 * Number(i.quality) + e.level ? -1 : 1
                        }),
                        WindowManager.getInstance().show(WindowManager.windowType.ChoosItem, {
                            data: t,
                            type: WindowChooseItemType.ship,
                            pos: this.data.pos
                        })
                }
            },
            i.dataChanged = function() {
                if (this.data)
                    if (this.data.shipid && "0" != this.data.shipid && this.data.pic) {
                        for (var t = (ConfigData.getDataByKey("shipData", this.data.id), 0); t < ShipManager.getInstance().soldierList.length; t++) {
                            var e = ShipManager.getInstance().soldierList[t];
                            if (this.data.shipid == e.shipid) {
                                this.point.visible = ShipManager.getInstance().getShipRedpoint(e) > 0;
                                break
                            }
                        }
                        SUI.setTextureAsync(this.pic, this.data.pic),
                            SUI.setTextureAsync(this.bg, this.data.bg),
                            SUI.setTextureAsync(this.typeIcon, this.data.typeIcon),
                            this.caption.visible = this.data.caption,
                            this.empty.visible = !1,
                            this.lockPanel.visible = !1,
                            this.pic.visible = !0,
                            this.typeIcon.visible = !0,
                            this.data.selected ? this.select.visible = !0 : this.select.visible = !1,
                            windowInited || (windowInited = !0, this.select.visible = !0, this.data.selected = !0, GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.ArrangeWindow_shipSelected, {
                                shipid: this.data.shipid,
                                pos: this.data.pos
                            })))
                    } else {
                        if (UserData.getInstance().getCurPosNum() >= this.data.pos) {
                            this.pic.visible = !1,
                                this.typeIcon.visible = !1,
                                SUI.setTextureAsync(this.bg, QualitySystem.getShipSmallBack(1)),
                                this.empty.visible = !0,
                                this.caption.visible = !1,
                                this.lockPanel.visible = !1,
                                (8 == GuideManager.step || 24 == GuideManager.step) && GuideManager.nextStep();
                            var a = ShipManager.getInstance().getEmptyShips();
                            this.point.visible = a.length > 0
                        } else {
                            this.pic.visible = !1,
                                this.typeIcon.visible = !1,
                                SUI.setTextureAsync(this.bg, QualitySystem.getShipSmallBack(1)),
                                this.empty.visible = !1,
                                this.caption.visible = !1,
                                this.lockPanel.visible = !0;
                            var i = ShipManager.getInstance().getShipPosLevel(this.data.pos);
                            this.txtOpenLevel.text = Locales.get("panel_pirate_text_disciple_lv_0", i),
                                this.point.visible = !1
                        }
                        this.select.visible = !1
                    }
                this.data.friendBool && (this.point.visible = !1)
            },
            e
    }(eui.ItemRenderer);
