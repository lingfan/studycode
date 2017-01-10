
var FriendManager = function() {
    function t() {
        this._myFriendList = [],
            this._recommandList = [],
            this._invitedlist = [],
            this._receiveElecList = [],
            this._searchData = new FriendData,
            this.isWaiting = !1,
            this.eleGetNum = 0
    }
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return this._instance || (this._instance = new t),
                this._instance
        },
        a.ReqInivitFriend = function(t, e, a, i) {
            if (void 0 === a && (a = !0), void 0 === i && (i = null), UserData.getInstance().getPlayerLevel() < 20) return void Toast.launch(Locales.get("ui_main_function_scientific", 20));
            if (a) GameAlert.getInstance().show("好友邀请", "是否邀请" + e + "为好友？",
                function() {
                    var a = Transport.getPkg(ProtocolMgr.ID_DceInviteFriend);
                    a.uid = t,
                        a.name = e,
                        Transport.instance.send(a),
                        GameAlert.getInstance().hide(),
                        i && i()
                });
            else {
                var n = Transport.getPkg(ProtocolMgr.ID_DceInviteFriend);
                n.uid = t,
                    n.name = e,
                    Transport.instance.send(n)
            }
        },
        a.sendGetFriendMsg = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceFriendList);
            Transport.instance.send(t)
        },
        a.sendGetRecommand = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceRecommandInviteList);
            Transport.instance.send(t)
        },
        a.sendGetInvited = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceInvitedList);
            Transport.instance.send(t)
        },
        a.sendGetReceiveEle = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceRecElectricList);
            Transport.instance.send(t)
        },
        a.setMyFriendList = function(t) {
            this._myFriendList = [],
                this.redPointFriend(!1);
            for (var e in t.friendlist) {
                var a = new FriendData;
                a.uid = t.friendlist[e].info.uid,
                    a.name = t.friendlist[e].info.name,
                    a.head = t.friendlist[e].info.head,
                    a.level = t.friendlist[e].info.level,
                    a.power = t.friendlist[e].info.power,
                    a.militaryrank = t.friendlist[e].info.militaryrank,
                    a.isSend = t.friendlist[e].isSend,
                    this._myFriendList.push(a)
            }
            this.isWaiting && (WindowManager.getInstance().hideWaiting(), this.isWaiting = !1, this.ShowFriendPanel())
        },
        a.ShowFriendPanel = function() {
            return UserData.getInstance().getPlayerLevel() < 20 ? void Toast.launch(Locales.get("ui_main_function_scientific", 20)) : void WindowManager.getInstance().show(WindowManager.windowType.Friend)
        },
        a.setRecommandList = function(t) {
            this._recommandList = [];
            for (var e in t.recommandlist) {
                var a = new FriendData;
                a.uid = t.recommandlist[e].uid,
                    a.name = t.recommandlist[e].name,
                    a.head = t.recommandlist[e].head,
                    a.level = t.recommandlist[e].level,
                    a.power = t.recommandlist[e].power,
                    a.militaryrank = t.recommandlist[e].militaryrank,
                    this._recommandList.push(a)
            }
            if (WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend)) {
                var i = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend);
                1 == i.curPage && i.updatePaper()
            }
        },
        a.setInvitedlist = function(t) {
            this._invitedlist = [];
            for (var e in t.invitedlist) {
                var a = new FriendData;
                a.uid = t.invitedlist[e].invitedinfo.uid,
                    a.name = t.invitedlist[e].invitedinfo.name,
                    a.head = t.invitedlist[e].invitedinfo.head,
                    a.level = t.invitedlist[e].invitedinfo.level,
                    a.power = t.invitedlist[e].invitedinfo.power,
                    a.militaryrank = t.invitedlist[e].invitedinfo.militaryrank,
                    a.invitedtime = t.invitedlist[e].invitedtime,
                    this._invitedlist.push(a)
            }
            if (this._invitedlist.length > 0 ? this.redPointInvite(!0) : this.redPointInvite(!1), WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend)) {
                var i = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend);
                2 == i.curPage && i.updatePaper()
            }
        },
        a.setReceiveElecList = function(t) {
            this.eleGetNum = t.drawnum,
                this._receiveElecList = [];
            for (var e in t.electriclist) {
                var a = new FriendData;
                a.uid = t.electriclist[e].info.uid,
                    a.name = t.electriclist[e].info.name,
                    a.head = t.electriclist[e].info.head,
                    a.level = t.electriclist[e].info.level,
                    a.power = t.electriclist[e].info.power,
                    a.militaryrank = t.electriclist[e].info.militaryrank,
                    a.receivetime = t.electriclist[e].receivetime,
                    this._receiveElecList.push(a)
            }
            if (this._receiveElecList.length > 0 ? this.redPointGetEle(!0) : this.redPointGetEle(!1), WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend)) {
                var i = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend);
                3 == i.curPage && i.updatePaper()
            }
        },
        a.setEleGetNum = function(t) {
            if (void 0 === t && (t = 0), this.eleGetNum = t, WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend);
                3 == e.curPage && e.updatePaper()
            }
        },
        a.getFriendList = function() {
            return this._myFriendList
        },
        a.getRecommandList = function() {
            return this._recommandList
        },
        a.getInvitedlist = function() {
            return this._invitedlist
        },
        a.getReceiveElecList = function() {
            return this._receiveElecList
        },
        a.setSearchData = function(t) {
            if (t.uid < 0) return void Toast.launch("找不到玩家");
            if (this._searchData.uid = t.uid, this._searchData.name = t.name, this._searchData.head = t.head, this._searchData.power = t.power, this._searchData.level = t.level, WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend);
                1 == e.curPage && e.updatePaper(!0)
            }
        },
        a.getSearchData = function() {
            return this._searchData
        },
        a.redPointFriend = function(t) {
            if (void 0 === t && (t = !1), this.isFriendRed = t, WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend);
                e.setRedPoint()
            }
        },
        a.redPointInvite = function(t) {
            if (void 0 === t && (t = !1), this.isInviteRed = t, WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend);
                e.setRedPoint()
            }
        },
        a.redPointGetEle = function(t) {
            if (void 0 === t && (t = !1), this.isGetEleRed = t, WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend);
                e.setRedPoint()
            }
        },
        a.sendEleSucess = function(t) {
            if (0 == t.type) {
                if (WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend)) {
                    var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend);
                    if (0 == e.curPage) {
                        var a = e.curList.dataProvider;
                        for (var i in a.source) a.source[i].name == t.name && (a.source[i].isSend = 1, a.itemUpdated(a.source[i]))
                    }
                }
            } else if (WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Friend);
                if (0 == e.curPage) {
                    var a = e.curList.dataProvider;
                    for (var i in a.source) a.source[i].isSend = 1,
                        a.itemUpdated(a.source[i])
                }
            }
        },
        t
}();
