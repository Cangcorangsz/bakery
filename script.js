const navMenu = document.getElementById("navMenu");
const navMenuButton = document.getElementById("navMenuButton");

navMenuButton.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navMenuButton.classList.add("fa-bars");
        navMenuButton.classList.remove("fa-xmark");
    } else {
        navMenuButton.classList.add("fa-xmark");
        navMenuButton.classList.remove("fa-bars");
        navMenu.classList.add("active");
    }
})