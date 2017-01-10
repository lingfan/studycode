
var OnVoteKingResp = function(t) {
	function e() {
		t.call(this, MsgAction.ON_VOTE_KING_RESP_SC)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.Processor = function(t) {
		var e = ProtoFactory.getInstance().GetClazz(MsgAction.ON_VOTE_KING_RESP_SC),
		i = e.decode(t.buffer);
		return 0 != i.status ? void(0 == i.house_no ? alert(" can not open house") : alert(" have open house")) : void alert("house_no=" + i.house_no)
	},
	e
} (RespProcessor);
