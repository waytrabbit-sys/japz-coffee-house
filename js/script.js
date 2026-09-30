document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------
     Sticky header on scroll
  --------------------------------------- */
  const header = document.getElementById('siteHeader');
  const toggleHeaderState = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  toggleHeaderState();
  window.addEventListener('scroll', toggleHeaderState);

  /* ---------------------------------------
     Mobile hamburger menu
  --------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');

  const closeMenu = () => {
    hamburger.classList.remove('open');
    mainNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  /* ---------------------------------------
     Smooth scroll + close mobile menu on click
  --------------------------------------- */
  document.querySelectorAll('.nav-link, .scroll-cue').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      closeMenu();
    });
  });

  /* ---------------------------------------
     Fade-in on scroll (IntersectionObserver)
  --------------------------------------- */
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    fadeEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: reveal everything immediately
    fadeEls.forEach((el) => el.classList.add('visible'));
  }

  /* ---------------------------------------
     Footer year
  --------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
/* HERO SLIDESHOW */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

},2500);