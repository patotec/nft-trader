const hide = document.querySelector(".hide");
const button = document.querySelector(".thismenu");

function mobileMenu() {
  var x = document.getElementById("items");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}