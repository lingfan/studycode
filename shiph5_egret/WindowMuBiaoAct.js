
var WindowMission = function(t) {
    function e() {
        t.call(this, !1),
            this.skinName = "resource/eui_skins/RenWuSkin.exml"
            /*tpa=resource/eui_skins/RenWuSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.init = function() {
            var t = this;
            e.instance = this,
                this.particleTargetList = [],
                ConfigData.preLoadList(["everydayTaskReward", "everydayTaskScoreGift", "giftData"],
                    function() {
                        t.initUI()
                    }),
                MainUI.instance.changeTopMode(topUIMode.simple),
                GameEventDispatcher.getInstance().addEventListener(GameEvent.TASK_UPDATE, this.updateMission, this)
        },
        i.updateMission = function() {
            for (var t = ConfigData.getAllData("everydayTaskReward"), e = ConfigData.getAllData("everydayTaskScoreGift"), a = 0, i = 0; i < this.particleTargetList.length; i++) this.particleTargetList[i].destroy();
            for (i = 1; 5 > i; i++) {
                var n = Number(e[i].scorelevel);
                this["txtPoints" + i] = n.toString();
                var s = this["btnBox" + i];
                if (s.getBool = !1, MissionData.totalscore < n ? a = MissionData.totalscore / n * i : (s.getBool = !0, a = i), s.name = i - 1, s.id = e[i].giftid, MissionData.hasgetscoregiftlist && MissionData.hasgetscoregiftlist[i - 1]) {
                    s.enabled = !1,
                        s.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.rewardHandler, this);
                    var r = this["bg" + i];
                    r.source = RES.getRes(Path.resHeadUrl + "missionBox0_png")
                } else a == i && this.particleTargetList.push(new ParticleDisplayObj(s, ParticleType.Recharge, ShapeType.None)),
                    s.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rewardHandler, this)
            }
            this.txtCurrentPoints.text = MissionData.totalscore.toString(),
                2 > a ? this.bar.value = 38 * a / 2 : this.bar.value = 35 * (a - 1),
                this.vessel.removeChildren();
            var o = [],
                l = [];
            for (var h in t)
                if ("length" != h && UserData.getInstance()._level >= Number(t[h].levellimit)) {
                    var c = MissionData.missionList[Number(t[h].id) - 1];
                    c.hasgetreward ? o.push(t[h]) : c.finishedtimes >= c.maxtimes ? l.push(t[h]) : o.unshift(t[h])
                }
            for (var i = 0; i < l.length; i++) o.unshift(l[i]);
            for (i = 0; i < o.length; i++) {
                var d = new MissionItem(o[i]);
                this.vessel.addChild(d),
                    d.y = 130 * i
            }
        },
        i.rewardHandler = function(t) {
            var e = t.currentTarget;
            WindowManager.getInstance().show(WindowManager.windowType.taskReward, {
                id: e.id,
                index: e.name,
                getBool: e.getBool
            })
        },
        i.initUI = function() {
            var t = this;
            MainUI.instance.bottomUI.lastBtn = null,
                this.addEventListener(egret.Event.REMOVED_FROM_STAGE,
                    function() {
                        e.instance = null,
                            GameEventDispatcher.getInstance().removeEventListener(GameEvent.TASK_UPDATE, t.updateMission, t)
                    },
                    this),
                this.btnAchievement.addEventListener(egret.TouchEvent.TOUCH_TAP, this.achievementHandler, this),
                this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this),
                this.btnMission.selected = !0,
                this.updateMission()
        },
        i.closeHandler = function(t) {
            e.instance = null,
                this.close()
        },
        i.achievementHandler = function(t) {
            Toast.launch(Locales.get("panel_shop_txt_windword_8"))
        },
        e
}(WindowBase);
