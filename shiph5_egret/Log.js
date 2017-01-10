
var GlobalFunction = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.getHMSBySecond = function(t, e) {
            void 0 === e && (e = ":");
            var a = Math.floor(t / 3600),
                i = Math.floor(t % 3600 / 60),
                n = Math.floor(t % 3600 % 60),
                s = "";
            return 0 == a && 0 == i && 0 == n ? s = "--" + e + "--" + e + "--" : (s += 0 == a ? "00" + e : a > 0 && 10 > a ? "0" + a + e : a + e, s += 0 == i ? "00" + e : i > 0 && 10 > i ? "0" + i + e : i + e, s += 0 == n ? "00" : n > 0 && 10 > n ? "0" + n : n)
        },
        t.getDropDataByTypeAndId = function(e, a, i) {
            var n = {};
            if (n.type = e, n.item = a, n.count = i, n.realCount = i, e == TypeDefine.Const.DROP_TYPE_ITEM) {
                var s = ItemParser.GetInstance().getItemById(a);
                s ? (n.name = s.name_l, n.desc = s.desc_l, n.icon = Path.itemIconURL + s.icon, n.quality = s.quality, n.configData = s) : Log.logError("ItemData is Null, dropType:" + e.toString() + ",id:" + a.toString())
            } else if (e == TypeDefine.Const.DROP_TYPE_PARTS) {
                var s = PartsParser.GetInstance().getItemById(a);
                s ? (n.name = s.name_l, n.icon = Path.partsIconURL + s.icon, n.quality = s.quality, n.configData = s, n.desc = s.desc_l) : Log.logError("PartData is Null, dropType:" + e.toString() + ",id:" + a.toString())
            } else if (e == TypeDefine.Const.DROP_TYPE_GOLD) n.name = Locales.get("panel_bagchestopen_txt_coin"),
                i && (n.name = i + n.name, n.count = void 0),
                n.icon = Path.itemIconURL + "jinbi.png",
                n.quality = 5;
            else if (e == TypeDefine.Const.DROP_TYPE_CASH) n.name = Locales.get("panel_bagchestopen_txt_diamond"),
                i && (n.name = i + n.name, n.count = void 0),
                n.icon = Path.itemIconURL + "zuanshi.png",
                n.quality = 5;
            else if (e == TypeDefine.Const.DROP_TYPE_SCIENCE) n.name = Locales.get("panel_bagchestopen_txt_science"),
                i && (n.name = i + n.name, n.count = void 0),
                n.icon = Path.itemIconURL + "kejidian.png",
                n.quality = 5;
            else if (e == TypeDefine.Const.DROP_TYPE_SHENGWANG) n.name = Locales.get("panel_reward_txt_comment_4"),
                i && (n.name = i + n.name, n.count = void 0),
                n.icon = Path.itemIconURL + "prestige.png",
                n.quality = 5;
            else if (e == TypeDefine.Const.DROP_TYPE_HONOR) n.name = Locales.get("panel_Military_upgrade_2"),
                i && (n.name = i + n.name, n.count = void 0),
                n.icon = Path.itemIconURL + "honor.png",
                n.quality = 5;
            else if (e == TypeDefine.Const.DROP_TYPE_GUARD_BIWU) n.name = Locales.get("panel_guard_biwu_comment_55"),
                i && (n.name = i + n.name, n.count = void 0),
                n.icon = Path.itemIconURL + "guard_biwu_prestige.png",
                n.quality = 5;
            else if (e == TypeDefine.Const.DROP_TYPE_GONGXUN) n.name = Locales.get("panel_reward_txt_comment_7"),
                i && (n.name = i + n.name, n.count = void 0),
                n.icon = Path.itemIconURL + "gongxunzhi_d.png",
                n.quality = 5;
            else if (e == TypeDefine.Const.DROP_TYPE_JINGGONG_MONEY) n.name = Locales.get("panel_jinggong_show_item_txt_2"),
                i && (n.name = i + n.name, n.count = void 0),
                n.icon = Path.itemIconURL + "money_jinggong.png",
                n.quality = 5;
            else if (e == TypeDefine.Const.DROP_TYPE_JINGGONG_POINT) n.name = Locales.get("panel_jinggong_show_item_txt_1"),
                i && (n.name = i + n.name, n.count = void 0),
                n.icon = Path.itemIconURL + "money_jinggong_point.png",
                n.quality = 5;
            else if (e == TypeDefine.Const.DROP_TYPE_GERENGONGXIAN) n.name = Locales.get("panel_globalGuildBattle_txt_72"),
                i && (n.name = i + n.name, n.count = void 0),
                n.icon = Path.itemIconURL + "global_GuildBattle_power_big.png",
                n.quality = 5;
            else if (e == TypeDefine.Const.DROP_TYPE_PAPER) {
                var s = PaperdataParser.GetInstance().getItemById(a);
                if (s) {
                    var r = ShipdataParser.GetInstance().getItemById(s.shipId).modelId,
                        o = ShipmodeldataParser.GetInstance().getItemById(r);
                    n.name = s.name_l,
                        n.icon = ShipManager.getInstance().getShipPaperIcon(o.shipType),
                        n.quality = s.quality,
                        n.configData = s,
                        n.desc = Locales.get("panel_duihuan_paper_desc_1", n.name, t.getShipType(o.shipType))
                } else Log.logError("PaperData is Null, dropType:" + e + ",id:" + a)
            } else if (e == TypeDefine.Const.DROP_TYPE_PAPERPIECE) {
                var s = PaperpiecedataParser.GetInstance().getItemById(a);
                if (s) {
                    var l = PaperdataParser.GetInstance().getItemById(s.paperId);
                    n.name = s.name_l,
                        n.icon = ShipManager.getInstance().getShipPaperIcon(l.shipType),
                        n.quality = s.quality,
                        n.configData = s,
                        n.ispieces = !0,
                        n.desc = s.desc_l
                } else Log.logError("PaperPieceData is Null, dropType:" + e + ",id:" + a)
            } else if (e == TypeDefine.Const.DROP_TYPE_VIRTUAL) {
                var s = VirtualdataParser.GetInstance().getItemById(a);
                s ? (n.name = s.name_l, n.icon = Path.itemIconURL + s.icon, n.quality = s.quality, n.configData = s, n.desc = s.desc_l) : Log.logError("VirtualData is Null, dropType:" + e + ",id:" + a)
            } else if (e == TypeDefine.Const.DROP_TYPE_PARTSPIECE) {
                var s = PartspiecesParser.GetInstance().getItemById(a);
                if (s) {
                    var h = PartsParser.GetInstance().getItemById(s.part_id);
                    n.name = s.name_l,
                        n.icon = Path.partsIconURL + s.icon,
                        n.quality = h.quality,
                        n.configData = s,
                        n.ispieces = !0,
                        n.desc = s.desc_l
                } else Log.logError("PartspiecesData is Null, dropType:" + e + ",id:" + a)
            } else if (e == TypeDefine.Const.DROP_TYPE_ACTIVITY) {
                var s = ActivityitemParser.GetInstance().getItemById(a);
                s ? (n.name = s.name_l, n.icon = Path.itemIconURL + s.icon, n.quality = s.quality, n.configData = s, n.desc = s.desc_l) : Log.logError("acitivityitem is Null, dropType:" + e + ",id:" + a)
            } else if (e == TypeDefine.Const.DROP_TYPE_MEDALPIECE) {
                var s = MedalpieceParser.GetInstance().getItemById(a);
                if (s) {
                    var c = MedaldataParser.GetInstance().getItemById(s.medal_id);
                    n.name = s.name_l,
                        n.icon = Path.itemIconURL + s.icon,
                        n.quality = c.quality,
                        n.configData = s,
                        n.desc = s.desc_l,
                        n.ispieces = !0
                } else Log.logError("medalpiece is Null, dropType:" + e + ",id:" + a)
            } else if (e == TypeDefine.Const.DROP_TYPE_CAPTAIN) {
                var s = CaptaindataParser.GetInstance().getItemById(a);
                s ? (n.name = s.name_l, n.icon = Path.captainIconURL + s.pictureSmall, n.quality = s.quality, n.configData = s, n.desc = "") : Log.logError("captaindata is Null, dropType:" + e + ",id:" + a)
            } else if (e == TypeDefine.Const.DROP_TYPE_CAPTAINPIECE) {
                var s = CaptainpiecedataParser.GetInstance().getItemById(a);
                if (s) {
                    var d = CaptaindataParser.GetInstance().getItemById(s.captainId);
                    n.name = s.name_l,
                        n.icon = Path.captainIconURL + d.pictureSmall,
                        n.quality = d.quality,
                        n.configData = s,
                        n.ispieces = !0,
                        n.desc = s.desc_l
                } else Log.logError("captainpiece is Null, dropType:" + e + ",id:" + a)
            } else if (e == TypeDefine.Const.DROP_TYPE_JINGGONG) {
                var s = SeikoParser.GetInstance().getItemById(a);
                s ? (n.name = s.name_l, n.icon = Path.seikoUrl + s.icon, n.quality = s.quality, n.configData = s, n.desc = s.desc_l) : Log.logError("seiko is Null, dropType:", e, "id:", a)
            } else if (e == TypeDefine.Const.DROP_TYPE_JINGGONG_SUIPIAN) {
                var s = SeikopieceParser.GetInstance().getItemById(a);
                if (s) {
                    SeikoParser.GetInstance().getItemById(s.seikoId);
                    n.name = s.name_l,
                        n.icon = Path.seikoUrl + s.icon,
                        n.quality = s.quality,
                        n.desc = s.desc_l,
                        n.ispieces = !0
                } else Log.logError("seikopiece is Null, dropType:", e, "id:", a)
            } else if (e == TypeDefine.Const.DROP_TYPE_XUNZHANG) {
                var s = MedaldataParser.GetInstance().getItemById(a);
                s ? (n.name = s.name_l, n.icon = Path.soulIconURL + s.icon, n.quality = s.quality, n.configData = s, n.desc = s.desc_l) : Log.logError("medaldata is Null, dropType:", e, "id:", a)
            } else e == TypeDefine.Const.DROP_TYPE_OIL && (n.name = Locales.get("panel_reward_txt_comment_5"), i && (n.name = i + n.name, n.count = void 0), n.icon = Path.itemIconURL + "yuanyou.png", n.quality = 5);
            return n
        },
        t.getShipType = function(t) {
            return Locales.get("GlobalSystem_ShipType_" + t)
        },
        t.getItemByData = function(e) {
            return t.getDropDataByTypeAndId(e.type, e.id, e.count)
        },
        t.getDateByTimeNum = function(t) {
            t = 1e3 * t;
            var e = new Date(t);
            return e
        },
        t.checkIsNPC = function(t) {
            var e = t.toString();
            return e.length < 10
        },
        t
}();
