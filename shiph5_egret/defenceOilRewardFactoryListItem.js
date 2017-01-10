
var TopUI = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.addEventListener(eui.UIEvent.REMOVED_FROM_STAGE, this.clear, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.headImgClickHandler, this),
            this.skinName = "resource/eui_skins/TopUISkin.exml"
            /*tpa=resource/eui_skins/TopUISkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.showNormal = function() {
            this.normal.visible = !0,
                this.simple.visible = !1,
                this.simpleLevel.visible = !1
        },
        i.showSimple = function(t) {
            this.normal.visible = !1,
                this.simple.visible = !0,
                this.simpleLevel.visible = !1,
                this.simplePanelResTypes = t;
            for (var e = [], a = 0; a < t.length; a++) e.push({
                resType: t[a],
                num: UserData.getInstance().getRes(t[a])
            });
            this.setSimplePanel(e)
        },
        i.showSimpleLevel = function(t) {
            this.normal.visible = !1,
                this.simple.visible = !1,
                this.simpleLevel.visible = !0,
                this.simpleLevelPanelResTypes = t;
            for (var e = [], a = 0; a < t.length; a++) e.push({
                resType: t[a],
                num: UserData.getInstance().getRes(t[a])
            });
            this.setSimpleLevelPanel(UserData.getInstance().getPlayerLevel(), UserData.getInstance().getExpPercent(), e)
        },
        i.setSimplePanel = function(t) {
            for (var e = 1; 4 >= e; e++) t[e - 1] && (SUI.setTextureAsync(this["simple_resIcon" + e], TypeDefine.getResIcon(t[e - 1].resType)), t[e - 1].resType == TypeDefine.RES.Oil ? this["simple_resNum" + e].text = t[e - 1].num + "/" + UserData.getInstance().getMaxOil() : this["simple_resNum" + e].text = t[e - 1].num)
        },
        i.setSimpleLevelPanel = function(t, e, a) {
            for (var i = 1; 3 >= i; i++) a[i - 1] && (SUI.setTextureAsync(this["simpleLevel_resIcon" + i], TypeDefine.getResIcon(a[i - 1].resType)), a[i - 1].resType == TypeDefine.RES.Oil ? this["simpleLevel_resNum" + i].text = a[i - 1].num + "/" + UserData.getInstance().getMaxOil() : this["simpleLevel_resNum" + i].text = a[i - 1].num);
            this.simpleLevel_level.text = Locales.get("labelLevel", t),
                this.simpleLevel_expBar.value = e
        },
        i.init = function() {
            UserData.getInstance().addEventListener(GameEvent.UserData_Update, this.updateUserInfo, this)
        },
        i.updateUserInfo = function() {
            if (Utils.getImgByUrl(Path.GetHeadPicUrl(UserData.getInstance().getHead(), 1), this.headImg), this.txtLevel.text = UserData.getInstance()._level.toString(), this.txtVip.text = "VIP" + UserData.getInstance()._vip.toString(), UserData.getInstance()._vip > 9) {
                this.imgVip2.visible = !0;
                var t = Math.floor(UserData.getInstance()._vip / 10),
                    e = UserData.getInstance()._vip % 10;
                this.imgVip1.source = RES.getRes("GUI_Homepage_Icon_VIP" + t + "_png"),
                    0 == e ? this.imgVip2.source = RES.getRes("GUI_Homepage_Icon_VIP10_png") : this.imgVip2.source = RES.getRes("GUI_Homepage_Icon_VIP" + e + "_png")
            } else 0 == UserData.getInstance()._vip ? this.imgVip1.source = RES.getRes("GUI_Homepage_Icon_VIP10_png") : this.imgVip1.source = RES.getRes("GUI_Homepage_Icon_VIP" + UserData.getInstance()._vip + "_png"),
                this.imgVip2.visible = !1;
            if (this.txtUserName.text = UserData.getInstance()._userName, this.txtOil.text = UserData.getInstance().getRes(TypeDefine.RES.Oil).toString() + "/" + UserData.getInstance().getMaxOil(), this.txtGold.text = UserData.getInstance().getRes(TypeDefine.RES.Gold).toString(), this.txtDiamond.text = UserData.getInstance().getRes(TypeDefine.RES.Diamond).toString(), this.txtFightPower.text = UserData.getInstance().getFightPower().toString(), this.txtRank.text = MilitaryrankParser.GetInstance().getItemByField("id", UserData.getInstance().getMilitaryranktype()).name_l, Utils.getImgByUrl(MilitaryManager.GetInstance().getPicByRankLvl(UserData.getInstance().getMilitaryranktype()), this.imgRankIcon), UserData.getInstance().getCamp() && Utils.getImgByUrl(Path.GetCampPicUrl(UserData.getInstance().getCamp(), 3), this.imgCamp), this.simple.visible)
                for (var a = 1; 4 >= a; a++) this.simplePanelResTypes[a - 1] == TypeDefine.RES.Oil ? this["simple_resNum" + a].text = UserData.getInstance().getRes(this.simplePanelResTypes[a - 1]) + "/" + UserData.getInstance().getMaxOil() : this["simple_resNum" + a].text = UserData.getInstance().getRes(this.simplePanelResTypes[a - 1]);
            else if (this.simpleLevel.visible) {
                this.simpleLevel_level.text = Locales.get("labelLevel", UserData.getInstance().getPlayerLevel()),
                    this.simpleLevel_expBar.value = UserData.getInstance().getExpPercent();
                for (var a = 1; 3 >= a; a++) this.simpleLevelPanelResTypes[a - 1] == TypeDefine.RES.Oil ? this["simpleLevel_resNum" + a].text = UserData.getInstance().getRes(this.simpleLevelPanelResTypes[a - 1]) + "/" + UserData.getInstance().getMaxOil() : this["simpleLevel_resNum" + a].text = UserData.getInstance().getRes(this.simpleLevelPanelResTypes[a - 1])
            }
        },
        i.headImgClickHandler = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.RoleInfo)
        },
        i.clear = function() {
            UserData.getInstance().removeEventListener(GameEvent.UserData_Update, this.updateUserInfo, this)
        },
        e
}(eui.Component);
