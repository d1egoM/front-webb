document.addEventListener('DOMContentLoaded', function () {
  const annSwiper = new Swiper('.annSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,

    direction: 'horizontal',
    allowTouchMove: true,
    autoplay: {
          delay: 1000, // 1 seconds per slide
          disableOnInteraction: true,
    },
    loop: true,
    speed: 6000,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 3 }
    }
  });
});
