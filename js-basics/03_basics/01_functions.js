 function add_two_nums(num1 ,num2){
    console.log(num1+num2);
    return 4;
    
 }
 let res1=add_two_nums(3,4) //will execute log statement inside fucntion 
 console.log(res1); // will print return value of function

 //rest operator -> accepts more than one value

 function calculate(...num1){
    return num1
 }
 console.log(calculate(200,300,400));

 const user={
    username : "hitesh",
    price : 999
 }
 function handleobj(obj1){
    console.log(`Username is ${obj1.username} and price is ${obj1.price}`)
 }
 
 handleobj(user)