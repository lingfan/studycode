
var BattleTeamOptData = function() {
    function t(t, e, a, i, n, s) {
        this.uid = t,
            this.name = e,
            this.list = i,
            this.captainOptData = n,
            this.isLeft = s,
            this.speed = a
    }
    var e = (__define, t);
    e.prototype;
    return t.processDataByTacticInfo = function(e, a) {
            var i = null,
                n = null,
                s = 0,
                r = !1,
                o = a,
                l = BattleShipOptData.TYPE_PLAYER,
                h = "",
                c = BattleManager.instance.battleType,
                d = UserData.getInstance().uid,
                g = UserData.getInstance().username;
            if (c == BattleType.BATTLE_TYPE_MAIN_PVE) e.uid == d ? (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = g) : (r = !1, l = BattleShipOptData.TYPE_NPC, h = Locales.get(MainWorldManager.instance.campaign().team_l));
            else if (c == BattleType.BATTLE_TYPE_MAIN_SPECIAL) e.uid == d ? (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = g) : (r = !1, l = BattleShipOptData.TYPE_NPC, MainWorldManager.instance.bakeSpecialData && (h = StagespecialdataParser.GetInstance().getItemById(MainWorldManager.instance.bakeSpecialData.id).name_l));
            else if (c == BattleType.BATTLE_TYPE_TRANSPORT) e.uid == d ? (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = g) : (r = !1, l = BattleShipOptData.TYPE_NPC, h = StagespecialdataParser.GetInstance().getItemById(e.uid).name_l);
            else if (c == BattleType.BATTLE_TYPE_PRESSURE) e.uid == d ? (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = g) : (r = !1, l = BattleShipOptData.TYPE_NPC, h = StagespecialdataParser.GetInstance().getItemById(e.uid).name_l);
            else if (c == BattleType.BATTLE_TYPE_GUARD_OIL)
                if (e.uid == d) r = !0,
                    l = BattleShipOptData.TYPE_PLAYER,
                    h = g;
                else {
                    var u = WindowDefenseOil.curstage + 1,
                        p = NpcdataParser.GetInstance().getItemById(DefencestagedataParser.GetInstance().getItemById(u).pos8);
                    r = !1,
                        l = BattleShipOptData.TYPE_NPC,
                        h = Locales.get(p.name_l)
                }
            else if (c == BattleType.BATTLE_TYPE_ARENA)
                if (e.uid == d) r = !0,
                    l = BattleShipOptData.TYPE_PLAYER,
                    h = g;
                else {
                    r = !1,
                        l = e.uid.length < 10 ? BattleShipOptData.TYPE_NPC : BattleShipOptData.TYPE_PLAYER;
                    var m = ArenanpcdataParser.GetInstance().getItemById(e.uid);
                    h = m ? m.name_l : e.name ? e.name : ""
                }
            else if (c == BattleType.BATTLE_TYPE_ZONGHENG) e.uid == d && (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = g);
            else if (c == BattleType.BATTLE_TYPE_ROBBERY)
                if (e.uid == d) r = !0,
                    l = BattleShipOptData.TYPE_PLAYER,
                    h = g;
                else {
                    r = !1,
                        l = e.uid.length < 10 ? BattleShipOptData.TYPE_NPC : BattleShipOptData.TYPE_PLAYER;
                    var m = RobnpcdataParser.GetInstance().getItemById(e.uid);
                    h = m ? Locales.get(m.name_l) : e.name ? e.name : ""
                }
            else c == BattleType.BATTLE_TYPE_VIRTUAL ? e.uid == d ? (r = !0, l = BattleShipOptData.TYPE_VIRTUAL, h = Locales.get("virtualBattleTitleLeft")) : (r = !1, l = BattleShipOptData.TYPE_VIRTUAL, h = Locales.get("virtualBattleTitleRight")) : c == BattleType.BATTLE_TYPE_GLOBALARENA ? e.uid == d ? (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = g) : (r = !1, l = BattleShipOptData.TYPE_PLAYER, h = e.name) : c == BattleType.BATTLE_TYPE_EMAIL_REPLAY ? e.uid == d ? (r = !1, l = BattleShipOptData.TYPE_PLAYER, h = g) : (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = e.name) : c == BattleType.BATTLE_TYPE_WORLDBATTLE_REPLAY ? 1 == o ? (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = e.name) : (r = !1, l = BattleShipOptData.TYPE_PLAYER, h = e.name) : c == BattleType.BATTLE_TYPE_GLOBAL_GUILD ? 1 == o ? (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = e.name) : (r = !1, l = BattleShipOptData.TYPE_PLAYER, h = e.name) : c == BattleType.BATTLE_TYPE_POLT ? e.uid == d && (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = g) : c == BattleType.BATTLE_TYPE_GOLDISLAND ? e.uid == d && (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = g) : c == BattleType.BATTLE_TYPE_CHALLENGEARMADA ? e.uid == d ? (r = !0, l = BattleShipOptData.TYPE_PLAYER, h = g) : (r = !1, l = BattleShipOptData.TYPE_NPC, h = e.name) : Log.logError("BattleTeamOptData not Init !!!");
            var _ = BattleShipOptData.processData(e.shiplist, r, e.captionid, l, e.reserveshiplist);
            i = _.list,
                n = _.captain,
                s = _.speed;
            var v = new t(e.uid, h, s, i, n, r);
            return v
        },
        t
}();
