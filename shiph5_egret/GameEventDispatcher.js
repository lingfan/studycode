
var GameEventDispatcher = function(t) {
    function e() {
        t.call(this)
    }
    __extends(e, t);
    var a = (__define, e);
    a.prototype;
    return e.getInstance = function() {
            return this._instance || (this._instance = new e),
                this._instance
        },
        e
}(egret.EventDispatcher);
