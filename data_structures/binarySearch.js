"use strict";
const binarySearch = (target, list) => {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];
        if (guess === target) {
            return mid; // index of target
        }
        if (guess > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return null; // if not found;
};
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const foundIndex = binarySearch(9, someArray);
foundIndex ? console.log(someArray[foundIndex]) : console.log('no such item');
