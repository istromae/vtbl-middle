import Swiper, { Keyboard, Navigation, Pagination, Thumbs } from "swiper";

if (document.querySelector(".slider-top-result-form-premium")) {
  const premiumSlider = new Swiper(".slider-top-result-form-premium", {
    modules: [Keyboard, Navigation, Pagination, Thumbs],
    navigation: {
      nextEl: ".arrows-slider-top-result-form-premium__next",
      prevEl: ".arrows-slider-top-result-form-premium__prev",
    },
    pagination: {
      el: ".slider-top-result-form-premium__pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: false,
    },
    thumbs: {
      swiper: {
        el: ".thumb-top-result-form-premium",
        slidesPerView: 6,
        spaceBetween: 26,
      },
    },
    loop: true,
  });
}
