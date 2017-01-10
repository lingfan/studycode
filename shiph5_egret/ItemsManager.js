
var HandbookManager = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.showBuffForShipByData = function(t) {
            var e = 1;
            return 2 == t.buffType || 4 == t.buffType || 6 == t.buffType || 8 == t.buffType || 10 == t.buffType || 22 == t.buffType ? e = 100 : (17 == t.buffType || 19 == t.buffType) && (e = 10),
                Locales.get("panel_atlas_main_panel_buff_txt_" + t.buffType, t.buffValue / e)
        },
        a.showBuffForCapByData = function(t) {
            var e = 1;
            return 2 == t.collectbuff || 4 == t.collectbuff || 6 == t.collectbuff || 8 == t.collectbuff || 10 == t.collectbuff || 22 == t.collectbuff ? e = 100 : (17 == t.collectbuff || 19 == t.collectbuff) && (e = 10),
                Locales.get("panel_atlas_main_panel_buff_txt_" + t.collectbuff, t.collectbuffvalue / e)
        },
        a.checkMsg = function() {
            this.pkg && (this.showMsg(this.pkg), this.pkg = null)
        },
        a.showMsg = function(t, e) {
            if (t) {
                e = e || UserData.getInstance().getFightPower();
                var a = PaperdataParser.GetInstance().getItemById(t.paperID),
                    i = this.showBuffForShipByData(a),
                    n = Locales.get("panel_atlas_main_panel_buff_txt_show_16");
                n += "#" + QualitySystem.getColorByQuality(a.quality).toString(16) + a.name_l + "#,",
                    n += Locales.get("panel_atlas_main_panel_buff_txt_show_17", i, t.newpower - e),
                    Toast.launch(n, void 0, !0)
            }
        },
        a.showCapMsg = function(t, e) {
            var a = this;
            t && (e = e || UserData.getInstance().getFightPower(), ConfigData.preLoadDats(["captainCollection"], [CaptaincollectionParser],
                function() {
                    var i = CaptaincollectionParser.GetInstance().getItemById(t.id),
                        n = CaptaindataParser.GetInstance().getItemById(t.id),
                        s = a.showBuffForCapByData(i),
                        r = Locales.get("panel_atlas_main_panel_buff_txt_show_16");
                    r += "#" + QualitySystem.getColorByQuality(n.quality).toString(16) + n.name_l + "#,",
                        r += Locales.get("panel_atlas_main_panel_buff_txt_show_17", s, t.fight - e),
                        Toast.launch(r, void 0, !0)
                },
                this))
        },
        a.showMedalMsg = function(t, e) {
            if (t) {
                e = e || UserData.getInstance().getFightPower();
                var a = MedaldataParser.GetInstance().getItemById(t.paperid),
                    i = Locales.get("panel_atlas_main_panel_buff_txt_" + a.collectbuff, a.collectbuffvalue),
                    n = Locales.get("panel_atlas_main_panel_buff_txt_show_16");
                n += "#" + QualitySystem.getColorByQuality(a.quality).toString(16) + a.name_l + "#,",
                    n += Locales.get("panel_atlas_main_panel_buff_txt_show_17", i, t.newpower - e),
                    Toast.launch(n, void 0, !0)
            }
        },
        t.instance = new t,
        t
}();
