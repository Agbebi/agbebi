var hamburger = document.querySelector(".hamburger");
var caret = document.querySelector(".fa-caret-down");
var menu = document.querySelector("ul");

hamburger.addEventListener("click", function(){
    menu.classList.toggle("active");
})
