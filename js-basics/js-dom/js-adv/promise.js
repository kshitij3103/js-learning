// const promise1=new Promise(function (resolve,reject){
//     // do an async task
//     //db task ,crypto
//     setTimeout(function(){
//     console.log('async task is done');
//     resolve()

//     },1000)
// })
// promise1.then(function(){
//     console.log('promise consumed');
    
// })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2')
//         resolve();
        
//     },1000)
// }).then(function(){
//     console.log('async task 2 resolved');
    
// })

// const promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: 'kk',email:'kkk@html'}) ;

//     },1000)
    
    
// })
// promise3.then(function(u){
//     console.log(u);
    

// })

 const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"kkp",password:"1234"})
        }
        else{
            reject("ERROR..smthng went wrong")
        }
    },1000)
 })
promise4.then((user)=>{
    console.log(user);
    return user.username

    
 }).then((username)=>{
    console.log(username);
    

 }).catch((err)=>{
    console.log(err);
    
 }).finally(()=>{
    console.log("finally done");
    
 })


 const promise5=new Promise (function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"1py234"})
        }
        else{
            reject("JS..smthng went wrong")
        }
    },1000)
 })
 async function consumepromise5() {
   try { 
     const response=await promise5
    console.log(response);
    
   } catch (error) {
    console.log(error);
    
    
   }
    
    
 }
 consumepromise5()
 
