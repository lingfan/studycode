
var chatContentRenderer = function(t) {
    function e() {
        t.call(this),
            this.skinName = "resource/eui_skins/item/liaotian_lanSkin.exml"
            /*tpa=resource/eui_skins/item/liaotian_lanSkin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.createChildren = function() {
            t.prototype.createChildren.call(this),
                this.groupPlayer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.headClickHandler, this)
        },
        i.dataChanged = function() {
            t.prototype.dataChanged.call(this);
            var e = "";
            switch (GlobalFunction.getDateByTimeNum(this.data.time).getMinutes() >= 10 ? this.txtTime.text = GlobalFunction.getDateByTimeNum(this.data.time).getHours() + ":" + GlobalFunction.getDateByTimeNum(this.data.time).getMinutes() : this.txtTime.text = GlobalFunction.getDateByTimeNum(this.data.time).getHours() + ":0" + GlobalFunction.getDateByTimeNum(this.data.time).getMinutes(), this.btnCancel.visible = !1, this.data.type) {
                case 0:
                    this.txtPersonal.text = "",
                        this.txtName.text = this.data.name;
                    break;
                case 1:
                    this.txtPersonal.text = "",
                        e = this.data.pos,
                        this.txtName.text = this.data.name;
                    break;
                case 2:
                    this.txtPersonal.text = "发送给",
                        this.txtName.text = this.data.destname;
                    break;
                case 3:
                    this.txtPersonal.text = "",
                        this.txtName.text = this.data.name;
                    break;
                case 4:
                    this.txtPersonal.text = "",
                        this.txtTime.text = "",
                        this.btnCancel.visible = !0,
                        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cancelClick, this),
                        this.txtChatContent.text = "战斗力:" + this.data.power + "      等级：" + this.data.level,
                        this.txtName.text = this.data.name
            }
            this.imgMiliRank.x = this.txtPersonal.x + this.txtPersonal.width,
                Utils.getImgByUrl(MilitaryManager.GetInstance().getPicByRankLvl(this.data.militaryranktype), this.imgMiliRank),
                this.txtMiliName.x = this.imgMiliRank.x + this.imgMiliRank.width + 2,
                this.txtMiliName.text = MilitaryrankParser.GetInstance().getItemByField("id", this.data.militaryranktype) ? MilitaryrankParser.GetInstance().getItemByField("id", this.data.militaryranktype).name_l : "",
                this.txtName.x = this.txtMiliName.x + this.txtMiliName.width + 2,
                e.length > 0 && (this.txtName.text = this.txtName.text + "(" + e + ")"),
                this.data.isRadio ? (this.groupPlayer.visible = !1, this.imgBroadcast.visible = !0, Utils.getImgByUrl("liaotian_laba_png", this.imgBroadcast)) : (this.groupPlayer.visible = !0, this.imgBroadcast.visible = !1, this.data.viplevel > 0 ? this.imgVip.visible = !0 : this.imgVip.visible = !1, this.data.isNoSee ? (this.imgNoSee.visible = !0, this.txtChatContent.text = "") : (this.imgNoSee.visible = !1, this.txtChatContent.text = this.data.content), Utils.getImgByUrl(Path.GetHeadPicUrl(this.data.head, 1), this.imgHead))
        },
        i.cancelClick = function(t) {
            var e = this,
                a = "解除屏蔽",
                i = "确认将[" + this.data.name + "]从屏蔽列表中删除?删除后将能收到[" + this.data.name + "]的聊天、私聊以及邮件信息";
            GameAlert.getInstance().show(a, i,
                function() {
                    var t = Transport.getPkg(ProtocolMgr.ID_DceBlackListOpt);
                    t.uid = e.data.uid,
                        t.type = 1,
                        Transport.instance.send(t),
                        GameAlert.getInstance().hide()
                })
        },
        i.headClickHandler = function(t) {
            if (this.data.uid != GameData.uid && 4 != this.data.type) {
                var e = WindowManager.getInstance().getWindow(WindowManager.windowType.Chat),
                    a = this.localToGlobal(this.imgHead.x, this.imgHead.y),
                    i = {};
                i = this.data,
                    i.x = a.x + .5 * this.imgHead.width,
                    i.y = a.y + .5 * this.imgHead.height,
                    e.showHeadOpPanel(i)
            }
        },
        e
}(eui.ItemRenderer);
