
var WindowCampExchange = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/ZB_JingJiChang_DuiHuanSkin.exml"
            /*tpa=resource/eui_skins/ZB_JingJiChang_DuiHuanSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {},
        i.init = function() {
            this.btnStore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnStore, this),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                EventManager.instance.addEventListener(EventTypes.CAMP_SHOP_UPDATE, this.updatePanel, this),
                MainUI.instance.changeTopMode(topUIMode.simple),
                this.btnStore.labelDisplay.text = Locales.get("panel_guard_biwu_btn_name_16"),
                this.txtScoreDesc.text = "当前声望：",
                this.lstGoods.itemRenderer = CampExchangeItemRender,
                CampShopOptData.instance.isInit ? this.updatePanel() : RequestManager.GetInstance().getShopItemData()
        },
        i.refreshNumber = function() {
            this.txtScore.text = CampBattleManager.instance.campbattlescore.toString()
        },
        i.updatePanel = function() {
            for (var t = [], e = 0, a = 0, i = ShopDataLib.instance.getShopDataByCampType(); a < i.length; a++) {
                var n = i[a];
                if (1 == n.enable) {
                    var s = CampShopOptData.instance.OnceItemById(n.id),
                        r = CampShopOptData.instance.DayItemById(n.id);
                    if (!s) {
                        e += 1,
                            n.index = e,
                            t.push(n);
                        var o = 0;
                        o = r && n.countLimit >= 1 ? n.countLimit - r.count : n.countLimit,
                            n.lastNum = o
                    }
                }
            }
            t.sort(function(t, e) {
                    return t.order - e.order
                }),
                this.AllList = t,
                this.refreshNumber();
            var l = !1;
            if (this.lstGoods.dataProvider)
                for (var h = 0; h < this.lstGoods.dataProvider.length; ++h) this.lstGoods.dataProvider.getItemAt(h) && this.AllList[h] && this.lstGoods.dataProvider.getItemAt(h).id != this.AllList[h].id && (l = !0);
            else l = !0;
            if (l) {
                var c = new eui.ArrayCollection(this.AllList),
                    d = this.lstGoods.scrollV;
                this.lstGoods.dataProvider = c,
                    this.lstGoods.validateNow(),
                    this.lstGoods.scrollV = d
            }
        },
        i.OnClickBtnStore = function(t) {},
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {
            EventManager.instance.removeEventListener(EventTypes.CAMP_SHOP_UPDATE, this.updatePanel, this)
        },
        e
}(WindowBase);
