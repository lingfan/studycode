
var WindowSignConfirm = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/HuoDong_TanKuangSkin.exml"
            /*tpa=resource/eui_skins/HuoDong_TanKuangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this._data = t,
                this.txtVipDesc.text = Locales.get("zz_signTip", t.itemInfo.params[0]);
            var e = t.itemInfo.items[0],
                a = GiftdataParser.GetInstance().getItemById(e.id),
                i = GlobalFunction.getDropDataByTypeAndId(a.type, a.item, a.count);
            SUI.setItemIcon(this.Reward, i);
            var n = 0;
            n = null == ActivityManager.instance.activityData.signined_array || this._data.day - 1 >= ActivityManager.instance.activityData.signined_array.length ? 0 : ActivityManager.instance.activityData.signined_array[this._data.day - 1],
                2 == n && this._data.itemInfo.params[0] > UserData.getInstance()._vip && (this.btnGetNow.enabled = !1)
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnGetNow.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnGetNow, this),
                this.btnRecharge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnRecharge, this),
                this.txtTitle.text = Locales.get("zz_signReward"),
                this.btnRecharge.labelDisplay.text = Locales.get("zz_rechargeVIP"),
                this.btnGetNow.labelDisplay.text = Locales.get("zz_get")
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.OnClickBtnGetNow = function(t) {
            var e = 0;
            e = null == ActivityManager.instance.activityData.signined_array || this._data.day - 1 >= ActivityManager.instance.activityData.signined_array.length ? 0 : ActivityManager.instance.activityData.signined_array[this._data.day - 1];
            var a = !0;
            if (2 == e && this._data.itemInfo.params[0] > UserData.getInstance()._vip && (a = !1), a) {
                var i = 0,
                    n = 1 == ActivityManager.instance.activityData.signin;
                ActivityManager.instance.activityData.signined_array ? (i = ActivityManager.instance.activityData.signined_array.length, n || i++) : i = 1,
                    RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivity, {
                        id: ActivityType.ACTIVITY_TYPE_SIGNIN,
                        type: i
                    }),
                    this.close()
            } else Toast.launch("VIP等级不足，不能继续领取", 16711680)
        },
        i.OnClickBtnRecharge = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.Recharge),
                this.close()
        },
        i.clear = function() {},
        e
}(WindowBase);
