// let score = "33"

// console.log(typeof(score))

// let val = Number(score)
// console.log(typeof(val))
// console.log(val)

// string with only numbers in it will convert seamlessely

// let our score be "33abc" 
// then we convert it to Number
// it will show its data type as number but
// its value will be *NaN

// if score's value was null
// we would have got its value in Number as 0

// for undefined the value will be NaN

// for boolean value true == 1 && false == 0

// for some string with alphabets it will be NaN

// this may lead to some error so always check

// let isloggedin = 1
// let boolisloggedin = Boolean(isloggedin)
// console.log(boolisloggedin)

/*
    From here we got to know that value 1 and 0 are converted to 
    boolean value of true and false

    for an empty string its bool value is 0
    and for a non-empty string it will be equal to 1

    similarly a number will be transformed to string using String(var_name)
*/

let someno = "33abc"
console.log(someno);
console.log(typeof someno)
