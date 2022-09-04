'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7];

const indexFunc = (array, find, start = 0) => {
    for (let i = start; i < array.length; i += 1) {
        if (array[i] === find) return i;
    }
    return -1;
}
console.log(indexFunc(arr, 5));


const lastIndexFunc = (array, find, start) => {
    if (!start) start = array.length - 1;
    for (let i = start; i >= 0; i -= 1) {
        if (array[i] === find) return i;
    }
    return -1;
}
console.log(lastIndexFunc(arr, 4,))


const findFunc = (array, callback) => {
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) return array[i];
    }

}
console.log(
    findFunc(arr, (item) => item > 1)
);


const findIndexFunc = (array, callback) => {
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) return array[i];
    }
    return -1;
};
console.log(
    findIndexFunc(arr, (item) => item > 3)
);


const includesFunc = (array, find, start = 0) => {
    for (let i = start; i < array.length; i += 1) {
        if (array[i] === find) return true;
    }
    return false;
}
console.log(includesFunc(arr, 10));


const everyFunc = (array, callback) => {
    for (let i = 0; i < array.length; i += 1) {
        if (!callback(array[i], i, array)) return false;
    }
    return true;
};
console.log(
    everyFunc(arr, (item) => item > 2)
);


const someFunc = (array, callback) => {
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) return true;
    }
    return false;
};
console.log(
    someFunc(arr, (item) => item > 5)
);