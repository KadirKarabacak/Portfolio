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

// Projects Observer
// const projects = document.querySelectorAll('.projects__row')

// const revealProjects = function(entries, observer){
//     const [entry] = entries
//     if(!entry.isIntersecting) return;
//     entry.target.classList.remove('section--hidden')
//     observer.unobserve(entry.target)
// }

// const projectsObserver = new IntersectionObserver(revealProjects, {
//     root: null,
//     threshold: 0.1,
// })

// projects.forEach(project=> {
//     projectsObserver.observe(project)
//     project.classList.add('section--hidden')
// })
