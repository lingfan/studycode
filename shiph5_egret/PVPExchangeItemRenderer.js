
var PVENormalBattleItemRenderer = function(t) {
    function e() {
        t.call(this),
            this.exp = 0,
            this.gold = 0,
            this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.OnRemoveFromStage, this),
            EventManager.instance.addEventListener(EventTypes.EVENT_REFRESH_PVE_LEVEL_ITEM, this.OnRefresh, this),
            EventManager.instance.addEventListener(EventTypes.PVE_ATTACK_TIMES_UPDATE, this.OnRefresh, this),
            this.skinName = "resource/eui_skins/item/zhanyi_Bar2Skin.exml"
            /*tpa=resource/eui_skins/item/zhanyi_Bar2Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.onComplete = function() {},
        i.OnRemoveFromStage = function(t) {
            EventManager.instance.removeEventListener(EventTypes.EVENT_REFRESH_PVE_LEVEL_ITEM, this.OnRefresh, this),
                EventManager.instance.removeEventListener(EventTypes.PVE_ATTACK_TIMES_UPDATE, this.OnRefresh, this),
                this._arrow && (Utils.removeNode(this._arrow.display), dragonBones.WorldClock.clock.remove(this._arrow), this._arrow = void 0)
        },
        i.OnRefresh = function() {
            this.data && this.dataChanged()
        },
        i.dataChanged = function() {
            var t = this,
                e = this.data.userData,
                a = this.data.campaignId,
                i = e.serverData,
                n = e.isLock,
                s = e.baseData;
            this.txtLevel.text = this.data.index.toString(),
                (12 == GuideManager.step || 28 == GuideManager.step) && GuideManager.nextStep(),
                SUI.setTextureAsync(this.imgBg, Path.PVEIconUrl + "guanka_bar_" + ((a - 1) % 17 + 1) + ".jpg"),
                SUI.setTextureAsync(this.imgLvBg, Path.PVEIconUrl + "icon_zhanyi_" + e.baseData.type + ".png");
            for (var r = 1; 3 >= r; ++r) {
                var o = this["imgStar" + r];
                e.serverData && e.serverData.star >= r ? o.texture = RES.getRes(Path.resHeadUrl + "icon_yinxingxing_png") : o.texture = RES.getRes(Path.resHeadUrl + "icon_anxingxing_png")
            }
            MainWorldManager.instance.allLastList[MainWorldManager.instance.allLastList.length - 1];
            if (e.serverData) this._arrow && (Utils.removeNode(this._arrow.display), dragonBones.WorldClock.clock.remove(this._arrow), this._arrow = void 0);
            else if (this._arrow) this._arrow.display.x = this.btnGoto.x - 20.5,
                this._arrow.display.y = this.btnGoto.y + 37.5;
            else {
                var l = Path.effectUrl + "arrowshine/arrowshine.json",
                    h = Path.effectUrl + "arrowshine/texture.json",
                    c = Path.effectUrl + "arrowshine/texture.png";
                Utils.createDragonBone(l, h, c, "arrowshine", "normal",
                    function(e, a) {
                        e && !t.data.userData.serverData && (t._arrow || (t.addChild(e.display), e.display.x = t.btnGoto.x - 20.5, e.display.y = t.btnGoto.y + 37.5, e.animation.timeScale = .8, t._arrow = e))
                    },
                    this)
            }
            if (MainWorldManager.instance.isShowDropInfo) {
                this.gpInfo.visible = !1,
                    this.gpDrop.visible = !0;
                for (var d = [s.showItem1, s.showItem2], r = 0; r < d.length; ++r) {
                    var g = this["item" + (r + 1)],
                        u = d[r];
                    if (u.length >= 2) {
                        g.visible = !0;
                        var p = GlobalFunction.getDropDataByTypeAndId(u[0], u[1]);
                        SUI.setItemIcon(g, p)
                    } else g.visible = !1
                }
                var m = s,
                    _ = MilitaryrankParser.GetInstance().getItemByField("id", UserData.getInstance().getMilitaryranktype()),
                    v = 2 * m.exp,
                    f = 2 * m.gold,
                    I = 0,
                    T = 0;
                if (_)
                    for (var y = _.privilege,
                            D = 0,
                            P = y; D < P.length; D++) {
                        var C = P[D],
                            E = MilitaryrightsParser.GetInstance().getItemById(C);
                        1 == E.righttype && (1 == E.numtype ? I += v * E.num / 1e3 : 2 == E.numtype && (I += E.num)),
                            10 == E.righttype && (1 == E.numtype ? T += f * E.num / 1e3 : 2 == E.numtype && (T += E.num))
                    }
                for (var S = 0,
                        b = [], L = 0, M = GuildManager.getInstance().GuildScienceList; L < M.length; L++) {
                    var w = M[L];
                    b.push({
                        basedata: GuildscienceParser.GetInstance().getItemById(w.id),
                        data: w.level
                    })
                }
                var x = null;
                b[1] && (x = GuildsciencedataParser.GetInstance().getItemById(b[1].data));
                var A = 0;
                x && (A = f * x["guildscience" + b[1].basedata.id + "Effect"] / 1e4),
                    x = null,
                    null != b[2] && (x = GuildsciencedataParser.GetInstance().getItemById(b[2].data));
                var k = 0;
                x && (k = v * x["guildscience" + b[2].basedata.id + "Effect"] / 1e4),
                    I = Math.ceil(I + S + k),
                    T = Math.ceil(T + A),
                    this.txtExp.text = I.toString(),
                    this.txtGold.text = T.toString()
            } else {
                if (this.gpInfo.visible = !0, this.gpDrop.visible = !1, this.txtName.text = s.name_l, this.txtOil.text = s.costOil.toString(), -1 == s.dayAtkCount) this.txtBattleTimes.text = Locales.get("panel_stageselect_normal_noLimit");
                else {
                    var B = i ? i.todayCount : 0,
                        R = s.dayAtkCount - B;
                    this.txtBattleTimes.text = Locales.get("panel_stageselect_normal_fightNum", R + "/" + s.dayAtkCount)
                }
                if (i)
                    if (0 != s.resetCount && i.todaybuyCnt < s.resetCount) {
                        var B = i.todayCount;
                        s.dayAtkCount - B != 0 ? this.txtBattle.text = Locales.get("panel_stageselect_normal_fightBtn") : this.txtBattle.text = Locales.get("panel_stageselect_normal_fightBtn_2")
                    } else this.txtBattle.text = Locales.get("panel_stageselect_normal_fightBtn");
                else this.txtBattle.text = Locales.get("panel_stageselect_normal_fightBtn");
                0 == n && (!i || i.star <= 0)
            }
        },
        e
}(eui.ItemRenderer);
