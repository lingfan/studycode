
var guildManagePage;
!
function(t) {
    t[t.PAGE_BASE = 0] = "PAGE_BASE",
        t[t.PAGE_GUILDSTORE = 1] = "PAGE_GUILDSTORE",
        t[t.PAGE_GUILDTECHNOLOGY = 2] = "PAGE_GUILDTECHNOLOGY",
        t[t.PAGE_GUILDMEMBER = 3] = "PAGE_GUILDMEMBER",
        t[t.PAGE_GUILDMANAGE = 4] = "PAGE_GUILDMANAGE"
}(guildManagePage || (guildManagePage = {}));
var GuildManager = function() {
    function t() {
        this.isOpenWin = !1,
            this.isOpenWinJoin = !1,
            this.isToOpenJoin = !1,
            this.isToOpenManage = !1,
            this.isSearchGuild = !1,
            this.isOpenDonate = !1,
            this.isDonateIng = !1,
            this.isChangeGuildBadge = !1,
            this.memberlist = [],
            this.applylist = [],
            this.guildlist = [],
            this.applyGuildlist = [],
            this.lastTime = 0,
            this.guildMemberData = [],
            this.windowGuildCurrPage = guildManagePage.PAGE_BASE,
            this.scienceLevels = [],
            this.GuildScienceList = []
    }
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return void 0 == this._instance && (this._instance = new t),
                this._instance
        },
        a.setGuildData = function(t) {
            if (this.isSearchGuild = !1, this.searchGuildID = "", this.id = t.id, this.isOpenWin) {
                if (null == this.id || "" == this.id) return this.isToOpenJoin = !0,
                    this.isOpenWinJoin = !0,
                    void this.sendGuildList(0, 1);
                this.name = t.name,
                    this.medal = t.medal,
                    this.level = t.level,
                    null == t.declaration || "" == t.declaration ? this.declaration = "欢迎来到战舰帝国,让我们一起成长" : this.declaration = t.declaration,
                    null == t.notify || "" == t.notify ? this.notify = "这个军团长很懒，没有写任何公告" : this.notify = t.notify,
                    this.pos = t.pos,
                    this.membercount = t.membercount,
                    this.donatetimes = t.donatetimes,
                    this.buygifttimes = t.buygifttimes,
                    this.dismisstime = t.dismisstime,
                    this.memberlist = t.memberlist,
                    this.verifyoption = t.verifyoption,
                    this.dismisstype = t.dismisstype,
                    this.activepoint = t.activepoint,
                    this.guildpoint = t.guildpoint,
                    this.loglist = t.loglist,
                    this.isDonateIng && (this.isDonateIng = !1, GuildDonateAlert.getInstance().setNotifyData(), GuildDonateAlert.getInstance().setButtonsState()),
                    this.openWindowGuild()
            }
        },
        a.setGuildListData = function(t) {
            if (this.guildlist = [], this.applyGuildlist = [], t.guildlist && (this.guildlist = t.guildlist.guildlist), t.applylist && (this.applyGuildlist = t.applylist.guildlist), this.page = t.page, !this.isOpenWinJoin) return void(WindowManager.getInstance().isWindowVisible(WindowManager.windowType.RankList) && (t.type = 16, RankListManager.getInstance().setdata(t)));
            if (this.isToOpenJoin) this.isToOpenJoin = !1,
                this.lastTime = 10800 - (UserData.getInstance().getOldServerTime() / 1e3 - t.quittime),
                WindowManager.getInstance().show(WindowManager.windowType.GuildJoin);
            else {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.GuildJoin);
                this.isSearchGuild ? (this.guildlist = [], this.guildlist.push(this.tmpSearchGuild), e && (e.setJoinGuildPage(), e.txtReturnList.visible = !0)) : e && (e.setJoinGuildPage(), e.txtReturnList.visible = !1)
            }
        },
        a.sendGuildData = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceGuildData);
            Transport.instance.send(t)
        },
        a.sendGuildList = function(t, e) {
            var a = Transport.getPkg(ProtocolMgr.ID_DceGuildList);
            a.page = t,
                a.type = e,
                Transport.instance.send(a)
        },
        a.sendCreateGuild = function(t, e) {
            var a = Transport.getPkg(ProtocolMgr.ID_DceCreateGuild);
            a.name = t,
                a.medal = e,
                Transport.instance.send(a)
        },
        a.handleCreateGuild = function(t) {
            0 == t.res && (MainUI.instance.setBottomVisible(!0), WindowManager.getInstance().hide(WindowManager.windowType.GuildJoin), this.sendGuildData())
        },
        a.sendSearchGuild = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceSearchGuild);
            e.id = t,
                Transport.instance.send(e)
        },
        a.handleSearchGuild = function(t) {
            t.data && (t.data.camp = t.camp, this.tmpSearchGuild = t.data, this.sendGuildList(0, 1))
        },
        a.sendGuildApply = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGuildApply);
            e.uid = t,
                Transport.instance.send(e)
        },
        a.handleGuildApply = function(e) {
            0 == e.res ? (Toast.launch("加入申请已提交"), 0 == e.isverified ? this.isSearchGuild ? this.sendSearchGuild(this.searchGuildID) : this.sendGuildList(0, 1) : 1 == e.isverified && (WindowManager.getInstance().hide(WindowManager.windowType.GuildJoin), t.getInstance().isOpenWin = !0, t.getInstance().windowGuildCurrPage = guildManagePage.PAGE_BASE, t.getInstance().sendGuildData())) : 3 == e.res ? Toast.launch("军团人数达到上限") : 4 == e.res ? Toast.launch("申请军团数量上线") : 5 == e.res ? Toast.launch("重复申请") : 6 == e.res ? Toast.launch("阵营不同") : 7 == e.res ? Toast.launch("退团倒计时未到") : 8 == e.res && (UserData.getInstance()._level >= 18 ? Toast.launch("该军团审核列表已满") : Toast.launch("您未达到18级,不能加入军团")),
                e.uid,
                e.isverified
        },
        a.sendGuildCancelApply = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGuildCancelApply);
            e.uid = t,
                Transport.instance.send(e)
        },
        a.handleGuildCancelApply = function(t) {
            0 == t.res && (Toast.launch("成功取消申请"), this.isSearchGuild ? this.sendSearchGuild(this.searchGuildID) : this.sendGuildList(0, 1)),
                t.uid
        },
        a.openWindowGuild = function() {
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.Guild);
            t ? this.windowGuildCurrPage == guildManagePage.PAGE_BASE ? t.setGuildBaseInfo() : this.windowGuildCurrPage == guildManagePage.PAGE_GUILDSTORE ? (t.setGuildStoreInfo(), t.setGuildBaseInfo()) : this.windowGuildCurrPage == guildManagePage.PAGE_GUILDTECHNOLOGY ? t.setGuildBaseInfo() : this.windowGuildCurrPage == guildManagePage.PAGE_GUILDMANAGE && t.setGuildManageInfo() : (WindowManager.getInstance().show(WindowManager.windowType.Guild), this.isOpenDonate && (this.isOpenDonate = !1, GuildDonateAlert.getInstance().show()))
        },
        a.sendGuildMemberList = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceGuildMemberList);
            t.page = 0,
                Transport.instance.send(t)
        },
        a.handleGuildMemberList = function(t) {
            if (t.memberlist && (this.guildMemberData = t.memberlist, this.getGuildLeader())) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Guild);
                e && (e.txtGuildLeader.text = "军团长:" + this.getGuildLeader().name, e.setGuildMemberInfo())
            }
        },
        a.getGuildLeader = function() {
            for (var t = 0; t < this.guildMemberData.length; t++)
                if (0 == this.guildMemberData[t].pos) return this.guildMemberData[t]
        },
        a.sendGuildScienceList = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceGuildScienceList);
            Transport.instance.send(t)
        },
        a.handleGuildScienceList = function(e) {
            e.res,
                this.scienceLevels = e.levels,
                this.GuildScienceList = this.getGuildTechnologyPageList();
            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.Guild);
            a && a.showGuildManagePageByType(t.getInstance().windowGuildCurrPage)
        },
        a.getGuildTechnologyPageList = function() {
            for (var t = [], e = GuildscienceParser.GetInstance().getDataArr(), a = GuildsciencedataParser.GetInstance().getDataArr(), i = 0; i < e.length; i++) {
                var n = {};
                n.id = e[i].id,
                    n.name = e[i].name_l,
                    n.desc1 = e[i].desc1_l,
                    n.desc2 = e[i].desc2_l,
                    n.icon = e[i].icon,
                    n.ratio = e[i].ratio,
                    n.level = 0;
                for (var s = 0; s < this.scienceLevels.length; s++)
                    if (n.id == s + 1) {
                        n.level = this.scienceLevels[s];
                        break
                    }
                for (var r = 0; r < a.length; r++)
                    if (n.level == a[r].level) {
                        r + 1 >= a.length ? n.cost = 0 : 1 == n.id ? (n.cost = a[r + 1].guildscience1Cost, n.effect = a[r].guildscience1Effect) : 2 == n.id ? (n.cost = a[r + 1].guildscience2Cost, n.effect = a[r].guildscience2Effect) : 3 == n.id ? (n.cost = a[r + 1].guildscience3Cost, n.effect = a[r].guildscience3Effect) : 4 == n.id ? (n.cost = a[r + 1].guildscience4Cost, n.effect = a[r].guildscience4Effect) : 5 == n.id ? (n.cost = a[r + 1].guildscience5Cost, n.effect = a[r].guildscience5Effect) : 6 == n.id ? (n.cost = a[r + 1].guildscience6Cost, n.effect = a[r].guildscience6Effect) : 7 == n.id ? (n.cost = a[r + 1].guildscience7Cost, n.effect = a[r].guildscience7Effect) : 8 == n.id && (n.cost = a[r + 1].guildscience8Cost, n.effect = a[r].guildscience8Effect);
                        break
                    }
                t.push(n)
            }
            return t
        },
        a.sendUpgradeGuildScience = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceUpgradeGuildScience);
            e.id = t,
                Transport.instance.send(e)
        },
        a.handleUpgradeGuildScience = function(e) {
            e.id,
                0 == e.res ? (t.getInstance().sendGuildScienceList(), Toast.launch("升级成功")) : 1 == e.res ? Toast.launch("已升级到最高级") : 2 == e.res ? Toast.launch("不是军长或者副军长不能升级") : 5 == e.res ? Toast.launch("建设点不足") : 10 == e.res ? Toast.launch("非法id") : 11 == e.res ? Toast.launch("玩家所在的军团不存在") : 12 == e.res && Toast.launch("配表错误")
        },
        a.sendGuildApplyList = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceGuildApplyList);
            t.page = 0,
                Transport.instance.send(t)
        },
        a.handleGuildApplyList = function(t) {
            this.applylist = t.applylist,
                GuildVerifyAlert.getInstance().setListData();
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Guild);
            e && e.setActivityData(e.isChat)
        },
        a.sendGuildApproval = function(t, e) {
            var a = Transport.getPkg(ProtocolMgr.ID_DceGuildApproval);
            a.uid = t,
                a.type = e,
                Transport.instance.send(a)
        },
        a.handleGuildApproval = function(t) {
            t.type,
                0 == t.res ? this.sendGuildApplyList() : 3 == t.res ? Toast.launch("不是会长或副会长") : 6 == t.res ? Toast.launch("该玩家已加入其它公会") : 8 == t.res ? Toast.launch("军团人数已达上限") : 9 == t.res && Toast.launch("无申请加入军团记录")
        },
        a.sendSetVerifyOptions = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceSetVerifyOptions);
            e.option = t,
                Transport.instance.send(e)
        },
        a.handleSetVerifyOptions = function(t) {
            0 == t.res || 3 == t.res && Toast.launch("不是会长")
        },
        a.sendGuildSetDeputy = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGuildSetDeputy);
            e.uid = t,
                Transport.instance.send(e)
        },
        a.handleGuildSetDeputy = function(e) {
            0 == e.res ? (t.getInstance().sendGuildMemberList(), Toast.launch("任命成功")) : 3 == e.res ? Toast.launch("你不是军团长，你没有权利任命副军团长") : 4 == e.res && Toast.launch("已有2名副军团长")
        },
        a.sendGuildFireDeputy = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGuildFireDeputy);
            e.uid = t,
                Transport.instance.send(e)
        },
        a.handleGuildFireDeputy = function(e) {
            0 == e.res ? (t.getInstance().sendGuildMemberList(), Toast.launch("解除职位成功")) : 3 == e.res ? Toast.launch("你不是军团长，你没有权利任命副军团长") : 4 == e.res && Toast.launch("对方不是副军团长")
        },
        a.sendGuildDemise = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGuildDemise);
            e.uid = t,
                Transport.instance.send(e)
        },
        a.handleGuildDemise = function(e) {
            0 == e.res ? (t.getInstance().sendGuildMemberList(), Toast.launch("转让军团长成功")) : 3 == e.res ? Toast.launch("你不是军团长") : 4 == e.res && Toast.launch("对方不是副军团长")
        },
        a.sendGuildExpel = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGuildExpel);
            e.uid = t,
                Transport.instance.send(e)
        },
        a.handleGuildExpel = function(e) {
            0 == e.res ? t.getInstance().sendGuildMemberList() : 3 == e.res && Toast.launch("职位不够")
        },
        a.sendGuildQuit = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceGuildQuit);
            Transport.instance.send(t)
        },
        a.handleGuildQuit = function(t) {
            0 == t.res ? (WindowManager.getInstance().hide(WindowManager.windowType.Guild), MainUI.instance.setBottomVisible(!0), Toast.launch("退出军团成功")) : 1 == t.res ? Toast.launch("会长不能退团") : 4 == t.res && Toast.launch("驻守和战役期间不能退团")
        },
        a.sendGuildDonate = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGuildDonate);
            e.type = t,
                Transport.instance.send(e)
        },
        a.handleGuildDonate = function(t) {
            if (0 == t.res) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Guild);
                e.setActivityData(e.isChat),
                    Toast.launch("捐献成功")
            } else 3 == t.res ? Toast.launch("达到最大捐献次数") : 5 == t.res && Toast.launch("钻石或金币不足")
        },
        a.sendModifyNotify = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceModifyNotify);
            e.notify = t,
                Transport.instance.send(e)
        },
        a.handleModifyNotify = function(t) {
            0 == t.res ? Toast.launch("军团公告修改成功") : 3 == t.res && Toast.launch("不是军团长或副军团长")
        },
        a.sendModifyDeclaration = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceModifyDeclaration);
            e.delcartion = t,
                Transport.instance.send(e)
        },
        a.handleModifyDeclaration = function(t) {
            0 == t.res ? Toast.launch("军团宣言修改成功") : 3 == t.res && Toast.launch("不是军团长或副军团长")
        },
        a.sendRenameGuild = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceRenameGuild);
            e.name = t,
                Transport.instance.send(e)
        },
        a.handleRenameGuild = function(t) {
            0 == t.res ? Toast.launch("军团更名成功") : 1 == t.res ? Toast.launch("没有军团") : 2 == t.res ? Toast.launch("不是军团成员") : 3 == t.res ? Toast.launch("不是军团长") : 4 == t.res ? Toast.launch("新名字重复") : 5 == t.res && Toast.launch("道具不足或钻石不足")
        },
        a.sendGuildSetMedal = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGuildSetMedal);
            e.id = t,
                Transport.instance.send(e)
        },
        a.handleGuildSetMedal = function(t) {
            0 == t.res ? Toast.launch("军团徽记更换成功") : 3 == t.res && Toast.launch("不是军团长")
        },
        a.sendGuildDismiss = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceGuildDismiss);
            Transport.instance.send(t)
        },
        a.handleGuildDismiss = function(t) {
            0 == t.res ? (WindowManager.getInstance().hide(WindowManager.windowType.Guild), MainUI.instance.setBottomVisible(!0), Toast.launch("成功解散军团")) : 2 == t.res ? Toast.launch("不是军团长") : 5 == t.res ? Toast.launch("军团成员数量大于1") : 5 == t.res && Toast.launch("军团战驻守或者战斗阶段中,无法解散军团")
        },
        a.sendGuildUpgrade = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceGuildUpgrade);
            Transport.instance.send(t)
        },
        a.handleGuildUpgrade = function(t) {
            if (0 == t.res) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Guild);
                e.goBackBasePage(),
                    Toast.launch("军团升级成功")
            } else 3 == t.res ? Toast.launch("不是军团长") : 4 == t.res ? Toast.launch("已到最高等级") : 6 == t.res && Toast.launch("当前建设不足")
        },
        a.showGuildDonate = function() {
            return null == this.id || "" == this.id ? void Toast.launch("请先加入军团") : (this.isOpenDonate = !0, this.isOpenWin = !0, this.windowGuildCurrPage = guildManagePage.PAGE_BASE, void this.sendGuildData())
        },
        t
}();
