// All helpful functions are in the entry.js file

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
    albumsRoute: function() {
        return Model.getAlbums().then(function(albums){
            results.innerHTML = View.render('albums',{list: albums.items})
        })
    },
    photosRoute: function(albumId) {
        return Model.getPhotos(albumId).then(function(photos) {
            albumDetails.dataset.albumId = albumId;
            albumDetails.innerHTML = View.render('photos', {list: sorting(photos.items, sortProp.value, !!sortDirect.value)});
        });
    },
    commentsRoute: function(params) {
        let paramsArray = params.split('|');

        return Model.getComments(parseInt(paramsArray[0])).then(function(comments) {
            photoDetail.innerHTML = View.render('photo', {photo: paramsArray[1]});

            let commentsBlock = albumDetails.querySelector('.comments');

            if(comments.count) {
                comments.items.forEach(function (comment) {
                    commentsBlock.innerHTML += View.render('comments', {comment: comment, author: getAuthor(comments, comment), date: stringDate(comment.date)});
                });
            } else {
                View.addBlock(commentsBlock, 'Нет комментариев', 'no-comment');
            }
        });
    }

};
