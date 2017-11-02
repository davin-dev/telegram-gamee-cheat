var a = window.location.pathname,
            t = gameeUI.user,
            n = (new Date).getTime(),
            o = $("#dataId").data(),
            i = CryptoJS.AES.encrypt(JSON.stringify({
                score: 9999999999999999999999,
                timestamp: n
            }), o.id, {
                format: CryptoJSAesJson
            }).toString(),
            s = {
                score: 9999999999999999999999,
                url: a,
                play_time: gameeUI.playTime,
                hash: i,
                username: t,
                anonymous_id: gameeUI.anonymous_id
            };
        if (isFacebook()) {
            var r = FacebookUserData.getUserData();
            s.app_scoped_user_id = r.app_scoped_user_id, s.user_id = r.user_id
        }
        gameeUI.sendScoreData(s)
