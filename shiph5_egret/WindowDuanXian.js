
var WindowCommonIntroduction = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/junxian_tongyongwenben.exml"
            /*tpa=resource/eui_skins/junxian_tongyongwenben.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            if (t.title ? this.txtTitle.text = t.title : this.txtTitle.text = "", t.content) {
                var e = t.content;
                "string" == typeof e ? this.txtContent.text = e : e instanceof Array ? this.txtContent.textFlow = e : this.txtContent.text = e.toString()
            } else this.txtContent.text = ""
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this)
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {},
        e
}(WindowBase);
