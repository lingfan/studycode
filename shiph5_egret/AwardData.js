
var awardItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/item/LJZX_1_Skin.exml"
            /*tpa=resource/eui_skins/item/LJZX_1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {
            this.girdArr = [this.reward1, this.reward2, this.reward3],
                this.btnCheck.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHnadler, this)
        },
        i.dataChanged = function() {
            this.reward1.visible = !1,
                this.reward2.visible = !1,
                this.reward3.visible = !1,
                this.txtTitle.text = this.data.title,
                this.txtTime.text = GlobalFunction.getDateByTimeNum(this.data.time).getFullYear().toString() + "年" + (GlobalFunction.getDateByTimeNum(this.data.time).getMonth() + 1) + "月" + GlobalFunction.getDateByTimeNum(this.data.time).getDate().toString() + "日",
                this.txtDesc.text = this.data.dec;
            for (var t = this.data.droplist.length > 3 ? 3 : this.data.droplist.length, e = 0; t > e; e++) {
                this.girdArr[e].visible = !0;
                var a = GlobalFunction.getDropDataByTypeAndId(this.data.droplist[e].type, this.data.droplist[e].id, this.data.droplist[e].count);
                SUI.setTextureAsync(this.girdArr[e].imgBg, QualitySystem.getItemSmallBack(a.quality)),
                    SUI.setTextureAsync(this.girdArr[e].imgIcon, a.icon),
                    this.girdArr[e].txtName.text = a.name,
                    this.girdArr[e].txtNum.text = a.count
            }
        },
        i.clickHnadler = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGetAward);
            e.all = !1,
                e.id = this.data.id,
                Transport.instance.send(e);
            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.Award);
            a.showAllAward(this.data.index)
        },
        e
}(eui.ItemRenderer);
