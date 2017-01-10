
var paperFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.tickIndex = 0,
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/shangcheng_tegongSkin.exml"
            /*tpa=resource/eui_skins/item/shangcheng_tegongSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {
            this.tickIndex > 0 && (GameTick.removeHandler(this.tickIndex), this.tickIndex = 0),
                this.sunshine && (Utils.removeNode(this.sunshine.display), dragonBones.WorldClock.clock.remove(this.sunshine), this.sunshine = void 0),
                this.shuipao && (Utils.removeNode(this.shuipao.display), dragonBones.WorldClock.clock.remove(this.shuipao), this.shuipao = void 0),
                this.huoxing && (Utils.removeNode(this.huoxing.display), dragonBones.WorldClock.clock.remove(this.huoxing), this.huoxing = void 0),
                this.starlight && (Utils.removeNode(this.starlight.display), dragonBones.WorldClock.clock.remove(this.starlight), this.starlight = void 0),
                this.wordslight && (Utils.removeNode(this.wordslight.display), dragonBones.WorldClock.clock.remove(this.wordslight), this.wordslight = void 0),
                this.starlight2 && (Utils.removeNode(this.starlight2.display), dragonBones.WorldClock.clock.remove(this.starlight2), this.starlight2 = void 0),
                this.starlight3 && (Utils.removeNode(this.starlight3.display), dragonBones.WorldClock.clock.remove(this.starlight3), this.starlight3 = void 0),
                this.starlight4 && (Utils.removeNode(this.starlight4.display), dragonBones.WorldClock.clock.remove(this.starlight4), this.starlight4 = void 0)
        },
        i.updateTime = function() {
            return this.data && 0 == this.data.lasttime ? (GameTick.removeHandler(this.tickIndex), void(this.tickIndex = 0)) : void(this.txtTimeDesc.text = GlobalFunction.getHMSBySecond(--this.data.lasttime) + "后可以领取1个")
        },
        i.dataChanged = function() {
            var e = this;
            if (t.prototype.dataChanged.call(this), this.data) {
                if (!this.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                    if (3 == this.data.id) {
                        if (!this.sunshine) {
                            var a = Path.effectUrl + "zhaomu_sunshine/zhaomu_sunshine.json",
                                i = Path.effectUrl + "zhaomu_sunshine/texture.json",
                                n = Path.effectUrl + "zhaomu_sunshine/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_sunshine", "normal",
                                function(t, a) {
                                    t && (e.sunshine || (e.addChild(t.display), t.display.x = 40, t.display.y = 55, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.sunshine = t))
                                },
                                this)
                        }
                    } else if (2 == this.data.id) {
                        if (!this.shuipao) {
                            var a = Path.effectUrl + "zhaomu_shuipao/zhaomu_shuipao.json",
                                i = Path.effectUrl + "zhaomu_shuipao/texture.json",
                                n = Path.effectUrl + "zhaomu_shuipao/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_shuipao", "normal",
                                function(t, a) {
                                    t && (e.shuipao || (e.addChild(t.display), t.display.x = 320, t.display.y = 95, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.shuipao = t))
                                },
                                this)
                        }
                    } else if (!this.huoxing) {
                        var a = Path.effectUrl + "zhaomu_huoxing/zhaomu_huoxing.json",
                            i = Path.effectUrl + "zhaomu_huoxing/texture.json",
                            n = Path.effectUrl + "zhaomu_huoxing/texture.png";
                        Utils.createDragonBone(a, i, n, "zhaomu_huoxing", "normal",
                            function(t, a) {
                                t && (e.huoxing || (e.addChild(t.display), t.display.x = 320, t.display.y = 95, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.huoxing = t))
                            },
                            this)
                    }
                    if (4 == this.data.id) {
                        if (!this.starlight) {
                            var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                                i = Path.effectUrl + "zhaomu_starlight/texture.json",
                                n = Path.effectUrl + "zhaomu_starlight/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                                function(t, a) {
                                    t && (e.starlight || (e.addChild(t.display), t.display.x = 322, t.display.y = 74, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight = t))
                                },
                                this)
                        }
                        if (!this.starlight2) {
                            var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                                i = Path.effectUrl + "zhaomu_starlight/texture.json",
                                n = Path.effectUrl + "zhaomu_starlight/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                                function(t, a) {
                                    t && (e.starlight2 || (e.addChild(t.display), t.display.x = 24, t.display.y = 134, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight2 = t))
                                },
                                this)
                        }
                    } else if (3 == this.data.id) {
                        if (!this.starlight) {
                            var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                                i = Path.effectUrl + "zhaomu_starlight/texture.json",
                                n = Path.effectUrl + "zhaomu_starlight/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                                function(t, a) {
                                    t && (e.starlight || (e.addChild(t.display), t.display.x = 39, t.display.y = 135, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight = t))
                                },
                                this)
                        }
                        if (!this.starlight2) {
                            var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                                i = Path.effectUrl + "zhaomu_starlight/texture.json",
                                n = Path.effectUrl + "zhaomu_starlight/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                                function(t, a) {
                                    t && (e.starlight2 || (e.addChild(t.display), t.display.x = 81, t.display.y = 34, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight2 = t))
                                },
                                this)
                        }
                        if (!this.starlight3) {
                            var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                                i = Path.effectUrl + "zhaomu_starlight/texture.json",
                                n = Path.effectUrl + "zhaomu_starlight/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                                function(t, a) {
                                    t && (e.starlight3 || (e.addChild(t.display), t.display.x = 88, t.display.y = 86, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight3 = t))
                                },
                                this)
                        }
                        if (!this.starlight4) {
                            var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                                i = Path.effectUrl + "zhaomu_starlight/texture.json",
                                n = Path.effectUrl + "zhaomu_starlight/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                                function(t, a) {
                                    t && (e.starlight4 || (e.addChild(t.display), t.display.x = 242, t.display.y = 114, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight4 = t))
                                },
                                this)
                        }
                    } else if (1 == this.data.id && !this.starlight) {
                        var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                            i = Path.effectUrl + "zhaomu_starlight/texture.json",
                            n = Path.effectUrl + "zhaomu_starlight/texture.png";
                        Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                            function(t, a) {
                                t && (e.starlight || (e.addChild(t.display), t.display.x = 172, t.display.y = 132, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight = t))
                            },
                            this)
                    }
                    this.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            if (!e.wordslight) {
                                var t = Path.effectUrl + "zhaomu_wordslight/zhaomu_wordslight.json",
                                    a = Path.effectUrl + "zhaomu_wordslight/texture.json",
                                    i = Path.effectUrl + "zhaomu_wordslight/texture.png";
                                Utils.createDragonBone(t, a, i, "zhaomu_wordslight", "normal",
                                    function(t, a) {
                                        t && (e.wordslight || (e.addChild(t.display), t.display.x = 340, t.display.y = 53, e.wordslight = t, t.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                                            function() {
                                                Utils.removeNode(e.wordslight.display),
                                                    dragonBones.WorldClock.clock.remove(e.wordslight),
                                                    e.wordslight = void 0
                                            },
                                            e)))
                                    },
                                    e)
                            }
                            e.data.count > 0 ? 0 != e.data.lasttime || 2 != e.data.id && 3 != e.data.id ? (console.log("派遣"), 2 == e.data.id || 4 == e.data.id ? ShopManager.getInstance().sendSpy(Number(e.data.id), 3, !1, e.data) : ShopSpyAlert.getInstance().showPaiQianPage(e.data), 18 == GuideManager.step && GuideManager.nextStep()) : (console.log("免费领取"), ShopManager.getInstance().sendBuySpyItem(Number(e.data.id), 1, 0)) : "" == e.data.credit ? Toast.launch(e.data.desc) : 0 == e.data.lasttime ? (console.log("免费领取"), ShopManager.getInstance().sendBuySpyItem(Number(e.data.id), 1, 0)) : (console.log("弹出购买道具界面"), ShopSpyAlert.getInstance().showBuySpyPage(e.data))
                        },
                        this)
                }
                this.data.count > 0 ? this.txtHaveItem.textColor = 16777215 : this.txtHaveItem.textColor = 16001803,
                    "" == this.data.freeCount && (this.txtTimeDesc.visible = !1),
                    ("2" == this.data.id || "3" == this.data.id) && (0 == this.data.lasttime ? (this.txtTimeDesc.text = "可领取", this.txtTimeDesc.textColor = 65280) : this.data.lasttime > 0 && (this.txtTimeDesc.text = GlobalFunction.getHMSBySecond(this.data.lasttime) + "后可以领取1个", this.txtTimeDesc.textColor = 16777215, 0 == this.tickIndex && (this.tickIndex = GameTick.registerHandler(function() {
                            e.updateTime()
                        },
                        1e3)))),
                    this.redPoint.visible = !1,
                    this.data.count > 0 ? this.redPoint.visible = !0 : "1" == this.data.id || "4" == this.data.id ? this.redPoint.visible = !1 : ("2" == this.data.id || "3" == this.data.id) && (0 == this.data.lasttime ? this.redPoint.visible = !0 : this.redPoint.visible = !1)
            }
        },
        e
}(eui.ItemRenderer);
