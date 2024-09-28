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

const course = [
    {
        itemname: "js course",
        price: 999
    },
    {
        itemname: "pycouse",
        price: 1999
    },
    {
        itemname: "mobile dev",
        price: 3999
    },
    {
        itemname: "Data science",
        price: 2999
    },
]

// Here we will add the price of selected courses:

const shoppingCart = course.reduce((acc, item) => (acc + item.price)
, 0)

console.log(shoppingCart);
