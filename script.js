
const navbar = document.querySelector(".navbar");
const mainContainer = document.querySelector(".main-container");

mainContainer.addEventListener("scroll", () => {
    
    if (mainContainer.scrollTop > 0) 
    {
        navbar.style.backgroundColor = "#121212"; // Change the color as desired
    } 
    else 
    {
        navbar.style.backgroundColor = "transparent";
    }
});