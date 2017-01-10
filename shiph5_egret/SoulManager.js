
var ShopManager = function(t) {
    function e() {
        t.call(this),
            this.versionSwitch = !1,
            this.currPage = 0,
            this.buySpyType = 0,
            this.bytSpyId = 0,
            this.shopName = "",
            this.buyCaptainType = 0
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getInstance = function() {
            return void 0 == this._instance && (this._instance = new e),
                this._instance
        },
        i.sendSpy = function(t, e, a, i) {
            var n = Transport.getPkg(ProtocolMgr.ID_DceSpy);
            n.id = t,
                n.mode = e,
                n.tencount = a,
                this.data = i,
                Transport.instance.send(n)
        },
        i.sendSpyData = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceSpyData);
            Transport.instance.send(t)
        },
        i.sendBuySpyItem = function(t, e, a) {
            this.buySpyType = a;
            var i = Transport.getPkg(ProtocolMgr.ID_DceBuySpyItem);
            i.id = t,
                i.mode = e,
                this.bytSpyId = t,
                Transport.instance.send(i)
        },
        i.sendBuy = function(t, e, a, i) {
            void 0 === a && (a = "");
            var n = Transport.getPkg(ProtocolMgr.ID_DceBuy);
            n.id = t,
                n.count = e,
                this.shopName = a,
                this.data = i,
                Transport.instance.send(n)
        },
        i.sendShopData = function(t) {
            this.currPage = t;
            var e = Transport.getPkg(ProtocolMgr.ID_DceShopData);
            Transport.instance.send(e)
        },
        i.handleSpyData = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Shop);
            e && (e.setPos(), e.setPaperPage(t))
        },
        i.handleSpy = function(t) {
            if (t.id, 0 == t.res) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Shop);
                e && e.showPage(),
                    t.tencount ? MakeShipAlert.getInstance().showGetTenPapers(t, this.data) : MakeShipAlert.getInstance().showGetOnePaper(t, this.data)
            } else 1 == t.res ? Toast.launch("非法id") : 2 == t.res ? Toast.launch("钻石不足") : 3 == t.res ? ShopSpyAlert.getInstance().showBuySpyPage(this.data) : 4 == t.res ? Toast.launch("没有免费次数") : 5 == t.res ? Toast.launch("cd中") : 6 == t.res && Toast.launch("十连id错误")
        },
        i.handleBuySpyItem = function(t) {
            if (0 == t.res) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Shop);
                e && e.showPage();
                var a = 0,
                    i = "",
                    n = 0;
                2 == t.id ? (a = 1, i = Locales.get("panel_shop_txt_spy_comment_3_008"), n = QualitySystem.getColorByQuality(3)) : 3 == t.id ? (a = 1, i = Locales.get("panel_shop_txt_spy_comment_3_009"), n = QualitySystem.getColorByQuality(4)) : 5 == t.id && (a = 10, i = Locales.get("panel_shop_txt_spy_comment_3_009"), n = QualitySystem.getColorByQuality(4)),
                    0 == this.buySpyType ? Toast.launch("领取成功，获得#" + n.toString(16) + i + "x" + a + "#", 16777215, !0) : 1 == this.buySpyType && Toast.launch("购买成功，获得#" + n.toString(16) + i + "x" + a + "#", 16777215, !0),
                    GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.REFRESH_SPY_ALERT_COUNT, this.bytSpyId))
            } else 1 == t.res ? Toast.launch("非法id") : 2 == t.res ? Toast.launch("钻石不足") : 3 == t.res ? Toast.launch("道具不足") : 4 == t.res ? Toast.launch("没有免费次数") : 5 == t.res ? Toast.launch("cd中") : 6 == t.res && Toast.launch("十连id错误")
        },
        i.handleShopData = function(t) {
            if (this.currPage == WindowShop.STORE_INDEX) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Shop);
                e && (e.setPos(), e.setStorePage(t))
            } else if (this.currPage == WindowShop.VIP_INDEX) {
                var a = WindowManager.getInstance().getWindow(WindowManager.windowType.Shop);
                a && (a.setPos(), a.setVipPage(t))
            } else if (this.currPage == WindowGuild.GUILD_INDEX) {
                var i = WindowManager.getInstance().getWindow(WindowManager.windowType.Guild);
                i && i.setStoreData(t)
            }
        },
        i.handleBuy = function(t) {
            0 == t.res ? (this.currPage == WindowGuild.GUILD_INDEX && GuildManager.getInstance().sendGuildData(), this.data && Toast.launch("购买成功，获得#" + QualitySystem.getColorByQuality(this.data.quality).toString(16) + this.data.name + "x" + t.count + "#", 16777215, !0)) : 1 == t.res ? Toast.launch("不存在的id") : 2 == t.res ? Toast.launch("等级不足") : 3 == t.res ? Toast.launch("vip等级不足") : 4 == t.res ? Toast.launch("当日可购买数量不足") : 5 == t.res ? Toast.launch("限购") : 6 == t.res && Toast.launch("钻石不足")
        },
        i.sendDseCaptainData = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceCaptainData);
            Transport.instance.send(t)
        },
        i.handleCaptainData = function(t) {
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.ZhaoMuCaptain);
            e && e.setPageData(t)
        },
        i.sendBuyRecruitItem = function(t, e, a) {
            this.buyCaptainType = a;
            var i = Transport.getPkg(ProtocolMgr.ID_DceBuyRecruitItem);
            i.id = t,
                i.mode = e,
                this.buyCaptainId = t,
                this.buyCaptainMode = e,
                Transport.instance.send(i)
        },
        i.handleBuyRecruitItem = function(t) {
            if (0 == t.res) {
                var a = WindowManager.getInstance().getWindow(WindowManager.windowType.ZhaoMuCaptain);
                a && e.getInstance().sendDseCaptainData();
                var i = 0,
                    n = "",
                    s = 0;
                1 == this.buyCaptainId ? (i = 1, n = Locales.get("panel_jianzhang_open_one_comment_6"), s = QualitySystem.getColorByQuality(3)) : 2 == this.buyCaptainId ? (i = 1, n = Locales.get("panel_jianzhang_open_one_comment_7"), s = QualitySystem.getColorByQuality(4)) : 3 == this.buyCaptainId && (i = 10, n = Locales.get("panel_jianzhang_open_one_comment_7"), s = QualitySystem.getColorByQuality(4)),
                    0 == this.buyCaptainType ? Toast.launch("领取成功，获得#" + s.toString(16) + n + "x" + i + "#", 16777215, !0) : 1 == this.buyCaptainType && Toast.launch("购买成功，获得#" + s.toString(16) + n + "x" + i + "#", 16777215, !0),
                    GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.REFRESH_MAKE_SHIP_ALERT_COUNT, this.buyCaptainId))
            } else 1 == t.res ? Toast.launch("钻石不足") : 2 == t.res ? Toast.launch("免费cd时间没到") : 3 == t.res ? Toast.launch("没有免费次数") : 4 == t.res && Toast.launch("参数错误")
        },
        i.sendRecruitCaptain = function(t, e, a) {
            var i = Transport.getPkg(ProtocolMgr.ID_DceRecruitCaptain);
            i.id = t,
                i.mode = e,
                this.data = a,
                Transport.instance.send(i)
        },
        i.handleRecruitCaptain = function(t) {
            if (t.captainid, t.ishave, t.score, 0 == t.res) {
                var a = WindowManager.getInstance().getWindow(WindowManager.windowType.ZhaoMuCaptain);
                a && e.getInstance().sendDseCaptainData(),
                    10 == t.captainid.length ? MakeShipAlert.getInstance().showGetTenCaptainPaper(t, this.data) : MakeShipAlert.getInstance().showGetOneCaptainPaper(t, this.data)
            } else 1 == t.res ? Toast.launch("不能十次") : 2 == t.res ? ShopSpyAlert.getInstance().showBuyCaptainPage(this.data) : 3 == t.res && Toast.launch("id错误")
        },
        e
}(egret.EventDispatcher);
