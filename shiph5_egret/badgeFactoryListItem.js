
var GuildAlert = function(t) {
    function e() {
        t.call(this),
            this.__inited = !1,
            this.canInputCount = 0,
            this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.OnComplete, this),
            this.skinName = "resource/eui_skins/JunTuan_TanKuang_Skin.exml"
            /*tpa=resource/eui_skins/JunTuan_TanKuang_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return e.getInstance = function() {
            return this._instance || (this._instance = new e),
                this._instance
        },
        i.OnComplete = function() {
            this.__inited = !0,
                this._block || (this._block = new egret.Shape, this._block.graphics.beginFill(0, .5), this._block.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight), this._block.graphics.endFill(), this._block.touchEnabled = !0);
            var t = GameLayer.getInstance().windowLayer.getChildIndex(this);
            egret.log("depth:", t),
                GameLayer.getInstance().windowLayer.addChildAt(this._block, t)
        },
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.checkbox1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.checkbox2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.editLabel2.addEventListener(egret.Event.CHANGE, this.editLabelHandler, this),
                this.editLabel.addEventListener(egret.Event.CHANGE, this.editLabelHandler, this)
        },
        i.clean = function() {
            this.data = null,
                this.editLabel2.text = "",
                this.editLabel.text = "",
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnCancel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.btnConfirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.checkbox1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.checkbox2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandler, this),
                this.editLabel2.removeEventListener(egret.Event.CHANGE, this.editLabelHandler, this),
                this.editLabel.removeEventListener(egret.Event.CHANGE, this.editLabelHandler, this)
        },
        i.editLabelHandler = function(t) {
            var e;
            if (t.currentTarget == this.editLabel2) {
                e = Utils.filterStr(this.editLabel2.text);
                var a = e[0];
                a.length > 16 ? (Toast.launch("最多只能输入16个字符"), this.editLabel2.text = a.substring(0, 16)) : this.editLabel2.text = a
            } else if (t.currentTarget == this.editLabel) {
                e = Utils.filterStr(this.editLabel.text);
                var a = e[0];
                a.length > this.canInputCount ? (Toast.launch("最多只能输入" + this.canInputCount + "个字符"), this.editLabel.text = a.substring(0, this.canInputCount)) : this.editLabel.text = a
            }
        },
        i.btnClickHandler = function(t) {
            switch (t.currentTarget) {
                case this.btnClose:
                    this.hide();
                    break;
                case this.btnCancel:
                    this.hide();
                    break;
                case this.btnConfirm:
                    if (2 == this.currPage) this.checkbox1.selected ? GuildManager.getInstance().sendSetVerifyOptions(0) : this.checkbox2.selected && GuildManager.getInstance().sendSetVerifyOptions(1),
                        this.hide();
                    else if (0 == this.currPage)
                        if (null == this.editLabel.text || "" == this.editLabel.text) Toast.launch("内容不能为空");
                        else if (0 == this.sign) {
                        var e = Transport.getPkg(ProtocolMgr.ID_DceSendMail);
                        e.uid = this.data.uid,
                            e.text = this.editLabel.text,
                            Transport.instance.send(e),
                            this.hide()
                    } else 1 == this.sign ? (GuildManager.getInstance().sendModifyNotify(this.editLabel.text), this.hide()) : 2 == this.sign && (GuildManager.getInstance().sendModifyDeclaration(this.editLabel.text), this.hide());
                    else 3 == this.currPage && (null == this.editLabel2.text || "" == this.editLabel2.text ? Toast.launch("内容不能为空") : (GuildManager.getInstance().sendRenameGuild(this.editLabel2.text), this.hide()));
                    break;
                case this.checkbox1:
                    this.checkbox1.selected ? this.checkbox2.selected = !1 : this.checkbox2.selected = !0;
                    break;
                case this.checkbox2:
                    this.checkbox2.selected ? this.checkbox1.selected = !1 : this.checkbox1.selected = !0
            }
        },
        i.preloadConfigs = function(t) {
            var e = [];
            e.push("guildContribute"),
                ConfigData.preLoadDats(e, [GuildcontributeParser],
                    function() {
                        t()
                    })
        },
        i.show = function() {
            this.init(),
                WindowManager.getInstance().showWaiting(),
                this.preloadConfigs(function() {
                    WindowManager.getInstance().hideWaiting()
                }),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showGuildApprovalSet = function() {
            this.init(),
                this.currPage = 2,
                this.showPage(2),
                0 == GuildManager.getInstance().verifyoption ? (this.checkbox1.selected = !0, this.checkbox2.selected = !1) : 1 == GuildManager.getInstance().verifyoption && (this.checkbox1.selected = !1, this.checkbox2.selected = !0),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showChangeLabel = function(t, e, a, i, n) {
            void 0 === i && (i = 0),
                void 0 === n && (n = 60),
                this.init(),
                this.currPage = 0,
                this.showPage(0),
                this.txtTitle.text = t,
                this.editLabel.prompt = e,
                this.data = a,
                this.sign = i,
                this.canInputCount = n,
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.showChangeLabel2 = function(t, e) {
            void 0 === t && (t = "军团更名"),
                void 0 === e && (e = "请输入新的军团名称"),
                this.init(),
                this.currPage = 3,
                this.showPage(3),
                this.txtTitle.text = t,
                this.editLabel2.prompt = e,
                SUI.setTextureAsync(this.iconGuildChangeName, "resource/assets/Icon/item_s/icon_s_JTGMK.png"
                    /*tpa=resource/assets/Icon/item_s/icon_s_JTGMK.png*/
                );
            var a = ItemsManager.getInstance().getItemById(1315);
            a && a.count > 0 ? this.txt11.textFlow = (new egret.HtmlTextParser).parser("<font>消耗一张</font><font color='#ff8800'>军团更名卡</font><font>或</font><font color='#ff8800'>500</font><font>    可以更改军团名称\n优先使用</font><font color='#ff8800'>军团更名卡</font><font>,当前拥有:    </font><font color='#00ff00'>" + a.count + "</font>") : this.txt11.textFlow = (new egret.HtmlTextParser).parser("<font>消耗一张</font><font color='#ff8800'>军团更名卡</font><font>或</font><font color='#ff8800'>500</font><font>    可以更改军团名称\n优先使用</font><font color='#ff8800'>军团更名卡</font><font>,当前拥有:    </font><font color='#ff0000'>0</font>"),
                GameLayer.getInstance().windowLayer.addChild(this)
        },
        i.hide = function() {
            this.clean(),
                GameLayer.getInstance().windowLayer.removeChild(this),
                GameLayer.getInstance().windowLayer.removeChild(this._block)
        },
        i.showPage = function(t) {
            for (var e = [this.ChangeLabel, this.Quit_Upgrade, this.SetExamine, this.ChangeLabel2], a = 0; a < e.length; a++) e[a].visible = !1;
            e[t].visible = !0
        },
        e
}(eui.Component);
