
var MailRenderer = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/YouJianBarSkin.exml"
            /*tpa=resource/eui_skins/item/YouJianBarSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {
            t.prototype.createChildren.call(this),
                this.btnOp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.opbtnClick, this),
                this.scroller.viewport = this.grpContent
        },
        i.dataChanged = function() {
            switch (t.prototype.dataChanged.call(this), this.data.type) {
                default:
                    case 1:
                    this.btnOp.visible = !1;
                break;
                case 3:
                        this.btnOp.label = "战斗回放",
                    this.btnOp.visible = !0;
                    break;
                case 4:
                        this.btnOp.label = "回复",
                    this.btnOp.visible = !0;
                    break;
                case 2:
                        this.btnOp.label = "领取",
                    this.btnOp.visible = !0,
                    this.data.proplist.length > 0 ? this.btnOp.enabled = !0 : this.btnOp.enabled = !1
            }
            if (this._pkgData = {},
                2 == this.data.type ? this.imgNew.visible = this.data.proplist.length > 0 : this.imgNew.visible = !this.data.isread, this.txtTitle.text = this.data.title, 49 == this.data.mailid) this.txtContent.text = this.data.content,
                this._pkgData.uid = this.data.uid,
                this._pkgData.uname = this.data.uname;
            else {
                var e = this.data.content,
                    a = /#/g,
                    i = e.match(a);
                if (i && i.length > 1) {
                    for (var n = Math.floor(.5 * i.length), s = 0; n > s; s++) {
                        var r = 10 > s ? "#0" + (s + 1) + "#" : "#" + (s + 1) + "#",
                            o = this.data.color[s] ? this.data.color[s] : "0b97e8",
                            l = this.data.pkgParam[s] ? this.data.pkgParam[s] : "";
                        if (16 == this.data.mailid && 0 == s) {
                            var h = GlobalFunction.getDateByTimeNum(this.data.pkgParam[s]);
                            l = h.getFullYear().toString() + "年" + (h.getMonth() + 1) + "月" + h.getDate().toString() + "日" + h.getHours() + ":" + h.getMinutes()
                        }
                        if (25 == this.data.mailid && 1 == s) {
                            var c = PartspiecesParser.GetInstance().getItemById(this.data.pkgParam[s]);
                            c && (l = c.name_l)
                        }
                        var d = "<font color='#" + o + "'>" + l + "</font>";
                        e = e.replace(r, d)
                    }
                    this.txtContent.textFlow = (new egret.HtmlTextParser).parser(e)
                } else this.txtContent.text = e
            }
            this.txtTime.text = GlobalFunction.getDateByTimeNum(this.data.time).getFullYear().toString() + "年" + (GlobalFunction.getDateByTimeNum(this.data.time).getMonth() + 1) + "月" + GlobalFunction.getDateByTimeNum(this.data.time).getDate().toString() + "日"
        },
        i.opbtnClick = function(t) {
            switch (this.data.type) {
                case 3:
                    13 == this.data.mailid || 14 == this.data.mailid ? MailManager.getInstance().sendBattleReview(this.data.pkgParam[1]) : (15 == this.data.mailid || 25 == this.data.mailid) && MailManager.getInstance().sendBattleReview(this.data.pkgParam[2]);
                    break;
                case 4:
                    var e = {};
                    e.uid = this.data.uid,
                        e.name = this.data.uname,
                        WindowManager.getInstance().show(WindowManager.windowType.Speak, e);
                    break;
                case 2:
                    var a = Transport.getPkg(ProtocolMgr.ID_DceGetMailProp);
                    a.id = this.data.id,
                        Transport.instance.send(a)
            }
        },
        e
}(eui.ItemRenderer);
