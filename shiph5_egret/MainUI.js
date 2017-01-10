
var BottomUI = function(t) {
    function e() {
        t.call(this),
            this.shopPage = 0,
            this.addEventListener(eui.UIEvent.COMPLETE, this.init, this),
            this.addEventListener(eui.UIEvent.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/BottomUISkin.exml"
            /*tpa=resource/eui_skins/BottomUISkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            this.btnHomeBg = new eui.Image,
                this.btnHomeBg.source = "GUI_Homepage_Icon_Bg_png",
                this.btnHomeBg.x = 0,
                this.btnHomeBg.y = 0,
                this.btnBgGroup.addChild(this.btnHomeBg),
                SUI.addClickEffect(this.btnHome),
                SUI.addClickEffect(this.btnArrange),
                SUI.addClickEffect(this.btnPVE),
                SUI.addClickEffect(this.btnPVP),
                SUI.addClickEffect(this.btnShop),
                SUI.addClickEffect(this.btnStore),
                this.btnHome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickPageBtn, this),
                this.btnArrange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickPageBtn, this),
                this.btnPVE.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickPageBtn, this),
                this.btnPVP.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickPageBtn, this),
                this.btnShop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickPageBtn, this),
                this.btnStore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickPageBtn, this),
                UserData.getInstance().registerActiveTip(this.spotPVE, "specialstage"),
                UserData.getInstance().registerActiveTip(this.spotPVP, "guard"),
                UserData.getInstance().registerActiveTip(this.spotShop, "vipgift"),
                UserData.getInstance().registerActiveTip(this.spotShop0, "spy")
        },
        i.setArrangeSpot = function(t) {
            this.spotArrange.visible = t
        },
        i.showHomeByForce = function() {
            this.btnHome.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
        },
        i.showPveByForce = function() {
            this.btnPVE.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
        },
        i.showPvpByForce = function() {
            this.btnPVP.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
        },
        i.showShopForce = function(t) {
            void 0 === t && (t = 0),
                this.shopPage = t,
                this.btnShop.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
        },
        i.showShipArrange = function() {
            this.btnArrange.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
        },
        i.moveSelectFrameToBtn = function(t) {
            switch (t) {
                case "btnHome":
                    this.moveToPoint(0, 0);
                    break;
                case "btnStore":
                    this.moveToPoint(530, 0);
                    break;
                case "btnArrange":
                    this.moveToPoint(106, 0);
                    break;
                case "btnPVE":
                    this.moveToPoint(212, 0);
                    break;
                case "btnShop":
                    this.moveToPoint(424, 0);
                    break;
                case "btnPVP":
                    this.moveToPoint(318, 0)
            }
        },
        i.clickPageBtn = function(t) {
            var e = t.currentTarget.name;
            if ("btnPVP" == e && UserData.getInstance()._level < 12) return void Toast.launch(Locales.get("ui_main_function_scientific", 12));
            switch (this.lastBtn = t.currentTarget, this.txtBtnHome.textColor = 16777215, this.txtArrange.textColor = 16777215, this.txtPVE.textColor = 16777215, this.txtPVP.textColor = 16777215, this.txtShop.textColor = 16777215, this.txtStore.textColor = 16777215, HomeUI.instance.hideGroupExchange(), e) {
                case "btnHome":
                    this.showHome(),
                        this.moveToPoint(0, 0),
                        this.txtBtnHome.textColor = 65535;
                    break;
                case "btnStore":
                    this.showStore(),
                        this.moveToPoint(530, 0),
                        this.txtStore.textColor = 65535;
                    break;
                case "btnArrange":
                    this.showArrange(),
                        this.moveToPoint(106, 0),
                        this.txtArrange.textColor = 65535;
                    break;
                case "btnPVE":
                    this.showPVE(),
                        this.moveToPoint(212, 0),
                        this.txtPVE.textColor = 65535;
                    break;
                case "btnShop":
                    this.showShop(),
                        this.moveToPoint(424, 0),
                        this.txtShop.textColor = 65535;
                    break;
                case "btnPVP":
                    this.showPVP(),
                        this.moveToPoint(318, 0),
                        this.txtPVP.textColor = 65535
            }
        },
        i.moveToPoint = function(t, e) {
            egret.Tween.get(this.btnHomeBg).to({
                    x: t,
                    y: e
                },
                300, egret.Ease.cubicInOut)
        },
        i.showPVP = function() {
            WindowManager.getInstance().hideAll(),
                WindowManager.getInstance().show(WindowManager.windowType.Zhenba)
        },
        i.showHome = function() {
            WindowManager.getInstance().hideAll(),
                MainUI.instance.changeTopMode(topUIMode.normal)
        },
        i.showStore = function() {
            RequestManager.GetInstance().needShowStoreWindow = !0,
                RequestManager.GetInstance().RequestItemList()
        },
        i.showArrange = function() {
            WindowManager.getInstance().hideAll(),
                WindowManager.getInstance().show(WindowManager.windowType.ShipArrange, {}),
                42 == GuideManager.step && GuideManager.nextStep()
        },
        i.showPVE = function() {
            60 == GuideManager.step && GuideManager.nextStep(),
                WindowManager.getInstance().hideAll(),
                MainWorldManager.instance.openPVEWindow()
        },
        i.showShop = function() {
            WindowManager.getInstance().hideAll(),
                GameData.skipShipGuide ? (WindowShop.PAPER_INDEX = 2, WindowShop.STORE_INDEX = 0, WindowShop.VIP_INDEX = 1, WindowShop.CAPTAIN_INDEX = 3, WindowShop.MEDAL_INDEX = 4, WindowShop.CURR_PAGE = WindowShop.STORE_INDEX) : WindowShop.CURR_PAGE = this.shopPage,
                WindowManager.getInstance().show(WindowManager.windowType.Shop)
        },
        i.clear = function() {},
        e
}(eui.Component);
