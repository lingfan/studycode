
var PVEMAPAreaRenderer = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onClear, this),
            this._arrowIcons = [],
            this.skinName = "resource/eui_skins/itemrenders/pveMapItemSkin.exml"
            /*tpa=resource/eui_skins/itemrenders/pveMapItemSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onClear = function() {
            EventManager.instance.removeEventListener(EventTypes.PVE_CHOOSE_CAMPAIGN, this.updateLight, this)
        },
        i.onComplete = function() {
            for (var t = 1; 4 >= t; ++t) {
                var e = this["ctlLv" + t],
                    a = e.imgIcon;
                a.myUserIndex = t,
                    a.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCampaignIcon, this),
                    SUI.addClickEffect(a)
            }
            EventManager.instance.addEventListener(EventTypes.PVE_CHOOSE_CAMPAIGN, this.updateLight, this)
        },
        i.OnClickCampaignIcon = function(t) {
            var e = t.currentTarget,
                a = e.myUserIndex - 1;
            if (this.data) {
                var i = this.data.userData,
                    n = StageDataLib.instance.getCampaignListByArea(i.id),
                    s = n[a];
                MainWorldManager.instance.chooseCampaignId = s,
                    EventManager.instance.dispatchEvent(EventTypes.EVENT_CHOOSE_CAMPAIGN, s)
            }
        },
        i.updateLight = function() {
            for (var t = this.data.userData,
                    e = StageDataLib.instance.getCampaignListByArea(t.id), a = 0, i = e.length; i > a; ++a) {
                var n = e[a],
                    s = (CampaigndataParser.GetInstance().getItemById(n), this["ctlLv" + (a + 1)]),
                    r = s.imgLight;
                if (MainWorldManager.instance.chooseCampaignId == n) {
                    if (!r.visible) {
                        r.visible = !0,
                            egret.Tween.removeTweens(r);
                        var o = r.rotation,
                            l = egret.Tween.get(r, {
                                loop: !0
                            });
                        l.to({
                                rotation: o + 360
                            },
                            3e3)
                    }
                } else egret.Tween.removeTweens(r),
                    r.visible = !1
            }
        },
        i.dataChanged = function() {
            var t = this.data.type,
                e = this.data.userData,
                a = StageDataLib.instance.getCampaignListByArea(e.id);
            this.txtTitle.text = e.name_l;
            for (var i = 0,
                    n = a.length; n > i; ++i) {
                for (var s = a[i], r = CampaigndataParser.GetInstance().getItemById(s), o = this["ctlLv" + (i + 1)], l = o.txtTitle, h = o.imgLight, c = o.imgIcon, d = o.imgGrayStar, g = [], u = 1; 3 >= u; ++u) g.push(o["imgStar" + u]);
                var p = o.txtStarNum;
                if (t == MainWorldManager.BATTLE_TYPE_NORMAL)
                    if (r.id <= MainWorldManager.instance.getCurrentCampaign()) {
                        l.visible = !0,
                            l.text = r.name_l,
                            h.visible = !1,
                            d.visible = !0;
                        for (var m = 0,
                                _ = g; m < _.length; m++) {
                            var v = _[m];
                            v.visible = !1
                        }
                        var f = StageDataLib.instance.getAreaAllStarByCampaign(s);
                        f.getStar >= f.totalStar ? p.textColor = 16776960 : p.textColor = 16777215,
                            p.text = "{0}/{1}".format(f.getStar, f.totalStar),
                            SUI.setTextureAsync(c, Path.GetCampaignIconUrl(s)),
                            c.touchEnabled = !0
                    } else {
                        SUI.setTextureAsync(c, Path.GetCampaignIconUrl(s, !0)),
                            c.touchEnabled = !1,
                            l.visible = !1,
                            h.visible = !1,
                            d.visible = !1,
                            p.text = "";
                        for (var I = 0,
                                T = g; I < T.length; I++) {
                            var v = T[I];
                            v.visible = !1
                        }
                    }
                else {
                    var y = StageSpecialDataLib.instance.getDataByCampaignId(s),
                        D = MainWorldManager.instance.getSpecialList()[r.id];
                    if (D) {
                        l.visible = !0,
                            l.text = y.name_l,
                            h.visible = !1,
                            d.visible = !1,
                            p.text = "";
                        for (var P = 0; 3 > P; ++P) g[P].visible = !1;
                        if (D.serverData)
                            for (var C = 0; C < D.serverData.star; ++C) g[C].visible = !0;
                        SUI.setTextureAsync(c, Path.GetCampaignIconUrl(s)),
                            c.touchEnabled = !0
                    } else {
                        SUI.setTextureAsync(c, Path.GetCampaignIconUrl(s, !0)),
                            c.touchEnabled = !1,
                            l.visible = !1,
                            h.visible = !1,
                            d.visible = !1,
                            p.text = "";
                        for (var E = 0,
                                S = g; E < S.length; E++) {
                            var v = S[E];
                            v.visible = !1
                        }
                    }
                }
                this.updateLight(),
                    SUI.setTextureAsync(this.imgBg, Path.GetCampaignAreaMapUrl(e.id)),
                    o.x = .5 * this.imgBg.width + r.iconX / 1.78125 - .5 * o.width,
                    o.y = .5 * this.imgBg.height + r.iconY / (640 / 361) - .5 * o.height
            }
        },
        e
}(eui.ItemRenderer);
