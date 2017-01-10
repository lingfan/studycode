
var NameRandomTool = function() {
    function t(t, e, a, i, n) {
        var s = this;
        void 0 === t && (t = 0),
            void 0 === e && (e = ""),
            void 0 === i && (i = -1),
            void 0 === n && (n = null),
            this.isLoad = !1,
            this.FamilyNameList_M = [],
            this.FamilyNameList_W = [],
            this.FamilyNameList_All = [],
            this.GivenNameList_M = [],
            this.GivenNameList_W = [],
            this.GivenNameList_All = [],
            this.curName = "22",
            this.opType = 0,
            this._sex = -1,
            this.opType = t,
            this._sex = i,
            this.curName = e,
            this._myLable = a,
            this._shipData = n,
            0 == t ? this.preloadConfigs(function(t) {
                s.analyzePlayerNameData(t)
            }) : (this.shipNameData = ShipnameParser.GetInstance().getDatas(), this.shipNameData ? this.analyzeShipNameData() : ConfigData.preLoadDats(["shipName"], [ShipnameParser],
                function() {
                    s.shipNameData = ShipnameParser.GetInstance().getDatas(),
                        s.analyzeShipNameData()
                }))
    }
    var e = (__define, t),
        a = e.prototype;
    return a.preloadConfigs = function(t) {
            var e = [];
            e.push("namePlayerData"),
                ConfigData.preLoadDats(e, [NameplayerdataParser],
                    function() {
                        t(NameplayerdataParser.GetInstance().getDataArr())
                    })
        },
        a.analyzeShipNameData = function() {
            var t = "";
            do t = this.getShipRandomName();
            while (t == this._shipData.shipName || "" == t || t.indexOf("undefined") >= 0);
            this._myLable.text = t
        },
        a.getShipRandomName = function() {
            var t = [],
                e = "";
            for (var a in this.shipNameData) e = this.shipNameData[a].id.toString(),
                e.substr(0, 2) == (10 * this._shipData.country).toString() && t.push(this.shipNameData[a]);
            e = "";
            var i = [];
            for (var n in t) e = t[n].id.toString(),
                e.substr(2, 2) == this._shipData.shipType && i.push(t[n]);
            var s = Math.floor(Math.random() * i.length) - 1;
            return e = i[s] ? i[s].chName_l : ""
        },
        a.analyzePlayerNameData = function(t) {
            this.FamilyNameList_M = [],
                this.FamilyNameList_W = [],
                this.FamilyNameList_All = [],
                this.GivenNameList_M = [],
                this.GivenNameList_W = [],
                this.GivenNameList_All = [];
            for (var e in t) 1 == t[e].sex ? 1 == t[e].nametype ? (this.FamilyNameList_M.push(t[e].name_l), this.FamilyNameList_W.push(t[e].name_l), this.FamilyNameList_All.push(t[e].name_l)) : (this.GivenNameList_M.push(t[e].name_l), this.GivenNameList_W.push(t[e].name_l), this.GivenNameList_All.push(t[e].name_l)) : 2 == t[e].sex ? 1 == t[e].nametype ? (this.FamilyNameList_M.push(t[e].name_l), this.FamilyNameList_All.push(t[e].name_l)) : (this.GivenNameList_M.push(t[e].name_l), this.GivenNameList_All.push(t[e].name_l)) : 1 == t[e].nametype ? (this.FamilyNameList_W.push(t[e].name_l), this.FamilyNameList_All.push(t[e].name_l)) : (this.GivenNameList_W.push(t[e].name_l), this.GivenNameList_All.push(t[e].name_l));
            this._myLable && void 0 != this._myLable.text && (this._myLable.text = this.getRandomName())
        },
        a.getFamilyName = function() {
            var t = [];
            t = 2 == this._sex ? this.FamilyNameList_M : 3 == this._sex ? this.FamilyNameList_W : this.FamilyNameList_All;
            var e = Math.floor(Math.random() * t.length) - 1;
            return t[e]
        },
        a.getGivenName = function() {
            var t = [];
            t = 2 == this._sex ? this.GivenNameList_M : 3 == this._sex ? this.GivenNameList_W : this.GivenNameList_All;
            var e = Math.floor(Math.random() * t.length) - 1;
            return t[e]
        },
        a.getRandomName = function() {
            var t = "";
            do t = this.getFamilyName() + "·" + this.getGivenName();
            while (t == this.curName || "" == t || t.indexOf("undefined") >= 0);
            return t
        },
        t
}();
