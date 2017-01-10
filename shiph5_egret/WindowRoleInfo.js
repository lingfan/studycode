
var RechargeRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/item/RechargeBar1Skin.exml"
            /*tpa=resource/eui_skins/item/RechargeBar1Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.ShowNotify = function() {},
        i.HideNotify = function() {},
        i.onComplete = function(t) {
            this.item0.visible = !1,
                this.item1.visible = !1,
                this.itemArr = [this.item0, this.item1],
                this.item0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickItem0, this),
                this.item1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickItem1, this)
        },
        i.onClickItem0 = function() {
            if (UserData.getInstance().monthcarddate > 0 && !UserData.getInstance().monthcardreceived) {
                var t = Transport.getPkg(ProtocolMgr.ID_DceMonthCard);
                Transport.instance.send(t)
            } else {
                var e = this.data[0];
                this.buy(e)
            }
        },
        i.onClickItem1 = function() {
            if (UserData.getInstance().monthcarddate > 0 && !UserData.getInstance().monthcardreceived) {
                var t = Transport.getPkg(ProtocolMgr.ID_DceMonthCard);
                Transport.instance.send(t)
            } else {
                var e = this.data[1];
                this.buy(e)
            }
        },
        i.buy = function(t) {
            PlatformManager.instance.pay(t.id.toString(), t.name_l, t.sale, 1, void 0)
        },
        i.dataChanged = function() {
            for (var t = 0; t < this.data.length; t++) {
                this.itemArr[t].visible = !0,
                    2 == this.data[t].state ? (this.itemArr[t].imgCorner.source = RES.getRes("jiaobiao1_png"), this.itemArr[t].txtCorner.text = "推荐") : 1 == this.data[t].state ? (this.itemArr[t].imgCorner.source = RES.getRes("jiaobiao2_png"), this.itemArr[t].txtCorner.text = "热卖") : (this.itemArr[t].imgCorner.source = null, this.itemArr[t].txtCorner.text = "");
                var e = this.data[t].name_l;
                e = e.replace(/[^0-9]/gi, "");
                for (var a = e.split("").reverse(), i = 0; 5 > i; i++) a[i] && 0 == this.data[t].dayCount ? (this.itemArr[t]["imgNum" + i].visible = !0, "0" == a[i] ? this.itemArr[t]["imgNum" + i].source = RES.getRes("GUI_Homepage_Icon_VIP10_png") : this.itemArr[t]["imgNum" + i].source = RES.getRes("GUI_Homepage_Icon_VIP" + a[i] + "_png")) : this.itemArr[t]["imgNum" + i].visible = !1;
                var n = GetPlatType();
                this.itemArr[t].txtCredit.text = this.data[t].sale + (n == PlatformType.PF_QQ ? "星星" : "元"),
                    this.itemArr[t].spotMonthCard.visible = !1,
                    this.data[t].dayCount > 0 ? (this.itemArr[t].imgTitle.source = RES.getRes("chongzhi_yuekaText_png"), this.itemArr[t].txtGift.text = "连续" + this.data[t].dayCount + "天可领取" + this.data[t].dayGet + "钻石", UserData.getInstance().monthcarddate > 0 ? (this.itemArr[t].txtGiftDesc.text = "剩余天数" + UserData.getInstance().monthcarddate, UserData.getInstance().monthcardreceived ? this.itemArr[t].txtCredit.text = "续费" : (this.itemArr[t].txtCredit.text = "领取", this.itemArr[t].spotMonthCard.visible = !0), UserData.getInstance().monthcarddate <= this.data[t].renew ? this.itemArr[t].spotMonthCard.visible = !0 : this.itemArr[t].spotMonthCard.visible = !1) : this.itemArr[t].txtGiftDesc.text = "月卡计入充值活动") : (this.itemArr[t].imgTitle.source = RES.getRes("chongzhi_zuanshiText_png"), this.itemArr[t].txtGift.text = "首充赠送" + this.data[t].firstGet + "钻石", this.itemArr[t].txtGiftDesc.text = "(仅限购一次)", RechargeManager.instance.CanFirstRecharge ? (this.itemArr[t].txtGift.visible = !0, this.itemArr[t].txtGiftDesc.visible = !0) : (this.itemArr[t].txtGift.visible = !1, this.itemArr[t].txtGiftDesc.visible = !1));
                var s = [];
                s.indexOf,
                    UserData.getInstance().firstrechargelist.indexOf(this.data[t].id) > 0 && (this.itemArr[t].txtGift.visible = !1, this.itemArr[t].txtGiftDesc.visible = !1),
                    Utils.getImgByUrl(Path.rechargeUrl + this.data[t].icon, this.itemArr[t].imgDiamond)
            }
            this.data.length < 2 && (this.item1.visible = !1)
        },
        e
}(eui.ItemRenderer);
