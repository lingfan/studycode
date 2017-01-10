
var WindowExchangeBlueprint = function(t) {
    function e() {
        t.call(this, !1),
            this.exchangeCountList = [],
            this.skinName = "resource/eui_skins/commonListPageSkin.exml"
            /*tpa=resource/eui_skins/commonListPageSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            MainUI.instance.changeTopMode(topUIMode.simple),
                this.scroller.viewport = this.list,
                this.btnClose.visible = !0,
                this.resNumPanel.visible = !0,
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.renturnBtnClickHandler, this),
                this.isMsgOk = !1,
                this.isTableOk = !1,
                this.sendPaperChargeCountMsg();
            for (var t = ["高级图纸", "普通图纸"], e = 0; e < t.length; e++) {
                var a = new eui.Button;
                a.skinName = "resource/eui_skins/components/tabSkin.exml"
                    /*tpa=resource/eui_skins/components/tabSkin.exml*/
                    ,
                    a.x = 118 * e,
                    a.index = e,
                    a.label = t[e],
                    this.tabContainer.addChildAt(a, 0),
                    a.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                    a.currentState = "up",
                    0 == e && a.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
            }
        },
        i.onTabBarItemTap = function(t) {
            var e = t.currentTarget;
            e != this.lastTab && (e.currentState = "down", this.lastTab && this.lastTab != e && (this.lastTab.currentState = "up"), this.lastTab = e, this.setPage(e.index))
        },
        i.renturnBtnClickHandler = function(t) {
            WindowManager.getInstance().hide(WindowManager.windowType.ExchangeBlueprint)
        },
        i.setPage = function(t, e) {
            var a = this;
            void 0 === t && (t = 0),
                void 0 === e && (e = !1),
                0 == t ? (this.resIcon.source = "GUI_Shipbuilding_gaojiwannengtuzhi_png", this.resNum.text = UserData.getInstance().getSeniorpaper().toString()) : (this.resIcon.source = "GUI_Shipbuilding_dijiwannengtuzhi_png", this.resNum.text = UserData.getInstance().getJuniorpaper().toString());
            var i = PaperchargedataParser.GetInstance().getDatas(),
                n = PaperdataParser.GetInstance().getDatas(),
                s = PaperchargecountParser.GetInstance().getDatas();
            if (!i || !n || !s) return void ConfigData.preLoadDats(["paperChargeData", "paperData", "paperChargeCount"], [PaperchargedataParser, PaperdataParser, PaperchargecountParser],
                function() {
                    a.setPage(t)
                });
            if (this.isTableOk = !0, this.isMsgOk && (this.curPage != t || e)) {
                this.curPage = t;
                var r = [],
                    o = [],
                    l = 0 == this.curPage ? 2 : 1,
                    h = void 0;
                h = 2 == l ? UserData.getInstance().getSeniorpaper() : UserData.getInstance().getJuniorpaper();
                for (var c in i)
                    if (i[c].type == l) {
                        var d = {};
                        d.id = i[c].id,
                            d.vip = i[c].vipLevel,
                            d.name = n[i[c].id].name_l;
                        var g = this.exchangeCountList[i[c].id] ? this.exchangeCountList[i[c].id] + 1 : 1,
                            u = PaperchargecountParser.GetInstance().getItemByField("count", g).per / 100;
                        d.costNum = Math.ceil(i[c].count * u),
                            d.enough = h >= d.costNum;
                        var p = n[i[c].id].shipId;
                        d.ship = ShipManager.getInstance().getShipPicByType(p),
                            d.shipData = {
                                shipid: p
                            },
                            d.quality = n[i[c].id].quality,
                            d.ExchangeType = l,
                            d.shipType = ShipManager.getInstance().getShipTypeIcon(n[i[c].id].shipType),
                            1 == d.enough && UserData.getInstance()._vip >= d.vip ? r.push(d) : o.push(d)
                    }
                o.sort(function(t, e) {
                        return t.vip - e.vip
                    }),
                    Array.prototype.push.apply(r, o),
                    this.list.dataProvider = new eui.ArrayCollection(r),
                    this.list.itemRenderer = ExchangeItemRenderer
            }
        },
        i.sendPaperChargeCountMsg = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DcePaperChargeCount);
            Transport.instance.send(t)
        },
        i.setPaperChargeCountData = function(t) {
            this.exchangeCountList = [];
            for (var e = 0; e < t.paperchargecountdata.length; e++) this.exchangeCountList[t.paperchargecountdata[e].id] = t.paperchargecountdata[e].count;
            this.isMsgOk = !0,
                this.isTableOk && this.setPage(this.curPage, !0)
        },
        i.clear = function() {},
        e
}(WindowBase);
