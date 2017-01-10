
var SignItem = function(t) {
    function e(e) {
        t.call(this),
            this._data = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onClear, this),
            EventManager.instance.addEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.onDataChanged, this),
            this.skinName = "resource/eui_skins/item/HuoDong_Bar_qiandao_Skin.exml"
            /*tpa=resource/eui_skins/item/HuoDong_Bar_qiandao_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {
            this.VipDouble.touchChildren = !1,
                this.VipDouble.touchEnabled = !1,
                this.isCheck.touchEnabled = !1,
                this.isCheck.touchChildren = !1,
                this.Reward.touchChildren = !1,
                this.Reward.touchEnabled = !1,
                this.notVip.touchEnabled = !1,
                this.notVip.touchChildren = !1,
                this.redball.touchEnabled = !1,
                this.onDataChanged(),
                this.imgBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSelf, this)
        },
        i.onClickSelf = function() {
            0 != this._data.itemInfo.params.length && 0 != this._data.itemInfo.params[0] && this._data.itemInfo.params[0] > UserData.getInstance().getVipLevel() ? WindowManager.getInstance().show(WindowManager.windowType.signConfirm, this._data) : RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivity, {
                id: ActivityType.ACTIVITY_TYPE_SIGNIN,
                type: this._data.day
            })
        },
        i.onClear = function() {
            EventManager.instance.removeEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.onDataChanged, this)
        },
        i.onDataChanged = function() {
            var t = 1 == ActivityManager.instance.activityData.signin,
                e = this._data.itemInfo.items[0],
                a = GiftdataParser.GetInstance().getItemById(e.id),
                i = GlobalFunction.getDropDataByTypeAndId(a.type, a.item, a.count);
            SUI.setItemIcon(this.Reward, i),
                0 == this._data.itemInfo.params.length || 0 == this._data.itemInfo.params[0] ? this.VipDouble.visible = !1 : (this.VipDouble.visible = !0, this.txtVip.text = Locales.get("zz_vipDouble", this._data.itemInfo.params[0])),
                this.redball.visible = !1;
            var n = 0,
                s = 0;
            n = null == ActivityManager.instance.activityData.signined_array || this._data.day - 1 >= ActivityManager.instance.activityData.signined_array.length ? 0 : ActivityManager.instance.activityData.signined_array[this._data.day - 1],
                ActivityManager.instance.activityData.signined_array ? (s = ActivityManager.instance.activityData.signined_array.length, t || s++) : s = 1,
                this._data.day <= s ? 0 == n ? (this.isCheck.visible = !1, this.imgBg.touchEnabled = !0, this.notVip.visible = !1, this.redball.visible = !0) : 1 == n ? (this.isCheck.visible = !0, this.imgBg.touchEnabled = !1, this.notVip.visible = !1) : 2 == n && (this.isCheck.visible = !0, this.VipDouble.visible ? (this.notVip.visible = !0, this.imgBg.touchEnabled = !0, this._data.itemInfo.params[0] <= UserData.getInstance()._vip && (this.redball.visible = !0)) : (this.notVip.visible = !1, this.imgBg.touchEnabled = !1)) : (this.isCheck.visible = !1, this.imgBg.touchEnabled = !1, this.notVip.visible = !1)
        },
        e
}(eui.Component);
