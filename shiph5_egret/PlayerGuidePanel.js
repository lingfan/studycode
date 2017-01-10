
var HomeUI = function(t) {
    function e() {
        t.call(this),
            e.instance = this,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.addEventListener(eui.UIEvent.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/HomepageSkin.exml"
            /*tpa=resource/eui_skins/HomepageSkin.exml*/
            ,
            this._hasInitedMorePanel = !1
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.visibleScene = function(t) {
            this.mainGroup.visible = t,
                this.groupMore.visible = !1
        },
        i.init = function() {
            this.txtmubiao.visible = UserData.getInstance().isShowMuBiaoIcon,
                this.iconmubiao.visible = UserData.getInstance().isShowMuBiaoIcon,
                this.imgLock4.visible = !1,
                this.imgLock5.visible = !1,
                SUI.addClickEffect(this.exchangeBtn),
                SUI.addClickEffect(this.taskBtn),
                SUI.addClickEffect(this.btnChat),
                SUI.addClickEffect(this.imgShipExchange),
                SUI.addClickEffect(this.imgCaptainExchange),
                SUI.addClickEffect(this.imgRanking),
                SUI.addClickEffect(this.btnGuild),
                SUI.addClickEffect(this.btnRecharge),
                SUI.addClickEffect(this.btnZhaoMuJiangZhang),
                SUI.addClickEffect1(this.btnAward),
                SUI.addClickEffect1(this.btnActivity),
                SUI.addClickEffect1(this.btnTimeActivity),
                SUI.addClickEffect(this.iconguanzhu),
                SUI.addClickEffect1(this.btnFirstRecharge),
                SUI.addClickEffect1(this.imgLoginGift),
                egret.Tween.get(this.btnAward, {
                    loop: !0
                }).to({
                        scaleX: .85,
                        scaleY: .85
                    },
                    500).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    800),
                SUI.setTextureAsync(this.imgActivityLight, Path.uiUrl + "Activity/activity_light.png"),
                egret.Tween.get(this.imgActivityLight, {
                    loop: !0
                }).to({
                        rotation: this.imgActivityLight.rotation + 360
                    },
                    6e3),
                egret.Tween.get(this.btnActivity, {
                    loop: !0
                }).to({
                        scaleX: .9,
                        scaleY: .9
                    },
                    500).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    800),
                SUI.setTextureAsync(this.imgFirstRechargeLight, Path.uiUrl + "Activity/activity_light.png"),
                egret.Tween.get(this.imgFirstRechargeLight, {
                    loop: !0
                }).to({
                        rotation: this.imgActivityLight.rotation + 360
                    },
                    6e3),
                egret.Tween.get(this.btnFirstRecharge, {
                    loop: !0
                }).to({
                        scaleX: .9,
                        scaleY: .9
                    },
                    500).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    800),
                new ParticleDisplayObj(this.btnRecharge, ParticleType.Recharge, ShapeType.None),
                this.groupMore.visible = !1,
                this.btnMore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMorePanel, this),
                this.exchangeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exchangeClickHandler, this),
                this.taskBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.taskClickHandler, this),
                this.grpWorldChat.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnChatClickHandler, this),
                this.btnChat.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnChatClickHandler, this),
                this.imgShipExchange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.imgExchangeHandler, this),
                this.imgCaptainExchange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.imgExchangeHandler, this),
                this.btnGuild.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showGuildWindow, this),
                this.imgRanking.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRankWindow, this),
                this.btnRecharge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnRechargeClick, this),
                this.btnZhaoMuJiangZhang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showZhaoMuCaptainWindow, this),
                this.btnAward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnAwardClick, this),
                this.btnActivity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnActivity, this),
                this.btnTimeActivity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnTimeActivity, this),
                this.btnCampBattle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnCamp, this),
                this.iconguanzhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnSubscribe, this),
                this.iconmubiao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnMuBiao, this),
                this.btnFirstRecharge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnFirstRecharge, this),
                this.imgLoginGift.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtnLoginGift, this),
                this.tickSeaFrame = 0,
                this.SetSubscribe(),
                this.SetImgClickListener(this.btnTanSuoXunZhang,
                    function() {
                        GameData.funSwitch ? UserData.getInstance()._level >= 40 ? ConfigData.preLoadList(["medalsalvageData", "medalexpData", "medalData"],
                            function() {
                                WindowManager.getInstance().show(WindowManager.windowType.tansuo)
                            }) : Toast.launch("招募勋章功能40级开放") : ConfigData.preLoadList(["medalsalvageData", "medalexpData", "medalData"],
                            function() {
                                WindowManager.getInstance().show(WindowManager.windowType.tansuo)
                            })
                    });
            for (var t = 1; 5 >= t; ++t) {
                var e = this["Building_" + t],
                    a = this["txtBuilding" + t];
                e.touchEnabled = !0,
                    e.touchChildren = !1,
                    this.addClickEffect(e, a)
            }
            this.Building_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showBuildShipWindow, this),
                this.Building_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showShipManager, this),
                this.Building_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showPeiJianWindow, this),
                this.Building_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showSoulWindow, this),
                this.Building_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showCaptainWindow, this),
                this.seaSourceList = [],
                this.loadSeaIndex = 10001,
                this.loadSeaBg(),
                this.redBallUpdate(),
                EventManager.instance.addEventListener(EventTypes.HOMEUI_REDBALL_STATE_CHANGE, this.redBallUpdate, this),
                UserData.getInstance().registerActiveTip(this.spotBuilding1, "ship"),
                UserData.getInstance().registerActiveTip(this.spotBuilding5, "captainsys"),
                UserData.getInstance().registerActiveTip(this.spotGuild, "guildapply"),
                UserData.getInstance().registerActiveTip(this.spotExchange, "charge"),
                UserData.getInstance().registerActiveTip(this.spotRecharge, "recharge"),
                UserData.getInstance()._level < 40 ? this.setTanSuoXunZhangState(!1) : this.setTanSuoXunZhangState(!0),
                UserData.getInstance()._level < 50 ? this.setZhaoMuJiangZhangState(!1) : this.setZhaoMuJiangZhangState(!0),
                this.btnCampBattle.visible = !1,
                this.txtCampBattleTime.visible = !1,
                this.txtCampBattle.visible = !1,
                this.imgCampLight.visible = !1,
                ConfigData.preLoadDats(["campBattleBaseData", "HegemonyUnlock"], [CampbattlebasedataParser, HegemonyunlockParser], this.addTicker, this),
                PlatformManager.instance.GetPlatName() == PlatformType.PF_QQBROWSER && (this.txtguanzhu.text = "发送桌面")
        },
        i.addTicker = function() {
            var t = this,
                e = -2,
                a = !1;
            this._tickHandler = GameTick.registerHandler(function() {
                    var i = ActivityManager.instance.getOnlineRewardState(); - 1 == i[0] ? e != i[0] && (t.imgActivityLightzaixian.visible = !1, t.spotActivityzaixian.visible = !1, t.btnTimeActivity.visible = !1, t.txtOnlineReward.visible = !1, t.btnTimeActivity.touchEnabled = !1, egret.Tween.removeTweens(t.imgActivityLightzaixian), egret.Tween.removeTweens(t.btnTimeActivity)) : 0 == i[0] ? (e != i[0] && (t.imgActivityLightzaixian.visible = !1, t.spotActivityzaixian.visible = !1, t.btnTimeActivity.visible = !0, t.txtOnlineReward.visible = !0, t.btnTimeActivity.touchEnabled = !1, egret.Tween.removeTweens(t.imgActivityLightzaixian), egret.Tween.removeTweens(t.btnTimeActivity)), t.txtOnlineReward.text = Utils.getTimeString(i[1])) : 1 == i[0] && e != i[0] && (t.imgActivityLightzaixian.visible = !0, SUI.setTextureAsync(t.imgActivityLightzaixian, Path.uiUrl + "Activity/activity_light.png"), t.spotActivityzaixian.visible = !0, t.btnTimeActivity.visible = !0, t.txtOnlineReward.visible = !0, t.btnTimeActivity.touchEnabled = !0, t.txtOnlineReward.text = "可领取", egret.Tween.get(t.imgActivityLightzaixian, {
                            loop: !0
                        }).to({
                                rotation: t.imgActivityLight.rotation + 360
                            },
                            6e3), egret.Tween.get(t.btnTimeActivity, {
                            loop: !0
                        }).to({
                                scaleX: .9,
                                scaleY: .9
                            },
                            500).to({
                                scaleX: 1,
                                scaleY: 1
                            },
                            800)),
                        e = i[0];
                    var n = CampBattleManager.instance.isOpened();
                    if (n) {
                        a != n && (t.btnCampBattle.visible = !0, t.txtCampBattleTime.visible = !0, t.txtCampBattle.visible = !0, SUI.setTextureAsync(t.imgCampLight, Path.uiUrl + "Activity/activity_light.png"), t.imgCampLight.visible = !0, egret.Tween.get(t.imgCampLight, {
                            loop: !0
                        }).to({
                                rotation: t.imgCampLight.rotation + 360
                            },
                            6e3), egret.Tween.get(t.btnCampBattle, {
                            loop: !0
                        }).to({
                                scaleX: .9,
                                scaleY: .9
                            },
                            500).to({
                                scaleX: 1,
                                scaleY: 1
                            },
                            800));
                        var s = new Date(UserData.getInstance().getServerTime()),
                            r = CampbattlebasedataParser.GetInstance().getDataArr()[0],
                            o = new Date(UserData.getInstance().getServerTime());
                        o.setHours(r.endTime[0], r.endTime[1], 0, 0);
                        var l = Math.floor((o.valueOf() - s.valueOf()) / 1e3);
                        t.txtCampBattleTime.text = Utils.getTimeString(l)
                    } else a != n && (t.btnCampBattle.visible = !1, t.txtCampBattleTime.visible = !1, t.txtCampBattle.visible = !1, t.imgCampLight.visible = !1, egret.Tween.removeTweens(t.btnCampBattle), egret.Tween.removeTweens(t.imgCampLight));
                    a = n;
                    var h = UserData.getInstance().getServerTime(),
                        c = 1e3 * UserData.getInstance().regtime,
                        d = new Date(c);
                    if (d.setDate(d.getDate() + 4), d.setHours(24, 0, 0, 0), h > d.valueOf() || !ActivityManager.instance.activityData) t.imgLoginGift.visible = !1,
                        t.txtLoginGift.visible = !1,
                        t.spotLoginGift.visible = !1,
                        egret.Tween.removeTweens(t.imgLoginGift);
                    else {
                        var g = UserData.getInstance().getServerTime(),
                            u = Utils.getDayDiff(c, g),
                            p = ActivityManager.instance.activityData.login_charge_gift[u];
                        4 == u && 3 == p ? (t.imgLoginGift.visible = !1, t.txtLoginGift.visible = !1, t.spotLoginGift.visible = !1, egret.Tween.removeTweens(t.imgLoginGift), t.imgLoginGift.tweening = !1) : (t.imgLoginGift.visible = !0, t.txtLoginGift.visible = !0, t.imgLoginGift.tweening || (egret.Tween.get(t.imgLoginGift, {
                            loop: !0
                        }).to({
                                scaleX: .9,
                                scaleY: .9
                            },
                            500).to({
                                scaleX: 1,
                                scaleY: 1
                            },
                            800), t.imgLoginGift.tweening = !0))
                    }
                },
                1e3)
        },
        i.onClickBtnFirstRecharge = function() {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivityWebData, {
                type: ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE
            })
        },
        i.onClickBtnLoginGift = function() {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivityWebData, {
                type: ActivityType.ACTIVITY_TYPE_LOGINGIFT
            })
        },
        i.OnClickBtnCamp = function() {
            RequestManager.GetInstance().enterCampBattle()
        },
        i.OnClickBtnSubscribe = function() {
            PlatformManager.instance.GetPlatName() == PlatformType.PF_QQBROWSER ? PlatformManager.instance.ToDesktop() : PlatformManager.instance.isSupportSubscribe() && !UserData.getInstance().focus_award && PlatformManager.instance.Subscribe()
        },
        i.OnClickBtnMuBiao = function() {
            WindowManager.getInstance().show(WindowManager.windowType.mubiaoAct)
        },
        i.SetSubscribe = function() {
            PlatformManager.instance.isSupportSubscribe() && !UserData.getInstance().focus_award ? (this.iconguanzhu.visible = !0, this.txtguanzhu.visible = !0, this.iconmubiao.y = 156, this.txtmubiao.y = 220, this.spotmubiao.y = 155, SUI.addClickEffect(this.iconmubiao)) : (this.iconguanzhu.visible = !1, this.txtguanzhu.visible = !1, this.iconmubiao.y = this.iconguanzhu.y, this.txtmubiao.y = this.txtguanzhu.y, this.spotmubiao.y = this.iconguanzhu.y, SUI.addClickEffect(this.iconmubiao))
        },
        i.setTanSuoXunZhangState = function(t) {
            this.btnTanSuoXunZhang.visible = t,
                this.txtTanSuoXunZhang.visible = t,
                this.bgTanSuoXunZhang.visible = t
        },
        i.setZhaoMuJiangZhangState = function(t) {
            this.bgZhaoMuJiangZhang.visible = t,
                this.btnZhaoMuJiangZhang.visible = t,
                this.txtZhaoMuJiangZhang.visible = t
        },
        i.updateLevelControl = function() {
            UserData.getInstance()._level >= 40 ? this.imgLock4.visible = !1 : this.imgLock4.visible = !0,
                UserData.getInstance()._level >= 50 ? (this.exchangeBtn.source = RES.getRes("GUI_Homepage_Icon_28_png"), this.txtExchange.text = "兑换", this.imgLock5.visible = !1) : (this.exchangeBtn.source = RES.getRes("GUI_Homepage_Icon_10_png"), this.txtExchange.text = "战舰兑换", this.imgLock5.visible = !0)
        },
        i.mailRedPoint = function() {
            this.imgMailBall.visible = UserData.getInstance().getUnreadMail() > 0
        },
        i.isShowAwardCenter = function(t) {
            void 0 === t && (t = !1),
                this.btnAward.visible = t,
                this.imgBgAward.visible = t,
                this.txtAward.visible = t
        },
        i.redBallUpdate = function() {
            this.imgMilitaryBall.visible = CanUseManager.instance.getMilitaryUseFlag(),
                this.spotActivity.visible = ActivityManager.instance.checkIsShowRedBall(0), !ActivityManager.instance.activityData || ActivityManager.instance.activityData.isfirst_gift ? this.FirstRecharge.visible = !1 : (this.FirstRecharge.visible = !0, ActivityManager.instance.checkIsShowRedBall(ActivityType.ACTIVITY_TYPE_FIRST_RECHARGE) ? this.spotFirstRecharge.visible = !0 : this.spotFirstRecharge.visible = !1),
                this.spotLoginGift.visible = ActivityManager.instance.checkIsShowRedBall(ActivityType.ACTIVITY_TYPE_LOGINGIFT)
        },
        i.initRedBallEvents = function() {},
        i.loadSeaBg = function() {
            var t = this;
            Utils.getImgByUrl(Path.seaImageUrl + this.loadSeaIndex + ".jpg", null,
                function(e) {
                    t.seaSourceList.push(e),
                        t.loadSeaIndex++,
                        t.loadSeaIndex < 10008 ? t.loadSeaBg() : GameTick.registerHandler(function() {
                                t.tickSeaMotion()
                            },
                            50)
                },
                this)
        },
        i.tickSeaMotion = function() {
            this.seaSourceList.length > 0 && (this.seaBg.source = this.seaSourceList[this.tickSeaFrame], this.tickSeaFrame++, this.tickSeaFrame == this.seaSourceList.length && (this.tickSeaFrame = 0))
        },
        i.addClickEffect = function(t, e) {
            t.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
                    function(t) {
                        e.textColor = 16777215
                    },
                    void 0),
                t.addEventListener(egret.TouchEvent.TOUCH_END,
                    function(t) {
                        e.textColor = 16770421
                    },
                    void 0),
                t.addEventListener(egret.TouchEvent.TOUCH_CANCEL,
                    function(t) {
                        e.textColor = 16770421
                    },
                    void 0),
                t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,
                    function() {
                        e.textColor = 16770421
                    },
                    void 0)
        },
        i.showBuildShipWindow = function() {
            var t = this;
            WindowManager.getInstance().showWaiting(),
                this.tickShipFactoryId = GameTick.registerHandler(function() {
                        return t.tickShowShipWindowHandler()
                    },
                    100)
        },
        i.showPeiJianWindow = function() {
            WindowManager.getInstance().show(WindowManager.windowType.PeiJian)
        },
        i.showSoulWindow = function() {
            this.imgLock4.visible ? Toast.launch("该功能40级开放") : WindowManager.getInstance().show(WindowManager.windowType.Soul)
        },
        i.showCaptainWindow = function() {
            this.imgLock5.visible ? Toast.launch("该功能50级开放") : WindowManager.getInstance().show(WindowManager.windowType.Captain)
        },
        i.showGuildWindow = function() {
            UserData.getInstance()._level >= 18 ? (GuildManager.getInstance().isOpenWin = !0, GuildManager.getInstance().windowGuildCurrPage = guildManagePage.PAGE_BASE, GuildManager.getInstance().sendGuildData()) : Toast.launch("该功能18级开放")
        },
        i.showRankWindow = function() {
            RankListManager.getInstance().showRankWin(0)
        },
        i.showZhaoMuCaptainWindow = function() {
            GameData.funSwitch ? UserData.getInstance()._level >= 50 ? WindowManager.getInstance().show(WindowManager.windowType.ZhaoMuCaptain) : Toast.launch("招募舰长功能50级开放") : WindowManager.getInstance().show(WindowManager.windowType.ZhaoMuCaptain)
        },
        i.tickShowShipWindowHandler = function() {
            ShipManager.getInstance().shipDataInit && ShipManager.getInstance().paperDataInit && ShipManager.getInstance().paperPieceDataInit && (GameTick.removeHandler(this.tickShipFactoryId), WindowManager.getInstance().hideWaiting(), WindowManager.getInstance().show(WindowManager.windowType.ShipFactory))
        },
        i.showShipManager = function() {
            WindowManager.getInstance().show(WindowManager.windowType.ShipManager)
        },
        i.showMorePanel = function() {
            var t = this;
            ResLoader.instance.logCachedResCount(),
                this.imgOilRefiningBall.visible = RedPointManager.getPointShow(null, RedPointType.buyoil),
                egret.Tween.removeTweens(this.btnMore);
            var e = egret.Tween.get(this.btnMore);
            0 == this.groupMore.visible ? (this.groupExchange.visible && (this.groupExchange.visible = !1), this.groupMore.scaleX = .1, this.groupMore.scaleY = .1, this.groupMore.visible = !0, this._hasInitedMorePanel || (this.InitMorePanel(), this._hasInitedMorePanel = !0), egret.Tween.get(this.groupMore, {
                loop: !1
            }).to({
                    scaleX: 1,
                    scaleY: 1
                },
                300), e.to({
                    rotation: 180
                },
                300)) : (egret.Tween.get(this.groupMore).to({
                    scaleX: .1,
                    scaleY: .1
                },
                300).call(function() {
                t.groupMore.visible = !1
            }), e.to({
                    rotation: 0
                },
                300))
        },
        i.InitMorePanel = function() {
            this.txtOilRefining.text = Locales.get("zz_oilRefining"),
                this.txtSupply.text = Locales.get("btn_supply"),
                this.txtScience.text = Locales.get("panel_reward_txt_comment_3"),
                this.txtExploit.text = Locales.get("btn_medal"),
                this.txtFriend.text = Locales.get("btn_friends"),
                this.txtMail.text = Locales.get("ui_main_mail"),
                this.txtRanking.text = Locales.get("panel_question_txt_comment_rank"),
                this.txtHandbook.text = Locales.get("btn_tujian"),
                this.txtVipTitle.text = Locales.get("panel_seven_day_comment_5"),
                this.txtStrategy.text = Locales.get("btn_help"),
                this.txtMilitary.text = Locales.get("zz_military"),
                this.txtSystem.text = Locales.get("ui_main_sys"),
                this.SetImgClickListener(this.imgOilRefineing,
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.OilRefining)
                    }),
                this.SetImgClickListener(this.imgSupply,
                    function() {
                        UserData.getInstance()._level >= 9 ? (WindowManager.getInstance().show(WindowManager.windowType.BuJi), UserData.getInstance().sendDetailMessage()) : Toast.launch("该功能9级开放")
                    }),
                this.SetImgClickListener(this.imgScience,
                    function() {
                        UserData.getInstance()._level >= 14 ? WindowManager.getInstance().show(WindowManager.windowType.KeJi) : Toast.launch("该功能14级开放")
                    }),
                this.SetImgClickListener(this.imgExploit,
                    function() {
                        UserData.getInstance()._level >= 6 ? WindowManager.getInstance().show(WindowManager.windowType.Medal) : Toast.launch("该功能6级开放")
                    }),
                this.SetImgClickListener(this.imgFriend,
                    function() {
                        return UserData.getInstance().getPlayerLevel() < 20 ? void Toast.launch(Locales.get("ui_main_function_scientific", 20)) : (WindowManager.getInstance().showWaiting(), FriendManager.getInstance().isWaiting = !0, FriendManager.getInstance().sendGetFriendMsg(), FriendManager.getInstance().sendGetRecommand(), FriendManager.getInstance().sendGetInvited(), void FriendManager.getInstance().sendGetReceiveEle())
                    }),
                this.SetImgClickListener(this.imgMail,
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.Mail)
                    }),
                this.SetImgClickListener(this.imgHandbook,
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.WarshipHandbook)
                    }),
                this.SetImgClickListener(this.imgVip,
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.Recharge, {
                            type: 1
                        })
                    }),
                this.SetImgClickListener(this.imgStrategy,
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.Strategy)
                    }),
                this.SetImgClickListener(this.imgMilitary,
                    function() {
                        MilitaryManager.GetInstance().OpenMilitaryWindow()
                    }),
                this.SetImgClickListener(this.imgSystem,
                    function() {
                        WindowManager.getInstance().show(WindowManager.windowType.System)
                    })
        },
        i.SetImgClickListener = function(t, e, a) {
            void 0 === a && (a = void 0),
                t.touchEnabled = !0,
                SUI.addClickEffect(t),
                t.addEventListener(egret.TouchEvent.TOUCH_TAP, e, a)
        },
        i.headImgClickHandler = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.RoleInfo)
        },
        i.taskClickHandler = function(t) {
            WindowMission.instance || WindowManager.getInstance().show(WindowManager.windowType.Mission)
        },
        i.exchangeClickHandler = function(t) {
            UserData.getInstance()._level >= 50 ? (this.groupMore.visible && (this.groupMore.visible = !1), this.groupExchange.visible ? this.groupExchange.visible = !1 : (this.groupExchange.scaleX = .1, this.groupExchange.scaleY = .1, this.groupExchange.visible = !0, egret.Tween.get(this.groupExchange, {
                loop: !1
            }).to({
                    scaleX: 1,
                    scaleY: 1
                },
                300))) : WindowManager.getInstance().show(WindowManager.windowType.ExchangeBlueprint)
        },
        i.btnChatClickHandler = function(t) {
            ChatManager.getInstance().showChatWin(0)
        },
        i.imgExchangeHandler = function(t) {
            t.target == this.imgShipExchange ? WindowManager.getInstance().show(WindowManager.windowType.ExchangeBlueprint) : t.target == this.imgCaptainExchange && ConfigData.preLoadDats(["captainChargeCount", "captainChargeData"], [CaptainchargecountParser, CaptainchargedataParser],
                function() {
                    WindowManager.getInstance().show(WindowManager.windowType.ExchangeCaptain)
                })
        },
        i.hideGroupExchange = function() {
            this.groupExchange.visible = !1
        },
        i.updateWorldChat = function(t) {
            void 0 === t && (t = ""),
                this.txtWorldChat.text = t
        },
        i.clear = function() {
            this._tickHandler && (GameTick.removeHandler(this._tickHandler), this._tickHandler = null),
                EventManager.instance.removeEventListener(EventTypes.HOMEUI_REDBALL_STATE_CHANGE, this.redBallUpdate, this),
                e.instance = null
        },
        i.btnRechargeClick = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.Recharge)
        },
        i.btnAwardClick = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.Award)
        },
        i.onClickBtnActivity = function() {
            WindowManager.getInstance().show(WindowManager.windowType.activity)
        },
        i.onClickBtnTimeActivity = function() {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceActivity, {
                id: ActivityType.ACTIVITY_TYPE_ONLINE
            })
        },
        i.updataRedPoint = function(t) {
            this.spotShipExchange.visible = t.charge,
                this.spotCaptainExchange.visible = t.captainexchange,
                this.imgFriendBall.visible = t.friendsys,
                this.imgExploitBall.visible = t.medal,
                this.spotBuilding5.visible = t.captainsys,
                this.spotBuilding1.visible = t.ship,
                this.imgSupplyBall.visible = t.supply,
                UserData.getInstance()._level >= 14 ? this.imgScienceBall.visible = t.science : this.imgScienceBall.visible = !1,
                this.spotTask.visible = t.taskreward,
                t.guilddonate || t.guildapply ? this.spotGuild.visible = !0 : this.spotGuild.visible = !1,
                GuildManager.getInstance().sendGuildApplyList(),
                this.spotBuilding4.visible = !1,
                t.captainsys || t.friendsys || t.medal || RedPointManager.getPointShow(null, RedPointType.buyoil) || t.supply || t.science && UserData.getInstance()._level >= 14 ? this.btnMorePoint.visible = !0 : this.btnMorePoint.visible = !1,
                UserData.getInstance()._level >= 50 ? this.btnZhaoMuJiangZhangPoint.visible = t.captainrecru : this.btnZhaoMuJiangZhangPoint.visible = !1,
                this.spotmubiao.visible = !1;
            for (var e = 0; e < t.act_type.length; e++)
                if (19 == t.act_type[e]) {
                    this.spotmubiao.visible = t.act_red[e];
                    break
                }
        },
        i.setOliRedPointState = function() {
            this.imgOilRefiningBall.visible = RedPointManager.getPointShow(null, RedPointType.buyoil),
                this.spotBuilding5.visible || this.imgFriendBall.visible || this.imgExploitBall.visible || RedPointManager.getPointShow(null, RedPointType.buyoil) || this.imgSupplyBall.visible || this.imgScienceBall.visible && UserData.getInstance()._level >= 14 ? this.btnMorePoint.visible = !0 : this.btnMorePoint.visible = !1
        },
        i.setMuBiaoActState = function(t) {
            UserData.getInstance().isShowMuBiaoIcon = t,
                this.iconmubiao.visible = t,
                this.txtmubiao.visible = t
        },
        e
}(eui.Component);
