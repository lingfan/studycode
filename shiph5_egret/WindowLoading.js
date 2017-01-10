
var keJiFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/KeJiBarSkin.exml"
            /*tpa=resource/eui_skins/item/KeJiBarSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            if (t.prototype.dataChanged.call(this), this.data) {
                this.upgradeBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.upgradeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            if (console.log("升级"), UserData.getInstance().getRes(TypeDefine.RES.Gold) >= e.data.costGold) {
                                var t = Transport.getPkg(ProtocolMgr.ID_DceUpgradeScience);
                                t.id = Number(e.data.id),
                                    Transport.instance.send(t),
                                    83 == GuideManager.step && GuideManager.nextStep()
                            } else Toast.launch("金币不足"),
                                UserData.getInstance()._level >= 9 && (WindowManager.getInstance().show(WindowManager.windowType.BuJi), UserData.getInstance().sendDetailMessage(), MainUI.instance.setBottomVisible(!0), UserData.getInstance().isKeJiJump = !0)
                        },
                        this),
                    SUI.setTextureAsync(this.icon, this.data.icon);
                var a = ItemsManager.getInstance().getItemById(1005);
                null != a && a.count >= Number(this.data.needCount) ? this.costCountLabel.textColor = 11135736 : this.costCountLabel.textColor = 16001803,
                    UserData.getInstance().getRes(TypeDefine.RES.Gold) >= Number(this.data.costGold) ? this.costGoldLabel.textColor = 11135736 : this.costGoldLabel.textColor = 16001803
            }
        },
        e
}(eui.ItemRenderer);
