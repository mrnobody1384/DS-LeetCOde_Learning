"use strict";
function mySqrt(x) {
    if (x == 0) {
        return 0;
    }
    let i = 1;
    let sq = null;
    while (true) {
        if (i * i <= x && (i + 1) * (i + 1) > x) {
            sq = i;
            break;
        }
        i++;
    }
    return sq;
}
;
// best Strategy is using log(n) or like binary search.
let x = 15;
console.log(mySqrt(x));
//# sourceMappingURL=index.js.map