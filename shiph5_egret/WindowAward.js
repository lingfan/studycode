
var WindowActivity = function(t) {
    function e() {
        t.call(this, !0),
            this._activityDatas = [],
            this.skinName = "resource/eui_skins/HuoDongSkin.exml"
            /*tpa=resource/eui_skins/HuoDongSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this._data = t,
                this.onActivityDataUpdate()
        },
        i.init = function() {
            this.btnInfo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnInfo, this),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivityWebData, {
                    type: 0
                }),
                this.lstCenter.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.OnClickItem, this),
                this.lstCenter.itemRenderer = ActivityItemRenderer,
                this.scvCenter.viewport = this.lstCenter,
                SUI.setTextureAsync(this.imgBg, Path.backGroundImageUrl + "Bg_huodong.jpg"),
                SUI.setTextureAsync(this.imgL, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                SUI.setTextureAsync(this.imgR, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                EventManager.instance.addEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.onActivityDataUpdate, this)
        },
        i.onActivityDataUpdate = function() {
            if (this._data) {
                for (var t = [], e = 0, a = this._data.actlist; e < a.length; e++) {
                    var i = a[e];
                    if (19 != i.type) {
                        var n = !0;
                        if (i.type == ActivityType.ACTIVITY_TYPE_LOGINGIFT) {
                            i.show_start.time = UserData.getInstance().regtime;
                            var s = 1e3 * i.show_start.time,
                                r = new Date(s);
                            r.setDate(r.getDate() + 4),
                                r.setHours(24, 0, 0, 0),
                                i.show_endL.time = Math.floor(r.valueOf() / 1e3)
                        }
                        ActivityManager.instance.checkIsBetweenTime(i.show_start.time, i.show_endL.time, i.start_time.type) || (n = !1),
                            i.type == ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE && (n = !1),
                            n && t.push(i)
                    }
                }
                t.push({
                    type: ActivityType.ACTIVITY_TYPE_OIL,
                    desc: "box",
                    icon: 5
                });
                var o = !1;
                if (t.length == this._activityDatas.length) {
                    for (var l = 0; l < this._activityDatas.length; ++l)
                        if (this._activityDatas[l].type != t[l].type) {
                            o = !0;
                            break
                        }
                } else o = !0;
                o && (this._activityDatas = t, this.lstCenter.dataProvider = new eui.ArrayCollection(this._activityDatas))
            }
        },
        i.OnClickItem = function(t) {
            var e = this.lstCenter.selectedIndex,
                a = this._activityDatas[e];
            a && (a.type == ActivityType.ACTIVITY_TYPE_OIL ? WindowManager.getInstance().show(WindowManager.windowType.oilActivity, a) : RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivityWebData, {
                type: a.type
            }))
        },
        i.OnClickBtnInfo = function(t) {
            var e = Locales.get("zz_activity"),
                a = Locales.get("zz_activityDesc1");
            QiJvTouAlert.getInstance().showTxtDescPage(e, a)
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {
            EventManager.instance.removeEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.onActivityDataUpdate, this)
        },
        e
}(WindowBase);
