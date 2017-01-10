
var WindowZhaoMuCaptain = function(t) {
    function e() {
        t.call(this, !1),
            this.juniorcaptain = 0,
            this.seniorcaptain = 0,
            this.hasexchangetimes = 0,
            this.juniorlasttime = 0,
            this.seniorlasttime = 0,
            this.juniorfirstbuyaward = !1,
            this.seniorfirstbuyaward = !1,
            this.juniordiscount = !1,
            this.seniordiscount = !1,
            this.skinName = "resource/eui_skins/ChouJiang_TeGongSkin.exml"
            /*tpa=resource/eui_skins/ChouJiang_TeGongSkin.exml*/
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
                UserData.getInstance().addEventListener(GameEvent.UserData_Update, this.updateUserInfo, this),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this)
        },
        i.clear = function() {
            MainUI.instance.setBottomVisible(!0),
                UserData.getInstance().removeEventListener(GameEvent.UserData_Update, this.updateUserInfo, this),
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this)
        },
        i.onTabBarItemTap = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    WindowManager.getInstance().hide(WindowManager.windowType.ZhaoMuCaptain)
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("item"),
                e.push("spyBaseData"),
                e.push("CaptainRecruitData"),
                ConfigData.preLoadDats(e, [ItemParser, SpybasedataParser, CaptainrecruitdataParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode["null"]),
                MainUI.instance.setBottomVisible(!1),
                SUI.setTextureAsync(this.bgImg, Path.backGroundImageUrl + "BG_zhaomujianzhang.jpg"),
                this.txtNum.text = UserData.getInstance().getRes(TypeDefine.RES.Diamond).toString(),
                this.scroller.viewport = this.list,
                ShopManager.getInstance().sendDseCaptainData()
        },
        i.updateUserInfo = function() {
            this.txtNum.text = UserData.getInstance().getRes(TypeDefine.RES.Diamond).toString()
        },
        i.setPageData = function(t) {
            var e = this.getPaperPageList(t);
            this.list.dataProvider = new eui.ArrayCollection(e),
                this.list.itemRenderer = zhaoMuCaptainFactoryListItem
        },
        i.getPaperPageList = function(t) {
            this.juniorcaptain = t.juniorcaptain,
                this.seniorcaptain = t.seniorcaptain,
                this.hasexchangetimes = t.hasexchangetimes,
                this.juniorlasttime = t.juniorlasttime,
                this.seniorlasttime = t.seniorlasttime,
                this.juniorfirstbuyaward = t.juniorfirstbuyaward,
                this.seniorfirstbuyaward = t.seniorfirstbuyaward,
                this.juniordiscount = t.juniordiscount,
                this.seniordiscount = t.seniordiscount;
            for (var e = [], a = CaptainrecruitdataParser.GetInstance().getDataArr(), i = 0; i < a.length; i++) {
                var n = {};
                n.id = a[i].id,
                    n.name = a[i].name_l,
                    n.icon = Path.npcURL + "Recruit_" + a[i].id + ".png",
                    n.freeCount = a[i].freeCount,
                    n.cd = a[i].cd,
                    n.itemId = a[i].itemId,
                    n.itemId2 = a[i].freeItemId,
                    n.credit = a[i].credit,
                    1 == n.id ? n.itemIcon = Path.item_sURL + "zml_lv_x.png" : 2 == n.id ? n.itemIcon = Path.item_sURL + "zml_lan_x.png" : 3 == n.id ? n.itemIcon = Path.item_sURL + "zml_z_x.png" : 4 == n.id && (n.itemIcon = Path.item_sURL + "zml_c_x.png"),
                    1 == a[i].id ? n.desc = "数量不足,招募令会在战役的精英关卡中产出" : 4 == a[i].id ? n.desc = "数量不足,王牌招募令会在各种活动中产出" : n.desc = "",
                    n.midprice = 80,
                    n.seniorprice = 280,
                    n.tenprice = 2680,
                    n.count = 0;
                var s = ItemsManager.getInstance().getItemById(Number(n.itemId));
                if (null != s && (n.count += s.count), -1 != n.itemId2) {
                    var r = ItemsManager.getInstance().getItemById(Number(n.itemId2));
                    null != r && (n.count += r.count)
                }
                if (n.lasttime = 0, "2" == n.id) {
                    var o = n.cd - (UserData.getInstance().getOldServerTime() / 1e3 - this.juniorlasttime);
                    0 == this.juniorlasttime || 0 >= o ? n.lasttime = 0 : n.lasttime = o
                }
                if ("3" == n.id) {
                    var l = Number(n.cd) - (UserData.getInstance().getOldServerTime() / 1e3 - this.seniorlasttime);
                    0 == this.seniorlasttime || 0 >= l ? n.lasttime = 0 : n.lasttime = l
                }
                e.push(n)
            }
            return e
        },
        e
}(WindowBase);
