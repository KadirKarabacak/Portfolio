"use strict";

// Section Revealing by Intersection Observer
const sections = document.querySelectorAll(".reveal, .projects__row");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  entry.target.classList.remove("project--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.12,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  if (section.classList.contains("projects__row"))
    section.classList.add("project--hidden");
  if (section.classList.contains("reveal"))
    section.classList.add("section--hidden");
});


// HAMBURGER MENU :

//   header__sm-menu--active
const containerHead = document.querySelector(".header__sm-menu");

// d-none [Display : none]
const menuOpen = document.querySelector(".header__main-ham-menu");
const menuClose = document.querySelector(".header__main-ham-menu-close");

const controlHamburger = function () {
  [menuClose, menuOpen].forEach((menu) => {
    menu.addEventListener("click", function () {
      console.log("click");

      containerHead.classList.toggle("header__sm-menu--active");
      menuOpen.classList.toggle("d-none");
      menuClose.classList.toggle("d-none");
    });
  });
};
controlHamburger()
// menuOpen.addEventListener("click", function () {

// } else {
//   containerHead.classList.add("header__sm-menu--active");
//   menuClose.classList.add("d-none");
//   menuOpen.classList.remove('d-none')
// }
