
var Path = function() {
    function t() {}
    var e = (__define, t);
    e.prototype;
    return t.GetRankIconUrl = function(t) {
            return "resource/assets/Icon/rank/" + MilitaryrankParser.GetInstance().getItemById(t).picture
        },
        t.GetCampaignIconUrl = function(t, e) {
            void 0 === e && (e = !1);
            var a = CampaigndataParser.GetInstance().getItemById(t);
            return a ? e ? "resource/assets/Icon/campaign/" + a.icon + "_0.png" : "resource/assets/Icon/campaign/" + a.icon + ".png" : ""
        },
        t.GetCampaignAreaMapUrl = function(t) {
            return "resource/assets/battleWorld/area_map_" + t + ".jpg"
        },
        t.GetCampaignArrowSheetUrl = function(t) {
            return "resource/assets/battleWorld/" + t + ".json"
        },
        t.GetHeadPicUrl = function(e, a) {
            void 0 === e && (e = 101),
                void 0 === a && (a = 0);
            var i = e ? e.toString().split("0") : ["1", "1"];
            return i[0] || (i[0] = "1"),
                i[1] || (i[1] = "1"),
                0 == a ? t.headPicURL + "person-" + i[0] + "-" + i[1] + ".png" : t.headPicURL + "Picture-" + i[0] + "-" + i[1] + ".png"
        },
        t.GetCampPicUrl = function(e, a) {
            void 0 === e && (e = 1),
                void 0 === a && (a = 0);
            var i = "",
                n = ["justice_03_", "iron_03_", "glory_03_"];
            return a++,
                i = t.campURL + n[e - 1] + a + ".png"
        },
        t.GetActivityIcon = function(e) {
            return t.activityUrl + "Activity_npc_" + e + ".png"
        },
        t.GetActivityDescIcon = function(e) {
            return t.activityUrl + "Activity_reward_" + e + ".png"
        },
        t.cdnURL = "",
        t.shipURL = "resource/assets/ShipIcons/",
        t.captainIconURL = "resource/assets/Icon/captain/",
        t.shipTypeIconURL = "resource/assets/Icon/shipType/",
        t.countryURL = "resource/assets/Icon/country/",
        t.partsIconURL = "resource/assets/Icon/parts/",
        t.soulIconURL = "resource/assets/Icon/medal/",
        t.itemIconURL = "resource/assets/Icon/item/",
        t.skillIconURL = "resource/assets/Icon/skill/",
        t.itemBackURL = "resource/assets/ui/ui_common/itemBack/",
        t.militaryIconURL = "resource/assets/Icon/rank/",
        t.paperURL = "",
        t.headPicURL = "resource/assets/PlayerHead/",
        t.shipModelUrl = "resource/assets/ShipModel/",
        t.campURL = "resource/assets/Icon/camp/",
        t.effectUrl = "resource/assets/Effect/",
        t.battleEffectUrl = "resource/assets/Effect/battle/effect/",
        t.technologyURL = "resource/assets/Icon/technology/",
        t.formationURL = "resource/assets/Icon/formation/",
        t.npcURL = "resource/assets/Icon/npc/",
        t.item_sURL = "resource/assets/Icon/item_s/",
        t.zhengBaURL = "resource/assets/Icon/zhengba/",
        t.mapEffectUrl = "resource/assets/battle/map/",
        t.audioUrl = "resource/assets/audio/",
        t.resHeadUrl = "ship_json.",
        t.battleLostIconUrl = "resource/assets/Icon/battlelost/",
        t.seikoUrl = "resource/assets/Icon/seiko/",
        t.backGroundImageUrl = "resource/assets/BackGroundImage/",
        t.seaImageUrl = "resource/assets/BackGroundImage/sea/",
        t.activityEffectUrl = "resource/assets/Effect/activity/",
        t.uiUrl = "resource/assets/ui/",
        t.searchMedalUrl = "resource/assets/ui/SearchMedal/",
        t.guildUrl = "resource/assets/Icon/guild/",
        t.missionUrl = "resource/assets/Icon/mission/",
        t.guildTechUrl = "resource/assets/Icon/guild_tech/",
        t.panelUrl = "resource/assets/Panel/",
        t.campBattleUrl = "resource/assets/campBattle/",
        t.skillNameIconUrl = "resource/assets/Icon/skillname/",
        t.skillEffectUrl = "resource/assets/Effect/battle/effect/skill/",
        t.rechargeUrl = "resource/assets/Icon/recharge/",
        t.PVEIconUrl = "resource/assets/Icon/PVE/",
        t.activityUrl = "resource/assets/ui/Activity/",
        t
}();
