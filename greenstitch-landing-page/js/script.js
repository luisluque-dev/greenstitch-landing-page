// Hamburger Menu
const hamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile");

hamburger.addEventListener("click", () => {
 hamburger.classList.toggle("toggle");
 mobileMenu.classList.toggle("nav-open");
});

// Testimonial slider
$(document).ready(function () {
 $(".testimonial-slider").owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  dots: true,
  dotsEach: true,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  smartSpeed: 800,
  responsive: {
   0: {
    items: 1,
   },
   600: {
    items: 1,
   },
   1000: {
    items: 2,
   },
  },
 });
});
