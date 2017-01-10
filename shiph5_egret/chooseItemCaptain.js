
var chooseItemShip = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/zhenrong_xuanze_01junjianSkin.exml"
            /*tpa=resource/eui_skins/item/zhenrong_xuanze_01junjianSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {
            this.btnEquip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectShip, this)
        },
        i.selectShip = function() {
            GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.WindowChooseItem_chooseNewShip, {
                    id: this.data.id,
                    pos: this.data.pos
                })),
                WindowManager.getInstance().hide(WindowManager.windowType.ChoosItem),
                (10 == GuideManager.step || 26 == GuideManager.step || 72 == GuideManager.step) && GuideManager.nextStep()
        },
        i.dataChanged = function() {
            if (this.data) {
                this.txtName.textColor = QualitySystem.getColorByQuality(this.data.qualityNum);
                this.data.upgradeLv;
                SUI.setTextureAsync(this.bg, this.data.url),
                    SUI.setTextureAsync(this.pic, this.data.pic),
                    SUI.setTextureAsync(this.typeIcon, this.data.typeIcon),
                    this.txtUpgrade.text = ""
            }
        },
        e
}(eui.ItemRenderer);
