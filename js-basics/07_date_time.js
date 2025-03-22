let my_date = new Date();
// console.log(my_date.toString());
// console.log(my_date.toDateString());
// console.log(my_date.toLocaleString('en-IN'));
// let created_date=new Date(2023,0,23);
// console.log(created_date.toLocaleString());

// let created_date=new Date("24-01-2023"); 
// console.log(created_date.toLocaleString());
// yyyymmdd and mmddyyyy supported not ddmmyyyy

let my_time=Date.now();
console.log(my_time); // get time

// for seconds 
// console.log(Math.floor(my_time/1000));


 // date. getmonth .getday 

console.log(my_date);
console.log(my_date.toLocaleString('default',{
    weekday: "long"
}))







