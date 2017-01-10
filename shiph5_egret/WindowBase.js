
var ShopSpyAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.type = 0,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/ShangCheng_TanKuangSkin.exml"
            /*tpa=resource/eui_skins/ShangCheng_TanKuangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getInstance = function() {
            return this._instance || (this._instance = new e),
                this._instance
        },
        i.OnComplete = function() {
            this.__inited = !0,
                this._block || (this._block = new egret.Shape, this._block.graphics.beginFill(0, .5), this._block.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight), this._block.graphics.endFill(), this._block.touchEnabled = !0);
            var t = GameLayer.getInstance().windowLayer.getChildIndex(this);
            egret.log("depth:", t),
                GameLayer.getInstance().windowLayer.addChildAt(this._block, t)
        },
        i.init = function() {
            this.btnClose_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnClose_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnTenTimes.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnOneTimes.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBuyCost1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBuyCost2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBuyCost3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAddOne.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAddTen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnCutOne.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnCutTen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnClose_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBuyConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.clean = function() {
            this.data = null,
                this.btnClose_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnClose_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnTenTimes.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnOneTimes.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBuyCost1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBuyCost2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBuyCost3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAddOne.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAddTen.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnCutOne.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnCutTen.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnClose_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnBuyConfirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.btnClose_1:
                    this.hide();
                    break;
                case this.btnClose_2:
                    this.hide();
                    break;
                case this.btnClose_3:
                    this.hide();
                    break;
                case this.btnTenTimes:
                    0 == this.type ? ShopManager.getInstance().sendSpy(Number(this.data.id), 3, !0, this.data) : ShopManager.getInstance().sendRecruitCaptain(this.data.id, 2, this.data),
                        this.hide();
                    break;
                case this.btnOneTimes:
                    19 == GuideManager.step && (GuideManager.setGuideStep(20), GuideManager.clearMask()),
                        0 == this.type ? ShopManager.getInstance().sendSpy(Number(this.data.id), 3, !1, this.data) : ShopManager.getInstance().sendRecruitCaptain(this.data.id, 1, this.data),
                        this.hide();
                    break;
                case this.btnBuyCost1:
                    UserData.getInstance().getRes(TypeDefine.RES.Diamond) < this.tenprice ? GameAlert.getInstance().show("提示", "钻石不足,是否前往充值?",
                        function() {
                            GameAlert.getInstance().hide(),
                                WindowManager.getInstance().show(WindowManager.windowType.Recharge, {
                                    type: 0
                                })
                        }) : 0 == this.type ? ShopManager.getInstance().sendBuySpyItem(5, 2, 1) : 1 == this.type && ShopManager.getInstance().sendBuyRecruitItem(3, 2, 1);
                    break;
                case this.btnBuyCost2:
                    UserData.getInstance().getRes(TypeDefine.RES.Diamond) < this.seniorprice ? GameAlert.getInstance().show("提示", "钻石不足,是否前往充值?",
                        function() {
                            GameAlert.getInstance().hide(),
                                WindowManager.getInstance().show(WindowManager.windowType.Recharge, {
                                    type: 0
                                })
                        }) : 0 == this.type ? ShopManager.getInstance().sendBuySpyItem(3, 2, 1) : 1 == this.type && ShopManager.getInstance().sendBuyRecruitItem(2, 2, 1);
                    break;
                case this.btnBuyCost3:
                    UserData.getInstance().getRes(TypeDefine.RES.Diamond) < this.midprice ? GameAlert.getInstance().show("提示", "钻石不足,是否前往充值?",
                        function() {
                            GameAlert.getInstance().hide(),
                                WindowManager.getInstance().show(WindowManager.windowType.Recharge, {
                                    type: 0
                                })
                        }) : 0 == this.type ? ShopManager.getInstance().sendBuySpyItem(2, 2, 1) : 1 == this.type && ShopManager.getInstance().sendBuyRecruitItem(1, 2, 1);
                    break;
                case this.btnAddOne:
                    this.editBuyNum.text = Number(this.editBuyNum.text) + 1 + "",
                        this.txtTotlePrice.text = Number(this.data.saleValue) * Number(this.editBuyNum.text) + "";
                    break;
                case this.btnAddTen:
                    this.editBuyNum.text = Number(this.editBuyNum.text) + 10 + "",
                        this.txtTotlePrice.text = Number(this.data.saleValue) * Number(this.editBuyNum.text) + "";
                    break;
                case this.btnCutOne:
                    Number(this.editBuyNum.text) - 1 < 1 ? this.editBuyNum.text = "1" : this.editBuyNum.text = Number(this.editBuyNum.text) - 1 + "",
                        this.txtTotlePrice.text = Number(this.data.saleValue) * Number(this.editBuyNum.text) + "";
                    break;
                case this.btnCutTen:
                    Number(this.editBuyNum.text) - 10 < 1 ? this.editBuyNum.text = "1" : this.editBuyNum.text = Number(this.editBuyNum.text) - 10 + "",
                        this.txtTotlePrice.text = Number(this.data.saleValue) * Number(this.editBuyNum.text) + "";
                    break;
                case this.btnBuyConfirm:
                    ShopManager.getInstance().sendBuy(Number(this.data.id), Number(this.editBuyNum.text), this.data.name, this.data),
                        this.hide()
            }
        },
        i.showPaiQianPage = function(t) {
            this.txtTitle.text = "派遣间谍",
                this.txtTimes1.text = "派遣10次",
                this.txtTimes2.text = "派遣1次",
                this.btnTenTimes.label = "派遣",
                this.btnOneTimes.label = "派遣",
                this.type = 0,
                this.data = t,
                this.ChooseShipLotteryTimes.visible = !0,
                this.ChooseBuyItemNum.visible = !1,
                this.selectBuyItemNum.visible = !1,
                1 == t.id || 3 == t.id ? this.btnTenTimes.enabled = !0 : this.btnTenTimes.enabled = !1,
                this.init(),
                SUI.setTextureAsync(this.imgCostItem1, this.data.itemIcon),
                SUI.setTextureAsync(this.imgCostItem2, this.data.itemIcon),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showZhaoMuPage = function(t) {
            this.txtTitle.text = "高级招募",
                this.txtTimes1.text = "招募10次",
                this.txtTimes2.text = "招募1次",
                this.btnTenTimes.label = "招募",
                this.btnOneTimes.label = "招募",
                this.type = 1,
                this.data = t,
                this.ChooseShipLotteryTimes.visible = !0,
                this.ChooseBuyItemNum.visible = !1,
                this.selectBuyItemNum.visible = !1,
                1 == t.id || 3 == t.id ? this.btnTenTimes.enabled = !0 : this.btnTenTimes.enabled = !1,
                this.init(),
                SUI.setTextureAsync(this.imgCostItem1, this.data.itemIcon),
                SUI.setTextureAsync(this.imgCostItem2, this.data.itemIcon),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showBuySpyPage = function(t) {
            this.type = 0,
                this.txtTitle0.text = "购买金币送特工令",
                this.txtSend1.text = "高级特工令×10",
                this.txtSend2.text = "高级特工令×1",
                this.txtSend3.text = "中级特工令×1",
                this.data = t,
                this.ChooseShipLotteryTimes.visible = !1,
                this.ChooseBuyItemNum.visible = !0,
                this.selectBuyItemNum.visible = !1,
                this.init(),
                SUI.setTextureAsync(this.imgItem1, Path.item_sURL + "spy_icon_3.png"),
                SUI.setTextureAsync(this.imgItem2, Path.item_sURL + "spy_icon_3.png"),
                SUI.setTextureAsync(this.imgItem3, Path.item_sURL + "spy_icon_2.png"),
                this.midprice = t.midprice,
                this.seniorprice = t.seniorprice,
                this.tenprice = t.tenprice,
                this.btnBuyCost1.icon.source = "GUI_Homepage_Icon_32_png",
                this.btnBuyCost2.icon.source = "GUI_Homepage_Icon_32_png",
                this.btnBuyCost3.icon.source = "GUI_Homepage_Icon_32_png",
                this.btnBuyCost1.label = this.tenprice.toString(),
                this.btnBuyCost2.label = this.seniorprice.toString(),
                this.btnBuyCost3.label = this.midprice.toString(),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showBuyCaptainPage = function(t) {
            this.type = 1,
                this.txtTitle0.text = "购买金币送招募令",
                this.txtSend1.text = "高级招募令×10",
                this.txtSend2.text = "高级招募令×1",
                this.txtSend3.text = "中级招募令×1",
                this.data = t,
                this.ChooseShipLotteryTimes.visible = !1,
                this.ChooseBuyItemNum.visible = !0,
                this.selectBuyItemNum.visible = !1,
                this.init(),
                SUI.setTextureAsync(this.imgItem1, Path.item_sURL + "zml_z_x.png"),
                SUI.setTextureAsync(this.imgItem2, Path.item_sURL + "zml_z_x.png"),
                SUI.setTextureAsync(this.imgItem3, Path.item_sURL + "zml_lan_x.png"),
                this.midprice = t.midprice,
                this.seniorprice = t.seniorprice,
                this.tenprice = t.tenprice,
                this.btnBuyCost1.icon.source = "GUI_Homepage_Icon_32_png",
                this.btnBuyCost2.icon.source = "GUI_Homepage_Icon_32_png",
                this.btnBuyCost3.icon.source = "GUI_Homepage_Icon_32_png",
                this.btnBuyCost1.label = this.tenprice.toString(),
                this.btnBuyCost2.label = this.seniorprice.toString(),
                this.btnBuyCost3.label = this.midprice.toString(),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showBuyItemPage = function(t, e) {
            void 0 === e && (e = !0),
                this.buyItemIcon.visible = e,
                this.data = t,
                this.ChooseShipLotteryTimes.visible = !1,
                this.ChooseBuyItemNum.visible = !1,
                this.selectBuyItemNum.visible = !0,
                this.init(),
                this.editBuyNum.text = "1",
                this.TXTBuyTarget.text = '请选择购买 "' + t.name + ' "的数量',
                "2" == t.costType && (this.buyItemIcon.source = "GUI_Homepage_Icon_32_png"),
                this.txtTotlePrice.text = Number(this.data.saleValue) * Number(this.editBuyNum.text) + "",
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        i.setPrice = function(t, e, a) {
            this.midprice = t,
                this.seniorprice = e,
                this.tenprice = a
        },
        e
}(eui.Component);
