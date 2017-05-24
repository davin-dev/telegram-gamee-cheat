var url = window.location.pathname,
        timestamp = (new Date).getTime(),
        dataId = $("#dataId").data(),
        hash = CryptoJS.AES.encrypt(JSON.stringify({
            score: score,  
            timestamp: timestamp
        }), dataId.id, {
            format: CryptoJSAesJson
        }).toString(),
        sData = {
            score: score,
            url: url,
            play_time: gameeUI.playTime,
            hash: hash
        };
    if (isFacebook()) {
        var fbUserData = FacebookUserData.getUserData();
        sData["app_scoped_user_id"] = fbUserData.app_scoped_user_id;
        sData["user_id"] = fbUserData.user_id
    }
    gameeUI.sendScoreData(sData)
