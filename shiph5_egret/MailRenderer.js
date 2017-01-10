
var WindowLuckyWheel = function(t) {
    function e() {
        t.call(this, !0),
            this._turning = !1,
            this.skinName = "resource/eui_skins/HuoDong_zhuanpan_Skin.exml"
            /*tpa=resource/eui_skins/HuoDong_zhuanpan_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this._data = t,
                SUI.setTextureAsync(this.imgShow, Path.GetActivityIcon(this._data.icon)),
                ActivityManager.instance.setImageByType(this.imgTitle, t.type);
            var e = Utils.getDateByNum(1e3 * this._data.start_time.time, timeType.FORMATDATE),
                a = Utils.getDateByNum(1e3 * this._data.end_time.time, timeType.FORMATDATE);
            this._data.end_time.time - this._data.start_time.time > 5184e3 ? this.txtTime.text = Locales.get("zz_forever") : this.txtTime.text = Locales.get("zz_activitytime1", e, a),
                this.txtDesc.textFlow = Utils.textFlowByStr(Locales.get("zz_activityIntro" + this._data.type)),
                this.updateScores();
            for (var i = function(t) {
                        var e = n["reward" + (t + 1)],
                            a = n._data.itemlist[t],
                            i = a.items[0],
                            s = GiftdataParser.GetInstance().getItemById(i.id),
                            r = GlobalFunction.getDropDataByTypeAndId(s.type, s.item, s.count);
                        SUI.setItemIcon(e, r),
                            e.txtName.visible = !1,
                            1 == i.effect ? (e.hasEffect = !0, e.effect ? e.effect.visible = !0 : SUI.loadMovieClip(Path.activityEffectUrl + "activity_goods.json", Path.activityEffectUrl + "activity_goods.png", e,
                                function(t) {
                                    t.x = e.imgBg.x + .5 * e.imgBg.width,
                                        t.y = e.imgBg.y + .5 * e.imgBg.height,
                                        e.effect = t,
                                        e.hasEffect || (t.visible = !1)
                                },
                                n)) : (e.hasEffect = !1, e.effect && (e.effect.visible = !1))
                    },
                    n = this, s = 0; s < this._data.itemlist.length; ++s) i(s)
        },
        i.updateScores = function() {
            this.txtSelfPoints.text = "我的积分：" + ActivityManager.instance.activityData.wheel_point
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnLottery.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnLottery, this),
                SUI.addClickEffect(this.btnLottery),
                SUI.setTextureAsync(this.imgBg, Path.backGroundImageUrl + "Bg_huodong.jpg"),
                SUI.setTextureAsync(this.imgL, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                SUI.setTextureAsync(this.imgR, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                SUI.setTextureAsync(this.imgSkip, Path.uiUrl + "Activity/Activity_fengetiao.png"),
                SUI.setTextureAsync(this.btnLottery, Path.uiUrl + "Activity/zhuanpan_dianji_up.png"),
                SUI.setTextureAsync(this.imgPoint, Path.uiUrl + "Activity/zhuanpan_jiantou.png"),
                SUI.setTextureAsync(this.imgBack, Path.uiUrl + "Activity/zhuanpan_wanzheng.jpg"),
                SUI.setTextureAsync(this.imgChose, Path.uiUrl + "Activity/zhuanpan_xuanzhong.png"),
                EventManager.instance.addEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.onActivityDataUpdate, this),
                this.imgChose.visible = !1;
            var t = ActivityluckywheelParser.GetInstance().getDataArr()[0];
            this.txtDesc2.text = Locales.get("zz_luckyWheelDesc", t.score, t.costNum)
        },
        i.onActivityDataUpdate = function() {
            this.updateScores()
        },
        i.OnClickBtnClose = function(t) {
            this._turning || this.close()
        },
        i.OnClickBtnLottery = function(t) {
            if (!this._turning) {
                var e = ActivityluckywheelParser.GetInstance().getDataArr()[0];
                if (ActivityManager.instance.activityData.wheel_point < e.costNum) return void Toast.launch(Locales.get("zz_luckyWheelWarnning"));
                this._turning = !0,
                    RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivity, {
                        id: ActivityType.ACTIVITY_TYPE_WHEEL,
                        type: 0
                    })
            }
        },
        i.turnToGift = function(t) {
            for (var e = this,
                    a = 0,
                    i = 0; i < this._data.itemlist.length; ++i) {
                var n = (this["reward" + (i + 1)], this._data.itemlist[i]),
                    s = n.items[0];
                if (s.id == t) {
                    a = i;
                    break
                }
            }
            Log.logZDY("itemId1", t, a),
                egret.Tween.removeTweens(this.imgPoint);
            var r = 45 * a,
                o = this.imgPoint.rotation,
                l = 360 - o,
                h = o + 1440,
                c = h + 720 + l + r;
            egret.Tween.get(this.imgPoint).to({
                    rotation: h
                },
                1e3).to({
                    rotation: c
                },
                2e3, egret.Ease.quadOut).call(function() {
                e.imgChose.rotation = c,
                    e.imgChose.visible = !0,
                    e._turning = !1,
                    Log.logZDY("itemId2", t, a);
                var i = GiftdataParser.GetInstance().getItemById(t),
                    n = GlobalFunction.getDropDataByTypeAndId(i.type, i.item, i.count),
                    s = QualitySystem.getColorByQuality(n.quality).toString(16);
                if (s.length < 6)
                    for (; s.length < 6;) s = "0" + s;
                n.count && n.count > 1 ? Toast.launch("恭喜您获得#" + s + n.name + "#x" + n.count, void 0, !0) : Toast.launch("恭喜您获得#" + s + n.name + "#", void 0, !0)
            })
        },
        i.clear = function() {
            EventManager.instance.removeEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.onActivityDataUpdate, this)
        },
        e.useScore = 100,
        e
}(WindowBase);
