// De-structuring
const course = {
    course_name:"Js in hindi",
    price: 999,
    course_Instrctor: 'Hitesh Chaudhary'
} 

/*
    course.course_Instructor -> writing this various times
    makes it hectic to write for this we may follow the code 
    below:
*/

const{course_Instrctor} = course;
//also we may abbreviate it to shorter word:
const{course_Instrctor: instruct} = course
// this is called destrucitng in javascript

// now we may access course_Instructor directly without writing course.course_Instructor
console.log(course_Instrctor);
console.log(instruct);

/*
    When we fetch information via API's it returns us a JSON 
    file, earlier it used to return the XML file,
    and what basically json files are, they are Objects 
    or array of objects with no name | json are basically key-value 
    pair of strings
*/

// {
//     "name" = "Hitesh",
//     "course_name" = "js_in_hindi",
//     "price" = "free"
// }



