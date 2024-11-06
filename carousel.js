const carousel = document.getElementById("carousel");
const scrollBar = document.getElementById("scrollBar");
const totalImages = 5;
let currentImage = 0;

function scrollToImage(index) {
  const position = index * 745;
  carousel.style.transform = `translateY(-${position}px)`;
}

scrollBar.addEventListener("input", (event) => {
  currentImage = parseInt(event.target.value);
  scrollToImage(currentImage);
});

function autoScroll() {
  currentImage = (currentImage + 1) % totalImages;
  scrollToImage(currentImage);
  scrollBar.value = currentImage;
}
setInterval(autoScroll, 4000);
