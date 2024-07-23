"use strict";
class DynamicArray {
    size = 0;
    capacity = 0;
    data;
    expo(expon) {
        return Math.pow(2, expon);
    }
    increaseCap(fromPush) {
        let expon = parseInt(Math.sqrt(this.size).toFixed());
        let expo_res = this.expo(expon);
        let new_size = fromPush ? this.size + 1 : this.size;
        if (new_size <= expo_res) {
            if (this.size <= this.capacity) {
            }
            else {
                this.capacity = expo_res;
            }
        }
        else {
            expon += 1;
            expo_res = this.expo(expon);
            this.capacity = expo_res;
        }
    }
    decreaseCap() { }
    constructor(...values) {
        this.size = values.length;
        this.increaseCap(undefined);
        this.data = new Array(this.capacity);
        // this.array = Array.from(values);
        this.data = Array.from(values);
    }
    push(value) {
        if (this.size < this.capacity) {
            this.data.push(value);
        }
        else {
            this.increaseCap(true);
            let newArr = new Array(this.capacity);
            newArr = Array.from([...this.data, value]);
            this.data = newArr;
            //   this.array.push(value);
        }
        this.size++;
    }
    pop() {
        if (this.size == 0) {
            console.log("Index Is Out Of Range");
            return -1;
        }
        return 0;
    }
}
const arr = new DynamicArray(1, 2, 3, 4, 5, 6, 7, 8
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17
);
console.log(arr);
arr.push(9);
console.log(arr);
//# sourceMappingURL=index.js.map