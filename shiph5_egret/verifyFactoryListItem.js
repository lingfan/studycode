
var GuildMemberAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/JunTuan_MemberSkin.exml"
            /*tpa=resource/eui_skins/JunTuan_MemberSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getInstance = function() {
            return this._instance || (this._instance = new e),
                this._instance
        },
        i.OnComplete = function() {
            this.__inited = !0,
                this._block || (this._block = new egret.Shape, this._block.graphics.beginFill(0, .5), this._block.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight), this._block.graphics.endFill(), this._block.touchEnabled = !0);
            var t = GameLayer.getInstance().windowLayer.getChildIndex(this);
            egret.log("depth:", t),
                GameLayer.getInstance().windowLayer.addChildAt(this._block, t)
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnSignOut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnCallBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAppoint.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnRemove.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnOperate.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnTransfer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnRelieve.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnClose1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.clean = function() {
            this.data = null,
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnSignOut.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnCallBack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnAppoint.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnRemove.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnOperate.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnView.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnTransfer.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnRelieve.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnClose1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.btnClickHandler = function(t) {
            var e = this;
            switch (t.currentTarget) {
                case this.btnClose:
                    this.hide();
                    break;
                case this.btnCallBack:
                    this.hide();
                    break;
                case this.btnSignOut:
                    GameAlert.getInstance().show("退出军团", "您是否要退出军团?",
                        function() {
                            GuildManager.getInstance().sendGuildQuit(),
                                GameAlert.getInstance().hide(),
                                e.hide()
                        });
                    break;
                case this.btnAppoint:
                    GuildManager.getInstance().sendGuildSetDeputy(this.data.uid),
                        this.hide();
                    break;
                case this.btnRemove:
                    GameAlert.getInstance().show("踢出军团", "您是否要踢出成员" + this.data.name + "?",
                        function() {
                            GuildManager.getInstance().sendGuildExpel(e.data.uid),
                                GameAlert.getInstance().hide(),
                                e.hide()
                        });
                    break;
                case this.btnOperate:
                    this.btnGroup3.visible = !0;
                    break;
                case this.btnView:
                    var a = Transport.getPkg(ProtocolMgr.ID_DceScoutSoldier);
                    a.uid = this.data.uid,
                        this.hide(),
                        WindowManager.getInstance().hide(WindowManager.windowType.Guild),
                        MainUI.instance.setBottomVisible(!0),
                        Transport.instance.send(a);
                    break;
                case this.btnTransfer:
                    GameAlert.getInstance().show("转让军团长", "您是否要将军团长职务转让给" + this.data.name + "?",
                        function() {
                            GuildManager.getInstance().sendGuildDemise(e.data.uid),
                                GameAlert.getInstance().hide(),
                                e.hide()
                        });
                    break;
                case this.btnRelieve:
                    GameAlert.getInstance().show("解除职务", "您是否要解除" + this.data.name + "职务?",
                        function() {
                            GuildManager.getInstance().sendGuildFireDeputy(e.data.uid),
                                GameAlert.getInstance().hide(),
                                e.hide()
                        });
                    break;
                case this.btnClose1:
                    this.btnGroup3.visible = !1;
                    break;
                case this.btn1:
                    if (this.btnGroup3.visible = !1, UserData.getInstance().getPlayerLevel() < 20) Toast.launch("该功能20级开启");
                    else {
                        var i = this.data.uid,
                            n = this.data.name;
                        FriendManager.getInstance().ReqInivitFriend(i, n, !0,
                            function() {
                                e.hide()
                            }.bind(this))
                    }
                    break;
                case this.btn2:
                    GuildAlert.getInstance().showChangeLabel("对 " + this.data.name + " 留言", "可以输入60字", this.data),
                        this.btnGroup3.visible = !1;
                    break;
                case this.btn3:
                    var a = Transport.getPkg(ProtocolMgr.ID_DceBlackListOpt);
                    a.uid = this.data.uid,
                        this.data.isInBlackList ? GameAlert.getInstance().show("提示", "解除屏蔽后可收到【" + this.data.name + "】的聊天、私聊信息以及留言,确认将【" + this.data.name + "】移除屏蔽列表?",
                            function() {
                                a.type = 1,
                                    Transport.instance.send(a),
                                    GameAlert.getInstance().hide(),
                                    e.hide()
                            }) : GameAlert.getInstance().show("提示", "确认将【" + this.data.name + "】加入屏蔽列表?屏蔽后无法收到【" + this.data.name + "】聊天、私聊信息以及留言",
                            function() {
                                a.type = 0,
                                    Transport.instance.send(a),
                                    GameAlert.getInstance().hide(),
                                    e.hide()
                            })
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("defenceStageRewardData"),
                ConfigData.preLoadDats(e, [DefencestagerewarddataParser],
                    function() {
                        t()
                    })
        },
        i.show = function(t) {
            this.data = t,
                SUI.setTextureAsync(this.imgHead, Path.GetHeadPicUrl(this.data.face, 0)),
                SUI.setTextureAsync(this.imgRank, MilitaryManager.GetInstance().getPicByRankLvl(this.data.militaryranktype)),
                this.txtName.text = this.data.name,
                this.txtLevel.text = this.data.level,
                this.txtBattlePoint.text = this.data.power,
                this.txtTotleRes2.text = this.data.totalcontribute,
                this.txtRes2.text = this.data.contribute,
                this.txtRank.text = MilitaryrankParser.GetInstance().getItemByField("id", this.data.militaryranktype).name_l,
                this.data.isInBlackList ? this.btn3.label = "解除屏蔽" : this.btn3.label = "屏蔽",
                this.data.uid == UserData.getInstance().uid ? (this.btnGroup1.visible = !1, this.btnGroup2.visible = !0, this.btnGroup3.visible = !1, 0 == this.data.pos ? this.btnSignOut.enabled = !1 : this.btnSignOut.enabled = !0) : (this.btnGroup1.visible = !0, this.btnGroup2.visible = !1, this.btnGroup3.visible = !1, 0 == this.data.pos ? (this.btnRemove.enabled = !1, this.btnAppoint.enabled = !1, this.btnGroup11.visible = !0, this.btnGroup22.visible = !1) : 1 == this.data.pos ? 0 == GuildManager.getInstance().pos ? (this.btnGroup11.visible = !1, this.btnGroup22.visible = !0) : (this.btnGroup11.visible = !0, this.btnGroup22.visible = !1, this.btnRemove.enabled = !1, this.btnAppoint.enabled = !1) : 2 == this.data.pos && (2 == GuildManager.getInstance().pos ? (this.btnGroup11.visible = !0, this.btnGroup22.visible = !1, this.btnRemove.enabled = !1, this.btnAppoint.enabled = !1) : 1 == GuildManager.getInstance().pos ? (this.btnGroup11.visible = !0, this.btnGroup22.visible = !1, this.btnRemove.enabled = !0, this.btnAppoint.enabled = !1) : 0 == GuildManager.getInstance().pos && (this.btnGroup11.visible = !0, this.btnGroup22.visible = !1, this.btnRemove.enabled = !0, this.btnAppoint.enabled = !0))),
                this.init(),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        e
}(eui.Component);
