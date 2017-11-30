VK.init({
    apiId: 6280323
});

let promise = new Promise((resolve, reject) => {
    VK.Auth.login( response => {
        if (response.session) {
            console.log('всё ок!');
            resolve();
        } else {
            alert('Не удалось авторизоваться');
            reject();
        }
    }, 2);
}).then( () => {
    return new Promise((resolve, reject) => {
        VK.api('friends.get', {}, response => {
            if(response.error) {
                alert(response.error.error_msg);
                reject();
            } else {
                let friendsIds = '';

                response.response.forEach((friendId,idx) => {
                   if (idx === response.response.length-1) friendsIds += `${friendId}`;
                   else friendsIds += `${friendId}, `
                });
                console.log(friendsIds);
                resolve(friendsIds);
            }
        })
    })
}).then( friendsIds => {
    return new Promise((resolve, reject) => {
        VK.api('users.get',{'user_ids':friendsIds,'fields':'photo_100, bdate'},response => {
            if(response.error) {
                alert(response.error.error_msg);
                reject();
            } else {
                resolve(response.response);
            }
        })
    })
}).then( friendsList => {

});
