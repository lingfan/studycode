
var ActivityItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onClear, this),
            this.skinName = "resource/eui_skins/item/HuoDong_Bar_Skin.exml"
            /*tpa=resource/eui_skins/item/HuoDong_Bar_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onClear = function() {
            EventManager.instance.removeEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.dataChanged, this),
                EventManager.instance.removeEventListener(EventTypes.RED_BALL_UPDATE, this.dataChanged, this)
        },
        i.onComplete = function() {
            this.touchEnabled = !0,
                this.touchChildren = !1,
                SUI.setTextureAsync(this.imgBg, Path.uiUrl + "Activity/Bar_huodong.jpg"),
                SUI.setTextureAsync(this.imgStateBg, Path.uiUrl + "Activity/Bg_huodong_hot.png"),
                EventManager.instance.addEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.dataChanged, this),
                EventManager.instance.addEventListener(EventTypes.RED_BALL_UPDATE, this.dataChanged, this)
        },
        i.dataChanged = function() {
            if (ActivityManager.instance.setImageByType(this.imgName, this.data.type), null != this.data.state && 0 != this.data.state ? (this.txtState.text = Locales.get("zz_activityState" + this.data.state), this.txtState.visible = !0) : this.HotFlag.visible = !1, this.txtDesc.text = Locales.get("zz_activityDesc1"), SUI.setTextureAsync(this.imgLeft, Path.GetActivityDescIcon(this.data.desc)), SUI.setTextureAsync(this.imgRight, Path.GetActivityIcon(this.data.icon)), this.data.type == ActivityType.ACTIVITY_TYPE_OIL) this.txtTime.text = Locales.get("zz_forever");
            else {
                var t = Utils.getDateByNum(1e3 * this.data.start_time.time, timeType.FORMATDATE),
                    e = Utils.getDateByNum(1e3 * this.data.end_time.time, timeType.FORMATDATE);
                this.data.end_time.time - this.data.start_time.time > 5184e3 ? this.txtTime.text = Locales.get("zz_forever") : this.txtTime.text = Locales.get("zz_activitytime1", t, e)
            }
            this.imgBall.visible = ActivityManager.instance.checkIsShowRedBall(this.data.type)
        },
        e
}(eui.ItemRenderer);
