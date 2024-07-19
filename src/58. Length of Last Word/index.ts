// First Method With The Good Time Complexity --> more Than 80%
function lengthOfLastWord(s: string): number {
    let trimed : string = s.trim();
    let i = trimed.length - 1;
    if (trimed.length == 1){
        return 1
    }

    if (!trimed.includes(" ")) return trimed.length
    while ( i >= 0){
        if (trimed[i] == " "){
            return trimed.length - i -1
        }
        i --
    }

    

  return 0;  
};

// Lets Try Another Method With 29.00% Time Complexity;


function lengthOfLastWord_2(s: string): number {
    let trimed : string = s.trim();
    let i = trimed.length - 1;
    if (trimed.length == 1){
        return 1
    }

    if (!trimed.includes(" ")) return trimed.length
    
    let Words = trimed.split(" ")
    let lastWord = Words[Words.length -1].length
    return lastWord

};



let s = "day"
console.log(lengthOfLastWord(s))