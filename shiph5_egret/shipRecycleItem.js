
var WindowShipManager = function(t) {
    function e() {
        t.call(this, !1),
            this.pos = 0,
            this.skinName = "resource/eui_skins/commonListPageSkin.exml"
            /*tpa=resource/eui_skins/commonListPageSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {},
        i.update = function() {
            this.setPos(),
                "normal" == this.curPage ? this.showShipPage() : this.showSellPage()
        },
        i.init = function() {
            MainUI.instance.changeTopMode(topUIMode.simpleLevel),
                this.scroller.viewport = this.list,
                this.pos = 0;
            for (var t = ["舰 船"], e = 0; e < t.length; e++) {
                var a = new eui.Button;
                a.skinName = "resource/eui_skins/components/tabSkin.exml"
                    /*tpa=resource/eui_skins/components/tabSkin.exml*/
                    ,
                    a.x = 118 * e,
                    a.index = e,
                    a.label = t[e],
                    this.tabContainer.addChild(a),
                    a.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                    a.currentState = "down"
            }
            this.btnClose.visible = !0,
                this.btnChangeToSell.visible = !0,
                this.btnReturn.visible = !0,
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnChangeToSell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnSellClick, this),
                this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnReturnClick, this),
                this.showShipPage(),
                this.updateUserInfo(),
                UserData.getInstance().addEventListener(GameEvent.UserData_Update, this.updateUserInfo, this),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.ShipDataUpdate, this.update, this)
        },
        i.onTabBarItemTap = function(t) {
            this.pos = 0,
                this.moveScroller(this.pos)
        },
        i.updateUserInfo = function() {
            MainUI.instance.setSimpleLevelTopInfo(UserData.getInstance().getPlayerLevel(), UserData.getInstance().getExpPercent(), [{
                    resType: TypeDefine.RES.Oil,
                    num: UserData.getInstance().getRes(TypeDefine.RES.Oil)
                },
                {
                    resType: TypeDefine.RES.Gold,
                    num: UserData.getInstance().getRes(TypeDefine.RES.Gold)
                },
                {
                    resType: TypeDefine.RES.Diamond,
                    num: UserData.getInstance().getRes(TypeDefine.RES.Diamond)
                }
            ])
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.btnSellClick = function() {
            this.pos = 0,
                this.showSellPage()
        },
        i.showSellPage = function() {
            this.curPage = "sell",
                this.btnReturn.visible = !0,
                this.btnChangeToSell.visible = !1;
            var t = this.getShipList(!0);
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = shipRecycleItem,
                this.moveScroller(this.pos)
        },
        i.btnReturnClick = function() {
            this.pos = 0,
                this.showShipPage()
        },
        i.showShipPage = function() {
            this.curPage = "normal",
                this.btnChangeToSell.visible = !0,
                this.btnReturn.visible = !1;
            var t = this.getShipList();
            this.list.dataProvider = new eui.ArrayCollection(t),
                this.list.itemRenderer = shipManagerItem,
                this.moveScroller(this.pos)
        },
        i.getShipList = function(t) {
            void 0 === t && (t = !1);
            for (var e = [], a = ShipManager.getInstance().shipList, i = !1, n = 0; n < a.length; n++) {
                var s = a[n];
                if (0 == t || t && 0 == s.islock && 0 == ShipManager.getInstance().isInArrange(s.id)) {
                    var r = ShipManager.getInstance().shipCfg[s.shipid],
                        o = {};
                    o.shipPropData = s,
                        o.id = s.id,
                        o.isLock = s.islock,
                        o.pic = ShipManager.getInstance().getShipPicByType(s.shipid),
                        o.typeIcon = ShipManager.getInstance().getShipTypeIcon(r.shipType),
                        o.quality = Locales.get("labelQuality", r.quality),
                        o.qualityNum = r.quality,
                        o.url = QualitySystem.getShipSmallBack(r.quality),
                        o.level = Locales.get("labelShipLevel", s.level.toString(), UserData.getInstance().getPlayerLevel().toString()),
                        o.lv = s.level,
                        o.shipName = ShipManager.getInstance().getShipNameByType(s.shipid),
                        o.inTeam = ShipManager.getInstance().isInArrange(s.id),
                        o.usepropcount = s.traindata.usepropcount,
                        o.skillusepropcnt = s.skilldata.skillusepropcnt,
                        o.activeskillusepropcnt = s.skilldata.activeskillusepropcnt,
                        o.circleskillusepropcnt = s.skilldata.circleskillusepropcnt,
                        o.skillid = s.skillid,
                        o.remouldLv = ShipdataParser.GetInstance().getItemById(s.shipid).remouldLv,
                        o.shipid = s.shipid,
                        o.drawingId = ShipdataParser.GetInstance().getItemById(s.shipid).drawingId,
                        o.remouldId = ShipdataParser.GetInstance().getItemById(s.shipid).remouldId,
                        o.isShowRedPoint = !1,
                        e.push(o)
                }
            }
            if (e.sort(function(t, e) {
                    return 1 == t.inTeam && 1 == e.inTeam ? e.qualityNum != t.qualityNum ? e.qualityNum - t.qualityNum : e.lv != t.lv ? e.lv - t.lv : Number(e.id) - Number(t.id) : 0 == t.inTeam && 0 == e.inTeam ? e.qualityNum != t.qualityNum ? e.qualityNum - t.qualityNum : e.lv != t.lv ? e.lv - t.lv : Number(e.id) - Number(t.id) : 1 == t.inTeam && 0 == e.inTeam ? -1 : 0 == t.inTeam && 1 == e.inTeam ? 1 : void 0
                }), !t) {
                var o = {};
                o.lastOne = !0,
                    e.push(o)
            }
            var l = this.tabContainer.getChildAt(0);
            return l.redPoint.visible = i,
                e
        },
        i.clear = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.ShipDataUpdate, this.update, this),
                UserData.getInstance().removeEventListener(GameEvent.UserData_Update, this.updateUserInfo, this)
        },
        i.setPos = function() {
            this.pos = this.scroller.viewport.scrollV
        },
        i.moveScroller = function(t) {
            this.scroller.viewport.validateNow(),
                this.scroller.viewport.scrollV = t
        },
        e
}(WindowBase);
