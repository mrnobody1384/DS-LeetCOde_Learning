"use strict";
function findBiggest(array) {
    let biggest = array[0];
    let biggest_index = 0;
    for (let i = 1; i < array.length; i++) {
        if (biggest < array[i]) {
            biggest = array[i];
            biggest_index = i;
        }
    }
    return biggest_index;
}
function selectionSort(array) {
    let newArray = [];
    const originalLength = array.length;
    for (let i = 0; i < originalLength; i++) {
        console.log(array.length);
        //@ts-ignore
        newArray.push(array.pop(findBiggest(array)));
    }
    console.log(newArray);
    return newArray;
}
const list = [1, 2, 3, 4, 5, 6, 10, 15, 20];
selectionSort(list);
//# sourceMappingURL=index.js.map