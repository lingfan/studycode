
var DataLoader = function() {
    function t(t, e) {
        var a = "resource/config/" + t + ".txt";
        RES.getResByUrl(Transport.loginPanelBool ? Path.cdnURL + a : a, e, this, RES.ResourceItem.TYPE_TEXT)
    }
    var e = (__define, t);
    e.prototype;
    return t
}();
