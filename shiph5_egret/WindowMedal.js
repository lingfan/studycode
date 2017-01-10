
var WindowMail = function(t) {
    function e() {
        t.call(this, !0),
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/YouJianSkin.exml"
            /*tpa=resource/eui_skins/YouJianSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.scroller.viewport = this.list,
                this.initBtn(),
                this.btnSystem.dispatchEvent(new egret.Event(egret.TouchEvent.TOUCH_TAP))
        },
        i.initBtn = function() {
            this.arrBtnBar = [this.btnSystem, this.btnBattle, this.btnMessage, this.btnReward],
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBtnClick, this),
                this.btnSystem.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnBattle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnMessage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this),
                this.btnReward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBarClickHandler, this)
        },
        i.closeBtnClick = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceMailList);
            e.type = 100,
                Transport.instance.send(e),
                WindowManager.getInstance().hide(WindowManager.windowType.Mail)
        },
        i.btnBarClickHandler = function(t) {
            if (t.target != this.arrBtnBar[this.curPage]) {
                for (var e in this.arrBtnBar) t.target == this.arrBtnBar[e] ? (this.arrBtnBar[e].currentState = "down", this.curPage = parseInt(e)) : this.arrBtnBar[e].currentState = "up";
                this.updatePaper()
            }
        },
        i.updatePaper = function() {
            var t, e = [];
            switch (this.curPage) {
                case 0:
                    t = MailManager.getInstance().systemMailList;
                    break;
                case 1:
                    t = MailManager.getInstance().battleMailList;
                    break;
                case 2:
                    t = MailManager.getInstance().messageMailList;
                    break;
                case 3:
                    t = MailManager.getInstance().rewardMailList
            }
            for (var a in t) {
                var i = {};
                i.title = t[a].title,
                    i.content = t[a].content,
                    i.time = t[a].time,
                    i.type = t[a].typeTwo,
                    i.isread = t[a].isread,
                    i.mailid = t[a].mailid,
                    i.color = t[a].color,
                    i.pkgParam = t[a].pkgParam,
                    i.uid = t[a].uid,
                    i.uname = t[a].uname,
                    i.id = t[a].id,
                    i.proplist = t[a].proplist,
                    e.unshift(i)
            }
            this.list.dataProvider = new eui.ArrayCollection(e),
                this.list.itemRenderer = MailRenderer
        },
        e
}(WindowBase);
