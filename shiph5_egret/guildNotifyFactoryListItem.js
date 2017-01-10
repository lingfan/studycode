
var WindowGuild = function(t) {
    function e() {
        t.call(this, !0),
            this.isChat = !1,
            this.skinName = "resource/eui_skins/JunTuanSkin.exml"
            /*tpa=resource/eui_skins/JunTuanSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    t.initUI()
                }),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnGuildStore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnGuildTechnology.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnGuildMember.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnGuildManage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReturn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReturn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReturn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReturn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnHelp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.clear = function() {
            MainUI.instance.changeTopMode(topUIMode.normal),
                MainUI.instance.changeTopMode(topUIMode.normal),
                GuildManager.getInstance().isOpenWin = !1,
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnGuildStore.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnGuildTechnology.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnGuildMember.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnGuildManage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReadMe6.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReturn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReturn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReturn3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnReturn4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnHelp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.onTouchTapHandle = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    MainUI.instance.setBottomVisible(!0),
                        MainUI.instance.changeTopMode(topUIMode.normal),
                        MainUI.instance.changeTopMode(topUIMode.normal),
                        WindowManager.getInstance().hide(WindowManager.windowType.Guild);
                    break;
                case this.btnGuildStore:
                    this.BOTTOM.visible = !1,
                        GuildManager.getInstance().windowGuildCurrPage = guildManagePage.PAGE_GUILDSTORE,
                        this.showGuildManagePageByType(GuildManager.getInstance().windowGuildCurrPage);
                    break;
                case this.btnGuildTechnology:
                    this.BOTTOM.visible = !1,
                        GuildManager.getInstance().windowGuildCurrPage = guildManagePage.PAGE_GUILDTECHNOLOGY,
                        GuildManager.getInstance().sendGuildScienceList();
                    break;
                case this.btnGuildMember:
                    this.BOTTOM.visible = !1,
                        GuildManager.getInstance().windowGuildCurrPage = guildManagePage.PAGE_GUILDMEMBER,
                        this.showGuildManagePageByType(GuildManager.getInstance().windowGuildCurrPage);
                    break;
                case this.btnGuildManage:
                    this.BOTTOM.visible = !1,
                        GuildManager.getInstance().windowGuildCurrPage = guildManagePage.PAGE_GUILDMANAGE,
                        this.showGuildManagePageByType(GuildManager.getInstance().windowGuildCurrPage),
                        this.txtGuildID.text = "军团ID：" + GuildManager.getInstance().id,
                        this.txtGuildExp.text = "军团升级：" + GuildParser.GetInstance().getItemById(GuildManager.getInstance().level).exp;
                    break;
                case this.btnReadMe1:
                    GameAlert.getInstance().show("升级军团", "升级军团消耗" + GuildParser.GetInstance().getItemById(GuildManager.getInstance().level).exp + "军团建设,您是否要升级军团?",
                        function() {
                            GuildManager.getInstance().sendGuildUpgrade()
                        });
                    break;
                case this.btnReadMe2:
                    GuildAlert.getInstance().showChangeLabel2();
                    break;
                case this.btnReadMe3:
                    GuildCreateAlert.getInstance().showSelectBadgePage();
                    break;
                case this.btnReadMe4:
                    0 == GuildManager.getInstance().pos ? GuildAlert.getInstance().showGuildApprovalSet() : Toast.launch("只有军团长可以设置");
                    break;
                case this.btnReadMe5:
                    var e = "<font>1、角色等级达到18级可加入军团。\n2、玩家加入军团后可以查看军团内成员的信息,与军团内成员聊天。\n3、加入军团后,捐献军费可以增加军团建设和个人贡献,军团建设用于升级军团等级,个人贡献用于购买军团商城中的道具;个人贡献不会因为军团的改变而清空。\n4、军团长简历军团后可以设置两名副军团长，军团成员的数量上限会随着军团等级的提升而提升。\n5、军团长和副军团长拥有审核成员、修改宣言、修改公告、升级军团等特权。\n6、军团长拥有修改军团徽章、解散军团等特权。\n7、军团长7天未登录游戏,军团长一职将会自动转让给其他成员。</font>";
                    QiJvTouAlert.getInstance().showTxtDescPage("军团说明", e);
                    break;
                case this.btnHelp:
                    var e = "<font>1、角色等级达到18级可加入军团。\n2、玩家加入军团后可以查看军团内成员的信息,与军团内成员聊天。\n3、加入军团后,捐献军费可以增加军团建设和个人贡献,军团建设用于升级军团等级,个人贡献用于购买军团商城中的道具;个人贡献不会因为军团的改变而清空。\n4、军团长简历军团后可以设置两名副军团长，军团成员的数量上限会随着军团等级的提升而提升。\n5、军团长和副军团长拥有审核成员、修改宣言、修改公告、升级军团等特权。\n6、军团长拥有修改军团徽章、解散军团等特权。\n7、军团长7天未登录游戏,军团长一职将会自动转让给其他成员。</font>";
                    QiJvTouAlert.getInstance().showTxtDescPage("军团说明", e);
                    break;
                case this.btnReadMe6:
                    0 == GuildManager.getInstance().pos ? GameAlert.getInstance().show("解散军团", "确定要解散军团吗?",
                        function() {
                            GuildManager.getInstance().sendGuildDismiss(),
                                GameAlert.getInstance().hide()
                        }) : GameAlert.getInstance().show("退出军团", "您是否要退出军团?",
                        function() {
                            GuildManager.getInstance().sendGuildQuit(),
                                GameAlert.getInstance().hide()
                        });
                    break;
                case this.btnReturn1:
                    this.BOTTOM.visible = !0,
                        GuildManager.getInstance().windowGuildCurrPage = guildManagePage.PAGE_BASE,
                        this.showGuildManagePageByType(GuildManager.getInstance().windowGuildCurrPage);
                    break;
                case this.btnReturn2:
                    this.BOTTOM.visible = !0,
                        GuildManager.getInstance().windowGuildCurrPage = guildManagePage.PAGE_BASE,
                        this.showGuildManagePageByType(GuildManager.getInstance().windowGuildCurrPage);
                    break;
                case this.btnReturn3:
                    this.BOTTOM.visible = !0,
                        GuildManager.getInstance().windowGuildCurrPage = guildManagePage.PAGE_BASE,
                        this.showGuildManagePageByType(GuildManager.getInstance().windowGuildCurrPage);
                    break;
                case this.btnReturn4:
                    this.BOTTOM.visible = !0,
                        GuildManager.getInstance().windowGuildCurrPage = guildManagePage.PAGE_BASE,
                        this.showGuildManagePageByType(GuildManager.getInstance().windowGuildCurrPage)
            }
        },
        i.goBackBasePage = function() {
            this.BOTTOM.visible = !0,
                GuildManager.getInstance().windowGuildCurrPage = guildManagePage.PAGE_BASE,
                GuildManager.getInstance().sendGuildData()
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("item"),
                e.push("guild"),
                e.push("shopData"),
                e.push("guildscience"),
                e.push("guildscienceData"),
                e.push("guildContribute"),
                ConfigData.preLoadDats(e, [ItemParser, GuildParser, ShopdataParser, GuildscienceParser, GuildsciencedataParser, GuildcontributeParser],
                    function() {
                        t()
                    })
        },
        i.showGuildManagePageByType = function(t) {
            switch (void 0 === t && (t = guildManagePage.PAGE_BASE), this.BASE.visible = !1, this.GUILDSTORE.visible = !1, this.GUILDTECHNOLOGY.visible = !1, this.GUILDMEMBER.visible = !1, this.GUILDMANAGE.visible = !1, t) {
                case guildManagePage.PAGE_BASE:
                    this.BASE.visible = !0,
                        this.setGuildBaseInfo();
                    break;
                case guildManagePage.PAGE_GUILDSTORE:
                    this.GUILDSTORE.visible = !0,
                        this.setGuildStoreInfo(),
                        ShopManager.getInstance().sendShopData(e.GUILD_INDEX);
                    break;
                case guildManagePage.PAGE_GUILDTECHNOLOGY:
                    this.GUILDTECHNOLOGY.visible = !0,
                        this.setGuildTechnologyInfo();
                    break;
                case guildManagePage.PAGE_GUILDMEMBER:
                    this.GUILDMEMBER.visible = !0,
                        this.setGuildMemberInfo();
                    break;
                case guildManagePage.PAGE_GUILDMANAGE:
                    this.GUILDMANAGE.visible = !0,
                        this.setGuildManageInfo()
            }
        },
        i.initUI = function() {
            WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode["null"]),
                MainUI.instance.setBottomVisible(!1),
                SUI.addClickEffect(this.btnGuildStore),
                SUI.addClickEffect(this.btnGuildTechnology),
                SUI.addClickEffect(this.btnGuildMember),
                SUI.addClickEffect(this.btnGuildManage),
                SUI.addClickEffect(this.btnReadMe1),
                SUI.addClickEffect(this.btnReadMe2),
                SUI.addClickEffect(this.btnReadMe3),
                SUI.addClickEffect(this.btnReadMe4),
                SUI.addClickEffect(this.btnReadMe5),
                SUI.addClickEffect(this.btnReadMe6),
                SUI.setTextureAsync(this.imgL, Path.uiUrl + "Activity/Bg_title_huodong.png"),
                SUI.setTextureAsync(this.imgR, Path.uiUrl + "Activity/Bg_title_huodong.png"),
                SUI.setTextureAsync(this.imgGuildIconBg, Path.uiUrl + "Bg_GuildIcon.jpg"),
                this.scrollerNotify.viewport = this.listNotify,
                this.scrollerActivity.viewport = this.listActivity,
                this.scrollerStore.viewport = this.listStore,
                this.scrollerTechnology.viewport = this.listTechnology,
                this.scrollerMember.viewport = this.listMember,
                0 == GuildManager.getInstance().pos ? this.txtDiss.text = "解散军团" : this.txtDiss.text = "退出军团",
                this.showGuildManagePageByType(GuildManager.getInstance().windowGuildCurrPage)
        },
        i.setGuildBaseInfo = function() {
            this.txtGuildName.text = GuildManager.getInstance().name,
                this.txtGuildLevel.text = GuildManager.getInstance().level + "级",
                this.txtGuildMember.text = GuildManager.getInstance().membercount + "/" + GuildParser.GetInstance().getItemById(GuildManager.getInstance().level).count,
                this.txtGuildLeader.text = "军团长:",
                SUI.setTextureAsync(this.imgBadge, Path.guildUrl + "badge_B_" + GuildManager.getInstance().medal + ".png"),
                this.txtGuildDeclaration.text = "宣言:" + GuildManager.getInstance().declaration,
                this.txtGuildRes1.text = "军团建设:" + GuildManager.getInstance().activepoint,
                this.setNotifyData(),
                this.setActivityData(ChatManager.getInstance().hasNewGroupMsg),
                GuildManager.getInstance().sendGuildMemberList(),
                GuildManager.getInstance().sendGuildApplyList()
        },
        i.setGuildStoreInfo = function() {
            this.txtSelf.text = "贡献:" + GuildManager.getInstance().guildpoint
        },
        i.setGuildManageInfo = function() {
            SUI.setTextureAsync(this.guildBadge, Path.guildUrl + "badge_B_" + GuildManager.getInstance().medal + ".png")
        },
        i.setGuildTechnologyInfo = function() {
            this.txtSelf0.text = "军团建设:" + GuildManager.getInstance().activepoint,
                this.setTechnologyData()
        },
        i.setGuildMemberInfo = function() {
            this.txtMember.text = GuildManager.getInstance().membercount + "/" + GuildParser.GetInstance().getItemById(GuildManager.getInstance().level).count,
                this.setMemberData()
        },
        i.setNotifyData = function() {
            var t = this.getGuildNotifyPageList();
            this.listNotify.dataProvider = new eui.ArrayCollection(t),
                this.listNotify.itemRenderer = guildNotifyFactoryListItem
        },
        i.getGuildNotifyPageList = function() {
            var t = [],
                e = {
                    type: "notify",
                    txt: GuildManager.getInstance().notify
                };
            if (t.push(e), GuildManager.getInstance().loglist)
                for (var a = 0; a < GuildManager.getInstance().loglist.length; a++) {
                    var i = GuildManager.getInstance().loglist[a];
                    switch (i.type) {
                        case 0:
                            t.push({
                                type: "log",
                                txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + "</font><font color='#ffff00'> " + i.name + " </font><font>提供了</font><font color='#00ff00'>" + i.param[0] + "</font><font>军团建设</font>"
                            });
                            break;
                        case 1:
                            t.push({
                                type: "log",
                                txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + " " + this.getStrByPos(i.param[0]) + "</font><font color='#ffff00'> " + i.name + " </font><font>批准了</font><font color='#ffff00'> " + i.param[1] + " </font><font>加入军团</font>"
                            });
                            break;
                        case 2:
                            t.push({
                                type: "log",
                                txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + " " + this.getStrByPos(i.param[0]) + "</font><font color='#ffff00'> " + i.name + " </font><font>拒绝了</font><font color='#ffff00'> " + i.param[1] + " </font><font>加入军团</font>"
                            });
                            break;
                        case 3:
                            t.push({
                                type: "log",
                                txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + "</font><font color='#ffff00'> " + i.name + " </font><font>离开了军团</font>"
                            });
                            break;
                        case 4:
                            t.push({
                                type: "log",
                                txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + " " + this.getStrByPos(i.param[0]) + "</font><font color='#ffff00'> " + i.name + " </font><font>将</font><font color='#ffff00'> " + i.param[1] + " </font><font>移除军团</font>"
                            });
                            break;
                        case 5:
                            t.push({
                                type: "log",
                                txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + " 军团长</font><font color='#ffff00'> " + i.name + " </font><font>任命</font><font color='#ffff00'> " + i.param[0] + " </font><font>为副军团长</font>"
                            });
                            break;
                        case 6:
                            t.push({
                                type: "log",
                                txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + " 军团长</font><font color='#ffff00'> " + i.name + " </font><font>解除</font><font color='#ffff00'> " + i.param[0] + " </font><font>副军团长职务</font>"
                            });
                            break;
                        case 7:
                            t.push({
                                type: "log",
                                txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + "</font><font color='#ffff00'> " + i.name + " </font><font>将军团长转让给</font><font color='#ffff00'> " + i.param[0] + " </font>"
                            });
                            break;
                        case 8:
                            var n = i.param[1];
                            null == n && (n = i.param[0]),
                                t.push({
                                    type: "log",
                                    txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + " " + this.getStrByPos(i.param[0]) + "</font><font color='#ffff00'> " + i.name + " </font><font>升级了军团，军团升级至</font><font color='#00ff00'> " + n + " </font><font>级</font>"
                                });
                            break;
                        case 9:
                            t.push({
                                type: "log",
                                txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + "</font><font color='#ffff00'> " + i.name + " </font><font>加入军团</font>"
                            });
                            break;
                        case 10:
                            t.push({
                                type: "log",
                                txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + " 军团长自动转让给</font><font color='#ffff00'> " + i.name + " </font>"
                            });
                            break;
                        case 11:
                            var s = Number(i.param[0]),
                                r = i.param[2],
                                o = void 0;
                            o = 1 == s ? "军团长" : "副军团长",
                                t.push({
                                    type: "log",
                                    txt: "<font>" + Utils.getDateByNum(1e3 * i.time, timeType.MDHM) + " " + o + "</font><font color='#ffff00'> " + i.name + " </font><font>将军团更名为</font><font color='#00ff00'> " + r + " </font>"
                                })
                    }
                }
            return t
        },
        i.setActivityData = function(t) {
            void 0 === t && (t = !1),
                this.isChat = t;
            var e = this.getGuildActivityPageList(this.isChat);
            this.listActivity.dataProvider = new eui.ArrayCollection(e),
                this.listActivity.itemRenderer = guildAcitvityFactoryListItem
        },
        i.getGuildActivityPageList = function(t) {
            void 0 === t && (t = !1);
            var e = !1;
            e = GuildManager.getInstance().donatetimes >= 1 ? !1 : !0;
            var a = !1;
            a = null != GuildManager.getInstance().applylist && GuildManager.getInstance().applylist.length > 0 ? !0 : !1;
            var i = [{
                    id: 1,
                    name: "捐献军费",
                    img: 1,
                    isRed: e
                },
                {
                    id: 2,
                    name: "军团审核",
                    img: 2,
                    isRed: a
                },
                {
                    id: 3,
                    name: "军团聊天",
                    img: 3,
                    isRed: t
                },
                {
                    id: 4,
                    name: "军团排名",
                    img: 4,
                    isRed: !1
                },
                {
                    id: 5,
                    name: "修改公告",
                    img: 5,
                    isRed: !1
                },
                {
                    id: 6,
                    name: "修改宣言",
                    img: 5,
                    isRed: !1
                }
            ];
            return i
        },
        i.setStoreData = function(t) {
            var e = this.getGuildStorePageList(t);
            this.listStore.dataProvider = new eui.ArrayCollection(e),
                this.listStore.itemRenderer = guildStoreFactoryListItem
        },
        i.getGuildStorePageList = function(t) {
            for (var e = [], a = ShopdataParser.GetInstance().getDataArr(), i = 0; i < a.length; i++) {
                var n = {};
                if (3 == a[i].type) {
                    n.id = a[i].id,
                        n.enable = a[i].enable,
                        n.itemType = a[i].itemType,
                        n.itemId = a[i].itemId,
                        n.name = a[i].name,
                        n.type = a[i].type,
                        n.saleValue = a[i].saleValue,
                        n.costType = a[i].costType,
                        n.order = a[i].order,
                        n.reqLevel = a[i].reqLevel,
                        n.reqVIPLevel = a[i].reqVIPLevel,
                        n.countLimit = a[i].countLimit,
                        n.countLimitweek = a[i].countLimitweek,
                        n.discount = a[i].discount;
                    var s = ItemParser.GetInstance().getItemById(n.itemId);
                    n.icon = Path.itemIconURL + s.icon,
                        n.quality = s.quality,
                        n.desc = s.desc_l;
                    var r = ItemsManager.getInstance().getItemById(Number(n.itemId));
                    if (r ? n.num = r.count : n.num = 0, n.hasBuyCount = 0, t.shopdata.todaybuylist)
                        for (var o = 0; o < t.shopdata.todaybuylist.length; o++)
                            if (t.shopdata.todaybuylist[o].id == Number(n.id)) {
                                n.hasBuyCount = t.shopdata.todaybuylist[o].count;
                                break
                            }
                    1 == n.enable && e.push(n)
                }
            }
            return e
        },
        i.setTechnologyData = function() {
            var t = this.getGuildTechnologyPageList();
            this.listTechnology.dataProvider = new eui.ArrayCollection(t),
                this.listTechnology.itemRenderer = guildTechnologyFactoryListItem
        },
        i.getGuildTechnologyPageList = function() {
            for (var t = [], e = GuildscienceParser.GetInstance().getDataArr(), a = GuildsciencedataParser.GetInstance().getDataArr(), i = 0; i < e.length; i++) {
                var n = {};
                n.id = e[i].id,
                    n.name = e[i].name_l,
                    n.desc1 = e[i].desc1_l,
                    n.desc2 = e[i].desc2_l,
                    n.icon = e[i].icon,
                    n.ratio = e[i].ratio,
                    n.level = 0;
                for (var s = 0; s < GuildManager.getInstance().scienceLevels.length; s++)
                    if (n.id == s + 1) {
                        n.level = GuildManager.getInstance().scienceLevels[s];
                        break
                    }
                n.maxLevel = Math.floor(GuildManager.getInstance().level / n.ratio + 1);
                for (var r = 0; r < a.length; r++)
                    if (n.level == a[r].level) {
                        r + 1 >= a.length ? n.cost = 0 : 1 == n.id ? (n.cost = a[r + 1].guildscience1Cost, n.effect = a[r].guildscience1Effect / 100 + "%") : 2 == n.id ? (n.cost = a[r + 1].guildscience2Cost, n.effect = a[r].guildscience2Effect / 100 + "%") : 3 == n.id ? (n.cost = a[r + 1].guildscience3Cost, n.effect = a[r].guildscience3Effect / 100 + "%") : 4 == n.id ? (n.cost = a[r + 1].guildscience4Cost, n.effect = a[r].guildscience4Effect / 100 + "%") : 5 == n.id ? (n.cost = a[r + 1].guildscience5Cost, n.effect = a[r].guildscience5Effect / 100 + "%") : 6 == n.id ? (n.cost = a[r + 1].guildscience6Cost, n.effect = a[r].guildscience6Effect / 100 + "%") : 7 == n.id ? (n.cost = a[r + 1].guildscience7Cost, n.effect = a[r].guildscience7Effect / 100 + "%") : 8 == n.id && (n.cost = a[r + 1].guildscience8Cost, n.effect = a[r].guildscience8Effect + "");
                        break
                    }
                n.isMaxLevel = !1,
                    0 == n.cost && (n.isMaxLevel = !0),
                    t.push(n)
            }
            return t
        },
        i.setMemberData = function() {
            var t = this.getGuildMemberPageList();
            this.listMember.dataProvider = new eui.ArrayCollection(t),
                this.listMember.itemRenderer = guildMemberFactoryListItem
        },
        i.getGuildMemberPageList = function() {
            var t = [],
                e = GuildManager.getInstance().guildMemberData;
            if (e)
                for (var a = 0; a < e.length; a++) {
                    var i = {};
                    i.uid = e[a].uid,
                        i.name = e[a].name,
                        i.face = e[a].face,
                        i.power = e[a].power,
                        i.level = e[a].level,
                        i.levelTxt = "Lv " + e[a].level,
                        i.pos = e[a].pos,
                        i.posName = this.getStrByPos(e[a].pos),
                        i.online = e[a].online,
                        i.totalcontribute = e[a].totalcontribute,
                        i.contribute = e[a].contribute,
                        i.donatetype = e[a].donatetype,
                        i.nodonatedaycount = e[a].nodonatedaycount,
                        i.militaryranktype = e[a].militaryranktype,
                        i.goldislandstate = e[a].goldislandstate,
                        i.battlestat = e[a].battlestat,
                        i.jointime = e[a].jointime,
                        i.isInBlackList = !1;
                    for (var n = BlackListManager.GetInstance().getBlackList(), s = 0; s < n.length; s++)
                        if (i.uid == n[s].uid) {
                            i.isInBlackList = !0;
                            break
                        }
                    t.push(i)
                }
            return t
        },
        i.getStrByPos = function(t) {
            return 0 == t ? "军团长" : 1 == t ? "副军团长" : 2 == t ? "成员" : void 0
        },
        e.GUILD_INDEX = 5,
        e
}(WindowBase);
