
var BuffManager = function() {
    function t() {
        this.BuffName = [],
            this.BuffNameRemould = [],
            this.init()
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return e(t, "instance",
            function() {
                return t._instance || (t._instance = new t),
                    t._instance
            }),
        i.init = function() {
            this.BuffName = [{},
                    {
                        name: Locales.get("BUFFSYSTEM_FIRE_ATK_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_FIRE_ATK_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EXPL_ATK_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EXPL_ATK_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_FIER_DEF_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_FIRE_DEF_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EXPL_DEF_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EXPL_DEF_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_HP_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_HP_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SPD_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SPD_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_HIT_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_HIT_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EVA_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EVA_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_CRI_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_CRI_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_DECRI_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_DECRI_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_CRI_DMG_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SKILL_USE_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SKILL_DMG_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SKILL_HIT_PER")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_TO_JAP_DEF_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_TO_GAR_DEF_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_TO_USA_DEF_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_TO_ENG_DEF_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_ADD_SH_CON")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SUB_SH_CON")
                    }
                ],
                this.BuffNameRemould = [{},
                    {
                        name: Locales.get("BUFFSYSTEM_FIRE_ATK_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_FIRE_ATK_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EXPL_ATK_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EXPL_ATK_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_FIER_DEF_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_FIRE_DEF_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EXPL_DEF_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EXPL_DEF_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_HP_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_HP_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SPD_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SPD_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_HIT_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_HIT_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EVA_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_EVA_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_CRI_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_CRI_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_DECRI_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_DECRI_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_CRI_DMG_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SKILL_USE_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SKILL_DMG_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SKILL_HIT_PER_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_TO_JAP_DEF_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_TO_GAR_DEF_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_TO_USA_DEF_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_TO_ENG_DEF_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_ADD_SH_CON_2")
                    },
                    {
                        name: Locales.get("BUFFSYSTEM_SUB_SH_CON_2")
                    }
                ]
        },
        i.getBuffNameById = function(t) {
            return t >= 1 && t < this.BuffName.length ? this.BuffName[t] : "Error"
        },
        i.getBuffNameByIdForRemould = function(t) {
            return t >= 1 && t < this.BuffNameRemould.length ? this.BuffNameRemould[t] : "Error"
        },
        i.getBuffValueById = function(e, a) {
            return e == t.FIRE_ATK_CON || e == t.EXPL_ATK_CON || e == t.FIER_DEF_CON || e == t.EXPL_DEF_CON || e == t.HP_CON || e == t.SPD_CON || e == t.HIT_CON || e == t.EVA_CON || e == t.CRI_CON || e == t.DECRI_CON ? a / 1e3 * 100 + "%" : a / 100 + "%"
        },
        i.getBuffCurValueById = function(t, e) {
            return 2 == t || 4 == t || 6 == t || 8 == t || 10 == t || 12 == t || 21 == t || 22 == t || 23 == t || 24 == t || t >= 32 && 42 >= t ? e / 1e4 * 100 + "%" : 13 == t || 14 == t || 15 == t || 16 == t || 17 == t || 18 == t || 19 == t || 20 == t ? e / 1e3 * 100 + "%" : e
        },
        t.FIRE_ATK_CON = 1,
        t.FIRE_ATK_PER = 2,
        t.EXPL_ATK_CON = 3,
        t.EXPL_ATK_PER = 4,
        t.FIER_DEF_CON = 5,
        t.FIRE_DEF_PER = 6,
        t.EXPL_DEF_CON = 7,
        t.EXPL_DEF_PER = 8,
        t.HP_CON = 9,
        t.HP_PER = 10,
        t.SPD_CON = 11,
        t.SPD_PER = 12,
        t.HIT_CON = 13,
        t.HIT_PER = 14,
        t.EVA_CON = 15,
        t.EVA_PER = 16,
        t.CRI_CON = 17,
        t.CRI_PER = 18,
        t.DECRI_CON = 19,
        t.DECRI_PER = 20,
        t.CRI_DMG_PER = 21,
        t.SKILL_USE_PER = 22,
        t.SKILL_DMG_PER = 23,
        t.SKILL_HIT_PER = 24,
        t.TO_JAP_DEF_CON = 25,
        t.TO_GAR_DEF_CON = 26,
        t.TO_USA_DEF_CON = 27,
        t.TO_ENG_DEF_CON = 28,
        t.ADD_SH_CON = 29,
        t.SUB_SH_CON = 30,
        t
}();
