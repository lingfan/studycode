
var ShipData = function() {
    function t() {
        this.id = 0,
            this.type = 0,
            this.name = "",
            this.maxhp = 0,
            this.attack = 0,
            this.attackType = 0,
            this.firedefence = 0,
            this.explosiondefence = 0,
            this.speed = 0,
            this.level = 0,
            this.quality = 0,
            this.reformLevel = 0,
            this._partList = [],
            this._trainData = [0, 0, 0, 0],
            this._skills = [],
            this.isLock = !1
    }
    var e = (__define, t),
        a = e.prototype;
    return a.setData = function(t) {
            this.id = t.id,
                this.type = t.shipid,
                this.skillid = t.skillid,
                this.activeskillid = t.activeskillid,
                this.circleskillid = t.circleskillid,
                this.name = t.name,
                this.maxhp = t.maxhp,
                this.attack = t.attack,
                this.firedefence = t.firedefence,
                this.explosiondefence = t.explosiondefence,
                this.speed = t.speed,
                this.hit = t.hit,
                this.evade = t.evade,
                this.cri = t.cri,
                this.decri = t.decri,
                this.critdmg = t.critdmg,
                this.setParts(t.partslist),
                this.setTrain(t.traindata),
                this.setSkills(t.skilldata),
                this.level = t.level,
                this.isLock = t.islock
        },
        a.setParts = function(t) {},
        a.setSkills = function(t) {},
        a.setTrain = function(t) {},
        t
}();
