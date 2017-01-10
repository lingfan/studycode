
var WindowMedal = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/JunGongSkin.exml"
            /*tpa=resource/eui_skins/JunGongSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            GuideManager.jungongGuideBool || GuideManager.nextStep(121),
                this.oldData = null,
                this.newData = null,
                this.initConfig();
            var t = Transport.getPkg(ProtocolMgr.ID_DceMedalData);
            Transport.instance.send(t),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                MainUI.instance.setBottomVisible(!1),
                this.initImg(),
                this.initBtn(),
                this.initLabel(),
                this.initComplete()
        },
        i.initImg = function() {
            this.imgArr = [new eui.Image, new eui.Image, new eui.Image, new eui.Image],
                this.pointArr = [{
                        x: -74,
                        y: 350,
                        width: 52,
                        height: 124
                    },
                    {
                        x: 96,
                        y: 350,
                        width: 52,
                        height: 124
                    },
                    {
                        x: 284,
                        y: 350,
                        width: 78,
                        height: 186
                    },
                    {
                        x: 473,
                        y: 350,
                        width: 52,
                        height: 124
                    },
                    {
                        x: 656,
                        y: 350,
                        width: 52,
                        height: 124
                    }
                ];
            for (var t = 0; t < this.imgArr.length; t++) this.imgArr[t].x = this.pointArr[t + 1].x,
                this.imgArr[t].y = this.pointArr[t + 1].y,
                this.group.addChild(this.imgArr[t])
        },
        i.initBtn = function() {
            WindowManager.getInstance().showWaiting(),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeClick, this),
                this.btnUpgrade.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upGradeClick, this),
                this.btnUpgradeAll.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upGradeAllClick, this)
        },
        i.processMsg = function(t) {
            this.oldData || (this.oldData = {},
                    this.oldData.juniorstar = t.juniorstar, this.oldData.seniorstar = t.seniorstar, this.oldData.medal = t.medal),
                this.newData = {},
                this.newData.juniorstar = t.juniorstar,
                this.newData.seniorstar = t.seniorstar,
                this.newData.medal = t.medal,
                this.initComplete()
        },
        i.initLabel = function() {
            this.txtCurrentProperty.text = "",
                this.txtCostRes.text = "",
                this.txtCostCoin.text = "",
                this.txtRes1.text = "",
                this.txtRes2.text = ""
        },
        i.initConfig = function() {
            var t = this;
            this.itemArr || ConfigData.preLoadDats(["decoration"], [DecorationParser],
                function() {
                    t.itemArr = DecorationParser.GetInstance().getDataArr(),
                        t.initComplete()
                })
        },
        i.initComplete = function() {
            if (this.itemArr && this.newData) {
                this.newData.huogong = 0,
                    this.newData.baogong = 0,
                    this.newData.huofang = 0,
                    this.newData.baofang = 0,
                    this.newData.shengming = 0,
                    this.newData.mingzhong = 0,
                    this.newData.shanbi = 0,
                    this.newData.baoji = 0;
                for (var t = 0; t < this.newData.medal; t++) switch (this.itemArr[t].decorationType) {
                    case 1:
                        this.newData.huogong = this.newData.huogong + this.itemArr[t].buffValue;
                        break;
                    case 2:
                        this.newData.baogong = this.newData.baogong + this.itemArr[t].buffValue;
                        break;
                    case 3:
                        this.newData.huofang = this.newData.huofang + this.itemArr[t].buffValue;
                        break;
                    case 4:
                        this.newData.baofang = this.newData.baofang + this.itemArr[t].buffValue;
                        break;
                    case 5:
                        this.newData.shengming = this.newData.shengming + this.itemArr[t].buffValue;
                        break;
                    case 6:
                        this.newData.mingzhong = this.newData.mingzhong + this.itemArr[t].buffValue;
                        break;
                    case 7:
                        this.newData.shanbi = this.newData.shanbi + this.itemArr[t].buffValue;
                        break;
                    case 8:
                        this.newData.baoji = this.newData.baoji + this.itemArr[t].buffValue
                }
                this.oldData.medal == this.newData.medal ? (this.newData.next = this.itemArr[this.newData.medal], this.newData.current = this.itemArr[this.newData.medal - 1] ? this.itemArr[this.newData.medal - 1] : null, this.newData.next2 = this.itemArr[this.newData.medal + 1] ? this.itemArr[this.newData.medal + 1] : null, this.newData.next3 = this.itemArr[this.newData.medal + 2] ? this.itemArr[this.newData.medal + 2] : null, this.refurbish(!1)) : (this.newData.next = this.itemArr[this.newData.medal - 1], this.newData.current = this.itemArr[this.newData.medal - 2] ? this.itemArr[this.newData.medal - 2] : null, this.newData.next2 = this.itemArr[this.newData.medal] ? this.itemArr[this.newData.medal] : null, this.newData.next3 = this.itemArr[this.newData.medal + 1] ? this.itemArr[this.newData.medal + 1] : null, this.refurbish(!0))
            }
        },
        i.refurbish = function(t) {
            if (void 0 === t && (t = !1), WindowManager.getInstance().hideWaiting(), t) this.showMedal();
            else {
                switch (this.txtProperty1.text = this.newData.shengming, this.newData.shengming > 0 ? this.txtProperty1.textColor = 65280 : this.txtProperty1.textColor = 16777215, this.txtProperty2.text = this.newData.baoji / 10 + "%", this.newData.baoji > 0 ? this.txtProperty2.textColor = 65280 : this.txtProperty2.textColor = 16777215, this.txtProperty3.text = this.newData.mingzhong / 10 + "%", this.newData.mingzhong > 0 ? this.txtProperty3.textColor = 65280 : this.txtProperty3.textColor = 16777215, this.txtProperty4.text = this.newData.shanbi / 10 + "%", this.newData.shanbi > 0 ? this.txtProperty4.textColor = 65280 : this.txtProperty4.textColor = 16777215, this.txtProperty5.text = this.newData.huogong, this.newData.huogong > 0 ? this.txtProperty5.textColor = 65280 : this.txtProperty5.textColor = 16777215, this.txtProperty6.text = this.newData.baogong, this.newData.baogong > 0 ? this.txtProperty6.textColor = 65280 : this.txtProperty6.textColor = 16777215, this.txtProperty7.text = this.newData.huofang, this.newData.huofang > 0 ? this.txtProperty7.textColor = 65280 : this.txtProperty7.textColor = 16777215, this.txtProperty8.text = this.newData.baofang, this.newData.baofang > 0 ? this.txtProperty8.textColor = 65280 : this.txtProperty8.textColor = 16777215, this.newData.next.decorationType) {
                    case 1:
                        this.txtCurrentProperty.text = "火炮攻击: + ",
                            this.txtCurrentProperty0.text = this.newData.next.buffValue;
                        break;
                    case 2:
                        this.txtCurrentProperty.text = "爆破攻击: + ",
                            this.txtCurrentProperty0.text = this.newData.next.buffValue;
                        break;
                    case 3:
                        this.txtCurrentProperty.text = "火炮防御: + ",
                            this.txtCurrentProperty0.text = this.newData.next.buffValue;
                        break;
                    case 4:
                        this.txtCurrentProperty.text = "爆破防御: + ",
                            this.txtCurrentProperty0.text = this.newData.next.buffValue;
                        break;
                    case 5:
                        this.txtCurrentProperty.text = "生命: + ",
                            this.txtCurrentProperty0.text = this.newData.next.buffValue;
                        break;
                    case 6:
                        this.txtCurrentProperty.text = "命中: + ",
                            this.txtCurrentProperty0.text = this.newData.next.buffValue / 10 + "%";
                        break;
                    case 7:
                        this.txtCurrentProperty.text = "闪避: + ",
                            this.txtCurrentProperty0.text = this.newData.next.buffValue / 10 + "%";
                        break;
                    case 8:
                        this.txtCurrentProperty.text = "暴击: + ",
                            this.txtCurrentProperty0.text = this.newData.next.buffValue / 10 + "%"
                }
                this.txtCostRes.text = this.newData.next.costStars,
                    this.txtCostCoin.text = this.newData.next.costGold,
                    UserData.getInstance().getRes(TypeDefine.RES.Gold) < this.newData.next.costGold ? this.txtCostCoin.textColor = 16711680 : this.txtCostCoin.textColor = 16777215,
                    this.txtRes1.text = this.newData.juniorstar,
                    this.txtRes2.text = this.newData.seniorstar,
                    1 == this.newData.next.costType ? (this.imgCostResIcon.source = RES.getRes("iconyinxing_png"), this.newData.juniorstar < this.newData.next.costStars ? this.txtCostRes.textColor = 16711680 : this.txtCostRes.textColor = 16777215) : (this.imgCostResIcon.source = RES.getRes("iconjinxing_png"), this.newData.seniorstar < this.newData.next.costStars ? this.txtCostRes.textColor = 16711680 : this.txtCostRes.textColor = 16777215),
                    this.newData.current && (Utils.getImgByUrl("resource/assets/Icon/deciration/" + this.newData.current.icon, this.imgArr[0]), this.imgArr[0].width = 52, this.imgArr[0].height = 124),
                    this.newData.next && (Utils.getImgByUrl("resource/assets/Icon/deciration/" + this.newData.next.icon, this.imgArr[1]), this.imgArr[1].width = 78, this.imgArr[1].height = 186),
                    this.newData.next2 && (Utils.getImgByUrl("resource/assets/Icon/deciration/" + this.newData.next2.icon, this.imgArr[2]), this.imgArr[2].width = 52, this.imgArr[2].height = 124)
            }
        },
        i.showMedal = function() {
            this.newData.next3 && (Utils.getImgByUrl("resource/assets/Icon/deciration/" + this.newData.next3.icon, this.imgArr[3]), this.imgArr[3].width = 52, this.imgArr[3].height = 124),
                this.TweenNum = 0;
            for (var t = [], e = 0; e < this.imgArr.length; e++)
                if (this.pointArr[e]) {
                    this.TweenNum++;
                    var a = egret.Tween.get(this.imgArr[e]);
                    t.push(a)
                }
            for (var i = 0; i < t.length; i++) t[i].to({
                    x: this.pointArr[i].x,
                    y: this.pointArr[i].y,
                    width: this.pointArr[i].width,
                    height: this.pointArr[i].height
                },
                500).call(this.tweenComplete, this)
        },
        i.tweenComplete = function() {
            if (this.TweenNum--, 0 == this.TweenNum) {
                switch (this.group.removeChild(this.imgArr[0]), this.imgArr.shift(), this.imgArr.push(new eui.Image), this.imgArr[this.imgArr.length - 1].x = this.pointArr[this.imgArr.length].x, this.imgArr[this.imgArr.length - 1].y = this.pointArr[this.imgArr.length].y, this.group.addChild(this.imgArr[this.imgArr.length - 1]), this.txtProperty1.text = this.newData.shengming, this.newData.shengming > 0 ? this.txtProperty1.textColor = 65280 : this.txtProperty1.textColor = 16777215, this.txtProperty2.text = this.newData.baoji / 10 + "%", this.newData.baoji > 0 ? this.txtProperty2.textColor = 65280 : this.txtProperty2.textColor = 16777215, this.txtProperty3.text = this.newData.mingzhong / 10 + "%", this.newData.mingzhong > 0 ? this.txtProperty3.textColor = 65280 : this.txtProperty3.textColor = 16777215, this.txtProperty4.text = this.newData.shanbi / 10 + "%", this.newData.shanbi > 0 ? this.txtProperty4.textColor = 65280 : this.txtProperty4.textColor = 16777215, this.txtProperty5.text = this.newData.huogong, this.newData.huogong > 0 ? this.txtProperty5.textColor = 65280 : this.txtProperty5.textColor = 16777215, this.txtProperty6.text = this.newData.baogong, this.newData.baogong > 0 ? this.txtProperty6.textColor = 65280 : this.txtProperty6.textColor = 16777215, this.txtProperty7.text = this.newData.huofang, this.newData.huofang > 0 ? this.txtProperty7.textColor = 65280 : this.txtProperty7.textColor = 16777215, this.txtProperty8.text = this.newData.baofang, this.newData.baofang > 0 ? this.txtProperty8.textColor = 65280 : this.txtProperty8.textColor = 16777215, this.newData.next2.decorationType) {
                    case 1:
                        this.txtCurrentProperty.text = "火炮攻击: + ",
                            this.txtCurrentProperty0.text = this.newData.next2.buffValue;
                        break;
                    case 2:
                        this.txtCurrentProperty.text = "爆破攻击: + ",
                            this.txtCurrentProperty0.text = this.newData.next2.buffValue;
                        break;
                    case 3:
                        this.txtCurrentProperty.text = "火炮防御: + ",
                            this.txtCurrentProperty0.text = this.newData.next2.buffValue;
                        break;
                    case 4:
                        this.txtCurrentProperty.text = "爆破防御: + ",
                            this.txtCurrentProperty0.text = this.newData.next2.buffValue;
                        break;
                    case 5:
                        this.txtCurrentProperty.text = "生命: + ",
                            this.txtCurrentProperty0.text = this.newData.next2.buffValue;
                        break;
                    case 6:
                        this.txtCurrentProperty.text = "命中: + ",
                            this.txtCurrentProperty0.text = this.newData.next2.buffValue / 10 + "%";
                        break;
                    case 7:
                        this.txtCurrentProperty.text = "闪避: + ",
                            this.txtCurrentProperty0.text = this.newData.next2.buffValue / 10 + "%";
                        break;
                    case 8:
                        this.txtCurrentProperty.text = "暴击: + ",
                            this.txtCurrentProperty0.text = this.newData.next2.buffValue / 10 + "%"
                }
                this.txtCostRes.text = this.newData.next2.costStars,
                    this.txtCostCoin.text = this.newData.next2.costGold,
                    UserData.getInstance().getRes(TypeDefine.RES.Gold) < this.newData.next2.costGold ? this.txtCostCoin.textColor = 16711680 : this.txtCostCoin.textColor = 16777215,
                    this.txtRes1.text = this.newData.juniorstar,
                    this.txtRes2.text = this.newData.seniorstar,
                    1 == this.newData.next2.costType ? (this.imgCostResIcon.source = RES.getRes("iconyinxing_png"), this.newData.juniorstar < this.newData.next2.costStars ? this.txtCostRes.textColor = 16711680 : this.txtCostRes.textColor = 16777215) : (this.imgCostResIcon.source = RES.getRes("iconjinxing_png"), this.newData.seniorstar < this.newData.next2.costStars ? this.txtCostRes.textColor = 16711680 : this.txtCostRes.textColor = 16777215),
                    this.oldData.medal = this.newData.medal,
                    this.newData = null
            }
        },
        i.allUpdate = function() {
            this.newData && this.newData.current && (Utils.getImgByUrl("resource/assets/Icon/deciration/" + this.newData.current.icon, this.imgArr[0]), this.imgArr[0].width = 52, this.imgArr[0].height = 124),
                this.newData && this.newData.next && (Utils.getImgByUrl("resource/assets/Icon/deciration/" + this.newData.next.icon, this.imgArr[1]), this.imgArr[1].width = 78, this.imgArr[1].height = 186),
                this.newData && this.newData.next2 && (Utils.getImgByUrl("resource/assets/Icon/deciration/" + this.newData.next2.icon, this.imgArr[2]), this.imgArr[2].width = 52, this.imgArr[2].height = 124)
        },
        i.closeClick = function(t) {
            WindowManager.getInstance().hide(WindowManager.windowType.Medal)
        },
        i.upGradeClick = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGetMedal);
            e.all = 0,
                Transport.instance.send(e),
                122 == GuideManager.step && GuideManager.nextStep()
        },
        i.upGradeAllClick = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGetMedal);
            e.all = 1,
                Transport.instance.send(e)
        },
        i.clear = function() {
            this.oldData = null,
                this.newData = null,
                MainUI.instance.setBottomVisible(!0)
        },
        e
}(WindowBase);
