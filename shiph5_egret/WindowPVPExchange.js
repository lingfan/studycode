
var WindowPveTalking = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/PveTalkingSkin.exml"
            /*tpa=resource/eui_skins/PveTalkingSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            this._data = t,
                this.Click.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBg, this),
                this._talkIndex = -1,
                this.nextTalk()
        },
        i.nextTalk = function() {
            if (this._talkIndex++, this._timer && (Utils.cancalDelayCall(this._timer), this._timer = null), this._talkIndex >= this._data.cfg.unlockpicture.length) this.Npc.visible = this.Self.visible = !1,
                this.close(),
                this._data.callback && Utils.call(this._data.callback, this._data.thisObj);
            else {
                var t = this._data.cfg.unlockpicture[this._talkIndex],
                    e = this._data.cfg.unlocktalk_l[this._talkIndex];
                1 == t ? (this.Npc.visible = !0, this.Self.visible = !1, this.txtNpcChat.text = e) : (this.Npc.visible = !1, this.Self.visible = !0, this.txtSelfChat.text = e, SUI.setTextureAsync(this.imgSelfHead, Path.GetHeadPicUrl(UserData.getInstance().getHead(), 0))),
                    this._timer = Utils.delayCall(3e3, this.nextTalk, this)
            }
        },
        i.onClickBg = function() {
            this.nextTalk()
        },
        i.init = function() {
            var t = this;
            this.imgEye.visible = !1,
                this._tween = egret.Tween.get(this.imgEye, {
                    loop: !0
                }),
                this._tween.wait(1500).call(function() {
                        t.imgEye.visible = !0
                    },
                    this).wait(200).call(function() {
                        t.imgEye.visible = !1
                    },
                    this)
        },
        i.clear = function() {
            this._timer && (Utils.cancalDelayCall(this._timer), this._timer = null),
                this._tween && egret.Tween.removeTweens(this.imgEye)
        },
        e
}(WindowBase);
