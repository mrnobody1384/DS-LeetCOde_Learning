"use strict";
function removeDuplicates(nums) {
    const map = new Map();
    for (let i of nums) {
        if (!map.has(i)) {
            map.set(i, 1);
        }
        else {
            let oldValue = map.get(i);
            map.set(i, ++oldValue);
        }
    }
    const numa = [];
    //console.log(map)
    let keys = [...map.keys()];
    console.log(keys);
    for (let i = 0; i < nums.length; i++) {
        // console.log(i)
        if (keys[i] || keys[i] == 0 || map.has(i)) {
            nums[i] = keys[i];
        }
        else {
            nums[i] = -1;
        }
    }
    ;
    console.log(nums);
    console.log(map);
    return map.size;
}
;
const nums_ = [2, 2, 1];
removeDuplicates(nums);
//# sourceMappingURL=index.js.map