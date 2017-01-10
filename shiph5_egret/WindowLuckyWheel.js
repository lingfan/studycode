
var serverListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/serverSkin.exml"
            /*tpa=resource/eui_skins/item/serverSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var t = this;
            this.data && (this.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (this.txtServerName.touchEnabled = !1, this.txtServerFlag.touchEnabled = !1, 1 == this.data.isOpen ? 1 == this.data.isNew ? (this.txtServerFlag.text = "新服", this.txtServerFlag.textColor = 65280) : 0 == this.data.isNew && (0 == this.data.busy ? (this.txtServerFlag.text = "畅通", this.txtServerFlag.textColor = 65280) : 1 == this.data.busy ? (this.txtServerFlag.text = "拥挤", this.txtServerFlag.textColor = 16776960) : 2 == this.data.busy && (this.txtServerFlag.text = "繁忙", this.txtServerFlag.textColor = 16711680)) : 0 == this.data.isOpen && (this.txtServerFlag.text = "维护中", this.txtServerFlag.textColor = 13421772), this.txtServerName.text = this.data.name, this.addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.GOBACK_SERVER_PAGE, t.data))
                },
                this)))
        },
        e
}(eui.ItemRenderer);
