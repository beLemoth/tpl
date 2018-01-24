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
            results.innerHTML = View.render('groups', {list: groups.items});
        });
    },
    photosRoute: function() {
        return Model.getPhotos().then(function(photos) {

            results.innerHTML = '';

            photos.items.forEach(function(photo){
                return Model.getComments(photo.id).then(function(comments){
                    results.innerHTML += View.render('photos', {photo: photo});

                    let commentsBlock = document.getElementById(photo.id+'');

                    if(comments.count) {

                        comments.items.forEach( function (comment, idx) {

                            let d = new Date(comment.date*1000);
                            comment.date = d.toLocaleDateString('ru');

                            commentsBlock.innerHTML += View.render('comments', {comment: comment , author: comments.profiles[idx]});
                        });
                    } else {
                        View.addBlock(commentsBlock, 'К этому фото нет комметариев', 'no-comment');
                    }



                });
            })

        });
    }
};
