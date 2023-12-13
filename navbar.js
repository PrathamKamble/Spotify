// alert("Welcome User🙋‍♂️!\nI have listed 20 songs in this replica.\nPlease click on the 'Liked Songs' playlist to enjoy the added songs & have full control over music 🎶");

const modal = document.getElementById('popup-modal');
const container = document.querySelector('.my-container'); 
const close_modal = document.getElementById('close-btn'); 

window.onload = () => {
    container.style.opacity = "0.2";
    modal.style.top = "20%";
    
    
    close_modal.addEventListener('click', () => {
        modal.style.top = "-270px";
        container.style.opacity = "1";
    });
    
    document.getElementById('body').addEventListener('click', () => {
        modal.style.top = "-270px";
        container.style.opacity = "1";
    })
}

const navbar = document.querySelector(".navbar");

const mainContainer = document.querySelector(".main-container");

mainContainer.addEventListener("scroll", () => {

    if (mainContainer.scrollTop > 0) {
        console.log('hello');
        navbar.style.backgroundColor = "#121212"; // Change the color as desired
    }
    else {
        navbar.style.backgroundColor = "transparent";
    }
});

