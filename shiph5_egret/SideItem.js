
var ShipSkillItem = function(t) {
    function e(e, a) {
        t.call(this),
            this.sData = e,
            this.target = a,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/shipSkillItemSkin.exml"
            /*tpa=resource/eui_skins/item/shipSkillItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            ConfigData.preLoadList(["shipData", "skillData"],
                    function() {
                        t.initData()
                    }),
                this.target ? (this.updateBtn.visible = !0, this.updateBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function(e) {
                        return UserData.getInstance()._level < 6 ? void Toast.launch(Locales.get("ui_main_function_scientific", 6)) : (WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                            data: t.sData,
                            type: OperateType.ship,
                            index: 3
                        }), void t.target.destroy())
                    },
                    this)) : this.updateBtn.visible = !1,
                WindowShipInfo.instance && WindowShipInfo.instance.reSizeItem(),
                this.p.visible = RedPointManager.getShipSkill(this.sData) > 0
        },
        i.initData = function() {
            var t = ConfigData.getDataByKey("shipData", this.sData.shipid);
            this.sData.skillid ? (this.renderLabel(ConfigData.getDataByKey("skillData", this.sData.skillid), "n"), this.renderLabel(ConfigData.getDataByKey("skillData", this.sData.activeskillid), "j"), this.renderLabel(ConfigData.getDataByKey("skillData", this.sData.circleskillid), "m")) : (this.renderLabel(ConfigData.getDataByKey("skillData", t.normalSkill), "n"), this.renderLabel(ConfigData.getDataByKey("skillData", t.activeSkill), "j"), this.renderLabel(ConfigData.getDataByKey("skillData", t.leaderSkill), "m"))
        },
        i.renderLabel = function(t, e) {
            this[e + "NameTxt"].text = t.name_l,
                this[e + "LvTxt"].text = t.level + "/10",
                this[e + "InfoTxt"].textFlow = Utils.textFlowByStr(t.desc_l)
        },
        e
}(eui.Component);
