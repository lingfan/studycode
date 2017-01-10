
var DataUser = function() {
	function t() {
		this.infoUser = {
			openId: 0,
			roleId: 0,
			strNick: "Í«≥∆",
			nSumRoom: 8,
			nRoomIdPlaying: -1,
			headUrl: "",
			headPic: null,
			access_token: "",
			nGameOrder: 0
		},
		this.playerInfo = {
			play_type: 0,
			banker_role_id: 0,
			banker_nick: "",
			banker_headurl: "",
			banker_gold: 0,
			next1_role_id: 0,
			next1_nick: "",
			next1_headurl: "",
			next1_gold: 0,
			next2_role_id: 0,
			next2_nick: "",
			next2_headurl: "",
			next2_gold: 0,
			next3_role_id: 0,
			next3_nick: "",
			next3_headurl: "",
			next3_gold: 0,
			cur_circle: 0,
			room_desc: ""
		}
	}
	var e = (__define, t),
	i = e.prototype;
	return i.getHeadPic = function() {
		"" != this.infoUser.headUrl ? RES.getResByUrl(this.infoUser.headUrl, this.setHeadPic, this, RES.ResourceItem.TYPE_IMAGE) : this.infoUser.headPic = RES.getRes("temp_1")
	},
	i.setHeadPic = function(t) {
		this.infoUser.headPic = t
	},
	i.setRoomId = function(t) {
		this.infoUser.nRoomIdPlaying = t
	},
	t.getInst = function() {
		return this.inst || (this.inst = new t),
		this.inst
	},
	t
} ();
