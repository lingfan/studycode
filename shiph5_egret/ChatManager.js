
var CaptainManager = function() {
    function t() {
        this.quailtyArr = [],
            this.reductionCaptainsIds = [],
            this.huishouNum = 0
    }
    var e = (__define, t),
        a = e.prototype;
    return t.getInstance = function() {
            return void 0 == this._instance && (this._instance = new t),
                this._instance
        },
        a.getCaptainPicById = function(t, e) {
            if (void 0 === e && (e = !1), null == t || "" == t) return "";
            var a = Path.captainIconURL + t;
            return e && (a = a.substr(0, a.length - 4) + "_s.png"),
                a
        },
        a.getPropoDataById = function(t) {
            for (var e = 0; e < CaptainData.captainlist.length; e++)
                if (t == CaptainData.captainlist[e].id) return CaptainData.captainlist[e];
            return null
        },
        a.getCountryIconById = function(t) {
            if (null == t || "" == t) return "";
            var e = Path.countryURL + "country_" + t + ".jpg";
            return e
        },
        a.setColor = function(t) {
            return "1" == t ? "0xF6F8E6" : "2" == t ? "0x5CED2F" : "3" == t ? "0x35B0FE" : "4" == t ? "0x8E55FF" : "5" == t ? "0xFF8033" : "6" == t ? "0XF42B0B" : void 0
        },
        a.getPromoteNumByPromoteLv = function(t, e) {
            return Number(e[t])
        },
        a.sendFireCaptainMessage = function(t, e) {
            void 0 === e && (e = 1);
            var a = Transport.getPkg(ProtocolMgr.ID_DceFireCaptain);
            a.id = t,
                a.type = e,
                Transport.instance.send(a)
        },
        a.handleFireCaptainMessage = function(e) {
            if (console.log("返回舰长id:" + e.id), console.log("返回解雇类型:" + e.type), console.log("返回解雇结果(0成功 1配表错误 2没有该舰长 3已配备舰长 4 钻石不足 5不能高级批量解雇 6没有要解雇的):" + e.res), 0 == e.res) {
                var a = WindowManager.getInstance().getWindow(WindowManager.windowType.Captain);
                a.setHuiShouPage(),
                    t.getInstance().reductionCaptainsIds = []
            } else 1 == e.res ? Toast.launch("配表错误") : 2 == e.res ? Toast.launch("没有该舰长") : 3 == e.res ? Toast.launch("已配备舰长") : 4 == e.res ? Toast.launch("钻石不足") : 5 == e.res ? Toast.launch("不能高级批量解雇") : 6 == e.res && Toast.launch("没有要解雇的")
        },
        a.sendComposeCaptainMessage = function(t, e) {
            var a = Transport.getPkg(ProtocolMgr.ID_DceComposeCaptain);
            a.id = t,
                a.all = e,
                Transport.instance.send(a)
        },
        a.handleComposeCaptainMessage = function(t) {
            if (console.log("返回舰长id:" + t.id), console.log("舰长合成结果(0成功，1没有碎片，2配表错误,3已有该舰长,4碎片不足,5没有可合成碎片):" + t.res), 0 == t.res) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Captain);
                e.setPos(),
                    e.setHeChengPage(),
                    Toast.launch("合成成功")
            } else 1 == t.res ? Toast.launch("没有碎片") : 2 == t.res ? Toast.launch("配表错误") : 3 == t.res ? Toast.launch("已有该舰长") : 4 == t.res ? Toast.launch("碎片不足") : 5 == t.res && Toast.launch("没有可合成碎片")
        },
        a.refreshCaptainListPage = function() {
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.Captain);
            t && (t.setPos(), t.setCaptainPage())
        },
        a.handleLockCaptainMessage = function(t) {
            0 == t.sucess ? this.refreshCaptainListPage() : Toast.launch("舰长锁定失败")
        },
        a.setHuishouTxtNum = function(t) {
            this.huishouNum = t;
            var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Captain);
            e.setHuiShouNum(this.huishouNum)
        },
        a.setHuishouNum = function(t, e) {
            console.log("舰长ID:" + t + " 是否选择回收:" + e),
                e ? this.huishouNum += 1 : this.huishouNum > 0 && (this.huishouNum -= 1);
            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.Captain);
            a.setHuiShouNum(this.huishouNum)
        },
        a.resetHuishouNum = function() {
            this.huishouNum = 0;
            var t = WindowManager.getInstance().getWindow(WindowManager.windowType.Captain);
            t.setHuiShouNum(this.huishouNum)
        },
        a.setListItemSelectedState = function(t, e) {
            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.Captain);
            if (null != a.dsListParts)
                for (var i = 0; i < a.dsListParts.length; i++)
                    if (a.dsListParts[i].id == t) return void(a.dsListParts[i].isSelected = e)
        },
        a.sendCaptainDataMsg = function() {
            var t = Transport.getPkg(ProtocolMgr.ID_DceCaptainData);
            Transport.instance.send(t)
        },
        a.prosseCaptainData = function(t) {
            if (this.juniorcaptain = t.juniorcaptain, this.seniorcaptain = t.seniorcaptain, WindowManager.getInstance().isWindowVisible(WindowManager.windowType.ExchangeCaptain)) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.ExchangeCaptain);
                e.updataJiangHun()
            }
        },
        t
}();
