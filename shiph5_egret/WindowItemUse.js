
var HegemonyType;
!
function(t) {
    t[t.dayectype = 0] = "dayectype",
        t[t.lvectype = 1] = "lvectype",
        t[t.precious = 2] = "precious",
        t[t.arena = 3] = "arena",
        t[t.boss = 4] = "boss",
        t[t.camp = 5] = "camp",
        t[t.length = 6] = "length"
}(HegemonyType || (HegemonyType = {}));
var WindowHegemony = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/ZhengBaSkin.exml"
            /*tpa=resource/eui_skins/ZhengBaSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            ConfigData.preLoadList(["HegemonyUnlock", "bigSeven"],
                    function() {
                        ConfigData.preLoadDats(["campBattleBaseData", "stageSpecialData", "HegemonyUnlock"], [CampbattlebasedataParser, StagespecialdataParser, HegemonyunlockParser],
                            function() {
                                t.initUI()
                            })
                    }),
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceEnterArena, null, !1)
        },
        i.initUI = function() {
            HomeUI.instance && HomeUI.instance.visibleScene(!1),
                MainUI.instance.changeTopMode(topUIMode.simple),
                RequestManager.GetInstance().enterCampaign(3, 0);
            for (var t = ConfigData.getAllData("HegemonyUnlock"), e = [], a = 0; a < HegemonyType.length; a++) e.push(a);
            for (e.sort(function(e, a) {
                    var i = Number(t[(e + 1).toString()].needlvl),
                        n = Number(t[(a + 1).toString()].needlvl);
                    return i > n ? 1 : -1
                }), a = 0; a < e.length; a++) {
                var i = !0,
                    n = Number(t[(e[a] + 1).toString()].needlvl);
                i = UserData.getInstance()._level >= n;
                var s = new HegemonyItem({
                    id: e[a],
                    enabled: i,
                    limit: n
                });
                s.y = 170 * a,
                    this.vessel.addChild(s)
            }
            this.vessel.height = 170 * a,
                (112 == GuideManager.step || 117 == GuideManager.step) && (117 == GuideManager.step ? (GuideManager.nextStep(), this.scroller.viewport.scrollV = 800) : this.scroller.viewport.scrollV = 500)
        },
        i.clear = function() {
            HomeUI.instance && HomeUI.instance.visibleScene(!0)
        },
        e
}(WindowBase);
