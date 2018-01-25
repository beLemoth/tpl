Handlebars.registerHelper('formatTime', function(time) {
    let minutes = parseInt(time / 60),
        seconds = time - minutes * 60;

    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
});

Handlebars.registerHelper('formatDate', function(ts) {
    return new Date(ts * 1000).toLocaleString();
});

// convert date to string
function stringDate(integerDate) {
    return new Date(integerDate*1000).toLocaleDateString('ru');
}

// sorting photos function
function sorting(arr, prop, direct) {

    prop = prop || 'date';    // default sorting property
    direct = direct || false;    // default sorting direction

    return arr.sort(function(val1,val2) {

        if(val1[prop].hasOwnProperty('count')) {
            val1 = val1[prop].count;
            val2 = val2[prop].count;
        } else {
            val1 = val1[prop];
            val2 = val2[prop];
        }

        if(direct) return val2 - val1;
        return val1 - val2;
    })
}

// change sorting parameters listener
function changeSortProp(id) {
    if(id) Router.handle('photos', id);
}

// get comment author parameters
function getAuthor(comments, comment) {
    return comments.profiles.filter(function(profile){
        return profile.id === comment.from_id;
    })[0];
}

new Promise(function(resolve) {
    window.onload = resolve;
}).then(function() {
    return Model.login(5267932, 2 | 4 | 8 | 8192 | 262144);
}).then(function() {
    return Model.getUser().then(function(users) {
        header.innerHTML = View.render('header', users[0]);
    });
}).catch(function(e) {
    console.error(e);
    alert('Ошибка: ' + e.message);
});

