
var WindowChooseCamp = function(t) {
    function e() {
        t.call(this, !0),
            this.currCampID = 2,
            this.currHeadID = 1,
            this.currSex = 2,
            this.currPage = -1,
            this.sidePositionArr = [(new PosObject).setValue(89, 248), (new PosObject).setValue(248, 478), (new PosObject).setValue(406, 248)],
            this.rolePositionArr = [(new PosObject).setValue(302.5, 170), (new PosObject).setValue(121.5, 268), (new PosObject).setValue(302.5, 411), (new PosObject).setValue(483.5, 268)],
            this.sideItemInitCompleteNum = 0,
            this.roleItemInitCompleteNum = 0,
            this.isWindowInitComplete = !1,
            this.isCampInit = !1,
            this.skinName = "resource/eui_skins/xuanzezhenyingSkin.exml"
            /*tpa=resource/eui_skins/xuanzezhenyingSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.nameRandomTool = new NameRandomTool(0, "", this.roleNameLabel),
                this.sideItemInitCompleteNum = 0,
                this.roleItemInitCompleteNum = 0,
                this.isWindowInitComplete = !1,
                this.gongheSide = new SideItem,
                this.gongheSide.x = 89,
                this.gongheSide.y = 248,
                this.chooseSideGroup.addChild(this.gongheSide),
                this.ziyouSide = new SideItem,
                this.ziyouSide.x = 248,
                this.ziyouSide.y = 478,
                this.chooseSideGroup.addChild(this.ziyouSide),
                this.sideDes.text = Locales.get("panel_choosecamp_txt_iron"),
                this.rongyaoSide = new SideItem,
                this.rongyaoSide.x = 406,
                this.rongyaoSide.y = 248,
                this.chooseSideGroup.addChild(this.rongyaoSide),
                this.womanRole1 = new RoleItem,
                this.womanRole1.x = 302.5,
                this.womanRole1.y = 170,
                this.chooseRoleGroup.addChild(this.womanRole1),
                this.womanRole2 = new RoleItem,
                this.womanRole2.x = 121.5,
                this.womanRole2.y = 268,
                this.chooseRoleGroup.addChild(this.womanRole2),
                this.manRole1 = new RoleItem,
                this.manRole1.x = 302.5,
                this.manRole1.y = 411,
                this.manRole1.visible = !1,
                this.chooseRoleGroup.addChild(this.manRole1),
                this.manRole2 = new RoleItem,
                this.manRole2.x = 483.5,
                this.manRole2.y = 268,
                this.chooseRoleGroup.addChild(this.manRole2),
                this.currBigIcon = new eui.Image,
                this.currBigIcon.horizontalCenter = 0,
                this.currBigIcon.y = 310,
                this.currBigIcon.width = 214,
                this.currBigIcon.height = 309,
                this.chooseRoleGroup.addChild(this.currBigIcon),
                this.leftBtn = new eui.Button,
                this.leftBtn.skinName = "anniu_jiantou",
                this.leftBtn.y = 386,
                this.leftBtn.left = 18,
                this.addChild(this.leftBtn),
                this.rightBtn = new eui.Button,
                this.rightBtn.skinName = "anniu_jiantou",
                this.rightBtn.y = 386,
                this.rightBtn.right = 18,
                this.rightBtn.scaleX = -1,
                this.addChild(this.rightBtn),
                this.submitBtn = new eui.Button,
                this.submitBtn.skinName = "anniu_hongSkin",
                this.submitBtn.y = 884,
                this.submitBtn.horizontalCenter = 0,
                this.addChild(this.submitBtn),
                this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.submitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnEnter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.shaiziBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnCancle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.roleNameLabel.addEventListener(egret.Event.CHANGE, this.onTouchEndHandle, this),
                this.changeHeaddes1.textFlow = (new egret.HtmlTextParser).parser(Locales.get("changeHeaddes1")),
                this.changeHeaddes2.textFlow = (new egret.HtmlTextParser).parser(Locales.get("changeHeaddes2")),
                this.chooseSideDes.textFlow = (new egret.HtmlTextParser).parser(Locales.get("panel_choosecamp_txt_random_5")),
                this.chooseRoleNameDes.text = Locales.get("panel_choosecamp_txt_random_4"),
                this.isWindowInitComplete = !0
        },
        i.setData = function(t) {
            this.showWitchGroup(t)
        },
        i.clear = function() {
            AudioManager.instance.init()
        },
        i.showWitchGroup = function(t) {
            if (void 0 === t && (t = 0), MainUI.instance.changeTopMode(topUIMode["null"]), MainUI.instance.setBottomVisible(!1), this.currPage = t, 0 == t) {
                if (this._particle && this._particle.destroy(), this._particle = new ParticleDisplayObj(this.submitBtn, ParticleType.TrailingLight, ShapeType.Rectangle), this.isCampInit) return;
                this.sendGetWeakCamp(),
                    this.gongheSide.setSideInfo(!1, "justice_03_1", Locales.get("panel_choosecamp_btn_justice")),
                    this.ziyouSide.setSideInfo(!1, "", Locales.get("panel_choosecamp_btn_iron")),
                    this.ziyouSide.setBigSideImage("iron_03_1"),
                    this.rongyaoSide.setSideInfo(!1, "glory_03_1", Locales.get("panel_choosecamp_btn_glory")),
                    this.chooseSideGroup.visible = !0,
                    this.chooseRoleGroup.visible = !1,
                    this.submitBtn.label = Locales.get("panel_choosecamp_btn_red"),
                    this.titleLabel.text = Locales.get("ChooseCampWindowTitle_01"),
                    this.submitBtn.visible = !0
            } else 1 == t ? (this.chooseSideGroup.visible = !1, this.chooseRoleGroup.visible = !0, this.submitBtn.label = Locales.get("panel_chooseperson_btn_red"), this.titleLabel.text = Locales.get("ChooseCampWindowTitle_02"), this.chooseRoleHead.visible = !0, this.btnEnter.visible = !0, this.shaiziBtn.visible = !0, this.submitBtn.visible = !0, this.btnCancle.visible = !1, this.btnSure.visible = !1, this.changeHeadDesGroup.visible = !1) : 2 == t && (SUI.setTextureAsync(this.imgIcon, Path.item_sURL + "reset_head.png"), this.chooseSideGroup.visible = !1, this.chooseRoleGroup.visible = !0, this.titleLabel.text = Locales.get("panel_ShipsDetailpanelB_btn_rehead"), this.chooseRoleHead.visible = !1, this.btnEnter.visible = !1, this.shaiziBtn.visible = !1, this.submitBtn.visible = !1, this.btnCancle.visible = !0, this.btnCancle.label = Locales.get("alert_cancel"), this.btnSure.visible = !0, this.btnSure.label = Locales.get("alert_ok"), this.changeHeadDesGroup.visible = !0, this.currCampID = UserData.getInstance().getCamp(), this.currHeadID = 1, this.currBigIcon.source = "person-" + this.currCampID + "-1", this.womanRole1.setRoleInfo("Picture-" + this.currCampID + "-3"), this.womanRole2.setRoleInfo("Picture-" + this.currCampID + "-4"), this.manRole1.setRoleInfo("Picture-" + this.currCampID + "-1"), this.manRole2.setRoleInfo("Picture-" + this.currCampID + "-2"), this.setChangeHeadCardNum())
        },
        i.onTouchEndHandle = function(t) {
            switch (t.currentTarget) {
                case this.roleNameLabel:
                    var e = Utils.filterStr(this.roleNameLabel.text);
                    this.roleNameLabel.text = e[0]
            }
        },
        i.onTouchTapHandle = function(t) {
            switch (t.currentTarget) {
                case this.leftBtn:
                    console.log("点击了左箭头按钮" + this.currPage),
                        0 == this.currPage ? this.rollSideGroup(0) : (1 == this.currPage || 2 == this.currPage) && this.rollRoleGroup(0);
                    break;
                case this.rightBtn:
                    console.log("点击了右箭头按钮" + this.currPage),
                        0 == this.currPage ? this.rollSideGroup(1) : (1 == this.currPage || 2 == this.currPage) && this.rollRoleGroup(1);
                    break;
                case this.submitBtn:
                    console.log("点击了提交按钮"),
                        0 == this.currPage ? (this.currBigIcon.source = "person-" + this.currCampID + "-" + this.currHeadID, this.womanRole1.setRoleInfo("Picture-" + this.currCampID + "-3"), this.womanRole2.setRoleInfo("Picture-" + this.currCampID + "-4"), this.manRole1.setRoleInfo("Picture-" + this.currCampID + "-1"), this.manRole2.setRoleInfo("Picture-" + this.currCampID + "-2"), this.showWitchGroup(1)) : 1 == this.currPage && this.sendSetRole(this.currCampID, this.currHeadID, this.roleNameLabel.textDisplay.text);
                    break;
                case this.btnEnter:
                    console.log("点击了返回按钮"),
                        this.isCampInit = !1,
                        this.showWitchGroup(0);
                    break;
                case this.shaiziBtn:
                    console.log("点击了骰子按钮"),
                        this.nameRandomTool = new NameRandomTool(0, "", this.roleNameLabel, this.currSex);
                    break;
                case this.btnCancle:
                    console.log("点击了取消按钮"),
                        MainUI.instance.setBottomVisible(!0),
                        MainUI.instance.changeTopMode(topUIMode.normal),
                        MainUI.instance.changeTopMode(topUIMode.normal),
                        WindowManager.getInstance().hide(WindowManager.windowType.ChooseCamp);
                    break;
                case this.btnSure:
                    console.log("点击了确定按钮"),
                        100 * this.currCampID + this.currHeadID == UserData.getInstance().getHead() ? Toast.launch("所选头像与当前头像一致,请重新选择") : this.sendChangeRole(100 * this.currCampID + this.currHeadID)
            }
        },
        i.rollSideGroup = function(t) {
            var e;
            0 == t ? (egret.Tween.get(this.gongheSide).to({
                    x: this.sidePositionArr[1].x,
                    y: this.sidePositionArr[1].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["gongheSideTween", this.sidePositionArr[1].x, this.sidePositionArr[1].y]), egret.Tween.get(this.ziyouSide).to({
                    x: this.sidePositionArr[2].x,
                    y: this.sidePositionArr[2].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["ziyouSideTween", this.sidePositionArr[2].x, this.sidePositionArr[2].y]), egret.Tween.get(this.rongyaoSide).to({
                    x: this.sidePositionArr[0].x,
                    y: this.sidePositionArr[0].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["rongyaoSideTween", this.sidePositionArr[0].x, this.sidePositionArr[0].y]), e = this.sidePositionArr.shift(), this.sidePositionArr.push(e)) : 1 == t && (egret.Tween.get(this.gongheSide).to({
                    x: this.sidePositionArr[2].x,
                    y: this.sidePositionArr[2].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["gongheSideTween", this.sidePositionArr[2].x, this.sidePositionArr[2].y]), egret.Tween.get(this.ziyouSide).to({
                    x: this.sidePositionArr[0].x,
                    y: this.sidePositionArr[0].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["ziyouSideTween", this.sidePositionArr[0].x, this.sidePositionArr[0].y]), egret.Tween.get(this.rongyaoSide).to({
                    x: this.sidePositionArr[1].x,
                    y: this.sidePositionArr[1].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["rongyaoSideTween", this.sidePositionArr[1].x, this.sidePositionArr[1].y]), e = this.sidePositionArr.pop(), this.sidePositionArr.unshift(e))
        },
        i.rollRoleGroup = function(t) {
            302.5 == this.womanRole1.x && 411 == this.womanRole1.y && (this.womanRole1.visible = !0),
                302.5 == this.womanRole2.x && 411 == this.womanRole2.y && (this.womanRole2.visible = !0),
                302.5 == this.manRole1.x && 411 == this.manRole1.y && (this.manRole1.visible = !0),
                302.5 == this.manRole2.x && 411 == this.manRole2.y && (this.manRole2.visible = !0),
                this.currBigIcon.visible = !1;
            var e;
            0 == t ? (egret.Tween.get(this.womanRole1).to({
                    x: this.rolePositionArr[1].x,
                    y: this.rolePositionArr[1].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["womanRole1", this.rolePositionArr[1].x, this.rolePositionArr[1].y]), egret.Tween.get(this.womanRole2).to({
                    x: this.rolePositionArr[2].x,
                    y: this.rolePositionArr[2].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["womanRole2", this.rolePositionArr[2].x, this.rolePositionArr[2].y]), egret.Tween.get(this.manRole1).to({
                    x: this.rolePositionArr[3].x,
                    y: this.rolePositionArr[3].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["manRole1", this.rolePositionArr[3].x, this.rolePositionArr[3].y]), egret.Tween.get(this.manRole2).to({
                    x: this.rolePositionArr[0].x,
                    y: this.rolePositionArr[0].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["manRole2", this.rolePositionArr[0].x, this.rolePositionArr[0].y]), e = this.rolePositionArr.shift(), this.rolePositionArr.push(e)) : 1 == t && (egret.Tween.get(this.womanRole1).to({
                    x: this.rolePositionArr[3].x,
                    y: this.rolePositionArr[3].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["womanRole1", this.rolePositionArr[3].x, this.rolePositionArr[3].y]), egret.Tween.get(this.womanRole2).to({
                    x: this.rolePositionArr[0].x,
                    y: this.rolePositionArr[0].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["womanRole2", this.rolePositionArr[0].x, this.rolePositionArr[0].y]), egret.Tween.get(this.manRole1).to({
                    x: this.rolePositionArr[1].x,
                    y: this.rolePositionArr[1].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["manRole1", this.rolePositionArr[1].x, this.rolePositionArr[1].y]), egret.Tween.get(this.manRole2).to({
                    x: this.rolePositionArr[2].x,
                    y: this.rolePositionArr[2].y
                },
                300, egret.Ease.circIn).call(this.onTweenComplete, this, ["manRole2", this.rolePositionArr[2].x, this.rolePositionArr[2].y]), e = this.rolePositionArr.pop(), this.rolePositionArr.unshift(e))
        },
        i.onTweenComplete = function(t, e, a) {
            if (248 == e && 478 == a) switch (t) {
                case "gongheSideTween":
                    this.currCampID = 1,
                        this.sideDes.text = Locales.get("panel_choosecamp_txt_justice"),
                        this.gongheSide.setSideImage(""),
                        this.gongheSide.setBigSideImage("justice_03_1"),
                        this.ziyouSide.setSideImage("iron_03_1"),
                        this.ziyouSide.setBigSideImage(""),
                        this.rongyaoSide.setSideImage("glory_03_1"),
                        this.rongyaoSide.setBigSideImage("");
                    break;
                case "ziyouSideTween":
                    this.currCampID = 2,
                        this.sideDes.text = Locales.get("panel_choosecamp_txt_iron"),
                        this.gongheSide.setSideImage("justice_03_1"),
                        this.gongheSide.setBigSideImage(""),
                        this.ziyouSide.setSideImage(""),
                        this.ziyouSide.setBigSideImage("iron_03_1"),
                        this.rongyaoSide.setSideImage("glory_03_1"),
                        this.rongyaoSide.setBigSideImage("");
                    break;
                case "rongyaoSideTween":
                    this.currCampID = 3,
                        this.sideDes.text = Locales.get("panel_choosecamp_txt_glory"),
                        this.gongheSide.setSideImage("justice_03_1"),
                        this.gongheSide.setBigSideImage(""),
                        this.ziyouSide.setSideImage("iron_03_1"),
                        this.ziyouSide.setBigSideImage(""),
                        this.rongyaoSide.setSideImage(""),
                        this.rongyaoSide.setBigSideImage("glory_03_1")
            } else if (302.5 == e && 411 == a) switch (t) {
                case "womanRole1":
                    this.currHeadID = 3,
                        this.currSex = 3,
                        this.currBigIcon.source = "person-" + this.currCampID + "-3",
                        this.womanRole1.visible = !1,
                        this.womanRole2.visible = !0,
                        this.manRole1.visible = !0,
                        this.manRole2.visible = !0,
                        this.currBigIcon.visible = !0;
                    break;
                case "womanRole2":
                    this.currHeadID = 4,
                        this.currSex = 3,
                        this.currBigIcon.source = "person-" + this.currCampID + "-4",
                        this.womanRole2.visible = !1,
                        this.womanRole1.visible = !0,
                        this.manRole1.visible = !0,
                        this.manRole2.visible = !0,
                        this.currBigIcon.visible = !0;
                    break;
                case "manRole1":
                    this.currHeadID = 1,
                        this.currSex = 2,
                        this.currBigIcon.source = "person-" + this.currCampID + "-1",
                        this.manRole1.visible = !1,
                        this.womanRole2.visible = !0,
                        this.womanRole1.visible = !0,
                        this.manRole2.visible = !0,
                        this.currBigIcon.visible = !0;
                    break;
                case "manRole2":
                    this.currHeadID = 2,
                        this.currSex = 2,
                        this.currBigIcon.source = "person-" + this.currCampID + "-2",
                        this.manRole2.visible = !1,
                        this.womanRole2.visible = !0,
                        this.womanRole1.visible = !0,
                        this.manRole1.visible = !0,
                        this.currBigIcon.visible = !0
            }
        },
        i.sendSetRole = function(t, e, a, i) {
            void 0 === i && (i = !1);
            var n = Transport.getPkg(ProtocolMgr.ID_DceSetRole);
            n.name = a,
                n.head = 100 * t + e,
                n.camp = t,
                n.byweak = i,
                Transport.instance.send(n)
        },
        i.sendGetWeakCamp = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceGetWeakCamp);
            Transport.instance.send(t)
        },
        i.sendChangeRole = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceChangeRole);
            e.headid = t,
                Transport.instance.send(e)
        },
        i.getChangeRoleHeadResult = function(t) {
            console.log("更换头像结果:" + t.res),
                console.log("更换头像后的头像ID:" + t.headid),
                0 == t.res ? (Toast.launch("更换头像成功"), UserData.getInstance().setHead(t.headid), MainUI.instance.changeTopMode(topUIMode.normal), MainUI.instance.changeTopMode(topUIMode.normal), MainUI.instance.setBottomVisible(!0), WindowManager.getInstance().hide(WindowManager.windowType.ChooseCamp)) : 1 == t.res ? Toast.launch("错误") : 2 == t.res ? Toast.launch("钻石不够") : 3 == t.res && Toast.launch("未知异常")
        },
        i.getWeakCamp = function(t) {
            switch (this.isCampInit = !0, console.log("推荐阵营ID:" + t.camp), t.camp) {
                case 1:
                    this.gongheSide.setSideRec(!0),
                        this.ziyouSide.setSideRec(!1),
                        this.rongyaoSide.setSideRec(!1),
                        this.gongheSide.x = 248,
                        this.gongheSide.y = 478,
                        this.ziyouSide.x = 406,
                        this.ziyouSide.y = 248,
                        this.rongyaoSide.x = 89,
                        this.rongyaoSide.y = 248,
                        this.sideDes.text = Locales.get("panel_choosecamp_txt_justice"),
                        this.sidePositionArr = [(new PosObject).setValue(248, 478), (new PosObject).setValue(406, 248), (new PosObject).setValue(89, 248)],
                        this.currCampID = 1;
                    break;
                case 2:
                    this.gongheSide.setSideRec(!1),
                        this.ziyouSide.setSideRec(!0),
                        this.rongyaoSide.setSideRec(!1),
                        this.gongheSide.x = 89,
                        this.gongheSide.y = 248,
                        this.ziyouSide.x = 248,
                        this.ziyouSide.y = 478,
                        this.rongyaoSide.x = 406,
                        this.rongyaoSide.y = 248,
                        this.sideDes.text = Locales.get("panel_choosecamp_txt_iron"),
                        this.sidePositionArr = [(new PosObject).setValue(89, 248), (new PosObject).setValue(248, 478), (new PosObject).setValue(406, 248)],
                        this.currCampID = 2;
                    break;
                case 3:
                    this.gongheSide.setSideRec(!1),
                        this.ziyouSide.setSideRec(!1),
                        this.rongyaoSide.setSideRec(!0),
                        this.gongheSide.x = 406,
                        this.gongheSide.y = 248,
                        this.ziyouSide.x = 89,
                        this.ziyouSide.y = 248,
                        this.rongyaoSide.x = 248,
                        this.rongyaoSide.y = 478,
                        this.sideDes.text = Locales.get("panel_choosecamp_txt_glory"),
                        this.sidePositionArr = [(new PosObject).setValue(406, 248), (new PosObject).setValue(89, 248), (new PosObject).setValue(248, 478)],
                        this.currCampID = 3
            }
        },
        i.getSetRoleResult = function(t) {
            switch (t.res) {
                case 0:
                    console.log("成功"),
                        UserData.getInstance().setUserName(t.name),
                        UserData.getInstance().setHead(t.head),
                        UserData.getInstance().setCamp(t.camp),
                        MainUI.instance.changeTopMode(topUIMode.normal),
                        MainUI.instance.changeTopMode(topUIMode.normal),
                        MainUI.instance.setBottomVisible(!0),
                        WindowManager.getInstance().hide(WindowManager.windowType.ChooseCamp),
                        GuideManager.initStep();
                    break;
                case 1:
                    console.log("已设置"),
                        Toast.launch("名字已设置");
                    break;
                case 2:
                    console.log("名字重复"),
                        Toast.launch("名字重复")
            }
        },
        i.setChangeHeadCardNum = function() {
            for (var t = ItemsManager.getInstance().getListByType(0), e = 0; e < t.length; e++) {
                var a = t[e];
                if (1287 == a.id) {
                    this.txtNum.text = "x" + a.count,
                        a.count > 0 ? this.txtNum.textColor = 65280 : this.txtNum.textColor = 16711680;
                    break
                }
            }
        },
        e
}(WindowBase);
