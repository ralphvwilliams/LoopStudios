let list = document.getElementById("rightNavbar");
let navbar = document.getElementById("nav");
let menu = document.getElementById("hamburgerMenu");
let closeMenu = document.getElementById("closeBtn");

function myFunction() {
  if (list.style.display === "block") {
    list.style.display = "none";
    navbar.style = "none";
    closeMenu.style.display = "none";
    menu.style.display = "block";
  } else {
    list.style.display = "block";
    menu.style.display = "none";
    closeMenu.style.display = "block";
    navbar.style.background = "#000000";
    navbar.style.display = "block";
    navbar.style.position = "absolute";
    navbar.style.width = "100%";
    navbar.style.left = "0";
    navbar.style.paddingLeft = "20px";
    navbar.style.zIndex = "2";
  }
}
