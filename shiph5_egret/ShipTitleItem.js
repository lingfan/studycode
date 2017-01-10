
var ShipNameItem = function(t) {
    function e(e) {
        t.call(this),
            this.sData = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/shipNameItemSkin.exml"
            /*tpa=resource/eui_skins/item/shipNameItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.nameTxt.text = this.sData.name || "",
                this.changeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nameHandler, this),
                WindowShipInfo.instance && WindowShipInfo.instance.reSizeItem(),
                this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clearHandler, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.SHIP_UPDATE, this.updateShip, this),
                SUI.addClickEffect(this.changeBtn)
        },
        i.updateShip = function(t) {
            t.parames && (this.nameTxt.text = t.parames.name)
        },
        i.nameHandler = function(t) {
            var e = {};
            e.type = 1,
                e.shipId = this.sData.id,
                e.shipName = this.sData.name,
                e.country = 2,
                e.shipType = 2,
                WindowManager.getInstance().show(WindowManager.windowType.NameChange, e)
        },
        i.clearHandler = function(t) {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.SHIP_UPDATE, this.updateShip, this)
        },
        e
}(eui.Component);
