
var WindowFormationUpPopup = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/FormationUpPopupSkin.exml"
            /*tpa=resource/eui_skins/FormationUpPopupSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this.iData = t.data,
                this.initUI()
        },
        i.initUI = function(t) {
            var e = ConfigData.getAllData("manualupdate"),
                a = Utils.getListByKeyValue("id", this.iData.id, ShipManager.getInstance().shipFormationList),
                i = 0;
            a.length > 0 && (i = a[0].level),
                this.lvTxt.text = Locales.get("DecListPanel_txt_item_lvl") + i + "/" + e.length,
                this.titleTxt.text = Locales.get("formationName_" + this.iData.id);
            var n = Number(this.iData.value1) + ((0 == i ? 1 : i) - 1) * Number(this.iData.value1rate);
            this.atk1Txt.text = Locales.get("manual_buff_" + this.iData.targetType1 + this.iData.buff1) + ":" + n * a.length,
                this.atkV1Txt.text = "+" + (0 == i ? this.iData.value1 : this.iData.value1rate),
                this.iData.targetType2 ? (n = Number(this.iData.value2) + ((0 == i ? 1 : i) - 1) * Number(this.iData.value2rate), this.atk2Txt.text = Locales.get("manual_buff_" + this.iData.targetType2 + this.iData.buff2) + ":" + n * a.length, this.atkV2Txt.text = "+" + (0 == i ? this.iData.value2 : this.iData.value2rate)) : (this.atk2Txt.text = "", this.atkV2Txt.text = ""),
                this.atkV1Txt.x = this.atk1Txt.x + this.atk1Txt.textWidth + 30,
                this.atkV2Txt.x = this.atk2Txt.x + this.atk2Txt.textWidth + 30,
                Utils.getImgByUrl(Path.formationURL + this.iData.icon, this.icon);
            var n = 0,
                s = ItemsManager.getInstance().getItemById(1261);
            n = s && s.count || 0;
            var r = ConfigData.getDataByKey("manualupdate", i + 1);
            this.t1Txt.text = n + "/" + r.manual;
            var o = UserData.getInstance().getRes(TypeDefine.RES.Gold);
            this.t2Txt.text = Utils.rnum(o) + "/" + Utils.rnum(r.gold),
                n < Number(r.manual) && (this.t1Txt.textColor = 16711680),
                o < Number(r.gold) && (this.t2Txt.textColor = 16711680),
                (o < Number(r.gold) || n < Number(r.manual)) && (this.upBtn.enabled = !1),
                this.closeBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (Utils.getImgByUrl(Path.itemIconURL + "Formation-of-manual.png", this.icon1), Utils.getImgByUrl(Path.itemIconURL + "coin.png", this.icon2), o < Number(r.gold) || n < Number(r.manual) ? this.upBtn.enabled = !1 : this.upBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upHandler, this), this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this), GameEventDispatcher.getInstance().addEventListener(GameEvent.FORMATION_UPDATE, this.initUI, this))
        },
        i.closeHandler = function(t) {
            this.destroy()
        },
        i.upHandler = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceShipFormationLevelUp);
            e.id = Number(this.iData.id),
                Transport.instance.send(e)
        },
        e
}(WindowBase);
