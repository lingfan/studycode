
var CanUseManager = function() {
    function t() {
        this.mail_is_can_use = !1,
            this.part_is_can_use = !1,
            this.dec_is_can_use = !1,
            this.jinggong_is_can_use = !1,
            this.bag_is_can_use = !1,
            this.activity_is_can_use = !1,
            this.guard_is_can_use = !1,
            this.ship_is_can_use = !1,
            this.science_is_can_use = !1,
            this.charge_is_can_use = !1,
            this.soldier_is_can_use = !1,
            this.shop_is_can_use = !1,
            this.supply_is_can_use = !1,
            this.limit_is_can_use = !1,
            this.medal_is_can_use = !1,
            this.telent_is_can_use = !1,
            this.chat_is_can_use = !1,
            this.guard_question_is_can_use = !1,
            this.activity_oil_is_can_use = !1,
            this.activity_yyhd_is_can_use = !1,
            this.activity_xffl_is_can_use = !1,
            this.friend_is_can_use = !1,
            this.military_is_can_use = !1,
            this.month_sign_can_use = !1,
            this.jianzhang_can_use = !1,
            this.jianzhang_dh_use = !1,
            this.guild_can_use = !1,
            this.guild_apply_use = !1
    }
    var e = (__define, t),
        a = e.prototype;
    return a.Init = function() {
            EventManager.instance.addEventListener(EventTypes.EVENT_MAIL_FALG, this.OnMailFlagEvent, this)
        },
        a.OnMailFlagEvent = function() {
            UserData.getInstance().getUnreadMail() > 0 || UserData.getInstance().getUnreadMail() > 0 ? this.mail_is_can_use = !0 : this.mail_is_can_use = !1,
                EventManager.instance.dispatchEvent(EventTypes.EVENT_MAIN_UI_FLAG)
        },
        a.setActivityYYHDUseFlag = function(t) {
            this.activity_yyhd_is_can_use = t
        },
        a.getActivityYYHDUseFlag = function() {
            return this.activity_yyhd_is_can_use
        },
        a.getActivityXFFLUseFlag = function() {
            return this.activity_xffl_is_can_use
        },
        a.setMailUseFlag = function(t) {
            this.mail_is_can_use = t
        },
        a.getMailUseFlag = function() {
            return this.mail_is_can_use
        },
        a.setPartUseFlag = function(t) {
            this.part_is_can_use = t
        },
        a.getPartUseFlag = function() {
            return this.part_is_can_use
        },
        a.setDecUseFlag = function(t) {
            this.dec_is_can_use = t
        },
        a.getDecUseFlag = function() {
            return this.dec_is_can_use
        },
        a.setJingGongUseFlag = function(t) {
            this.jinggong_is_can_use = t
        },
        a.getJingGongUseFlag = function() {
            return this.jinggong_is_can_use
        },
        a.setBagUseFlag = function(t) {
            this.bag_is_can_use = t
        },
        a.getBagUseFlag = function() {
            return this.bag_is_can_use
        },
        a.setActivityUseFlag = function(t) {
            this.activity_is_can_use = t
        },
        a.getActivityUseFlag = function() {
            return this.activity_is_can_use
        },
        a.setActivityOilUseFlag = function(t) {
            this.activity_oil_is_can_use = t
        },
        a.getActivityOilUseFlag = function() {
            return this.activity_oil_is_can_use
        },
        a.setGuardUseFlag = function(t) {
            this.guard_is_can_use = t
        },
        a.getGuardUseFlag = function() {
            return this.guard_is_can_use
        },
        a.setGuardQuestionUseFlag = function(t) {
            this.guard_question_is_can_use = t
        },
        a.getGuardQuestionUseFlag = function() {
            return this.guard_question_is_can_use
        },
        a.setShipUseFlag = function(t) {
            this.ship_is_can_use = t
        },
        a.getShipUseFlag = function() {
            return this.ship_is_can_use
        },
        a.setScienceUseFlag = function(t) {
            this.science_is_can_use = t
        },
        a.getScienceUseFlag = function() {
            return this.science_is_can_use
        },
        a.setMilitaryUseFlag = function(t) {
            this.military_is_can_use = t
        },
        a.getMilitaryUseFlag = function() {
            return this.military_is_can_use
        },
        a.setChargeUseFlag = function(t) {
            this.charge_is_can_use = t
        },
        a.getChargeUseFlag = function() {
            return this.charge_is_can_use
        },
        a.setSoldierUseFlag = function(t) {
            this.soldier_is_can_use = t
        },
        a.getSoldierUseFlag = function() {
            return this.soldier_is_can_use
        },
        a.setShopUseFlag = function(t) {
            this.shop_is_can_use = t
        },
        a.getShopUseFlag = function() {
            return this.shop_is_can_use
        },
        a.setSupplyUseFlag = function(t) {
            this.supply_is_can_use = t
        },
        a.getSupplyUseFlag = function() {
            return UserData.getInstance().getPlayerLevel() < 9 ? !1 : this.supply_is_can_use
        },
        a.setJianzhangUseFlag = function(t) {
            this.jianzhang_can_use = t
        },
        a.setJianzhangDuiHuanFlag = function(t) {
            this.jianzhang_dh_use = t
        },
        a.getJianzhangUseFlag = function() {
            return this.jianzhang_can_use
        },
        a.getJianzhangDuiHuanUseFlag = function() {
            return this.jianzhang_dh_use
        },
        a.setLimitUseFlag = function(t) {
            this.limit_is_can_use = t
        },
        a.getLimitUseFlag = function() {
            return this.limit_is_can_use
        },
        a.setMonthUseFlag = function(t) {
            this.month_sign_can_use = t
        },
        a.getMonthUseFlag = function() {
            return this.month_sign_can_use
        },
        a.setMedalUseFlag = function(t) {
            this.medal_is_can_use = t
        },
        a.getMedalUseFlag = function() {
            return this.medal_is_can_use
        },
        a.setTelentUseFlag = function(t) {
            this.telent_is_can_use = t
        },
        a.getTelentUseFlag = function() {
            return this.telent_is_can_use
        },
        a.setFriendUseFlag = function(t) {
            this.friend_is_can_use = t
        },
        a.getFriendUseFlag = function() {
            return this.friend_is_can_use
        },
        a.setChatUseFlag = function(t) {
            this.chat_is_can_use = t
        },
        a.getChatUseFlag = function() {
            return this.chat_is_can_use
        },
        a.setGuildFlag = function(t) {
            this.guild_can_use = t
        },
        a.getGuildFlag = function() {
            return this.guild_can_use
        },
        a.setGuildApplyFlag = function(t) {
            this.guild_apply_use = t
        },
        a.getGuildApplyFlag = function() {
            return this.guild_apply_use
        },
        t.instance = new t,
        t
}();
