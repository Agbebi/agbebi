for (let i = 0; i < document.querySelectorAll("span").length; i++) {
    document.querySelector(".hamburger").addEventListener("click", function () {
        document.querySelectorAll("span")[i].classList.toggle("active");
        document.querySelector("div.menu-bar").classList.toggle("active");
    })
}


