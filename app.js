const colors = ["Green", "Red", "Cyan",
"Yellow","Orange", "Pink", "Purple", "Oops this doesn't display a new color"];

const btn = document.getElementById('btn')
const color = document.querySelector(".color");


btn.addEventListener("click",function (){
    // Need to get random number
    const randomNumber = getRandomNumber();
console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
});

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}