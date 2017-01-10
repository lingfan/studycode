
var HouseLogicTest = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.WeixinLogin = function(t) {
		console.warn("openid=" + t);
		var e = ProtoFactory.getInstance().newProto(MsgAction.ON_WEIXIN_USERINFO_REQ_CS);
		e.cid = MsgAction.ON_WEIXIN_USERINFO_REQ_CS,
		e.role_id = 0,
		e.openid = t,
		e.access_token = "xxx",
		ShareMgr.getInstance().g_channel.SendBinary(e)
	},
	t.JoinRoom = function(t, e) {
		var i = ProtoFactory.getInstance().newProto(MsgAction.ON_JOIN_HOUSE_REQ_CS);
		i.cid = MsgAction.ON_JOIN_HOUSE_REQ_CS,
		i.role_id = t,
		i.house_no = e,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnJoinRoom = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_JOIN_HOUSE_RESP_SC),
		i = e.decode(t.buffer);
		return console.warn("status=" + i.status + " cur_house_no=" + i.house_no + " nick=" + i.nick + " role_index=" + i.role_index + " play_time=" + i.play_time),
		{
			status: i.status,
			cur_house_no: i.house_no,
			nick: i.nick,
			role_index: i.role_index,
			play_time: i.play_time
		}
	},
	t.OpenRoom = function(t) {
		var e = "0,0,0,0,0,0,0,0,0,0,0,0,1,0,0",
		i = ProtoFactory.getInstance().newProto(MsgAction.ON_OPEN_HOUSE_REQ_CS);
		i.cid = MsgAction.ON_OPEN_HOUSE_REQ_CS,
		i.role_id = parseInt(t),
		i.room_type = 1,
		i.mask_data = e,
		ShareMgr.getInstance().g_channel.SendBinary(i)
	},
	t.OnOpenRoom = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_OPEN_HOUSE_RESP_SC),
		i = e.decode(t.buffer);
		return console.warn("status=" + i.status + " cur_house_no=" + i.house_no),
		i.house_no
	},
	t
} ();
