// singleton: "object.create"

// object literals

// const mysym = Symbol("mykey1") // first define a symbol

// const Jsuser = {
//     name: "Hitesh",
//     "fullname": "hitesh chaudhary",
//     [mysym]: "1", // key value pair for symbol
//     age: 18,
//     email: "hello@google.com",
//     isloggedin: true,
//     lastloggedin: ["Monday", "saturday"]
// }

// console.log(Jsuser.isloggedin)

// console.log(Jsuser["email"]);

// console.log(Jsuser);

// Freezing the object (no changes will occur in the object)
//Object.freeze(Jsuser);

// Jsuser.greeting = function(){
//     console.log("Hello jsuser");
// }

// Jsuser.greeting2 = function(){
//     console.log(`Hello Js User, ${this.name}`);
// }

// console.log(Jsuser.greeting());
// console.log(Jsuser.greeting2());


/*
    Now we will be talking about the singleton objects 
    in javascript
*/ 

// cosnt tinderUser = new Object()

const tinderUser ={}

tinderUser.id = "1233hfsdo"
tinderUser.name = "Sam"
//console.log(tinderUser);

const regularUser = {
    email: "something@gmail.com",
    names: "abc"
}

// console.log(regularUser.fullname.username.firstName);


// // Merging two or more objects...

// const ans = Object.assign({}, tinderUser, regularUser)
// console.log(ans);

// // OR we will use spread syntax

// const obj3 = {...tinderUser, ...regularUser}
// console.log(obj3);

// we may make array of objects:

const user = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id:2,
        email: "2@gmail.com"
    },
    {
        id:3,
        email: "3@gmail.com"
    }
]

console.log(user[1].email);

console.log(Object.keys(tinderUser))// this returns an array
/*
    Object.keys returns array of keys
    Object.values returns array of values
    Object.entries returns arrays of key value pair [keyi, vali]
*/

console.log(tinderUser.hasOwnProperty("name"));// whether the object has that property

