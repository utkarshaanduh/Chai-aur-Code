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

const myCoding = [
    {
        languageName: "javascript",
        languagefile: ".js"
    },
    {
        languageName: "python",
        languagefile: ".py"
    },
    {
        languageName: "cpp",
        languagefile: ".cpp"
    }
]

myCoding.forEach((item) =>
    {
        console.log(item.languageName);
        console.log(item.languagefile);
    })

/* 
"forEach" loop in js donot returns any value hence it 
is difficult to store the iterations of the loop in some 
array or some other data structure for that particular we 
use .filter function of javascript:
*/

const nums = [1,2,3,4,5,6,7,8,9,10]

const newnums = nums.filter((value) => { return value > 3 })

console.log(newnums);

/* 
Same can be done via using some logic for ".forEach":
*/

const arra = [];
 
nums.forEach((val)=>{
    if(val != 0){
        arra.push(val);
    }
})

console.log(arra);


