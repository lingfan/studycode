
var ShipSystem;
!
function(t) {
    t[t.SHIP_TYPE_BB = 0] = "SHIP_TYPE_BB",
        t[t.SHIP_TYPE_CB = 1] = "SHIP_TYPE_CB",
        t[t.SHIP_TYPE_CV = 2] = "SHIP_TYPE_CV",
        t[t.SHIP_TYPE_CVL = 3] = "SHIP_TYPE_CVL",
        t[t.SHIP_TYPE_CA = 4] = "SHIP_TYPE_CA",
        t[t.SHIP_TYPE_CL = 5] = "SHIP_TYPE_CL",
        t[t.SHIP_TYPE_DD = 6] = "SHIP_TYPE_DD",
        t[t.SHIP_TYPE_SS = 7] = "SHIP_TYPE_SS"
}(ShipSystem || (ShipSystem = {}));
var ShipManager = function(t) {
    function e() {
        t.call(this),
            this._shipList = [],
            this._soldierList = [],
            this._partsList = [],
            this._soulList = [],
            this.tacticList = [],
            this.shipDataInit = !1,
            this.paperDataInit = !1,
            this.paperPieceDataInit = !1,
            this.shipTypeStr = ["BB", "CB", "CV", "CVL", "CA", "CL", "DD", "SS"],
            this.quailtyArr = [],
            this.shipCfg = ShipdataParser.GetInstance().getDatas(),
            this.paperCfg = PaperdataParser.GetInstance().getDatas(),
            this.paperPieceCfg = PaperpiecedataParser.GetInstance().getDatas(),
            this.shipModelCfg = ShipmodeldataParser.GetInstance().getDatas()
    }
    __extends(e, t);
    var a = __define,
        i = e,
        n = i.prototype;
    return e.getInstance = function() {
            return void 0 == this._instance && (this._instance = new e),
                this._instance
        },
        a(n, "soulList",
            function() {
                return this._soulList
            },
            function(t) {
                this._soulList = t,
                    GameEventDispatcher.getInstance().dispatchEvent(new egret.Event(GameEvent.Souls_List_Refresh)),
                    this.updateShipArrangeSpot()
            }),
        a(n, "partsList",
            function() {
                return this._partsList
            },
            function(t) {
                this._partsList = t,
                    GameEventDispatcher.getInstance().dispatchEvent(new egret.Event(GameEvent.Parts_List_Refresh)),
                    this.updateShipArrangeSpot()
            }),
        a(n, "shipList",
            function() {
                return this._shipList
            },
            function(t) {
                this._shipList = t,
                    this.shipDataInit = !0,
                    GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.ShipDataUpdate)),
                    this.updateShipArrangeSpot()
            }),
        a(n, "soldierList",
            function() {
                return this._soldierList
            },
            function(t) {
                this._soldierList = t,
                    GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SoldierList_update)),
                    this.updateShipArrangeSpot()
            }),
        n.setShipFormationInfo = function(t) {
            this.shipFormationList = [],
                this.shipFormationSelect = t.selectformation;
            for (var e = 0; e < t.data.length; e++) this.shipFormationList.push({
                id: t.data[e].id,
                level: t.data[e].level
            });
            GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.FORMATION_UPDATE)),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.FORMATION_CHANGE))
        },
        n.getShipTypeStrByType = function(t) {
            return this.shipTypeStr[t]
        },
        n.isInArrange = function(t, e) {
            void 0 === e && (e = "shipid");
            for (var a = 0; a < this._soldierList.length; a++)
                if (this._soldierList[a][e].toString() == t.toString()) return !0;
            return !1
        },
        n.addShip = function(t) {
            this._shipList.push(t),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.ShipDataUpdate)),
                this.updateShipArrangeSpot()
        },
        n.getEmptyShips = function() {
            for (var t = [], e = 0; e < this._shipList.length; e++) this.isInArrange(this._shipList[e].id) || t.push(this._shipList[e]);
            return t
        },
        n.setPaperData = function(t) {
            this.papers = new Array;
            for (var e = 0; e < t.length; e++) {
                var a = {
                    id: t[e].id,
                    count: t[e].count,
                    islock: t[e].islock
                };
                this.papers.push(a)
            }
            this.paperDataInit = !0,
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.PaperDataUpdate))
        },
        n.setPaperPieceData = function(t) {
            this.paperPieces = new Array;
            for (var e = 0; e < t.length; e++) {
                var a = {
                    id: t[e].id,
                    count: t[e].count
                };
                this.paperPieces.push(a)
            }
            this.paperPieceDataInit = !0
        },
        n.updateShipList = function(t) {
            for (var e = 0; e < t.length; e++)
                for (var a = 0; a < this._shipList.length; a++) this._shipList[a].id == t[e].id && (this._shipList[a] = t[e]);
            GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SHIP_UPDATE, t[0])),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.ShipDataUpdate)),
                this.trainSaveBool && (this.trainSaveBool = !1, Toast.launch(Locales.get("panel_train_txt_windword_7"), 16777215, !0, 355)),
                this.updateShipArrangeSpot()
        },
        n.updatePartsList = function(t) {
            for (var e = 0; e < this._partsList.length; e++) this._partsList[e].id == t.id && (this._partsList[e] = t);
            GameEventDispatcher.getInstance().dispatchEvent(new egret.Event(GameEvent.Parts_List_Refresh)),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.PARTS_UPDATE)),
                this.updateShipArrangeSpot()
        },
        n.getShipById = function(t) {
            for (var e = 0; e < this._shipList.length; e++)
                if (this._shipList[e].id == t) return this._shipList[e]
        },
        n.getShipByType = function(t) {
            for (var e = 0; e < this._shipList.length; e++)
                if (this._shipList[e].shipid == t) return this._shipList[e]
        },
        n.getPartById = function(t) {
            for (var e = 0; e < this._partsList.length; e++)
                if (this._partsList[e].id == t) return this._partsList[e]
        },
        n.getSoulById = function(t) {
            for (var e = 0; e < this._soulList.length; e++)
                if (this._soulList[e].id == t) return this._soulList[e]
        },
        n.getPartsByType = function(t, a) {
            for (var i = [], n = 0; n < this._partsList.length; n++) {
                var s = ConfigData.getDataByKey("parts", this._partsList[n].partsid);
                if (Number(s.type) == t)
                    if (a) {
                        var r = PartsManager.getInstance().getEquipfor(s.equipfor);
                        r.indexOf(e.getInstance().getShipTypeStrByType(a)) >= 0 && i.push(this._partsList[n])
                    } else i.push(this._partsList[n])
            }
            return i
        },
        n.getGoodAtSoulList = function(t) {
            for (var a = [], a = [], i = 0; i < this.soulList.length; i++) {
                var n = ConfigData.getDataByKey("medalData", this.soulList[i].soulid),
                    s = PartsManager.getInstance().getEquipfor(n.equipfor); - 1 != s.indexOf(e.getInstance().getShipTypeStrByType(t)) && a.push(this.soulList[i])
            }
            return a
        },
        n.isPartEquiped = function(t) {
            for (var e = 0; e < this.soldierList.length; e++)
                if (this.soldierList[e].partslist.indexOf(t) >= 0) return this.soldierList[e].shipid
        },
        n.isMedalEquiped = function(t) {
            for (var e = 0; e < this.soldierList.length; e++)
                if (this.soldierList[e].soullist.indexOf(t) >= 0) return this.soldierList[e].shipid
        },
        n.isCaptainEquiped = function(t) {
            for (var e = 0; e < this.soldierList.length; e++)
                if (this.soldierList[e].captainid == t) return this.soldierList[e].shipid
        },
        n.getShipPicByModelId = function(t) {
            var e = ShipmodeldataParser.GetInstance().getItemById(t);
            return e ? Path.shipURL + "y_" + e.url : ""
        },
        n.getShipPicByType = function(t) {
            var e = "",
                a = this.shipCfg[t];
            if (a) {
                var i = a.modelId,
                    n = this.shipModelCfg[i];
                n && (e = Path.shipURL + "y_" + n.url)
            }
            return e
        },
        n.getShipNameByType = function(t) {
            return Locales.get("warShipName_" + Math.floor(t / 100))
        },
        n.getShipTypeIcon = function(t) {
            return Path.shipTypeIconURL + "shipType" + t + ".png"
        },
        n.getShipPosLevel = function(t) {
            if (!this._posCfg) {
                this._posCfg = {};
                for (var e = ConfigData.getAllData("exp"), a = 1, i = 1; i <= e.length; i++) e[i].poslevel > a && (a = +e[i].poslevel, this._posCfg[a] = +e[i].level)
            }
            return this._posCfg[t]
        },
        n.getShipPaperIcon = function(t) {
            return Path.itemIconURL + "paperIconType_" + t + ".png"
        },
        n.remouldValue = function(t, e) {
            return t ? 10 >= t || 21 == t ? e / 100 : e / 10 : 0
        },
        n.sendChargePaper = function(t, e) {
            var a = Transport.getPkg(ProtocolMgr.ID_DceChargePaper);
            a.id = t,
                a.wanneng = e,
                Transport.instance.send(a)
        },
        n.handleChargePaper = function(t) {
            if (t.id, 0 == t.res) {
                if (Toast.launch("兑换成功"), WindowManager.getInstance().isWindowVisible(WindowManager.windowType.ExchangeBlueprint)) {
                    var e = WindowManager.getInstance().getWindow(WindowManager.windowType.ExchangeBlueprint);
                    e.sendPaperChargeCountMsg()
                }
            } else 1 == t.res ? Toast.launch("非法id") : 2 == t.res ? Toast.launch("非法类型") : 3 == t.res ? Toast.launch("vip等级不足") : 4 == t.res && Toast.launch("图纸碎片不足");
            t.wanneng
        },
        n.updateShipArrangeSpot = function() {
            var t = this;
            ConfigData.preLoadList(["medalData", "shipData", "captainData", "captainUpgradeData", "skillData", "trainData", "parts", "exp"],
                function() {
                    for (var e = 0,
                            a = 0,
                            i = 0; i < t._soldierList.length; i++) {
                        var n = t._soldierList[i];
                        n.shipid && "0" != n.shipid && (a += 1, e += t.getShipRedpoint(n))
                    }
                    UserData.getInstance().getCurPosNum() > a && t.getEmptyShips().length > 0 && (e += 1),
                        MainUI.instance.bottomUI.setArrangeSpot(e > 0)
                })
        },
        n.getShipRedpoint = function(t) {
            var e = this.getShipById(t.shipid),
                a = 0;
            return e && (a += RedPointManager.getShipRedPoint(t.shipid), a += RedPointManager.getCaptainRedPoint(t.captainid), a += this.getPartRedPoint(t), a += this.getMedalRedPoint(t)),
                a
        },
        n.getPartRedPoint = function(t) {
            var a = 0,
                i = this.getShipById(t.shipid);
            if (i)
                for (var n = Math.floor(i.shipid / 1e4), s = 0; 4 > s; s++) {
                    var r = this.getPartById(t.partslist[s]);
                    if (r) a += RedPointManager.getPartRedPoint(r, s + 1, n);
                    else
                        for (var o = e.getInstance().getPartsByType(s + 1, n), l = 0; l < o.length; l++)
                            if (!e.getInstance().isPartEquiped(o[l].id)) {
                                a += 1;
                                break
                            }
                }
            return a
        },
        n.getMedalRedPoint = function(t) {
            var a = 0,
                i = this.getShipById(t.shipid);
            if (i)
                for (var n = Math.floor(i.shipid / 1e4), s = 0; 6 > s; s++) {
                    var r = this.getSoulById(t.soullist[s]);
                    if (r) a += RedPointManager.getMedalRedPoint(n, r, ConfigData.getDataByKey("medalData", r.soulid));
                    else
                        for (var o = e.getInstance().getGoodAtSoulList(n), l = 0; l < o.length; l++) {
                            var h = ConfigData.getDataByKey("medalData", o[l].soulid);
                            9 == h.medalType || e.getInstance().isMedalEquiped(o[l].id) || (a += 1)
                        }
                }
            return a
        },
        e
}(egret.EventDispatcher);
