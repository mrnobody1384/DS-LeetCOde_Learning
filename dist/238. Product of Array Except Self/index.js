"use strict";
// my first approch which has Time Limited.
function productExceptSelf_1(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        let expo_res = 1;
        for (let j = 0; j < nums.length; j++) {
            const element = nums[j];
            if (j != i) {
                expo_res *= nums[j];
            }
        }
        if (expo_res == -0) {
            newArr[i] = 0;
            continue;
        }
        newArr[i] = expo_res;
    }
    return newArr;
}
;
function productExceptSelf(nums) {
    let newArr = [];
    let expo_res = 1;
    let nither_zero = 1;
    let leftPart = [1];
    let rightPart = [];
    rightPart[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        //@ts-ignore
        newArr[i] = leftPart;
        leftPart[i] = nums[i - 1] * leftPart[i - 1];
    }
    for (let j = nums.length - 2; j >= 0; j--) {
        rightPart[j] = nums[j + 1] * rightPart[j + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        newArr.push(leftPart[i] * rightPart[i]);
    }
    console.log(leftPart);
    console.log(rightPart);
    return newArr;
}
let nnums = [1, 2, 3, 4];
// res = [24,12,8,6]
// nnums = [-1,1,0,-3,3]
console.log(productExceptSelf(nnums));
//# sourceMappingURL=index.js.map