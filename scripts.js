document.addEventListener('DOMContentLoaded', function () {
  // 1. SWIPER INITIALIZATION (Announcements & Press Releases)
  const annSwiper = new Swiper('.annSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    direction: 'horizontal',
    allowTouchMove: true,
    autoplay: {
          delay: 5000, // 5 seconds per slide
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
    },
    loop: true,
    speed: 1000, // Ajustado a 1 segundo para una transición suave
    
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows (Puntos 1 y 8)
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

  // 2. SUBMENU OFF-SCREEN FIX
  const submenus = document.querySelectorAll('.has-submenu');
  submenus.forEach(item => {
      item.addEventListener('mouseenter', function() {
          const submenu = this.querySelector('.submenu');
          if (!submenu) return;

          submenu.classList.remove('open-left');
          const rect = submenu.getBoundingClientRect();
          const screenWidth = window.innerWidth;

          if (rect.right > screenWidth) {
              submenu.classList.add('open-left');
          }
      });
  });

  // 3. MOBILE MENU & ACCORDION
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function() {
          navLinks.classList.toggle('is-open');
      });
  }

  const submenuTriggers = document.querySelectorAll('.nav-links .dropdown > a, .nav-links .has-submenu > a');
  submenuTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
          if (window.innerWidth < 768) {
              e.preventDefault();
              e.stopPropagation();
              this.parentElement.classList.toggle('open');
          }
      });
  });

  // 4. SEARCH TOGGLE (Migrado del HTML)
  const searchContainer = document.querySelector('.search-container');
  const searchIcon = document.querySelector('.search-btn'); // Selecciona el botón
  const searchInput = document.querySelector('.search-input');
  
  if (searchContainer && searchIcon && searchInput) {
      searchIcon.addEventListener('click', function (e) {
          searchContainer.classList.toggle('active');
          if (searchContainer.classList.contains('active')) {
              searchInput.focus();
          } else {
              searchInput.value = '';
          }
      });
      document.addEventListener('click', function (e) {
          if (!searchContainer.contains(e.target)) {
              searchContainer.classList.remove('active');
              searchInput.value = '';
          }
      });
      searchInput.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') {
              searchContainer.classList.remove('active');
              searchInput.value = '';
          }
      });
  }
});

// 5. HERO CAROUSEL NATIVO (Press Releases - Migrado del HTML)
let currentIdx = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (slides.length === 0) return; // Previene errores si no hay slides
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    if(dots[index]) dots[index].classList.add('active');
    currentIdx = index;
}

function nextSlide() {
    if (slides.length === 0) return;
    let next = (currentIdx + 1) % slides.length;
    showSlide(next);
}

// NUEVO: Función para retroceder con la flecha izquierda
function prevSlide() {
    if (slides.length === 0) return;
    let prev = (currentIdx - 1 + slides.length) % slides.length;
    showSlide(prev);
}

function currentSlide(index) {
    showSlide(index);
    resetTimer();
}

let timer;
if (slides.length > 0) {
    timer = setInterval(nextSlide, 5000);
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
}

// Funcionalidad para el Popup del Video (Homepage)
document.addEventListener('DOMContentLoaded', function() {
    const videoModal = document.getElementById('videoModal');
    const openVideoBtn = document.getElementById('openVideoModal');
    const closeVideoBtn = document.getElementById('closeVideoModal');
    const fullVideoPlayer = document.getElementById('fullVideoPlayer');

    // Asegurarnos de que estamos en la página correcta y existen los elementos
    if (videoModal && openVideoBtn && closeVideoBtn && fullVideoPlayer) {
        
        // Abrir el modal y reproducir
        openVideoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            videoModal.style.display = 'flex';
            fullVideoPlayer.play();
        });

        // Función reutilizable para cerrar y pausar
        function closeAndPauseVideo() {
            videoModal.style.display = 'none';
            fullVideoPlayer.pause();
        }

        // Cerrar al dar clic en la X
        closeVideoBtn.addEventListener('click', closeAndPauseVideo);

        // Cerrar al dar clic en el fondo negro fuera del video
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                closeAndPauseVideo();
            }
        });

        // Cerrar con la tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && videoModal.style.display === 'flex') {
                closeAndPauseVideo();
            }
        });
    }
});

// Funcionalidad para el Popup de la Imagen (Detail Page)
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("customModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("modalCaption");
    const mainImage = document.querySelector('.col-main .main-image-container img');
    const pageTitleElement = document.querySelector('h1');

    if (modal && modalImg && captionText && mainImage && pageTitleElement) {
        const pageTitle = pageTitleElement.innerText;
        mainImage.style.cursor = "zoom-in";
        
        mainImage.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = pageTitle;
        }

        document.querySelector('.modal-close').onclick = function() {
            modal.style.display = "none";
        }

        modal.onclick = function(event) {
            if (event.target === modal || event.target === document.querySelector('.modal-container')) {
                modal.style.display = "none";
            }
        }
        
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && modal.style.display === "flex") {
                modal.style.display = "none";
            }
        });
    }
});