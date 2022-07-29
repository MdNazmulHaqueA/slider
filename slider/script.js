const circle = document.getElementById("circle");
const carouselContent = document.getElementById("carouselContent");

function displayOrHideCircle(property) {
  circle.style.display = property;
}
displayOrHideCircle("none");

// mouseover functionality 
carouselContent.addEventListener("mouseover", function () {
  carouselContent.classList.add("relative");
  circle.classList.add("absolute");
  displayOrHideCircle("block");
});
// mouse out functionality
carouselContent.addEventListener("mouseout", function () {
  carouselContent.classList.remove("relative");
  circle.classList.remove("absolute");
  displayOrHideCircle("none");
});
