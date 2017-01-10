
var WindowCamp = function(t) {
    function e() {
        t.call(this, !1),
            this.currCampID = 2,
            this.currHeadID = 1,
            this.currSex = 2,
            this.currPage = -1,
            this.skinName = "resource/eui_skins/xuanzezhenyingSkin.exml"
            /*tpa=resource/eui_skins/xuanzezhenyingSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            WindowManager.getInstance().showWaiting(),
                this.initUI(),
                this.sideLeftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.sideRightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.sideSubmitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnEnter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.shaiziBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.roleSubmitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnCancle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.roleLeftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.roleRightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                WindowManager.getInstance().hideWaiting()
        },
        i.clear = function() {
            MainUI.instance.changeTopMode(topUIMode.normal),
                MainUI.instance.changeTopMode(topUIMode.normal),
                this.sideLeftBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.sideRightBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.sideSubmitBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnEnter.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.shaiziBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.roleSubmitBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnSure.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.btnCancle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.roleLeftBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this),
                this.roleRightBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this)
        },
        i.onTouchTapHandle = function(t) {
            switch (t.currentTarget) {
                case this.sideLeftBtn:
                    break;
                case this.sideRightBtn:
                    break;
                case this.sideSubmitBtn:
                    break;
                case this.btnEnter:
                    break;
                case this.shaiziBtn:
                    break;
                case this.roleSubmitBtn:
                    break;
                case this.btnSure:
                    break;
                case this.btnCancle:
                    break;
                case this.roleLeftBtn:
                    break;
                case this.roleRightBtn:
            }
        },
        i.initUI = function() {
            MainUI.instance.changeTopMode(topUIMode["null"]),
                MainUI.instance.setBottomVisible(!1),
                SUI.setTextureAsync(this.imgIcon, Path.item_sURL + "reset_head.png"),
                this.setChangeHeadCardNum()
        },
        i.showWitchGroup = function(t) {
            void 0 === t && (t = 0),
                this.currPage = t,
                0 == t ? (this.chooseSideGroup.visible = !0, this.chooseRoleGroup.visible = !1) : 1 == t ? (this.chooseSideGroup.visible = !1, this.chooseRoleGroup.visible = !0, this.chooseRoleHead.visible = !0, this.changeHeadDesGroup.visible = !1) : 2 == t && (this.chooseSideGroup.visible = !1, this.chooseRoleGroup.visible = !0, this.chooseRoleHead.visible = !1, this.changeHeadDesGroup.visible = !0)
        },
        i.setChangeHeadCardNum = function() {
            for (var t = ItemsManager.getInstance().getListByType(3), e = 0; e < t.length; e++) {
                var a = t[e];
                if (1287 == a.id) {
                    this.txtNum.text = "x" + a.count,
                        a.count > 0 ? this.txtNum.textColor = 65280 : this.txtNum.textColor = 16711680;
                    break
                }
            }
        },
        e
}(WindowBase);
