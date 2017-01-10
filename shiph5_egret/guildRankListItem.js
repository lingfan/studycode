
var WindowMuBiaoAct = function(t) {
    function e() {
        t.call(this, !1),
            this.currLingJiang = 1,
            this.day1DataList = [],
            this.day2DataList = [],
            this.day3DataList = [],
            this.rewardBtn1State = !0,
            this.rewardBtn2State = !0,
            this.rewardBtn3State = !0,
            this.timeGap = 864e5,
            this.skinName = "resource/eui_skins/HuoDong_tab_Skin.exml"
            /*tpa=resource/eui_skins/HuoDong_tab_Skin.exml*/
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
                this.day1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.day2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.day3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnTakeReward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.clear = function() {
            this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.day1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.day2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.day3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnTakeReward.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.onTouchTapHandle = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    this.rewardBtn1State = !0,
                        this.rewardBtn2State = !0,
                        this.rewardBtn3State = !0,
                        MainUI.instance.setBottomVisible(!0),
                        MainUI.instance.changeTopMode(topUIMode.normal),
                        MainUI.instance.changeTopMode(topUIMode.normal),
                        WindowManager.getInstance().hide(WindowManager.windowType.mubiaoAct);
                    break;
                case this.day1:
                    this.currLingJiang = 1,
                        this.setDay1Page();
                    break;
                case this.day2:
                    this.currLingJiang = 2,
                        this.setDay2Page();
                    break;
                case this.day3:
                    this.currLingJiang = 3,
                        this.setDay3Page();
                    break;
                case this.btnTakeReward:
                    this.sendLingJiang(this.currLingJiang)
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("giftData"),
                ConfigData.preLoadDats(e, [GiftdataParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode["null"]),
                MainUI.instance.setBottomVisible(!1),
                SUI.setTextureAsync(this.imgSkip, Path.uiUrl + "Activity/Activity_fengetiao.png"),
                SUI.setTextureAsync(this.imgBg, Path.backGroundImageUrl + "Bg_huodong.jpg"),
                SUI.setTextureAsync(this.imgL, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                SUI.setTextureAsync(this.imgR, Path.uiUrl + "Activity/Bg_title_huodong2.png"),
                SUI.setTextureAsync(this.imgTitle, Path.uiUrl + "Activity/Title_SanRiMuBiao.png"),
                SUI.setTextureAsync(this.imgShow, Path.uiUrl + "Tutorial/tutorialNPC.png"),
                this.reward1.imgPieceFlag.visible = !1,
                this.reward2.imgPieceFlag.visible = !1,
                this.reward3.imgPieceFlag.visible = !1,
                this.scroller.viewport = this.list;
            for (var t = ActivityManager.instance.activityData.rank_giftlist,
                    e = 0; e < t.length; e++) 1 == t[e] ? this.rewardBtn1State = !1 : 2 == t[e] ? this.rewardBtn2State = !1 : 3 == t[e] && (this.rewardBtn3State = !1);
            this.sendMuBiaoActData()
        },
        i.setDay1Page = function() {
            this.day1.currentState = "down",
                this.day2.currentState = "up",
                this.day3.currentState = "up";
            var t = this.getDay1List();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = playerRankListItem,
                this.txtTime.text = "时间: " + Utils.getDateByNum(this.day1StartTime, timeType.FORMATDATE) + " - " + Utils.getDateByNum(this.day1EndTime, timeType.FORMATDATE),
                this.txtDesc.textFlow = (new egret.HtmlTextParser).parser("<font>说明: 第1日进入等级排行,可获得巅峰奖励,奖励将发放到领奖中心,</font>\n<font color='#00ff00'>排名奖励以开服首日结束时为准。</font>"),
                this.txtRewardCondition.text = "等级达到" + this.day1UnautoData.condition + "可领取奖励",
                UserData.getInstance()._level >= this.day1UnautoData.condition ? (this.txtRewardCondition.textColor = 65280, this.rewardBtn1State ? this.btnTakeReward.label = "领取奖励" : this.btnTakeReward.label = "已领取") : (this.txtRewardCondition.textColor = 16711680, this.btnTakeReward.label = "领取奖励"),
                this.setRewardItemData(this.day1UnautoData.items),
                this.isClose.visible = this.isActEnd(this.day1StartTime, this.day1EndTime)
        },
        i.getDay1List = function() {
            return this.day1DataList.sort(function(t, e) {
                    return t.rank - e.rank
                }),
                this.day1DataList
        },
        i.setDay2Page = function() {
            this.day1.currentState = "up",
                this.day2.currentState = "down",
                this.day3.currentState = "up";
            var t = this.getDay2List();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = playerRankListItem,
                this.txtTime.text = "时间: " + Utils.getDateByNum(this.day2StartTime, timeType.FORMATDATE) + " - " + Utils.getDateByNum(this.day2EndTime, timeType.FORMATDATE),
                this.txtDesc.textFlow = (new egret.HtmlTextParser).parser("<font>说明: 第2日进入战斗力排行,可获得巅峰奖励,奖励将发放到领奖中心,</font>\n<font color='#00ff00'>排名奖励以开服第二天结束时为准。</font>"),
                this.txtRewardCondition.text = "战斗力达到" + this.day2UnautoData.condition + "可领取奖励",
                UserData.getInstance().getPower() >= this.day2UnautoData.condition ? (this.txtRewardCondition.textColor = 65280, this.rewardBtn2State ? this.btnTakeReward.label = "领取奖励" : this.btnTakeReward.label = "已领取") : (this.txtRewardCondition.textColor = 16711680, this.btnTakeReward.label = "领取奖励"),
                this.setRewardItemData(this.day2UnautoData.items),
                this.isClose.visible = this.isActEnd(this.day2StartTime, this.day2EndTime)
        },
        i.getDay2List = function() {
            return this.day2DataList.sort(function(t, e) {
                    return t.rank - e.rank
                }),
                this.day2DataList
        },
        i.setDay3Page = function() {
            this.day1.currentState = "up",
                this.day2.currentState = "up",
                this.day3.currentState = "down";
            var t = this.getDay3List();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = guildRankListItem,
                this.txtTime.text = "时间: " + Utils.getDateByNum(this.day3StartTime, timeType.FORMATDATE) + " - " + Utils.getDateByNum(this.day3EndTime, timeType.FORMATDATE),
                this.txtDesc.textFlow = (new egret.HtmlTextParser).parser("<font>说明: 第3日进入军团排行,可获得巅峰奖励,奖励将发放到领奖中心,</font>\n<font color='#00ff00'>排名奖励以开服第三天结束时为准。</font>"),
                this.txtRewardCondition.text = "加入军团可领取奖励",
                null == GuildManager.getInstance().id || "" == GuildManager.getInstance().id ? (this.txtRewardCondition.textColor = 16711680, this.btnTakeReward.label = "领取奖励") : (this.txtRewardCondition.textColor = 65280, this.rewardBtn3State ? this.btnTakeReward.label = "领取奖励" : this.btnTakeReward.label = "已领取"),
                this.setRewardItemData(this.day3UnautoData.items),
                this.isClose.visible = this.isActEnd(this.day3StartTime, this.day3EndTime)
        },
        i.getDay3List = function() {
            return this.day3DataList.sort(function(t, e) {
                    return t.rank - e.rank
                }),
                this.day3DataList
        },
        i.sendMuBiaoActData = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceActivityWebData);
            t.type = 19,
                Transport.instance.send(t)
        },
        i.sendLingJiang = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceActivity);
            e.id = 19,
                e.type = t,
                Transport.instance.send(e)
        },
        i.setData = function(t) {
            this._data = t.actlist[0],
                console.log(" === id === " + this._data.id),
                console.log(" === desc === " + this._data.desc),
                console.log(" === state === " + this._data.state),
                console.log(" === type === " + this._data.type),
                console.log(" === start_time === " + 1e3 * this._data.start_time.time),
                console.log(" === end_time === " + 1e3 * this._data.end_time.time),
                console.log(" === show_start === " + 1e3 * this._data.show_start.time),
                console.log(" === show_endL === " + 1e3 * this._data.show_endL.time),
                this.day1StartTime = 1e3 * this._data.start_time.time,
                this.day1EndTime = this.day1StartTime + this.timeGap,
                this.day2StartTime = this.day1EndTime,
                this.day2EndTime = this.day2StartTime + this.timeGap,
                this.day3StartTime = this.day2EndTime,
                this.day3EndTime = this.day3StartTime + this.timeGap,
                console.log(" === day1StartTime === " + this.day1StartTime),
                console.log(" === day1EndTime === " + this.day1EndTime),
                console.log(" === day2StartTime === " + this.day2StartTime),
                console.log(" === day2EndTime === " + this.day2EndTime),
                console.log(" === day3StartTime === " + this.day3StartTime),
                console.log(" === day3EndTime === " + this.day3EndTime);
            for (var e = 0; e < this._data.itemlist.length; e++) {
                for (var a = this._data.itemlist[e], i = a.params, n = void 0, s = void 0, r = void 0, o = void 0, l = 0; l < i.length; l++) 0 == l ? n = i[l] : 1 == l ? s = i[l] : 2 == l ? r = i[l] : 3 == l && (o = i[3]);
                if (1 == n)
                    if (r > 0) this.day1UnautoData = {
                        childType: n,
                        condition: r,
                        items: a.items
                    };
                    else {
                        var h = {
                            rank: s,
                            playerdata: a.playerdata,
                            items: a.items
                        };
                        this.day1DataList.push(h)
                    }
                else if (2 == n)
                    if (r > 0) this.day2UnautoData = {
                        childType: n,
                        condition: r,
                        items: a.items
                    };
                    else {
                        var h = {
                            rank: s,
                            playerdata: a.playerdata,
                            items: a.items
                        };
                        this.day2DataList.push(h)
                    }
                else if (3 == n)
                    if (r > 0) this.day3UnautoData = {
                        childType: n,
                        condition: r,
                        items: a.items
                    };
                    else {
                        var c = !1;
                        if (this.day3DataList)
                            for (var d = 0; d < this.day3DataList.length; d++)
                                if (s == this.day3DataList[d].rank) {
                                    1 == o ? this.day3DataList[d].leaderItems = a.items : 0 == o && (this.day3DataList[d].items = a.items),
                                        c = !0;
                                    break
                                }
                        if (!c)
                            if (1 == o) {
                                var h = {
                                    guild_chief_name: a.guild_chief_name,
                                    rank: s,
                                    guilddata: a.guilddata,
                                    leaderItems: a.items,
                                    items: null
                                };
                                this.day3DataList.push(h)
                            } else if (0 == o) {
                            var h = {
                                guild_chief_name: a.guild_chief_name,
                                rank: s,
                                guilddata: a.guilddata,
                                leaderItems: null,
                                items: a.items
                            };
                            this.day3DataList.push(h)
                        }
                    }
            }
            this.setDay1Page()
        },
        i.setRewardItemData = function(t) {
            3 == t.length ? (this.reward1.visible = !0, this.reward2.visible = !0, this.reward3.visible = !0) : 2 == t.length ? (this.reward1.visible = !0, this.reward2.visible = !0, this.reward3.visible = !1) : 1 == t.length ? (this.reward1.visible = !0, this.reward2.visible = !1, this.reward3.visible = !1) : 0 == t.length && (this.reward1.visible = !1, this.reward2.visible = !1, this.reward3.visible = !1);
            for (var e = 0; e < t.length; e++) {
                var a = GiftdataParser.GetInstance().getItemById(t[e].id),
                    i = GlobalFunction.getDropDataByTypeAndId(a.type, a.item, a.count);
                0 == e ? (SUI.setTextureAsync(this.reward1.imgBg, QualitySystem.getItemSmallBack(i.quality)), SUI.setTextureAsync(this.reward1.imgIcon, i.icon), this.reward1.imgPieceFlag.visible = !1, this.reward1.txtName.text = i.name, void 0 == i.count ? this.reward1.txtNum.text = "" : this.reward1.txtNum.text = i.count + "", this.reward1.txtName.textColor = QualitySystem.getColorByQuality(i.quality), this.reward1.txtNum.textColor = QualitySystem.getColorByQuality(i.quality)) : 1 == e ? (SUI.setTextureAsync(this.reward2.imgBg, QualitySystem.getItemSmallBack(i.quality)), SUI.setTextureAsync(this.reward2.imgIcon, i.icon), this.reward2.imgPieceFlag.visible = !1, this.reward2.txtName.text = i.name, void 0 == i.count ? this.reward2.txtNum.text = "" : this.reward2.txtNum.text = i.count + "", this.reward2.txtName.textColor = QualitySystem.getColorByQuality(i.quality), this.reward2.txtNum.textColor = QualitySystem.getColorByQuality(i.quality)) : 2 == e && (SUI.setTextureAsync(this.reward3.imgBg, QualitySystem.getItemSmallBack(i.quality)), SUI.setTextureAsync(this.reward3.imgIcon, i.icon), this.reward3.imgPieceFlag.visible = !1, this.reward3.txtName.text = i.name, void 0 == i.count ? this.reward3.txtNum.text = "" : this.reward3.txtNum.text = i.count + "", this.reward3.txtName.textColor = QualitySystem.getColorByQuality(i.quality), this.reward3.txtNum.textColor = QualitySystem.getColorByQuality(i.quality))
            }
        },
        i.isActEnd = function(t, e) {
            var a = new Date;
            return a.valueOf() >= t && a.valueOf() <= e ? !1 : a.valueOf() < t ? !1 : a.valueOf() > e ? !0 : void 0
        },
        i.isTakeReward = function(t, e) {
            var a = new Date;
            return a.valueOf() >= t && a.valueOf() <= e ? !0 : !1
        },
        i.setRewardBtnState = function() {
            1 == this.currLingJiang ? this.rewardBtn1State = !1 : 2 == this.currLingJiang ? this.rewardBtn2State = !1 : 3 == this.currLingJiang && (this.rewardBtn3State = !1),
                this.btnTakeReward.label = "已领取"
        },
        e
}(WindowBase);
