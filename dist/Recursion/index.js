"use strict";
// firts example "Reverse String";
function Reverse(input) {
    if (input.length == 0) {
        return input;
    }
    return Reverse(input.substring(1)) + input[0];
}
console.log(Reverse("Hello"));
//# sourceMappingURL=index.js.map