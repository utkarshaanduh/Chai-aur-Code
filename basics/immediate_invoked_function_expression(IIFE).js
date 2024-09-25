/* Sometimes there is pollution of the global scope that 
isn't great for our function then we use iife for immediate
execution of our fuction for that we will bind our function
in a paranthesis and call it by using another paranthesis 
as generally done in ordinary functions */

(function chai() // named iffe
{
    console.log(`chai ke liye to time he time hai`);
    
})();

/* If we donot put ; at the end then it will not know when
to end and it will throw error if anything after it has to
get executed  */


((name)=>{ //unnamed iife
    console.log(`DB Connected for ${name}`);  
})("Hitesh");