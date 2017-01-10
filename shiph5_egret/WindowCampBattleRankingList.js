
var WindowCampBattleEnd = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ZB_ZhenYingZhan_JieSuanSkin.exml"
            /*tpa=resource/eui_skins/ZB_ZhenYingZhan_JieSuanSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this.data = t,
                this.txtAttackTimes.text = Locales.get("ui_campBattle_end_atkCount", this.data.attacknum),
                this.txtDefendTimes.text = Locales.get("ui_campBattle_end_defCount", this.data.defendnum),
                this.txtKill.text = Locales.get("ui_campBattle_end_killCount", this.data.killnum),
                this.txtOccupy.text = Locales.get("ui_campBattle_end_portCount", this.data.occupynum),
                this.txtScore1.text = Locales.get("ui_campBattle_end_zhangong", CampBattleManager.instance.score),
                this.txtRanking1.text = Locales.get("ui_campBattle_end_zgRank", this.data.rank);
            var e = CampbattlescoredataParser.GetInstance().getItemById(this.data.rank),
                a = 0;
            e && CampBattleManager.instance.score > 0 && (a = e.score),
                this.txtScore2.text = Locales.get("ui_campBattle_end_sw", a),
                this.txtDesc.text = Locales.get("ui_campBattle_end_desc"),
                this.btnHome.labelDisplay.text = Locales.get("ui_campBattle_return");
            var i = [];
            i.push({
                    x: this.CAMP1.x,
                    y: this.CAMP1.y
                }),
                i.push({
                    x: this.CAMP2.x,
                    y: this.CAMP2.y
                }),
                i.push({
                    x: this.CAMP3.x,
                    y: this.CAMP3.y
                });
            var n = CampBattleManager.instance.generalCampRankList();
            for (var s in n) {
                var r = n[s],
                    o = r.campid,
                    l = this["CAMP" + o];
                l.touchEnabled = !1,
                    l.touchChildren = !1;
                var h = this["imgIcon" + o];
                SUI.setTextureAsync(h, Path.GetCampPicUrl(o, 0)),
                    l.y = i[s].y,
                    l.x = i[s].x
            }
        },
        i.init = function() {
            this.btnHome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnHome, this),
                this.txtName.text = UserData.getInstance().getUserName(),
                SUI.setTextureAsync(this.imgHead, Path.GetHeadPicUrl(UserData.getInstance().getHead())),
                this.txtVIP.text = Locales.get("ui_main_vipLevel", UserData.getInstance().getVipLevel())
        },
        i.OnClickBtnHome = function(t) {
            WindowManager.getInstance().hideAll()
        },
        i.clear = function() {},
        e
}(WindowBase);
