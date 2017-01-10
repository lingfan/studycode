
var Plantform = function() {
    function t() {
        this.jiluBool = !0,
            this.appId = "8e19de856ec46bd643b28d597c202d49",
            this.deviceId = "IMEI",
            this.init()
    }
    var e = (__define, t),
        a = e.prototype;
    return a.init = function() {},
        t.getInstanceOf = function() {
            return t.instance || (t.instance = new t),
                t.instance
        },
        a.openFirst = function() {
            if (this.jiluBool) {
                var t = egret.localStorage.getItem("checkFirst");
                if (t && "checkFirst" == t);
                else {
                    var e = {
                            appid: this.appId,
                            who: PlatformManager.instance.myself.openid,
                            context: {
                                deviceid: this.deviceId,
                                channelid: GetPlatType(),
                                serverid: PlatformManager.instance.myself.serverId || 0
                            }
                        },
                        a = JSON.stringify(e),
                        i = new egret.HttpRequest;
                    i.responseType = egret.HttpResponseType.TEXT,
                        i.open("http://receive.sincetimes.com/receive/rest/install", egret.HttpMethod.POST),
                        i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                        i.send(a),
                        egret.localStorage.setItem("checkFirst", "checkFirst")
                }
            }
        },
        a.openGame = function() {
            if (this.jiluBool) {
                var t = {
                        appid: this.appId,
                        who: PlatformManager.instance.myself.openid,
                        context: {
                            deviceid: this.deviceId,
                            channelid: GetPlatType(),
                            serverid: PlatformManager.instance.myself.serverId || 0
                        }
                    },
                    e = JSON.stringify(t),
                    a = new egret.HttpRequest;
                a.responseType = egret.HttpResponseType.TEXT,
                    a.open("http://receive.sincetimes.com/receive/rest/startup", egret.HttpMethod.POST),
                    a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    a.send(e),
                    a.addEventListener(egret.Event.COMPLETE,
                        function(t) {
                            t.currentTarget
                        },
                        void 0),
                    a.addEventListener(egret.IOErrorEvent.IO_ERROR,
                        function(t) {
                            Log.logError("IOError", Log.objectToString(e))
                        },
                        void 0)
            }
        },
        a.register = function(t) {
            if (this.jiluBool) {
                var e = {
                        appid: this.appId,
                        who: PlatformManager.instance.myself.openid,
                        context: {
                            deviceid: this.deviceId,
                            serverid: PlatformManager.instance.myself.serverId || 0,
                            channelid: GetPlatType()
                        }
                    },
                    a = JSON.stringify(e),
                    i = new egret.HttpRequest;
                i.responseType = egret.HttpResponseType.TEXT,
                    i.addEventListener(egret.Event.COMPLETE,
                        function(t) {
                            t.currentTarget
                        },
                        void 0),
                    i.addEventListener(egret.IOErrorEvent.IO_ERROR,
                        function(t) {
                            Log.logError("IOError", Log.objectToString(a))
                        },
                        void 0),
                    i.open("http://receive.sincetimes.com/receive/rest/register", egret.HttpMethod.POST),
                    i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    i.send(a)
            }
        },
        a.login = function() {
            if (this.jiluBool) {
                var t = {
                        appid: this.appId,
                        who: PlatformManager.instance.myself.openid,
                        context: {
                            deviceid: this.deviceId,
                            serverid: PlatformManager.instance.myself.serverId || 0,
                            channelid: GetPlatType()
                        }
                    },
                    e = JSON.stringify(t),
                    a = new egret.HttpRequest;
                a.responseType = egret.HttpResponseType.TEXT,
                    a.addEventListener(egret.Event.COMPLETE,
                        function(t) {
                            t.currentTarget
                        },
                        void 0),
                    a.addEventListener(egret.IOErrorEvent.IO_ERROR,
                        function(t) {
                            Log.logError("IOError", Log.objectToString(e))
                        },
                        void 0),
                    a.open("http://receive.sincetimes.com/receive/rest/loggedin", egret.HttpMethod.POST),
                    a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    a.send(e)
            }
        },
        a.pay = function(t, e, a, i) {
            if (GetPlatType() == PlatformType.PF_QQ && (t /= 10), this.jiluBool) {
                var n = {
                        appid: this.appId,
                        who: PlatformManager.instance.myself.openid,
                        context: {
                            currencyAmount: t,
                            currencytype: "CNY",
                            deviceid: this.deviceId,
                            iapamount: e,
                            iapname: a,
                            paymenttype: "rmb",
                            transactionid: Math.floor(1e7 * Math.random()),
                            virtualcoinamount: i,
                            serverid: PlatformManager.instance.myself.serverId,
                            channelid: GetPlatType(),
                            level: UserData.getInstance()._level
                        }
                    },
                    s = JSON.stringify(n),
                    r = new egret.HttpRequest;
                r.responseType = egret.HttpResponseType.TEXT,
                    r.addEventListener(egret.Event.COMPLETE,
                        function(t) {
                            t.currentTarget
                        },
                        void 0),
                    r.addEventListener(egret.IOErrorEvent.IO_ERROR,
                        function(t) {
                            Log.logError("IOError", Log.objectToString(s))
                        },
                        void 0),
                    r.open("http://receive.sincetimes.com/receive/rest/payment", egret.HttpMethod.POST),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.send(s)
            }
        },
        a.buy = function(t, e, a) {
            if (this.jiluBool) {
                var i = {
                        appid: this.appId,
                        who: PlatformManager.instance.myself.openid,
                        context: {
                            itemtotalprice: t,
                            deviceid: this.deviceId,
                            itemamount: e,
                            itemname: a,
                            serverid: PlatformManager.instance.myself.serverId,
                            channelid: GetPlatType(),
                            level: UserData.getInstance()._level
                        }
                    },
                    n = JSON.stringify(i),
                    s = new egret.HttpRequest;
                s.responseType = egret.HttpResponseType.TEXT,
                    s.addEventListener(egret.Event.COMPLETE,
                        function(t) {
                            t.currentTarget
                        },
                        void 0),
                    s.addEventListener(egret.IOErrorEvent.IO_ERROR,
                        function(t) {
                            Log.logError("IOError", Log.objectToString(n))
                        },
                        void 0),
                    s.open("http://receive.sincetimes.com/receive/rest/economy", egret.HttpMethod.POST),
                    s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    s.send(n)
            }
        },
        a.mission = function(t) {
            if (this.jiluBool) {
                var e = {
                        appid: this.appId,
                        context: {
                            deviceid: this.deviceId,
                            questid: t,
                            queststatus: "a",
                            questtype: "main",
                            serverid: PlatformManager.instance.myself.serverId,
                            channelid: GetPlatType(),
                            level: UserData.getInstance()._level
                        },
                        who: PlatformManager.instance.myself.openid
                    },
                    a = JSON.stringify(e),
                    i = new egret.HttpRequest;
                i.responseType = egret.HttpResponseType.TEXT,
                    i.addEventListener(egret.Event.COMPLETE,
                        function(t) {
                            t.currentTarget
                        },
                        void 0),
                    i.addEventListener(egret.IOErrorEvent.IO_ERROR,
                        function(t) {
                            Log.logError("IOError", Log.objectToString(a))
                        },
                        void 0),
                    i.open("http://receive.sincetimes.com/receive/rest/quest", egret.HttpMethod.POST),
                    i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    i.send(a)
            }
        },
        t
}();
