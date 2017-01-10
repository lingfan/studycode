
var WindowExchangeCaptain = function(t) {
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
                this.sendCaptainChargeCountMsg();
            for (var t = ["高级舰长", "普通舰长"], e = 0; e < t.length; e++) {
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
            WindowManager.getInstance().hide(WindowManager.windowType.ExchangeCaptain)
        },
        i.setPage = function(t, e) {
            var a = this;
            void 0 === t && (t = 0),
                void 0 === e && (e = !1),
                0 == t ? (this.resIcon.source = "gaojijianghun_png", this.resNum.text = CaptainManager.getInstance().seniorcaptain.toString()) : (this.resIcon.source = "putongjianghun_png", this.resNum.text = CaptainManager.getInstance().juniorcaptain.toString());
            var i = CaptainchargedataParser.GetInstance().getDatas(),
                n = CaptaindataParser.GetInstance().getDatas(),
                s = CaptainchargecountParser.GetInstance().getDatas();
            if (!i || !n || !s) return void ConfigData.preLoadDats(["captainChargeData", "captainData", "captainChargeCount"], [CaptainchargedataParser, CaptaindataParser, CaptainchargecountParser],
                function() {
                    a.setPage(t)
                });
            if (this.isTableOk = !0, this.isMsgOk && (this.curPage != t || e)) {
                this.curPage = t;
                var r = [],
                    o = [],
                    l = 0 == this.curPage ? 2 : 1,
                    h = void 0;
                h = 2 == l ? CaptainManager.getInstance().seniorcaptain : CaptainManager.getInstance().juniorcaptain;
                for (var c in i)
                    if (i[c].type == l) {
                        var d = {};
                        d.id = i[c].id,
                            d.name = n[i[c].id].name_l;
                        var g = this.exchangeCountList[i[c].id] ? this.exchangeCountList[i[c].id] + 1 : 1,
                            u = CaptainchargecountParser.GetInstance().getItemByField("count", g).per / 100;
                        d.costNum = Math.ceil(i[c].count * u),
                            d.enough = h >= d.costNum,
                            d.head = Path.captainIconURL + n[i[c].id].pictureSmall,
                            d.quality = n[i[c].id].quality,
                            d.ExchangeType = l,
                            d.country = n[i[c].id].country,
                            d.goodAt = this.getGoodAt(n[i[c].id].goodat),
                            1 == d.enough ? r.push(d) : o.push(d)
                    }
                Array.prototype.push.apply(r, o),
                    this.list.dataProvider = new eui.ArrayCollection(r),
                    this.list.itemRenderer = ExchangeCaptainRenderer
            }
        },
        i.sendCaptainChargeCountMsg = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceExchangeCaptainCount);
            Transport.instance.send(t)
        },
        i.setCaptainChargeCountData = function(t) {
            this.exchangeCountList = [];
            for (var e = 0; e < t.exchangecaptaincountdata.length; e++) this.exchangeCountList[t.exchangecaptaincountdata[e].id] = t.exchangecaptaincountdata[e].count;
            this.isMsgOk = !0,
                this.isTableOk && this.setPage(this.curPage, !0)
        },
        i.getGoodAt = function(t) {
            var e = 1,
                a = 2,
                i = 4,
                n = 8,
                s = 16,
                r = 32,
                o = 64,
                l = 128,
                h = "",
                c = [];
            if (t - l >= 0 && (c.push(Locales.get("PartsSystem_ShipType_8")), t -= l), t - o >= 0 && (c.push(Locales.get("PartsSystem_ShipType_7")), t -= o), t - r >= 0 && (c.push(Locales.get("PartsSystem_ShipType_6")), t -= r), t - s >= 0 && (c.push(Locales.get("PartsSystem_ShipType_5")), t -= s), t - n >= 0 && (c.push(Locales.get("PartsSystem_ShipType_4")), t -= n), t - i >= 0 && (c.push(Locales.get("PartsSystem_ShipType_3")), t -= i), t - a >= 0 && (c.push(Locales.get("PartsSystem_ShipType_2")), t -= a), t - e >= 0 && c.push(Locales.get("PartsSystem_ShipType_1")), 1 == c.length) h = c[0];
            else if (c.length > 1)
                for (var d in c) h = 0 == parseInt(d) ? c[d] : h + "、" + c[d];
            return h
        },
        i.updataJiangHun = function() {
            var t = 0 == this.curPage ? 2 : 1;
            2 == t ? this.resNum.text = CaptainManager.getInstance().seniorcaptain.toString() : this.resNum.text = CaptainManager.getInstance().juniorcaptain.toString()
        },
        i.clear = function() {},
        e
}(WindowBase);
