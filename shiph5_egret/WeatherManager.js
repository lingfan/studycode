
var UnlockManager = function() {
    function t() {
        this.panel = null,
            this.ColorText = null,
            this.ColorText_index = 1
    }
    var e = (__define, t),
        a = e.prototype;
    return a.LocalAddCampaignLock = function(t) {
            for (var e = 0,
                    a = t; e < a.length; e++) {
                var i = a[e],
                    n = Math.floor(i / 1e4),
                    s = Math.floor(i / 100 % 100),
                    r = Math.floor(i % 100),
                    o = UserData.getInstance().uid + n + s + r + "CampaignLock";
                "" == UserDefault.instance.getStringForKey(o) && UserDefault.instance.setStringForKey(o, "true")
            }
        },
        a.LocalAddSpecialCampaignLock = function(t) {
            for (var e in t) {
                var a = t[e],
                    i = UserData.getInstance().uid + a.stageID + "SpecialCampaignLock";
                "" == UserDefault.instance.getStringForKey(i) && UserDefault.instance.setStringForKey(i, "true")
            }
        },
        a.LocalAddCampaignTalk = function(t) {
            for (var e in t) {
                var a = t[e],
                    i = (Math.floor(a / 1e4), Math.floor(a / 100 % 100));
                if (CampaigndataParser.GetInstance().getItemById(i).unlockpicture.length > 0) {
                    var n = UserData.getInstance().uid + i + "CampaignTalk";
                    "" == UserDefault.instance.getStringForKey(n) && UserDefault.instance.setStringForKey(n, "true")
                }
            }
        },
        a.LocalAddCampaignTalk_Current = function(t) {
            var e = UserData.getInstance().uid + t + "CampaignTalk";
            "" == UserDefault.instance.getStringForKey(e) && UserDefault.instance.setStringForKey(e, "true")
        },
        a.LocalAddStageTalk = function(t) {
            for (var e in t) {
                var a = t[e];
                if (a.serverData && a.serverData.star >= 1 && a.baseData.unlockpicture.length > 0) {
                    var i = UserData.getInstance().uid + a.baseData.id + "StageTalk";
                    "" == UserDefault.instance.getStringForKey(i) && UserDefault.instance.setStringForKey(i, "true")
                }
            }
        },
        a.LocalAddStageTalk_Current = function(t) {
            var e = UserData.getInstance().uid + t.baseData.id + "StageTalk";
            "" == UserDefault.instance.getStringForKey(e) && UserDefault.instance.setStringForKey(e, "true")
        },
        a.SectionUnlockShow = function() {
            var e = !0;
            t.CampaignOpen = !1;
            var a = StageDataLib.instance.getAreaIdById(t.StageId),
                i = a.areaId,
                n = a.campaignId,
                s = a.stageIndex;
            if (t.StageCount == s && (e = !1), 1 == BattleManager.isNextStage) {
                a = StageDataLib.instance.getAreaIdById(t.NextStageID);
                var r = a.areaId,
                    o = a.campaignId,
                    l = a.tmpstageIndex,
                    h = UserData.getInstance().uid + r + o + l + "CampaignLock";
                "" == UserDefault.instance.getStringForKey(h) && UserDefault.instance.setStringForKey(h, "true"),
                    CampaigndataParser.GetInstance().getItemById(o).unlockpicture.length > 0 && (h = UserData.getInstance().uid + o + "CampaignTalk", "" == UserDefault.instance.getStringForKey(h) && UserDefault.instance.setStringForKey(h, "true")),
                    e = !0
            }
            if (0 == e && 1 == t.BattleWin) {
                var h = UserData.getInstance().uid + i + n + s + "CampaignLock";
                "" != UserDefault.instance.getStringForKey(h) ? e = !0 : UserDefault.instance.setStringForKey(h, "true")
            }
            return 0 == t.BattleWin ? e = !0 : t.BattleWin = !1,
                0 == e && (t.CampaignOpen = !0),
                e
        },
        a.SpecialSectionUnlockShow = function() {
            var e = !1;
            t.CampaignOpen = !1;
            var a = StagespecialdataParser.GetInstance().getItemById(t.specialStageId + 1);
            if (1 == BattleManager.isNextStage) {
                var i = UserData.getInstance().uid + a.id + "SpecialCampaignLock";
                "" == UserDefault.instance.getStringForKey(i) && UserDefault.instance.setStringForKey(i, "true"),
                    e = !0
            }
            if (1 == t.BattleWin && 1 != e) {
                var i = UserData.getInstance().uid + a.id + "SpecialCampaignLock";
                "" != UserDefault.instance.getStringForKey(i) ? e = !0 : UserDefault.instance.setStringForKey(i, "true")
            }
            0 == t.BattleWin ? e = !0 : t.BattleWin = !1;
            var n = MainWorldManager.instance.getAllLastList(),
                s = !1;
            for (var r in n) {
                var o = n[r];
                Log.logZDY(o),
                    o == a.reqStage && (s = !0)
            }
            return 1 == s || (e = !0),
                0 == e && (t.CampaignOpen = !0),
                e
        },
        a.Campaign_Talk_Check = function(t) {
            var e = !0;
            return CampaigndataParser.GetInstance().getItemById(t).unlockpicture.length > 0 ? "" != UserDefault.instance.getStringForKey(UserData.getInstance().uid + t + "CampaignTalk") && (e = !1) : e = !1,
                e
        },
        a.Stage_Talk_Check = function(t) {
            var e = !0;
            return t.baseData.unlockpicture.length > 0 ? "" != UserDefault.instance.getStringForKey(UserData.getInstance().uid + t.baseData.id + "StageTalk") && (e = !1) : e = !1,
                e
        },
        a.ChangeText = function(t, e, a, i, n) {
            n && n()
        },
        a.Campaign_talk = function(t, e) {},
        a.Stage_talk = function(t, e) {},
        t.instance = new t,
        t.CampaignOpen = !1,
        t.iconX = 0,
        t.iconY = 0,
        t.BattleWin = !1,
        t
}();
