
var WindowFirstRecharge = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/HuoDong_shouchong_Skin.exml"
            /*tpa=resource/eui_skins/HuoDong_shouchong_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {},
        i.onTouchShip = function(t) {
            var e = t.currentTarget.shipId,
                a = PaperdataParser.GetInstance().getItemByField("shipId", e);
            WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                data: {
                    id: a.id,
                    shipid: e
                },
                type: shipInfoWindowType.handbook
            })
        },
        i.updateBtns = function() {
            for (var t = ActivityManager.instance.curActivityInfo,
                    e = [2, 5], a = 1; 2 >= a; ++a) {
                var i = this["btnRecharge" + a],
                    n = t.itemlist[a - 1],
                    s = t.itemlist[a],
                    r = t.itemlist[a - 2],
                    o = n.params[0],
                    l = 0;
                o == ActivityManager.instance.activityData.cashtype ? l = 1 : o < ActivityManager.instance.activityData.cashtype ? l = !s || s.params[0] > ActivityManager.instance.activityData.cashtype ? 1 : 2 : r && r.params[0] <= ActivityManager.instance.activityData.cashtype && (l = 2);
                var h = CashdataParser.GetInstance().getItemById(e[a - 1]),
                    c = GetPlatType();
                0 == l ? i.labelDisplay.text = "充值" + h.sale + (c == PlatformType.PF_QQ ? "星星" : "元") : 1 == l ? (i.labelDisplay.text = "领取", i.itemInfo = n) : 2 == l && (i.visible = !1)
            }
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnRecharge2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnRecharge2, this),
                this.btnRecharge1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnRecharge1, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.UserData_Update, this.updateBtns, this),
                SUI.setTextureAsync(this.imgBack, Path.uiUrl + "Activity/firstRecharge.png"),
                SUI.setTextureAsync(this.imgLight, Path.uiUrl + "Activity/activity_light.png"),
                egret.Tween.get(this.imgLight, {
                    loop: !0
                }).to({
                        rotation: this.imgLight.rotation + 360
                    },
                    6e3);
            for (var t = [10400, 13e3], e = [2, 5], a = ActivityManager.instance.curActivityInfo, i = 1; 2 >= i; ++i) {
                var n = this["imgShip" + i],
                    s = this["btnRecharge" + i],
                    r = this["txtShipName" + i],
                    o = ShipdataParser.GetInstance().getItemById(t[i - 1]),
                    l = o.modelId,
                    h = ShipmodeldataParser.GetInstance().getItemById(l),
                    c = Path.shipURL + "y_" + h.url;
                SUI.setTextureAsync(n, c),
                    r.text = o.name_l,
                    n.shipId = t[i - 1],
                    n.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchShip, this);
                var d = a.itemlist[i - 1],
                    g = a.itemlist[i],
                    u = a.itemlist[i - 2],
                    p = d.params[0],
                    m = 0;
                p == ActivityManager.instance.activityData.cashtype ? m = 1 : p < ActivityManager.instance.activityData.cashtype ? m = !g || g.params[0] > ActivityManager.instance.activityData.cashtype ? 1 : 2 : u && u.params[0] <= ActivityManager.instance.activityData.cashtype && (m = 2);
                var _ = CashdataParser.GetInstance().getItemById(e[i - 1]),
                    v = GetPlatType();
                0 == m ? s.labelDisplay.text = "充值" + _.sale + (v == PlatformType.PF_QQ ? "星星" : "元") : 1 == m ? (s.labelDisplay.text = "领取", s.itemInfo = d) : 2 == m && (s.visible = !1);
                var f = this["txtRechargeNum" + i],
                    I = this["txtRewardDiamond" + i],
                    T = this["txtRecharge" + i];
                if (f.text = _.sale.toString(), I.text = (_.cash + _.firstGet).toString(), i >= 2) {
                    var y = CashdataParser.GetInstance().getItemById(e[i - 2]);
                    T.text = y.sale.toString()
                }
                for (var D = function(t) {
                            var e = P["reward" + i + "_" + t],
                                a = d.items[t - 1];
                            if (a) {
                                var n = GiftdataParser.GetInstance().getItemById(a.id),
                                    s = GlobalFunction.getDropDataByTypeAndId(n.type, n.item, n.count);
                                SUI.setItemIcon(e, s),
                                    1 == a.effect ? (e.hasEffect = !0, e.effect ? e.effect.visible = !0 : SUI.loadMovieClip(Path.activityEffectUrl + "activity_goods.json", Path.activityEffectUrl + "activity_goods.png", e,
                                        function(t) {
                                            t.x = 47,
                                                t.y = 47.5,
                                                e.effect = t,
                                                e.hasEffect || (t.visible = !1)
                                        },
                                        P)) : (e.hasEffect = !1, e.effect && (e.effect.visible = !1)),
                                    e.visible = !0
                            } else e.visible = !1
                        },
                        P = this, C = 1; 3 >= C; ++C) D(C)
            }
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.OnClickBtnRecharge2 = function(t) {
            t.currentTarget.itemInfo ? (RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivity, {
                id: ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE,
                type: t.currentTarget.itemInfo.key
            }), this.close()) : ConfigData.preLoadDats(["cashData"], [CashdataParser],
                function() {
                    var t = CashdataParser.GetInstance().getItemById(5);
                    PlatformManager.instance.pay(t.id.toString(), t.name_l, t.sale, 1, void 0)
                },
                this)
        },
        i.OnClickBtnRecharge1 = function(t) {
            t.currentTarget.itemInfo ? (RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivity, {
                id: ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE,
                type: t.currentTarget.itemInfo.key
            }), this.close()) : ConfigData.preLoadDats(["cashData"], [CashdataParser],
                function() {
                    var t = CashdataParser.GetInstance().getItemById(2);
                    PlatformManager.instance.pay(t.id.toString(), t.name_l, t.sale, 1, void 0)
                },
                this)
        },
        i.clear = function() {
            egret.Tween.removeTweens(this.imgLight),
                GameEventDispatcher.getInstance().removeEventListener(GameEvent.UserData_Update, this.updateBtns, this)
        },
        e
}(WindowBase);
