
var ChatHeadOperation = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/liaotianAlertSkin.exml"
            /*tpa=resource/eui_skins/item/liaotianAlertSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {
            t.prototype.createChildren.call(this),
                this.btn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this)
        },
        i.show = function(t) {
            t && (this._data = t, this.x = t.x, this.y = t.y, 1 == this._data.isNoSee ? this.btn2.label = "解除屏蔽" : this.btn2.label = "屏蔽", t.parent.addChild(this))
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
                    var n = this._data.uid,
                        s = this._data.name;
                    FriendManager.getInstance().ReqInivitFriend(n, s);
                    break;
                case this.btn1:
                    this.parentP.isWantToPersonal = !0,
                        this.btnPersonal.dispatchEvent(new egret.Event(egret.TouchEvent.TOUCH_TAP));
                    break;
                case this.btn2:
                    1 == this._data.isNoSee ? (a = "解除屏蔽", i = "确认将[" + this._data.name + "]从屏蔽列表中删除?删除后将能收到[" + this._data.name + "]的聊天、私聊以及邮件信息", GameAlert.getInstance().show(a, i,
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
                        }))
            }
        },
        e
}(eui.Component);
