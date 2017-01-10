
var WindowEctype = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/ZB_RiChangFuBenSkin.exml"
            /*tpa=resource/eui_skins/ZB_RiChangFuBenSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            EctypeTabItem.SelectItem = null,
                e.tabIndex = 1,
                ConfigData.preLoadList(["stageSpecialData"],
                    function() {
                        ConfigData.preLoadDats(["robNPCData", "stageSpecialData"], [RobnpcdataParser, StagespecialdataParser],
                            function() {
                                t.initUI()
                            })
                    }),
                MainUI.instance.changeTopMode(topUIMode.simple)
        },
        i.setData = function(t) {
            t.auto && this.tabList && (t.index ? this.tabList[t.index - 1].clickHandler(null) : this.tabList[e.jiluTabIndex - 1].clickHandler(null))
        },
        i.initUI = function() {
            92 == GuideManager.step && GuideManager.nextStep(),
                this.createTab(),
                this.createList(),
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this)
        },
        i.closeHandler = function(t) {
            this.close()
        },
        i.createTab = function() {
            this.tabList = [];
            for (var t = 0; 2 > t; t++) {
                var e = new EctypeTabItem({
                    id: t,
                    target: this
                });
                e.x = 160 * t,
                    this.vessel.addChild(e),
                    this.tabList[t] = e,
                    0 == t && (EctypeTabItem.SelectItem = e)
            }
        },
        i.changeTab = function(t) {
            e.tabIndex = t,
                this.createList()
        },
        i.createList = function() {
            this.bVessel.removeChildren();
            for (var t = 3 * (e.tabIndex - 1), a = 0; 3 > a; a++) {
                var i = new EctypeItem({
                    id: 2e5 + 3 * (t + a) + 1,
                    stageId: a + 1 + t
                });
                i.y = 170 * a,
                    this.bVessel.addChild(i)
            }
            this.bVessel.height = 170 * a
        },
        e.battleEctype = function() {
            RequestManager.GetInstance().enterBattle(4, EctypeItem.stageID, 0, 0),
                e.jiluTabIndex = e.tabIndex
        },
        e
}(WindowBase);
