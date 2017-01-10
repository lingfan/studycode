
var WindowSignActivity = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/HuoDong_qiandao_Skin.exml"
            /*tpa=resource/eui_skins/HuoDong_qiandao_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this._data = t,
                ActivityManager.instance.setImageByType(this.imgTitle, t.type),
                this.txtLog0.text = Locales.get("zz_viplv", UserData.getInstance().getVipLevel());
            var e = ActivityManager.instance.activityData.signined_array,
                a = 0;
            e && (a = e.length, a > 0 && 0 == e[a - 1] && (a -= 1)),
                this.txtLog.text = Locales.get("zz_signtimes", a);
            var i = 2;
            if (!this._initedList) {
                for (var n = 4,
                        s = 1,
                        r = 0,
                        o = 150,
                        l = 150,
                        h = 0; h < this._data.itemlist.length; ++h) {
                    var c = Math.floor(h / n),
                        d = h - c * n,
                        g = s + o * d + d * i,
                        u = r + l * c + c * i,
                        p = {
                            day: h + 1,
                            itemInfo: this._data.itemlist[h]
                        },
                        m = new SignItem(p);
                    m.x = g,
                        m.y = u,
                        this.gpReward.addChild(m)
                }
                this._initedList = !0
            }
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                SUI.setTextureAsync(this.imgBg, Path.backGroundImageUrl + "Bg_huodong.jpg"),
                SUI.setTextureAsync(this.imgL, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                SUI.setTextureAsync(this.imgR, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                EventManager.instance.addEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.updatePanel, this),
                this.gpReward.touchChildren = !0
        },
        i.updatePanel = function() {
            this.setData(this._data)
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {
            EventManager.instance.removeEventListener(EventTypes.ACTIVITY_DATA_UPDATE, this.updatePanel, this)
        },
        e
}(WindowBase);
