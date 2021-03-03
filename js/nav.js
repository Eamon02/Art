const navLinks = document.querySelector(".nav-links");

$(".hamburger").on("click", () => {
    navLinks.classList.toggle("open");
});