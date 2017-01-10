
var WindowShop = function(t) {
    function e() {
        t.call(this, !1),
            this.tickIndex2 = 0,
            this.tickIndex3 = 0,
            this.pos = 0,
            this.skinName = "resource/eui_skins/ShangCheng.exml"
            /*tpa=resource/eui_skins/ShangCheng.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            17 == GuideManager.step && GuideManager.nextStep(),
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    t.initUI()
                }),
                this.btnPaper.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                this.btnStore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                this.btnVipStore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                this.btnCaptain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                this.btnMedal.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                UserData.getInstance().registerActiveTip(this.spotPaper, "spy"),
                UserData.getInstance().registerActiveTip(this.spotVipStore, "vipgift"),
                UserData.getInstance().updateActiveTip()
        },
        i.clear = function() {
            this.btnPaper.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                this.btnStore.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                this.btnVipStore.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                this.btnCaptain.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                this.btnMedal.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this)
        },
        i.onTabBarItemTap = function(t) {
            switch (t.currentTarget) {
                case this.btnPaper:
                    this.selectToggleButton(e.PAPER_INDEX);
                    break;
                case this.btnStore:
                    this.selectToggleButton(e.STORE_INDEX);
                    break;
                case this.btnVipStore:
                    this.selectToggleButton(e.VIP_INDEX);
                    break;
                case this.btnCaptain:
                    this.selectToggleButton(e.CAPTAIN_INDEX);
                    break;
                case this.btnMedal:
                    this.selectToggleButton(e.MEDAL_INDEX)
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("item"),
                e.push("spyBaseData"),
                e.push("shopData"),
                ConfigData.preLoadDats(e, [ItemParser, SpybasedataParser, ShopdataParser],
                    function() {
                        t()
                    })
        },
        i.initUI = function() {
            WindowManager.getInstance().hideWaiting(),
                MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                GameData.skipShipGuide ? (this.selectToggleButton(e.STORE_INDEX), this.btnPaper.visible = !1, this.btnCaptain.visible = !1, this.btnMedal.visible = !1, this.btnStore.x = 0, this.btnVipStore.x = 118) : (this.selectToggleButton(e.CURR_PAGE), this.btnCaptain.visible = !1, this.btnMedal.visible = !1),
                this.commonScroller.viewport = this.commonList,
                this.showPage()
        },
        i.showPage = function() {
            this.pos = 0,
                this.commonScroller.viewport.scrollV = 0,
                e.CURR_PAGE == e.PAPER_INDEX ? ShopManager.getInstance().sendSpyData() : e.CURR_PAGE == e.STORE_INDEX ? ShopManager.getInstance().sendShopData(e.CURR_PAGE) : e.CURR_PAGE == e.VIP_INDEX ? ShopManager.getInstance().sendShopData(e.CURR_PAGE) : e.CURR_PAGE == e.CAPTAIN_INDEX || e.CURR_PAGE == e.MEDAL_INDEX
        },
        i.selectToggleButton = function(t) {
            var a = [];
            a = ShopManager.getInstance().versionSwitch ? [this.btnStore, this.btnVipStore] : [this.btnPaper, this.btnStore, this.btnVipStore, this.btnCaptain, this.btnMedal];
            for (var i = 0; i < a.length; i++) t == i ? a[i].currentState = "down" : a[i].currentState = "up";
            e.CURR_PAGE = t,
                this.showPage()
        },
        i.setVipPage = function(t) {
            var e = this.getVipPageList(t);
            this.commonList.dataProvider = new eui.ArrayCollection(e),
                this.commonList.itemRenderer = vipStoreFactoryListItem,
                this.moveScroller(this.pos)
        },
        i.getVipPageList = function(t) {
            for (var e = [], a = ShopdataParser.GetInstance().getDataArr(), i = 0; i < a.length; i++) {
                var n = {};
                if ("2" == a[i].type) {
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
                    if (r ? n.num = r.count : n.num = 0, n.hasBuyCount = 0, t.shopdata.oncebuyid)
                        for (var o = 0; o < t.shopdata.oncebuyid.length; o++)
                            if (t.shopdata.oncebuyid[o] == Number(n.id)) {
                                n.hasBuyCount = 1;
                                break
                            }
                    0 == n.hasBuyCount && 1 == n.enable && e.push(n)
                }
            }
            return e
        },
        i.setStorePage = function(t) {
            var e = this.getStorePageList(t);
            this.commonList.dataProvider = new eui.ArrayCollection(e),
                this.commonList.itemRenderer = storeFactoryListItem,
                this.moveScroller(this.pos)
        },
        i.getStorePageList = function(t) {
            for (var e = [], a = ShopdataParser.GetInstance().getDataArr(), i = 0; i < a.length; i++) {
                var n = {};
                if ("1" == a[i].type) {
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
        i.setPaperPage = function(t) {
            var e = this.getPaperPageList(t);
            this.commonList.dataProvider = new eui.ArrayCollection(e),
                this.commonList.itemRenderer = paperFactoryListItem,
                this.moveScroller(this.pos)
        },
        i.getPaperPageList = function(t) {
            this.midprice = t.midprice,
                this.seniorprice = t.seniorprice,
                this.tenprice = t.tenprice,
                this.middiscount = t.middiscount,
                this.seniordiscount = t.seniordiscount,
                this.hasbuy2 = t.hasbuy2,
                this.hasbuy3 = t.hasbuy3;
            for (var e = t.lasttimelist,
                    a = [], i = SpybasedataParser.GetInstance().getDataArr(), n = 0; n < i.length; n++) {
                var s = {};
                s.id = i[n].id,
                    s.name = i[n].name_l,
                    s.icon = Path.npcURL + i[n].icon,
                    s.freeCount = i[n].freeCount,
                    s.cd = i[n].cd,
                    s.itemId = i[n].itemId,
                    s.itemId2 = i[n].itemId2,
                    s.credit = i[n].credit,
                    s.spyLv = i[n].spyLv,
                    s.color = i[n].color,
                    s.itemIcon = Path.item_sURL + i[n].itemIcon,
                    s.desc = i[n].desc,
                    s.midprice = this.midprice,
                    s.seniorprice = this.seniorprice,
                    s.tenprice = this.tenprice,
                    s.count = 0;
                var r = ItemsManager.getInstance().getItemById(Number(s.itemId));
                if (null != r && (s.count += r.count), "" != s.itemId2) {
                    var o = ItemsManager.getInstance().getItemById(Number(s.itemId2));
                    null != o && (s.count += o.count)
                }
                if (s.lasttime = 0, "2" == s.id) {
                    var l = Number(s.cd) - (UserData.getInstance().getOldServerTime() / 1e3 - e[1]);
                    0 == e[1] || 0 >= l ? s.lasttime = 0 : s.lasttime = l
                }
                if ("3" == s.id) {
                    var h = Number(s.cd) - (UserData.getInstance().getOldServerTime() / 1e3 - e[2]);
                    0 == e[2] || 0 >= h ? s.lasttime = 0 : s.lasttime = h
                }
                a.push(s)
            }
            return a
        },
        i.setPos = function() {
            this.pos = this.commonScroller.viewport.scrollV
        },
        i.moveScroller = function(t) {
            this.commonScroller.viewport.validateNow(),
                this.commonScroller.viewport.scrollV = t
        },
        e.PAPER_INDEX = 0,
        e.STORE_INDEX = 1,
        e.VIP_INDEX = 2,
        e.CAPTAIN_INDEX = 3,
        e.MEDAL_INDEX = 4,
        e.CURR_PAGE = 0,
        e
}(WindowBase);
