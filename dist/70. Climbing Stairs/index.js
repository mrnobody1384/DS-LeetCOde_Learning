"use strict";
function climbStairs(n) {
    let mem = [];
    return helper(n, mem);
}
;
function helper(n, mem) {
    if (n == 1 || n == 0) {
        return 1;
    }
    if (!mem[n - 1] || !mem[n - 2]) {
        mem[n] = helper(n - 1, mem) + helper(n - 2, mem);
    }
    return mem[n];
}
//# sourceMappingURL=index.js.map