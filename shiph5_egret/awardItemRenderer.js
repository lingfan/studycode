
var WindowActivityOil = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/HuoDong_list_Skin.exml"
            /*tpa=resource/eui_skins/HuoDong_list_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this._data = t,
                ActivityManager.instance.setImageByType(this.imgTitle, t.type),
                SUI.setTextureAsync(this.imgShow, Path.GetActivityIcon(this._data.icon))
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnOil.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnOil, this),
                SUI.addClickEffect(this.btnOil),
                SUI.setTextureAsync(this.imgBg, Path.backGroundImageUrl + "Bg_huodong.jpg"),
                SUI.setTextureAsync(this.imgL, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                SUI.setTextureAsync(this.imgR, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                SUI.setTextureAsync(this.imgSkip, Path.uiUrl + "Activity/Activity_fengetiao.png"),
                SUI.setTextureAsync(this.imgLight, Path.uiUrl + "Activity/activity_light.png"),
                this.DayOil.visible = !0,
                this.txtTotalNum.visible = !1,
                this.scvCenter.visible = !1,
                this.txtTime.text = Locales.get("zz_forever");
            var t = 60,
                e = UserData.getInstance().getMilitaryranktype(),
                a = MilitaryrankParser.GetInstance().getItemByField("id", e);
            if (a) {
                for (var i = 0,
                        n = 0,
                        s = 0,
                        r = a.privilege; s < r.length; s++) {
                    var o = r[s],
                        l = MilitaryrightsParser.GetInstance().getItemById(o);
                    5 == l.righttype && (1 == l.numtype ? i += l.num / 1e3 : n += l.num)
                }
                t = t * (1 + i) + n
            }
            this.txtDesc.textFlow = Utils.textFlowByStr(Locales.get("zz_activityIntroOil", t)),
                this.txtOilNum.text = Locales.get("zz_oilNum", t),
                this._timer = new egret.Timer(1e3, 0),
                this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTick, this),
                this._timer.start(),
                this.txtOilDesc.text = Locales.get("zz_clickGet"),
                this.onTick(null),
                EventManager.instance.addEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.onTick, this)
        },
        i.onTick = function(t) {
            var e = ActivityManager.instance.getOilGiftTimeIndex();
            if (this._index = null, 0 > e) this.txtOilDesc.text = "补给未到",
                this.imgLight.visible = !1,
                this.btnOil.touchEnabled = !1;
            else {
                var a = !1;
                0 != e || ActivityManager.instance.activityData.oil_noon || (a = !0, this._index = 0),
                    1 != e || ActivityManager.instance.activityData.oil_evening || (a = !0, this._index = 1),
                    2 != e || ActivityManager.instance.activityData.oil_midnight || (a = !0, this._index = 2),
                    this.txtOilDesc.visible = !0,
                    a ? (this.txtOilDesc.text = Locales.get("zz_clickGet"), this.txtOilDesc.textColor = 2227968, this.imgLight.visible = !0, this.btnOil.touchEnabled = !0) : (this.txtOilDesc.text = Locales.get("panel_mail_txt_porped"), this.txtOilDesc.textColor = 16711680, this.imgLight.visible = !1, this.btnOil.touchEnabled = !1)
            }
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.OnClickBtnOil = function(t) {
            if (null != this._index) {
                var e = 0;
                e = 0 == this._index ? ActivityType.ACTIVITY_TYPE_OIL_NOON : 1 == this._index ? ActivityType.ACTIVITY_TYPE_OIL_EVENING : ActivityType.ACTIVITY_TYPE_OIL_MIDNIGHT,
                    RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivity, {
                        id: e,
                        type: 0
                    })
            }
        },
        i.clear = function() {
            this._timer && (this._timer.stop(), this._timer = null),
                EventManager.instance.removeEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.onTick, this)
        },
        e
}(WindowBase);
