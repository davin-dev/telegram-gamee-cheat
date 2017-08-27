var qs = iBasket.Util.getQueryString();
                var msg = "";

                if(qs.inlineId){
                    msg = JSON.stringify({inlineId:qs.inlineId, userId:qs.userId, score:99999999});
                } else if(qs.chatId) {
                    msg = JSON.stringify({chatId:qs.chatId, messageId:qs.messageId, userId:qs.userId, score:99999999});
                }
                console.log("->msg: " + msg);

                xmlhttp.send(msg);
