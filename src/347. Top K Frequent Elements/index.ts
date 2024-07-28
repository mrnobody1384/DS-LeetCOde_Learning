function topKFrequent(nums: number[], k: number): number[] {
    if (nums.length<=2){
        return nums;
    }

    let biggestSortedArray =[]
    let mapOfThat = new Map()

    for (let i of nums){
        mapOfThat.set(i,mapOfThat.get(i)?mapOfThat.get(i)+1:1)
    }

    
    console.log(mapOfThat)
    return []
};

let numss = [1,1,1,2,2,3], k = 2
// numss=[1,2]
console.log(topKFrequent(numss,k))