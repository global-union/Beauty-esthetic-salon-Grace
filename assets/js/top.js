document.addEventListener('DOMContentLoaded', () => {

    // --- Hero Slider ---
    const heroSwiper = new Swiper('.hero-slider', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        allowTouchMove: false, // prohibit manual swiping for hero
    });

    // --- Result Slider ---
    const resultSwiper = new Swiper('.result-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

});
