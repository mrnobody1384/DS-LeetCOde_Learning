"use strict";
function groupAnagrams(strs) {
    console.log(strs.length);
    const newArr = [];
    if (strs.length == 1) {
        newArr.push(strs);
        return newArr;
    }
    let sortString = (stringg) => {
        return stringg.split("").sort().join("");
    };
    const mmap = new Map();
    for (let str of strs) {
        let sorted = sortString(str);
        if (!mmap.has(sorted)) {
            mmap.set(sorted, [str]);
        }
        else {
            mmap.set(sorted, [...mmap.get(sorted), str]);
        }
    }
    for (let i of mmap.values()) {
        newArr.push(i);
    }
    return newArr;
}
;
//expected = [["bat"],["nat","tan"],["ate","eat","tea"]]
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
//# sourceMappingURL=index.js.map