
var ActivityType;
!
function(t) {
    t[t.ACTIVITY_TYPE_OIL = -8] = "ACTIVITY_TYPE_OIL",
        t[t.ACTIVITY_TYPE_OIL_NOON = 1] = "ACTIVITY_TYPE_OIL_NOON",
        t[t.ACTIVITY_TYPE_OIL_EVENING = 2] = "ACTIVITY_TYPE_OIL_EVENING",
        t[t.ACTIVITY_TYPE_SIGNIN = 3] = "ACTIVITY_TYPE_SIGNIN",
        t[t.ACTIVITY_TYPE_VIP = 4] = "ACTIVITY_TYPE_VIP",
        t[t.ACTIVITY_TYPE_LEVEL = 5] = "ACTIVITY_TYPE_LEVEL",
        t[t.ACTIVITY_TYPE_START_SERVER = 6] = "ACTIVITY_TYPE_START_SERVER",
        t[t.ACTIVITY_TYPE_FIRST_RECHARGE = 7] = "ACTIVITY_TYPE_FIRST_RECHARGE",
        t[t.ACTIVITY_TYPE_GROWUP_BUY = 8] = "ACTIVITY_TYPE_GROWUP_BUY",
        t[t.ACTIVITY_TYPE_GROWUP_RECV = 9] = "ACTIVITY_TYPE_GROWUP_RECV",
        t[t.ACTIVITY_TYPE_COST_REWARD = 10] = "ACTIVITY_TYPE_COST_REWARD",
        t[t.ACTIVITY_TYPE_MISTERYSHOP = 11] = "ACTIVITY_TYPE_MISTERYSHOP",
        t[t.ACTIVITY_TYPE_RECHARGE_REWARD = 12] = "ACTIVITY_TYPE_RECHARGE_REWARD",
        t[t.ACTIVITY_TYPE_OIL_MIDNIGHT = 13] = "ACTIVITY_TYPE_OIL_MIDNIGHT",
        t[t.ACTIVITY_TYPE_SINGLE_RECHARGE = 14] = "ACTIVITY_TYPE_SINGLE_RECHARGE",
        t[t.ACTIVITY_TYPE_DAILY_SINGLE_RECHARGE = 15] = "ACTIVITY_TYPE_DAILY_SINGLE_RECHARGE",
        t[t.ACTIVITY_TYPE_DAILY_ACC_RECHARGE = 16] = "ACTIVITY_TYPE_DAILY_ACC_RECHARGE",
        t[t.ACTIVITY_TYPE_ONLINE = 17] = "ACTIVITY_TYPE_ONLINE",
        t[t.ACTIVITY_TYPE_WHEEL = 18] = "ACTIVITY_TYPE_WHEEL",
        t[t.ACTIVITY_TYPE_LOGINGIFT = 20] = "ACTIVITY_TYPE_LOGINGIFT"
}(ActivityType || (ActivityType = {}));
var ActivityManager = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.setImageByType = function(t, e) {
            e == ActivityType.ACTIVITY_TYPE_RECHARGE_REWARD ? SUI.setTextureAsync(t, Path.uiUrl + "Activity/Title_LeiChongFuLi.png") : e == ActivityType.ACTIVITY_TYPE_COST_REWARD ? SUI.setTextureAsync(t, Path.uiUrl + "Activity/Title_XiaoFeiFanLi.png") : e == ActivityType.ACTIVITY_TYPE_SINGLE_RECHARGE ? SUI.setTextureAsync(t, Path.uiUrl + "Activity/Title_DanChongJiangLi.png") : e == ActivityType.ACTIVITY_TYPE_SIGNIN ? SUI.setTextureAsync(t, Path.uiUrl + "Activity/Title_MeiRiQianDao.png") : e == ActivityType.ACTIVITY_TYPE_OIL ? SUI.setTextureAsync(t, Path.uiUrl + "Activity/Title_YuanYouLingQu.png") : e == ActivityType.ACTIVITY_TYPE_DAILY_SINGLE_RECHARGE ? SUI.setTextureAsync(t, Path.uiUrl + "Activity/Title_TianTianChongZhi.png") : e == ActivityType.ACTIVITY_TYPE_DAILY_ACC_RECHARGE ? SUI.setTextureAsync(t, Path.uiUrl + "Activity/Title_MeiRiLeiChong.png") : e == ActivityType.ACTIVITY_TYPE_LEVEL ? SUI.setTextureAsync(t, Path.uiUrl + "Activity/Title_ChongJiHuoDong.png") : e == ActivityType.ACTIVITY_TYPE_WHEEL ? SUI.setTextureAsync(t, Path.uiUrl + "Activity/Title_XingYunZhuanPan.png") : e == ActivityType.ACTIVITY_TYPE_LOGINGIFT && SUI.setTextureAsync(t, Path.uiUrl + "Activity/Title_DengLuJiuSong.png")
        },
        a.checkIsBetweenTime = function(t, e, a) {
            a = 0;
            var i = UserData.getInstance().getServerTime() / 1e3;
            if (0 == a) return i >= t && e > i;
            if (1 == a) {
                var n = UserData.getInstance().serverstartday;
                return n >= t && e > n
            }
            if (2 == a) {
                var s = UserData.getInstance().regdaycount;
                return s >= t && e > s
            }
        },
        a.canGetOil = function() {
            var e = this.getOilGiftTimeIndex(),
                a = !1;
            return 0 != e || t.instance.activityData.oil_noon || (a = !0),
                1 != e || t.instance.activityData.oil_evening || (a = !0),
                2 != e || t.instance.activityData.oil_midnight || (a = !0),
                a
        },
        a.checkIsShowRedBall = function(t) {
            if (t == ActivityType.ACTIVITY_TYPE_OIL) return this.canGetOil();
            var e = UserData.getInstance().activeTips;
            if (!e) return !1;
            if (0 == t) {
                var a = !1;
                for (var i in e.act_red) {
                    var n = e.act_type[i];
                    19 != n && n != ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE && e.act_red[i] && (a = !0)
                }
                return a || this.canGetOil()
            }
            for (var i = 0; i < e.act_type.length; ++i)
                if (e.act_type[i] == t) return e.act_red[i];
            return !1
        },
        a.getOilGiftTimeIndex = function() {
            for (var t = UserData.getInstance().getServerTime(), e = (new Date(t), ["12:00-14:00", "18:00-20:00", "20:20-22:00"]), a = new Date(t), i = new Date(t), n = 0; n < e.length; ++n) {
                var s = e[n],
                    r = s.split("-"),
                    o = r[0].split(":"),
                    l = r[1].split(":");
                if (a.setHours(Number(o[0]), Number(o[1])), i.setHours(Number(l[0]), Number(l[1])), a.valueOf() < t.valueOf() && i.valueOf() > t.valueOf()) return n
            }
            return -1
        },
        a.getOnlineRewardState = function() {
            if (!this.activityData) return [-1, 0];
            var t = UserData.getInstance().getServerTime() / 1e3,
                e = this.activityData.online_gift_time,
                a = 0;
            return e ? e > t ? a = 0 : t >= e && (a = 1) : (e = 0, a = -1), [a, e - t]
        },
        t.instance = new t,
        t
}();
