 var t = void 0 !== gameeUI.saveStateData ? gameeUI.saveStateData : "",
            a = a || !1,
            n = window.location.pathname,
            s = gameeUI.user,
            r = (new Date).getTime(),
            i = $("#dataId").data(),
            o = CryptoJS.AES.encrypt(JSON.stringify({
                score: 9999999999,
                timestamp: r,
                saveState: t
            }), i.id, {
                format: CryptoJSAesJson
            }).toString(),
            l = {
                score: 9999999999,
                url: n,
                play_time: gameeUI.playTime,
                hash: o,
                username: s,
                anonymous_id: gameeUI.anonymous_id,
                game_state_data: t
            };
        a ? gameeUI.sendScoreData(l) : gameeUI.sendScoreDataGameover(l)
