
var WindowFormatTeam = function(t) {
    function e() {
        t.call(this, !0),
            this._needBlock = !0,
            this.skinName = "resource/eui_skins/formatTeamSkin.exml"
            /*tpa=resource/eui_skins/formatTeamSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            this.x = .5 * (GameData.designWidth - this.width),
                this.y = .5 * (GameData.designHeight - this.height),
                this.shipids = [];
            for (var e = 0; 10 > e; e++) this.shipids[e] = "0";
            ConfigData.preLoadList(["manual", "shipData"],
                function() {
                    t.initUI()
                })
        },
        i.initUI = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnShowBuff.addEventListener(egret.TouchEvent.TOUCH_TAP,
                    function(t) {
                        WindowManager.getInstance().show(WindowManager.windowType.Formation)
                    },
                    this);
            for (var t = 1; 8 >= t; t++) {
                5 > t ? this["pos" + t].txtPos.text = Locales.get("panel_marine_force") : this["pos" + t].txtPos.text = Locales.get("panel_marine_back");
                var e = ShipManager.getInstance().tacticList[t - 1];
                this.shipids[t - 1] = e,
                    this["pos" + t].index = t,
                    this["pos" + t].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginDrag, this),
                    this["pos" + t].addEventListener(egret.TouchEvent.TOUCH_END, this.endDrag, this),
                    this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.dragMove, this),
                    this.addEventListener(egret.TouchEvent.TOUCH_END, this.cancelDrag, this)
            }
            this.dragItem = new eui.Component,
                this.dragItem.touchEnabled = !1,
                this.dragItem.touchChildren = !1,
                this.dragItem.skinName = "resource/eui_skins/item/zhenrong_zhulijianSkin.exml"
                /*tpa=resource/eui_skins/item/zhenrong_zhulijianSkin.exml*/
                ,
                GameEventDispatcher.getInstance().addEventListener(GameEvent.FORMATION_CHANGE, this.updateFormation, this),
                this.updateFormation(),
                this.updateArrange()
        },
        i.updateFormation = function(t) {
            var e = ShipManager.getInstance().shipFormationList[ShipManager.getInstance().shipFormationSelect - 1];
            this.txtFormatName.text = Locales.get("formationName_" + e.id),
                this.txtLevel.text = Locales.get("panel_reward_txt_growup_4", e.level);
            var a = ConfigData.getDataByKey("manual", e.id);
            this.attack1.text = Locales.get("manual_buff_" + a.targetType1 + a.buff1) + "+" + (+a.value1 + a.value1rate * (e.level - 1)),
                "" != a.buff2 ? this.attack2.text = Locales.get("manual_buff_" + a.targetType2 + a.buff2) + "+" + (+a.value2 + a.value2rate * (e.level - 1)) : this.attack2.text = ""
        },
        i.beginDrag = function(t) {
            var e = t.currentTarget.index;
            this["pos" + e].bg.visible = !1,
                this["pos" + e].pic.visible = !1,
                this["pos" + e].txtName.text = "",
                this["pos" + e].iconType.visible = !1,
                this["pos" + e].caption.visible = !1;
            var a = this.shipids[e - 1],
                i = ShipManager.getInstance().getShipById(a);
            if (i) {
                var n = ConfigData.getDataByKey("shipData", i.shipid);
                this.dragItem.bg.visible = !0,
                    this.dragItem.pic.visible = !0,
                    this.dragItem.iconType.visible = !0,
                    this.dragItem.caption.visible = ShipManager.getInstance().captionId == i.id,
                    this.dragItem.txtName.text = ShipManager.getInstance().getShipNameByType(i.shipid),
                    this.dragItem.txtName.textColor = QualitySystem.getColorByQuality(n.quality),
                    SUI.setTextureAsync(this.dragItem.bg, QualitySystem.getShipSmallBack(n.quality)),
                    SUI.setTextureAsync(this.dragItem.pic, ShipManager.getInstance().getShipPicByType(i.shipid)),
                    SUI.setTextureAsync(this.dragItem.iconType, ShipManager.getInstance().getShipTypeIcon(n.shipType));
                var s = t.currentTarget.parent.localToGlobal(t.currentTarget.x, t.currentTarget.y),
                    r = this.globalToLocal(s.x, s.y);
                this.dragItem.x = r.x,
                    this.dragItem.y = r.y,
                    this.dragItem.pos = e - 1,
                    this.addChild(this.dragItem)
            }
        },
        i.dragMove = function(t) {
            if (this.dragItem && this.dragItem.parent) {
                var e = this.globalToLocal(t.stageX, t.stageY);
                this.dragItem.x = e.x - .5 * this.dragItem.width,
                    this.dragItem.y = e.y - .5 * this.dragItem.height
            }
        },
        i.endDrag = function(t) {
            if (this.dragItem && this.dragItem.parent) {
                t.stopImmediatePropagation(),
                    this.removeChild(this.dragItem);
                var e = t.currentTarget.index,
                    a = this.shipids[e - 1],
                    i = this.dragItem.pos,
                    n = this.shipids[i];
                this.shipids[i] = a,
                    this.shipids[e - 1] = n,
                    this.updateArrange()
            }
        },
        i.cancelDrag = function(t) {
            this.dragItem && this.dragItem.parent && (this.removeChild(this.dragItem), this.updateArrange())
        },
        i.updateArrange = function() {
            for (var t = 1; 8 >= t; t++) {
                var e = this.shipids[t - 1],
                    a = ShipManager.getInstance().getShipById(e);
                if (a) {
                    var i = ConfigData.getDataByKey("shipData", a.shipid);
                    this["pos" + t].bg.visible = !0,
                        this["pos" + t].pic.visible = !0,
                        this["pos" + t].iconType.visible = !0,
                        this["pos" + t].caption.visible = ShipManager.getInstance().captionId == a.id,
                        this["pos" + t].txtName.text = ShipManager.getInstance().getShipNameByType(a.shipid),
                        this["pos" + t].txtName.textColor = QualitySystem.getColorByQuality(i.quality),
                        SUI.setTextureAsync(this["pos" + t].bg, QualitySystem.getShipSmallBack(i.quality)),
                        SUI.setTextureAsync(this["pos" + t].pic, ShipManager.getInstance().getShipPicByType(a.shipid)),
                        SUI.setTextureAsync(this["pos" + t].iconType, ShipManager.getInstance().getShipTypeIcon(i.shipType)),
                        this.shipids[t - 1] = a.id
                } else this["pos" + t].bg.visible = !1,
                    this["pos" + t].pic.visible = !1,
                    this["pos" + t].txtName.text = "",
                    this["pos" + t].iconType.visible = !1,
                    this["pos" + t].caption.visible = !1,
                    this.shipids[t - 1] = "0"
            }
        },
        i.OnClickBtnClose = function(t) {
            GameEventDispatcher.getInstance().removeEventListener(GameEvent.FORMATION_CHANGE, this.updateFormation, this),
                RequestManager.GetInstance().RequestSetTactic(this.shipids),
                this.close()
        },
        e
}(WindowBase);
