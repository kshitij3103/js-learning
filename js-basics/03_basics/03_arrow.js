const user={
    username: "kk",
    price: 999,
    welcome : function(){
        console.log(`${this.username} , welcome `) // here this will give instance of current object

    }

}
user.welcome()

// this -> here it will give empty object

// **************arrow func*************

const chai = () =>{
    let username='hitesh'
    console.log(this)
}
chai()


const add = (num1,num2) => (num1+num2) //implicit return 
console.log(add(4,5))