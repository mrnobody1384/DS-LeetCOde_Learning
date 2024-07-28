//worst method to solve
/*
    i hade a better one but chalange didnt accept that. so i did sort them again.
*/

function topKFrequent(nums: number[], k: number): number[] {
    if (nums.length<=2 && nums[0] == nums[1]){
        return [nums[0]];
    }else if (nums.length<=2) {
        return nums
    }

    let biggestSortedArray:number[] =[]
    let mapOfThat = new Map()

    for (let i of nums){
        mapOfThat.set(i,mapOfThat.get(i)?mapOfThat.get(i)+1:1)
    }

    let m2= new Map([...mapOfThat.entries()].sort((a,b) => b[1] - a[1]))

    let i =0,j=1
    let m2_entire = [...m2.entries()]
    console.log(m2_entire)
     while (j<m2_entire.length || i<m2_entire.length){

        if (m2_entire[j] == undefined && i>0){
            biggestSortedArray.push(m2_entire[i][0])
            i++
            continue
        }
        if (m2_entire[i][1] ==m2_entire[j][1] && m2_entire[i][0] < m2_entire[j][0]){

            biggestSortedArray.push(m2_entire[i][0])
            i++;
            j++;
            
        }
        else if (m2_entire[i][1] ==m2_entire[j][1] && m2_entire[i][0] > m2_entire[j][0]) {
            biggestSortedArray.push(m2_entire[j][0])
            m2_entire.splice(j,1)
            
        }
        else{
            biggestSortedArray.push(m2_entire[i][0])
            i++
            j++
        }
     }
    

    // console.log(mapOfThat)
    console.log(biggestSortedArray)
    return biggestSortedArray.slice(0,k)
};

let numss = [1,1,1,2,2,3], k = 10
// numss=[-1,-1]
// numss =[3,0,1,0]
numss=[3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]
console.log(topKFrequent(numss,k))