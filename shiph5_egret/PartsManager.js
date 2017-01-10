
var MilitaryManager = function() {
    function t() {
        this.Open = !1,
            this._pkgData = {
                hasreward: !1
            }
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return t.GetInstance = function() {
            return t.s_instance
        },
        i.OpenMilitaryWindow = function() {
            this.Open = !0,
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceMilitaryRankInfo)
        },
        i.SetPkg = function(t) {
            this.pkgData = t,
                this.Open && (this.Open = !1, ConfigData.preLoadDats(["MilitaryRank", "MilitaryRights"], [MilitaryrankParser, MilitaryrightsParser],
                    function() {
                        WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Military) ? WindowManager.getInstance().getWindow(WindowManager.windowType.Military).setData(void 0) : WindowManager.getInstance().show(WindowManager.windowType.Military, t)
                    }))
        },
        e(i, "pkgData",
            function() {
                return this._pkgData
            },
            function(t) {
                this._pkgData = t
            }),
        i.getPicByRankLvl = function(t) {
            void 0 === t && (t = 10);
            var e = "",
                a = MilitaryrankParser.GetInstance().getItemByField("id", t) ? MilitaryrankParser.GetInstance().getItemByField("id", t).picture : "";
            return 0 == a.length ? null : e = Path.militaryIconURL + a
        },
        i.getLabelPicByRankLvl = function(t) {
            void 0 === t && (t = 1);
            var e = "",
                a = MilitaryrankParser.GetInstance().getItemByField("id", t).pic_ch;
            return e = Path.militaryIconURL + a
        },
        i.MilitaryTips = function() {
            var t = !1,
                e = MilitaryrankParser.GetInstance().getItemByField("id", UserData.getInstance().getMilitaryranktype()).index,
                a = MilitaryrankParser.GetInstance().getItemById(e + 1);
            if (a && a.gold <= UserData.getInstance().getRes(TypeDefine.RES.Gold) && a.honour <= UserData.getInstance().getMilitaryrankhon() && (t = !0), this.pkgData) {
                var i = MilitaryrankParser.GetInstance().getItemByField("id", UserData.getInstance().getMilitaryranktype());
                0 == this.pkgData.hasreward && 0 != Math.floor(i.diamond) && (t = !0)
            }
            CanUseManager.instance.setMilitaryUseFlag(t),
                EventManager.instance.dispatchEvent(EventTypes.HOMEUI_REDBALL_STATE_CHANGE)
        },
        t.s_instance = new t,
        t
}();
