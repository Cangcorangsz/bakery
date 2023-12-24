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

// Scroll Debug
document.addEventListener("DOMContentLoaded", function() {
    const navHeight = document.querySelector('nav').offsetHeight;
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const targetOffset = targetElement.offsetTop - (0.005 * window.innerHeight); // Ubah nilai 0.1 sesuai kebutuhan
          window.scrollTo({
            top: targetOffset - navHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  