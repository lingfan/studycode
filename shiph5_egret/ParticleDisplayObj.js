
var ParticleType;
!
function(t) {
    t[t.Recharge = 0] = "Recharge",
        t[t.TrailingStar = 1] = "TrailingStar",
        t[t.TrailingLight = 2] = "TrailingLight",
        t[t.LightSpot = 3] = "LightSpot",
        t[t.EquipLvUp = 4] = "EquipLvUp"
}(ParticleType || (ParticleType = {}));
var ShapeType;
!
function(t) {
    t[t.None = 0] = "None",
        t[t.Rectangle = 1] = "Rectangle",
        t[t.Circle = 2] = "Circle"
}(ShapeType || (ShapeType = {}));
var ParticleDisplayObj = function() {
    function t(t, e, a) {
        void 0 === e && (e = ParticleType.Recharge),
            void 0 === a && (a = ShapeType.Rectangle),
            this.speed = 5,
            this.index = 0,
            this.angleNum = 0,
            this.myTarget = t,
            this.sType = a,
            this.pType = e,
            this.init()
    }
    var e = (__define, t),
        a = e.prototype;
    return a.init = function() {
            var t, e, a = this;
            if (this.pType == ParticleType.Recharge ? (t = RES.getRes("star_png"), e = RES.getRes("RechargeButtonEffect_json")) : this.pType == ParticleType.TrailingStar ? (t = RES.getRes("star_png"), e = RES.getRes("TrailingEffect1_json")) : this.pType == ParticleType.TrailingLight ? (t = RES.getRes("light_png"), e = RES.getRes("TrailingEffect2_json")) : this.pType == ParticleType.LightSpot ? (t = RES.getRes("star2_png"), e = RES.getRes("LightSpotEffect_json")) : this.pType == ParticleType.EquipLvUp && (t = RES.getRes("star2_png"), e = RES.getRes("EquipLvUp_json")), this.pasys = new particle.GravityParticleSystem(t, e), this.myTarget.addChild(this.pasys), this.pasys.start(), this.pasys.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clearHandler, this), this.sType == ShapeType.Rectangle) this.recPointList = [new egret.Point(0, 0), new egret.Point(this.myTarget.width, 0), new egret.Point(this.myTarget.width, this.myTarget.height), new egret.Point(0, this.myTarget.height), new egret.Point(0, 0)],
                this.tickId = GameTick.registerHandler(function() {
                        a.tickRect()
                    },
                    10);
            else if (this.sType == ShapeType.Circle) this.tickId = GameTick.registerHandler(function() {
                    a.tickCircle()
                },
                10);
            else if (this.sType == ShapeType.None) {
                var i = this.myTarget.height / 2,
                    n = this.myTarget.width / 2;
                this.pasys.emitterX = n,
                    this.pasys.emitterY = i
            }
        },
        a.destroy = function() {
            this.myTarget.contains(this.pasys) && this.myTarget.removeChild(this.pasys)
        },
        a.tickCircle = function() {
            this.angleNum += 10,
                this.angleNum > 360 && (this.angleNum = 0);
            var t = this.myTarget.width / 2 * Math.sin(this.angleNum) + this.myTarget.height / 2,
                e = this.myTarget.width / 2 * Math.cos(this.angleNum) + this.myTarget.width / 2;
            this.pasys.emitterX = e,
                this.pasys.emitterY = t
        },
        a.clearHandler = function(t) {
            GameTick.removeHandler(this.tickId)
        },
        a.tickRect = function() {
            var t = this.recPointList[this.index],
                e = t.x - this.pasys.emitterX,
                a = t.y - this.pasys.emitterY,
                i = 5,
                n = !1,
                s = !1;
            Math.abs(e) > i ? this.pasys.emitterX += e / Math.abs(e) * this.speed : n = !0,
                Math.abs(a) > i ? this.pasys.emitterY += a / Math.abs(a) * this.speed : s = !0,
                n && s && (this.index += 1, this.index >= this.recPointList.length && (this.index = 0))
        },
        t
}();
