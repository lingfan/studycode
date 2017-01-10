
var WindowSpeak = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/SpeakPopSkin.exml"
            /*tpa=resource/eui_skins/SpeakPopSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cancelClick, this),
                this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cancelClick, this),
                this.btnSend.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendClick, this),
                this.editLabel.prompt = "可以输入60字",
                this.editLabel.addEventListener(egret.Event.CHANGE, this.editLabelHandler, this)
        },
        i.editLabelHandler = function(t) {
            var e = Utils.filterStr(this.editLabel.text);
            this.editLabel.text = e[0]
        },
        i.cancelClick = function(t) {
            WindowManager.getInstance().hide(WindowManager.windowType.Speak)
        },
        i.setData = function(t) {
            this._data = t,
                this._data.name && (this.txtTitle.text = "对[" + this._data.name + "]留言")
        },
        i.sendClick = function(t) {
            if (this._data.uid && this.editLabel.text.length > 0) {
                var e = Transport.getPkg(ProtocolMgr.ID_DceSendMail);
                e.uid = this._data.uid,
                    e.text = this.editLabel.text,
                    Transport.instance.send(e)
            }
        },
        e
}(WindowBase);
