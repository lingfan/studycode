
var BroadCastDataLib = function() {
    function t() {}
    var e = (__define, t),
        a = e.prototype;
    return a.getContent = function(t) {
            if (this.contentList) return this.contentList[t - 1];
            this.contentList = [];
            for (var e = 0,
                    a = BroadcastParser.GetInstance().getDataArr(); e < a.length; e++) {
                var i = a[e],
                    n = i.content_l,
                    s = n.split("#");
                this.contentList.push(s)
            }
            return this.contentList[t - 1]
        },
        t.instance = new t,
        t
}();
