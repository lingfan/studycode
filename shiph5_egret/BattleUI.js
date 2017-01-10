
var PVPExchangeItemRenderer = function(t) {
    function e() {
        t.call(this),
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
            AudioManager.instance.playSound(AudioManager.SOUND_BTN);
            var t = UserData.getInstance().getPlayerLevel(),
                e = this.data;
            if (t < e.buyLevelLimited) return void Toast.launch(Locales.get("panel_arena_txt_comment_window_5"), 16777215);
            Log.logZDY("itemInfo.buyTimeLimited", e.buyTimeLimited);
            var a = ArenaManager.instance.getCanDHNumById(e.id);
            if (-1 == e.buyTimeLimited || 1 == e.buyTimeLimited) RequestManager.GetInstance().ArenaExchange(e.id);
            else if (0 >= a || a < e.itemCost) Toast.launch(Locales.get("panel_DHtrade_wind_1"), 16777215);
            else {
                var i = 0;
                i = 0 == e.buyTimeLimited ? -1 : e.count;
                var n = {
                    money: e.itemCost,
                    id: e.id,
                    timeslimit: i
                };
                n.totalMoney = ArenaManager.instance.getCanDHNumById(e.id),
                    n.getLimitCountFunc = ArenaManager.getDHCountById,
                    n.onConfirm = function(t, e) {
                        RequestManager.GetInstance().ArenaExchange(t, e)
                    },
                    WindowManager.getInstance().show(WindowManager.windowType.PVPExchangeConfirm, n)
            }
        },
        i.dataChanged = function() {
            var t = this.data,
                e = ItemsManager.getInstance().getItemById(t.itemId);
            e = e ? GlobalFunction.getItemByData({
                    id: t.itemId,
                    type: TypeDefine.Const.DROP_TYPE_ITEM,
                    count: e.count
                }) : GlobalFunction.getItemByData({
                    id: t.itemId,
                    type: TypeDefine.Const.DROP_TYPE_ITEM
                }),
                SUI.setItemIcon(this.itemCompent, e),
                this.txtName.text = e.name,
                this.txtNum.text = e.realCount ? e.realCount.toString() : "0";
            var a = "";
            a = 0 == t.buyTimeLimited ? t.desc_l : -1 == t.buyTimeLimited ? Locales.get("panel_arena_txt_comment_12") + Locales.get("panel_arena_txt_comment_8", t.buyRank) + Locales.get("panel_arena_txt_comment_13") : t.desc_l,
                this.txtDesc.text = a;
            var i = 0,
                n = ArenaManager.instance.getCountById(t.id);
            i = -1 == t.buyTimeLimited ? 1 : t.buyTimeLimited - n;
            var s = UserData.getInstance().getPlayerLevel();
            t.buyLevelLimited > 0 && s < t.buyLevelLimited ? (this.canNotBuy.visible = !0, this.canBuy.visible = !1, this.txtBuyCondition.text = Locales.get("ui_campBattle_charge_reqLevel", t.buyLevelLimited)) : (this.canBuy.visible = !0, this.canNotBuy.visible = !1, this.btnBuy.enabled = !0, t.buyTimeLimited > 0 ? i > 0 ? this.txtBuyLimit.text = Locales.get("panel_shoptrade_txt_title_litm_count", i) : (this.txtBuyLimit.text = Locales.get("panel_guild_saleOut"), this.btnBuy.enabled = !1) : this.txtBuyLimit.text = "", t.itemCost > 0 ? this.btnBuy.labelDisplay.text = Locales.get("panel_activty_valentines_day_text_30", t.itemCost) : this.btnBuy.labelDisplay.text = Locales.get("panel_arena_charge"))
        },
        i.clear = function() {
            EventManager.instance.removeEventListener(EventTypes.ARENA_EXCHANGE, this.dataChanged, this)
        },
        e
}(eui.ItemRenderer);
