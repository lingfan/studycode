
var UpdatePropertyItem = function(t) {
    function e(e, a) {
        t.call(this),
            this.iType = e,
            this.iData = a,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/updatePropertyItemSkin.exml"
            /*tpa=resource/eui_skins/item/updatePropertyItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setTypeData = function(t, e) {
            this.iType = t,
                this.iData = e,
                this.init()
        },
        i.init = function() {
            var t, e = this;
            if (this.x = 9, this.up1Txt.text = "", this.up2Txt.text = "", this.junHeadTxt.text = this.junTxt.text = "", this.lvHeadTxt.text = "等    级：", this.iType == OperateItemType.captainUpdate || this.iType == OperateItemType.captainRemoudle) {
                t = ConfigData.getDataByKey("captainData", this.iData.id),
                    this.iType == OperateItemType.captainRemoudle && (this.lvHeadTxt.text = Locales.get("panel_Military_desc_1"));
                var a = this.iData.upgradelevel || 1,
                    i = this.iData.promotelevel || 1;
                if (this.lvTxt.text = this.iType == OperateItemType.captainUpdate ? a.toString() : Locales.get("panel_jianzhang_junxian_" + i), this.fireTxt.text = this.getValueByAdd(t.basicFireAttack, t.upgradeAddFireAttack, a, i).toString(), this.defTxt.text = this.getValueByAdd(t.basicFireDefen, t.upgradeAddFireDefen, a, i).toString(), this.baTxt.text = this.getValueByAdd(t.basicExplosionAttack, t.upgradeAddExplosionAttack, a, i).toString(), this.bdTxt.text = this.getValueByAdd(t.basicExpDefen, t.upgradeAddExpDefen, a, i).toString(), this.hpTxt.text = this.getValueByAdd(t.basicHp, t.upgradeAddHp, a, i).toString(), a += this.iType == OperateItemType.captainUpdate ? 1 : 0, i += this.iType == OperateItemType.captainRemoudle ? 1 : 0, this.lvUpTxt.text = this.iType == OperateItemType.captainUpdate ? a.toString() : Locales.get("panel_jianzhang_junxian_" + i), this.fireUpTxt.text = this.getValueByAdd(t.basicFireAttack, t.upgradeAddFireAttack, a, i).toString(), this.defUpTxt.text = this.getValueByAdd(t.basicFireDefen, t.upgradeAddFireDefen, a, i).toString(), this.baUpTxt.text = this.getValueByAdd(t.basicExplosionAttack, t.upgradeAddExplosionAttack, a, i).toString(), this.bdUpTxt.text = this.getValueByAdd(t.basicExpDefen, t.upgradeAddExpDefen, a, i).toString(), this.hpUpTxt.text = this.getValueByAdd(t.basicHp, t.upgradeAddHp, a, i).toString(), this.iType == OperateItemType.captainUpdate) {
                    this.junHeadTxt.text = this.junTxt.text = "";
                    var n = Utils.getGoodAtShip(t.goodat)[0];
                    this.up1Txt.textFlow = Utils.textFlowByStr(Locales.get("activePro1", t.activeLvLimit1, Locales.get("panel_jianzhang_shuxing1_guojia_" + t.country), BuffData.getBuffNameById(t.activeType1), Number(t.activeValue1 / 100) + "%")),
                        this.up2Txt.textFlow = Utils.textFlowByStr(Locales.get("activePro2", t.activeLvLimit2, n, BuffData.getBuffNameById(t.activeType2), Number(t.activeValue2 / 100) + "%")),
                        a > UserData.getInstance()._level && (this.baUpTxt.text = this.lvUpTxt.text = this.hpUpTxt.text = this.bdUpTxt.text = this.defUpTxt.text = this.fireUpTxt.text = Locales.get("panel_jianzhang_upgrade_wind_3"))
                } else {
                    var s = t.promoteType.split("|"),
                        r = t.promoteValue.split("|");
                    this.junHeadTxt.text = Locales.get("panel_jianzhang_jinsheng_comment_1"),
                        i = this.iData.promotelevel || 1,
                        0 == s[i] ? this.junTxt.text = BuffData.getAdvanceBuffDesc(t.promoteType2.split("|")[i]) : this.junTxt.text = BuffData.getBuffNameById(s[i]) + "+" + r[i] / 100 + "%"
                }
            } else if (this.iType == OperateItemType.shipUpdate) {
                t = ConfigData.getDataByKey("shipData", this.iData.shipid);
                var a = this.iData.level;
                this.lvTxt.text = a.toString(),
                    1 == t.atkType ? (this.fireHeadTxt.text = Locales.get("DecListPanel_txt_item_prop_1"), this.fireTxt.text = this.getValueByRate(t.fire, t.fireRate / 10, a), this.fireUpTxt.text = this.getValueByRate(t.fire, t.fireRate / 10, a + 1)) : (this.fireHeadTxt.text = Locales.get("DecListPanel_txt_item_prop_3"), this.fireTxt.text = this.getValueByRate(t.explosion, t.explosionRate / 10, a), this.fireUpTxt.text = this.getValueByRate(t.explosion, t.explosionRate / 10, a + 1)),
                    this.hpTxt.text = this.getValueByRate(t.hp, t.hpRate / 10, a),
                    this.defTxt.text = this.getValueByRate(t.fireDef, t.fireDefRate / 10, a),
                    this.bdTxt.text = this.getValueByRate(t.explosionDef, t.explosionDefRate / 10, a),
                    this.baTxt.text = "",
                    this.baHeadTxt.text = "",
                    a += 1,
                    a = 201 == a ? 200 : a,
                    this.lvUpTxt.text = a.toString(),
                    this.hpUpTxt.text = this.getValueByRate(t.hp, t.hpRate / 10, a),
                    this.defUpTxt.text = this.getValueByRate(t.fireDef, t.fireDefRate / 10, a),
                    this.bdUpTxt.text = this.getValueByRate(t.explosionDef, t.explosionDefRate / 10, a),
                    this.baUpTxt.text = "",
                    this.speedArrow.visible = !1,
                    this.bg0.height = 250,
                    (a > UserData.getInstance()._level || 200 == a) && (this.lvUpTxt.text = this.hpUpTxt.text = this.bdUpTxt.text = this.defUpTxt.text = this.fireUpTxt.text = Locales.get("panel_jianzhang_upgrade_wind_3"), this.baHeadTxt.text = this.baTxt.text = "")
            } else if (this.iType == OperateItemType.shipRemoudle) {
                t = ConfigData.getDataByKey("shipData", this.iData.shipid);
                var a = this.iData.level || 1,
                    o = this.iData.shipid % 100,
                    l = !1;
                6 == t.quality ? l = !0 : t.quality < 5 && (l = o > 4);
                var h = ConfigData.getDataByKey("shipData", Number(this.iData.shipid) + 1);
                h && t.quality < h.quality ? (this.lvHeadTxt.text = Locales.get("panel_jinggong_sj_show_txt_2"), this.lvTxt.text = t.quality, this.lvUpTxt.text = h.quality, this.baHeadTxt.text = Locales.get("panel_ShipsDetailpanelB_jinjie") + "：", this.baTxt.textFlow = [], this.baTxt.text = "", this.baTxt.textColor = 16744499, t.activateAddId && ConfigData.preLoadDats(["AdvancedbuffData"], [AdvancedbuffdataParser],
                        function() {
                            var a = AdvancedbuffdataParser.GetInstance().getItemById(t.activateAddId);
                            a && (e.baTxt.text = a.des_l)
                        },
                        this)) : (this.lvHeadTxt.text = Locales.get("panel_parts_transform_txt_comment_1"), this.baHeadTxt.text = Locales.get("panel_ShipsDetailpanelB_gaizao") + "：", this.baTxt.textFlow = Utils.textFlowByStr(BuffData.getBuffNameById(t.remouldAddId) + "+" + ShipManager.getInstance().remouldValue(t.remouldAddId, t.remouldAddValue) + "%", 16744499), this.lvTxt.text = o.toString(), this.lvUpTxt.text = (o + 1).toString()),
                    this.hpTxt.text = this.getValueByRate(t.hp, t.hpRate / 10, a),
                    1 == t.atkType ? (this.fireHeadTxt.text = Locales.get("DecListPanel_txt_item_prop_1"), this.fireTxt.text = this.getValueByRate(t.fire, t.fireRate / 10, a), h && (this.fireUpTxt.text = this.getValueByRate(h.fire, h.fireRate / 10, a))) : (this.fireHeadTxt.text = Locales.get("DecListPanel_txt_item_prop_3"), this.fireTxt.text = this.getValueByRate(t.explosion, t.explosionRate / 10, a), h && (this.fireUpTxt.text = this.getValueByRate(h.explosion, h.explosionRate / 10, a))),
                    this.defTxt.text = this.getValueByRate(t.fireDef, t.fireDefRate / 10, a),
                    this.bdTxt.text = this.getValueByRate(t.explosionDef, t.explosionDefRate / 10, a),
                    h && (this.hpUpTxt.text = this.getValueByRate(h.hp, h.hpRate / 10, a), this.defUpTxt.text = this.getValueByRate(h.fireDef, h.fireDefRate / 10, a), this.bdUpTxt.text = this.getValueByRate(h.explosionDef, h.explosionDefRate / 10, a)),
                    this.baUpTxt.text = "",
                    this.speedArrow.visible = !1,
                    l && (this.lvUpTxt.text = this.hpUpTxt.text = this.bdUpTxt.text = this.defUpTxt.text = this.fireUpTxt.text = Locales.get("panel_jianzhang_upgrade_wind_3"), this.baHeadTxt.text = Locales.get("panel_ShipsDetailpanelB_gaizao") + "：", this.baTxt.text = Locales.get("panel_guard_biwu_comment_38"))
            }
        },
        i.getValueByRate = function(t, e, a) {
            return Math.floor(Number(t) + Number(e * (a - 1))) + ""
        },
        i.getValueByAdd = function(t, e, a, i) {
            return Number(t.split("|")[i]) + Number(e.split("|")[i]) * (a - 1)
        },
        e
}(eui.Component);
