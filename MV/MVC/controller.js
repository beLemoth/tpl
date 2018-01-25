let Controller = {
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
    photosRoute: function(albumId) {
        return Model.getPhotos(albumId).then(function(photos) {

            View.addAlbum(albumId);

            sorting(photos.items, sortProp.value, !!sortDirect.value).forEach(function(photo){
                albumDetails.innerHTML += View.render('photos', {photo: photo});
            });

            return Model.getAllComments(albumId);
        }).then(function(comments){
            comments.items.forEach(function(comment){
                let targetBlock = document.getElementById('photo'+comment.pid);

               return Model.getUser(comment.from_id).then(function(user){
                   targetBlock.innerHTML += View.render('comments', {comment: comment, author: user[0], date: stringDate(comment.date)});
                })
            })

            /*                    let commentsBlock = document.getElementById('photo'+photo.id);

                                if(comments.count) {
                                    comments.items.forEach( function (comment) {

                                        let profiles = comments.profiles.filter(function(profile){
                                            return profile.id === comment.from_id;
                                        });

                                        commentsBlock.innerHTML += View.render('comments', {comment: comment,
                                                                                            author: profiles[0],
                                                                                            date: stringDate(comment.date)});
                                    });
                                } else {
                                    View.addBlock(commentsBlock, 'К этому фото нет комметариев', 'no-comment');     // add info block no-comment
                                }*/
        });
    },
    albumsRoute: function() {
        return Model.getAlbums().then(function(albums){
            return results.innerHTML = View.render('albums',{list: albums.items})
        })
    }
};
