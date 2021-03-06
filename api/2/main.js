'use strict';

VK.init({
    apiId: 6280323
});

// function for array sort custom method
let compareItems = (firstItem,secItem) => {
    if (firstItem.bdateOffset>secItem.bdateOffset) return 1;
    if (firstItem.bdateOffset<secItem.bdateOffset) return -1;
};

// list sorting function
let listSort = list => {

    let haveBDate = [],
        noBDate = [];

    let currentDate = new Date();

    let currentMonth = currentDate.getMonth() + 1,
        currentDay = currentDate.getDate(),
        currentYear = currentDate.getFullYear();

    list.forEach(item => {
        if (item.bdate) {
            let bDateArray = item.bdate.split('.');

            let bDay = parseInt(bDateArray[0]),
                bMonth = parseInt(bDateArray[1]);

            let monthOffset =  bMonth - currentMonth;
            let dayOffset = bDay - currentDay;

            if (monthOffset<0) monthOffset += 12;
            if (monthOffset===0 && dayOffset<0) monthOffset = 12;

            item.bdateOffset = dayOffset + monthOffset * 30;

            if (bDateArray[2]) {
                let age = currentYear - parseInt(bDateArray[2]);

                if (currentMonth < bMonth) --age;
                if (currentMonth === bMonth){
                    if (currentDay < bDay || currentDay === bDay) --age;
                }

                item.age = age;
            }

            haveBDate.push(item);

        } else noBDate.push(item);
    });

    haveBDate.sort(compareItems);

    return haveBDate.concat(noBDate);
};

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
        VK.api('friends.get', {'order':'name','fields':'photo_100, bdate'}, response => {
            if(response.error) {
                alert(response.error.error_msg);
                reject();
            } else {
                resolve(response.response);
            }
        })
    })
}).then( friendsList => {

    let sortedList = listSort(friendsList);

    // handlebars init
    let source = document.getElementById('source-template').innerHTML;
    let template = Handlebars.compile(source);

    let result = document.querySelector('.content');

    result.innerHTML = template({list: sortedList});
});
