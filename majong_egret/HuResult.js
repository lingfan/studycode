
var HuResult = function() {
	function t() {
		this.MAX_HU_NUM = 18,
		this.hu_arr = null,
		this.hu_arr_index = 0,
		this.hu_arr = new Array;
		for (var t = 0; t < this.MAX_HU_NUM; t++) this.hu_arr[t] = new HuUnit;
		this.hu_arr_index = 0
	}
	var e = (__define, t),
	i = e.prototype;
	return i.Reset = function() {
		for (var t = 0; t < this.MAX_HU_NUM; t++) this.hu_arr[t].Reset();
		this.hu_arr_index = 0
	},
	i.push = function(t, e, i, s) {
		this.hu_arr[this.hu_arr_index].mask = t,
		this.hu_arr[this.hu_arr_index].card_id = e,
		this.hu_arr[this.hu_arr_index].card_id_with_king = i,
		this.hu_arr[this.hu_arr_index].king_num = s,
		++this.hu_arr_index
	},
	i.getGroupInfo = function() {
		for (var t = "",
		e = 0; e < this.hu_arr.length && 0 != this.hu_arr[e].mask; e++)"" != t && (t += ","),
		t = t + this.hu_arr[e].mask + "," + this.hu_arr[e].card_id + "," + this.hu_arr[e].card_id_with_king + "," + this.hu_arr[e].king_num;
		return {
			info: t,
			count: e
		}
	},
	i.transfer = function(t) {
		this.hu_arr_index = t.hu_arr_index;
		for (var e = 0; e < this.MAX_HU_NUM; e++) this.hu_arr[e] = t.hu_arr[e]
	},
	t
} ();
