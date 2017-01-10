
var SkillBulletExplosion = function(t) {
    function e(e, a, i, n, s, r) {
        t.call(this),
            this.startX = a.x,
            this.startY = a.y,
            this.targetX = i.x,
            this.targetY = i.y,
            1 == r ? (this.x = a.x, this.y = a.y, this.visible = !1, this.bomb(e, i, .8 * BattleManager.PLAYFRAMES * 1e3)) : this.bomb(e, i, 0),
            this.data = e,
            this.maxLength = Math.sqrt(Math.pow(this.x - this.targetX, 2) + Math.pow(this.y - this.targetY, 2)),
            this.damage = n,
            this.play = !1,
            this.index = s
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.bomb = function(t, e, a) {
            var i = this;
            egret.Tween.removeTweens(this);
            var n = egret.Tween.get(this),
                s = -1 / 1.37,
                r = null,
                o = null,
                l = null,
                h = "",
                c = .52,
                d = 50,
                g = e.x - this.startX + 50,
                u = 200,
                p = 80;
            1 == t.actionViewUnit.optData.isMine ? (h = "resource/assets/battle/projectile/battle_plane_left.png"
                    /*tpa=resource/assets/battle/projectile/battle_plane_left.png*/
                    , o = Utils.ccp(e.x - g, e.y - d + g * Math.tan(c)), l = Utils.ccp(e.x + u, e.y - d - u * Math.tan(c))) : (h = "resource/assets/battle/projectile/battle_plane_right.png"
                    /*tpa=resource/assets/battle/projectile/battle_plane_right.png*/
                    , o = Utils.ccp(e.x + 200, e.y + 200 / s - 50), l = Utils.ccp(e.x - 156, e.y - 78 / s * 2 - 50)),
                this.x = o.x,
                this.y = o.y,
                this.visible = !0,
                AudioManager.instance.playSound(AudioManager.SOUND_BATTLE_NORMAL_FEIJI),
                r = new egret.Bitmap,
                SUI.setTextureAsync(r, h),
                this.removeChildren(),
                this.addChild(r),
                this.x = o.x,
                this.y = o.y,
                Log.logZDY("SkillBulletExplosion"),
                n.to({
                        x: l.x,
                        y: l.y
                    },
                    .7 * BattleManager.PLAYFRAMES * 1e3).call(function() {
                        Log.logZDY("SkillBulletExplosion2"),
                            Utils.removeNode(i)
                    },
                    this);
            var m = Math.abs((p - e.x) / (l.x - o.x)) * BattleManager.PLAYFRAMES * .7 * 1e3;
            Utils.delayCall(m,
                function() {
                    EventManager.instance.dispatchEvent(EventTypes.BATTLE_SHIP_HIT, [i.data, i.damage, i.targetX, i.targetY, i.index])
                },
                this)
        },
        i.update = function() {
            0 == this.play && (this.play = !0)
        },
        e
}(egret.DisplayObjectContainer);
