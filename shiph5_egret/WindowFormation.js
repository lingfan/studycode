
var ExchangeCaptainRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.clickHandler, this),
            this.skinName = "resource/eui_skins/item/zhuyeduihuanChuangZhangbuzuSkin.exml"
            /*tpa=resource/eui_skins/item/zhuyeduihuanChuangZhangbuzuSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clickHandler = function(t) {
            var e = this;
            if (t.target != this.headCompent && t.target.parent != this.headCompent) {
                var a = "";
                a = 1 == this.data.ExchangeType ? "[普通将魂]" : "[高级将魂]";
                var i = QualitySystem.getColorByQuality(this.data.quality),
                    n = "是否花费<font color='#00ffff'>" + a + "</font>x" + this.data.costNum + "兑换<font color ='" + i + "'>" + this.data.name + "</font>?";
                GameAlert.getInstance().showByHtml("提示", n,
                    function() {
                        var t = Transport.getPkg(ProtocolMgr.ID_DceExchangeCaptain);
                        t.id = e.data.id,
                            Transport.instance.send(t),
                            GameAlert.getInstance().hide()
                    })
            } else {
                var s = {
                    id: this.data.id
                };
                WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                    data: s,
                    type: shipInfoWindowType.captainPreview
                })
            }
        },
        i.dataChanged = function() {
            t.prototype.dataChanged.call(this),
                1 == this.data.enough ? (this.isEnoughImg.source = "tongyong_lvkuang_png", this.isEnoughTxt.text = "可以兑换", this.isEnoughTxt.textColor = 2013992) : (this.isEnoughImg.source = "tongyong_hongkuang_png", this.isEnoughTxt.text = "数量不足", this.isEnoughTxt.textColor = 10686999),
                this.txtName.text = this.data.name,
                this.txtName.textColor = QualitySystem.getColorByQuality(this.data.quality),
                this.costNumTxt.text = this.data.costNum,
                2 == this.data.ExchangeType ? this.costItemImg.source = "gaojijianghun_png" : this.costItemImg.source = "putongjianghun_png",
                Utils.getImgByUrl(Path.countryURL + "country_" + this.data.country + ".jpg", this.countryImg),
                this.txtInfo.text = "擅长：" + this.data.goodAt;
            var e = this.headCompent.imgIcon;
            Utils.getImgByUrl(this.data.head, e),
                e = this.headCompent.imgBg;
            var a = QualitySystem.getCaptainSmallBack(Number(this.data.quality));
            Utils.getImgByUrl(a, e),
                e = this.headCompent.imgFrame,
                a = QualitySystem.getCaptainFrame(Number(this.data.quality)),
                Utils.getImgByUrl(a, e)
        },
        e
}(eui.ItemRenderer);
