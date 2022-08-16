"use strict";
const fibs = (n) => {
    let result = [0];
    for (let i = 1; i < n; i++) {
        if (i === 1) {
            result.push(i);
        }
        if (i >= 1) {
            result.push(i + i - 1);
        }
    }
    return result;
};
console.log(fibs(8));
const fibsRec = (n) => {
    if (n === 1)
        return [0];
    if (n === 2)
        return [0, 1];
    const temp = fibsRec(n - 1);
    return [...temp, temp[n - 1] + temp[n - 2]];
};
console.log(fibs(8));
