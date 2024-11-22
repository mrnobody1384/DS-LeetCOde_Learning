"use strict";
function threeSum(nums) {
    if (nums.length == 3) {
        if (nums[0] + nums[1] + nums[2] != 0) {
            return [];
        }
        else {
            return [[nums[0], nums[1], nums[2]]];
        }
    }
    let i = 0, j = i + 1, k = i + 2;
    let setOfRes = new Set();
    let states = [];
    let jWasStatic = false;
    while (i + 2 <= nums.length && k < nums.length) {
        if (nums[i] + nums[j] + nums[k] == 0) {
            setOfRes.add(JSON.stringify([nums[i], nums[j], nums[k]].sort((a, b) => a - b)));
        }
        states.push([nums[i], nums[j], nums[k]]);
        if (i == 2) {
            console.log("i is 3");
        }
        if (k + 1 == nums.length && !jWasStatic) {
            jWasStatic = true;
        }
        if (k + 1 == nums.length &&
            jWasStatic &&
            states.length % 7 != 0 &&
            j + 2 != nums.length) {
            k = i + 2;
        }
        if (k + 1 == nums.length) {
            i++;
            j = i + 1;
            k = i + 2;
            jWasStatic = false;
            continue;
        }
        if (jWasStatic) {
            j++;
        }
        k++;
    }
    return Array.from(setOfRes).map((str) => JSON.parse(str));
}
let numas = [-1, 0, 1, 2, -1, -4];
numas = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
// we have to find three number which sum of them will be 0;
console.log(threeSum(numas));
//# sourceMappingURL=index.js.map