// .map in javascript

const nums = [1,2,3,4,5,6,7,8,9,10]

const newnums = nums.map((nm)=> {
    return nm + 10;
});

console.log(newnums);

/* 
Chaining in javascript:
when we use various functions like ".map",".forEach", ".filter"
*/

const newNums = nums
                    .map((n) => n*10)
                    .map((n) => n+1)
                    .filter((n)=> n>=20)

console.log(newNums);


