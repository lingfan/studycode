
var WindowItemUse = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ShiYongDaoJuSkin.exml"
            /*tpa=resource/eui_skins/ShiYongDaoJuSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this._data = t,
                this.txtTitle.text = t.title ? t.title : "";
            var e = ItemsManager.getInstance().getItemById(t.itemId),
                a = 0;
            e && (a = e.count);
            var i = GlobalFunction.getDropDataByTypeAndId(TypeDefine.Const.DROP_TYPE_ITEM, t.itemId, a);
            if (SUI.setItemIcon(this.item, i, a), this.txtName.text = i.name, SUI.setQualityColor(this.txtName, i.quality), this.txtDesc.text = i.desc, this.txtNum.text = Locales.get("zz_count", a), 0 >= a ? (this.btnCancel.enabled = !1, this.txtNum.textColor = 16711680) : (this.btnCancel.enabled = !0, this.txtNum.textColor = 16777215), this.btnConfirm.enabled = !0, null == this._data.shopId || null == ShopdataParser.GetInstance().getItemById(this._data.shopId)) {
                this.txtRes.text = "";
                var n = a > 10 ? 10 : a;
                0 == a && (n = 10, this.btnConfirm.enabled = !1),
                    this.btnConfirm.labelDisplay.text = Locales.get("panel_bag_btn_use_ten_other", n)
            } else {
                var s = ShopdataParser.GetInstance().getItemById(this._data.shopId);
                this.btnCancel.labelDisplay.text = Locales.get("panel_bag_btn_use"),
                    this.btnConfirm.labelDisplay.text = Locales.get("panel_AlertLueduolingBuy_btn_blue"),
                    this.txtRes.text = s.saleValue + "钻石"
            }
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnCancel, this),
                this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnConfirm, this),
                this.btnCancel.labelDisplay.text = Locales.get("BuyStageCountPanel_oil_btn_1"),
                this.btnConfirm.labelDisplay.text = Locales.get("BuyStageCountPanel_oil_btn_2"),
                EventManager.instance.addEventListener(EventTypes.ITEM_DATA_UPDATE, this.update, this)
        },
        i.update = function() {
            this.setData(this._data)
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.OnClickBtnCancel = function(t) {
            ItemsManager.getInstance().bagitemUseById(this._data.itemId)
        },
        i.OnClickBtnConfirm = function(t) {
            if (null == this._data.shopId || null == ShopdataParser.GetInstance().getItemById(this._data.shopId)) ItemsManager.getInstance().bagitemUseById(this._data.itemId, 1);
            else {
                RequestManager.GetInstance().ShopItemBuyById(this._data.shopId, 1);
                var e = ShopdataParser.GetInstance().getItemById(this._data.shopId);
                Plantform.getInstanceOf().buy(e.saleValue, 1, this._data.shopId)
            }
        },
        i.clear = function() {
            EventManager.instance.removeEventListener(EventTypes.ITEM_DATA_UPDATE, this.update, this)
        },
        e
}(WindowBase);
