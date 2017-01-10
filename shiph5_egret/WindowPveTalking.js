
var WindowPVEChooseLevel = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ZhanYi_XuanZeZhangJieSkin.exml"
            /*tpa=resource/eui_skins/ZhanYi_XuanZeZhangJieSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {},
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.scvCenter.viewport = this.lstCenter,
                this.lstCenter.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.OnSelectItem, this);
            for (var t = AreadataParser.GetInstance().getDataArr(), e = [], a = MainWorldManager.instance.getCurrentArea(), i = 0, n = t; i < n.length; i++) {
                var s = n[i];
                s.id <= a && e.push({
                    userData: s
                })
            }
            this.lstCenter.itemRenderer = PVEChooseAreaItemRenderer,
                this.lstCenter.dataProvider = new eui.ArrayCollection(e)
        },
        i.OnSelectItem = function(t) {
            var e = AreadataParser.GetInstance().getDataArr(),
                a = e[this.lstCenter.selectedIndex];
            EventManager.instance.dispatchEvent(EventTypes.EVENT_CHOOSE_AREA, a.id, this.lstCenter.selectedIndex),
                this.close()
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {},
        e
}(WindowBase);
