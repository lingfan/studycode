
var WindowNameChange = function(t) {
    function e() {
        t.call(this, !0),
            this.isLoadOK = !1,
            this.operateType = -1,
            this.skinName = "resource/eui_skins/juesegengmingSkin.exml"
            /*tpa=resource/eui_skins/juesegengmingSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.isLoadOK || (this.isLoadOK = !0, this._data && this.setData(this._data))
        },
        i.setData = function(t) {
            if (this.operateType = t.type, this._data = t, this.isLoadOK) {
                this.isLoadOK = !0;
                var e;
                0 == t.type ? (this.titleTxt.text = "角色更名", this.editLable.text = "", this.editLable.prompt = "请输入新的角色名", this.infoTxt.textFlow = (new egret.HtmlTextParser).parser("<font size=22 >使用<font color='#ff0000'>一张角色更名卡</font><font color='#ffffff'>或</font><font color='#ff0000'>100钻石</font><font>可更改角色名，优先使用</font><font color='#ff0000'>角色更名卡</font>。</font>"), this.cardImg.source = "juesexinxi_gengmingkajuese_png", e = ItemsManager.getInstance().getItemById(1145), this.itemCount = e ? e.count : 0, this.cardNumTxt.text = this.itemCount + "") : 1 == t.type ? (this.shipID = t.shipId, this.titleTxt.text = "战舰更名", this.editLable.text = t.shipName, this.oldNameStr = t.shipName, this.editLable.prompt = "给个默认的名字", this.infoTxt.textFlow = (new egret.HtmlTextParser).parser("<font size=22 >使用<font color='#ff0000'>一张战舰更名卡</font><font color='#ffffff'>或</font><font color='#ff0000'>100钻石</font><font>可更改战舰名，优先使用</font><font color='#ff0000'>战舰更名卡</font>。</font>"), this.cardImg.source = "juesexinxi_gengmingkazhnjian_png", e = ItemsManager.getInstance().getItemById(1011), this.itemCount = e ? e.count : 0, this.cardNumTxt.text = this.itemCount + "") : this.isLoadOK = !1,
                    this.editLable.addEventListener(egret.Event.CHANGE, this.editLabelHandler, this),
                    this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBtnClickHandler, this),
                    this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.okBtnClickHandler, this),
                    this.randomBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.randomBtnClickHandler, this),
                    this.okBtn.enabled = !1
            }
        },
        i.closeBtnClickHandler = function(t) {
            this.destroy()
        },
        i.okBtnClickHandler = function(t) {
            if (this.editLable.text.length > 8) return void Toast.launch("名字过长");
            if (this.editLable.text.indexOf("*") >= 0) return void Toast.launch("含有非法字符");
            if (0 == this.operateType) {
                var e = Transport.getPkg(ProtocolMgr.ID_DceRenameRole);
                e.name = this.editLable.text,
                    Transport.instance.send(e)
            } else if (1 == this.operateType) {
                var e = Transport.getPkg(ProtocolMgr.ID_DceRenameShip);
                e.shipid = this.shipID,
                    e.name = this.editLable.text,
                    Transport.instance.send(e)
            }
        },
        i.randomBtnClickHandler = function(t) {
            var e, a = this;
            0 == this.operateType ? e = new NameRandomTool(0, this.editLable.text, this.editLable) : 1 == this.operateType && (e = new NameRandomTool(1, this.editLable.text, this.editLable, -1, this._data)),
                egret.setTimeout(function() {
                        a.okBtn.enabled = a.editLable.text != a.oldNameStr && (a.itemCount > 0 || UserData.getInstance().getRes(TypeDefine.RES.Diamond) >= 100)
                    },
                    this, 100)
        },
        i.editLabelHandler = function(t) {
            var e = Utils.filterStr(this.editLable.text);
            this.editLable.text = e[0],
                this.okBtn.enabled = this.editLable.text != this.oldNameStr && (this.itemCount > 0 || UserData.getInstance().getRes(TypeDefine.RES.Diamond) >= 100)
        },
        i.clear = function() {
            this.isLoadOK = !1,
                this.operateType = -1
        },
        e
}(WindowBase);
