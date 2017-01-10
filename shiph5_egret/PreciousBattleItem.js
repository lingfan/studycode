
var PreciousItem = function(t) {
    function e(e, a) {
        t.call(this, !1, !0),
            this.iData = e,
            this.myParent = a,
            this.skinName = "resource/eui_skins/components/ZB_DBQB_TargetSkin.exml"
            /*tpa=resource/eui_skins/components/ZB_DBQB_TargetSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t, e = this;
            this.medal = this.iData.id > 1e6,
                this.medal ? (t = ConfigData.getDataByKey("medalData", Math.floor(this.iData.id / 100).toString()), Utils.getImgByUrl(Path.soulIconURL + t.icon, this.imgIcon,
                    function() {
                        e.imgIcon.width = e.imgIcon.height = 79,
                            e.imgIcon.x = (e.width - e.imgIcon.width) / 2,
                            e.imgIcon.y = (e.height - e.imgIcon.height) / 2
                    }), Utils.getImgByUrl(QualitySystem.getItemSmallBack(t.quality), this.imgBg)) : (t = ConfigData.getDataByKey("parts", Number(this.iData.id.toString().substr(2, 2)).toString()), Utils.getImgByUrl(Path.partsIconURL + t.icon, this.imgIcon,
                    function() {
                        e.imgIcon.width = e.imgIcon.height = 79,
                            e.imgIcon.x = (e.width - e.imgIcon.width) / 2,
                            e.imgIcon.y = (e.height - e.imgIcon.height) / 2
                    }), Utils.getImgByUrl(QualitySystem.getItemSmallBack(t.quality), this.imgBg)),
                this.imgNotice.visible = !1,
                this.setSelected(this.selectedBool),
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectedHandler, this),
                WindowPrecious.selectedIndex == this.iData.id && egret.setTimeout(function() {
                        e.setSelected(!0)
                    },
                    this, 100)
        },
        i.setSelected = function(t) {
            this.selectedBool = t,
                this.imgSelect && (t && (WindowPrecious.selectedItem && WindowPrecious.selectedItem.setSelected(!1), WindowPrecious.selectedItem = this, this.myParent.showPieces(this.iData)), this.imgSelect.visible = t)
        },
        i.selectedHandler = function(t) {
            this.setSelected(!0)
        },
        e
}(WindowBase);
