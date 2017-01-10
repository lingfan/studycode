
var Transport = function() {
    function t(e) {
        this.state = 0,
            this.pkgMap = e,
            t.instance = this,
            this.init()
    }
    var e = (__define, t),
        a = e.prototype;
    return a.init = function() {
            this.socket = new egret.WebSocket,
                this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this),
                this.socket.addEventListener(egret.Event.CONNECT, this.login2, this),
                this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this),
                this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this),
                this.socket.type = egret.WebSocket.TYPE_STRING
        },
        a.connect = function() {
            Main.trace("连接服务器>>>> ", PlatformManager.instance.serverIP, Number(PlatformManager.instance.serverPort));
            try {
                this.socket.connect(PlatformManager.instance.serverIP, Number(PlatformManager.instance.serverPort))
            } catch (t) {
                Toast.launch("服务器连接失败")
            }
        },
        a.login2 = function() {
            t.instance.onSocketOpen()
        },
        a.login = function() {
            t.loginPanelBool ? (Main.instance.loadingPanel || (Main.instance.loadingPanel = new WindowLoading), Main.instance.loadingPanel.showLogin()) : (Main.instance.setChildIndex(Main.instance.loadingPanel, Main.instance.numChildren), PlatformManager.instance.loginVerify(function() {
                Main.instance.loadingPanel || (Main.instance.loadingPanel = new WindowLoading),
                    GameData.openid = PlatformManager.instance.myself.openid,
                    GameData.uid = PlatformManager.instance.myself.userid,
                    GameData.lastServerId = PlatformManager.instance.myself.serverId,
                    GameData.pf = PlatformManager.instance.myself.platformName,
                    Main.instance.loadingPanel.showServerListUI(),
                    Main.instance.loadingPanel.requestServerList(),
                    Plantform.getInstanceOf().openGame()
            }))
        },
        a.loginConnect = function(t) {
            void 0 === t && (t = ""),
                this.socket.type = egret.WebSocket.TYPE_STRING,
                GameData.longId = t,
                this.socket.type = egret.WebSocket.TYPE_BINARY,
                Main.trace("注册成功"),
                Plantform.getInstanceOf().register(PlatformManager.instance.myself.userid)
        },
        a.onSocketClose = function() {
            this.state = 0,
                Main.trace("Close~~~~~~~~~~~"),
                this.closeSocket(),
                new WindowDuanXian
        },
        a.socketReset = function() {
            this.init(),
                this.connect()
        },
        a.onSocketError = function() {
            this.state = 0,
                Main.trace("error~~~~~~~~~~~"),
                this.closeSocket()
        },
        a.closeSocket = function() {
            this.state = 0,
                this.socket.close(),
                this.socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this),
                this.socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this),
                this.socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this)
        },
        a.onSocketOpen = function() {
            this.socket.type = egret.WebSocket.TYPE_STRING,
                this.state = 1;
            var t = "a," + GameData.uid + "," + GameData.secret;
            this.socket.writeUTF(t),
                this.socket.flush(),
                this.socket.type = egret.WebSocket.TYPE_BINARY,
                Main.trace("连接成功，发送数据：" + t)
        },
        a.send = function(t) {
            var e = t.toArrayBuffer(),
                a = (e.byteLength, new egret.ByteArray),
                i = new egret.ByteArray(e),
                n = this.pkgMap.GetPkgType(t.toString().substr(1));
            a.writeShort(n),
                a.writeBytes(i),
                this.socket.writeBytes(a),
                this.socket.flush()
        },
        a.onReceiveMessage = function(t) {
            var e = new egret.ByteArray;
            this.socket.readBytes(e);
            var a = e.length,
                i = new egret.ByteArray;
            e.readBytes(i, 0, 1);
            var n = i.readUnsignedByte(),
                s = new egret.ByteArray;
            e.readBytes(s, 0, 1);
            var r = s.readUnsignedByte(),
                o = new egret.ByteArray;
            e.readBytes(o, 0, 1);
            var l = o.readUnsignedByte(),
                h = new egret.ByteArray;
            e.readBytes(h, 0, 1);
            var c = h.readUnsignedByte(),
                d = new egret.ByteArray;
            e.readBytes(d, 0, a - 4);
            for (var g = d.length,
                    u = new DataView(d.buffer), p = new DataView(new ArrayBuffer(g)), m = 0; g > m; m++) p.setInt8(m, u.getInt8(m));
            var _ = p.buffer,
                v = new PkgBuffer;
            v.type = 256 * n + r,
                v.pkglen = 256 * l + c,
                v.curlen = a - 4;
            var f = this.getMessageByType(v.type);
            if (f) {
                var I = f.decode(_),
                    T = this.pkgMap.GetPkgHandler(v.type);
                Main.instance.loadingPanel && Main.instance.loadingPanel.triggerPercent(v.type),
                    T && T(I)
            } else Main.trace("错误的协议 : ", v.type, "---------------------->")
        },
        a.getMessageByType = function(e) {
            var a = this.pkgMap.GetPkgByType(e);
            if (a) {
                var i = dcodeIO.ProtoBuf.loadProto(t.protoCache[a], void 0, "./resource/proto/" + a + ".proto"),
                    n = i.build(a);
                return n
            }
            return null
        },
        t.registerHandler = function(e, a) {
            void 0 == a ? Main.trace("Handler is nil for type " + e) : t.instance.pkgMap.SetPkgHandler(e, a)
        },
        t.getPkg = function(e) {
            var a = t.instance.getMessageByType(e);
            return a ? (Main.instance.loadingPanel && Main.instance.loadingPanel.triggerPercent(e), new a) : null
        },
        t.loginPanelBool = !1,
        t
}();
