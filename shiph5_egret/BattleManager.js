
var AudioManager = function() {
    function t() {
        this.musicList = ["", "music-01bayofhonor.mp3", "music-06CampBattle.mp3"],
            this.soundList = ["", "UI_guanbianniu.mp3", "UI_kaiqibaoxiang.mp3", "UI_peijianfenjie.mp3", "UI_jianchuangaizao.mp3", "UI_peijianshengji.mp3", "UI_dianjianniu.mp3", "UI_dianjizhandou.mp3", "UI_choutuzhi.mp3", "UI_shilianchou.mp3", "battle_chenmo.mp3", "battle_weimingzhong.mp3", "battle_mingzhong.mp3", "battle_fasheyulei.mp3", "battle_huopaokaihuo.mp3", "battle_feijigongji.mp3", "skill_wenzitexiao.mp3", "battle_huanjing_putong.mp3", "battle_huanjing_lei_1.mp3", "battle_huanjing_lei_2.mp3", "battle_huanjing_lei_3.mp3", "battle_huanjing_baofengyu.mp3", "UI_wanjiashengji.mp3", "battle_result_win.mp3", "battle_result_lose.mp3", "skill_haidihuanjingyin.mp3", "battle_yuleimingzhong.mp3", "battle_feijiqifei.mp3", "UI_jianchuanshengchan.mp3", "UI_jianchuantuiyi.mp3", "UI_xinguanqiajiesuo.mp3", "UI_getOil.mp3", "lipaoyinpin.mp3"],
            this.musicSndMap = {},
            this.soundSndMap = {},
            this._isMusicPlaying = !1,
            this._bgVolume = 1,
            this._effectVolume = 1,
            this._inited = !1
    }
    var e = __define,
        a = t,
        i = a.prototype;
    return e(i, "bgVolume",
            function() {
                return this._bgVolume
            },
            function(t) {
                t > 1 && (t = 1),
                    0 > t && (t = 0),
                    this._bgVolume = t,
                    this._isMusicPlaying && (this._currentMusicChannel.volume = this.bgVolume)
            }),
        e(i, "effectVolume",
            function() {
                return this._effectVolume
            },
            function(t) {
                t > 1 && (t = 1),
                    0 > t && (t = 0),
                    this.effectVolume = t
            }),
        e(i, "isBackgroundMusicPlaying",
            function() {
                return this._isMusicPlaying
            }),
        e(i, "isMusicOn",
            function() {
                return !!this._musicOn
            },
            function(t) {
                !!this._musicOn != t && (this._musicOn = t, this._musicOn ? this.currentPlayMusic && this.playMusic(this.currentPlayMusic) : this.stopMusic(), UserDefault.instance.setStringForKey("music_off", t ? "" : "true"))
            }),
        e(i, "isEffectOn",
            function() {
                return !!this._effectOn
            },
            function(t) {
                !!this._effectOn != t && (this._effectOn = t, UserDefault.instance.setStringForKey("sound_off", t ? "" : "true"))
            }),
        i.init = function() {
            var t = this;
            if (!this._inited) {
                this.isMusicOn = "true" != UserDefault.instance.getStringForKey("music_off"),
                    this.isEffectOn = "true" != UserDefault.instance.getStringForKey("sound_off");
                for (var e = [], a = 1; a < this.musicList.length; ++a) e.push(Path.audioUrl + this.musicList[a]);
                ResLoader.instance.preLoadResList(e,
                        function(e) {
                            for (var a = 0; a < e.length; ++a) {
                                var i = e[a],
                                    n = t.musicList[a + 1];
                                t.musicSndMap[n] = i
                            }
                        },
                        this),
                    e = [];
                for (var a = 1; a < this.soundList.length; ++a) e.push(Path.audioUrl + this.soundList[a]);
                ResLoader.instance.preLoadResList(e,
                        function(e) {
                            for (var a = 0; a < e.length; ++a) {
                                var i = e[a],
                                    n = t.soundList[a + 1];
                                t.soundSndMap[n] = i
                            }
                        },
                        this),
                    this._inited = !0
            }
        },
        i.initSkillMusic = function(t, e) {
            var a = this;
            if (!this.skillMusicMap) {
                this.skillMusicMap = {};
                for (var i = {},
                        n = [], s = 0, r = SkilldataParser.GetInstance().getDataArr(); s < r.length; s++) {
                    var o = r[s];
                    if ("" != o.sound && !i[o.sound]) {
                        var l = Path.audioUrl + o.sound + ".mp3";
                        n.push(l),
                            i[o.sound] = !0
                    }
                }
                ResLoader.instance.preLoadResList(n,
                    function(i) {
                        for (var n = 0; n < i.length; ++n) {
                            var s = i[n];
                            a.skillMusicMap[SkilldataParser.GetInstance().getDataArr()[n].sound] = s
                        }
                        Utils.call(t, e)
                    },
                    this)
            }
            Utils.call(t, e)
        },
        i.playMusic = function(t) {
            if (this.currentPlayMusic != t || !this._isMusicPlaying) {
                this.stopMusic(),
                    Log.logZDY("music volume:", this._bgVolume);
                var e = this.musicSndMap[this.musicList[t]];
                if (this.currentPlayMusic = t, e && this.isMusicOn) {
                    var a = e.play(0, -1);
                    return a.volume = this._bgVolume,
                        this._currentMusicChannel = a,
                        this._isMusicPlaying = !0,
                        a
                }
            }
        },
        i.stopMusic = function() {
            this._isMusicPlaying && (this._isMusicPlaying = !1, this._currentMusicChannel.stop(), this._currentMusicChannel = void 0, this.currentPlayMusic = void 0)
        },
        i.playSound = function(t, e) {
            void 0 === e && (e = !1);
            var a = this.soundSndMap[this.soundList[t]];
            if (this.currentPlayMusic = t, a && this.isEffectOn) {
                var i = a.play(0, e ? -1 : 1);
                return i.volume = this._effectVolume,
                    i
            }
        },
        i.playSkillSound = function(t) {
            var e = this.skillMusicMap[t];
            if (e && this.isEffectOn) {
                var a = e.play(0, 1);
                return a.volume = this._effectVolume,
                    a
            }
        },
        t.instance = new t,
        t.MUSIC_MAIN_UI = 1,
        t.MUSIC_CAMPBATTLE = 2,
        t.SOUND_CLOSE_BTN = 1,
        t.SOUND_OPEN_BOX = 2,
        t.SOUND_PARTS_FJ = 3,
        t.SOUND_SHIPS_GZ = 4,
        t.SOUND_PARTS_SJ = 5,
        t.SOUND_BTN = 6,
        t.SOUND_BATTLE_BTN = 7,
        t.SOUND_HAV_PAPER_ONE = 8,
        t.SOUND_HAV_PAPER_TEN = 9,
        t.SOUND_BATTLE_CHENMO = 10,
        t.SOUND_BATTLE_MISS = 11,
        t.SOUND_BATTLE_MINGZHONG = 12,
        t.SOUND_BATTLE_NORMAL_YULEI = 13,
        t.SOUND_BATTLE_NORMAL_HUOPAO = 14,
        t.SOUND_BATTLE_NORMAL_FEIJI = 15,
        t.SOUND_BATTLE_WENZI = 16,
        t.SOUND_BATTLE_HUANJING = 17,
        t.SOUND_BATTLE_DALEI_1 = 18,
        t.SOUND_BATTLE_DALEI_2 = 19,
        t.SOUND_BATTLE_DALEI_3 = 20,
        t.SOUND_BATTLE_BAOFENG = 21,
        t.SOUND_BATTLE_LVL_UP = 22,
        t.SOUND_BATTLE_WIN = 23,
        t.SOUND_BATTLE_LOSE = 24,
        t.SOUND_BATTLE_HAIDI = 25,
        t.SOUND_BATTLE_YULEI_MZ = 26,
        t.SOUND_BATTLE_FJQF = 27,
        t.SOUND_SHIPS_SC = 28,
        t.SOUND_SHIPS_TY = 29,
        t.SOUND_GUAKAJIESUO = 30,
        t.SOUND_GET_OIL = 31,
        t.SOUND_ZHOUN_LIPAO = 32,
        t
}();
