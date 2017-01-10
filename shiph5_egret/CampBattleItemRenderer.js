
var RechargeRewardItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onClear, this),
            this.skinName = "resource/eui_skins/item/HuoDong_Bar_1_Skin.exml"
            /*tpa=resource/eui_skins/item/HuoDong_Bar_1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onClear = function() {},
        i.onComplete = function() {
            this.btnTake.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnTake, this),
                this.btnBlue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnTake, this),
                SUI.setTextureAsync(this.imgBg, Path.uiUrl + "Activity/Bar_huodong_2.jpg"),
                this.imgReach.visible = !1,
                this.txtReach.visible = !1
        },
        i.OnClickBtnTake = function(t) {
            var e = ActivityManager.instance.curActivityType;
            this._canGet ? (RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivity, {
                id: e,
                type: this.data.key
            }), e == ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE && WindowManager.getInstance().hide(WindowManager.windowType.listActivity)) : e == ActivityType.ACTIVITY_TYPE_LEVEL ? Toast.launch(Locales.get("panel_worldbattle_wind_6")) : WindowManager.getInstance().show(WindowManager.windowType.Recharge)
        },
        i.dataChanged = function() {
            for (var t = function(t) {
                        var a = e["reward" + t],
                            i = e.data.items[t - 1];
                        if (i) {
                            var n = GiftdataParser.GetInstance().getItemById(i.id),
                                s = GlobalFunction.getDropDataByTypeAndId(n.type, n.item, n.count);
                            SUI.setItemIcon(a, s),
                                1 == i.effect ? (a.hasEffect = !0, a.effect ? a.effect.visible = !0 : SUI.loadMovieClip(Path.activityEffectUrl + "activity_goods.json", Path.activityEffectUrl + "activity_goods.png", a,
                                    function(t) {
                                        t.x = a.imgBg.x + .5 * a.imgBg.width,
                                            t.y = a.imgBg.y + .5 * a.imgBg.height,
                                            a.effect = t,
                                            a.hasEffect || (t.visible = !1)
                                    },
                                    e)) : (a.hasEffect = !1, a.effect && (a.effect.visible = !1)),
                                a.visible = !0
                        } else a.visible = !1
                    },
                    e = this, a = 1; 4 >= a; ++a) t(a);
            var i = ActivityManager.instance.curActivityType;
            if (i == ActivityType.ACTIVITY_TYPE_RECHARGE_REWARD) {
                this.txtDesc.text = Locales.get("zz_recharge", this.data.params[0]);
                var n = 0;
                if (ActivityManager.instance.activityData.rechargecount_func && (n = ActivityManager.instance.activityData.rechargecount_func), this.data.params[0] <= n) {
                    for (var s = !1,
                            r = 0,
                            o = ActivityManager.instance.activityData.rechargelist_func; r < o.length; r++) {
                        var l = o[r];
                        if (l == this.data.key) {
                            s = !0;
                            break
                        }
                    }
                    s ? (this.btnTake.labelDisplay.text = "已领取", this.btnTake.labelDisplay.textColor = 8947848, this.btnTake.enabled = !1, this.btnBlue.visible = !1, this.btnTake.visible = !0, this._canGet = !1) : (this.btnTake.labelDisplay.text = "领取", this.btnTake.labelDisplay.textColor = 16777215, this.btnBlue.visible = !1, this.btnTake.enabled = !0, this.btnTake.visible = !0, this._canGet = !0)
                } else this.btnBlue.labelDisplay.text = "前往充值",
                    this.btnBlue.visible = !0,
                    this._canGet = !1,
                    this.btnTake.visible = !1
            } else if (i == ActivityType.ACTIVITY_TYPE_COST_REWARD) {
                this.txtDesc.text = Locales.get("zz_cost", this.data.params[0]);
                var h = 0;
                if (ActivityManager.instance.activityData.costcount && (h = ActivityManager.instance.activityData.costcount), this.data.params[0] <= h) {
                    for (var s = !1,
                            c = 0,
                            d = ActivityManager.instance.activityData.costlist; c < d.length; c++) {
                        var l = d[c];
                        if (l == this.data.key) {
                            s = !0;
                            break
                        }
                    }
                    s ? (this.btnTake.labelDisplay.text = "已领取", this.btnTake.labelDisplay.textColor = 8947848, this.btnTake.enabled = !1, this.btnBlue.visible = !1, this.btnTake.visible = !0, this._canGet = !1) : (this.btnTake.labelDisplay.text = "领取", this.btnTake.labelDisplay.textColor = 16777215, this.btnBlue.visible = !1, this.btnTake.enabled = !0, this.btnTake.visible = !0, this._canGet = !0)
                } else this.btnTake.labelDisplay.text = "领取",
                    this.btnTake.labelDisplay.textColor = 8947848,
                    this.btnBlue.visible = !1,
                    this.btnTake.enabled = !1,
                    this.btnTake.visible = !0,
                    this._canGet = !1
            } else if (i == ActivityType.ACTIVITY_TYPE_SINGLE_RECHARGE) {
                this.txtDesc.text = Locales.get("zz_singleRecharge", this.data.params[0]);
                var g = 0;
                if (ActivityManager.instance.activityData.singlecharge && (g = ActivityManager.instance.activityData.singlecharge), this.data.params[0] <= g) {
                    for (var s = !1,
                            u = 0,
                            p = ActivityManager.instance.activityData.single_gift_list; u < p.length; u++) {
                        var l = p[u];
                        if (l == this.data.key) {
                            s = !0;
                            break
                        }
                    }
                    s ? (this.btnTake.labelDisplay.text = "已领取", this.btnTake.labelDisplay.textColor = 8947848, this.btnBlue.visible = !1, this.btnTake.enabled = !1, this.btnTake.visible = !0, this._canGet = !1) : (this.btnTake.labelDisplay.text = "领取", this.btnTake.labelDisplay.textColor = 16777215, this.btnBlue.visible = !1, this.btnTake.enabled = !0, this.btnTake.visible = !0, this._canGet = !0)
                } else this.btnBlue.labelDisplay.text = "前往充值",
                    this.btnBlue.visible = !0,
                    this._canGet = !1,
                    this.btnTake.visible = !1
            } else if (i == ActivityType.ACTIVITY_TYPE_LEVEL) {
                this.txtDesc.text = Locales.get("zz_bld_lv", this.data.params[0]);
                var m = UserData.getInstance()._level;
                if (this.data.params[0] <= m) {
                    for (var s = !1,
                            _ = 0,
                            v = ActivityManager.instance.activityData.level_gifts; _ < v.length; _++) {
                        var l = v[_];
                        if (l == this.data.key) {
                            s = !0;
                            break
                        }
                    }
                    s ? (this.btnTake.labelDisplay.text = "已领取", this.btnTake.labelDisplay.textColor = 8947848, this.btnTake.enabled = !1, this.btnBlue.visible = !1, this.btnTake.visible = !0, this._canGet = !1) : (this.btnTake.labelDisplay.text = "领取", this.btnTake.labelDisplay.textColor = 16777215, this.btnBlue.visible = !1, this.btnTake.enabled = !0, this.btnTake.visible = !0, this._canGet = !0)
                } else this.btnTake.labelDisplay.text = "未达成",
                    this.btnTake.labelDisplay.textColor = 8947848,
                    this.btnBlue.visible = !1,
                    this.btnTake.enabled = !1,
                    this.btnTake.visible = !0,
                    this._canGet = !1
            } else if (i == ActivityType.ACTIVITY_TYPE_DAILY_SINGLE_RECHARGE) {
                this.txtDesc.text = Locales.get("zz_singleRecharge", this.data.params[0]);
                var g = 0;
                if (ActivityManager.instance.activityData.daily_singlerecharge_count && (g = ActivityManager.instance.activityData.daily_singlerecharge_count), this.data.params[0] <= g) {
                    for (var s = !1,
                            f = 0,
                            I = ActivityManager.instance.activityData.daily_singlerecharge_taked; f < I.length; f++) {
                        var l = I[f];
                        if (l == this.data.key) {
                            s = !0;
                            break
                        }
                    }
                    s ? (this.btnTake.labelDisplay.text = "已领取", this.btnTake.labelDisplay.textColor = 8947848, this.btnBlue.visible = !1, this.btnTake.enabled = !1, this.btnTake.visible = !0, this._canGet = !1) : (this.btnTake.labelDisplay.text = "领取", this.btnTake.labelDisplay.textColor = 16777215, this.btnBlue.visible = !1, this.btnTake.enabled = !0, this.btnTake.visible = !0, this._canGet = !0)
                } else this.btnBlue.labelDisplay.text = "前往充值",
                    this.btnBlue.visible = !0,
                    this._canGet = !1,
                    this.btnTake.visible = !1
            } else if (i == ActivityType.ACTIVITY_TYPE_DAILY_ACC_RECHARGE) {
                this.txtDesc.text = Locales.get("zz_recharge", this.data.params[0]);
                var n = 0;
                if (ActivityManager.instance.activityData.daily_accrecharge_count && (n = ActivityManager.instance.activityData.daily_accrecharge_count), this.data.params[0] <= n) {
                    for (var s = !1,
                            T = 0,
                            y = ActivityManager.instance.activityData.daily_accrecharge_taked; T < y.length; T++) {
                        var l = y[T];
                        if (l == this.data.key) {
                            s = !0;
                            break
                        }
                    }
                    s ? (this.btnTake.labelDisplay.text = "已领取", this.btnTake.labelDisplay.textColor = 8947848, this.btnTake.enabled = !1, this.btnBlue.visible = !1, this.btnTake.visible = !0, this._canGet = !1) : (this.btnTake.labelDisplay.text = "领取", this.btnTake.labelDisplay.textColor = 16777215, this.btnBlue.visible = !1, this.btnTake.enabled = !0, this.btnTake.visible = !0, this._canGet = !0)
                } else this.btnBlue.labelDisplay.text = "前往充值",
                    this.btnBlue.visible = !0,
                    this._canGet = !1,
                    this.btnTake.visible = !1
            }
        },
        e
}(eui.ItemRenderer);
