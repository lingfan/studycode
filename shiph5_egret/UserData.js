
var TypeDefine = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.getResIcon = function(e) {
            var a = "";
            switch (e) {
                case t.RES.Oil:
                    a = "resource/assets/Panel/GUI_Homepage_Icon_30.png"
                        /*tpa=resource/assets/Panel/GUI_Homepage_Icon_30.png*/
                    ;
                    break;
                case t.RES.Gold:
                    a = "resource/assets/Panel/GUI_Homepage_Icon_31.png"
                        /*tpa=resource/assets/Panel/GUI_Homepage_Icon_31.png*/
                    ;
                    break;
                case t.RES.Diamond:
                    a = "resource/assets/Panel/GUI_Homepage_Icon_32.png"
                        /*tpa=resource/assets/Panel/GUI_Homepage_Icon_32.png*/
                    ;
                    break;
                case t.RES.PaperExchangeHigh:
                    a = "resource/assets/Panel/GUI_Shipbuilding_gaojiwannengtuzhi.png"
                        /*tpa=resource/assets/Panel/GUI_Shipbuilding_gaojiwannengtuzhi.png*/
                    ;
                    break;
                case t.RES.PaperExchangeLow:
                    a = "resource/assets/Panel/GUI_Shipbuilding_dijiwannengtuzhi.png"
                        /*tpa=resource/assets/Panel/GUI_Shipbuilding_dijiwannengtuzhi.png*/
                    ;
                    break;
                case t.RES.XunBaoLing:
                    a = "resource/assets/Panel/juesexinxi_xunbaoling.png"
                        /*tpa=resource/assets/Panel/juesexinxi_xunbaoling.png*/
            }
            return a
        },
        t.RES = {
            Oil: 1,
            Gold: 2,
            Diamond: 3,
            PaperExchangeHigh: 4,
            PaperExchangeLow: 5,
            XunBaoLing: 6
        },
        t.Const = {
            DROP_TYPE_null: 0,
            DROP_TYPE_ITEM: 1,
            DROP_TYPE_PARTS: 2,
            DROP_TYPE_GOLD: 3,
            DROP_TYPE_CASH: 4,
            DROP_TYPE_SCIENCE: 5,
            DROP_TYPE_PAPER: 6,
            DROP_TYPE_PAPERPIECE: 7,
            DROP_TYPE_VIRTUAL: 8,
            DROP_TYPE_OIL: 9,
            DROP_TYPE_PARTSPIECE: 10,
            DROP_TYPE_XUNZHANG: 11,
            DROP_TYPE_SHENGWANG: 12,
            DROP_TYPE_ACTIVITY: 13,
            DROP_TYPE_HONOR: 14,
            DROP_TYPE_GUARD_BIWU: 20,
            DROP_TYPE_CAPTAIN: 16,
            DROP_TYPE_CAPTAINPIECE: 17,
            DROP_TYPE_MEDALPIECE: 21,
            DROP_TYPE_GONGXUN: 22,
            DROP_TYPE_JINGGONG: 23,
            DROP_TYPE_JINGGONG_SUIPIAN: 24,
            DROP_TYPE_JINGGONG_MONEY: 25,
            DROP_TYPE_JINGGONG_POINT: 26,
            DROP_TYPE_GERENGONGXIAN: 27
        },
        t
}();
