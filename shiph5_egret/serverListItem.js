
var WindowListActivity = function(t) {
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
                SUI.setTextureAsync(this.imgShow, Path.GetActivityIcon(this._data.icon)),
                ActivityManager.instance.setImageByType(this.imgTitle, t.type),
                this.sortList();
            var e = Utils.getDateByNum(1e3 * this._data.start_time.time, timeType.FORMATDATE),
                a = Utils.getDateByNum(1e3 * this._data.end_time.time, timeType.FORMATDATE);
            this._data.end_time.time - this._data.start_time.time > 5184e3 ? this.txtTime.text = Locales.get("zz_forever") : this.txtTime.text = Locales.get("zz_activitytime1", e, a),
                this.txtDesc.textFlow = Utils.textFlowByStr(Locales.get("zz_activityIntro" + this._data.type)),
                (this._data.type == ActivityType.ACTIVITY_TYPE_RECHARGE_REWARD || this._data.type == ActivityType.ACTIVITY_TYPE_DAILY_ACC_RECHARGE) && (GameEventDispatcher.getInstance().addEventListener(GameEvent.UserData_Update, this.updateData, this), this.txtTotalNum.visible = !0, this.updateData())
        },
        i.sortList = function() {
            for (var t = ActivityManager.instance.curActivityType,
                    e = 0,
                    a = (ActivityManager.instance.activityData.cashtype, []), i = 0; i < this._data.itemlist.length; ++i) {
                var n = this._data.itemlist[i];
                if (t == ActivityType.ACTIVITY_TYPE_RECHARGE_REWARD) {
                    var s = 0;
                    if (ActivityManager.instance.activityData.rechargecount_func && (s = ActivityManager.instance.activityData.rechargecount_func), n.params[0] <= s) {
                        for (var r = !1,
                                o = 0,
                                l = ActivityManager.instance.activityData.rechargelist_func; o < l.length; o++) {
                            var h = l[o];
                            if (h == n.key) {
                                r = !0;
                                break
                            }
                        }
                        e = r ? -1 : 1
                    } else e = 0
                } else if (t == ActivityType.ACTIVITY_TYPE_COST_REWARD) {
                    var c = 0;
                    if (ActivityManager.instance.activityData.costcount && (c = ActivityManager.instance.activityData.costcount), n.params[0] <= c) {
                        for (var r = !1,
                                d = 0,
                                g = ActivityManager.instance.activityData.costlist; d < g.length; d++) {
                            var h = g[d];
                            if (h == n.key) {
                                r = !0;
                                break
                            }
                        }
                        e = r ? -1 : 1
                    } else e = 0
                } else if (t == ActivityType.ACTIVITY_TYPE_SINGLE_RECHARGE) {
                    var u = 0;
                    if (ActivityManager.instance.activityData.singlecharge && (u = ActivityManager.instance.activityData.singlecharge), n.params[0] <= u) {
                        for (var r = !1,
                                p = 0,
                                m = ActivityManager.instance.activityData.single_gift_list; p < m.length; p++) {
                            var h = m[p];
                            if (h == n.key) {
                                r = !0;
                                break
                            }
                        }
                        e = r ? -1 : 1
                    } else e = 0
                } else if (t == ActivityType.ACTIVITY_TYPE_LEVEL) {
                    var _ = UserData.getInstance()._level;
                    if (n.params[0] <= _) {
                        for (var r = !1,
                                v = 0,
                                f = ActivityManager.instance.activityData.level_gifts; v < f.length; v++) {
                            var h = f[v];
                            if (h == n.key) {
                                r = !0;
                                break
                            }
                        }
                        e = r ? -1 : 1
                    } else e = 0
                } else if (t == ActivityType.ACTIVITY_TYPE_DAILY_SINGLE_RECHARGE) {
                    var u = 0;
                    if (ActivityManager.instance.activityData.daily_singlerecharge_count && (u = ActivityManager.instance.activityData.daily_singlerecharge_count), n.params[0] <= u) {
                        for (var r = !1,
                                I = 0,
                                T = ActivityManager.instance.activityData.daily_singlerecharge_taked; I < T.length; I++) {
                            var h = T[I];
                            if (h == n.key) {
                                r = !0;
                                break
                            }
                        }
                        e = r ? -1 : 1
                    } else e = 0
                } else if (t == ActivityType.ACTIVITY_TYPE_DAILY_ACC_RECHARGE) {
                    var s = 0;
                    if (ActivityManager.instance.activityData.daily_accrecharge_count && (s = ActivityManager.instance.activityData.daily_accrecharge_count), n.params[0] <= s) {
                        for (var r = !1,
                                y = 0,
                                D = ActivityManager.instance.activityData.daily_accrecharge_taked; y < D.length; y++) {
                            var h = D[y];
                            if (h == n.key) {
                                r = !0;
                                break
                            }
                        }
                        e = r ? -1 : 1
                    } else e = 0
                }
                a.push({
                    item: n,
                    status: e,
                    index: i
                })
            }
            a.sort(function(t, e) {
                return t.status == e.status ? t.index - e.index : e.status - t.status
            });
            for (var P = [], C = 0, E = a; C < E.length; C++) {
                var S = E[C];
                P.push(S.item)
            }
            var b = this.lstCenter.scrollV;
            this.lstCenter.dataProvider = new eui.ArrayCollection(P),
                this.lstCenter.validateNow(),
                this.lstCenter.scrollV = b
        },
        i.updateData = function() {
            var t = 0;
            if (this._data.type == ActivityType.ACTIVITY_TYPE_RECHARGE_REWARD) {
                var e = ActivityManager.instance.activityData.rechargecount_func;
                e || (e = 0),
                    t = e
            } else if (this._data.type == ActivityType.ACTIVITY_TYPE_DAILY_ACC_RECHARGE) {
                var e = ActivityManager.instance.activityData.daily_accrecharge_count;
                e || (e = 0),
                    t = e
            }
            this.txtTotalNum.text = Locales.get("zz_rechargeNum", t)
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.lstCenter.itemRenderer = RechargeRewardItemRenderer,
                this.scvCenter.viewport = this.lstCenter,
                SUI.setTextureAsync(this.imgBg, Path.backGroundImageUrl + "Bg_huodong.jpg"),
                SUI.setTextureAsync(this.imgL, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                SUI.setTextureAsync(this.imgR, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                SUI.setTextureAsync(this.imgSkip, Path.uiUrl + "Activity/Activity_fengetiao.png"),
                this.txtTotalNum.visible = !1,
                this.DayOil.visible = !1,
                EventManager.instance.addEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.sortList, this)
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.UserData_Update, this.updateData, this),
                EventManager.instance.removeEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.sortList, this)
        },
        e
}(WindowBase);
