// ===================================================
// JavaScript for Odoo Challenge Mock-up
// Handles interactive features and animations
// ===================================================

document.addEventListener('DOMContentLoaded', function() {
  // === Award Box Click Handler ===
  const awardBoxes = document.querySelectorAll('.award-box');
  awardBoxes.forEach(box => {
    box.setAttribute('role', 'button');
    box.setAttribute('aria-pressed', 'false');

    box.addEventListener('click', function(e) {
      e.preventDefault();
      awardBoxes.forEach(item => item.classList.remove('is-active'));
      awardBoxes.forEach(item => item.setAttribute('aria-pressed', 'false'));
      this.classList.add('is-active');
      this.setAttribute('aria-pressed', 'true');
      console.log('Award box clicked:', this.dataset.award || this.querySelector('h6').textContent);
    });
  });

  // === Smooth Scroll for Navigation Links ===
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // === Accordion Enhancement ===
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log('Accordion item clicked:', this.textContent.trim());
    });
  });

  // === Add animation on scroll (optional enhancement) ===
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe sections for animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });

  // === Close mobile menu on link click ===
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.querySelector('#navbarNav');
  
  if (navbarToggler && navbarNav) {
    navbarNav.querySelectorAll('a.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navbarToggler.click();
      });
    });
  }

  console.log('Odoo Challenge Mock-up initialized successfully!');
});

// === Utility function for adding data attributes ===
function addDataAttribute(selector, attrName, value) {
  document.querySelectorAll(selector).forEach(el => {
    el.setAttribute(`data-${attrName}`, value);
  });
}

// === Handle button clicks ===
function handleButtonClick(event) {
  const button = event.target.closest('.btn');
  if (button) {
    console.log('Button clicked:', button.textContent.trim());
    // Add button click handling logic here
  }
}

document.addEventListener('click', handleButtonClick);
