
var FriendRenderer = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/HaoYou_1_Skin.exml"
            /*tpa=resource/eui_skins/item/HaoYou_1_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.ReqInvitFriend = function(t, e) {},
        i.createChildren = function() {
            t.prototype.createChildren.call(this),
                this.grpHead.addEventListener(egret.TouchEvent.TOUCH_TAP, this.headClickHandler, this),
                this.btnInvite.addEventListener(egret.TouchEvent.TOUCH_TAP, this.inviteClick, this),
                this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confirmAndRefuse, this),
                this.btnRefuse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confirmAndRefuse, this),
                this.btnSend.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendEle, this),
                this.btnSend0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getEle, this)
        },
        i.dataChanged = function() {
            switch (this.data.type) {
                case 0:
                    this.btnSend.visible = !0,
                        this.data.isSend && 1 == this.data.isSend ? this.btnSend.enabled = !1 : this.btnSend.enabled = !0,
                        this.btnInvite.visible = !1,
                        this.btnConfirm.visible = !1,
                        this.btnRefuse.visible = !1,
                        this.btnSend0.visible = !1,
                        this.imgReceiveItem.visible = !1,
                        this.txtReceiveItemNum.visible = !1;
                    break;
                case 1:
                    this.btnSend.visible = !1,
                        this.btnInvite.visible = !0,
                        this.btnConfirm.visible = !1,
                        this.btnRefuse.visible = !1,
                        this.btnSend0.visible = !1,
                        this.imgReceiveItem.visible = !1,
                        this.txtReceiveItemNum.visible = !1;
                    break;
                case 2:
                    this.btnSend.visible = !1,
                        this.btnInvite.visible = !1,
                        this.btnConfirm.visible = !0,
                        this.btnRefuse.visible = !0,
                        this.btnSend0.visible = !1,
                        this.imgReceiveItem.visible = !1,
                        this.txtReceiveItemNum.visible = !1;
                    break;
                case 3:
                    this.btnSend.visible = !1,
                        this.btnInvite.visible = !1,
                        this.btnConfirm.visible = !1,
                        this.btnRefuse.visible = !1,
                        this.btnSend0.visible = !0,
                        this.imgReceiveItem.visible = !0,
                        this.txtReceiveItemNum.visible = !0
            }
            this.imgNoSee.visible = this.data.isNoSee,
                this.txtPlayerName.text = this.data.name,
                this.txtBattlePoint.text = this.data.power,
                Utils.getImgByUrl(Path.GetHeadPicUrl(this.data.head, 1), this.imgHead),
                this.txtPlayerLevel.text = "Lv." + this.data.level,
                this.data.militaryrank ? Utils.getImgByUrl(MilitaryManager.GetInstance().getPicByRankLvl(this.data.militaryrank), this.imgRank) : (this.txtPlayerName.x = this.imgRank.x, this.imgRank.source = "")
        },
        i.headClickHandler = function(t) {
            if (0 == this.data.type) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend),
                    a = this.localToGlobal(this.imgHead.x, this.imgHead.y),
                    i = {};
                i = this.data,
                    i.x = a.x + .5 * this.imgHead.width,
                    i.y = a.y + .5 * this.imgHead.height,
                    e.showHeadOpPanel(i)
            }
        },
        i.inviteClick = function(t) {
            var e = this.data.uid,
                a = this.data.name;
            FriendManager.getInstance().ReqInivitFriend(e, a)
        },
        i.confirmAndRefuse = function(t) {
            if (t.target == this.btnConfirm) {
                var e = Transport.getPkg(ProtocolMgr.ID_DceAddFriend);
                e.uid = this.data.uid,
                    Transport.instance.send(e)
            } else {
                var e = Transport.getPkg(ProtocolMgr.ID_DceRefuseAddFriend);
                e.uid = this.data.uid,
                    e.name = this.data.name,
                    Transport.instance.send(e)
            }
        },
        i.sendEle = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceSendElectric);
            e.uid = this.data.uid,
                e.name = this.data.name,
                e.type = 0,
                Transport.instance.send(e)
        },
        i.getEle = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceDrawElectric);
            e.uid = this.data.uid,
                Transport.instance.send(e)
        },
        e
}(eui.ItemRenderer);
