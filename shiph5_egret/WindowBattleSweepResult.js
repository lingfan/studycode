
var WindowBattleSweepDrop = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ZB_DuoBaoQiBing_TanKuangSkin.exml"
            /*tpa=resource/eui_skins/ZB_DuoBaoQiBing_TanKuangSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this.txtCostItemNum.text = "-" + (e.jiluXunBao - UserData.getInstance().getRes(TypeDefine.RES.XunBaoLing));
            var a = !1,
                i = [];
            t = t.data;
            for (var n = 0; n < t.battlelist.length; n++)
                for (var s = 0; s < t.battlelist[n].droplist.droplist.length; s++) 1 == s && (a = !0),
                    i.push(t.battlelist[n].droplist.droplist[s]);
            for (n = 0; n < i.length; n++) {
                var r = new DropItem(i[n]);
                this.vessel.addChild(r),
                    r.x = n % 5 * 95,
                    r.y = 125 * Math.floor(n / 5)
            }
            if (a) {
                var o, l = WindowPreciousBattle._instance.pData;
                l.type == preciousBattleType.part ? o = ConfigData.getDataByKey("partspieces", String(l.id)) : l.type == preciousBattleType.medal && (o = ConfigData.getDataByKey("medalpiece", l.id)),
                    this.txtResult.textFlow = Utils.textFlowByStr(Locales.get("xunbao", t.battlelist.length, o.name_l)),
                    WindowPreciousBattle._instance.destroy(),
                    this.btnRobAgain.enabled = !1
            } else this.txtResult.text = Locales.get("panel_PlunderOpenTen_txt_comment_2");
            e.instance = this,
                this.btnRobAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
                this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
                WindowPrecious.guideBool && (WindowPrecious.guideBool = !1, this.destroy())
        },
        i.clickHandler = function(t) {
            t.currentTarget == this.btnRobAgain && (e.jiluXunBao = UserData.getInstance().getRes(TypeDefine.RES.XunBaoLing), WindowPreciousBattle.preciousBattle(1)),
                this.destroy()
        },
        i.clear = function() {
            e.instance = null
        },
        e
}(WindowBase);
