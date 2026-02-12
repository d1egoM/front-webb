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

document.addEventListener('DOMContentLoaded', function () {
    // ... tu código existente de Swiper ...

    const submenus = document.querySelectorAll('.has-submenu');

    submenus.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const submenu = this.querySelector('.submenu');
            if (!submenu) return;

            // Reiniciamos la clase para calcular desde la posición original
            submenu.classList.remove('open-left');

            // Obtenemos las coordenadas del submenú
            const rect = submenu.getBoundingClientRect();
            const screenWidth = window.innerWidth;

            // Si el borde derecho del menú supera el ancho de la pantalla
            if (rect.right > screenWidth) {
                submenu.classList.add('open-left');
            }
        });
    });
});
