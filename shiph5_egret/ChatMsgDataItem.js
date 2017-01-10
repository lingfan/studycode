
var ChatManager = function() {
    function t() {
        this.msgListWorld = [],
            this.msgListCamp = [],
            this.msgListGroup = [],
            this.msgListPersonal = [],
            this.noSeeList = [],
            BlackListManager.GetInstance().addToObserverList(this)
    }
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return this._instance || (this._instance = new t),
                this._instance
        },
        a.CheckCanTalkToWorld = function() {
            return UserData.getInstance().getPlayerLevel() >= 40 ? !1 : UserData.getInstance().getPlayerLevel() >= 35 && 20 - this.chatTimes > 0 ? !1 : UserData.getInstance().getPlayerLevel() >= 25 && 10 - this.chatTimes > 0 ? !1 : UserData.getInstance().getPlayerLevel() >= 10 && 5 - this.chatTimes > 0 ? !1 : !0
        },
        a.hasNewMsg = function(t) {
            var e = new ChatMsgDataItem;
            switch (e.type = t.type, e.uid = t.uid, e.name = t.name, e.head = t.head, e.level = t.level, e.viplevel = t.viplevel, e.pos = t.pos, e.time = t.time, e.content = t.content, e.destname = t.destname, e.militaryranktype = t.militaryranktype, t.type) {
                case 0:
                    var a = GameLayer.getInstance().pageLayer.getChildByName("HomeUI");
                    if (a && !BlackListManager.GetInstance().isInBlackList(t.uid)) {
                        var i = t.name + ":" + t.content;
                        a.updateWorldChat(i)
                    }
                    this.hasNewWorldMsg = !0,
                        this.getMsgListWorld().unshift(e);
                    break;
                case 1:
                    this.hasNewGroupMsg = !0,
                        this.getMsgListGroup().unshift(e);
                    break;
                case 2:
                    this.hasNewPersonMsg = !0,
                        this.getMsgListPersonal().unshift(e);
                    break;
                case 3:
                    this.hasNewCampMsg = !0,
                        this.getMsgListCamp().unshift(e)
            }
            var n = WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Chat);
            if (n) {
                var s = WindowManager.getInstance().getWindow(WindowManager.windowType.Chat);
                s.updatePaper()
            }
            if (this.hasNewGroupMsg) {
                var r = WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Guild);
                if (r) {
                    var o = WindowManager.getInstance().getWindow(WindowManager.windowType.Guild);
                    o.setActivityData(!0)
                }
            }
        },
        a.showChatWin = function(t) {
            void 0 === t && (t = 0),
                WindowManager.getInstance().show(WindowManager.windowType.Chat, t)
        },
        a.blackListUpdate = function() {
            var t = BlackListManager.GetInstance().getBlackList(),
                e = [];
            for (var a in t) {
                var i = new ChatMsgDataItem;
                i.type = 4,
                    i.uid = t[a].uid,
                    i.name = t[a].name,
                    i.head = t[a].head,
                    i.level = t[a].level,
                    i.power = t[a].power,
                    i.viplevel = t[a].viplevel,
                    i.militaryranktype = t[a].militaryranktype,
                    i.isNoSee = !0,
                    e.push(i)
            }
            this.setNoSeeList(e);
            var n = WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Chat);
            if (n) {
                var s = WindowManager.getInstance().getWindow(WindowManager.windowType.Chat);
                s.updatePaper()
            }
        },
        a.setMsgListWorld = function(t) {
            this.msgListWorld = t,
                this.msgListWorld.reverse()
        },
        a.getMsgListWorld = function() {
            return this.msgListWorld
        },
        a.setMsgListCamp = function(t) {
            this.msgListCamp = t
        },
        a.getMsgListCamp = function() {
            return this.msgListCamp
        },
        a.setMsgListGroup = function(t) {
            this.msgListGroup = t
        },
        a.getMsgListGroup = function() {
            return this.msgListGroup
        },
        a.setMsgListPersonal = function(t) {
            this.msgListPersonal = t
        },
        a.getMsgListPersonal = function() {
            return this.msgListPersonal
        },
        a.setNoSeeList = function(t) {
            this.noSeeList = t
        },
        a.getNoSeeList = function() {
            return this.noSeeList
        },
        t
}();
