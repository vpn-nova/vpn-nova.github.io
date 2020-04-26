$(document).ready(function() {
  $(".question").click(function() {
    $(this)
      .toggleClass("in")
      .next()
      .slideToggle();
  });
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

$(".first-point").on("click", function() {
  $(".provider-points__content_first").toggle();
});

$(".second-point").on("click", function() {
  $(".provider-points__content_second").toggle();
});

$(".third-point").on("click", function() {
  $(".provider-points__content_third").toggle();
});

$(".fourth-point").on("click", function() {
  $(".provider-points__content_fourth").toggle();
});

$(".fifth-point").on("click", function() {
  $(".provider-points__content_fifth").toggle();
});

$(".sixth-point").on("click", function() {
  $(".provider-points__content_sixth").toggle();
});

$(".seventh-point").on("click", function() {
  $(".provider-points__content_seventh").toggle();
});

$(".eighth-point").on("click", function() {
  $(".provider-points__content_eighth").toggle();
});

$(".nineth-point").on("click", function() {
  $(".provider-points__content_nineth").toggle();
});

var swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  spaceBetween: 5,
  slidesPerView: 3,
  loop: true,
  stopOnLastSlide: false,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
