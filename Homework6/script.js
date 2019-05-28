'use strict';

function filterBy(arr, theTipe) {
    return arr.filter((item) => typeof(item) !== theTipe || !item);
}

let arr = ['hello', 'world', 23, '23', null];

console.log(filterBy(arr, 'string'));


