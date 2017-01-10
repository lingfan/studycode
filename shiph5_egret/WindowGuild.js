
var WindowGaojiTanSuoReward = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ChouJiang_TSXZ_HuoDeSkin.exml"
            /*tpa=resource/eui_skins/ChouJiang_TSXZ_HuoDeSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this.searchType = t.type;
            var a = t.pkg,
                i = UserData.getInstance().getRes(TypeDefine.RES.Gold);
            if (this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this), this.btnSearchAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.againHandler, this), this.SearchMore.visible = 6 == this.searchType || 5 == this.searchType, this.SearchTen.visible = 2 == this.searchType || 4 == this.searchType, this.costGroup.visible = !(2 == this.searchType), 2 == this.searchType || 4 == this.searchType) {
                this.SearchMore.visible = !1,
                    this.SearchTen.visible = !0;
                for (var n = 1; 11 > n; n++) {
                    var s = this["Reward" + n];
                    if (a.soullist[n - 1]) {
                        var r = a.soullist[n - 1],
                            o = ConfigData.getDataByKey("medalData", r);
                        Utils.getImgByUrl(QualitySystem.getItemSmallBack(o.quality), s.imgBg),
                            Utils.getImgByUrl(Path.soulIconURL + "Medal_" + o.id + "_i.png", s.imgIcon),
                            s.txtName.text = MedaldataParser.GetInstance().getItemById(r).name_l,
                            s.txtName.textColor = QualitySystem.getColorByQuality(o.quality)
                    } else s.visible = !1
                }
                for (n = 1; 11 > n; n++) {
                    var l = this["ExtraReward" + n];
                    l.visible = !1
                }
                if (a.soullist2) {
                    var h = a.soullist2.length;
                    for (this.txtSpecialDesc.text = Locales.get("DecResultPanel_txt_item_txt_0") + h + Locales.get("DecResultPanel_txt_item_txt_1") + h + Locales.get("DecResultPanel_txt_item_txt_2"), n = 0; h > n; n++) {
                        var c = this["ExtraReward" + (n + 1)];
                        if (a.soullist2[n]) {
                            var r = a.soullist2[n],
                                o = ConfigData.getDataByKey("medalData", r);
                            Utils.getImgByUrl(QualitySystem.getItemSmallBack(o.quality), c.imgBg),
                                Utils.getImgByUrl(Path.soulIconURL + "Medal_" + o.id + "_i.png", c.imgIcon),
                                c.txtName.text = MedaldataParser.GetInstance().getItemById(r).name_l,
                                c.txtName.textColor = QualitySystem.getColorByQuality(o.quality),
                                c.visible = !0
                        }
                    }
                    0 == h && (this.addGroup.visible = !1)
                }
                this.btnSearchAgain.label = Locales.get("DecResultPanel_txt_btn_again"),
                    this.txtCostCoin.text = Utils.rnum(e.preGold - i)
            } else if (6 == this.searchType || 5 == this.searchType) {
                this.txtTotleCost0.text = Utils.rnum(e.preGold - i);
                for (var h = a.soullist.length,
                        n = 0; h > n; n++) {
                    var d = new rewardItem(a.soullist[n]);
                    this.RewardGroup.addChild(d),
                        d.x = n % 2 * 250 + 20,
                        d.y = 50 * Math.floor(n / 2) + 20
                }
                for (this.RewardGroup.height = 50 * Math.floor(n / 2) + 50, this.CountGroup.y = this.RewardGroup.height + 20, this.vessel.height = this.RewardGroup.height + this.CountGroup.y + this.CountGroup.height, n = 0; n < a.soullist2.length; n++) this["txtCountQuality" + (n + 1)].text = Locales.get("DecResultPanel_txt_fifty_result_" + (n + 1), a.soullist2[n]);
                this.btnSearchAgain.label = Locales.get("DecResultPanel_txt_btn_again_fifty"),
                    a.point ? this.txtRewardExp.text = Locales.get("Deco_fifty_result_exp_desc", a.point) : this.txtRewardExp.text = ""
            }
            e.preGold = i
        },
        i.closeHandler = function(t) {
            void 0 === t && (t = null),
                this.close()
        },
        i.againHandler = function(t) {
            void 0 === t && (t = null),
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceSoul, {
                    type: this.searchType
                }, !1),
                this.close()
        },
        e
}(WindowBase);
