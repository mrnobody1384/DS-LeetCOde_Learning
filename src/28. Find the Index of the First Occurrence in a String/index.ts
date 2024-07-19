//First Method Has Much Time Complexity 
function strStr_1(haystack: string, needle: string): number {
    let occIndex: number = -1;
    let findedIndex= []
    
    for(let i = 0; i<haystack.length;i++){
        if (haystack[i] == needle[0]){
            findedIndex.push(i)
        }
    }

    for (let i of findedIndex){
        let substringed = haystack.substr(i,needle.length)
        console.log(substringed)
        if (substringed == needle){
            console.log("ok")
            occIndex = i
            break
        }

    }
    return occIndex;


}


//Second Method has A little bit Less Than Before.
function strStr(haystack: string, needle: string): number {
    const findedIndex : number[] = [];
    let completed = '';
    let j = 0;
    let needleLength = needle.length
    for (let i:number | undefined = 0; i! < haystack.length; i!++) {
        if (haystack[i!] == needle[0]){
            if (findedIndex[0] != i && findedIndex[findedIndex.length-1] != i!){
                findedIndex.unshift(i!)
            }
        }

        if (haystack[i!] == needle[j]){
            j++;
            completed += haystack[i!]
            if (needle == completed){
                // console.log(findedIndex)
                // console.log(i)
                let lastElem = findedIndex[findedIndex.length -1]
                if (findedIndex.length > 1 && haystack.substr(lastElem,needleLength) != needle ){
                    findedIndex.pop()
                }
                return findedIndex[findedIndex.length -1]
            }

            continue;
        }

        if (haystack[i!] != needle[j]){
            j = 0;
            completed = ''

            if (findedIndex.length - 1 > 0 && completed == ''){
                findedIndex.pop()
                i = findedIndex[findedIndex.length -1 ] -1
            }
        }

    }


    return -1

};




const needle= "leeto"
const haystack = "leetcode"



console.log(strStr(haystack,needle))