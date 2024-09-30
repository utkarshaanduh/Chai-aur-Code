# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1
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