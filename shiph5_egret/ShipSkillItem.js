
var ShipIntroduceItem = function(t) {
    function e(e, a, i) {
        t.call(this),
            this.sh = 30,
            this.sData = e,
            this.sType = a,
            this.target = i,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/shipIntroduceItemSkin.exml"
            /*tpa=resource/eui_skins/item/shipIntroduceItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            ConfigData.preLoadList(["AdvancedbuffData", "skillData", "shipCollectData", "shipData", "captainData", "captainCollection", "medalData", "medalexpData"],
                    function() {
                        ConfigData.preLoadDats(["AdvancedbuffData"], [AdvancedbuffdataParser],
                            function() {
                                t.initUI()
                            },
                            t)
                    }),
                this.target || (this.btn.visible = !1),
                this.vessel.touchEnabled = !1
        },
        i.initUI = function() {
            var t = this;
            if (this.sData) {
                var e, a, i;
                if (this.sType == shipInfoItemType.remould) {
                    e = ConfigData.getDataByKey("shipData", this.sData.shipid),
                        this.titleTxt.text = Locales.get("panel_shipyard_shiptransform_btn_transform");
                    var n = Number(e.remouldLv),
                        s = Number(e.id);
                    6 == e.quality && (n = 6);
                    for (var r = 0; 6 > r; r++) {
                        var o, l = s - n + r,
                            h = ConfigData.getDataByKey("shipData", l);
                        if (o = l < this.sData.shipid && n > 0 ? 65280 : 16777215, 5 == r) {
                            if (e.quality >= 5) {
                                var c = "";
                                if (5 == e.quality) c = AdvancedbuffdataParser.GetInstance().getItemById(h.activateAddId).des_l;
                                else {
                                    var d = ConfigData.getDataByKey("shipData", l);
                                    d.activateAddId && (c = AdvancedbuffdataParser.GetInstance().getItemById(d.activateAddId).des_l)
                                }
                                c && this.createLabel(r, Locales.get("panel_ShipsDetailpanelB_jinjie") + "：" + c, o)
                            }
                        } else h.remouldAddId && this.createLabel(r, Locales.get("DecListPanel_txt_item_btn_transfrom") + "+" + (r + 1) + " : " + BuffData.getBuffNameById(h.remouldAddId) + "+" + ShipManager.getInstance().remouldValue(h.remouldAddId, h.remouldAddValue) + "%", o)
                    }
                    this.vessel.height = 5 * this.sh,
                        this.target && (this.btn.label = Locales.get("panel_jinggong_detil_btn_txt_3"), this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                            function(e) {
                                WindowManager.getInstance().show(WindowManager.windowType.OperatePanel, {
                                        data: t.sData,
                                        type: OperateType.ship,
                                        index: 2
                                    }),
                                    t.target.destroy()
                            },
                            this), this.p.visible = RedPointManager.getShipRemodule(this.sData) > 0)
                } else if (this.sType == shipInfoItemType.history) {
                    e = ConfigData.getDataByKey("shipData", this.sData.shipid),
                        this.titleTxt.text = Locales.get("panel_jinggong_detil_show_txt_6");
                    var g = Number(e.id.toString().substr(0, 3) + "00");
                    e = ConfigData.getDataByKey("shipData", g),
                        a = this.createLabel(0, ShipdataParser.GetInstance().getItemById(g).desc_l, 16777215, this.vessel.width),
                        this.vessel.height = a.height,
                        this.btn.visible = !1
                } else if (this.sType == shipInfoItemType.detail) {
                    e = ConfigData.getDataByKey("shipData", this.sData.shipid),
                        this.titleTxt.text = Locales.get("panel_atlas_txt_comment_2"),
                        e = ConfigData.getDataByKey("shipCollectData", e.drawingId);
                    var u = 0;
                    this.createLabel(u++, Locales.get("panel_atlas_txt_comment_4_3") + " : " + Locales.get("panel_atlas_txt_comment_4_5", e.norDrainage)),
                        this.createLabel(u++, Locales.get("panel_atlas_txt_comment_4_4") + " : " + Locales.get("panel_atlas_txt_comment_4_5", e.maxDrainage)),
                        this.createLabel(u++, Locales.get("panel_atlas_txt_comment_5_1") + " : " + Locales.get("panel_atlas_txt_comment_5_4", e.length)),
                        this.createLabel(u++, Locales.get("panel_atlas_txt_comment_5_2") + " : " + Locales.get("panel_atlas_txt_comment_5_4", e.width)),
                        this.createLabel(u++, Locales.get("panel_atlas_txt_comment_5_3") + " : " + Locales.get("panel_atlas_txt_comment_5_4", e["draught "])),
                        this.createLabel(u++, Locales.get("panel_atlas_txt_comment_6_1_1") + " : " + Locales.get("panel_atlas_txt_comment_6_1_2", e.power)),
                        this.createLabel(u++, Locales.get("panel_atlas_txt_comment_6_1") + " : " + Locales.get("panel_atlas_txt_comment_6_2", e.speed.substr("|")[1])),
                        this.createLabel(u++, Locales.get("panel_atlas_txt_comment_7_1") + " : " + Locales.get("panel_atlas_txt_comment_7_2", e.durability.substr("|")[1], e.durability.substr("|")[2])),
                        this.createLabel(u++, Locales.get("panel_atlas_txt_comment_8_1") + " : " + Locales.get("panel_atlas_txt_comment_8_2", e.member)),
                        e.plant && this.createLabel(u++, Locales.get("panel_atlas_txt_comment_9_1") + " : " + Locales.get("panel_atlas_txt_comment_9_2", e.plant)),
                        this.vessel.height = u * this.sh,
                        this.btn.visible = !1
                } else if (this.sType == shipInfoItemType.weapon) {
                    e = ConfigData.getDataByKey("shipData", this.sData.shipid),
                        this.titleTxt.text = Locales.get("panel_atlas_txt_comment_3"),
                        e = ConfigData.getDataByKey("shipCollectData", e.drawingId);
                    for (var u = 0,
                            r = 0; 4 > r; r++) e["weapon" + (r + 1) + "_l"] && this.createLabel(u++, e["weapon" + (r + 1) + "_l"]);
                    this.vessel.height = u * this.sh,
                        this.btn.visible = !1
                } else if (this.sType == shipInfoItemType.captainRank) {
                    this.titleTxt.text = Locales.get("Rank"),
                        e = ConfigData.getDataByKey("captainData", this.sData.id);
                    for (var p, m = e.promoteType.split("|"), _ = e.promoteValue.split("|"), r = 1; r < m.length - 1; r++) p = this.sData.promotelevel >= r ? 65280 : 16777215,
                        0 == m[r] ? this.createLabel(r, Locales.get("panel_jianzhang_junxian_" + r) + ":" + BuffData.getAdvanceBuffDesc(e.promoteType2.split("|")[r]), p) : this.createLabel(r, Locales.get("panel_jianzhang_junxian_" + r) + ":" + BuffData.getBuffNameById(m[r]) + "+" + _[r] / 100 + "%", p);
                    this.vessel.height = r * this.sh,
                        this.btn.visible = !1
                } else if (this.sType == shipInfoItemType.captainintro) this.titleTxt.text = Locales.get("panel_jinggong_detil_show_txt_6"),
                    a = this.createLabel(0, CaptaindataParser.GetInstance().getItemById(this.sData.id).introduction_l, 16777215, this.vessel.width),
                    this.vessel.height = a.height,
                    this.btn.visible = !1;
                else if (this.sType == shipInfoItemType.captainResume) e = ConfigData.getDataByKey("captainCollection", this.sData.id),
                    this.createLabel(0, Locales.get("panel_atlas_main_panel_desc_show_text_9") + e.english_name_l),
                    this.createLabel(1, Locales.get("panel_atlas_main_panel_desc_show_text_10") + e.birth_death_l),
                    this.titleTxt.text = Locales.get("panel_jinggong_detil_show_txt_6"),
                    a = this.createLabel(3, CaptaindataParser.GetInstance().getItemById(this.sData.id).introduction_l, 16777215, this.vessel.width),
                    this.vessel.height = 3 * this.sh + a.height,
                    this.btn.visible = !1;
                else if (this.sType == shipInfoItemType.partsInfo) {
                    i = this.sData.upgradelevel || 1,
                        this.titleTxt.text = Locales.get("panel_payShipModel_title"),
                        e = ConfigData.getDataByKey("parts", this.sData.partsid),
                        a = this.createLabel(0, Locales.get("panel_parts_txt_quality_comment") + e.quality, 16711680);
                    var v = new eui.Image(RES.getRes(Path.resHeadUrl + "GUI_Shipbuilding_Icon_star_png"));
                    v.x = a.x + a.width,
                        v.y = a.y - 2,
                        this.vessel.addChild(v),
                        this.createLabel(1, Locales.get("panel_parts_txt_parts_lvl_comment") + i + "/" + 3 * UserData.getInstance()._level, 65280),
                        this.createLabel(2, BuffData.getBuffNameById(e.upgradeType) + ":" + Math.floor(Number(e.basicValue) + Number(e.upgradeValue) * (i - 1))),
                        this.createLabel(3, Locales.get("PartsSystem_txt_equip") + Utils.getGoodAtShip(e.equipfor)[0], 16777215, 450),
                        this.vessel.height = 4 * this.sh,
                        this.target && (this.btn.label = Locales.get("panel_jinggong_detil_btn_txt_4"), this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                            function(e) {
                                WindowManager.getInstance().show(WindowManager.windowType.PartMetals, {
                                        data: t.sData,
                                        type: partMetalType.parts,
                                        index: 1
                                    }),
                                    t.target.destroy()
                            },
                            this), this.p.visible = RedPointManager.getPartUpdateBool(this.sData) > 0)
                } else if (this.sType == shipInfoItemType.partsRemould) i = this.sData.remouldlevel || 0,
                    this.titleTxt.text = Locales.get("panel_shipyard_shiptransform_btn_transform"),
                    e = ConfigData.getDataByKey("parts", this.sData.partsid),
                    this.createLabel(0, Locales.get("panel_Shiptransform_txt_lvl") + i, 65280),
                    this.createLabel(1, BuffData.getBuffNameById(e.remouldType) + "+" + e.remouldValue.split("|")[i] / 100 + "%", 16760576),
                    this.vessel.height = 2 * this.sh,
                    this.target && (this.btn.label = Locales.get("panel_jinggong_detil_btn_txt_3"), this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function(e) {
                            WindowManager.getInstance().show(WindowManager.windowType.PartMetals, {
                                    data: t.sData,
                                    type: partMetalType.parts,
                                    index: 2
                                }),
                                t.target.destroy()
                        },
                        this), this.p.visible = RedPointManager.getPartRemoduleBool(this.sData) > 0);
                else if (this.sType == shipInfoItemType.partsResume) this.titleTxt.text = Locales.get("panel_jinggong_detil_show_txt_6"),
                    e = ConfigData.getDataByKey("parts", this.sData.partsid),
                    a = this.createLabel(0, PartsParser.GetInstance().getItemById(e.id).desc_l, 16777215, this.vessel.width),
                    this.vessel.height = a.height + 20,
                    this.btn.visible = !1;
                else if (this.sType == shipInfoItemType.soulInfo) {
                    if (e = ConfigData.getDataByKey("medalData", this.sData.soulid), 9 == e.medalType) {
                        a = this.createLabel(0, Locales.get("panel_parts_txt_quality_comment") + e.quality, 16711680);
                        var v = new eui.Image(RES.getRes(Path.resHeadUrl + "GUI_Shipbuilding_Icon_star_png"));
                        v.x = a.x + a.width,
                            v.y = a.y - 2,
                            this.vessel.addChild(v),
                            this.createLabel(1, Locales.get("DecListPanel_txt_item_prop_43") + (this.sData.point || e.exp)),
                            this.createLabel(2, Locales.get("PartsSystem_txt_equip") + Utils.getGoodAtShip(e.equipfor)[0], 16777215, 450),
                            this.vessel.height = 3 * this.sh
                    } else {
                        i = this.sData.point ? Utils.getMetalLvByExp(this.sData.point, "exp" + e.exp) : 1,
                            a = this.createLabel(0, Locales.get("panel_parts_txt_quality_comment") + e.quality, 16711680);
                        var v = new eui.Image(RES.getRes(Path.resHeadUrl + "GUI_Shipbuilding_Icon_star_png"));
                        v.x = a.x + a.width,
                            v.y = a.y - 2,
                            this.vessel.addChild(v),
                            this.createLabel(1, Locales.get("panel_parts_txt_parts_lvl_comment") + i + "/25", 65280),
                            this.createLabel(2, BuffData.getBuffNameById(e.buff) + ":" + BuffData.getBuffValue(e, i)),
                            this.createLabel(3, Locales.get("PartsSystem_txt_equip") + Utils.getGoodAtShip(e.equipfor)[0], 16777215, 450),
                            this.vessel.height = 4 * this.sh,
                            this.target && (this.p.visible = RedPointManager.getMedalUpdateBool(this.sData) > 0)
                    }
                    this.titleTxt.text = Locales.get("panel_payShipModel_title"),
                        this.target && (this.btn.label = Locales.get("panel_jinggong_detil_btn_txt_4"), this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                            function(e) {
                                WindowManager.getInstance().show(WindowManager.windowType.PartMetals, {
                                        data: t.sData,
                                        type: partMetalType.metals,
                                        index: 1
                                    }),
                                    t.target.destroy()
                            },
                            this))
                } else this.sType == shipInfoItemType.soulRemould ? (i = this.sData.promotelvl || 0, this.titleTxt.text = Locales.get("panel_shipyard_shiptransform_btn_transform"), e = ConfigData.getDataByKey("medalData", this.sData.soulid), this.createLabel(0, Locales.get("panel_Shiptransform_txt_lvl") + i, 65280), this.createLabel(1, BuffData.getBuffNameById(e.remouldType) + "+" + e.remouldValue.split("|")[i] / 100 + "%", 16760576), this.vessel.height = 2 * this.sh, this.target && (this.btn.label = Locales.get("panel_jinggong_detil_btn_txt_3"), this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function(e) {
                        WindowManager.getInstance().show(WindowManager.windowType.PartMetals, {
                                data: t.sData,
                                type: partMetalType.metals,
                                index: 2
                            }),
                            t.target.destroy()
                    },
                    this), this.p.visible = RedPointManager.getMedalRemoduleBool(this.sData) > 0)) : this.sType == shipInfoItemType.soulResume && (this.titleTxt.text = Locales.get("panel_jinggong_detil_show_txt_6"), a = this.createLabel(0, MedaldataParser.GetInstance().getItemById(this.sData.soulid).desc_collect_l, 16777215, this.vessel.width), this.vessel.height = a.height + 20, this.btn.visible = !1);
                this.bg.height = this.vessel.height + 80,
                    this.btnGroup.y = this.bg.y + this.bg.height - this.btn.height - 3
            } else egret.setTimeout(function() {
                    t.initUI()
                },
                this, 100);
            this.height = this.bg.height + 40,
                WindowShipInfo.instance && WindowShipInfo.instance.reSizeItem()
        },
        i.createLabel = function(t, e, a, i) {
            void 0 === a && (a = 16777215);
            var n = new eui.Label;
            return n.size = 22,
                n.textColor = a,
                n.text = e,
                i && (n.width = i, n.wordWrap = !0),
                n.y = t * this.sh,
                this.vessel.addChild(n),
                n
        },
        e
}(eui.Component);
