
var SkillBulletTorpedo = function(t) {
    function e(e, a, i, n, s) {
        t.call(this);
        var r = new egret.Bitmap;
        SUI.setTextureAsync(r, "resource/assets/battle/projectile/battle_torpedo_body.png"
                /*tpa=resource/assets/battle/projectile/battle_torpedo_body.png*/
                ,
                function(t) {
                    r.anchorOffsetX = 1 * t.textureWidth,
                        r.anchorOffsetY = .5 * t.textureHeight
                }),
            r.scaleX = .3,
            r.scaleY = .2,
            r.alpha = 150 / 255,
            this.addChild(r),
            this.alpha = 150 / 255,
            this.x = a.x,
            this.y = a.y,
            this.startX = a.x,
            this.startY = a.y,
            this.targetX = i.x,
            this.targetY = i.y,
            this.data = e,
            this.maxLength = Math.sqrt(Math.pow(this.x - this.targetX, 2) + Math.pow(this.y - this.targetY, 2)),
            this.damage = n,
            this.play = !1,
            this.index = s,
            BattleManager.instance.setNodeRotation(e.actionViewUnit.optData.isMine, this.startX, this.startY, this.targetX, this.targetY, this)
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.update = function() {
            var t = this;
            if (0 == this.play) {
                this.play = !0;
                var e = egret.Tween.get(this);
                Log.logZDY("SkillBulletTorpedo"),
                    e.to({
                            x: this.targetX,
                            y: this.targetY
                        },
                        .8 * BattleManager.PLAYFRAMES * 1e3).call(function() {
                        Log.logZDY("SkillBulletTorpedo1"),
                            Utils.removeNode(t),
                            EventManager.instance.dispatchEvent(EventTypes.BATTLE_SHIP_HIT, [t.data, t.damage, t.targetX, t.targetY, t.index])
                    })
            }
        },
        e.SPPED = 2,
        e
}(egret.DisplayObjectContainer);
