
var ShipTitleItem = function(t) {
    function e(e) {
        t.call(this),
            this.data = e,
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.skinName = "resource/eui_skins/item/battle_bloodSkin.exml"
            /*tpa=resource/eui_skins/item/battle_bloodSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {
            SUI.setTextureAsync(this.imgShipType, ShipManager.getInstance().getShipTypeIcon(this.data.baseData.shipType));
            var t = QualitySystem.getColorByQuality(this.data.baseData.quality),
                e = "";
            if (this.data.dataType == BattleShipOptData.TYPE_PLAYER) {
                var a = this.data.serverData ? this.data.serverData.name : this.data.baseData.name_l;
                e = 1 == this.data.isCaptain ? Locales.get("ui_main_battleCaptainTile", a) : a
            } else if (this.data.dataType == BattleShipOptData.TYPE_NPC) {
                var i = this.data.baseData.name_l;
                e = 1 == this.data.isCaptain ? Locales.get("ui_main_battleCaptainTile", i) : i
            }
            this.txtName.text = e,
                this.txtName.textColor = t,
                this.progressTo = 0,
                this.updateHP(this.data.serverData.hp, this.data.serverData.maxhp)
        },
        i.setNameVisible = function(t) {
            this.txtName.visible = t
        },
        i.ChangeShipName = function(t) {
            if (this.data.dataType == BattleShipOptData.TYPE_PLAYER)
                if (this.data.serverData && 1 == t)
                    if ("" == this.data.serverData.name) 1 == this.data.isCaptain ? this.txtName.text = Locales.get("ui_main_battleCaptainTile", Locales.get("shipOptData_name")) : this.txtName.text = Locales.get("shipOptData_name");
                    else {
                        var e = QualitySystem.getColorByQuality(this.data.baseData.quality),
                            a = "";
                        a = 1 == this.data.isCaptain ? Locales.get("ui_main_battleCaptainTile", this.data.serverData.name) : this.data.serverData.name,
                            this.txtName.text = a,
                            this.txtName.textColor = e
                    }
            else {
                var e = QualitySystem.getColorByQuality(this.data.baseData.quality),
                    a = "";
                a = 1 == this.data.isCaptain ? Locales.get("ui_main_battleCaptainTile", ShipManager.getInstance().getShipNameByType(this.data.baseData.id)) : ShipManager.getInstance().getShipNameByType(this.data.baseData.id),
                    this.txtName.text = a,
                    this.txtName.textColor = e
            }
        },
        i.updateHP = function(t, e) {
            if (0 != e) {
                Log.logZDY("updateHp", this.txtName.text, t, e);
                var a = t / e,
                    i = Math.floor(100 * a);
                this.barHp.value = this.progressTo;
                var n = egret.Tween.get(this.barHp);
                n.to({
                            value: i
                        },
                        .5 * BattleManager.PLAYFRAMES * 1e3),
                    this.progressTo = i
            } else Log.logZDY("##########Error.ViewUnitTitle MaxHP is 0, id." + this.data.serverData.id)
        },
        e
}(eui.Component);
