
var ExchangeItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/zhuyeduihuanTuzhibuzuSkin.exml"
            /*tpa=resource/eui_skins/item/zhuyeduihuanTuzhibuzuSkin.exml*/
            ,
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.clickHandler, this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clickHandler = function(t) {
            var e = this;
            if (t.target != this.shipImg) {
                var a = "";
                a = 1 == this.data.ExchangeType ? "[低级万能图纸]" : "[高级万能图纸]";
                var i = QualitySystem.getColorByQuality(this.data.quality),
                    n = "是否花费<font color='#00ffff'>" + a + "</font>x" + this.data.costNum + "兑换<font color ='" + i + "'>" + this.data.name + "</font>?";
                GameAlert.getInstance().showByHtml("提示", n,
                    function() {
                        var t = Transport.getPkg(ProtocolMgr.ID_DceChargePaper);
                        t.id = e.data.id,
                            t.wanneng = !0,
                            Transport.instance.send(t),
                            GameAlert.getInstance().hide()
                    })
            } else WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                data: this.data.shipData,
                type: shipInfoWindowType.preview
            })
        },
        i.dataChanged = function() {
            t.prototype.dataChanged.call(this),
                this.data.vip > UserData.getInstance()._vip ? (this.unopenedGrop.visible = !0, this.openedGrop.visible = !1, this.vipLevelTxt.text = this.data.vip) : (this.unopenedGrop.visible = !1, this.openedGrop.visible = !0),
                1 == this.data.enough ? (this.isEnoughImg.source = "tongyong_lvkuang_png", this.isEnoughTxt.text = "可以兑换", this.isEnoughTxt.textColor = 2013992) : (this.isEnoughImg.source = "tongyong_hongkuang_png", this.isEnoughTxt.text = "数量不足", this.isEnoughTxt.textColor = 10686999),
                this.txtName.text = this.data.name,
                this.txtName.textColor = QualitySystem.getColorByQuality(this.data.quality),
                this.costNumTxt.text = this.data.costNum,
                Utils.getImgByUrl(this.data.ship, this.shipImg),
                this.qualityImg.source = QualitySystem.getShipPaperBackGround(this.data.quality),
                2 == this.data.ExchangeType ? this.costItemImg.source = "GUI_Shipbuilding_gaojiwannengtuzhi_png" : this.costItemImg.source = "GUI_Shipbuilding_dijiwannengtuzhi_png",
                this.shipTypeImg.source = this.data.shipType
        },
        e
}(eui.ItemRenderer);
