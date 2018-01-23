var Controller = {
    musicRoute: function() {
        return Model.getMusic().then(function(music) {
            results.innerHTML = View.render('music', {list: music});
        });
    },
    friendsRoute: function() {
        return Model.getFriends().then(function(friends) {
            results.innerHTML = View.render('friends', {list: friends});
        });
    },
    newsRoute: function() {
        return Model.getNews().then(function(news) {
            results.innerHTML = View.render('news', {list: news.items});
        });
    },
    groupsRoute: function() {
        return Model.getGroups().then(function(groups) {
            results.innerHTML = View.render('groups', {list: groups});
        });
    },
    photosRoute: function() {
        return Model.getPhotos().then(function(photos) {
            results.innerHTML = '';
            photos.items.forEach(function(photo){
                return Model.getComments(photo.id).then(function(comments){
                    results.innerHTML += View.render('photos', {photo: photo});
                    comments.items.forEach( function (comment, idx) {
                        let commentsBlock = document.getElementById(photo.id+'');
                        let name = `${comments.profiles[idx].first_name} ${comments.profiles[idx].last_name}` ;
                        commentsBlock.innerHTML += View.render('comments', {text: comment.text, name: name});
                    });
                })
            });

        });
    }
};
