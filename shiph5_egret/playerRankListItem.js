
var MissionItem = function(t) {
    function e(e) {
        t.call(this),
            this.iData = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/item/RenWu_1_Skin.exml"
            /*tpa=resource/eui_skins/item/RenWu_1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.txtName.text = this.iData.task_l,
                Utils.getImgByUrl(Path.missionUrl + this.iData.pictures, this.imgIcon),
                Utils.getImgByUrl(Path.item_sURL + this.iData.pictures_small, this.giftImg),
                this.txtRewardPoints.text = this.iData.socre;
            var t = ConfigData.getAllData("giftData");
            for (var e in t)
                if (Number(t[e].id) == Number(this.iData.giftid)) {
                    t = t[e];
                    break
                }
            this.txtItemNum.text = "x" + t.count;
            var a = MissionData.missionList[Number(this.iData.id) - 1],
                i = a ? a.finishedtimes : 0,
                n = a ? a.maxtimes : this.iData.count;
            this.txtCompleteRate.text = Locales.get("panel_paper_txt_show_comment_jindu") + i + "/" + n,
                this.goBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
                this.rewardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rewardHandler, this),
                a ? (a.finishedtimes >= a.maxtimes ? (this.rewardBtn.visible = !0, this.goBtn.visible = !1) : this.rewardBtn.visible = !1, a.hasgetreward ? (this.Taken.visible = !0, this.rewardBtn.visible = this.goBtn.visible = !1, this.txtCompleteRate.text = "") : this.Taken.visible = !1) : (this.Taken.visible = !1, this.rewardBtn.visible = !1)
        },
        i.rewardHandler = function(t) {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceGetTaskReward, {
                    index: Number(this.iData.id),
                    type: 0
                }),
                Plantform.getInstanceOf().mission(this.iData.id)
        },
        i.clickHandler = function(t) {
            WindowManager.getInstance().hideAll(),
                1 == this.iData.id ? MainWorldManager.instance.openPVESpecialWindow() : 2 == this.iData.id ? MainUI.instance.bottomUI.showPveByForce() : 3 == this.iData.id ? WindowManager.getInstance().show(WindowManager.windowType.ZhenbaPrecious) : 4 == this.iData.id ? UserData.getInstance().getPlayerLevel() < 15 ? Toast.launch(Locales.get("ui_main_function_scientific", 15)) : WindowManager.getInstance().show(WindowManager.windowType.PVP) : 5 == this.iData.id ? (RequestManager.GetInstance().enterCampaign(3, 0), WindowManager.getInstance().show(WindowManager.windowType.ZhenbaEctype)) : 6 == this.iData.id ? (RequestManager.GetInstance().enterCampaign(3, 0), WindowManager.getInstance().show(WindowManager.windowType.ZhenbaEctype, {
                    auto: !0,
                    index: 2
                })) : 7 == this.iData.id ? WindowManager.getInstance().show(WindowManager.windowType.DefenseOil) : 8 == this.iData.id ? GuildManager.getInstance().showGuildDonate() : 9 == this.iData.id ? WindowManager.getInstance().show(WindowManager.windowType.OilRefining) : 10 == this.iData.id ? WindowManager.getInstance().show(WindowManager.windowType.ShipManager) : 11 == this.iData.id ? RequestManager.GetInstance().enterCampBattle() : 12 == this.iData.id || 13 == this.iData.id || (14 == this.iData.id ? WindowManager.getInstance().show(WindowManager.windowType.QiJvTou) : 15 == this.iData.id || 16 == this.iData.id || (17 == this.iData.id ? WindowManager.getInstance().show(WindowManager.windowType.tansuo) : 18 == this.iData.id && FriendManager.getInstance().ShowFriendPanel()))
        },
        e
}(eui.Component);
