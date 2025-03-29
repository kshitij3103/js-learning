//singleton
//Object.create() constructor

mysym = Symbol("key1");
//object literals
const JsUser={
    name: "Kshitij",
    "full name": "kk kk",
    age: 19,
    [mysym]: "key1",
    location: "Delhi",
    email:"kkk@hh",
    igLoggedIn: false,
    last_login_days:["monday","tuesday"]

}
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(JsUser[mysym]);

JsUser.email="nwe@mail";
//Object.freeze(JsUser) //freeze so that val cant be changed
JsUser.email="microsoft"
console.log(JsUser["email"]);

 JsUser.greet=function(){
    console.log("hello js user");
    
 }
 JsUser.greet2=function(){
    console.log(`hello is this ${this.name}`)
 }
 console.log(JsUser.greet());
 console.log(JsUser.greet2())



