"use strict";
function removeElement(nums, val) {
    let k = 0;
    let i = 0;
    let j = nums.length - 1;
    if (nums.length < 1) {
        return 0;
    }
    if (val < 0) {
        return 0;
    }
    if (nums.length == 1 && nums[0] == val) {
        return 0;
    }
    if (nums.length == 1 && nums[0] != val)
        return 1;
    while (i <= j) {
        console.log(i);
        if (nums[i] == nums[j] && nums[i] == val && nums.length == 2) {
            if (k == 0) {
                return 0;
            }
            return k;
        }
        if (nums[i] == nums[j] && nums[i] == val) {
            j--;
            continue;
        }
        if (nums[i] == val) {
            let current = nums[i];
            let last = nums[j];
            nums[i] = last;
            nums[j] = current;
            i++;
            j--;
            k++;
            continue;
        }
        if (nums[i] != val) {
            i++;
            k++;
        }
    }
    return k;
}
;
// let nums :any = [1,1]
// const nums = [3,2,2,3]
// const nums = [0,1,2,2,3,0,4,2]
// const nums = [3,3]
// const nums = [4,5]
const nums = [2, 2, 2];
const res = removeElement(nums, 2);
console.log(res);
//# sourceMappingURL=index.js.map