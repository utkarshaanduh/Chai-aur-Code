// Maps

const map = new Map();
map.set("IN", "India")
map.set("US","United States")
map.set("UK","United Kingdom")

console.log(map);

for (const m of map){
    console.log(m);
}

//maps cannot be iterated using for-in loops

/* This will show the ansewer in following format:
[ 'IN', 'India' ]
[ 'US', 'United States' ]
[ 'UK', 'United Kingdom' ]
i.e. in array form therefore we will use another format
for destruturing of the output
*/

for(const [key, value] of map){
    console.log(key, value);
}
/* 
This will produce result as mentioned below:
IN India
US United States
UK United Kingdom
*/

const myObject = {
    "game1": "NFS",
    "game2": "Spiderman"
}

// for(const iter of myObject){
//     console.log(iter);
// }

/* 
 This will throw error as object aren't iterarted by using 
 general looping. For looping in Object we will use for in loop: 
*/

for (const key in myObject){
    //console.log(myObject[key]); // OR
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr = ["java","ruby","cpp","python"];
for(const m in arr)
{
    console.log(arr[m]);
}