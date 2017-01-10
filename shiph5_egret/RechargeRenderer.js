
var RechargeManager = function() {
    function t() {
        this.date = new Date
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return i.LoadTable = function(t, e) {
            var a = this;
            void 0 === t && (t = null),
                void 0 === e && (e = null),
                ConfigData.preLoadDats(["cashData", "vip", "giftData"], [CashdataParser, VipParser, GiftdataParser],
                    function() {
                        a.cashDataArr = CashdataParser.GetInstance().getDataArr(),
                            a.vipArr = VipParser.GetInstance().getDataArr(),
                            t && t.apply(e),
                            UserData.getInstance().updateActiveTip()
                    },
                    this)
        },
        e(i, "CanFirstRecharge",
            function() {
                return UserData.getInstance().totalbuy <= 0 && ActivityManager.instance.activityData.first_recharge_open
            }),
        i.CanFirstRechargeByID = function(t) {
            return ActivityManager.instance.activityData.first_recharge_open && -1 == UserData.getInstance().firstrechargelist.indexOf(t)
        },
        i.HandleHeartBeat = function(t) {
            var e = this.date.getDate();
            if (this.date.setTime(1e3 * t), this.date.getDate() != e) {
                var a = Transport.getPkg(ProtocolMgr.ID_DceNewDay);
                Transport.instance.send(a)
            }
        },
        e(i, "isShowSpot",
            function() {
                var t = !1;
                if (UserData.getInstance().monthcarddate > 0 && !UserData.getInstance().monthcardreceived && (t = !0), this.cashDataArr) {
                    if (UserData.getInstance().monthcarddate > 0) {
                        var e = CashdataParser.GetInstance().getItemById(UserData.getInstance().monthcardid);
                        UserData.getInstance().monthcarddate <= e.renew && (t = !0)
                    }
                } else this.LoadTable();
                return t
            }),
        t.instance = new t,
        t
}();
