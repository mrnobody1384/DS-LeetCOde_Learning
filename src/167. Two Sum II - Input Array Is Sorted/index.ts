//@ts-ignore
function twoSum(numbers: number[], target: number): number[] {
  //   let indices: number[] = [];
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    let sum = numbers[low] + numbers[high];
    if (sum == target) {
      return [low + 1, high + 1];
    }

    if (sum < target) {
      low++;
    }
    if (sum > target) {
      high--;
    }
  }
}

let numbers = [2, 7, 11, 15],
  targett = 9;
// numbers = [0, 0, 3, 4];
// targett = 0;
// numbers = [5, 25, 75];
console.log(twoSum(numbers, targett));
