var Controller = {
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
                            commentsBlock.innerHTML += View.render('comments', {comment: comment ,
                                                                                author: comments.profiles[idx],
                                                                                date: stringDate(comment.date)});
                        });
                    } else {
                        View.addBlock(commentsBlock, 'К этому фото нет комметариев', 'no-comment');     // add info block no-comment
                    }
                });
            })

        });
    }
};
