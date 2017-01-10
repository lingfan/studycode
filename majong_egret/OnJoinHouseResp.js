
var OnJoinHouseResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_JOIN_HOUSE_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_JOIN_HOUSE_RESP_SC),
		i = e.decode(t.buffer);
		DataInteract.getInst().callReturn(MsgAction.ON_JOIN_HOUSE_RESP_SC, i)
	},
	e
} (RespProcessor);
