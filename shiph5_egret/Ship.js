
var Ship = function(t) {
    function e(a, i, n, s) {
        var r = this;
        t.call(this),
            this.frame = 0,
            this.optData = a,
            this.point = i,
            this.index = n;
        var o = "",
            l = 1,
            h = 0;
        1 == a.isMine ? o = "z" : (o = "y", h = 5, null != a.modelData.scale && 0 != a.modelData.scale && (l = a.modelData.scale)),
            this.urlType = o,
            this.bg = new egret.Bitmap,
            SUI.setTextureAsync(this.bg, Path.shipModelUrl + a.modelData.url,
                function(t) {
                    r.bg.anchorOffsetX = .5 * t.textureWidth,
                        r.bg.anchorOffsetY = .5 * t.textureHeight,
                        r.bg.scaleX = .8,
                        r.bg.scaleY = .8
                }),
            this.addChild(this.bg),
            this.scaleCopy = this.bg.scaleX,
            this.x = i.x,
            this.y = i.y,
            this.shadow = new egret.Bitmap,
            SUI.setTextureAsync(this.shadow, Path.battleEffectUrl + "battle_ship_shadow.png"),
            this.shadow.x = -85,
            this.shadow.y = -55,
            this.addChildAt(this.shadow, 0),
            this.width = this.bg.width,
            this.height = this.bg.height,
            this.floatFrame = e.FLOATFRAME,
            this.openFloat = !1,
            this.openFloat = !0,
            this.shakeFrame = 0,
            this.hurtType = 0,
            this.hurt(a.serverData.hp, a.serverData.maxhp)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.hurt = function(t, e) {
            if (!(0 >= e || 0 >= t)) {
                var a = t / e * 100;
                80 > a && a >= 40 ? this.hurtType < 1 && (this.hurt1 = EffectManager.instance.getHurtEff(this), this.hurt1 && (this.hurtType = 1, Utils.setPosition(this.hurt1, 0, 0))) : 40 > a && a >= 0 && (this.hurtType < 1 && (this.hurt1 = EffectManager.instance.getHurtEff(this), this.hurt1 && (this.hurtType = 1, Utils.setPosition(this.hurt1, 20, 15))), this.hurtType < 2 && (this.hurt2 = EffectManager.instance.getHurtEff(this), this.hurt2 && (this.hurtType = 2, Utils.setPosition(this.hurt1, -20, -15))))
            }
        },
        i.randomPos = function(t, e) {
            var a = {
                x: 0,
                y: 0
            };
            return e || (e = 3),
                a.x = t.x + Utils.randInt(-e, e),
                a.y = t.y + Utils.randInt(-e, e),
                a
        },
        i.dead = function(t) {
            var e = this;
            if (null == this.isDead || 0 == this.isDead) {
                this.isDead = !0,
                    Utils.removeNode(this.bg),
                    this.bg = null,
                    Utils.removeNode(this.shadow),
                    this.shadow = null,
                    Utils.removeNode(this.hurt1),
                    Utils.removeNode(this.hurt2),
                    Utils.removeNode(this.hurt3),
                    this.hurt1 = null,
                    this.hurt2 = null,
                    this.hurt3 = null,
                    this.bg = new egret.Bitmap,
                    SUI.setTextureAsync(this.bg, "resource/assets/battle/destroy.png"
                        /*tpa=resource/assets/battle/destroy.png*/
                        ,
                        function(t) {
                            e.bg.anchorOffsetX = .5 * t.textureWidth,
                                e.bg.anchorOffsetY = .5 * t.textureHeight
                        }),
                    this.addChild(this.bg),
                    Utils.setScale(this.bg, this.scaleCopy);
                var a = EffectManager.instance.getHurtEff(this, 3);
                a && (Utils.setScale(a, .8), Utils.setPosition(a, -10, -60)),
                    SceneManager.instance.sceneShake(SceneManager.SHAKE_HIGH),
                    1 == t && (this.visible = !1)
            }
        },
        i.hit = function() {
            this.isShake = !0
        },
        i.moveBack = function() {
            var t = this;
            this.openFloat = !1;
            var e = {
                    x: this.x,
                    y: this.y
                },
                a = 0,
                i = 0;
            this.optData.isMine ? (a = -6, i = 7) : (a = 6, i = -7),
                this.x = e.x + a,
                this.y = e.y + i,
                egret.Tween.removeTweens(this);
            var n = egret.Tween.get(this);
            n.to({
                    x: e.x,
                    y: e.y
                },
                1e3 * BattleManager.PLAYFRAMES).call(function() {
                t.openFloat = !0
            })
        },
        i.showSelect = function(t) {
            if (1 == t) {
                if (!this.selected && (this.selected = EffectManager.instance.getTargetSelect(this), this.selected)) {
                    this.selected.scaleX = this.selected.scaleY = 2;
                    var e = egret.Tween.get(this.selected);
                    e.to({
                            scaleX: .5,
                            scaleY: .5
                        },
                        1e3, egret.Ease.backOut)
                }
            } else this.selected && Utils.removeNode(this.selected)
        },
        i.update = function() {
            var t = this;
            if (1 == this.openFloat)
                if (this.floatFrame <= 0) {
                    this.floatFrame = e.FLOATFRAME;
                    var a = this.randomPos(this.point);
                    egret.Tween.removeTweens(this);
                    var i = egret.Tween.get(this);
                    i.to({
                            x: a.x,
                            y: a.y
                        },
                        2e3).call(function() {
                        t.floatFrame = -1
                    })
                } else this.floatFrame--;
            if (1 == this.isShake)
                if (this.openFloat = !1, this.shakeOldPos || (this.shakeOldPos = {
                            x: this.x,
                            y: this.y
                        },
                        this.shakeFrame = e.SHAKEFRAME), this.shakeFrame <= 0) this.isShake = !1,
                    this.shakeFrame = 0,
                    this.openFloat = !0,
                    this.x = this.shakeOldPos.x,
                    this.y = this.shakeOldPos.y,
                    this.shakeOldPos = null;
                else if (this.frame = this.frame + 1, this.frame % 3 == 0) {
                var n = e.SHAKEFRAME - this.shakeFrame + 1;
                this.shakeFrame = this.shakeFrame - 1,
                    n - 4 > 0 && (n -= 4),
                    1 == n ? (this.x = this.shakeOldPos.x - e.SHAKELENGTH, this.y = this.shakeOldPos.y) : 2 == n ? (this.x = this.shakeOldPos.x + e.SHAKELENGTH, this.y = this.shakeOldPos.y) : 3 == n ? (this.x = this.shakeOldPos.x, this.y = this.shakeOldPos.y - e.SHAKELENGTH) : 4 == n && (this.x = this.shakeOldPos.x, this.y = this.shakeOldPos.y + e.SHAKELENGTH)
            }
        },
        i.clear = function() {},
        e.FLOATFRAME = 60,
        e.SHAKEFRAME = 3,
        e.SHAKELENGTH = 3,
        e.frame = 0,
        e
}(egret.DisplayObjectContainer);
