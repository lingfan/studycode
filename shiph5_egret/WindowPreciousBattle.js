
var WindowPrecious = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/ZB_DuoBaoQiBingSkin.exml"
            /*tpa=resource/eui_skins/ZB_DuoBaoQiBingSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            ConfigData.preLoadList(["parts", "partspieces", "medalData", "medalpiece"],
                function() {
                    ConfigData.preLoadDats(["robNPCData"], [RobnpcdataParser],
                        function() {
                            GameEventDispatcher.getInstance().addEventListener(GameEvent.PART_PIECES, t.updatePrecious, t),
                                GameEventDispatcher.getInstance().addEventListener(GameEvent.MEDAL_PIECES, t.updatePrecious, t),
                                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceSoulPieceList),
                                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DcePartPieceList),
                                t.initUI()
                        })
                })
        },
        i.setData = function(t) {
            t.auto && (t.index ? (this.tabIndex = t.index, this["t" + t.index].dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))) : this["t" + e.jiluTabIndex].dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP)))
        },
        i.initUI = function() {
            102 != GuideManager.step || GuideManager.merge2GuideBool || GuideManager.nextStep(),
                MainUI.instance.changeTopMode(topUIMode.simple);
            for (var t = 1; 6 > t; t++) this["t" + t].index = t,
                this["t" + t].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tabHandler, this);
            this.t1.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP)),
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this),
                this.autoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.compoundHandler, this),
                this.btnSkipToShop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shopHandler, this),
                this.btnSkipToPVE.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pveHandler, this),
                this.compoundBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.compoundHandler, this),
                this.icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.infoHandler, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.MERGE_COMPLETE, this.updateShow, this)
        },
        i.infoHandler = function(t) {
            var a;
            e.selectedItem.medal ? (a = ConfigData.getDataByKey("medalpiece", e.selectedItem.iData.id), WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                data: {
                    soulid: a.medal_id
                },
                type: shipInfoWindowType.soulPreview
            })) : (a = ConfigData.getDataByKey("partspieces", e.selectedItem.iData.id), WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                data: {
                    partsid: a.part_id
                },
                type: shipInfoWindowType.partsPreview
            }))
        },
        i.shopHandler = function(t) {
            this.closeHandler(null),
                MainUI.instance.bottomUI.lastBtn = null,
                WindowManager.getInstance().show(WindowManager.windowType.Shop)
        },
        i.pveHandler = function(t) {
            this.closeHandler(null),
                MainUI.instance.bottomUI.lastBtn = null,
                MainWorldManager.instance.openPVEWindow()
        },
        i.compoundHandler = function(t) {
            var a;
            e.selectedItem.medal ? (a = ConfigData.getDataByKey("medalpiece", e.selectedItem.iData.id), RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceComposeSouls, {
                    soulid: Number(a.medal_id),
                    type: t.currentTarget == this.autoBtn ? 0 : 1
                })) : (a = ConfigData.getDataByKey("partspieces", e.selectedItem.iData.id), RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceComposeParts, {
                    id: Number(a.part_id),
                    all: t.currentTarget == this.autoBtn ? 0 : 1
                })),
                110 == GuideManager.step && GuideManager.nextStep()
        },
        i.tabHandler = function(t) {
            for (var a = t.currentTarget,
                    i = 1; 6 > i; i++) this["t" + i] == a ? this["t" + i].selected = !0 : this["t" + i].selected = !1;
            this.tabIndex = a.index,
                e.selectedItem = null,
                this.render()
        },
        i.render = function() {
            this.vessel.removeChildren();
            var t;
            if (t = this.tabIndex < 5 ? PiecesManager.getInstance().getPartPiecesByTab(this.tabIndex) : PiecesManager.getInstance().getMedalPieces(), t.length > 0) {
                for (var e = 0; e < t.length; e++) {
                    var a = new PreciousItem(t[e], this);
                    this.vessel.addChild(a),
                        a.x = 110 * e,
                        0 == e && a.setSelected(!0)
                }
                this.vessel.width = 110 * e,
                    this.HaveNoPieces.visible = !1,
                    this.HavePieces.visible = !0
            } else this.HaveNoPieces.visible = !0,
                this.HavePieces.visible = !1;
            this.vessel.scrollH = 0
        },
        i.updatePrecious = function() {
            this.render()
        },
        i.updateShow = function() {
            var t = this,
                a = Path.effectUrl + "daojuhecheng/daojuhecheng.json",
                i = Path.effectUrl + "daojuhecheng/texture.json",
                n = Path.effectUrl + "daojuhecheng/texture.png";
            Utils.createDragonBone(a, i, n, "daojuhecheng", "normal",
                function(a, i) {
                    a && (t.addChild(a.display), a.display.x = 320, a.display.y = 550, a.display.scaleX = 2, a.display.scaleY = 2, a.animation.gotoAndPlay("normal"), a.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                        function() {
                            Utils.removeDragonBone(a),
                                e.selectedItem && e.selectedItem.setSelected(!0)
                        },
                        void 0))
                },
                this)
        },
        i.showPieces = function(t) {
            if (this.showPiecesId != t.id) {
                this.showPiecesId = t.id;
                var a, i, n, s;
                e.selectedItem.medal ? (i = ConfigData.getDataByKey("medalpiece", t.id), a = PiecesManager.getInstance().getMedalPiecesCount(i.medal_id), n = PiecesManager.getInstance().getMedalPiecesById(i.medal_id), i = ConfigData.getDataByKey("medalData", i.medal_id), s = Path.soulIconURL + i.icon, Utils.getImgByUrl(Path.soulIconURL + i.icon, this.icon), this.nameTxt.text = MedaldataParser.GetInstance().getItemById(i.id).name_l) : (i = ConfigData.getDataByKey("partspieces", t.id), a = PiecesManager.getInstance().getPartPiecesCount(i.part_id), n = PiecesManager.getInstance().getPartPiecesById(i.part_id), i = ConfigData.getDataByKey("parts", i.part_id), s = Path.partsIconURL + i.icon, Utils.getImgByUrl(Path.partsIconURL + i.icon, this.icon), this.nameTxt.text = i.name_l);
                var r = t.id.toString(),
                    o = 10 * Number(r.substr(0, r.length - 1));
                if (this.nameTxt.textColor = QualitySystem.getColorByQuality(i.quality), this.pieces4.visible = !1, this.pieces5.visible = !1, this.pieces6.visible = !1, a > 0) {
                    var l = 0;
                    this["pieces" + a].visible = !0;
                    for (var h = 1; a + 1 > h; h++) {
                        var c = this["pieces" + a + "_" + h];
                        Utils.getImgByUrl(s, c.imgIcon),
                            Utils.getImgByUrl(QualitySystem.getItemSmallBack(i.quality), c.imgBg),
                            n[h] ? (c.txtNum.text = n[h].count, c.imgZeroFlag.visible = !1, l++, c.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.getRobberyList, this)) : (103 == GuideManager.step && (GuideManager.positionParam = {
                                x: c.x - 10,
                                y: c.y + 192 + 116,
                                w: c.width,
                                h: c.height,
                                index: h
                            }), c.imgZeroFlag.visible = !0, c.txtNum.text = 0, c.id = o + h, c.type = e.selectedItem.medal ? 2 : 1, c.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getRobberyList, this)),
                            Utils.getImgByUrl(Path.itemBackURL + "slice_" + h + ".png", c.imgModule)
                    }
                }
                l >= a && !GuideManager.mergeGuideBool && SceneManager.instance.curSceneType != SceneType.BATTLE && (WindowBattleSweepDrop.instance && WindowBattleSweepDrop.instance.close(), e.guideBool = !0, GuideManager.nextStep(109)),
                    this.autoBtn.enabled = this.compoundBtn.enabled = l >= a,
                    e.selectedItem && (e.selectedItem.imgNotice.visible = l >= a)
            }
        },
        i.getRobberyList = function(t) {
            104 == GuideManager.step && GuideManager.nextStep(),
                e.jiluTabIndex = this.tabIndex,
                e.selectedIndex = e.selectedItem.iData.id,
                WindowManager.getInstance().show(WindowManager.windowType.PreciouseBattle, {
                    id: t.currentTarget.id,
                    type: t.currentTarget.type
                })
        },
        i.closeHandler = function(t) {
            e.guideBool = !1,
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.PART_PIECES, this.updatePrecious, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.MEDAL_PIECES, this.updatePrecious, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.MERGE_COMPLETE, this.updateShow, this),
                WindowManager.getInstance().hide(WindowManager.windowType.ZhenbaPrecious)
        },
        e
}(WindowBase);
