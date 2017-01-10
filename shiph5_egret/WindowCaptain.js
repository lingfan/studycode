
var WindowCampBattleReports = function(t) {
    function e() {
        t.call(this, !0),
            this.currentListType = 0,
            this.Max_rank = 50,
            this.skinName = "resource/eui_skins/ZB_ZhenYingZhan_TanKuangSkin.exml"
            /*tpa=resource/eui_skins/ZB_ZhenYingZhan_TanKuangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {},
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.scvReports.viewport = this.lstReports,
                this.lstReports.itemRenderer = CampBattleItemRenderer,
                this.txtTitle.text = "战报",
                this.checkBoxs = [];
            for (var t = 1; 4 >= t; ++t) {
                var e = this["checkBox" + t];
                e._tag = t,
                    this.checkBoxs.push(e),
                    e.touchChildren = !1,
                    e.touchEnabled = !0,
                    e.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCheckBox, this)
            }
            this.checkBoxClick(1)
        },
        i.checkBoxClick = function(t) {
            AudioManager.instance.playSound(AudioManager.SOUND_BTN);
            for (var e = 0,
                    a = this.checkBoxs; e < a.length; e++) {
                var i = a[e];
                i._tag == t ? i.imgCheck.visible = !0 : i.imgCheck.visible = !1
            }
            this.addItemToList(CampBattleManager.instance.getBattleReportList(t)),
                this.currentListType = t
        },
        i.addItemToList = function(t) {
            for (var e = [], a = 0, i = t; a < i.length; a++) {
                var n = i[a],
                    s = "";
                for (var r in n.content) {
                    var o = n.content[r],
                        l = parseInt(o),
                        h = void 0,
                        c = void 0;
                    h = l && n.color[l - 1] ? n.color[l - 1] : "ffffff",
                        c = l && n.pkgParam[l - 1] ? n.pkgParam[l - 1] : o,
                        s += "#" + h + c + "#"
                }
                e.push({
                    content: s
                })
            }
            this.lstReports.dataProvider = new eui.ArrayCollection(e)
        },
        i.OnClickCheckBox = function(t) {
            var e = t.currentTarget,
                a = e._tag;
            a && this.checkBoxClick(a)
        },
        i.OnClickBtnClose = function(t) {
            AudioManager.instance.playSound(AudioManager.SOUND_CLOSE_BTN),
                this.close()
        },
        i.clear = function() {},
        e
}(WindowBase);
