
var zhaoMuCaptainFactoryListItem = function(t) {
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
                this.redcircle && (Utils.removeNode(this.redcircle.display), dragonBones.WorldClock.clock.remove(this.redcircle), this.redcircle = void 0),
                this.starlight && (Utils.removeNode(this.starlight.display), dragonBones.WorldClock.clock.remove(this.starlight), this.starlight = void 0),
                this.starlight2 && (Utils.removeNode(this.starlight2.display), dragonBones.WorldClock.clock.remove(this.starlight2), this.starlight2 = void 0),
                this.starlight3 && (Utils.removeNode(this.starlight3.display), dragonBones.WorldClock.clock.remove(this.starlight3), this.starlight3 = void 0),
                this.redcircle2 && (Utils.removeNode(this.redcircle2.display), dragonBones.WorldClock.clock.remove(this.redcircle2), this.redcircle2 = void 0),
                this.redcircle3 && (Utils.removeNode(this.redcircle3.display), dragonBones.WorldClock.clock.remove(this.redcircle3), this.redcircle3 = void 0),
                this.redcircle4 && (Utils.removeNode(this.redcircle4.display), dragonBones.WorldClock.clock.remove(this.redcircle4), this.redcircle4 = void 0)
        },
        i.updateTime = function() {
            return this.data && 0 == this.data.lasttime ? (GameTick.removeHandler(this.tickIndex), void(this.tickIndex = 0)) : void(this.txtTimeDesc.text = GlobalFunction.getHMSBySecond(--this.data.lasttime) + "后可以领取1个")
        },
        i.dataChanged = function() {
            var e = this;
            if (t.prototype.dataChanged.call(this), this.data) {
                if (!this.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                    if (4 == this.data.id) {
                        if (!this.starlight) {
                            var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                                i = Path.effectUrl + "zhaomu_starlight/texture.json",
                                n = Path.effectUrl + "zhaomu_starlight/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                                function(t, a) {
                                    t && (e.starlight || (e.addChild(t.display), t.display.x = 342, t.display.y = 90, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight = t))
                                },
                                this)
                        }
                        if (!this.starlight2) {
                            var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                                i = Path.effectUrl + "zhaomu_starlight/texture.json",
                                n = Path.effectUrl + "zhaomu_starlight/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                                function(t, a) {
                                    t && (e.starlight2 || (e.addChild(t.display), t.display.x = 153, t.display.y = 154, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight2 = t))
                                },
                                this)
                        }
                        if (!this.starlight3) {
                            var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                                i = Path.effectUrl + "zhaomu_starlight/texture.json",
                                n = Path.effectUrl + "zhaomu_starlight/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                                function(t, a) {
                                    t && (e.starlight3 || (e.addChild(t.display), t.display.x = 204, t.display.y = 150, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight3 = t))
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
                                    t && (e.starlight || (e.addChild(t.display), t.display.x = 140, t.display.y = 156, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight = t))
                                },
                                this)
                        }
                        if (!this.starlight2) {
                            var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                                i = Path.effectUrl + "zhaomu_starlight/texture.json",
                                n = Path.effectUrl + "zhaomu_starlight/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                                function(t, a) {
                                    t && (e.starlight2 || (e.addChild(t.display), t.display.x = 167, t.display.y = 130, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight2 = t))
                                },
                                this)
                        }
                    } else if (2 == this.data.id && !this.starlight) {
                        var a = Path.effectUrl + "zhaomu_starlight/zhaomu_starlight.json",
                            i = Path.effectUrl + "zhaomu_starlight/texture.json",
                            n = Path.effectUrl + "zhaomu_starlight/texture.png";
                        Utils.createDragonBone(a, i, n, "zhaomu_starlight", "normal",
                            function(t, a) {
                                t && (e.starlight || (e.addChild(t.display), t.display.x = 140, t.display.y = 132, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.starlight = t))
                            },
                            this)
                    }
                    if (1 == this.data.id) {
                        if (!this.redcircle) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle || (e.addChild(t.display), t.display.x = 490, t.display.y = 95, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle = t))
                                },
                                this)
                        }
                        if (!this.redcircle2) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle2 || (e.addChild(t.display), t.display.x = 590, t.display.y = 140, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle2 = t))
                                },
                                this)
                        }
                        if (!this.redcircle3) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle3 || (e.addChild(t.display), t.display.x = 185, t.display.y = 135, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle3 = t))
                                },
                                this)
                        }
                    } else if (2 == this.data.id) {
                        if (!this.redcircle) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle || (e.addChild(t.display), t.display.x = 200, t.display.y = 80, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle = t))
                                },
                                this)
                        }
                        if (!this.redcircle2) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle2 || (e.addChild(t.display), t.display.x = 430, t.display.y = 125, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle2 = t))
                                },
                                this)
                        }
                    } else if (3 == this.data.id) {
                        if (!this.redcircle) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle || (e.addChild(t.display), t.display.x = 520, t.display.y = 62, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle = t))
                                },
                                this)
                        }
                        if (!this.redcircle2) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle2 || (e.addChild(t.display), t.display.x = 420, t.display.y = 50, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle2 = t))
                                },
                                this)
                        }
                        if (!this.redcircle3) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle3 || (e.addChild(t.display), t.display.x = 300, t.display.y = 135, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle3 = t))
                                },
                                this)
                        }
                    } else if (4 == this.data.id) {
                        if (!this.redcircle) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle || (e.addChild(t.display), t.display.x = 320, t.display.y = 162, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle = t))
                                },
                                this)
                        }
                        if (!this.redcircle2) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle2 || (e.addChild(t.display), t.display.x = 490, t.display.y = 120, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle2 = t))
                                },
                                this)
                        }
                        if (!this.redcircle3) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle3 || (e.addChild(t.display), t.display.x = 400, t.display.y = 55, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle3 = t))
                                },
                                this)
                        }
                        if (!this.redcircle4) {
                            var a = Path.effectUrl + "zhaomu_redcircle/zhaomu_redcircle.json",
                                i = Path.effectUrl + "zhaomu_redcircle/texture.json",
                                n = Path.effectUrl + "zhaomu_redcircle/texture.png";
                            Utils.createDragonBone(a, i, n, "zhaomu_redcircle", "normal",
                                function(t, a) {
                                    t && (e.redcircle4 || (e.addChild(t.display), t.display.x = 250, t.display.y = 150, t.animation.gotoAndPlay("normal", void 0, void 0, 0), e.redcircle4 = t))
                                },
                                this)
                        }
                    }
                    this.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            if (!e.wordslight) {
                                var t = Path.effectUrl + "zhaomu_wordslight/zhaomu_wordslight.json",
                                    a = Path.effectUrl + "zhaomu_wordslight/texture.json",
                                    i = Path.effectUrl + "zhaomu_wordslight/texture.png";
                                Utils.createDragonBone(t, a, i, "zhaomu_wordslight", "normal",
                                    function(t, a) {
                                        t && (e.wordslight || (e.addChild(t.display), t.display.x = 340, t.display.y = 90, e.wordslight = t, t.addEventListener(dragonBones.AnimationEvent.COMPLETE,
                                            function() {
                                                Utils.removeNode(e.wordslight.display),
                                                    dragonBones.WorldClock.clock.remove(e.wordslight),
                                                    e.wordslight = void 0
                                            },
                                            e)))
                                    },
                                    e)
                            }
                            e.data.count > 0 ? 0 != e.data.lasttime || 2 != e.data.id && 3 != e.data.id ? (console.log("派遣"), 2 == e.data.id || 4 == e.data.id ? ShopManager.getInstance().sendRecruitCaptain(e.data.id, 1, e.data) : ShopSpyAlert.getInstance().showZhaoMuPage(e.data)) : (console.log("免费领取"), 2 == e.data.id ? ShopManager.getInstance().sendBuyRecruitItem(1, 1, 0) : 3 == e.data.id && ShopManager.getInstance().sendBuyRecruitItem(2, 1, 0)) : -1 == e.data.credit ? Toast.launch(e.data.desc) : 0 == e.data.lasttime ? (console.log("免费领取"), 2 == e.data.id ? ShopManager.getInstance().sendBuyRecruitItem(1, 1, 0) : 3 == e.data.id && ShopManager.getInstance().sendBuyRecruitItem(2, 1, 0)) : (console.log("弹出购买道具界面"), ShopSpyAlert.getInstance().showBuyCaptainPage(e.data))
                        },
                        this)
                }
                this.data.count > 0 ? this.txtHaveItem.textColor = 16777215 : this.txtHaveItem.textColor = 16001803,
                    "" == this.data.freeCount && (this.txtTimeDesc.visible = !1),
                    "2" == this.data.id || "3" == this.data.id ? 0 == this.data.lasttime ? (this.txtTimeDesc.text = "可领取", this.txtTimeDesc.textColor = 65280) : this.data.lasttime > 0 && (this.txtTimeDesc.text = GlobalFunction.getHMSBySecond(this.data.lasttime) + "后可以领取1个", this.txtTimeDesc.textColor = 16777215, 0 == this.tickIndex && (this.tickIndex = GameTick.registerHandler(function() {
                            e.updateTime()
                        },
                        1e3))) : this.txtTimeDesc.visible = !1,
                    this.redPoint.visible = !1,
                    this.data.count > 0 ? this.redPoint.visible = !0 : "1" == this.data.id || "4" == this.data.id ? this.redPoint.visible = !1 : ("2" == this.data.id || "3" == this.data.id) && (0 == this.data.lasttime ? this.redPoint.visible = !0 : this.redPoint.visible = !1)
            }
        },
        e
}(eui.ItemRenderer);
