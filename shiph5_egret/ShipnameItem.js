
var ShipInfoItem = function(t) {
    function e(e, a, i) {
        t.call(this),
            this.sData = e,
            this.myType = a,
            this.target = i,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/shipInfoItemSkin.exml"
            /*tpa=resource/eui_skins/item/shipInfoItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            ConfigData.preLoadList(["shipData", "exp", "captainData", "trainData"],
                    function() {
                        t.initData()
                    }),
                this.target ? (this.updateBtn.visible = this.studyBtn.visible = !0, this.updateBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function(e) {
                        (36 == GuideManager.step || 139 == GuideManager.step) && GuideManager.nextStep(),
                            t.myType == shipInfoItemType.captainInfo ? WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                                data: t.sData,
                                type: OperateType.captain,
                                index: 1
                            }) : WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                                data: t.sData,
                                type: OperateType.ship,
                                index: 1
                            }),
                            t.target.destroy()
                    },
                    this), this.studyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function(e) {
                        t.myType == shipInfoItemType.captainInfo ? (WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                            data: t.sData,
                            type: OperateType.captain,
                            index: 2
                        }), t.target.destroy()) : UserData.getInstance()._level < 15 ? Toast.launch(Locales.get("ui_main_function_scientific", 15)) : (WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                            data: t.sData,
                            type: OperateType.ship,
                            index: 4
                        }), t.target.destroy())
                    },
                    this)) : this.updateBtn.visible = this.studyBtn.visible = !1,
                this.getHeadTxt.text = this.getTxt.text = this.eAtkHeadTxt.text = this.eAtkTxt.text = "",
                WindowShipInfo.instance && WindowShipInfo.instance.reSizeItem()
        },
        i.getValueByAdd = function(t, e, a) {
            return Number(t.split("|")[a]) + Number(e.split("|")[a]) * (a - 1)
        },
        i.initData = function() {
            var t;
            if (this.myType == shipInfoItemType.captainInfo) {
                this.studyBtn.label = Locales.get("zz_upgrade");
                var e = this.sData.upgradelevel || 1,
                    a = this.sData.promotelevel || 1;
                t = ConfigData.getDataByKey("exp", UserData.getInstance()._level),
                    this.lvTxt.text = e + "/" + (t.captainLevelLimit || UserData.getInstance()._level),
                    t = ConfigData.getDataByKey("captainData", this.sData.id),
                    this.typeHeadTxt.text = Locales.get("panel_jianzhang_detail_comment_1"),
                    this.nameTxt.text = Locales.get("panel_jianzhang_detail_guojia_" + t.country),
                    this.qualityTxt.text = t.quality,
                    this.liveTxt.text = this.getValueByAdd(t.basicHp, t.upgradeAddHp, a).toString(),
                    this.speedHeadTxt.text = Locales.get("Rank"),
                    this.speedTxt.text = Locales.get("panel_jianzhang_junxian_" + a),
                    this.getHeadTxt.text = Locales.get("panel_jianzhang_hecheng_comment_2");
                var i = Utils.getGoodAtShip(t.goodat)[0];
                this.getTxt.text = i,
                    this.fireTxt.text = this.getValueByAdd(t.basicFireAttack, t.upgradeAddFireAttack, a).toString(),
                    this.defendTxt.text = this.getValueByAdd(t.basicFireDefen, t.upgradeAddFireDefen, a).toString(),
                    this.eAtkHeadTxt.text = Locales.get("DecListPanel_txt_item_prop_3"),
                    this.eAtkTxt.text = this.getValueByAdd(t.basicExplosionAttack, t.upgradeAddExplosionAttack, a).toString(),
                    this.exploTxt.text = this.getValueByAdd(t.basicExpDefen, t.upgradeAddExpDefen, a).toString(),
                    this.target && (this.p1.visible = RedPointManager.getCaptainUpdate(this.sData) > 0, this.p2.visible = RedPointManager.getCaptainRemodule(this.sData) > 0)
            } else {
                var e = this.sData.level || 1;
                t = ConfigData.getDataByKey("exp", UserData.getInstance()._level),
                    this.lvTxt.text = e + "/" + t.shipFactorylvlLimit,
                    t = ConfigData.getDataByKey("shipData", this.sData.shipid),
                    this.nameTxt.text = Locales.get("GlobalSystem_ShipType_" + t.shipType),
                    this.qualityTxt.text = t.quality,
                    1 == t.atkType ? (this.fireHeadTxt.text = Locales.get("DecListPanel_txt_item_prop_1"), this.fireTxt.text = this.sData.attack || this.getValueByRate(t.fire, t.fireRate / 10, e)) : (this.fireHeadTxt.text = Locales.get("DecListPanel_txt_item_prop_3"), this.fireTxt.text = this.sData.attack || this.getValueByRate(t.explosion, t.explosionRate / 10, e)),
                    this.liveTxt.text = this.sData.maxhp || this.getValueByRate(t.hp, t.hpRate / 10, e),
                    this.defendTxt.text = this.sData.firedefence || this.getValueByRate(t.fireDef, t.fireDefRate / 10, e),
                    this.speedTxt.text = this.sData.speed || t.spd,
                    this.exploTxt.text = this.sData.explosiondefence || this.getValueByRate(t.explosionDef, t.explosionDefRate / 10, e),
                    this.target && (this.p1.visible = RedPointManager.getShipUpdate(this.sData) > 0, this.p2.visible = RedPointManager.getShipTrain(this.sData) > 0)
            }
        },
        i.getValueByRate = function(t, e, a) {
            return Math.floor(Number(t) + Number(e * (a - 1))) + ""
        },
        e
}(eui.Component);
