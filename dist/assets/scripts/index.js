new Swiper(".tags-swiper", {
  loop: true,
  speed: 5000,
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 0,
  },
});

new Swiper(".houses-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 4,
});

new Swiper(".testimonial-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".testimonial-slider-next",
    prevEl: ".swiper-button-prev",
  },
});
