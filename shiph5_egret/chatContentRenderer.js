
var WindowChat = function(t) {
    function e() {
        t.call(this, !0),
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/LiaoTianSkin.exml"
            /*tpa=resource/eui_skins/LiaoTianSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.chatType = [0, 3, 1, 2, 5],
                this.scroller.viewport = this.list,
                this.myEdit.prompt = "最多输入20个字",
                this.friendEdit.prompt = "玩家名字",
                this.isWantToPersonal = !1,
                this.myEdit.addEventListener(egret.Event.CHANGE, this.editLabelHandler, this),
                this.initBtn(),
                this.initOpPanel(),
                this.__cachedData ? this.arrBtnBar[this.__cachedData].dispatchEvent(new egret.Event(egret.TouchEvent.TOUCH_TAP)) : this.arrBtnBar[0].dispatchEvent(new egret.Event(egret.TouchEvent.TOUCH_TAP))
        },
        i.editLabelHandler = function(t) {
            var e = Utils.filterStr(this.myEdit.text);
            this.myEdit.text = e[0]
        },
        i.initBtn = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseClickHandler, this),
                this.btnSend.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnSendClickHandler, this),
                this.btnWrold.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnCamp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnPrivate.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnNoSee.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.arrBtnBar = [this.btnWrold, this.btnCamp, this.btnGroup, this.btnPrivate, this.btnNoSee]
        },
        i.initOpPanel = function() {
            this.opPanel = new ChatHeadOperation,
                this.opPanel.btnPersonal = this.btnPrivate,
                this.opPanel.parentP = this
        },
        i.btnCloseClickHandler = function(t) {
            WindowManager.getInstance().hide(WindowManager.windowType.Chat)
        },
        i.btnSendClickHandler = function(t) {
            if (UserData.getInstance().getPlayerLevel() < 10) return void Toast.launch(Locales.get("ui_main_function_scientific", 10));
            if (0 == this.myEdit.text.length) return void Toast.launch("聊天信息不能为空");
            if (0 == this.curPage) {
                var e = VipParser.GetInstance().getItemById(UserData.getInstance().getVipLevel());
                if (e && 1 != e.freeChatTimes && ChatManager.getInstance().CheckCanTalkToWorld()) return void Toast.launch("发言次数达到上限")
            }
            var a = Transport.getPkg(ProtocolMgr.ID_DceChat);
            switch (this.curPage) {
                case 0:
                    a.type = 0;
                    break;
                case 1:
                    a.type = 3;
                    break;
                case 2:
                    a.type = 1,
                        a.uid = GuildManager.getInstance().id;
                    break;
                case 3:
                    a.type = 2,
                        a.uid = this.targetData.uid,
                        a.name = this.friendEdit.text
            }
            a.content = this.myEdit.text,
                Transport.instance.send(a),
                this.myEdit.text = ""
        },
        i.btnBarClickHandler = function(t) {
            if (t.target != this.arrBtnBar[this.curPage]) {
                for (var e in this.arrBtnBar) t.target == this.arrBtnBar[e] ? (this.arrBtnBar[e].currentState = "down", this.curPage = parseInt(e)) : this.arrBtnBar[e].currentState = "up";
                this.updatePaper()
            }
        },
        i.showHeadOpPanel = function(t) {
            this.targetData = t,
                t.parent = this,
                t.y = t.y - 60,
                this.opPanel.show(t),
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.exceptOpPanelClick, this)
        },
        i.exceptOpPanelClick = function(t) {
            t.target != this.opPanel.btn0 && t.target != this.opPanel.btn1 && t.target != this.opPanel.btn2 && (this.opPanel.hide(), this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.exceptOpPanelClick, this))
        },
        i.updatePaper = function() {
            var t, e = [];
            switch (this.imgDotWorld.visible = ChatManager.getInstance().hasNewWorldMsg, this.imgDotCamp.visible = ChatManager.getInstance().hasNewCampMsg, this.imgDotGroup.visible = ChatManager.getInstance().hasNewGroupMsg, this.imgDotPersonal.visible = ChatManager.getInstance().hasNewPersonMsg, this.curPage) {
                case 0:
                    this.ordinaryGroup.visible = !0,
                        this.specialGroup.visible = !1,
                        this.noSeeGroup.visible = !0,
                        this.imgDotWorld.visible = ChatManager.getInstance().hasNewWorldMsg = !1,
                        t = ChatManager.getInstance().getMsgListWorld();
                    break;
                case 1:
                    this.ordinaryGroup.visible = !0,
                        this.specialGroup.visible = !1,
                        this.noSeeGroup.visible = !0,
                        this.imgDotCamp.visible = ChatManager.getInstance().hasNewCampMsg = !1,
                        t = ChatManager.getInstance().getMsgListCamp();
                    break;
                case 2:
                    this.ordinaryGroup.visible = !0,
                        this.specialGroup.visible = !1,
                        this.noSeeGroup.visible = !0,
                        this.imgDotGroup.visible = ChatManager.getInstance().hasNewGroupMsg = !1,
                        t = ChatManager.getInstance().getMsgListGroup();
                    break;
                case 3:
                    this.ordinaryGroup.visible = !1,
                        this.specialGroup.visible = !0,
                        this.noSeeGroup.visible = !0,
                        this.imgDotPersonal.visible = ChatManager.getInstance().hasNewPersonMsg = !1,
                        t = ChatManager.getInstance().getMsgListPersonal(),
                        this.isWantToPersonal && this.targetData ? this.friendEdit.text = this.targetData.name : (this.targetData = {},
                            t[0] && (t[0].name == UserData.getInstance()._userName ? this.targetData.name = this.friendEdit.text = t[0] ? t[0].destname : "" : this.targetData.name = this.friendEdit.text = t[0] ? t[0].name : ""), this.targetData.uid = t[0] ? t[0].uid : "", this.targetData.uid == UserData.getInstance()._uid && (this.targetData.uid = null)),
                        this.isWantToPersonal = !1;
                    break;
                case 4:
                    this.ordinaryGroup.visible = !0,
                        this.specialGroup.visible = !1,
                        this.noSeeGroup.visible = !1,
                        t = ChatManager.getInstance().getNoSeeList()
            }
            for (var a in t) {
                var i = {};
                i.type = null == t[a].type ? this.chatType[this.curPage] : t[a].type,
                    i.uid = t[a].uid,
                    i.name = t[a].name,
                    i.head = t[a].head,
                    i.level = t[a].level,
                    i.viplevel = t[a].viplevel,
                    i.pos = t[a].pos,
                    i.time = t[a].time,
                    i.content = t[a].content,
                    i.destname = t[a].destname,
                    i.militaryranktype = t[a].militaryranktype,
                    i.isNoSee = BlackListManager.GetInstance().isInBlackList(t[a].uid),
                    i.power = t[a].power,
                    i.isNoSee && 4 != i.type || e.push(i)
            }
            this.list.dataProvider = new eui.ArrayCollection(e),
                this.list.itemRenderer = chatContentRenderer
        },
        e
}(WindowBase);
