function climbStairs(n: number): number {
    let mem:number[] = []
   return helper(n,mem)
};

function helper(n:number,mem:number[]){
   if (n ==1 || n ==0){
    return 1;
   }

   if (!mem[n-1] || !mem[n-2]) {
    mem[n] = helper(n-1,mem) + helper(n-2,mem)
   }

   return mem[n]
}