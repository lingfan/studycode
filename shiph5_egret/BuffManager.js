
var BroadCastManager = function() {
    function t() {
        this.RadioList = [],
            this.box_color = ["ffffff", "00f82f", "00c6ff", "ff2cfd", "ffc12c"]
    }
    var e = (__define, t),
        a = e.prototype;
    return a.addRadio = function(t) {
            var e = this,
                a = {};
            1 == t.type || (2 == t.type ? ConfigData.preLoadDats(["campBattleMapData", "campBattleNPCData", "broadcast"], [CampbattlemapdataParser, CampbattlenpcdataParser, BroadcastParser],
                    function() {
                        var i = !1,
                            n = !1,
                            s = !1;
                        CampBattleManager.RADIOLIST[t.id] || CampBattleManager.RADIOLIST[t.id] ? (s = !0, (CampBattleManager.REPORTLIST[t.id] || CampBattleManager.REPORTLIST[t.id]) && (n = !0), (CampBattleManager.NEEDRADIOLIST[t.id] || CampBattleManager.NEEDRADIOLIST[t.id]) && (i = !0), 15 == Math.floor(t.id) && 31 == Math.floor(t.param[2]) ? i = !0 : 15 == Math.floor(t.id) && (i = !1)) : i = !0;
                        var r = BroadcastParser.GetInstance().getItemById(t.id),
                            o = BroadCastDataLib.instance.getContent(t.id);
                        a.id = t.id,
                            a.serverType = t.type,
                            a.type = t.type,
                            a.color = r.color.concat(),
                            a.priority = r.priority,
                            a.content = o,
                            a.param = t.param,
                            a.pkgParam = e.getParam(t.param, t.id, a.color),
                            a.rank = e.RadioList.length,
                            a.time = UserData.getInstance().getServerTime(),
                            WindowManager.getInstance().isWindowVisible(WindowManager.windowType.CampBattle) ? i && e.RadioList.push(a) : e.RadioList.push(a),
                            1 == n && WindowManager.getInstance().isWindowVisible(WindowManager.windowType.CampBattle) && CampBattleManager.instance.addReportList(a)
                    },
                    this) : 3 == t.type),
                ConfigData.preLoadDats(["broadcast", "parts", "paperData", "item", "shipData", "campBattleMapData", "campBattleNPCData", "campBattleMapData", "shipdata", "captainData", "medalData"], [BroadcastParser, PartsParser, PaperdataParser, ItemParser, ShipdataParser, CampbattlemapdataParser, CampbattlenpcdataParser, CampbattlemapdataParser, ShipdataParser, CaptaindataParser, MedaldataParser],
                    function() {
                        var e = BroadcastParser.GetInstance().getItemById(t.id),
                            a = e.content_l;
                        if (Main.trace(Log.objectToString(t)), t.param.length > 0) {
                            var i = [t.param[0]];
                            if (1 == t.id) {
                                var n = ["dj", "zj", "gj", "wp"];
                                i.push(Locales.get("panel_shop_txt_spy_" + n[Number(t.param[1]) - 1] + "_name")),
                                    i.push(PaperdataParser.GetInstance().getItemById(t.param[2]).name_l)
                            } else if (2 == t.id) i.push(PaperdataParser.GetInstance().getItemById(t.param[1]).name_l);
                            else if (3 == t.id) i.push(ItemParser.GetInstance().getItemById(t.param[1]).name_l),
                                2 == t.param[2] ? i.push(PartsParser.GetInstance().getItemById(t.param[3]).name_l) : i.push(PaperdataParser.GetInstance().getItemById(t.param[3]).name_l);
                            else if (4 == t.id) i.push(t.param[1]);
                            else if (5 == t.id) i.push(ShipdataParser.GetInstance().getItemById(t.param[1]).name_l),
                                i.push(ShipdataParser.GetInstance().getItemById(t.param[2]).name_l);
                            else if (6 == t.id) {
                                var s = PartsParser.GetInstance().getItemById(t.param[1]).name_l;
                                i.push(s + "+" + t.param[2]),
                                    i.push(s + "+" + t.param[3])
                            } else 7 == t.id ? (i.push(t.param[1]), i.push(t.param[2])) : 8 == t.id ? (i.push(ItemParser.GetInstance().getItemById(t.param[1]).name_l), i.push(t.param[2])) : 11 == t.id ? (i.shift(), i.push(CampbattlemapdataParser.GetInstance().getItemById(t.param[0]).name_l), 1 == Number(t.param[5]) ? i.push(CampbattlenpcdataParser.GetInstance().getItemById(t.param[1]).name_l) : i.push(t.param[1]), i.push(Locales.get("panel_personinf_txt_camp_" + t.param[2])), i.push("-" + t.param[3]), i.push("+" + t.param[4])) : 12 == t.id ? (i.shift(), 1 == Number(t.param[4]) ? i.push(CampbattlenpcdataParser.GetInstance().getItemById(t.param[0]).name_l) : i.push(t.param[0]), i.push(Locales.get("panel_personinf_txt_camp_" + t.param[1])), i.push(CampbattlemapdataParser.GetInstance().getItemById(t.param[2]).name_l), i.push("-" + t.param[3])) : 13 == t.id ? (i.push(Locales.get("panel_personinf_txt_camp_" + t.param[1])), i.push(CampbattlemapdataParser.GetInstance().getItemById(t.param[2]).name_l), i.push(t.param[3])) : 14 == t.id ? (i.shift(), 1 == Number(t.param[6]) ? i.push(CampbattlenpcdataParser.GetInstance().getItemById(t.param[0]).name_l) : i.push(t.param[0]), i.push(Locales.get("panel_personinf_txt_camp_" + t.param[1])), i.push(CampbattlemapdataParser.GetInstance().getItemById(t.param[2]).name_l), i.push(t.param[3]), i.push(Locales.get("panel_personinf_txt_camp_" + t.param[4])), i.push(t.param[5])) : 15 == t.id ? (i.shift(), 1 == Number(t.param[3]) ? i.push(CampbattlenpcdataParser.GetInstance().getItemById(t.param[0]).name_l) : i.push(t.param[0]), i.push(Locales.get("panel_personinf_txt_camp_" + t.param[1])), i.push(CampbattlemapdataParser.GetInstance().getItemById(t.param[2]).name_l), i.push(Locales.get("panel_personinf_txt_camp_" + t.param[1]))) : 17 == t.id ? (i.push(t.param[1]), i.push(t.param[2]), i.push(t.param[3])) : 20 == t.id ? (i.push(t.param[1]), i.push(t.param[2])) : 31 == t.id ? (i.push(ShipdataParser.GetInstance().getItemById(t.param[1]).name_l), i.push(ShipdataParser.GetInstance().getItemById(t.param[2]).name_l)) : 35 == t.id ? i.push(t.param[1]) : 42 == t.id ? i.push(CaptaindataParser.GetInstance().getItemById(t.param[1]).name_l) : 43 == t.id ? (i.push(CaptaindataParser.GetInstance().getItemById(t.param[1]).name_l), i.push(Locales.get("panel_jianzhang_junxian_" + t.param[2]))) : 44 == t.id || 45 == t.id ? i.push(CaptaindataParser.GetInstance().getItemById(t.param[1]).name_l) : 64 == t.id && (i.push(MedaldataParser.GetInstance().getItemById(t.param[1]).name_l + "+" + t.param[2]), i.push(MedaldataParser.GetInstance().getItemById(t.param[1]).name_l + "+" + t.param[3]));
                            for (var r = 1; r <= i.length; r++) a = a.replace("#0" + r.toString() + "#", "#" + e.color[r - 1] + i[r - 1] + "#")
                        }
                        new WindowBroadCast(Utils.textFlowByStr(a))
                    })
        },
        a.deleteRadio = function() {
            this.RadioList.shift()
        },
        a.getParam = function(t, e, a) {
            var i = [];
            if (CampBattleManager.RADIOLIST[e] || i.push(t[0]), 1 == e) {
                var n = "";
                1 == Number(t[1]) ? n = Locales.get("panel_shop_txt_spy_dj_name") : 2 == Number(t[1]) ? n = Locales.get("panel_shop_txt_spy_zj_name") : 3 == Number(t[1]) ? n = Locales.get("panel_shop_txt_spy_gj_name") : 4 == Number(t[1]) && (n = Locales.get("panel_shop_txt_spy_wp_name"));
                var s = PaperdataParser.GetInstance().getItemById(t[2]).name_l;
                i.push(n),
                    i.push(s)
            } else if (2 == e) {
                var s = PaperdataParser.GetInstance().getItemById(t[1]).name_l;
                i.push(s)
            } else if (3 == e) {
                var n = ItemParser.GetInstance().getItemById(t[1]).name_l;
                a[1] = this.box_color[ItemParser.GetInstance().getItemById(t[1]).quality - 1];
                var s = null;
                s = 2 == Number(t[2]) ? PartsParser.GetInstance().getItemById(t[3]).name_l : PaperdataParser.GetInstance().getItemById(t[3]).name_l,
                    i.push(n),
                    i.push(s)
            } else if (4 == e) i.push(t[1]);
            else if (11 == e) {
                var r = CampbattlemapdataParser.GetInstance().getItemById(t[0]).name_l;
                if (i.push(r), "1" == t[5]) {
                    var o = CampbattlenpcdataParser.GetInstance().getItemById(t[1]).name_l;
                    i.push(o)
                } else i.push(t[1]);
                a[2] = CampBattleManager.COLOR_16_LIST[Number(t[2])],
                    i.push(Locales.get("panel_personinf_txt_camp_" + t[2])),
                    i.push("-" + t[3]),
                    i.push("+" + t[4])
            } else if (12 == e) {
                var r = CampbattlemapdataParser.GetInstance().getItemById(t[2]).name_l,
                    o = CampbattlenpcdataParser.GetInstance().getItemById(t[0]).name_l;
                "1" == t[4] ? i.push(o) : i.push(t[0]),
                    a[1] = CampBattleManager.COLOR_16_LIST[Number(t[1])],
                    i.push(Locales.get("panel_personinf_txt_camp_" + t[1])),
                    i.push(r),
                    i.push("-" + t[3])
            } else if (13 == e) {
                var r = CampbattlemapdataParser.GetInstance().getItemById(t[2]).name_l;
                i.push(t[0]),
                    a[1] = CampBattleManager.COLOR_16_LIST[Number(t[1])],
                    i.push(Locales.get("panel_personinf_txt_camp_" + t[1])),
                    i.push(r),
                    i.push(t[3])
            } else if (14 == e) {
                var r = CampbattlemapdataParser.GetInstance().getItemById(t[2]).name_l;
                if ("1" == t[6]) {
                    var o = CampbattlenpcdataParser.GetInstance().getItemById(t[0]).name_l;
                    i.push(o)
                } else i.push(t[0]);
                a[1] = CampBattleManager.COLOR_16_LIST[Number(t[1])],
                    i.push(Locales.get("panel_personinf_txt_camp_" + t[1])),
                    i.push(r),
                    i.push(t[3]),
                    a[4] = CampBattleManager.COLOR_16_LIST[Number(t[4])],
                    i.push(Locales.get("panel_personinf_txt_camp_" + t[4])),
                    i.push(t[5])
            } else if (15 == e) {
                var r = CampbattlemapdataParser.GetInstance().getItemById(t[2]).name_l;
                if ("1" == t[3]) {
                    var o = CampbattlenpcdataParser.GetInstance().getItemById(t[0]).name_l;
                    i.push(o)
                } else i.push(t[0]);
                a[1] = CampBattleManager.COLOR_16_LIST[Number(t[1])],
                    i.push(Locales.get("panel_personinf_txt_camp_" + t[1])),
                    i.push(r),
                    a[3] = CampBattleManager.COLOR_16_LIST[Number(t[1])],
                    i.push(Locales.get("panel_personinf_txt_camp_" + t[1]))
            } else if (20 == e) {
                if ("1" == t[3]) {
                    var l = CampbattlenpcdataParser.GetInstance().getItemById(t[0]).name_l;
                    i.push(l)
                } else i.push(t[0]);
                CampbattlenpcdataParser.GetInstance().getItemById(t[1]).name_l;
                i.push(t[2])
            } else if (21 == e) {
                var s = t[1];
                i.push(s)
            } else if (22 == e) {
                var h = Number(t[1]);
                i.push(PaperdataParser.GetInstance().getItemById(h).name_l)
            }
            return i
        },
        t.instance = new t,
        t
}();
