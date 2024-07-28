"use strict";
// first mehtod but it can use sort and then compare them together.
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    const map1 = new Map();
    const map2 = new Map();
    let indexS = 0, indexT = 0;
    while (indexS < s.length) {
        if (map1.has(s[indexS])) {
            map1.set(s[indexS], map1.get(s[indexS]) + 1);
        }
        else {
            map1.set(s[indexS], 1);
        }
        indexS++;
        if (map2.has(t[indexT])) {
            map2.set(t[indexT], map2.get(t[indexT]) + 1);
        }
        else {
            map2.set(t[indexT], 1);
        }
        indexT++;
    }
    const etrable = map1.entries();
    for (let elem of etrable) {
        if (map2.has(elem[0])) {
            if (elem[1] != map2.get(elem[0])) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
}
;
let ss = "anagram", t = "nagaram";
// ss = "rat", t = "car"
console.log(isAnagram(ss, t));
//# sourceMappingURL=index.js.map