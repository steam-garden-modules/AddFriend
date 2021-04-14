var helper = require('../moduleHelper');
module.exports = {
    Mode: helper.mode.multi,
    fields: {
        AccountToAdd: {
            type: helper.field.type.text,
            text: "Steam64 of the account to add"
        }
    },
    Execute: function(objectToEdit, steamClient, RequestCommunity, RequestStore, SessionID, options){
        return new Promise(function (resolve, reject) {
            if(objectToEdit.AccountToAdd && objectToEdit.AccountToAdd != null){
                RequestCommunity.post({
                    url: "https://steamcommunity.com/actions/AddFriendAjax",
                    form:{
                        sessionID: SessionID,
                        steamid: objectToEdit.AccountToAdd,
                        accept_invite: 0
                    }
                }, function (error, response, body) {
                    console.log(body);
                    resolve(true);
                });
            }else{
                reject("You did not enter a steamID");
                return;
            }
        });
    }
}