let deepEqual = (baseObj,compareObj) => {

    if(baseObj===compareObj) return true;       // Оба ссылаются на один объект

    if(baseObj.length !== compareObj.length) return false;  // объекты имеют разное количество свойств

    let baseObjKeys = Object.keys(baseObj);         // массив имен свойств базового объекта

    for(let i=0; i<baseObjKeys.length; i++) {
        if(!(compareObj.hasOwnProperty(baseObjKeys[i]))) return false;     // одно из свойств отсутствует
    }

    for(let i=0; i<baseObjKeys.length; i++) {
        let key = baseObjKeys[i],
            baseValue = baseObj[key].valueOf(),
            compareValue = compareObj[key].valueOf();

        if(baseObj[key] !== compareObj[key] && typeof(baseObj[key]) !== 'object') return false;     // значение одного из свойств не равно
        if(baseValue !== baseObj[key] && baseValue !== compareValue) return false;                  // проверка даты
        if(typeof(baseObj[key]) === 'object' && typeof(compareObj[key]) === 'object')
            if(!deepEqual(baseObj[key],compareObj[key])) return false;                              // внутринние объекты не равны
    }

    return true;                //  если не попал в исключения значит объекты равны
};
/*
let objA = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: {
        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
    },
    prop5: 1000,
    prop6: new Date(2016, 2, 10)
},
    objB = {
    prop5: 1000,
    prop3: 'value3',
    prop1: 'value1',
    prop2: 'value2',
    prop6: new Date('2016/03/10'),
    prop4: {
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        },
        subProp1: 'sub value1'
    }
};

console.log(deepEqual(objA, objB)); //объекты идентичны, вернет true
*/

module.exports = deepEqual;