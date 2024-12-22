bottomPriceMenu = document.getElementById("bottomPriceMenu");

var myScrollFunc = function () {
  var staticHeight = document.body.scrollHeight;
  var dinamicHeight = window.scrollY;
  var minHeight = (staticHeight / 100) * 10;
  var maxHeight = (staticHeight / 100) * 70;

  if (dinamicHeight > minHeight && dinamicHeight < maxHeight) {
    bottomPriceMenu.classList.remove("hide");
  } else {
    bottomPriceMenu.classList.add("hide");
  }
};

window.addEventListener("scroll", myScrollFunc);
