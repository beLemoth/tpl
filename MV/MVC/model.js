let Model = {
    login: function(appId, perms) {
        return new Promise(function(resolve, reject) {
            VK.init({
                apiId: appId
            });

            VK.Auth.login(function(response) {
                if (response.session) {
                    resolve(response);
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, perms);
        });
    },
    callApi: function(method, params) {
        return new Promise(function(resolve, reject) {
            VK.api(method, params, function(response) {
                if (response.error) {
                    reject(new Error(response.error.error_msg));
                } else {
                    resolve(response.response);
                }
            });
        });
    },
    getUser: function(userId) {
        if (userId) return this.callApi('users.get', {user_ids: userId, fields: 'photo_50', v: 5.71});
        return this.callApi('users.get', {});
    },
    getFriends: function() {
        return this.callApi('friends.get', {fields: 'photo_100'});
    },
    getNews: function() {
        return this.callApi('newsfeed.get', {filters: 'post', count: 20});
    },
    getGroups: function() {
        return this.callApi('groups.get', {extended: 1, v: 5.71});
    },
    getPhotos: function(albumId) {
        return this.callApi('photos.get', {extended: 1, album_id: albumId, v: 5.71});
    },
    getComments: function(photoId) {
        return this.callApi('photos.getComments', {photo_id: photoId, extended: 1, v: 5.71});
    },
    getAllComments: function(albumId) {
        console.log(albumId);
        return this.callApi('photos.getAllComments', {album_id: albumId, extended: 1, v: 5.71});
    },
    getAlbums: function() {
        return this.callApi('photos.getAlbums', {need_covers: 1, v: 5.71});
    }
};
