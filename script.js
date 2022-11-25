const navList = document.querySelectorAll(".navlist");
const menuIcon = document.querySelector(".hamburger .menuIcon");
const closeIcon = document.querySelector(".hamburger .closeIcon");
const nav = document.querySelector(".nav");

navList.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    e.target.lastElementChild.classList.toggle("none");
    e.target.lastElementChild.classList.toggle("active");
  });
});

menuIcon.addEventListener("click", ()=> {
    nav.classList.add("active");
    menuIcon.classList.add("none");
    closeIcon.classList.remove("none");
});

closeIcon.addEventListener("click", ()=> {
    nav.classList.remove("active");
    closeIcon.classList.add("none");
    menuIcon.classList.remove("none");
});