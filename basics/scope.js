/*
    scope ki kahaani shuru hoti hai let, var aur const se
*/

/*
    curly braces are called scope in terms of functions 
    and conditional statements

    The problem with var is that it dosen't follow the 
    scope it still acts as a global variable

    scopes in terms of coding environment is different 
    from the scope for windows
*/

// Nested scope and Hoisting

function one()
{
    const username = "Hitesh"

    function two()
    {
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);

    two()
}

one()
// scopes are like ice-cream child may take it from parent but not vice-versa

// functions may be made as expressions as variable holds the function:
const ans = function(num1) {
    return num1 + 1;
}

console.log(ans(5));

// In case of expressions the expression may only work if
// it is called after the declaration of the expression
// this is called hoisting

