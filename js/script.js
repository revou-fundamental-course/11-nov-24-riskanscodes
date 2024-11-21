var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("article");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
}
function autoSlide() {
  plusDivs(1);
  setTimeout(autoSlide, 3000);
}
autoSlide();

document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  nameInput.required = true;
  emailInput.required = true;
});
