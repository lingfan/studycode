
var GuideManager = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.initStep = function() {
            var e = UserData.getInstance().getGuidestep();
            t.initBool ? e >= 40 && (t.guideComplete = !0) : (t.step = e, t.initBool = !0, 40 > e && t.nextStep(e), UserData.getInstance().guide_array && (t.skillGuideBool = 1 == UserData.getInstance().guide_array[0], t.partGuideBool = 1 == UserData.getInstance().guide_array[1], t.bujiGuideBool = 1 == UserData.getInstance().guide_array[2], t.reShipGuideBool = 1 == UserData.getInstance().guide_array[3], t.techGuideBool = 1 == UserData.getInstance().guide_array[4], t.trainGuideBool = 1 == UserData.getInstance().guide_array[5], t.juntuanGuideBool = 1 == UserData.getInstance().guide_array[6], t.mergeGuideBool = 1 == UserData.getInstance().guide_array[7], t.jungongGuideBool = 1 == UserData.getInstance().guide_array[8], t.merge2GuideBool = 1 == UserData.getInstance().guide_array[9]))
        },
        t.setGuideSetpArray = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGuideSave);
            e.guidestep = t,
                Transport.instance.send(e)
        },
        t.setGuideStep = function(t) {
            var e = Transport.getPkg(ProtocolMgr.ID_DceGuideStep);
            e.guidestep = t,
                Transport.instance.send(e)
        },
        t.nextStep = function(e) {
            e ? t.step = e : t.step++;
            var a = t.step;
            if (a)
                if (Main.trace("new guide >>>>> ", a), t.clearMask(), 1 == a) MainUI.instance.bottomUI.showPveByForce(),
                    Utils.delayCall(1e3,
                        function() {
                            BattleManager.instance.sendMainBattleStart(100101),
                                EventManager.instance.dispatchEvent(EventTypes.MAINWORLD_BAKE, {
                                    type: 1,
                                    id: 2
                                }),
                                t.showGuideInfo("demo_girl_words_3")
                        });
                else if (2 == a) BattleManager.instance.startBattle(!0),
                t.setGuideStep(4);
            else if (3 == a || 15 == a || 31 == a) t.createMaskTarget(450, 730, 100, 50, -90, 15, -30),
                t.createParticleRec(420, 745, 160, 70);
            else if (4 == a) t.showGuideInfo("onStep01_1");
            else if (5 == a) t.createMaskTarget(460, 300, 200, 150, -90, -60, -105),
                t.createParticleRec(360, 340, 270, 125);
            else if (6 == a) t.createMaskTarget(500, 200, 120, 30, 90, 100, 12),
                t.createParticleRec(475, 178, 160, 70);
            else if (7 == a) t.setGuideStep(7),
                t.showGuideInfo("onStep05");
            else if (8 == a) t.createMaskTarget(120, 900, 80, 50, -90, 20, -85),
                t.createParticleRec(105, 861, 115, 100);
            else if (9 == a) t.createMaskTarget(210, 80, 130, 70, 90, 110, 20),
                t.createParticleRec(188, 55, 175, 115);
            else if (10 == a) t.createMaskTarget(500, 140, 100, 30, 90, 110, 8),
                t.createParticleRec(475, 115, 160, 70);
            else if (11 == a) t.setGuideStep(11),
                egret.setTimeout(function() {
                        MainUI.instance.bottomUI.showHomeByForce(),
                            t.showGuideInfo("onStep09")
                    },
                    this, 1e3),
                MainUI.instance.changeTopMode(topUIMode.normal);
            else if (12 == a) t.createMaskTarget(240, 900, 60, 50, -90, 18, -85),
                t.createParticleRec(212, 861, 115, 100);
            else if (13 == a) t.createMaskTarget(0, 450, 640, 60, -90, 20, -130),
                t.createParticleRec(-3, 415, 640, 125);
            else if (14 == a) t.setGuideStep(16);
            else if (16 == a) GameData.skipShipGuide ? t.showGuideInfo("tutorial_new_1") : t.showGuideInfo("onStep16");
            else if (17 == a) GameData.skipShipGuide ? this.nextStep(21) : (t.createMaskTarget(450, 900, 60, 50, -90, 15, -85), t.createParticleRec(423, 861, 115, 100));
            else if (18 == a) t.createMaskTarget(0, 340, 640, 120, -90, 20, -115),
                t.createParticleRec(1, 345, 635, 163);
            else if (19 == a) t.setGuideStep(21);
            else if (20 == a) MainUI.instance.bottomUI.showHomeByForce(),
                t.showGuideInfo("onStep20");
            else if (21 == a) t.createMaskTarget(460, 300, 200, 150, -90, -60, -105),
                t.createParticleRec(360, 340, 270, 125);
            else if (22 == a) t.createMaskTarget(500, 200, 120, 30, 90, 100, 12),
                t.createParticleRec(475, 178, 160, 70);
            else if (23 == a) t.setGuideStep(23),
                MainUI.instance.bottomUI.showHomeByForce(),
                t.showGuideInfo("onStep24");
            else if (24 == a) t.createMaskTarget(120, 900, 80, 50, -90, 20, -85),
                t.createParticleRec(105, 861, 115, 100);
            else if (25 == a) t.createMaskTarget(400, 80, 130, 70, 90, 105, 20),
                t.createParticleRec(372, 55, 175, 115);
            else if (26 == a) t.createMaskTarget(500, 140, 100, 30, 90, 110, 8),
                t.createParticleRec(472, 115, 160, 70);
            else if (27 == a) t.setGuideStep(27),
                egret.setTimeout(function() {
                        MainUI.instance.bottomUI.showHomeByForce(),
                            t.showGuideInfo("onStep28")
                    },
                    this, 1e3);
            else if (28 == a) t.createMaskTarget(240, 900, 60, 50, -90, 18, -85),
                t.createParticleRec(212, 861, 115, 100);
            else if (29 == a) t.createMaskTarget(0, 450, 640, 60, -90, 20, -130),
                t.createParticleRec(-3, 415, 640, 125);
            else if (30 == a) t.setGuideStep(32);
            else if (32 == a) t.showGuideInfo("onStep30");
            else if (33 == a) t.showGuideInfo("onStep35");
            else if (34 == a) t.createMaskTarget(120, 900, 80, 50, -90, 20, -85),
                t.createParticleRec(105, 861, 115, 100);
            else if (35 == a) t.createMaskTarget(130, 250, 360, 150, 90, 110, 13),
                t.createParticleRec(1, 260, 635, 210);
            else if (36 == a) t.createMaskTarget(510, 450, 120, 20, -90, 5, -25),
                t.createParticleRec(497, 430, 125, 60);
            else if (37 == a) t.createMaskTarget(380, 800, 120, 30, -90, 20, -50),
                t.createParticleRec(368, 777, 155, 70);
            else if (38 == a) t.setGuideStep(38),
                egret.setTimeout(function() {
                        MainUI.instance.bottomUI.showHomeByForce(),
                            t.showGuideInfo("onStep42")
                    },
                    this, 1e3);
            else if (39 == a) t.createMaskTarget(240, 900, 60, 50, -90, 20, -85),
                t.createParticleRec(212, 861, 115, 100);
            else if (40 == a) t.setGuideStep(40),
                t.guideComplete = !0;
            else if (41 == a) t.showGuideInfo("touchGuide01");
            else if (42 == a) t.createMaskTarget(120, 900, 80, 50, -90, 20, -85),
                t.createParticleRec(105, 861, 115, 100);
            else if (43 == a) t.showGuideInfo("touchGuide02");
            else if (44 == a) t.createMaskTarget(350, 520, 80, 50, -90, 20, -85),
                t.createParticleRec(350, 490, 100, 100);
            else if (45 == a) t.createMaskTarget(500, 160, 100, 30, 90, 110, 8),
                t.createParticleRec(472, 120, 160, 70);
            else if (46 == a) t.setGuideStep(45),
                t.showGuideInfo("touchGuide03");
            else if (47 == a) t.createMaskTarget(350, 520, 80, 50, -90, 20, -85),
                t.createParticleRec(350, 490, 100, 100);
            else if (48 == a) t.createMaskTarget(510, 450, 120, 20, -90, 5, -25),
                t.createParticleRec(497, 450, 125, 60);
            else if (49 == a) t.showGuideInfo("touchGuide04");
            else if (50 == a) t.createMaskTarget(400, 700, 160, 100, -90, 5, -125),
                t.createParticleRec(370, 700, 160, 100);
            else if (51 == a) t.setGuideStep(51);
            else if (52 == a) t.showGuideInfo("touchGuide05"),
                t.setGuideStep(52),
                t.skillGuideBool = !0,
                t.setGuideSetpArray(0);
            else if (53 == a) t.showGuideInfo("touchGuide06");
            else if (54 == a) t.createMaskTarget(400, 740, 120, 20, -90, 5, -25),
                t.createParticleRec(365, 740, 155, 65);
            else if (55 == a) t.showGuideInfo("touchGuide07");
            else if (56 == a);
            else if (57 == a) t.showGuideInfo("touchGuide08"),
                t.setGuideStep(57),
                t.partGuideBool = !0,
                t.setGuideSetpArray(1);
            else if (58 == a) t.createMaskTarget(400, 700, 160, 100, -90, 5, -125),
                t.createParticleRec(395, 695, 160, 100);
            else if (59 == a) t.showGuideInfo("touchGuide09");
            else if (60 == a) t.createMaskTarget(240, 900, 60, 50, -90, 20, -85),
                t.createParticleRec(212, 861, 115, 100);
            else if (61 == a);
            else if (62 == a) t.showGuideInfo("touchGuide10"),
                t.setGuideStep(62),
                t.bujiGuideBool = !0,
                t.setGuideSetpArray(2);
            else if (63 == a) t.createMaskTarget(460, 420, 150, 50, -90, 20, -85),
                t.createParticleRec(470, 410, 155, 70);
            else if (64 == a);
            else if (65 == a) MainUI.instance.bottomUI.showHomeByForce(),
                t.showGuideInfo("touchGuide11"),
                t.setGuideStep(65);
            else if (66 == a) t.createMaskTarget(460, 300, 200, 150, -90, -60, -105),
                t.createParticleRec(360, 340, 270, 125);
            else if (67 == a) t.createMaskTarget(500, 200, 120, 30, 90, 100, 12),
                t.createParticleRec(475, 178, 160, 70);
            else if (68 == a) t.setGuideSetpArray(3),
                t.reShipGuideBool = !0;
            else if (69 == a) t.showGuideInfo("touchGuide12");
            else if (70 == a) t.createMaskTarget(120, 900, 80, 50, -90, 20, -85),
                t.createParticleRec(105, 861, 115, 100);
            else if (71 == a) t.createMaskTarget(400, 80, 130, 70, 90, 105, 20),
                t.createParticleRec(372, 55, 175, 115);
            else if (72 == a) t.createMaskTarget(500, 140, 100, 30, 90, 110, 8),
                t.createParticleRec(476, 115, 160, 70);
            else if (73 == a) t.showGuideInfo("touchGuide13");
            else if (74 == a) t.createMaskTarget(130, 250, 360, 200, 90, 110, 13),
                t.createParticleRec(1, 260, 635, 210);
            else if (75 == a) t.createMaskTarget(510, 690, 120, 40, -90, 5, -25),
                t.createParticleRec(497, 712, 125, 60);
            else if (76 == a) t.showGuideInfo("touchGuide14");
            else if (77 == a) t.createMaskTarget(260, 760, 150, 80, -90, 5, -85),
                t.createParticleRec(240, 780, 157, 65);
            else if (78 == a) MainUI.instance.bottomUI.showPvpByForce(),
                t.showGuideInfo("touchGuide15");
            else if (79 == a) t.createMaskTarget(130, 90, 360, 200, 90, 110, 13),
                t.createParticleRec(1, 100, 635, 210);
            else if (80 == a) t.showGuideInfo("touchGuide16");
            else if (81 == a) t.createMaskTarget(35, 680, 230, 120, -90, 20, -200),
                t.createParticleRec(35, 615, 230, 170);
            else if (82 == a) t.showGuideInfo("touchGuide17"),
                t.techGuideBool = !0,
                t.setGuideStep(82),
                t.setGuideSetpArray(4);
            else if (83 == a) t.createMaskTarget(500, 200, 100, 30, 90, 110, 8),
                t.createParticleRec(475, 175, 160, 70);
            else if (84 == a);
            else if (85 == a) t.showGuideInfo("touchGuide18"),
                t.trainGuideBool = !0,
                t.setGuideStep(85),
                t.setGuideSetpArray(5);
            else if (86 == a) t.showGuideInfo("touchGuide19");
            else if (87 == a) t.createMaskTarget(120, 750, 150, 80, -90, 5, -85),
                t.createParticleRec(105, 770, 155, 65);
            else if (88 == a) t.showGuideInfo("touchGuide20");
            else if (89 == a) t.createMaskTarget(380, 750, 150, 80, -90, 5, -85),
                t.createParticleRec(365, 770, 155, 65);
            else if (90 == a);
            else if (91 == a) MainUI.instance.bottomUI.showPvpByForce(),
                t.showGuideInfo("touchGuide21");
            else if (92 == a) t.createMaskTarget(130, 390, 360, 200, 90, 110, 13),
                t.createParticleRec(1, 400, 635, 210);
            else if (93 == a) t.showGuideInfo("touchGuide22");
            else if (94 == a) t.createMaskTarget(130, 260, 360, 150, 90, 110, 13),
                t.createParticleRec(1, 270, 635, 160);
            else if (95 == a);
            else if (96 == a) MainUI.instance.bottomUI.showPveByForce(),
                t.showGuideInfo("touchGuide23");
            else if (97 == a) t.createMaskTarget(1, 50, 120, 80, 90, 100, 0),
                t.createParticleRec(1, 56, 110, 55);
            else if (98 == a) t.showGuideInfo("touchGuide24");
            else if (99 == a) t.createMaskTarget(140, 750, 150, 80, -90, 5, -85),
                t.createParticleRec(125, 770, 150, 65);
            else if (100 == a);
            else if (101 == a) t.showGuideInfo("touchGuide25"),
                t.juntuanGuideBool = !0,
                t.setGuideStep(101),
                t.setGuideSetpArray(6);
            else if (102 == a) t.createMaskTarget(1, 640, 650, 200, -90, 0, -200),
                t.createParticleRec(1, 650, 635, 210),
                MainUI.instance.bottomUI.showPvpByForce(),
                t.setGuideStep(102);
            else if (103 == a) t.showGuideInfo("touchGuide27");
            else if (104 == a) {
                if (t.positionParam) {
                    var i = t.positionParam;
                    t.createMaskTarget(i.x, i.y, i.w, i.h, -90, 20, -100),
                        t.createParticleRec(i.x, i.y, i.w, i.h)
                }
            } else 105 == a ? t.showGuideInfo("touchGuide28") : 106 == a ? (t.createMaskTarget(480, 160, 150, 55, 90, 100, 0), t.createParticleRec(465, 160, 155, 55)) : 107 == a ? (t.merge2GuideBool = !0, t.setGuideSetpArray(9), t.showGuideInfo("touchGuide29")) : 108 == a ? (t.createMaskTarget(440, 750, 150, 60, 90, 100, 0), t.createParticleRec(425, 750, 155, 60)) : 109 == a ? (t.setGuideStep(109), t.mergeGuideBool = !0, t.showGuideInfo("touchGuide30"), t.setGuideSetpArray(7)) : 110 == a ? (t.createMaskTarget(380, 770, 150, 80, -90, 5, -85), t.createParticleRec(365, 790, 155, 65)) : 111 == a || (112 == a ? (MainUI.instance.bottomUI.showPvpByForce(), t.showGuideInfo("touchGuide31"), t.setGuideStep(112)) : 113 == a ? (t.createMaskTarget(1, 440, 650, 200, -90, 0, -200), t.createParticleRec(1, 450, 635, 210)) : 114 == a || (116 == a ? (t.showGuideInfo("touchGuide32"), t.setGuideStep(116)) : 117 == a ? (t.createMaskTarget(340, 900, 60, 50, -90, 18, -85), t.createParticleRec(312, 861, 115, 100)) : 118 == a ? (t.createMaskTarget(1, 440, 650, 200, -90, 0, -200), t.createParticleRec(1, 450, 635, 210)) : 119 == a ? t.showGuideInfo("touchGuide33") : 120 == a || (121 == a ? (t.setGuideStep(121), t.showGuideInfo("touchGuide34"), t.jungongGuideBool = !0, t.setGuideSetpArray(8)) : 122 == a ? (t.createMaskTarget(260, 750, 150, 80, -90, 5, -85), t.createParticleRec(242, 770, 155, 65)) : 123 == a || (124 == a ? (t.showGuideInfo("touchGuide35"), t.setGuideStep(124)) : 125 == a ? (t.createMaskTarget(120, 900, 80, 50, -90, 20, -85), t.createParticleRec(105, 861, 115, 100)) : 126 == a ? (t.createMaskTarget(530, 620, 120, 80, -90, 5, -85), t.createParticleRec(515, 635, 120, 60)) : 127 == a ? t.showGuideInfo("touchGuide36") : 128 == a ? (t.createMaskTarget(40, 230, 100, 110, -90, 18, -100), t.createParticleRec(40, 230, 100, 105)) : 129 == a ? (t.createMaskTarget(500, 150, 100, 30, 90, 110, 8), t.createParticleRec(475, 120, 160, 70)) : 130 == a ? t.showGuideInfo("touchGuide37") : 131 == a || (132 == a ? (t.showGuideInfo("touchGuide38"), t.setGuideStep(132)) : 133 == a ? (t.createMaskTarget(120, 900, 80, 50, -90, 20, -85), t.createParticleRec(105, 861, 115, 100)) : 134 == a ? (t.createMaskTarget(10, 240, 100, 120, -90, 18, -150), t.createParticleRec(10, 245, 100, 110)) : 135 == a ? t.showGuideInfo("touchGuide39") : 136 == a ? (t.createMaskTarget(500, 150, 100, 30, 90, 110, 8), t.createParticleRec(475, 120, 160, 70)) : 137 == a ? t.showGuideInfo("touchGuide40") : 138 == a ? (t.createMaskTarget(10, 240, 100, 120, -90, 18, -150), t.createParticleRec(10, 245, 100, 110)) : 139 == a ? (t.createMaskTarget(510, 370, 120, 20, -90, 5, -50), t.createParticleRec(497, 370, 125, 58)) : 140 == a ? (t.createMaskTarget(370, 760, 150, 80, -90, 18, -85), t.createParticleRec(370, 780, 155, 65)) : 141 == a && t.showGuideInfo("touchGuide41"))))))
        },
        t.showGuideInfo = function(t) {
            if (!PlayerGuidePanel.instance) {
                var e = Utils.textFlowByStr(Locales.get(t));
                GameLayer.getInstance().topLayer.addChild(new PlayerGuidePanel({
                    txt: e
                }))
            }
        },
        t.clearMask = function() {
            t.vessel && (GameLayer.getInstance().topLayer.removeChild(t.vessel), t.vessel = null)
        },
        t.createTouMing = function(e, a, i, n) {
            var s = new egret.Sprite,
                r = new egret.Bitmap(RES.getRes("tutorial_touming_png"));
            return s.addChild(r),
                s.x = e,
                s.y = a,
                r.width = i,
                r.height = n,
                t.vessel.addChild(s),
                s.touchEnabled = !0,
                s
        },
        t.createMaskTarget = function(e, a, i, n, s, r, o) {
            void 0 === r && (r = 0),
                void 0 === o && (o = 0),
                t.vessel = new egret.Sprite,
                GameLayer.getInstance().topLayer.addChild(t.vessel);
            var l = new egret.Sprite;
            l.anchorOffsetX = l.width / 2,
                l.anchorOffsetY = l.height / 2,
                l.rotation = s,
                l.addChild(new egret.Bitmap(RES.getRes("tutorial_arrow_png")));
            var h = new egret.Point(e, a);
            l.x = h.x + i / 2 - l.width / 2 + r,
                l.y = h.y + n + o;
            var c = 20;
            t.createTouMing(0, 0, GameData.designWidth, h.y - c),
                t.createTouMing(h.x + i + c, h.y - c, GameData.designWidth - (h.x + i + c), n + 2 * c),
                t.createTouMing(0, h.y - c, h.x - c, n + 2 * c),
                t.createTouMing(0, h.y + n + c, GameData.designWidth, GameData.designHeight - (h.y + n + c)),
                t.vessel.addChild(l),
                l.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                    function() {
                        GameTick.removeHandler(t.tickId)
                    },
                    this),
                t.handInitY = l.y,
                t.handSpeed = 10,
                t.tickId = GameTick.registerHandler(function() {
                        l.y += t.handSpeed,
                            (l.y > t.handInitY + 20 || l.y < t.handInitY - 20) && (t.handSpeed *= -1)
                    },
                    100)
        },
        t.createParticleRec = function(e, a, i, n) {
            var s = new egret.Sprite;
            s.x = e,
                s.y = a,
                s.width = i,
                s.height = n,
                t.vessel.addChild(s),
                new ParticleDisplayObj(s, ParticleType.TrailingLight, ShapeType.Rectangle)
        },
        t.showGuider = function(e) {
            t.vessel && (t.vessel.visible = e),
                PlayerGuidePanel.instance && (PlayerGuidePanel.instance.visible = e)
        },
        t
}();
