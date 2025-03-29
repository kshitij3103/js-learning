// const tinderUser=new Object() //singleton
const tinderUser={};
tinderUser.id="1234"
tinderUser.name="Kshitij"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email: "ii@google",
    fullname:{
        userfullname:{
            firstname: "kko",
            lastname: "sssd"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2) //combining objects

const obj4={...obj1,...obj2} //spread operator
console.log(obj3);
 //console.log(Objects.keys(objname))  keys values entries (gives array)

 // hasOwnProperty() check if object has this property



