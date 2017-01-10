
var NetHttp = function() {
	function t() {}
	var e = (__define, t);
	e.prototype;
	return t.doPostRequest = function(t, e, i, s, n) {
		var r = new egret.URLLoader;
		r.addEventListener(egret.Event.COMPLETE, i, n),
		s && r.addEventListener(egret.IOErrorEvent.IO_ERROR, s, n);
		var a = new egret.URLRequest(t);
		a.method = egret.URLRequestMethod.POST,
		a.data = new egret.URLVariables(e),
		r.load(a)
	},
	t.doGetRequest = function(t, e, i, s, n) {
		var r = new egret.URLLoader;
		r.dataFormat = egret.URLLoaderDataFormat.TEXT,
		r.addEventListener(egret.Event.COMPLETE, i, n),
		s && r.addEventListener(egret.IOErrorEvent.IO_ERROR, s, n);
		var a = new egret.URLRequest(t);
		a.method = egret.URLRequestMethod.GET,
		a.data = new egret.URLVariables(e),
		r.load(a)
	},
	t
} ();
