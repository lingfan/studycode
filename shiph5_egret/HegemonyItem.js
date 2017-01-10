
var WindowHandbookProperty = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/tujian_jihuoshuxing.exml"
            /*tpa=resource/eui_skins/tujian_jihuoshuxing.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.txtTitle.text = "",
                this.txtDesc.text = "",
                this.btnClose.touchEnabled = !0,
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this)
        },
        i.setData = function(t) {
            if (t.type == WindowWarshipHandbookTabType.TAB_WARSHIP ? (this.txtTitle.text = Locales.get("zz_handbook_activate1"), this.txtDesc.text = Locales.get("panel_atlas_main_panel_buff_txt_show_14")) : t.type == WindowWarshipHandbookTabType.TAB_MEDAL ? (this.txtTitle.text = Locales.get("zz_handbook_activate2"), this.txtDesc.text = Locales.get("panel_atlas_main_panel_buff_txt_show_142")) : t.type == WindowWarshipHandbookTabType.TAB_CAPTAIN && (this.txtTitle.text = Locales.get("zz_handbook_activate3"), this.txtDesc.text = Locales.get("panel_atlas_main_panel_buff_txt_show_143")), t.type === WindowWarshipHandbookTabType.TAB_WARSHIP || t.type === WindowWarshipHandbookTabType.TAB_CAPTAIN) {
                for (var e = ["22", "2", "4", "6", "8", "10", "17", "19", "11", "1", "3", "5", "7", "9"], a = [100, 100, 100, 100, 100, 100, 10, 10, 1, 1, 1, 1, 1, 1], i = [!0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !1, !1, !1, !1], n = 0; n < e.length; ++n) {
                    var s = n + 1,
                        r = e[n],
                        o = a[n],
                        l = i[n],
                        h = this["txtPre" + s],
                        c = this["txtValue" + s];
                    h.text = Locales.get("DecListPanel_txt_item_prop_" + e[n]);
                    var d = t.data[r] ? t.data[r] : 0;
                    d /= o,
                        l ? c.text = "+" + d + "%" : c.text = "+" + d
                }
                this.panelLong.visible = !0,
                    this.panelShort.parent.removeChild(this.panelShort)
            } else {
                for (var e = ["1", "3", "5", "7", "9"], a = [1, 1, 1, 1, 1], i = [!1, !1, !1, !1, !1], n = 0; n < e.length; ++n) {
                    var s = n + 1,
                        r = e[n],
                        o = a[n],
                        l = i[n],
                        h = this["txtMedalPre" + s],
                        c = this["txtMedalValue" + s];
                    h.text = Locales.get("DecListPanel_txt_item_prop_" + e[n]);
                    var d = t.data[r] ? t.data[r] : 0;
                    d /= o,
                        l ? c.text = "+" + d + "%" : c.text = "+" + d
                }
                this.panelShort.visible = !0,
                    this.panelLong.parent.removeChild(this.panelLong)
            }
        },
        i.OnClickBtnClose = function() {
            this.close()
        },
        i.clear = function() {
            this.btnClose && this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this)
        },
        e
}(WindowBase);
