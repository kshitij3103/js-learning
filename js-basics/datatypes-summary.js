/*primitive

7 types : String ,Number , Boolean ,Null , undefined , symbol,bigint

called by value
*/

/* Reference (Non Primitve)



array , objects , functions 


*/

// *****************MEMORY****************
// stack -> primitive
//heap -> non primitive

let my_yt_name="first";
let new_name=my_yt_name
new_name="second";
console.log(my_yt_name)
console.log(new_name);

let user={
    email: "user@yyy.com",
    upi : "yy@ybl"

}
let user2=user;
user2.email="555@yahoo.com";
console.log(user.email);