
var PartsManager = function() {
    function t() {
        this.quailtyArr = [],
            this.reductionPartsIds = [],
            this.huishouNum = 0
    }
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return void 0 == this._instance && (this._instance = new t),
                this._instance
        },
        a.setHuishouTxtNum = function(t) {
            this.huishouNum = t;
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian);
            e.setHuiShouNum(this.huishouNum)
        },
        a.setHuishouNum = function(t, e) {
            console.log("配件ID:" + t + " 是否选择回收:" + e),
                e ? this.huishouNum += 1 : this.huishouNum > 0 && (this.huishouNum -= 1);
            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian);
            a.setHuiShouNum(this.huishouNum)
        },
        a.resetHuishouNum = function() {
            this.huishouNum = 0;
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian);
            t.setHuiShouNum(this.huishouNum)
        },
        a.getPartsPicById = function(t) {
            if (null == t || "" == t) return "";
            var e = Path.partsIconURL + t;
            return e
        },
        a.getUpgradeValue = function(t, e) {
            var a = ConfigData.getDataByKey("parts", t);
            return Math.floor(Number(a.basicValue) + (e - 1) * Number(a.upgradeValue))
        },
        a.getRemouldValue = function(t, e, a) {
            void 0 === a && (a = "remouldValue");
            var i = ConfigData.getDataByKey("parts", t);
            if (0 == e) return 0;
            var n = i[a].split("|");
            return e >= n.length ? -1 : Number(n[e]) / ("remouldValue" == a ? 100 : 1)
        },
        a.getCostValue = function(t, e) {
            void 0 === e && (e = 1);
            var a = ConfigData.getDataByKey("parts", t),
                i = ConfigData.getDataByKey("partsUpgradeData", e),
                n = Number(i["upCost" + a.quality].split("|")[a.type]);
            return n
        },
        a.setListItemSelectedState = function(t, e) {
            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian);
            if (null != a.dsListParts)
                for (var i = 0; i < a.dsListParts.length; i++)
                    if (a.dsListParts[i].id == t) return void(a.dsListParts[i].isSelected = e)
        },
        a.sendRemouldParts = function(t, e) {},
        a.sendUpgradeParts = function(t, e) {},
        a.sendReductionParts = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceReductionParts);
            e.partid = t,
                Transport.instance.send(e)
        },
        a.sendReductionPartsInfo = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceReductionPartsInfo);
            e.partid = t,
                this.tmpPartId = t,
                Transport.instance.send(e)
        },
        a.sendDecomposeParts = function(t, e) {
            var a = Transport.getPkg(ProtocolMgr.ID_DceDecomposeParts);
            a.partsidlist = t,
                a.type = e,
                Transport.instance.send(a)
        },
        a.getEquipfor = function(t) {
            for (var e = "",
                    a = Utils.getGoodAtShip(t)[1], i = 0; i < a.length; i++) e += ShipManager.getInstance().getShipTypeStrByType(a[i]) + ",";
            return e = e.substr(0, e.length - 1)
        },
        a.handleLockPartMessage = function(t) {
            0 == t.sucess ? this.refreshPartsPage() : Toast.launch("配件锁定失败")
        },
        a.refreshPartsPage = function() {
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.PeiJian);
            t && (t.setPos(), t.setPeiJianPage())
        },
        t
}();
