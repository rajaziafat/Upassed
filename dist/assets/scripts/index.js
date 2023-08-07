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
  spaceBetween: 4,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2.5,
    },
  },
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

new Swiper(".hero-swiper", {
  loop: true,
  speed: 5000,
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    1024: {
      direction: "vertical",
    },
  },
});

new Swiper(".hero-swiper-2", {
  loop: true,

  speed: 5000,
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    0: {
      reverseDirection: true,
      speed: 9000,
    },
    1024: {
      direction: "vertical",
    },
  },
});
