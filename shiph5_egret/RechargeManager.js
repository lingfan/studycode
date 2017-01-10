
var WindowRecharge = function(t) {
    function e() {
        t.call(this, !0),
            this._type = 0,
            this._vipLv = 0,
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/VipSkin.exml"
            /*tpa=resource/eui_skins/VipSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(e) {
            t.prototype.setData.call(this, e),
                this.Switch(e.type)
        },
        i.init = function() {
            t.prototype.init.call(this),
                this._vipLv = UserData.getInstance().getVipLevel(),
                WindowManager.getInstance().showWaiting(),
                this.scroller.viewport = this.rechargeContent,
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickClsoe, this),
                this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickHelp, this),
                this.switchBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickSwitch, this),
                this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickLeft, this),
                this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickRight, this),
                this.pic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickPic, this),
                RechargeManager.instance.LoadTable(this.OnLoadTable, this),
                UserData.getInstance().addEventListener(GameEvent.UserData_Update, this.OnUserDataUpdate, this),
                EventManager.instance.addEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.Redraw, this)
        },
        i.clear = function() {
            UserData.getInstance().removeEventListener(GameEvent.UserData_Update, this.OnUserDataUpdate, this),
                EventManager.instance.removeEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.Redraw, this)
        },
        i.OnUserDataUpdate = function() {
            UserData.getInstance().updateActiveTip(),
                this.Redraw()
        },
        i.OnLoadTable = function() {
            WindowManager.getInstance().hideWaiting(),
                this.Redraw()
        },
        i.OnClickLeft = function() {
            this._vipLv--,
                this._vipLv < 0 && (this._vipLv = 0),
                this.Redraw()
        },
        i.OnClickRight = function() {
            this._vipLv++,
                this._vipLv > 15 && (this._vipLv = 15),
                this.Redraw()
        },
        i.OnClickSwitch = function() {
            this.Switch()
        },
        i.OnClickClsoe = function() {
            WindowManager.getInstance().hide(WindowManager.windowType.Recharge)
        },
        i.OnClickPic = function() {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivityWebData, {
                type: ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE
            })
        },
        i.OnClickHelp = function(t) {
            var e = "说明",
                a = "1.首充赠送仅第一次有效，额度越高赠送越多\n2.购买月卡也属于首充的范围\n3.如充值异常，请联系客服\n";
            QiJvTouAlert.getInstance().showTxtDescPage(e, a)
        },
        i.Switch = function(t) {
            void 0 === t && (t = -1), -1 == t ? this._type = 0 == this._type ? 1 : 0 : this._type = t,
                this._vipLv = UserData.getInstance().getVipLevel(),
                this.Redraw()
        },
        i.Redraw = function() {
            if (this.stage && RechargeManager.instance.cashDataArr && 0 != RechargeManager.instance.cashDataArr.length) {
                RechargeManager.instance.CanFirstRecharge ? (Utils.getImgByUrl("resource/assets/ui/Bg_FirstRecharge.jpg"
                        /*tpa=resource/assets/ui/Bg_FirstRecharge.jpg*/
                        , this.pic), this.rechargeContainer.addChildAt(this.pic, 0), this.scroller.height = 580) : (this.pic.parent && this.rechargeContainer.removeChild(this.pic), this.scroller.height = 768),
                    this.rechargeContainer.visible = 0 == this._type,
                    this.vipContainer.visible = 1 == this._type,
                    this.switchBtn.label = 0 == this._type ? "查看VIP" : "充值",
                    VipParser.GetInstance().getItemByField("level", UserData.getInstance().getVipLevel() + 1) ? (this.bar.value = UserData.getInstance().totalbuy / VipParser.GetInstance().getItemByField("level", UserData.getInstance().getVipLevel() + 1).costCash * 100, this.numTf.text = UserData.getInstance().totalbuy + "/" + VipParser.GetInstance().getItemByField("level", UserData.getInstance().getVipLevel() + 1).costCash, this.descTf.text = "再充值" + (VipParser.GetInstance().getItemByField("level", UserData.getInstance().getVipLevel() + 1).costCash - UserData.getInstance().totalbuy) + "钻石升级为Vip" + (UserData.getInstance().getVipLevel() + 1)) : (this.bar.value = 100, this.numTf.text = "MAX", this.descTf.text = "");
                var t = UserData.getInstance().getVipLevel().toString();
                if (2 == t.length ? (this.imgVip1.source = RES.getRes("GUI_Homepage_Icon_VIP" + t[0] + "_png"), "0" == t[1] ? this.imgVip2.source = RES.getRes("GUI_Homepage_Icon_VIP10_png") : this.imgVip2.source = RES.getRes("GUI_Homepage_Icon_VIP" + t[1] + "_png")) : ("0" == t[0] ? this.imgVip1.source = RES.getRes("GUI_Homepage_Icon_VIP10_png") : this.imgVip1.source = RES.getRes("GUI_Homepage_Icon_VIP" + t[0] + "_png"), this.imgVip2.source = null), 0 == this._type) {
                    for (; this.rechargeContent.numChildren > 0;) this.rechargeContent.removeChildAt(0);
                    for (var e in RechargeManager.instance.cashDataArr) {
                        var a = new RechargeCell;
                        a.data = RechargeManager.instance.cashDataArr[e],
                            this.rechargeContent.addChild(a),
                            a.Redraw()
                    }
                }
                if (1 == this._type) {
                    this.vipTf.text = "VIP" + this._vipLv + "礼包(商城中购买)",
                        this.scrollerVipRight.viewport.scrollV = 0;
                    for (var t = VipParser.GetInstance().getItemByField("level", this._vipLv).desc_l, i = [], n = 0; n < t.length; n++) "#" == t[n] && i.push(n);
                    for (var s = t,
                            r = 0; r < i.length; r += 2) {
                        var o = s.substring(i[r], i[r + 1] + 1),
                            l = "<font color='#" + o.substring(1, 7) + "'>" + o.substring(7, o.length - 1) + "</font>";
                        t = t.replace(o, l)
                    }
                    this.txtVipDec.textFlow = (new egret.HtmlTextParser).parser(t);
                    var h = this._vipLv + 1;
                    14 == this._vipLv ? h = 394 : 15 == this._vipLv && (h = 395);
                    for (var c = GiftdataParser.GetInstance().getDataArr(), d = [], g = 0; g < c.length; g++)
                        if (c[g].id == h) {
                            var u = {};
                            u.type = c[g].type,
                                u.id = c[g].item,
                                u.count = c[g].count,
                                d.push(u)
                        }
                    this.listVipBox.dataProvider = new eui.ArrayCollection(d),
                        this.listVipBox.itemRenderer = vipGiftItemRenderer
                }
            }
        },
        e
}(WindowBase);
