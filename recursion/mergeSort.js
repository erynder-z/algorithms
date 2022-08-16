"use strict";
const mergeSort = (arr) => {
    const merge = (leftArray, rightArray) => {
        let sorted = [];
        while (leftArray.length > 0 && rightArray.length > 0) {
            if (leftArray[0] < rightArray[0]) {
                sorted.push(leftArray.shift());
            }
            else {
                sorted.push(rightArray.shift());
            }
        }
        return [...sorted, ...leftArray, ...rightArray];
    };
    const halfArray = arr.length / 2;
    if (arr.length <= 1) {
        return arr;
    }
    const left = arr.splice(0, halfArray);
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
};
console.log(mergeSort([8, 4, 1, 3, 9, 69, 999, 45654, 111, 0])); //[ 0, 1, 3, 4, 8, 9, 69, 111, 999, 45654]
