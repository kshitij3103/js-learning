//for of




// for(const num of arr){
//     console.log(num);
    
// }
let myMap = new Map([
    [1, "One"],
    [2, "Two"]
]);
for(let it of myMap.entries()){
    console.log(it[1]);
    
}
const my_obj={
    js:"javascirpt",
    cpp:"c ++",
    rb:"ruby"
}
for (const key in my_obj){
    console.log(`${key} is for ${my_obj[key]}`);
     
}

// Objects	             for...in (iterates over keys)
// Arrays & Iterables	 for...of (iterates over values)
// Maps & Sets	         for...of (iterates over entries)

// for each loop with callback functions

const arr=["apple","mango","orange","banana"]
arr.forEach(function (val) {
    console.log(val);
    

})
arr.forEach((item,index) =>{
    console.log(item,index);
    
})
 

function print_items(items){
    console.log(items);
    
}
arr.forEach(print_items)

const mycoding=[
    {
       languageName:"js",
       languageFile:"py" 
    },
    {},
    {}
]
mycoding.forEach((item,index)=>{
    console.log(item.languageName,index); 
})