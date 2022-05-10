const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

const header = document.getElementsByTagName("header")
console.log(header)

menu.addEventListener("click", toggleMenu)
close.addEventListener("click", toggleMenu)

function toggleMenu() {
  header[0].classList.toggle("open")
}