
var WindowPVPExchange = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/ZB_JingJiChang_DuiHuanSkin.exml"
            /*tpa=resource/eui_skins/ZB_JingJiChang_DuiHuanSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {},
        i.init = function() {
            this.btnStore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnStore, this),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                EventManager.instance.addEventListener(EventTypes.ARENA_DATA, this.updatePanel, this),
                MainUI.instance.changeTopMode(topUIMode.simple),
                this.txtScoreDesc.text = Locales.get("panel_arena_txt_comment_2"),
                this.lstGoods.itemRenderer = PVPExchangeItemRenderer,
                this.scvGoods.viewport = this.lstGoods,
                ArenaManager.instance.rankData ? this.updatePanel() : RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceEnterArena, null, !0)
        },
        i.updatePanel = function() {
            this.txtScore.text = ArenaManager.instance.rankData.score;
            for (var t = [], e = 0, a = ArenaexchangedataParser.GetInstance().getDataArr(); e < a.length; e++) {
                var i = a[e],
                    n = ArenaManager.instance.rankData,
                    s = n && n.exchangelist && n.exchangelist.indexOf(i.id) >= 0;
                s || t.push(i)
            }
            t.sort(function(t, e) {
                return t.rank - e.rank
            });
            var r = !1;
            if (this.lstGoods.dataProvider)
                for (var o = 0; o < this.lstGoods.dataProvider.length; ++o) this.lstGoods.dataProvider.getItemAt(o) && t[o] && this.lstGoods.dataProvider.getItemAt(o).id != t[o].id && (r = !0);
            else r = !0;
            if (r) {
                var l = this.lstGoods.scrollV,
                    h = new eui.ArrayCollection(t);
                this.lstGoods.dataProvider = h,
                    this.lstGoods.validateNow(),
                    this.lstGoods.scrollV = l
            }
        },
        i.OnClickBtnStore = function(t) {},
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.clear = function() {
            EventManager.instance.removeEventListener(EventTypes.ARENA_DATA, this.updatePanel, this)
        },
        e.willOpen = !1,
        e
}(WindowBase);
