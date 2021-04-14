const slideShow = document.getElementById("slideShow");
const slides = slideShow.getElementsByTagName("video");

const slideShowText = document.getElementById("slideShowText");
const slidesText = slideShowText.getElementsByTagName("div");
var index = 0;

function nextSlide() {
  slides[index].classList.remove("active");
  slidesText[index].classList.remove("active");
  index = (index + 1) % slides.length;
  index = (index + 1) % slidesText.length;
  slides[index].classList.add("active");
  slidesText[index].classList.add("active");
}

function prevSlide() {
  slides[index].classList.remove("active");
  slidesText[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  index = (index - 1 + slidesText.length) % slidesText.length;
  slides[index].classList.add("active");
  slidesText[index].classList.add("active");
}

function toggleMenu() {
  const menuIcon = document.querySelector(".menuIcon");
  const navbar = document.getElementById("navbar");
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
}
