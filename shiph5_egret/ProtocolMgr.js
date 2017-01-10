
var PkgMap = function() {
    function t() {
        this._arrIndex = {},
            this._arrTypes = {},
            this._arrHandler = {},
            this._arrIndex = {},
            this._arrTypes = {},
            this._arrHandler = {}
    }
    var e = (__define, t),
        a = e.prototype;
    return a.AddPkg = function(t, e) {
            return void 0 !== this._arrIndex[t] ? (Main.trace("Already register Pakcage Type for " + t), !1) : void 0 == e ? (Main.trace("cls is nil for type: " + t), !1) : (this._arrIndex[t] = e, void(this._arrTypes[e] = t))
        },
        a.SetPkgHandler = function(t, e) {
            void 0 !== this._arrHandler[t] ? Main.trace("Already register Handler for Package " + t) : this._arrHandler[t] = e
        },
        a.removePkgHandler = function(t, e) {
            this._arrHandler[t];
            void 0 !== this._arrHandler[t] ? Main.trace("Already register Handler for Package " + t) : this._arrHandler[t] = e
        },
        a.GetPkg = function(t) {
            return this._arrIndex[t]
        },
        a.GetPkgType = function(t) {
            return this._arrTypes[t]
        },
        a.GetPkgByType = function(t) {
            return this._arrIndex[t]
        },
        a.GetPkgHandler = function(t) {
            return this._arrHandler[t]
        },
        t
}();
