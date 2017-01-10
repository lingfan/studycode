
var BlackListManager = function() {
    function t() {
        this.ObserverList = []
    }
    var e = (__define, t),
        a = e.prototype;
    return t.GetInstance = function() {
            return this._instance || (this._instance = new t),
                this._instance
        },
        a.setBlackList = function(t) {
            this.blackList = [];
            for (var e in t.blacklist) {
                var a = new BlackListData;
                a.uid = t.blacklist[e].uid,
                    a.name = t.blacklist[e].name,
                    a.head = t.blacklist[e].head,
                    a.isfriend = t.blacklist[e].isfriend,
                    a.issameguild = t.blacklist[e].issameguild,
                    a.level = t.blacklist[e].level,
                    a.power = t.blacklist[e].power,
                    a.viplevel = t.blacklist[e].viplevel,
                    a.militaryranktype = t.blacklist[e].militaryranktype,
                    this.blackList.push(a)
            }
            ChatManager.getInstance(),
                this.blackListChange();
            var i = WindowManager.getInstance().getWindow(WindowManager.windowType.Guild);
            i && GuildManager.getInstance().sendGuildMemberList()
        },
        a.getBlackList = function() {
            return this.blackList
        },
        a.isInBlackList = function(t) {
            if (void 0 === t && (t = ""), 0 == t.length) return !1;
            var e = !1;
            for (var a in this.blackList) this.blackList[a].uid == t && (e = !0);
            return e
        },
        a.blackListChange = function() {
            for (var t in this.ObserverList) this.ObserverList[t].blackListUpdate()
        },
        a.addToObserverList = function(t) {
            this.ObserverList.push(t)
        },
        t
}();
