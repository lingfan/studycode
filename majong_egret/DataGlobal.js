
var DataGlobal = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.getInst = function() {
		return this.inst || (this.inst = new t),
		this.inst
	},
	t.wStage = 1136,
	t.hStage = 640,
	t.Evts = {
		BACK_INDEX: "backIndex",
		SHOW_BOARD_USER_INFO: "showBoardUserInfo",
		SHOW_BOARD_TIP_ADD_ROOM: "showBoardTipAddRoom",
		SHOW_BOARD_ABOUT_INTO_ROOM: "showBoardAboutIntoRoom",
		SELECTED_BTN: "selectedBtn",
		CREATE_ROOM: "createRoom",
		JOIN_ROOM: "joinRoom",
		BACK_HOTEL_FROM_ROOM: "backHotelFromRoom",
		CLOSE_ROOM_BY_HOST: "closeRoomByHost",
		VOTE_CLOSE_ROOM: "voteCloseRoom",
		POP_MY_CARD: "popMyCard",
		ACTION_DOUBLE: "actionDouble",
		ACTION_BAR: "actionBar",
		ACTION_HU: "actionHu",
		ACTION_PASS: "actionPass",
		BEGIN_NEXT_PAN: "beginNextPan",
		SEND_EMOJI: "sendEmoji",
		SEND_FREQUENT_CHAT: "sendFrequentChat",
		SEND_REQUEST_BLOCKED: "sendRequestBlocked",
		EXIT_ROOM: "exitRoom",
		BACK_GAME: "backGame"
	},
	t
} ();
