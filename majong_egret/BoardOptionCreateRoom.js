
var BoardOptionCreateRoom = function(t) {
	function e() {
		t.call(this),
		this.initBoard(),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this)
	}
	__extends(e, t);
	var i = (__define, e),
	s = i.prototype;
	return s.onAdd = function(t) {
		this.showBoard(0)
	},
	s.getOptionsCreateRoom = function() {
		this.arrBoardOptionRoom[this.nIndSelect].setOptionsSelect()
	},
	s.showBoard = function(t) {
		for (var e = this.arrBoardOptionRoom,
		i = 0; i < e.length; i++) e[i].visible = i == t;
		this.nIndSelect = t
	},
	s.initBoard = function() {
		var t = new BoardOptionRoomPushFall,
		e = new BoardOptionQingyuan,
		i = new BoardOptionShaoguan;
		this.arrBoardOptionRoom = [t, e, i],
		utils.addChildren(this, this.arrBoardOptionRoom)
	},
	e
} (egret.DisplayObjectContainer);
