
var WindowFormation = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/zhuye_Zhenrong_zhandouzhenxingSkin.exml"
            /*tpa=resource/eui_skins/zhuye_Zhenrong_zhandouzhenxingSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            ConfigData.preLoadList(["manual", "manualupdate"],
                function() {
                    t.initUI()
                })
        },
        i.initUI = function() {
            var t = ConfigData.getAllData("manual"),
                e = 0;
            FormationItem.useBtn = null;
            for (var a in t)
                if ("length" != a) {
                    var i = new FormationItem(t[a]);
                    i.y = 150 * e,
                        this.vessel.addChild(i),
                        e++
                }
            this.vessel.height = e * i.height,
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this)
        },
        i.closeHandler = function(t) {
            this.close()
        },
        e
}(WindowBase);
