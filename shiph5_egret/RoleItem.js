
var FormationItem = function(t) {
    function e(e) {
        t.call(this),
            this.iData = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/zhengrong_genhuanzhandouzhenxingSkin.exml"
            /*tpa=resource/eui_skins/item/zhengrong_genhuanzhandouzhenxingSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this,
                a = ConfigData.getAllData("manualupdate"),
                i = Utils.getListByKeyValue("id", this.iData.id, ShipManager.getInstance().shipFormationList),
                n = 0;
            i.length > 0 ? (n = i[0].level, Utils.getImgByUrl(Path.formationURL + this.iData.icon, this.icon)) : (this.useBtn.enabled = this.upBtn.enabled = !1, Utils.getImgByUrl(Path.formationURL + this.iData.icon.substr(0, this.iData.icon.length - 4) + "-h.png", this.icon)),
                this.lvTxt.text = Locales.get("DecListPanel_txt_item_lvl") + n + "/" + a.length,
                this.titleTxt.text = Locales.get("formationName_" + this.iData.id);
            var s = Number(this.iData.value1) + ((0 == n ? 1 : n) - 1) * Number(this.iData.value1rate);
            this.atk1Txt.text = Locales.get("manual_buff_" + this.iData.targetType1 + this.iData.buff1) + ":" + s * i.length,
                this.iData.targetType2 ? (s = Number(this.iData.value2) + ((0 == n ? 1 : n) - 1) * Number(this.iData.value2rate), this.atk2Txt.text = Locales.get("manual_buff_" + this.iData.targetType2 + this.iData.buff2) + ":" + s * i.length) : this.atk2Txt.text = "",
                this.atkV2Txt.text = this.atkV1Txt.text = "",
                this.iData.id == ShipManager.getInstance().shipFormationSelect ? (e.useBtn && (e.useBtn.enabled = !0), this.enTxt.text = Locales.get("panel_formation_select"), this.useBtn.enabled = !1, e.useBtn = this.useBtn) : (this.enTxt.text = "", this.useBg.visible = !1),
                this.upBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP) || (this.upBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.updateHandler, this), this.useBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useHandler, this), GameEventDispatcher.getInstance().addEventListener(GameEvent.FORMATION_UPDATE, this.updateCallBack, this), this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clearHandler, this)),
                0 == i.length && (this.atk2Txt.text = "", ConfigData.preLoadDats(["stageData"], [StagedataParser],
                    function() {
                        var e = StagedataParser.GetInstance().getItemById(t.iData.stage);
                        t.atk1Txt.textFlow = Utils.textFlowByStr(Locales.get("manual_" + t.iData.id + "_desc1_l", Math.floor(Number(t.iData.stage) / 1e4 - 9), e.name_l))
                    },
                    this)),
                n == a.length && (this.upBtn.enabled = !1)
        },
        i.clearHandler = function(t) {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.FORMATION_UPDATE, this.updateCallBack, this)
        },
        i.updateHandler = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.FormationUpdatePopup, {
                data: this.iData
            })
        },
        i.useHandler = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceShipFormationChoose);
            e.formationid = Number(this.iData.id),
                Transport.instance.send(e)
        },
        i.updateCallBack = function(t) {
            this.init()
        },
        e
}(eui.Component);
