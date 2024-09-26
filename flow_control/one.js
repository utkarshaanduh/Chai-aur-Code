let a = 10;
while(a--)
{
    if(a>1){
        continue;
    }else{
        console.log(`Last iternation ${a}`)
    }
}

/*
    Truthy and Falsy values in js
    Falsy values: false, 0, -0, BigInt 0n, "", null, undefined and NaN 
    Truthy values: rest all are truthy values like: "0", "false",
    " ", [], function(){} 
*/

// for checking if the array is empty:
let arr = [1,2,3,4]
if(arr.length != 0)
    console.log("Not Empty");
    

// For checking empty objects we will go as:

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null, undefined
// (a??b): if value of (a == null || undefined) then it will use the value in "b"
// (a??b??c): for more than one values
let val1;
// val1 = 5 ?? 10  Output: 5
// val1 = null ?? 10 Output: 10
console.log(val1);

//Terniary operator
console.log(5<6 ? "True" : "false");
