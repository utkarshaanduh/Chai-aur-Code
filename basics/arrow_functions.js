/*
    Before knowing about arrow function we must
    know about the this keyword in javascript 
*/

const user ={
    username: "Hitesh",
    price: 3693,
    welcomeMessage: function(){
            console.log(`${this.username} Welcome to website`);
            console.log(this);
    }
}

// console.log(user.welcomeMessage());
// user.username = "sam"
// console.log(user.welcomeMessage());

/* this refers to the current context therefore when we 
write "console.log(this)" globally it will return empty object
as there is no current context for it, but earlier it wasn't
the case as earlier there were no node engine and js was 
run on browser so browser used to return window and not
empty object for the global "console.log(this)" call */

// function chai()
// {
//     let username = "Hitesh"
//     console.log(this)
// }

// chai()

/* we may call console.log(this) in a function but not 
console.log(this.username) as this will return "undefined" */

// const chai = () => {
//     let username = "Hitesh"
//     console.log(this);
// }

// chai()

/* As we used this.username key word in arrow function
we get "undefined" but when we go for only 
console.log(this); we will get empty parathsis */

/* If arrow function can be declared in just a line then
we may use implicit return(when we need not to write the 
return keyword):
*/

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(33945793,3480957));
// OR
const addtwo = (num1, num2) => (num1 + num2);
console.log(addTwo(33945793,3480957));

// While returning object while using implicit retrun

const names = (num1, num2) => ({username: "Hitesh"});
console.log(names(33945793,3480957));

// we may also use it for the arrays:
const myArray = [0,3,2,9,5,2]

myArray.forEach(()=>{}) //and many more

