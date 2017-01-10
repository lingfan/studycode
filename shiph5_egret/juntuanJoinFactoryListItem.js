
var guildMemberFactoryListItem = function(t) {
    function e() {
        t.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.clear, this),
            this.skinName = "resource/eui_skins/item/JunTuan_4_Member_Skin.exml"
            /*tpa=resource/eui_skins/item/JunTuan_4_Member_Skin.exml*/
    }
    __extends(e, t);
    var a = (__define, e),
        i = a.prototype;
    return i.clear = function() {},
        i.dataChanged = function() {
            var e = this;
            if (t.prototype.dataChanged.call(this), this.data && !this.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                if (this.addEventListener(egret.TouchEvent.TOUCH_TAP,
                        function() {
                            GuildMemberAlert.getInstance().show(e.data)
                        },
                        this), this.data.online ? (this.txtOnlineDesc.text = "在线", this.txtOnlineDesc.textColor = 65280) : (this.txtOnlineDesc.text = "离线", this.txtOnlineDesc.textColor = 16711680), 0 == this.data.donatetype)
                    if (0 == this.data.nodonatedaycount) this.txtDonateDesc.textFlow = (new egret.HtmlTextParser).parser("<font>今日未捐献</font>");
                    else {
                        var a = this.data.nodonatedaycount + 1;
                        this.data.nodonatedaycount > 6 && (a = 7),
                            4 >= a ? this.txtDonateDesc.textFlow = (new egret.HtmlTextParser).parser("<font>" + a + "天未捐献</font>") : this.txtDonateDesc.textFlow = (new egret.HtmlTextParser).parser("<font color='#ff0000'>" + a + "天未捐献</font>")
                    }
                else 1 == this.data.donatetype ? this.txtDonateDesc.textFlow = (new egret.HtmlTextParser).parser("<font>今日已捐献:</font><font color='#00ff00'>" + GuildcontributeParser.GetInstance().getItemById(1).costValue + "</font><font>金币</font>") : 2 == this.data.donatetype ? this.txtDonateDesc.textFlow = (new egret.HtmlTextParser).parser("<font>今日已捐献:</font><font color='#00ff00'>" + GuildcontributeParser.GetInstance().getItemById(2).costValue + "</font><font>钻石</font>") : 3 == this.data.donatetype && (this.txtDonateDesc.textFlow = (new egret.HtmlTextParser).parser("<font>今日已捐献:</font><font color='#00ff00'>" + GuildcontributeParser.GetInstance().getItemById(3).costValue + "</font><font>钻石</font>"));
                SUI.setTextureAsync(this.imgRank, MilitaryManager.GetInstance().getPicByRankLvl(this.data.militaryranktype)),
                    SUI.setTextureAsync(this.imgHead, Path.GetHeadPicUrl(this.data.face, 1))
            }
        },
        e
}(eui.ItemRenderer);
