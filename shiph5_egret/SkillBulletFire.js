
var SkillBulletFire = function(t) {
    function e(e, a, i, n, s) {
        var r = this;
        t.call(this),
            this.x = a.x,
            this.y = a.y,
            this.scaleX = this.scaleY = .6,
            SUI.setTextureAsync(this, "resource/assets/battle/projectile/bullet.png"
                /*tpa=resource/assets/battle/projectile/bullet.png*/
                ,
                function(t) {
                    r.anchorOffsetX = t.textureWidth / 2,
                        r.anchorOffsetY = t.textureHeight / 2
                }),
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
                Log.logZDY("SkillBulletFire"),
                    e.to({
                            x: this.targetX,
                            y: this.targetY
                        },
                        .4 * BattleManager.PLAYFRAMES * 1e3).call(function() {
                        Log.logZDY("SkillBulletFire1"),
                            Utils.removeNode(t),
                            EventManager.instance.dispatchEvent(EventTypes.BATTLE_SHIP_HIT, [t.data, t.damage, t.targetX, t.targetY, t.index])
                    })
            }
        },
        e.SPPED = 40,
        e
}(egret.Bitmap);
