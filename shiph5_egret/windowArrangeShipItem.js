
var WindowRoleInfo = function(t) {
    function e() {
        t.call(this, !0),
            this.myse = 888,
            this.skinName = "resource/eui_skins/juesexinxiSkin.exml"
            /*tpa=resource/eui_skins/juesexinxiSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.setBtnGroup.visible = !1,
                this.initLable(),
                this.initButton(),
                this.RoleInfoUpdate(),
                UserData.getInstance().addEventListener(GameEvent.UserData_Update, this.updateHandler, this)
        },
        i.updateHandler = function(t) {
            this.RoleInfoUpdate()
        },
        i.initLable = function() {
            this.roleInfoTxt.text = "角色信息",
                this.roleNameTxt.text = "玩家的名字",
                this.rolePowerTxt.text = "9999999",
                this.vipLevelTxt.text = "15",
                this.roleLevelTxt.text = "998级",
                this.experienceNumTxt.text = "999/100000",
                this.expProgressBar.value = 0,
                this.expProgressBar.slideDuration = 2e3,
                this.battleArrayTxt.text = "阵 容:",
                this.battleArrayNumTxt.text = "8/8",
                this.speedTxt.text = "速 度:",
                this.speedNumTxt.text = "777",
                this.campTxt.text = "阵 营:",
                this.campValueTxt.text = "秩 序",
                this.militaryRankTxt.text = "军 衔:",
                this.militaryRankValueTxt.text = "上校",
                this.diamondTxt.text = "钻 石:",
                this.diamondNumTxt.text = "888",
                this.goldCoinTxt.text = "金 币：",
                this.goldCoinNumTxt.text = "6666",
                this.technologyTxt.text = "科技点：",
                this.technologyNumTxt.text = "222",
                this.exploitTxt.text = "功勋点：",
                this.exploitNumTxt.text = "00000",
                this.iolTxt.text = "石 油:",
                this.iolNumTxt.text = "5555",
                this.iolRcoverTxt.text = "原油恢复时间：",
                this.iolRecoverTimeTxt.text = "00:00:00",
                this.iolAllRecoverTxt.text = "原油全部回满：",
                this.iolAllRecoverTimeTxt.text = "00:00:00",
                this.findJewelTxt.text = "寻宝令：",
                this.findJewelNumTxt.text = "3333",
                this.findJewelRecoverTxt.text = "寻宝令恢复时间：",
                this.findJewelRecoverTimeTxt.text = "00:00:00",
                this.findJewelRecoverTxt1.text = "寻宝令全部回满：",
                this.findJewelRecoverTimeTxt1.text = "已回满",
                this.uidTxt.text = "账号ID：5256223265401"
        },
        i.initButton = function() {
            this.setBtn.label = "设置",
                this.okBtn.label = "确定",
                this.changeNameBtn.label = "角色更名",
                this.changeHeadBtn.label = "更换头像",
                this.setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClickHandler, this),
                this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClickHandler, this),
                this.changeNameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClickHandler, this),
                this.changeHeadBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClickHandler, this),
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClickHandler, this)
        },
        i.buttonClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.setBtn:
                    this.setBtnGroup.visible = !this.setBtnGroup.visible;
                    break;
                case this.okBtn:
                    WindowManager.getInstance().hide(WindowManager.windowType.RoleInfo),
                        Log.s_logToScreen && WindowManager.getInstance().show(WindowManager.windowType.log, Log.s_logs.join("\n"));
                    break;
                case this.changeNameBtn:
                    var e = {};
                    e.type = 0,
                        WindowManager.getInstance().show(WindowManager.windowType.NameChange, e),
                        this.setBtnGroup.visible = !1;
                    break;
                case this.changeHeadBtn:
                    this.setBtnGroup.visible = !1,
                        WindowManager.getInstance().hide(WindowManager.windowType.RoleInfo),
                        WindowManager.getInstance().show(WindowManager.windowType.ChooseCamp, 2);
                    break;
                case this.closeBtn:
                    WindowManager.getInstance().hide(WindowManager.windowType.RoleInfo)
            }
        },
        i.RoleInfoUpdate = function() {
            var t = this;
            this.roleNameTxt.text = UserData.getInstance().getUserName(),
                this.rolePowerTxt.text = UserData.getInstance().getFightPower().toString(),
                this.vipLevelTxt.text = UserData.getInstance().getVipLevel().toString(),
                this.roleLevelTxt.text = UserData.getInstance().getPlayerLevel().toString() + "级";
            var e = UserData.getInstance().getExperience(),
                a = UserData.getInstance().getNextLevelNeedExp();
            this.experienceNumTxt.text = e + "/" + a,
                this.expProgressBar.value = 1,
                this.expProgressBar.value = e / a * 100;
            for (var i = 0,
                    n = 0,
                    s = 0; s < ShipManager.getInstance().soldierList.length; s++) "0" != ShipManager.getInstance().soldierList[s].shipid && n++;
            for (var r in ShipManager.getInstance().shipList)
                for (var o in ShipManager.getInstance().soldierList) ShipManager.getInstance().shipList[r].id == ShipManager.getInstance().soldierList[o].shipid.toString() && (i += ShipManager.getInstance().shipList[r].speed);
            this.battleArrayNumTxt.text = n.toString() + "/" + (UserData.getInstance().getCurPosNum() > 8 ? 8 : UserData.getInstance().getCurPosNum().toString()),
                this.speedTxt.text = "速 度:",
                this.speedNumTxt.text = i.toString(),
                Utils.getImgByUrl(Path.GetHeadPicUrl(UserData.getInstance().getHead(), 0), this.headImg);
            var l = UserData.getInstance().getCamp();
            if (1 == l ? this.campValueTxt.text = "正义" : 2 == l ? this.campValueTxt.text = "铁血" : this.campValueTxt.text = "荣耀", Utils.getImgByUrl(Path.GetCampPicUrl(l, 3), this.campImg), this.militaryRankValueTxt.text = MilitaryrankParser.GetInstance().getItemByField("id", UserData.getInstance().getMilitaryranktype()).name_l, Utils.getImgByUrl(MilitaryManager.GetInstance().getPicByRankLvl(UserData.getInstance().getMilitaryranktype()), this.militaryRankImg), this.diamondNumTxt.text = UserData.getInstance()._res[TypeDefine.RES.Diamond], this.goldCoinNumTxt.text = UserData.getInstance()._res[TypeDefine.RES.Gold], this.technologyNumTxt.text = UserData.getInstance().getTechpoints().toString(), this.exploitNumTxt.text = UserData.getInstance().getExploit().toString(), this.iolNumTxt.text = UserData.getInstance()._res[TypeDefine.RES.Oil], this.iolRcoverTxt.text = "原油恢复时间：", this.iolAllRecoverTxt.text = "原油全部回满：", UserData.getInstance()._res[TypeDefine.RES.Oil] >= UserData.getInstance().getMaxOil()) this.iolRecoverTimeTxt.text = "00:00:00",
                this.iolAllRecoverTimeTxt.text = "已回满",
                this.iolAllRecoverTimeTxt.textColor = 65280;
            else {
                var h = UserData.getInstance().getMaxOil() - UserData.getInstance()._res[TypeDefine.RES.Oil];
                UserData.getInstance().getOldServerTime() / 1e3 - UserData.getInstance().getLastRecoverTimeOil() < 0 ? this.oilTime = 300 : (this.oilTime = 300 - (UserData.getInstance().getOldServerTime() / 1e3 - UserData.getInstance().getLastRecoverTimeOil()), this.oilAllTime = 300 * h - (UserData.getInstance().getOldServerTime() / 1e3 - UserData.getInstance().getLastRecoverTimeOil())),
                    this.tickOilIndex = GameTick.registerHandler(function() {
                            t.oilTickUpdate()
                        },
                        1e3),
                    this.iolRecoverTimeTxt.text = GlobalFunction.getHMSBySecond(this.oilTime),
                    this.iolAllRecoverTimeTxt.text = GlobalFunction.getHMSBySecond(this.oilAllTime)
            }
            if (this.findJewelTxt.text = "寻宝令：", this.findJewelNumTxt.text = UserData.getInstance()._res[TypeDefine.RES.XunBaoLing].toString(), this.findJewelRecoverTxt.text = "寻宝令恢复时间：", this.findJewelRecoverTimeTxt.text = "00:00:00", this.findJewelRecoverTxt1.text = "寻宝令全部回满：", this.findJewelRecoverTimeTxt1.text = "已回满", UserData.getInstance()._res[TypeDefine.RES.XunBaoLing] >= UserData.getInstance().getMaxXunBaoLing()) this.findJewelRecoverTimeTxt.text = "00:00:00",
                this.findJewelRecoverTimeTxt1.text = "已回满",
                this.findJewelRecoverTimeTxt1.textColor = 65280;
            else {
                var c = UserData.getInstance().getMaxXunBaoLing() - UserData.getInstance()._res[TypeDefine.RES.XunBaoLing];
                UserData.getInstance().getOldServerTime() / 1e3 - UserData.getInstance().getLastelecrecoverytime() < 0 ? this.jewelTime = 1200 : (this.jewelTime = 1200 - (UserData.getInstance().getOldServerTime() / 1e3 - UserData.getInstance().getLastelecrecoverytime()), this.jewelAllTime = 1200 * c - (UserData.getInstance().getOldServerTime() / 1e3 - UserData.getInstance().getLastelecrecoverytime())),
                    this.tickJewelIndex = GameTick.registerHandler(function() {
                            t.jewelTickUpdate()
                        },
                        1e3),
                    this.findJewelRecoverTimeTxt.text = GlobalFunction.getHMSBySecond(this.jewelTime),
                    this.findJewelRecoverTimeTxt1.text = GlobalFunction.getHMSBySecond(this.jewelAllTime)
            }
            this.uidTxt.text = "账号ID：" + GameData.uid
        },
        i.oilTickUpdate = function() {
            if (this.oilTime > 0) this.oilTime--,
                this.iolRecoverTimeTxt.text = GlobalFunction.getHMSBySecond(this.oilTime);
            else {
                var t = parseInt(this.iolNumTxt.text);
                if (t < UserData.getInstance().getMaxOil()) {
                    var e = Transport.getPkg(ProtocolMgr.ID_DceUpdateOil);
                    Transport.instance.send(e),
                        this.oilTime = 300
                } else GameTick.removeHandler(this.tickOilIndex),
                    this.tickOilIndex = 0
            }
            this.oilAllTime > 0 ? (this.oilAllTime--, this.iolAllRecoverTimeTxt.text = GlobalFunction.getHMSBySecond(this.oilAllTime)) : (this.iolAllRecoverTimeTxt.text = "已回满", this.iolAllRecoverTimeTxt.textColor = 65280)
        },
        i.jewelTickUpdate = function() {
            if (this.jewelTime > 0) this.jewelTime--,
                this.findJewelRecoverTimeTxt.text = GlobalFunction.getHMSBySecond(this.jewelTime);
            else {
                var t = parseInt(this.findJewelNumTxt.text);
                if (t < UserData.getInstance().getMaxXunBaoLing()) {
                    var e = Transport.getPkg(ProtocolMgr.ID_DceUpdateElectric);
                    Transport.instance.send(e),
                        this.jewelTime = 1200
                } else GameTick.removeHandler(this.tickJewelIndex),
                    this.tickJewelIndex = 0
            }
            this.jewelAllTime > 0 ? (this.jewelAllTime--, this.findJewelRecoverTimeTxt1.text = GlobalFunction.getHMSBySecond(this.jewelAllTime)) : (this.findJewelRecoverTimeTxt1.text = "已回满", this.findJewelRecoverTimeTxt1.textColor = 65280)
        },
        i.clear = function() {
            UserData.getInstance().removeEventListener(GameEvent.UserData_Update, this.updateHandler, this)
        },
        e
}(WindowBase);
