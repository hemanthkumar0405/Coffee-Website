const menuOpenButton = document.querySelector("#menu-open-button");
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

const menuCloseButton = document.querySelector("#menu-close-button");
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

const navLinks = document.querySelectorAll(".nav-menu .nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
})