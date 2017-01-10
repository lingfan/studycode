
var WindowCampBattle = function(t) {
    function e() {
        t.call(this, !0),
            this.portList = {},
            this.msgList = [],
            this.pointCount = 0,
            this.iconSizes = {
                "campBattle_square_high_2.png"
                /*tpa=campBattle_square_high_2.png*/
                : [80, 80],
                "campBattle_square_high_3.png"
                /*tpa=campBattle_square_high_3.png*/
                : [80, 80],
                "campBattle_square_high_0.png"
                /*tpa=campBattle_square_high_0.png*/
                : [80, 80],
                "campBattle_star_high_2.png"
                /*tpa=campBattle_star_high_2.png*/
                : [120, 120],
                "campBattle_star_3.png"
                /*tpa=campBattle_star_3.png*/
                : [120, 120],
                "campBattle_star_2.png"
                /*tpa=campBattle_star_2.png*/
                : [120, 120],
                "campBattle_star_0.png"
                /*tpa=campBattle_star_0.png*/
                : [120, 120],
                "campBattle_circle_high_1.png"
                /*tpa=campBattle_circle_high_1.png*/
                : [60, 70],
                "campBattle_circle_high_0.png"
                /*tpa=campBattle_circle_high_0.png*/
                : [60, 70],
                "campBattle_circle_high_3.png"
                /*tpa=campBattle_circle_high_3.png*/
                : [60, 70],
                "campBattle_headImg_back.png"
                /*tpa=campBattle_headImg_back.png*/
                : [69, 85],
                "campBattle_square_1.png"
                /*tpa=campBattle_square_1.png*/
                : [80, 80],
                "campBattle_square_2.png"
                /*tpa=campBattle_square_2.png*/
                : [80, 80],
                "campBattle_square_3.png"
                /*tpa=campBattle_square_3.png*/
                : [80, 80],
                "campBattle_star_1.png"
                /*tpa=campBattle_star_1.png*/
                : [120, 120],
                "campBattle_circle_0.png"
                /*tpa=campBattle_circle_0.png*/
                : [60, 70],
                "campBattle_circle_2.png"
                /*tpa=campBattle_circle_2.png*/
                : [60, 70],
                "campBattle_baseCenter_2.png"
                /*tpa=campBattle_baseCenter_2.png*/
                : [82, 104],
                "campBattle_square_0.png"
                /*tpa=campBattle_square_0.png*/
                : [80, 80],
                "campBattle_boss_2.png"
                /*tpa=campBattle_boss_2.png*/
                : [123, 61],
                "campBattle_circle_1.png"
                /*tpa=campBattle_circle_1.png*/
                : [60, 70],
                "campBattle_star_high_0.png"
                /*tpa=campBattle_star_high_0.png*/
                : [120, 120],
                "campBattle_circle_high_2.png"
                /*tpa=campBattle_circle_high_2.png*/
                : [60, 70],
                "campBattle_baseCenter_1.png"
                /*tpa=campBattle_baseCenter_1.png*/
                : [81, 107],
                "campBattle_star_high_3.png"
                /*tpa=campBattle_star_high_3.png*/
                : [120, 120],
                "campBattle_star_high_1.png"
                /*tpa=campBattle_star_high_1.png*/
                : [120, 120],
                "campBattle_square_high_1.png"
                /*tpa=campBattle_square_high_1.png*/
                : [80, 80],
                "campBattle_boss_1.png"
                /*tpa=campBattle_boss_1.png*/
                : [123, 61],
                "campBattle_boss_3.png"
                /*tpa=campBattle_boss_3.png*/
                : [123, 61],
                "campBattle_opt_mov.png"
                /*tpa=campBattle_opt_mov.png*/
                : [33, 44],
                "campBattle_circle_3.png"
                /*tpa=campBattle_circle_3.png*/
                : [60, 70],
                "campBattle_opt_atk.png"
                /*tpa=campBattle_opt_atk.png*/
                : [60, 76],
                "campBattle_baseCenter_3.png"
                /*tpa=campBattle_baseCenter_3.png*/
                : [81, 102]
            },
            this.skinName = "resource/eui_skins/ZB_ZhenYingZhanSkin.exml"
            /*tpa=resource/eui_skins/ZB_ZhenYingZhanSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {},
        i.init = function() {
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnClose, this),
                this.btnMenu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnMenu, this),
                this.btnPosition.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnPosition, this),
                this.btnDetect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnDetect, this),
                this.btnDead.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnDead, this),
                this.btnRecord.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnRecord, this),
                SUI.addClickEffect(this.btnRecord),
                this.btnArrange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnArrange, this),
                SUI.addClickEffect(this.btnArrange),
                this.btnRanking.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnRanking, this),
                SUI.addClickEffect(this.btnRanking),
                this.btnIntro.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnIntro, this),
                SUI.addClickEffect(this.btnIntro),
                this.btnChat.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnChat, this),
                SUI.addClickEffect(this.btnChat),
                this.btnAI.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBtnAI, this),
                CampBattleManager.instance,
                this.initMap(),
                this.initUI(),
                this.inited = !0,
                this.btnDetect.icon.source = Path.item_sURL + "icon_s_credit.png",
                this.btnDead.icon.source = Path.item_sURL + "icon_s_credit.png"
        },
        i.updateMorale = function() {
            var t = Locales.get("ui_campBattle_over_shiqiTitle");
            t += ":",
                CampBattleManager.instance.morale >= 70 ? t += "#00f445" : CampBattleManager.instance.morale >= 30 ? t += "#ffff00" : CampBattleManager.instance.morale < 30 && (t += "#ff0000"),
                t += CampBattleManager.instance.morale,
                t += "#/",
                t += CampBattleManager.instance.moraleLmt,
                this.txtShiQi.textFlow = Utils.textFlowByStr(t)
        },
        i.initUI = function() {
            113 == GuideManager.step && GuideManager.nextStep(),
                this.updateUI(),
                this.updateQuickMsg(),
                this.txtTimeDesc.text = Locales.get("ui_campBattle_endTimeTitle"),
                this.txtTime.text = "00:00",
                this.txtDesc.text = Locales.get("ui_campBattle_endTimeReward"),
                this.txtCampTitle.text = Locales.get("ui_campBattle_campTitle"),
                this.txtCampResTitle.text = Locales.get("ui_campBattle_resTitle"),
                this.txtCampPortTitle.text = Locales.get("ui_campBattle_portTitle"),
                this.txtCampName1.text = Locales.get("ui_campBattle_campTitle1"),
                this.txtCampName2.text = Locales.get("ui_campBattle_campTitle2"),
                this.txtCampName3.text = Locales.get("ui_campBattle_campTitle3"),
                this.txtCDDesc.text = Locales.get("ui_campBattle_cdTitle"),
                this.txtCD.text = Locales.get("ui_campBattle_cd", 0),
                this.txtCDDesc.visible = !1,
                this.txtCD.visible = !1,
                this.txtDetect.text = Locales.get("ui_campbattle_detectDesc"),
                this.btnDetect.labelDisplay.text = CampbattlebasedataParser.GetInstance().getDataArr()[0].detectCost.toString(),
                this.txtDead.text = Locales.get("ui_campbattle_bloodDesc"),
                this.txtIntro.text = Locales.get("panel_oilfiled_txt_btn_1"),
                this.txtRecord.text = Locales.get("ui_campBattle_zhanbao"),
                this.txtArrange.text = Locales.get("btn_marine"),
                this.txtRanking.text = Locales.get("ui_mainWorld_rank"),
                this.More.visible = !0,
                this.btnMenu.currentState = this.More.visible ? "close" : "open"
        },
        i.updateEndTime = function(t, e) {
            var a = t.split(".");
            if (this.txtTime.text = a[1] + ":" + a[2], 1 == e) {
                egret.Tween.removeTweens(this.txtTime);
                var i = egret.Tween.get(this.txtTime);
                this.txtTime.textColor = Utils.rgbToColor(255, 39, 41),
                    i.to({
                            alpha: 0
                        },
                        250).to({
                            alpha: 1
                        },
                        250)
            } else this.txtTime.textColor = 16777215;
            if (1 == CampBattleManager.isAutoBattle) {
                this.pointCount = this.pointCount + 1,
                    this.pointCount > 4 && (this.pointCount = 0);
                for (var n = "",
                        s = 0; s < this.pointCount; ++s) n += ".";
                this.btnAI.visible = !0,
                    this.txtAI.visible = !0,
                    this.txtAI.text = Locales.get("ui_campBattle_campLite_AIing") + n
            } else this.btnAI.visible = !1,
                this.txtAI.visible = !1
        },
        i.updateUI = function() {
            this.updateMorale(),
                this.txtZhanGong.text = Locales.get("ui_campBattle_zgRank_zgTitle") + CampBattleManager.instance.score;
            var t = CampBattleManager.instance.serverCampList;
            this.txtCampRes11.text = t[CampBattleManager.JUSTICE].resource,
                this.txtCampRes21.text = t[CampBattleManager.PREDATOR].resource,
                this.txtCampRes31.text = t[CampBattleManager.HONOUR].resource;
            var e = t[CampBattleManager.JUSTICE].portlist.length;
            e > 0 && (e -= 1),
                this.txtCampRes12.text = e.toString(),
                e = t[CampBattleManager.PREDATOR].portlist.length,
                e > 0 && (e -= 1),
                this.txtCampRes22.text = e.toString(),
                e = t[CampBattleManager.HONOUR].portlist.length,
                e > 0 && (e -= 1),
                this.txtCampRes32.text = e.toString();
            var a = CampbattlebasedataParser.GetInstance().getDataArr()[0],
                i = CampBattleManager.instance.bloodUseTimes * a.bloodCostPlus + a.bloodCost;
            this.btnDead.labelDisplay.text = i.toString(),
                CampBattleManager.instance.bloodTimes > 0 ? (this.txtDead.text = Locales.get("ui_campbattle_bloodTimeDesc", CampBattleManager.instance.bloodTimes + "/" + a.bloodTimes), this.btnDead.enabled = !1) : (this.txtDead.text = Locales.get("ui_campbattle_bloodDesc"), this.btnDead.enabled = !0);
            var n = CampbattlemapdataParser.GetInstance().getItemById(CampBattleManager.instance.getCurrentPositionData().baseData.id).name_l;
            this.txtPosition.text = Locales.get("currentPort", n)
        },
        i.updateDetectTime = function(t) {
            if (t > 0) {
                if (10 > t) {
                    this.txtDetect.textColor = 16711680,
                        egret.Tween.removeTweens(this.txtDetect);
                    var e = egret.Tween.get(this.txtDetect);
                    e.to({
                            alpha: 0
                        },
                        250).to({
                            alpha: 1
                        },
                        250)
                } else this.txtDetect.textColor = 16777215;
                this.btnDetect.enabled = !1,
                    this.txtDetect.text = Locales.get("ui_campbattle_detectTimeDesc", t)
            } else this.btnDetect.enabled = !0,
                this.txtDetect.text = Locales.get("ui_campbattle_detectDesc"),
                this.txtDetect.textColor = 16777215
        },
        i.updateCDTime = function(t) {
            if (0 >= t) return this.txtCD.visible = !1,
                void(this.txtCDDesc.visible = !1);
            if (this.txtCD.visible = !0, this.txtCDDesc.visible = !0, this.txtCD.text = Locales.get("ui_campBattle_cd", t), 10 > t) {
                egret.Tween.removeTweens(this.txtCD);
                var e = egret.Tween.get(this.txtCD);
                e.to({
                        alpha: 0
                    },
                    250).to({
                        alpha: 1
                    },
                    250)
            }
        },
        i.initMap = function() {
            this.mapLayer = new eui.Group,
                this.scvMap = new ScrollerEx,
                this.scvMap.bounces = !1,
                this.scvMap.width = this.mapContainer.width,
                this.scvMap.height = this.mapContainer.height,
                this.mapLayer.width = 1500,
                this.mapLayer.height = 1200,
                this.scvMap.viewport = this.mapLayer,
                this.mapContainer.addChild(this.scvMap);
            var t = new eui.Image;
            SUI.setTextureAsync(t, Path.campBattleUrl + "campBattle_bg_map.jpg"),
                this.mapLayer.addChild(t),
                this.updatePortList(),
                Utils.delayCall(500,
                    function() {
                        CampBattleManager.instance.moveToCurrentPosition()
                    })
        },
        i.onClickPort = function(t) {
            var e = t.currentTarget;
            if (CampBattleManager.instance.checkCanOpt(e.optData.baseData.id) && e.optData.baseData.portType != CampBattleManager.PORT_CENTER) {
                Log.logZDY("XXXXXXXXXXX." + e.optData.baseData.id + ",camp." + e.optData.camp);
                var a = null;
                a = e.optData.serverData && e.optData.camp != UserData.getInstance().getCamp() && 0 != e.optData.camp && e.optData.camp ? CampBattleManager.OPT_ATK : CampBattleManager.OPT_MOV,
                    CampBattleManager.instance.moveAndAtkPort(e.optData, a)
            }
        },
        i.updatePortList = function() {
            var t = this,
                e = CampBattlePortOptData.getPortList(),
                a = null,
                i = "circle",
                n = 0,
                s = 18,
                r = 0,
                o = CampBattleManager.instance.bossList;
            for (var l in e) {
                var h = e[l],
                    c = null;
                null == this.portList[l] ? (c = new eui.Group, this.portList[l] = c, this.mapLayer.addChild(c), c.touchEnabled = !0, c.touchChildren = !1, c.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickPort, this)) : c = this.portList[l],
                    Utils.setPosition(c, h.baseData.position[0] + 750, h.baseData.position[1] + 600),
                    c.optData = h,
                    r = null != h.serverData ? h.serverData.playernum : 0,
                    CampBattleManager.PORT_CENTER == h.baseData.portType ? (i = "baseCenter", s = 24) : CampBattleManager.PORT_ARMY == h.baseData.portType ? (i = "square", s = 18) : CampBattleManager.PORT_OIL == h.baseData.portType ? (i = "star", s = 24) : CampBattleManager.PORT_NORMAL == h.baseData.portType && (i = "circle", s = 18),
                    n = h.camp;
                var d = "campBattle_" + i + "_" + n + ".png";
                a = Path.campBattleUrl + "campBattleSceneLite/" + d;
                var g = this.iconSizes[d];
                if (a != c.iconURL || !c.icon) {
                    Utils.removeNode(c.icon),
                        c.iconURL = a;
                    var u = new eui.Image;
                    c.icon = u,
                        u.width = g.width,
                        u.height = g.height,
                        u.anchorOffsetX = .5 * g[0] - 5,
                        u.anchorOffsetY = .5 * g[1] + 5,
                        SUI.setTextureAsync(u, a),
                        c.addChild(u)
                }
                var p = CampBattleManager.COLOR_LIST[n];
                if (null == c.portName) {
                    var m = CampbattlemapdataParser.GetInstance().getItemById(h.baseData.id).name_l,
                        _ = new eui.Label(m);
                    c.portName = _,
                        _.size = s,
                        _.textAlign = egret.HorizontalAlign.CENTER,
                        _.verticalAlign = egret.VerticalAlign.MIDDLE,
                        _.textColor = p,
                        _.fontFamily = Const.DEFAULT_FONT,
                        _.height = 35.7,
                        _.anchorOffsetX = _.width / 2,
                        _.anchorOffsetY = _.height / 2,
                        _.y = c.icon.y + g[1] / 2,
                        _.bold = !0,
                        _.strokeColor = 0,
                        _.stroke = 2,
                        c.addChild(c.portName)
                }
                if (c.portName.textColor = p, !c.portNum) {
                    var v = new eui.Label("0");
                    c.portNum = v,
                        v.size = s,
                        v.textAlign = egret.HorizontalAlign.CENTER,
                        v.verticalAlign = egret.VerticalAlign.MIDDLE,
                        v.textColor = Utils.rgbToColor(255, 192, 0),
                        v.fontFamily = Const.DEFAULT_FONT,
                        v.height = 35.7,
                        v.anchorOffsetX = v.width / 2,
                        v.anchorOffsetY = v.height / 2,
                        v.x = c.portName.x,
                        v.y = c.portName.y + c.portName.height / 2 + 5,
                        v.bold = !0,
                        v.strokeColor = 0,
                        v.stroke = 2,
                        c.addChild(c.portNum)
                }
                if (Math.floor(r) <= 0 && (r = 0), CampBattleManager.instance.detectTime > 0 ? (c.portNum.text = r.toString(), c.portNum.visible = !0) : UserData.getInstance().getCamp() == h.camp && h.baseData.portType != CampBattleManager.PORT_CENTER ? (c.portNum.text = r.toString(), c.portNum.visible = !0) : c.portNum.visible = !1, null != c.optData.preCamp && c.optData.preCamp != c.optData.camp) {
                    Log.logZDY("////////////////preCamp." + c.optData.preCamp + ",camp." + c.optData.camp);
                    var f = Path.campBattleUrl + "campBattle_capture.json",
                        I = Path.campBattleUrl + "campBattle_capture.png";
                    SUI.loadMovieClip(f, I, c,
                        function(t) {
                            t.width = GameData.designWidth,
                                t.height = GameData.designHeight,
                                t.y = -50,
                                t.gotoAndPlay(0, 1),
                                t.addEventListener(egret.Event.COMPLETE,
                                    function() {
                                        Utils.removeNode(t)
                                    },
                                    void 0)
                        },
                        this)
                }
                Utils.removeNode(c.optTypeGroup),
                    delete c.optTypeGroup;
                var T = c.optData.checkCanOpt();
                if (null != T && h.baseData.portType != CampBattleManager.PORT_CENTER) {
                    c.optData.preCamp != c.optData.camp && c.canOpt && (Utils.removeNode(c.canOpt), c.canOpt = null);
                    var y = 0,
                        D = 0,
                        P = "",
                        C = 0,
                        E = new eui.Group,
                        S = new eui.Image;
                    E.addChild(S),
                        c.optTypeGroup = E,
                        c.addChild(c.optTypeGroup);
                    var b = [0, 0];
                    T == CampBattleManager.OPT_ATK ? (y = -2, C = Utils.rgbToColor(255, 39, 41), P = Locales.get("ui_campBattle_opt_atk_name"), SUI.setTextureAsync(S, Path.campBattleUrl + "campBattleSceneLite/campBattle_opt_mov.png"), b = this.iconSizes["campBattle_opt_mov.png"
                            /*tpa=campBattle_opt_mov.png*/
                        ]) : T == CampBattleManager.OPT_MOV && (y = -2, C = Utils.rgbToColor(255, 222, 69), P = Locales.get("ui_campBattle_opt_mov_name"), SUI.setTextureAsync(S, Path.campBattleUrl + "campBattleSceneLite/campBattle_opt_mov.png"), b = this.iconSizes["campBattle_opt_mov.png"
                            /*tpa=campBattle_opt_mov.png*/
                        ]),
                        E.width = b[0],
                        E.height = b[1],
                        E.anchorOffsetX = .5 * E.width,
                        E.anchorOffsetY = .5 * E.height,
                        Utils.setPosition(c.optTypeGroup, c.icon.x + y, c.icon.y - g[1] / 2 - D - 10);
                    var L = E.y,
                        M = egret.Tween.get(c.optTypeGroup, {
                            loop: !0
                        });
                    M.to({
                            y: L - 20
                        },
                        500, egret.Ease.quadOut).to({
                            y: L
                        },
                        500, egret.Ease.quartIn);
                    var w = new eui.Label(P);
                    if (w.size = 18, w.textAlign = egret.HorizontalAlign.CENTER, w.verticalAlign = egret.VerticalAlign.MIDDLE, w.textColor = C, w.fontFamily = Const.DEFAULT_FONT, w.height = 35.7, w.anchorOffsetX = .5 * w.width, w.anchorOffsetY = w.height, w.x = .5 * b[0], w.y = 10, w.bold = !0, w.strokeColor = 0, w.stroke = 2, E.addChild(w), null == c.canOpt) {
                        var x = new eui.Image,
                            A = this.iconSizes["campBattle_" + i + "_high_" + n + ".png"];
                        SUI.setTextureAsync(x, Path.campBattleUrl + "campBattleSceneLite/campBattle_" + i + "_high_" + n + ".png"),
                            x.anchorOffsetX = A[0] / 2 - 5,
                            x.anchorOffsetY = A[1] / 2 + 5,
                            c.canOpt = x;
                        var k = egret.Tween.get(c.canOpt, {
                            loop: !0
                        });
                        k.to({
                                    alpha: 0
                                },
                                500).to({
                                    alpha: 1
                                },
                                500),
                            c.addChild(c.canOpt)
                    }
                } else c.canOpt && (Utils.removeNode(c.canOpt), delete c.canOpt);
                for (var B = null,
                        R = 0,
                        U = o; R < U.length; R++) {
                    var G = U[R];
                    G.port && h.baseData.id == Math.floor(G.port) && (B = G)
                }
                if (c.boss && (delete c.boss.name, delete c.boss.back, delete c.boss.timeLeft, Utils.removeNode(c.boss), delete c.boss), null != B) {
                    var G = new eui.Group;
                    c.boss = G,
                        c.addChild(c.boss);
                    CampbattlenpcdataParser.GetInstance().getItemById(B.id);
                    c.boss.back = new eui.Image;
                    var O = this.iconSizes["campBattle_boss_" + B.camp + ".png"];
                    SUI.setTextureAsync(c.boss.back, Path.campBattleUrl + "campBattleSceneLite/campBattle_boss_" + B.camp + ".png"),
                        c.boss.back.anchorOffsetX = .5 * O.width,
                        c.boss.back.anchorOffsetX = .5 * O.height,
                        c.boss.back.x = 5,
                        c.boss.addChild(c.boss.back);
                    var N = new eui.Label(B.name_l);
                    N.size = 18,
                        N.textAlign = egret.HorizontalAlign.CENTER,
                        N.verticalAlign = egret.VerticalAlign.MIDDLE,
                        N.textColor = p,
                        N.fontFamily = Const.DEFAULT_FONT,
                        N.height = 35.7,
                        N.anchorOffsetX = .5 * N.width,
                        N.anchorOffsetY = .5 * N.height,
                        N.y = -O[1] / 2,
                        N.bold = !0,
                        N.strokeColor = 0,
                        N.stroke = 2,
                        c.boss.addChild(N),
                        c.boss.name = N;
                    var H = new eui.Label("");
                    H.size = 22,
                        H.textAlign = egret.HorizontalAlign.CENTER,
                        H.verticalAlign = egret.VerticalAlign.MIDDLE,
                        H.textColor = Utils.rgbToColor(255, 235, 15),
                        H.fontFamily = Const.DEFAULT_FONT,
                        H.height = 35.7,
                        H.anchorOffsetX = .5 * H.width,
                        H.anchorOffsetY = .5 * H.height,
                        H.y = -O[1] / 2 - 20,
                        c.boss.addChild(H),
                        c.boss.timeLeft = H,
                        c.boss.addChild(c.boss.timeLeft)
                }
                c.optData.preCamp = c.optData.camp
            }
            if ((!this.currentPortLite || this.currentPortLite.optData && this.currentPortLite.optData.baseData.id != CampBattleManager.instance.currentPortId) && (this.currentPortLite && this.currentPortLite.myPoint && (Utils.removeNode(this.currentPortLite.headImgBack), dragonBones.WorldClock.clock.remove(this.currentPortLite.myPointArmature), Utils.removeNode(this.currentPortLite.myPoint), Utils.removeNode(this.currentPortLite.headImg), Utils.removeNode(this.currentPortLite.headEffect), delete this.currentPortLite.headEffect), this.currentPortLite = this.portList[CampBattleManager.instance.currentPortId], this.currentPortLite)) {
                var W = Path.campBattleUrl + "mypoint/lightcircle.json",
                    F = Path.campBattleUrl + "mypoint/texture.png",
                    V = Path.campBattleUrl + "mypoint/texture.json";
                ResLoader.instance.preLoadResList([F, V, W],
                        function(e) {
                            var a = e[0],
                                i = e[1],
                                n = e[2],
                                s = new dragonBones.EgretFactory;
                            s.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(n)),
                                s.addTextureAtlas(new dragonBones.EgretTextureAtlas(a, i));
                            var r = s.buildArmature("Stage");
                            dragonBones.WorldClock.clock.add(r),
                                r.animation.gotoAndPlay("newAnimation"),
                                t.currentPortLite.addChildAt(r.display, 0),
                                t.currentPortLite.myPoint = r.display,
                                t.currentPortLite.myPointArmature = r
                        },
                        this),
                    this.currentPortLite.headImgBack = new eui.Image;
                var q = this.iconSizes["campBattle_headImg_back.png"
                        /*tpa=campBattle_headImg_back.png*/
                    ],
                    Y = this.currentPortLite.iconURL.replace(Path.campBattleUrl + "campBattleSceneLite/", ""),
                    j = this.iconSizes[Y];
                SUI.setTextureAsync(this.currentPortLite.headImgBack, Path.campBattleUrl + "campBattleSceneLite/campBattle_headImg_back.png"),
                    this.currentPortLite.optData.baseData.portType != CampBattleManager.PORT_CENTER ? Utils.setPosition(this.currentPortLite.headImgBack, this.currentPortLite.icon.x, this.currentPortLite.icon.y - j[1]) : Utils.setPosition(this.currentPortLite.headImgBack, this.currentPortLite.icon.x, this.currentPortLite.icon.y - j[1] + 40),
                    this.currentPortLite.headImgBack.anchorOffsetX = .5 * q[0],
                    this.currentPortLite.headImgBack.anchorOffsetY = .5 * q[1],
                    this.currentPortLite.addChildAt(this.currentPortLite.headImgBack, 1),
                    this.currentPortLite.headImg = new eui.Image;
                var z = parseInt(UserData.getInstance().getCamp() + "0" + UserData.getInstance().getHead());
                SUI.setTextureAsync(this.currentPortLite.headImg, Path.GetHeadPicUrl(z, 1),
                        function(e) {
                            t.currentPortLite.headImg.anchorOffsetX = .5 * e.textureWidth,
                                t.currentPortLite.headImg.anchorOffsetY = .5 * e.textureHeight
                        },
                        this),
                    Utils.setScale(this.currentPortLite.headImg, .6),
                    Utils.setPosition(this.currentPortLite.headImg, this.currentPortLite.headImgBack.x - 1, this.currentPortLite.headImgBack.y - 10),
                    this.currentPortLite.addChildAt(this.currentPortLite.headImg, 2)
            }
            this.processBlood(),
                this.updateBossLeftTime()
        },
        i.processBlood = function() {
            var t = this;
            if (this.currentPortLite && (Utils.removeNode(this.currentPortLite.headEffect), delete this.currentPortLite.headEffect, CampBattleManager.instance.bloodTimes > 0)) {
                var e = Path.campBattleUrl + "campBattle_bloodEffect.json",
                    a = Path.campBattleUrl + "campBattle_bloodEffect.png";
                this.currentPortLite;
                SUI.loadMovieClip(e, a, this.currentPortLite,
                    function(e) {
                        CampBattleManager.instance.bloodTimes > 0 ? (t.currentPortLite.addChildAt(e, 0), e.width = GameData.designWidth, e.height = GameData.designHeight, e.y = t.currentPortLite.headImgBack.y - 25, t.currentPortLite.headEffect = e) : (Utils.removeNode(e), delete t.currentPortLite.headEffect)
                    },
                    this)
            }
        },
        i.updateBossLeftTime = function() {
            for (var t = CampBattleManager.instance.bossList,
                    e = 0,
                    a = t; e < a.length; e++) {
                var i = a[e];
                if (i.id > 0) {
                    var n = this.portList[i.port];
                    if (n) {
                        var s = i.cd - UserData.getInstance().getOldServerTime() / 1e3;
                        i.cd > 0 && s > 0 ? n.boss && n.boss.timeLeft && (n.boss.timeLeft.visible = !0, n.boss.timeLeft.text = GlobalFunction.getHMSBySecond(s)) : n.boss && n.boss.timeLeft && (n.boss.timeLeft.visible = !1)
                    }
                }
            }
        },
        i.update = function() {
            CampBattleManager.needPosition && (CampBattleManager.needPosition = !1, this.moveToCurrentPosition())
        },
        i.moveToCurrentPosition = function(t) {
            var e = this.portList[CampBattleManager.instance.currentPortId],
                a = e.x,
                i = e.y;
            a -= .5 * this.scvMap.width,
                i -= .5 * this.scvMap.height;
            var n = t ? 0 : 200;
            this.scvMap.scrollXY(a, i, 1500, 1200, n)
        },
        i.processDetect = function() {
            this.updatePortList()
        },
        i.setQuickMsg = function(t) {
            this.msgList.push(t),
                this.msgList.length > 4 && this.msgList.shift(),
                this.updateQuickMsg()
        },
        i.updateQuickMsg = function() {
            for (var t = 0; 4 > t; ++t) {
                var e = this["record" + (t + 1)];
                t < this.msgList.length ? (e.visible = !0, e.text = this.msgList[t]) : e.visible = !1
            }
        },
        i.OnClickBtnClose = function(t) {
            this.close()
        },
        i.OnClickBtnMenu = function(t) {
            this.More.visible = !this.More.visible,
                this.btnMenu.currentState = this.More.visible ? "close" : "open"
        },
        i.OnClickBtnPosition = function(t) {
            this.moveToCurrentPosition()
        },
        i.OnClickBtnDetect = function(t) {
            CampBattleManager.instance.buyDetect()
        },
        i.OnClickBtnDead = function(t) {
            CampBattleManager.instance.buyBlood()
        },
        i.OnClickBtnRecord = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.CampBattleReports)
        },
        i.OnClickBtnAI = function(t) {
            GameAlert.getInstance().show(Locales.get("ui_campBattle_campLite_alert_content"), Locales.get("ui_campBattle_campLite_cancelAI"),
                function() {
                    RequestManager.GetInstance().setAI(!1)
                },
                void 0, Locales.get("panel_retired_btn_blue"))
        },
        i.OnClickBtnArrange = function(t) {
            WindowManager.getInstance().needShowWindow = !0,
                RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceGetTactic, null, !0)
        },
        i.OnClickBtnRanking = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.CampBattleRankingList)
        },
        i.OnClickBtnIntro = function(t) {
            var e = Locales.get("ui_campBattle_desc_title"),
                a = Locales.get("ui_campBattle_desc_content1");
            QiJvTouAlert.getInstance().showTxtDescPage(e, a)
        },
        i.OnClickBtnChat = function(t) {
            WindowManager.getInstance().show(WindowManager.windowType.Chat)
        },
        i.clear = function() {
            CampBattleManager.needOpen = !1,
                this.currentPortLite && this.currentPortLite.myPointArmature && dragonBones.WorldClock.clock.remove(this.currentPortLite.myPointArmature);
            var t = Path.campBattleUrl + "mypoint/lightcircle.json",
                e = Path.campBattleUrl + "mypoint/texture.png",
                a = Path.campBattleUrl + "mypoint/texture.json";
            ResLoader.instance.unloadResList([t, e, a])
        },
        e
}(WindowBase);
