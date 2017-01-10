
var RequestManager = function() {
    function t() {
        this.needShowStoreWindow = !1
    }
    var e = (__define, t),
        a = e.prototype;
    return t.GetInstance = function() {
            return t.instance
        },
        a.RequestMsg = function(t, e, a) {
            void 0 === e && (e = void 0),
                void 0 === a && (a = !0);
            var i = Transport.getPkg(t);
            if (egret.assert(i, "must be a valid protocol id:" + t), void 0 !== e)
                for (var n in e) i[n] = e[n];
            a && WindowManager.getInstance().showWaiting(),
                Transport.instance.send(i)
        },
        a.RequestHandbookInfo = function() {
            WindowManager.getInstance().showWaiting();
            var t = Transport.getPkg(ProtocolMgr.ID_DceOwnedPaper);
            Transport.instance.send(t)
        },
        a.RequestItemList = function() {
            WindowManager.getInstance().showWaiting();
            var t = Transport.getPkg(ProtocolMgr.ID_DcePropList);
            Transport.instance.send(t)
        },
        a.RequestLockShip = function(t, e) {
            WindowManager.getInstance().showWaiting();
            var a = Transport.getPkg(ProtocolMgr.ID_DceShipLockOperation);
            a.id = t,
                a.islock = e,
                Transport.instance.send(a)
        },
        a.RequestLockPaper = function(t, e) {
            WindowManager.getInstance().showWaiting();
            var a = Transport.getPkg(ProtocolMgr.ID_DcePaperLockOperation);
            a.id = t,
                a.islock = e,
                Transport.instance.send(a)
        },
        a.RequestLockParts = function(t, e) {
            WindowManager.getInstance().showWaiting();
            var a = Transport.getPkg(ProtocolMgr.ID_DcePartsLockOpt);
            a.id = t,
                a.lock = e,
                Transport.instance.send(a)
        },
        a.requestLockSoul = function(t, e) {
            WindowManager.getInstance().showWaiting();
            var a = Transport.getPkg(ProtocolMgr.ID_DceSoulLockOpt);
            a.id = t,
                a.lock = e,
                Transport.instance.send(a)
        },
        a.requestLockCaptain = function(t, e) {
            WindowManager.getInstance().showWaiting();
            var a = Transport.getPkg(ProtocolMgr.ID_DceCaptainLockOpt);
            a.captainid = t,
                a.islock = e,
                Transport.instance.send(a)
        },
        a.enterMainWorld = function() {
            this.RequestMsg(ProtocolMgr.ID_DceAllLastID)
        },
        a.enterCampaign = function(t, e) {
            this.RequestMsg(ProtocolMgr.ID_DceStageList, {
                type: t,
                campaignID: e
            })
        },
        a.RequestSetTactic = function(t) {
            WindowManager.getInstance().showWaiting();
            for (var e = Transport.getPkg(ProtocolMgr.ID_DceSetTactic), a = 0; a < t.length - 2; a++) e.shipids[a] = t[a];
            Transport.instance.send(e)
        },
        a.enterBattle = function(t, e, a, i) {
            void 0 === i && (i = 0),
                WindowManager.getInstance().showWaiting();
            var n = Transport.getPkg(ProtocolMgr.ID_DceBattleStart);
            n.type = t,
                e && (n.targetID = e.toString()),
                a && (n.rank = a),
                n.sweep = 0,
                n.partpieceid = 0,
                n.selfrank = i,
                BattleManager.instance.showCloud(function() {
                    Transport.instance.send(n)
                })
        },
        a.enterSweepBattle = function(t, e, a, i) {
            var n = Transport.getPkg(ProtocolMgr.ID_DceBattleStart);
            n.type = t,
                e && (n.targetID = e.toString()),
                a && (n.rank = a),
                i && (n.sweep = i),
                n.partpieceid = 0,
                n.selfrank = 0,
                Transport.instance.send(n),
                WindowManager.getInstance().showWaiting()
        },
        a.ArenaExchange = function(t, e) {
            e = e ? e : 1;
            var a = Transport.getPkg(ProtocolMgr.ID_DceArenaExchange);
            a.id = t,
                a.count = e || 1,
                Transport.instance.send(a),
                WindowManager.getInstance().showWaiting()
        },
        a.GetScoutSoldier = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceScoutSoldier);
            e.uid = t,
                Transport.instance.send(e),
                WindowManager.getInstance().showWaiting()
        },
        a.enterCampBattle = function() {
            var t = this;
            ConfigData.preLoadDats(["campBattleBaseData", "campBattleMapData", "campBattleNPCData", "campBattleScoreData", "HegemonyUnlock"], [CampbattlebasedataParser, CampbattlemapdataParser, CampbattlenpcdataParser, CampbattlescoredataParser, HegemonyunlockParser],
                function() {
                    CampBattleManager.instance.checkNeedUpdate();
                    var e = CampbattlebasedataParser.GetInstance().getDataArr()[0],
                        a = HegemonyunlockParser.GetInstance().getItemById(6).needlvl;
                    if (a > UserData.getInstance()._level) Toast.launch(Locales.get("panel_limit_captain_txt_6", a));
                    else {
                        var i = 0,
                            n = UserData.getInstance().getServerTime() - UserData.getInstance().getServerStartTime(),
                            s = Math.floor(n / 1e3 / 3600 / 24);
                        i = e.beginDay - s,
                            i > 0 ? Toast.launch(Locales.get("panel_active_game_txt_comment_1")) : (CampBattleManager.needOpen = !0, t.RequestMsg(ProtocolMgr.ID_DceEnterCampBattle))
                    }
                },
                this)
        },
        a.getCampBattleData = function() {
            this.RequestMsg(ProtocolMgr.ID_DceCampBattleData)
        },
        a.campBattleMove = function(t) {
            this.RequestMsg(ProtocolMgr.ID_DceCampBattleMove, {
                target: t
            })
        },
        a.campBattleEnd = function() {
            this.RequestMsg(ProtocolMgr.ID_DceCampBattleResult)
        },
        a.buyDetect = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceCampBattleBuy);
            e.type = t,
                Transport.instance.send(e),
                WindowManager.getInstance().showWaiting()
        },
        a.setAI = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceCampBattleSetTrustee);
            e.isopen = t,
                Transport.instance.send(e),
                WindowManager.getInstance().showWaiting()
        },
        a.getShopItemData = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceShopData);
            Transport.instance.send(t),
                WindowManager.getInstance().showWaiting()
        },
        a.ShopItemBuyById = function(t, e) {
            var a = Transport.getPkg(ProtocolMgr.ID_DceBuy);
            a.id = t,
                a.count = e,
                Transport.instance.send(a),
                WindowManager.getInstance().showWaiting()
        },
        a.DResetStageCount = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceResetStageCount);
            e.stageID = t,
                Transport.instance.send(e),
                WindowManager.getInstance().showWaiting()
        },
        t.instance = new t,
        t
}();
