/*
    There are two types of memory "Stack" and "Heap"
*/

let my_name = "hitesh_chaudhary"
let another_name = my_name

another_name = "chai_aur_code"

console.log(my_name);
console.log(another_name);

/*
    Here we can see that the primary data is saved in stack 
    and hence a copy of "my_name" is put in "another_name"
*/

// But now here we are gonna watch out for non - primary data type
// lets see in case of object

let userone = {
    email : "user1",
    upi : "user@ybl"
}

let usertwo = userone;
usertwo.upi = "usertwo@ybl";

console.log(userone.upi);
console.log(usertwo.upi);


/*
    Here data of both "userone" and "usertwo" are pointing to
    same data mentioned in "Heap" therefore any changes in user1 or
    user2 will change the data of user1 and user2.
*/