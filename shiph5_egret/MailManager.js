
var ItemsManager = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return void 0 == this._instance && (this._instance = new t),
                this._instance
        },
        a.setData = function(t) {
            this.items = [];
            for (var e = 0; e < t.length; e++) {
                var a = ItemParser.GetInstance().getItemById(t[e].id);
                this.items.push({
                    id: t[e].id,
                    count: t[e].count,
                    type: a.type,
                    rank: a.rank
                })
            }
            this.items.sort(function(t, e) {
                    return t.rank > e.rank ? 1 : -1
                }),
                MilitaryManager.GetInstance().MilitaryTips()
        },
        a.getItemById = function(t) {
            for (var e = 0; e < this.items.length; e++)
                if (this.items[e].id == t) return this.items[e];
            return null
        },
        a.bagitemUseById = function(t, e) {
            void 0 === e && (e = 0),
                WindowManager.getInstance().showWaiting();
            var a = Transport.getPkg(ProtocolMgr.ID_DceUseProp);
            a.id = t,
                a.useten = e,
                Transport.instance.send(a)
        },
        a.getListByType = function(t) {
            for (var e = [], a = 0; a < this.items.length; a++) {
                var i = ItemParser.GetInstance().getItemById(this.items[a].id);
                0 == t ? e.push(this.items[a]) : 1 == t && 3 == i.type ? e.push(this.items[a]) : 2 == t && 3 != i.type && e.push(this.items[a])
            }
            return e
        },
        a.showDropTips = function(t) {
            for (var e = "",
                    a = 0; a < t.length; a++) {
                var i = !1,
                    n = "",
                    s = "";
                if (t[a].type == TypeDefine.Const.DROP_TYPE_ITEM) {
                    n = "获得道具:#";
                    var r = ItemParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_PARTS) {
                    n = "获得配件:#";
                    var r = PartsParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_GOLD) {
                    var o = 16777215;
                    e += "获得:#" + o.toString(16) + "金币x" + t[a].count + "#\n",
                        i = !0
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_CASH) {
                    var o = 16777215;
                    e += "获得:#" + o.toString(16) + "钻石x" + t[a].count + "#\n",
                        i = !0
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_SCIENCE) {
                    var o = 16777215;
                    e += "获得:#" + o.toString(16) + "科技点x" + t[a].count + "#\n",
                        i = !0
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_PAPER) {
                    n = "获得图纸:#";
                    var r = PaperdataParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_PAPERPIECE) {
                    n = "获得图纸碎片:#";
                    var r = PaperpiecedataParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_VIRTUAL) {
                    n = "获得代币道具:#";
                    var r = VirtualdataParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_OIL) {
                    var o = 16777215;
                    e = "获得:#" + o.toString(16) + "原油x" + t[a].count + "#\n",
                        i = !0
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_PARTSPIECE) {
                    n = "获得配件碎片:#";
                    var r = PartspiecesParser.GetInstance().getItemById(t[a].id),
                        l = PartsParser.GetInstance().getItemById(r.part_id);
                    r && (s = QualitySystem.getColorByQuality(l.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_XUNZHANG) {
                    n = "获得勋章:#";
                    var r = MedaldataParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_ACTIVITY) {
                    n = "获得活动道具:#";
                    var r = ActivityitemParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_CAPTAIN) {
                    n = "获得舰长:#";
                    var r = CaptaindataParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_CAPTAINPIECE) {
                    n = "获得舰长碎片:#";
                    var r = CaptainpiecedataParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_MEDALPIECE) {
                    n = "获得勋章碎片:#";
                    var r = MedalpieceParser.GetInstance().getItemById(t[a].id),
                        l = MedaldataParser.GetInstance().getItemById(r.medal_id);
                    r && (s = QualitySystem.getColorByQuality(l.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_GONGXUN) {
                    var o = 16777215;
                    e += "获得:#" + o.toString(16) + "功勋点x" + t[a].count + "#\n",
                        i = !0
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_JINGGONG) {
                    n = "获得精工:#";
                    var r = SeikoParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_JINGGONG_SUIPIAN) {
                    n = "获得精工碎片:#";
                    var r = SeikopieceParser.GetInstance().getItemById(t[a].id);
                    r && (s = QualitySystem.getColorByQuality(r.quality).toString(16) + r.name_l)
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_JINGGONG_MONEY) {
                    var o = 16777215;
                    e = "获得:#" + o.toString(16) + "精工币x" + t[a].count + "#\n",
                        i = !0
                } else if (t[a].type == TypeDefine.Const.DROP_TYPE_JINGGONG_POINT) {
                    var o = 16777215;
                    e = "获得:#" + o.toString(16) + "点精工点x" + t[a].count + "#\n",
                        i = !0
                }
                i || (e += n + s + "x" + t[a].count + "#\n")
            }
            Toast.launch(e, 16777215, !0)
        },
        t
}();
