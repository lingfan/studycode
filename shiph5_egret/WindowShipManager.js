
var ShipFactoryPaperItem = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/ShipBuildingPaperItemSkin.exml"
            /*tpa=resource/eui_skins/item/ShipBuildingPaperItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {
            t.prototype.createChildren.call(this)
        },
        i.dataChanged = function() {
            var e = this;
            if (t.prototype.dataChanged.call(this), this.data) {
                this.item1.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.item1.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function(t) {
                            e.data.selectCount1++,
                                e.data.selectCount1 > e.itemData1.num && (e.data.selectCount1 = 0),
                                e.txtNum1.text = e.itemData1.num - e.data.selectCount1,
                                e.data.selectCount1 > 0 ? e.btnDelete1.visible = !0 : e.btnDelete1.visible = !1,
                                e.data.selectCount1 == e.itemData1.num ? (e.selectAll1.visible = !0, e.groupNum1.visible = !1) : (e.selectAll1.visible = !1, e.groupNum1.visible = !0);
                            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.ShipFactory);
                            a.updateSellPanel()
                        },
                        this),
                    this.item2.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.item2.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function(t) {
                            e.data.selectCount2++,
                                e.data.selectCount2 > e.itemData2.num && (e.data.selectCount2 = 0),
                                e.txtNum2.text = e.itemData2.num - e.data.selectCount2,
                                e.data.selectCount2 > 0 ? e.btnDelete2.visible = !0 : e.btnDelete2.visible = !1,
                                e.data.selectCount2 == e.itemData2.num ? (e.selectAll2.visible = !0, e.groupNum2.visible = !1) : (e.selectAll2.visible = !1, e.groupNum2.visible = !0);
                            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.ShipFactory);
                            a.updateSellPanel()
                        },
                        this),
                    this.btnDelete1.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.btnDelete1.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function(t) {
                            t.stopImmediatePropagation(),
                                e.data.selectCount1--,
                                e.data.selectCount1 < 0 && (e.data.selectCount1 = 0),
                                e.txtNum1.text = e.itemData1.num - e.data.selectCount1,
                                e.data.selectCount1 > 0 ? e.btnDelete1.visible = !0 : e.btnDelete1.visible = !1,
                                e.data.selectCount1 == e.itemData1.num ? e.selectAll1.visible = !0 : (e.selectAll1.visible = !1, e.groupNum1.visible = !0);
                            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.ShipFactory);
                            a.updateSellPanel()
                        },
                        this),
                    this.btnDelete2.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.btnDelete2.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function(t) {
                            t.stopImmediatePropagation(),
                                e.data.selectCount2--,
                                e.data.selectCount2 < 0 && (e.data.selectCount2 = 0),
                                e.txtNum2.text = e.itemData2.num - e.data.selectCount2,
                                e.data.selectCount2 > 0 ? e.btnDelete2.visible = !0 : e.btnDelete2.visible = !1,
                                e.data.selectCount2 == e.itemData2.num ? e.selectAll2.visible = !0 : (e.selectAll2.visible = !1, e.groupNum2.visible = !0);
                            var a = WindowManager.getInstance().getWindow(WindowManager.windowType.ShipFactory);
                            a.updateSellPanel()
                        },
                        this);
                var a = this.data;
                if (this.data.selectCount1 || (this.data.selectCount1 = 0), this.data.selectCount2 || (this.data.selectCount2 = 0), a.length)
                    if (1 == a.length) this.item2.visible = !1,
                        this.itemData1 = a[1],
                        this.isOwn1.visible = this.itemData1.own,
                        this.txtNum1.text = this.itemData1.num - this.data.selectCount1,
                        SUI.setTextureAsync(this.qualityBg1, this.itemData1.qualityBg),
                        SUI.setTextureAsync(this.pic1, this.itemData1.icon),
                        SUI.setTextureAsync(this.iconType1, this.itemData1.typeIcon),
                        this.txtName1.text = this.itemData1.shipName,
                        this.txtName1.textColor = QualitySystem.getColorByQuality(this.itemData1.quality),
                        this.data.selectCount1 > 0 ? this.btnDelete1.visible = !0 : this.btnDelete1.visible = !1,
                        this.data.selectCount1 == this.itemData1.num ? this.selectAll1.visible = !0 : this.selectAll1.visible = !1,
                        this.itemData1.isSelected ? (this.selectAll1.visible = !0, this.btnDelete1.visible = !0, this.groupNum1.visible = !1) : (this.selectAll1.visible = !1, this.btnDelete1.visible = !1, this.groupNum1.visible = !0);
                    else {
                        this.item2.visible = !0,
                            this.itemData1 = a[1],
                            this.itemData2 = a[2];
                        for (var i = 1; 2 >= i; i++) this["isOwn" + i].visible = this["itemData" + i].own,
                            this["txtNum" + i].text = this["itemData" + i].num - this.data["selectCount" + i],
                            this["txtName" + i].text = this["itemData" + i].shipName,
                            this["txtName" + i].textColor = QualitySystem.getColorByQuality(this["itemData" + i].quality),
                            SUI.setTextureAsync(this["qualityBg" + i], this["itemData" + i].qualityBg),
                            SUI.setTextureAsync(this["pic" + i], this["itemData" + i].icon),
                            SUI.setTextureAsync(this["iconType" + i], this["itemData" + i].typeIcon),
                            this.data["selectCount" + i] > 0 ? this["btnDelete" + i].visible = !0 : this["btnDelete" + i].visible = !1,
                            this.data["selectCount" + i] == this["itemData" + i].num ? this["selectAll" + i].visible = !0 : this["selectAll" + i].visible = !1;
                        this.itemData1.isSelected ? (this.selectAll1.visible = !0, this.btnDelete1.visible = !0, this.groupNum1.visible = !1) : (this.selectAll1.visible = !1, this.btnDelete1.visible = !1, this.groupNum1.visible = !0),
                            this.itemData2.isSelected ? (this.selectAll2.visible = !0, this.btnDelete2.visible = !0, this.groupNum2.visible = !1) : (this.selectAll2.visible = !1, this.btnDelete2.visible = !1, this.groupNum2.visible = !0)
                    }
            }
        },
        e
}(eui.ItemRenderer);
