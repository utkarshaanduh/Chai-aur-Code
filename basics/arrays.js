/* 
    Arrays are objects in js they are dynamic in nature, i.e. their
    size may be changed any point of time in a code.

    Arrays may be of Numbers, string, and other values or combination
    of all these datatypes

*/
const arr = [1,2,3,4,5]
const my_arr = new Array(1,2,3,4,5,6,7,8,9)

// Array methods
// arr.pop();
// arr.push(6);

// console.log(arr);

//arr.unshift("shaktiman");
//console.log(arr);

// indexOf(val), val > size of array will always throw -1
// as no value to show
// example: 

//console.log(arr.indexOf(1352));

//const newa = arr.join() 

//.join will convert the arr to string
// and will differentiate two elements via the char inserted in ,
// join("char...lets say '/")


//console.log(newa);

//slice and splice

// console.log("a", my_arr)

// const b = my_arr.slice(1,3);
// console.log(b); // output: [2,3]
// console.log(my_arr); // output: [1,2,3,4,5,6,7,8,9]

// const c = my_arr.splice(1,3); 
// console.log(c); // output: [2,3,4]
// console.log(my_arr); //output: [1,5,6,7,8,9]

/* 
    From here we come to know that slice will not make changes to 
    the original array but splice will modify the array
*/

const marvel = ["spiderman", "hulk", "ironman"]
const dc = ["batman", "greenlantern", "wonderwomen"]
const vill = ["joker", "catgirl", "thanos"]

// console.log(marvel.concat(dc))

// marvel.push(dc)
// console.log(marvel); // this will push dc array in to the marvel
//array and not the elements of the dc array 
//therefore use contcat for merging two arrays

// For merging more than 2 arrays we will use the "spread" opereator:

const all = [...marvel, ...dc, ...vill]
console.log(all);

// we may flatten multidimension array by using flat
const another_arr = [1,2,3,[2,3,5,7,[9,7]],4,5,[7,4,5]];
console.log(another_arr.flat(Infinity));// here infinity is the 
//depth till which we will flatten the array

// converting a string to an array

//console.log(Array.from("Hello World"))

//console.log(Array.from({name: "Hello World"})) // as here we are passing 
//an object of key-value pair in the Arrray.from("")it has no
// idea for what it should work, for key or value therefore empty array is returned

// Read more about "isArray", "from", and "of"...

//console.log(Array.isArray("Hello World"))
