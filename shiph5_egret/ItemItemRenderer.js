
var MedalInfoItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/itemrenders/xunzhangItemSkin.exml"
            /*tpa=resource/eui_skins/itemrenders/xunzhangItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {
            this.frameArr = [],
                this.frameArr.push(this.frame1),
                this.frameArr.push(this.frame2),
                this.frameArr.push(this.frame3),
                this.nameArr = [],
                this.nameArr.push(this.txtName1),
                this.nameArr.push(this.txtName2),
                this.nameArr.push(this.txtName3),
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
                    soulid: n.id
                },
                type: shipInfoWindowType.soulPreview
            })
        },
        i.dataChanged = function() {
            if (!(this.frameArr.length < 3 || null == this.data))
                for (var t = this.data,
                        e = 0; 3 > e; ++e) {
                    var a = this.frameArr[e],
                        i = this.nameArr[e],
                        n = this.buffArr[e];
                    if (t.length > e) {
                        var s = t[e],
                            r = QualitySystem.getColorByQuality(s.userData.quality),
                            o = MedaldataParser.GetInstance().getItemById(s.userData.id);
                        i.text = o.name_l,
                            i.textColor = r;
                        var l = a.imgMedal,
                            h = "resource/assets/Icon/medal/" + s.userData.icon;
                        SUI.setTextureAsync(l, h),
                            l = a.imgBg,
                            h = QualitySystem.getShipSmallBack(s.userData.quality),
                            SUI.setTextureAsync(l, h),
                            n.text = Locales.get("panel_atlas_main_panel_buff_txt_" + s.userData.collectbuff, s.userData.collectbuffvalue),
                            n.textColor = r,
                            l = a.imgMask,
                            l.visible = !s.have,
                            a.visible = !0,
                            i.visible = !0,
                            n.visible = !0
                    } else a.visible = !1,
                        i.visible = !1,
                        n.visible = !1
                }
        },
        e
}(eui.ItemRenderer);
