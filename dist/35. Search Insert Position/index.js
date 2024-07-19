"use strict";
function searchInsert(nums, target) {
    for (let i = nums.length; i >= 0; i--) {
        let after = nums[i - 1];
        let current = nums[i];
        let lastIndex = nums.length - 1;
        let last = nums[lastIndex];
        if (current == target)
            return i;
        if (target < current && target > after)
            return i;
        if (target > last)
            return lastIndex + 1;
    }
    return 0;
}
;
const nums__ = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums__, target));
//# sourceMappingURL=index.js.map