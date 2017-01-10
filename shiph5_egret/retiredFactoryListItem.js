
var RechargeCell = function(t) {
    function e() {
        t.call(this),
            this.itemNumArr = new Array,
            this.addEventListener(eui.UIEvent.COMPLETE, this.OnUiComplete, this),
            this.skinName = "resource/eui_skins/item/RechargeCellSkin.exml"
            /*tpa=resource/eui_skins/item/RechargeCellSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.OnUiComplete = function() {
            this.bg.touchEnabled = !0,
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
            for (var t = 0; 5 > t; t++) {
                var e = this["imgNum" + t];
                this.itemNumArr[t] = e
            }
            this.Redraw()
        },
        i.OnClick = function() {
            if (this.data.dayCount > 0 && UserData.getInstance().monthcarddate > 0 && !UserData.getInstance().monthcardreceived) {
                var t = Transport.getPkg(ProtocolMgr.ID_DceMonthCard);
                return void Transport.instance.send(t)
            }
            return this.data.dayCount > 0 && UserData.getInstance().monthcarddate >= this.data.dayLimit ? void Toast.launch("月卡剩余时间达上限") : void PlatformManager.instance.pay(this.data.id.toString(), this.data.name_l, this.data.sale, 1, void 0)
        },
        i.Redraw = function() {
            if (this.data && this.stage) {
                var t = GetPlatType();
                this.costTf.text = "" + this.data.sale + (t == PlatformType.PF_QQ ? "星星" : "元"),
                    this.bg.source = RES.getRes("common_bar_png"),
                    this.notifyImg.visible = !1;
                for (var e = 0; 5 > e; e++) this.itemNumArr[e].visible = !1;
                switch (this.data.state) {
                    case 0:
                        this.cornerImg.source = null,
                            this.infoTf.text = "";
                        break;
                    case 1:
                        this.cornerImg.source = RES.getRes("jiaobiao1_png"),
                            this.infoTf.text = "热卖";
                        break;
                    case 2:
                        this.cornerImg.source = RES.getRes("jiaobiao2_png"),
                            this.infoTf.text = "推荐";
                        break;
                    case 3:
                        this.cornerImg.source = RES.getRes("jiaobiao2_png"),
                            this.infoTf.text = "双倍"
                }
                if (Utils.getImgByUrl(Path.rechargeUrl + this.data.icon, this.icon), 0 == this.data.dayCount) {
                    for (var a = this.data.cash.toString().split("").reverse().join(""), i = 0; i < a.length; i++) this.itemNumArr[i].visible = !0,
                        this.itemNumArr[i].source = RES.getRes("GUI_Homepage_Icon_VIP" + ("0" == a[i] ? "10" : a[i]) + "_png");
                    this.descTf.text = RechargeManager.instance.CanFirstRechargeByID(this.data.id) ? "首充赠送" + this.data.firstGet + "钻石\n(仅限购一次)" : ""
                } else this.titleImg.source = RES.getRes("chongzhi_yuekaText_png"),
                    UserData.getInstance().monthcarddate > 0 ? (this.descTf.text = "连续" + this.data.dayCount + "天可领取" + this.data.dayGet + "钻石\n剩余天数" + UserData.getInstance().monthcarddate, UserData.getInstance().monthcarddate <= this.data.renew ? this.notifyImg.visible = !0 : this.notifyImg.visible = !1, UserData.getInstance().monthcardreceived ? this.costTf.text = "续费" : (this.costTf.text = "领取", this.notifyImg.visible = !0, this.bg.source = RES.getRes("panel_allGameRank_bg_small_1_png"))) : this.descTf.text = "连续" + this.data.dayCount + "天可领取" + this.data.dayGet + "钻石\n月卡计入充值活动"
            }
        },
        e
}(eui.Component);
