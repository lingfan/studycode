
var CampExchangeItemRender = function(t) {
    function e() {
        t.call(this),
            this.limitCount = 0,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/ZB_JingJiChang_3_Skin.exml"
            /*tpa=resource/eui_skins/item/ZB_JingJiChang_3_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.txtNumDesc.text = Locales.get("panel_luckgirl_txt_comment_1"),
                this.btnBuy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnBuy, this),
                EventManager.instance.addEventListener(EventTypes.ARENA_EXCHANGE, this.dataChanged, this)
        },
        i.OnClickBtnBuy = function() {
            var t = this;
            if (AudioManager.instance.playSound(AudioManager.SOUND_BTN), this.data.reqLevel > UserData.getInstance().getPlayerLevel()) return void Toast.launch(Locales.get("panel_shop_txt_windword_2"), 16711680);
            if (CampBattleManager.instance.campbattlescore < Number(this.data.saleValue)) return void Toast.launch(Locales.get("ui_campBattle_BuyError"), 16711680);
            if (-2 == this.data.countLimit || 1 == this.data.countLimit) RequestManager.GetInstance().ShopItemBuyById(this.data.id, 1),
                Plantform.getInstanceOf().buy(this.data.saleValue, 1, this.data.id);
            else {
                var e = 0;
                e = 0 == this.data.countLimit ? -1 : this.data.count;
                var a = {
                    money: this.data.saleValue,
                    id: this.data.id,
                    timeslimit: e
                };
                a.totalMoney = CampBattleManager.instance.campbattlescore,
                    a.getLimitCountFunc = function() {
                        return t.limitCount
                    },
                    a.onConfirm = function(e, a) {
                        RequestManager.GetInstance().ShopItemBuyById(e, a),
                            Plantform.getInstanceOf().buy(t.data.saleValue, a, e)
                    },
                    WindowManager.getInstance().show(WindowManager.windowType.PVPExchangeConfirm, a)
            }
        },
        i.dataChanged = function() {
            var t = null,
                e = null,
                a = null,
                i = null,
                n = this.data;
            if (1 == n.enable && (t = CampShopOptData.instance.OnceItemById(n.id), e = CampShopOptData.instance.DayItemById(n.id), a = CampShopOptData.instance.WeekItemById(n.id), !t)) {
                i = ItemsManager.getInstance().getItemById(n.itemId),
                    i = i ? GlobalFunction.getItemByData({
                        id: n.itemId,
                        type: TypeDefine.Const.DROP_TYPE_ITEM,
                        count: i.count
                    }) : GlobalFunction.getItemByData({
                        id: n.itemId,
                        type: n.itemType
                    });
                QualitySystem.getColorByQuality(i.quality);
                SUI.setItemIcon(this.itemCompent, i),
                    this.txtName.text = i.name,
                    this.txtNum.text = i.realCount ? i.realCount.toString() : "0",
                    this.txtDesc.text = i.desc ? i.desc : "";
                UserData.getInstance().getPlayerLevel(); - 1 != n.reqLevel ? (this.canNotBuy.visible = !0, this.canBuy.visible = !1, this.txtBuyCondition.text = Locales.get("ui_campBattle_charge_reqLevel", n.reqLevel), this.limitCount = 0) : (this.canNotBuy.visible = !1, this.canBuy.visible = !0, n.saleValue > 0 ? this.btnBuy.labelDisplay.text = n.saleValue + "声望" : this.btnBuy.labelDisplay.text = Locales.get("panel_arena_charge"), this.btnBuy.enabled = !0, n.countLimit > 0 ? (this.txtBuyLimit.visible = !0, e ? (this.txtBuyLimit.text = Locales.get("panel_shoptrade_txt_title_litm_count", n.countLimit - e.count), n.countLimit - e.count <= 0 ? (this.txtBuyLimit.text = Locales.get("panel_guild_saleOut"), this.btnBuy.enabled = !1, this.limitCount = 0) : this.limitCount = n.countLimit - e.count) : (this.txtBuyLimit.text = Locales.get("panel_shoptrade_txt_title_litm_count", n.countLimit), this.limitCount = n.countLimit)) : n.countLimitWeek > 0 ? (this.txtBuyLimit.visible = !0, a ? (this.txtBuyLimit.text = Locales.get("panel_guard_biwu_comment_80", n.countLimitWeek - a.count), n.countLimitWeek - a.count <= 0 ? (this.txtBuyLimit.text = Locales.get("panel_guild_saleOut"), this.btnBuy.enabled = !1, this.limitCount = 0) : this.limitCount = n.countLimitWeek - a.count) : (this.txtBuyLimit.text = Locales.get("panel_guard_biwu_comment_80", n.countLimitWeek), this.limitCount = n.countLimit)) : (this.txtBuyLimit.visible = !1, this.limitCount = 9999))
            }
        },
        i.clear = function() {
            EventManager.instance.removeEventListener(EventTypes.ARENA_EXCHANGE, this.dataChanged, this)
        },
        e
}(eui.ItemRenderer);
