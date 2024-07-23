function plusOne(digits: number[]): number[] {

    let newNums:number[] = []
    let findeNine = 0;
    let lastElemIndex = digits.length - 1;
    if(digits[lastElemIndex] == 9){
        let sum : any = (digits[lastElemIndex] + 1).toString().split('')
        console.log(sum)
        for (let i = digits.length ;i >=0;i--){
            if (digits[i -1 ] == 9 && sum.length == 1){
                sum = (digits[i] + 1).toString().split('')
            }
            else if (digits [i-1] != 9 && digits[i-1] != undefined )
            {
                let numToAdd = digits[i-1] + (sum [sum.length -1 ] ? parseInt(sum.pop()) : 0)
                newNums.unshift(numToAdd)
                continue;
            }

            if (digits[i-1] == 9 && sum.length < 1){
                console.log("Its")
                newNums.unshift(digits[i-1])
                continue;
            }

            if (sum.length > 0) 
                newNums.unshift(parseInt(sum.pop()))
         
        }
        if (digits.length > newNums.length){
            //@ts-ignore
            newNums.unshift(digits.shift())
        }

    }

    else{
        
        digits[lastElemIndex] += 1;
        return digits;
    }
    
   return newNums
};

let digits = [2,4,9,3,9]

console.log(plusOne(digits))