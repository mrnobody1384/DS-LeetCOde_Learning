"use strict";
/*
this approch is more efficient because we use flag.
if list is already sorted it prevent to itrate them again.
*/
function Sort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let flag = false;
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1], nums[j + 1] = temp;
                flag = true;
            }
        }
        if (flag == false) {
            break;
        }
        console.log(i);
    }
    return nums;
}
console.log(Sort([5, 4, 3, 4, 8, 9, 10, 1, 7, 2, 11, 12]));
//# sourceMappingURL=index.js.map