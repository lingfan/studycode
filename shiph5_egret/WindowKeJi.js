
var HegemonyItem = function(t) {
    function e(e) {
        t.call(this),
            this.iData = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/zhengba_commonSkin.exml"
            /*tpa=resource/eui_skins/item/zhengba_commonSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onDataUpdate = function() {
            if (this.iData.id == HegemonyType.arena) {
                var t = ArenaManager.instance.getLeftTimes();
                this.txtFlag.textFlow = Utils.textFlowByStr(Locales.get(0 == t ? "panel_active_game_desc_4_0" : "panel_active_game_desc_4_1", t))
            } else if (this.iData.id == HegemonyType.precious) {
                var t = UserData.getInstance().getRes(TypeDefine.RES.XunBaoLing);
                this.txtFlag.textFlow = Utils.textFlowByStr(Locales.get(0 == t ? "panel_active_game_desc_3_0" : "panel_active_game_desc_3_1", t))
            }
        },
        i.init = function() {
            this.txtFlag0.text = this.txtFlag.text = "",
                this.txtLimit.text = "";
            var t = 0;
            if (this.iData.id == HegemonyType.dayectype) Utils.getImgByUrl(Path.zhengBaURL + "zhengba_" + (this.iData.id + 1) + "_" + (this.iData.enabled ? "1" : "0") + ".png", this.imgBack),
                this.txtDesc.text = this.txtName.text = Locales.get("dayPvp"),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.HEGEMONY_NET, this.refreshHandler, this),
                this.refreshHandler(void 0);
            else if (this.iData.id == HegemonyType.lvectype) Utils.getImgByUrl(Path.zhengBaURL + "zhengba_" + (this.iData.id + 1) + "_" + (this.iData.enabled ? "1" : "0") + ".png", this.imgBack),
                this.txtName.text = Locales.get("panel_active_game_defence_title"),
                this.txtDesc.text = Locales.get("panel_active_game_defence_desc_1") + Locales.get("panel_active_game_defence_desc_1_2"),
                e.lvectype = this,
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceEnterGuard, {}, !1);
            else if (this.iData.id == HegemonyType.precious) Utils.getImgByUrl(Path.zhengBaURL + "zhengba_" + (this.iData.id + 1) + "_" + (this.iData.enabled ? "1" : "0") + ".png", this.imgBack),
                this.txtName.text = Locales.get("panel_plunder_txt_title"),
                this.txtDesc.text = Locales.get("panel_active_game_newadd_desc_1") + Locales.get("panel_active_game_newadd_desc_1_2"),
                t = UserData.getInstance().getRes(TypeDefine.RES.XunBaoLing),
                this.txtFlag.textFlow = Utils.textFlowByStr(Locales.get(0 == t ? "panel_active_game_desc_3_0" : "panel_active_game_desc_3_1", t)),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.UserData_Update, this.onDataUpdate, this);
            else if (this.iData.id == HegemonyType.arena) Utils.getImgByUrl(Path.zhengBaURL + "zhengba_" + (this.iData.id + 1) + "_" + (this.iData.enabled ? "1" : "0") + ".png", this.imgBack),
                this.txtName.text = Locales.get("panel_active_game_arena_title"),
                this.txtDesc.text = Locales.get("panel_active_game_arena_desc_1") + Locales.get("panel_active_game_arena_desc_1_2"),
                t = ArenaManager.instance.getLeftTimes(),
                this.txtFlag.textFlow = Utils.textFlowByStr(Locales.get(0 == t ? "panel_active_game_desc_4_0" : "panel_active_game_desc_4_1", t)),
                EventManager.instance.addEventListener(EventTypes.ARENA_DATA, this.onDataUpdate, this);
            else if (this.iData.id == HegemonyType.boss) {
                if (this.iData.enabled) {
                    var a = ConfigData.getDataByKey("bigSeven", 1);
                    this.iData.enabled = UserData.getInstance().getServerstartday() >= Number(a.delayDay)
                } else this.txtFlag0.visible = !1;
                var a = ConfigData.getDataByKey("bigSeven", 1),
                    i = a.openDay.split("|"),
                    n = a.openTime.split("|");
                Utils.getImgByUrl(Path.zhengBaURL + "zhengba_" + (this.iData.id + 1) + "_" + (this.iData.enabled ? "1" : "0") + ".png", this.imgBack),
                    this.txtName.text = Locales.get("panel_challengeship_desc_title"),
                    this.txtDesc.text = Locales.get("panel_challengs_ui_1") + Locales.get("panel_challengs_ui_2");
                for (var s = Locales.get("panel_challengs_ui_3"), r = 1; r < i.length; r++) s += Locales.get("panel_challengs_ui_comment_" + i[r]) + Locales.get("panel_challengs_ui_comment_8");
                s = s.substr(0, s.length - 1),
                    this.checkActiveOpen() ? this.txtFlag0.text = "已开启" : this.txtFlag0.text = Locales.get("panel_challengs_ui_4", s + " " + Utils.getDoubleNumText(n[1]) + ":" + Utils.getDoubleNumText(n[2]))
            } else if (this.iData.id == HegemonyType.camp) {
                if (this.iData.enabled) {
                    var o = CampbattlebasedataParser.GetInstance().getDataArr()[0];
                    this.iData.enabled = UserData.getInstance().getServerstartday() >= o.beginDay
                } else this.txtFlag0.visible = !1;
                Utils.getImgByUrl(Path.zhengBaURL + "zhengba_" + (this.iData.id + 1) + "_" + (this.iData.enabled ? "1" : "0") + ".png", this.imgBack),
                    this.txtName.text = Locales.get("panel_active_game_campBattle_title"),
                    this.txtDesc.text = Locales.get("panel_active_game_campBattle_desc_1") + Locales.get("panel_active_game_campBattle_desc_1_2") + Locales.get("panel_active_game_campBattle_desc_1_3") + Locales.get("panel_active_game_campBattle_desc_1_4");
                var o = CampbattlebasedataParser.GetInstance().getDataArr()[0];
                CampBattleManager.instance.isOpened() ? this.txtFlag0.text = "已开启" : this.txtFlag0.text = Locales.get("panel_active_game_campBattle_desc_2_3", Utils.getDoubleNumText(o.startTime[0]) + ":" + Utils.getDoubleNumText(o.startTime[1]))
            }
            this.iData.enabled ? this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this) : (this.txtLimit.text = Locales.get("panel_active_game_campBattle_desc_2_2", this.iData.limit), this.txtFlag.visible = !1, "" != this.txtFlag0.text && this.txtFlag0.visible && (this.txtLimit.text = "")),
                this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clearHandler, this)
        },
        i.checkActiveOpen = function() {
            var t = ConfigData.getDataByKey("bigSeven", 1);
            if (UserData.getInstance().getServerstartday() >= Number(t.delayDay))
                for (var e = t.openDay.split("|"), a = t.openTime.split("|"), i = Utils.getDateByNum(UserData.getInstance().getServerTime(), timeType.DAY), n = 1; n < e.length; n++)
                    if (i >= e[n] && i < Number(e[n]) + Number(t.continueDays)) {
                        var s = Utils.getDateByNum(UserData.getInstance().getServerTime(), timeType.TIMENUMBER);
                        if (s >= 60 * Number(a[1]) + Number(a[2])) return !0
                    }
            return !1
        },
        i.updateCount = function(t) {
            this.txtFlag.textFlow = Utils.textFlowByStr(Locales.get(0 == t ? "panel_active_game_desc_2_0" : "panel_active_game_desc_2_1", t))
        },
        i.clearHandler = function(t) {
            e.lvectype == this && (e.lvectype = null),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.HEGEMONY_NET, this.refreshHandler, this),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.UserData_Update, this.onDataUpdate, this)
        },
        i.clickHandler = function(t) {
            this.iData.id == HegemonyType.dayectype ? WindowManager.getInstance().show(WindowManager.windowType.ZhenbaEctype) : this.iData.id == HegemonyType.precious ? WindowManager.getInstance().show(WindowManager.windowType.ZhenbaPrecious) : this.iData.id == HegemonyType.boss ? WindowManager.getInstance().show(WindowManager.windowType.QiJvTou) : this.iData.id == HegemonyType.lvectype ? WindowManager.getInstance().show(WindowManager.windowType.DefenseOil) : this.iData.id == HegemonyType.arena ? WindowManager.getInstance().show(WindowManager.windowType.PVP) : this.iData.id == HegemonyType.camp && RequestManager.GetInstance().enterCampBattle()
        },
        i.refreshHandler = function(t) {
            var e = StageData.getTotalCount();
            this.txtFlag.textFlow = Utils.textFlowByStr(Locales.get(0 == e ? "panel_active_game_defence_desc_4_0" : "panel_active_game_defence_desc_4", e))
        },
        e
}(eui.Component);
