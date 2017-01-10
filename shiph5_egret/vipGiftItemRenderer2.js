
var WindowRecharge2 = function(t) {
    function e() {
        t.call(this, !1),
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/VipSkin.exml"
            /*tpa=resource/eui_skins/VipSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            Utils.getImgByUrl("resource/assets/ui/Bg_FirstRecharge.jpg"
                    /*tpa=resource/assets/ui/Bg_FirstRecharge.jpg*/
                    , this.btnFirstRecharge),
                WindowManager.getInstance().showWaiting(),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeClick, this),
                this.rechargeConfig = null,
                this.vipdata = null,
                this.giftData = null,
                this.scrollerRecharge.viewport = this.listRecharge,
                this.scrollerVipBox.viewport = this.listVipBox,
                this.scrollerVipRight.viewport = this.grpVipRight,
                this.grpRecharge.visible = !0,
                this.grpVip.visible = !1,
                this.btnViewVip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeView, this),
                this.btnLastVip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lastOrNextVip, this),
                this.btnNextVip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lastOrNextVip, this),
                this.btnHelp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnInfo, this),
                this.btnFirstRecharge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickFirstRecharge, this),
                this.initCashData(),
                SUI.setTextureAsync(this.imgL, Path.uiUrl + "Activity/Bg_title_huodong.png"),
                SUI.setTextureAsync(this.imgR, Path.uiUrl + "Activity/Bg_title_huodong.png"),
                UserData.getInstance().addEventListener(GameEvent.UserData_Update, this.Redraw, this),
                EventManager.instance.addEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.OnActivityDataUpdate, this)
        },
        i.OnClickFirstRecharge = function(t) {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivityWebData, {
                type: ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE
            })
        },
        i.OnActivityDataUpdate = function() {
            this.Redraw()
        },
        i.OnClickBtnInfo = function(t) {
            var e = "说明",
                a = "1.首充赠送仅第一次有效，额度越高赠送越多\n2.购买月卡也属于首充的范围\n3.如充值异常，请联系客服邮箱:h5worldshipkefu@sincetimes.com\n";
            QiJvTouAlert.getInstance().showTxtDescPage(e, a)
        },
        i.Redraw = function() {
            null != this.stage && (this.initBar(), this.grpRecharge.visible ? (this.btnViewVip.label = "查看VIP", this.grpRecharge.visible = !0, this.grpVip.visible = !1, this.showRecharge()) : (this.btnViewVip.label = "充值", this.grpRecharge.visible = !1, this.grpVip.visible = !0, this.showVip(UserData.getInstance().getVipLevel())))
        },
        i.initBar = function() {
            VipParser.GetInstance().getItemByField("level", UserData.getInstance().getVipLevel() + 1) ? (this.barRecharge.value = UserData.getInstance().totalbuy / VipParser.GetInstance().getItemByField("level", UserData.getInstance().getVipLevel() + 1).costCash * 100, this.txtCurrentNum.text = UserData.getInstance().totalbuy + "/" + VipParser.GetInstance().getItemByField("level", UserData.getInstance().getVipLevel() + 1).costCash, this.txtDesc.text = "再充值" + (VipParser.GetInstance().getItemByField("level", UserData.getInstance().getVipLevel() + 1).costCash - UserData.getInstance().totalbuy) + "钻石升级为Vip" + (UserData.getInstance().getVipLevel() + 1)) : (this.barRecharge.value = 100, this.txtCurrentNum.text = "MAX", this.txtDesc.text = "");
            var t = UserData.getInstance().getVipLevel().toString().split("");
            2 == t.length ? (this.imgVip1.source = RES.getRes("GUI_Homepage_Icon_VIP" + t[0] + "_png"), "0" == t[1] ? this.imgVip2.source = RES.getRes("GUI_Homepage_Icon_VIP10_png") : this.imgVip2.source = RES.getRes("GUI_Homepage_Icon_VIP" + t[1] + "_png")) : ("0" == t[0] ? this.imgVip1.source = RES.getRes("GUI_Homepage_Icon_VIP10_png") : this.imgVip1.source = RES.getRes("GUI_Homepage_Icon_VIP" + t[0] + "_png"), this.imgVip2.source = null)
        },
        i.initCashData = function() {
            var t = this;
            this.rechargeConfig || ConfigData.preLoadDats(["cashData", "vip", "giftData"], [CashdataParser, VipParser, GiftdataParser],
                function() {
                    t.rechargeConfig = CashdataParser.GetInstance().getDataArr(),
                        t.vipdata = VipParser.GetInstance().getDataArr(),
                        t.initComplete()
                })
        },
        i.lastOrNextVip = function(t) {
            if (t.target == this.btnNextVip) {
                if (15 == this.curVipNum) return;
                this.curVipNum++,
                    this.showVip(this.curVipNum)
            } else {
                if (0 == this.curVipNum) return;
                this.curVipNum--,
                    this.showVip(this.curVipNum)
            }
        },
        i.initComplete = function() {
            WindowManager.getInstance().hideWaiting(),
                this.initBar(),
                this.__cachedData && "vip" == this.__cachedData.type ? (this.btnViewVip.label = "充值", this.grpRecharge.visible = !1, this.grpVip.visible = !0, this.showVip(UserData.getInstance().getVipLevel())) : this.showRecharge()
        },
        i.showRecharge = function() {
            RechargeManager.instance.CanFirstRecharge ? (this.btnFirstRecharge.visible = !0, this.scrollerRecharge.top = 189) : (this.btnFirstRecharge.visible = !1, this.scrollerRecharge.top = 0),
                this.rechargeConfig.sort(function(t, e) {
                    return t.dayCount == e.dayCount ? t.id - e.id : t.dayCount - e.dayCount
                });
            for (var t = [], e = Math.floor(this.rechargeConfig.length / 2), a = this.rechargeConfig.slice(), i = 0; e > i; i++) {
                for (var n = [], s = 0; 2 > s; s++) n.push(a.shift());
                t.push(n)
            }
            a.length > 0 && t.push(a),
                this.listRecharge.dataProvider = new eui.ArrayCollection(t),
                this.listRecharge.itemRenderer = RechargeRenderer
        },
        i.showVip = function(t) {
            void 0 === t && (t = 0),
                this.txtVipTitle.text = "VIP" + t + "礼包(商城中购买)",
                this.curVipNum = t,
                this.scrollerVipRight.viewport.scrollV = 0;
            for (var e = VipParser.GetInstance().getItemByField("level", this.curVipNum).desc_l, a = [], i = 0; i < e.length; i++) "#" == e[i] && a.push(i);
            for (var n = e,
                    s = 0; s < a.length; s += 2) {
                var r = n.substring(a[s], a[s + 1] + 1),
                    o = "<font color='#" + r.substring(1, 7) + "'>" + r.substring(7, r.length - 1) + "</font>";
                e = e.replace(r, o)
            }
            this.txtVipDec.textFlow = (new egret.HtmlTextParser).parser(e);
            var l = t + 1;
            14 == t ? l = 394 : 15 == t && (l = 395),
                this.giftData = GiftdataParser.GetInstance().getDataArr();
            for (var h = [], c = 0; c < this.giftData.length; c++)
                if (this.giftData[c].id == l) {
                    var d = {};
                    d.type = this.giftData[c].type,
                        d.id = this.giftData[c].item,
                        d.count = this.giftData[c].count,
                        h.push(d)
                }
            this.listVipBox.dataProvider = new eui.ArrayCollection(h),
                this.listVipBox.itemRenderer = vipGiftItemRenderer
        },
        i.changeView = function(t) {
            this.grpRecharge.visible ? (this.btnViewVip.label = "充值", this.grpRecharge.visible = !1, this.grpVip.visible = !0, this.showVip(UserData.getInstance().getVipLevel())) : (this.btnViewVip.label = "查看VIP", this.grpRecharge.visible = !0, this.grpVip.visible = !1, this.showRecharge())
        },
        i.clear = function() {
            UserData.getInstance().removeEventListener(GameEvent.UserData_Update, this.Redraw, this),
                EventManager.instance.removeEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.OnActivityDataUpdate, this)
        },
        i.closeClick = function(t) {
            WindowManager.getInstance().hide(WindowManager.windowType.Recharge)
        },
        e
}(WindowBase);
