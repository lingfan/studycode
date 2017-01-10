
var BuffData = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.getBuffNameById = function(e) {
            return Locales.get(t.bufffLandString[e - 1] || "DecListPanel_txt_item_prop_" + e)
        },
        t.getAdvanceBuffDesc = function(t) {
            var e, a = ConfigData.getDataByKey("AdvancedbuffData", t),
                i = ConfigData.getAllData("skillData"),
                n = a.buffValue1.split("|");
            for (var s in i)
                if (i[s].idType == n[1]) {
                    e = i[s];
                    break
                }
            if (e) {
                var r = e.desc2_l + "+" + n[2] / 100 + "%";
                return r
            }
            return "undefined"
        },
        t.getBuffValue = function(t, e) {
            void 0 === e && (e = 1);
            var a = "";
            return a = 21 == t.buff || 22 == t.buff ? t.buffValue * e / 100 + "%" : (t.buffValue * e).toString()
        },
        t.bufffLandString = ["BUFFSYSTEM_FIRE_ATK_CON", "BUFFSYSTEM_FIRE_ATK_PER", "BUFFSYSTEM_EXPL_ATK_CON", "BUFFSYSTEM_EXPL_ATK_PER", "BUFFSYSTEM_FIER_DEF_CON", "BUFFSYSTEM_FIRE_DEF_PER", "BUFFSYSTEM_EXPL_DEF_CON", "BUFFSYSTEM_EXPL_DEF_PER", "BUFFSYSTEM_HP_CON", "BUFFSYSTEM_HP_PER", "BUFFSYSTEM_SPD_CON", "BUFFSYSTEM_SPD_PER", "BUFFSYSTEM_HIT_CON", "BUFFSYSTEM_HIT_PER", "BUFFSYSTEM_EVA_CON", "BUFFSYSTEM_EVA_PER", "BUFFSYSTEM_CRI_CON", "BUFFSYSTEM_CRI_PER", "BUFFSYSTEM_DECRI_CON", "BUFFSYSTEM_DECRI_PER", "BUFFSYSTEM_CRI_DMG_PER", "BUFFSYSTEM_SKILL_USE_PER", "BUFFSYSTEM_SKILL_DMG_PER", "BUFFSYSTEM_SKILL_HIT_PER", "BUFFSYSTEM_TO_JAP_DEF_CON", "BUFFSYSTEM_TO_GAR_DEF_CON", "BUFFSYSTEM_TO_USA_DEF_CON", "BUFFSYSTEM_TO_ENG_DEF_CON", "BUFFSYSTEM_ADD_SH_CON", "BUFFSYSTEM_SUB_SH_CON"],
        t
}();
