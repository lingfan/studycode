
var PVPRewardItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/ZB_QiJuTou_1_Skin.exml"
            /*tpa=resource/eui_skins/item/ZB_QiJuTou_1_Skin.exml*/
            ,
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            t.prototype.dataChanged.call(this),
                this.data && (this.data.lastRank ? this.txtRank.text = this.data.rankup + "名以后" : this.data.rankup == this.data.rankdown ? this.txtRank.text = "第" + this.data.rankup + "名" : this.txtRank.text = "第" + this.data.rankup + "~" + this.data.rankdown + "名", this.TXTReward2.text = "荣誉:" + this.data.honor, this.txtReward1.text = "积分:" + this.data.score)
        },
        e
}(eui.ItemRenderer);
