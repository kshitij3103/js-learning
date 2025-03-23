// concat
const arr=[1,2,3,4,5,];
const arr2=[7,8,9];
console.log(arr.concat(arr2));
 // spread operator

 const new_arr= [... arr,...arr2];
 console.log(new_arr);
 

//flat 
const another_arr=[1,2,3,[4,5,6],[34,56,[88,99]]];
console.log(another_arr.flat(3)); //depth

//Array.from("something") makes array in this case makes char array

// array.of(val1 , val2 ,val3) makes array
