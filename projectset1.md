# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 (Change bg by clicking the colour)
```javascript
console.log("Hitesh)
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener("click", (e)=>{
    console.log(e);
    console.log(e.target);
    switch(e.target.id)
    {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor=e.target.id;
        break;
      case "blue":
        body.style.backgroundColor=e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor=e.target.id;
        break; 
      case "purple":
        body.style.backgroundColor=e.target.id;
        break; 
    }
  })
})

```
## project 2 (bmi calculator)
```javascript
const form = document.querySelector("form")
document.querySelector("label") 
form.addEventListener("submit",((e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if(height==="" || height<=0 || isNaN(height))
  {
    results.innerHTML = `Please enter a valid height ${height}`;
  }
  else if(weight==="" || weight<=0 || isNaN(weight))
  {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  }
  else
  {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    // display in result
    results.innerHTML = `<span> ${bmi} </span>`
    if(bmi < 18.6){
      results.innerHeight = `Under Weight` 
    }else if(bmi>= 18.6 && bmi<= 24.9){
      results.innerHTML = `Fit ${bmi}`
    }else{
      results.innerHTML = 'Over Weight ${bmi}'
    }
  }
}));
```
## project 3 (digital clock using setInterval())
```javscript

const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString()); this was to check the time in console that if the thing is working.
  clock.innerHTML = date.toLocaleTimeString(); 
}, 1000);

```