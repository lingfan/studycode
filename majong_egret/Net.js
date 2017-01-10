
var Net = function(t) {
	function e() {
		t.call(this),
		this.NickName = "",
		this.logicservlet = "/game/logicservlet?"
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return e.getInstent = function() {
		return null == e.instent && (e.instent = new e),
		e.instent
	},
	s.requestUrl = function(t) {
		NetHttp.doGetRequest(t, "", this.onComplete,
		function() {},
		this)
	},
	s.onComplete = function(t) {},
	s.requestAction = function(t) {
		var i, s;
		if ( - 1 == e.platform) {
			var n = navigator.userAgent.toString(),
			r = n.match(/MicroMessenger/i);
			"MicroMessenger" == r ? e.platform = 3 : e.platform = 4
		}
		switch (e.platform) {
		case 1:
			s = 1;
		case 2:
			s = 1;
		case 3:
			s = 2;
		case 4:
			s = 3
		}
		i = e.s_serverHost_ip + e.s_serverHost_port + this.logicservlet + e.URL_ACTION + e.ACTION_GAMEEVENT_REG + e.URL_EVENT_ADDR + s.toString() + e.URL_LOGIN_ACC + this.NickName + e.URL_GAME_ID + e.GAME_ID + e.URL_EVENT_MASK,
		i += t.toString(),
		this.requestUrl(i),
		t >= 6 && 8 >= t && setTimeout(function() {},
		2e3)
	},
	e.s_serverHost_ip = "http://203.195.217.251",
	e.s_serverHost_port = ":8080",
	e.ACTION_GAMEEVENT_REG = 4,
	e.GAME_ID = "2005",
	e.URL_ACTION = "action=",
	e.URL_EVENT_ADDR = "&eventaddr=",
	e.URL_LOGIN_ACC = "&loginacc=",
	e.URL_GAME_ID = "&gameid=",
	e.URL_EVENT_MASK = "&eventmask=",
	e.platform = -1,
	e.instent = null,
	e
} (egret.DisplayObjectContainer);
