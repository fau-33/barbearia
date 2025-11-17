const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".header");

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
}

