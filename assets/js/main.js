/* =========================================================================
   Grâce - Main JavaScript
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Header Scroll Effect ---
  const header = document.querySelector('.header');
  const scrollThreshold = 10;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  });


  // --- 2. Mobile Menu Toggle ---
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isActive = menuBtn.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-active');

      // Prevent body scroll when menu is open
      document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('is-active');
        mobileMenu.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    });
  }


  // --- 3. Scroll Animations (IntersectionObserver) ---
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Run once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach(el => observer.observe(el));


  // --- 4. Floating Elements Visibility ---
  const floatingCta = document.querySelector('.floating-cta');
  const floatingBadge = document.querySelector('.floating-badge');
  const heroSection = document.querySelector('.hero');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Show floating CTA on mobile after scrolling a bit
    if (floatingCta) {
      if (scrollY > 100) {
        floatingCta.classList.add('is-visible');
      } else {
        floatingCta.classList.remove('is-visible');
      }
    }

    // Show floating badge only after scrolling past the hero section
    if (floatingBadge) {
      const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
      if (scrollY > heroHeight - 100) {
        floatingBadge.classList.add('is-visible');
      } else {
        floatingBadge.classList.remove('is-visible');
      }
    }
  });


  // --- 5. Accordion (FAQ / Notes) ---
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(acc => {
    acc.addEventListener('click', () => {
      const content = acc.nextElementSibling;
      acc.classList.toggle('is-active');

      if (acc.classList.contains('is-active')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = 0;
      }
    });
  });

});
