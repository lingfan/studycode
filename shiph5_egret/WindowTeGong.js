
var WindowTaskReward = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/RenWuBaoXiangSkin.exml"
            /*tpa=resource/eui_skins/RenWuBaoXiangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            var e = this;
            this.taskData = t,
                ConfigData.preLoadList(["giftData", "item"],
                    function() {
                        e.initUI()
                    }),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this),
                this.btnTake.addEventListener(egret.TouchEvent.TOUCH_TAP, this.takeHandler, this),
                this.btnTake.enabled = this.taskData.getBool
        },
        i.takeHandler = function(t) {
            this.closeHandler(null),
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceGetTaskReward, {
                    index: Number(this.taskData.index) + 1,
                    type: 1
                }, !1)
        },
        i.closeHandler = function(t) {
            this.close()
        },
        i.initUI = function() {
            var t = ConfigData.getAllData("giftData"),
                e = [];
            for (var a in t) "length" != a && Number(t[a].id) == Number(this.taskData.id) && e.push(t[a]);
            for (var i = 0; i < e.length; i++) {
                var n = new ItemTaskReward(e[i]);
                n.x = 100 * i,
                    this.vessel.addChild(n)
            }
        },
        e
}(WindowBase);
