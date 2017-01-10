
var PiecesManager = function() {
    function t() {
        this._partsPieces = [],
            this._medalPieces = [],
            t._instance = this
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return t.getInstance = function() {
            return t._instance || (t._instance = new t),
                t._instance
        },
        e(i, "partsPieces",
            function() {
                return this._partsPieces
            },
            function(t) {
                this._partsPieces = t,
                    GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.PART_PIECES))
            }),
        e(i, "medalPieces",
            function() {
                return this._medalPieces
            },
            function(t) {
                this._medalPieces = t,
                    GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.MEDAL_PIECES)),
                    ShipManager.getInstance().updateShipArrangeSpot()
            }),
        i.getPartPiecesByTab = function(t) {
            var e = [];
            1 == t && e.push({
                id: 100601,
                count: 1
            });
            for (var a = {},
                    i = 0; i < this._partsPieces.length; i++) {
                var n = String(this._partsPieces[i].id).substr(2, 2),
                    s = ConfigData.getDataByKey("parts", Number(n));
                Number(s.type) != t || a[s.id] || (a[s.id] = !0, 1 == t && 100601 == this._partsPieces[i].id && e.shift(), e.push(this._partsPieces[i]))
            }
            return e
        },
        i.getMedalPieces = function() {
            for (var t = [], e = {},
                    a = 0; a < this._medalPieces.length; a++) {
                var i = String(Math.floor(this._medalPieces[a].id / 100));
                e[i] || (e[i] = !0, t.push(this._medalPieces[a]))
            }
            return t
        },
        i.getPartPiecesById = function(t) {
            for (var e = [], a = 0; a < this._partsPieces.length; a++) {
                var i = ConfigData.getDataByKey("partspieces", this._partsPieces[a].id);
                if (Number(i.part_id) == t) {
                    var n = this._partsPieces[a].id.toString(),
                        s = Number(n.substr(n.length - 1));
                    e[s] = this._partsPieces[a]
                }
            }
            return e
        },
        i.getMedalPiecesById = function(t) {
            for (var e = [], a = 0; a < this._medalPieces.length; a++) {
                var i = ConfigData.getDataByKey("medalpiece", this._medalPieces[a].id);
                Number(i.medal_id) == t && e.push(this._medalPieces[a])
            }
            return e
        },
        i.getPartPiecesCount = function(t) {
            for (var e = 0,
                    a = ConfigData.getAllData("partspieces"), i = 1e5 + 100 * t, n = 1; 7 > n; n++) a[(i + n).toString()] && (e += 1);
            return e
        },
        i.getMedalPiecesCount = function(t) {
            for (var e = 0,
                    a = ConfigData.getAllData("medalpiece"), i = 100 * t, n = 1; 7 > n; n++) a[(i + n).toString()] && (e += 1);
            return e
        },
        i.setRankerList = function(t) {
            if (this.rankPlayerList = [], t.npclist && t.npclist.list) {
                for (var e = 0; e < t.npclist.list.length; e++) this.rankPlayerList.push({
                    type: 1,
                    data: t.npclist.list[e]
                });
                for (e = 0; e < t.playerlist.list.length; e++) this.rankPlayerList.push({
                    type: 2,
                    data: t.playerlist.list[e]
                })
            }
            GameEventDispatcher.getInstance().dispatchEvent(new GameEvent(GameEvent.ROBBERYLIST_UPDATE))
        },
        i.getRankerList = function() {
            return this.rankPlayerList ? this.rankPlayerList : []
        },
        t
}();
