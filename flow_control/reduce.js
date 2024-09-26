const nums = [1, 2, 3]
// const mytotal = nums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// }, 0)


// Here the "0" after the function scope defines the 
// initial accumulator value


// Now let us try to write it in arrow function:
const mytotal = nums.reduce((acc, currval)=>(acc+currval),0)

console.log(mytotal);