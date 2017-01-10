
var CommunicateManager = function(t) {
    function e() {
        t.call(this),
            this.init()
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            Transport.registerHandler(ProtocolMgr.ID_DseActiveTips, this.dseActiveTipsHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseAuthState, this.dseAuthStateListHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseSetRole, this.getSetRoleResult),
                Transport.registerHandler(ProtocolMgr.ID_DseShipList, this.loadShipList),
                Transport.registerHandler(ProtocolMgr.ID_DseCaptainList, this.loadCaptainList),
                Transport.registerHandler(ProtocolMgr.ID_DseSoldierList, this.loadSoldierList),
                Transport.registerHandler(ProtocolMgr.ID_DsePartsList, this.loadPartList),
                Transport.registerHandler(ProtocolMgr.ID_DseGetWeakCamp, this.getWeakCamp),
                Transport.registerHandler(ProtocolMgr.ID_DseChangeRole, this.changeRole),
                Transport.registerHandler(ProtocolMgr.ID_DseRenameShip, this.reNameShipHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseGetCenterGold, this.handleDseGetCenterGold),
                Transport.registerHandler(ProtocolMgr.ID_DseRenameRole, this.renameRole),
                Transport.registerHandler(ProtocolMgr.ID_DseBuyOil, this.buyOil),
                Transport.registerHandler(ProtocolMgr.ID_DseUpdateShip, this.updateShip),
                Transport.registerHandler(ProtocolMgr.ID_DseUpdateCaptain, this.updateCaptain),
                Transport.registerHandler(ProtocolMgr.ID_DseUpgradeCaptain, this.upgradeCaptain),
                Transport.registerHandler(ProtocolMgr.ID_DseShipFormationLevelUp, this.shipLevelUp),
                Transport.registerHandler(ProtocolMgr.ID_DseOwnedPaper, this.dseOwnedPaper),
                Transport.registerHandler(ProtocolMgr.ID_DsePaperList, this.dsePaperListHandler),
                Transport.registerHandler(ProtocolMgr.ID_DsePaperPieceList, this.dsePaperPieceListHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseAddOwnedPaper, this.dseAddOwnedPaper),
                Transport.registerHandler(ProtocolMgr.ID_DseAddSoulOwnedPaper, this.dseAddSoulOwnedPaper),
                Transport.registerHandler(ProtocolMgr.ID_DseCaptainPaperAdd, this.dseCaptainPaperAdd),
                Transport.registerHandler(ProtocolMgr.ID_DseMilitaryRankInfo, this.dseMilitaryRankInfo),
                Transport.registerHandler(ProtocolMgr.ID_DseMilitaryRankUpgrad, this.dseMilitaryRankUpgrad),
                Transport.registerHandler(ProtocolMgr.ID_DseMilitaryRankGetDailyReward, this.dseMilitaryRankGetDailyReward),
                Transport.registerHandler(ProtocolMgr.ID_DseUserData, this.userData),
                Transport.registerHandler(ProtocolMgr.ID_DsePropList, this.loadItems),
                Transport.registerHandler(ProtocolMgr.ID_DseUseProp, this.useItemHandler),
                Transport.registerHandler(ProtocolMgr.ID_DsePaperLockOperation, this.lockPaper),
                Transport.registerHandler(ProtocolMgr.ID_DseShipLockOperation, this.lockShip),
                Transport.registerHandler(ProtocolMgr.ID_DsePartsLockOpt, this.lockPart),
                Transport.registerHandler(ProtocolMgr.ID_DsePartPieceList, this.partPieceList),
                Transport.registerHandler(ProtocolMgr.ID_DseRemouldParts, this.partsRemouldHandle),
                Transport.registerHandler(ProtocolMgr.ID_DseUpgradeParts, this.partsUpgradeHandle),
                Transport.registerHandler(ProtocolMgr.ID_DseReductionParts, this.partsReductionHandle),
                Transport.registerHandler(ProtocolMgr.ID_DseReductionPartsInfo, this.partsInfoReductionHandle),
                Transport.registerHandler(ProtocolMgr.ID_DseUpdateParts, this.partsUpdateHandle),
                Transport.registerHandler(ProtocolMgr.ID_DseDecomposeParts, this.partsDecomposeHandle),
                Transport.registerHandler(ProtocolMgr.ID_DseComposeParts, this.composeSoul),
                Transport.registerHandler(ProtocolMgr.ID_DseSoulLockOpt, this.lockSoul),
                Transport.registerHandler(ProtocolMgr.ID_DseSoulEat, this.soulEat),
                Transport.registerHandler(ProtocolMgr.ID_DseMedalPromote, this.soulRemodule),
                Transport.registerHandler(ProtocolMgr.ID_DseSoulDecompose, this.soulDecompose),
                Transport.registerHandler(ProtocolMgr.ID_DseSoulRestore, this.soulRestore),
                Transport.registerHandler(ProtocolMgr.ID_DseSoulPieceList, this.soulPieceList),
                Transport.registerHandler(ProtocolMgr.ID_DseSoul, this.soul),
                Transport.registerHandler(ProtocolMgr.ID_DseSoulList, this.loadSoulList),
                Transport.registerHandler(ProtocolMgr.ID_DseEquipSoul, this.equipSoul),
                Transport.registerHandler(ProtocolMgr.ID_DseUnAutoEquipSoul, this.equipSoul),
                Transport.registerHandler(ProtocolMgr.ID_DseAutoEquipSoul, this.equipSoul),
                Transport.registerHandler(ProtocolMgr.ID_DseComposeSouls, this.composeSoul),
                Transport.registerHandler(ProtocolMgr.ID_DseCaptainLockOpt, this.lockCaptain),
                Transport.registerHandler(ProtocolMgr.ID_DseCaptainPieceList, this.captainPieceList),
                Transport.registerHandler(ProtocolMgr.ID_DseComposeCaptain, this.composeCaptain),
                Transport.registerHandler(ProtocolMgr.ID_DseFireCaptain, this.fireCaptain),
                Transport.registerHandler(ProtocolMgr.ID_DsePromoteCaptain, this.promoteCaptain),
                Transport.registerHandler(ProtocolMgr.ID_DsePaperChargeCount, this.paperChargeCount),
                Transport.registerHandler(ProtocolMgr.ID_DseExchangeCaptainCount, this.captainChargeCount),
                Transport.registerHandler(ProtocolMgr.ID_DseExchangeCaptain, this.captainCharge),
                Transport.registerHandler(ProtocolMgr.ID_DseAutoEquipSoldier, this.autoEquipSoldier),
                Transport.registerHandler(ProtocolMgr.ID_DseCreateShip, this.createShip),
                Transport.registerHandler(ProtocolMgr.ID_DseAddShip, this.addShip),
                Transport.registerHandler(ProtocolMgr.ID_DseSetSoldier, this.setSoldier),
                Transport.registerHandler(ProtocolMgr.ID_DseEquipParts, this.equipParts),
                Transport.registerHandler(ProtocolMgr.ID_DseAllLastID, this.dseAllLastID),
                Transport.registerHandler(ProtocolMgr.ID_DseStageList, this.dseStageList),
                Transport.registerHandler(ProtocolMgr.ID_DseStageData, this.dseStageData),
                Transport.registerHandler(ProtocolMgr.ID_DseResetStageCount, this.dseResetStageCount),
                Transport.registerHandler(ProtocolMgr.ID_DseSetCaption, this.setCaption),
                Transport.registerHandler(ProtocolMgr.ID_DseSetTactic, this.setTactic),
                Transport.registerHandler(ProtocolMgr.ID_DseGetTactic, this.getTactic),
                Transport.registerHandler(ProtocolMgr.ID_DseShipFormationInfo, this.shipFormationInfo),
                Transport.registerHandler(ProtocolMgr.ID_DseChat, this.chatHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseChatMsg, this.chatMsgHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseChatMsgLog, this.chatMsgLogHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseInviteFriend, this.InviteFriend),
                Transport.registerHandler(ProtocolMgr.ID_DseDeleteFriend, this.dellFrind),
                Transport.registerHandler(ProtocolMgr.ID_DseAddFriend, this.addFriend),
                Transport.registerHandler(ProtocolMgr.ID_DseBlackList, this.blackList),
                Transport.registerHandler(ProtocolMgr.ID_DseBlackListOpt, this.blackListOpt),
                Transport.registerHandler(ProtocolMgr.ID_DseFriendList, this.friendList),
                Transport.registerHandler(ProtocolMgr.ID_DseRecommandInviteList, this.recommandList),
                Transport.registerHandler(ProtocolMgr.ID_DseInvitedList, this.inviteList),
                Transport.registerHandler(ProtocolMgr.ID_DseRecElectricList, this.receiveEle),
                Transport.registerHandler(ProtocolMgr.ID_DseSearchPlayer, this.searchPlayer),
                Transport.registerHandler(ProtocolMgr.ID_DseRefuseAddFriend, this.refuseAddFriend),
                Transport.registerHandler(ProtocolMgr.ID_DseSendElectric, this.sendEle),
                Transport.registerHandler(ProtocolMgr.ID_DseDrawElectric, this.drawEle),
                Transport.registerHandler(ProtocolMgr.ID_DseDrawAllElectric, this.drawAllEle),
                Transport.registerHandler(ProtocolMgr.ID_DseGetMailProp, this.getMailProp),
                Transport.registerHandler(ProtocolMgr.ID_DseBattleStart, this.dseBattleStart),
                Transport.registerHandler(ProtocolMgr.ID_DseBattleInfo, this.dseBattleInfo),
                Transport.registerHandler(ProtocolMgr.ID_DseBattleStartBySweep, this.dseBattleStartBySweep),
                Transport.registerHandler(ProtocolMgr.ID_DseScienceList, this.dseScienceList),
                Transport.registerHandler(ProtocolMgr.ID_DseUpgradeScience, this.dseUpgradeScience),
                Transport.registerHandler(ProtocolMgr.ID_DseAutoUpgradeScience, this.dseAutoUpgradeScience),
                Transport.registerHandler(ProtocolMgr.ID_DseSpyData, this.dseSpyData),
                Transport.registerHandler(ProtocolMgr.ID_DseSpy, this.dseSpy),
                Transport.registerHandler(ProtocolMgr.ID_DseBuySpyItem, this.dseBuySpyItem),
                Transport.registerHandler(ProtocolMgr.ID_DseShopData, this.dseShopData),
                Transport.registerHandler(ProtocolMgr.ID_DseBuy, this.dseBuy),
                Transport.registerHandler(ProtocolMgr.ID_DseMailList, this.mailList),
                Transport.registerHandler(ProtocolMgr.ID_DseSendMail, this.sendMail),
                Transport.registerHandler(ProtocolMgr.ID_DseBattleReview, this.BattleReview),
                Transport.registerHandler(ProtocolMgr.ID_DseAddMail, this.addMail),
                Transport.registerHandler(ProtocolMgr.ID_DseArmadaData, this.dseArmadaData),
                Transport.registerHandler(ProtocolMgr.ID_DseRobberyList, this.dseRobberyList),
                Transport.registerHandler(ProtocolMgr.ID_DseEnterGuard, this.dseEnterGuard),
                Transport.registerHandler(ProtocolMgr.ID_DseResetGuard, this.dseResetGuard),
                Transport.registerHandler(ProtocolMgr.ID_DseBuyGuard, this.dseBuyGuard),
                Transport.registerHandler(ProtocolMgr.ID_DseGuardStage, this.dseGuardStage),
                Transport.registerHandler(ProtocolMgr.ID_DseArenaData, this.dseArenaData),
                Transport.registerHandler(ProtocolMgr.ID_DseEnterArena, this.dseEnterArena),
                Transport.registerHandler(ProtocolMgr.ID_DseArenaList, this.dseArenaList),
                Transport.registerHandler(ProtocolMgr.ID_DseScoutSoldier, this.dseScoutSoldier),
                Transport.registerHandler(ProtocolMgr.ID_DseArenaExchange, this.dseArenaExchange),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildBattleData, this.dseGuildBattleData),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildData, this.dseGuildData),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildList, this.dseGuildList),
                Transport.registerHandler(ProtocolMgr.ID_DseCreateGuild, this.dseCreateGuild),
                Transport.registerHandler(ProtocolMgr.ID_DseSearchGuild, this.dseSearchGuild),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildApply, this.dseGuildApply),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildCancelApply, this.dseGuildCancelApply),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildScienceList, this.dseGuildScienceList),
                Transport.registerHandler(ProtocolMgr.ID_DseUpgradeGuildScience, this.dseUpgradeGuildScience),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildApplyList, this.dseGuildApplyList),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildApproval, this.dseGuildApproval),
                Transport.registerHandler(ProtocolMgr.ID_DseSetVerifyOptions, this.dseSetVerifyOptions),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildSetDeputy, this.dseGuildSetDeputy),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildFireDeputy, this.dseGuildFireDeputy),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildMemberList, this.dseGuildMemberList),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildDemise, this.dseGuildDemise),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildExpel, this.dseGuildExpel),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildQuit, this.dseGuildQuit),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildDonate, this.dseGuildDonate),
                Transport.registerHandler(ProtocolMgr.ID_DseModifyNotify, this.dseModifyNotify),
                Transport.registerHandler(ProtocolMgr.ID_DseModifyDeclaration, this.dseModifyDeclaration),
                Transport.registerHandler(ProtocolMgr.ID_DseRenameGuild, this.dseRenameGuild),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildSetMedal, this.dseGuildSetMedal),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildDismiss, this.dseGuildDismiss),
                Transport.registerHandler(ProtocolMgr.ID_DseGuildUpgrade, this.dseGuildUpgrade),
                Transport.registerHandler(ProtocolMgr.ID_DseRankList, this.ranklist),
                Transport.registerHandler(ProtocolMgr.ID_DseTaskRewardData, this.taskHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseGetTaskReward, this.taskGetHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseMedalData, this.medalMsg),
                Transport.registerHandler(ProtocolMgr.ID_DseGetMedal, this.getMedal),
                Transport.registerHandler(ProtocolMgr.ID_DseEnterCampBattle, this.dseEnterCampBattle),
                Transport.registerHandler(ProtocolMgr.ID_DseCampBattleData, this.dseCampBattleData),
                Transport.registerHandler(ProtocolMgr.ID_DseCampBattleMsg, this.dseCampBattleMsg),
                Transport.registerHandler(ProtocolMgr.ID_DseCampBattleMove, this.dseCampBattleMove),
                Transport.registerHandler(ProtocolMgr.ID_DseCampBattleResult, this.dseCampBattleResult),
                Transport.registerHandler(ProtocolMgr.ID_DseCampBattleBuy, this.dseCampBattleBuy),
                Transport.registerHandler(ProtocolMgr.ID_DseCampBattleSetTrustee, this.dseCampBattleSetTrustee),
                Transport.registerHandler(ProtocolMgr.ID_DseBroadcast, this.dseBroadCast),
                Transport.registerHandler(ProtocolMgr.ID_DseRetireShip, this.dseRetireShip),
                Transport.registerHandler(ProtocolMgr.ID_DseSalePaper, this.dseSalePaper),
                Transport.registerHandler(ProtocolMgr.ID_DseOnLineTime, this.onlineTime),
                Transport.registerHandler(ProtocolMgr.ID_DseAwardCenter, this.awardCenter),
                Transport.registerHandler(ProtocolMgr.ID_DseGetAward, this.getAward),
                Transport.registerHandler(ProtocolMgr.ID_DseCaptainData, this.dseCaptainData),
                Transport.registerHandler(ProtocolMgr.ID_DseBuyRecruitItem, this.dseBuyRecruitItem),
                Transport.registerHandler(ProtocolMgr.ID_DseRecruitCaptain, this.dseRecruitCaptain),
                Transport.registerHandler(ProtocolMgr.ID_DseChargePaper, this.dseChargePaper),
                Transport.registerHandler(ProtocolMgr.ID_DseTrain, this.trainHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseUpgradeShip, this.shipUpgradeHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseUpgradeSkill, this.shipSkillHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseActivityWebData, this.dseActivityWebData),
                Transport.registerHandler(ProtocolMgr.ID_DseActivityData, this.dseActivityData),
                Transport.registerHandler(ProtocolMgr.ID_DseActivity, this.dseActivity),
                Transport.registerHandler(ProtocolMgr.ID_DseRemouldShip, this.dseRemouldShip),
                Transport.registerHandler(ProtocolMgr.ID_DseHeartbeat, this.DseHeartbeat),
                Transport.registerHandler(ProtocolMgr.ID_DseFocusAward, this.OnFocusAward),
                Transport.registerHandler(ProtocolMgr.ID_DseRechargeInfo, this.payBackHandler),
                Transport.registerHandler(ProtocolMgr.ID_DseExchangeCode, this.OnExchangeCode)
        },
        i.OnExchangeCode = function(t) {
            switch (t.res) {
                case 0:
                    Toast.launch("兑换成功");
                    break;
                case 1:
                    Toast.launch("您已兑换过");
                    break;
                case 2:
                    Toast.launch("不存在该兑换码")
            }
        },
        i.payBackHandler = function(t) {
            var e = PlatformManager.instance.payInfo;
            null != e && (Plantform.getInstanceOf().pay(e.price, e.count, e.itemName, t.cash), Toast.launch("支付成功"))
        },
        i.DseHeartbeat = function(t) {
            RechargeManager.instance.HandleHeartBeat(t.time)
        },
        i.OnFocusAward = function(t) {
            UserData.getInstance().focus_award = !0,
                HomeUI.instance.SetSubscribe()
        },
        i.dseAuthStateListHandler = function(t) {
            if (t.pass) {
                if (Main.instance.startCreateScene(), !e._firstAuth) return void(Main.instance.loadingPanel && (GameLayer.getInstance().showAll(), Main.instance.clearLoadingPanel()));
                Main.instance.loadingPanel.showLoading(),
                    Main.instance.loadingPanel.setLoadLabel("数据通信中，正在加载母港"),
                    Main.instance.loadingPanel.setProgress(0, 100),
                    Main.instance.loadingPanel.clearPercentMap(),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseUserData),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseShipList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseCaptainList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DsePaperList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DsePaperPieceList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseSoldierList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DsePartsList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseSoulList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseTaskRewardData),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseGuildData),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseGuildScienceList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseCaptainData),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseShipFormationInfo),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseCaptainPieceList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DseMailList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceUserData),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceShipList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceCaptainList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DcePaperList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DcePaperPieceList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceSoldierList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DcePartsList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceSoulList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceTaskRewardData),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceGuildData),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceGuildScienceList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceCaptainData),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceShipFormationInfo),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceCaptainPieceList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceMailList),
                    Main.instance.loadingPanel.registerPercentMap(10, ProtocolMgr.ID_DceActivityWebData),
                    e._firstAuth = !1
            } else Toast.launch("登录失败!", 16711680);
            UserData.getInstance().setServerTime(1e3 * t.time);
            var t = Transport.getPkg(ProtocolMgr.ID_DceUserData);
            Transport.instance.send(t)
        },
        i.dseActiveTipsHandler = function(t) {
            UserData.getInstance().activeTips = t,
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.ACTIVETIPS)),
                EventManager.instance.dispatchEvent(EventTypes.RED_BALL_UPDATE),
                EventManager.instance.dispatchEvent(EventTypes.HOMEUI_REDBALL_STATE_CHANGE),
                HomeUI.instance && HomeUI.instance.updataRedPoint(t)
        },
        i.getSetRoleResult = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.ChooseCamp);
            e && WindowManager.getInstance().getWindow(WindowManager.windowType.ChooseCamp).getSetRoleResult(t)
        },
        i.reNameShipHandler = function(t) {
            0 == t.res ? (Utils.getListByKeyValue("id", t.shipid, ShipManager.getInstance().shipList)[0].name = t.name, WindowManager.getInstance().hide(WindowManager.windowType.NameChange), Toast.launch("更名成功")) : Toast.launch("更名失败")
        },
        i.getWeakCamp = function(t) {
            WindowManager.getInstance().getWindow(WindowManager.windowType.ChooseCamp).getWeakCamp(t)
        },
        i.changeRole = function(t) {
            WindowManager.getInstance().getWindow(WindowManager.windowType.ChooseCamp).getChangeRoleHeadResult(t)
        },
        i.handleDseGetCenterGold = function(t) {
            WindowManager.getInstance().getWindow(WindowManager.windowType.BuJi).getCenterGoldResult(t)
        },
        i.loadShipList = function(t) {
            ShipManager.getInstance().shipList = t.shiplist
        },
        i.loadCaptainList = function(t) {
            CaptainData.updateList(t)
        },
        i.loadPartList = function(t) {
            WindowManager.getInstance().hideWaiting(),
                t.parts && (ShipManager.getInstance().partsList = t.parts.list, GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.REFRESH_PARTS_DATA)))
        },
        i.loadSoulList = function(t) {
            t.soul && (SoulManager.soulScene = t.soulscene + 1, ShipManager.getInstance().soulList = t.soul.list, SoulManager.getInstance().refreshSolusPage())
        },
        i.loadSoldierList = function(t) {
            ShipManager.getInstance().soldierList = t.soldierlist,
                ShipManager.getInstance().captionId = t.captionid
        },
        i.renameRole = function(t) {
            var e = "";
            switch (t.res) {
                case 0:
                    console.log(t.res + t.name),
                        e = "更名成功",
                        WindowManager.getInstance().hide(WindowManager.windowType.NameChange);
                    break;
                case 1:
                    console.log(t.res + t.name),
                        e = "名字重复";
                    break;
                case 3:
                    console.log(t.res + t.name),
                        e = "道具或钻石不足";
                    break;
                default:
                    console.log(t.res + t.name)
            }
            e.length > 0 && Toast.launch(e)
        },
        i.buyOil = function(t) {
            var e = "";
            switch (t.res) {
                case 0:
                    if (e = "购买成功", WindowManager.getInstance().isWindowVisible(WindowManager.windowType.OilRefining)) {
                        var a = WindowManager.getInstance().getWindow(WindowManager.windowType.OilRefining);
                        a.update()
                    }
                    break;
                case 1:
                    e = "钻石不足";
                    break;
                case 2:
                    e = "购买次数不足"
            }
            e.length > 0 && Toast.launch(e, 16777215, !1, 300)
        },
        i.dseOwnedPaper = function(t) {
            if (WindowManager.getInstance().hideWaiting(), WindowManager.getInstance().isWindowVisible(WindowManager.windowType.WarshipHandbook)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.WarshipHandbook);
                e.setData(t)
            }
        },
        i.dsePaperListHandler = function(t) {
            ShipManager.getInstance().setPaperData(t.paperlist),
                ShipManager.getInstance().updateShipArrangeSpot()
        },
        i.dsePaperPieceListHandler = function(t) {
            ShipManager.getInstance().setPaperPieceData(t.paperpiecelist)
        },
        i.dseMilitaryRankInfo = function(t) {
            WindowManager.getInstance().hideWaiting(),
                MilitaryManager.GetInstance().SetPkg(t),
                MilitaryManager.GetInstance().MilitaryTips()
        },
        i.dseMilitaryRankUpgrad = function(t) {
            WindowManager.getInstance().hideWaiting(),
                t.issucess && (EventManager.instance.dispatchEvent(EventTypes.EVENT_MILITARY_RANK_UPGRADE), SceneManager.instance.curSceneType == SceneType.BATTLE ? UserData.getInstance().lvUpgradeFlag = !0 : WindowManager.getInstance().show(WindowManager.windowType.Upgrade, {
                    isLevelUp: !1,
                    to: t.uptolevel
                }))
        },
        i.dseMilitaryRankGetDailyReward = function(t) {
            WindowManager.getInstance().hideWaiting(),
                t.issucess && (MilitaryManager.GetInstance().pkgData.hasreward = !0, EventManager.instance.dispatchEvent(EventTypes.EVENT_MILITARY_RANK_REWARD), Toast.launch("领取成功"))
        },
        i.userData = function(t) {
            UserData.getInstance().setData(t),
                e.initedUserData || (e.initedUserData = !0, egret.callLater(function() {
                        var t = Transport.getPkg(ProtocolMgr.ID_DceShipList);
                        Transport.instance.send(t),
                            egret.callLater(function() {
                                    t = Transport.getPkg(ProtocolMgr.ID_DceCaptainList),
                                        Transport.instance.send(t),
                                        egret.callLater(function() {
                                                t = Transport.getPkg(ProtocolMgr.ID_DcePaperList),
                                                    Transport.instance.send(t),
                                                    egret.callLater(function() {
                                                            t = Transport.getPkg(ProtocolMgr.ID_DcePaperPieceList),
                                                                Transport.instance.send(t),
                                                                egret.callLater(function() {
                                                                        t = Transport.getPkg(ProtocolMgr.ID_DceSoldierList),
                                                                            Transport.instance.send(t),
                                                                            egret.callLater(function() {
                                                                                    t = Transport.getPkg(ProtocolMgr.ID_DcePartsList),
                                                                                        Transport.instance.send(t),
                                                                                        egret.callLater(function() {
                                                                                                t = Transport.getPkg(ProtocolMgr.ID_DceSoulList),
                                                                                                    Transport.instance.send(t),
                                                                                                    egret.callLater(function() {
                                                                                                            t = Transport.getPkg(ProtocolMgr.ID_DceShipFormationInfo),
                                                                                                                Transport.instance.send(t),
                                                                                                                egret.callLater(function() {
                                                                                                                        t = Transport.getPkg(ProtocolMgr.ID_DceCaptainPieceList),
                                                                                                                            Transport.instance.send(t),
                                                                                                                            egret.callLater(function() {
                                                                                                                                    t = Transport.getPkg(ProtocolMgr.ID_DceMailList),
                                                                                                                                        t.type = 1,
                                                                                                                                        Transport.instance.send(t),
                                                                                                                                        t = Transport.getPkg(ProtocolMgr.ID_DceMailList),
                                                                                                                                        t.type = 2,
                                                                                                                                        Transport.instance.send(t),
                                                                                                                                        egret.callLater(function() {
                                                                                                                                                t = Transport.getPkg(ProtocolMgr.ID_DceTaskRewardData),
                                                                                                                                                    Transport.instance.send(t),
                                                                                                                                                    egret.callLater(function() {
                                                                                                                                                            t = Transport.getPkg(ProtocolMgr.ID_DceGuildData),
                                                                                                                                                                Transport.instance.send(t),
                                                                                                                                                                egret.callLater(function() {
                                                                                                                                                                        t = Transport.getPkg(ProtocolMgr.ID_DceGuildScienceList),
                                                                                                                                                                            Transport.instance.send(t),
                                                                                                                                                                            egret.callLater(function() {
                                                                                                                                                                                    t = Transport.getPkg(ProtocolMgr.ID_DceCaptainData),
                                                                                                                                                                                        Transport.instance.send(t),
                                                                                                                                                                                        egret.callLater(function() {
                                                                                                                                                                                                t = Transport.getPkg(ProtocolMgr.ID_DceActivityWebData),
                                                                                                                                                                                                    t.type = 19,
                                                                                                                                                                                                    Transport.instance.send(t)
                                                                                                                                                                                            },
                                                                                                                                                                                            void 0)
                                                                                                                                                                                },
                                                                                                                                                                                void 0)
                                                                                                                                                                    },
                                                                                                                                                                    void 0)
                                                                                                                                                        },
                                                                                                                                                        void 0)
                                                                                                                                            },
                                                                                                                                            void 0)
                                                                                                                                },
                                                                                                                                void 0)
                                                                                                                    },
                                                                                                                    void 0)
                                                                                                        },
                                                                                                        void 0)
                                                                                            },
                                                                                            void 0)
                                                                                },
                                                                                void 0)
                                                                    },
                                                                    void 0)
                                                        },
                                                        void 0)
                                            },
                                            void 0)
                                },
                                void 0)
                    },
                    void 0), Transport.instance.send(t))
        },
        i.loadItems = function(t) {
            WindowManager.getInstance().hideWaiting(),
                ItemsManager.getInstance().setData(t.proplist);
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Store);
            e ? e.updatePage() : RequestManager.GetInstance().needShowStoreWindow && (RequestManager.GetInstance().needShowStoreWindow = !1, WindowManager.getInstance().show(WindowManager.windowType.Store)),
                EventManager.instance.dispatchEvent(EventTypes.ITEM_DATA_UPDATE),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SHIP_UPDATE)),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SoldierList_update)),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SCIENCE_ITEM_COUNT_UPDATE)),
                ShipManager.getInstance().updateShipArrangeSpot()
        },
        i.useItemHandler = function(t) {
            WindowManager.getInstance().hideWaiting();
            var e = function(t, e, a) {
                if (1 == a)
                    if (0 == t) null == e ? Toast.launch(Locales.get("panel_bag_txt_windword_3")) : Toast.launch(Locales.get("panel_bag_txt_windword_6"));
                    else if (1 == t) Toast.launch(Locales.get("panel_bag_txt_windword_4"));
                else if (2 == t) {
                    var i = ItemParser.GetInstance().getItemById(e);
                    if (ItemsManager.getInstance().getItemById(e) || ItemsManager.getInstance().getItemById(i.twinLukcyBoxId)) {
                        var n = ItemParser.GetInstance().getItemById(i.keyId);
                        Toast.launch(Locales.get("panel_bag_txt_windword_1") + n.name_l + Locales.get("panel_bag_txt_windword_2"))
                    } else Toast.launch(Locales.get("panel_bag_txt_windword_1") + i.name_l + Locales.get("panel_bag_txt_windword_2"))
                } else 3 == t ? Toast.launch(Locales.get("panel_bag_txt_windword_5")) : 5 == t && 1076 == e ? Toast.launch(Locales.get("panel_bag_txt_windword_oil")) : Toast.launch(Locales.get("panel_bag_txt_windword_6"))
            };
            if (0 == t.res) {
                if (t.droplist.droplist.length > 0) {
                    var a = ItemParser.GetInstance().getItemById(t.id);
                    if (a && 2 == a.type && 1 == a.iswallet)
                        if (1076 == t.id) Toast.launch(Locales.get("panel_shop_txt_windword_9") + Locales.get("panel_shop_txt_windword_10", (25 * t.droplist.droplist.length).toString()));
                        else if (1121 == t.id) Toast.launch(Locales.get("panel_shop_txt_windword_11", (2 * t.droplist.droplist.length).toString()));
                    else if (1131 == t.id) Toast.launch(Locales.get("panel_shop_txt_windword_9") + Locales.get("panel_shop_txt_windword_13", (5 * t.droplist.droplist.length).toString()));
                    else if (1132 == t.id) Toast.launch(Locales.get("panel_shop_txt_windword_9") + Locales.get("panel_shop_txt_windword_13", (10 * t.droplist.droplist.length).toString()));
                    else if (1344 == t.id) Toast.launch(Locales.get("panel_shop_txt_windword_9") + Locales.get("panel_shop_txt_windword_17", (t.droplist.droplist.length * t.droplist.droplist[1].count).toString()));
                    else {
                        var i = ItemParser.GetInstance().getItemById(t.id);
                        i && Toast.launch(Locales.get("panel_shop_txt_windword_9") + i.name_l)
                    } else a && 2 == a.type ? ItemsManager.getInstance().showDropTips(t.droplist.droplist) : a && 6 == a.type ? ItemsManager.getInstance().showDropTips(t.droplist.droplist) : 1 == t.useten ? ItemsManager.getInstance().showDropTips(t.droplist.droplist) : 2 == t.useten ? ItemsManager.getInstance().showDropTips(t.droplist.droplist) : ItemsManager.getInstance().showDropTips(t.droplist.droplist)
                } else 0 == t.droplist.droplist.length && e(t.res, null, 1);
                t.integral > 0 && Toast.launch(Locales.get("panel_shop_txt_windword_12", t.integral))
            } else e(t.res, t.id, 1)
        },
        i.lockShip = function(t) {
            WindowManager.getInstance().hideWaiting()
        },
        i.lockPaper = function(t) {
            WindowManager.getInstance().hideWaiting()
        },
        i.trainHandler = function(t) {
            var e = t.res,
                a = t.type;
            if (0 == e) AudioManager.instance.playSound(AudioManager.SOUND_OPEN_BOX),
                Toast.launch(Locales.get("panel_train_txt_windword_1"), 16777215, !0, 355),
                WindowManager.getInstance().getWindow(WindowManager.windowType.OperatePanel) && WindowManager.getInstance().getWindow(WindowManager.windowType.OperatePanel).setTrainBtnEanbled();
            else if (1 == e) 2 == a || 5 == a ? Toast.launch(Locales.get("panel_train_txt_windword_8"), 16777215, !0, 355) : Toast.launch(Locales.get("panel_train_txt_windword_2"), 16777215, !0, 355);
            else if (2 == e) Toast.launch(Locales.get("panel_train_txt_windword_3"), 16777215, !0, 355);
            else if (4 == e) Toast.launch(Locales.get("panel_train_txt_windword_4"), 16777215, !0, 355);
            else if (7 == e) Toast.launch(Locales.get("panel_train_txt_windword_7"), 16777215, !0, 355);
            else if (110 == e || 3 == e) {
                for (var i = 100,
                        n = 0,
                        s = VipParser.GetInstance().getDataArr(); n < s.length; n++) {
                    var r = s[n];
                    if (1 == r.autoTrainTen) {
                        i = r.level;
                        break
                    }
                }
                Toast.launch(Locales.get("panel_train_txt_windword_110", i), 16777215, !0, 355)
            }
        },
        i.shipSkillHandler = function(t) {
            4 != t.res && -1 != t.res && Toast.launch(Locales.get("panel_skill_txt_windword_" + (t.res + 1)))
        },
        i.shipUpgradeHandler = function(t) {
            Toast.launch(Locales.get("panel_science_science_txt_windword_" + (t.res + 1)))
        },
        i.lockPart = function(t) {
            WindowManager.getInstance().hideWaiting(),
                PartsManager.getInstance().handleLockPartMessage(t)
        },
        i.lockSoul = function(t) {
            WindowManager.getInstance().hideWaiting(),
                SoulManager.getInstance().handleLockSoulMessage(t)
        },
        i.lockCaptain = function(t) {
            WindowManager.getInstance().hideWaiting(),
                CaptainManager.getInstance().handleLockCaptainMessage(t)
        },
        i.autoEquipSoldier = function(t) {
            WindowManager.getInstance().hideWaiting()
        },
        i.createShip = function(t) {
            WindowManager.getInstance().hideWaiting()
        },
        i.addShip = function(t) {
            ShipManager.getInstance().addShip(t.ship)
        },
        i.setSoldier = function(t) {
            WindowManager.getInstance().hideWaiting()
        },
        i.equipParts = function(t) {
            WindowManager.getInstance().hideWaiting()
        },
        i.setCaption = function(t) {
            WindowManager.getInstance().hideWaiting(),
                0 == t.res && (ShipManager.getInstance().captionId = t.captionid, GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SoldierList_update)))
        },
        i.setTactic = function(t) {
            WindowManager.getInstance().hideWaiting()
        },
        i.getTactic = function(t) {
            WindowManager.getInstance().hideWaiting();
            for (var e = 0; e < t.tactic.shiplist.length; e++) ShipManager.getInstance().tacticList[e] = t.tactic.shiplist[e].id;
            WindowManager.getInstance().needShowWindow && (WindowManager.getInstance().needShowWindow = !1, WindowManager.getInstance().show(WindowManager.windowType.FormatTeam))
        },
        i.captainPieceList = function(t) {
            CaptainData.updatePieceList(t),
                ShipManager.getInstance().updateShipArrangeSpot()
        },
        i.composeCaptain = function(t) {
            CaptainManager.getInstance().handleComposeCaptainMessage(t)
        },
        i.fireCaptain = function(t) {
            CaptainManager.getInstance().handleFireCaptainMessage(t)
        },
        i.promoteCaptain = function(t) {
            Toast.launch(Locales.get("panel_jianzhang_jinsheng_wind_" + (t.res + 1))),
                0 == t.res && GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.CAPTAIN_UPDATE))
        },
        i.partPieceList = function(t) {
            WindowManager.getInstance().hideWaiting(),
                PiecesManager.getInstance().partsPieces = t.partpiecelist
        },
        i.soulRemodule = function(t) {
            Toast.launch(Locales.get("Decorationgaizao_wind_" + (t.result + 1))),
                0 == t.result && GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SOULS_REMOUDLE))
        },
        i.soulEat = function(t) {
            0 == t.res ? (GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SOULS_UPDATE)), SoulManager.getInstance().refreshSolusPage()) : 1 == t.res ? Toast.launch("非法勋章") : 2 == t.res ? Toast.launch("等级已满") : 3 == t.res ? Toast.launch("玩家等级不足") : 4 == t.res ? Toast.launch("升级超出当前最高等级") : 5 == t.res ? Toast.launch("列表有非法勋章") : 6 == t.res && Toast.launch("选择勋章已被锁")
        },
        i.soulDecompose = function(t) {
            console.log("回收勋章结果(0 成功 1 不能分解 2 未知错误):" + t.result),
                console.log("勋章id(如果分解失败，此字段对应失败的勋章对应表里的id):" + t.id),
                console.log("勋章soulid(如果分解失败，此字段对应客户端传来的失败id):" + t.soulid),
                0 == t.result ? (SoulManager.getInstance().refreshSoulsByDecompose(t), Toast.launch("分解成功")) : 1 == t.result ? Toast.launch("不能分解") : 2 == t.result && Toast.launch("未知错误")
        },
        i.soulRestore = function(t) {
            console.log("还原勋章结果(0 成功 1 不能还原 2 钻石不足 3 未知错误):" + t.result),
                console.log("exploit:" + t.exploit),
                console.log("exp:" + t.exp),
                console.log("还原的勋章对应表里的id:" + t.id),
                0 == t.result ? SoulManager.getInstance().refreshSoulsByRestore(t) : 1 == t.result ? Toast.launch("不能还原") : 2 == t.result ? Toast.launch("钻石不足") : 3 == t.result && Toast.launch("未知错误")
        },
        i.soulPieceList = function(t) {
            WindowManager.getInstance().hideWaiting(),
                PiecesManager.getInstance().medalPieces = t.soulpiecelist
        },
        i.soul = function(t) {
            if (0 == t.res) SoulManager.getInstance().soulPanel(t);
            else {
                var e = ""; - 1 == t.res ? e = "非法场景" : -2 == t.res ? e = "金币不足" : -3 == t.res ? e = "探宝失败" : 1 == t.res ? e = "探宝令不足" : 2 == t.res ? e = "钻石不足" : 3 == t.res ? e = "四级场景无法高级探宝" : 4 == t.res && (e = "vip等级不足"),
                    Toast.launch(e)
            }
        },
        i.equipSoul = function(t) {
            WindowManager.getInstance().hideWaiting()
        },
        i.composeSoul = function(t) {
            if (WindowManager.getInstance().hideWaiting(), 0 == t.res) {
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.MERGE_COMPLETE));
                var e;
                WindowPrecious.selectedItem && (WindowPrecious.selectedItem.medal ? (e = ConfigData.getDataByKey("medalpiece", WindowPrecious.selectedIndex), e = ConfigData.getDataByKey("medalData", e.medal_id), Toast.launch("合成成功,获得#" + QualitySystem.getColorByQuality(e.quality).toString(16) + MedaldataParser.GetInstance().getItemById(e.id).name_l + "x" + t.count + "#", 16777215, !0)) : (e = ConfigData.getDataByKey("partspieces", WindowPrecious.selectedIndex), e = ConfigData.getDataByKey("parts", e.part_id), Toast.launch("合成成功,获得#" + QualitySystem.getColorByQuality(e.quality).toString(16) + e.name_l + "x" + t.count + "#", 16777215, !0)))
            }
        },
        i.partsRemouldHandle = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian);
            e && e.refreshPartsByUpgrade({
                    id: t.id,
                    all: t.all,
                    res: t.res
                }),
                Toast.launch(Locales.get("panel_parts_transform_txt_windword_" + (t.res + 1)))
        },
        i.partsUpgradeHandle = function(t) {
            0 != t.res && Toast.launch(Locales.get("panel_accessories_own_txt_windword_" + (t.res + 1)));
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian);
            e && e.refreshPartsByUpgrade({
                id: t.id,
                all: t.all,
                res: t.res,
                addlist: t.addlist
            })
        },
        i.partsReductionHandle = function(t) {
            console.log("还原配件结果(0 成功):" + t.sucess),
                console.log("返还的科技点:" + t.point),
                console.log("返还的金币:" + t.gold),
                console.log(":" + t.parttype);
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian);
            e && e.refreshPartsByReduction({
                sucess: t.sucess,
                point: t.point,
                gold: t.gold
            })
        },
        i.partsInfoReductionHandle = function(t) {
            RetiredAlert.getInstance().showParts(t, PartsManager.getInstance().tmpPartId)
        },
        i.partsUpdateHandle = function(t) {
            ShipManager.getInstance().updatePartsList(t.parts)
        },
        i.partsDecomposeHandle = function(t) {
            console.log("回收的配件id列表:" + t.partsidlist),
                console.log(":" + t.type),
                console.log("回收结果(0 成功 1 非法id 2 金币不足):" + t.res);
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian);
            e.refreshPartsByDecompose({
                partsidlist: t.partsidlist,
                type: t.type,
                res: t.res
            })
        },
        i.paperChargeCount = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.ExchangeBlueprint);
            e.setPaperChargeCountData(t)
        },
        i.captainChargeCount = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.ExchangeCaptain);
            e.setCaptainChargeCountData(t)
        },
        i.captainCharge = function(t) {
            switch (t.res) {
                case -1:
                    Toast.launch("等级必须达到50级");
                    break;
                case 0:
                    Toast.launch("兑换成功");
                    var e = WindowManager.getInstance().getWindow(WindowManager.windowType.ExchangeCaptain);
                    e.sendCaptainChargeCountMsg();
                    break;
                case 1:
                    Toast.launch("非法ID");
                    break;
                case 2:
                    Toast.launch("非法类型");
                    break;
                case 3:
                    Toast.launch("将魂不足")
            }
        },
        i.dseAllLastID = function(t) {
            if (WindowManager.getInstance().hideWaiting(), MainWorldManager.instance.initCampaign(t.stagelist, t.stagedatalist, t.laststageid), WindowManager.getInstance().isWindowVisible(WindowManager.windowType.PVE)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.PVE);
                e.switchType(MainWorldManager.BATTLE_TYPE_NORMAL)
            } else(SceneManager.instance.curSceneType = SceneType.HOME) && WindowManager.getInstance().show(WindowManager.windowType.PVE, {
                type: BattleType.BATTLE_TYPE_MAIN_PVE
            })
        },
        i.dseStageList = function(t) {
            WindowManager.getInstance().hideWaiting(),
                3 == t.type ? StageData.init(t) : (2 == t.type && SceneManager.instance.curSceneType == SceneType.HOME && (WindowManager.getInstance().isWindowVisible(WindowManager.windowType.PVE) || WindowManager.getInstance().show(WindowManager.windowType.PVE, {
                    type: BattleType.BATTLE_TYPE_MAIN_SPECIAL
                })), MainWorldManager.instance.openCampaignPanel(t))
        },
        i.dseStageData = function(t) {
            EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_UPDATE_STAGE, t)
        },
        i.dseResetStageCount = function(t) {
            WindowManager.getInstance().hideWaiting();
            var e = t.res;
            if (0 == e) {
                Toast.launch(Locales.get("BuyStageCountPanel_txt_wind_0"));
                for (var a = 0,
                        i = MainStageOptData.stages; a < i.length; a++) {
                    var n = i[a];
                    if (n.baseData.id == t.stageID) {
                        n.serverData.todaybuyCnt++,
                            n.serverData.todayCount = 0,
                            EventManager.instance.dispatchEvent(EventTypes.PVE_ATTACK_TIMES_UPDATE);
                        break
                    }
                }
            } else 1 == e ? Toast.launch(Locales.get("BuyStageCountPanel_txt_wind_1")) : 2 == e ? Toast.launch(Locales.get("BuyStageCountPanel_txt_wind_2")) : 3 == e && Toast.launch(Locales.get("BuyStageCountPanel_txt_wind_3"))
        },
        i.shipFormationInfo = function(t) {
            ShipManager.getInstance().setShipFormationInfo(t)
        },
        i.updateShip = function(t) {
            ShipManager.getInstance().updateShipList(t.ships)
        },
        i.updateCaptain = function(t) {
            CaptainData.updateCaptain(t.captain)
        },
        i.upgradeCaptain = function(t) {
            Toast.launch(Locales.get("panel_jianzhang_upgrade_wind_" + (t.res + 1)))
        },
        i.shipLevelUp = function(t) {
            -1 == t.errorcode ? Toast.launch("升级成功！") : Toast.launch("升级失败！")
        },
        i.chatHandler = function(t) {
            var e = "";
            switch (console.log(t.chattimes), t.res) {
                case 0:
                    ChatManager.getInstance().chatTimes = t.chattimes;
                    break;
                case 1:
                    e = "CD未到";
                    break;
                case 2:
                    e = "没有该聊天类型";
                    break;
                case 3:
                    e = "没有军团";
                    break;
                case 4:
                    e = "该玩家不存在";
                    break;
                case 5:
                    e = "该玩家不在线";
                    break;
                case 6:
                    e = "等级不够";
                    break;
                case 7:
                    e = "给自己发";
                    break;
                case 8:
                    e = "文字太长";
                    break;
                case 9:
                    e = "次数或者钻石不足"
            }
            e.length > 0 && Toast.launch(e)
        },
        i.chatMsgHandler = function(t) {
            ChatManager.getInstance().hasNewMsg(t)
        },
        i.chatMsgLogHandler = function(t) {
            ChatManager.getInstance().chatTimes = t.chattimes,
                ChatManager.getInstance().setMsgListWorld(t.msglist),
                ChatManager.getInstance().setMsgListCamp(t.campmsglist),
                ChatManager.getInstance().setMsgListGroup(t.guildmsglist)
        },
        i.InviteFriend = function(t) {
            var e = "";
            switch (t.result) {
                case 0:
                    e = "邀请成功,等待对方确认";
                    break;
                case 1:
                    e = "对方已经是好友";
                    break;
                case 2:
                    e = "达到当日邀请上限";
                    break;
                case 3:
                    e = "好友数量达到上限";
                    break;
                case 4:
                    e = "没找到该人";
                    break;
                case 5:
                    e = "不能邀请自己"
            }
            e.length > 0 && Toast.launch(e)
        },
        i.dellFrind = function(t) {
            switch (t.result) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    GameData.uid = t.name,
                        Transport.instance.onSocketOpen();
                    break;
                case 4:
                    Transport.instance.loginConnect(GameData.longId)
            }
        },
        i.blackList = function(t) {
            BlackListManager.GetInstance().setBlackList(t)
        },
        i.blackListOpt = function(t) {
            var e = "";
            switch (t.res) {
                case 0:
                    e = "成功";
                    break;
                case 1:
                    e = "非法操作类型";
                    break;
                case 2:
                    e = "达到上限，无法添加";
                    break;
                case 3:
                    e = "该玩家已在黑名单";
                    break;
                case 4:
                    e = "该玩家不在黑名单，无法删除"
            }
            e.length > 0 && Toast.launch(e)
        },
        i.friendList = function(t) {
            FriendManager.getInstance().setMyFriendList(t)
        },
        i.recommandList = function(t) {
            FriendManager.getInstance().setRecommandList(t)
        },
        i.inviteList = function(t) {
            FriendManager.getInstance().setInvitedlist(t)
        },
        i.receiveEle = function(t) {
            FriendManager.getInstance().setReceiveElecList(t)
        },
        i.searchPlayer = function(t) {
            FriendManager.getInstance().setSearchData(t)
        },
        i.refuseAddFriend = function(t) {
            0 == t.result
        },
        i.sendEle = function(t) {
            var e = "";
            switch (t.result) {
                case 0:
                    e = "成功",
                        FriendManager.getInstance().sendEleSucess(t);
                    break;
                case 1:
                    e = "当日已经赠送";
                    break;
                case 2:
                    e = "赠送对象不存在";
                    break;
                case 3:
                    e = "已经不是好友";
                    break;
                case 4:
                    e = "没有好友可以赠送"
            }
            e.length > 0 && Toast.launch(e)
        },
        i.drawEle = function(t) {
            var e = "";
            switch (t.result) {
                case 0:
                    e = "成功领取并赠送";
                    break;
                case 1:
                    e = "成功领取但已经赠送";
                    break;
                case 2:
                    e = "超过当日领取上限";
                    break;
                case 3:
                    e = "找不到这条赠送记录";
                    break;
                case 4:
                    e = "回赠的人找不到";
                    break;
                case 5:
                    e = "已经领取但对方不是好友,不能回赠";
                    break;
                case 6:
                    e = "寻宝令数量达上限"
            }
            e.length > 0 && Toast.launch(e),
                FriendManager.getInstance().setEleGetNum(t.drawnum)
        },
        i.drawAllEle = function(t) {
            var e = "";
            e = t.successdraw > 0 ? "成功领取" + t.successdraw + "个掠夺令" : "已到上限，领取失败",
                e.length > 0 && Toast.launch(e),
                FriendManager.getInstance().setEleGetNum(t.drawnum)
        },
        i.addFriend = function(t) {
            var e = "";
            switch (t.result) {
                case 1:
                    e = "成功";
                    break;
                case 2:
                    e = "好友数量达到上限";
                    break;
                case 3:
                    e = "对方不存在";
                    break;
                case 4:
                    e = "对方的好友数量达到上限";
                    break;
                case 5:
                    e = "已经是好友";
                    break;
                case 6:
                    e = "不能加自己为好友"
            }
            e.length > 0 && Toast.launch(e)
        },
        i.dseBattleStart = function(t) {
            WindowManager.getInstance().hideWaiting(),
                BattleManager.instance.clearLoadedFlags(),
                BattleManager.instance.OnBattleStart(t)
        },
        i.dseBattleStartBySweep = function(t) {
            WindowManager.getInstance().hideWaiting();
            var e;
            t.battlelist && t.battlelist[0] && (e = t.battlelist[0].type),
                e == BattleType.BATTLE_TYPE_MAIN_PVE ? WindowManager.getInstance().show(WindowManager.windowType.BattleSweepResult, {
                    type: BattleType.BATTLE_TYPE_MAIN_PVE,
                    pkg: t.battlelist
                }) : e == BattleType.BATTLE_TYPE_MAIN_SPECIAL ? WindowManager.getInstance().show(WindowManager.windowType.BattleSweepResult, {
                    type: BattleType.BATTLE_TYPE_MAIN_SPECIAL,
                    pkg: t.battlelist
                }) : e == BattleType.BATTLE_TYPE_ROBBERY && WindowManager.getInstance().show(WindowManager.windowType.BattleSweepDrop, {
                    data: t
                })
        },
        i.dseBattleInfo = function(t) {
            EventManager.instance.dispatchEvent(EventTypes.EVENT_BATTLE_INFO, t)
        },
        i.dseScienceList = function(t) {
            ScienceData.updateLevelsList(t),
                GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.SCIENCE_UPDATE))
        },
        i.mailList = function(t) {
            MailManager.getInstance().setMailListArr(t)
        },
        i.addMail = function(t) {
            MailManager.getInstance().addNewMail(t)
        },
        i.BattleReview = function(t) {
            MailManager.getInstance().processBatleReview(t)
        },
        i.sendMail = function(t) {
            var e = "";
            switch (t.result) {
                case 0:
                    e = "成功",
                        WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Speak) && WindowManager.getInstance().hide(WindowManager.windowType.Speak);
                    break;
                case 1:
                    e = "对方不是好友或不在一个军团";
                    break;
                case 2:
                    e = "内容太长";
                    break;
                case 3:
                    e = "玩家不存在";
                    break;
                case 4:
                    e = "发送邮件失败";
                    break;
                case 5:
                    e = "不能发给自己";
                    break;
                case 6:
                    e = "您在对方的黑名单中"
            }
            e.length > 0 && Toast.launch(e)
        },
        i.dseUpgradeScience = function(t) {
            ScienceManager.getInstance().handleUpgradeScienceResult(t)
        },
        i.dseAutoUpgradeScience = function(t) {
            ScienceManager.getInstance().handleAutoUpgradeScienceResult(t)
        },
        i.dseCaptainData = function(t) {
            ShopManager.getInstance().handleCaptainData(t),
                CaptainManager.getInstance().prosseCaptainData(t),
                Main.instance.loadingPanel && (GameLayer.getInstance().showAll(), Main.instance.clearLoadingPanel(), EventManager.instance.dispatchEvent(EventTypes.ENTER_MAINSCENE))
        },
        i.dseBuyRecruitItem = function(t) {
            ShopManager.getInstance().handleBuyRecruitItem(t)
        },
        i.dseRecruitCaptain = function(t) {
            ShopManager.getInstance().handleRecruitCaptain(t)
        },
        i.dseChargePaper = function(t) {
            ShipManager.getInstance().handleChargePaper(t)
        },
        i.dseSpyData = function(t) {
            ShopManager.getInstance().handleSpyData(t)
        },
        i.dseSpy = function(t) {
            ShopManager.getInstance().handleSpy(t)
        },
        i.dseBuySpyItem = function(t) {
            ShopManager.getInstance().handleBuySpyItem(t)
        },
        i.dseShopData = function(t) {
            WindowManager.getInstance().hideWaiting(),
                ShopManager.getInstance().handleShopData(t),
                CampShopOptData.instance.init(t.shopdata)
        },
        i.dseBuy = function(t) {
            WindowManager.getInstance().hideWaiting(),
                ShopManager.getInstance().handleBuy(t),
                8 == t.res && ConfigData.preLoadList(["shopData"],
                    function() {
                        var e = ConfigData.getDataByKey("shopData", t.id);
                        Toast.launch("vip达到" + e.reqVIPLevel + "级才能购买!")
                    })
        },
        i.dseArmadaData = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.QiJvTou);
            e && e.handleArmadaData(t)
        },
        i.dseRobberyList = function(t) {
            WindowManager.getInstance().hideWaiting(),
                PiecesManager.getInstance().setRankerList(t)
        },
        i.dseEnterGuard = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.DefenseOil);
            e && e.handleEnterGuard(t),
                HegemonyItem.lvectype && HegemonyItem.lvectype.updateCount(2 + t.buyresetcount - t.resetcount)
        },
        i.dseResetGuard = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.DefenseOil);
            e && e.handleResetGuard(t)
        },
        i.dseBuyGuard = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.DefenseOil);
            e && e.handleBuyGuard(t)
        },
        i.dseGuardStage = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.DefenseOil);
            e && e.handleGuardStage(t)
        },
        i.dseGuildBattleData = function(t) {},
        i.dseGuildData = function(t) {
            GuildManager.getInstance().setGuildData(t)
        },
        i.dseGuildList = function(t) {
            GuildManager.getInstance().setGuildListData(t)
        },
        i.dseCreateGuild = function(t) {
            GuildManager.getInstance().handleCreateGuild(t)
        },
        i.dseSearchGuild = function(t) {
            GuildManager.getInstance().handleSearchGuild(t)
        },
        i.dseGuildApply = function(t) {
            GuildManager.getInstance().handleGuildApply(t)
        },
        i.dseGuildCancelApply = function(t) {
            GuildManager.getInstance().handleGuildCancelApply(t)
        },
        i.dseGuildScienceList = function(t) {
            GuildManager.getInstance().handleGuildScienceList(t)
        },
        i.dseUpgradeGuildScience = function(t) {
            GuildManager.getInstance().handleUpgradeGuildScience(t)
        },
        i.dseGuildApplyList = function(t) {
            GuildManager.getInstance().handleGuildApplyList(t)
        },
        i.dseGuildApproval = function(t) {
            GuildManager.getInstance().handleGuildApproval(t)
        },
        i.dseSetVerifyOptions = function(t) {
            GuildManager.getInstance().handleSetVerifyOptions(t)
        },
        i.dseGuildSetDeputy = function(t) {
            GuildManager.getInstance().handleGuildSetDeputy(t)
        },
        i.dseGuildFireDeputy = function(t) {
            GuildManager.getInstance().handleGuildFireDeputy(t)
        },
        i.dseGuildDemise = function(t) {
            GuildManager.getInstance().handleGuildDemise(t)
        },
        i.dseGuildExpel = function(t) {
            GuildManager.getInstance().handleGuildExpel(t)
        },
        i.dseGuildQuit = function(t) {
            GuildManager.getInstance().handleGuildQuit(t)
        },
        i.dseGuildDonate = function(t) {
            GuildManager.getInstance().handleGuildDonate(t)
        },
        i.dseModifyNotify = function(t) {
            GuildManager.getInstance().handleModifyNotify(t)
        },
        i.dseModifyDeclaration = function(t) {
            GuildManager.getInstance().handleModifyDeclaration(t)
        },
        i.dseRenameGuild = function(t) {
            GuildManager.getInstance().handleRenameGuild(t)
        },
        i.dseGuildSetMedal = function(t) {
            GuildManager.getInstance().handleGuildSetMedal(t)
        },
        i.dseGuildDismiss = function(t) {
            GuildManager.getInstance().handleGuildDismiss(t)
        },
        i.dseGuildUpgrade = function(t) {
            GuildManager.getInstance().handleGuildUpgrade(t)
        },
        i.taskHandler = function(t) {
            MissionData.init(t)
        },
        i.taskGetHandler = function(t) {
            WindowManager.getInstance().hideWaiting(),
                0 == t.res ? Toast.launch("领取成功") : Toast.launch("领取失败" + t.res)
        },
        i.dseGuildMemberList = function(t) {
            GuildManager.getInstance().handleGuildMemberList(t)
        },
        i.dseArenaData = function(t) {
            ArenaManager.instance.setRankData(t),
                EventManager.instance.dispatchEvent(EventTypes.ARENA_DATA)
        },
        i.dseEnterArena = function(t) {
            WindowManager.getInstance().hideWaiting(),
                0 != t.res && (WindowManager.getInstance().hide(WindowManager.windowType.PVP), WindowManager.getInstance().hide(WindowManager.windowType.PVPExchange))
        },
        i.dseArenaList = function(t) {
            ArenaManager.instance.setListData(t)
        },
        i.dseScoutSoldier = function(t) {
            0 == t.res && (WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Friend) && WindowManager.getInstance().hide(WindowManager.windowType.Friend), WindowManager.getInstance().isWindowVisible(WindowManager.windowType.RankList) && WindowManager.getInstance().hide(WindowManager.windowType.RankList), WindowManager.getInstance().show(WindowManager.windowType.ShipArrange, {
                data: t
            }))
        },
        i.dseArenaExchange = function(t) {
            WindowManager.getInstance().hideWaiting();
            var e = t.res;
            0 == e ? Toast.launch(Locales.get("panel_arena_txt_comment_window_1"), 16711680) : 4 == e ? Toast.launch(Locales.get("panel_PaperPanel_txt_windword_1"), 16711680) : 5 == e ? Toast.launch(Locales.get("panel_arena_txt_comment_window_5"), 16711680) : 1 == e ? Toast.launch(Locales.get("panel_arena_txt_comment_9"), 16711680) : 2 == e ? Toast.launch(Locales.get("panel_arena_txt_comment_10"), 16711680) : 3 == e ? Toast.launch(Locales.get("panel_arena_txt_comment_11"), 16711680) : 7 == e && Toast.launch(Locales.get("panel_arena_txt_show_wind_7"), 16711680),
                EventManager.instance.dispatchEvent(EventTypes.ARENA_EXCHANGE)
        },
        i.ranklist = function(t) {
            RankListManager.getInstance().setdata(t)
        },
        i.medalMsg = function(t) {
            if (WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Medal)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Medal);
                e.processMsg(t)
            }
        },
        i.getMedal = function(t) {
            var e = "";
            switch (t.res) {
                case 0:
                    e = "成功";
                    break;
                case 1:
                    e = "已经达到最高级";
                    break;
                case 2:
                    e = "金币不足";
                    break;
                case 3:
                    e = "战役星数不足";
                    break;
                case 4:
                    e = "非法id"
            }
            if (1 == t.all && WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Medal)) {
                var a = WindowManager.getInstance().getWindow(WindowManager.windowType.Medal);
                a.allUpdate()
            }
            e.length > 0 && Toast.launch(e),
                2 == t.res && UserData.getInstance()._level >= 9 && (WindowManager.getInstance().show(WindowManager.windowType.BuJi), WindowManager.getInstance().hide(WindowManager.windowType.Medal), UserData.getInstance().sendDetailMessage())
        },
        i.dseEnterCampBattle = function(t) {
            WindowManager.getInstance().hideWaiting(),
                0 != t.res ? CampBattleManager.isOpen = !1 : CampBattleManager.isOpen = !0
        },
        i.dseCampBattleData = function(t) {
            if (0 != CampBattleManager.needOpen)
                if (CampBattleManager.instance.processData(t), 1 == CampBattleManager.isOpen)
                    if (WindowManager.getInstance().isWindowVisible(WindowManager.windowType.CampBattle)) {
                        var e = WindowManager.getInstance().getWindow(WindowManager.windowType.CampBattle);
                        e.updatePortList()
                    } else EffectManager.instance.initBattleEff(),
                        ResLoader.instance.loadResGroup("ZhenYingZhan",
                            function(t) {
                                WindowManager.getInstance().hideWaiting(),
                                    0 == t && WindowManager.getInstance().show(WindowManager.windowType.CampBattle)
                            });
            else CampBattleManager.needOpen = !1,
                WindowManager.getInstance().show(WindowManager.windowType.CampBattleRankingList)
        },
        i.dseCampBattleMsg = function(t) {
            WindowManager.getInstance().hideWaiting(),
                CampBattleManager.instance.showBattleMsg(t)
        },
        i.dseCampBattleMove = function(t) {
            WindowManager.getInstance().hideWaiting(),
                CampBattleManager.instance.processOptData(t)
        },
        i.dseCampBattleResult = function(t) {
            WindowManager.getInstance().hideWaiting(),
                CampBattleManager.instance.showBattleEnd(t)
        },
        i.dseCampBattleBuy = function(t) {
            WindowManager.getInstance().hideWaiting(),
                CampBattleManager.instance.processDetectAndBlood(t)
        },
        i.dseCampBattleSetTrustee = function(t) {
            WindowManager.getInstance().hideWaiting(),
                CampBattleManager.instance.processSetAI(t)
        },
        i.dseBroadCast = function(t) {
            BroadCastManager.instance.addRadio(t)
        },
        i.dseRetireShip = function(t) {
            RetiredAlert.getInstance().handleRetiredShip(t)
        },
        i.dseSalePaper = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.ShipFactory);
            e.handleSalePaper(t)
        },
        i.onlineTime = function(t) {
            var e = "",
                a = Math.floor(t.onlinetime / 3600);
            t.onlinetime < 3600 || (t.onlinetime >= 3600 && t.onlinetime < 10800 ? (e = "<font color='#00ff00'>" + Locales.get("onlineTime1", [a.toString()]) + "</font>", GameAlert.getInstance().showOnlineTime(Locales.get("onlineTime4"), e, null, null, "", "", !1, !1)) : t.onlinetime >= 10800 && t.onlinetime < 14400 ? (e = "<font color='#00ff00'>" + Locales.get("onlineTime1", [a.toString()]) + Locales.get("onlineTime2") + "</font>", GameAlert.getInstance().showOnlineTime(Locales.get("onlineTime4"), e, null, null, "", "", !1, !1)) : t.onlinetime >= 14400 && t.onlinetime < 18e3 ? (e = "<font color='#00ff00' align='center'>" + Locales.get("onlineTime0", [a.toString()]) + "\n\n</font>" + Locales.get("onlineTime3"), GameAlert.getInstance().showOnlineTime(Locales.get("onlineTime4"), e, null, null, "", "", !1, !1)) : t.onlinetime >= 18e3 && (e = "<font color='#00ff00' align='center'>" + Locales.get("onlineTime0", [a.toString()]) + "\n\n</font>" + Locales.get("onlineTime5"), GameAlert.getInstance().showOnlineTime(Locales.get("onlineTime4"), e, null, null, "", "", !1, !1)))
        },
        i.awardCenter = function(t) {
            if (GameData.funSwitch ? t.awardlist.length > 0 ? HomeUI.instance && HomeUI.instance.isShowAwardCenter(!0) : HomeUI.instance && HomeUI.instance.isShowAwardCenter(!1) : HomeUI.instance && HomeUI.instance.isShowAwardCenter(!0), WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Award)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Award);
                e.processMsg(t)
            }
        },
        i.getAward = function(t) {
            0 == t.res ? Toast.launch("领奖成功") : Toast.launch("没有该项奖励")
        },
        i.dseAddOwnedPaper = function(t) {
            SceneManager.instance.curSceneType != SceneType.HOME ? HandbookManager.instance.pkg = t : HandbookManager.instance.showMsg(t)
        },
        i.dseAddSoulOwnedPaper = function(t) {
            HandbookManager.instance.showMedalMsg(t)
        },
        i.dseCaptainPaperAdd = function(t) {
            HandbookManager.instance.showCapMsg(t)
        },
        i.dseActivityWebData = function(t) {
            if (WindowManager.getInstance().hideWaiting(), t.type)
                if (19 == t.type)
                    if (null == t.actlist || 0 == t.actlist.length) HomeUI.instance.setMuBiaoActState(!1);
                    else {
                        HomeUI.instance.setMuBiaoActState(!0);
                        var e = WindowManager.getInstance().getWindow(WindowManager.windowType.mubiaoAct);
                        e && e.setData(t)
                    }
            else ActivityManager.instance.curActivityType = t.type,
                ActivityManager.instance.curActivityInfo = t.actlist[0],
                t.type == ActivityType.ACTIVITY_TYPE_SIGNIN ? ConfigData.preLoadDats(["giftData"], [GiftdataParser],
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.signActivity, t.actlist[0])
                    }) : t.type == ActivityType.ACTIVITY_TYPE_WHEEL ? ConfigData.preLoadDats(["giftData", "activityLuckyWheel"], [GiftdataParser, ActivityluckywheelParser],
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.luckyWheel, t.actlist[0])
                    }) : t.type == ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE ? ConfigData.preLoadDats(["giftData", "cashData"], [GiftdataParser, CashdataParser],
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.firstRecharge)
                    }) : t.type == ActivityType.ACTIVITY_TYPE_LOGINGIFT ? ConfigData.preLoadDats(["giftData"], [GiftdataParser],
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.loginReward, t.actlist[0])
                    }) : ConfigData.preLoadDats(["giftData"], [GiftdataParser],
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.listActivity, t.actlist[0])
                    });
            else {
                var a = WindowManager.getInstance().getWindow(WindowManager.windowType.activity);
                a && a.setData(t)
            }
        },
        i.dseActivityData = function(t) {
            ActivityManager.instance.activityData = t,
                EventManager.instance.dispatchEvent(EventTypes.ACTIVITY_DATA_UPDATE)
        },
        i.dseActivity = function(t) {
            if (WindowManager.getInstance().hideWaiting(), 0 == t.res)
                if (t.id == ActivityType.ACTIVITY_TYPE_WHEEL) {
                    var e = WindowManager.getInstance().getWindow(WindowManager.windowType.luckyWheel);
                    e && e.turnToGift(t.item_id)
                } else if (t.id == ActivityType.ACTIVITY_TYPE_ONLINE) ConfigData.preLoadDats(["activityOLtime"], [ActivityoltimeParser],
                function() {
                    var e = ActivityoltimeParser.GetInstance().getItemById(t.item_id),
                        a = GlobalFunction.getDropDataByTypeAndId(e.type, e.item, e.count),
                        i = QualitySystem.getColorByQuality(a.quality).toString(16);
                    if (i.length < 6)
                        for (; i.length < 6;) i = "0" + i;
                    a.count && a.count > 1 ? Toast.launch("恭喜您获得#" + i + a.name + "#x" + a.count, void 0, !0) : Toast.launch("恭喜您获得#" + i + a.name + "#", void 0, !0)
                });
            else if (t.id = 19) {
                var a = WindowManager.getInstance().getWindow(WindowManager.windowType.mubiaoAct);
                a && a.setRewardBtnState(),
                    Toast.launch("领取奖励成功")
            } else Toast.launch("领取奖励成功");
            else Toast.launch(Locales.get("activity_error" + t.res));
            EventManager.instance.dispatchEvent(EventTypes.ACTIVITY_DATA_UPDATE)
        },
        i.getMailProp = function(t) {
            MailManager.getInstance().getMailItem(t)
        },
        i.dseRemouldShip = function(t) {
            WindowManager.getInstance().hideWaiting();
            var e = t.res;
            0 == e ? (AudioManager.instance.playSound(AudioManager.SOUND_SHIPS_GZ), Toast.launch(Locales.get("panel_Shiptransform_txt_windword_2"))) : 1 == e ? Toast.launch(Locales.get("panel_Shiptransform_txt_windword_3")) : 2 == e ? Toast.launch(Locales.get("panel_Shiptransform_txt_windword_4")) : 3 == e ? Toast.launch(Locales.get("panel_Shiptransform_txt_windword_5")) : -2 == e || 5 == e ? Toast.launch(Locales.get("panel_Shiptransform_txt_windword_6")) : 6 == e ? Toast.launch(Locales.get("panel_Shiptransform_txt_windword_9")) : 7 == e ? Toast.launch(Locales.get("panel_Shiptransform_txt_windword_8")) : 8 == e && Toast.launch(Locales.get("panel_Shiptransform_txt_windword_10"))
        },
        e._firstAuth = !0,
        e
}(egret.EventDispatcher);
