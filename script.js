const navList = document.querySelectorAll(".navlist");
const subHeaders = document.querySelectorAll(".navlist .list-header .sub-list");
const menuIcon = document.querySelector(".hamburger .menuIcon");
const closeIcon = document.querySelector(".hamburger .closeIcon");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");



navList.forEach((listItem) => {
  listItem.addEventListener("click", (event) => {
    subHeaders.forEach((header) => {
      header.classList.remove("active")
      header.classList.add("none")
    });
    collapseNav(event)
  });
});

const collapseNav = (event) => {
  const currentItem = event.target.lastElementChild;
  if(currentItem){
    currentItem.classList.toggle("none")
    currentItem.classList.toggle("active");
  }
}

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