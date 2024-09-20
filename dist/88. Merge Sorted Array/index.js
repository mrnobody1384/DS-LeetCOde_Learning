"use strict";
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    if (m == 0 && n > 0) {
        nums1 = nums2;
    }
    else if (n == 0 && m == 0) {
        nums1 = [];
    }
    else {
        let i = m - 1;
        let j = n - 1;
        let k = m + n - 1;
        while (k > 0) {
            if (nums1[i] > nums2[j]) {
            }
        }
    }
}
;
let nums_1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums_2 = [2, 5, 6];
let n = 3;
merge(nums_1, m, nums_2, n);
console.log(nums_1);
//# sourceMappingURL=index.js.map