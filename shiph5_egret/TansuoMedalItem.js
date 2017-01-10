
var WindowSystemSet = function(t) {
    function e() {
        t.call(this, !0),
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/XiTongSkin.exml"
            /*tpa=resource/eui_skins/XiTongSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.editLabelMessage.addEventListener(egret.Event.CHANGE, this.editLabelHandler, this),
                this.initBtn(),
                this.msgCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnCliskMsg, this),
                this.msgScroller.viewport = this.msgGroup
        },
        i.initBtn = function() {
            AudioManager.instance.isMusicOn ? (this.btnMusicSwitch.selected = !0, this.btnMusicSwitch.label = "关闭") : (this.btnMusicSwitch.selected = !1, this.btnMusicSwitch.label = "开启"),
                AudioManager.instance.isEffectOn ? (this.btnSoundSwitch.selected = !0, this.btnSoundSwitch.label = "关闭") : (this.btnSoundSwitch.selected = !1, this.btnSoundSwitch.label = "开启"),
                PlatformManager.instance.isSupportSubscribe() ? (this.btnSendLink.visible = !0, this.btnSendLink.label = "关注", this.infoTf.text = "欢迎关注" + PlatformManager.instance.GetPlatName(), this.txtSendLinkReward.text = "关注可领取奖励，仅可领取一次") : PlatformManager.instance.isSupportToDesktop() ? (this.btnSendLink.visible = !0, this.btnSendLink.label = "发送", this.infoTf.text = "发送快捷方式到桌面", this.txtSendLinkReward.text = "首次发送获得100钻石奖励") : (this.btnSendLink.visible = !1, this.infoTf.text = "战舰帝国-大决战", this.txtSendLinkReward.text = "首款H5写实海战策略游戏"),
                PlatformManager.instance.isSupportShare() ? this.btnLeaveMessage.parent.addChild(this.btnShare) : this.btnShare.parent && this.btnShare.parent.removeChild(this.btnShare),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeClick, this),
                this.btnMusicSwitch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnSoundSwitch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnSendLink.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnLeaveMessage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnClose2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnChangeAccount.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnSend.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnCheckInviteCode.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnCheckInviteCode0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this),
                this.btnViewNotice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this)
        },
        i.editLabelHandler = function(t) {
            var e = Utils.filterStr(this.editLabelMessage.text);
            this.editLabelMessage.text = e[0]
        },
        i.btnClick = function(t) {
            switch (t.target) {
                case this.btnSendLink:
                    PlatformManager.instance.isSupportSubscribe() ? PlatformManager.instance.Subscribe() : this.grpSendLink.visible = !this.grpSendLink.visible;
                    break;
                case this.btnSoundSwitch:
                    this.btnSoundSwitch.selected ? (this.btnSoundSwitch.label = "关闭", AudioManager.instance.isEffectOn = !0) : (this.btnSoundSwitch.label = "开启", AudioManager.instance.isEffectOn = !1);
                    break;
                case this.btnMusicSwitch:
                    this.btnMusicSwitch.selected ? (this.btnMusicSwitch.label = "关闭", AudioManager.instance.isMusicOn = !0) : (this.btnMusicSwitch.label = "开启", AudioManager.instance.isMusicOn = !1);
                    break;
                case this.btnChangeAccount:
                    PlatformManager.instance.isSupportSwitchAccount() ? (WindowManager.getInstance().hide(WindowManager.windowType.System), Transport.instance.closeSocket(), PlatformManager.instance.switchAccount()) : Toast.launch("此平台不支持切换账号");
                    break;
                case this.btnViewNotice:
                    ResLoader.instance.preLoadResList(["resource/assets/broadcast/msg.json"
                            /*tpa=resource/assets/broadcast/msg.json*/
                        ],
                        function(t) {
                            this.msgContainer.visible = !1,
                                t && (this.msg = t[0], this.msg && this.msg.content && "" != this.msg.content && (this.msgTitleTf.text = this.msg.title || "公告", this.msgCloseBtn.label = this.msg.closeBtnTf || "收到", this.msgContent.textFlow = (new egret.HtmlTextParser).parser(this.msg.content), this.msgContainer.visible = !0))
                        },
                        this);
                    break;
                case this.btnCheckInviteCode:
                    Toast.launch("该邀请码无效");
                    break;
                case this.btnCheckInviteCode0:
                    var e = Transport.getPkg(ProtocolMgr.ID_DceExchangeCode);
                    e.code = this.editLabelInviteCode0.text,
                        Transport.instance.send(e);
                    break;
                case this.btnLeaveMessage:
                    this.grpMessage.visible = !this.grpMessage.visible;
                    break;
                case this.btnCancel:
                    this.grpMessage.visible = !1;
                    break;
                case this.btnConfirm:
                    break;
                case this.btnClose2:
                    this.grpSendLink.visible = !1;
                    break;
                case this.btnSend:
                    PlatformManager.instance.ToDesktop();
                    break;
                case this.btnShare:
                    PlatformManager.instance.share()
            }
        },
        i.closeClick = function(t) {
            WindowManager.getInstance().hide(WindowManager.windowType.System)
        },
        i.OnCliskMsg = function(t) {
            this.msg && this.msg.canClose && (this.msgContainer.visible = !1)
        },
        e
}(WindowBase);
