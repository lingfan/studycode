
var TestEventDispatcher = function() {
    function t() {
        this.testInt = 1
    }
    var e = (__define, t),
        a = e.prototype;
    return a.test = function() {
            EventManager.instance.addEventListener(EventTypes.EVENT_MAIN_UI_FLAG, this.callback1, this),
                EventManager.instance.addEventListener(EventTypes.EVENT_MAIN_UI_FLAG, this.callback2, this),
                EventManager.instance.addEventListener(EventTypes.EVENT_MAIN_UI_FLAG, t.callback3, void 0),
                EventManager.instance.dispatchEvent(EventTypes.EVENT_MAIN_UI_FLAG, 3, 4)
        },
        a.callback1 = function() {
            Log.log("callback1", this.testInt)
        },
        a.callback2 = function(t, e) {
            Log.log("callback2", t, e),
                EventManager.instance.removeEventListener(EventTypes.EVENT_MAIN_UI_FLAG, this.callback2, this)
        },
        t.callback3 = function(t, e, a) {
            Log.log("callback3", t, e, a)
        },
        t.instance = new t,
        t
}();
