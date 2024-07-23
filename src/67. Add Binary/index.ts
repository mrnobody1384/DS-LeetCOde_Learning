function addBinary(a: string, b: string): string {


    let sum = []
    let i = a.length - 1
    let j = b.length - 1

    let reserved = ""
    while (i >= 0 || j >= 0){
        let num_for_add:null| string = null
        if ( reserved ){
            if (a[i] == '1' && b[j]== '1')
            {
                reserved = '1';
                sum.unshift('1')
                i--;
                j--;
            }
            else if ((a[i] == '1' && b[j] == '0') || a[i] == '0' && b[j] == '1')
            {
                sum.unshift('0')
                reserved = '1'
                i--;
                j--;
            }
            else if (a[i] == '0' && b[j] == '0'){
              sum.unshift('1')
              reserved = ''
              i--;
              j--;
            }
    
            else if ((a[i] == undefined || b[j] == undefined)){
               if (a[i] == undefined){
                if (b[j] == '1'){
                    sum.unshift('0')
                    reserved = '1'
                }else{
                    sum.unshift('1')
                    reserved = ''
                }
               }
               if (b[j] == undefined){
                if (a[i] == '1'){
                    sum.unshift('0')
                    reserved = '1'
                }else{
                    sum.unshift('1')
                    reserved = ''
                }
               }
               i--;
               j--;
            }

        }else{
            if (a[i] == '1' && b[j]== '1')
                {
                    reserved = '1';
                    sum.unshift('0')
                    i--;
                    j--;
                }
                else if ((a[i] == '1' && b[j] == '0') || a[i] == '0' && b[j] == '1')
                {
                    sum.unshift('1')
                    i--;
                    j--;
                    
                }
                else if (a[i] == '0' && b[j] == '0'){
                  sum.unshift('0')
                  i--;
                  j--;
                }
                else if ((a[i] == undefined || b[j] == undefined)){
                    if (a[i] == undefined){
                     sum.unshift(b[j])
                     }else{
                         sum.unshift(a[i])
                         
                     }
                    i--;
                    j--;
                 }
    
        }

        
    }
    if (reserved){
        sum.unshift('1')
    }
    return sum.join('')
};


let a = "1", b = "111"
a = '1111'
b= '1111'
a ="11"
b = "1001"
console.log(addBinary(a,b))