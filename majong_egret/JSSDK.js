
var JSSDK = function(t) {
	function e() {
		t.apply(this, arguments),
		this.CLASS_NAME = "JSSDK",
		this.param = "",
		this.wxshareinfo = [],
		this.bHasBeginRecord = !1,
		this.bHasDownLoad = !1
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return e.getInstance = function() {
		return null == e.wxConfig && (e.wxConfig = new e),
		e.wxConfig
	},
	s.init = function() {
		this.onLoadWeiXinConfig(RES.getRes("wxconfig_json"))
	},
	s.changeDescShare = function(t) {
		this.onLoadWeiXinConfig(RES.getRes("wxconfig_json"), t)
	},
	s.onLoadWeiXinConfig = function(t, e) {
		this.wxshareinfo = t,
		this.title = t.title,
		this.desc = e || t.descNomal;
		var i = window.location.href;
		this.link = i.substring(0, i.indexOf("?")),
		this.imgUrl = t.imgUrl,
		this.url = t.jsonphp + encodeURIComponent(i),
		this.getSignPackage()
	},
	s.getSignPackage = function() {
		var t = this,
		e = new egret.URLLoader,
		i = new egret.URLRequest(this.url);
		e.load(i),
		i.method = egret.URLRequestMethod.GET,
		e.addEventListener(egret.Event.COMPLETE,
		function(e) {
			t.signPackage = JSON.parse(e.target.data),
			t.getWeiXinConfig();
			var i = t;
			wx.ready(function() {
				i.shareInfo()
			})
		},
		this)
	},
	s.getWeiXinConfig = function() {
		var t = new BodyConfig;
		t.debug = !1,
		t.appId = this.signPackage.appId,
		t.timestamp = this.signPackage.timestamp,
		t.nonceStr = this.signPackage.nonceStr,
		t.signature = this.signPackage.signature,
		t.jsApiList = ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"],
		wx.config(t);
		var e = this;
		wx.ready(function() {
			e.getWeiXinShareTimeline(),
			e.getWeiXinShareAppMessage(),
			e.getWeiXinShareQQ(),
			e.getWeiXinShareWeiBo()
		})
	},
	s.WWshareInfo = function(t) {
		this.desc = t,
		this.getWeiXinShareTimeline(),
		this.getWeiXinShareAppMessage(),
		this.getWeiXinShareQQ(),
		this.getWeiXinShareWeiBo()
	},
	s.setShareparam = function(t) {
		this.param = t
	},
	s.shareInfo = function() {
		this.getWeiXinShareTimeline(),
		this.getWeiXinShareAppMessage(),
		this.getWeiXinShareQQ(),
		this.getWeiXinShareWeiBo()
	},
	s.getWeiXinShareTimeline = function() {
		var t = this,
		e = this.sharelinkset(),
		i = new BodyMenuShareTimeline;
		i.title = this.desc,
		i.link = e.link,
		i.imgUrl = this.imgUrl,
		i.trigger = function() {
			Net.getInstent().requestAction(5)
		},
		i.success = function() {
			t.getsharecount(e.scount)
		},
		i.cancel = function() {},
		i.fail = function(t) {},
		wx.onMenuShareTimeline(i)
	},
	s.getWeiXinShareAppMessage = function() {
		var t = this,
		e = this.sharelinkset(),
		i = new BodyMenuShareAppMessage;
		i.title = this.title,
		i.desc = this.desc,
		i.link = e.link,
		i.imgUrl = this.imgUrl,
		i.trigger = function() {
			Net.getInstent().requestAction(5)
		},
		i.success = function() {
			t.getsharecount(e.scount)
		},
		i.cancel = function() {},
		i.fail = function(t) {},
		wx.onMenuShareAppMessage(i)
	},
	s.getWeiXinShareQQ = function() {
		var t = this,
		e = this.sharelinkset(),
		i = new BodyMenuShareQQ;
		i.title = this.title,
		i.desc = this.desc,
		i.link = e.link,
		i.imgUrl = this.imgUrl,
		i.trigger = function() {
			Net.getInstent().requestAction(5)
		},
		i.complete = function(t) {},
		i.success = function() {
			t.getsharecount(e.scount)
		},
		i.cancel = function() {},
		i.fail = function(t) {},
		wx.onMenuShareQQ(i)
	},
	s.getWeiXinShareWeiBo = function() {
		var t = this,
		e = this.sharelinkset(),
		i = new BodyMenuShareWeibo;
		i.title = this.title,
		i.desc = this.desc,
		i.link = e.link,
		i.imgUrl = this.imgUrl,
		i.trigger = function() {
			Net.getInstent().requestAction(5)
		},
		i.complete = function(t) {},
		i.success = function() {
			t.getsharecount(e.scount)
		},
		i.cancel = function() {},
		i.fail = function(t) {},
		wx.onMenuShareWeibo(i)
	},
	s.sharelinkset = function() {
		var t, e = window.GetRequest(),
		i = String(e.scount),
		s = "";
		s = this.link,
		"" != this.param && (s += s.indexOf("?") <= 0 ? "?": "&", s += this.param),
		s += s.indexOf("?") <= 0 ? "?": "&",
		t = i && "undefined" != i ? "1" == i ? 2 : 3 : 1,
		s = s + "scount=" + t;
		var n = {
			link: s,
			scount: i.toString()
		};
		return n
	},
	s.getsharecount = function(t) {
		"1" == t ? Net.getInstent().requestAction(6) : "2" == t ? Net.getInstent().requestAction(7) : "3" == t && Net.getInstent().requestAction(8)
	},
	s.WWscanQRCode = function() {
		alert("scan"),
		wx.scanQRCode({
			needResult: 1,
			scanType: ["qrCode", "barCode"],
			success: function(t) {
				t.resultStr;
				alert(t.resultStr)
			}
		})
	},
	s.recordBegin = function() {
		this.bHasBeginRecord = !0;
		var t = this;
		wx.onVoiceRecordEnd({
			success: function(e) {
				t.bHasBeginRecord = !1,
				t.playVoice(e.localId)
			}
		}),
		wx.startRecord({})
	},
	s.recordEnd = function() {
		if (this.bHasBeginRecord) {
			this.bHasBeginRecord = !1;
			var t = this;
			wx.stopRecord({
				success: function(e) {
					t.playVoice(e.localId)
				}
			})
		}
	},
	s.playVoice = function(t) {
		wx.playVoice({
			localId: t
		}),
		this.uploadVoice(t)
	},
	s.uploadVoice = function(t) {
		wx.uploadVoice({
			localId: t,
			isShowProgressTips: 1,
			success: function(t) {
				var e = t.serverId;
				alert("上传语音成功：返回idServer = " + e)
			}
		})
	},
	s.downloadVoice = function(t) {
		wx.downloadVoice({
			serverId: t,
			isShowProgressTips: 1,
			success: function(t) {
				alert("下载语音返回后播放"),
				wx.playVoice({
					localId: t.localId
				})
			}
		})
	},
	s.getPics = function() {
		wx.chooseImage({
			count: 1,
			sizeType: ["compressed"],
			sourceType: ["album", "camera"],
			success: function(t) {}
		})
	},
	e.wxConfig = null,
	e
} (egret.EventDispatcher);
