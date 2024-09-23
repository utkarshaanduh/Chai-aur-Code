/* 

    Javascript is a dynamically typed language
    i.e. same var may be string, array or even a number

    Primitive:
    string, number, boolean, null, undefined, symbol
    bigint etc

    Reference(Non-Primitive):
    array, object, functions only

*/

// let a = Symbol('abc')
// let b = Symbol('abc')
// console.log(a===b); // ans -> False as Symbol will always give unique value
                    // even if they are containing same values 

// Curly braces ke andar ki values are objects

// let obj = {
//     name: "Hitesh",
//     age: 23,
//     company:"Google"
// }
// console.log(obj);

// Functions may be treated as variables in javascript as it
// is done in high-order languages (functional logic)

const myfunction = function(){
    console.log("Hello World");
}


// Datatype of a function is a "function" or "object function"