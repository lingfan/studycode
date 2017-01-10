
var preciousBattleType;
!
function(t) {
    t[t.none = 0] = "none",
        t[t.part = 1] = "part",
        t[t.medal = 2] = "medal"
}(preciousBattleType || (preciousBattleType = {}));
var WindowPreciousBattle = function(t) {
    function e() {
        t.call(this, !0),
            this.skinName = "resource/eui_skins/ZB_DuoBaoQiBing_DiRenSkin.exml"
            /*tpa=resource/eui_skins/ZB_DuoBaoQiBing_DiRenSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.setData = function(t) {
            var a = this;
            e._instance = this,
                this.pData = t,
                ConfigData.preLoadList(["shipData", "npcData", "shipModelData", "robNPCData"],
                    function() {
                        GameEventDispatcher.getInstance().addEventListener(GameEvent.ROBBERYLIST_UPDATE, a.initList, a),
                            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceRobberyList, {
                                partpieceid: t.id,
                                type: t.type
                            })
                    }),
                this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeHandler, this),
                this.btnRefreshenemy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reFreshListHandler, this),
                WindowBattleSweepDrop.jiluXunBao = UserData.getInstance().getRes(TypeDefine.RES.XunBaoLing)
        },
        i.reFreshListHandler = function(t) {
            RequestManager.GetInstance().RequestMsg(ProtocolMgr.ID_DceRobberyList, {
                partpieceid: this.pData.id,
                type: this.pData.type
            })
        },
        i.closeHandler = function(t) {
            this.destroy()
        },
        i.clear = function() {},
        i.initList = function() {
            this.vessel.removeChildren();
            for (var t = PiecesManager.getInstance().getRankerList(), e = 0; e < t.length; e++) {
                var a = new PreciousBattleItem(t[e].data, t[e].type, this);
                this.vessel.addChild(a),
                    a.y = 170 * e
            }
            this.vessel.height = 170 * e
        },
        e.preciousBattle = function(t) {
            if (void 0 === t && (t = 0), e._instance) {
                if (1 == t && UserData.getInstance()._level < 40) return void Toast.launch(Locales.get("panel_limit_captain_txt_6", 40));
                if (UserData.getInstance().getRes(TypeDefine.RES.XunBaoLing) > 0) {
                    var a = Transport.getPkg(ProtocolMgr.ID_DceBattleStart);
                    a.type = 8,
                        a.targetID = e.selectedItem.iData.uid,
                        a.rank = 0,
                        a.sweep = t,
                        a.partpieceid = Number(e._instance.pData.id),
                        a.selfrank = 0,
                        a.robberytype = e.selectedItem.myTarget.pData.type,
                        1 == t ? Transport.instance.send(a) : BattleManager.instance.showCloud(function() {
                            Transport.instance.send(a)
                        })
                } else {
                    var i = {};
                    i.title = Locales.get("使用寻宝证可以增加寻宝令"),
                        i.itemId = 1131,
                        i.shopId = 39,
                        WindowManager.getInstance().show(WindowManager.windowType.ItemUse, i)
                }
            }
        },
        e
}(WindowBase);
