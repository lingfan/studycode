
var DataInteract = function() {
	function t() {
		this.arrCall = [],
		this.attachCall(MsgAction.ON_COM_PROTO_RESP_CS, this.commonBack, this)
	}
	var e = (__define, t),
	i = e.prototype;
	return i.loginBegin = function(t, e) {
		this.callAfterLogin = {
			fun: t,
			scope: e
		},
		this.ReqWeixinAccessToken()
	},
	i.ReqWeixinAccessToken = function() {
		this.attachCall(MsgAction.ON_WEIXIN_ACCESS_TOKEN_RESP_SC, this.ReqWeixinUserInfo, this);
		var t = ProtoFactory.getInstance().newProto(MsgAction.ON_WEIXIN_ACCESS_TOKEN_REQ_CS);
		t.cid = MsgAction.ON_WEIXIN_ACCESS_TOKEN_REQ_CS,
		t.role_id = 0,
		t.code = utils.getRequest().code,
		utils.consoleInfoObj("Req - WeixinAccessToken", t),
		ShareMgr.getInstance().g_channel.SendBinary(t)
	},
	i.ReqWeixinUserInfo = function(t) {
		if (0 != t.status) return void(location.href = "");
		DataUser.getInst().infoUser.access_token = t.access_token,
		DataUser.getInst().infoUser.openId = t.openid,
		this.attachCall(MsgAction.ON_WEIXIN_USERINFO_RESP_SC, this.loginEnd, this);
		var e = ProtoFactory.getInstance().newProto(MsgAction.ON_WEIXIN_USERINFO_REQ_CS);
		e.cid = MsgAction.ON_WEIXIN_USERINFO_REQ_CS,
		e.role_id = 0,
		e.openid = DataUser.getInst().infoUser.openId,
		e.access_token = DataUser.getInst().infoUser.access_token,
		utils.consoleInfoObj("Req - WeixinUserInfo", t),
		ShareMgr.getInstance().g_channel.SendBinary(e)
	},
	i.loginEnd = function(t) {
		utils.consoleInfoObj("Resp - loginEnd", t),
		utils.setProps(DataUser.getInst().infoUser, {
			strNick: t.nick,
			nSumRoom: t.house_card_num,
			nRoomIdPlaying: t.cur_house_no,
			roleId: t.roleId,
			headUrl: t.headurl
		}),
		this.executeCall(this.callAfterLogin, t),
		this.callAfterLogin = null
	},
	i.ReqHouseInfo = function(t, e, i) {
		this.attachCall(MsgAction.ON_OPENING_HOUSEINFO_RESP_SC, e, i);
		var s = ProtoFactory.getInstance().newProto(MsgAction.ON_OPENING_HOUSEINFO_REQ_CS);
		s.cid = MsgAction.ON_OPENING_HOUSEINFO_REQ_CS,
		s.role_id = DataUser.getInst().infoUser.roleId,
		s.house_no = t,
		ShareMgr.getInstance().g_channel.SendBinary(s)
	},
	i.ReqOpenHouse = function(t, e, i, s) {
		this.attachCall(MsgAction.ON_OPEN_HOUSE_RESP_SC, t, e);
		var n = ProtoFactory.getInstance().newProto(MsgAction.ON_OPEN_HOUSE_REQ_CS);
		n.cid = MsgAction.ON_OPEN_HOUSE_REQ_CS,
		n.role_id = DataUser.getInst().infoUser.roleId,
		n.play_type = i,
		n.mask_data = s,
		console.warn("ReqOpenHouse-发送", n.cid, n.role_id, n.play_type, n.mask_data),
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(n) : VirtualServer.getInst().ReqOpenHouse(t, e)
	},
	i.ReqJoinHouse = function(t, e, i) {
		this.attachCall(MsgAction.ON_OPENING_HOUSEINFO_RESP_SC, e, i);
		var s = ProtoFactory.getInstance().newProto(MsgAction.ON_JOIN_HOUSE_REQ_CS);
		s.cid = MsgAction.ON_JOIN_HOUSE_REQ_CS,
		s.role_id = DataUser.getInst().infoUser.roleId,
		s.house_no = DataUser.getInst().infoUser.nRoomIdPlaying,
		console.warn("ReqJoinHouse-发送", s.cid, s.role_id, s.house_no),
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(s) : VirtualServer.getInst().ReqOpenHouse(e, i)
	},
	i.attachJoinHouse = function(t, e) {
		this.attachCall(MsgAction.ON_JOIN_HOUSE_RESP_SC, t, e)
	},
	i.ReqCloseRoom = function(t, e) {
		this.attachCall(MsgAction.ON_CLOSE_HOUSE_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_CLOSE_HOUSE_REQ_CS);
		i.cid = MsgAction.ON_CLOSE_HOUSE_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.house_no = DataUser.getInst().infoUser.nRoomIdPlaying,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqCloseRoom(t, e)
	},
	i.ReqSignCloseRoom = function(t, e) {
		this.attachCall(MsgAction.ON_SIGN_CLOSE_HOUSE_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_SIGN_CLOSE_HOUSE_REQ_CS);
		i.cid = MsgAction.ON_SIGN_CLOSE_HOUSE_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.house_no = DataUser.getInst().infoUser.nRoomIdPlaying,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqSignCloseRoom(t, e)
	},
	i.ReqAnswerSignCloseRoom = function(t, e) {
		this.attachCall(MsgAction.ON_ANSWER_SIGN_CLOSE_HOUSE_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_ANSWER_SIGN_CLOSE_HOUSE_REQ_CS);
		i.cid = MsgAction.ON_ANSWER_SIGN_CLOSE_HOUSE_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.house_no = DataUser.getInst().infoUser.nRoomIdPlaying,
		i.answer = 1,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqAnswerSignCloseRoom(t, e)
	},
	i.attachVoteKing = function(e, i) {
		t.getInst().attachCall(MsgAction.ON_VOTE_KING_RESP_SC, e, i)
	},
	i.attachDeliverCard = function(e, i) {
		t.getInst().attachCall(MsgAction.ON_DELIVER_CARD_RESP_SC, e, i)
	},
	i.attachHandOutOneCard = function(e, i) {
		t.getInst().attachCall(MsgAction.ON_HAND_OUT_ONE_CARD_SC, e, i)
	},
	i.attachOutputCard = function(t, e) {
		this.attachCall(MsgAction.ON_OUTPUT_CARD_RESP_SC, t, e)
	},
	i.ReqVoteKing = function(t, e) {
		this.attachCall(MsgAction.ON_VOTE_KING_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_VOTE_KING_REQ_CS);
		i.cid = MsgAction.ON_VOTE_KING_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.card_id = 5,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqVoteKing(t, e)
	},
	i.ReqSendCardFromEast = function(t, e) {
		this.attachCall(MsgAction.ON_DELIVER_CARD_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_DELIVER_CARD_REQ_CS);
		i.cid = MsgAction.ON_DELIVER_CARD_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqSendCardFromEast(t, e)
	},
	i.ReqPopCard = function(t, e) {
		this.attachCall(MsgAction.ON_OUTPUT_CARD_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_OUTPUT_CARD_REQ_CS);
		i.cid = MsgAction.ON_OUTPUT_CARD_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.card_id = 1,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqPopCard(t, e)
	},
	i.ReqHuCard = function(t, e) {
		this.attachCall(MsgAction.ON_HU_CARD_RESP_SC, t, e);
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_HU_CARD_REQ_CS);
		i.cid = MsgAction.ON_HU_CARD_REQ_CS,
		i.role_id = DataUser.getInst().infoUser.roleId,
		i.card_id = 1,
		i.card_role_id = DataUser.getInst().infoUser.roleId,
		i.hu_type = 1,
		i.hu_option = 8,
		i.king_mask = 1,
		i.hu_arr_str = "",
		i.hu_arr_len = 1,
		DataGlobal.bIsOnLine ? ShareMgr.getInstance().g_channel.SendBinary(i) : VirtualServer.getInst().ReqHuCard(t, e)
	},
	i.commonBack = function(t) {
		var e = t.src_cid + 1;
		this.arrCall[e] && this.executeCall(this.arrCall[e], t)
	},
	i.attachCall = function(t, e, i) {
		this.arrCall[t] = {
			fun: e,
			scope: i
		}
	},
	i.callReturn = function(t, e) {
		this.executeCall(this.arrCall[t], e)
	},
	i.executeCall = function(t, e) {
		console.warn("执行回调 - cid = ", e.cid),
		t.fun.call(t.scope, e)
	},
	t.getInst = function() {
		return this.inst || (this.inst = new t),
		this.inst
	},
	t
} ();
