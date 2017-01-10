
var LogUserType;
!
function(t) {
    t[t.TYPE_ALL = 0] = "TYPE_ALL",
        t[t.TYPE_ML = 1] = "TYPE_ML",
        t[t.TYPE_LP = 2] = "TYPE_LP",
        t[t.TYPE_LZN = 3] = "TYPE_LZN",
        t[t.TYPE_WX = 4] = "TYPE_WX",
        t[t.TYPE_ZDY = 5] = "TYPE_ZDY"
}(LogUserType || (LogUserType = {}));
var LogLevelType;
!
function(t) {
    t[t.TYPE_NORMAL = 0] = "TYPE_NORMAL",
        t[t.TYPE_WARNING = 1] = "TYPE_WARNING",
        t[t.TYPE_ERROR = 2] = "TYPE_ERROR"
}(LogLevelType || (LogLevelType = {}));
var Log = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.log = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_NORMAL, LogUserType.TYPE_ALL, e)
        },
        t.logWarning = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_WARNING, LogUserType.TYPE_ALL, e)
        },
        t.logError = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_ERROR, LogUserType.TYPE_ALL, e)
        },
        t.logML = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_NORMAL, LogUserType.TYPE_ML, e)
        },
        t.logMLWarning = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_WARNING, LogUserType.TYPE_ML, e)
        },
        t.logMLError = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_ERROR, LogUserType.TYPE_ML, e)
        },
        t.logLP = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_NORMAL, LogUserType.TYPE_LP, e)
        },
        t.logLPWarning = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_WARNING, LogUserType.TYPE_LP, e)
        },
        t.logLPError = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_ERROR, LogUserType.TYPE_LP, e)
        },
        t.logLZN = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_NORMAL, LogUserType.TYPE_LZN, e)
        },
        t.logLZNWarning = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_WARNING, LogUserType.TYPE_LZN, e)
        },
        t.logLZNError = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_ERROR, LogUserType.TYPE_LZN, e)
        },
        t.logWX = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_NORMAL, LogUserType.TYPE_WX, e)
        },
        t.logWXWarning = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_WARNING, LogUserType.TYPE_WX, e)
        },
        t.logWXError = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_ERROR, LogUserType.TYPE_WX, e)
        },
        t.logZDY = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_NORMAL, LogUserType.TYPE_ZDY, e)
        },
        t.logZDYWarning = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_WARNING, LogUserType.TYPE_ZDY, e)
        },
        t.logZDYError = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a - 0] = arguments[a];
            t.logInner(LogLevelType.TYPE_ERROR, LogUserType.TYPE_ZDY, e)
        },
        t.logInner = function(e, a, i) {
            if (e >= t.s_logLevelType && (a == LogUserType.TYPE_ALL || a === t.s_logUser)) {
                for (var n = [], s = 0, r = i; s < r.length; s++) {
                    var o = r[s];
                    void 0 === o ? n.push("undefined") : null === o ? n.push("null") : n.push(o.toString())
                }
                var l = n.join(" "),
                    h = l;
                e == LogLevelType.TYPE_ERROR ? h = "[Error]" + l : e == LogLevelType.TYPE_WARNING && (h = "[Warning]" + l),
                    console.log(h),
                    t.s_logToScreen && t.s_logs.push(h)
            }
        },
        t.objectToString = function(e, a) {
            if (void 0 === a && (a = 5), null == e) return "";
            var i = [];
            return t.objectToStringInner(e, a, 0, i),
                i.join("")
        },
        t.pushNStr = function(t, e, a) {
            for (var i = 0; a > i; ++i) t.push(e)
        },
        t.objectToStringInner = function(e, a, i, n) {
            void 0 === a && (a = 5),
                void 0 === i && (i = 0),
                void 0 === n && (n = void 0);
            var s = void 0 != n ? n : [];
            if (null === e) s.push("null");
            else if (void 0 === e) s.push("undefined");
            else {
                var r = typeof e;
                if ("object" == r)
                    if (a > i) {
                        var o = !1;
                        e instanceof Array && (o = !0),
                            s.push(o ? "[\n" : "{\n");
                        for (var l in e) {
                            var h = e[l],
                                c = typeof h;
                            ("object" == c || "number" == c || "boolean" == c || "string" == c) && (t.pushNStr(s, "	", i + 1), o || (s.push(l), s.push(":")), t.objectToStringInner(h, a, i + 1, s), s.push(",\n"))
                        }
                        t.pushNStr(s, "	", i),
                            s.push(o ? "]" : "}")
                    } else s.push(e.toString());
                else "number" == r || "boolean" == r || "string" == r ? s.push(e.toString()) : "undefined" == r ? s.push("undefined") : "null" == r && s.push("null")
            }
        },
        t.Test = function() {
            t.logZDY("test1----------------", "tt"),
                t.logZDYWarning("test2----------------", "tt"),
                t.logZDYError("test3--------------", "tt"),
                t.logWX("test4--------------", "tt"),
                t.logWXWarning("test5--------------", "tt"),
                t.logWXError("test6--------------", "tt"),
                t.log("test7--------------", "tt"),
                t.logWarning("test8--------------", "tt"),
                t.logError("test9--------------", "tt")
        },
        t.s_logLevelType = LogLevelType.TYPE_NORMAL,
        t.s_logUser = LogUserType.TYPE_ZDY,
        t.s_logToScreen = !1,
        t.s_logs = [],
        t
}();
