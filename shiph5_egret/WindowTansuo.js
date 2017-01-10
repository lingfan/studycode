
var WindowStrategy = function(t) {
    function e() {
        t.call(this, !0),
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/GongLveSkin.exml"
            /*tpa=resource/eui_skins/GongLveSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeClick, this),
                this.scroller.viewport = this.group,
                this.Redraw()
        },
        i.closeClick = function(t) {
            WindowManager.getInstance().hide(WindowManager.windowType.Strategy)
        },
        i.Redraw = function() {
            var t = this.CreateText("strategy_part0");
            this.group.addChild(t);
            for (var a = 1; 9 > a; a++) {
                var i = this.CreateCell(a);
                this.group.addChild(i)
            }
            for (var n = 1; n < e.NUM_MAX; n++) {
                var s = "strategy_part" + n,
                    r = Locales.get(s);
                if (s == r) break;
                var o = this.CreateText(s);
                this.group.addChild(o)
            }
        },
        i.CreateText = function(t) {
            var e = new eui.Label;
            e.size = 20,
                e.lineSpacing = 8;
            var a = Locales.get(t).split("&&"),
                i = a[0],
                n = a[1];
            return e.fontFamily = "黑体",
                e.textFlow = [{
                        text: "※" + i + "※\n",
                        style: {
                            size: 20,
                            textColor: 16620303,
                            bold: !0
                        }
                    },
                    {
                        text: "" + n,
                        style: {
                            size: 20,
                            textColor: 16777215
                        }
                    }
                ],
                e.width = 480,
                e
        },
        i.CreateString = function(t) {
            var e = "",
                a = Locales.get(t).split("&&"),
                i = a[0],
                n = a[1];
            return e = '<font color="#FD9B0F" >※' + i + "※</font>\n" + n
        },
        i.CreateCell = function(t) {
            var e = new eui.Group,
                a = new eui.Image;
            a.width = 35,
                a.height = 29,
                e.addChild(a),
                SUI.setTextureAsync(a, ShipManager.getInstance().getShipTypeIcon(t));
            var i = new eui.Label;
            i.size = 20,
                i.text = Locales.get("GlobalSystem_ShipType_" + t),
                i.textColor = 65535,
                e.addChild(i),
                i.fontFamily = "黑体";
            var n = new eui.HorizontalLayout;
            return n.verticalAlign = egret.HorizontalAlign.CENTER,
                n.paddingLeft = 55,
                e.layout = n,
                e
        },
        e.NUM_MAX = 100,
        e
}(WindowBase);
