
var QualitySystem = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.getColorByQuality = function(e) {
            return e = Math.floor(e) - 1,
                0 > e && (e = 0),
                t.qualityColor[e]
        },
        t.getStrByQuality = function(e) {
            return e = Math.floor(e) - 1,
                0 > e && (e = 0),
                t.qualityStr[e]
        },
        t.getItemSmallBack = function(t) {
            return Path.itemBackURL + "itemBack_item_sml_" + t + ".png"
        },
        t.getShipHandbookSmallback = function(t) {
            return t = Math.floor(t),
                Path.itemBackURL + "itemBack_ship_sml_" + t + ".png"
        },
        t.getShipBack = function(t) {
            return t = Math.floor(t),
                Path.itemBackURL + "itemBack_ship_big_" + t + ".png"
        },
        t.getShipSmallBack = function(t) {
            return t = Math.floor(t),
                Path.itemBackURL + "itemBack_ship_sml_" + t + ".png"
        },
        t.getPaperBack = function(t) {
            return Path.itemBackURL + "GUI_Shipbuilding_tuzhi_0" + t + ".png"
        },
        t.getCaptainPiece = function(t) {
            t -= 1;
            var e = ["jianzhang_piece_b.png"
                /*tpa=jianzhang_piece_b.png*/
                , "jianzhang_piece_lv.png"
                /*tpa=jianzhang_piece_lv.png*/
                , "jianzhang_piece_lan.png"
                /*tpa=jianzhang_piece_lan.png*/
                , "jianzhang_piece_zi.png"
                /*tpa=jianzhang_piece_zi.png*/
                , "jianzhang_piece_c.png"
                /*tpa=jianzhang_piece_c.png*/
            ];
            return t <= e.length && t >= 0 ? Path.itemBackURL + e[t] : void 0
        },
        t.getCaptainSmallBack = function(t) {
            t -= 1;
            var e = ["jianzhang_bai.png"
                /*tpa=jianzhang_bai.png*/
                , "jianzhang_lv.png"
                /*tpa=jianzhang_lv.png*/
                , "jianzhang_lan.png"
                /*tpa=jianzhang_lan.png*/
                , "jianzhang_zi.png"
                /*tpa=jianzhang_zi.png*/
                , "jianzhang_cheng.png"
                /*tpa=jianzhang_cheng.png*/
            ];
            return t <= e.length && t >= 0 ? Path.itemBackURL + e[t] : void 0
        },
        t.getCaptainFrame = function(t) {
            t -= 1;
            var e = ["jianzhang_bai_frame.png"
                /*tpa=jianzhang_bai_frame.png*/
                , "jianzhang_lv_frame.png"
                /*tpa=jianzhang_lv_frame.png*/
                , "jianzhang_lan_frame.png"
                /*tpa=jianzhang_lan_frame.png*/
                , "jianzhang_zi_frame.png"
                /*tpa=jianzhang_zi_frame.png*/
                , "jianzhang_cheng_frame.png"
                /*tpa=jianzhang_cheng_frame.png*/
            ];
            return t <= e.length && t >= 0 ? Path.itemBackURL + e[t] : void 0
        },
        t.getShipPaperBackGround = function(t) {
            var e = Path.itemBackURL + "GUI_Shipbuilding_tuzhi_0" + t + ".png";
            return e
        },
        t.QUALITY_D = 1,
        t.QUALITY_C = 2,
        t.QUALITY_B = 3,
        t.QUALITY_A = 4,
        t.QUALITY_S = 5,
        t.QUALITY_SS = 6,
        t.qualityColor = [16185574, 6090031, 3518718, 9328127, 16744499, 16001803],
        t.qualityStr = ["D", "C", "B", "A", "S", "SS"],
        t
}();
