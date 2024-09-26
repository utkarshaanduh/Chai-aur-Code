const coding = ['java',"python","ruby","rust","cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })

/* 
    "forEach" is a method that is predefined in arrays in js
    "forEach" requires a callback function, callback function
    has no name
*/

/* 
we may write a callback function using the arrow function
as well:
*/

// coding.forEach((val)=>{
//     console.log(val);
// })

/* 
We may also pass the function reference in place of 
callback function, as below:
*/

// coding.forEach(customFunction)

// function customFunction(item)
// {
//     console.log(item);
// }

/*
We may pass various arguments like index and array
in the callback function as mentioned below: 
*/

coding.forEach((item,index,arr) =>{
    console.log(item, index, arr);
})



