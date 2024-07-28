"use strict";
// Easy Pissy Lements Quissy
function containsDuplicate(nums) {
    const mapp = new Map();
    for (let i of nums) {
        if (mapp.has(i)) {
            return true;
        }
        mapp.set(i, "");
    }
    return false;
}
;
let numsss = [1, 2, 3, 1];
console.log(containsDuplicate(numsss));
//# sourceMappingURL=index.js.map