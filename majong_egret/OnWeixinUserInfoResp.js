
var OnWeixinUserInfoResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_WEIXIN_USERINFO_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_WEIXIN_USERINFO_RESP_SC),
		i = e.decode(t.buffer);
		return 0 != i.status ? void alert(" can not get weixin access_token") : void alert("house_card_num=" + i.house_card_num + " nick=" + i.nick)
	},
	e
} (RespProcessor);
