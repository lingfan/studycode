
var MilitaryItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.OnRemoveFromStage, this),
            EventManager.instance.addEventListener(EventTypes.EVENT_MILITARY_RANK_UPGRADE, this.dataChanged, this),
            EventManager.instance.addEventListener(EventTypes.EVENT_MILITARY_RANK_REWARD, this.dataChanged, this),
            this.skinName = "resource/eui_skins/itemrenders/junxianItemSkin.exml"
            /*tpa=resource/eui_skins/itemrenders/junxianItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.OnRemoveFromStage = function() {
            EventManager.instance.removeEventListener(EventTypes.EVENT_MILITARY_RANK_UPGRADE, this.dataChanged, this),
                EventManager.instance.removeEventListener(EventTypes.EVENT_MILITARY_RANK_REWARD, this.dataChanged, this)
        },
        i.onComplete = function() {},
        i.dataChanged = function() {
            var t = this,
                e = this.data.userData,
                a = UserData.getInstance().getMilitaryranktype();
            ConfigData.preLoadDats(["MilitaryRank"], [MilitaryrankParser],
                    function() {
                        t.txtName.text = MilitaryrankParser.GetInstance().getItemById(e.index).name_l
                    },
                    this),
                SUI.setTextureAsync(this.imgIcon, Path.GetRankIconUrl(e.index)),
                e.id <= a ? this.imgMask.visible = !1 : this.imgMask.visible = !0;
            var i = !1,
                n = MilitaryrankParser.GetInstance().getItemByField("id", UserData.getInstance().getMilitaryranktype()),
                s = n.index + 1;
            if (e.index == s) {
                var r = MilitaryrankParser.GetInstance().getItemById(s);
                r && r.gold <= UserData.getInstance().getRes(TypeDefine.RES.Gold) && r.honour <= UserData.getInstance().getMilitaryrankhon() && (i = !0)
            } else e.index == n.index && MilitaryManager.GetInstance().pkgData && 0 == MilitaryManager.GetInstance().pkgData.hasreward && 0 != Math.floor(n.diamond) && (i = !0);
            this.imgTip.visible = i,
                this.data.selected ? this.imgFrame.visible = !0 : this.imgFrame.visible = !1
        },
        e
}(eui.ItemRenderer);
