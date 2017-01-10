
var SoulManager = function(t) {
    function e() {
        t.call(this),
            this.quailtyArr = [],
            this.reductionSoulsIds = [],
            this.huishouNum = 0
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getInstance = function() {
            return void 0 == this._instance && (this._instance = new e),
                this._instance
        },
        i.soulPanel = function(t) {
            Main.trace(Log.objectToString(t)),
                1 != t.type && 3 != t.type || !t.soullist[0] ? 2 == t.type ? WindowManager.getInstance().show(WindowManager.windowType.tansuoGaoJiReward, {
                    type: 2,
                    pkg: t
                }) : 4 == t.type ? WindowManager.getInstance().show(WindowManager.windowType.tansuoGaoJiReward, {
                    type: 4,
                    pkg: t
                }) : 5 == t.type ? WindowManager.getInstance().show(WindowManager.windowType.tansuoGaoJiReward, {
                    type: 5,
                    pkg: t
                }) : 6 == t.type && WindowManager.getInstance().show(WindowManager.windowType.tansuoGaoJiReward, {
                    type: 6,
                    pkg: t
                }) : Toast.launch(Locales.get("panel_zhuanpan_txt_wind_5") + MedaldataParser.GetInstance().getItemById(t.soullist[0]).name_l)
        },
        i.getSoulsPicById = function(t) {
            if (null == t || "" == t) return "";
            var e = Path.soulIconURL + t;
            return e
        },
        i.setColor = function(t) {
            return "1" == t ? "0xF6F8E6" : "2" == t ? "0x5CED2F" : "3" == t ? "0x35B0FE" : "4" == t ? "0x8E55FF" : "5" == t ? "0xFF8033" : "6" == t ? "0XF42B0B" : void 0
        },
        i.getPercentage = function(t, e) {
            if (0 == t) return "0%";
            var a;
            return a = "Array" == egret.getQualifiedClassName(e) ? e : e.split("|"),
                Number(a[t]) / 100 + "%"
        },
        i.setHuishouTxtNum = function(t) {
            this.huishouNum = t;
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Soul);
            e && e.setHuiShouNum(this.huishouNum)
        },
        i.setHuishouNum = function(t, e) {
            console.log("勋章ID:" + t + " 是否选择回收:" + e),
                e ? this.huishouNum += 1 : this.huishouNum > 0 && (this.huishouNum -= 1);
            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.Soul);
            a && a.setHuiShouNum(this.huishouNum)
        },
        i.resetHuishouNum = function() {
            this.huishouNum = 0;
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.Soul);
            t && t.setHuiShouNum(this.huishouNum)
        },
        i.setListItemSelectedState = function(t, e) {
            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.Soul);
            if (a && null != a.dsListParts)
                for (var i = 0; i < a.dsListParts.length; i++)
                    if (a.dsListParts[i].id == t) return void(a.dsListParts[i].isSelected = e)
        },
        i.sendUpgradeSoulMessage = function(t, e) {
            var a = Transport.getPkg(ProtocolMgr.ID_DceSoulEat);
            a.id = t,
                a.soullist = e,
                Transport.instance.send(a)
        },
        i.refreshSoulsByUpgrade = function(t) {
            GameEventDispatcher.getInstance().hasEventListener(GameEvent.Souls_List_Refresh) || GameEventDispatcher.getInstance().addEventListener(GameEvent.Souls_List_Refresh, this.refreshSolusPage, this)
        },
        i.refreshSolusPage = function() {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.Souls_List_Refresh, this.refreshSolusPage, this);
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.Soul);
            t && t.onRefreshSoulsData()
        },
        i.sendDecomposeSoulMessage = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceSoulDecompose);
            e.id = t,
                Transport.instance.send(e)
        },
        i.refreshSoulsByDecompose = function(t) {
            e.getInstance().reductionSoulsIds = [],
                this.refreshHuishouPage()
        },
        i.refreshHuishouPage = function() {
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.Soul);
            t && t.setHuiShouPage()
        },
        i.sendRestoreSoulMessage = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceSoulRestore);
            e.id = t,
                Transport.instance.send(e)
        },
        i.refreshSoulsByRestore = function(t) {
            this.refreshHuanYuanPage()
        },
        i.refreshHuanYuanPage = function() {
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.Soul);
            t && t.setHuanYuanPage()
        },
        i.handleLockSoulMessage = function(t) {
            0 == t.sucess ? this.refreshSolusPage() : Toast.launch("勋章锁定失败")
        },
        e.soulScene = 1,
        e
}(egret.EventDispatcher);
