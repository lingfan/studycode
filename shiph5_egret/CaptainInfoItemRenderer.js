
var WarshipInfoItemRender = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/itemrenders/jianchuanItemSkin.exml"
            /*tpa=resource/eui_skins/itemrenders/jianchuanItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {
            this.frameArr = [],
                this.frameArr.push(this.imgIcon1),
                this.frameArr.push(this.imgIcon2),
                this.frameArr.push(this.imgIcon3),
                this.nameArr = [],
                this.nameArr.push(this.txtType1),
                this.nameArr.push(this.txtType2),
                this.nameArr.push(this.txtType3),
                this.buffArr = [],
                this.buffArr.push(this.txtBuff1),
                this.buffArr.push(this.txtBuff2),
                this.buffArr.push(this.txtBuff3);
            for (var t in this.frameArr) {
                var e = this.frameArr[t];
                e.myIndex = t,
                    e.touchEnabled = !0,
                    e.touchChildren = !1,
                    e.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickFrame, this)
            }
            this.dataChanged()
        },
        i.OnClickFrame = function(t) {
            var e = t.currentTarget,
                a = e.myIndex,
                i = this.data[a],
                n = i.userData;
            WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                data: {
                    id: n.id,
                    shipid: n.shipId
                },
                type: shipInfoWindowType.handbook
            })
        },
        e.getBuffDescForShipByData = function(t) {
            var e = 1;
            return 2 == t.buffType || 4 == t.buffType || 6 == t.buffType || 8 == t.buffType || 10 == t.buffType || 22 == t.buffType ? e = 100 : (17 == t.buffType || 19 == t.buffType) && (e = 10),
                Locales.get("panel_atlas_main_panel_buff_txt_" + t.buffType, (t.buffValue / e).toString())
        },
        i.dataChanged = function() {
            if (!(this.frameArr.length < 3 || null == this.data))
                for (var t = this.data,
                        a = 0; 3 > a; ++a) {
                    var i = this.frameArr[a],
                        n = this.nameArr[a],
                        s = this.buffArr[a];
                    if (t.length > a) {
                        var r = t[a],
                            o = i.imgIcon,
                            l = ShipdataParser.GetInstance().getItemById(r.userData.shipId),
                            h = l.modelId,
                            c = ShipmodeldataParser.GetInstance().getItemById(h);
                        n.text = l.name_l,
                            n.textColor = QualitySystem.getColorByQuality(r.userData.quality);
                        var d = Path.shipURL + "y_" + c.url;
                        SUI.setTextureAsync(o, d),
                            o = i.imgType,
                            d = Path.shipTypeIconURL + "shipType" + r.userData.shipType + ".png",
                            SUI.setTextureAsync(o, d),
                            d = QualitySystem.getShipHandbookSmallback(r.userData.quality),
                            o = i.imgBg,
                            SUI.setTextureAsync(o, d),
                            s.text = e.getBuffDescForShipByData(r.userData),
                            s.textColor = QualitySystem.getColorByQuality(r.userData.quality),
                            o = i.imgMask,
                            o.visible = !r.have,
                            i.visible = !0,
                            n.visible = !0,
                            s.visible = !0
                    } else i.visible = !1,
                        n.visible = !1,
                        s.visible = !1
                }
        },
        e
}(eui.ItemRenderer);
