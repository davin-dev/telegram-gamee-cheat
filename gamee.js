        var t = void 0 !== gameeUI.saveStateData ? gameeUI.saveStateData : "",
            a = a || !1,
            n = window.location.pathname,
            s = gameeUI.user,
            r = (new Date).getTime(),
            i = $("#dataId").data(),
            o = CryptoJS.AES.encrypt(JSON.stringify({
                score: e,
                timestamp: r,
                saveState: t
            }), i.id, {
                format: CryptoJSAesJson
            }).toString(),
            l = {
                score: e,
                url: n,
                play_time: gameeUI.playTime,
                hash: o,
                username: s,
                anonymous_id: gameeUI.anonymous_id,
                game_state_data: t
            };
        if (!isTelegram() && !isKik() && (isFacebook() || FacebookUserData && FacebookUserData.isLoggedIn() && !isViber())) {
            var c = FacebookUserData.getUserData();
            l.facebook_user_id = c.app_scoped_user_id, null !== gameGlobals.facebookThreadId && (l.facebook_thread_id = gameGlobals.facebookThreadId), l.user_id = c.user_id
        }
        a ? gameeUI.sendScoreData(l) : gameeUI.sendScoreDataGameover(l)
