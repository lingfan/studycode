
var CaptainInfoItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/itemrenders/jianzhangItemSkin.exml"
            /*tpa=resource/eui_skins/itemrenders/jianzhangItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getBuffDescForCaptainByData = function(t) {
            var e = 1;
            return 2 == t.collectbuff || 4 == t.collectbuff || 6 == t.collectbuff || 8 == t.collectbuff || 10 == t.collectbuff || 22 == t.collectbuff ? e = 100 : (17 == t.collectbuff || 19 == t.collectbuff) && (e = 10),
                Locales.get("panel_atlas_main_panel_buff_txt_" + t.collectbuff, (t.collectbuffvalue / e).toString())
        },
        i.onComplete = function() {
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
                n = i.userData.captainData;
            WindowManager.getInstance().show(WindowManager.windowType.ShipInfo, {
                data: {
                    id: n.id
                },
                type: shipInfoWindowType.captainHandbook
            })
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
                            o = QualitySystem.getColorByQuality(r.userData.captainData.quality),
                            l = CaptaindataParser.GetInstance().getItemById(r.userData.captainData.id);
                        n.text = l.name_l,
                            n.textColor = o;
                        var h = i.imgIcon,
                            c = "resource/assets/Icon/captain/" + r.userData.captainData.pictureSmall;
                        SUI.setTextureAsync(h, c),
                            h = i.imgBg,
                            c = QualitySystem.getCaptainSmallBack(r.userData.captainData.quality),
                            SUI.setTextureAsync(h, c),
                            h = i.imgFrame,
                            c = QualitySystem.getCaptainFrame(r.userData.captainData.quality),
                            SUI.setTextureAsync(h, c),
                            s.text = e.getBuffDescForCaptainByData(r.userData.detailData),
                            s.textColor = o,
                            h = i.imgMask,
                            h.visible = !r.have,
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
