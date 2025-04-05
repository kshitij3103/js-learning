const nums=[1,2,3,4,5,6,7]
// const newnums=nums.filter((num)=>num>4) //condition check
// console.log(newnums);
const newnums=[]
nums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
// console.log(newnums);
// const new_nums=nums.map((num)=>{ return num+10})
// console.log(new_nums);

// +++++++++++++++++++++++REDUCE+++++++++++++++++++
const ans =nums.reduce((acc,curr) => acc+curr,2)
console.log(ans);

