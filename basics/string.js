/*
    Never concatenate a string using "+" sign insted use the
    format below
*/

const name = "Hitesh"
const repocount = 50
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// we may declare a string using the method below:

const new_name = new String("Hitesh");
console.log(`Hello my name is ${new_name} and my repo count is ${repocount}`)

console.log(new_name[1]);
console.log(new_name.toLocaleUpperCase());
console.log(new_name.toUpperCase());
console.log(new_name);



