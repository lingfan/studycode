
var WindowStore = function(t) {
    function e() {
        t.call(this, !1),
            this.pos = 0,
            this.skinName = "resource/eui_skins/commonListPageSkin.exml"
            /*tpa=resource/eui_skins/commonListPageSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.initUI()
        },
        i.initUI = function() {
            MainUI.instance.changeTopMode(topUIMode.simple, [TypeDefine.RES.Oil, TypeDefine.RES.Gold, TypeDefine.RES.Diamond, TypeDefine.RES.XunBaoLing]),
                this.scroller.viewport = this.list;
            var t = [];
            t = GameData.skipShipGuide ? [Locales.get("panel_bag_btn_allitem"), Locales.get("panel_bag_btn_material")] : [Locales.get("panel_bag_btn_allitem"), Locales.get("panel_bag_btn_material"), Locales.get("panel_bag_btn_chests")];
            for (var e = 0; e < t.length; e++) {
                var a = new eui.Button;
                a.skinName = "resource/eui_skins/components/tabSkin.exml"
                    /*tpa=resource/eui_skins/components/tabSkin.exml*/
                    ,
                    a.x = 118 * e,
                    a.index = e,
                    a.depth = t.length - e - 1,
                    a.label = t[e],
                    this.tabContainer.addChildAt(a, 0),
                    a.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabBarItemTap, this),
                    a.currentState = "up",
                    0 == e && a.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
            }
        },
        i.onTabBarItemTap = function(t) {
            this.pos = 0;
            var e = t.currentTarget;
            e.currentState = "down",
                this.lastTab && this.lastTab != e && (this.lastTab.currentState = "up"),
                this.lastTab = e,
                this.setPage(e.index),
                this.moveScroller(this.pos)
        },
        i.setPage = function(t, e) {
            if (void 0 === e && (e = !1), this.curPage != t || e) {
                this.curPage = t;
                for (var a = ItemsManager.getInstance().getListByType(t), i = [], n = 0; n < a.length; n++) {
                    var s = a[n];
                    if (s.count > 0) {
                        var r = ItemParser.GetInstance().getItemById(s.id);
                        if (1 == r.luckyBoxType) continue;
                        var o = {};
                        o.id = s.id,
                            o.icon = Path.itemIconURL + r.icon,
                            o.desc = r.desc_l,
                            o.quality = r.quality,
                            o.num = s.count,
                            o.name = r.name_l,
                            o.canUse = 3 != r.type,
                            o.useTen = 1 == r.useten,
                            i.push(o)
                    }
                }
                for (var l = 0,
                        h = a; l < h.length; l++) {
                    var s = h[l],
                        r = ItemParser.GetInstance().getItemById(s.id);
                    if (1 == r.luckyBoxType) {
                        for (var c = !1,
                                d = 0,
                                g = i; d < g.length; d++) {
                            var u = g[d];
                            if (u.id == r.twinLukcyBoxId) {
                                u.num += s.count,
                                    c = !0;
                                break
                            }
                        }
                        if (!c) {
                            var o = {};
                            o.id = s.id,
                                o.icon = Path.itemIconURL + r.icon,
                                o.desc = r.desc_l,
                                o.quality = r.quality,
                                o.num = s.count,
                                o.name = r.name_l,
                                o.canUse = 3 != r.type,
                                o.useTen = 1 == r.useten,
                                i.push(o)
                        }
                    }
                }
                this.list.dataProvider = new eui.ArrayCollection(i),
                    this.list.itemRenderer = storeItem
            }
        },
        i.updatePage = function() {
            this.setPos(),
                this.setPage(this.curPage, !0),
                this.moveScroller(this.pos)
        },
        i.clear = function() {},
        i.setPos = function() {
            this.pos = this.scroller.viewport.scrollV
        },
        i.moveScroller = function(t) {
            this.scroller.viewport.validateNow(),
                this.scroller.viewport.scrollV = t
        },
        e
}(WindowBase);
