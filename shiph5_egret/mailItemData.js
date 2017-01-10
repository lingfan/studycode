
var MailManager = function() {
    function t() {}
    var e = __define,
        a = t,
        i = a.prototype;
    return t.getInstance = function() {
            return this._instance || (this._instance = new t),
                this._instance
        },
        e(i, "systemMailList",
            function() {
                return this._systemMailList
            }),
        e(i, "battleMailList",
            function() {
                return this._battleMailList
            }),
        e(i, "messageMailList",
            function() {
                return this._messageMailList
            }),
        e(i, "rewardMailList",
            function() {
                return this._rewardMailList
            }),
        i.setMailListArr = function(t) {
            1 == t.type ? this.setSysTypeMail(t.maillist) : 2 == t.type && this.setItemTypeMail(t.maillist)
        },
        i.setSysTypeMail = function(t) {
            this._systemMailList = [],
                this._battleMailList = [],
                this._messageMailList = [];
            for (var e in t)
                if (49 == t[e].mailid) {
                    var a = t[e].paramlist[0];
                    if (!BlackListManager.GetInstance().isInBlackList(a)) {
                        var i = this.processMailData(t[e]);
                        i.typeTwo = 4,
                            this._messageMailList.push(i)
                    }
                } else {
                    var n = this.processMailData(t[e]);
                    1 == MaildataParser.GetInstance().getItemByField("id", t[e].mailid).typeTwo ? (n.typeTwo = 1, this._systemMailList.push(n)) : 3 == MaildataParser.GetInstance().getItemByField("id", t[e].mailid).typeTwo && (n.typeTwo = 3, this._battleMailList.push(n))
                }
        },
        i.setItemTypeMail = function(t) {
            this._rewardMailList = [];
            for (var e in t) {
                var a = this.processMailData(t[e]);
                a.typeTwo = 2,
                    this._rewardMailList.push(a)
            }
        },
        i.processMailData = function(t) {
            var e = new mailItemData;
            if (e.isread = t.readed, e.serverData = t.paramlist, t.mailid > 0)
                if (e.id = t.id, e.mailid = t.mailid, e.type = 1, e.proplist = t.proplist, e.time = t.time, 49 == t.mailid) e.title = "指挥官 " + t.paramlist[1] + " 留言",
                    e.uname = t.paramlist[1],
                    e.uid = t.paramlist[0],
                    e.content = t.paramlist[2],
                    e.pkgParam = t.paramlist;
                else {
                    var a = MaildataParser.GetInstance().getItemByField("id", t.mailid);
                    e.title = a.content_l[0],
                        e.content = a.content_l[1] ? a.content_l[1] : "",
                        e.color = a.color,
                        e.pkgParam = this.processParam(t.paramlist, parseInt(t.id), t.time)
                }
            else {
                e.id = t.id,
                    e.mailid = t.mailid,
                    e.type = 2;
                var i = t.text.split("|");
                i.length > 1 ? (e.title = i[0], e.content = i[1]) : (e.title = i[0], e.content = i[0]),
                    e.time = t.time,
                    e.proplist = t.proplist
            }
            return e
        },
        i.processParam = function(t, e, a) {
            var i = [];
            if (e >= 62 && 73 >= e ? i.push(a) : i.push(t[0]), e > 12)
                for (var n = 0; n < t.length; n++) t[n + 1] && i.push(t[n + 1]);
            return i
        },
        i.getMailItem = function(t) {
            var e = "";
            if (e = 0 == t.res ? "领取成功" : 1 == t.res ? "非法ID" : 2 == t.res ? "已经领过了" : "未知错误：" + t.res, Toast.launch(e), 0 == t.res && WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Mail)) {
                for (var a = 0; a < this._rewardMailList.length; a++) this._rewardMailList[a].id == t.id && (this._rewardMailList[a].proplist = []);
                var i = WindowManager.getInstance().getWindow(WindowManager.windowType.Mail);
                i.updatePaper()
            }
        },
        i.sendBattleReview = function(t) {
            void 0 === t && (t = "");
            var e = Transport.getPkg(ProtocolMgr.ID_DceBattleReview);
            e.id = t,
                Transport.instance.send(e)
        },
        i.processBatleReview = function(t) {
            WindowManager.getInstance().hideWaiting(),
                0 == t.res ? (this.pkg = t, BattleManager.instance.EmailRepalybattleInit(this.pkg.atkTac, this.pkg.defTac), BattleManager.instance.battlePlay(this.pkg)) : Toast.launch(Locales.get("panel_mail_txt_wind_4"), 16777215)
        },
        i.addNewMail = function(t) {
            if (1 == t.type)
                if (49 == t.mail.mailid) {
                    var e = t.mail.paramlist[0];
                    if (!BlackListManager.GetInstance().isInBlackList(e)) {
                        var a = this.processMailData(t.mail);
                        a.typeTwo = 4,
                            this._messageMailList.push(a)
                    }
                } else {
                    var i = this.processMailData(t.mail);
                    1 == MaildataParser.GetInstance().getItemByField("id", t.mail.mailid).typeTwo ? (i.typeTwo = 1, this._systemMailList.push(i)) : 3 == MaildataParser.GetInstance().getItemByField("id", t.mail.mailid).typeTwo && (i.typeTwo = 3, this._battleMailList.push(i))
                }
            else if (2 == t.type) {
                var n = this.processMailData(t.mail);
                n.typeTwo = 2,
                    this._rewardMailList.push(n)
            }
            if (WindowManager.getInstance().isWindowVisible(WindowManager.windowType.Mail)) {
                var s = WindowManager.getInstance().getWindow(WindowManager.windowType.Mail);
                s.updatePaper()
            }
        },
        t
}();
