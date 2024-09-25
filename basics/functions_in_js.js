
function sayMyName(name = "sam"){
    if(!name)
        return;
    return "Hi_"+name;
}

console.log(sayMyName()); 
/* when we pass no value to a valued argument then 
    it shows Undefined and not null,
    now if we provide a parameter to a function at the time
    of function definition then it will become default value
    and hence it is used by the function when no parameter is
    passed
*/

function cartPrice(val1,val2,val3,...num1)
{
    return num1;
}

console.log(cartPrice(100,200,300,1000,2000,3000,4000));

// Similarly objects and arrays may be passed in a function

