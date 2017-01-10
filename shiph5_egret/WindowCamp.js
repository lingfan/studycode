
var WindowBroadCast = function(t) {
    function e(a) {
        t.call(this),
            e.broadCastList || (e.broadCastList = []),
            this.parames = a,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.skinName = "resource/eui_skins/GunDongGongGaoSkin.exml"
            /*tpa=resource/eui_skins/GunDongGongGaoSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            this.enabled = !1,
                this.x = GameData.designWidth,
                this.y = GameData.designHeight / 5,
                GameLayer.getInstance().topLayer.addChild(this),
                this.txt = new eui.Label,
                this.txt.size = 20,
                this.txt.x = 5,
                this.txt.y = 5,
                this.txt.textFlow = this.parames,
                this.bg.width = this.txt.width + 5,
                this.bW = this.bg.width,
                this.addChild(this.txt);
            for (var a = 0,
                    i = 0; i < e.broadCastList.length; i++) a += e.broadCastList[i].x + e.broadCastList[i].bW + 50;
            0 != a && (this.x = a),
                this.tickId = GameTick.registerHandler(function() {
                        if (t.x < -t.width) {
                            GameTick.removeHandler(t.tickId),
                                GameLayer.getInstance().topLayer.removeChild(t);
                            for (var a = 0; a < e.broadCastList.length; a++)
                                if (e.broadCastList[a] == t) {
                                    e.broadCastList.splice(a, 1);
                                    break
                                }
                        } else t.x -= 5
                    },
                    50),
                e.broadCastList.push(this)
        },
        e
}(eui.Component);
