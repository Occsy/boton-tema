let circle = document.querySelector("#circle");
let container = document.querySelector(".container");
let body = document.querySelector("body");
let day = document.querySelector('#day')
circle.addEventListener("click", ()=>{
    circle.classList.toggle("whitemode");
    circle.setAttribute("style", "transition: transform 1s ease;");
    container.classList.toggle("borders");
    body.classList.toggle("back-ground");
    body.setAttribute("style","transition: background 1s ease")
    day.setAttribute("style", "opacity: 100%;");
    day.setAttribute("style","transition: opacity 1s ease")

});

