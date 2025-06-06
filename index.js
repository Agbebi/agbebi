// Add to Cart buttons configurations
for (let i = 0; i < document.querySelectorAll(".add-to-cart").length; i++) {
    document
        .querySelectorAll(".add-to-cart")
    [i].addEventListener("click", function cartClick() {
        alert("Add me to cart!");
        
    });
}


// Search Buttons Configurations

for (let i = 0; i < document.querySelectorAll(".search").length; i++) {
    document.querySelectorAll(".search")[i].addEventListener("click", function () {
        alert("Please, Search for me!")
    })
};

// Buy Buttons Configurrations

for (let i = 0; i < document.querySelectorAll(".buy-now").length; i++) {
    document.querySelectorAll(".buy-now")[i].addEventListener("click", function searchClick() {
        alert("I want to buy!")
    })
};