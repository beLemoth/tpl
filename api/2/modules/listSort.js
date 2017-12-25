let listSort = list => {

    console.log(list);

    let haveBDate = [],
        noBDate = [];

    list.forEach( item => {
        if (item.bdate) {

        } else noBDate.push(item);
    });

};

module.exports = listSort;