const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const themeToggle = document.getElementById("theme-toggle");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav__menu a");

const storedTheme = localStorage.getItem("portfolio-theme");

if (storedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navMenu.classList.toggle("show-menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const nextTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("portfolio-theme", nextTheme);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
});
