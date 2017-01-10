
var WindowFriend = function(t) {
    function e() {
        t.call(this, !0),
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/HaoYouSkin.exml"
            /*tpa=resource/eui_skins/HaoYouSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.initBtn(),
                this.setRedPoint(),
                this.initOppanel(),
                this.scroller1.viewport = this.list1,
                this.scroller2.viewport = this.list2,
                this.scroller3.viewport = this.list3,
                this.scroller4.viewport = this.list4,
                this.btnMyFriends.dispatchEvent(new egret.Event(egret.TouchEvent.TOUCH_TAP)),
                BlackListManager.GetInstance().addToObserverList(this)
        },
        i.initBtn = function() {
            this.arrBtnBar = [this.btnMyFriends, this.btnAddFriends, this.btnFriendsVerify, this.btnReceiveItem],
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBtnClick, this),
                this.btnMyFriends.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnAddFriends.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnFriendsVerify.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnReceiveItem.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnResearch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.searchPlayer, this),
                this.btnRefresh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getMoreFriend, this),
                this.btnSendAll.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendAllEle, this),
                this.btnReceiveAndSendAll.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getAllEle, this)
        },
        i.setRedPoint = function() {
            this.imgDotMyFriends.visible = FriendManager.getInstance().isFriendRed,
                this.imgDotFriendsVerify.visible = FriendManager.getInstance().isInviteRed,
                this.imgDotReceiveItem.visible = FriendManager.getInstance().isGetEleRed
        },
        i.initOppanel = function() {
            this.opPanel = new FriendHeadOperation,
                this.opPanel.parentPanel = this
        },
        i.btnBarClickHandler = function(t) {
            if (t.target != this.arrBtnBar[this.curPage]) {
                for (var e in this.arrBtnBar) t.target == this.arrBtnBar[e] ? (this.arrBtnBar[e].currentState = "down", this.curPage = parseInt(e)) : this.arrBtnBar[e].currentState = "up";
                this.updatePaper()
            }
        },
        i.updatePaper = function(t) {
            void 0 === t && (t = !1);
            var e, a = [];
            switch (this.curPage) {
                case 0:
                    this.GrpMyFriends.visible = !0,
                        this.GrpAddFriends.visible = !1,
                        this.GrpFriendsVerify.visible = !1,
                        this.GrpReceiveItme.visible = !1,
                        this.txtFriendsNum.visible = !0,
                        this.curList = this.list1,
                        e = FriendManager.getInstance().getFriendList(),
                        this.txtFriendsNum.text = e.length + "/50";
                    break;
                case 1:
                    this.GrpMyFriends.visible = !1,
                        this.GrpAddFriends.visible = !0,
                        this.GrpFriendsVerify.visible = !1,
                        this.GrpReceiveItme.visible = !1,
                        this.txtFriendsNum.visible = !0,
                        this.curList = this.list2,
                        e = t ? [FriendManager.getInstance().getSearchData()] : FriendManager.getInstance().getRecommandList(),
                        this.txtFriendsNum.text = FriendManager.getInstance().getFriendList().length + "/50";
                    break;
                case 2:
                    this.GrpMyFriends.visible = !1,
                        this.GrpAddFriends.visible = !1,
                        this.GrpFriendsVerify.visible = !0,
                        this.GrpReceiveItme.visible = !1,
                        this.txtFriendsNum.visible = !1,
                        this.curList = this.list3,
                        e = FriendManager.getInstance().getInvitedlist();
                    break;
                case 3:
                    this.GrpMyFriends.visible = !1,
                        this.GrpAddFriends.visible = !1,
                        this.GrpFriendsVerify.visible = !1,
                        this.GrpReceiveItme.visible = !0,
                        this.txtFriendsNum.visible = !1,
                        this.curList = this.list4,
                        e = FriendManager.getInstance().getReceiveElecList(),
                        this.txtReceiveDesc.text = "今日剩余领取次数：" + (20 - FriendManager.getInstance().eleGetNum)
            }
            for (var i in e) {
                var n = {};
                n.type = this.curPage,
                    n.uid = e[i].uid,
                    n.name = e[i].name,
                    n.head = e[i].head,
                    n.level = e[i].level,
                    n.power = e[i].power,
                    n.militaryrank = e[i].militaryrank,
                    n.isNoSee = BlackListManager.GetInstance().isInBlackList(n.uid),
                    e[i].isSend && (n.isSend = e[i].isSend),
                    e[i].invitedtime && (n.invitedtime = e[i].invitedtime),
                    e[i].receivetime && (n.receivetime = e[i].receivetime),
                    a.push(n)
            }
            this.curList.dataProvider = new eui.ArrayCollection(a),
                this.curList.itemRenderer = FriendRenderer
        },
        i.blackListUpdate = function() {
            this.updatePaper()
        },
        i.closeBtnClick = function(t) {
            WindowManager.getInstance().hide(WindowManager.windowType.Friend)
        },
        i.searchPlayer = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceSearchPlayer);
            e.name = this.editLabel.text,
                Transport.instance.send(e)
        },
        i.getMoreFriend = function(t) {
            FriendManager.getInstance().sendGetRecommand()
        },
        i.sendAllEle = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceSendElectric);
            e.type = 1,
                Transport.instance.send(e)
        },
        i.getAllEle = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceDrawAllElectric);
            Transport.instance.send(e)
        },
        i.showHeadOpPanel = function(t) {
            t.parent = this,
                t.y = t.y - 80,
                this.opPanel.show(t),
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.exceptOpPanelClick, this)
        },
        i.exceptOpPanelClick = function(t) {
            t.target != this.opPanel.btn0 && t.target != this.opPanel.btn1 && t.target != this.opPanel.btn2 && t.target != this.opPanel.btn3 && (this.opPanel.hide(), this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.exceptOpPanelClick, this))
        },
        e
}(WindowBase);
