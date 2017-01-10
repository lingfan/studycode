
var FriendHeadOperation = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/friendAlertSkin.exml"
            /*tpa=resource/eui_skins/item/friendAlertSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {
            t.prototype.createChildren.call(this),
                this.btn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.show = function(t) {
            t && (this._data = t, this._data.isNoSee ? this.btn1.label = "解除屏蔽" : this.btn1.label = "屏蔽", this.x = t.x, this.y = t.y, t.parent.addChild(this))
        },
        i.hide = function() {
            this.parent && this.parent.contains(this) && this.parent.removeChild(this)
        },
        i.btnClickHandler = function(t) {
            var e = this;
            this.hide();
            var a = "",
                i = "";
            switch (t.target) {
                case this.btn0:
                    a = "删除好友",
                        i = "确认解除与[" + this._data.name + "]的好友关系?",
                        GameAlert.getInstance().show(a, i,
                            function() {
                                var t = Transport.getPkg(ProtocolMgr.ID_DceDeleteFriend);
                                t.uid = e._data.uid,
                                    t.name = e._data.name,
                                    Transport.instance.send(t),
                                    GameAlert.getInstance().hide()
                            });
                    break;
                case this.btn1:
                    this._data.isNoSee ? (a = "解除屏蔽", i = "确认将[" + this._data.name + "]从屏蔽列表删除?解除屏蔽后将能够收到[" + this._data.name + "]的聊天、私聊以及邮件信息", GameAlert.getInstance().show(a, i,
                        function() {
                            var t = Transport.getPkg(ProtocolMgr.ID_DceBlackListOpt);
                            t.uid = e._data.uid,
                                t.type = 1,
                                Transport.instance.send(t),
                                GameAlert.getInstance().hide()
                        })) : (a = "屏蔽玩家", i = "确认将[" + this._data.name + "]加入屏蔽列表?屏蔽后将无法收到[" + this._data.name + "]的聊天、私聊以及邮件信息", GameAlert.getInstance().show(a, i,
                        function() {
                            var t = Transport.getPkg(ProtocolMgr.ID_DceBlackListOpt);
                            t.uid = e._data.uid,
                                t.type = 0,
                                Transport.instance.send(t),
                                GameAlert.getInstance().hide()
                        }));
                    break;
                case this.btn2:
                    if (BlackListManager.GetInstance().isInBlackList(this._data.uid)) Toast.launch("对方在您的黑名单中");
                    else {
                        var n = {};
                        n.uid = this._data.uid,
                            n.name = this._data.name,
                            WindowManager.getInstance().show(WindowManager.windowType.Speak, n)
                    }
                    break;
                case this.btn3:
                    var s = Transport.getPkg(ProtocolMgr.ID_DceScoutSoldier);
                    s.uid = this._data.uid,
                        Transport.instance.send(s)
            }
        },
        e
}(eui.Component);
