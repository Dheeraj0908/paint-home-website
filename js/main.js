/**
 * Paint Home: Color Maze Puzzle - Official Website Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
      menuToggle.textContent = isExpanded ? '☰' : '✕';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all other FAQs
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
          }
        });
        item.classList.toggle('open', !isOpen);
      });
    }
  });

  // Dynamic Copyright Year
  const yearEls = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear;
  });

  // Interactive Sponge Filter or Click Showcase (if present on index.html)
  const spongeCards = document.querySelectorAll('.sponge-card');
  const phoneTilePainted = document.querySelectorAll('.phone-tile.painted, .phone-tile.sponge-pos');

  spongeCards.forEach(card => {
    card.addEventListener('click', () => {
      const color = card.getAttribute('data-color');
      if (color && phoneTilePainted.length > 0) {
        phoneTilePainted.forEach(tile => {
          tile.style.backgroundColor = color;
        });
        // Highlight active card
        spongeCards.forEach(c => c.style.borderColor = 'var(--border)');
        card.style.borderColor = color;
      }
    });
  });
});

