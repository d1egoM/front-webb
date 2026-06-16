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

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // This toggles the .is-open class, which our CSS uses to show/hide the menu.
            navLinks.classList.toggle('is-open');
        });
    }

    // Mobile submenu accordion logic
    const submenuTriggers = document.querySelectorAll('.nav-links .dropdown > a, .nav-links .has-submenu > a');

    submenuTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            // Only apply this logic on mobile screen sizes where hover is not ideal
            if (window.innerWidth < 768) {
                e.preventDefault();
                e.stopPropagation();
                this.parentElement.classList.toggle('open');
            }
        });
    });
});
