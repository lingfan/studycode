
var GameEvent = function(t) {
    function e(e, a) {
        t.call(this, e),
            this.parames = a
    }
    __extends(e, t);
    var a = (__define, e);
    a.prototype;
    return e.CONFIG_PROGRESS = "config_progress",
        e.CONFIG_COMPLETE = "config_complete",
        e.UserData_Update = "UserData_Update",
        e.SHIP_CHANGE_NAME = "ship_change_name",
        e.WindowShipManager_ClickShowOperate = "windowShipManager_ClickShowOperate",
        e.ShipDataUpdate = "shipDataUpdate",
        e.PaperDataUpdate = "paperDataUpdate",
        e.WindowPartsManager_ClickShowOperate = "windowPartsManager_ClickShowOperate",
        e.WindowSoulsManager_ClickShowOperate = "windowSoulsManager_ClickShowOperate",
        e.WindowCaptainsManager_ClickShowOperate = "windowCaptainsManager_ClickShowOperate",
        e.ArrangeWindow_shipSelected = "ArrangeWindow_shipSelected",
        e.SoldierList_update = "SoldierList_update",
        e.WindowChooseItem_chooseNewShip = "WindowChooseItem_chooseNewShip",
        e.WindowChooseItem_chooseNewPart = "WindowChooseItem_chooseNewPart",
        e.WindowChooseItem_chooseNewCaptain = "WindowChooseItem_chooseNewCaptain",
        e.WindowChooseItem_chooseNewMedal = "WindowChooseItem_chooseNewMedal",
        e.SHIP_UPDATE = "ship_update",
        e.CAPTAIN_UPDATE = "captain_update",
        e.PARTS_UPDATE = "parts_update",
        e.SOULS_UPDATE = "souls_update",
        e.SOULS_REMOUDLE = "souls_remodule",
        e.Parts_List_Refresh = "Parts_List_Refresh",
        e.Souls_List_Refresh = "Souls_List_Refresh",
        e.FORMATION_UPDATE = "formation_update",
        e.FORMATION_CHANGE = "formation_change",
        e.SCIENCE_UPDATE = "SCIENCE_UPDATE",
        e.SCIENCE_ITEM_COUNT_UPDATE = "SCIENCE_ITEM_COUNT_UPDATE",
        e.HEGEMONY_NET = "hegemony_net",
        e.CAMP_INIT_COMPLETE = "CAMP_INIT_COMPLETE",
        e.SIDE_ITEM_INIT_COMPLETE = "SIDE_ITEM_INIT_COMPLETE",
        e.ROLE_ITEM_INIT_COMPLETE = "ROLE_ITEM_INIT_COMPLETE",
        e.MEDAL_PIECES = "medal_pieces",
        e.PART_PIECES = "part_pieces",
        e.TASK_UPDATE = "task_update",
        e.ROBBERYLIST_UPDATE = "robberylist_updata",
        e.SELECT_GUILD_BADGE_COMPLETE = "SELECT_GUILD_BADGE_COMPLETE",
        e.CHANGE_GUILD_BADGE_COMPLETE = "CHANGE_GUILD_BADGE_COMPLETE",
        e.REFRESH_MAKE_SHIP_ALERT_COUNT = "REFRESH_MAKE_SHIP_ALERT_COUNT",
        e.REFRESH_PARTS_DATA = "REFRESH_PARTS_DATA",
        e.ACTIVETIPS = "activetips",
        e.REFRESH_SPY_ALERT_COUNT = "REFRESH_SPY_ALERT_COUNT",
        e.GOBACK_SERVER_PAGE = "GOBACK_SERVER_PAGE",
        e.MERGE_COMPLETE = "merge_complete",
        e
}(egret.Event);
